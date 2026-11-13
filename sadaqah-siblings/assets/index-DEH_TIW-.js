(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="170",Qu=0,nl=1,tf=2,Lh=1,Ih=2,Nn=3,oi=0,je=1,Ye=2,ii=0,ss=1,qr=2,il=3,sl=4,ef=5,vi=100,nf=101,sf=102,rf=103,of=104,af=200,cf=201,lf=202,hf=203,fa=204,da=205,uf=206,ff=207,df=208,pf=209,mf=210,gf=211,xf=212,_f=213,vf=214,pa=0,ma=1,ga=2,cs=3,xa=4,_a=5,va=6,Ma=7,Dh=0,Mf=1,yf=2,si=0,Sf=1,bf=2,wf=3,Ef=4,Tf=5,Af=6,Cf=7,Uh=300,ls=301,hs=302,ya=303,Sa=304,uo=306,ba=1e3,yi=1001,wa=1002,Ke=1003,Rf=1004,lr=1005,yn=1006,wo=1007,Si=1008,Hn=1009,Nh=1010,zh=1011,Ws=1012,uc=1013,Ti=1014,Sn=1015,tr=1016,fc=1017,dc=1018,us=1020,Fh=35902,Oh=1021,Bh=1022,xn=1023,kh=1024,Hh=1025,rs=1026,fs=1027,fo=1028,pc=1029,Gh=1030,mc=1031,gc=1033,kr=33776,Hr=33777,Gr=33778,Vr=33779,Ea=35840,Ta=35841,Aa=35842,Ca=35843,Ra=36196,Pa=37492,La=37496,Ia=37808,Da=37809,Ua=37810,Na=37811,za=37812,Fa=37813,Oa=37814,Ba=37815,ka=37816,Ha=37817,Ga=37818,Va=37819,Wa=37820,Xa=37821,Wr=36492,$a=36494,qa=36495,Vh=36283,Ya=36284,ja=36285,Za=36286,Pf=3200,Lf=3201,Wh=0,If=1,ei="",qe="srgb",xs="srgb-linear",po="linear",pe="srgb",Ni=7680,rl=519,Df=512,Uf=513,Nf=514,Xh=515,zf=516,Ff=517,Of=518,Bf=519,Ja=35044,ol="300 es",Fn=2e3,Yr=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const Bs=Math.PI/180,Xs=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function kf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Hf(i,t,e){return i!==t?(e-i)/(t-i):0}function ks(i,t,e){return(1-e)*i+e*t}function Gf(i,t,e,n){return ks(i,t,1-Math.exp(-e*n))}function Vf(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function Wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $f(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qf(i,t){return i+Math.random()*(t-i)}function Yf(i){return i*(.5-Math.random())}function jf(i){i!==void 0&&(al=i);let t=al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zf(i){return i*Bs}function Jf(i){return i*Xs}function Kf(i){return(i&i-1)===0&&i!==0}function Qf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ed(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*l,c*u,c*f,a*h);break;case"YZY":i.set(c*f,a*l,c*u,a*h);break;case"ZXZ":i.set(c*u,c*f,a*l,a*h);break;case"XZX":i.set(a*l,c*g,c*d,a*h);break;case"YXY":i.set(c*d,a*l,c*g,a*h);break;case"ZYZ":i.set(c*g,c*d,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nd={DEG2RAD:Bs,RAD2DEG:Xs,generateUUID:wn,clamp:Oe,euclideanModulo:xc,mapLinear:kf,inverseLerp:Hf,lerp:ks,damp:Gf,pingpong:Vf,smoothstep:Wf,smootherstep:Xf,randInt:$f,randFloat:qf,randFloatSpread:Yf,seededRandom:jf,degToRad:Zf,radToDeg:Jf,isPowerOfTwo:Kf,ceilPowerOfTwo:Qf,floorPowerOfTwo:td,setQuaternionFromProperEuler:ed,normalize:fe,denormalize:gn};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,c,h){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],M=s[4],_=s[7],U=s[2],T=s[5],A=s[8];return r[0]=o*x+a*v+c*U,r[3]=o*m+a*M+c*T,r[6]=o*p+a*_+c*A,r[1]=h*x+l*v+u*U,r[4]=h*m+l*M+u*T,r[7]=h*p+l*_+u*A,r[2]=f*x+d*v+g*U,r[5]=f*m+d*M+g*T,r[8]=f*p+d*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+s*r*h-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=l*o-a*h,f=a*c-l*r,d=h*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*h-l*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(l*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new jt;function $h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){const i=jr("canvas");return i.style.display="block",i}const cl={};function Fs(i){i in cl||(cl[i]=!0,console.warn(i))}function sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function od(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?po:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ll=[.64,.33,.3,.6,.15,.06],hl=[.2126,.7152,.0722],ul=[.3127,.329],fl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[xs]:{primaries:ll,whitePoint:ul,transfer:po,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:hl,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:ll,whitePoint:ul,transfer:pe,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:hl,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});let zi;class ad{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=jr("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cd=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(To(s[o].image)):r.push(To(s[o]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ld=0;class Ve extends _s{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=yi,s=yi,r=yn,o=Si,a=xn,c=Hn,h=Ve.DEFAULT_ANISOTROPY,l=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=wn(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Uh;Ve.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],l=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,_=(d+1)/2,U=(p+1)/2,T=(l+f)/4,A=(u+x)/4,I=(g+m)/4;return M>_&&M>U?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=A/n):_>U?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=I/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=A/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-l)*(f-l));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-l)/v,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends hd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yh extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ud extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||h!==d||l!==g){let m=1-a;const p=c*f+h*d+l*g+u*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const U=Math.sqrt(M),T=Math.atan2(U,p*v);m=Math.sin(m*T)/U,a=Math.sin(a*T)/U}const _=a*v;if(c=c*m+f*_,h=h*m+d*_,l=l*m+g*_,u=u*m+x*_,m===1-a){const U=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=U,h*=U,l*=U,u*=U}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+l*u+c*d-h*f,t[e+1]=c*g+l*f+h*u-a*d,t[e+2]=h*g+l*d+a*f-c*u,t[e+3]=l*g-a*u-c*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*l*u+h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u-f*d*g;break;case"YXZ":this._x=f*l*u+h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u+f*d*g;break;case"ZXY":this._x=f*l*u-h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u-f*d*g;break;case"ZYX":this._x=f*l*u-h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u+f*d*g;break;case"YZX":this._x=f*l*u+h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u-f*d*g;break;case"XZY":this._x=f*l*u-h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-h)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(l-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+h)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-h)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+l)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+h)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+s*h-r*c,this._y=s*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-s*a,this._w=o*l-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-e)*l)/h,f=Math.sin(e*l)/h;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),l=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*h+o*u-a*l,this.y=n+c*l+a*h-r*u,this.z=s+c*u+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new P,pl=new er;class ci{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),ur.subVectors(this.max,Es),Fi.subVectors(t.a,Es),Oi.subVectors(t.b,Es),Bi.subVectors(t.c,Es),qn.subVectors(Oi,Fi),Yn.subVectors(Bi,Oi),hi.subVectors(Fi,Bi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-hi.z,hi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,hi.z,0,-hi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-hi.y,hi.x,0];return!Co(e,Fi,Oi,Bi,ur)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,Fi,Oi,Bi,ur))?!1:(fr.crossVectors(qn,Yn),e=[fr.x,fr.y,fr.z],Co(e,Fi,Oi,Bi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,hr=new ci,Fi=new P,Oi=new P,Bi=new P,qn=new P,Yn=new P,hi=new P,Es=new P,ur=new P,fr=new P,ui=new P;function Co(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),h=e.dot(ui),l=n.dot(ui);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const fd=new ci,Ts=new P,Ro=new P;class Ri{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Ro)),this.expandByPoint(Ts.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new P,Po=new P,dr=new P,jn=new P,Lo=new P,pr=new P,Io=new P;class jh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Po);const r=t.distanceTo(e)*.5,o=-this.direction.dot(dr),a=jn.dot(this.direction),c=-jn.dot(dr),h=jn.lengthSq(),l=Math.abs(1-o*o);let u,f,d,g;if(l>0)if(u=o*c-a,f=o*a-c,g=r*l,u>=0)if(f>=-g)if(f<=g){const x=1/l;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+h}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+h;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+h):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Po).addScaledVector(dr,f),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),l>=0?(r=(t.min.y-f.y)*l,o=(t.max.y-f.y)*l):(r=(t.max.y-f.y)*l,o=(t.min.y-f.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Lo.subVectors(e,t),pr.subVectors(n,t),Io.crossVectors(Lo,pr);let o=this.direction.dot(Io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const c=a*this.direction.dot(pr.crossVectors(jn,pr));if(c<0)return null;const h=a*this.direction.dot(Lo.cross(jn));if(h<0||c+h>o)return null;const l=-a*jn.dot(Io);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,r,o,a,c,h,l,u,f,d,g,x,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,l,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,c,h,l,u,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*l,d=o*u,g=a*l,x=a*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=d+g*h,e[5]=f-x*h,e[9]=-a*c,e[2]=x-f*h,e[6]=g+d*h,e[10]=o*c}else if(t.order==="YXZ"){const f=c*l,d=c*u,g=h*l,x=h*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*h,e[1]=o*u,e[5]=o*l,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*l,d=c*u,g=h*l,x=h*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*l,e[9]=x-f*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*l,d=o*u,g=a*l,x=a*u;e[0]=c*l,e[4]=g*h-d,e[8]=f*h+x,e[1]=c*u,e[5]=x*h+f,e[9]=d*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,d=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=f*u+x,e[5]=o*l,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*l,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,pd)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Zn.crossVectors(n,tn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Zn.crossVectors(n,tn)),Zn.normalize(),mr.crossVectors(tn,Zn),s[0]=Zn.x,s[4]=mr.x,s[8]=tn.x,s[1]=Zn.y,s[5]=mr.y,s[9]=tn.y,s[2]=Zn.z,s[6]=mr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],M=n[7],_=n[11],U=n[15],T=s[0],A=s[4],I=s[8],w=s[12],S=s[1],L=s[5],R=s[9],D=s[13],k=s[2],B=s[6],H=s[10],Y=s[14],X=s[3],lt=s[7],_t=s[11],Et=s[15];return r[0]=o*T+a*S+c*k+h*X,r[4]=o*A+a*L+c*B+h*lt,r[8]=o*I+a*R+c*H+h*_t,r[12]=o*w+a*D+c*Y+h*Et,r[1]=l*T+u*S+f*k+d*X,r[5]=l*A+u*L+f*B+d*lt,r[9]=l*I+u*R+f*H+d*_t,r[13]=l*w+u*D+f*Y+d*Et,r[2]=g*T+x*S+m*k+p*X,r[6]=g*A+x*L+m*B+p*lt,r[10]=g*I+x*R+m*H+p*_t,r[14]=g*w+x*D+m*Y+p*Et,r[3]=v*T+M*S+_*k+U*X,r[7]=v*A+M*L+_*B+U*lt,r[11]=v*I+M*R+_*H+U*_t,r[15]=v*w+M*D+_*Y+U*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*h*u-r*a*f+n*h*f+s*a*d-n*c*d)+x*(+e*c*d-e*h*f+r*o*f-s*o*d+s*h*l-r*c*l)+m*(+e*h*u-e*a*d-r*o*u+n*o*d+r*a*l-n*h*l)+p*(-s*a*l-e*c*u+e*a*f+s*o*u-n*o*f+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=u*m*h-x*f*h+x*c*d-a*m*d-u*c*p+a*f*p,M=g*f*h-l*m*h-g*c*d+o*m*d+l*c*p-o*f*p,_=l*x*h-g*u*h+g*a*d-o*x*d-l*a*p+o*u*p,U=g*u*c-l*x*c-g*a*f+o*x*f+l*a*m-o*u*m,T=e*v+n*M+s*_+r*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*A,t[2]=(a*m*r-x*c*r+x*s*h-n*m*h-a*s*p+n*c*p)*A,t[3]=(u*c*r-a*f*r-u*s*h+n*f*h+a*s*d-n*c*d)*A,t[4]=M*A,t[5]=(l*m*r-g*f*r+g*s*d-e*m*d-l*s*p+e*f*p)*A,t[6]=(g*c*r-o*m*r-g*s*h+e*m*h+o*s*p-e*c*p)*A,t[7]=(o*f*r-l*c*r+l*s*h-e*f*h-o*s*d+e*c*d)*A,t[8]=_*A,t[9]=(g*u*r-l*x*r-g*n*d+e*x*d+l*n*p-e*u*p)*A,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*A,t[11]=(l*a*r-o*u*r-l*n*h+e*u*h+o*n*d-e*a*d)*A,t[12]=U*A,t[13]=(l*x*s-g*u*s+g*n*f-e*x*f-l*n*m+e*u*m)*A,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-l*a*s+l*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+n,l*c-s*o,0,h*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,u=a+a,f=r*h,d=r*l,g=r*u,x=o*l,m=o*u,p=a*u,v=c*h,M=c*l,_=c*u,U=n.x,T=n.y,A=n.z;return s[0]=(1-(x+p))*U,s[1]=(d+_)*U,s[2]=(g-M)*U,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+M)*A,s[9]=(m-v)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const h=1/r,l=1/o,u=1/a;return pn.elements[0]*=h,pn.elements[1]*=h,pn.elements[2]*=h,pn.elements[4]*=l,pn.elements[5]*=l,pn.elements[6]*=l,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Fn){const c=this.elements,h=2*r/(e-t),l=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Fn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fn){const c=this.elements,h=1/(e-t),l=1/(n-s),u=1/(o-r),f=(e+t)*h,d=(n+s)*l;let g,x;if(a===Fn)g=(o+r)*u,x=-2*u;else if(a===Yr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new P,pn=new de,dd=new P(0,0,0),pd=new P(1,1,1),Zn=new P,mr=new P,tn=new P,ml=new de,gl=new er;class Gn{constructor(t=0,e=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],l=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let md=0;const xl=new P,Hi=new er,In=new de,gr=new P,As=new P,gd=new P,xd=new er,_l=new P(1,0,0),vl=new P(0,1,0),Ml=new P(0,0,1),yl={type:"added"},_d={type:"removed"},Gi={type:"childadded",child:null},Do={type:"childremoved",child:null};class Le extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new Gn,n=new er,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(As,gr,this.up):In.lookAt(gr,As,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(In),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yl),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_d),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yl),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,Dn=new P,Uo=new P,Un=new P,Vi=new P,Wi=new P,Sl=new P,No=new P,zo=new P,Fo=new P,Oo=new Ae,Bo=new Ae,ko=new Ae;class ln{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Dn.subVectors(n,e),Uo.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Dn),c=mn.dot(Uo),h=Dn.dot(Dn),l=Dn.dot(Uo),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(h*c-a*l)*f,g=(o*l-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Oo.setScalar(0),Bo.setScalar(0),ko.setScalar(0),Oo.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),ko.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Oo,r.x),o.addScaledVector(Bo,r.y),o.addScaledVector(ko,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Dn.subVectors(t,e),mn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),mn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,n),Wi.subVectors(r,n),No.subVectors(t,n);const c=Vi.dot(No),h=Wi.dot(No);if(c<=0&&h<=0)return e.copy(n);zo.subVectors(t,s);const l=Vi.dot(zo),u=Wi.dot(zo);if(l>=0&&u<=l)return e.copy(s);const f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(Vi,o);Fo.subVectors(t,r);const d=Vi.dot(Fo),g=Wi.dot(Fo);if(g>=0&&d<=g)return e.copy(r);const x=d*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Wi,a);const m=l*g-d*u;if(m<=0&&u-l>=0&&d-g>=0)return Sl.subVectors(r,s),a=(u-l)/(u-l+(d-g)),e.copy(s).addScaledVector(Sl,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Vi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=xc(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ho(o,r,t+1/3),this.g=Ho(o,r,t),this.b=Ho(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return re.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Oe(Ge.r*255,0,255))*65536+Math.round(Oe(Ge.g*255,0,255))*256+Math.round(Oe(Ge.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,h;const l=(a+o)/2;if(a===o)c=0,h=0;else{const u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=qe){re.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(xr);const n=ks(Jn.h,xr.h,e),s=ks(Jn.s,xr.s,e),r=ks(Jn.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Ot;Ot.NAMES=Jh;let vd=0;class Pi extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=wn(),this.name="",this.blending=ss,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=da,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mo extends Pi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new P,_r=new nt;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class Kh extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qh extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Md=0;const cn=new de,Go=new Le,Xi=new P,en=new ci,Cs=new ci,Ue=new P;class Re extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?Qh:Kh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(en.min,Cs.min),en.expandByPoint(Ue),Ue.addVectors(en.max,Cs.max),en.expandByPoint(Ue)):(en.expandByPoint(Cs.min),en.expandByPoint(Cs.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Ue.fromBufferAttribute(a,h),c&&(Xi.fromBufferAttribute(t,h),Ue.add(Xi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;const h=new P,l=new P,u=new P,f=new nt,d=new nt,g=new nt,x=new P,m=new P;function p(I,w,S){h.fromBufferAttribute(n,I),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),l.sub(h),u.sub(h),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(l,-g.x).multiplyScalar(L),a[I].add(x),a[w].add(x),a[S].add(x),c[I].add(m),c[w].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,w=v.length;I<w;++I){const S=v[I],L=S.start,R=S.count;for(let D=L,k=L+R;D<k;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new P,_=new P,U=new P,T=new P;function A(I){U.fromBufferAttribute(s,I),T.copy(U);const w=a[I];M.copy(w),M.sub(U.multiplyScalar(U.dot(w))).normalize(),_.crossVectors(T,w);const L=_.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,L)}for(let I=0,w=v.length;I<w;++I){const S=v[I],L=S.start,R=S.count;for(let D=L,k=L+R;D<k;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,h=new P,l=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){const h=a.array,l=a.itemSize,u=a.normalized,f=new h.constructor(c.length*l);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*l;for(let p=0;p<l;p++)f[g++]=h[d++]}return new rn(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],h=t(c,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let l=0,u=h.length;l<u;l++){const f=h[l],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];l.push(d.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],u=r[h];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,l=o.length;h<l;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new de,fi=new jh,vr=new Ri,wl=new P,Mr=new P,yr=new P,Sr=new P,Vo=new P,br=new P,El=new P,wr=new P;class we extends Le{constructor(t=new Re,e=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=a[c],u=r[c];l!==0&&(Vo.fromBufferAttribute(u,t),o?br.addScaledVector(Vo,l):br.addScaledVector(Vo.sub(e),l))}e.add(br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(vr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(vr,wl)===null||fi.origin.distanceToSquared(wl)>(t.far-t.near)**2))&&(bl.copy(r).invert(),fi.copy(t.ray).applyMatrix4(bl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,U=M;_<U;_+=3){const T=a.getX(_),A=a.getX(_+1),I=a.getX(_+2);s=Er(this,p,t,n,h,l,u,T,A,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Er(this,o,t,n,h,l,u,v,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,U=M;_<U;_+=3){const T=_,A=_+1,I=_+2;s=Er(this,p,t,n,h,l,u,T,A,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=m,M=m+1,_=m+2;s=Er(this,o,t,n,h,l,u,v,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yd(i,t,e,n,s,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===oi,a),c===null)return null;wr.copy(a),wr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(wr);return h<e.near||h>e.far?null:{distance:h,point:wr.clone(),object:i}}function Er(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,Mr),i.getVertexPosition(c,yr),i.getVertexPosition(h,Sr);const l=yd(i,t,e,n,Mr,yr,Sr,El);if(l){const u=new P;ln.getBarycoord(El,Mr,yr,Sr,u),s&&(l.uv=ln.getInterpolatedAttribute(s,a,c,h,u,new nt)),r&&(l.uv1=ln.getInterpolatedAttribute(r,a,c,h,u,new nt)),o&&(l.normal=ln.getInterpolatedAttribute(o,a,c,h,u,new P),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:c,c:h,normal:new P,materialIndex:0};ln.getNormal(Mr,yr,Sr,f.normal),l.face=f,l.barycoord=u}return l}class Ft extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],l=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2));function g(x,m,p,v,M,_,U,T,A,I,w){const S=_/A,L=U/I,R=_/2,D=U/2,k=T/2,B=A+1,H=I+1;let Y=0,X=0;const lt=new P;for(let _t=0;_t<H;_t++){const Et=_t*L-D;for(let $t=0;$t<B;$t++){const ae=$t*S-R;lt[x]=ae*v,lt[m]=Et*M,lt[p]=k,h.push(lt.x,lt.y,lt.z),lt[x]=0,lt[m]=0,lt[p]=T>0?1:-1,l.push(lt.x,lt.y,lt.z),u.push($t/A),u.push(1-_t/I),Y+=1}}for(let _t=0;_t<I;_t++)for(let Et=0;Et<A;Et++){const $t=f+Et+B*_t,ae=f+Et+B*(_t+1),J=f+(Et+1)+B*(_t+1),at=f+(Et+1)+B*_t;c.push($t,ae,at),c.push(ae,J,at),X+=6}a.addGroup(d,X,w),d+=X,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function Sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const bd={clone:ds,merge:$e};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Pi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eu extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new P,Tl=new nt,Al=new nt;class sn extends eu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Tl,Al),e.subVectors(Al,Tl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,qi=1;class Td extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn($i,qi,t,e);s.layers=this.layers,this.add(s);const r=new sn($i,qi,t,e);r.layers=this.layers,this.add(r);const o=new sn($i,qi,t,e);o.layers=this.layers,this.add(o);const a=new sn($i,qi,t,e);a.layers=this.layers,this.add(a);const c=new sn($i,qi,t,e);c.layers=this.layers,this.add(c);const h=new sn($i,qi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const h of e)this.remove(h);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,l]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nu extends Ve{constructor(t,e,n,s,r,o,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ad extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ii});r.uniforms.tEquirect.value=e;const o=new we(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=yn),new Td(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Wo=new P,Cd=new P,Rd=new jt;class xi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wo.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ri,Tr=new P;class _c{constructor(t=new xi,e=new xi,n=new xi,s=new xi,r=new xi,o=new xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],l=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,f-h,m-d,_-p).normalize(),n[1].setComponents(c+r,f+h,m+d,_+p).normalize(),n[2].setComponents(c+o,f+l,m+g,_+v).normalize(),n[3].setComponents(c-o,f-l,m-g,_-v).normalize(),n[4].setComponents(c-a,f-u,m-x,_-M).normalize(),e===Fn)n[5].setComponents(c+a,f+u,m+x,_+M).normalize();else if(e===Yr)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i){const t=new WeakMap;function e(a,c){const h=a.array,l=a.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,l),a.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,h){const l=c.array,u=c.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,l);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}class vs extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,l=c+1,u=t/a,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<l;p++){const v=p*f-o;for(let M=0;M<h;M++){const _=M*u-r;g.push(_,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+h*p,_=v+h*(p+1),U=v+1+h*(p+1),T=v+1+h*p;d.push(M,_,T),d.push(_,U,T)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
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
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tp=`#define PI 3.141592653589793
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
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Pp=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
}`,Om=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,e0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,c0=`uniform float rotation;
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
}`,l0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Ld,alphahash_pars_fragment:Id,alphamap_fragment:Dd,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:zd,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Gd,bsdfs:Vd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:jd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:Kd,color_vertex:Qd,common:tp,cube_uv_reflection_fragment:ep,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:op,colorspace_fragment:ap,colorspace_pars_fragment:cp,envmap_fragment:lp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:fp,envmap_physical_pars_fragment:bp,envmap_vertex:dp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:xp,gradientmap_pars_fragment:_p,lightmap_pars_fragment:vp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:yp,lights_pars_begin:Sp,lights_toon_fragment:wp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Ip,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:zp,map_fragment:Fp,map_pars_fragment:Op,map_particle_fragment:Bp,map_particle_pars_fragment:kp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Vp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:$p,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:jp,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:cm,dithering_pars_fragment:lm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:dm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:xm,skinning_vertex:_m,skinnormal_vertex:vm,specularmap_fragment:Mm,specularmap_pars_fragment:ym,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:wm,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Pm,background_frag:Lm,backgroundCube_vert:Im,backgroundCube_frag:Dm,cube_vert:Um,cube_frag:Nm,depth_vert:zm,depth_frag:Fm,distanceRGBA_vert:Om,distanceRGBA_frag:Bm,equirect_vert:km,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:$m,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:jm,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:Qm,meshphysical_vert:t0,meshphysical_frag:e0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:c0,sprite_frag:l0},ft={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},vn={basic:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:$e([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:$e([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:$e([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:$e([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:$e([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:$e([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:$e([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:$e([ft.lights,ft.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};vn.physical={uniforms:$e([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Ar={r:0,b:0,g:0},pi=new Gn,h0=new de;function u0(i,t,e,n,s,r,o){const a=new Ot(0);let c=r===!0?0:1,h,l,u=null,f=0,d=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1;const _=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===uo)?(l===void 0&&(l=new we(new Ft(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ds(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),pi.copy(M.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(pi)),l.material.toneMapped=re.getTransfer(_.colorSpace)!==pe,(u!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new we(new vs(2,2),new Vn({name:"BackgroundMaterial",uniforms:ds(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=re.getTransfer(_.colorSpace)!==pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function p(v,M){v.getRGB(Ar,tu(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function f0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,R,D,k){let B=!1;const H=u(D,R,L);r!==H&&(r=H,h(r.object)),B=d(S,D,R,k),B&&g(S,D,R,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(S,L,R,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function u(S,L,R){const D=R.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let B=k[L.id];B===void 0&&(B={},k[L.id]=B);let H=B[D];return H===void 0&&(H=f(c()),B[D]=H),H}function f(S){const L=[],R=[],D=[];for(let k=0;k<e;k++)L[k]=0,R[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:R,attributeDivisors:D,object:S,attributes:{},index:null}}function d(S,L,R,D){const k=r.attributes,B=L.attributes;let H=0;const Y=R.getAttributes();for(const X in Y)if(Y[X].location>=0){const _t=k[X];let Et=B[X];if(Et===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),_t===void 0||_t.attribute!==Et||Et&&_t.data!==Et.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function g(S,L,R,D){const k={},B=L.attributes;let H=0;const Y=R.getAttributes();for(const X in Y)if(Y[X].location>=0){let _t=B[X];_t===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));const Et={};Et.attribute=_t,_t&&_t.data&&(Et.data=_t.data),k[X]=Et,H++}r.attributes=k,r.attributesNum=H,r.index=D}function x(){const S=r.newAttributes;for(let L=0,R=S.length;L<R;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const R=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;R[S]=1,D[S]===0&&(i.enableVertexAttribArray(S),D[S]=1),k[S]!==L&&(i.vertexAttribDivisor(S,L),k[S]=L)}function v(){const S=r.newAttributes,L=r.enabledAttributes;for(let R=0,D=L.length;R<D;R++)L[R]!==S[R]&&(i.disableVertexAttribArray(R),L[R]=0)}function M(S,L,R,D,k,B,H){H===!0?i.vertexAttribIPointer(S,L,R,k,B):i.vertexAttribPointer(S,L,R,D,k,B)}function _(S,L,R,D){x();const k=D.attributes,B=R.getAttributes(),H=L.defaultAttributeValues;for(const Y in B){const X=B[Y];if(X.location>=0){let lt=k[Y];if(lt===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){const _t=lt.normalized,Et=lt.itemSize,$t=t.get(lt);if($t===void 0)continue;const ae=$t.buffer,J=$t.type,at=$t.bytesPerElement,At=J===i.INT||J===i.UNSIGNED_INT||lt.gpuType===uc;if(lt.isInterleavedBufferAttribute){const ht=lt.data,zt=ht.stride,Vt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<X.locationSize;Ht++)p(X.location+Ht,ht.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)m(X.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ht=0;Ht<X.locationSize;Ht++)M(X.location+Ht,Et/X.locationSize,J,_t,zt*at,(Vt+Et/X.locationSize*Ht)*at,At)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht,lt.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ht=0;ht<X.locationSize;ht++)M(X.location+ht,Et/X.locationSize,J,_t,Et*at,Et/X.locationSize*ht*at,At)}}else if(H!==void 0){const _t=H[Y];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(X.location,_t);break;case 3:i.vertexAttrib3fv(X.location,_t);break;case 4:i.vertexAttrib4fv(X.location,_t);break;default:i.vertexAttrib1fv(X.location,_t)}}}}v()}function U(){I();for(const S in n){const L=n[S];for(const R in L){const D=L[R];for(const k in D)l(D[k].object),delete D[k];delete L[R]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const R in L){const D=L[R];for(const k in D)l(D[k].object),delete D[k];delete L[R]}delete n[S.id]}function A(S){for(const L in n){const R=n[L];if(R[S.id]===void 0)continue;const D=R[S.id];for(const k in D)l(D[k].object),delete D[k];delete R[S.id]}}function I(){w(),o=!0,r!==s&&(r=s,h(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function d0(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function a(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];e.update(d,n,1)}function c(h,l,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)o(h[g],l[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,l,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=l[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function p0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Sn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:U,maxSamples:T}}function m0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new xi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=l(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{const v=r?0:n,M=v*4;let _=p.clippingState||null;c.value=_,_=l(g,f,M,d);for(let U=0;U!==M;++U)_[U]=e[U];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function g0(i){let t=new WeakMap;function e(o,a){return a===ya?o.mapping=ls:a===Sa&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ya||a===Sa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new Ad(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class su extends eu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,Cl=[.125,.215,.35,.446,.526,.582],Mi=20,Xo=new su,Rl=new Ot;let $o=null,qo=0,Yo=0,jo=!1;const _i=(1+Math.sqrt(5))/2,Yi=1/_i,Pl=[new P(-_i,Yi,0),new P(_i,Yi,0),new P(-Yi,0,_i),new P(Yi,0,_i),new P(0,_i,-Yi),new P(0,_i,Yi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,qo,Yo),this._renderer.xr.enabled=jo,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:tr,format:xn,colorSpace:xs,depthBuffer:!1},s=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=_0(r,t,e)}return s}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,n,s){const a=new sn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(Rl),l.toneMapping=si,l.autoClear=!1;const d=new mo({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new we(new Ft,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Rl),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));const M=this._cubeSize;Cr(s,v*M,p>2?M:0,M,M),l.setRenderTarget(s),x&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pl[(s-r-1)%Pl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new we(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let v=0;for(let A=0;A<Mi;++A){const I=A/x,w=Math.exp(-I*I/2);p.push(w),A===0?v+=w:A<m&&(v+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const _=this._sizeLods[s],U=3*_*(s>M-es?s-M+es:0),T=4*(this._cubeSize-_);Cr(e,U,T,3*_,2*_),c.setRenderTarget(e),c.render(u,Xo)}}function x0(i){const t=[],e=[],n=[];let s=i;const r=i-es+1+Cl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-es?c=Cl[o-i+es-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),l=-h,u=1+h,f=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),M=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,I=T>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];v.set(w,x*g*T),M.set(f,m*g*T);const S=[T,T,T,T,T,T];_.set(S,p*g*T)}const U=new Re;U.setAttribute("position",new rn(v,x)),U.setAttribute("uv",new rn(M,m)),U.setAttribute("faceIndex",new rn(_,p)),t.push(U),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Il(i,t,e){const n=new Ai(i,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _0(i,t,e){const n=new Float32Array(Mi),s=new P(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Dl(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ul(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function v0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===ya||c===Sa,l=c===ls||c===hs;if(h||l){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ll(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return h&&d&&d.height>0||l&&d&&s(d)?(e===null&&(e=new Ll(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function M0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function h(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let M=0,_=v.length;M<_;M+=3){const U=v[M+0],T=v[M+1],A=v[M+2];f.push(U,T,T,A,A,U)}}else if(g!==void 0){const v=g.array;x=g.version;for(let M=0,_=v.length/3-1;M<_;M+=3){const U=M+0,T=M+1,A=M+2;f.push(U,T,T,A,A,U)}}else return;const m=new($h(f)?Qh:Kh)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function l(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function S0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function h(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function l(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function b0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function w0(i,t,e){const n=new WeakMap,s=new Ae;function r(o,a,c){const h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let U=a.attributes.position.count*_,T=1;U>t.maxTextureSize&&(T=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*T*4*u),I=new Yh(A,U,T,u);I.type=Sn,I.needsUpdate=!0;const w=_*4;for(let L=0;L<u;L++){const R=p[L],D=v[L],k=M[L],B=U*T*4*L;for(let H=0;H<R.count;H++){const Y=H*w;g===!0&&(s.fromBufferAttribute(R,H),A[B+Y+0]=s.x,A[B+Y+1]=s.y,A[B+Y+2]=s.z,A[B+Y+3]=0),x===!0&&(s.fromBufferAttribute(D,H),A[B+Y+4]=s.x,A[B+Y+5]=s.y,A[B+Y+6]=s.z,A[B+Y+7]=0),m===!0&&(s.fromBufferAttribute(k,H),A[B+Y+8]=s.x,A[B+Y+9]=s.y,A[B+Y+10]=s.z,A[B+Y+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new nt(U,T)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function E0(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class ru extends Ve{constructor(t,e,n,s,r,o,a,c,h,l=rs){if(l!==rs&&l!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===rs&&(n=Ti),n===void 0&&l===fs&&(n=us),super(null,s,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ou=new Ve,Nl=new ru(1,1),au=new Yh,cu=new ud,lu=new nu,zl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),kl=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function go(i,t){let e=Fl[t];e===void 0&&(e=new Int32Array(t),Fl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function P0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;kl.set(n),i.uniformMatrix2fv(this.addr,!1,kl),De(e,n)}}function L0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),De(e,n)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),De(e,n)}}function D0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function F0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function H0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=Xh,r=Nl):r=ou,e.setTexture2D(t||r,s)}function G0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lu,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||au,s)}function X0(i){switch(i){case 5126:return T0;case 35664:return A0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return z0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function $0(i,t){i.uniform1fv(this.addr,t)}function q0(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function j0(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Z0(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J0(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function K0(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Q0(i,t){i.uniform1iv(this.addr,t)}function tg(i,t){i.uniform2iv(this.addr,t)}function eg(i,t){i.uniform3iv(this.addr,t)}function ng(i,t){i.uniform4iv(this.addr,t)}function ig(i,t){i.uniform1uiv(this.addr,t)}function sg(i,t){i.uniform2uiv(this.addr,t)}function rg(i,t){i.uniform3uiv(this.addr,t)}function og(i,t){i.uniform4uiv(this.addr,t)}function ag(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ou,r[o])}function cg(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cu,r[o])}function lg(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||lu,r[o])}function hg(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||au,r[o])}function ug(i){switch(i){case 5126:return $0;case 35664:return q0;case 35665:return Y0;case 35666:return j0;case 35674:return Z0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return Q0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return hg}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=X0(e.type)}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}}class pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Hl(i,t){i.seq.push(t),i.map[t.id]=t}function mg(i,t,e){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),o=Zo.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){Hl(e,h===void 0?new fg(a,i,t):new dg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new pg(a),Hl(e,u)),e=u}}}class Xr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);mg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gg=37297;let xg=0;function _g(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Vl=new jt;function vg(i){re._getMatrix(Vl,re.workingColorSpace,i);const t=`mat3( ${Vl.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case po:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_g(i.getShaderSource(t),o)}else return s}function Mg(i,t){const e=vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yg(i,t){let e;switch(t){case Sf:e="Linear";break;case bf:e="Reinhard";break;case wf:e="Cineon";break;case Ef:e="ACESFilmic";break;case Af:e="AgX";break;case Cf:e="Neutral";break;case Tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rr=new P;function Sg(){re.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function wg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function Xl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $l(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(Tg,Cg)}const Ag=new Map;function Cg(i,t){let e=Jt[t];if(e===void 0){const n=Ag.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(Rg,Pg)}function Pg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dh:t="ENVMAP_BLENDING_MULTIPLY";break;case Mf:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function Ng(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Lg(e),h=Ig(e),l=Dg(e),u=Ug(e),f=Ng(e),d=bg(e),g=wg(r),x=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Jt.tonemapping_pars_fragment:"",e.toneMapping!==si?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Mg("linearToOutputTexel",e.outputColorSpace),Sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=Ka(o),o=Xl(o,e),o=$l(o,e),a=Ka(a),a=Xl(a,e),a=$l(a,e),o=ql(o),a=ql(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,_=v+p+a,U=Gl(s,s.VERTEX_SHADER,M),T=Gl(s,s.FRAGMENT_SHADER,_);s.attachShader(x,U),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(U).trim(),k=s.getShaderInfoLog(T).trim();let B=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,T);else{const Y=Wl(s,U,"vertex"),X=Wl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+R+`
`+Y+`
`+X)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(D===""||k==="")&&(H=!1);H&&(L.diagnostics={runnable:B,programLog:R,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(U),s.deleteShader(T),I=new Xr(s,x),w=Eg(s,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,gg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=T,this}let Fg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bg(t),e.set(t,n)),n}}class Bg{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}}function kg(i,t,e,n,s,r,o){const a=new Zh,c=new Og,h=new Set,l=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return h.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,R,D){const k=R.fog,B=D.geometry,H=w.isMeshStandardMaterial?R.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),X=Y&&Y.mapping===uo?Y.image.height:null,lt=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const _t=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Et=_t!==void 0?_t.length:0;let $t=0;B.morphAttributes.position!==void 0&&($t=1),B.morphAttributes.normal!==void 0&&($t=2),B.morphAttributes.color!==void 0&&($t=3);let ae,J,at,At;if(lt){const ue=vn[lt];ae=ue.vertexShader,J=ue.fragmentShader}else ae=w.vertexShader,J=w.fragmentShader,c.update(w),at=c.getVertexShaderID(w),At=c.getFragmentShaderID(w);const ht=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,Ht=D.isBatchedMesh===!0,se=!!w.map,Q=!!w.matcap,ot=!!Y,C=!!w.aoMap,Dt=!!w.lightMap,et=!!w.bumpMap,St=!!w.normalMap,ut=!!w.displacementMap,Bt=!!w.emissiveMap,vt=!!w.metalnessMap,E=!!w.roughnessMap,y=w.anisotropy>0,O=w.clearcoat>0,j=w.dispersion>0,tt=w.iridescence>0,Z=w.sheen>0,Rt=w.transmission>0,dt=y&&!!w.anisotropyMap,Mt=O&&!!w.clearcoatMap,te=O&&!!w.clearcoatNormalMap,it=O&&!!w.clearcoatRoughnessMap,bt=tt&&!!w.iridescenceMap,kt=tt&&!!w.iridescenceThicknessMap,Gt=Z&&!!w.sheenColorMap,wt=Z&&!!w.sheenRoughnessMap,ee=!!w.specularMap,Zt=!!w.specularColorMap,me=!!w.specularIntensityMap,N=Rt&&!!w.transmissionMap,pt=Rt&&!!w.thicknessMap,$=!!w.gradientMap,K=!!w.alphaMap,xt=w.alphaTest>0,mt=!!w.alphaHash,qt=!!w.extensions;let Te=si;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Te=i.toneMapping);const ke={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:ae,fragmentShader:J,defines:w.defines,customVertexShaderID:at,customFragmentShaderID:At,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ht,batchingColor:Ht&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:se,matcap:Q,envMap:ot,envMapMode:ot&&Y.mapping,envMapCubeUVHeight:X,aoMap:C,lightMap:Dt,bumpMap:et,normalMap:St,displacementMap:f&&ut,emissiveMap:Bt,normalMapObjectSpace:St&&w.normalMapType===If,normalMapTangentSpace:St&&w.normalMapType===Wh,metalnessMap:vt,roughnessMap:E,anisotropy:y,anisotropyMap:dt,clearcoat:O,clearcoatMap:Mt,clearcoatNormalMap:te,clearcoatRoughnessMap:it,dispersion:j,iridescence:tt,iridescenceMap:bt,iridescenceThicknessMap:kt,sheen:Z,sheenColorMap:Gt,sheenRoughnessMap:wt,specularMap:ee,specularColorMap:Zt,specularIntensityMap:me,transmission:Rt,transmissionMap:N,thicknessMap:pt,gradientMap:$,opaque:w.transparent===!1&&w.blending===ss&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:xt,alphaHash:mt,combine:w.combine,mapUv:se&&x(w.map.channel),aoMapUv:C&&x(w.aoMap.channel),lightMapUv:Dt&&x(w.lightMap.channel),bumpMapUv:et&&x(w.bumpMap.channel),normalMapUv:St&&x(w.normalMap.channel),displacementMapUv:ut&&x(w.displacementMap.channel),emissiveMapUv:Bt&&x(w.emissiveMap.channel),metalnessMapUv:vt&&x(w.metalnessMap.channel),roughnessMapUv:E&&x(w.roughnessMap.channel),anisotropyMapUv:dt&&x(w.anisotropyMap.channel),clearcoatMapUv:Mt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(w.sheenRoughnessMap.channel),specularMapUv:ee&&x(w.specularMap.channel),specularColorMapUv:Zt&&x(w.specularColorMap.channel),specularIntensityMapUv:me&&x(w.specularIntensityMap.channel),transmissionMapUv:N&&x(w.transmissionMap.channel),thicknessMapUv:pt&&x(w.thicknessMap.channel),alphaMapUv:K&&x(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(St||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(se||K),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:$t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:se&&w.map.isVideoTexture===!0&&re.getTransfer(w.map.colorSpace)===pe,decodeVideoTextureEmissive:Bt&&w.emissiveMap.isVideoTexture===!0&&re.getTransfer(w.emissiveMap.colorSpace)===pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ye,flipSided:w.side===je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&w.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ke.vertexUv1s=h.has(1),ke.vertexUv2s=h.has(2),ke.vertexUv3s=h.has(3),h.clear(),ke}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(S,w),M(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const S=g[w.type];let L;if(S){const R=vn[S];L=bd.clone(R.uniforms)}else L=w.uniforms;return L}function U(w,S){let L;for(let R=0,D=l.length;R<D;R++){const k=l[R];if(k.cacheKey===S){L=k,++L.usedTimes;break}}return L===void 0&&(L=new zg(i,S,w,r),l.push(L)),L}function T(w){if(--w.usedTimes===0){const S=l.indexOf(w);l[S]=l[l.length-1],l.pop(),w.destroy()}}function A(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:U,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:I}}function Hg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(f||jl),s.length>1&&s.sort(f||jl)}function l(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:h}}function Vg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Zl,i.set(n,[o])):s>=r.length?(o=new Zl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ot};break;case"SpotLight":e={position:new P,direction:new P,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Xg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $g=0;function qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Wg,e=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const s=new P,r=new de,o=new de;function a(h){let l=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,M=0,_=0,U=0,T=0,A=0;h.sort(qg);for(let w=0,S=h.length;w<S;w++){const L=h[w],R=L.color,D=L.intensity,k=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=R.r*D,u+=R.g*D,f+=R.b*D;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],D);A++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,X=e.get(L);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=L.shadow.matrix,v++}n.directional[d]=H,d++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(R).multiplyScalar(D),H.distance=k,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[x]=H;const Y=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,Y.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=Y.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=B,_++}x++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(R).multiplyScalar(D),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Y=L.shadow,X=e.get(L);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(D),H.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==M||I.numSpotShadows!==_||I.numSpotMaps!==U||I.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=M,I.numSpotShadows=_,I.numSpotMaps=U,I.numLightProbes=A,n.version=$g++)}function c(h,l){let u=0,f=0,d=0,g=0,x=0;const m=l.matrixWorldInverse;for(let p=0,v=h.length;p<v;p++){const M=h[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Jl(i){const t=new Yg(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Jl(i),t.set(s,[a])):r>=o.length?(a=new Jl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Zg extends Pi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jg extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function tx(i,t,e){let n=new _c;const s=new nt,r=new nt,o=new Ae,a=new Zg({depthPacking:Lf}),c=new Jg,h={},l=e.maxTextureSize,u={[oi]:je,[je]:oi,[Ye]:Ye},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Kg,fragmentShader:Qg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new we(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),R=i.state;R.setBlending(ii),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=p!==Nn&&this.type===Nn,k=p===Nn&&this.type!==Nn;for(let B=0,H=T.length;B<H;B++){const Y=T[B],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const lt=X.getFrameExtents();if(s.multiply(lt),r.copy(X.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/lt.x),s.x=r.x*lt.x,X.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/lt.y),s.y=r.y*lt.y,X.mapSize.y=r.y)),X.map===null||D===!0||k===!0){const Et=this.type!==Nn?{minFilter:Ke,magFilter:Ke}:{};X.map!==null&&X.map.dispose(),X.map=new Ai(s.x,s.y,Et),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const _t=X.getViewportCount();for(let Et=0;Et<_t;Et++){const $t=X.getViewport(Et);o.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),R.viewport(o),X.updateMatrices(Y,Et),n=X.getFrustum(),_(A,I,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Nn&&v(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,L)};function v(T,A){const I=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ai(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,d,x,null)}function M(T,A,I,w){let S=null;const L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const R=S.uuid,D=A.uuid;let k=h[R];k===void 0&&(k={},h[R]=k);let B=k[D];B===void 0&&(B=S.clone(),k[D]=B,A.addEventListener("dispose",U)),S=B}if(S.visible=A.visible,S.wireframe=A.wireframe,w===Nn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=i.properties.get(S);R.light=I}return S}function _(T,A,I,w,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const D=t.update(T),k=T.material;if(Array.isArray(k)){const B=D.groups;for(let H=0,Y=B.length;H<Y;H++){const X=B[H],lt=k[X.materialIndex];if(lt&&lt.visible){const _t=M(T,lt,w,S);T.onBeforeShadow(i,T,A,I,D,_t,X),i.renderBufferDirect(I,null,D,_t,T,X),T.onAfterShadow(i,T,A,I,D,_t,X)}}}else if(k.visible){const B=M(T,k,w,S);T.onBeforeShadow(i,T,A,I,D,B,null),i.renderBufferDirect(I,null,D,B,T,null),T.onAfterShadow(i,T,A,I,D,B,null)}}const R=T.children;for(let D=0,k=R.length;D<k;D++)_(R[D],A,I,w,S)}function U(T){T.target.removeEventListener("dispose",U);for(const I in h){const w=h[I],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const ex={[pa]:ma,[ga]:va,[xa]:Ma,[cs]:_a,[ma]:pa,[va]:ga,[Ma]:xa,[_a]:cs};function nx(i,t){function e(){let N=!1;const pt=new Ae;let $=null;const K=new Ae(0,0,0,0);return{setMask:function(xt){$!==xt&&!N&&(i.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){N=xt},setClear:function(xt,mt,qt,Te,ke){ke===!0&&(xt*=Te,mt*=Te,qt*=Te),pt.set(xt,mt,qt,Te),K.equals(pt)===!1&&(i.clearColor(xt,mt,qt,Te),K.copy(pt))},reset:function(){N=!1,$=null,K.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,$=null,K=null,xt=null;return{setReversed:function(mt){if(pt!==mt){const qt=t.get("EXT_clip_control");pt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Te=xt;xt=null,this.setClear(Te)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?ht(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(mt){$!==mt&&!N&&(i.depthMask(mt),$=mt)},setFunc:function(mt){if(pt&&(mt=ex[mt]),K!==mt){switch(mt){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=mt}},setLocked:function(mt){N=mt},setClear:function(mt){xt!==mt&&(pt&&(mt=1-mt),i.clearDepth(mt),xt=mt)},reset:function(){N=!1,$=null,K=null,xt=null,pt=!1}}}function s(){let N=!1,pt=null,$=null,K=null,xt=null,mt=null,qt=null,Te=null,ke=null;return{setTest:function(ue){N||(ue?ht(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ue){pt!==ue&&!N&&(i.stencilMask(ue),pt=ue)},setFunc:function(ue,un,Cn){($!==ue||K!==un||xt!==Cn)&&(i.stencilFunc(ue,un,Cn),$=ue,K=un,xt=Cn)},setOp:function(ue,un,Cn){(mt!==ue||qt!==un||Te!==Cn)&&(i.stencilOp(ue,un,Cn),mt=ue,qt=un,Te=Cn)},setLocked:function(ue){N=ue},setClear:function(ue){ke!==ue&&(i.clearStencil(ue),ke=ue)},reset:function(){N=!1,pt=null,$=null,K=null,xt=null,mt=null,qt=null,Te=null,ke=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap;let l={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,M=null,_=null,U=null,T=null,A=new Ot(0,0,0),I=0,w=!1,S=null,L=null,R=null,D=null,k=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Y>=2);let lt=null,_t={};const Et=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),ae=new Ae().fromArray(Et),J=new Ae().fromArray($t);function at(N,pt,$,K){const xt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(N,mt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<$;qt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(pt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return mt}const At={};At[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(cs),et(!1),St(nl),ht(i.CULL_FACE),C(ii);function ht(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function zt(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function Vt(N,pt){return u[N]!==pt?(i.bindFramebuffer(N,pt),u[N]=pt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ht(N,pt){let $=d,K=!1;if(N){$=f.get(pt),$===void 0&&($=[],f.set(pt,$));const xt=N.textures;if($.length!==xt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,qt=xt.length;mt<qt;mt++)$[mt]=i.COLOR_ATTACHMENT0+mt;$.length=xt.length,K=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,K=!0);K&&i.drawBuffers($)}function se(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Q={[vi]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};Q[rf]=i.MIN,Q[of]=i.MAX;const ot={[af]:i.ZERO,[cf]:i.ONE,[lf]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[uf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[_f]:i.CONSTANT_ALPHA,[vf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(N,pt,$,K,xt,mt,qt,Te,ke,ue){if(N===ii){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(ht(i.BLEND),x=!0),N!==ef){if(N!==m||ue!==w){if((p!==vi||_!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,_=vi),ue)switch(N){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qr:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,M=null,U=null,T=null,A.set(0,0,0),I=0,m=N,w=ue}return}xt=xt||pt,mt=mt||$,qt=qt||K,(pt!==p||xt!==_)&&(i.blendEquationSeparate(Q[pt],Q[xt]),p=pt,_=xt),($!==v||K!==M||mt!==U||qt!==T)&&(i.blendFuncSeparate(ot[$],ot[K],ot[mt],ot[qt]),v=$,M=K,U=mt,T=qt),(Te.equals(A)===!1||ke!==I)&&(i.blendColor(Te.r,Te.g,Te.b,ke),A.copy(Te),I=ke),m=N,w=!1}function Dt(N,pt){N.side===Ye?zt(i.CULL_FACE):ht(i.CULL_FACE);let $=N.side===je;pt&&($=!$),et($),N.blending===ss&&N.transparent===!1?C(ii):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const K=N.stencilWrite;a.setTest(K),K&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function St(N){N!==Qu?(ht(i.CULL_FACE),N!==L&&(N===nl?i.cullFace(i.BACK):N===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),L=N}function ut(N){N!==R&&(H&&i.lineWidth(N),R=N)}function Bt(N,pt,$){N?(ht(i.POLYGON_OFFSET_FILL),(D!==pt||k!==$)&&(i.polygonOffset(pt,$),D=pt,k=$)):zt(i.POLYGON_OFFSET_FILL)}function vt(N){N?ht(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function E(N){N===void 0&&(N=i.TEXTURE0+B-1),lt!==N&&(i.activeTexture(N),lt=N)}function y(N,pt,$){$===void 0&&(lt===null?$=i.TEXTURE0+B-1:$=lt);let K=_t[$];K===void 0&&(K={type:void 0,texture:void 0},_t[$]=K),(K.type!==N||K.texture!==pt)&&(lt!==$&&(i.activeTexture($),lt=$),i.bindTexture(N,pt||At[N]),K.type=N,K.texture=pt)}function O(){const N=_t[lt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(N){ae.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function wt(N){J.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function ee(N,pt){let $=h.get(pt);$===void 0&&($=new WeakMap,h.set(pt,$));let K=$.get(N);K===void 0&&(K=i.getUniformBlockIndex(pt,N.name),$.set(N,K))}function Zt(N,pt){const K=h.get(pt).get(N);c.get(pt)!==K&&(i.uniformBlockBinding(pt,K,N.__bindingPointIndex),c.set(pt,K))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},lt=null,_t={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,M=null,_=null,U=null,T=null,A=new Ot(0,0,0),I=0,w=!1,S=null,L=null,R=null,D=null,k=null,ae.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:zt,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:se,setBlending:C,setMaterial:Dt,setFlipSided:et,setCullFace:St,setLineWidth:ut,setPolygonOffset:Bt,setScissorTest:vt,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:bt,texImage3D:kt,updateUBOMapping:ee,uniformBlockBinding:Zt,texStorage2D:te,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Mt,scissor:Gt,viewport:wt,reset:me}}function Kl(i,t,e,n){const s=ix(n);switch(e){case Oh:return i*t;case kh:return i*t;case Hh:return i*t*2;case fo:return i*t/s.components*s.byteLength;case pc:return i*t/s.components*s.byteLength;case Gh:return i*t*2/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case gc:return i*t*4/s.components*s.byteLength;case kr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wr:case $a:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vh:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ix(i){switch(i){case Hn:case Nh:return{byteLength:1,components:1};case Ws:case zh:case tr:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case Ti:case uc:case Sn:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new nt,l=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):jr("canvas")}function x(E,y,O){let j=1;const tt=vt(E);if((tt.width>O||tt.height>O)&&(j=O/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(j*tt.width),Rt=Math.floor(j*tt.height);u===void 0&&(u=g(Z,Rt));const dt=y?g(Z,Rt):u;return dt.width=Z,dt.height=Rt,dt.getContext("2d").drawImage(E,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Rt+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,y,O,j,tt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=y;if(y===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){const Rt=tt?po:re.getTransfer(j);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Rt===pe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(E,y){let O;return E?y===null||y===Ti||y===us?O=i.DEPTH24_STENCIL8:y===Sn?O=i.DEPTH32F_STENCIL8:y===Ws&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===us?O=i.DEPTH_COMPONENT24:y===Sn?O=i.DEPTH_COMPONENT32F:y===Ws&&(O=i.DEPTH_COMPONENT16),O}function U(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ke&&E.minFilter!==yn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){const y=E.target;y.removeEventListener("dispose",T),I(y),y.isVideoTexture&&l.delete(y)}function A(E){const y=E.target;y.removeEventListener("dispose",A),S(y)}function I(E){const y=n.get(E);if(y.__webglInit===void 0)return;const O=E.source,j=f.get(O);if(j){const tt=j[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(E),Object.keys(j).length===0&&f.delete(O)}n.remove(E)}function w(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const O=E.source,j=f.get(O);delete j[y.__cacheKey],o.memory.textures--}function S(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let tt=0;tt<y.__webglFramebuffer[j].length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[j][tt]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=E.textures;for(let j=0,tt=O.length;j<tt;j++){const Z=n.get(O[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[j])}n.remove(E)}let L=0;function R(){L=0}function D(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function k(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function B(E,y){const O=n.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,E,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function H(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){J(O,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function Y(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){J(O,E,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function X(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){at(O,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const lt={[ba]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},_t={[Ke]:i.NEAREST,[Rf]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Et={[Df]:i.NEVER,[Bf]:i.ALWAYS,[Uf]:i.LESS,[Xh]:i.LEQUAL,[Nf]:i.EQUAL,[Of]:i.GEQUAL,[zf]:i.GREATER,[Ff]:i.NOTEQUAL};function $t(E,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===yn||y.magFilter===wo||y.magFilter===lr||y.magFilter===Si||y.minFilter===yn||y.minFilter===wo||y.minFilter===lr||y.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,lt[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,lt[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,lt[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ke||y.minFilter!==lr&&y.minFilter!==Si||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ae(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));const j=y.source;let tt=f.get(j);tt===void 0&&(tt={},f.set(j,tt));const Z=k(y);if(Z!==E.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[Z].usedTimes++;const Rt=tt[E.__cacheKey];Rt!==void 0&&(tt[E.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(y)),E.__cacheKey=Z,E.__webglTexture=tt[Z].texture}return O}function J(E,y,O){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);const tt=ae(E,y),Z=y.source;e.bindTexture(j,E.__webglTexture,i.TEXTURE0+O);const Rt=n.get(Z);if(Z.version!==Rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const dt=re.getPrimaries(re.workingColorSpace),Mt=y.colorSpace===ei?null:re.getPrimaries(y.colorSpace),te=y.colorSpace===ei||dt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let it=x(y.image,!1,s.maxTextureSize);it=Bt(y,it);const bt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type);let Gt=M(y.internalFormat,bt,kt,y.colorSpace,y.isVideoTexture);$t(j,y);let wt;const ee=y.mipmaps,Zt=y.isVideoTexture!==!0,me=Rt.__version===void 0||tt===!0,N=Z.dataReady,pt=U(y,it);if(y.isDepthTexture)Gt=_(y.format===fs,y.type),me&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Gt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Gt,it.width,it.height,0,bt,kt,null));else if(y.isDataTexture)if(ee.length>0){Zt&&me&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,ee[0].width,ee[0].height);for(let $=0,K=ee.length;$<K;$++)wt=ee[$],Zt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt.width,wt.height,bt,kt,wt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,wt.width,wt.height,0,bt,kt,wt.data);y.generateMipmaps=!1}else Zt?(me&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,bt,kt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,it.width,it.height,0,bt,kt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Gt,ee[0].width,ee[0].height,it.depth);for(let $=0,K=ee.length;$<K;$++)if(wt=ee[$],y.format!==xn)if(bt!==null)if(Zt){if(N)if(y.layerUpdates.size>0){const xt=Kl(wt.width,wt.height,y.format,y.type);for(const mt of y.layerUpdates){const qt=wt.data.subarray(mt*xt/wt.data.BYTES_PER_ELEMENT,(mt+1)*xt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,mt,wt.width,wt.height,1,bt,qt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,wt.width,wt.height,it.depth,bt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Gt,wt.width,wt.height,it.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,wt.width,wt.height,it.depth,bt,kt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Gt,wt.width,wt.height,it.depth,0,bt,kt,wt.data)}else{Zt&&me&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,ee[0].width,ee[0].height);for(let $=0,K=ee.length;$<K;$++)wt=ee[$],y.format!==xn?bt!==null?Zt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,wt.width,wt.height,bt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Gt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt.width,wt.height,bt,kt,wt.data):e.texImage2D(i.TEXTURE_2D,$,Gt,wt.width,wt.height,0,bt,kt,wt.data)}else if(y.isDataArrayTexture)if(Zt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Gt,it.width,it.height,it.depth),N)if(y.layerUpdates.size>0){const $=Kl(it.width,it.height,y.format,y.type);for(const K of y.layerUpdates){const xt=it.data.subarray(K*$/it.data.BYTES_PER_ELEMENT,(K+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,bt,kt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,kt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,it.width,it.height,it.depth,0,bt,kt,it.data);else if(y.isData3DTexture)Zt?(me&&e.texStorage3D(i.TEXTURE_3D,pt,Gt,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,kt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,it.width,it.height,it.depth,0,bt,kt,it.data);else if(y.isFramebufferTexture){if(me)if(Zt)e.texStorage2D(i.TEXTURE_2D,pt,Gt,it.width,it.height);else{let $=it.width,K=it.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Gt,$,K,0,bt,kt,null),$>>=1,K>>=1}}else if(ee.length>0){if(Zt&&me){const $=vt(ee[0]);e.texStorage2D(i.TEXTURE_2D,pt,Gt,$.width,$.height)}for(let $=0,K=ee.length;$<K;$++)wt=ee[$],Zt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,bt,kt,wt):e.texImage2D(i.TEXTURE_2D,$,Gt,bt,kt,wt);y.generateMipmaps=!1}else if(Zt){if(me){const $=vt(it);e.texStorage2D(i.TEXTURE_2D,pt,Gt,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,it)}else e.texImage2D(i.TEXTURE_2D,0,Gt,bt,kt,it);m(y)&&p(j),Rt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function at(E,y,O){if(y.image.length!==6)return;const j=ae(E,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const Z=n.get(tt);if(tt.version!==Z.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const Rt=re.getPrimaries(re.workingColorSpace),dt=y.colorSpace===ei?null:re.getPrimaries(y.colorSpace),Mt=y.colorSpace===ei||Rt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let K=0;K<6;K++)!te&&!it?bt[K]=x(y.image[K],!0,s.maxCubemapSize):bt[K]=it?y.image[K].image:y.image[K],bt[K]=Bt(y,bt[K]);const kt=bt[0],Gt=r.convert(y.format,y.colorSpace),wt=r.convert(y.type),ee=M(y.internalFormat,Gt,wt,y.colorSpace),Zt=y.isVideoTexture!==!0,me=Z.__version===void 0||j===!0,N=tt.dataReady;let pt=U(y,kt);$t(i.TEXTURE_CUBE_MAP,y);let $;if(te){Zt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ee,kt.width,kt.height);for(let K=0;K<6;K++){$=bt[K].mipmaps;for(let xt=0;xt<$.length;xt++){const mt=$[xt];y.format!==xn?Gt!==null?Zt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,mt.width,mt.height,Gt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,ee,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,mt.width,mt.height,Gt,wt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,ee,mt.width,mt.height,0,Gt,wt,mt.data)}}}else{if($=y.mipmaps,Zt&&me){$.length>0&&pt++;const K=vt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ee,K.width,K.height)}for(let K=0;K<6;K++)if(it){Zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt[K].width,bt[K].height,Gt,wt,bt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,bt[K].width,bt[K].height,0,Gt,wt,bt[K].data);for(let xt=0;xt<$.length;xt++){const qt=$[xt].image[K].image;Zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,qt.width,qt.height,Gt,wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,ee,qt.width,qt.height,0,Gt,wt,qt.data)}}else{Zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Gt,wt,bt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,Gt,wt,bt[K]);for(let xt=0;xt<$.length;xt++){const mt=$[xt];Zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,Gt,wt,mt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,ee,Gt,wt,mt.image[K])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=tt.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function At(E,y,O,j,tt,Z){const Rt=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),Mt=M(O.internalFormat,Rt,dt,O.colorSpace),te=n.get(y),it=n.get(O);if(it.__renderTarget=y,!te.__hasExternalTextures){const bt=Math.max(1,y.width>>Z),kt=Math.max(1,y.height>>Z);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,Mt,bt,kt,y.depth,0,Rt,dt,null):e.texImage2D(tt,Z,Mt,bt,kt,0,Rt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),St(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,tt,it.__webglTexture,0,et(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,tt,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const j=y.depthTexture,tt=j&&j.isDepthTexture?j.type:null,Z=_(y.stencilBuffer,tt),Rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=et(y);St(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Z,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,E)}else{const j=y.textures;for(let tt=0;tt<j.length;tt++){const Z=j[tt],Rt=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),Mt=M(Z.internalFormat,Rt,dt,Z.colorSpace),te=et(y);O&&St(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Mt,y.width,y.height):St(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,Mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const tt=j.__webglTexture,Z=et(y);if(y.depthTexture.format===rs)St(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(y.depthTexture.format===fs)St(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Vt(E){const y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=j}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");zt(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),ht(y.__webglDepthbuffer[j],E,!1);else{const tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ht(y.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(E,y,O){const j=n.get(E);y!==void 0&&At(j.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Vt(E)}function se(E){const y=E.texture,O=n.get(E),j=n.get(y);E.addEventListener("dispose",A);const tt=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)O.__webglFramebuffer[dt][Mt]=i.createFramebuffer()}else O.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)O.__webglFramebuffer[dt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let dt=0,Mt=tt.length;dt<Mt;dt++){const te=n.get(tt[dt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&St(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const Mt=tt[dt];O.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);const te=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),bt=M(Mt.internalFormat,te,it,Mt.colorSpace,E.isXRRenderTarget===!0),kt=et(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$t(i.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)At(O.__webglFramebuffer[dt][Mt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Mt);else At(O.__webglFramebuffer[dt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,Mt=tt.length;dt<Mt;dt++){const te=tt[dt],it=n.get(te);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),$t(i.TEXTURE_2D,te),At(O.__webglFramebuffer,E,te,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),$t(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)At(O.__webglFramebuffer[Mt],E,y,i.COLOR_ATTACHMENT0,dt,Mt);else At(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,dt,0);m(y)&&p(dt),e.unbindTexture()}E.depthBuffer&&Vt(E)}function Q(E){const y=E.textures;for(let O=0,j=y.length;O<j;O++){const tt=y[O];if(m(tt)){const Z=v(E),Rt=n.get(tt).__webglTexture;e.bindTexture(Z,Rt),p(Z),e.unbindTexture()}}}const ot=[],C=[];function Dt(E){if(E.samples>0){if(St(E)===!1){const y=E.textures,O=E.width,j=E.height;let tt=i.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(E),dt=y.length>1;if(dt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const te=n.get(y[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,tt,i.NEAREST),c===!0&&(ot.length=0,C.length=0,ot.push(i.COLOR_ATTACHMENT0+Mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push(Z),C.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const te=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function et(E){return Math.min(s.maxSamples,E.samples)}function St(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(E){const y=o.render.frame;l.get(E)!==y&&(l.set(E,y),E.update())}function Bt(E,y){const O=E.colorSpace,j=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==xs&&O!==ei&&(re.getTransfer(O)===pe?(j!==xn||tt!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=Ht,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=St}function rx(i,t){function e(n,s=ei){let r;const o=re.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===tr)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===xn)return i.RGBA;if(n===kh)return i.LUMINANCE;if(n===Hh)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===fo)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===kr||n===Hr||n===Gr||n===Vr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Pa)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Da||n===Ua||n===Na||n===za||n===Fa||n===Oa||n===Ba||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===$a||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Ya||n===ja||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ox extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tt extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ax={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
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

}`;class hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:cx,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ux extends _s{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,f=null,d=null,g=null;const x=new hx,m=e.getContextAttributes();let p=null,v=null;const M=[],_=[],U=new nt;let T=null;const A=new sn;A.viewport=new Ae;const I=new sn;I.viewport=new Ae;const w=[A,I],S=new ox;let L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=M[J];return at===void 0&&(at=new Jo,M[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=M[J];return at===void 0&&(at=new Jo,M[J]=at),at.getGripSpace()},this.getHand=function(J){let at=M[J];return at===void 0&&(at=new Jo,M[J]=at),at.getHandSpace()};function D(J){const at=_.indexOf(J.inputSource);if(at===-1)return;const At=M[at];At!==void 0&&(At.update(J.inputSource,J.frame,h||o),At.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let J=0;J<M.length;J++){const at=_[J];at!==null&&(_[J]=null,M[J].disconnect(at))}L=null,R=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ai(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,At=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?fs:rs,At=m.stencil?us:Ti);const zt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ai(f.textureWidth,f.textureHeight,{format:xn,type:Hn,depthTexture:new ru(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(J){for(let at=0;at<J.removed.length;at++){const At=J.removed[at],ht=_.indexOf(At);ht>=0&&(_[ht]=null,M[ht].disconnect(At))}for(let at=0;at<J.added.length;at++){const At=J.added[at];let ht=_.indexOf(At);if(ht===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=_.length){_.push(At),ht=Vt;break}else if(_[Vt]===null){_[Vt]=At,ht=Vt;break}if(ht===-1)break}const zt=M[ht];zt&&zt.connect(At)}}const H=new P,Y=new P;function X(J,at,At){H.setFromMatrixPosition(at.matrixWorld),Y.setFromMatrixPosition(At.matrixWorld);const ht=H.distanceTo(Y),zt=at.projectionMatrix.elements,Vt=At.projectionMatrix.elements,Ht=zt[14]/(zt[10]-1),se=zt[14]/(zt[10]+1),Q=(zt[9]+1)/zt[5],ot=(zt[9]-1)/zt[5],C=(zt[8]-1)/zt[0],Dt=(Vt[8]+1)/Vt[0],et=Ht*C,St=Ht*Dt,ut=ht/(-C+Dt),Bt=ut*-C;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Bt),J.translateZ(ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),zt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const vt=Ht+ut,E=se+ut,y=et-Bt,O=St+(ht-Bt),j=Q*se/E*vt,tt=ot*se/E*vt;J.projectionMatrix.makePerspective(y,O,j,tt,vt,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,At=J.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(At=x.depthFar)),S.near=I.near=A.near=at,S.far=I.far=A.far=At,(L!==S.near||R!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,R=S.far),A.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,S.layers.mask=A.layers.mask|I.layers.mask;const ht=J.parent,zt=S.cameras;lt(S,ht);for(let Vt=0;Vt<zt.length;Vt++)lt(zt[Vt],ht);zt.length===2?X(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),_t(J,S,ht)};function _t(J,at,At){At===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Et=null;function $t(J,at){if(l=at.getViewerPose(h||o),g=at,l!==null){const At=l.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ht=!1;At.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let Vt=0;Vt<At.length;Vt++){const Ht=At[Vt];let se=null;if(d!==null)se=d.getViewport(Ht);else{const ot=u.getViewSubImage(f,Ht);se=ot.viewport,Vt===0&&(t.setRenderTargetTextures(v,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(v))}let Q=w[Vt];Q===void 0&&(Q=new sn,Q.layers.enable(Vt),Q.viewport=new Ae,w[Vt]=Q),Q.matrix.fromArray(Ht.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ht.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(se.x,se.y,se.width,se.height),Vt===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(Q)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Vt=u.getDepthInformation(At[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,s.renderState)}}for(let At=0;At<M.length;At++){const ht=_[At],zt=M[At];ht!==null&&zt!==void 0&&zt.update(ht,at,h||o)}Et&&Et(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const ae=new iu;ae.setAnimationLoop($t),this.setAnimationLoop=function(J){Et=J},this.dispose=function(){}}}const mi=new Gn,fx=new de;function dx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,mi.copy(_),mi.x*=-1,mi.y*=-1,mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(mi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function px(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const _=M.program;n.uniformBlockBinding(v,_)}function h(v,M){let _=s[v.id];_===void 0&&(g(v),_=l(v),s[v.id]=_,v.addEventListener("dispose",m));const U=M.program;n.updateUBOMapping(v,U);const T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function l(v){const M=u();v.__bindingPointIndex=M;const _=i.createBuffer(),U=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,U,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],_=v.uniforms,U=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,A=_.length;T<A;T++){const I=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,S=I.length;w<S;w++){const L=I[w];if(d(L,T,w,U)===!0){const R=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let B=0;B<D.length;B++){const H=D[B],Y=x(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,R+k,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,_,U){const T=v.value,A=M+"_"+_;if(U[A]===void 0)return typeof T=="number"||typeof T=="boolean"?U[A]=T:U[A]=T.clone(),!0;{const I=U[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return U[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(v){const M=v.uniforms;let _=0;const U=16;for(let A=0,I=M.length;A<I;A++){const w=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,L=w.length;S<L;S++){const R=w[S],D=Array.isArray(R.value)?R.value:[R.value];for(let k=0,B=D.length;k<B;k++){const H=D[k],Y=x(H),X=_%U,lt=X%Y.boundary,_t=X+lt;_+=lt,_t!==0&&U-_t<Y.storage&&(_+=U-_t),R.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=_,_+=Y.storage}}}const T=_%U;return T>0&&(_+=U-T),v.__size=_,v.__cache={},this}function x(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:h,dispose:p}}class hu{constructor(t={}){const{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=si,this.toneMappingExposure=1;const _=this;let U=!1,T=0,A=0,I=null,w=-1,S=null;const L=new Ae,R=new Ae;let D=null;const k=new Ot(0);let B=0,H=e.width,Y=e.height,X=1,lt=null,_t=null;const Et=new Ae(0,0,H,Y),$t=new Ae(0,0,H,Y);let ae=!1;const J=new _c;let at=!1,At=!1;const ht=new de,zt=new de,Vt=new P,Ht=new Ae,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ot(){return I===null?X:1}let C=n;function Dt(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),C===null){const z="webgl2";if(C=Dt(z,b),C===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,St,ut,Bt,vt,E,y,O,j,tt,Z,Rt,dt,Mt,te,it,bt,kt,Gt,wt,ee,Zt,me,N;function pt(){et=new M0(C),et.init(),Zt=new rx(C,et),St=new p0(C,et,t,Zt),ut=new nx(C,et),St.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Bt=new b0(C),vt=new Hg,E=new sx(C,et,ut,vt,St,Zt,Bt),y=new g0(_),O=new v0(_),j=new Pd(C),me=new f0(C,j),tt=new y0(C,j,Bt,me),Z=new E0(C,tt,j,Bt),Gt=new w0(C,St,E),it=new m0(vt),Rt=new kg(_,y,O,et,St,me,it),dt=new dx(_,vt),Mt=new Vg,te=new jg(et),kt=new u0(_,y,O,ut,Z,d,c),bt=new tx(_,Z,St),N=new px(C,Bt,St,ut),wt=new d0(C,et,Bt),ee=new S0(C,et,Bt),Bt.programs=Rt.programs,_.capabilities=St,_.extensions=et,_.properties=vt,_.renderLists=Mt,_.shadowMap=bt,_.state=ut,_.info=Bt}pt();const $=new ux(_,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(H,Y,!1))},this.getSize=function(b){return b.set(H,Y)},this.setSize=function(b,z,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,Y=z,e.width=Math.floor(b*X),e.height=Math.floor(z*X),G===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(H*X,Y*X).floor()},this.setDrawingBufferSize=function(b,z,G){H=b,Y=z,X=G,e.width=Math.floor(b*G),e.height=Math.floor(z*G),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,z,G,W){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,z,G,W),ut.viewport(L.copy(Et).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy($t)},this.setScissor=function(b,z,G,W){b.isVector4?$t.set(b.x,b.y,b.z,b.w):$t.set(b,z,G,W),ut.scissor(R.copy($t).multiplyScalar(X).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){ut.setScissorTest(ae=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(b=!0,z=!0,G=!0){let W=0;if(b){let F=!1;if(I!==null){const ct=I.texture.format;F=ct===gc||ct===mc||ct===pc}if(F){const ct=I.texture.type,gt=ct===Hn||ct===Ti||ct===Ws||ct===us||ct===fc||ct===dc,Pt=kt.getClearColor(),Lt=kt.getClearAlpha(),Wt=Pt.r,Yt=Pt.g,It=Pt.b;gt?(g[0]=Wt,g[1]=Yt,g[2]=It,g[3]=Lt,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Wt,x[1]=Yt,x[2]=It,x[3]=Lt,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}z&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Mt.dispose(),te.dispose(),vt.dispose(),y.dispose(),O.dispose(),Z.dispose(),me.dispose(),N.dispose(),Rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Yc),$.removeEventListener("sessionend",jc),li.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const b=Bt.autoReset,z=bt.enabled,G=bt.autoUpdate,W=bt.needsUpdate,F=bt.type;pt(),Bt.autoReset=b,bt.enabled=z,bt.autoUpdate=G,bt.needsUpdate=W,bt.type=F}function mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const z=b.target;z.removeEventListener("dispose",qt),Te(z)}function Te(b){ke(b),vt.remove(b)}function ke(b){const z=vt.get(b).programs;z!==void 0&&(z.forEach(function(G){Rt.releaseProgram(G)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,G,W,F,ct){z===null&&(z=se);const gt=F.isMesh&&F.matrixWorld.determinant()<0,Pt=Zu(b,z,G,W,F);ut.setMaterial(W,gt);let Lt=G.index,Wt=1;if(W.wireframe===!0){if(Lt=tt.getWireframeAttribute(G),Lt===void 0)return;Wt=2}const Yt=G.drawRange,It=G.attributes.position;let oe=Yt.start*Wt,ge=(Yt.start+Yt.count)*Wt;ct!==null&&(oe=Math.max(oe,ct.start*Wt),ge=Math.min(ge,(ct.start+ct.count)*Wt)),Lt!==null?(oe=Math.max(oe,0),ge=Math.min(ge,Lt.count)):It!=null&&(oe=Math.max(oe,0),ge=Math.min(ge,It.count));const xe=ge-oe;if(xe<0||xe===1/0)return;me.setup(F,W,Pt,G,Lt);let Je,ce=wt;if(Lt!==null&&(Je=j.get(Lt),ce=ee,ce.setIndex(Je)),F.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*ot()),ce.setMode(C.LINES)):ce.setMode(C.TRIANGLES);else if(F.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),ut.setLineWidth(Ut*ot()),F.isLineSegments?ce.setMode(C.LINES):F.isLineLoop?ce.setMode(C.LINE_LOOP):ce.setMode(C.LINE_STRIP)}else F.isPoints?ce.setMode(C.POINTS):F.isSprite&&ce.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ut=F._multiDrawStarts,Rn=F._multiDrawCounts,le=F._multiDrawCount,fn=Lt?j.get(Lt).bytesPerElement:1,Ui=vt.get(W).currentProgram.getUniforms();for(let Qe=0;Qe<le;Qe++)Ui.setValue(C,"_gl_DrawID",Qe),ce.render(Ut[Qe]/fn,Rn[Qe])}else if(F.isInstancedMesh)ce.renderInstances(oe,xe,F.count);else if(G.isInstancedBufferGeometry){const Ut=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Rn=Math.min(G.instanceCount,Ut);ce.renderInstances(oe,xe,Rn)}else ce.render(oe,xe)};function ue(b,z,G){b.transparent===!0&&b.side===Ye&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,cr(b,z,G),b.side=oi,b.needsUpdate=!0,cr(b,z,G),b.side=Ye):cr(b,z,G)}this.compile=function(b,z,G=null){G===null&&(G=b),p=te.get(G),p.init(z),M.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==G&&b.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ct=F.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const Pt=ct[gt];ue(Pt,G,F),W.add(Pt)}else ue(ct,G,F),W.add(ct)}),M.pop(),p=null,W},this.compileAsync=function(b,z,G=null){const W=this.compile(b,z,G);return new Promise(F=>{function ct(){if(W.forEach(function(gt){vt.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){F(b);return}setTimeout(ct,10)}et.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let un=null;function Cn(b){un&&un(b)}function Yc(){li.stop()}function jc(){li.start()}const li=new iu;li.setAnimationLoop(Cn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(b){un=b,$.setAnimationLoop(b),b===null?li.stop():li.start()},$.addEventListener("sessionstart",Yc),$.addEventListener("sessionend",jc),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,z,I),p=te.get(b,M.length),p.init(z),M.push(p),zt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(zt),At=this.localClippingEnabled,at=it.init(this.clippingPlanes,At),m=Mt.get(b,v.length),m.init(),v.push(m),$.enabled===!0&&$.isPresenting===!0){const ct=_.xr.getDepthSensingMesh();ct!==null&&bo(ct,z,-1/0,_.sortObjects)}bo(b,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(lt,_t),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&kt.addToRenderList(m,b),this.info.render.frame++,at===!0&&it.beginShadows();const G=p.state.shadowsArray;bt.render(G,b,z),at===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ct=z.cameras;if(F.length>0)for(let gt=0,Pt=ct.length;gt<Pt;gt++){const Lt=ct[gt];Jc(W,F,b,Lt)}Q&&kt.render(b);for(let gt=0,Pt=ct.length;gt<Pt;gt++){const Lt=ct[gt];Zc(m,b,Lt,Lt.viewport)}}else F.length>0&&Jc(W,F,b,z),Q&&kt.render(b),Zc(m,b,z);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(_,b,z),me.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],at===!0&&it.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function bo(b,z,G,W){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){W&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(zt);const gt=Z.update(b),Pt=b.material;Pt.visible&&m.push(b,gt,Pt,G,Ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const gt=Z.update(b),Pt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ht.copy(gt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(zt)),Array.isArray(Pt)){const Lt=gt.groups;for(let Wt=0,Yt=Lt.length;Wt<Yt;Wt++){const It=Lt[Wt],oe=Pt[It.materialIndex];oe&&oe.visible&&m.push(b,gt,oe,G,Ht.z,It)}}else Pt.visible&&m.push(b,gt,Pt,G,Ht.z,null)}}const ct=b.children;for(let gt=0,Pt=ct.length;gt<Pt;gt++)bo(ct[gt],z,G,W)}function Zc(b,z,G,W){const F=b.opaque,ct=b.transmissive,gt=b.transparent;p.setupLightsView(G),at===!0&&it.setGlobalState(_.clippingPlanes,G),W&&ut.viewport(L.copy(W)),F.length>0&&ar(F,z,G),ct.length>0&&ar(ct,z,G),gt.length>0&&ar(gt,z,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Jc(b,z,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ai(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?tr:Hn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ct=p.state.transmissionRenderTarget[W.id],gt=W.viewport||L;ct.setSize(gt.z,gt.w);const Pt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(k),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),Q&&kt.render(G);const Lt=_.toneMapping;_.toneMapping=si;const Wt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),at===!0&&it.setGlobalState(_.clippingPlanes,W),ar(b,G,W),E.updateMultisampleRenderTarget(ct),E.updateRenderTargetMipmap(ct),et.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let It=0,oe=z.length;It<oe;It++){const ge=z[It],xe=ge.object,Je=ge.geometry,ce=ge.material,Ut=ge.group;if(ce.side===Ye&&xe.layers.test(W.layers)){const Rn=ce.side;ce.side=je,ce.needsUpdate=!0,Kc(xe,G,W,Je,ce,Ut),ce.side=Rn,ce.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(ct),E.updateRenderTargetMipmap(ct))}_.setRenderTarget(Pt),_.setClearColor(k,B),Wt!==void 0&&(W.viewport=Wt),_.toneMapping=Lt}function ar(b,z,G){const W=z.isScene===!0?z.overrideMaterial:null;for(let F=0,ct=b.length;F<ct;F++){const gt=b[F],Pt=gt.object,Lt=gt.geometry,Wt=W===null?gt.material:W,Yt=gt.group;Pt.layers.test(G.layers)&&Kc(Pt,z,G,Lt,Wt,Yt)}}function Kc(b,z,G,W,F,ct){b.onBeforeRender(_,z,G,W,F,ct),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(_,z,G,W,b,ct),F.transparent===!0&&F.side===Ye&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,_.renderBufferDirect(G,z,W,F,b,ct),F.side=oi,F.needsUpdate=!0,_.renderBufferDirect(G,z,W,F,b,ct),F.side=Ye):_.renderBufferDirect(G,z,W,F,b,ct),b.onAfterRender(_,z,G,W,F,ct)}function cr(b,z,G){z.isScene!==!0&&(z=se);const W=vt.get(b),F=p.state.lights,ct=p.state.shadowsArray,gt=F.state.version,Pt=Rt.getParameters(b,F.state,ct,z,G),Lt=Rt.getProgramCacheKey(Pt);let Wt=W.programs;W.environment=b.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",qt),Wt=new Map,W.programs=Wt);let Yt=Wt.get(Lt);if(Yt!==void 0){if(W.currentProgram===Yt&&W.lightsStateVersion===gt)return tl(b,Pt),Yt}else Pt.uniforms=Rt.getUniforms(b),b.onBeforeCompile(Pt,_),Yt=Rt.acquireProgram(Pt,Lt),Wt.set(Lt,Yt),W.uniforms=Pt.uniforms;const It=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=it.uniform),tl(b,Pt),W.needsLights=Ku(b),W.lightsStateVersion=gt,W.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Yt,W.uniformsList=null,Yt}function Qc(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Xr.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function tl(b,z){const G=vt.get(b);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function Zu(b,z,G,W,F){z.isScene!==!0&&(z=se),E.resetTextureUnits();const ct=z.fog,gt=W.isMeshStandardMaterial?z.environment:null,Pt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:xs,Lt=(W.isMeshStandardMaterial?O:y).get(W.envMap||gt),Wt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Yt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color;let xe=si;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=_.toneMapping);const Je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=Je!==void 0?Je.length:0,Ut=vt.get(W),Rn=p.state.lights;if(at===!0&&(At===!0||b!==S)){const an=b===S&&W.id===w;it.setState(W,b,an)}let le=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Rn.state.version||Ut.outputColorSpace!==Pt||F.isBatchedMesh&&Ut.batching===!1||!F.isBatchedMesh&&Ut.batching===!0||F.isBatchedMesh&&Ut.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ut.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ut.instancing===!1||!F.isInstancedMesh&&Ut.instancing===!0||F.isSkinnedMesh&&Ut.skinning===!1||!F.isSkinnedMesh&&Ut.skinning===!0||F.isInstancedMesh&&Ut.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ut.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ut.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ut.instancingMorph===!1&&F.morphTexture!==null||Ut.envMap!==Lt||W.fog===!0&&Ut.fog!==ct||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==it.numPlanes||Ut.numIntersection!==it.numIntersection)||Ut.vertexAlphas!==Wt||Ut.vertexTangents!==Yt||Ut.morphTargets!==It||Ut.morphNormals!==oe||Ut.morphColors!==ge||Ut.toneMapping!==xe||Ut.morphTargetsCount!==ce)&&(le=!0):(le=!0,Ut.__version=W.version);let fn=Ut.currentProgram;le===!0&&(fn=cr(W,z,F));let Ui=!1,Qe=!1,bs=!1;const _e=fn.getUniforms(),_n=Ut.uniforms;if(ut.useProgram(fn.program)&&(Ui=!0,Qe=!0,bs=!0),W.id!==w&&(w=W.id,Qe=!0),Ui||S!==b){ut.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),rd(ht),od(ht),_e.setValue(C,"projectionMatrix",ht)):_e.setValue(C,"projectionMatrix",b.projectionMatrix),_e.setValue(C,"viewMatrix",b.matrixWorldInverse);const Xn=_e.map.cameraPosition;Xn!==void 0&&Xn.setValue(C,Vt.setFromMatrixPosition(b.matrixWorld)),St.logarithmicDepthBuffer&&_e.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Qe=!0,bs=!0)}if(F.isSkinnedMesh){_e.setOptional(C,F,"bindMatrix"),_e.setOptional(C,F,"bindMatrixInverse");const an=F.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),_e.setValue(C,"boneTexture",an.boneTexture,E))}F.isBatchedMesh&&(_e.setOptional(C,F,"batchingTexture"),_e.setValue(C,"batchingTexture",F._matricesTexture,E),_e.setOptional(C,F,"batchingIdTexture"),_e.setValue(C,"batchingIdTexture",F._indirectTexture,E),_e.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(C,"batchingColorTexture",F._colorsTexture,E));const ws=G.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&Gt.update(F,G,fn),(Qe||Ut.receiveShadow!==F.receiveShadow)&&(Ut.receiveShadow=F.receiveShadow,_e.setValue(C,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_n.envMap.value=Lt,_n.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),Qe&&(_e.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&Ju(_n,bs),ct&&W.fog===!0&&dt.refreshFogUniforms(_n,ct),dt.refreshMaterialUniforms(_n,W,X,Y,p.state.transmissionRenderTarget[b.id]),Xr.upload(C,Qc(Ut),_n,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xr.upload(C,Qc(Ut),_n,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(C,"center",F.center),_e.setValue(C,"modelViewMatrix",F.modelViewMatrix),_e.setValue(C,"normalMatrix",F.normalMatrix),_e.setValue(C,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const an=W.uniformsGroups;for(let Xn=0,$n=an.length;Xn<$n;Xn++){const el=an[Xn];N.update(el,fn),N.bind(el,fn)}}return fn}function Ju(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Ku(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,z,G){vt.get(b.texture).__webglTexture=z,vt.get(b.depthTexture).__webglTexture=G;const W=vt.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const G=vt.get(b);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,G=0){I=b,T=z,A=G;let W=!0,F=null,ct=!1,gt=!1;if(b){const Lt=vt.get(b);if(Lt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Lt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Lt.__hasExternalTextures)E.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const It=b.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&vt.has(It)&&(b.width!==It.image.width||b.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(gt=!0);const Yt=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?F=Yt[z][G]:F=Yt[z],ct=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?F=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Yt)?F=Yt[G]:F=Yt,L.copy(b.viewport),R.copy(b.scissor),D=b.scissorTest}else L.copy(Et).multiplyScalar(X).floor(),R.copy($t).multiplyScalar(X).floor(),D=ae;if(ut.bindFramebuffer(C.FRAMEBUFFER,F)&&W&&ut.drawBuffers(b,F),ut.viewport(L),ut.scissor(R),ut.setScissorTest(D),ct){const Lt=vt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+z,Lt.__webglTexture,G)}else if(gt){const Lt=vt.get(b.texture),Wt=z||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,G||0,Wt)}w=-1},this.readRenderTargetPixels=function(b,z,G,W,F,ct,gt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(Pt=Pt[gt]),Pt){ut.bindFramebuffer(C.FRAMEBUFFER,Pt);try{const Lt=b.texture,Wt=Lt.format,Yt=Lt.type;if(!St.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-W&&G>=0&&G<=b.height-F&&C.readPixels(z,G,W,F,Zt.convert(Wt),Zt.convert(Yt),ct)}finally{const Lt=I!==null?vt.get(I).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,z,G,W,F,ct,gt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(Pt=Pt[gt]),Pt){const Lt=b.texture,Wt=Lt.format,Yt=Lt.type;if(!St.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-W&&G>=0&&G<=b.height-F){ut.bindFramebuffer(C.FRAMEBUFFER,Pt);const It=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.bufferData(C.PIXEL_PACK_BUFFER,ct.byteLength,C.STREAM_READ),C.readPixels(z,G,W,F,Zt.convert(Wt),Zt.convert(Yt),0);const oe=I!==null?vt.get(I).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,oe);const ge=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await sd(C,ge,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ct),C.deleteBuffer(It),C.deleteSync(ge),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,G=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(b.image.width*W),ct=Math.floor(b.image.height*W),gt=z!==null?z.x:0,Pt=z!==null?z.y:0;E.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,gt,Pt,F,ct),ut.unbindTexture()},this.copyTextureToTexture=function(b,z,G=null,W=null,F=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],z=arguments[2],F=arguments[3]||0,G=null);let ct,gt,Pt,Lt,Wt,Yt,It,oe,ge;const xe=b.isCompressedTexture?b.mipmaps[F]:b.image;G!==null?(ct=G.max.x-G.min.x,gt=G.max.y-G.min.y,Pt=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,Wt=G.min.y,Yt=G.isBox3?G.min.z:0):(ct=xe.width,gt=xe.height,Pt=xe.depth||1,Lt=0,Wt=0,Yt=0),W!==null?(It=W.x,oe=W.y,ge=W.z):(It=0,oe=0,ge=0);const Je=Zt.convert(z.format),ce=Zt.convert(z.type);let Ut;z.isData3DTexture?(E.setTexture3D(z,0),Ut=C.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(E.setTexture2DArray(z,0),Ut=C.TEXTURE_2D_ARRAY):(E.setTexture2D(z,0),Ut=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment);const Rn=C.getParameter(C.UNPACK_ROW_LENGTH),le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),fn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ui=C.getParameter(C.UNPACK_SKIP_ROWS),Qe=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Yt);const bs=b.isDataArrayTexture||b.isData3DTexture,_e=z.isDataArrayTexture||z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const _n=vt.get(b),ws=vt.get(z),an=vt.get(_n.__renderTarget),Xn=vt.get(ws.__renderTarget);ut.bindFramebuffer(C.READ_FRAMEBUFFER,an.__webglFramebuffer),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let $n=0;$n<Pt;$n++)bs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,F,Yt+$n),b.isDepthTexture?(_e&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,F,ge+$n),C.blitFramebuffer(Lt,Wt,ct,gt,It,oe,ct,gt,C.DEPTH_BUFFER_BIT,C.NEAREST)):_e?C.copyTexSubImage3D(Ut,F,It,oe,ge+$n,Lt,Wt,ct,gt):C.copyTexSubImage2D(Ut,F,It,oe,ge+$n,Lt,Wt,ct,gt);ut.bindFramebuffer(C.READ_FRAMEBUFFER,null),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ut,F,It,oe,ge,ct,gt,Pt,Je,ce,xe.data):z.isCompressedArrayTexture?C.compressedTexSubImage3D(Ut,F,It,oe,ge,ct,gt,Pt,Je,xe.data):C.texSubImage3D(Ut,F,It,oe,ge,ct,gt,Pt,Je,ce,xe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,It,oe,ct,gt,Je,ce,xe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,It,oe,xe.width,xe.height,Je,xe.data):C.texSubImage2D(C.TEXTURE_2D,F,It,oe,ct,gt,Je,ce,xe);C.pixelStorei(C.UNPACK_ROW_LENGTH,Rn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,fn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ui),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qe),F===0&&z.generateMipmaps&&C.generateMipmap(Ut),ut.unbindTexture()},this.copyTextureToTexture3D=function(b,z,G=null,W=null,F=0){return b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,b=arguments[2],z=arguments[3],F=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,G,W,F)},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),ut.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,ut.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class Mc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uu extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new P;class Zr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jr extends Pi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const Rs=new P,Zi=new P,Ji=new P,Ki=new nt,Ps=new nt,fu=new de,Pr=new P,Ls=new P,Lr=new P,Ql=new nt,Ko=new nt,th=new nt;class Qa extends Le{constructor(t=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mx(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new Zr(n,3,0,!1)),ji.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ir(Pr.set(-.5,-.5,0),Ji,o,Zi,s,r),Ir(Ls.set(.5,-.5,0),Ji,o,Zi,s,r),Ir(Lr.set(.5,.5,0),Ji,o,Zi,s,r),Ql.set(0,0),Ko.set(1,0),th.set(1,1);let a=t.ray.intersectTriangle(Pr,Ls,Lr,!1,Rs);if(a===null&&(Ir(Ls.set(-.5,.5,0),Ji,o,Zi,s,r),Ko.set(0,1),a=t.ray.intersectTriangle(Pr,Lr,Ls,!1,Rs),a===null))return;const c=t.ray.origin.distanceTo(Rs);c<t.near||c>t.far||e.push({distance:c,point:Rs.clone(),uv:ln.getInterpolation(Rs,Pr,Ls,Lr,Ql,Ko,th,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ir(i,t,e,n,s,r){Ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ps.x=r*Ki.x-s*Ki.y,Ps.y=s*Ki.x+r*Ki.y):Ps.copy(Ki),i.copy(t),i.x+=Ps.x,i.y+=Ps.y,i.applyMatrix4(fu)}class du extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,c,h=Ke,l=Ke,u,f){super(null,o,a,c,h,l,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eh extends rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new de,nh=new de,Dr=[],ih=new ci,gx=new de,Is=new we,Ds=new Ri;class sh extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new eh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),ih.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(ih)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Ds.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),nh.multiplyMatrices(n,Qi),Is.matrixWorld=nh,Is.raycast(t,Dr);for(let o=0,a=Dr.length;o<a;o++){const c=Dr[o];c.instanceId=r,c.object=this,e.push(c)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new du(new Float32Array(s*this.count),s,this.count,fo,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pu extends Pi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kr=new P,Qr=new P,rh=new de,Us=new jh,Ur=new Ri,Qo=new P,oh=new P;class xx extends Le{constructor(t=new Re,e=new pu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Kr.fromBufferAttribute(e,s-1),Qr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Kr.distanceTo(Qr);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;rh.copy(s).invert(),Us.copy(t.ray).applyMatrix4(rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=h){const p=l.getX(x),v=l.getX(x+1),M=Nr(this,t,Us,c,p,v);M&&e.push(M)}if(this.isLineLoop){const x=l.getX(g-1),m=l.getX(d),p=Nr(this,t,Us,c,x,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=h){const p=Nr(this,t,Us,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Nr(this,t,Us,c,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Kr.fromBufferAttribute(o,s),Qr.fromBufferAttribute(o,r),e.distanceSqToSegment(Kr,Qr,Qo,oh)>n)return;Qo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qo);if(!(c<t.near||c>t.far))return{distance:c,point:oh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ah=new P,ch=new P;class _x extends xx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ah.fromBufferAttribute(e,s),ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ah.distanceTo(ch);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mu extends Ve{constructor(t,e,n,s,r,o,a,c,h){super(t,e,n,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const l=n[s],f=n[s+1]-l,d=(o-l)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new de;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);l<=h&&(h=l,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),f<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yc extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=h-this.aY;c=f*l-d*u+this.aX,h=f*u+d*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vx extends yc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){s(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,l,u){let f=(o-r)/h-(a-r)/(h+l)+(a-o)/l,d=(a-o)/l-(c-o)/(l+u)+(c-a)/u;f*=l,d*=l,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const zr=new P,ta=new Sc,ea=new Sc,na=new Sc;class Mx extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,l;this.closed||a>0?h=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),h=zr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?l=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(l),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ta.initNonuniformCatmullRom(h.x,u.x,f.x,l.x,g,x,m),ea.initNonuniformCatmullRom(h.y,u.y,f.y,l.y,g,x,m),na.initNonuniformCatmullRom(h.z,u.z,f.z,l.z,g,x,m)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(h.x,u.x,f.x,l.x,this.tension),ea.initCatmullRom(h.y,u.y,f.y,l.y,this.tension),na.initCatmullRom(h.z,u.z,f.z,l.z,this.tension));return n.set(ta.calc(c),ea.calc(c),na.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function yx(i,t){const e=1-i;return e*e*t}function Sx(i,t){return 2*(1-i)*i*t}function bx(i,t){return i*i*t}function Hs(i,t,e,n){return yx(i,t)+Sx(i,e)+bx(i,n)}function wx(i,t){const e=1-i;return e*e*e*t}function Ex(i,t){const e=1-i;return 3*e*e*i*t}function Tx(i,t){return 3*(1-i)*i*i*t}function Ax(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return wx(i,t)+Ex(i,e)+Tx(i,n)+Ax(i,s)}class gu extends Tn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cx extends Tn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xu extends Tn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rx extends Tn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends Tn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bc extends Tn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y),Hs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],h=s[o],l=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(lh(a,c.x,h.x,l.x,u.x),lh(a,c.y,h.y,l.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var to=Object.freeze({__proto__:null,ArcCurve:vx,CatmullRomCurve3:Mx,CubicBezierCurve:gu,CubicBezierCurve3:Cx,EllipseCurve:yc,LineCurve:xu,LineCurve3:Rx,QuadraticBezierCurve:_u,QuadraticBezierCurve3:bc,SplineCurve:vu});class Px extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){const l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new to[s.type]().fromJSON(s))}return this}}class tc extends Px{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xu(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _u(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new gu(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const h=new yc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wc extends Re{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],h=[],l=1/e,u=new P,f=new nt,d=new P,g=new P,x=new P;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=e;v++){const M=n+v*l*s,_=Math.sin(M),U=Math.cos(M);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*U,o.push(u.x,u.y,u.z),f.x=v/e,f.y=T/(t.length-1),a.push(f.x,f.y);const A=c[3*T+0]*_,I=c[3*T+1],w=c[3*T+0]*U;h.push(A,I,w)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const _=M+v*t.length,U=_,T=_+t.length,A=_+t.length+1,I=_+1;r.push(U,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.points,t.segments,t.phiStart,t.phiLength)}}class nr extends wc{constructor(t=1,e=1,n=4,s=8){const r=new tc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new nr(t.radius,t.length,t.capSegments,t.radialSegments)}}class ai extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],h=new P,l=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[f]/t+1)/2,l.y=(o[f+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function v(){const _=new P,U=new P;let T=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const w=[],S=I/r,L=S*(e-t)+t;for(let R=0;R<=s;R++){const D=R/s,k=D*c+a,B=Math.sin(k),H=Math.cos(k);U.x=L*B,U.y=-S*n+m,U.z=L*H,u.push(U.x,U.y,U.z),_.set(B,A,H).normalize(),f.push(_.x,_.y,_.z),d.push(D,1-S),w.push(g++)}x.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){const S=x[w][I],L=x[w+1][I],R=x[w+1][I+1],D=x[w][I+1];(t>0||w!==0)&&(l.push(S,L,D),T+=3),(e>0||w!==r-1)&&(l.push(L,R,D),T+=3)}h.addGroup(p,T,0),p+=T}function M(_){const U=g,T=new nt,A=new P;let I=0;const w=_===!0?t:e,S=_===!0?1:-1;for(let R=1;R<=s;R++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let R=0;R<=s;R++){const k=R/s*c+a,B=Math.cos(k),H=Math.sin(k);A.x=w*H,A.y=m*S,A.z=w*B,u.push(A.x,A.y,A.z),f.push(0,S,0),T.x=B*.5+.5,T.y=H*.5*S+.5,d.push(T.x,T.y),g++}for(let R=0;R<s;R++){const D=U+R,k=L+R;_===!0?l.push(k,k+1,D):l.push(k+1,k,D),I+=3}h.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn extends ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ec extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),l(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new P,_=new P,U=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],_),d(e[T+2],U),c(M,_,U,v)}function c(v,M,_,U){const T=U+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const w=v.clone().lerp(_,I/T),S=M.clone().lerp(_,I/T),L=T-I;for(let R=0;R<=L;R++)R===0&&I===T?A[I][R]=w:A[I][R]=w.clone().lerp(S,R/L)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){const S=Math.floor(w/2);w%2===0?(f(A[I][S+1]),f(A[I+1][S]),f(A[I][S])):(f(A[I][S+1]),f(A[I+1][S+1]),f(A[I+1][S]))}}function h(v){const M=new P;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function l(){const v=new P;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const _=m(v)/2/Math.PI+.5,U=p(v)/Math.PI+.5;o.push(_,1-U)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],_=o[v+2],U=o[v+4],T=Math.max(M,_,U),A=Math.min(M,_,U);T>.9&&A<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),U<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){const _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const v=new P,M=new P,_=new P,U=new P,T=new nt,A=new nt,I=new nt;for(let w=0,S=0;w<r.length;w+=9,S+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),U.copy(v).add(M).add(_).divideScalar(3);const L=m(U);x(T,S+0,v,L),x(A,S+2,M,L),x(I,S+4,_,L)}}function x(v,M,_,U){U<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=U/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.vertices,t.indices,t.radius,t.details)}}class Li extends tc{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new tc().fromJSON(s))}return this}}const Lx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Mu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,h,l,u,f,d;if(n&&(r=zx(i,t,r,e)),i.length>80*e){a=h=i[0],c=l=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>h&&(h=u),f>l&&(l=f);d=Math.max(h-a,l-c),d=d!==0?32767/d:0}return $s(r,o,e,a,c,d,0),o}};function Mu(i,t,e,n,s){let r,o;if(s===qx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=hh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=hh(r,i[r],i[r+1],o);return o&&xo(o,o.next)&&(Ys(o),o=o.next),o}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hx(i,n,s,r);let a=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Dx(i,n,s,r):Ix(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Ys(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Ux(Ci(i),t,e),$s(i,t,e,n,s,r,2)):o===2&&Nx(i,t,e,n,s,r):$s(Ci(i),t,e,n,s,r,1);break}}}function Ix(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,l=s<r?s<o?s:o:r<o?r:o,u=a<c?a<h?a:h:c<h?c:h,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>h?a:h:c>h?c:h;let g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=f&&g.y>=u&&g.y<=d&&ns(s,a,r,c,o,h,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dx(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,c=r.x,h=o.x,l=s.y,u=r.y,f=o.y,d=a<c?a<h?a:h:c<h?c:h,g=l<u?l<f?l:f:u<f?u:f,x=a>c?a>h?a:h:c>h?c:h,m=l>u?l>f?l:f:u>f?u:f,p=ec(d,g,t,e,n),v=ec(x,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=v;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ns(a,l,c,u,h,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ns(a,l,c,u,h,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ns(a,l,c,u,h,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ns(a,l,c,u,h,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ux(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!xo(s,r)&&yu(s,n,n.next,r)&&qs(s,r)&&qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ys(n),Ys(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function Nx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wx(o,a)){let c=Su(o,a);o=Ci(o,o.next),c=Ci(c,c.next),$s(o,t,e,n,s,r,0),$s(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function zx(i,t,e,n){const s=[];let r,o,a,c,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,h=Mu(i,a,c,n,!1),h===h.next&&(h.steiner=!0),s.push(Vx(h));for(s.sort(Fx),r=0;r<s.length;r++)e=Ox(s[r],e);return e}function Fx(i,t){return i.x-t.x}function Ox(i,t){const e=Bx(i,t);if(!e)return t;const n=Su(e,i);return Ci(n,n.next),Ci(e,e.next)}function Bx(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,h=s.y;let l=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ns(o<h?r:n,o,c,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),qs(e,i)&&(u<l||u===l&&(e.x>s.x||e.x===s.x&&kx(s,e)))&&(s=e,l=u)),e=e.next;while(e!==a);return s}function kx(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Hx(i,t,e,n){let s=i;do s.z===0&&(s.z=ec(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gx(s)}function Gx(i){let t,e,n,s,r,o,a,c,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function ec(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ns(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xx(i,t)&&(qs(i,t)&&qs(t,i)&&$x(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||xo(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xo(i,t){return i.x===t.x&&i.y===t.y}function yu(i,t,e,n){const s=Or(Ee(i,t,e)),r=Or(Ee(i,t,n)),o=Or(Ee(e,n,i)),a=Or(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Fr(i,e,t)||r===0&&Fr(i,n,t)||o===0&&Fr(e,i,n)||a===0&&Fr(e,t,n))}function Fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Or(i){return i>0?1:i<0?-1:0}function Xx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function $x(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Su(i,t){const e=new nc(i.i,i.x,i.y),n=new nc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hh(i,t,e,n){const s=new nc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ri{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ri.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];uh(t),fh(n,t);let o=t.length;e.forEach(uh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,fh(n,e[c]);const a=Lx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function uh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Tc extends Re{constructor(t=new Li([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const h=t[a];o(h)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Yx;let M,_=!1,U,T,A,I;p&&(M=p.getSpacedPoints(l),_=!0,f=!1,U=p.computeFrenetFrames(l,!1),T=new P,A=new P,I=new P),f||(m=0,d=0,g=0,x=0);const w=a.extractPoints(h);let S=w.shape;const L=w.holes;if(!ri.isClockWise(S)){S=S.reverse();for(let Q=0,ot=L.length;Q<ot;Q++){const C=L[Q];ri.isClockWise(C)&&(L[Q]=C.reverse())}}const D=ri.triangulateShape(S,L),k=S;for(let Q=0,ot=L.length;Q<ot;Q++){const C=L[Q];S=S.concat(C)}function B(Q,ot,C){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ot,C)}const H=S.length,Y=D.length;function X(Q,ot,C){let Dt,et,St;const ut=Q.x-ot.x,Bt=Q.y-ot.y,vt=C.x-Q.x,E=C.y-Q.y,y=ut*ut+Bt*Bt,O=ut*E-Bt*vt;if(Math.abs(O)>Number.EPSILON){const j=Math.sqrt(y),tt=Math.sqrt(vt*vt+E*E),Z=ot.x-Bt/j,Rt=ot.y+ut/j,dt=C.x-E/tt,Mt=C.y+vt/tt,te=((dt-Z)*E-(Mt-Rt)*vt)/(ut*E-Bt*vt);Dt=Z+ut*te-Q.x,et=Rt+Bt*te-Q.y;const it=Dt*Dt+et*et;if(it<=2)return new nt(Dt,et);St=Math.sqrt(it/2)}else{let j=!1;ut>Number.EPSILON?vt>Number.EPSILON&&(j=!0):ut<-Number.EPSILON?vt<-Number.EPSILON&&(j=!0):Math.sign(Bt)===Math.sign(E)&&(j=!0),j?(Dt=-Bt,et=ut,St=Math.sqrt(y)):(Dt=ut,et=Bt,St=Math.sqrt(y/2))}return new nt(Dt/St,et/St)}const lt=[];for(let Q=0,ot=k.length,C=ot-1,Dt=Q+1;Q<ot;Q++,C++,Dt++)C===ot&&(C=0),Dt===ot&&(Dt=0),lt[Q]=X(k[Q],k[C],k[Dt]);const _t=[];let Et,$t=lt.concat();for(let Q=0,ot=L.length;Q<ot;Q++){const C=L[Q];Et=[];for(let Dt=0,et=C.length,St=et-1,ut=Dt+1;Dt<et;Dt++,St++,ut++)St===et&&(St=0),ut===et&&(ut=0),Et[Dt]=X(C[Dt],C[St],C[ut]);_t.push(Et),$t=$t.concat(Et)}for(let Q=0;Q<m;Q++){const ot=Q/m,C=d*Math.cos(ot*Math.PI/2),Dt=g*Math.sin(ot*Math.PI/2)+x;for(let et=0,St=k.length;et<St;et++){const ut=B(k[et],lt[et],Dt);ht(ut.x,ut.y,-C)}for(let et=0,St=L.length;et<St;et++){const ut=L[et];Et=_t[et];for(let Bt=0,vt=ut.length;Bt<vt;Bt++){const E=B(ut[Bt],Et[Bt],Dt);ht(E.x,E.y,-C)}}}const ae=g+x;for(let Q=0;Q<H;Q++){const ot=f?B(S[Q],$t[Q],ae):S[Q];_?(A.copy(U.normals[0]).multiplyScalar(ot.x),T.copy(U.binormals[0]).multiplyScalar(ot.y),I.copy(M[0]).add(A).add(T),ht(I.x,I.y,I.z)):ht(ot.x,ot.y,0)}for(let Q=1;Q<=l;Q++)for(let ot=0;ot<H;ot++){const C=f?B(S[ot],$t[ot],ae):S[ot];_?(A.copy(U.normals[Q]).multiplyScalar(C.x),T.copy(U.binormals[Q]).multiplyScalar(C.y),I.copy(M[Q]).add(A).add(T),ht(I.x,I.y,I.z)):ht(C.x,C.y,u/l*Q)}for(let Q=m-1;Q>=0;Q--){const ot=Q/m,C=d*Math.cos(ot*Math.PI/2),Dt=g*Math.sin(ot*Math.PI/2)+x;for(let et=0,St=k.length;et<St;et++){const ut=B(k[et],lt[et],Dt);ht(ut.x,ut.y,u+C)}for(let et=0,St=L.length;et<St;et++){const ut=L[et];Et=_t[et];for(let Bt=0,vt=ut.length;Bt<vt;Bt++){const E=B(ut[Bt],Et[Bt],Dt);_?ht(E.x,E.y+M[l-1].y,M[l-1].x+C):ht(E.x,E.y,u+C)}}}J(),at();function J(){const Q=s.length/3;if(f){let ot=0,C=H*ot;for(let Dt=0;Dt<Y;Dt++){const et=D[Dt];zt(et[2]+C,et[1]+C,et[0]+C)}ot=l+m*2,C=H*ot;for(let Dt=0;Dt<Y;Dt++){const et=D[Dt];zt(et[0]+C,et[1]+C,et[2]+C)}}else{for(let ot=0;ot<Y;ot++){const C=D[ot];zt(C[2],C[1],C[0])}for(let ot=0;ot<Y;ot++){const C=D[ot];zt(C[0]+H*l,C[1]+H*l,C[2]+H*l)}}n.addGroup(Q,s.length/3-Q,0)}function at(){const Q=s.length/3;let ot=0;At(k,ot),ot+=k.length;for(let C=0,Dt=L.length;C<Dt;C++){const et=L[C];At(et,ot),ot+=et.length}n.addGroup(Q,s.length/3-Q,1)}function At(Q,ot){let C=Q.length;for(;--C>=0;){const Dt=C;let et=C-1;et<0&&(et=Q.length-1);for(let St=0,ut=l+m*2;St<ut;St++){const Bt=H*St,vt=H*(St+1),E=ot+Dt+Bt,y=ot+et+Bt,O=ot+et+vt,j=ot+Dt+vt;Vt(E,y,O,j)}}}function ht(Q,ot,C){c.push(Q),c.push(ot),c.push(C)}function zt(Q,ot,C){Ht(Q),Ht(ot),Ht(C);const Dt=s.length/3,et=v.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);se(et[0]),se(et[1]),se(et[2])}function Vt(Q,ot,C,Dt){Ht(Q),Ht(ot),Ht(Dt),Ht(ot),Ht(C),Ht(Dt);const et=s.length/3,St=v.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);se(St[0]),se(St[1]),se(St[3]),se(St[1]),se(St[2]),se(St[3])}function Ht(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function se(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new to[s.type]().fromJSON(s)),new Tc(n,t.options)}}const Yx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[s*3],l=t[s*3+1];return[new nt(r,o),new nt(a,c),new nt(h,l)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-l)<Math.abs(o-h)?[new nt(o,1-c),new nt(h,1-u),new nt(f,1-g),new nt(x,1-p)]:[new nt(a,1-c),new nt(l,1-u),new nt(d,1-g),new nt(m,1-p)]}};function jx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ac extends Ec{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ac(t.radius,t.detail)}}class _o extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],h=[],l=[];let u=t;const f=(e-t)/s,d=new P,g=new nt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),h.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,l.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const v=p+m,M=v,_=v+n+1,U=v+n+2,T=v+1;a.push(M,_,T),a.push(_,U,T)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ys extends Re{constructor(t=new Li([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let l=0;l<t.length;l++)h(t[l]),this.addGroup(a,c,l),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function h(l){const u=s.length/3,f=l.extractPoints(e);let d=f.shape;const g=f.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ri.isClockWise(v)===!0&&(g[m]=v.reverse())}const x=ri.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){const v=x[m],M=v[0]+u,_=v[1]+u,U=v[2]+u;n.push(M,_,U),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Zx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ys(n,t.curveSegments)}}function Zx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Kt extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const l=[],u=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let U=0;U<=e;U++){const T=U/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-M),v.push(h++)}l.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const M=l[p][v+1],_=l[p][v],U=l[p+1][v],T=l[p+1][v+1];(p!==0||o>0)&&d.push(M,_,T),(p!==n-1||c<Math.PI)&&d.push(_,U,T)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ze extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],h=[],l=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),f.subVectors(u,l).normalize(),c.push(f.x,f.y,f.z),h.push(g/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Cc extends Re{constructor(t=new bc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,h=new nt;let l=new P;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),v(),p()}function m(M){l=t.getPointAt(M/e,l);const _=o.normals[M],U=o.binormals[M];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,I=Math.sin(A),w=-Math.cos(A);c.x=w*_.x+I*U.x,c.y=w*_.y+I*U.y,c.z=w*_.z+I*U.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=l.x+n*c.x,a.y=l.y+n*c.y,a.z=l.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const U=(s+1)*(M-1)+(_-1),T=(s+1)*M+(_-1),A=(s+1)*M+_,I=(s+1)*(M-1)+_;g.push(U,T,I),g.push(T,A,I)}}function v(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)h.x=M/e,h.y=_/s,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Cc(new to[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jx extends Pi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class bu extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wu extends bu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ia=new de,dh=new P,ph=new P;class Kx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qx extends Kx{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eo extends bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);const t_=(()=>{const i=new Uint8Array([95,165,225,255]),t=new du(i,i.length,1,fo);return t.minFilter=t.magFilter=Ke,t.needsUpdate=!0,t})(),sa=new Map;function q(i,t={}){const e=i+JSON.stringify(t);if(!t.noCache&&sa.has(e))return sa.get(e);const{noCache:n,...s}=t,r=new Jx({color:i,gradientMap:t_,...s});return n||sa.set(e,r),r}const ra=new Map;function Me(i,t={}){const e=i+JSON.stringify(t);if(ra.has(e))return ra.get(e);const n=new mo({color:i,...t});return ra.set(e,n),n}function ye(i,t=!1){return i.traverse(e=>{e.isMesh&&(e.castShadow=!0,t&&(e.receiveShadow=!0))}),i}const oa=new Map;function Ct(i,t){return oa.has(i)||oa.set(i,t()),oa.get(i)}const V=(i,t)=>new we(i,t);function e_(i,{y:t=0,z:e=.3,s:n=1,spread:s=.12}={}){const r=Ct("eye",()=>new Kt(.045,8,6));for(const c of[-1,1]){const h=V(r,Me(2234900));h.position.set(s*c*n,t,e),h.scale.setScalar(n),i.add(h)}const o=V(Ct("smile",()=>new Ze(.06,.014,6,12,Math.PI)),Me(2234900));o.position.set(0,t-.06*n,e),o.rotation.z=Math.PI,o.scale.setScalar(n),i.add(o);const a=Ct("cheek",()=>new Kt(.03,8,6));for(const c of[-1,1]){const h=V(a,Me(16748451,{transparent:!0,opacity:.8}));h.position.set(s*1.6*c*n,t-.045*n,e-.01),h.scale.set(n*1.2,n*.8,n*.5),i.add(h)}}const Eu={zaid:{outfit:5032432,accent:16777215,ring:2068438},amina:{outfit:16744118,accent:9338111,ring:14700682}};function Rc({girl:i=!1,outfit:t=4171488,accent:e=16777215,skinTone:n,adult:s=!1,beard:r=0,hair:o=2824720}={}){const a=new Tt,c=new Tt;c.name="rig",a.add(c);const h=q(n??(i?13011550:11564624)),l=V(new ie(.34,.55,1.15,16),q(t));l.position.y=.72,c.add(l);const u=V(new Ze(.54,.05,6,20),q(e));u.rotation.x=Math.PI/2,u.position.y=.2,c.add(u);for(const m of[-1,1]){const p=V(new Kt(.13,10,8),q(4861714));p.scale.set(1,.6,1.4),p.position.set(.18*m,.07,.1),p.name=m<0?"shoeL":"shoeR",a.add(p);const v=new Tt;v.position.set(.4*m,1.18,0);const M=V(new nr(.1,.45,4,8),q(t));M.position.y=-.28,v.add(M);const _=V(new Kt(.1,10,8),h);_.position.y=-.58,v.add(_),v.rotation.z=.25*m,v.name=m<0?"armL":"armR",c.add(v)}const f=new Tt;f.position.y=1.72,f.name="head";const d=V(new Kt(.42,22,18),h);if(f.add(d),i){const m=V(new Kt(.5,22,18,0,Math.PI*2,0,Math.PI*.62),q(e));m.rotation.x=-.35,m.position.set(0,.02,-.08),f.add(m);const p=V(new Kt(.5,20,16),q(e));p.scale.set(1,1,.8),p.position.set(0,-.02,-.14),f.add(p);const v=V(new Wn(.62,.7,20,1,!0),q(e,{side:Ye}));v.position.y=-.52,f.add(v)}else{const m=V(new Kt(.43,20,14,0,Math.PI*2,0,Math.PI*.42),q(o));m.rotation.x=-.25,f.add(m);const p=V(new ie(.34,.37,.2,20),q(e));p.position.y=.34,p.rotation.x=-.12,f.add(p);const v=V(new Kt(.34,20,8,0,Math.PI*2,0,Math.PI/2),q(e));if(v.scale.y=.35,v.position.y=.43,v.rotation.x=-.12,f.add(v),r){const M=V(new Kt(.3,16,10,0,Math.PI*2,Math.PI*.45,Math.PI*.55),q(r));M.position.set(0,-.12,.12),M.scale.set(1,1.1,.9),f.add(M)}}const g=Ct("kidEye",()=>new Kt(.06,10,8));for(const m of[-1,1]){const p=V(g,Me(2759184));p.position.set(.14*m,.05,.38),p.scale.set(1,1.25,.6),f.add(p);const v=V(new Kt(.06,8,6),Me(16748451,{transparent:!0,opacity:.6}));v.position.set(.25*m,-.08,.32),v.scale.z=.4,f.add(v)}const x=V(new Ze(.1,.022,6,14,Math.PI),Me(7023386));return x.rotation.z=Math.PI,x.position.set(0,r?-.14:-.1,.4),r&&(x.position.z=.43),f.add(x),c.add(f),s&&a.scale.setScalar(1.18),ye(a)}const wi={idle:{armL:[0,0,-.25],armR:[0,0,.25]},wave:{armL:[0,0,-.25],armR:[0,0,2.6],tilt:.12},cheer:{armL:[0,0,-2.5],armR:[0,0,2.5],nod:-.08},carry:{armL:[-1.25,0,-.1],armR:[-1.25,0,.1]},walk:{armL:[.5,0,-.25],armR:[-.5,0,.25],step:.18,lean:.05},think:{armL:[0,0,-.25],armR:[-2.6,0,.6],tilt:-.1},point:{armL:[0,0,-.25],armR:[-1.5,0,.3],tilt:.05}};function Pc(i,t=wi.idle){const e=(a,c)=>{const h=i.getObjectByName(a);h&&c&&h.rotation.set(c[0],c[1],c[2])};e("armL",t.armL||wi.idle.armL),e("armR",t.armR||wi.idle.armR);const n=i.getObjectByName("head");n&&n.rotation.set(t.nod||0,0,t.tilt||0);const s=i.getObjectByName("rig");s&&(s.rotation.z=t.lean||0);const r=i.getObjectByName("shoeL"),o=i.getObjectByName("shoeR");return r&&o&&(r.position.z=.1+(t.step||0),o.position.z=.1-(t.step||0)),i}function n_(i){const t=Eu[i],e=Rc({girl:i==="amina",outfit:t.outfit,accent:t.accent}),n=V(new _o(.62,.8,32),Me(t.ring,{transparent:!0,opacity:.85,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.03,n.name="ring",n.renderOrder=1,e.add(n),e}const mh=[{girl:!0,outfit:2792847,accent:16032353,skinTone:11037509},{girl:!1,outfit:15858414,accent:16777215,skinTone:9263675,beard:3811872},{girl:!0,outfit:11766015,accent:15787775,skinTone:14263418},{girl:!1,outfit:7114431,accent:3359068,skinTone:13011550,beard:10132122},{girl:!1,outfit:15167313,accent:16765286,skinTone:15251855,hair:5913114}];function ir(i=0){return Rc({...mh[i%mh.length],adult:!0})}function i_(i){const t=new Li;return t.moveTo(0,-i),t.bezierCurveTo(i*1.4,-i*.1,i*.9,i*1.1,0,i*.45),t.bezierCurveTo(-i*.9,i*1.1,-i*1.4,-i*.1,0,-i),new Tc(t,{depth:.02,bevelEnabled:!1})}function vo(){const i=new Tt,t=V(Ct("fbox",()=>new Ft(1.45,1,1.25)),q(14263387));t.position.y=.5,i.add(t);const e=Ct("fflap",()=>new Ft(1.45,.04,.55));for(const a of[-1,1]){const c=V(e,q(13209413));c.position.set(0,1.07,.4*a),c.rotation.x=.55*a,i.add(c)}const n=V(Ct("apple",()=>new Kt(.22,12,10)),q(15087942));n.position.set(-.35,1.08,0),i.add(n);const s=V(Ct("loaf",()=>new nr(.14,.35,4,8)),q(15843965));s.rotation.z=Math.PI/2.4,s.position.set(.3,1.1,0),i.add(s);const r=V(Ct("heart2",()=>i_(.2)),q(16735631));r.position.set(0,.36,.63),i.add(r),e_(i,{y:.72,z:.63,s:1.5});const o=Ct("handle",()=>new Ze(.18,.04,6,12,Math.PI));for(const a of[-1,1]){const c=V(o,q(9065760));c.position.set(.73*a,.7,0),c.rotation.set(0,Math.PI/2,-Math.PI/2*a),i.add(c)}return ye(i)}function no(){const i=new Tt,t=V(Ct("bottle",()=>new ie(.24,.26,.7,14)),q(8377599,{transparent:!0,opacity:.9}));t.position.y=.36,i.add(t);const e=V(Ct("bottleTop",()=>new Kt(.24,14,8,0,Math.PI*2,0,Math.PI/2)),q(8377599));e.position.y=.7,i.add(e);const n=V(Ct("cap",()=>new ie(.1,.1,.12,10)),q(1929174));n.position.y=.96,i.add(n);const s=V(Ct("blabel",()=>new ie(.262,.262,.24,14)),q(16777215));s.position.y=.38,i.add(s);const r=V(Ct("drop",()=>new Kt(.07,8,6)),Me(1929174));return r.position.set(0,.38,.26),r.scale.set(1,1.3,.4),i.add(r),ye(i)}function Tu(){const i=new Tt,t=V(Ct("roll",()=>new ie(.3,.3,.9,16)),q(15167313));t.rotation.z=Math.PI/2,t.position.y=.3,i.add(t);for(const n of[-.28,0,.28]){const s=V(Ct("stripe",()=>new ie(.305,.305,.09,16)),q(16765286));s.rotation.z=Math.PI/2,s.position.set(n,.3,0),i.add(s)}const e=V(Ct("tie",()=>new Ze(.31,.03,6,16)),q(7031338));return e.rotation.y=Math.PI/2,e.position.set(.14,.3,0),i.add(e),ye(i)}function s_(){const i=new Tt,t=[3835647,8449433,16735631];for(let e=0;e<3;e++){const n=new Tt,s=V(Ct("bookC",()=>new Ft(.72,.16,.52)),q(t[e]));n.add(s);const r=V(Ct("bookP",()=>new Ft(.66,.12,.5)),q(16643811));r.position.set(.04,0,.02),n.add(r),n.position.y=.09+e*.17,n.rotation.y=(e-1)*.18,i.add(n)}return ye(i)}function Lc(){const i=new Tt,t=V(Ct("bowl",()=>new Kt(.42,18,10,0,Math.PI*2,Math.PI/2,Math.PI/2)),q(2792847,{side:Ye}));t.position.y=.42,i.add(t);const e=V(Ct("bowlRim",()=>new Ze(.42,.04,6,20)),q(16765286));e.rotation.x=Math.PI/2,e.position.y=.42,i.add(e);const n=Ct("dateS",()=>new Kt(.1,10,8)),s=[[0,.5,0],[.16,.47,.1],[-.16,.47,.08],[.1,.47,-.15],[-.1,.48,-.14],[.02,.6,.02],[.2,.46,-.05]];for(const[r,o,a]of s){const c=V(n,q(8010518));c.scale.set(1.5,.95,1),c.position.set(r,o,a),c.rotation.y=r*5,i.add(c)}return ye(i)}function js(){const i=new Tt,t=V(Ct("gift",()=>new Ft(.66,.58,.66)),q(16735631));t.position.y=.29,i.add(t);const e=V(Ct("ribA",()=>new Ft(.68,.6,.12)),q(16769126));e.position.y=.29,i.add(e);const n=V(Ct("ribB",()=>new Ft(.12,.6,.68)),q(16769126));n.position.y=.29,i.add(n);const s=Ct("bow",()=>new Ze(.12,.04,6,12));for(const r of[-1,1]){const o=V(s,q(16769126));o.position.set(.11*r,.68,0),o.rotation.set(0,0,.5*r),i.add(o)}return ye(i)}const r_={water:no,blanket:Tu,books:s_,dates:Lc,gift:js,food:vo};function Au(i){return(r_[i]||js)()}function Cu(){const i=new Tt,t=V(new Ft(1.6,.18,1.3),q(13208125));t.position.y=.45,i.add(t);const e=new Ft(1.6,.35,.08),n=new Ft(.08,.35,1.3);for(const a of[-1,1]){const c=V(e,q(15087942));c.position.set(0,.7,.62*a),i.add(c);const h=V(n,q(15087942));h.position.set(.78*a,.7,0),i.add(h)}const s=new ie(.26,.26,.12,16),r=new ie(.08,.08,.14,8);for(const[a,c]of[[-.55,-.66],[.55,-.66],[-.55,.66],[.55,.66]]){const h=V(s,q(3359068));h.rotation.x=Math.PI/2,h.position.set(a,.26,c),i.add(h);const l=V(r,q(16765286));l.rotation.x=Math.PI/2,l.position.set(a,.26,c),i.add(l)}for(const a of[-1,1]){const c=V(new ie(.04,.04,.5,6),q(7031338));c.rotation.z=Math.PI/2,c.position.set(.98*a,.75,0),i.add(c);const h=V(new ie(.05,.05,.5,6),q(3359068));h.rotation.x=Math.PI/2,h.position.set(1.2*a,.75,0),i.add(h)}const o=new Tt;return o.name="cargo",o.position.y=.55,i.add(o),ye(i)}function ic(i,t,e){const n=new Li;return n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(i/2,t-i/2),n.absarc(0,t-i/2,i/2,0,Math.PI,!1),n.lineTo(-i/2,0),V(new ys(n),q(e))}const gh=[[16181192,2792847,15324072],[16766629,15167313,16036227],[13494976,8086015,11129758],[12443902,3835647,10275317],[16763101,14037892,16033731]];function bi(i=0,{w:t=4.6,h:e=3.3,d:n=2.2}={}){const[s,r,o]=gh[i%gh.length],a=new Tt,c=V(new Ft(t,e,n),q(s));c.position.y=e/2,a.add(c);const h=V(new Ft(t+.35,.3,n+.35),q(o));h.position.y=e+.15,a.add(h);const l=V(new Ft(t+.35,.35,.18),q(o));l.position.set(0,e+.45,n/2+.08),a.add(l);const u=ic(1.05,1.95,r);u.position.set(0,0,n/2+.01),a.add(u);const f=V(new Kt(.06,8,6),q(16765286));f.position.set(.3,.95,n/2+.04),a.add(f);for(const m of[-1,1]){const p=ic(.75,.95,16774064);p.material=q(16774064,{noCache:!0}),p.position.set(m*t*.3,1.25,n/2+.01),p.name="window",a.add(p);const v=V(new Ft(.95,.08,.16),q(r));v.position.set(m*t*.3,1.22,n/2+.06),a.add(v)}const d=Mo(i);d.scale.setScalar(.7),d.position.set(-.85,1.9,n/2+.25),a.add(d);const g=V(new Ft(1.5,.12,.5),q(14734004));g.position.set(0,.06,n/2+.25),a.add(g);const x=V(new Kt(.45,16,10,0,Math.PI*2,0,Math.PI/2),q(r));return x.position.set(t*.3,e+.3,-.2),a.add(x),ye(a)}function Ru(i=0){const t=new Tt,e=4.2,n=1.6,s=V(new Ft(e,.12,n),q(i%2?16774112:15267839));s.position.y=.95,t.add(s);const r=V(new Ft(e+.1,.35,n+.1),q(i%2?2792847:15167313));r.position.y=.82,t.add(r);for(const[c,h]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const l=V(new ie(.07,.07,.9,6),q(9065760));l.position.set(c*(e/2-.2),.45,h*(n/2-.2)),t.add(l)}for(let c=0;c<4;c++){const h=V(new ie(.28,.24,.05,16),q(16777215));h.position.set(-1.5+c,1.04,.2),t.add(h)}const o=Mo(i+1);o.scale.setScalar(.6),o.position.set(0,1.01,-.4),t.add(o);const a=new Tt;return a.name="placed",a.position.set(0,1.01,0),t.add(a),ye(t)}const xh=[13934615,15087942,2792847,8086015];function Mo(i=0){const t=new Tt,e=q(xh[i%xh.length]),n=V(Ct("lanBase",()=>new ie(.2,.26,.1,6)),e);n.position.y=.05,t.add(n);const s=V(Ct("lanGlass",()=>new ie(.24,.2,.42,6)),Me(16769930));s.position.y=.31,t.add(s);const r=V(Ct("lanRoof",()=>new Wn(.3,.26,6)),e);r.position.y=.65,t.add(r);const o=V(Ct("lanKnob",()=>new Kt(.05,8,6)),e);o.position.y=.8,t.add(o);const a=new Qa(new Jr({map:sc(),color:16761962,transparent:!0,opacity:0,depthWrite:!1,blending:qr}));return a.scale.setScalar(2.2),a.position.y=.32,a.name="glow",t.add(a),t}let Br=null;function sc(){if(Br)return Br;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.35,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Br=new mu(i),Br}function o_(i=3359068){const t=new Tt,e=V(Ct("birdBody",()=>new Kt(.16,8,6)),q(i));e.scale.set(1,.8,1.6),t.add(e);const n=Ct("birdWing",()=>new Ft(.5,.04,.22));for(const s of[-1,1]){const r=V(n,q(i));r.position.set(.28*s,.05,0),r.name=s<0?"wingL":"wingR",t.add(r)}return t}function a_(i=16765286){const t=new Tt,e=Ct("bfWing",()=>new ai(.14,8));for(const n of[-1,1]){const s=V(e,Me(i,{side:Ye}));s.position.x=.12*n,s.rotation.y=.6*n,s.name=n<0?"wingL":"wingR",t.add(s)}return t}function io(i=0){const t=[[16735631,16777215],[5032432,16777215],[16757760,16774064]][i%3],e=new Tt,n=V(new Ft(1.8,.9,1.3),q(13208125));n.position.y=.45,e.add(n);for(const r of[-1,1]){const o=V(new ie(.06,.06,2.1,6),q(9065760));o.position.set(.85*r,1.05,-.5),e.add(o)}for(let r=0;r<4;r++){const o=V(new Ft(.47,.06,1.6),q(t[r%2]));o.position.set(-.7+r*.47,2.05,.05),o.rotation.x=.3,e.add(o)}const s=[16757760,15087942,8449433,16752412];for(let r=0;r<4;r++){const o=V(new Kt(.16,8,6),q(s[(r+i)%4]));o.position.set(-.6+r*.4,1.05,.2),e.add(o)}return ye(e)}function Ic(i="hedge"){const t=new Tt;if(i==="wall"){const e=V(Ct("wallB",()=>new Ft(2,1.3,2)),q(15983555));e.position.y=.65,t.add(e);const n=V(Ct("wallC",()=>new Ft(2.08,.16,2.08)),q(14268810));n.position.y=1.36,t.add(n)}else if(i==="crates"){const e=V(Ct("crate",()=>new Ft(1.85,1.1,1.85)),q(13208125));e.position.y=.55,t.add(e);const n=V(Ct("crateBand",()=>new Ft(1.9,.14,1.9)),q(9065760));n.position.y=.55,t.add(n)}else{const e=i==="darkHedge"?3971666:5030746,n=i==="darkHedge"?3376970:4304208,s=V(Ct("hedgeB",()=>new Ft(1.9,1.05,1.9)),q(n));s.position.y=.52,t.add(s);const r=V(Ct("hedgeT",()=>new nr(.5,.9,4,10)),q(e));r.rotation.z=Math.PI/2,r.scale.set(1,1.9,1.9),r.position.y=1.02,r.scale.set(.55,1,1.9),t.add(r)}return ye(t,!0)}function c_(i){return V(Ct("flower",()=>new Kt(.1,6,6)),q(i))}function zn(i="round"){const t=new Tt;if(i==="palm"){for(let r=0;r<6;r++){const o=V(Ct("palmSeg"+r,()=>new ie(.22-r*.012,.28-r*.012,.7500000000000001,8)),q(10251066));o.position.set(Math.sin(r*.35)*.25,(r+.5)*(4.2/6),0),t.add(o)}const s=q(4173385,{side:Ye});for(let r=0;r<7;r++){const o=V(Ct("leaf",()=>new Kt(1,10,6,0,Math.PI*2,0,Math.PI/2)),s);o.scale.set(1.7,.3,.45),o.position.set(Math.sin(6*.35)*.25,4.2,0),o.rotation.y=r/7*Math.PI*2,o.rotation.z=-.45,o.translateX(1.1),t.add(o)}}else{const e=V(Ct("trunk",()=>new ie(.2,.3,1.6,8)),q(10251066));e.position.y=.8,t.add(e);const n=i==="dark"?3971666:6080618;for(const[s,r,o,a]of[[0,2.3,0,1],[.55,1.9,.2,.7],[-.55,1.95,-.1,.72],[.1,2.9,0,.65]]){const c=V(Ct("leafball"+a,()=>new Kt(a,12,10)),q(n));c.position.set(s,r,o),t.add(c)}}return ye(t)}function l_(){const i=new Tt,t=V(Ct("pole",()=>new ie(.07,.1,3,8)),q(3359068));t.position.y=1.5,i.add(t);const e=Mo(2);return e.scale.setScalar(.9),e.position.y=3,i.add(e),ye(i)}function so(i=!0){const t=new Tt,e=q(16777215),n=V(Ct("fenceBase",()=>new Ft(2,.28,.42)),q(12167311));n.position.y=.14,t.add(n);const s=5;for(let r=0;r<s;r++){const o=V(Ct("picket",()=>new Ft(.2,.85,.2)),e);o.position.set(-.8+r*.4,.62,0),t.add(o);const a=V(Ct("picketTip",()=>new Wn(.16,.22,4)),e);a.position.set(-.8+r*.4,1.15,0),a.rotation.y=Math.PI/4,t.add(a)}for(const r of[.5,.85]){const o=V(Ct("rail",()=>new Ft(2,.12,.26)),q(14734525));o.position.set(0,r,0),t.add(o)}return i||(t.rotation.y=Math.PI/2),ye(t)}const bn={P:3835647,Q:16752412,X:3835647,Y:16752412,K:2864755};function ro(i){const t=new Tt,e=V(Ct("plateBase",()=>new ie(.8,.85,.1,24)),q(14540253));e.position.y=.05,t.add(e);const n=V(Ct("plateBtn",()=>new ie(.62,.66,.16,24)),q(i,{noCache:!0}));n.position.y=.16,n.name="btn",t.add(n);const s=V(Ct("plateStar",()=>{const r=new Li;for(let a=0;a<10;a++){const c=a/10*Math.PI*2+Math.PI/2,h=a%2?.14:.32;a===0?r.moveTo(Math.cos(c)*h,Math.sin(c)*h):r.lineTo(Math.cos(c)*h,Math.sin(c)*h)}const o=new ys(r);return o.rotateX(-Math.PI/2),o}),Me(16777215));return s.position.y=.25,s.name="star",n.add(s),s.position.y=.09,ye(t,!0)}function Pu(i,t=!0){const e=new Tt,n=q(7031338);for(const r of[-1,1]){const o=V(Ct("gpost",()=>new Ft(.28,1.9,.28)),n);o.position.set(.95*r,.95,0),e.add(o);const a=V(Ct("gcap",()=>new Kt(.2,10,8)),q(i));a.position.set(.95*r,2,0),e.add(a)}const s=new Tt;s.name="bars";for(let r=0;r<4;r++){const o=V(Ct("gbar",()=>new Ft(.14,1.5,.14)),q(i,{noCache:!1}));o.position.set(-.6+r*.4,.85,0),s.add(o)}for(const r of[.35,1.35]){const o=V(Ct("grail",()=>new Ft(1.7,.12,.12)),q(i));o.position.set(0,r,0),s.add(o)}return e.add(s),t||(e.rotation.y=Math.PI/2),ye(e)}function h_(){const i=new Tt,t=V(new Ft(.5,1.3,.5),q(10134961));t.position.y=.65,i.add(t);const e=V(new ie(.08,.08,.5,8),q(5990256));e.rotation.x=Math.PI/2,e.position.set(0,1.05,.4),i.add(e);const n=V(new ie(.08,.06,.25,8),q(5990256));n.position.set(0,.92,.62),i.add(n);const s=V(new Ze(.14,.035,6,12),q(1929174));s.rotation.x=Math.PI/2,s.position.set(0,1.25,.4),i.add(s);const r=V(new ie(.32,.26,.45,14),q(3835647));r.position.set(0,.23,.72),i.add(r);const o=V(new ai(.29,14),Me(10476799));o.rotation.x=-Math.PI/2,o.position.set(0,.42,.72),i.add(o);const a=V(new Kt(.06,8,6),Me(10476799));return a.position.set(0,.7,.62),a.name="drop",i.add(a),ye(i)}function Dc(){const i=new Tt,t=q(16032353),e=q(16771276),n=V(new Kt(.42,16,12),t);n.scale.set(1.3,.75,1),n.position.y=.3,i.add(n);const s=V(new Kt(.3,12,10),e);s.scale.set(1.2,.6,.8),s.position.set(0,.22,.2),i.add(s);const r=new Tt;r.name="head",r.position.set(.45,.42,.18);const o=V(new Kt(.28,14,12),t);r.add(o);for(const l of[-1,1]){const u=V(new Wn(.1,.2,6),t);u.position.set(.02,.26,.13*l),u.rotation.x=.3*l,r.add(u);const f=V(new Ze(.05,.014,4,8,Math.PI),Me(3811872));f.position.set(.24,.04,.1*l),f.rotation.y=Math.PI/2,f.name="sleepEye",r.add(f);const d=V(new Kt(.045,8,6),Me(2763306));d.position.set(.25,.05,.1*l),d.name="openEye",d.visible=!1,r.add(d)}const a=V(new Kt(.035,6,4),Me(16748451));a.position.set(.28,-.03,0),r.add(a),i.add(r);const c=V(new Ze(.35,.06,6,16,Math.PI*1.1),t);c.rotation.x=-Math.PI/2,c.position.set(-.1,.12,0),c.name="tail",i.add(c);for(const l of[-.25,0,.22]){const u=V(new Ze(.33,.035,4,12,Math.PI),q(14254383));u.position.set(l,.3,0),u.rotation.y=Math.PI/2,u.scale.set(1,.75,1),i.add(u)}const h=V(new ie(.75,.8,.12,20),q(10309341));return h.position.y=.06,h.name="bed",i.add(h),ye(i)}function u_(i=0){const t=new Tt,e=new Tt,n=V(new Ft(1.1,.5,.9),q([2792847,15167313][i%2]));n.position.y=.7,e.add(n);const s=[16757760,15087942,8449433,16752412,16769126];for(let c=0;c<6;c++){const h=V(new Kt(.15,8,6),q(s[c%5]));h.position.set(-.3+c%3*.3,1.02,-.18+Math.floor(c/3)*.36),e.add(h)}for(const c of[-1,1]){const h=V(new ie(.28,.28,.1,14),q(3359068));h.rotation.x=Math.PI/2,h.position.set(0,.28,.5*c),e.add(h)}const r=V(new Wn(.9,.35,8),q(16774064));r.position.set(0,1.9,0),e.add(r);const o=V(new ie(.03,.03,1,5),q(7031338));o.position.y=1.4,e.add(o),e.position.x=.5,t.add(e);const a=ir(i+3);return a.scale.setScalar(.95),a.position.x=-.55,a.rotation.y=Math.PI/2,a.name="walker",t.add(a),ye(t)}function f_(i=0){const t=new Tt,e=ir(i);e.scale.setScalar(1.05),e.name="walker",t.add(e);const n=V(new Ft(.4,.45,.25),q(16765286));return n.position.set(.55,.75,0),t.add(n),ye(t)}function Uc(){const i=new Tt;for(const[a,c]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const h=V(new Ft(.16,3.3,.16),q(7031338));h.position.set(a,1.65,c),i.add(h)}for(const a of[-.9,.9]){const c=V(new Ft(2,.16,.16),q(7031338));c.position.set(0,3.3,a),i.add(c)}const t=V(new Ze(.3,.06,6,16),q(bn.K));t.position.set(0,3.3,.9),t.name="wheel",i.add(t);const e=new Tt;e.name="platform";const n=V(new Ft(1.8,.2,1.8),q(2864755));n.position.y=.1,e.add(n);const s=V(new Ft(1.84,.08,1.84),q(16765286));s.position.y=.22,s.scale.set(1,1,1),e.add(s);const r=V(new Ft(1.7,.1,1.7),q(2864755));r.position.y=.25,e.add(r),i.add(e);const o=V(new ie(.025,.025,1,4),Me(9065760));return o.name="rope",i.add(o),ye(i)}function Lu(){const i=new Tt,t=V(new Ft(.2,1.1,.2),q(7031338));t.position.y=.55,i.add(t);const e=V(new Ze(.28,.06,6,16),q(bn.K));e.position.set(0,1.1,.12),e.name="wheel",i.add(e);for(let n=0;n<3;n++){const s=V(new Ft(.5,.04,.04),q(bn.K));s.rotation.z=n/3*Math.PI,e.add(s)}return ye(i)}function Iu(){const i=new Tt,t=V(Ct("puddle",()=>new ai(.95,20)),q(7259903,{transparent:!0,opacity:.85}));t.rotation.x=-Math.PI/2,t.position.y=.075,t.scale.set(1,.85,1),i.add(t);const e=V(Ct("puddleShine",()=>new ai(.22,12)),Me(15136767,{transparent:!0,opacity:.8}));return e.rotation.x=-Math.PI/2,e.position.set(-.3,.085,-.2),e.scale.set(1.6,.6,1),i.add(e),i}function rc(i,t,e=10,n=.6){const s=new Tt,r=[16735631,16769126,5032432,8449433,11766015],o=new Re().setFromPoints([new P(-.25,0,0),new P(.25,0,0),new P(0,-.5,0)]);o.computeVertexNormals();for(let a=0;a<e;a++){const c=(a+.5)/e,h=new P().lerpVectors(i,t,c);h.y-=Math.sin(c*Math.PI)*n;const l=V(o,Me(r[a%r.length],{side:Ye}));l.position.copy(h),s.add(l)}return s}function Du(i){const t=new Tt,e=V(new Kt(.45,16,12),q(i));e.scale.y=1.2,e.position.y=.55,t.add(e);const n=V(new ie(.01,.01,1.4,4),Me(8947848));return n.position.y=-.7,t.add(n),t}function Uu(){const i=new Tt,t=V(new Ft(9,4,4),q(16182489));t.position.y=2,i.add(t);const e=V(new Kt(2.2,24,16,0,Math.PI*2,0,Math.PI/2),q(2792847));e.position.y=4,e.scale.y=1.15,i.add(e);const n=V(new Wn(.15,.7,8),q(16765286));n.position.y=6.9,i.add(n);for(const s of[-1,1]){const r=V(new ie(.45,.55,8,12),q(16182489));r.position.set(5.3*s,4,0),i.add(r);const o=V(new ie(.7,.7,.2,12),q(2792847));o.position.set(5.3*s,6.5,0),i.add(o);const a=V(new Wn(.55,1.3,12),q(2792847));a.position.set(5.3*s,8.65,0),i.add(a)}for(let s=0;s<5;s++){const r=ic(.9,1.9,2792847);r.position.set(-3.2+s*1.6,.2,2.01),i.add(r)}return ye(i)}function Nu(i=1,t=16773800){const e=new Li;return e.absarc(0,0,i,Math.PI*.35,Math.PI*1.65,!1),e.absarc(i*.45,0,i*.82,Math.PI*1.55,Math.PI*.45,!0),V(new ys(e,24),Me(t))}function oo(i=1,t=16777215){const e=new Tt,n=q(t);for(const[s,r,o]of[[0,0,1],[.9,-.1,.75],[-.9,-.1,.8],[.4,.45,.7],[-.4,.4,.65]]){const a=V(Ct("cloudP"+o,()=>new Kt(o,14,10)),n);a.position.set(s,r,0),e.add(a)}return e.scale.setScalar(i),e}const d_={street:{top:5220586,horizon:13496063,sunset:16757642,sunsetTop:8294358,dusk:4931456,duskTop:2762066,fog:13496063},market:{top:6141679,horizon:16771529,sunset:16756848,sunsetTop:10125256,dusk:5915280,duskTop:3156058,fog:16771529},masjid:{top:15771754,horizon:16769476,sunset:16748400,sunsetTop:13008816,dusk:4865158,duskTop:2564430,fog:16769476},rain:{top:7176092,horizon:11450824,sunset:9076643,sunsetTop:6054792,dusk:4080230,duskTop:2501188,fog:10135736},eid:{top:6080246,horizon:14743551,sunset:11463167,sunsetTop:8376565,dusk:13168895,duskTop:10214645,fog:14743551}},p_="varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",m_=`uniform vec3 top; uniform vec3 horizon; varying vec3 vPos;
  void main(){ float h = clamp(normalize(vPos).y * 1.6 + 0.08, 0.0, 1.0); h = pow(h, 0.65); gl_FragColor = vec4(mix(horizon, top, h), 1.0); }`;class g_{constructor(t,e){this.canvas=t,this.labelLayer=e,this.renderer=new hu({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ih,this.renderer.outputColorSpace=qe,this.scene=new uu,this.scene.background=new Ot(8377343),this.scene.fog=new Mc(13496063,60,140),this.camera=new sn(34,1,.5,900),this.hemi=new wu(16774372,10466170,1.25),this.scene.add(this.hemi),this.sun=new eo(16773590,1.6),this.sun.castShadow=!0;const n=matchMedia("(pointer: coarse)").matches;this.sun.shadow.mapSize.set(n?1024:2048,n?1024:2048),this.sun.shadow.bias=-5e-4,this.scene.add(this.sun,this.sun.target),this.fill=new eo(13624319,.45),this.scene.add(this.fill,this.fill.target),this.skyGroup=new Tt,this.scene.add(this.skyGroup),this.skyMat=new Vn({uniforms:{top:{value:new Ot(5220586)},horizon:{value:new Ot(13496063)}},vertexShader:p_,fragmentShader:m_,side:je,depthWrite:!1,fog:!1}),this.dome=new we(new Kt(420,24,12),this.skyMat),this.dome.renderOrder=-10,this.scene.add(this.dome),this.sunDisc=new Qa(new Jr({map:sc(),color:16773296,transparent:!0,opacity:.95,depthWrite:!1,fog:!1})),this.sunDisc.scale.setScalar(26),this.skyGroup.add(this.sunDisc),this.sunHalo=new Qa(new Jr({map:sc(),color:16756848,transparent:!0,opacity:0,depthWrite:!1,fog:!1,blending:qr})),this.sunHalo.scale.setScalar(90),this.skyGroup.add(this.sunHalo),this.life=[],this.clouds=[],this.dusk=0,this.particles=[],this.labels=new Map,this.insets={top:60,bottom:0,left:0,right:0},this.cam={x:0,z:0,d:40,init:!1},this.region=null,this.pitch=.88,this.yaw=0,this.rain=null,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const t=window.innerWidth,e=window.innerHeight;this.w=t,this.h=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}setArea(t,e,n){this.area=t;const s=d_[t];this.sky=s,this.scene.background.setHex(s.top),this.scene.fog.color.setHex(s.fog),this.hemi.intensity=t==="rain"?1.05:1.25,this.sun.intensity=t==="rain"?.8:1.6,this.sun.color.setHex(t==="masjid"?16769200:16773590);const r=(e-2)/2,o=(n-2)/2;this.cx=r,this.cz=o,this.sun.position.set(r-12,30,o+16),this.sun.target.position.set(r,0,o),this.fill.position.set(r+14,12,o-18),this.fill.target.position.set(r,0,o),this.dome.position.set(r,-20,o);const a=Math.max(e,n)*.75+6;Object.assign(this.sun.shadow.camera,{left:-a,right:a,top:a,bottom:-a,near:1,far:90}),this.sun.shadow.camera.updateProjectionMatrix();for(const c of this.skyGroup.children.slice())c!==this.sunDisc&&c!==this.sunHalo&&this.skyGroup.remove(c);if(this.sunDisc.visible=this.sunHalo.visible=t!=="rain",this.life=[],this.clouds=[],this.rain=null,t==="rain"){const h=new Float32Array(5400);for(let u=0;u<900;u++){const f=r+(Math.random()-.5)*(e+30),d=Math.random()*20,g=o+(Math.random()-.5)*(n+30);h.set([f,d,g,f-.05,d-.7,g+.05],u*6)}const l=new Re;l.setAttribute("position",new rn(h,3)),this.rain=new _x(l,new pu({color:13625599,transparent:!0,opacity:.55})),this.skyGroup.add(this.rain);for(let u=0;u<5;u++){const f=oo(3+u%2*.8,10134968);f.position.set(r-40+u*20,22+u%3*3,o-50-u%2*15),f.userData.speed=.6+u%3*.3,this.skyGroup.add(f),this.clouds.push(f)}}else{for(let c=0;c<7;c++){const h=oo(2.2+c%3*.7,16777215);h.position.set(r-55+c*18,20+c%3*4,o-62-c%2*20),h.userData.speed=.4+c%3*.25,this.skyGroup.add(h),this.clouds.push(h)}for(let c=0;c<3;c++){const h=o_(c===1?5990256:3359068);h.scale.setScalar(.9+c%2*.3),this.skyGroup.add(h),this.life.push({m:h,kind:"bird",t:c*2.1,r:18+c*6,h:11+c*2,dir:c%2?1:-1,speed:.22+c*.03})}for(let c=0;c<4;c++){const h=a_([16769126,16748467,16777215,10217727][c]);this.skyGroup.add(h),this.life.push({m:h,kind:"butterfly",t:c*1.7,x:r+(c-1.5)*e*.35,z:c%2?-1.2:n-1.2,speed:.5+c*.1})}}this.moon=Nu(2.5,16773800),this.moon.position.set(r+18,26,o-58),this.moon.rotation.z=.5,this.moon.visible=t!=="eid",this.moon.material=this.moon.material.clone(),this.moon.material.transparent=!0,this.moon.material.opacity=0,this.moon.material.fog=!1,this.skyGroup.add(this.moon),this.setSunset(0)}setSunset(t){if(!this.sky)return;const e=this.sky,n=new Ot(e.horizon),s=new Ot(e.top),r=Math.max(0,Math.min(1,(t-.35)/.65)),o=Math.max(0,Math.min(1,(t-1)/.6));t<=1?(n.lerp(new Ot(e.sunset),r),s.lerp(new Ot(e.sunsetTop),r)):(n.set(e.sunset).lerp(new Ot(e.dusk),o),s.set(e.sunsetTop).lerp(new Ot(e.duskTop),o)),this.skyMat.uniforms.top.value.copy(s),this.skyMat.uniforms.horizon.value.copy(n),this.scene.background.copy(n),this.scene.fog.color.copy(n).lerp(new Ot(16777215),.25),this.dusk=Math.max(0,Math.min(1,(t-.55)/.45));const a=Math.min(1,t)*.55;this.hemi.color.setHex(16774372).lerp(new Ot(16758922),a).lerp(new Ot(9275080),o*.6),this.hemi.groundColor.setHex(10466170).lerp(new Ot(6969978),o*.7),this.sun.color.setHex(this.area==="masjid"?16769200:16773590).lerp(new Ot(16751200),a),this.sun.intensity=(this.area==="rain"?.8:1.6)*(1-o*.45);const c=Math.min(1.25,t);this.sunDisc.position.set(this.cx+30,44-c*36,this.cz-150),this.sunHalo.position.copy(this.sunDisc.position),this.sunDisc.material.color.setHex(16773296).lerp(new Ot(16751184),r),this.sunDisc.material.opacity=.95*(1-o),this.sunHalo.material.opacity=.35*r*(1-o*.8),this.moon&&(this.moon.material.opacity=Math.max(0,Math.min(1,(t-.7)*2)),this.moon.position.y=24+Math.min(1,t)*4)}setRegion(t){this.region=t}fitDistance(t,e,n){const s=this.camera,r=(t.x0+t.x1)/2,o=(t.z0+t.z1)/2,a=[];for(const d of[t.x0,t.x1])for(const g of[t.z0,t.z1])for(const x of[0,t.y||2.5])a.push(new P(d,x,g));const c=new P,h=d=>{this.placeCamera(r,o,d),s.updateMatrixWorld();let g=9,x=-9,m=9,p=-9;for(const v of a)c.copy(v).project(s),g=Math.min(g,c.x),x=Math.max(x,c.x),m=Math.min(m,c.y),p=Math.max(p,c.y);return{fits:(x-g)*this.w/2<=e&&(p-m)*this.h/2<=n,minx:g,maxx:x,miny:m,maxy:p}};let l=5,u=400;for(let d=0;d<22;d++){const g=(l+u)/2;h(g).fits?u=g:l=g}const f=h(u);return{d:u,cx:r,cz:o,ndcCx:(f.minx+f.maxx)/2,ndcCy:(f.miny+f.maxy)/2}}placeCamera(t,e,n){const s=this.pitch,r=Math.cos(s)*n;this.camera.position.set(t+Math.sin(this.yaw)*r,Math.sin(s)*n,e+Math.cos(this.yaw)*r),this.camera.lookAt(t,0,e)}screenToWorld(t,e){const n=Math.cos(this.yaw),s=Math.sin(this.yaw);return[t*n+e*s,-t*s+e*n]}updateCamera(t,e=!1){const n=this.region;if(!n)return;const s=this.insets,r=Math.max(100,this.w-s.left-s.right),o=Math.max(100,this.h-s.top-s.bottom);this.camera.clearViewOffset();const a=this.fitDistance(n,r*.96,o*.94),c=e||!this.cam.init?1:1-Math.exp(-t*4);this.cam.init=!0,this.cam.x+=(a.cx-this.cam.x)*c,this.cam.z+=(a.cz-this.cam.z)*c,this.cam.d+=(a.d-this.cam.d)*c,this.cam.ox=(this.cam.ox??a.ndcCx)+(a.ndcCx-(this.cam.ox??a.ndcCx))*c,this.cam.oy=(this.cam.oy??a.ndcCy)+(a.ndcCy-(this.cam.oy??a.ndcCy))*c,this.placeCamera(this.cam.x,this.cam.z,this.cam.d),this.scene.fog.near=this.cam.d*1.1,this.scene.fog.far=this.cam.d*2.6+30;const h=this.w/2*(1+this.cam.ox),l=this.h/2*(1-this.cam.oy),u=s.left+r/2,f=s.top+o/2;this.camera.setViewOffset(this.w,this.h,h-u,l-f,this.w,this.h),this.camera.updateMatrixWorld()}burst(t,e,n=10,s=1,r="dot"){const o=r==="heart"?this._heartGeo||(this._heartGeo=x_()):this._dotGeo||(this._dotGeo=new Ac(.14,0));for(let a=0;a<n;a++){const c=new we(o,Me(e));c.position.copy(t);const h=Math.random()*Math.PI*2,l=new P(Math.cos(h)*s*(.5+Math.random()),2+Math.random()*3*s,Math.sin(h)*s*(.5+Math.random()));this.scene.add(c),this.particles.push({m:c,v:l,life:.9+Math.random()*.4,t:0,heart:r==="heart"})}}confetti(t,e){const n=[16735631,16769126,5032432,8449433,11766015];for(let s=0;s<70;s++){const r=new we(this._conf||(this._conf=new vs(.25,.4)),Me(n[s%5],{side:Ye}));r.position.set(t.x+(Math.random()-.5)*e,9+Math.random()*4,t.z+(Math.random()-.5)*e*.6),this.scene.add(r),this.particles.push({m:r,v:new P((Math.random()-.5)*2,-2-Math.random()*2,0),life:4,t:0,spin:Math.random()*6,confetti:!0})}}updateParticles(t){for(let n=this.particles.length-1;n>=0;n--){const s=this.particles[n];s.t+=t,s.confetti||(s.v.y-=7*t),s.m.position.addScaledVector(s.v,t),s.spin&&(s.m.rotation.x+=s.spin*t,s.m.rotation.y+=s.spin*.7*t),s.heart&&s.m.lookAt(this.camera.position);const r=Math.max(.01,1-(s.t/s.life)**2);s.confetti||s.m.scale.setScalar(r),s.t>=s.life&&(this.scene.remove(s.m),this.particles.splice(n,1))}const e=this.lifeT=(this.lifeT||0)+t;for(const n of this.clouds)n.position.x+=n.userData.speed*t,n.position.x>this.cx+90&&(n.position.x=this.cx-90);for(const n of this.life)if(n.kind==="bird"){const s=(e*n.speed+n.t)*n.dir,r=this.cx+Math.cos(s)*n.r*1.6,o=this.cz-10+Math.sin(s)*n.r*.7;n.m.position.set(r,n.h+Math.sin(e*.9+n.t)*1.2,o),n.m.lookAt(this.cx+Math.cos(s+.05*n.dir)*n.r*1.6,n.m.position.y,this.cz-10+Math.sin(s+.05*n.dir)*n.r*.7);const a=Math.sin(e*9+n.t)*.7;n.m.getObjectByName("wingL").rotation.z=a,n.m.getObjectByName("wingR").rotation.z=-a}else{const s=e*n.speed+n.t;n.m.position.set(n.x+Math.sin(s)*3+Math.sin(s*2.3)*1.2,1.5+Math.sin(s*3.1)*.5,n.z+Math.cos(s*.8)*1.5);const r=Math.abs(Math.sin(e*14+n.t))*1.1;n.m.getObjectByName("wingL").rotation.y=.3+r,n.m.getObjectByName("wingR").rotation.y=-.3-r,n.m.visible=this.dusk<.8}if(this.rain){const n=this.rain.geometry.attributes.position;for(let s=0;s<n.count;s+=2){let r=n.getY(s)-t*18;r<0&&(r+=20),n.setY(s,r),n.setY(s+1,r-.7)}n.needsUpdate=!0}}clearParticles(){for(const t of this.particles)this.scene.remove(t.m);this.particles=[]}label(t,e){let n=this.labels.get(t);return n||(n=document.createElement("div"),n.className=`lbl ${e||""}`,this.labelLayer.appendChild(n),this.labels.set(t,n),n._html=""),n._seen=!0,n}placeLabel(t,e,n){t._html!==n&&(t.innerHTML=n,t._html=n);const s=e.clone().project(this.camera),r=(s.x+1)/2*this.w,o=(1-s.y)/2*this.h,a=s.z>1||r<-200||r>this.w+200||o<-200||o>this.h+200;t.style.display=a?"none":"",t.style.transform=`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -100%)`}beginLabels(){for(const t of this.labels.values())t._seen=!1}endLabels(){for(const[t,e]of this.labels)e._seen||(e.remove(),this.labels.delete(t))}clearLabels(){for(const t of this.labels.values())t.remove();this.labels.clear()}render(){this.renderer.render(this.scene,this.camera)}}function x_(){const t=new Li;return t.moveTo(0,-.2),t.bezierCurveTo(.2*1.4,-.2*.1,.2*.9,.2*1.1,0,.2*.45),t.bezierCurveTo(-.2*.9,.2*1.1,-.2*1.4,-.2*.1,0,-.2),new ys(t)}const __={goodDeed:{text:"Every good deed is charity.",source:"Sahih al-Bukhari 6021 & Sahih Muslim 1005",meaning:"Sadaqah is not only money. Carrying a box for a neighbour, sharing, and helping are all charity!"},oneBody:{text:"The believers are like one body in their love and mercy for each other.",source:"Sahih al-Bukhari 6011 & Sahih Muslim 2586",meaning:"When we care for each other, we work together like hands and feet of the same body."},helpOneAnother:{text:"Help one another in goodness and piety.",source:"Qur'an 5:2",meaning:"Allah tells us to be a team when we do good things."},wealth:{text:"Charity does not decrease wealth.",source:"Sahih Muslim 2588",meaning:"When we give, we never really lose. Allah blesses what we have left."},animals:{text:"There is a reward for kindness to every living thing.",source:"Sahih al-Bukhari 2363 & Sahih Muslim 2244",meaning:"Giving water to a thirsty animal is a good deed that Allah loves."},iftar:{text:"Whoever gives food to a fasting person to break their fast will have a reward like theirs.",source:"Jami' at-Tirmidhi 807",meaning:"Sharing dates and water at iftar gives you the same reward as the person who fasted!"},helpsBrother:{text:"Allah helps His servant as long as the servant helps his brother.",source:"Sahih Muslim 2699",meaning:"When you help others, Allah helps you."},smile:{text:"Smiling at your brother is charity.",source:"Jami' at-Tirmidhi 1956",meaning:"Even a smile is a gift you can give to anyone, any time."},goodWord:{text:"A good word is charity.",source:"Sahih al-Bukhari 2989 & Sahih Muslim 1009",meaning:'Saying "thank you", "salaam" and kind words is sadaqah too.'},feedTheNeedy:{text:"And they give food, even though they love it, to the poor, the orphan and the captive.",source:"Qur'an 76:8",meaning:"Good people share the food they love with people who need it."}},v_=["JazakAllahu khayran!","Thank you, kids!","Ramadan Mubarak!","What kind helpers!","May Allah bless you!","You made my day!"],M_=["Eid Mubarak!","JazakAllahu khayran!","Eid Mubarak, kids!","What a lovely gift!"],ao={food:{name:"food box",icon:"📦",ic:"box",big:!0},water:{name:"water",icon:"💧",ic:"water"},blanket:{name:"blanket",icon:"🧣",ic:"blanket"},books:{name:"books",icon:"📚",ic:"book"},dates:{name:"dates",icon:"🌴",ic:"dates"},gift:{name:"Eid gift",icon:"🎁",ic:"gift"}};let gi=null,Ei=null,yo=!1;const aa={};function Nc(){if(!gi){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;gi=new i,Ei=gi.createGain(),Ei.gain.value=yo?0:.45,Ei.connect(gi.destination)}return gi.state==="suspended"&&gi.resume(),gi}function zu(){Nc()}function Fu(i){yo=i,Ei&&(Ei.gain.value=i?0:.45)}function ve(i,t,{type:e="sine",vol:n=.3,slide:s=0,delay:r=0}={}){if(yo)return;const o=Nc();if(!o)return;const a=o.currentTime+r,c=o.createOscillator(),h=o.createGain();c.type=e,c.frequency.setValueAtTime(i,a),s&&c.frequency.exponentialRampToValueAtTime(Math.max(40,i+s),a+t),h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(n,a+.01),h.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(h).connect(Ei),c.start(a),c.stop(a+t+.05)}function ca(i,{vol:t=.4,cutoff:e=900,type:n="lowpass",delay:s=0}={}){if(yo)return;const r=Nc();if(!r)return;const o=Math.floor(r.sampleRate*i),a=r.createBuffer(1,o,r.sampleRate),c=a.getChannelData(0);for(let f=0;f<o;f++)c[f]=(Math.random()*2-1)*(1-f/o)**2;const h=r.createBufferSource();h.buffer=a;const l=r.createBiquadFilter();l.type=n,l.frequency.value=e;const u=r.createGain();u.gain.value=t,h.connect(l).connect(u).connect(Ei),h.start(r.currentTime+s)}function ts(i,t,e){return(...n)=>{const s=performance.now();aa[i]&&s-aa[i]<t||(aa[i]=s,e(...n))}}const he={click:()=>ve(660,.08,{type:"triangle",vol:.18}),pickup:()=>ve(520,.12,{type:"triangle",vol:.22,slide:260}),drop:()=>ve(380,.12,{type:"triangle",vol:.18,slide:-120}),grab:()=>{ve(300,.1,{type:"square",vol:.07}),ve(450,.12,{type:"triangle",vol:.18,delay:.06})},heavy:ts("heavy",900,()=>{ve(180,.18,{type:"triangle",vol:.2,slide:-40}),ve(160,.2,{type:"triangle",vol:.18,delay:.2,slide:-40})}),lift:()=>[0,.08,.16].forEach((i,t)=>ve(400+t*120,.12,{type:"triangle",vol:.18,delay:i})),toss:()=>ve(420,.35,{type:"sine",vol:.2,slide:500}),give:()=>{ve(700,.1,{type:"triangle",vol:.2}),ve(900,.14,{type:"triangle",vol:.2,delay:.08})},deliver:()=>[659,784,988].forEach((i,t)=>ve(i,.18,{type:"triangle",vol:.22,delay:t*.08})),houseDone:()=>[523,659,784,1047,1319].forEach((i,t)=>ve(i,.22,{type:"sine",vol:.2,delay:t*.09})),nope:ts("nope",1200,()=>ve(300,.2,{type:"triangle",vol:.15,slide:-60})),plate:()=>ve(880,.1,{type:"sine",vol:.18}),gate:()=>{ve(330,.2,{type:"triangle",vol:.14,slide:200})},liftMove:ts("liftMove",700,()=>{ca(.4,{vol:.12,cutoff:500}),ve(220,.4,{type:"triangle",vol:.1,slide:120})}),splash:ts("splash",350,()=>ca(.25,{vol:.25,cutoff:1800,type:"bandpass"})),beep:ts("beep",1200,()=>{ve(740,.09,{type:"square",vol:.06}),ve(740,.09,{type:"square",vol:.06,delay:.14})}),meow:()=>{ve(700,.35,{type:"sine",vol:.18,slide:300}),ve(900,.3,{type:"sine",vol:.12,delay:.25,slide:-400})},water:()=>ve(900,.25,{type:"sine",vol:.18,slide:-500}),step:ts("step",260,()=>ca(.05,{vol:.05,cutoff:700})),star:(i=0)=>ve(784*2**(i*4/12),.3,{type:"triangle",vol:.22}),win:()=>[523,659,784,1047].forEach((i,t)=>ve(i,.28,{type:"triangle",vol:.22,delay:t*.12})),jar:()=>[1047,1319,1568].forEach((i,t)=>ve(i,.2,{type:"sine",vol:.15,delay:t*.07}))},st=2,ze=1.4,Ce=.3,_h=3.3,vh=2.5,y_=1,ti={E:[1,0],W:[-1,0],N:[0,-1],S:[0,1]},S_=new Set(["wall","house","fence","tap","tree","stall"]),Mh={w:"water",b:"blanket",k:"books",d:"dates",g:"gift"},b_={street:"hedge",market:"crates",masjid:"wall",rain:"darkHedge",eid:"hedge"},w_={street:9423976,market:14927246,masjid:10735484,rain:7250795,eid:10738554},E_={street:[15853263,15260866],market:[16178350,15519644],masjid:[16248024,15720903],rain:[12174284,11450818],eid:[16773590,16246210]},Ne=(i,t,e,n)=>Math.hypot(i-e,t-n),Vs=(i,t,e)=>Math.max(t,Math.min(e,i));function Qn(i,t,e,n,s,r,o){const a=Vs(i,n,r),c=Vs(t,s,o);return(i-a)**2+(t-c)**2<(e-1e-4)**2}let la=1;class T_{constructor(t,e,n={}){this.def=t,this.stage=e,this.opts=n,this.area=t.area,this.group=new Tt,e.scene.add(this.group),this.time=0,this.state="play",this.deeds=0,this.doneTimer=0,this.events=[],this.flash=[],this.parse(),this.build()}parse(){const t=this.def.map;this.H=t.length,this.W=t[0].length,this.tiles=[],this.players=[],this.items=[],this.bigs=[],this.movers=[],this.houses=[],this.plates=[],this.gates=[],this.taps=[],this.cats=[],this.lift=null,this.crank=null;const e=s=>({"#":"wall",h:"house","~":"puddle","=":"fence",X:"gate",Y:"gate",P:"plate",Q:"plate",L:"lift",K:"crank",T:"tap",t:"tree",S:"stall"})[s]||"floor";for(let s=0;s<this.H;s++){const r=[];for(let o=0;o<this.W;o++){const a=t[s][o];r.push({ch:a,type:e(a),h:a==="u"?1:0,x:o,z:s})}this.tiles.push(r)}for(const s of this.tiles)for(const r of s){if(r.type!=="floor"||r.ch==="."||r.ch==="u")continue;let o=0,a=0;for(const[c,h]of Object.values(ti)){const l=this.tile(r.x+c,r.z+h);l&&(l.ch==="u"?o++:(l.ch==="."||l.ch==="~")&&a++)}o>a&&(r.h=1)}for(const s of this.tiles)for(const r of s){const{ch:o,x:a,z:c}=r;if(o==="1"||o==="2")this.players[+o-1]=this.makePlayer(+o-1,a,c,r.h);else if(Mh[o])this.items.push(this.makeItemEnt(Mh[o],a,c,r.h));else if(o==="f")this.bigs.push({id:la++,kind:"food",x:a,z:c,hw:.42,holders:{},cargo:[],state:"ground"});else if(o==="W")this.bigs.push({id:la++,kind:"wagon",x:a,z:c,hw:.45,holders:{},cargo:[],state:"ground"});else if(o==="c")this.cats.push({x:a,z:c,state:"sleep",t:0});else if(o===">"||o==="s"||o==="v")this.movers.push({x:a,z:c,ax:o==="v"?[0,1]:[1,0],dir:1,speed:o==="s"?1.1:1.5,r:.42,pause:0,kind:o==="s"?"shopper":"cart",look:this.movers.length});else if(o==="P"||o==="Q")this.plates.push({x:a,z:c,group:o,pressed:!1});else if(o==="X"||o==="Y"){const h={x:a,z:c,group:o==="X"?"P":"Q",open:!1,amt:0};this.gates.push(h),r.gate=h}else if(o==="L")this.lift={x:a,z:c,h:0,target:0,moving:!1,riders:[],itemRiders:[]};else if(o==="K")this.crank={x:a,z:c,pressed:!1};else if(o==="T")this.taps.push({x:a,z:c});else if(o>="A"&&o<="F"){const h=this.def.houses[o];let l=[0,-1];for(const u of[[0,-1],[-1,0],[1,0],[0,1]]){const f=this.tile(a+u[0],c+u[1]);if(f&&f.type==="house"){l=u;break}}this.houses.push({letter:o,x:a,z:c,h:r.h,dir:l,name:h.name,kind:h.kind||"house",look:h.look||0,needs:h.needs.map(u=>({kind:u,done:!1})),happy:!1,happyT:0})}}const n=this.bigs.find(s=>s.kind==="wagon");if(n&&this.def.wagon)for(const s of this.def.wagon){const r=this.makeItemEnt(s,n.x,n.z,0);r.state="cargo",r.big=n,n.cargo.push(r),this.items.push(r)}this.totalNeeds=this.houses.reduce((s,r)=>s+r.needs.length,0),this.maxDeeds=this.totalNeeds+this.cats.length}makePlayer(t,e,n,s){return{idx:t,who:t===0?"zaid":"amina",name:t===0?"Zaid":"Amina",x:e,z:n,vx:0,vz:0,fx:0,fz:1,lv:s,held:null,grip:null,side:null,riding:!1,boardLv:null,input:{mx:0,mz:0,act:!1},walkT:0,bubble:null,bubbleT:0,heavyT:0,yaw:0,splashT:0}}makeItemEnt(t,e,n,s){return{id:la++,kind:t,x:e,z:n,lv:s,state:"ground",holder:null,big:null,fly:null}}tile(t,e){var n;return(n=this.tiles[e])==null?void 0:n[t]}tileAt(t,e){return this.tile(Math.floor(t+.5),Math.floor(e+.5))}tileHeight(t){return t.type==="lift"?this.lift.moving?-1:this.lift.h:t.h}passable(t,e,n,{ignoreGates:s=!1,forBig:r=!1}={}){const o=this.tile(t,e);if(!o||S_.has(o.type)||o.type==="gate"&&!s&&!o.gate.open||r&&o.type==="lift")return!1;for(const a of this.cats)if(a.state!=="nap"&&a.x===t&&a.z===e)return!1;return this.tileHeight(o)===n}blockedCircle(t,e,n,s,r=null){const o=Math.floor(t-n+.5),a=Math.floor(t+n+.5),c=Math.floor(e-n+.5),h=Math.floor(e+n+.5);for(let l=c;l<=h;l++)for(let u=o;u<=a;u++)if(!this.passable(u,l,s)&&Qn(t,e,n,u-.5,l-.5,u+.5,l+.5))return!0;for(const l of this.bigs)if(!(l===r||l.state!=="ground"||s!==0)&&Qn(t,e,n,l.x-l.hw,l.z-l.hw,l.x+l.hw,l.z+l.hw))return!0;if(s===0){for(const l of this.movers)if(Ne(t,e,l.x,l.z)<n+l.r)return"mover"}return!1}blockedBig(t,e,n){const s=t.hw,r=Math.floor(e-s+.5),o=Math.floor(e+s+.5-1e-6),a=Math.floor(n-s+.5),c=Math.floor(n+s+.5-1e-6);for(let h=a;h<=c;h++)for(let l=r;l<=o;l++)if(!this.passable(l,h,0,{forBig:!0}))return!0;for(const h of this.bigs)if(!(h===t||h.state!=="ground")&&Math.abs(h.x-e)<h.hw+s&&Math.abs(h.z-n)<h.hw+s)return!0;for(const h of this.movers)if(Qn(h.x,h.z,h.r,e-s,n-s,e+s,n+s))return"mover";for(const h of this.players)if(!(h.grip===t||h.lv!==0)&&Qn(h.x,h.z,Ce,e-s,n-s,e+s,n+s))return!0;return!1}moveCircle(t,e,n){const s=Math.max(1,Math.ceil(Math.hypot(e,n)/.08)),r=e/s,o=n/s;for(let a=0;a<s;a++)r&&(this.blockedCircle(t.x+r,t.z,Ce,t.lv)?Math.abs(e)>Math.abs(n)*.8&&this.slideAssist(t,"z",r):t.x+=r),o&&(this.blockedCircle(t.x,t.z+o,Ce,t.lv)?Math.abs(n)>Math.abs(e)*.8&&this.slideAssist(t,"x",o):t.z+=o)}slideAssist(t,e,n){const s=Math.round(t[e]),r=s-t[e];if(Math.abs(r)<.02||Math.abs(r)>.48)return;const o=e==="z"?t.x+n:s,a=e==="z"?s:t.z+n;if(this.blockedCircle(o,a,Ce,t.lv))return;const c=Math.sign(r)*Math.min(Math.abs(r),Math.abs(n)*.9),h=e==="x"?t.x+c:t.x,l=e==="z"?t.z+c:t.z;this.blockedCircle(h,l,Ce,t.lv)||(t.x=h,t.z=l)}setInput(t,e){const n=this.players[t];n&&(n.input.mx=e.mx,n.input.mz=e.mz,e.act&&(n.input.act=!0))}update(t){this.state==="play"&&(this.time+=t),this.animT=(this.animT||0)+t,this.updatePlates(),this.updateLift(t);for(const e of this.players)this.updatePlayer(e,t);for(const e of this.bigs)this.updateBig(e,t);this.separatePlayers();for(const e of this.movers)this.updateMover(e,t);for(const e of this.cats)this.updateCat(e,t);this.updateItems(t),this.checkDeliveries(t);for(const e of this.players)e.input.act&&(e.input.act=!1,this.state==="play"&&this.act(e)),e.bubbleT>0&&(e.bubbleT-=t,e.bubbleT<=0&&(e.bubble=null));this.state==="play"&&this.houses.every(e=>e.happy)&&(this.state="celebrate",this.doneTimer=0,this.emit("complete")),this.state==="celebrate"&&(this.doneTimer+=t);for(const e of this.houses)e.popT>0&&(e.popT-=t),e.ringT>0&&(e.ringT-=t),e.glowT>0&&(e.glowT-=t);this.render(t)}emit(t,e={}){var n,s;(s=(n=this.opts).onEvent)==null||s.call(n,t,e),this.events.push({type:t,...e,t:this.time})}say(t,e,n=1.8){t.bubble=e,t.bubbleT=n}updatePlayer(t,e){const n=t.input;let s=n.mx,r=n.mz;const o=Math.hypot(s,r);if(o>1&&(s/=o,r/=o),this.state!=="play"&&this.state!=="celebrate"&&(s=0,r=0),o>.15&&!t.grip&&(t.fx=s/Math.max(o,1e-6),t.fz=r/Math.max(o,1e-6)),t.riding){t.vx=t.vz=0;return}if(t.grip)return;const a=this.tileAt(t.x,t.z),c=a&&a.type==="puddle"?.55:1,h=s*_h*c,l=r*_h*c,u=1-Math.exp(-e*14);t.vx+=(h-t.vx)*u,t.vz+=(l-t.vz)*u;const f=[t.x,t.z];this.moveCircle(t,t.vx*e,t.vz*e);const d=Ne(f[0],f[1],t.x,t.z);t.speedNow=d/Math.max(e,1e-4),d>.001&&(t.walkT+=e*(c<1?.7:1)),c<1&&d>.01?(t.splashT-=e,t.splashT<=0&&(t.splashT=.35,he.splash(),this.stage.burst(this.wpos(t.x,t.z,t.lv),10476799,5,.6))):d>.01&&he.step()}separatePlayers(){const[t,e]=this.players;if(!t||!e||t.lv!==e.lv||t.riding||e.riding)return;const n=Ne(t.x,t.z,e.x,e.z);if(n>=2*Ce||n<1e-5)return;const s=(2*Ce-n)/2,r=(t.x-e.x)/n,o=(t.z-e.z)/n;for(const[a,c]of[[t,1],[e,-1]]){if(a.grip)continue;const h=a.x+r*s*c,l=a.z+o*s*c;this.blockedCircle(h,l,Ce,a.lv)||(a.x=h,a.z=l)}}holdersOf(t){return Object.entries(t.holders).filter(([,e])=>e)}updateBig(t,e){if(t.state!=="ground")return;const n=this.holdersOf(t);if(t.lifted=n.length>=2,t.v=t.v||[0,0],n.length===0){t.v=[0,0];return}if(n.length===1){const d=n[0][1];if(Math.hypot(d.input.mx,d.input.mz)>.3&&this.state==="play"){if(d.heavyT+=e,t.wobble=.3,d.heavyT>.25){const x=this.players[1-d.idx];this.say(d,`Too heavy! Help, ${x.name}!`,1.2),he.heavy(),this.shownHeavy||(this.shownHeavy=!0,this.emit("heavy",{who:d.idx}))}}else d.heavyT=0;t.v=[0,0];return}let s=0,r=0;for(const[,d]of n)s+=d.input.mx,r+=d.input.mz;s/=n.length,r/=n.length;const o=Math.hypot(s,r);o>1&&(s/=o,r/=o),this.state!=="play"&&(s=r=0);const a=1-Math.exp(-e*10);t.v[0]+=(s*vh-t.v[0])*a,t.v[1]+=(r*vh-t.v[1])*a;const c=t.v[0]*e,h=t.v[1]*e,l=Math.max(1,Math.ceil(Math.hypot(c,h)/.06));let u=!1;const f=(d,g)=>{if(this.blockedBig(t,d,g))return!1;for(const[x,m]of n){const[p,v]=ti[x],M=t.hw+Ce+.06;if(this.blockedCircle(d+p*M,g+v*M,Ce,0,t))return!1}return t.x=d,t.z=g,u=!0,!0};for(let d=0;d<l;d++){if(c&&!f(t.x+c/l,t.z)){const g=Math.round(t.z),x=g-t.z;Math.abs(x)>.02&&Math.abs(x)<.45&&Math.abs(c)>Math.abs(h)&&f(t.x,t.z+Math.sign(x)*Math.min(Math.abs(x),Math.abs(c/l)))}if(h&&!f(t.x,t.z+h/l)){const g=Math.round(t.x),x=g-t.x;Math.abs(x)>.02&&Math.abs(x)<.45&&Math.abs(h)>Math.abs(c)&&f(t.x+Math.sign(x)*Math.min(Math.abs(x),Math.abs(h/l)),t.z)}}for(const[d,g]of n){const[x,m]=ti[d],p=t.hw+Ce+.06;g.x=t.x+x*p,g.z=t.z+m*p,g.fx=-x,g.fz=-m,u&&(g.walkT+=e)}u&&he.step()}updatePlates(){for(const t of this.plates){const e=t.pressed;t.pressed=this.players.some(n=>!n.riding&&n.lv===0&&Math.abs(n.x-t.x)<.48&&Math.abs(n.z-t.z)<.48),t.pressed&&!e&&he.plate()}for(const t of this.gates){const e=this.plates.some(s=>s.group===t.group&&s.pressed),n=t.open;if(e)t.open=!0;else if(t.open&&!(this.players.some(r=>Qn(r.x,r.z,Ce,t.x-.5,t.z-.5,t.x+.5,t.z+.5))||this.bigs.some(r=>r.state==="ground"&&Math.abs(r.x-t.x)<.5+r.hw&&Math.abs(r.z-t.z)<.5+r.hw))){t.open=!1;for(const r of this.items)if(r.state==="ground"&&Math.abs(r.x-t.x)<.5&&Math.abs(r.z-t.z)<.5){const o=this.freeNeighbour(t.x,t.z,0);o&&this.flyItem(r,o[0],o[1],0,.35)}}t.open!==n&&he.gate()}if(this.crank){const t=this.crank.pressed;this.crank.pressed=this.players.some(e=>e.lv===0&&!e.riding&&Math.abs(e.x-this.crank.x)<.48&&Math.abs(e.z-this.crank.z)<.48),this.crank.pressed!==t&&he.plate()}}freeNeighbour(t,e,n){for(const[s,r]of[[0,1],[0,-1],[1,0],[-1,0]])if(this.passable(t+s,e+r,n))return[t+s,e+r];return null}updateLift(t){var n;const e=this.lift;if(e){if(e.target=(n=this.crank)!=null&&n.pressed?1:0,!e.moving&&e.h!==e.target){if(this.bigs.some(s=>s.state==="ground"&&Math.abs(s.x-e.x)<.5+s.hw&&Math.abs(s.z-e.z)<.5+s.hw))return;e.riders=[];for(const s of this.players){if(s.lv!==e.h)continue;if(Math.abs(s.x-e.x)<.5&&Math.abs(s.z-e.z)<.5)e.riders.push(s),s.riding=!0;else if(Qn(s.x,s.z,Ce,e.x-.5,e.z-.5,e.x+.5,e.z+.5)){const o=s.x-e.x,a=s.z-e.z;Math.abs(o)>Math.abs(a)?s.x=e.x+Math.sign(o)*(.5+Ce+.01):s.z=e.z+Math.sign(a)*(.5+Ce+.01)}}e.itemRiders=this.items.filter(s=>s.state==="ground"&&s.lv===e.h&&Math.abs(s.x-e.x)<.5&&Math.abs(s.z-e.z)<.5),e.moving=!0,he.liftMove()}if(e.moving){const s=Math.sign(e.target-e.h)||(e.h>.5?1:-1);e.h=Vs(e.h+s*t*.9,0,1);for(const r of e.riders)r.x+=(e.x-r.x)*Math.min(1,t*8),r.z+=(e.z-r.z)*Math.min(1,t*8);if((e.h===0||e.h===1)&&(e.h===e.target||e.h===0&&s<0||e.h===1&&s>0)){e.moving=!1;for(const r of e.riders)r.riding=!1,r.lv=e.h;for(const r of e.itemRiders)r.lv=e.h;e.riders=[],e.itemRiders=[],he.lift()}}}}updateMover(t,e){if(this.state!=="play"&&this.state!=="celebrate")return;if(t.pause>0){t.pause-=e;return}const n=t.x+t.ax[0]*t.dir*t.speed*e,s=t.z+t.ax[1]*t.dir*t.speed*e,r=n+t.ax[0]*t.dir*.1,o=s+t.ax[1]*t.dir*.1;let a=!1,c=null;const h=Math.floor(r-t.r+.5),l=Math.floor(r+t.r+.5),u=Math.floor(o-t.r+.5),f=Math.floor(o+t.r+.5);for(let d=u;d<=f&&!a;d++)for(let g=h;g<=l;g++)if(!this.passable(g,d,0,{forBig:!0})&&Qn(r,o,t.r,g-.5,d-.5,g+.5,d+.5)){a=!0;break}if(!a)for(const d of this.bigs)d.state==="ground"&&Qn(r,o,t.r,d.x-d.hw,d.z-d.hw,d.x+d.hw,d.z+d.hw)&&(a=!0);if(!a)for(const d of this.players)d.lv===0&&Ne(r,o,d.x,d.z)<t.r+Ce+.05&&(a=!0,c=d);if(!a)for(const d of this.movers)d!==t&&Ne(r,o,d.x,d.z)<t.r+d.r&&(a=!0);if(a){t.dir*=-1,t.pause=.5,c&&(he.beep(),t.say="Excuse me!",t.sayT=1.2);return}t.x=n,t.z=s,t.walkT=(t.walkT||0)+e,t.sayT>0&&(t.sayT-=e)}updateCat(t,e){if(t.t+=e,t.state==="drink"&&t.t>1.5){let n=null,s=1e9;for(const r of this.tiles)for(const o of r){if(o.type!=="wall")continue;const a=Ne(o.x,o.z,t.x,t.z);a<s&&(s=a,n=o)}t.from=[t.x,t.z],t.to=n?[n.x,n.z]:[t.x,t.z],t.state="hop",t.t=0}else t.state==="hop"&&t.t>.9&&(t.state="nap",t.x=t.to[0],t.z=t.to[1])}updateItems(t){for(const e of this.items)if(e.state==="fly"){const n=e.fly;n.t+=t;const s=Math.min(1,n.t/n.dur);if(e.x=n.from[0]+(n.to[0]-n.from[0])*s,e.z=n.from[1]+(n.to[1]-n.from[1])*s,e.arc=Math.sin(s*Math.PI)*n.peak,e.flyY=n.fromY+(n.toY-n.fromY)*s,s>=1){e.arc=0;const r=n.onLand;e.fly=null,e.state="ground",e.lv=n.lv,r&&r(e)}}}checkDeliveries(t){if(this.state==="play"){for(const e of this.players){const n=e.held;if(n){for(const s of this.houses){if(s.h!==e.lv||Ne(e.x,e.z,s.x,s.z)>1.05)continue;const r=s.needs.find(o=>!o.done&&o.kind===n.kind);if(r){this.deliver(n,s,r,e);break}if(!s.happy&&!e.nopeShown){e.nopeShown=!0;const o=s.needs.filter(a=>!a.done).map(a=>ao[a.kind].name).join(" and ");this.say(e,`${s.name} needs ${o}`,1.8),he.nope()}}e.nopeShown&&!this.houses.some(s=>Ne(e.x,e.z,s.x,s.z)<1.3)&&(e.nopeShown=!1)}}for(const e of this.bigs)if(e.state==="ground"){if(e.kind==="food")for(const n of this.houses){if(n.h!==0||Ne(e.x,e.z,n.x,n.z)>1.25)continue;const s=n.needs.find(r=>!r.done&&r.kind==="food");if(s){this.deliverBig(e,n,s);break}}else if(e.kind==="wagon"&&e.cargo.length){if(e.unloadT=(e.unloadT||0)-t,e.unloadT>0)continue;for(const n of this.houses){if(n.h!==0||Ne(e.x,e.z,n.x,n.z)>1.6)continue;const s=e.cargo.find(r=>n.needs.some(o=>!o.done&&o.kind===r.kind));if(s){const r=n.needs.find(o=>!o.done&&o.kind===s.kind);e.cargo.splice(e.cargo.indexOf(s),1),s.big=null,this.deliver(s,n,r,null,e),e.unloadT=.35;break}}}}}}deliver(t,e,n,s,r){n.done=!0,s&&(s.held=null),t.state="fly";const o=s?[s.x,s.z]:[r.x,r.z];t.fly={from:o,to:[e.x+e.dir[0]*.55,e.z+e.dir[1]*.55],t:0,dur:.45,peak:1.2,fromY:(s?s.lv:0)*ze+1.4,toY:e.h*ze+.4,lv:e.h,onLand:a=>{a.state="gone"}},this.deeds++,he.deliver(),this.celebrateDelivery(e,t.kind),this.emit("deliver",{kind:t.kind,house:e.letter,by:s?s.idx:-1}),e.needs.every(a=>a.done)&&this.houseHappy(e)}celebrateDelivery(t,e){this.stage.burst(this.wpos(t.x,t.z,t.h,1.5),16769126,14,1.2),this.stage.burst(this.wpos(t.x,t.z,t.h,1.2),16777215,6,.8),t.popT=1.3,t.popKind=e,t.ringT=.8,t.windows&&(t.glowT=1.2)}deliverBig(t,e,n){n.done=!0;for(const[s,r]of this.holdersOf(t))r.grip=null,r.side=null;t.holders={},t.state="fly",t.flyT=0,t.flyFrom=[t.x,t.z],t.flyTo=[e.x+e.dir[0]*.7,e.z+e.dir[1]*.7],this.deeds++,he.deliver(),this.celebrateDelivery(e,"food"),this.emit("deliver",{kind:"food",house:e.letter,by:-2}),e.needs.every(s=>s.done)&&this.houseHappy(e)}houseHappy(t){t.happy=!0,t.happyT=0;const e=this.def.finale?M_:v_;t.thanks=e[(this.houses.indexOf(t)+this.def.id.length)%e.length],setTimeout(()=>he.houseDone(),250),this.stage.burst(this.wpos(t.x,t.z,t.h,2.4),16744118,20,1.6,"heart"),this.emit("houseDone",{house:t.letter})}otherOf(t){return this.players[1-t.idx]}nearestItem(t){let e=null,n=y_;const s=t.x+t.fx*.25,r=t.z+t.fz*.25;for(const o of this.items){if(o.state!=="ground"||o.lv!==t.lv||this.lift&&this.lift.moving&&o.x===this.lift.x&&o.z===this.lift.z)continue;const a=Ne(s,r,o.x,o.z);a<n&&(n=a,e=o)}return e}nearestBig(t){if(t.lv!==0)return null;let e=null,n=.6;for(const s of this.bigs){if(s.state!=="ground")continue;const r=Vs(t.x,s.x-s.hw,s.x+s.hw),o=Vs(t.z,s.z-s.hw,s.z+s.hw),a=Ne(t.x,t.z,r,o)-Ce;a<n&&(n=a,e=s)}return e}gripSideFor(t,e){const n=t.x-e.x,s=t.z-e.z,r=Object.entries(ti).sort((o,a)=>a[1][0]*n+a[1][1]*s-(o[1][0]*n+o[1][1]*s));for(const[o,[a,c]]of r){if(e.holders[o])continue;const h=e.hw+Ce+.06,l=e.x+a*h,u=e.z+c*h;if(!this.blockedCircle(l,u,Ce,0,e)&&!(Ne(l,u,t.x,t.z)>1.3))return o}return null}tossTarget(t){const e=Math.floor(t.x+.5),n=Math.floor(t.z+.5);let s=null,r=-9;for(const[o,a]of Object.values(ti)){const c=this.tile(e+o,n+a);if(!c||c.type!=="fence"||(Math.abs(o)?Math.abs(e+o*.5-t.x):Math.abs(n+a*.5-t.z))>.75)continue;const l=e+2*o,u=n+2*a;if(!this.passable(l,u,0))continue;const f=o*t.fx+a*t.fz;f>r&&(r=f,s=[l,u])}return s}nearTap(t){return t.lv===0&&this.taps.find(e=>Ne(t.x,t.z,e.x,e.z)<1.35)}nearCat(t){return this.cats.find(e=>e.state==="sleep"&&t.lv===0&&Ne(t.x,t.z,e.x,e.z)<1.4)}nearWagon(t){return this.bigs.find(e=>e.kind==="wagon"&&e.state==="ground"&&t.lv===0&&Ne(t.x,t.z,e.x,e.z)<e.hw+Ce+.7)}planAction(t){if(t.riding)return null;if(t.grip)return{label:"Let go",run:()=>this.release(t)};const e=this.otherOf(t);if(t.held){const o=t.held,a=this.nearCat(t);if(a&&o.kind==="water")return{label:"Give water to cat",run:()=>this.giveCat(t,a)};const c=this.nearWagon(t);if(c&&c.cargo.length<4)return{label:"Put in wagon",run:()=>this.loadWagon(t,c)};if(e&&!e.held&&!e.grip&&!e.riding&&e.lv===t.lv&&Ne(t.x,t.z,e.x,e.z)<1.3)return{label:`Give to ${e.name}`,run:()=>this.giveTo(t,e)};const h=this.tossTarget(t);return h?{label:"Toss over fence",run:()=>this.toss(t,h)}:{label:"Put down",run:()=>this.drop(t)}}const n=this.nearestItem(t);if(n)return{label:`Pick up ${ao[n.kind].name}`,run:()=>this.pickUp(t,n)};const s=this.nearestBig(t);if(s){const o=this.gripSideFor(t,s);if(o)return{label:s.kind==="wagon"?"Grab wagon":"Grab box",run:()=>this.grab(t,s,o)}}return this.nearTap(t)?{label:"Get water",run:()=>this.takeWater(t)}:this.nearCat(t)?{label:"Cat is thirsty",run:()=>{this.say(t,"Zzz… the cat looks thirsty!"),he.meow()}}:null}act(t){const e=this.planAction(t);e&&e.run()}pickUp(t,e){e.state="held",e.holder=t,t.held=e,he.pickup(),this.emit("pickup",{who:t.idx,kind:e.kind})}drop(t){const e=t.held;t.held=null;let n=t.x+t.fx*.55,s=t.z+t.fz*.55;this.blockedCircle(n,s,.2,t.lv)===!0&&(n=t.x,s=t.z),this.lift&&Math.abs(n-this.lift.x)<.55&&Math.abs(s-this.lift.z)<.55&&!this.lift.moving&&this.lift.h===t.lv&&(n=this.lift.x,s=this.lift.z),e.holder=null,this.flyItem(e,n,s,t.lv,.18,t),he.drop()}flyItem(t,e,n,s,r=.3,o=null,a=.4,c=null){const h=o?o.lv*ze+1.2:t.lv*ze;t.state="fly",t.fly={from:[o?o.x:t.x,o?o.z:t.z],to:[e,n],t:0,dur:r,peak:a,fromY:h,toY:s*ze,lv:s,onLand:c}}toss(t,e){const n=t.held;t.held=null,n.holder=null,he.toss(),this.emit("toss",{who:t.idx,kind:n.kind});const s=this.otherOf(t);this.flyItem(n,e[0],e[1],0,.7,t,2.2,r=>{s&&!s.held&&!s.grip&&s.lv===0&&Ne(s.x,s.z,r.x,r.z)<.9&&(r.state="held",r.holder=s,s.held=r,this.say(s,"Caught it!",1.2),he.pickup())})}giveTo(t,e){const n=t.held;t.held=null,n.state="held",n.holder=e,e.held=n,he.give(),this.say(e,"Thanks!",1.2),this.emit("give",{from:t.idx,kind:n.kind})}grab(t,e,n){const[s,r]=ti[n],o=e.hw+Ce+.06;t.x=e.x+s*o,t.z=e.z+r*o,t.fx=-s,t.fz=-r,t.grip=e,t.side=n,t.vx=t.vz=0,e.holders[n]=t,he.grab(),this.holdersOf(e).length===1?this.say(t,`${this.otherOf(t).name}, grab the other side!`,2):(this.say(t,"Together!",1.2),this.emit("lift",{big:e.kind})),this.emit("grab",{who:t.idx,big:e.kind})}release(t){const e=t.grip;e&&(e.holders[t.side]=null,t.grip=null,t.side=null,he.drop())}loadWagon(t,e){const n=t.held;t.held=null,n.holder=null,n.state="cargo",n.big=e,e.cargo.push(n),he.drop()}takeWater(t){const e=this.makeItemEnt("water",t.x,t.z,t.lv);this.items.push(e),this.buildItem(e),this.pickUp(t,e),he.water()}giveCat(t,e){const n=t.held;t.held=null,this.flyItem(n,e.x,e.z,0,.35,t,.6,s=>{s.state="gone"}),e.state="drink",e.t=0,this.deeds++,he.meow(),this.stage.burst(this.wpos(e.x,e.z,0,1),16744118,12,1.2,"heart"),this.say(t,"Here you go, kitty!",1.6),this.emit("cat",{who:t.idx})}stars(){const t=this.def.par;return this.time<=t?3:this.time<=t*1.5?2:1}delivered(){return this.houses.reduce((t,e)=>t+e.needs.filter(n=>n.done).length,0)}wpos(t,e,n=0,s=0){return new P(t*st,n*ze+s,e*st)}build(){var v,M,_,U,T,A,I,w,S,L;const t=this.group,e=this.area,n=this.W,s=this.H;this.stage.setArea(e,n*st,s*st);const r=new we(new vs(n*st+90,s*st+90),q(w_[e],{noCache:!0,map:A_()}));r.rotation.x=-Math.PI/2,r.position.set((n-1)*st/2,-.02,(s-1)*st/2),r.receiveShadow=!0,t.add(r);const o=[],a=[];for(const R of this.tiles)for(const D of R)D.type==="wall"||D.type==="house"||D.type==="tree"||D.type==="stall"||(D.h===1&&D.type!=="lift"?a.push(D):o.push(D));const[c,h]=E_[e],l=new Ft(st*.97,.08,st*.97),u=new sh(l,q(16777215,{noCache:!0}),o.length),f=new de,d=new Ot;if(o.forEach((R,D)=>{f.makeTranslation(R.x*st,.02,R.z*st),u.setMatrixAt(D,f),u.setColorAt(D,d.setHex((R.x+R.z)%2?c:h))}),u.receiveShadow=!0,t.add(u),a.length){const R=new Ft(st,ze,st),D=new sh(R,q(16777215,{noCache:!0}),a.length);a.forEach((k,B)=>{f.makeTranslation(k.x*st,ze/2,k.z*st),D.setMatrixAt(B,f),D.setColorAt(B,d.setHex((k.x+k.z)%2?15324592:14666144))}),D.receiveShadow=!0,D.castShadow=!0,t.add(D);for(const k of a){const B=this.tile(k.x,k.z+1);if(B&&B.h===0&&B.type!=="wall"){const H=new we(new Ft(st,.14,.14),q(2792847));H.position.set(k.x*st,ze,k.z*st+st/2),t.add(H)}}}const g=b_[e],x=[16740264,16769098,16777215,11766015];let m=0;const p=yh(this.def.id.length*17+n*3);for(const R of this.tiles)for(const D of R){const k=this.wpos(D.x,D.z);if(D.type==="wall"){const B=Ic(g);if(B.position.copy(k),(g==="hedge"||g==="darkHedge")&&(B.scale.y=.92+p()*.16,B.rotation.y=Math.floor(p()*4)*Math.PI/2),t.add(B),(g==="hedge"||g==="darkHedge")&&(D.x*7+D.z*3)%4===0)for(let H=0;H<3;H++){const Y=c_(x[m++%x.length]);Y.position.set(k.x+(p()-.5)*1.2,1.3+p()*.15,k.z+(p()-.5)*1.2),t.add(Y)}}else if(D.type==="tree"){const B=zn(e==="masjid"?"palm":e==="rain"?"dark":"round");B.position.copy(k),B.rotation.y=p()*Math.PI*2,B.scale.setScalar(.95+p()*.2),t.add(B)}else if(D.type==="stall"){const B=this.tile(D.x-1,D.z);if(B&&B.type==="stall")continue;const H=this.tile(D.x+1,D.z),Y=io(D.x%3);Y.position.copy(k),H&&H.type==="stall"&&(Y.position.x+=st/2,Y.scale.setScalar(1.05)),t.add(Y)}else if(D.type==="fence"){const B=(((v=this.tile(D.x-1,D.z))==null?void 0:v.type)==="fence"||((M=this.tile(D.x+1,D.z))==null?void 0:M.type)==="fence")&&!(((_=this.tile(D.x,D.z-1))==null?void 0:_.type)==="fence"||((U=this.tile(D.x,D.z+1))==null?void 0:U.type)==="fence"),H=((T=this.tile(D.x,D.z-1))==null?void 0:T.type)==="fence"||((A=this.tile(D.x,D.z+1))==null?void 0:A.type)==="fence",Y=so(!!(B||!H));if(!B&&!H){const X=["wall","gate"].includes((I=this.tile(D.x-1,D.z))==null?void 0:I.type)||["wall","gate"].includes((w=this.tile(D.x+1,D.z))==null?void 0:w.type);Y.rotation.y=X?0:Math.PI/2}if(Y.position.copy(k),t.add(Y),B&&H){const X=so(!1);X.position.copy(k),t.add(X)}}else if(D.type==="puddle"){const B=Iu();B.position.copy(k),B.rotation.y=(D.x*1.7+D.z)%3,t.add(B)}}for(const R of this.houses){const D=[-R.dir[0],-R.dir[1]],k=Math.atan2(D[0],D[1]);let B;R.kind==="table"?(B=Ru(R.look),B.position.copy(this.wpos(R.x+R.dir[0]*.95,R.z+R.dir[1]*.95,R.h))):(B=bi(R.look),B.position.copy(this.wpos(R.x+R.dir[0]*1.1,R.z+R.dir[1]*1.1,R.h))),B.rotation.y=k,t.add(B),R.model=B,R.windows=[],R.glows=[],B.traverse(lt=>{lt.name==="window"&&R.windows.push(lt),lt.name==="glow"&&R.glows.push(lt)});const H=ir(R.look);H.position.copy(this.wpos(R.x+R.dir[0]*.35,R.z+R.dir[1]*.35,R.h)),H.rotation.y=k,H.visible=!1,t.add(H),R.neighbour=H;const Y=new we(new ai(.8,24),q(16769126,{transparent:!0,opacity:.55,noCache:!0}));Y.rotation.x=-Math.PI/2,Y.position.copy(this.wpos(R.x,R.z,R.h,.07)),t.add(Y),R.mat=Y;const X=new we(new _o(.7,.9,32),Me(16777215,{transparent:!0,opacity:0,depthWrite:!1}));X.material=X.material.clone(),X.rotation.x=-Math.PI/2,X.position.copy(this.wpos(R.x,R.z,R.h,.09)),t.add(X),R.ring=X}for(const R of this.players)R.model=n_(R.who),R.model.scale.setScalar(1.06),t.add(R.model);for(const R of this.items)this.buildItem(R);for(const R of this.bigs)R.model=R.kind==="wagon"?Cu():vo(),R.kind==="food"&&R.model.scale.setScalar(1),t.add(R.model);for(const R of this.movers)R.model=R.kind==="cart"?u_(R.look):f_(R.look+1),t.add(R.model);for(const R of this.cats)R.model=Dc(),R.model.scale.setScalar(1.25),t.add(R.model);for(const R of this.plates)R.model=ro(bn[R.group]),R.model.position.copy(this.wpos(R.x,R.z)),t.add(R.model);for(const R of this.gates){const D=["wall","fence"].includes((S=this.tile(R.x-1,R.z))==null?void 0:S.type)||["wall","fence"].includes((L=this.tile(R.x+1,R.z))==null?void 0:L.type);R.model=Pu(R.group==="P"?bn.P:bn.Q,D),R.model.position.copy(this.wpos(R.x,R.z)),t.add(R.model)}for(const R of this.taps){const D=h_();D.scale.setScalar(1.45),D.position.copy(this.wpos(R.x,R.z,0,0)),t.add(D),R.model=D}if(this.lift&&(this.lift.model=Uc(),this.lift.model.position.copy(this.wpos(this.lift.x,this.lift.z)),t.add(this.lift.model)),this.crank){this.crank.model=ro(bn.K),this.crank.model.position.copy(this.wpos(this.crank.x,this.crank.z)),t.add(this.crank.model);const R=Lu();R.position.copy(this.wpos(this.crank.x-.45,this.crank.z-.45)),t.add(R),this.crank.post=R;const D=this.wpos(this.crank.x-.45,this.crank.z-.45,0,1.1),k=this.wpos(this.lift.x,this.lift.z,0,3.3),B=new bc(D,new P((D.x+k.x)/2,Math.max(D.y,k.y)+.6,(D.z+k.z)/2),k),H=new we(new Cc(B,20,.035,5),Me(9065760));t.add(H)}this.buildDecor()}buildItem(t){t.model=Au(t.kind),t.model.scale.setScalar(1.25),this.group.add(t.model)}buildDecor(){const t=this.group,e=this.W,n=this.H,s=this.area,r=yh(this.def.id.length*31+e*7+n),o=-1.6*st,a=(e+.6)*st;for(let c=0;c<n;c+=2){for(const h of[o,a]){const l=s==="market"&&r()<.5?io(Math.floor(r()*3)):zn(s==="masjid"||s==="eid"&&r()<.4?"palm":s==="rain"?"dark":"round");l.position.set(h+(r()-.5)*1.2,0,c*st+(r()-.5)),l.rotation.y=r()*Math.PI*2,l.scale.setScalar(.85+r()*.45),t.add(l)}if(c%4===2&&s!=="masjid"){const h=l_();h.position.set(r()<.5?o+1.6:a-1.6,0,c*st),t.add(h),(this.lamps||(this.lamps=[])).push(h.getObjectByName("glow"))}}if(s==="masjid"){const c=Uu();c.position.set((e-1)*st/2,0,-3.2*st),c.scale.setScalar(1.3),t.add(c);for(const h of[-2.5,e+1.5]){const l=zn("palm");l.position.set(h*st,0,-2.6*st),l.scale.setScalar(1.2),t.add(l)}}else{for(let c=-1;c<e+1;c+=2.5){const h=zn(s==="rain"?"dark":s==="eid"&&r()<.5?"palm":"round");h.position.set(c*st+r(),0,-2.4*st-r()*2),h.rotation.y=r()*Math.PI*2,h.scale.setScalar(1+r()*.6),t.add(h)}for(let c=-3;c<e+3;c+=3.5){const h=zn(s==="rain"?"dark":"round");h.position.set(c*st+r()*2,0,-5*st-r()*3),h.scale.setScalar(1.5+r()*.7),t.add(h)}}if(s==="eid"||s==="masjid"||s==="market"){const h=rc(new P(-.5*st,4.2,-.3*st),new P((e-.5)*st,4.2,-.3*st),Math.round(e*1.2),.9);t.add(h),this.bunting=h}if(s==="eid"){const c=[16735631,16769126,5032432,8449433,11766015];for(let h=0;h<8;h++){const l=Du(c[h%c.length]);l.position.set((h%2?a:o)+(r()-.5)*2,3+r()*1.5,(1+h)*st*.9),t.add(l),(this.balloons||(this.balloons=[])).push(l)}}}render(t){var s,r,o,a,c,h;const e=this.animT;for(const l of this.players){const u=l.model;let f=l.lv*ze;l.riding&&(f=this.lift.h*ze);const d=l.grip&&l.grip.lifted&&Math.hypot(((s=l.grip.v)==null?void 0:s[0])||0,((r=l.grip.v)==null?void 0:r[1])||0)>.2||!l.grip&&(l.speedNow||0)>.3,g=d?Math.abs(Math.sin(l.walkT*11))*.1:0,x=this.state==="celebrate"?Math.abs(Math.sin(e*6+l.idx))*.5:0;u.position.set(l.x*st,f+x,l.z*st);let p=Math.atan2(l.fx,l.fz)-l.yaw;p=Math.atan2(Math.sin(p),Math.cos(p)),l.yaw+=p*Math.min(1,t*12),u.rotation.y=l.yaw;const v=u.getObjectByName("rig");v.position.y=g,v.rotation.z=d?Math.sin(l.walkT*11)*.06:0;const M=u.getObjectByName("shoeL"),_=u.getObjectByName("shoeR"),U=d?Math.sin(l.walkT*11)*.18:0;M.position.z=.1+U,_.position.z=.1-U;const T=u.getObjectByName("armL"),A=u.getObjectByName("armR");l.held||l.grip?(T.rotation.set(-1.25,0,-.1),A.rotation.set(-1.25,0,.1),l.grip&&!l.grip.lifted&&l.heavyT>0&&(T.rotation.x=A.rotation.x=-1.1+Math.sin(e*30)*.1)):this.state==="celebrate"?(T.rotation.set(0,0,-2.5+Math.sin(e*8)*.3),A.rotation.set(0,0,2.5-Math.sin(e*8)*.3)):this.state==="attract"?(T.rotation.set(0,0,-.25),A.rotation.set(0,0,2.6+Math.sin(e*7+l.idx*2)*.35)):(T.rotation.set(d?Math.sin(l.walkT*11)*.5:0,0,-.25),A.rotation.set(d?-Math.sin(l.walkT*11)*.5:0,0,.25))}for(const l of this.items){const u=l.model;if(l.state==="gone"){u.visible&&(u.visible=!1);continue}if(l.state==="held"){const f=l.holder,d=(f.riding?this.lift.h:f.lv)*ze;u.position.set(f.x*st+f.fx*.7,d+1+Math.abs(Math.sin(f.walkT*11))*.06,f.z*st+f.fz*.62),u.rotation.y=f.yaw,u.scale.setScalar(1.1)}else if(l.state==="fly")u.position.set(l.x*st,l.flyY+l.arc,l.z*st),u.rotation.y+=t*8,u.scale.setScalar(1.15);else if(l.state==="cargo"){const f=l.big,d=f.cargo.indexOf(l),g=f.lifted?.35:0;u.position.set(f.x*st+(d%2-.5)*.7,.62+g+Math.floor(d/2)*.5,f.z*st+(d<2?-.2:.25)),u.scale.setScalar(.7),u.rotation.y=0}else{const d=this.lift&&Math.abs(l.x-this.lift.x)<.5&&Math.abs(l.z-this.lift.z)<.5&&(this.lift.moving||l.lv===this.lift.h)?this.lift.h*ze+.28:l.lv*ze;u.position.set(l.x*st,d+.08+Math.sin(e*3+l.id)*.08,l.z*st),u.rotation.y=Math.sin(e*1.5+l.id)*.4,u.scale.setScalar(1.3)}}for(const l of this.bigs){const u=l.model;if(l.state==="fly"){l.flyT+=t;const d=Math.min(1,l.flyT/.6),g=l.flyFrom[0]+(l.flyTo[0]-l.flyFrom[0])*d,x=l.flyFrom[1]+(l.flyTo[1]-l.flyFrom[1])*d;u.position.set(g*st,Math.sin(d*Math.PI)*1.5,x*st),u.scale.setScalar(1-d*.7),d>=1&&(l.state="gone",u.visible=!1);continue}if(l.state!=="ground")continue;const f=l.lifted?.45+Math.abs(Math.sin(this.animT*9))*.04*(Math.hypot(((o=l.v)==null?void 0:o[0])||0,((a=l.v)==null?void 0:a[1])||0)>.2?1:0):0;if(l.wobble=Math.max(0,(l.wobble||0)-t),u.position.set(l.x*st,l.kind==="wagon"?f*.2:f,l.z*st),u.rotation.z=l.wobble>0?Math.sin(e*40)*.04:0,l.kind==="wagon"){const d=this.holdersOf(l).map(([x])=>x),g=d.includes("N")||d.includes("S")?Math.PI/2:0;u.rotation.y+=(g-u.rotation.y)*Math.min(1,t*6)}}for(const l of this.movers){l.model.position.set(l.x*st,0,l.z*st);const u=Math.atan2(l.ax[0]*l.dir,l.ax[1]*l.dir)-Math.PI/2;l.model.rotation.y=l.kind==="shopper"?u+Math.PI/2:u+Math.PI/2-Math.PI/2,l.kind==="cart"?l.model.rotation.y=l.ax[0]?l.dir>0?0:Math.PI:l.dir>0?-Math.PI/2:Math.PI/2:l.model.rotation.y=Math.atan2(l.ax[0]*l.dir,l.ax[1]*l.dir);const f=l.model.getObjectByName("walker");f&&(f.getObjectByName("rig").position.y=l.pause>0?0:Math.abs(Math.sin((l.walkT||0)*9))*.08)}for(const l of this.cats){const u=l.model;if(l.state==="hop"){const g=Math.min(1,l.t/.9),x=l.from[0]+(l.to[0]-l.from[0])*g,m=l.from[1]+(l.to[1]-l.from[1])*g;u.position.set(x*st,Math.sin(g*Math.PI)*1.6+g*1.15,m*st)}else l.state==="nap"?u.position.set(l.x*st,1.15,l.z*st):u.position.set(l.x*st,0,l.z*st);const f=l.state==="drink"||l.state==="hop";u.traverse(g=>{g.name==="sleepEye"&&(g.visible=!f),g.name==="openEye"&&(g.visible=f)});const d=u.getObjectByName("head");d.position.y=.42+(l.state==="drink"?Math.abs(Math.sin(l.t*10))*.08:Math.sin(e*1.5)*.02),u.getObjectByName("tail").rotation.z=Math.sin(e*(f?6:1.2))*.3,u.scale.setScalar(1.25*(l.state==="sleep"?1+Math.sin(e*2)*.02:1))}for(const l of this.plates){const u=l.model.getObjectByName("btn");u.position.y+=((l.pressed?.07:.16)-u.position.y)*Math.min(1,t*15),(c=u.material.emissive)==null||c.setHex(l.pressed?3355443:0)}if(this.crank){const l=this.crank.model.getObjectByName("btn");l.position.y+=((this.crank.pressed?.07:.16)-l.position.y)*Math.min(1,t*15),this.crank.post.getObjectByName("wheel").rotation.z+=(this.lift.moving?4:0)*t}for(const l of this.gates){l.amt+=((l.open?1:0)-l.amt)*Math.min(1,t*8);const u=l.model.getObjectByName("bars");u.scale.y=Math.max(.06,1-l.amt*.94),u.position.y=0}if(this.lift){const l=this.lift,u=l.model.getObjectByName("platform");u.position.y=l.h*ze-.12,l.model.getObjectByName("wheel").rotation.z+=(l.moving?5:0)*t;const f=l.model.getObjectByName("rope"),d=3.3,g=l.h*ze+.2;f.scale.y=d-g,f.position.y=(d+g)/2}const n=this.stage.dusk||0;for(const l of this.houses){const u=Math.max(0,l.glowT||0),f=Math.min(1,n+u*.9);for(const d of l.windows)(h=d.material.emissive)==null||h.setHex(16757575),d.material.emissiveIntensity=f*.9;for(const d of l.glows)d.material.opacity=f*.85;if(l.ringT>0){const d=1-l.ringT/.8;l.ring.scale.setScalar(1+d*1.6),l.ring.material.opacity=(1-d)*.8}else l.ring.material.opacity=0;if(l.happy){l.happyT+=t;const d=l.neighbour;d.visible=!0;const g=Math.min(1,l.happyT/.4);d.scale.setScalar(1.08*(.3+.7*g));const x=d.getObjectByName("armR");x.rotation.z=2.6+Math.sin(e*9)*.35,d.getObjectByName("rig").position.y=Math.abs(Math.sin(e*4))*.1,l.mat.material.color.setHex(8449433)}else l.mat.material.opacity=.45+Math.sin(e*3)*.15}if(this.balloons&&this.balloons.forEach((l,u)=>{l.position.y=3.5+Math.sin(e+u)*.4}),this.lamps)for(const l of this.lamps)l.material.opacity=n*.9;this.bunting&&this.bunting.children.forEach((l,u)=>{l.rotation.y=Math.sin(e*2.2+u*.7)*.35})}dispose(){this.stage.scene.remove(this.group),this.group.traverse(t=>{var e,n;(t.isMesh||t.isInstancedMesh)&&t.geometry&&!t.geometry.userData.shared&&((n=(e=t.geometry).dispose)==null||n.call(e))})}bfs(t,e,n,s={}){const r=this.W,o=this.H,a=new Int32Array(r*o).fill(-1),c=new Int32Array(r*o).fill(-1),h=[t+e*r];a[h[0]]=0;const l=new Set(this.bigs.filter(u=>u.state==="ground"&&!s.ignoreBigs).map(u=>Math.round(u.x)+Math.round(u.z)*r));for(let u=0;u<h.length;u++){const f=h[u],d=f%r,g=f/r|0;for(const[x,m]of[[1,0],[-1,0],[0,1],[0,-1]]){const p=d+x,v=g+m;if(p<0||v<0||p>=r||v>=o)continue;const M=p+v*r;a[M]>=0||this.passable(p,v,n,s)&&(l.has(M)&&!(s.goal&&s.goal[0]===p&&s.goal[1]===v)||(a[M]=a[f]+1,c[M]=f,h.push(M)))}}return{dist:a,prev:c,W:r}}path(t,e,n,s={}){const r=this.players[t],o=Math.floor(r.x+.5),a=Math.floor(r.z+.5),c=this.bfs(o,a,r.lv,{...s,goal:[e,n]}),h=this.W;let l=e+n*h;if(c.dist[l]<0)return null;const u=[];for(;l>=0;)u.push([l%h,l/h|0]),l=c.prev[l];return u.reverse()}}let Ns=null;function A_(){if(Ns)return Ns;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,10,64,64,64);return e.addColorStop(0,"#ffffff"),e.addColorStop(.55,"#f2f2ee"),e.addColorStop(1,"#b9c4ae"),t.fillStyle=e,t.fillRect(0,0,128,128),Ns=new mu(i),Ns.colorSpace=qe,Ns}function yh(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Zs={street:{name:"Home Street",icon:"🏡",ic:"house"},market:{name:"The Market",icon:"🛒",ic:"cart"},masjid:{name:"Masjid Courtyard",icon:"🕌",ic:"masjid"},rain:{name:"Rainy Evening",icon:"🌧️",ic:"rain"},eid:{name:"Eid Morning",icon:"🎉",ic:"balloon"}},on=[{id:"l1",area:"street",name:"Hello, Neighbours!",par:70,reminder:"goodDeed",goal:"Bring each neighbour what they need before sunset.",tips:["Walk up to the water bottle and press your grab button to pick it up.","Carry it to the house that needs it. It is delivered by itself!","The big food box is heavy. BOTH of you grab a side, then walk together!"],map:["#hhh##hhh##hhh##","#.A....B....C..#","#..............#","#..w.......d...#","#..............#","#......f.......#","#..1........2..#","#..............#","################"],houses:{A:{name:"Aunty Maryam",needs:["water"],look:0},B:{name:"Uncle Yusuf",needs:["food"],look:1},C:{name:"Grandma Hawa",needs:["dates"],look:2}}},{id:"l2",area:"street",name:"Heavy Box Helpers",par:80,reminder:"oneBody",goal:"Two big food boxes! Carry them together, and mind the puddles.",tips:["Grab opposite sides of a box. You only move when you BOTH walk the same way.","Puddles are slippery and slow. Splash!"],map:["##hhh####hhh####","#..A......B....#","#......~~......#","#.....~~~~.....#","#..f...~~....f.#","#..............#","#.1..k.....t.2.#","#..............#","################"],houses:{A:{name:"Mr. Idris",needs:["food","books"],look:3},B:{name:"Aunty Safiya",needs:["food"],look:0}}},{id:"l3",area:"street",name:"The Garden Gate",par:80,reminder:"helpOneAnother",goal:"The gate only opens while someone stands on the blue button.",tips:["One of you stands on the blue button. The gate opens for the other!","Inside there is another blue button, so you can let your sibling in too."],map:["#hhh####hhh#####","#.A......B.....#","#..............#","#.......P......#","####X###########","#..............#","#.P..b....k....#","#..1.......2...#","################"],houses:{A:{name:"Grandpa Bilal",needs:["blanket"],look:1},B:{name:"Aunty Noor",needs:["books"],look:2}}},{id:"l4",area:"market",name:"Market Wagon",par:95,reminder:"wealth",goal:"The wagon is full of gifts from the market. Push and steer it together!",tips:["The wagon needs one of you to push and one to steer. Both grab it!","Park the wagon at a door and the right parcels hop out.","Carts and shoppers are busy. Wait for them to pass."],map:["##hhh####hhh##hhh#","#..A......B....C.#","#................#","#..s.............#","#.SS...SS...SS...#","#................#","#.......>........#","#..W.......k.....#","#.1..2...........#","##################"],wagon:["dates","water","gift"],houses:{A:{name:"Mr. Hassan",needs:["dates"],look:3},B:{name:"Aunty Khadija",needs:["water"],look:0},C:{name:"The Lee family",needs:["gift","books"],look:4}}},{id:"l5",area:"market",name:"Over the Fence",par:100,reminder:"animals",goal:"A fence is between you! Toss parcels over it to each other.",tips:["Stand next to the fence and press grab to toss a parcel over it.","A sleepy cat is in the way. Get water from the tap and give it a drink!"],map:["#hhh#######hhh##","#.A....=....B..#","#......=.......#","#..b...=.####..#","#......=.#k.c..#","#......=.####..#","#.1....=....T2.#","#......=.......#","################"],houses:{A:{name:"Uncle Musa",needs:["books","water"],look:1},B:{name:"Aunty Amal",needs:["blanket"],look:2}}},{id:"l6",area:"masjid",name:"Iftar Tables",par:110,reminder:"iftar",goal:"Set the iftar tables up on the terrace. Use the lift!",tips:["Stand on the green lift button to raise the lift for your sibling.","Ride the lift up with dates or water, then step off onto the terrace.","You can also put a parcel on the lift and send it up!"],map:["##hhh#####hhh###","#uuAuuuuuuuBuuu#","#uuuuuuuuuuuuuu#","#uuuuuuuLuuuuuu#","#..............#","#..K.....d..w..#","#......d.......#","#.1..w.....2...#","################"],houses:{A:{name:"Iftar table",needs:["dates","water"],kind:"table",look:0},B:{name:"Iftar table",needs:["water","dates"],kind:"table",look:1}}},{id:"l7",area:"masjid",name:"Two Gates",par:130,reminder:"helpsBrother",goal:"You start apart. Open the gates for each other to meet up!",tips:["Your buttons open YOUR SIBLING'S gate. Take turns!","Orange button opens the orange gate. Blue opens blue."],map:["##hhh###hhh###hhh#","#..A.....B.....C.#","#................#","#..f.....>....f..#","#.....P..........#","####X#######Y#####","#.......#........#","#.w..Q..#.P...k..#","#..1....#....2...#","##################"],houses:{A:{name:"Masjid kitchen",needs:["food","water"],look:0},B:{name:"Aunty Ruqayya",needs:["books"],look:2},C:{name:"Mr. Ahmed",needs:["food"],look:3}}},{id:"l8",area:"rain",name:"Rainy Evening",par:110,reminder:"smile",goal:"It is cold and rainy. Bring warm blankets to everyone!",tips:["The sleepy cat is blocking the only path. Water from the tap will wake it gently.","You can also toss blankets over the little fence."],map:["#hhh##hhh###hhh#","#.A....B.....C.#","#..~~.....~~...#","#####c######=###","#.~.....~......#","#..b..~...b..w.#","#.~...T....~.b.#","#.1.........2..#","################"],houses:{A:{name:"Grandma Zainab",needs:["blanket","water"],look:2},B:{name:"Uncle Omar",needs:["blanket"],look:1},C:{name:"The Garcia family",needs:["blanket"],look:4}}},{id:"l9",area:"rain",name:"Wagon in the Rain",par:130,reminder:"goodWord",goal:"Wheel the wagon through the rain, and fetch the dates from the garden pen.",tips:["The dates are in a little pen. Hold the blue button so your sibling can go in.","Push the wagon to each door. Watch out for the carts!"],map:["##hhh###hhh###hhh#","#..A.....B.....C.#","#..~.....~~....~.#","#......>.........#","#.~~.......~~~...#","#......s.........#","#............===.#","#..W.........Xd=.#","#.1..2..P....===.#","##################"],wagon:["blanket","water","blanket"],houses:{A:{name:"Aunty Hafsa",needs:["blanket","dates"],look:0},B:{name:"Mr. Tariq",needs:["water"],look:3},C:{name:"Grandpa Sulayman",needs:["blanket"],look:1}}},{id:"l10",area:"eid",name:"Eid Morning!",par:170,reminder:"feedTheNeedy",goal:"Eid Mubarak! Use everything you learned to share the Eid gifts.",finale:!0,tips:["Zaid is stuck behind a sleepy cat! Amina, bring it some water.","Use the buttons, the fence and teamwork to reach the houses."],map:["##hhh####hhh##hhh#","#..A......B....C.#","#.......P........#","#...f............#","#######X####=#####","#................#","#.g...P.....k..T.#","#######c####.....#","#..d....#...g....#","#.1.....#....2...#","##################"],houses:{A:{name:"Aunty Maryam",needs:["food","dates"],look:0},B:{name:"Uncle Yusuf",needs:["books","gift"],look:1},C:{name:"Grandma Hawa",needs:["gift","water"],look:2}}}];function ps(i){let t=0;for(const e of Object.values(i.houses))t+=e.needs.length;for(const e of i.map)for(const n of e)n==="c"&&(t+=1);return t}const zc=on.reduce((i,t)=>i+ps(t),0),oc=[{up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],act:["KeyE","Space"]},{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],act:["Slash","Enter","NumpadEnter","Numpad0","ShiftRight"]}],C_=new Set(oc.flatMap(i=>Object.values(i).flat()));class R_{constructor(t){this.down=new Set,this.actQueued=[!1,!1],this.enabled=!1,this.pads=[],this.touchUsed=!1,window.addEventListener("keydown",e=>{this.enabled&&(C_.has(e.code)&&e.preventDefault(),!e.repeat&&(this.down.add(e.code),oc.forEach((n,s)=>{n.act.includes(e.code)&&(this.actQueued[s]=!0)})))}),window.addEventListener("keyup",e=>{this.down.delete(e.code)}),window.addEventListener("blur",()=>this.down.clear()),t&&this.buildPads(t)}buildPads(t){t.querySelectorAll(".pad").forEach(e=>{const n=+e.dataset.set,s=e.querySelector(".stick"),r=e.querySelector(".knob"),o=e.querySelector(".act"),a={set:n,x:0,z:0,pointer:null,el:e};this.pads[n]=a;const c=u=>{const f=s.getBoundingClientRect(),d=f.left+f.width/2,g=f.top+f.height/2,x=f.width*.42;let m=u.clientX-d,p=u.clientY-g;const v=Math.hypot(m,p);v>x&&(m*=x/v,p*=x/v),r.style.transform=`translate(${m}px, ${p}px)`;const M=m/x,_=p/x;Math.hypot(M,_)<.18?(a.x=0,a.z=0):(a.x=M,a.z=_)},h=u=>{a.pointer===u.pointerId&&(a.pointer=null,a.x=0,a.z=0,r.style.transform="",s.classList.remove("on"))};s.addEventListener("pointerdown",u=>{u.preventDefault(),this.touchUsed=!0,a.pointer=u.pointerId;try{s.setPointerCapture(u.pointerId)}catch{}s.classList.add("on"),c(u)}),s.addEventListener("pointermove",u=>{a.pointer===u.pointerId&&c(u)}),s.addEventListener("pointerup",h),s.addEventListener("pointercancel",h),o.addEventListener("pointerdown",u=>{u.preventDefault(),this.touchUsed=!0,this.enabled&&(this.actQueued[n]=!0),o.classList.add("on")});const l=()=>o.classList.remove("on");o.addEventListener("pointerup",l),o.addEventListener("pointercancel",l),o.addEventListener("pointerleave",l)})}read(t){const e=oc[t],n=h=>h.some(l=>this.down.has(l));let s=(n(e.right)?1:0)-(n(e.left)?1:0),r=(n(e.down)?1:0)-(n(e.up)?1:0);const o=Math.hypot(s,r);o>0&&(s/=o,r/=o);const a=this.pads[t];a&&(a.x||a.z)&&(s=a.x,r=a.z);const c=this.actQueued[t];return this.actQueued[t]=!1,{mx:s,mz:r,act:c}}clear(){this.down.clear(),this.actQueued=[!1,!1]}}const Sh={E:"W",W:"E",N:"S",S:"N"},nn=(i,t,e,n)=>Math.hypot(i-e,t-n);class P_{constructor(t,e,n){this.L=t,this.me=e,this.hu=n,this.duty=null,this.task="idle",this.actCd=0,this.think=0,this.nearGateT=0,this.stuckT=0,this.last=null,this.boardLv=null,this.wasOnLift=!1,this.cantReachT=0,this.hint=null,this.gripWait=0}tileOf(t){return[Math.floor(t.x+.5),Math.floor(t.z+.5)]}reachable(t,e,n,s){return!!this.L.path(t.idx,e,n,s)}pathLen(t,e,n,s){const r=this.L.path(t,e,n,s);return r?r.length:1/0}steer(t,e,n=.2){const s=this.L,r=s.players[this.me],o=nn(r.x,r.z,t,e);if(o<n)return{mx:0,mz:0,arrived:!0};const a=Math.floor(t+.5),c=Math.floor(e+.5),h=s.path(this.me,a,c);let l=t,u=e;if(h&&h.length>2)l=h[1][0],u=h[1][1],nn(r.x,r.z,l,u)<.25&&h[2]&&(l=h[2][0],u=h[2][1]);else if(!h)return{mx:0,mz:0,arrived:!1,blocked:!0};let f=l-r.x,d=u-r.z;const g=Math.hypot(f,d)||1,x=h&&h.length<=2?Math.min(1,Math.max(.35,o*2.5)):1;return f=f/g*x,d=d/g*x,this.jitterT>0&&(f+=this.jx,d+=this.jz),{mx:f,mz:d,arrived:!1}}press(){return this.actCd>0?!1:(this.actCd=.45,!0)}update(t){const e=this.L,n=e.players[this.me],s=e.players[this.hu];if(this.actCd-=t,this.jitterT=(this.jitterT||0)-t,e.state!=="play"||n.riding)return{mx:0,mz:0,act:!1};if(this.last&&this.wantMove&&(nn(this.last[0],this.last[1],n.x,n.z)<.004?this.stuckT+=t:this.stuckT=0,this.stuckT>.8)){this.stuckT=0,this.jitterT=.35;const o=Math.random()*Math.PI*2;this.jx=Math.cos(o)*.8,this.jz=Math.sin(o)*.8}this.last=[n.x,n.z];const r=this.decide(t,e,n,s);return this.wantMove=Math.hypot(r.mx,r.mz)>.1&&!n.grip,r}decide(t,e,n,s){const r={mx:0,mz:0,act:!1};if(this.hint=null,n.grip){const l=n.grip;return s.grip!==l?(this.gripWait+=t,this.task="waiting on box",this.gripWait>.6&&this.press()?(this.gripWait=0,{...r,act:!0}):r):(this.gripWait=0,this.task="carrying together",{mx:s.input.mx,mz:s.input.mz,act:!1})}if(s.grip){const l=s.grip,u=[Sh[s.side],...Object.keys(ti).filter(f=>f!==Sh[s.side]&&f!==s.side)];for(const f of u){if(l.holders[f])continue;const[d,g]=ti[f],x=l.hw+.3+.06,m=l.x+d*x,p=l.z+g*x;if(e.blockedCircle(m,p,.3,0,l)===!0||!e.path(this.me,Math.floor(m+.5),Math.floor(p+.5),{ignoreBigs:!0}))continue;this.task="help carry";const v=this.steerLoose(m,p,.22);return v.arrived||nn(n.x,n.z,m,p)<.4?this.press()?{mx:0,mz:0,act:!0}:r:{...v,act:!1}}}const o=this.liftDuty(t,e,n,s);if(o)return o;const a=this.gateDuty(t,e,n,s);if(a)return a;if(n.held)return this.useHeld(e,n,s)||this.follow(e,n,s);const c=this.catTask(e,n);if(c)return c;const h=this.fetchTask(e,n,s);return h||this.follow(e,n,s)}steerLoose(t,e,n){const s=this.L,r=s.players[this.me],o=nn(r.x,r.z,t,e);if(o<n)return{mx:0,mz:0,arrived:!0};const a=s.path(this.me,Math.floor(t+.5),Math.floor(e+.5),{ignoreBigs:!0});let c=t,h=e;a&&a.length>2&&(c=a[1][0],h=a[1][1],nn(r.x,r.z,c,h)<.25&&a[2]&&(c=a[2][0],h=a[2][1]));let l=c-r.x,u=h-r.z;const f=Math.hypot(l,u)||1,d=!a||a.length<=2?Math.min(1,Math.max(.35,o*2.5)):1;return this.jitterT>0&&(l+=this.jx*f,u+=this.jz*f),{mx:l/f*d,mz:u/f*d,arrived:!1}}liftDuty(t,e,n,s){const r=e.lift,o=e.crank;if(!r||!o)return null;const a=Math.abs(s.x-r.x)<.5&&Math.abs(s.z-r.z)<.5;a&&!this.wasOnLift&&(this.boardLv=s.riding?this.boardLv:s.lv),this.wasOnLift=a;const c=nn(s.x,s.z,r.x,r.z)<1.9;let h=null;a?h=this.boardLv===0?"hold":"release":c&&s.lv===1&&r.h===0?h="hold":c&&s.lv===0&&r.h===1&&!r.moving&&(h="release"),s.riding&&(h=this.boardLv===0?"hold":"release");const l=Math.abs(n.x-o.x)<.48&&Math.abs(n.z-o.z)<.48;if(h==="hold"){if(n.lv!==0||!e.path(this.me,o.x,o.z))return null;this.task="holding lift button";const u=this.steer(o.x,o.z,.15);return{mx:u.mx,mz:u.mz,act:!1}}if(h==="release"&&l){this.task="stepping off lift button";for(const[u,f]of[[0,1],[1,0],[-1,0],[0,-1]])if(e.passable(o.x+u,o.z+f,0)){const d=this.steer(o.x+u,o.z+f,.2);return{mx:d.mx,mz:d.mz,act:!1}}}return null}gateDuty(t,e,n,s){if(!e.gates.length)return null;if(this.duty){const{plate:l,gate:u}=this.duty,f=nn(s.x,s.z,u.x,u.z)>2.3;if(this.duty.farT=f?(this.duty.farT||0)+t:0,this.duty.farT>.7||!e.path(this.me,l.x,l.z)||s.grip)this.duty=null;else{this.task="holding gate button";const d=this.steer(l.x,l.z,.15);return{mx:d.mx,mz:d.mz,act:!1}}}const r=e.plates.some(l=>Math.abs(s.x-l.x)<.48&&Math.abs(s.z-l.z)<.48);let o=null;for(const l of e.gates)!l.open&&s.lv===0&&nn(s.x,s.z,l.x,l.z)<1.75&&(o=l);if(o&&!r?this.nearGateT+=t:this.nearGateT=0,!o||this.nearGateT<.25)return null;let a=null,c=1/0;for(const l of e.plates){if(l.group!==o.group)continue;const u=this.pathLen(this.me,l.x,l.z);u<c&&(c=u,a=l)}if(!a)return null;this.duty={plate:a,gate:o},this.task="going to gate button";const h=this.steer(a.x,a.z,.15);return{mx:h.mx,mz:h.mz,act:!1}}housesNeeding(t){return this.L.houses.filter(e=>e.needs.some(n=>!n.done&&n.kind===t))}stillNeeded(t){var s,r;const e=this.L;let n=0;for(const o of e.houses)for(const a of o.needs)!a.done&&a.kind===t&&n++;for(const o of e.players)((s=o.held)==null?void 0:s.kind)===t&&n--;for(const o of e.bigs)for(const a of o.cargo)a.kind===t&&n--;for(const o of e.items)o.kind===t&&o.state==="fly"&&((r=o.fly)!=null&&r.onLand)&&o.fly.to&&o.fly.lv!==void 0&&o.fly.peak>=2&&n--;return n}planFor(t,e=null){const n=this.L;for(const c of this.housesNeeding(t))if(n.path(this.me,c.x,c.z))return{type:"house",h:c};if(n.players[this.me].lv!==0)return null;const r=this.housesNeeding(t).filter(c=>c.h===0);if(!r.length)return null;let o=null,a=1/0;for(let c=0;c<n.H;c++)for(let h=0;h<n.W;h++)if(n.tile(h,c).type==="fence")for(const[l,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=h-l,d=c-u,g=h+l,x=c+u;if(!n.passable(f,d,0)||!n.passable(g,x,0))continue;const m=this.pathLen(this.me,f,d);if(!isFinite(m))continue;const p=n.bfs(g,x,0,{ignoreGates:!0});r.some(v=>p.dist[v.x+v.z*n.W]>=0)&&(isFinite(this.pathLen(this.me,g,x))||m<a&&(a=m,o={type:"toss",stand:[f,d],fence:[h,c]}))}if(o)return o;for(const c of r)if(n.path(this.me,c.x,c.z,{ignoreGates:!0}))return{type:"wait",h:c};return null}useHeld(t,e,n){const s=e.held;if(s.kind==="water"){const o=t.cats.find(a=>a.state==="sleep");if(o){const a=this.catSpot(o);if(a){this.task="giving water to cat";const c=this.steer(a[0],a[1],.3);return c.arrived||nn(e.x,e.z,o.x,o.z)<1.3?this.press()?{mx:0,mz:0,act:!0}:{mx:0,mz:0,act:!1}:{...c,act:!1}}}}const r=this.planFor(s.kind);if(!r)return null;if(r.type==="house"){this.task=`delivering ${s.kind}`;const o=this.steer(r.h.x,r.h.z,.3);return{mx:o.mx,mz:o.mz,act:!1}}if(r.type==="toss"){this.task=`tossing ${s.kind}`;const[o,a]=r.stand,c=this.steer(o,a,.15);if(c.arrived){const h=r.fence[0]-o,l=r.fence[1]-a;e.fx=h,e.fz=l;const u=t.planAction(e);return u&&u.label==="Toss over fence"&&this.press()?{mx:0,mz:0,act:!0}:{mx:h*.2,mz:l*.2,act:!1}}return{mx:c.mx,mz:c.mz,act:!1}}return null}catSpot(t){this.L;let e=null,n=1/0;for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.pathLen(this.me,t.x+s,t.z+r);o<n&&(n=o,e=[t.x+s,t.z+r])}return e}catTask(t,e){var a;const n=t.cats.find(c=>c.state==="sleep");if(!n||e.held||!this.catSpot(n))return null;((a=t.players[this.hu].held)==null?void 0:a.kind)==="water"&&t.path(this.hu,n.x+1,n.z);let r=null,o=1/0;for(const c of t.items){if(c.state!=="ground"||c.kind!=="water"||c.lv!==e.lv)continue;const h=this.pathLen(this.me,Math.floor(c.x+.5),Math.floor(c.z+.5));h<o&&(o=h,r={item:c})}for(const c of t.taps)for(const[h,l]of[[0,1],[1,0],[-1,0],[0,-1]]){const u=this.pathLen(this.me,c.x+h,c.z+l);u<o&&(o=u,r={tap:c,spot:[c.x+h,c.z+l]})}return r?(this.task="getting water for the cat",this.fetchFrom(r,e)):null}fetchFrom(t,e){const n=this.L;if(t.item){const a=t.item,c=this.steer(a.x,a.z,.5);if(c.arrived||nn(e.x,e.z,a.x,a.z)<.7){const h=n.planAction(e);if(h&&h.label.startsWith("Pick up")&&this.press())return{mx:0,mz:0,act:!0};const l=a.x-e.x,u=a.z-e.z,f=Math.hypot(l,u)||1;return{mx:l/f*.5,mz:u/f*.5,act:!1}}return{mx:c.mx,mz:c.mz,act:!1}}const[s,r]=t.spot,o=this.steer(s,r,.3);if(o.arrived||nn(e.x,e.z,t.tap.x,t.tap.z)<1.2){const a=n.planAction(e);if(a&&a.label==="Get water"&&this.press())return{mx:0,mz:0,act:!0};const c=t.tap.x-e.x,h=t.tap.z-e.z,l=Math.hypot(c,h)||1;return{mx:c/l*.4,mz:h/l*.4,act:!1}}return{mx:o.mx,mz:o.mz,act:!1}}fetchTask(t,e,n){let s=null,r=1/0;const o=new Set;for(const a of t.houses)for(const c of a.needs)!c.done&&c.kind!=="food"&&o.add(c.kind);for(const a of t.items){if(a.state!=="ground"||a.lv!==e.lv||!o.has(a.kind)||this.stillNeeded(a.kind)<=0)continue;const c=Math.floor(a.x+.5),h=Math.floor(a.z+.5),l=this.pathLen(this.me,c,h);!isFinite(l)||!this.planFor(a.kind)||(n.held||n.grip?1/0:this.pathLen(this.hu,c,h))+2<l||l<r&&(r=l,s={item:a})}if(!s&&o.has("water")&&this.stillNeeded("water")>0&&!t.items.some(a=>a.kind==="water"&&a.state==="ground"))for(const a of t.taps)for(const[c,h]of[[0,1],[1,0],[-1,0],[0,-1]]){const l=this.pathLen(this.me,a.x+c,a.z+h);l<r&&this.planFor("water")&&(r=l,s={tap:a,spot:[a.x+c,a.z+h]})}return s?(this.task=`fetching ${s.item?s.item.kind:"water"}`,this.fetchFrom(s,e)):null}follow(t,e,n){const s=nn(e.x,e.z,n.x,n.z);if(!(n.lv===e.lv?t.path(this.me,Math.floor(n.x+.5),Math.floor(n.z+.5)):null))return this.cantReachT+=.016,this.task="waiting",{mx:0,mz:0,act:!1};if(this.cantReachT=0,s<2)return this.task="following",{mx:0,mz:0,act:!1};this.task="following";const o=this.steer(n.x,n.z,1.6);return{mx:o.mx,mz:o.mz,act:!1}}}const Fc="sadaqahSiblings.v1",$r={stars:{},deeds:{},bestTime:{},muted:!1,swap:!1,soloAs:"zaid",seenHowTo:!1,finaleSeen:!1};function L_(){try{const i=JSON.parse(localStorage.getItem(Fc)||"null");return i?{...structuredClone($r),...i}:structuredClone($r)}catch{return structuredClone($r)}}function An(i){try{localStorage.setItem(Fc,JSON.stringify(i))}catch{}}function I_(){try{localStorage.removeItem(Fc)}catch{}return structuredClone($r)}const bh={play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',back:'<path d="M14 6l-6 6 6 6"/>',next:'<path d="M10 6l6 6-6 6"/>',home:'<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',replay:'<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v5h5"/>',pause:'<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>',sound:'<path d="M4 10v4h4l5 4V6L8 10z" fill="currentColor" stroke="none"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11"/>',mute:'<path d="M4 10v4h4l5 4V6L8 10z" fill="currentColor" stroke="none"/><path d="M16 9l5 6M21 9l-5 6"/>',map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',star:'<path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.8l6.1-.7z" fill="currentColor" stroke="none"/>',question:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.7"/><path d="M12 17h.01"/>',grownup:'<circle cx="9" cy="6" r="2.5"/><path d="M4.5 20v-6a4.5 4.5 0 0 1 9 0v6"/><circle cx="17" cy="9" r="2"/><path d="M14 20v-4a3 3 0 0 1 6 0v4"/>',together:'<circle cx="8" cy="6.5" r="2.5"/><circle cx="16" cy="6.5" r="2.5"/><path d="M3.5 20v-5a4.5 4.5 0 0 1 9 0v5"/><path d="M11.5 20v-5a4.5 4.5 0 0 1 9 0v5"/>',solo:'<circle cx="12" cy="6.5" r="3"/><path d="M6 21v-5.5a6 6 0 0 1 12 0V21"/>',hand:'<path d="M8 12V6a1.5 1.5 0 0 1 3 0v5M11 5.5a1.5 1.5 0 0 1 3 0V11M14 7a1.5 1.5 0 0 1 3 0v4M17 9a1.5 1.5 0 0 1 3 0v5.5a6.5 6.5 0 0 1-13 0v-1l-2.5-3a1.5 1.5 0 0 1 2.3-1.9L8 12"/>',keys:'<rect x="3" y="7" width="18" height="11" rx="2"/><path d="M7 11h.01M11 11h.01M15 11h.01M7 14.5h10"/>',touch:'<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 10.5a1.5 1.5 0 0 1 3 0V12"/><path d="M15 11.5a1.5 1.5 0 0 1 3 0v4.5a5 5 0 0 1-5 5h-2a5 5 0 0 1-4.3-2.4L4.3 16a1.5 1.5 0 0 1 2.3-1.9L9 16.5"/>',swap:'<path d="M4 8h13l-3-3M20 16H7l3 3"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',moon:'<path d="M14 3a8 8 0 1 0 7 11.5A7 7 0 0 1 14 3z" fill="currentColor" stroke="none"/>',sun:'<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>',heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="currentColor" stroke="none"/>',gift:'<rect x="4" y="10" width="16" height="10" rx="1.5"/><path d="M3 7h18v3H3zM12 7v13M12 7c-2-4-6-3-5-1s5 1 5 1zM12 7c2-4 6-3 5-1s-5 1-5 1z"/>',box:'<path d="M3 8l9-4 9 4v9l-9 4-9-4z"/><path d="M3 8l9 4 9-4M12 12v9"/>',water:'<path d="M12 3c3 4.5 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-6.5 6-11z" fill="currentColor" stroke="none"/>',sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor" stroke="none"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" fill="currentColor" stroke="none"/>',jar:'<path d="M8 4h8M7 7h10M7 7v10a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V7"/><path d="M8 13h8v4a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" fill="currentColor" stroke="none"/>',house:'<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',cat:'<path d="M5 9l1-5 4 3h4l4-3 1 5a7 7 0 0 1-14 0z"/><path d="M9 11h.01M15 11h.01M10.5 14.5c.7.6 2.3.6 3 0"/>',fence:'<path d="M6 21V7l2-3 2 3v14M14 21V7l2-3 2 3v14M3 11h18M3 16h18"/>',lift:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 11l3-3 3 3M9 15l3 3 3-3"/>',button:'<ellipse cx="12" cy="15" rx="8" ry="4"/><path d="M4 15v-3c0-2.2 3.6-4 8-4s8 1.8 8 4v3"/><path d="M12 8V5"/>',walk:'<circle cx="13" cy="4.5" r="2" fill="currentColor" stroke="none"/><path d="M11.5 8.5L9 10l-2 3.5"/><path d="M11.5 8.5l1.5 4.5 3 2"/><path d="M13 13l-3 3-1.5 5"/><path d="M10 16l-3-1"/>',arrowUp:'<path d="M12 19V5M6 11l6-6 6 6"/>',arrowDown:'<path d="M12 5v14M6 13l6 6 6-6"/>',arrowLeft:'<path d="M19 12H5M11 6l-6 6 6 6"/>',arrowRight:'<path d="M5 12h14M13 6l6 6-6 6"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',balloon:'<path d="M12 3a5 5 0 0 1 5 5.5c0 3.5-2.5 6.5-5 6.5s-5-3-5-6.5A5 5 0 0 1 12 3z" fill="currentColor" stroke="none"/><path d="M12 15l-1 2h2z" fill="currentColor" stroke="none"/><path d="M12 17c1 2-1 3 0 5"/>',lantern:'<path d="M9 5h6M10 3h4M12 3V2"/><path d="M8 7h8l1 9a4 4 0 0 1-4 3h-2a4 4 0 0 1-4-3z"/><path d="M12 7v12"/>',rain:'<path d="M7 15a4 4 0 0 1-.5-8A6 6 0 0 1 18 8a3.5 3.5 0 0 1 0 7"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',masjid:'<path d="M4 20v-7h16v7"/><path d="M6 13a6 6 0 0 1 12 0"/><path d="M12 4v3M3 20h18M4 13V8M20 13V8"/>',cart:'<path d="M3 4h2l2.5 11h11l2-7H6.5"/><circle cx="9" cy="19" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="19" r="1.5" fill="currentColor" stroke="none"/>',blanket:'<rect x="3" y="8" width="18" height="9" rx="4.5"/><path d="M3 12.5h18M7 8v9M11 8v9"/>',book:'<path d="M4 5a2 2 0 0 1 2-2h5v16H6a2 2 0 0 0-2 2z"/><path d="M20 5a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2z"/>',dates:'<path d="M3 12h18a9 9 0 0 1-18 0z"/><circle cx="8.5" cy="9.5" r="1.8" fill="currentColor" stroke="none"/><circle cx="12.5" cy="8" r="1.8" fill="currentColor" stroke="none"/><circle cx="16" cy="9.8" r="1.8" fill="currentColor" stroke="none"/>',wagon:'<path d="M3 9h14l2 5H5z"/><circle cx="7" cy="17" r="2"/><circle cx="16" cy="17" r="2"/><path d="M17 9l3-3"/>'};function Xt(i,t=""){const e=bh[i]||bh.question;return`<svg class="ic ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`}function D_(i=document){for(const t of i.querySelectorAll("[data-ic]"))t.innerHTML=Xt(t.dataset.ic),t.classList.add("ic-slot")}const sr=()=>{var i;return(i=window.matchMedia)==null?void 0:i.call(window,"(prefers-reduced-motion: reduce)").matches};function U_(i,t,{from:e=0,ms:n=900,delay:s=0,suffix:r="",onDone:o}={}){if(t=Number(t)||0,sr()||t===e){i.textContent=t+r,o==null||o();return}const a=performance.now()+s;i.textContent=e+r;const c=h=>{const l=Math.min(1,Math.max(0,(h-a)/n)),u=1-Math.pow(1-l,3);i.textContent=Math.round(e+(t-e)*u)+r,l<1?requestAnimationFrame(c):o==null||o()};requestAnimationFrame(c)}function Ou(i,{count:t=60,colors:e=["#ffc93c","#ff6fa8","#3fa6e0","#7ac74f","#9b6bff","#ff8a3d"],duration:n=2400}={}){if(sr())return;const s=document.createElement("div");s.className="confetti";for(let r=0;r<t;r++){const o=document.createElement("i"),a=e[r%e.length],c=Math.random()*100,h=.6+Math.random()*1.6,l=Math.random()*360;o.style.cssText=`left:${c}%;background:${a};animation-duration:${h+1}s;animation-delay:${Math.random()*.6}s;transform:rotate(${l}deg);width:${6+Math.random()*6}px;height:${8+Math.random()*8}px;border-radius:${Math.random()<.3?"50%":"2px"}`,s.appendChild(o)}i.appendChild(s),setTimeout(()=>s.remove(),n+800)}function Oc(i,t,e,{from:n=t,big:s=!1,label:r="Good Deeds Jar",extra:o="",ms:a=1100,delay:c=0,onCoin:h}={}){const l=d=>Math.min(100,d/e*100);i.innerHTML=`<div class="jar${s?" big":""}"><div class="jar-glass"><div class="jar-fill" style="height:${l(n)}%"><i class="wave"></i></div><div class="jar-coins"></div></div><div class="jar-lid"></div><div class="jar-shine"></div></div>
    <div class="jar-text"><b class="jar-n">${n}</b><span class="jar-total">/ ${e}</span><small>${r}${o}</small></div>`;const u=i.querySelector(".jar-fill"),f=i.querySelector(".jar-n");return n===t?Promise.resolve():sr()?(u.style.height=l(t)+"%",f.textContent=t,Promise.resolve()):new Promise(d=>{setTimeout(()=>{u.style.transition=`height ${a}ms cubic-bezier(.3,.9,.4,1.1)`,u.style.height=l(t)+"%";const g=i.querySelector(".jar-coins"),x=Math.max(0,t-n);for(let m=0;m<Math.min(x,12);m++){const p=document.createElement("i");p.style.cssText=`left:${22+Math.random()*56}%;animation-delay:${m*(a/Math.min(x,12))*.7}ms`,g.appendChild(p),setTimeout(()=>h==null?void 0:h(m),m*(a/Math.min(x,12))*.7+350)}U_(f,t,{from:n,ms:a,onDone:()=>{i.classList.add("jar-done"),d()}})},c)})}let Mn=null;const ha=new Map;function N_(){if(Mn!==null)return Mn;try{const i=document.createElement("canvas"),t=new hu({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(1),t.outputColorSpace=qe,t.setClearColor(0,0);const e=new uu;e.add(new wu(16774888,12099704,1.5));const n=new eo(16773596,1.7);n.position.set(-4,8,7),e.add(n);const s=new eo(12577023,.6);s.position.set(5,4,-6),e.add(s);const r=new sn(28,1,.1,200);Mn={renderer:t,scene:e,camera:r,canvas:i}}catch{Mn=!1}return Mn}function ni(i=.7,t=.16){const e=new we(new ai(i,24),new mo({color:1707781,transparent:!0,opacity:t}));return e.rotation.x=-Math.PI/2,e.position.y=.012,e}function Ii(i,{size:t=256,w:e=t,h:n=t,center:s,radius:r,yaw:o=.35,pitch:a=.18,zoom:c=1}){const{renderer:h,scene:l,camera:u}=Mn;if(h.setSize(e,n,!1),u.aspect=e/n,l.add(i),i.updateMatrixWorld(!0),!s||!r){const p=new ci().setFromObject(i).getBoundingSphere(new Ri);s=s||p.center,r=r||p.radius}const f=nd.degToRad(u.fov/2),d=Math.atan(Math.tan(f)*u.aspect),g=r*1.04/Math.sin(Math.min(f,d))/c;u.position.set(s.x+Math.sin(o)*Math.cos(a)*g,s.y+Math.sin(a)*g,s.z+Math.cos(o)*Math.cos(a)*g),u.lookAt(s),u.updateProjectionMatrix(),h.render(l,u);const x=h.domElement.toDataURL("image/png");return l.remove(i),x}function Di(i,t){if(ha.has(i))return ha.get(i);if(!N_())return"";let e="";try{e=t()}catch(n){console.warn("[thumbs]",i,n)}return ha.set(i,e),e}const Fe=(i,t,e)=>new P(i,t,e);function Se(i,t="idle"){const e=Eu[i],n=Rc({girl:i==="amina",outfit:e.outfit,accent:e.accent});return Pc(n,wi[t]||wi.idle),n}const Js=(i,t="wave",e=192)=>Di(`sib:${i}:${t}:${e}`,()=>{const n=new Tt,s=Se(i,t);return n.add(s),Ii(n,{size:e,center:Fe(0,1.5,.15),radius:.95,yaw:i==="zaid"?.35:-.35,pitch:.1})}),wh=(i,t="wave",e=220)=>Di(`sibf:${i}:${t}:${e}`,()=>{const n=new Tt,s=Se(i,t);return n.add(s,ni(.75)),Ii(n,{w:e,h:Math.round(e*1.25),center:Fe(0,1.05,0),radius:1.45,yaw:i==="zaid"?.3:-.3,pitch:.1})}),z_=(i=0,t=128)=>Di(`nb:${i}:${t}`,()=>{const e=new Tt,n=ir(i);return Pc(n,wi.wave),e.add(n),Ii(e,{size:t,center:Fe(0,1.78,.18),radius:1.1,yaw:.3,pitch:.1})}),Bu=(i,t=112)=>Di(`it:${i}:${t}`,()=>{const e=new Tt,n=Au(i);e.add(n);const s=i==="food";return Ii(e,{size:t,center:Fe(0,s?.55:.4,0),radius:s?1.05:.62,yaw:.55,pitch:.42})}),F_={street:[15853263,15260866],market:[16178350,15519644],masjid:[16248024,15720903],rain:[12174284,11450818],eid:[16773590,16246210]},O_={street:9423976,market:14927246,masjid:10735484,rain:7250795,eid:10738554},B_={street:"hedge",market:"crates",masjid:"wall",rain:"darkHedge",eid:"hedge"};function zs(i,t=7,e=4){const n=new Tt,s=new we(new Ft(t*2+6,.3,e*2+6),q(O_[i],{noCache:!0}));s.position.y=-.17,n.add(s);const[r,o]=F_[i],a=new Ft(1.94,.08,1.94);for(let c=0;c<t;c++)for(let h=0;h<e;h++){const l=new we(a,q((c+h)%2?r:o));l.position.set((c-(t-1)/2)*2,.02,(h-(e-1)/2)*2),n.add(l)}for(let c=0;c<t;c++){const h=Ic(B_[i]);h.position.set((c-(t-1)/2)*2,0,-(e+1)/2*2+1),n.add(h)}return n}const Eh={street(){const i=zs("street"),t=bi(0);t.position.set(-1.5,0,-5.6),i.add(t);const e=zn("round");e.position.set(4.6,0,-5.4),i.add(e);const n=Se("zaid","carry"),s=Se("amina","carry"),r=vo();r.position.set(.3,.4,.6),i.add(r),n.position.set(-.9,0,.6),n.rotation.y=Math.PI/2,s.position.set(1.5,0,.6),s.rotation.y=-Math.PI/2,i.add(n,s);const o=no();return o.position.set(-3.6,0,1.2),o.scale.setScalar(1.2),i.add(o),i},market(){const i=zs("market"),t=io(0);t.position.set(-3.2,0,-2.6),i.add(t);const e=io(2);e.position.set(3.2,0,-2.6),i.add(e);const n=bi(1);n.position.set(0,0,-5.8),i.add(n);const s=Cu();s.position.set(.2,0,.8),s.rotation.y=.3,i.add(s);const r=js();r.position.set(0,.6,.8),r.scale.setScalar(.8),i.add(r);const o=Se("zaid","carry");return o.position.set(-1.7,0,1.2),o.rotation.y=Math.PI/2+.3,i.add(o),i.add(rc(Fe(-7,3.6,-3),Fe(7,3.6,-3),12,.7)),i},masjid(){const i=zs("masjid"),t=Uu();t.position.set(0,0,-9),t.scale.setScalar(.9),i.add(t);const e=Ru(0);e.position.set(-2.2,0,-1.6),i.add(e);const n=Lc();n.position.set(-2.6,1,-1.5),n.scale.setScalar(.8),i.add(n);const s=Uc();s.position.set(3.2,0,-1.2),s.scale.setScalar(.9),i.add(s);const r=Se("amina","wave");r.position.set(.6,0,1),i.add(r);const o=zn("palm");return o.position.set(6.2,0,-4.6),o.scale.setScalar(.8),i.add(o),i},rain(){const i=zs("rain"),t=bi(2);t.position.set(1.4,0,-5.6),i.add(t);const e=zn("dark");e.position.set(-4.6,0,-5.2),i.add(e);for(const[c,h]of[[-2.2,.4],[2.8,1.6]]){const l=Iu();l.position.set(c,0,h),i.add(l)}const n=Dc();n.position.set(-.4,0,-1.4),n.scale.setScalar(1.1),i.add(n);const s=Se("zaid","carry");s.position.set(.9,0,1),s.rotation.y=.3,i.add(s);const r=Tu();r.position.set(.9,1,1.7),r.scale.setScalar(.8),i.add(r);const o=oo(1.2,10134968);o.position.set(-2.5,6.2,-4),i.add(o);const a=oo(.9,11187396);return a.position.set(3.5,6.8,-5),i.add(a),i},eid(){const i=zs("eid"),t=bi(4);t.position.set(-1.2,0,-5.6),i.add(t);const e=zn("palm");e.position.set(4.6,0,-5.4),e.scale.setScalar(.85),i.add(e),i.add(rc(Fe(-7,3.6,-3),Fe(7,3.6,-3),12,.7));const n=[16735631,16769126,5032432,8449433];[[-5,3.2,-2],[5.2,3.6,-1.5],[-3.8,4.2,0]].forEach(([a,c,h],l)=>{const u=Du(n[l]);u.position.set(a,c,h),i.add(u)});const s=Se("zaid","cheer"),r=Se("amina","cheer");s.position.set(-1.1,0,.8),r.position.set(1.3,0,.8),i.add(s,r);const o=js();return o.position.set(3.6,0,1.4),o.scale.setScalar(1.2),i.add(o),i}},ku=(i,t=320,e=200)=>Di(`area:${i}:${t}x${e}`,()=>{const n=(Eh[i]||Eh.street)();return Ii(n,{w:t,h:e,center:Fe(0,1.4,-1.6),radius:7.2,yaw:.42,pitch:.48,zoom:1.08})}),Th={move(){const i=new Tt,t=Se("zaid","walk");t.position.set(-1.1,0,0),t.rotation.y=.6,i.add(t,ni(.7).translateX(-1.1));const e=Se("amina","walk");return e.position.set(1.1,0,.2),e.rotation.y=-.6,i.add(e,ni(.7).translateX(1.1)),[i,{center:Fe(0,1.1,0),radius:2.5,yaw:0,pitch:.2}]},carry(){const i=new Tt,t=vo();t.position.set(0,.45,0),i.add(t);const e=Se("zaid","carry");e.position.set(-1.25,0,0),e.rotation.y=Math.PI/2,i.add(e);const n=Se("amina","carry");return n.position.set(1.25,0,0),n.rotation.y=-Math.PI/2,i.add(n),i.add(ni(1.6,.14)),[i,{center:Fe(0,1,0),radius:2.5,yaw:.15,pitch:.25}]},gate(){const i=new Tt,t=ro(bn.P);t.position.set(-1.9,0,.6),i.add(t);const e=Se("amina","point");e.position.set(-1.9,.12,.6),e.rotation.y=.8,i.add(e);const n=Pu(bn.P,!0);n.position.set(1.2,0,-.6),n.getObjectByName("bars").scale.y=.08,i.add(n);for(const r of[-.8,3.2]){const o=Ic("hedge");o.position.set(r,0,-.6),o.scale.setScalar(.8),i.add(o)}const s=Se("zaid","walk");return s.position.set(1.2,0,.5),s.rotation.y=Math.PI,i.add(s),[i,{center:Fe(.2,.9,0),radius:3.2,yaw:.25,pitch:.32}]},deliver(){const i=new Tt,t=bi(1);t.position.set(0,0,-2.2),t.scale.setScalar(.8),i.add(t);const e=ir(1);Pc(e,wi.wave),e.position.set(.1,0,-.9),e.scale.setScalar(.95),i.add(e);const n=Se("amina","carry");n.position.set(-1.5,0,.6),n.rotation.y=.9,i.add(n);const s=no();return s.position.set(-.95,1,1.1),s.scale.setScalar(1.1),i.add(s),i.add(ni(.7).translateX(-1.5).translateZ(.6)),[i,{center:Fe(-.3,1.2,-.4),radius:2.9,yaw:.2,pitch:.22}]},lift(){const i=new Tt,t=Uc();t.position.set(1.1,0,0),t.getObjectByName("platform").position.y=1.4,i.add(t);const e=Se("amina","wave");e.position.set(1.1,1.55,0),e.scale.setScalar(.9),i.add(e);const n=ro(bn.K);n.position.set(-1.4,0,.4),i.add(n);const s=Se("zaid","point");s.position.set(-1.4,.12,.4),s.rotation.y=-.6,i.add(s);const r=Lu();return r.position.set(-2.1,0,-.3),i.add(r),[i,{center:Fe(0,1.6,0),radius:3.1,yaw:.1,pitch:.22}]},fence(){const i=new Tt,t=so(!1);t.position.set(0,0,0),i.add(t);const e=so(!1);e.position.set(0,0,2),i.add(e);const n=Se("zaid","cheer");n.position.set(-1.6,0,.3),n.rotation.y=Math.PI/2,i.add(n);const s=Se("amina","cheer");s.position.set(1.6,0,.3),s.rotation.y=-Math.PI/2,i.add(s);const r=js();return r.position.set(-.1,2.3,.3),r.rotation.set(.3,.6,.2),i.add(r),[i,{center:Fe(0,1.2,.3),radius:2.9,yaw:0,pitch:.22}]},cat(){const i=new Tt,t=Dc();t.position.set(.9,0,.2),t.scale.setScalar(1.3),t.rotation.y=Math.PI*.85,i.add(t);const e=Se("amina","carry");e.position.set(-1.1,0,.3),e.rotation.y=Math.PI/2,i.add(e);const n=no();return n.position.set(-.4,1,.3),n.scale.setScalar(1.1),i.add(n),i.add(ni(.7).translateX(-1.1).translateZ(.3)),[i,{center:Fe(0,.9,.2),radius:2.3,yaw:.15,pitch:.25}]},sunset(){const i=new Tt,t=bi(0);t.position.set(-.6,0,-2),t.scale.setScalar(.7),i.add(t);const e=Mo(1);e.position.set(1.8,0,.2),e.scale.setScalar(1.6),e.getObjectByName("glow").material.opacity=.9,i.add(e);const n=Nu(.7,16769930);n.position.set(2.2,3.4,-2.5),n.rotation.z=.4,i.add(n);const s=Lc();return s.position.set(-1.6,0,.6),s.scale.setScalar(1.2),i.add(s),[i,{center:Fe(.2,1.5,-.6),radius:3,yaw:.25,pitch:.2}]}},k_=(i,t=260,e=170)=>Di(`step:${i}:${t}x${e}`,()=>{const[n,s]=(Th[i]||Th.move)();return Ii(n,{w:t,h:e,...s})}),Hu=(i="cheer",t=300,e=170)=>Di(`duo:${i}:${t}x${e}`,()=>{const n=new Tt,s=Se("zaid",i);s.position.set(-.95,0,0),s.rotation.y=.35,n.add(s,ni(.7).translateX(-.95));const r=Se("amina",i);return r.position.set(.95,0,0),r.rotation.y=-.35,n.add(r,ni(.7).translateX(.95)),Ii(n,{w:t,h:e,center:Fe(0,1.25,0),radius:2.15,yaw:0,pitch:.12})});function H_(){var i,t;Mn&&(Mn.renderer.dispose(),(t=(i=Mn.renderer).forceContextLoss)==null||t.call(i),Mn=null)}const rt=i=>document.getElementById(i);let Nt=L_();Fu(Nt.muted);D_();const ne=new g_(rt("scene"),rt("labels")),Ks=new R_(rt("pads")),Gu=new URLSearchParams(location.search);let Be="duo",yt=null,hn=0,kn=null,be="title",rr=!1,co=!1,Vu=1,ms=[],as=0,is=-1,ac=!1,Wu=null;const En=()=>Nt.soloAs==="amina"?1:0,cc=()=>Nt.forceTouch||Gu.has("touch")||matchMedia("(pointer: coarse)").matches||Ks.touchUsed,G_=Object.keys(Zs).map(i=>"a-"+i);function Bc(i,t){i.classList.remove(...G_),i.classList.add("a-"+t)}const On=(i,t,e)=>i?`<img class="${t}" src="${i}" alt="" />`:Xt(e,t),V_=["title","solo","howto","grown","select","intro","pause","result","finale"];let gs="select";function We(i){be=i;for(const e of V_)rt(`screen-${e}`).classList.toggle("hidden",e!==i);const t=i==="play"||i==="pause";rt("hud").classList.toggle("hidden",!t),rt("topbar").classList.toggle("hidden",t),Xu(),Ks.enabled=i==="play",i!=="play"&&Ks.clear()}function Xu(){const i=(be==="play"||be==="pause")&&cc(),t=rt("pads");t.classList.toggle("hidden",!i),document.body.classList.toggle("touch",i),t.classList.toggle("solo",Be==="solo"),t.classList.toggle("amina",Be==="solo"&&En()===1),t.classList.toggle("swap",Be==="duo"&&Nt.swap),rt("padName0").textContent=Be==="solo"?En()?"Amina":"Zaid":Nt.swap?"Amina":"Zaid",rt("padName1").textContent=Nt.swap?"Zaid":"Amina",W_()}function W_(){const i=parseFloat(getComputedStyle(document.documentElement).fontSize),t={top:Math.round(i*3.1),bottom:8,left:0,right:0};if(!rt("pads").classList.contains("hidden")){const n=document.querySelector(".pad.left .stick").getBoundingClientRect(),s=window.innerHeight-n.top+4;if(window.innerHeight>window.innerWidth)t.bottom=s+10;else{const o=document.querySelector(".pad.left").getBoundingClientRect();t.left=t.right=Math.round(o.right*.7)}}ne.insets=t}window.addEventListener("resize",()=>{Xu(),$c()});document.addEventListener("pointerdown",()=>zu(),!0);document.addEventListener("keydown",()=>zu(),!0);document.addEventListener("click",i=>{i.target.closest("button")&&he.click()},!0);function $u(){const i=Xt(Nt.muted?"mute":"sound");rt("muteBtn").innerHTML=i,rt("hudMute").innerHTML=i,rt("pauseMute").innerHTML=i+(Nt.muted?"Sound off":"Sound on")}function kc(){Nt.muted=!Nt.muted,Fu(Nt.muted),An(Nt),$u()}rt("muteBtn").onclick=kc;rt("hudMute").onclick=kc;rt("pauseMute").onclick=kc;$u();function lo(){return Object.values(Nt.deeds).reduce((i,t)=>i+t,0)}function Hc(i,t={}){return Oc(i,lo(),zc,t)}function Gc(){Xc(0,{attract:!0}),Hc(rt("titleJar"));const i=Js("zaid","wave"),t=Js("amina","wave");i?rt("titleZaid").src=i:rt("titleZaid").replaceWith(Object.assign(document.createElement("div"),{className:"ph",innerHTML:Xt("solo")})),t&&(rt("titleAmina").src=t),We("title")}rt("playDuo").onclick=()=>{Be="duo",Vc()};rt("playSolo").onclick=()=>{const i=wh("zaid","wave"),t=wh("amina","wave");i&&(rt("pickZaid").src=i),t&&(rt("pickAmina").src=t),We("solo")};rt("soloZaid").onclick=()=>{Be="solo",Nt.soloAs="zaid",An(Nt),Vc()};rt("soloAmina").onclick=()=>{Be="solo",Nt.soloAs="amina",An(Nt),Vc()};rt("soloBack").onclick=()=>We("title");rt("titleHowTo").onclick=()=>{gs="title",Wc()};rt("titleGrownUps").onclick=()=>{rt("swapToggle").checked=Nt.swap,rt("touchToggle").checked=!!Nt.forceTouch,We("grown")};rt("grownBack").onclick=()=>We("title");rt("swapToggle").onchange=i=>{Nt.swap=i.target.checked,An(Nt)};rt("touchToggle").onchange=i=>{Nt.forceTouch=i.target.checked,An(Nt)};rt("resetBtn").onclick=()=>{if(!confirm("Reset all stars and good deeds?"))return;const i=Nt.muted;Nt=I_(),Nt.muted=i,An(Nt),Hc(rt("titleJar")),We("title")};function Vc(){if(!Nt.seenHowTo){gs="select",Wc();return}Ss()}const X_=[{id:"move",c:"c-green",ic:"walk",title:"Walk",text:"Each of you moves your own sibling."},{id:"carry",c:"c-orange",ic:"box",title:"Carry together",text:"Big boxes need BOTH of you: grab a side each and walk the same way."},{id:"gate",c:"c-blue",ic:"button",title:"Buttons & gates",text:"A gate stays open while someone stands on its button."},{id:"deliver",c:"c-pink",ic:"gift",title:"Deliver",text:"Carry a parcel to the door that needs it."},{id:"lift",c:"c-teal",ic:"lift",title:"Lift",text:"Stand on the green button to raise the lift for your sibling."},{id:"fence",c:"c-purple",ic:"fence",title:"Toss",text:"Stand by a fence and press grab to toss a parcel over."},{id:"cat",c:"c-gold",ic:"cat",title:"Sleepy cat",text:"Give it water from the tap and it moves. Be kind to animals!"},{id:"sunset",c:"c-indigo",ic:"moon",title:"Before sunset",text:"Finish before iftar for three stars. Being late is okay!"}],ua=[{move:"<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>",act:"<kbd>E</kbd>",side:"Left side of the screen"},{move:`<kbd>${Xt("arrowUp")}</kbd><kbd>${Xt("arrowLeft")}</kbd><kbd>${Xt("arrowDown")}</kbd><kbd>${Xt("arrowRight")}</kbd>`,act:"<kbd>Enter</kbd> or <kbd>/</kbd>",side:"Right side of the screen"}];function Wc(){rt("howSteps").innerHTML=X_.map((e,n)=>{const s=k_(e.id);return`<div class="step ${e.c}" style="--i:${n}"><span class="num">${n+1}</span><div class="pic">${On(s,"",e.ic)}</div><b>${e.title}</b><p>${e.text}</p></div>`}).join("");const i=!Nt.swap,t=Be==="solo"&&gs!=="title";rt("howPlayers").innerHTML=["zaid","amina"].map((e,n)=>{const s=e==="zaid"?"Zaid":"Amina",r=ua[n===0===i?0:1],o=On(Js(e,"wave"),"","solo");if(t){const a=En()===n;return`<div class="pcard ${e}">${o}<div class="pname">${s}<small>${a?"you":"helper"}</small></div>`+(a?`<div class="keys">${Xt("keys")} ${ua[0].move} or ${ua[1].move}</div><div class="keys">${Xt("hand")} <kbd>E</kbd> <kbd>Enter</kbd> or <kbd>/</kbd> grab · touch: stick left, hand right</div>`:`<div class="keys">${Xt("heart")} Follows you, holds buttons, carries the other side of big boxes and brings parcels.</div><div class="keys"></div>`)+"</div>"}return`<div class="pcard ${e}">${o}<div class="pname">${s}<small>Player ${n+1}</small></div><div class="keys">${Xt("keys")} ${r.move} move &nbsp; ${r.act} grab</div><div class="keys">${Xt("touch")} ${r.side}</div></div>`}).join(""),We("howto")}rt("howtoOk").onclick=()=>{Nt.seenHowTo=!0,An(Nt),gs==="pause"?We("pause"):gs==="title"?We("title"):Ss()};function $_(i){return i===0||!!Nt.stars[on[i-1].id]||Gu.has("unlock")}const Qs=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function q_(i){return`<span class="mini-jar"><span class="mj" style="--fill:${Math.round(i/3*100)}%"></span><span class="st">${[1,2,3].map(t=>Xt("star",t<=i?"":"off")).join("")}</span></span>`}function Ss(){(!yt||yt.state!=="attract")&&Xc(0,{attract:!0});const i=Js("zaid","wave",96),t=Js("amina","wave",96);rt("modePill").innerHTML=Be==="solo"?`${On(En()?t:i,"","solo")} Solo as ${En()?"Amina":"Zaid"}`:`${On(i,"","solo")}${On(t,"","solo")} Together`;const e=rt("levelGrid");e.innerHTML="";let n=!1;on.forEach((s,r)=>{const o=document.createElement("button"),a=$_(r),c=Nt.stars[s.id]||0,h=Nt.bestTime[s.id],l=(Nt.deeds[s.id]||0)>=ps(s);o.className=`lvl a-${s.area}`+(a?"":" locked")+(c?" done":""),o.style.setProperty("--i",r),a&&!c&&!n&&(o.classList.add("next"),n=!0);const u=Object.values(s.houses).map(()=>Xt("house")).join("");o.innerHTML=`<div class="pic">${On(ku(s.area),"",Zs[s.area].ic)}<span class="num">${r+1}</span>${a?"":`<span class="lock">${Xt("lock")}</span>`}${l?`<span class="full" title="Every good deed found">${Xt("heart")}</span>`:""}</div>
      <div class="body"><span class="nm">${s.name}</span><div class="meta">${q_(c)}<span class="houses">${u}</span></div>
      ${h!=null?`<span class="best">${Xt("timer")} best ${Qs(h)}</span>`:`<span class="best">${Xt("gift")} ${ps(s)} deeds</span>`}</div>`,o.title=`${Zs[s.area].name}: ${s.name}`,o.onclick=()=>{a?or(r):he.nope()},e.appendChild(o)}),Hc(rt("selectJar")),We("select")}rt("selectBack").onclick=()=>Gc();function Xc(i,{attract:t=!1}={}){return yt&&yt.dispose(),ne.clearParticles(),ne.clearLabels(),hn=i,yt=new T_(on[i],ne,{onEvent:Q_}),yt.state=t?"attract":"intro",kn=!t&&Be==="solo"?new P_(yt,1-En(),En()):null,is=-1,ac=!1,ne.cam.init=!1,$c(),yt}function $c(){yt&&(ne.yaw=window.innerHeight>window.innerWidth*1.15?Math.PI/2:0,ne.cam.init=!1,co=!1,ne.setRegion(qu()),ne.updateCamera(0,!0),co=Y_()<24)}function Y_(){const i=o=>(o.project(ne.camera),[o.x*ne.w/2,o.y*ne.h/2]),t=yt.W*st/2,e=yt.H*st/2,n=i(new P(t,0,e)),s=i(new P(t+st,0,e)),r=i(new P(t,0,e+st));return Math.max(Math.hypot(s[0]-n[0],s[1]-n[1]),Math.hypot(r[0]-n[0],r[1]-n[1]))}function qu(){return{x0:-.55*st,x1:(yt.W-.45)*st,z0:(ne.yaw?-1.75:-.7)*st,z1:(yt.H-.45)*st,y:3.2}}function j_(){if(yt.state==="attract"){const[u,f]=yt.players,d=(u.x+f.x)/2*st,g=(u.z+f.z)/2*st;return{x0:d-7,x1:d+7,z0:g-9,z1:g+2,y:2.5}}const i=qu();if(!co)return i;const t=yt.players;let e=Math.min(...t.map(u=>u.x)),n=Math.max(...t.map(u=>u.x)),s=Math.min(...t.map(u=>u.z)),r=Math.max(...t.map(u=>u.z));const o=2.6;e-=o,n+=o,s-=o+.6,r+=o*.7;const a=Math.min(yt.W,9),c=Math.min(yt.H,6.5);if(n-e<a){const u=(e+n)/2;e=u-a/2,n=u+a/2}if(r-s<c){const u=(s+r)/2;s=u-c/2,r=u+c/2}const h={x0:e*st,x1:n*st,z0:s*st,z1:r*st,y:3},l=(u,f,d,g)=>{let x=0;return f-u>=g-d?[d,g]:(u<d&&(x=d-u),f>g&&(x=g-f),[u+x,f+x])};return[h.x0,h.x1]=l(h.x0,h.x1,i.x0,i.x1),[h.z0,h.z1]=l(h.z0,h.z1,i.z0,i.z1),ne.yaw?(h.z0=i.z0,h.z1=i.z1):h.z0=Math.min(h.z0,i.z0+st),h}const Z_=[[/box|wagon|push/i,"box"],[/button|gate/i,"button"],[/lift/i,"lift"],[/fence|toss/i,"fence"],[/cat/i,"cat"],[/water|tap/i,"water"],[/puddle/i,"rain"],[/cart|shopper/i,"cart"],[/helper/i,"heart"]],J_=i=>(Z_.find(([t])=>t.test(i))||[null,"sparkle"])[1];function or(i){Xc(i);const t=on[i],e=document.querySelector("#screen-intro .card");Bc(e,t.area);const n=ku(t.area);rt("introThumb").src=n||"",rt("introThumb").style.display=n?"":"none",rt("introArea").innerHTML=`${Xt(Zs[t.area].ic)} ${Zs[t.area].name} · Level ${i+1}`,rt("introName").textContent=t.name,rt("introGoal").textContent=t.goal;const s=Nt.bestTime[t.id],r=(Nt.deeds[t.id]||0)>=ps(t),o=t.map.some(c=>c.includes("c"));rt("introTarget").innerHTML=[`<span class="chip">${Xt(t.area==="eid"?"balloon":"moon")}${t.area==="eid"?"Party at":"Sunset at"} <b>${Qs(t.par)}</b></span>`,s!=null?`<span class="chip">${Xt("timer")}Your best <b>${Qs(s)}</b></span>`:"",s!=null&&!r&&o?`<span class="chip warm">${Xt("cat")}Someone furry still needs you</span>`:""].join(""),rt("introNeeds").innerHTML=yt.houses.map((c,h)=>{const l=c.kind==="table"?Xt("masjid","who"):On(z_(c.look),"who","solo"),u=c.needs.map(f=>On(Bu(f.kind),"",ao[f.kind].ic)).join("");return`<div class="need-card" style="--i:${h}">${l}<div><div class="hn">${c.name}</div><div class="its">${u}</div></div></div>`}).join("");const a=t.tips.map(c=>({t:c,cls:""}));Be==="solo"&&t.id==="l7"&&a.push({t:"Solo tip: before you go through a gate, stand on the button in your area so your helper can come too!",cls:"solo"}),Be==="solo"&&a.push({t:"Your helper follows you, holds buttons and grabs the other side of big boxes.",cls:"solo"}),rt("introTips").innerHTML=a.map(({t:c,cls:h})=>`<div class="tip ${h}">${Xt(h?"heart":J_(c))}<span>${c}</span></div>`).join(""),We("intro")}rt("introGo").onclick=()=>Yu();function Yu(){yt.state="play",rr=!1,ms=[...on[hn].tips],as=0,rt("hintBanner").classList.add("hidden"),rt("hintBanner").textContent="";const i=on[hn],t=i.area==="eid";rt("hudMoon").innerHTML=Xt(t?"balloon":"moon"),document.querySelector(".sunset").title=t?"Time until the Eid party":"Time until sunset (iftar)",Bc(rt("hudLevel"),i.area),rt("hudLevel").innerHTML=`<span class="n">${hn+1}</span><span class="t">${i.name}</span>`,lc="",We("play"),$c(),K_(i.finale?"Eid Mubarak!":"Bismillah! Let's go!",i.finale?"eid":"")}function K_(i,t=""){const e=document.createElement("div");e.className="popup "+t,e.textContent=i,e.style.left="50%",e.style.top="40%",rt("popups").appendChild(e),setTimeout(()=>e.remove(),1900)}function Q_(i,t){if(i==="deliver"){const e=rt("hudCount");e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")}else if(i==="heavy")ho("Big boxes need BOTH of you! One grabs each side, then walk the same way.");else if(i==="complete"){is=0,he.win();const e=new P(yt.W*st/2,0,yt.H*st/2);ne.confetti(e,yt.W*st),ms=[],rt("hintBanner").classList.add("hidden"),as=99}else i==="cat"&&ho("Kindness to animals is a good deed too!")}function ho(i){ms[0]===i||rt("hintBanner").dataset.text===i||(ms.unshift(i),as=0)}function So(){be==="play"&&(rr=!0,We("pause"))}function qc(){rr=!1,We("play")}rt("pauseBtn").onclick=So;rt("resumeBtn").onclick=qc;rt("restartBtn").onclick=()=>{or(hn)};rt("pauseHowTo").onclick=()=>{gs="pause",Wc()};rt("quitBtn").onclick=()=>{rr=!1,Ss()};window.addEventListener("keydown",i=>{(i.code==="Escape"||i.code==="KeyP")&&(be==="play"?So():be==="pause"&&qc())});document.addEventListener("visibilitychange",()=>{document.hidden&&So()});function tv(){const i=on[hn],t=yt.stars(),e=Nt.stars[i.id]||0,n=Nt.deeds[i.id]||0,s=lo(),r=Nt.bestTime[i.id],o=r!=null&&Math.round(yt.time)<r;Nt.stars[i.id]=Math.max(e,t),Nt.deeds[i.id]=Math.max(n,yt.deeds),Nt.bestTime[i.id]=Math.min(Nt.bestTime[i.id]??1/0,Math.round(yt.time)),An(Nt);const a=Math.max(0,yt.deeds-n);Wu={level:i.id,stars:t,time:yt.time,deeds:yt.deeds,added:a};const c=document.querySelector("#screen-result .card");Bc(c,i.area);const h=Hu("cheer");rt("resDuo").src=h||"",rt("resDuo").style.display=h?"":"none",rt("resTitle").textContent=t===3?"MashaAllah! Perfect teamwork!":t===2?"Great job, you two!":"Well done! Iftar is served!",rt("resStars").innerHTML=[1,2,3].map((p,v)=>`<span style="animation-delay:${.25+v*.22}s;display:inline-flex">${Xt("star",p<=t?"":"off")}</span>`).join("");for(let p=0;p<t;p++)setTimeout(()=>he.star(p),300+p*220);const l=t===3,u=Math.ceil(yt.time-i.par),f=ps(i)-yt.deeds,d=yt.events.filter(p=>p.type==="lift").length,g=yt.events.filter(p=>p.type==="give"||p.type==="toss").length;rt("resStats").innerHTML=[`<span class="stat">${Xt("gift")}<b>${yt.deeds}</b> good deeds</span>`,`<span class="stat${o?" good":""}">${Xt("timer")}<b>${Qs(yt.time)}</b>${o?" New best!":""}</span>`,l?`<span class="stat good">${Xt("sun")}Before sunset!</span>`:u<=20?`<span class="stat warm">${Xt("moon")}Only <b>${u}s</b> after sunset. So close!</span>`:`<span class="stat">${Xt("moon")}Sunset was at <b>${Qs(i.par)}</b></span>`,d?`<span class="stat">${Xt("together")}Carried together <b>×${d}</b></span>`:"",g?`<span class="stat">${Xt("hand")}Passed to each other <b>×${g}</b></span>`:"",f>0?`<span class="stat warm">${Xt("cat")}A thirsty cat is still waiting here</span>`:yt.deeds>=ps(i)&&(n<yt.deeds||t===3)?`<span class="stat good">${Xt("heart")}Every good deed on this street!</span>`:""].join("");const x=__[i.reminder];rt("remText").textContent=x.text,rt("remSource").textContent=x.source,rt("remMeaning").textContent=x.meaning,Oc(rt("resultJar"),lo(),zc,{from:s,delay:900,extra:a?` · <em>+${a} new</em>`:"",onCoin:p=>he.jar(p)});const m=hn===on.length-1;rt("resNext").innerHTML=m?`${Xt("balloon")}Eid celebration!`:`${Xt("next")}Next street`,We("result"),t===3&&!sr()&&setTimeout(()=>Ou(rt("screen-result"),{count:70}),150)}rt("resNext").onclick=()=>{if(hn===on.length-1){Nt.finaleSeen=!0,An(Nt);const i=Hu("cheer",340,190);rt("finaleDuo").src=i||"",Oc(rt("finaleJar"),lo(),zc,{from:0,big:!0,delay:500,ms:1600}),We("finale"),sr()||setTimeout(()=>Ou(rt("screen-finale"),{count:90,duration:3200}),200)}else or(hn+1)};rt("resReplay").onclick=()=>or(hn);rt("resLevels").onclick=()=>Ss();rt("finaleOk").onclick=()=>Ss();function ev(i){const t=Ah(Ks.read(0)),e=Ah(Ks.read(1));if(Be==="duo"){const n=Nt.swap?1:0;yt.setInput(n,t),yt.setInput(1-n,e)}else{const n=En(),s=Math.hypot(e.mx,e.mz)>Math.hypot(t.mx,t.mz);yt.setInput(n,{mx:s?e.mx:t.mx,mz:s?e.mz:t.mz,act:t.act||e.act}),kn&&yt.setInput(1-n,kn.update(i))}}function Ah(i){if(!ne.yaw)return i;const[t,e]=ne.screenToWorld(i.mx,i.mz);return{mx:t,mz:e,act:i.act}}const Ch=Xt("hand");function nv(i){return Be==="solo"?i===En()?cc()?Ch:"E":null:cc()?Ch:(i===0!==Nt.swap?0:1)===0?"E":"Enter"}const Rh=(i,t="ic")=>On(Bu(i,64),t,ao[i].ic);function iv(){ne.beginLabels();const i=be==="play"&&yt.state==="play";for(const t of yt.players){const e=ne.label("p"+t.idx),n=nv(t.idx),s=i&&n?yt.planAction(t):null,r=Be==="solo"?t.idx===En()?"you":"helper":t.idx===0!==Nt.swap?"P1":"P2";let o="";t.bubble&&(o+=`<span class="say">${t.bubble}</span>`),s&&(o+=`<span class="prompt"><span class="k">${n}</span>${s.label}</span>`),o+=`<span class="tag ${t.who}">${t.name}<small>${r}</small></span>`;const a=(t.riding?yt.lift.h:t.lv)*ze+2.35;ne.placeLabel(e,new P(t.x*st,a,t.z*st),o)}if(yt.state!=="attract"){for(const t of yt.houses){const e=ne.label("h"+t.letter);let n;const s=t.popT>0?`<span class="plus">+1 ${Rh(t.popKind,"")}</span>`:"";t.happy?n=`<div class="house-bubble happy">${Xt("heart")} ${t.thanks}${s}</div>`:n=`<div class="house-bubble"><span class="hn">${t.name}</span>${t.needs.map(o=>`<span class="ic${o.done?" done":""}">${Rh(o.kind,"")}${o.done?`<span class="tick">${Xt("check")}</span>`:""}</span>`).join("")}${s}</div>`;const r=t.h*ze+(t.kind==="table"?2.2:3);ne.placeLabel(e,new P((t.x+t.dir[0]*.3)*st,r,(t.z+t.dir[1]*.3)*st),n)}yt.cats.forEach((t,e)=>{if(t.state!=="sleep"&&t.state!=="nap")return;const n=ne.label("cat"+e);ne.placeLabel(n,new P(t.x*st,t.state==="nap"?2.6:1.5,t.z*st),'<span class="zzz">Zzz</span>')}),yt.taps.forEach((t,e)=>{ne.placeLabel(ne.label("tap"+e),new P(t.x*st,2.9,t.z*st),`<span class="tap-lbl">${Xt("water")} Tap</span>`)}),yt.movers.forEach((t,e)=>{if(!(t.sayT>0))return;const n=ne.label("m"+e);ne.placeLabel(n,new P(t.x*st,2.8,t.z*st),`<span class="mover-say">${t.say}</span>`)})}ne.endLabels()}let lc="";function sv(i){if(be!=="play"&&be!=="pause")return;const t=on[hn],e=yt.time/t.par;rt("hudSun").style.left=`${Math.min(100,e*100)}%`,rt("hudSky").classList.toggle("late",e>=1);const n=`${yt.delivered()}/${yt.totalNeeds}`;if(n!==lc&&(lc=n,rt("hudCount").innerHTML=`${Xt("gift")}<b>${yt.delivered()}</b>/${yt.totalNeeds}`),e>=1&&!ac&&yt.state==="play"&&(ac=!0,ho(t.area==="eid"?"The Eid party has started! Keep going, everyone is still waiting for you.":"The sun has set. Keep going, the neighbours are still happy to see you.")),be==="play"){as-=i;const s=rt("hintBanner");if(as<=0)if(ms.length){const r=ms.shift();s.dataset.text=r,s.innerHTML=`${Xt("sparkle")}<span>${r}</span>`,s.classList.remove("hidden"),as=5.5}else s.classList.add("hidden"),s.dataset.text="";kn&&kn.cantReachT>6&&(kn.cantReachT=0,ho("Your helper can't reach you. Stand on a button to open a gate for them!"))}}let Ph=performance.now();function ju(i){const t=Math.min(.05,(i-Ph)/1e3);if(Ph=i,yt){if(!rr&&(be==="play"||be==="intro"||be==="title"||be==="select"||be==="solo"||be==="howto"||be==="grown"||be==="result"||be==="finale")){const e=Math.max(1,Math.round(Vu));for(let n=0;n<e;n++)be==="play"&&ev(t),yt.update(t)}is>=0&&be==="play"&&(is+=t,is>2.6&&(is=-1,tv())),ne.setSunset(yt.state==="attract"?.2:yt.time/on[hn].par),ne.setRegion(j_()),ne.updateCamera(t),iv(),sv(t)}ne.updateParticles(t),ne.render(),requestAnimationFrame(ju)}window.game={get screen(){return be},get level(){return yt},get helper(){return kn},get mode(){return Be},get save(){return Nt},get lastResult(){return Wu},get follow(){return co},LEVELS:on,setMode(i,t){Be=i,t&&(Nt.soloAs=t,An(Nt))},open(i){or(i)},go(){Yu()},showTitle:Gc,showSelect:Ss,setSpeed(i){Vu=i},pause:So,resume:qc,path(i,t,e){return(yt==null?void 0:yt.path(i,t,e))||null},snap(){const i=yt;return i?{screen:be,state:i.state,time:+i.time.toFixed(2),deeds:i.deeds,delivered:i.delivered(),total:i.totalNeeds,players:i.players.map(t=>{var e;return{x:+t.x.toFixed(3),z:+t.z.toFixed(3),lv:t.lv,held:((e=t.held)==null?void 0:e.kind)||null,grip:t.grip?t.grip.id:null,side:t.side,riding:t.riding,bubble:t.bubble}}),items:i.items.map(t=>({id:t.id,kind:t.kind,x:+t.x.toFixed(2),z:+t.z.toFixed(2),lv:t.lv,state:t.state})),bigs:i.bigs.map(t=>({id:t.id,kind:t.kind,x:+t.x.toFixed(3),z:+t.z.toFixed(3),state:t.state,lifted:!!t.lifted,holders:Object.fromEntries(Object.entries(t.holders).filter(([,e])=>e).map(([e,n])=>[e,n.idx])),cargo:t.cargo.map(e=>e.kind)})),houses:i.houses.map(t=>({letter:t.letter,x:t.x,z:t.z,happy:t.happy,needs:t.needs.map(e=>e.kind+(e.done?"✓":""))})),gates:i.gates.map(t=>({x:t.x,z:t.z,open:t.open})),plates:i.plates.map(t=>({x:t.x,z:t.z,pressed:t.pressed})),lift:i.lift?{h:+i.lift.h.toFixed(2),moving:i.lift.moving}:null,cats:i.cats.map(t=>t.state),helper:kn?kn.task:null}:null}};Gc();requestAnimationFrame(ju);setTimeout(()=>{matchMedia("(pointer: coarse)").matches&&H_()},2e4);
