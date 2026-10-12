import{R as ji,H as Eu,W as Bi,a as tn,s as bu,w as Tu}from"./scroll-U0OfgBbK.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="170",wu=0,Ja=1,Au=2,ll=1,Ru=2,Tn=3,$n=0,We=1,Ve=2,Wn=0,ki=1,mo=2,Ka=3,ja=4,Cu=5,ci=100,Pu=101,Lu=102,Du=103,Uu=104,Iu=200,Nu=201,Fu=202,Ou=203,go=204,_o=205,Bu=206,ku=207,zu=208,Hu=209,Gu=210,Vu=211,Wu=212,Xu=213,qu=214,vo=0,xo=1,Mo=2,Vi=3,So=4,yo=5,Eo=6,bo=7,ul=0,Yu=1,$u=2,Xn=0,Zu=1,Ju=2,Ku=3,ju=4,Qu=5,th=6,eh=7,hl=300,Wi=301,Xi=302,To=303,wo=304,vs=306,ls=1e3,ui=1001,Ao=1002,Re=1003,nh=1004,Dr=1005,mn=1006,Ps=1007,hi=1008,Pn=1009,fl=1010,dl=1011,vr=1012,da=1013,mi=1014,wn=1015,gi=1016,pa=1017,ma=1018,qi=1020,pl=35902,ml=1021,gl=1022,ln=1023,_l=1024,vl=1025,zi=1026,Yi=1027,xs=1028,ga=1029,xl=1030,_a=1031,va=1033,ns=33776,is=33777,rs=33778,ss=33779,Ro=35840,Co=35841,Po=35842,Lo=35843,Do=36196,Uo=37492,Io=37496,No=37808,Fo=37809,Oo=37810,Bo=37811,ko=37812,zo=37813,Ho=37814,Go=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,$o=37821,os=36492,Zo=36494,Jo=36495,Ml=36283,Ko=36284,jo=36285,Qo=36286,ih=3200,rh=3201,Sl=0,sh=1,Vn="",Ge="srgb",Qi="srgb-linear",Ms="linear",le="srgb",Si=7680,Qa=519,oh=512,ah=513,ch=514,yl=515,lh=516,uh=517,hh=518,fh=519,tc=35044,ec="300 es",An=2e3,us=2001;class tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,ta=180/Math.PI;function er(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function dh(i,t){return(i%t+t)%t}function Ds(i,t,e){return(1-e)*i+e*t}function ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,r,s,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],S=r[1],x=r[4],v=r[7],P=r[2],T=r[5],R=r[8];return s[0]=o*_+a*S+c*P,s[3]=o*m+a*x+c*T,s[6]=o*p+a*v+c*R,s[1]=l*_+u*S+h*P,s[4]=l*m+u*x+h*T,s[7]=l*p+u*v+h*R,s[2]=f*_+d*S+g*P,s[5]=f*m+d*x+g*T,s[8]=f*p+d*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Us.makeScale(t,e)),this}rotate(t){return this.premultiply(Us.makeRotation(-t)),this}translate(t,e){return this.premultiply(Us.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Xt;function El(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ph(){const i=hs("canvas");return i.style.display="block",i}const nc={};function fr(i){i in nc||(nc[i]=!0,console.warn(i))}function mh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _h(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?Ms:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ic=[.64,.33,.3,.6,.15,.06],rc=[.2126,.7152,.0722],sc=[.3127,.329],oc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Qi]:{primaries:ic,whitePoint:sc,transfer:Ms,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:rc,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:ic,whitePoint:sc,transfer:le,toXYZ:oc,fromXYZ:ac,luminanceCoefficients:rc,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});let yi;class vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=hs("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xh=0;class bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Is(r[o].image)):s.push(Is(r[o]))}else s=Is(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;class Ie extends tr{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=ui,r=ui,s=mn,o=hi,a=ln,c=Pn,l=Ie.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=er(),this.name="",this.source=new bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=hl;Ie.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,r=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(d+1)/2,P=(p+1)/2,T=(u+f)/4,R=(h+_)/4,L=(g+m)/4;return x>v&&x>P?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=R/n):v>P?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=L/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ie(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Sh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Ie{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends Ie{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),T=Math.atan2(P,p*S);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const v=a*S;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new D,cc=new jn;class Er{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Ir.subVectors(this.max,cr),Ei.subVectors(t.a,cr),bi.subVectors(t.b,cr),Ti.subVectors(t.c,cr),Nn.subVectors(bi,Ei),Fn.subVectors(Ti,bi),ti.subVectors(Ei,Ti);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ti.z,ti.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ti.z,0,-ti.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ti.y,ti.x,0];return!Fs(e,Ei,bi,Ti,Ir)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,Ei,bi,Ti,Ir))?!1:(Nr.crossVectors(Nn,Fn),e=[Nr.x,Nr.y,Nr.z],Fs(e,Ei,bi,Ti,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new D,new D,new D,new D,new D,new D,new D,new D],rn=new D,Ur=new Er,Ei=new D,bi=new D,Ti=new D,Nn=new D,Fn=new D,ti=new D,cr=new D,Ir=new D,Nr=new D,ei=new D;function Fs(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ei.fromArray(i,s);const a=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),c=t.dot(ei),l=e.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Eh=new Er,lr=new D,Os=new D;class xa{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(lr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Os.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(Os)),this.expandByPoint(lr.copy(t.center).sub(Os))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new D,Bs=new D,Fr=new D,On=new D,ks=new D,Or=new D,zs=new D;class wl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Bs.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Bs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=On.dot(this.direction),c=-On.dot(Fr),l=On.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Bs).addScaledVector(Fr,f),d}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,r,s){ks.subVectors(e,t),Or.subVectors(n,t),zs.crossVectors(ks,Or);let o=this.direction.dot(zs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const c=a*this.direction.dot(Or.crossVectors(On,Or));if(c<0)return null;const l=a*this.direction.dot(ks.cross(On));if(l<0||c+l>o)return null;const u=-a*On.dot(zs);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bh,t,Th)}lookAt(t,e,n){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Bn.crossVectors(n,Ye),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Bn.crossVectors(n,Ye)),Bn.normalize(),Br.crossVectors(Ye,Bn),r[0]=Bn.x,r[4]=Br.x,r[8]=Ye.x,r[1]=Bn.y,r[5]=Br.y,r[9]=Ye.y,r[2]=Bn.z,r[6]=Br.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],P=n[15],T=r[0],R=r[4],L=r[8],E=r[12],M=r[1],A=r[5],O=r[9],F=r[13],B=r[2],X=r[6],k=r[10],tt=r[14],W=r[3],ft=r[7],xt=r[11],At=r[15];return s[0]=o*T+a*M+c*B+l*W,s[4]=o*R+a*A+c*X+l*ft,s[8]=o*L+a*O+c*k+l*xt,s[12]=o*E+a*F+c*tt+l*At,s[1]=u*T+h*M+f*B+d*W,s[5]=u*R+h*A+f*X+d*ft,s[9]=u*L+h*O+f*k+d*xt,s[13]=u*E+h*F+f*tt+d*At,s[2]=g*T+_*M+m*B+p*W,s[6]=g*R+_*A+m*X+p*ft,s[10]=g*L+_*O+m*k+p*xt,s[14]=g*E+_*F+m*tt+p*At,s[3]=S*T+x*M+v*B+P*W,s[7]=S*R+x*A+v*X+P*ft,s[11]=S*L+x*O+v*k+P*xt,s[15]=S*E+x*F+v*tt+P*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*d-n*c*d)+_*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+e*l*h-e*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-e*c*h+e*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,x=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,v=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,P=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,T=e*S+n*x+r*v+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=S*R,t[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*R,t[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*p+n*c*p)*R,t[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*d-n*c*d)*R,t[4]=x*R,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*R,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*R,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*d+e*c*d)*R,t[8]=v*R,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*R,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*d-e*a*d)*R,t[12]=P*R,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*m+e*h*m)*R,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,S=c*l,x=c*u,v=c*h,P=n.x,T=n.y,R=n.z;return r[0]=(1-(_+p))*P,r[1]=(d+v)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(f+p))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+x)*R,r[9]=(m-S)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const o=wi.set(r[4],r[5],r[6]).length(),a=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],sn.copy(this);const l=1/s,u=1/o,h=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,e.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=An){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let d,g;if(a===An)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===us)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=An){const c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*l,d=(n+r)*u;let g,_;if(a===An)g=(o+s)*h,_=-2*h;else if(a===us)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new D,sn=new ge,bh=new D(0,0,0),Th=new D(1,1,1),Bn=new D,Br=new D,Ye=new D,lc=new ge,uc=new jn;class gn{constructor(t=0,e=0,n=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wh=0;const hc=new D,Ai=new jn,yn=new ge,kr=new D,ur=new D,Ah=new D,Rh=new jn,fc=new D(1,0,0),dc=new D(0,1,0),pc=new D(0,0,1),mc={type:"added"},Ch={type:"removed"},Ri={type:"childadded",child:null},Hs={type:"childremoved",child:null};class Ce extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new D,e=new gn,n=new jn,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Xt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ur,kr,this.up):yn.lookAt(kr,ur,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ch),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Rh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new D,En=new D,Gs=new D,bn=new D,Ci=new D,Pi=new D,gc=new D,Vs=new D,Ws=new D,Xs=new D,qs=new xe,Ys=new xe,$s=new xe;class cn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),on.subVectors(t,e),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){on.subVectors(r,e),En.subVectors(n,e),Gs.subVectors(t,e);const o=on.dot(on),a=on.dot(En),c=on.dot(Gs),l=En.dot(En),u=En.dot(Gs),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return qs.setScalar(0),Ys.setScalar(0),$s.setScalar(0),qs.fromBufferAttribute(t,e),Ys.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(qs,s.x),o.addScaledVector(Ys,s.y),o.addScaledVector($s,s.z),o}static isFrontFacing(t,e,n,r){return on.subVectors(n,e),En.subVectors(t,e),on.cross(En).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ci.subVectors(r,n),Pi.subVectors(s,n),Vs.subVectors(t,n);const c=Ci.dot(Vs),l=Pi.dot(Vs);if(c<=0&&l<=0)return e.copy(n);Ws.subVectors(t,r);const u=Ci.dot(Ws),h=Pi.dot(Ws);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ci,o);Xs.subVectors(t,s);const d=Ci.dot(Xs),g=Pi.dot(Xs);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Pi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return gc.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(gc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=dh(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Zs(o,s,t+1/3),this.g=Zs(o,s,t),this.b=Zs(o,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=Ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Al[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return te.fromWorkingColorSpace(De.copy(this),t),Math.round(Ae(De.r*255,0,255))*65536+Math.round(Ae(De.g*255,0,255))*256+Math.round(Ae(De.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(De.copy(this),e);const n=De.r,r=De.g,s=De.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ge){te.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,r=De.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(zr);const n=Ds(kn.h,zr.h,e),r=Ds(kn.s,zr.s,e),s=Ds(kn.l,zr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new jt;jt.NAMES=Al;let Ph=0;class br extends tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=er(),this.name="",this.blending=ki,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class he extends br{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,Hr=new ot;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class Rl extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cl extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lh=0;const je=new ge,Js=new Ce,Li=new D,$e=new Er,hr=new Er,be=new D;class Ne extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(El(t)?Cl:Rl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors($e.min,hr.min),$e.expandByPoint(be),be.addVectors($e.max,hr.max),$e.expandByPoint(be)):($e.expandByPoint(hr.min),$e.expandByPoint(hr.max))}$e.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)be.fromBufferAttribute(a,l),c&&(Li.fromBufferAttribute(t,l),be.add(Li)),r=Math.max(r,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new D,c[L]=new D;const l=new D,u=new D,h=new D,f=new ot,d=new ot,g=new ot,_=new D,m=new D;function p(L,E,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(A),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(A),a[L].add(_),a[E].add(_),a[M].add(_),c[L].add(m),c[E].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,E=S.length;L<E;++L){const M=S[L],A=M.start,O=M.count;for(let F=A,B=A+O;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new D,v=new D,P=new D,T=new D;function R(L){P.fromBufferAttribute(r,L),T.copy(P);const E=a[L];x.copy(E),x.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(T,E);const A=v.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,A)}for(let L=0,E=S.length;L<E;++L){const M=S[L],A=M.start,O=M.count;for(let F=A,B=A+O;F<B;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _c=new ge,ni=new wl,Gr=new xa,vc=new D,Vr=new D,Wr=new D,Xr=new D,Ks=new D,qr=new D,xc=new D,Yr=new D;class Zt extends Ce{constructor(t=new Ne,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Ks.fromBufferAttribute(h,t),o?qr.addScaledVector(Ks,u):qr.addScaledVector(Ks.sub(e),u))}e.add(qr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),ni.copy(t.ray).recast(t.near),!(Gr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Gr,vc)===null||ni.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(_c.copy(s).invert(),ni.copy(t.ray).applyMatrix4(_c),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,P=x;v<P;v+=3){const T=a.getX(v),R=a.getX(v+1),L=a.getX(v+2);r=$r(this,p,t,n,l,u,h,T,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=$r(this,o,t,n,l,u,h,S,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,P=x;v<P;v+=3){const T=v,R=v+1,L=v+2;r=$r(this,p,t,n,l,u,h,T,R,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;r=$r(this,o,t,n,l,u,h,S,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Dh(i,t,e,n,r,s,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===$n,a),c===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Yr);return l<e.near||l>e.far?null:{distance:l,point:Yr.clone(),object:i}}function $r(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Vr),i.getVertexPosition(c,Wr),i.getVertexPosition(l,Xr);const u=Dh(i,t,e,n,Vr,Wr,Xr,xc);if(u){const h=new D;cn.getBarycoord(xc,Vr,Wr,Xr,h),r&&(u.uv=cn.getInterpolatedAttribute(r,a,c,l,h,new ot)),s&&(u.uv1=cn.getInterpolatedAttribute(s,a,c,l,h,new ot)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};cn.getNormal(Vr,Wr,Xr,f.normal),u.face=f,u.barycoord=h}return u}class Xe extends Ne{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2));function g(_,m,p,S,x,v,P,T,R,L,E){const M=v/R,A=P/L,O=v/2,F=P/2,B=T/2,X=R+1,k=L+1;let tt=0,W=0;const ft=new D;for(let xt=0;xt<k;xt++){const At=xt*A-F;for(let kt=0;kt<X;kt++){const ne=kt*M-O;ft[_]=ne*S,ft[m]=At*x,ft[p]=B,l.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=T>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(kt/R),h.push(1-xt/L),tt+=1}}for(let xt=0;xt<L;xt++)for(let At=0;At<R;At++){const kt=f+At+X*xt,ne=f+At+X*(xt+1),Y=f+(At+1)+X*(xt+1),st=f+(At+1)+X*xt;c.push(kt,ne,st),c.push(ne,Y,st),W+=6}a.addGroup(d,W,E),d+=W,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const r in n)t[r]=n[r]}return t}function Uh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ih={clone:$i,merge:Fe};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends br{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ll extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new D,Mc=new ot,Sc=new ot;class an extends Ll{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,Mc,Sc),e.subVectors(Sc,Mc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Ui=1;class Oh extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Di,Ui,t,e);r.layers=this.layers,this.add(r);const s=new an(Di,Ui,t,e);s.layers=this.layers,this.add(s);const o=new an(Di,Ui,t,e);o.layers=this.layers,this.add(o);const a=new an(Di,Ui,t,e);a.layers=this.layers,this.add(a);const c=new an(Di,Ui,t,e);c.layers=this.layers,this.add(c);const l=new an(Di,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dl extends Ie{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bh extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Dl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xe(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Wn});s.uniforms.tEquirect.value=e;const o=new Zt(r,s),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=mn),new Oh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const js=new D,kh=new D,zh=new Xt;class oi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=js.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zh.getNormalMatrix(t),r=this.coplanarPoint(js).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new xa,Zr=new D;class Sa{constructor(t=new oi,e=new oi,n=new oi,r=new oi,s=new oi,o=new oi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],x=r[14],v=r[15];if(n[0].setComponents(c-s,f-l,m-d,v-p).normalize(),n[1].setComponents(c+s,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+u,m+g,v+S).normalize(),n[3].setComponents(c-o,f-u,m-g,v-S).normalize(),n[4].setComponents(c-a,f-h,m-_,v-x).normalize(),e===An)n[5].setComponents(c+a,f+h,m+_,v+x).normalize();else if(e===us)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zr.x=r.normal.x>0?t.max.x:t.min.x,Zr.y=r.normal.y>0?t.max.y:t.min.y,Zr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ul(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class ke extends Ne{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let x=0;x<l;x++){const v=x*h-s;g.push(v,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,v=S+l*(p+1),P=S+1+l*(p+1),T=S+1+l*p;d.push(x,v,T),d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
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
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
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
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,Hf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jf=`#if defined( USE_POINTS_UV )
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
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
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
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ad=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,Jd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 diffuse;
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
}`,rp=`#define LAMBERT
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
}`,sp=`#define LAMBERT
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
}`,op=`#define MATCAP
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
}`,ap=`#define MATCAP
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
}`,cp=`#define NORMAL
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
}`,lp=`#define NORMAL
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
}`,up=`#define PHONG
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
}`,hp=`#define PHONG
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
}`,fp=`#define STANDARD
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
}`,dp=`#define STANDARD
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
}`,pp=`#define TOON
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
}`,mp=`#define TOON
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
}`,gp=`uniform float size;
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,xp=`uniform vec3 color;
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
}`,Mp=`uniform float rotation;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Gh,alphahash_pars_fragment:Vh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:Yh,aomap_fragment:$h,aomap_pars_fragment:Zh,batching_pars_vertex:Jh,batching_vertex:Kh,begin_vertex:jh,beginnormal_vertex:Qh,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:of,clipping_planes_vertex:af,color_fragment:cf,color_pars_fragment:lf,color_pars_vertex:uf,color_vertex:hf,common:ff,cube_uv_reflection_fragment:df,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:_f,emissivemap_pars_fragment:vf,colorspace_fragment:xf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Ef,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Nf,envmap_vertex:Tf,fog_vertex:wf,fog_pars_vertex:Af,fog_fragment:Rf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Uf,lights_pars_begin:If,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:kf,lights_physical_fragment:zf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:$f,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:Kf,map_particle_pars_fragment:jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:td,morphinstance_vertex:ed,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:rd,morphtarget_vertex:sd,normal_fragment_begin:od,normal_fragment_maps:ad,normal_pars_fragment:cd,normal_pars_vertex:ld,normal_vertex:ud,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:_d,premultiplied_alpha_fragment:vd,project_vertex:xd,dithering_fragment:Md,dithering_pars_fragment:Sd,roughnessmap_fragment:yd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Td,shadowmap_vertex:wd,shadowmask_pars_fragment:Ad,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Pd,skinnormal_vertex:Ld,specularmap_fragment:Dd,specularmap_pars_fragment:Ud,tonemapping_fragment:Id,tonemapping_pars_fragment:Nd,transmission_fragment:Fd,transmission_pars_fragment:Od,uv_pars_fragment:Bd,uv_pars_vertex:kd,uv_vertex:zd,worldpos_vertex:Hd,background_vert:Gd,background_frag:Vd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:qd,cube_frag:Yd,depth_vert:$d,depth_frag:Zd,distanceRGBA_vert:Jd,distanceRGBA_frag:Kd,equirect_vert:jd,equirect_frag:Qd,linedashed_vert:tp,linedashed_frag:ep,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:rp,meshlambert_frag:sp,meshmatcap_vert:op,meshmatcap_frag:ap,meshnormal_vert:cp,meshnormal_frag:lp,meshphong_vert:up,meshphong_frag:hp,meshphysical_vert:fp,meshphysical_frag:dp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:_p,shadow_vert:vp,shadow_frag:xp,sprite_vert:Mp,sprite_frag:Sp},gt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},pn={basic:{uniforms:Fe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Fe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Fe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Fe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Fe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Fe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Fe([gt.points,gt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Fe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Fe([gt.common,gt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Fe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Fe([gt.sprite,gt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Fe([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Fe([gt.lights,gt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};pn.physical={uniforms:Fe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Jr={r:0,b:0,g:0},ri=new gn,yp=new ge;function Ep(i,t,e,n,r,s,o){const a=new jt(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===vs)?(u===void 0&&(u=new Zt(new Xe(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:$i(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ri.copy(x.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(ri)),u.material.toneMapped=te.getTransfer(v.colorSpace)!==le,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Zt(new ke(2,2),new hn({name:"BackgroundMaterial",uniforms:$i(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(Jr,Pl(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m}}function bp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(M,A,O,F,B){let X=!1;const k=h(F,O,A);s!==k&&(s=k,l(s.object)),X=d(M,F,O,B),X&&g(M,F,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(M,A,O,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,A,O){const F=O.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let X=B[A.id];X===void 0&&(X={},B[A.id]=X);let k=X[F];return k===void 0&&(k=f(c()),X[F]=k),k}function f(M){const A=[],O=[],F=[];for(let B=0;B<e;B++)A[B]=0,O[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,A,O,F){const B=s.attributes,X=A.attributes;let k=0;const tt=O.getAttributes();for(const W in tt)if(tt[W].location>=0){const xt=B[W];let At=X[W];if(At===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),xt===void 0||xt.attribute!==At||At&&xt.data!==At.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(M,A,O,F){const B={},X=A.attributes;let k=0;const tt=O.getAttributes();for(const W in tt)if(tt[W].location>=0){let xt=X[W];xt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const At={};At.attribute=xt,xt&&xt.data&&(At.data=xt.data),B[W]=At,k++}s.attributes=B,s.attributesNum=k,s.index=F}function _(){const M=s.newAttributes;for(let A=0,O=M.length;A<O;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const O=s.newAttributes,F=s.enabledAttributes,B=s.attributeDivisors;O[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),B[M]!==A&&(i.vertexAttribDivisor(M,A),B[M]=A)}function S(){const M=s.newAttributes,A=s.enabledAttributes;for(let O=0,F=A.length;O<F;O++)A[O]!==M[O]&&(i.disableVertexAttribArray(O),A[O]=0)}function x(M,A,O,F,B,X,k){k===!0?i.vertexAttribIPointer(M,A,O,B,X):i.vertexAttribPointer(M,A,O,F,B,X)}function v(M,A,O,F){_();const B=F.attributes,X=O.getAttributes(),k=A.defaultAttributeValues;for(const tt in X){const W=X[tt];if(W.location>=0){let ft=B[tt];if(ft===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ft!==void 0){const xt=ft.normalized,At=ft.itemSize,kt=t.get(ft);if(kt===void 0)continue;const ne=kt.buffer,Y=kt.type,st=kt.bytesPerElement,Pt=Y===i.INT||Y===i.UNSIGNED_INT||ft.gpuType===da;if(ft.isInterleavedBufferAttribute){const lt=ft.data,Q=lt.stride,pt=ft.offset;if(lt.isInstancedInterleavedBuffer){for(let nt=0;nt<W.locationSize;nt++)p(W.location+nt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let nt=0;nt<W.locationSize;nt++)m(W.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let nt=0;nt<W.locationSize;nt++)x(W.location+nt,At/W.locationSize,Y,xt,Q*st,(pt+At/W.locationSize*nt)*st,Pt)}else{if(ft.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,ft.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let lt=0;lt<W.locationSize;lt++)x(W.location+lt,At/W.locationSize,Y,xt,At*st,At/W.locationSize*lt*st,Pt)}}else if(k!==void 0){const xt=k[tt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(W.location,xt);break;case 3:i.vertexAttrib3fv(W.location,xt);break;case 4:i.vertexAttrib4fv(W.location,xt);break;default:i.vertexAttrib1fv(W.location,xt)}}}}S()}function P(){L();for(const M in n){const A=n[M];for(const O in A){const F=A[O];for(const B in F)u(F[B].object),delete F[B];delete A[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const O in A){const F=A[O];for(const B in F)u(F[B].object),delete F[B];delete A[O]}delete n[M.id]}function R(M){for(const A in n){const O=n[A];if(O[M.id]===void 0)continue;const F=O[M.id];for(const B in F)u(F[B].object),delete F[B];delete O[M.id]}}function L(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Tp(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function Ap(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new oi,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:n,x=S*4;let v=p.clippingState||null;c.value=v,v=u(g,f,x,d);for(let P=0;P!==x;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Rp(i){let t=new WeakMap;function e(o,a){return a===To?o.mapping=Wi:a===wo&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===wo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Bh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ss extends Ll{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,yc=[.125,.215,.35,.446,.526,.582],li=20,Qs=new Ss,Ec=new jt;let to=null,eo=0,no=0,io=!1;const ai=(1+Math.sqrt(5))/2,Ii=1/ai,bc=[new D(-ai,Ii,0),new D(ai,Ii,0),new D(-Ii,0,ai),new D(Ii,0,ai),new D(0,ai,-Ii),new D(0,ai,Ii),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),this._renderer.xr.enabled=io,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:gi,format:ln,colorSpace:Qi,depthBuffer:!1},r=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(s)),this._blurMaterial=Pp(s,t,e)}return r}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,r){const a=new an(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ec),u.toneMapping=Xn,u.autoClear=!1;const d=new he({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Zt(new Xe,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Ec),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Kr(r,S*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Wi||t.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bc[(r-s-1)%bc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Zt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*li-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):li;m>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const p=[];let S=0;for(let R=0;R<li;++R){const L=R/_,E=Math.exp(-L*L/2);p.push(E),R===0?S+=E:R<m&&(S+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[r],P=3*v*(r>x-Fi?r-x+Fi:0),T=4*(this._cubeSize-v);Kr(e,P,T,3*v,2*v),c.setRenderTarget(e),c.render(h,Qs)}}function Cp(i){const t=[],e=[],n=[];let r=i;const s=i-Fi+1+yc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Fi?c=yc[o-i+Fi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,L=T>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];S.set(E,_*g*T),x.set(f,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const P=new Ne;P.setAttribute("position",new un(S,_)),P.setAttribute("uv",new un(x,m)),P.setAttribute("faceIndex",new un(v,p)),t.push(P),r>Fi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(i,t,e){const n=new Ln(i,t,e);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Pp(i,t,e){const n=new Float32Array(li),r=new D(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ac(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Rc(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}function Lp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===To||c===wo,u=c===Wi||c===Xi;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Tc(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Tc(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Up(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const P=S[x+0],T=S[x+1],R=S[x+2];f.push(P,T,T,R,R,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const P=x+0,T=x+1,R=x+2;f.push(P,T,T,R,R,P)}}else return;const m=new(El(f)?Cl:Rl)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Ip(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Np(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Fp(i,t,e){const n=new WeakMap,r=new xe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*P*4*h),R=new Tl(T,v,P,h);R.type=wn,R.needsUpdate=!0;const L=x*4;for(let M=0;M<h;M++){const A=m[M],O=p[M],F=S[M],B=v*P*4*M;for(let X=0;X<A.count;X++){const k=X*L;d===!0&&(r.fromBufferAttribute(A,X),T[B+k+0]=r.x,T[B+k+1]=r.y,T[B+k+2]=r.z,T[B+k+3]=0),g===!0&&(r.fromBufferAttribute(O,X),T[B+k+4]=r.x,T[B+k+5]=r.y,T[B+k+6]=r.z,T[B+k+7]=0),_===!0&&(r.fromBufferAttribute(F,X),T[B+k+8]=r.x,T[B+k+9]=r.y,T[B+k+10]=r.z,T[B+k+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new ot(v,P)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Op(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Il extends Ie{constructor(t,e,n,r,s,o,a,c,l,u=zi){if(u!==zi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zi&&(n=mi),n===void 0&&u===Yi&&(n=qi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nl=new Ie,Cc=new Il(1,1),Fl=new Tl,Ol=new yh,Bl=new Dl,Pc=[],Lc=[],Dc=new Float32Array(16),Uc=new Float32Array(9),Ic=new Float32Array(4);function nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Pc[r];if(s===void 0&&(s=new Float32Array(r),Pc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ys(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),Ee(e,n)}}function Vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Uc.set(n),i.uniformMatrix3fv(this.addr,!1,Uc),Ee(e,n)}}function Wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),Ee(e,n)}}function Xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Qp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=yl,s=Cc):s=Nl,e.setTexture2D(t||s,r)}function tm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ol,r)}function em(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bl,r)}function nm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Fl,r)}function im(i){switch(i){case 5126:return Bp;case 35664:return kp;case 35665:return zp;case 35666:return Hp;case 35674:return Gp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Zp;case 36294:return Jp;case 36295:return Kp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}function rm(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){const e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function om(i,t){const e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function am(i,t){const e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function cm(i,t){const e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lm(i,t){const e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function um(i,t){const e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function fm(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function pm(i,t){i.uniform4iv(this.addr,t)}function mm(i,t){i.uniform1uiv(this.addr,t)}function gm(i,t){i.uniform2uiv(this.addr,t)}function _m(i,t){i.uniform3uiv(this.addr,t)}function vm(i,t){i.uniform4uiv(this.addr,t)}function xm(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Nl,s[o])}function Mm(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ol,s[o])}function Sm(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bl,s[o])}function ym(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Fl,s[o])}function Em(i){switch(i){case 5126:return rm;case 35664:return sm;case 35665:return om;case 35666:return am;case 35674:return cm;case 35675:return lm;case 35676:return um;case 5124:case 35670:return hm;case 35667:case 35671:return fm;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return ym}}class bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=im(e.type)}}class Tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Em(e.type)}}class wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Nc(i,t){i.seq.push(t),i.map[t.id]=t}function Am(i,t,e){const n=i.name,r=n.length;for(ro.lastIndex=0;;){const s=ro.exec(n),o=ro.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Nc(e,l===void 0?new bm(a,i,t):new Tm(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new wm(a),Nc(e,h)),e=h}}}class as{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Am(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Fc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rm=37297;let Cm=0;function Pm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Oc=new Xt;function Lm(i){te._getMatrix(Oc,te.workingColorSpace,i);const t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ms:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Pm(i.getShaderSource(t),o)}else return r}function Dm(i,t){const e=Lm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Um(i,t){let e;switch(t){case Zu:e="Linear";break;case Ju:e="Reinhard";break;case Ku:e="Cineon";break;case ju:e="ACESFilmic";break;case th:e="AgX";break;case eh:e="Neutral";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new D;function Im(){te.getLuminanceCoefficients(jr);const i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Fm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Om(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function dr(i){return i!==""}function kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(Bm,zm)}const km=new Map;function zm(i,t){let e=Yt[t];if(e===void 0){const n=km.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ea(e)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(i){return i.replace(Hm,Gm)}function Gm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ll?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function qm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function Ym(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $m(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Vm(e),l=Wm(e),u=Xm(e),h=qm(e),f=Ym(e),d=Nm(e),g=Fm(s),_=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Dm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=ea(o),o=kc(o,e),o=zc(o,e),a=ea(a),a=kc(a,e),a=zc(a,e),o=Hc(o),a=Hc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,v=S+p+a,P=Fc(r,r.VERTEX_SHADER,x),T=Fc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(A){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(P).trim(),B=r.getShaderInfoLog(T).trim();let X=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,T);else{const tt=Bc(r,P,"vertex"),W=Bc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+tt+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||B==="")&&(k=!1);k&&(A.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(P),r.deleteShader(T),L=new as(r,_),E=Om(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Rm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let Zm=0;class Jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}}function jm(i,t,e,n,r,s,o){const a=new Ma,c=new Jm,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,A,O,F){const B=O.fog,X=F.geometry,k=E.isMeshStandardMaterial?O.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),W=tt&&tt.mapping===vs?tt.image.height:null,ft=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,At=xt!==void 0?xt.length:0;let kt=0;X.morphAttributes.position!==void 0&&(kt=1),X.morphAttributes.normal!==void 0&&(kt=2),X.morphAttributes.color!==void 0&&(kt=3);let ne,Y,st,Pt;if(ft){const ce=pn[ft];ne=ce.vertexShader,Y=ce.fragmentShader}else ne=E.vertexShader,Y=E.fragmentShader,c.update(E),st=c.getVertexShaderID(E),Pt=c.getFragmentShaderID(E);const lt=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),pt=F.isInstancedMesh===!0,nt=F.isBatchedMesh===!0,ut=!!E.map,H=!!E.matcap,$=!!tt,C=!!E.aoMap,bt=!!E.lightMap,et=!!E.bumpMap,yt=!!E.normalMap,ht=!!E.displacementMap,Nt=!!E.emissiveMap,Tt=!!E.metalnessMap,w=!!E.roughnessMap,y=E.anisotropy>0,z=E.clearcoat>0,Z=E.dispersion>0,j=E.iridescence>0,J=E.sheen>0,Lt=E.transmission>0,_t=y&&!!E.anisotropyMap,wt=z&&!!E.clearcoatMap,Jt=z&&!!E.clearcoatNormalMap,rt=z&&!!E.clearcoatRoughnessMap,Rt=j&&!!E.iridescenceMap,Bt=j&&!!E.iridescenceThicknessMap,zt=J&&!!E.sheenColorMap,Ct=J&&!!E.sheenRoughnessMap,Kt=!!E.specularMap,qt=!!E.specularColorMap,fe=!!E.specularIntensityMap,U=Lt&&!!E.transmissionMap,vt=Lt&&!!E.thicknessMap,q=!!E.gradientMap,K=!!E.alphaMap,Et=E.alphaTest>0,Mt=!!E.alphaHash,Vt=!!E.extensions;let ve=Xn;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Pe={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:Y,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:Pt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:nt,batchingColor:nt&&F._colorsTexture!==null,instancing:pt,instancingColor:pt&&F.instanceColor!==null,instancingMorph:pt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Qi,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:H,envMap:$,envMapMode:$&&tt.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:bt,bumpMap:et,normalMap:yt,displacementMap:f&&ht,emissiveMap:Nt,normalMapObjectSpace:yt&&E.normalMapType===sh,normalMapTangentSpace:yt&&E.normalMapType===Sl,metalnessMap:Tt,roughnessMap:w,anisotropy:y,anisotropyMap:_t,clearcoat:z,clearcoatMap:wt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:rt,dispersion:Z,iridescence:j,iridescenceMap:Rt,iridescenceThicknessMap:Bt,sheen:J,sheenColorMap:zt,sheenRoughnessMap:Ct,specularMap:Kt,specularColorMap:qt,specularIntensityMap:fe,transmission:Lt,transmissionMap:U,thicknessMap:vt,gradientMap:q,opaque:E.transparent===!1&&E.blending===ki&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:Et,alphaHash:Mt,combine:E.combine,mapUv:ut&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:bt&&_(E.lightMap.channel),bumpMapUv:et&&_(E.bumpMap.channel),normalMapUv:yt&&_(E.normalMap.channel),displacementMapUv:ht&&_(E.displacementMap.channel),emissiveMapUv:Nt&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:_t&&_(E.anisotropyMap.channel),clearcoatMapUv:wt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(E.sheenRoughnessMap.channel),specularMapUv:Kt&&_(E.specularMap.channel),specularColorMapUv:qt&&_(E.specularColorMap.channel),specularIntensityMapUv:fe&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:vt&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(yt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ut||K),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Q,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===le,decodeVideoTextureEmissive:Nt&&E.emissiveMap.isVideoTexture===!0&&te.getTransfer(E.emissiveMap.colorSpace)===le,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ve,flipSided:E.side===We,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&E.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)M.push(A),M.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(S(M,E),x(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=g[E.type];let A;if(M){const O=pn[M];A=Ih.clone(O.uniforms)}else A=E.uniforms;return A}function P(E,M){let A;for(let O=0,F=u.length;O<F;O++){const B=u[O];if(B.cacheKey===M){A=B,++A.usedTimes;break}}return A===void 0&&(A=new $m(i,M,E,s),u.push(A)),A}function T(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function R(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:L}}function Qm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function t0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||t0),n.length>1&&n.sort(f||Vc),r.length>1&&r.sort(f||Vc)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function e0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Wc,i.set(n,[o])):r>=s.length?(o=new Wc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function n0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new jt};break;case"SpotLight":e={position:new D,direction:new D,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function i0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let r0=0;function s0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o0(i){const t=new n0,e=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new ge,o=new ge;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,P=0,T=0,R=0;l.sort(s0);for(let E=0,M=l.length;E<M;E++){const A=l[E],O=A.color,F=A.intensity,B=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=O.r*F,h+=O.g*F,f+=O.b*F;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],F);R++}else if(A.isDirectionalLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const tt=A.shadow,W=e.get(A);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=A.shadow.matrix,S++}n.directional[d]=k,d++}else if(A.isSpotLight){const k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(O).multiplyScalar(F),k.distance=B,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[_]=k;const tt=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,tt.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=X,v++}_++}else if(A.isRectAreaLight){const k=t.get(A);k.color.copy(O).multiplyScalar(F),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=k,m++}else if(A.isPointLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const tt=A.shadow,W=e.get(A);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=k,g++}else if(A.isHemisphereLight){const k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(F),k.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=R,n.version=r0++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Xc(i){const t=new o0(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function a0(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Xc(i),t.set(r,[a])):s>=o.length?(a=new Xc(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class c0 extends br{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l0 extends br{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const u0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`;function f0(i,t,e){let n=new Sa;const r=new ot,s=new ot,o=new xe,a=new c0({depthPacking:rh}),c=new l0,l={},u=e.maxTextureSize,h={[$n]:We,[We]:$n,[Ve]:Ve},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:u0,fragmentShader:h0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let p=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==Tn&&this.type===Tn,B=p===Tn&&this.type!==Tn;for(let X=0,k=T.length;X<k;X++){const tt=T[X],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ft=W.getFrameExtents();if(r.multiply(ft),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ft.x),r.x=s.x*ft.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ft.y),r.y=s.y*ft.y,W.mapSize.y=s.y)),W.map===null||F===!0||B===!0){const At=this.type!==Tn?{minFilter:Re,magFilter:Re}:{};W.map!==null&&W.map.dispose(),W.map=new Ln(r.x,r.y,At),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const xt=W.getViewportCount();for(let At=0;At<xt;At++){const kt=W.getViewport(At);o.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),O.viewport(o),W.updateMatrices(tt,At),n=W.getFrustum(),v(R,L,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Tn&&S(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,A)};function S(T,R){const L=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ln(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,d,_,null)}function x(T,R,L,E){let M=null;const A=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,F=R.uuid;let B=l[O];B===void 0&&(B={},l[O]=B);let X=B[F];X===void 0&&(X=M.clone(),B[F]=X,R.addEventListener("dispose",P)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Tn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=L}return M}function v(T,R,L,E,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Tn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const F=t.update(T),B=T.material;if(Array.isArray(B)){const X=F.groups;for(let k=0,tt=X.length;k<tt;k++){const W=X[k],ft=B[W.materialIndex];if(ft&&ft.visible){const xt=x(T,ft,E,M);T.onBeforeShadow(i,T,R,L,F,xt,W),i.renderBufferDirect(L,null,F,xt,T,W),T.onAfterShadow(i,T,R,L,F,xt,W)}}}else if(B.visible){const X=x(T,B,E,M);T.onBeforeShadow(i,T,R,L,F,X,null),i.renderBufferDirect(L,null,F,X,T,null),T.onAfterShadow(i,T,R,L,F,X,null)}}const O=T.children;for(let F=0,B=O.length;F<B;F++)v(O[F],R,L,E,M)}function P(T){T.target.removeEventListener("dispose",P);for(const L in l){const E=l[L],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const d0={[vo]:xo,[Mo]:Eo,[So]:bo,[Vi]:yo,[xo]:vo,[Eo]:Mo,[bo]:So,[yo]:Vi};function p0(i,t){function e(){let U=!1;const vt=new xe;let q=null;const K=new xe(0,0,0,0);return{setMask:function(Et){q!==Et&&!U&&(i.colorMask(Et,Et,Et,Et),q=Et)},setLocked:function(Et){U=Et},setClear:function(Et,Mt,Vt,ve,Pe){Pe===!0&&(Et*=ve,Mt*=ve,Vt*=ve),vt.set(Et,Mt,Vt,ve),K.equals(vt)===!1&&(i.clearColor(Et,Mt,Vt,ve),K.copy(vt))},reset:function(){U=!1,q=null,K.set(-1,0,0,0)}}}function n(){let U=!1,vt=!1,q=null,K=null,Et=null;return{setReversed:function(Mt){if(vt!==Mt){const Vt=t.get("EXT_clip_control");vt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const ve=Et;Et=null,this.setClear(ve)}vt=Mt},getReversed:function(){return vt},setTest:function(Mt){Mt?lt(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(Mt){q!==Mt&&!U&&(i.depthMask(Mt),q=Mt)},setFunc:function(Mt){if(vt&&(Mt=d0[Mt]),K!==Mt){switch(Mt){case vo:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){Et!==Mt&&(vt&&(Mt=1-Mt),i.clearDepth(Mt),Et=Mt)},reset:function(){U=!1,q=null,K=null,Et=null,vt=!1}}}function r(){let U=!1,vt=null,q=null,K=null,Et=null,Mt=null,Vt=null,ve=null,Pe=null;return{setTest:function(ce){U||(ce?lt(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ce){vt!==ce&&!U&&(i.stencilMask(ce),vt=ce)},setFunc:function(ce,en,vn){(q!==ce||K!==en||Et!==vn)&&(i.stencilFunc(ce,en,vn),q=ce,K=en,Et=vn)},setOp:function(ce,en,vn){(Mt!==ce||Vt!==en||ve!==vn)&&(i.stencilOp(ce,en,vn),Mt=ce,Vt=en,ve=vn)},setLocked:function(ce){U=ce},setClear:function(ce){Pe!==ce&&(i.clearStencil(ce),Pe=ce)},reset:function(){U=!1,vt=null,q=null,K=null,Et=null,Mt=null,Vt=null,ve=null,Pe=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,P=null,T=null,R=new jt(0,0,0),L=0,E=!1,M=null,A=null,O=null,F=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,tt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=tt>=2);let ft=null,xt={};const At=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),ne=new xe().fromArray(At),Y=new xe().fromArray(kt);function st(U,vt,q,K){const Et=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(U,Mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<q;Vt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Mt}const Pt={};Pt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Vi),et(!1),yt(Ja),lt(i.CULL_FACE),C(Wn);function lt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Q(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function pt(U,vt){return h[U]!==vt?(i.bindFramebuffer(U,vt),h[U]=vt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function nt(U,vt){let q=d,K=!1;if(U){q=f.get(vt),q===void 0&&(q=[],f.set(vt,q));const Et=U.textures;if(q.length!==Et.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Vt=Et.length;Mt<Vt;Mt++)q[Mt]=i.COLOR_ATTACHMENT0+Mt;q.length=Et.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function ut(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const H={[ci]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};H[Du]=i.MIN,H[Uu]=i.MAX;const $={[Iu]:i.ZERO,[Nu]:i.ONE,[Fu]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[zu]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Vu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,vt,q,K,Et,Mt,Vt,ve,Pe,ce){if(U===Wn){_===!0&&(Q(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),U!==Cu){if(U!==m||ce!==E){if((p!==ci||v!==ci)&&(i.blendEquation(i.FUNC_ADD),p=ci,v=ci),ce)switch(U){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,x=null,P=null,T=null,R.set(0,0,0),L=0,m=U,E=ce}return}Et=Et||vt,Mt=Mt||q,Vt=Vt||K,(vt!==p||Et!==v)&&(i.blendEquationSeparate(H[vt],H[Et]),p=vt,v=Et),(q!==S||K!==x||Mt!==P||Vt!==T)&&(i.blendFuncSeparate($[q],$[K],$[Mt],$[Vt]),S=q,x=K,P=Mt,T=Vt),(ve.equals(R)===!1||Pe!==L)&&(i.blendColor(ve.r,ve.g,ve.b,Pe),R.copy(ve),L=Pe),m=U,E=!1}function bt(U,vt){U.side===Ve?Q(i.CULL_FACE):lt(i.CULL_FACE);let q=U.side===We;vt&&(q=!q),et(q),U.blending===ki&&U.transparent===!1?C(Wn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function yt(U){U!==wu?(lt(i.CULL_FACE),U!==A&&(U===Ja?i.cullFace(i.BACK):U===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),A=U}function ht(U){U!==O&&(k&&i.lineWidth(U),O=U)}function Nt(U,vt,q){U?(lt(i.POLYGON_OFFSET_FILL),(F!==vt||B!==q)&&(i.polygonOffset(vt,q),F=vt,B=q)):Q(i.POLYGON_OFFSET_FILL)}function Tt(U){U?lt(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function w(U){U===void 0&&(U=i.TEXTURE0+X-1),ft!==U&&(i.activeTexture(U),ft=U)}function y(U,vt,q){q===void 0&&(ft===null?q=i.TEXTURE0+X-1:q=ft);let K=xt[q];K===void 0&&(K={type:void 0,texture:void 0},xt[q]=K),(K.type!==U||K.texture!==vt)&&(ft!==q&&(i.activeTexture(q),ft=q),i.bindTexture(U,vt||Pt[U]),K.type=U,K.texture=vt)}function z(){const U=xt[ft];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(U){ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function Ct(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Kt(U,vt){let q=l.get(vt);q===void 0&&(q=new WeakMap,l.set(vt,q));let K=q.get(U);K===void 0&&(K=i.getUniformBlockIndex(vt,U.name),q.set(U,K))}function qt(U,vt){const K=l.get(vt).get(U);c.get(vt)!==K&&(i.uniformBlockBinding(vt,K,U.__bindingPointIndex),c.set(vt,K))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ft=null,xt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,P=null,T=null,R=new jt(0,0,0),L=0,E=!1,M=null,A=null,O=null,F=null,B=null,ne.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:lt,disable:Q,bindFramebuffer:pt,drawBuffers:nt,useProgram:ut,setBlending:C,setMaterial:bt,setFlipSided:et,setCullFace:yt,setLineWidth:ht,setPolygonOffset:Nt,setScissorTest:Tt,activeTexture:w,bindTexture:y,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:Rt,texImage3D:Bt,updateUBOMapping:Kt,uniformBlockBinding:qt,texStorage2D:Jt,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:wt,scissor:zt,viewport:Ct,reset:fe}}function qc(i,t,e,n){const r=m0(n);switch(e){case ml:return i*t;case _l:return i*t;case vl:return i*t*2;case xs:return i*t/r.components*r.byteLength;case ga:return i*t/r.components*r.byteLength;case xl:return i*t*2/r.components*r.byteLength;case _a:return i*t*2/r.components*r.byteLength;case gl:return i*t*3/r.components*r.byteLength;case ln:return i*t*4/r.components*r.byteLength;case va:return i*t*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Lo:return Math.max(i,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(i,8)*Math.max(t,8)/2;case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case os:case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ml:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m0(i){switch(i){case Pn:case fl:return{byteLength:1,components:1};case vr:case dl:case gi:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case mi:case da:case wn:return{byteLength:4,components:1};case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function g0(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return d?new OffscreenCanvas(w,y):hs("canvas")}function _(w,y,z){let Z=1;const j=Tt(w);if((j.width>z||j.height>z)&&(Z=z/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(Z*j.width),Lt=Math.floor(Z*j.height);h===void 0&&(h=g(J,Lt));const _t=y?g(J,Lt):h;return _t.width=J,_t.height=Lt,_t.getContext("2d").drawImage(w,0,0,J,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+Lt+")."),_t}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,y,z,Z,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=y;if(y===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),y===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){const Lt=j?Ms:te.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Lt===le?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(w,y){let z;return w?y===null||y===mi||y===qi?z=i.DEPTH24_STENCIL8:y===wn?z=i.DEPTH32F_STENCIL8:y===vr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===qi?z=i.DEPTH_COMPONENT24:y===wn?z=i.DEPTH_COMPONENT32F:y===vr&&(z=i.DEPTH_COMPONENT16),z}function P(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Re&&w.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),L(y),y.isVideoTexture&&u.delete(y)}function R(w){const y=w.target;y.removeEventListener("dispose",R),M(y)}function L(w){const y=n.get(w);if(y.__webglInit===void 0)return;const z=w.source,Z=f.get(z);if(Z){const j=Z[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(w),Object.keys(Z).length===0&&f.delete(z)}n.remove(w)}function E(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const z=w.source,Z=f.get(z);delete Z[y.__cacheKey],o.memory.textures--}function M(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let j=0;j<y.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=w.textures;for(let Z=0,j=z.length;Z<j;Z++){const J=n.get(z[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(w)}let A=0;function O(){A=0}function F(){const w=A;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),A+=1,w}function B(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function X(w,y){const z=n.get(w);if(w.isVideoTexture&&ht(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,w,y);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function k(w,y){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Y(z,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function tt(w,y){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Y(z,w,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function W(w,y){const z=n.get(w);if(w.version>0&&z.__version!==w.version){st(z,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const ft={[ls]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},xt={[Re]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ps]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},At={[oh]:i.NEVER,[fh]:i.ALWAYS,[ah]:i.LESS,[yl]:i.LEQUAL,[ch]:i.EQUAL,[hh]:i.GEQUAL,[lh]:i.GREATER,[uh]:i.NOTEQUAL};function kt(w,y){if(y.type===wn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===Ps||y.magFilter===Dr||y.magFilter===hi||y.minFilter===mn||y.minFilter===Ps||y.minFilter===Dr||y.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ft[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ft[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ft[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xt[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,At[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Re||y.minFilter!==Dr&&y.minFilter!==hi||y.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ne(w,y){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const Z=y.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const J=B(y);if(J!==w.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[J].usedTimes++;const Lt=j[w.__cacheKey];Lt!==void 0&&(j[w.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(y)),w.__cacheKey=J,w.__webglTexture=j[J].texture}return z}function Y(w,y,z){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const j=ne(w,y),J=y.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+z);const Lt=n.get(J);if(J.version!==Lt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const _t=te.getPrimaries(te.workingColorSpace),wt=y.colorSpace===Vn?null:te.getPrimaries(y.colorSpace),Jt=y.colorSpace===Vn||_t===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let rt=_(y.image,!1,r.maxTextureSize);rt=Nt(y,rt);const Rt=s.convert(y.format,y.colorSpace),Bt=s.convert(y.type);let zt=x(y.internalFormat,Rt,Bt,y.colorSpace,y.isVideoTexture);kt(Z,y);let Ct;const Kt=y.mipmaps,qt=y.isVideoTexture!==!0,fe=Lt.__version===void 0||j===!0,U=J.dataReady,vt=P(y,rt);if(y.isDepthTexture)zt=v(y.format===Yi,y.type),fe&&(qt?e.texStorage2D(i.TEXTURE_2D,1,zt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,zt,rt.width,rt.height,0,Rt,Bt,null));else if(y.isDataTexture)if(Kt.length>0){qt&&fe&&e.texStorage2D(i.TEXTURE_2D,vt,zt,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)Ct=Kt[q],qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ct.width,Ct.height,Rt,Bt,Ct.data):e.texImage2D(i.TEXTURE_2D,q,zt,Ct.width,Ct.height,0,Rt,Bt,Ct.data);y.generateMipmaps=!1}else qt?(fe&&e.texStorage2D(i.TEXTURE_2D,vt,zt,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Rt,Bt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,zt,rt.width,rt.height,0,Rt,Bt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,zt,Kt[0].width,Kt[0].height,rt.depth);for(let q=0,K=Kt.length;q<K;q++)if(Ct=Kt[q],y.format!==ln)if(Rt!==null)if(qt){if(U)if(y.layerUpdates.size>0){const Et=qc(Ct.width,Ct.height,y.format,y.type);for(const Mt of y.layerUpdates){const Vt=Ct.data.subarray(Mt*Et/Ct.data.BYTES_PER_ELEMENT,(Mt+1)*Et/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Mt,Ct.width,Ct.height,1,Rt,Vt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ct.width,Ct.height,rt.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,zt,Ct.width,Ct.height,rt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ct.width,Ct.height,rt.depth,Rt,Bt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,zt,Ct.width,Ct.height,rt.depth,0,Rt,Bt,Ct.data)}else{qt&&fe&&e.texStorage2D(i.TEXTURE_2D,vt,zt,Kt[0].width,Kt[0].height);for(let q=0,K=Kt.length;q<K;q++)Ct=Kt[q],y.format!==ln?Rt!==null?qt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,q,zt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ct.width,Ct.height,Rt,Bt,Ct.data):e.texImage2D(i.TEXTURE_2D,q,zt,Ct.width,Ct.height,0,Rt,Bt,Ct.data)}else if(y.isDataArrayTexture)if(qt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,zt,rt.width,rt.height,rt.depth),U)if(y.layerUpdates.size>0){const q=qc(rt.width,rt.height,y.format,y.type);for(const K of y.layerUpdates){const Et=rt.data.subarray(K*q/rt.data.BYTES_PER_ELEMENT,(K+1)*q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,Rt,Bt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Rt,Bt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,rt.width,rt.height,rt.depth,0,Rt,Bt,rt.data);else if(y.isData3DTexture)qt?(fe&&e.texStorage3D(i.TEXTURE_3D,vt,zt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Rt,Bt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,zt,rt.width,rt.height,rt.depth,0,Rt,Bt,rt.data);else if(y.isFramebufferTexture){if(fe)if(qt)e.texStorage2D(i.TEXTURE_2D,vt,zt,rt.width,rt.height);else{let q=rt.width,K=rt.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,zt,q,K,0,Rt,Bt,null),q>>=1,K>>=1}}else if(Kt.length>0){if(qt&&fe){const q=Tt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,vt,zt,q.width,q.height)}for(let q=0,K=Kt.length;q<K;q++)Ct=Kt[q],qt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Rt,Bt,Ct):e.texImage2D(i.TEXTURE_2D,q,zt,Rt,Bt,Ct);y.generateMipmaps=!1}else if(qt){if(fe){const q=Tt(rt);e.texStorage2D(i.TEXTURE_2D,vt,zt,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Bt,rt)}else e.texImage2D(i.TEXTURE_2D,0,zt,Rt,Bt,rt);m(y)&&p(Z),Lt.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function st(w,y,z){if(y.image.length!==6)return;const Z=ne(w,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const J=n.get(j);if(j.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const Lt=te.getPrimaries(te.workingColorSpace),_t=y.colorSpace===Vn?null:te.getPrimaries(y.colorSpace),wt=y.colorSpace===Vn||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Jt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,Rt=[];for(let K=0;K<6;K++)!Jt&&!rt?Rt[K]=_(y.image[K],!0,r.maxCubemapSize):Rt[K]=rt?y.image[K].image:y.image[K],Rt[K]=Nt(y,Rt[K]);const Bt=Rt[0],zt=s.convert(y.format,y.colorSpace),Ct=s.convert(y.type),Kt=x(y.internalFormat,zt,Ct,y.colorSpace),qt=y.isVideoTexture!==!0,fe=J.__version===void 0||Z===!0,U=j.dataReady;let vt=P(y,Bt);kt(i.TEXTURE_CUBE_MAP,y);let q;if(Jt){qt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,Bt.width,Bt.height);for(let K=0;K<6;K++){q=Rt[K].mipmaps;for(let Et=0;Et<q.length;Et++){const Mt=q[Et];y.format!==ln?zt!==null?qt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,Mt.width,Mt.height,zt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,Kt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,0,0,Mt.width,Mt.height,zt,Ct,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et,Kt,Mt.width,Mt.height,0,zt,Ct,Mt.data)}}}else{if(q=y.mipmaps,qt&&fe){q.length>0&&vt++;const K=Tt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,K.width,K.height)}for(let K=0;K<6;K++)if(rt){qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt[K].width,Rt[K].height,zt,Ct,Rt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Rt[K].width,Rt[K].height,0,zt,Ct,Rt[K].data);for(let Et=0;Et<q.length;Et++){const Vt=q[Et].image[K].image;qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,Vt.width,Vt.height,zt,Ct,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,Kt,Vt.width,Vt.height,0,zt,Ct,Vt.data)}}else{qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,zt,Ct,Rt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,zt,Ct,Rt[K]);for(let Et=0;Et<q.length;Et++){const Mt=q[Et];qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,0,0,zt,Ct,Mt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Et+1,Kt,zt,Ct,Mt.image[K])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),J.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Pt(w,y,z,Z,j,J){const Lt=s.convert(z.format,z.colorSpace),_t=s.convert(z.type),wt=x(z.internalFormat,Lt,_t,z.colorSpace),Jt=n.get(y),rt=n.get(z);if(rt.__renderTarget=y,!Jt.__hasExternalTextures){const Rt=Math.max(1,y.width>>J),Bt=Math.max(1,y.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,J,wt,Rt,Bt,y.depth,0,Lt,_t,null):e.texImage2D(j,J,wt,Rt,Bt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),yt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,rt.__webglTexture,0,et(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,rt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(w,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const Z=y.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,J=v(y.stencilBuffer,j),Lt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=et(y);yt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,J,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,w)}else{const Z=y.textures;for(let j=0;j<Z.length;j++){const J=Z[j],Lt=s.convert(J.format,J.colorSpace),_t=s.convert(J.type),wt=x(J.internalFormat,Lt,_t,J.colorSpace),Jt=et(y);z&&yt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,wt,y.width,y.height):yt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,wt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,wt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const j=Z.__webglTexture,J=et(y);if(y.depthTexture.format===zi)yt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(y.depthTexture.format===Yi)yt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function pt(w){const y=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Z}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Q(y.__webglFramebuffer,w)}else if(z){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(y.__webglDepthbuffer[Z],w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),lt(y.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,y,z){const Z=n.get(w);y!==void 0&&Pt(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&pt(w)}function ut(w){const y=w.texture,z=n.get(w),Z=n.get(y);w.addEventListener("dispose",R);const j=w.textures,J=w.isWebGLCubeRenderTarget===!0,Lt=j.length>1;if(Lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[_t]=[];for(let wt=0;wt<y.mipmaps.length;wt++)z.__webglFramebuffer[_t][wt]=i.createFramebuffer()}else z.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)z.__webglFramebuffer[_t]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,wt=j.length;_t<wt;_t++){const Jt=n.get(j[_t]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&yt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _t=0;_t<j.length;_t++){const wt=j[_t];z.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[_t]);const Jt=s.convert(wt.format,wt.colorSpace),rt=s.convert(wt.type),Rt=x(wt.internalFormat,Jt,rt,wt.colorSpace,w.isXRRenderTarget===!0),Bt=et(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,z.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),kt(i.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)Pt(z.__webglFramebuffer[_t][wt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt);else Pt(z.__webglFramebuffer[_t],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,wt=j.length;_t<wt;_t++){const Jt=j[_t],rt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),kt(i.TEXTURE_2D,Jt),Pt(z.__webglFramebuffer,w,Jt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_t=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Z.__webglTexture),kt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)Pt(z.__webglFramebuffer[wt],w,y,i.COLOR_ATTACHMENT0,_t,wt);else Pt(z.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,_t,0);m(y)&&p(_t),e.unbindTexture()}w.depthBuffer&&pt(w)}function H(w){const y=w.textures;for(let z=0,Z=y.length;z<Z;z++){const j=y[z];if(m(j)){const J=S(w),Lt=n.get(j).__webglTexture;e.bindTexture(J,Lt),p(J),e.unbindTexture()}}}const $=[],C=[];function bt(w){if(w.samples>0){if(yt(w)===!1){const y=w.textures,z=w.width,Z=w.height;let j=i.COLOR_BUFFER_BIT;const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(w),_t=y.length>1;if(_t)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[wt]);const Jt=n.get(y[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,j,i.NEAREST),c===!0&&($.length=0,C.length=0,$.push(i.COLOR_ATTACHMENT0+wt),w.depthBuffer&&w.resolveDepthBuffer===!1&&($.push(J),C.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[wt]);const Jt=n.get(y[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function et(w){return Math.min(r.maxSamples,w.samples)}function yt(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ht(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Nt(w,y){const z=w.colorSpace,Z=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Qi&&z!==Vn&&(te.getTransfer(z)===le?(Z!==ln||j!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=nt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=yt}function _0(i,t){function e(n,r=Vn){let s;const o=te.getTransfer(r);if(n===Pn)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.BYTE;if(n===dl)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===da)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===gl)return i.RGB;if(n===ln)return i.RGBA;if(n===_l)return i.LUMINANCE;if(n===vl)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===xs)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===xl)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===va)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===Lo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Uo||n===Io)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Do||n===Uo)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Io)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===No||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===No)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===os||n===Zo||n===Jo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===os)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===Ko||n===jo||n===Qo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===os)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class v0 extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Be extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const M0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S0=`
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

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ie,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hn({vertexShader:M0,fragmentShader:S0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E0 extends tr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new y0,m=e.getContextAttributes();let p=null,S=null;const x=[],v=[],P=new ot;let T=null;const R=new an;R.viewport=new xe;const L=new an;L.viewport=new xe;const E=[R,L],M=new v0;let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=x[Y];return st===void 0&&(st=new so,x[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=x[Y];return st===void 0&&(st=new so,x[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=x[Y];return st===void 0&&(st=new so,x[Y]=st),st.getHandSpace()};function F(Y){const st=v.indexOf(Y.inputSource);if(st===-1)return;const Pt=x[st];Pt!==void 0&&(Pt.update(Y.inputSource,Y.frame,l||o),Pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<x.length;Y++){const st=v[Y];st!==null&&(v[Y]=null,x[Y].disconnect(st))}A=null,O=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,r=null,S=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ln(d.framebufferWidth,d.framebufferHeight,{format:ln,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Pt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Yi:zi,Pt=m.stencil?qi:mi);const Q={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Ln(f.textureWidth,f.textureHeight,{format:ln,type:Pn,depthTexture:new Il(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let st=0;st<Y.removed.length;st++){const Pt=Y.removed[st],lt=v.indexOf(Pt);lt>=0&&(v[lt]=null,x[lt].disconnect(Pt))}for(let st=0;st<Y.added.length;st++){const Pt=Y.added[st];let lt=v.indexOf(Pt);if(lt===-1){for(let pt=0;pt<x.length;pt++)if(pt>=v.length){v.push(Pt),lt=pt;break}else if(v[pt]===null){v[pt]=Pt,lt=pt;break}if(lt===-1)break}const Q=x[lt];Q&&Q.connect(Pt)}}const k=new D,tt=new D;function W(Y,st,Pt){k.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(Pt.matrixWorld);const lt=k.distanceTo(tt),Q=st.projectionMatrix.elements,pt=Pt.projectionMatrix.elements,nt=Q[14]/(Q[10]-1),ut=Q[14]/(Q[10]+1),H=(Q[9]+1)/Q[5],$=(Q[9]-1)/Q[5],C=(Q[8]-1)/Q[0],bt=(pt[8]+1)/pt[0],et=nt*C,yt=nt*bt,ht=lt/(-C+bt),Nt=ht*-C;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Q[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Tt=nt+ht,w=ut+ht,y=et-Nt,z=yt+(lt-Nt),Z=H*ut/w*Tt,j=$*ut/w*Tt;Y.projectionMatrix.makePerspective(y,z,Z,j,Tt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ft(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let st=Y.near,Pt=Y.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Pt=_.depthFar)),M.near=L.near=R.near=st,M.far=L.far=R.far=Pt,(A!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,O=M.far),R.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const lt=Y.parent,Q=M.cameras;ft(M,lt);for(let pt=0;pt<Q.length;pt++)ft(Q[pt],lt);Q.length===2?W(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),xt(Y,M,lt)};function xt(Y,st,Pt){Pt===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(Pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ta*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let At=null;function kt(Y,st){if(u=st.getViewerPose(l||o),g=st,u!==null){const Pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let lt=!1;Pt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let pt=0;pt<Pt.length;pt++){const nt=Pt[pt];let ut=null;if(d!==null)ut=d.getViewport(nt);else{const $=h.getViewSubImage(f,nt);ut=$.viewport,pt===0&&(t.setRenderTargetTextures(S,$.colorTexture,f.ignoreDepthValues?void 0:$.depthStencilTexture),t.setRenderTarget(S))}let H=E[pt];H===void 0&&(H=new an,H.layers.enable(pt),H.viewport=new xe,E[pt]=H),H.matrix.fromArray(nt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(nt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(ut.x,ut.y,ut.width,ut.height),pt===0&&(M.matrix.copy(H.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(H)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const pt=h.getDepthInformation(Pt[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,r.renderState)}}for(let Pt=0;Pt<x.length;Pt++){const lt=v[Pt],Q=x[Pt];lt!==null&&Q!==void 0&&Q.update(lt,st,l||o)}At&&At(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const ne=new Ul;ne.setAnimationLoop(kt),this.setAnimationLoop=function(Y){At=Y},this.dispose=function(){}}}const si=new gn,b0=new ge;function T0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,si.copy(v),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(si)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function w0(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function l(S,x){let v=r[S.id];v===void 0&&(g(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(S,P);const T=t.render.frame;s[S.id]!==T&&(f(S),s[S.id]=T)}function u(S){const x=h();S.__bindingPointIndex=x;const v=i.createBuffer(),P=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=r[S.id],v=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=v.length;T<R;T++){const L=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,M=L.length;E<M;E++){const A=L[E];if(d(A,T,E,P)===!0){const O=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let X=0;X<F.length;X++){const k=F[X],tt=_(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+B,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,x,v,P){const T=S.value,R=x+"_"+v;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{const L=P[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return P[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(S){const x=S.uniforms;let v=0;const P=16;for(let R=0,L=x.length;R<L;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,A=E.length;M<A;M++){const O=E[M],F=Array.isArray(O.value)?O.value:[O.value];for(let B=0,X=F.length;B<X;B++){const k=F[B],tt=_(k),W=v%P,ft=W%tt.boundary,xt=W+ft;v+=ft,xt!==0&&P-xt<tt.storage&&(v+=P-xt),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=tt.storage}}}const T=v%P;return T>0&&(v+=P-T),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class A0{constructor(t={}){const{canvas:e=ph(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Xn,this.toneMappingExposure=1;const v=this;let P=!1,T=0,R=0,L=null,E=-1,M=null;const A=new xe,O=new xe;let F=null;const B=new jt(0);let X=0,k=e.width,tt=e.height,W=1,ft=null,xt=null;const At=new xe(0,0,k,tt),kt=new xe(0,0,k,tt);let ne=!1;const Y=new Sa;let st=!1,Pt=!1;const lt=new ge,Q=new ge,pt=new D,nt=new xe,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let H=!1;function $(){return L===null?W:1}let C=n;function bt(b,I){return e.getContext(b,I)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),C===null){const I="webgl2";if(C=bt(I,b),C===null)throw bt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,yt,ht,Nt,Tt,w,y,z,Z,j,J,Lt,_t,wt,Jt,rt,Rt,Bt,zt,Ct,Kt,qt,fe,U;function vt(){et=new Dp(C),et.init(),qt=new _0(C,et),yt=new wp(C,et,t,qt),ht=new p0(C,et),yt.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Nt=new Np(C),Tt=new Qm,w=new g0(C,et,ht,Tt,yt,qt,Nt),y=new Rp(v),z=new Lp(v),Z=new Hh(C),fe=new bp(C,Z),j=new Up(C,Z,Nt,fe),J=new Op(C,j,Z,Nt),zt=new Fp(C,yt,w),rt=new Ap(Tt),Lt=new jm(v,y,z,et,yt,fe,rt),_t=new T0(v,Tt),wt=new e0,Jt=new a0(et),Bt=new Ep(v,y,z,ht,J,d,c),Rt=new f0(v,J,yt),U=new w0(C,Nt,yt,ht),Ct=new Tp(C,et,Nt),Kt=new Ip(C,et,Nt),Nt.programs=Lt.programs,v.capabilities=yt,v.extensions=et,v.properties=Tt,v.renderLists=wt,v.shadowMap=Rt,v.state=ht,v.info=Nt}vt();const q=new E0(v,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(k,tt,!1))},this.getSize=function(b){return b.set(k,tt)},this.setSize=function(b,I,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,tt=I,e.width=Math.floor(b*W),e.height=Math.floor(I*W),G===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(k*W,tt*W).floor()},this.setDrawingBufferSize=function(b,I,G){k=b,tt=I,W=G,e.width=Math.floor(b*G),e.height=Math.floor(I*G),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,I,G,V){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,I,G,V),ht.viewport(A.copy(At).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(kt)},this.setScissor=function(b,I,G,V){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,I,G,V),ht.scissor(O.copy(kt).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){ht.setScissorTest(ne=b)},this.setOpaqueSort=function(b){ft=b},this.setTransparentSort=function(b){xt=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,I=!0,G=!0){let V=0;if(b){let N=!1;if(L!==null){const at=L.texture.format;N=at===va||at===_a||at===ga}if(N){const at=L.texture.type,St=at===Pn||at===mi||at===vr||at===qi||at===pa||at===ma,Dt=Bt.getClearColor(),Ut=Bt.getClearAlpha(),Gt=Dt.r,Wt=Dt.g,It=Dt.b;St?(g[0]=Gt,g[1]=Wt,g[2]=It,g[3]=Ut,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Gt,_[1]=Wt,_[2]=It,_[3]=Ut,C.clearBufferiv(C.COLOR,0,_))}else V|=C.COLOR_BUFFER_BIT}I&&(V|=C.DEPTH_BUFFER_BIT),G&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),wt.dispose(),Jt.dispose(),Tt.dispose(),y.dispose(),z.dispose(),J.dispose(),fe.dispose(),U.dispose(),Lt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ga),q.removeEventListener("sessionend",Va),Qn.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Nt.autoReset,I=Rt.enabled,G=Rt.autoUpdate,V=Rt.needsUpdate,N=Rt.type;vt(),Nt.autoReset=b,Rt.enabled=I,Rt.autoUpdate=G,Rt.needsUpdate=V,Rt.type=N}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vt(b){const I=b.target;I.removeEventListener("dispose",Vt),ve(I)}function ve(b){Pe(b),Tt.remove(b)}function Pe(b){const I=Tt.get(b).programs;I!==void 0&&(I.forEach(function(G){Lt.releaseProgram(G)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,G,V,N,at){I===null&&(I=ut);const St=N.isMesh&&N.matrixWorld.determinant()<0,Dt=Mu(b,I,G,V,N);ht.setMaterial(V,St);let Ut=G.index,Gt=1;if(V.wireframe===!0){if(Ut=j.getWireframeAttribute(G),Ut===void 0)return;Gt=2}const Wt=G.drawRange,It=G.attributes.position;let ie=Wt.start*Gt,de=(Wt.start+Wt.count)*Gt;at!==null&&(ie=Math.max(ie,at.start*Gt),de=Math.min(de,(at.start+at.count)*Gt)),Ut!==null?(ie=Math.max(ie,0),de=Math.min(de,Ut.count)):It!=null&&(ie=Math.max(ie,0),de=Math.min(de,It.count));const pe=de-ie;if(pe<0||pe===1/0)return;fe.setup(N,V,Dt,G,Ut);let ze,oe=Ct;if(Ut!==null&&(ze=Z.get(Ut),oe=Kt,oe.setIndex(ze)),N.isMesh)V.wireframe===!0?(ht.setLineWidth(V.wireframeLinewidth*$()),oe.setMode(C.LINES)):oe.setMode(C.TRIANGLES);else if(N.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),ht.setLineWidth(Ft*$()),N.isLineSegments?oe.setMode(C.LINES):N.isLineLoop?oe.setMode(C.LINE_LOOP):oe.setMode(C.LINE_STRIP)}else N.isPoints?oe.setMode(C.POINTS):N.isSprite&&oe.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)oe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))oe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ft=N._multiDrawStarts,xn=N._multiDrawCounts,ae=N._multiDrawCount,nn=Ut?Z.get(Ut).bytesPerElement:1,Mi=Tt.get(V).currentProgram.getUniforms();for(let qe=0;qe<ae;qe++)Mi.setValue(C,"_gl_DrawID",qe),oe.render(Ft[qe]/nn,xn[qe])}else if(N.isInstancedMesh)oe.renderInstances(ie,pe,N.count);else if(G.isInstancedBufferGeometry){const Ft=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xn=Math.min(G.instanceCount,Ft);oe.renderInstances(ie,pe,xn)}else oe.render(ie,pe)};function ce(b,I,G){b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=We,b.needsUpdate=!0,Lr(b,I,G),b.side=$n,b.needsUpdate=!0,Lr(b,I,G),b.side=Ve):Lr(b,I,G)}this.compile=function(b,I,G=null){G===null&&(G=b),p=Jt.get(G),p.init(I),x.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==G&&b.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const at=N.material;if(at)if(Array.isArray(at))for(let St=0;St<at.length;St++){const Dt=at[St];ce(Dt,G,N),V.add(Dt)}else ce(at,G,N),V.add(at)}),x.pop(),p=null,V},this.compileAsync=function(b,I,G=null){const V=this.compile(b,I,G);return new Promise(N=>{function at(){if(V.forEach(function(St){Tt.get(St).currentProgram.isReady()&&V.delete(St)}),V.size===0){N(b);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let en=null;function vn(b){en&&en(b)}function Ga(){Qn.stop()}function Va(){Qn.start()}const Qn=new Ul;Qn.setAnimationLoop(vn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(b){en=b,q.setAnimationLoop(b),b===null?Qn.stop():Qn.start()},q.addEventListener("sessionstart",Ga),q.addEventListener("sessionend",Va),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(I),I=q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,L),p=Jt.get(b,x.length),p.init(I),x.push(p),Q.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(Q),Pt=this.localClippingEnabled,st=rt.init(this.clippingPlanes,Pt),m=wt.get(b,S.length),m.init(),S.push(m),q.enabled===!0&&q.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&Cs(at,I,-1/0,v.sortObjects)}Cs(b,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ft,xt),H=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,H&&Bt.addToRenderList(m,b),this.info.render.frame++,st===!0&&rt.beginShadows();const G=p.state.shadowsArray;Rt.render(G,b,I),st===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),I.isArrayCamera){const at=I.cameras;if(N.length>0)for(let St=0,Dt=at.length;St<Dt;St++){const Ut=at[St];Xa(V,N,b,Ut)}H&&Bt.render(b);for(let St=0,Dt=at.length;St<Dt;St++){const Ut=at[St];Wa(m,b,Ut,Ut.viewport)}}else N.length>0&&Xa(V,N,b,I),H&&Bt.render(b),Wa(m,b,I);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(v,b,I),fe.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],st===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Cs(b,I,G,V){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){V&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const St=J.update(b),Dt=b.material;Dt.visible&&m.push(b,St,Dt,G,nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const St=J.update(b),Dt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),nt.copy(St.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(Dt)){const Ut=St.groups;for(let Gt=0,Wt=Ut.length;Gt<Wt;Gt++){const It=Ut[Gt],ie=Dt[It.materialIndex];ie&&ie.visible&&m.push(b,St,ie,G,nt.z,It)}}else Dt.visible&&m.push(b,St,Dt,G,nt.z,null)}}const at=b.children;for(let St=0,Dt=at.length;St<Dt;St++)Cs(at[St],I,G,V)}function Wa(b,I,G,V){const N=b.opaque,at=b.transmissive,St=b.transparent;p.setupLightsView(G),st===!0&&rt.setGlobalState(v.clippingPlanes,G),V&&ht.viewport(A.copy(V)),N.length>0&&Pr(N,I,G),at.length>0&&Pr(at,I,G),St.length>0&&Pr(St,I,G),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Xa(b,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ln(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?gi:Pn,minFilter:hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const at=p.state.transmissionRenderTarget[V.id],St=V.viewport||A;at.setSize(St.z,St.w);const Dt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(B),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),H&&Bt.render(G);const Ut=v.toneMapping;v.toneMapping=Xn;const Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),st===!0&&rt.setGlobalState(v.clippingPlanes,V),Pr(b,G,V),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let It=0,ie=I.length;It<ie;It++){const de=I[It],pe=de.object,ze=de.geometry,oe=de.material,Ft=de.group;if(oe.side===Ve&&pe.layers.test(V.layers)){const xn=oe.side;oe.side=We,oe.needsUpdate=!0,qa(pe,G,V,ze,oe,Ft),oe.side=xn,oe.needsUpdate=!0,Wt=!0}}Wt===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}v.setRenderTarget(Dt),v.setClearColor(B,X),Gt!==void 0&&(V.viewport=Gt),v.toneMapping=Ut}function Pr(b,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let N=0,at=b.length;N<at;N++){const St=b[N],Dt=St.object,Ut=St.geometry,Gt=V===null?St.material:V,Wt=St.group;Dt.layers.test(G.layers)&&qa(Dt,I,G,Ut,Gt,Wt)}}function qa(b,I,G,V,N,at){b.onBeforeRender(v,I,G,V,N,at),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,I,G,V,b,at),N.transparent===!0&&N.side===Ve&&N.forceSinglePass===!1?(N.side=We,N.needsUpdate=!0,v.renderBufferDirect(G,I,V,N,b,at),N.side=$n,N.needsUpdate=!0,v.renderBufferDirect(G,I,V,N,b,at),N.side=Ve):v.renderBufferDirect(G,I,V,N,b,at),b.onAfterRender(v,I,G,V,N,at)}function Lr(b,I,G){I.isScene!==!0&&(I=ut);const V=Tt.get(b),N=p.state.lights,at=p.state.shadowsArray,St=N.state.version,Dt=Lt.getParameters(b,N.state,at,I,G),Ut=Lt.getProgramCacheKey(Dt);let Gt=V.programs;V.environment=b.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(b.isMeshStandardMaterial?z:y).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Gt===void 0&&(b.addEventListener("dispose",Vt),Gt=new Map,V.programs=Gt);let Wt=Gt.get(Ut);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===St)return $a(b,Dt),Wt}else Dt.uniforms=Lt.getUniforms(b),b.onBeforeCompile(Dt,v),Wt=Lt.acquireProgram(Dt,Ut),Gt.set(Ut,Wt),V.uniforms=Dt.uniforms;const It=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=rt.uniform),$a(b,Dt),V.needsLights=yu(b),V.lightsStateVersion=St,V.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Wt,V.uniformsList=null,Wt}function Ya(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=as.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function $a(b,I){const G=Tt.get(b);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Mu(b,I,G,V,N){I.isScene!==!0&&(I=ut),w.resetTextureUnits();const at=I.fog,St=V.isMeshStandardMaterial?I.environment:null,Dt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qi,Ut=(V.isMeshStandardMaterial?z:y).get(V.envMap||St),Gt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,de=!!G.morphAttributes.color;let pe=Xn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pe=v.toneMapping);const ze=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=ze!==void 0?ze.length:0,Ft=Tt.get(V),xn=p.state.lights;if(st===!0&&(Pt===!0||b!==M)){const Ke=b===M&&V.id===E;rt.setState(V,b,Ke)}let ae=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==xn.state.version||Ft.outputColorSpace!==Dt||N.isBatchedMesh&&Ft.batching===!1||!N.isBatchedMesh&&Ft.batching===!0||N.isBatchedMesh&&Ft.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ft.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ft.instancing===!1||!N.isInstancedMesh&&Ft.instancing===!0||N.isSkinnedMesh&&Ft.skinning===!1||!N.isSkinnedMesh&&Ft.skinning===!0||N.isInstancedMesh&&Ft.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ft.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ft.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ft.instancingMorph===!1&&N.morphTexture!==null||Ft.envMap!==Ut||V.fog===!0&&Ft.fog!==at||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==rt.numPlanes||Ft.numIntersection!==rt.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==Wt||Ft.morphTargets!==It||Ft.morphNormals!==ie||Ft.morphColors!==de||Ft.toneMapping!==pe||Ft.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ft.__version=V.version);let nn=Ft.currentProgram;ae===!0&&(nn=Lr(V,I,N));let Mi=!1,qe=!1,sr=!1;const me=nn.getUniforms(),fn=Ft.uniforms;if(ht.useProgram(nn.program)&&(Mi=!0,qe=!0,sr=!0),V.id!==E&&(E=V.id,qe=!0),Mi||M!==b){ht.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),gh(lt),_h(lt),me.setValue(C,"projectionMatrix",lt)):me.setValue(C,"projectionMatrix",b.projectionMatrix),me.setValue(C,"viewMatrix",b.matrixWorldInverse);const Un=me.map.cameraPosition;Un!==void 0&&Un.setValue(C,pt.setFromMatrixPosition(b.matrixWorld)),yt.logarithmicDepthBuffer&&me.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&me.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,qe=!0,sr=!0)}if(N.isSkinnedMesh){me.setOptional(C,N,"bindMatrix"),me.setOptional(C,N,"bindMatrixInverse");const Ke=N.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),me.setValue(C,"boneTexture",Ke.boneTexture,w))}N.isBatchedMesh&&(me.setOptional(C,N,"batchingTexture"),me.setValue(C,"batchingTexture",N._matricesTexture,w),me.setOptional(C,N,"batchingIdTexture"),me.setValue(C,"batchingIdTexture",N._indirectTexture,w),me.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(C,"batchingColorTexture",N._colorsTexture,w));const or=G.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&zt.update(N,G,nn),(qe||Ft.receiveShadow!==N.receiveShadow)&&(Ft.receiveShadow=N.receiveShadow,me.setValue(C,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(fn.envMap.value=Ut,fn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(fn.envMapIntensity.value=I.environmentIntensity),qe&&(me.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Su(fn,sr),at&&V.fog===!0&&_t.refreshFogUniforms(fn,at),_t.refreshMaterialUniforms(fn,V,W,tt,p.state.transmissionRenderTarget[b.id]),as.upload(C,Ya(Ft),fn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(as.upload(C,Ya(Ft),fn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&me.setValue(C,"center",N.center),me.setValue(C,"modelViewMatrix",N.modelViewMatrix),me.setValue(C,"normalMatrix",N.normalMatrix),me.setValue(C,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ke=V.uniformsGroups;for(let Un=0,In=Ke.length;Un<In;Un++){const Za=Ke[Un];U.update(Za,nn),U.bind(Za,nn)}}return nn}function Su(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function yu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,I,G){Tt.get(b.texture).__webglTexture=I,Tt.get(b.depthTexture).__webglTexture=G;const V=Tt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const G=Tt.get(b);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,G=0){L=b,T=I,R=G;let V=!0,N=null,at=!1,St=!1;if(b){const Ut=Tt.get(b);if(Ut.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Ut.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Ut.__hasExternalTextures)w.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const It=b.depthTexture;if(Ut.__boundDepthTexture!==It){if(It!==null&&Tt.has(It)&&(b.width!==It.image.width||b.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);const Wt=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[I])?N=Wt[I][G]:N=Wt[I],at=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[G]:N=Wt,A.copy(b.viewport),O.copy(b.scissor),F=b.scissorTest}else A.copy(At).multiplyScalar(W).floor(),O.copy(kt).multiplyScalar(W).floor(),F=ne;if(ht.bindFramebuffer(C.FRAMEBUFFER,N)&&V&&ht.drawBuffers(b,N),ht.viewport(A),ht.scissor(O),ht.setScissorTest(F),at){const Ut=Tt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ut.__webglTexture,G)}else if(St){const Ut=Tt.get(b.texture),Gt=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,G||0,Gt)}E=-1},this.readRenderTargetPixels=function(b,I,G,V,N,at,St){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Dt=Dt[St]),Dt){ht.bindFramebuffer(C.FRAMEBUFFER,Dt);try{const Ut=b.texture,Gt=Ut.format,Wt=Ut.type;if(!yt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-V&&G>=0&&G<=b.height-N&&C.readPixels(I,G,V,N,qt.convert(Gt),qt.convert(Wt),at)}finally{const Ut=L!==null?Tt.get(L).__webglFramebuffer:null;ht.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,I,G,V,N,at,St){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Dt=Dt[St]),Dt){const Ut=b.texture,Gt=Ut.format,Wt=Ut.type;if(!yt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-V&&G>=0&&G<=b.height-N){ht.bindFramebuffer(C.FRAMEBUFFER,Dt);const It=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(I,G,V,N,qt.convert(Gt),qt.convert(Wt),0);const ie=L!==null?Tt.get(L).__webglFramebuffer:null;ht.bindFramebuffer(C.FRAMEBUFFER,ie);const de=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await mh(C,de,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(It),C.deleteSync(de),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,G=0){b.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-G),N=Math.floor(b.image.width*V),at=Math.floor(b.image.height*V),St=I!==null?I.x:0,Dt=I!==null?I.y:0;w.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,St,Dt,N,at),ht.unbindTexture()},this.copyTextureToTexture=function(b,I,G=null,V=null,N=0){b.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],I=arguments[2],N=arguments[3]||0,G=null);let at,St,Dt,Ut,Gt,Wt,It,ie,de;const pe=b.isCompressedTexture?b.mipmaps[N]:b.image;G!==null?(at=G.max.x-G.min.x,St=G.max.y-G.min.y,Dt=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,Gt=G.min.y,Wt=G.isBox3?G.min.z:0):(at=pe.width,St=pe.height,Dt=pe.depth||1,Ut=0,Gt=0,Wt=0),V!==null?(It=V.x,ie=V.y,de=V.z):(It=0,ie=0,de=0);const ze=qt.convert(I.format),oe=qt.convert(I.type);let Ft;I.isData3DTexture?(w.setTexture3D(I,0),Ft=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),Ft=C.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),Ft=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const xn=C.getParameter(C.UNPACK_ROW_LENGTH),ae=C.getParameter(C.UNPACK_IMAGE_HEIGHT),nn=C.getParameter(C.UNPACK_SKIP_PIXELS),Mi=C.getParameter(C.UNPACK_SKIP_ROWS),qe=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt);const sr=b.isDataArrayTexture||b.isData3DTexture,me=I.isDataArrayTexture||I.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const fn=Tt.get(b),or=Tt.get(I),Ke=Tt.get(fn.__renderTarget),Un=Tt.get(or.__renderTarget);ht.bindFramebuffer(C.READ_FRAMEBUFFER,Ke.__webglFramebuffer),ht.bindFramebuffer(C.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let In=0;In<Dt;In++)sr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,N,Wt+In),b.isDepthTexture?(me&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.get(I).__webglTexture,N,de+In),C.blitFramebuffer(Ut,Gt,at,St,It,ie,at,St,C.DEPTH_BUFFER_BIT,C.NEAREST)):me?C.copyTexSubImage3D(Ft,N,It,ie,de+In,Ut,Gt,at,St):C.copyTexSubImage2D(Ft,N,It,ie,de+In,Ut,Gt,at,St);ht.bindFramebuffer(C.READ_FRAMEBUFFER,null),ht.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else me?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ft,N,It,ie,de,at,St,Dt,ze,oe,pe.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Ft,N,It,ie,de,at,St,Dt,ze,pe.data):C.texSubImage3D(Ft,N,It,ie,de,at,St,Dt,ze,oe,pe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,It,ie,at,St,ze,oe,pe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,It,ie,pe.width,pe.height,ze,pe.data):C.texSubImage2D(C.TEXTURE_2D,N,It,ie,at,St,ze,oe,pe);C.pixelStorei(C.UNPACK_ROW_LENGTH,xn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae),C.pixelStorei(C.UNPACK_SKIP_PIXELS,nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Mi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qe),N===0&&I.generateMipmaps&&C.generateMipmap(Ft),ht.unbindTexture()},this.copyTextureToTexture3D=function(b,I,G=null,V=null,N=0){return b.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,b=arguments[2],I=arguments[3],N=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,I,G,V,N)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ht.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,ht.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class kl extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zl extends Ie{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Re,u=Re,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class R0 extends Ie{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new ot:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],o=[],a=new D,c=new ge;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Ae(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends _n{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class C0 extends Ea{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Qr=new D,oo=new ba,ao=new ba,co=new ba;class Hl extends _n{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Qr.subVectors(r[0],r[1]).add(r[0]),l=Qr);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Qr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),oo.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),ao.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),co.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),ao.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),co.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(oo.calc(c),ao.calc(c),co.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yc(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function P0(i,t){const e=1-i;return e*e*t}function L0(i,t){return 2*(1-i)*i*t}function D0(i,t){return i*i*t}function mr(i,t,e,n){return P0(i,t)+L0(i,e)+D0(i,n)}function U0(i,t){const e=1-i;return e*e*e*t}function I0(i,t){const e=1-i;return 3*e*e*i*t}function N0(i,t){return 3*(1-i)*i*i*t}function F0(i,t){return i*i*i*t}function gr(i,t,e,n,r){return U0(i,t)+I0(i,e)+N0(i,n)+F0(i,r)}class Gl extends _n{constructor(t=new ot,e=new ot,n=new ot,r=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ot){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,r.x,s.x,o.x,a.x),gr(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O0 extends _n{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,r.x,s.x,o.x,a.x),gr(t,r.y,s.y,o.y,a.y),gr(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vl extends _n{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B0 extends _n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wl extends _n{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(mr(t,r.x,s.x,o.x),mr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xl extends _n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(mr(t,r.x,s.x,o.x),mr(t,r.y,s.y,o.y),mr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ql extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Yc(a,c.x,l.x,u.x,h.x),Yc(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ot().fromArray(r))}return this}}var fs=Object.freeze({__proto__:null,ArcCurve:C0,CatmullRomCurve3:Hl,CubicBezierCurve:Gl,CubicBezierCurve3:O0,EllipseCurve:Ea,LineCurve:Vl,LineCurve3:B0,QuadraticBezierCurve:Wl,QuadraticBezierCurve3:Xl,SplineCurve:ql});class k0 extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new fs[r.type]().fromJSON(r))}return this}}class $c extends k0{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vl(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Wl(this.currentPoint.clone(),new ot(t,e),new ot(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Gl(this.currentPoint.clone(),new ot(t,e),new ot(n,r),new ot(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ql(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new Ea(t,e,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ta extends Ne{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Ae(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/e,h=new D,f=new ot,d=new D,g=new D,_=new D;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){const x=n+S*u*r,v=Math.sin(x),P=Math.cos(x);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*v,h.y=t[T].y,h.z=t[T].x*P,o.push(h.x,h.y,h.z),f.x=S/e,f.y=T/(t.length-1),a.push(f.x,f.y);const R=c[3*T+0]*v,L=c[3*T+1],E=c[3*T+0]*P;l.push(R,L,E)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const v=x+S*t.length,P=v,T=v+t.length,R=v+t.length+1,L=v+1;s.push(P,T,L),s.push(R,L,T)}this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.points,t.segments,t.phiStart,t.phiLength)}}class Tr extends Ne{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new D,u=new ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*r;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dn extends Ne{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function S(){const v=new D,P=new D;let T=0;const R=(e-t)/n;for(let L=0;L<=s;L++){const E=[],M=L/s,A=M*(e-t)+t;for(let O=0;O<=r;O++){const F=O/r,B=F*c+a,X=Math.sin(B),k=Math.cos(B);P.x=A*X,P.y=-M*n+m,P.z=A*k,h.push(P.x,P.y,P.z),v.set(X,R,k).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-M),E.push(g++)}_.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const M=_[E][L],A=_[E+1][L],O=_[E+1][L+1],F=_[E][L+1];(t>0||E!==0)&&(u.push(M,A,F),T+=3),(e>0||E!==s-1)&&(u.push(A,O,F),T+=3)}l.addGroup(p,T,0),p+=T}function x(v){const P=g,T=new ot,R=new D;let L=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const A=g;for(let O=0;O<=r;O++){const B=O/r*c+a,X=Math.cos(B),k=Math.sin(B);R.x=E*k,R.y=m*M,R.z=E*X,h.push(R.x,R.y,R.z),f.push(0,M,0),T.x=X*.5+.5,T.y=k*.5*M+.5,d.push(T.x,T.y),g++}for(let O=0;O<r;O++){const F=P+O,B=A+O;v===!0?u.push(B,B+1,F):u.push(B+1,B,F),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wr extends Dn{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new wr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends Ne{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new D,v=new D,P=new D;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],v),d(e[T+2],P),c(x,v,P,S)}function c(S,x,v,P){const T=P+1,R=[];for(let L=0;L<=T;L++){R[L]=[];const E=S.clone().lerp(v,L/T),M=x.clone().lerp(v,L/T),A=T-L;for(let O=0;O<=A;O++)O===0&&L===T?R[L][O]=E:R[L][O]=E.clone().lerp(M,O/A)}for(let L=0;L<T;L++)for(let E=0;E<2*(T-L)-1;E++){const M=Math.floor(E/2);E%2===0?(f(R[L][M+1]),f(R[L+1][M]),f(R[L][M])):(f(R[L][M+1]),f(R[L+1][M+1]),f(R[L+1][M]))}}function l(S){const x=new D;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(S),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function u(){const S=new D;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const v=m(S)/2/Math.PI+.5,P=p(S)/Math.PI+.5;o.push(v,1-P)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const x=o[S+0],v=o[S+2],P=o[S+4],T=Math.max(x,v,P),R=Math.min(x,v,P);T>.9&&R<.1&&(x<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const S=new D,x=new D,v=new D,P=new D,T=new ot,R=new ot,L=new ot;for(let E=0,M=0;E<s.length;E+=9,M+=6){S.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),P.copy(S).add(x).add(v).divideScalar(3);const A=m(P);_(T,M+0,S,A),_(R,M+2,x,A),_(L,M+4,v,A)}}function _(S,x,v,P){P<0&&S.x===1&&(o[x]=S.x-1),v.x===0&&v.z===0&&(o[x]=P/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.vertices,t.indices,t.radius,t.details)}}class Yl extends $c{constructor(t){super(t),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new $c().fromJSON(r))}return this}}const z0={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=$l(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(n&&(s=X0(i,t,s,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<r;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return xr(s,o,e,a,c,d,0),o}};function $l(i,t,e,n,r){let s,o;if(r===ng(i,t,e,n)>0)for(s=t;s<e;s+=n)o=Zc(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=Zc(s,i[s],i[s+1],o);return o&&bs(o,o.next)&&(Sr(o),o=o.next),o}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||_e(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,r,s,o){if(!i)return;!o&&s&&J0(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?G0(i,n,r,s):H0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Sr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=V0(_i(i),t,e),xr(i,t,e,n,r,s,2)):o===2&&W0(i,t,e,n,r,s):xr(_i(i),t,e,n,r,s,1);break}}}function H0(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Oi(r,a,s,c,o,l,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G0(i,t,e,n){const r=i.prev,s=i,o=i.next;if(_e(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=na(d,g,t,e,n),S=na(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Oi(a,u,c,h,l,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Oi(a,u,c,h,l,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Oi(a,u,c,h,l,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Oi(a,u,c,h,l,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function V0(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!bs(r,s)&&Zl(r,n,n.next,s)&&Mr(r,s)&&Mr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Sr(n),Sr(n.next),n=i=s),n=n.next}while(n!==i);return _i(n)}function W0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q0(o,a)){let c=Jl(o,a);o=_i(o,o.next),c=_i(c,c.next),xr(o,t,e,n,r,s,0),xr(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function X0(i,t,e,n){const r=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=$l(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(j0(l));for(r.sort(q0),s=0;s<r.length;s++)e=Y0(r[s],e);return e}function q0(i,t){return i.x-t.x}function Y0(i,t){const e=$0(i,t);if(!e)return t;const n=Jl(e,i);return _i(n,n.next),_i(e,e.next)}function $0(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Oi(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Mr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&Z0(r,e)))&&(r=e,u=h)),e=e.next;while(e!==a);return r}function Z0(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function J0(i,t,e,n){let r=i;do r.z===0&&(r.z=na(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,K0(r)}function K0(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function na(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function j0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Oi(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Q0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tg(i,t)&&(Mr(i,t)&&Mr(t,i)&&eg(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||bs(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bs(i,t){return i.x===t.x&&i.y===t.y}function Zl(i,t,e,n){const r=es(_e(i,t,e)),s=es(_e(i,t,n)),o=es(_e(e,n,i)),a=es(_e(e,n,t));return!!(r!==s&&o!==a||r===0&&ts(i,e,t)||s===0&&ts(i,n,t)||o===0&&ts(e,i,n)||a===0&&ts(e,t,n))}function ts(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function es(i){return i>0?1:i<0?-1:0}function tg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function eg(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jl(i,t){const e=new ia(i.i,i.x,i.y),n=new ia(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Zc(i,t,e,n){const r=new ia(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ia(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ng(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class _r{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return _r.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Jc(t),Kc(n,t);let o=t.length;e.forEach(Jc);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Kc(n,e[c]);const a=z0.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Jc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class wa extends Ne{constructor(t=new Yl([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:ig;let x,v=!1,P,T,R,L;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,P=p.computeFrenetFrames(u,!1),T=new D,R=new D,L=new D),f||(m=0,d=0,g=0,_=0);const E=a.extractPoints(l);let M=E.shape;const A=E.holes;if(!_r.isClockWise(M)){M=M.reverse();for(let H=0,$=A.length;H<$;H++){const C=A[H];_r.isClockWise(C)&&(A[H]=C.reverse())}}const F=_r.triangulateShape(M,A),B=M;for(let H=0,$=A.length;H<$;H++){const C=A[H];M=M.concat(C)}function X(H,$,C){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector($,C)}const k=M.length,tt=F.length;function W(H,$,C){let bt,et,yt;const ht=H.x-$.x,Nt=H.y-$.y,Tt=C.x-H.x,w=C.y-H.y,y=ht*ht+Nt*Nt,z=ht*w-Nt*Tt;if(Math.abs(z)>Number.EPSILON){const Z=Math.sqrt(y),j=Math.sqrt(Tt*Tt+w*w),J=$.x-Nt/Z,Lt=$.y+ht/Z,_t=C.x-w/j,wt=C.y+Tt/j,Jt=((_t-J)*w-(wt-Lt)*Tt)/(ht*w-Nt*Tt);bt=J+ht*Jt-H.x,et=Lt+Nt*Jt-H.y;const rt=bt*bt+et*et;if(rt<=2)return new ot(bt,et);yt=Math.sqrt(rt/2)}else{let Z=!1;ht>Number.EPSILON?Tt>Number.EPSILON&&(Z=!0):ht<-Number.EPSILON?Tt<-Number.EPSILON&&(Z=!0):Math.sign(Nt)===Math.sign(w)&&(Z=!0),Z?(bt=-Nt,et=ht,yt=Math.sqrt(y)):(bt=ht,et=Nt,yt=Math.sqrt(y/2))}return new ot(bt/yt,et/yt)}const ft=[];for(let H=0,$=B.length,C=$-1,bt=H+1;H<$;H++,C++,bt++)C===$&&(C=0),bt===$&&(bt=0),ft[H]=W(B[H],B[C],B[bt]);const xt=[];let At,kt=ft.concat();for(let H=0,$=A.length;H<$;H++){const C=A[H];At=[];for(let bt=0,et=C.length,yt=et-1,ht=bt+1;bt<et;bt++,yt++,ht++)yt===et&&(yt=0),ht===et&&(ht=0),At[bt]=W(C[bt],C[yt],C[ht]);xt.push(At),kt=kt.concat(At)}for(let H=0;H<m;H++){const $=H/m,C=d*Math.cos($*Math.PI/2),bt=g*Math.sin($*Math.PI/2)+_;for(let et=0,yt=B.length;et<yt;et++){const ht=X(B[et],ft[et],bt);lt(ht.x,ht.y,-C)}for(let et=0,yt=A.length;et<yt;et++){const ht=A[et];At=xt[et];for(let Nt=0,Tt=ht.length;Nt<Tt;Nt++){const w=X(ht[Nt],At[Nt],bt);lt(w.x,w.y,-C)}}}const ne=g+_;for(let H=0;H<k;H++){const $=f?X(M[H],kt[H],ne):M[H];v?(R.copy(P.normals[0]).multiplyScalar($.x),T.copy(P.binormals[0]).multiplyScalar($.y),L.copy(x[0]).add(R).add(T),lt(L.x,L.y,L.z)):lt($.x,$.y,0)}for(let H=1;H<=u;H++)for(let $=0;$<k;$++){const C=f?X(M[$],kt[$],ne):M[$];v?(R.copy(P.normals[H]).multiplyScalar(C.x),T.copy(P.binormals[H]).multiplyScalar(C.y),L.copy(x[H]).add(R).add(T),lt(L.x,L.y,L.z)):lt(C.x,C.y,h/u*H)}for(let H=m-1;H>=0;H--){const $=H/m,C=d*Math.cos($*Math.PI/2),bt=g*Math.sin($*Math.PI/2)+_;for(let et=0,yt=B.length;et<yt;et++){const ht=X(B[et],ft[et],bt);lt(ht.x,ht.y,h+C)}for(let et=0,yt=A.length;et<yt;et++){const ht=A[et];At=xt[et];for(let Nt=0,Tt=ht.length;Nt<Tt;Nt++){const w=X(ht[Nt],At[Nt],bt);v?lt(w.x,w.y+x[u-1].y,x[u-1].x+C):lt(w.x,w.y,h+C)}}}Y(),st();function Y(){const H=r.length/3;if(f){let $=0,C=k*$;for(let bt=0;bt<tt;bt++){const et=F[bt];Q(et[2]+C,et[1]+C,et[0]+C)}$=u+m*2,C=k*$;for(let bt=0;bt<tt;bt++){const et=F[bt];Q(et[0]+C,et[1]+C,et[2]+C)}}else{for(let $=0;$<tt;$++){const C=F[$];Q(C[2],C[1],C[0])}for(let $=0;$<tt;$++){const C=F[$];Q(C[0]+k*u,C[1]+k*u,C[2]+k*u)}}n.addGroup(H,r.length/3-H,0)}function st(){const H=r.length/3;let $=0;Pt(B,$),$+=B.length;for(let C=0,bt=A.length;C<bt;C++){const et=A[C];Pt(et,$),$+=et.length}n.addGroup(H,r.length/3-H,1)}function Pt(H,$){let C=H.length;for(;--C>=0;){const bt=C;let et=C-1;et<0&&(et=H.length-1);for(let yt=0,ht=u+m*2;yt<ht;yt++){const Nt=k*yt,Tt=k*(yt+1),w=$+bt+Nt,y=$+et+Nt,z=$+et+Tt,Z=$+bt+Tt;pt(w,y,z,Z)}}}function lt(H,$,C){c.push(H),c.push($),c.push(C)}function Q(H,$,C){nt(H),nt($),nt(C);const bt=r.length/3,et=S.generateTopUV(n,r,bt-3,bt-2,bt-1);ut(et[0]),ut(et[1]),ut(et[2])}function pt(H,$,C,bt){nt(H),nt($),nt(bt),nt($),nt(C),nt(bt);const et=r.length/3,yt=S.generateSideWallUV(n,r,et-6,et-3,et-2,et-1);ut(yt[0]),ut(yt[1]),ut(yt[3]),ut(yt[1]),ut(yt[2]),ut(yt[3])}function nt(H){r.push(c[H*3+0]),r.push(c[H*3+1]),r.push(c[H*3+2])}function ut(H){s.push(H.x),s.push(H.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new fs[r.type]().fromJSON(r)),new wa(n,t.options)}}const ig={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],u=t[r*3+1];return[new ot(s,o),new ot(a,c),new ot(l,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ot(o,1-c),new ot(l,1-h),new ot(f,1-g),new ot(_,1-p)]:[new ot(a,1-c),new ot(u,1-h),new ot(d,1-g),new ot(m,1-p)]}};function rg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Aa extends Es{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Aa(t.radius,t.detail)}}class Ra extends Es{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ra(t.radius,t.detail)}}class vi extends Ne{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const T=P/e;h.x=-t*Math.cos(r+T*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(r+T*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-x),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const x=u[p][S+1],v=u[p][S],P=u[p+1][S],T=u[p+1][S+1];(p!==0||o>0)&&d.push(x,v,T),(p!==n-1||c<Math.PI)&&d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ca extends Ne{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pa extends Ne{constructor(t=new Xl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ot;let u=new D;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function _(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),S(),p()}function m(x){u=t.getPointAt(x/e,u);const v=o.normals[x],P=o.binormals[x];for(let T=0;T<=r;T++){const R=T/r*Math.PI*2,L=Math.sin(R),E=-Math.cos(R);c.x=E*v.x+L*P.x,c.y=E*v.y+L*P.y,c.z=E*v.z+L*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=r;v++){const P=(r+1)*(x-1)+(v-1),T=(r+1)*x+(v-1),R=(r+1)*x+v,L=(r+1)*(x-1)+v;g.push(P,T,L),g.push(T,R,L)}}function S(){for(let x=0;x<=e;x++)for(let v=0;v<=r;v++)l.x=x/e,l.y=v/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pa(new fs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class sg extends br{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Kl extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class og extends Kl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const lo=new ge,jc=new D,Qc=new D;class ag{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cg extends ag{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new cg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const tl=new ge;class ug{constructor(t,e,n=0,r=1/0){this.ray=new wl(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tl),this}intersectObject(t,e=!0,n=[]){return ra(t,this,n,e),n.sort(el),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ra(t[r],this,n,e);return n.sort(el),n}}function el(i,t){return i.distance-t.distance}function ra(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)ra(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);const qn="#5b3520",Yn={trunk:"#e2a574",leaf:"#83c47b",leafLight:"#b4de94",fir:"#8ccf87",top:"#66ad74",dirt:"#c28c5a",dirtDark:"#a8754a"};function Ht(i){let t=(Math.imul(i|0,2654435761)^2654435769)>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}function ue(i,t){const e=document.createElement("canvas");return e.width=Math.round(i),e.height=Math.round(t),[e,e.getContext("2d")]}function hg(i,t,{amp:e=1.5,step:n=5,closed:r=!1}={}){const s=[],o=i.length,a=r?o:o-1,c=t()*6.28,l=t()*6.28;let u=0;for(let h=0;h<a;h++){const[f,d]=i[h],[g,_]=i[(h+1)%o],m=Math.hypot(g-f,_-d)||1,p=-(_-d)/m,S=(g-f)/m,x=Math.max(1,Math.ceil(m/n));for(let v=0;v<x;v++){const P=v/x,T=e*(Math.sin(u*.045+c)*.65+Math.sin(u*.17+l)*.35);s.push([f+(g-f)*P+p*T,d+(_-d)*P+S*T]),u+=m/x}}return r||s.push(i[o-1].slice()),s}function Ot(i,t,e,{w:n=3,color:r=qn,closed:s=!1,amp:o=1.3}={}){const a=hg(t,e,{amp:o,closed:s});s&&a.push(a[0]);const c=e()*6.28,l=.12+e()*.14;i.strokeStyle=r,i.lineCap="round",i.lineJoin="round";for(let u=0;u<a.length-1;u++)i.lineWidth=n*(.7+.55*(.5+.5*Math.sin(u*l+c))),i.beginPath(),i.moveTo(a[u][0],a[u][1]),i.lineTo(a[u+1][0],a[u+1][1]),i.stroke()}function jl(i,t){i.beginPath(),i.moveTo(t[0][0],t[0][1]);for(const e of t)i.lineTo(e[0],e[1]);i.closePath()}function ee(i,t,e){i.fillStyle=e,jl(i,t),i.fill()}function La(i,t,e){i.save(),jl(i,t),i.clip(),e(),i.restore()}function Ue(i,t,e,n,r,{n:s=40,lump:o=.08}={}){const a=2+Math.floor(r()*3),c=r()*6.28,l=5+Math.floor(r()*3),u=r()*6.28,h=[];for(let f=0;f<s;f++){const d=f/s*Math.PI*2,g=1+o*(Math.sin(d*a+c)*.6+Math.sin(d*l+u)*.4);h.push([i+Math.cos(d)*e*g,t+Math.sin(d)*n*g])}return h}function Ql(i,t,e,n,r){const s=[];for(let o=0;o<r;o++){const a=Math.PI+o/r*Math.PI,c=Math.PI+(o+1)/r*Math.PI,l=i+Math.cos(a)*e,u=t+Math.sin(a)*n,h=i+Math.cos(c)*e,f=t+Math.sin(c)*n,d=(l+h)/2,g=(u+f)/2,_=Math.hypot(h-l,f-u)/2,m=Math.atan2(u-g,l-d),p=Math.atan2(g-t,d-i),S=Math.cos(m+Math.PI/2-p)>0?1:-1;for(let x=0;x<8;x++){const v=m+S*(x/8)*Math.PI;s.push([d+Math.cos(v)*_,g+Math.sin(v)*_*1.05])}}for(let o=0;o<=10;o++){const a=o/10*Math.PI;s.push([i+Math.cos(a)*e,t+Math.sin(a)*n*.45])}return s}function fg(){const[i,t]=ue(128,64),e=t.createRadialGradient(64,32,4,64,32,62);return e.addColorStop(0,"rgba(50,95,55,.42)"),e.addColorStop(.7,"rgba(50,95,55,.3)"),e.addColorStop(1,"rgba(50,95,55,0)"),t.setTransform(1,0,0,.5,0,16),t.fillStyle=e,t.beginPath(),t.arc(64,32,62,0,Math.PI*2),t.fill(),i}function dg(i,t="#ffd24a"){const[e,n]=ue(80,80),r=Ht(20+i),s=[];for(let o=0;o<10;o++){const a=-Math.PI/2+o*Math.PI/5,c=o%2?14:32;s.push([40+Math.cos(a)*c,42+Math.sin(a)*c])}return ee(n,s,t),Ot(n,s,r,{w:3.4,closed:!0,amp:.6}),e}function pg(i,t,{H:e=128,lip:n=!0,seed:r=41}={}){const s=i*t,[o,a]=ue(s,e),c=Ht(r),l=Ht(r+1);a.fillStyle=Yn.dirt,a.fillRect(0,0,s,e),a.fillStyle=Yn.dirtDark,a.fillRect(0,e*.72,s,e);for(let u=0;u<26*e/128;u++){const h=c()*s,f=30+c()*(e-48),d=20+c()*40;Ot(a,[[h,f],[h+d,f+(c()-.5)*6]],l,{w:2.2,color:"#9a6a40",amp:1})}for(let u=20+c()*40;u<s-10;u+=55+c()*80)Ot(a,[[u,16],[u+(c()-.5)*12,16+(.4+c()*.55)*(e-16)]],l,{w:3,amp:1.5});if(n){const u=[[0,0],[s,0]];for(let h=s;h>=0;h-=12)u.push([h,12+7*Math.abs(Math.sin(h*.13))+c()*3]);ee(a,u,Yn.top),Ot(a,u.slice(2),l,{w:3.4,amp:.6})}return Ot(a,[[0,e-3],[s,e-3]],l,{w:5,amp:1}),o}function mg(i=1024,t=640){const[e,n]=ue(i,t),r=Ht(61),s=Ht(62),o=n.createLinearGradient(0,0,0,t);o.addColorStop(0,"#7f8fe0"),o.addColorStop(.6,"#a7a6ee"),o.addColorStop(1,"#c9b5ee"),n.fillStyle=o,n.fillRect(0,0,i,t);for(let a=0;a<7;a++){const c=s()*i,l=60+s()*(t-120),u=60+s()*90,h=u*.32,f=3+Math.floor(s()*3),d=Ql(c,l,u,h,f);ee(n,d,"#e7c4ee"),La(n,d,()=>ee(n,Ue(c,l+h*.55,u*1.1,h*.45,r),"#d7aee6")),Ot(n,d,r,{w:2.6,closed:!0,color:"#6d5aa8"})}return e}const gg=new hn({side:Ve,vertexShader:`
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
    }`}),_g=new hn({side:Ve,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Ni=new hn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new ot},seed:{value:0},lineW:{value:1.3},ink:{value:new jt(qn)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function vg(i){const t=new Ln(1,1,{samples:4,type:gi}),e=new Ln(1,1,{type:gi,minFilter:Re,magFilter:Re}),n=new Zt(new ke(2,2),Ni),r=new kl;r.add(n);const s=new Ss(-1,1,1,-1,0,1),o=new ot,a=[];function c(){i.getDrawingBufferSize(o),t.setSize(o.x,o.y),e.setSize(o.x,o.y),Ni.uniforms.texel.value.set(1/o.x,1/o.y),Ni.uniforms.lineW.value=1.25*i.getPixelRatio()}function l(u,h,f){i.getDrawingBufferSize(o),(o.x!==t.width||o.y!==t.height)&&c(),i.setRenderTarget(t),i.render(u,h);const d=u.background;u.background=null,u.traverse(_=>{if(!(!_.isMesh||!_.visible)){if(_.userData.noInk){_.visible=!1,a.push([_,null]);return}a.push([_,_.material]),_.userData.sprite?(_.material=_g,_.onBeforeRender=Mg):_.material=gg}});const g=i.getClearAlpha();i.getClearColor(nl),i.setClearColor(0,0),i.setRenderTarget(e),i.render(u,h),i.setClearColor(nl,g);for(const[_,m]of a)m?(_.material=m,_.onBeforeRender=xg):_.visible=!0;a.length=0,u.background=d,Ni.uniforms.tColor.value=t.texture,Ni.uniforms.tND.value=e.texture,Ni.uniforms.seed.value=f,i.setRenderTarget(null),i.render(r,s)}return{render:l,setSize:c}}const nl=new jt,xg=()=>{};function Mg(i,t,e,n,r){r.uniforms.map.value=this.userData.colorMap(),r.uniformsNeedUpdate=!0}function Sg(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Ne;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in s){const h=il(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const g=il(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function il(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new un(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}function yg(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),c={},l={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let S=0,x=a.length;S<x;S++){const v=a[S],P=i.attributes[v];c[v]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const T=i.morphAttributes[v];T&&(l[v]||(l[v]=[]),T.forEach((R,L)=>{const E=new R.array.constructor(R.count*R.itemSize);l[v][L]=new R.constructor(E,R.itemSize,R.normalized)}))}const d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let S=0;S<s;S++){const x=n?n.getX(S):S;let v="";for(let P=0,T=a.length;P<T;P++){const R=a[P],L=i.getAttribute(R),E=L.itemSize;for(let M=0;M<E;M++)v+=`${~~(L[h[M]](x)*_+m)},`}if(v in e)u.push(e[v]);else{for(let P=0,T=a.length;P<T;P++){const R=a[P],L=i.getAttribute(R),E=i.morphAttributes[R],M=L.itemSize,A=c[R],O=l[R];for(let F=0;F<M;F++){const B=h[F],X=f[F];if(A[X](o,L[B](x)),E)for(let k=0,tt=E.length;k<tt;k++)O[k][X](o,E[k][B](x))}}e[v]=o,u.push(o),o++}}const p=i.clone();for(const S in i.attributes){const x=c[S];if(p.setAttribute(S,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),S in l)for(let v=0;v<l[S].length;v++){const P=l[S][v];p.morphAttributes[S][v]=new P.constructor(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(u),p}const Eg=(()=>{const i=new zl(new Uint8Array([120,255]),2,1,xs);return i.minFilter=i.magFilter=Re,i.needsUpdate=!0,i})(),uo=new Map;function $t(i,t={}){const e=i+JSON.stringify(t,(n,r)=>r&&r.isTexture?r.uuid:r);return uo.has(e)||uo.set(e,new sg({color:i,gradientMap:Eg,...t})),uo.get(e)}function Te(i,t=!1){const e=new R0(i);return e.colorSpace=Ge,e.anisotropy=8,t&&(e.wrapS=e.wrapT=ls),e}const tu=new D(0,1,0),bg=new ge,Da=new jn,Ua=new D,Ia=new D;function Ts(i,t,e=Da.identity(),n=Ua.set(1,1,1)){return i.clone().applyMatrix4(bg.compose(t,e,n))}function Tg(i){return i.attributes.uv||i.setAttribute("uv",new se(new Float32Array(i.attributes.position.count*2),2)),i}function ds(i,t){return new Zt(Sg(i.map(Tg)),t)}const wg=new vi(1,12,8);function rl(i,t,e,n){const r=3+Math.floor(e()*3);for(let s=0;s<r;s++){const o=s/r*Math.PI*2+e(),a=s===0?0:t*.55,c=t*(s===0?1:.62+e()*.2);n.push(Ts(wg,Ia.set(i.x+Math.cos(o)*a,i.y+(s===0?t*.12:0),i.z+Math.sin(o)*a),Da.identity(),Ua.set(c,c*.46,c)))}}function eu(i){const t=Ht(i),e=4+t()*.9,n=(t()-.5)*.5,r=new Be,s=new Dn(.06,.2,e,8,12);s.translate(0,e/2,0);const o=s.attributes.position;for(let u=0;u<o.count;u++){const h=o.getY(u)/e,f=h<.1?1+(.1-h)*7:1;o.setXYZ(u,o.getX(u)*f+n*h*h,o.getY(u),o.getZ(u)*f)}s.computeVertexNormals();const a=[s],c=[],l=6+Math.floor(t()*3);for(let u=0;u<l;u++){const h=.3+u/(l-1)*.62,f=u*2.4+t()*.6,d=.35+(1-h)*.95,g=new D(n*h*h,h*e,0),_=new D(Math.cos(f)*.8,.6,Math.sin(f)*.8).normalize(),m=new Dn(.025,.05,d,5);a.push(Ts(m,g.clone().addScaledVector(_,d/2),new jn().setFromUnitVectors(tu,_))),rl(g.clone().addScaledVector(_,d),.28+(1-h)*.2,t,c)}return rl(new D(n,e+.05,0),.26,t,c),r.add(ds(a,$t(Yn.trunk)),ds(c,$t(Yn.leaf))),r}function Ag(i){const t=Ht(i),e=new Be,n=4+Math.floor(t()*2),r=new Dn(.1,.16,1.2,7);r.translate(0,.6,0);const s=[];for(let o=0;o<n;o++){const a=o/(n-1),c=1.05-.62*a,l=1.25-.3*a,u=.9+a*2.3,h=new wr(c,l,10,1,!0),f=h.attributes.position;for(let d=0;d<f.count;d++){if(f.getY(d)>-l/2+.01)continue;const g=Math.atan2(f.getZ(d),f.getX(d)),_=Math.round(g/(Math.PI*2/10))%2===0,m=_?1.08:.8;f.setXYZ(d,f.getX(d)*m,f.getY(d)+(_?-.14:.06),f.getZ(d)*m)}h.computeVertexNormals(),s.push(Ts(h,Ia.set(0,u+l/2,0),Da.setFromAxisAngle(tu,t()*6)))}return e.add(new Zt(r,$t(Yn.trunk)),ds(s,$t(Yn.fir,{side:Ve}))),e}function Rg(i,t){const e=Ht(i);let n=new vi(.6,14,10);n.deleteAttribute("uv"),n.deleteAttribute("normal"),n=yg(n);const r=n.attributes.position;for(let o=0;o<r.count;o++){let a=r.getY(o);a<0&&(a*=.35);const c=1+(e()-.5)*.14;r.setXYZ(o,r.getX(o)*1.15*c,(a+.2)*1.3*c,r.getZ(o)*c)}n.computeVertexNormals();const s=new Zt(n,$t("#d8c6a2"));return s.scale.setScalar(t),s.rotation.y=e()*6.28,s}function Cg(i){const t=Ht(i),e=[],n=4+Math.floor(t()*2),r=new wr(.11,.75,5);r.translate(0,.37,0);for(let s=0;s<n;s++){const o=s/n*Math.PI*2+t(),a=.25+t()*.35,c=new jn().setFromEuler(new gn(Math.sin(o)*a,0,-Math.cos(o)*a));e.push(Ts(r,Ia.set(Math.cos(o)*.08,0,Math.sin(o)*.08),c,Ua.set(1,.7+t()*.6,1)))}return ds(e,$t(Yn.leafLight))}const Pg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
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
    <circle cx="87" cy="84" r="8.5" fill="#fff"/><circle cx="113" cy="84" r="8.5" fill="#fff"/>
    <circle cx="88" cy="85" r="4.6" fill="#2a1a10" stroke="none"/><circle cx="114" cy="85" r="4.6" fill="#2a1a10" stroke="none"/>
    <circle cx="90" cy="82" r="1.7" fill="#fff" stroke="none"/><circle cx="116" cy="82" r="1.7" fill="#fff" stroke="none"/>
    <ellipse cx="76" cy="97" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="97" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M92 101 Q100 108 108 101" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,Lg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
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
    <circle cx="87" cy="86" r="8.5" fill="#fff"/><circle cx="113" cy="86" r="8.5" fill="#fff"/>
    <circle cx="88" cy="87" r="4.6" fill="#2a1a10" stroke="none"/><circle cx="114" cy="87" r="4.6" fill="#2a1a10" stroke="none"/>
    <circle cx="90" cy="84" r="1.7" fill="#fff" stroke="none"/><circle cx="116" cy="84" r="1.7" fill="#fff" stroke="none"/>
    <ellipse cx="76" cy="99" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="99" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M92 103 Q100 110 108 103" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,Dg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
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
    <circle cx="87" cy="70" r="8.5" fill="#fff"/><circle cx="113" cy="70" r="8.5" fill="#fff"/>
    <circle cx="88" cy="71" r="4.6" fill="#2a1a10" stroke="none"/><circle cx="114" cy="71" r="4.6" fill="#2a1a10" stroke="none"/>
    <circle cx="90" cy="68" r="1.7" fill="#fff" stroke="none"/><circle cx="116" cy="68" r="1.7" fill="#fff" stroke="none"/>
    <ellipse cx="76" cy="83" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="83" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M92 87 Q100 94 108 87" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,Ug=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">
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
    <circle cx="87" cy="64" r="8.5" fill="#fff"/><circle cx="113" cy="64" r="8.5" fill="#fff"/>
    <circle cx="88" cy="65" r="4.6" fill="#2a1a10" stroke="none"/><circle cx="114" cy="65" r="4.6" fill="#2a1a10" stroke="none"/>
    <circle cx="90" cy="62" r="1.7" fill="#fff" stroke="none"/><circle cx="116" cy="62" r="1.7" fill="#fff" stroke="none"/>
    <ellipse cx="76" cy="77" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/><ellipse cx="124" cy="77" rx="7" ry="4.5" fill="#ff8fa3" opacity=".6" stroke="none"/>
    <path d="M93 84 Q100 90 107 84" fill="none" stroke-width="3.5"/>
  </g>
</svg>
`,Ig=7,nu=3;async function Ng(i,t,e){const n=new Image;n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i),await n.decode();const r=document.createElement("canvas");return r.width=t,r.height=e,r.getContext("2d").drawImage(n,0,0,t,e),r}const Fg=(i,t,e)=>Promise.all(Array.from({length:nu},(n,r)=>Ng(i.replace(/seed="\d+"/,`seed="${r*17+3}"`),t,e).then(s=>Te(s))));async function Og(i){const t=new kl,e=new Ss(-1,1,1,-1,.1,300),n=vg(i);t.add(new og(16777215,15985368,1.9));const r=new lg(16777215,1.3);r.position.set(-9,6,8),t.add(r);const s={},[o,a,c,l]=await Promise.all([Pg,Lg,Dg,Ug].map(Q=>Fg(Q,300,360)));Object.assign(s,{girl:o,boy:a,mama:c,baba:l});const u=[0,1,2].map(Q=>Te(dg(Q))),h=Te(fg());let f=new Be;t.add(f);let d=[],g=[],_=[],m=[],p=[];const S={center:new D,pitch:.6,yaw:0,width:12,height:8,padTop:0,padBottom:0,aspect:1,pxW:1,pxH:1};let x=0,v=0,P=-1,T=0;function R(){return t.remove(f),f.traverse(Q=>{Q.geometry&&!Q.userData.sharedGeo&&Q.geometry.dispose()}),f=new Be,t.add(f),d=[],g=[],_=[],m.length=0,p=[],t.background=null,f}function L(){const Q=Math.max(50,S.pxH-S.padTop-S.padBottom),pt=Math.max(S.width/S.pxW,S.height/Q),nt=S.pxW*pt/2,ut=S.pxH*pt/2,H=(S.padBottom-S.padTop)/2*pt;Object.assign(e,{left:-nt,right:nt,top:ut-H,bottom:-ut-H}),e.updateProjectionMatrix()}function E(){const pt=Math.cos(S.pitch),nt=S.yaw+Math.sin(x*.35)*T;e.position.set(S.center.x+Math.sin(nt)*pt*60,S.center.y+Math.sin(S.pitch)*60,S.center.z+Math.cos(nt)*pt*60),e.lookAt(S.center)}function M(Q){Object.assign(S,Q),Q.center&&(S.center=new D(...Q.center)),T=Q.sway||0,L(),E()}function A(Q,pt,nt=S.padTop,ut=S.padBottom){Object.assign(S,{pxW:Q,pxH:pt,aspect:Q/pt,padTop:nt,padBottom:ut}),L()}function O(Q,pt,nt,ut=1.6,{y:H=0,flip:$=!1}={}){const C=s[Q],bt=ut*(300/360),et=1/Math.cos(S.pitch||.6),yt=new he({map:C[0],alphaTest:.5,side:Ve}),ht=new ke(bt,ut*et);ht.translate(0,ut*et/2,0);const Nt=new Zt(ht,yt);return Nt.position.set(pt,H,nt),$&&(Nt.scale.x=-1),Nt.userData.sprite=!0,Nt.userData.colorMap=()=>yt.map,Nt.userData.breathe=Math.random()*6,d.push({mat:yt,frames:C}),g.push(Nt),f.add(Nt),X(pt,nt,bt*.9,H),Nt}const F=new he({map:h,transparent:!0,depthWrite:!1}),B=new ke(1,1).rotateX(-Math.PI/2);function X(Q,pt,nt,ut=0,H=nt*.5){const $=new Zt(B,F);return $.position.set(Q,ut+.02,pt),$.scale.set(nt,1,H),$.renderOrder=1,$.userData.noInk=!0,$.userData.sharedGeo=!0,f.add($),$}const k=new he({map:u[0],alphaTest:.5,side:Ve}),tt=new ke(.4,.4);function W(Q,pt=10,nt=2.4){for(let ut=0;ut<pt;ut++){const H=ut/pt*Math.PI*2+Math.random(),$=new Zt(tt,k);$.userData.sprite=!0,$.userData.colorMap=()=>k.map,$.userData.sharedGeo=!0,$.position.copy(Q),f.add($),g.push($),p.push({m:$,vx:Math.cos(H)*nt,vz:Math.sin(H)*nt*.4,vy:3+Math.random()*2,t:0})}}function ft(Q,pt,nt=ut=>1-(1-ut)**3){return new Promise(ut=>m.push({t:0,dur:Q,fn:pt,ease:nt,resolve:ut}))}function xt(Q,pt,nt,ut=.5,H=.8){const $=Q.position.clone(),C=Q.rotation.clone();return ft(ut,bt=>{Q.position.lerpVectors($,pt,bt),Q.position.y+=Math.sin(bt*Math.PI)*H,nt&&Q.rotation.set(C.x+(nt[0]-C.x)*bt,C.y+(nt[1]-C.y)*bt,C.z+(nt[2]-C.z)*bt)})}const At=new ug,kt=new ot;function ne(Q,pt){const nt=i.domElement.getBoundingClientRect();kt.set((Q-nt.left)/nt.width*2-1,-((pt-nt.top)/nt.height)*2+1),At.setFromCamera(kt,e);const ut=At.intersectObject(f,!0);for(const H of ut){let $=H.object;for(;$&&!$.userData.pick;)$=$.parent;if($&&$.visible!==!1)return $.userData.pick}return null}const Y=new D;function st(Q,pt=0){Q.getWorldPosition(Y),Y.y+=pt,Y.project(e);const nt=i.domElement.getBoundingClientRect();return{x:nt.left+(Y.x+1)/2*nt.width,y:nt.top+(1-Y.y)/2*nt.height}}function Pt(Q){x+=Q;const pt=Math.max(0,Math.floor(x*Ig))%nu;if(pt!==P){P=pt,v=pt*7.31;for(const ut of d)ut.mat.map=ut.frames[pt];k.map=u[pt]}for(let ut=m.length-1;ut>=0;ut--){const H=m[ut];H.t+=Q;const $=Math.min(1,H.t/H.dur);H.fn(H.ease($)),$>=1&&(m.splice(ut,1),H.resolve())}for(const ut of _)ut(x,Q);for(const ut of g)if(ut.rotation.y=S.yaw,ut.userData.breathe!=null){const H=1+Math.sin(x*3+ut.userData.breathe)*.018;ut.scale.y=H}for(let ut=p.length-1;ut>=0;ut--){const H=p[ut];H.t+=Q,H.vy-=9*Q,H.m.position.x+=H.vx*Q,H.m.position.z+=H.vz*Q,H.m.position.y+=H.vy*Q,H.m.scale.setScalar(Math.max(.001,1-H.t/1.1)),H.t>1.1&&(f.remove(H.m),g.splice(g.indexOf(H.m),1),p.splice(ut,1))}const nt=t.background;if(nt!=null&&nt.isTexture&&nt.userData.cover&&nt.image){const ut=nt.image.width/nt.image.height,H=S.aspect;H<ut?(nt.repeat.set(H/ut,1),nt.offset.set((1-H/ut)/2,0)):(nt.repeat.set(1,ut/H),nt.offset.set(0,(1-ut/H)/2))}E()}return{scene:t,camera:e,renderer:i,get root(){return f},view:S,clear:R,setView:M,resize:A,character:O,blob:X,burst:W,tween:ft,moveTo:xt,pick:ne,toScreen:st,update:Pt,render:()=>n.render(t,e,v),anim:Q=>_.push(Q),get time(){return x}}}const sa=Math.PI*2,dt={box:(i,t,e)=>new Xe(i,t,e),cyl:(i,t,e,n=10,r=!1)=>new Dn(i,t,e,n,1,r),sph:(i,t=12,e=9)=>new vi(i,t,e),hemi:(i,t=14)=>new vi(i,t,8,0,sa,0,Math.PI/2),cone:(i,t,e=8)=>new wr(i,t,e),tor:(i,t,e=sa,n=16)=>new Ca(i,t,8,n,e),oct:i=>new Ra(i),ico:(i,t=0)=>new Aa(i,t),plane:(i,t)=>new ke(i,t),lathe:(i,t=16)=>new Ta(i.map(([e,n])=>new ot(e,n)),t),tube:(i,t,e=40)=>new Pa(new Hl(i.map(n=>new D(...n))),e,t,8),extrude:(i,t)=>{const e=new wa(new Yl(i.map(([n,r])=>new ot(n,r))),{depth:t,bevelEnabled:!1});return e.translate(0,0,-t/2),e}},Bg=i=>typeof i=="number"?[i,i,i]:i,kg=(()=>{const i=new zl(new Uint8Array([205,255]),2,1,xs);return i.minFilter=i.magFilter=Re,i.needsUpdate=!0,i})();function mt(i,t,{p:e=[0,0,0],r:n=[0,0,0],s:r=1,map:s,side:o,glow:a,basic:c,soft:l}={}){const u={};l&&(u.gradientMap=kg),s&&(u.map=s),o&&(u.side=o),a&&(u.emissive=a,u.emissiveIntensity=.55);const h=c?new he({color:t,map:s,side:o}):$t(t,u),f=new Zt(i,h);return f.position.set(...e),f.rotation.set(...n),f.scale.set(...Bg(r)),f}function Zn(...i){const t=new Be;return t.add(...i.flat().filter(Boolean)),t}const ho=new Map,dn=(i,t)=>(ho.has(i)||ho.set(i,Te(t(),!0)),ho.get(i)),iu={chevrons:()=>dn("chev",()=>{const[i,t]=ue(256,256),e=Ht(5);t.fillStyle="#c7c0e6",t.fillRect(0,0,256,256);for(let n=-40;n<300;n+=64){const r=[[30,n+40],[128,n],[226,n+40],[226,n+64],[128,n+24],[30,n+64]];ee(t,r,"#8f84c2"),Ot(t,r,e,{w:3,closed:!0,color:"#4b3f7a"})}return i}),stripes:(i="#5aa0e6",t="#ffd24a")=>dn("str"+i+t,()=>{const[e,n]=ue(256,256),r=Ht(6);for(let s=0;s<8;s++)n.fillStyle=s%2?i:t,n.fillRect(s*32,0,32,256);for(let s=1;s<8;s++)Ot(n,[[s*32,0],[s*32,256]],r,{w:2.5});return e}),swirl:()=>dn("swirl",()=>{const[i,t]=ue(256,256),e=Ht(7);t.fillStyle="#d24cf0",t.fillRect(0,0,256,256);const n=[];for(let r=0;r<22;r+=.25)n.push([128+Math.cos(r)*r*5.2,128+Math.sin(r)*r*5.2]);return Ot(t,n,e,{w:9,color:"#f3a6ff",amp:1}),i}),arrow:()=>dn("arrow",()=>{const[i,t]=ue(256,128),e=Ht(8);t.fillStyle="#e8c58f",t.fillRect(0,0,256,128);const n=[[40,52],[160,52],[160,30],[215,64],[160,98],[160,76],[40,76]];ee(t,n,"#e8584e"),Ot(t,n,e,{w:3.5,closed:!0});for(let r=0;r<3;r++)Ot(t,[[10,20+r*40],[60,22+r*40]],e,{w:1.6,color:"#b58d5b"});return i}),rings:()=>dn("rings",()=>{const[i,t]=ue(128,128),e=Ht(9);t.fillStyle="#f1c792",t.fillRect(0,0,128,128);for(const n of[14,28,42,56])Ot(t,Ue(64,64,n,n,e,{n:28,lump:.05}),e,{w:2.2,closed:!0,color:"#b07a45"});return i}),bricks:(i,t,e)=>dn("br"+i,()=>{const[n,r]=ue(512,256),s=Ht(91),o=Ht(92);r.fillStyle=t,r.fillRect(0,0,512,256);for(let a=0,c=0;c<256;a++,c+=42)for(let l=a%2?0:-40;l<512;l+=96+o()*10){const u=[[l+4,c+4],[l+90,c+4],[l+90,c+39],[l+4,c+39]];ee(r,u,o()<.35?i:t),Ot(r,u,s,{w:2,closed:!0,color:e,amp:.6})}return n}),strata:(i,t,e)=>dn("strata"+i,()=>{const[n,r]=ue(256,256),s=Ht(33),o=Ht(34);for(let a=0;a<256;a+=32)r.fillStyle=a/32%2?i:t,r.fillRect(0,a,256,32);for(let a=32;a<256;a+=32)Ot(r,[[0,a+(o()-.5)*6],[256,a+(o()-.5)*6]],s,{w:2.4,color:e,amp:2});for(let a=0;a<14;a++){const c=o()*256,l=o()*256;Ot(r,[[c,l],[c+4,l+18]],s,{w:2,color:e,amp:0})}return n}),star:(i,t)=>dn("star"+i+t,()=>{const[e,n]=ue(256,256),r=Ht(10);n.fillStyle=i,n.fillRect(0,0,256,256);const s=[];for(let o=0;o<10;o++){const a=-Math.PI/2+o*Math.PI/5,c=o%2?40:90;s.push([128+Math.cos(a)*c,134+Math.sin(a)*c])}return ee(n,s,t),Ot(n,s,r,{w:5,closed:!0}),e}),corrugated:(i,t)=>dn("corr"+i,()=>{const[e,n]=ue(256,128),r=Ht(12);n.fillStyle=i,n.fillRect(0,0,256,128);for(let s=8;s<256;s+=16)Ot(n,[[s,0],[s,128]],r,{w:2,color:t,amp:.4});return e}),dots:(i,t)=>dn("dots"+i,()=>{const[e,n]=ue(128,128),r=Ht(13);n.fillStyle=i,n.fillRect(0,0,128,128);for(let s=0;s<9;s++)n.fillStyle=t,n.beginPath(),n.arc(r()*128,r()*128,6+r()*6,0,sa),n.fill();return e})},Na='"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',oa='"Amiri","Noto Naskh Arabic","Geeza Pro","Arial",serif',Gn='"Baloo 2","Fredoka",system-ui,sans-serif';function ru(i,t,e,n){return[[i,t],[i+e,t],[i+e,t+n],[i,t+n]]}function Fa(i,t,e,n,r,s=6){const o=[],a=[[i+e-r,t+r,-Math.PI/2],[i+e-r,t+n-r,0],[i+r,t+n-r,Math.PI/2],[i+r,t+r,Math.PI]];for(const[c,l,u]of a)for(let h=0;h<=s;h++){const f=u+h/s*Math.PI/2;o.push([c+Math.cos(f)*r,l+Math.sin(f)*r])}return o}const zg={cave(i,t,e,n){const r=Ht(401),s=[[t-n,e+n*.7],[t-n*.55,e-n*.2],[t-n*.2,e-n*.75],[t+n*.2,e-n*.55],[t+n*.6,e-n*.1],[t+n,e+n*.7]];ee(i,s,"#c9a27a"),Ot(i,s,r,{w:4,closed:!0}),Ot(i,[[t-n*.45,e+n*.1],[t-n*.2,e+n*.05]],r,{w:3,color:"#9b7552"}),Ot(i,[[t+n*.3,e-n*.1],[t+n*.55,e+n*.05]],r,{w:3,color:"#9b7552"});const o=[];for(let a=0;a<=14;a++){const c=Math.PI+a/14*Math.PI;o.push([t+Math.cos(c)*n*.34,e+n*.7+Math.sin(c)*n*.5])}ee(i,o,"#4a3326"),Ot(i,o,r,{w:3.5})},adobe(i,t,e,n){const r=Ht(402),s=n*.62,o=n*.34;for(let a=0;a<3;a++)for(let c=0;c<3-a%2;c++){const l=t-n+(a%2?s/2:0)+c*s+4,u=e+n*.55-(a+1)*o,h=ru(l,u,s-6,o-5);ee(i,h,a===1?"#d9b07a":"#cfa06a"),Ot(i,h,r,{w:3,closed:!0,amp:.6}),i.fillStyle="#b9895a",i.fillRect(l+8,u+8,4,3),i.fillRect(l+s*.5,u+o*.5,5,3)}}};function Oa(i,{bg:t="#fbf3df",size:e=256,round:n=!1}={}){const[r,s]=ue(e,e),o=Ht(i.id.length*31+7),a=e*.06,c=n?Ue(e/2,e/2,e/2-a,e/2-a,o,{n:40,lump:.03}):Fa(a,a,e-2*a,e-2*a,e*.14);return n||(s.fillStyle="#c98f55",s.fillRect(0,0,e,e)),ee(s,c,t),La(s,c,()=>ee(s,Ue(e*.42,e*.38,e*.3,e*.22,o,{lump:.2}),"rgba(255,255,255,.55)")),Ot(s,c,o,{w:e*.028,closed:!0,amp:1}),i.paint?zg[i.paint](s,e/2,e/2,e*.33):i.sky!=null?Hg(s,i.sky,e):(s.font=`${Math.round(e*.56)}px ${Na}`,s.textAlign="center",s.textBaseline="middle",s.fillText(i.icon,e/2,e*.54)),r}const aa=[{top:"#2c3570",bot:"#e9a3a6",sun:[.85,.92],glow:!0},{top:"#7fa6e6",bot:"#ffd2a0",sun:[.88,.7]},{top:"#6fb3ee",bot:"#cfe9ff",sun:[.72,.36]},{top:"#5aaaf0",bot:"#bfe4ff",sun:[.46,.18]},{top:"#72aee6",bot:"#f4e2b4",sun:[.22,.45]},{top:"#6a5aa8",bot:"#f59a6a",sun:[.1,.9]},{top:"#141a45",bot:"#2d3a7a",sun:null,stars:!0}];function Hg(i,t,e){const n=aa[t],r=e*.16,s=e-2*r,o=Ht(t+50),a=Ue(e/2,e/2,s/2,s/2,Ht(3),{n:36,lump:.02});La(i,a,()=>{const c=i.createLinearGradient(0,r,0,r+s);if(c.addColorStop(0,n.top),c.addColorStop(1,n.bot),i.fillStyle=c,i.fillRect(0,0,e,e),n.sun&&(i.fillStyle="#ffd24a",i.beginPath(),i.arc(r+n.sun[0]*s,r+n.sun[1]*s,e*.08,0,7),i.fill()),n.stars){i.fillStyle="#fff6c0";for(let l=0;l<9;l++)i.beginPath(),i.arc(r+l*37%100/100*s,r+l*53%60/100*s,3,0,7),i.fill();i.fillStyle="#fff2b0",i.beginPath(),i.arc(r+s*.3,r+s*.3,e*.07,0,7),i.fill(),i.fillStyle=n.top,i.beginPath(),i.arc(r+s*.34,r+s*.27,e*.06,0,7),i.fill()}ee(i,[[0,r+s*.78],[e,r+s*.74],[e,e],[0,e]],t===6?"#27402e":"#7cb86e")}),Ot(i,a,o,{w:e*.02,closed:!0})}function Ba(i=512,t=512,e="#e8c08a",n="#b0824e",r=1){const[s,o]=ue(i,t),a=Ht(r),c=Ht(r+1);o.fillStyle=e,o.fillRect(0,0,i,t);for(let u=0;u<18;u++)ee(o,Ue(c()*i,c()*t,30+c()*60,8+c()*10,c,{lump:.2}),"rgba(255,240,210,.35)");const l=64;for(let u=0;u<t;u+=l){Ot(o,[[0,u+2],[i,u+2+(c()-.5)*5]],a,{w:2.6,color:n});for(let h=u/l%2?90:220;h<i;h+=260+c()*60)Ot(o,[[h,u+3],[h,u+l-2]],a,{w:2.2,color:n,amp:.4});for(let h=0;h<3;h++){const f=c()*i,d=u+16+c()*32;Ot(o,[[f,d],[f+26+c()*20,d+(c()-.5)*4]],a,{w:1.5,color:"#c99a62",amp:.8})}}return s}function Gg(i=512,t=512,e=5){const[n,r]=ue(i,t),s=Ht(e);r.fillStyle="#f3ead6",r.fillRect(0,0,i,t);const o=64,a=["#7fc7c0","#f0c96a","#86b9e8"];for(let c=0;c<t;c+=o)for(let l=0;l<i;l+=o){const u=l+o/2,h=c+o/2,f=[];for(let d=0;d<16;d++){const g=d/16*Math.PI*2+Math.PI/8,_=d%2?o*.22:o*.36;f.push([u+Math.cos(g)*_,h+Math.sin(g)*_])}ee(r,f,a[(l+c)/o%3]),Ot(r,f,s,{w:1.8,closed:!0,color:"#6b5a4a",amp:.4})}for(let c=0;c<=t;c+=o)Ot(r,[[0,c],[i,c]],s,{w:1.2,color:"#d8c9a8",amp:.3});for(let c=0;c<=i;c+=o)Ot(r,[[c,0],[c,t]],s,{w:1.2,color:"#d8c9a8",amp:.3});return n}function su(i=512,t=512,e=9){const[n,r]=ue(i,t),s=Ht(e),o=Ht(e+1);r.fillStyle="#ecd7a6",r.fillRect(0,0,i,t);for(let a=0;a<26;a++)ee(r,Ue(o()*i,o()*t,30+o()*60,12+o()*24,o,{lump:.25}),o()<.5?"#f2e0b4":"#e3c992");for(let a=0;a<90;a++){const c=o()*i,l=o()*t;Ot(r,[[c,l],[c+9,l-2]],s,{w:1.8,color:"#d6ba84",amp:0})}for(let a=0;a<14;a++){const c=o()*i,l=o()*t,u=Ue(c,l,5,4,s,{n:12});ee(r,u,"#cdb18a"),Ot(r,u,s,{w:1.5,closed:!0,amp:.2})}return n}function ou(i=512,t=512,e=11){const[n,r]=ue(i,t),s=Ht(e),o=Ht(e+1);r.fillStyle="#9dd190",r.fillRect(0,0,i,t);for(let a=0;a<26;a++)ee(r,Ue(o()*i,o()*t,30+o()*60,14+o()*26,o,{lump:.22}),o()<.5?"#a9d99b":"#93c886");for(let a=0;a<260;a++){const c=o()*i,l=o()*t;Ot(r,[[c,l],[c+3,l-7]],s,{w:2,color:"#78b66f",amp:0}),o()<.6&&Ot(r,[[c+5,l+1],[c+8,l-6]],s,{w:2,color:"#78b66f",amp:0})}for(let a=0;a<10;a++){const c=o()*i,l=o()*t;for(let u=0;u<5;u++){const h=u/5*6.28,f=Ue(c+Math.cos(h)*5,l+Math.sin(h)*4,4.2,3.6,s,{n:10});ee(r,f,"#fffdf6"),Ot(r,f,s,{w:1.3,color:"#9a7a58",closed:!0,amp:.2})}r.fillStyle="#f5c84c",r.beginPath(),r.arc(c,l,2.6,0,7),r.fill()}return n}function au(i="#f4ead3",t="#7cc39a",e=512,n=384,r=21){const[s,o]=ue(e,n),a=Ht(r),c=Ht(r+1);o.fillStyle=i,o.fillRect(0,0,e,n);for(let u=0;u<16;u++)ee(o,Ue(c()*e,60+c()*n,30+c()*50,16+c()*20,c,{lump:.2}),"rgba(255,255,255,.35)");for(let u=0;u<12;u++)ee(o,Ue(c()*e,80+c()*n,20+c()*40,10+c()*14,c,{lump:.2}),"rgba(160,120,80,.08)");const l=58;o.fillStyle=t,o.fillRect(0,0,e,l);for(let u=0;u<e/64;u++){const h=32+u*64,f=l/2,d=[];for(let g=0;g<16;g++){const _=g/16*Math.PI*2+Math.PI/8,m=g%2?11:20;d.push([h+Math.cos(_)*m,f+Math.sin(_)*m])}ee(o,d,"#fff6dc"),Ot(o,d,a,{w:2,closed:!0,amp:.3})}return Ot(o,[[0,l],[e,l]],a,{w:3.2}),o.fillStyle="rgba(160,110,70,.15)",o.fillRect(0,n*.78,e,n),Ot(o,[[0,n*.78],[e,n*.78]],a,{w:2.4,color:"#a8754a"}),s}function Vg(i=512,t=128,e=31){const[n,r]=ue(i,t),s=Ht(e);r.fillStyle="#6fb57c",r.fillRect(0,0,i,t);for(let o=-20;o<i+40;o+=46){const a=Ql(o,40,34,26,3);ee(r,a,"#83c47b"),Ot(r,a,s,{w:2.4,closed:!0,color:"#3f7a4a"})}for(let o=0;o<40;o++){const a=o*97%i,c=60+o*41%60;Ot(r,[[a,c],[a+4,c-8]],s,{w:2,color:"#52985f",amp:0})}return n}function Wg(i,{w:t=384,h:e=160,bg:n="#fbf3df",color:r=qn,ar:s=!1,sub:o,size:a,font:c}={}){const[l,u]=ue(t,e),h=Ht(i.length*13+3);u.fillStyle="#c98f55",u.fillRect(0,0,t,e);const f=Fa(8,8,t-16,e-16,18);ee(u,f,n),Ot(u,f,h,{w:4,closed:!0}),u.fillStyle=r,u.textAlign="center",u.textBaseline="middle";const d=a||(s?e*.5:e*.36);return u.font=c||(s?`bold ${d}px ${oa}`:`800 ${d}px ${Gn}`),s&&(u.direction="rtl"),u.fillText(i,t/2,o?e*.38:e*(s?.56:.54)),o&&(u.direction="rtl",u.font=`bold ${e*.3}px ${oa}`,u.fillText(o,t/2,e*.72)),l}function Xg(i,t){const[e,n]=ue(512,160),r=Ht(i.id.length*7),s=Fa(10,10,492,140,26);return n.clearRect(0,0,512,160),ee(n,s,t?"#d9d2c4":"#fbf3df"),Ot(n,s,r,{w:5,closed:!0}),n.textBaseline="middle",n.textAlign="center",n.font=`${i.icon.length===1&&/[؀-ۿ]/.test(i.icon)?`bold 76px ${oa}`:`70px ${Na}`}`,n.fillStyle=qn,n.fillText(t?"🔒":i.icon,72,84),n.font=`800 ${i.name.length>14?44:52}px ${Gn}`,n.fillStyle=t?"#8a7f70":qn,n.fillText(i.name,300,86),e}const ps=6.2,ms=3.9,Hn={makkah:[.95,1.05],madinah:[.35,-1.45],stops:[[1.55,1.55],[-1.2,.2],[.3,-.72]]};function sl(i=!1){const e=ps*160,n=ms*160,[r,s]=ue(e,n),o=Ht(71),a=Ht(72),c=([g,_])=>[(g+ps/2)*160,(_+ms/2)*160];s.fillStyle="#f1dcae",s.fillRect(0,0,e,n);for(let g=0;g<30;g++)ee(s,Ue(a()*e,a()*n,40+a()*90,20+a()*40,a,{lump:.25}),a()<.5?"#ecd09a":"#f6e6c2");const l=[[0,0],[e*.16,0],[e*.13,n*.3],[e*.17,n*.55],[e*.12,n*.8],[e*.15,n],[0,n]];ee(s,l,"#8fcbe0"),Ot(s,l.slice(1,6),o,{w:4,color:"#3d86a6"});for(let g=0;g<6;g++){const _=20+a()*e*.08,m=30+a()*(n-60);Ot(s,[[_,m],[_+10,m-6],[_+20,m],[_+30,m-6]],o,{w:2.4,color:"#e9f7fb",amp:0})}s.save(),s.translate(e*.06,n*.5),s.rotate(-Math.PI/2),s.font=`700 30px ${Gn}`,s.fillStyle="#3d86a6",s.textAlign="center",s.fillText("Red Sea",0,0),s.restore();for(let g=0;g<9;g++){const _=e*.25+a()*e*.7,m=40+a()*(n-80),p=[[_-26,m+12],[_,m-16],[_+26,m+12]];Ot(s,p,o,{w:3,color:"#b58d5b"})}const u=[Hn.makkah,[1.3,1.45],Hn.stops[0],[.4,1.5],[-.8,1],Hn.stops[1],[-.9,-.4],Hn.stops[2],Hn.madinah].map(c);s.setLineDash(i?[]:[10,14]),Ot(s,u,o,{w:i?9:6,color:i?"#e8584e":"#9a6a3a",amp:1.2}),s.setLineDash([]),Hn.stops.forEach((g,_)=>{const[m,p]=c(g),S=Ue(m,p,58,58,o,{n:30,lump:.03});ee(s,S,"rgba(255,250,235,.8)"),s.setLineDash([8,8]),Ot(s,S,o,{w:3.5,closed:!0}),s.setLineDash([]),s.font=`800 56px ${Gn}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle="#b58d5b",s.fillText(String(_+1),m,p+4);const x=m-62,v=p-58,P=Ue(x,v,24,24,o,{n:20});ee(s,P,"#f5cf5f"),Ot(s,P,o,{w:3,closed:!0}),s.font=`800 32px ${Gn}`,s.fillStyle=qn,s.fillText(String(_+1),x,v+2)});for(const[g,_]of[["makkah","Makkah"],["madinah","Madinah"]]){const[m,p]=c(Hn[g]),S=Ue(m,p,22,22,o,{n:20});ee(s,S,"#e8584e"),Ot(s,S,o,{w:3.5,closed:!0});const x=g==="makkah",v=x?m-34:m+34;s.font=`800 44px ${Gn}`,s.textAlign=x?"right":"left",s.textBaseline="middle",s.lineWidth=8,s.strokeStyle="#fbf3df",s.strokeText(_,v,p),s.fillStyle=qn,s.fillText(_,v,p)}const[h,f]=[e-90,n-100],d=[[h,f-60],[h+14,f],[h,f+40],[h-14,f]];return ee(s,d,"#fbf3df"),ee(s,[[h,f-60],[h+14,f],[h-14,f]],"#e8584e"),Ot(s,d,o,{w:3,closed:!0}),s.font=`800 36px ${Gn}`,s.textAlign="center",s.fillStyle=qn,s.fillText("N",h,f-82),i&&(s.font=`800 90px ${Gn}`,s.lineWidth=14,s.strokeStyle="#fbf3df",s.textAlign="center",s.strokeText("HIJRAH",e*.62,n*.45),s.fillStyle="#e8584e",s.fillText("HIJRAH",e*.62,n*.45)),Ot(s,ru(6,6,e-12,n-12),o,{w:6,closed:!0}),r}function ol(i=256,t=256,e=!1){const[n,r]=ue(i,t),s=Ht(5),o=r.createLinearGradient(0,0,0,t);e?(o.addColorStop(0,"#4a4f9e"),o.addColorStop(1,"#f2a6a0")):(o.addColorStop(0,"#1f2766"),o.addColorStop(1,"#4a4f9e")),r.fillStyle=o,r.fillRect(0,0,i,t);for(let a=0;a<40;a++)r.fillStyle=`rgba(255,246,200,${.4+s()*.6})`,r.beginPath(),r.arc(s()*i,s()*t,1+s()*2.2,0,7),r.fill();return e?(r.font=`${i*.26}px ${Na}`,r.textAlign="center",r.textBaseline="middle",r.fillText("☀️",i*.3,t*.62),r.fillText("🌙",i*.7,t*.35),r.fillText("⭐",i*.5,t*.2)):(r.fillStyle="#fff2b0",r.beginPath(),r.arc(i*.66,t*.32,i*.09,0,7),r.fill(),r.fillStyle="#1f2766",r.beginPath(),r.arc(i*.7,t*.28,i*.08,0,7),r.fill()),n}function qg(i="255,220,120"){const[t,e]=ue(128,128),n=e.createRadialGradient(64,64,4,64,64,62);return n.addColorStop(0,`rgba(${i},.9)`),n.addColorStop(.5,`rgba(${i},.35)`),n.addColorStop(1,`rgba(${i},0)`),e.fillStyle=n,e.fillRect(0,0,128,128),t}function cu(i,t,e=64,n=256){const[r,s]=ue(e,n),o=s.createLinearGradient(0,0,0,n);return o.addColorStop(0,i),o.addColorStop(1,t),s.fillStyle=o,s.fillRect(0,0,e,n),r}function Yg(i,t){const[e,n]=ue(256,192),r=Ht(i+90);n.fillStyle="#fbf6e8",n.fillRect(0,0,256,192);for(let s=0;s<7;s++)Ot(n,[[30,30+s*20],[226,30+s*20]],r,{w:2,color:s<Math.ceil(i/t*7)?"#b58d5b":"#e6dcc4",amp:.8});return e}const re=Math.PI,fi=(i,t)=>{const e=Te(i,!!t);return t&&e.repeat.set(...t),e},Ar=(i,t=Math.random)=>{i=i.slice();for(let e=i.length-1;e>0;e--){const n=Math.floor(t()*(e+1));[i[e],i[n]]=[i[n],i[e]]}return i};function ws(i,t=.8,e=.12,n){const r=new he({map:Te(Oa(i,{bg:n}))}),s=$t("#c98f55"),o=new Zt(new Xe(t,e,t),[s,s,r,s,s,s]),a=new Be;return a.add(o),a.userData.pick={type:"token",id:i.id},a}function $g(i,t=.4){const e=new he({map:Te(Oa(i,{round:!0,bg:"#fff4d6"}))});e.map.center.set(.5,.5),e.map.rotation=re/2;const n=$t("#e0b25a"),r=new Zt(new Dn(t,t,.12,28),[n,e,n]),s=new Be;return s.add(r),s.userData.pick={type:"token",id:i.id},s}function gs(i,t){const e=new Zt(new ke(i,i),new he({map:Te(qg(t)),transparent:!0,depthWrite:!1,blending:mo}));return e.userData.noInk=!0,e.renderOrder=3,e}function Zi(i,t,e,n={}){const r=Te(Wg(i,{w:Math.round(t*200),h:Math.round(e*200),...n}));return new Zt(new Xe(t,e,.06),[$t("#c98f55"),$t("#c98f55"),$t("#c98f55"),$t("#c98f55"),new he({map:r}),$t("#c98f55")])}function ir(i,{W:t=12,D:e=7,H:n=4.6,floor:r,wall:s=["#f4ead3","#7cc39a"],back:o=["#c8d6f2","#f3e6d6"],noWall:a=!1}={}){const c=i.root;i.scene.background=Te(cu(...o));const l=new he({map:fi(r,[t/3,e/3])}),u=new Zt(new Xe(t,.5,e),[$t("#b77c45"),$t("#b77c45"),l,$t("#8a5d33"),$t("#c98a4d"),$t("#b77c45")]);if(u.position.y=-.25,c.add(u),a)return;const h=new he({map:fi(au(...s),[t/4,1])}),f=$t(s[0]),d=new Zt(new Xe(t+.6,n,.3),[f,f,$t(s[1]),f,h,f]);d.position.set(0,n/2,-e/2-.15),c.add(d);for(const g of[-1,1]){const _=new Zt(new Xe(.3,n,e),[f,f,$t(s[1]),f,f,f]);_.position.set(g*(t/2+.15),n/2,0),c.add(_)}}function Zg(i,t){const e=Zn(mt(dt.box(1.4,2.4,.5),"#b77c45",{p:[0,1.2,0]})),n=["#e8584e","#7cc39a","#86b9e8","#f0c96a","#c9b6e6"],r=Ht(i*10|0);for(let s=0;s<3;s++){e.add(mt(dt.box(1.25,.06,.45),"#8a5d33",{p:[0,.35+s*.72,.04]}));let o=-.52;for(;o<.5;){const a=.1+r()*.08,c=.4+r()*.18;e.add(mt(dt.box(a,c,.34),n[Math.floor(r()*5)],{p:[o+a/2,.38+s*.72+c/2,.08]})),o+=a+.02}}return e.position.set(i,0,t),e}function Jn(i,t,e=1){const n=[];for(let s=0;s<6;s++){const o=s/6*re*2;n.push(mt(dt.sph(.26,10,8),"#83c47b",{p:[Math.cos(o)*.22,.95+s%2*.12,Math.sin(o)*.22],s:[1,.55,1]}))}const r=Zn(mt(dt.cyl(.32,.24,.6,12),"#e0896a",{p:[0,.3,0]}),mt(dt.cyl(.35,.35,.08,12),"#c96f52",{p:[0,.6,0]}),mt(dt.sph(.3,10,8),"#5c9d5f",{p:[0,1.05,0],s:[1,.8,1]}),...n);return r.position.set(i,0,t),r.scale.setScalar(e),r}function Kn(i,t,e,n="#f0c96a"){const r=Zn(mt(dt.cyl(.015,.015,.8,4),"#6b4a33",{p:[0,.4,0]}),mt(dt.cone(.26,.24,8),"#b9895a",{p:[0,-.02,0]}),mt(dt.cyl(.2,.16,.42,8),n,{p:[0,-.35,0],glow:n}),mt(dt.cyl(.12,.2,.08,8),"#b9895a",{p:[0,-.6,0]}));return r.position.set(i,t,e),r.userData.sway=i,r}function lu(i,t,e,n,r,s="#c98a4d"){const o=[[-1,-1],[1,-1],[-1,1],[1,1]].map(([c,l])=>mt(dt.box(.14,t-.1,.14),"#a8754a",{p:[c*(i/2-.15),(t-.1)/2,l*(e/2-.15)]})),a=Zn(mt(dt.box(i,.14,e),s,{p:[0,t-.07,0]}),...o);return a.position.set(n,0,r),a}function Jg(i,t,e,n,r="#e8584e",s="#f0c96a"){const o=new Zt(new ke(i,t),new he({map:iu.stripes(r,s)}));return o.rotation.x=-re/2,o.position.set(e,.012,n),o.userData.noInk=!0,o}function rr(i,t,e,n,r=[0,0,0]){t.position.set(...n),t.rotation.set(...r),e.add(t),i[t.userData.pick.id]={obj:t,home:{parent:e,pos:new D(...n),rot:r}}}const yr=[0,0,0],Kg=[re/2-.12,0,0];function jg(i,{wings:t,unlocked:e,pages:n,total:r}){const s=i.clear();i.scene.background=Te(mg()),i.scene.background.userData.cover=!0;const o=new he({map:fi(ou(512,512),[5,5])}),a=new he({map:fi(pg(8,80,{H:256,seed:51}),[6,1])}),c=new Zt(new Dn(12.5,12.5,2.2,56,1),[a,o,a]);c.scale.set(1,1,.72),c.position.y=-1.1,s.add(c);const l=new Zt(new Tr(4.6,40),new he({map:fi(su(),[2,2])}));l.rotation.x=-re/2,l.scale.set(1.35,.7,1),l.position.set(0,.015,1.4),l.userData.noInk=!0,s.add(l);const u=11.4,h=6.6,f=3.4,d=-4.2,g=new he({map:fi(au("#f4ead3","#7cc39a",512,384,5),[u/4,1])}),_=$t("#efe2c6"),m=new Zt(new Xe(u,h,f),[_,_,_,_,g,_]);m.position.set(0,h/2,d),s.add(m);const p=d+f/2;s.add(mt(dt.box(u+.4,.22,.7),"#c9c3e0",{p:[0,3.25,p+.2]}));for(let A=-5;A<=5;A++)s.add(mt(dt.cyl(.05,.05,.5,6),"#c9c3e0",{p:[A*1.05,3.6,p+.5]}));s.add(mt(dt.box(u+.4,.08,.08),"#c9c3e0",{p:[0,3.86,p+.5]}));const S=dt.extrude([[-u/2-.5,0],[u/2+.5,0],[u/2-1.2,1.6],[-u/2+1.2,1.6]],f+.8);s.add(mt(S,"#e0896a",{p:[0,h,d]})),s.add(mt(dt.hemi(1,18),"#7cc39a",{p:[0,h+1.6,d]}),mt(dt.cyl(.04,.04,.6,6),"#f5cf5f",{p:[0,h+2.8,d]}),mt(dt.sph(.12,8,6),"#f5cf5f",{p:[0,h+3.1,d]})),s.add(mt(dt.cyl(1.1,1.1,.12,20),"#c9c3e0",{p:[0,h+1.6,d]}));const x=(A,O)=>{const F=[[-A/2,0],[A/2,0],[A/2,O-A/2]];for(let B=1;B<12;B++){const X=B/12*re;F.push([Math.cos(X)*A/2,O-A/2+Math.sin(X)*A/2])}return F.push([-A/2,O-A/2]),F},v=[[-3.6,0],[0,0],[3.6,0],[-3.6,3.36],[0,3.36],[3.6,3.36]],P={};t.forEach((A,O)=>{const[F,B]=v[O],X=e.has(A.id),k=new Be;k.position.set(F,B,p),k.add(mt(dt.extrude(x(2.3,3),.12),"#c9c3e0",{p:[0,0,.04]})),k.add(mt(dt.extrude(x(1.8,2.7),.14),X?A.color:"#bdb5a6",{p:[0,0,.1]})),k.add(mt(dt.box(.05,1.7,.02),X?A.dark:"#9a9284",{p:[0,.85,.18]})),k.add(mt(dt.sph(.07,8,6),"#f5cf5f",{p:[.3,1.1,.2]}),mt(dt.sph(.07,8,6),"#f5cf5f",{p:[-.3,1.1,.2]}));const tt=new Zt(new ke(2.1,.66),new he({map:Te(Xg(A,!X)),transparent:!0,alphaTest:.5}));tt.position.set(0,1.85,.2),k.add(tt),X||k.add(mt(dt.tor(.14,.04,re,12),"#8a8a9a",{p:[0,1.05,.26]}),mt(dt.box(.36,.3,.1),"#b3aec6",{p:[0,.9,.24]})),k.traverse(W=>{W.isMesh&&(W.userData.pick=null)}),k.userData.pick={type:"wing",id:A.id},s.add(k),P[A.id]=k});for(const A of[-5.3,5.3])s.add(mt(dt.cyl(.42,.42,.1,16),"#86b9e8",{p:[A,1.9,p+.04],r:[re/2,0,0]}),mt(dt.tor(.45,.07,re*2,20),"#c9c3e0",{p:[A,1.9,p+.1]}));const T=new Be;T.position.set(0,0,2.2),T.add(mt(dt.cyl(.55,.7,.2,10),"#c9c3e0",{p:[0,.1,0]}),mt(dt.cyl(.16,.22,1.1,8),"#b77c45",{p:[0,.75,0]})),T.add(mt(dt.box(1.5,.08,1),"#8a5d33",{p:[0,1.32,0],r:[.35,0,0]}));const R=new he({map:Te(Yg(n,r))});for(const A of[-1,1]){const O=new Zt(new Xe(.68,.06,.86),[$t("#fbf6e8"),$t("#fbf6e8"),R,$t("#fbf6e8"),$t("#fbf6e8"),$t("#fbf6e8")]);O.position.set(A*.36,1.4,.02),O.rotation.set(.35,0,-A*.12),T.add(O)}T.add(mt(dt.box(1.56,.1,1.04),"#6fa3a0",{p:[0,1.34,0],r:[.35,0,0]}));const L=gs(2.4,"255,226,140");L.position.set(0,1.7,-.1),L.material.opacity=.3+.7*(n/r),T.add(L),T.userData.pick={type:"book"},s.add(T),i.blob(0,2.2,1.6);const E=[];for(let A=0;A<n;A++){const O=mt(dt.box(.32,.02,.42),"#fbf6e8",{p:[0,2.3,2.2]});s.add(O),E.push(O)}i.anim(A=>E.forEach((O,F)=>{const B=A*.8+F/E.length*re*2;O.position.set(Math.cos(B)*1.1,2.3+Math.sin(A*2+F)*.15,2.2+Math.sin(B)*.6),O.rotation.set(.4,B,Math.sin(A*3+F)*.3)})),[[-9.2,-3.2,"p"],[9.4,-3.4,"p"],[-10.4,.8,"f"],[10.3,.4,"f"],[-8.2,4.4,"p"],[8.6,4.2,"p"],[-6.9,-5.4,"f"],[7.2,-5.6,"f"]].forEach(([A,O,F],B)=>{const X=F==="p"?eu(100+B*13):Ag(200+B*13);X.scale.set(1,1.35,1),X.position.set(A,0,O),s.add(X),i.blob(A,O,1.8),i.anim(k=>{X.rotation.z=Math.sin(k*1.3+B)*.012})}),[[-6.2,5.2,.8],[6.4,5.6,.6],[-10.6,-2.4,1]].forEach(([A,O,F],B)=>{const X=Rg(40+B,F);X.position.set(A,0,O),s.add(X)});for(let A=0;A<16;A++){const O=Ht(700+A),F=(O()-.5)*20,B=-2+O()*8;if(Math.abs(F)<6.5&&B<4.5)continue;const X=Cg(900+A);X.position.set(F,0,B),s.add(X)}return s.add(Jn(-6.2,-2.2,1.1),Jn(6.2,-2.2,1.1)),i.character("girl",-1.9,3,1.35),i.character("boy",1.9,3.1,1.35,{flip:!0}),i.character("mama",-3.4,2,1.9),i.character("baba",3.4,2.1,1.95,{flip:!0}),i.setView({center:[0,3,0],pitch:.42,yaw:0,width:23,height:14,sway:.05}),{doors:P,book:T}}function Qg(i,t){const e=i.clear();ir(i,{floor:Ba(),wall:["#f4ead3","#7cc39a"],back:["#b9c9ee","#f1e4d2"]});const n=-3.5;e.add(mt(dt.box(.4,3.7,.4),"#c9c3e0",{p:[-1.85,1.85,n+.1]}),mt(dt.box(.4,3.7,.4),"#c9c3e0",{p:[1.85,1.85,n+.1]}),mt(dt.box(4.2,.5,.45),"#c9c3e0",{p:[0,3.85,n+.1]}));const r=new Zt(new ke(3.3,3.5),new he({color:"#ffe9a0"}));r.position.set(0,1.75,n+.02),e.add(r);const s=[-1,1].map(h=>{const f=new Be;f.position.set(h*1.65,0,n+.12),f.add(mt(dt.box(1.64,3.5,.14),"#b77c45",{p:[-h*.82,1.75,0]}));for(const d of[.5,3])f.add(mt(dt.box(1.5,.12,.05),"#8a7a68",{p:[-h*.82,d,.09]}));return f.add(mt(dt.tor(.14,.035,re*2,14),"#f5cf5f",{p:[-h*.18,1.1,.12]})),e.add(f),f}),o={},a=Ar(t.tokens),c=[-1.2,-.4,.4,1.2],l=[2.6,1.6];a.forEach((h,f)=>{const d=c[f%4],g=l[Math.floor(f/4)],_=d<0?s[0]:s[1];rr(o,$g(h),_,[d-_.position.x,g,.13],[re/2,0,0])}),e.add(mt(dt.box(4.8,.6,1.2),"#e4e0f0",{p:[0,.3,-1.5]}));const u=[-1.68,-.56,.56,1.68].map((h,f)=>{e.add(mt(dt.cyl(.44,.44,.04,24),"#8a7a68",{p:[h,.61,-1.5]}));const d=Zi(String(f+1),.4,.3,{size:44});return d.position.set(h,.3,-.88),e.add(d),{pos:new D(h,.68,-1.5),rot:[0,0,0]}});return e.add(Jg(5.4,2.2,0,1),Zg(-4.6,-3),Jn(4.8,-2.9),Kn(-3.2,3.6,-1.5),Kn(3.2,3.6,-1.5,"#86b9e8")),i.character("girl",-3.8,1.4,1.4),i.character("boy",4,1.5,1.4,{flip:!0}),{tokens:o,anchors:u,async solve(){await i.tween(1.4,h=>{s[0].rotation.y=-1.9*h,s[1].rotation.y=1.9*h}),i.burst(new D(0,1.8,-3),14)},view:{center:[0,1.5,-.6],pitch:.66,width:13,height:8.6}}}function t_(i,t,e){const n=i.clear();ir(i,{floor:Ba(512,512,"#dcc3a0","#a08060",4),wall:["#e9e2f4","#8f84c2"],back:["#2f3a78","#a7a6ee"]});const r=-3.5+.05,s=new he({map:Te(ol(256,256,!1))}),o=new Zt(new Tr(1.15,40),s);o.position.set(0,3.25,r+.02),n.add(o),n.add(mt(dt.tor(1.2,.13,re*2,40),"#f5cf5f",{p:[0,3.25,r+.1]})),n.add(mt(dt.box(.07,2.3,.06),"#f5cf5f",{p:[0,3.25,r+.08]}),mt(dt.box(2.3,.07,.06),"#f5cf5f",{p:[0,3.25,r+.08]}));const a=e.map((u,h)=>{const f=(h-1)*2.6,d=Zi(u.label,1.7,.72,{ar:!0,bg:"#fff4d6"});return d.position.set(f,1.5,r+.06),n.add(d),{pos:new D(f,.93,-2.72),rot:Kg}});n.add(mt(dt.box(8.2,.5,.8),"#b77c45",{p:[0,.25,-2.85]}));const c={};n.add(lu(7.4,.72,1.5,0,.9)),Ar(t.tokens).forEach((u,h)=>rr(c,ws(u,.9),n,[-3+h*1.2,.79,.9],yr));const l=Zn(mt(dt.cyl(.13,.18,1.5,12),"#86b9e8",{p:[0,1.5,0],r:[0,0,.9]}),mt(dt.cyl(.02,.03,1.2,5),"#8a5d33",{p:[.2,.6,0],r:[0,0,-.3]}),mt(dt.cyl(.02,.03,1.2,5),"#8a5d33",{p:[-.2,.6,.1],r:[.2,0,.3]}),mt(dt.cyl(.02,.03,1.2,5),"#8a5d33",{p:[0,.6,-.2],r:[-.3,0,0]}));return l.position.set(4.7,0,-1.4),n.add(l),n.add(Jn(-4.9,-2.9,.9),Kn(-3.4,3.8,-2.2,"#c9b6e6"),Kn(3.4,3.8,-2.2,"#f0c96a")),i.character("boy",-4.2,1.6,1.4),i.character("girl",4.4,1.8,1.4,{flip:!0}),{tokens:c,anchors:a,async solve(){s.map=Te(ol(256,256,!0));const u=gs(4,"255,230,150");u.position.set(0,3.25,r+.3),n.add(u),await i.tween(.8,h=>u.scale.setScalar(.3+h)),i.burst(new D(0,3.2,-3),14)},view:{center:[0,1.6,-.6],pitch:.66,width:13,height:8.8}}}function e_(i,t){const e=i.clear();ir(i,{floor:Ba(512,512,"#e8c08a","#b0824e",7),wall:["#f6ead0","#eab06a"],back:["#f2c98e","#f8ecd8"]});const n=-1,r=1;e.add(lu(ps+.4,r,ms+.4,0,n,"#a8754a"));const s=new he({map:Te(sl(!1))}),o=new Zt(new ke(ps,ms),s);o.rotation.x=-re/2,o.position.set(0,r+.005,n),e.add(o);const a=Hn.stops.map(([u,h])=>({pos:new D(u,r+.07,h+n),rot:yr}));e.add(mt(dt.box(8.2,.42,.9),"#b77c45",{p:[0,.21,2.65]}));const c={};Ar(t.tokens).forEach((u,h)=>rr(c,ws(u,.95),e,[-3.3+h*1.32,.48,2.65],yr)),e.add(Jn(-5,-2.9,1.1),Jn(5,-2.9,1.1),Kn(-3.6,3.9,-2.6),Kn(3.6,3.9,-2.6,"#e8584e"));const l=Zn(mt(dt.sph(.45,16,12),"#86b9e8",{p:[0,1.2,0]}),mt(dt.tor(.52,.03,re*1.4,20),"#f5cf5f",{p:[0,1.2,0],r:[0,re/2,.4]}),mt(dt.cyl(.05,.06,.7,6),"#8a5d33",{p:[0,.4,0]}),mt(dt.cyl(.3,.35,.1,10),"#8a5d33",{p:[0,.05,0]}));return l.position.set(-4.9,0,.6),e.add(l),i.character("girl",4.8,.9,1.4,{flip:!0}),i.character("mama",-4.6,2.4,1.8),{tokens:c,anchors:a,async solve(){s.map=Te(sl(!0)),i.burst(new D(0,1.6,n),16),await i.tween(.6,()=>{})},view:{center:[0,1,-.2],pitch:.9,width:12.8,height:9}}}const n_={trunks:()=>$t("#a8754a"),bricks:()=>$t("#ffffff",{map:iu.bricks("#dcb27c","#cfa06a","#8a5a30")}),leaves:()=>$t("#7cbf6a"),glass:()=>$t("#bfe6f5",{transparent:!0,opacity:.5}),steel:()=>$t("#aab3c2"),gold:()=>$t("#f5cf5f",{emissive:"#f5cf5f",emissiveIntensity:.3})};function i_(i,t){const e=i.clear();ir(i,{floor:su(),wall:["#cfe6f2","#eab06a"],back:["#8fc6ee","#f6e6c2"]});const n=new he({color:"#ffffff",transparent:!0,opacity:.3,depthWrite:!1}),r=-1.4,s=[[],[],[]];for(const h of[-1.9,0,1.9])for(const f of[-2.4,-1.5]){const d=new Zt(dt.cyl(.15,.17,2.2,10),n);d.position.set(h,1.1,f),s[0].push(d)}const o=[[6.2,1.3,.3,0,-2.95],[.3,1.3,3.2,-3.1,r],[.3,1.3,3.2,3.1,r],[2.3,1.3,.3,-1.95,.15],[2.3,1.3,.3,1.95,.15]];for(const[h,f,d,g,_]of o){const m=new Zt(dt.box(h,f,d),n);m.position.set(g,f/2,_),s[1].push(m)}{const h=new Zt(dt.box(6.5,.16,1.9),n);h.position.set(0,2.28,-2),s[2].push(h)}s.flat().forEach(h=>e.add(h));const c=["Pillars","Walls","Roof"].map((h,f)=>{const d=(f-1)*2.7;e.add(mt(dt.box(1,.5,1),"#c98a4d",{p:[d,.25,1.75]}));const g=Zi(h,1.3,.45);return g.position.set(d,1.05,1.2),g.rotation.x=-.1,e.add(g),e.add(mt(dt.cyl(.05,.05,.9,6),"#8a5d33",{p:[d,.45,1.16]})),{pos:new D(d,.57,1.75),rot:yr}});e.add(mt(dt.box(8.4,.18,.95),"#b77c45",{p:[0,.09,2.95]}));const l={};Ar(t.tokens).forEach((h,f)=>rr(l,ws(h,.95),e,[-3.4+f*1.36,.25,2.95],yr));for(const[h,f,d]of[[-5,-2.6,1],[5.1,-2.4,2]]){const g=eu(300+d);g.scale.set(1,1.1,1),g.position.set(h,0,f),e.add(g),i.blob(h,f,1.4)}for(let h=0;h<5;h++)e.add(mt(dt.box(.5,.2,.3),"#d9b07a",{p:[-4.6+h%3*.52,.1+Math.floor(h/3)*.2,.9],r:[0,.1*h,0]}));i.character("boy",-4.6,2,1.4),i.character("baba",4.7,1.2,1.9,{flip:!0});const u=(h,f)=>s[h].forEach(d=>{d.material=f?n_[f]():n});return{tokens:l,anchors:c,onPlace:(h,f)=>(u(h,f),!1),onRemove:h=>u(h,null),async solve(){for(let h=0;h<3;h++)i.burst(s[h][0].position.clone().setY(2.4),8),await i.tween(.3,()=>{})},view:{center:[0,1.2,-.3],pitch:.7,width:13,height:8.8}}}function r_(i,t){const e=i.clear();ir(i,{floor:Gg(),wall:["#eaf3f6","#86b9e8"],back:["#9fd0ea","#eef6f2"]});const n=-.5;e.add(mt(dt.cyl(1.6,1.7,.55,8),"#e4e0f0",{p:[0,.28,n]}),mt(dt.tor(1.62,.09,re*2,8),"#c9c3e0",{p:[0,.6,n],r:[re/2,0,re/8]}));const r=new Zt(new Tr(1.42,8),new he({color:"#78c4dc"}));r.rotation.x=-re/2,r.rotation.z=re/8,r.position.set(0,.64,n),e.add(r),e.add(mt(dt.cyl(.18,.24,1.2,10),"#c9c3e0",{p:[0,.9,n]}),mt(dt.cyl(.5,.2,.25,12),"#e4e0f0",{p:[0,1.55,n]}));for(let c=0;c<4;c++){const l=c/4*re*2+.4,u=dt.tube([[Math.cos(l)*.4,1.62,n+Math.sin(l)*.4],[Math.cos(l)*.8,1.5,n+Math.sin(l)*.8],[Math.cos(l)*1,.65,n+Math.sin(l)*1]],.07,12),h=mt(u,"#9ed8ee",{basic:!0});h.userData.noInk=!0,e.add(h)}const s=Zi(" ",7.6,1.4,{bg:"#e8c08a"});s.position.set(0,2.85,-3.4),e.add(s);const o=t.slots.map((c,l)=>{const u=(l-3)*1.05,h=Zi(String(l+1),.36,.3,{size:44});return h.position.set(u,3.38,-3.34),e.add(h),e.add(mt(dt.cyl(.04,.04,.14,6),"#8a5d33",{p:[u,3.15,-3.3],r:[re/2,0,0]})),{pos:new D(u,2.66,-3.25),rot:[re/2,0,0]}}),a={};return Ar(t.tokens).forEach((c,l)=>{const u=(12+l*26)*re/180;rr(a,ws(c,.82),e,[Math.cos(u)*3,.06,n+Math.sin(u)*2.35],[0,(Math.random()-.5)*.3,0])}),e.add(Jn(-5,-2.9),Jn(5,-2.9),Kn(-4,3.9,-1.2,"#86b9e8"),Kn(4,3.9,-1.2,"#86b9e8")),i.character("girl",-4.9,1.6,1.4),i.character("boy",4.9,1.6,1.4,{flip:!0}),i.anim(c=>{r.material.color.setHSL(.54,.55,.66+Math.sin(c*2)*.02)}),{tokens:a,anchors:o,async solve(){for(let c=0;c<3;c++)i.burst(new D(0,1.6,n),10,3),await i.tween(.35,()=>{})},view:{center:[0,1.4,-.4],pitch:.64,width:13,height:8.8}}}function s_(i,t){const e=i.clear();ir(i,{floor:ou(),noWall:!0,back:["#6fb3ee","#cfe9ff"]});const n=aa.map((P,T)=>{const R=cu(P.top,P.bot,P.stars?1024:64,P.stars?512:256);if(P.stars){const L=R.getContext("2d"),E=Ht(9);L.fillStyle="#fff6c0";for(let M=0;M<70;M++)L.beginPath(),L.arc(E()*1024,E()*300,1.5+E()*2,0,7),L.fill()}return Te(R)});i.scene.background=n[2];const r=new Zt(new Xe(12.4,1.3,.6),[$t("#6fb57c"),$t("#6fb57c"),$t("#83c47b"),$t("#6fb57c"),new he({map:fi(Vg(),[4,1])}),$t("#6fb57c")]);r.position.set(0,.65,-3.2),e.add(r);const s=new D(0,1.3,-2.55),o=3.3,a=mt(dt.tor(o,.09,re+.7,48),"#f5cf5f",{p:[s.x,s.y,s.z],r:[0,0,-.35]});e.add(a);const c=[-20,0,45,98,145,182,200].map(P=>P*re/180),l=P=>new D(s.x+Math.cos(P)*o,s.y+Math.sin(P)*o,s.z),u={},h=new he({transparent:!0,opacity:0,depthWrite:!1});t.tokens.forEach((P,T)=>{const R=new Be;R.add(mt(dt.sph(.2,12,9),T===0||T>=5?"#8f84c2":"#e8584e"));const L=new Zt(new vi(.5,8,6),h);L.userData.noInk=!0,R.add(L),R.userData.pick={type:"token",id:P.id};const E=l(c[T]);rr(u,R,e,[E.x,E.y,E.z+.05])});const f=Zn(mt(dt.sph(.42,16,12),"#ffd24a",{basic:!0})),d=gs(2.2,"255,220,120");f.add(d),e.add(f);let g=c[2];const _=P=>{g=P,f.position.copy(l(P)).add(new D(0,0,.35))};_(g),e.add(mt(dt.cyl(.75,.8,.14,20),"#e4e0f0",{p:[0,.07,-1]}),mt(dt.cyl(.07,.09,1.4,8),"#8a5d33",{p:[0,.84,-1]}));const m=new ke(1,.24).rotateX(-re/2).translate(.5,0,0),p=new Zt(m,new he({color:"#2f3a50",transparent:!0,opacity:.45,depthWrite:!1}));p.userData.noInk=!0,p.position.set(0,.15,-1),p.renderOrder=2,e.add(p);const S=P=>{const T=c[P],R=Math.min(T,re-T);if(R<=.01){p.visible=!1;return}p.visible=!0,p.scale.x=Math.min(3.4,1.4/Math.tan(R)),p.rotation.y=Math.cos(T)>0?re:0};S(2);const x=t.slots.map((P,T)=>{const R=(T-2)*1.75,L=mt(dt.cyl(.24,.2,.5,8),"#e9e2d0",{p:[0,.75,0]}),E=gs(1.6,"255,210,110");E.position.set(0,.8,.2),E.visible=!1;const M=Zn(mt(dt.cyl(.26,.3,.1,8),"#8a5d33",{p:[0,.45,0]}),L,mt(dt.cone(.32,.3,8),"#8a5d33",{p:[0,1.15,0]}),mt(dt.tor(.08,.025,re*2,10),"#8a5d33",{p:[0,1.36,0]}),E);M.position.set(R,0,2),e.add(M);const A=Zi(P.label,1.45,.62,{sub:P.sub});return A.position.set(R,.36,2.78),A.rotation.x=-.25,e.add(A),{glass:L,glow:E}});e.add(mt(dt.box(9.2,.4,.9),"#b77c45",{p:[0,.2,2]})),i.character("mama",-5.1,.2,1.8),i.character("boy",5.1,.4,1.4,{flip:!0});const v=(P,T)=>{const R=x[P];if(!T){R.glass.material=$t("#e9e2d0"),R.glow.visible=!1;return}const L=aa[t.tokens.find(E=>E.id===T).sky];R.glass.material=new he({color:L.bot}),R.glow.visible=!0};return{tokens:u,anchors:[],onSelect(P){const T=t.tokens.findIndex(E=>E.id===P),R=g,L=c[T];i.scene.background=n[T],S(T),i.tween(.5,E=>_(R+(L-R)*E))},onPlace:(P,T)=>(v(P,T),!0),onRemove:P=>v(P,null),async solve(){i.scene.background=n[6],S(6),_(c[6]);for(let P=0;P<5;P++)i.burst(new D((P-2)*1.75,1.3,2),6),await i.tween(.2,()=>{})},view:{center:[0,1.6,-.2],pitch:.5,width:13,height:8.4}}}const o_={"animal-door":Qg,"sky-window":t_,"hijrah-map":e_,"first-masjid":i_,"wudu-fountain":r_,"sun-clock":s_};function a_(i,t,e,n){const r=o_[t](i,e,n);return i.setView({yaw:0,sway:.03,...r.view}),i.root.traverse(s=>{if(s.userData.sway!=null){const o=s.userData.sway;i.anim(a=>{s.rotation.z=Math.sin(a*1.4+o)*.04})}}),r}let we,pi,ka=localStorage.getItem("fdh-muted")==="1";function ca(){if(!we)try{we=new(window.AudioContext||window.webkitAudioContext),pi=we.createGain(),pi.gain.value=ka?0:.4,pi.connect(we.destination)}catch{we=null}}function c_(i){ka=i,localStorage.setItem("fdh-muted",i?"1":"0"),pi&&(pi.gain.value=i?0:.4)}const uu=()=>ka;function Qe(i,t,{type:e="triangle",vol:n=.5,slide:r=1,delay:s=0}={}){if(!we)return;const o=we.currentTime+s,a=we.createOscillator(),c=we.createGain();a.type=e,a.frequency.setValueAtTime(i,o),a.frequency.exponentialRampToValueAtTime(i*r,o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(c).connect(pi),a.start(o),a.stop(o+t+.02)}function fo(i,{vol:t=.3,cutoff:e=1800,delay:n=0}={}){if(!we)return;const r=we.currentTime+n,s=Math.ceil(we.sampleRate*i),o=we.createBuffer(1,s,we.sampleRate),a=o.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*(1-h/s);const c=we.createBufferSource(),l=we.createBiquadFilter(),u=we.createGain();c.buffer=o,l.type="lowpass",l.frequency.value=e,u.gain.value=t,c.connect(l).connect(u).connect(pi),c.start(r)}const Ze={tap:()=>Qe(700,.08,{vol:.25,slide:1.3}),place:()=>{Qe(440,.1,{vol:.35}),fo(.08,{vol:.2,cutoff:900,delay:.05})},lift:()=>Qe(360,.12,{vol:.25,slide:.8}),hmm:()=>{Qe(330,.2,{vol:.3,slide:.85}),Qe(262,.28,{vol:.3,slide:.9,delay:.18})},click:()=>{fo(.06,{vol:.35,cutoff:3e3}),Qe(1200,.05,{type:"square",vol:.06,delay:.03})},open:()=>{Qe(520,.1,{vol:.3}),Qe(780,.12,{delay:.06,vol:.3})},page:()=>{fo(.35,{vol:.25,cutoff:2500}),Qe(1047,.3,{vol:.2,delay:.2})},solve:()=>[523,659,784,1047].forEach((i,t)=>Qe(i,.24,{delay:t*.1,vol:.4})),talk:()=>{Qe(880,.1,{vol:.25}),Qe(1175,.14,{vol:.25,delay:.08})}},hu="fdh-save-v1",al=()=>({solved:{},talks:0,roomTalks:{},notes:{},current:null,seenHowTo:!1});function l_(){try{return{...al(),...JSON.parse(localStorage.getItem(hu)||"{}")}}catch{return al()}}function u_(i){try{localStorage.setItem(hu,JSON.stringify(i))}catch{}}const it=i=>document.getElementById(i),Qt=l_(),fu=new URLSearchParams(location.search).has("all"),Ji=()=>u_(Qt),xi=()=>tn.filter(i=>Qt.solved[i]).length,_s=i=>!i.locked&&(fu||xi()>=i.needPages),za=i=>{const t=ji[i],e=Bi.find(r=>r.id===t.wing);if(!_s(e))return!1;const n=e.rooms.indexOf(i);return fu||n===0||!!Qt.solved[e.rooms[n-1]]};function pr(i){Qt.talks++,ct&&(Qt.roomTalks[ct.id]=(Qt.roomTalks[ct.id]||0)+1),Ji(),Ze.talk(),As();const t=it("talkPill");t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}function As(){it("talkCount").textContent=Qt.talks,it("talkCount2").textContent=Qt.talks,it("pageCount").textContent=`${xi()}/${tn.length}`,it("muteBtn").textContent=it("muteBtn2").textContent=uu()?"🔇":"🔈"}const h_=["titleScreen","howtoScreen","wingScreen","introScreen","lookAway","scrollScreen","tryScreen","pageScreen","talkScreen","bookScreen","finaleScreen"],Je=i=>{it(i).classList.remove("hidden"),i!=="titleScreen"&&Ze.open()},Oe=i=>it(i).classList.add("hidden"),Gi=()=>h_.some(i=>!it(i).classList.contains("hidden"));let Se,Cn="title",ct=null,du=null;const po=new Map;function f_(i){return po.has(i.id)||po.set(i.id,Oa(i,{size:128}).toDataURL()),po.get(i.id)}function Ha(){const i=window.innerWidth,t=window.innerHeight;Se.renderer.setSize(i,t,!1);let e=0,n=0;Cn==="room"&&(e=it("taskPill").getBoundingClientRect().bottom+6,n=t-it("lockBar").getBoundingClientRect().top+6),Cn==="hub"&&(e=50,n=t-it("wingBar").getBoundingClientRect().top+4),Se.resize(i,t,e,n)}function Ki(){Cn="hub",ct=null,du=jg(Se,{wings:Bi,unlocked:new Set(Bi.filter(_s).map(i=>i.id)),pages:xi(),total:tn.length}),it("roomHud").classList.add("hidden"),it("hubHud").classList.remove("hidden"),it("nameTag").classList.add("hidden"),it("wingBar").innerHTML=Bi.map(i=>{const t=_s(i),e=i.rooms.filter(n=>Qt.solved[n]).length;return`<button class="wing-chip ${t?"":"locked"}" data-wing="${i.id}" style="--c:${i.color};--d:${i.dark}">
      <span class="wi">${t?i.icon:"🔒"}</span><span class="wn">${i.name}</span><span class="wc">${i.locked?"coming soon":t?`${e}/${i.rooms.length}`:`${i.needPages} page${i.needPages>1?"s":""} to open`}</span></button>`}).join(""),it("wingBar").querySelectorAll("[data-wing]").forEach(i=>i.addEventListener("click",()=>pu(i.dataset.wing))),As(),Ha()}function pu(i){const t=Bi.find(e=>e.id===i);it("wingTitle").textContent=`${t.icon} ${t.name}`,t.locked?(it("wingBlurb").textContent="This wing is still being written. In sha Allah, its doors will open in a future update.",it("roomList").innerHTML=""):_s(t)?(it("wingBlurb").textContent=t.blurb,it("roomList").innerHTML=t.rooms.map(e=>{const n=ji[e],r=za(e),s=Qt.solved[e];return`<button class="room-row ${r?"":"locked"} ${s?"done":""}" data-room="${e}" ${r?"":"disabled"}>
        <span class="ri">${r?n.icon:"🔒"}</span><span class="rt"><b>${n.title}</b><small>${s?`✔ Page restored · 💬 ${Qt.roomTalks[e]||0} talks`:r?"A missing page is inside!":"Finish the room before first"}</small></span><span class="go">${r?s?"Play again":"Enter ➜":""}</span></button>`}).join(""),it("roomList").querySelectorAll("[data-room]").forEach(e=>e.addEventListener("click",()=>{Oe("wingScreen"),Rs(e.dataset.room)}))):(it("wingBlurb").textContent=`Restore ${t.needPages} page${t.needPages>1?"s":""} of the Book to open this wing. (You have ${xi()}.)`,it("roomList").innerHTML=""),Je("wingScreen")}function Rs(i,t){const e=ji[i];let n=e.slots.map((r,s)=>({...r,answer:r.answer||e.answer[s]}));t!=null&&t.order?n=t.order.map(r=>n.find(s=>(s.id||s.label)===r)):e.shuffleSlots&&(n=n.sort(()=>Math.random()-.5)),Cn="room",ct={id:i,room:e,slots:n,filled:n.map(()=>null),selected:null,tries:(t==null?void 0:t.tries)||0,talkedScroll:!1,marks:[]},ct.set=a_(Se,i,e,n),it("hubHud").classList.add("hidden"),it("roomHud").classList.remove("hidden"),it("roomTitle").textContent=`${e.icon} ${e.title}`,it("taskPill").textContent="👆 "+e.childTask,Cr(),Ha(),t!=null&&t.filled&&t.filled.forEach((r,s)=>{r&&ct.set.tokens[r]&&_u(s,r,!0)}),Rr(),it("introTitle").textContent=`${e.icon} ${e.title}`,it("introText").textContent=e.childIntro,it("lookText").textContent=e.lookPrompt,Je("introScreen")}function Rr(){ct&&(Qt.current={id:ct.id,order:ct.slots.map(i=>i.id||i.label),filled:ct.filled.slice(),tries:ct.tries},Ji())}function Cr(){const i=ct.selected;it("slots").innerHTML=ct.slots.map((t,e)=>{const n=ct.filled[e],r=n&&ct.room.tokens.find(s=>s.id===n);return`<button class="slot ${r?"full":""} ${i&&!r?"wants":""} ${ct.marks[e]?"ok":""}" data-slot="${e}">
      <span class="sl ${t.ar?"ar":""}">${t.label}${t.sub?`<i class="ar">${t.sub}</i>`:""}</span>
      <span class="si">${r?`<img src="${f_(r)}" alt="${r.name}">`:""}</span></button>`}).join(""),it("slots").querySelectorAll("[data-slot]").forEach(t=>t.addEventListener("click",()=>gu(+t.dataset.slot))),it("tryBtn").disabled=ct.filled.some(t=>!t),it("lockBar").classList.toggle("ready",!it("tryBtn").disabled)}const d_=i=>{var t;return(t=ct.set.tokens[i])==null?void 0:t.obj.scale.setScalar(1)};function mu(i){var n,r;if(!ct||Gi())return;const t=ct.filled.indexOf(i);if(t>=0&&ct.selected===i&&!ct.set.onSelect){ct.selected=null,d_(i),cs(t);return}const e=ct.selected;ct.selected=e===i?null:i,e&&ct.set.tokens[e]&&ct.set.tokens[e].obj.scale.setScalar(1),ct.selected?(Ze.tap(),(r=(n=ct.set).onSelect)==null||r.call(n,i)):Ze.lift(),Cr()}function gu(i){if(!ct)return;const t=ct.selected;if(!t){ct.filled[i]&&cs(i);return}const e=ct.filled.indexOf(t);e>=0&&cs(e,!0),ct.filled[i]&&cs(i,!0),ct.set.tokens[t].obj.scale.setScalar(1),ct.selected=null,_u(i,t)}function _u(i,t,e){var o,a;ct.filled[i]=t,ct.marks[i]=!1;const n=(a=(o=ct.set).onPlace)==null?void 0:a.call(o,i,t),r=ct.set.anchors[i],s=ct.set.tokens[t];!n&&r&&(Se.root.attach(s.obj),e?(s.obj.position.copy(r.pos),s.obj.rotation.set(...r.rot)):Se.moveTo(s.obj,r.pos,r.rot,.55)),e||Ze.place(),Cr(),Rr()}function cs(i,t){var s,o;const e=ct.filled[i];if(!e)return;ct.filled[i]=null,ct.marks[i]=!1;const n=(o=(s=ct.set).onRemove)==null?void 0:o.call(s,i,e),r=ct.set.tokens[e];!n&&ct.set.anchors[i]&&(r.home.parent.attach(r.obj),Se.moveTo(r.obj,r.home.pos,r.home.rot,.5)),t||(Ze.lift(),Cr(),Rr())}async function vu(){if(!ct||ct.filled.some(e=>!e))return;Ze.click();const i=ct.slots.map((e,n)=>ct.filled[n]===e.answer),t=i.filter(Boolean).length;if(t===i.length)return p_();ct.tries++,ct.marks=i,Rr(),Cr(),Ze.hmm(),it("tryCount").textContent=`${t} of ${i.length} ${t===1?"is":"are"} right!`,it("tryHead").textContent=t?"Good thinking! The gold stars show the right ones. The lock needs the rest.":"The lock clicked… but it didn't open yet.",Je("tryScreen")}async function p_(){const i=ct.id;Ze.solve(),Qt.solved[i]={at:Date.now(),tries:ct.tries+1},Qt.current=null,Ji(),it("roomHud").classList.add("hidden"),it("nameTag").classList.add("hidden"),ct.selected=null,await ct.set.solve(),await Se.tween(.6,()=>{}),Ze.page(),it("pageSpread").innerHTML=xu(i),Je("pageScreen")}function xu(i){const t=ji[i],e=t.page,n=Bi.find(o=>o.id===t.wing);if(!Qt.solved[i])return`<div class="pg left missing"><div class="pg-ic">❔</div><h3>A missing page</h3><p>Find it in the ${n.name}: <b>${t.title}</b>.</p></div><div class="pg right missing"><p class="faint">~ ~ ~</p></div>`;const s=Qt.notes[i];return`<div class="pg left"><div class="pg-ic">${e.icon}</div><h3>${e.title}</h3><div class="pg-wing">${n.icon} ${n.name}</div>
      <ul>${e.learned.map(o=>`<li>${o}</li>`).join("")}</ul></div>
    <div class="pg right"><div class="src"><p>${e.source.text}</p><cite>— ${e.source.ref}</cite></div>
      <div class="convo">💬 <b>${Qt.roomTalks[i]||0}</b> conversation${Qt.roomTalks[i]===1?"":"s"} in this room</div>
      ${s?`<div class="pnote">✏️ “${s.replace(/</g,"&lt;")}”</div>`:""}</div>`}function m_(){const i=ct.room.talk;it("talkParent").textContent=i.parent,it("talkChild").textContent=i.child,it("talkApply").textContent=i.apply,it("talkNote").value=Qt.notes[ct.id]||"",it("talkScreen").querySelectorAll("button.talked").forEach(e=>{e.disabled=!1,e.textContent="✔ We talked"});const t=tn.find(e=>!Qt.solved[e]&&za(e));it("talkNextRoom").classList.toggle("hidden",!t),it("talkNextRoom").dataset.room=t||"",Je("talkScreen")}function cl(i){const t=it("talkNote").value.trim();if(ct&&(t?Qt.notes[ct.id]=t:delete Qt.notes[ct.id],Ji()),Oe("talkScreen"),xi()===tn.length&&!Qt.finaleSeen){Qt.finaleSeen=!0,Ji(),Ki(),Je("finaleScreen");return}i?Rs(i):Ki()}function la(){!ct||Gi()||Je("lookAway")}function g_(){Oe("lookAway"),it("scrollBody").innerHTML=bu(ct.id,ct.room,{tries:ct.tries,talked:ct.talkedScroll}),Tu(it("scrollBody"),()=>{ct.talkedScroll=!0,pr()}),it("scrollScreen").scrollTop=0,Je("scrollScreen")}function __(){const i=it("parentBtn"),t=it("holdRing"),e=650;let n=0,r=0;const s=()=>{cancelAnimationFrame(r),n=0,t.style.strokeDashoffset=277,i.classList.remove("holding")},o=()=>{const a=Math.min(1,(performance.now()-n)/e);if(t.style.strokeDashoffset=277*(1-a),a>=1){s(),la();return}r=requestAnimationFrame(o)};i.addEventListener("pointerdown",a=>{ca(),a.preventDefault(),n=performance.now(),i.classList.add("holding"),r=requestAnimationFrame(o)}),["pointerup","pointerleave","pointercancel"].forEach(a=>i.addEventListener(a,s)),i.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),la())})}let di=0;function ua(i){di=i??Math.max(0,tn.findIndex(t=>Qt.solved[t])),it("bookSummary").innerHTML=`<b>${xi()}</b> of ${tn.length} pages restored · 💬 <b>${Qt.talks}</b> conversations together`,ha(),Je("bookScreen")}function ha(){it("bookSpread").innerHTML=xu(tn[di]),it("bookDots").innerHTML=tn.map((i,t)=>`<i class="${Qt.solved[i]?"got":""} ${t===di?"on":""}"></i>`).join("")}function v_(){const i=Se.renderer.domElement;i.addEventListener("pointerdown",n=>{if(ca(),Gi())return;const r=Se.pick(n.clientX,n.clientY);r&&(Cn==="hub"&&(Ze.tap(),r.type==="wing"&&pu(r.id),r.type==="book"&&ua()),Cn==="room"&&r.type==="token"&&mu(r.id))});let t=0;i.addEventListener("pointermove",n=>{const r=performance.now();r-t<60||n.pointerType!=="mouse"||(t=r,i.style.cursor=!Gi()&&Se.pick(n.clientX,n.clientY)?"pointer":"default")}),window.addEventListener("keydown",n=>{if(n.key==="Escape")for(const r of["wingScreen","bookScreen","howtoScreen","lookAway"])it(r).classList.contains("hidden")||Oe(r);n.key.toLowerCase()==="p"&&Cn==="room"&&!Gi()&&la()}),window.addEventListener("resize",Ha),it("startBtn").onclick=()=>{ca(),Oe("titleScreen");const n=Qt.current;n&&ji[n.id]&&za(n.id)?Rs(n.id,n):Ki(),Qt.seenHowTo||(Qt.seenHowTo=!0,Ji(),Je("howtoScreen"))},it("howBtn").onclick=()=>Je("howtoScreen"),it("helpBtn").onclick=()=>Je("howtoScreen"),it("howClose").onclick=()=>Oe("howtoScreen"),it("howList").innerHTML=Eu.map(([n,r])=>`<li><span>${n}</span><p>${r}</p></li>`).join(""),it("wingClose").onclick=()=>Oe("wingScreen"),it("introTalked").onclick=()=>{pr(),Oe("introScreen")},it("introSkip").onclick=()=>Oe("introScreen"),it("iAmGrownUp").onclick=g_,it("lookCancel").onclick=()=>Oe("lookAway"),it("scrollClose").onclick=()=>Oe("scrollScreen"),it("tryTalked").onclick=()=>{pr(),Oe("tryScreen")},it("tryBtn").onclick=vu,it("backBtn").onclick=()=>{Rr(),Ki()},it("pageNext").onclick=()=>{Oe("pageScreen"),m_()},it("talkScreen").querySelectorAll("button.talked").forEach(n=>n.addEventListener("click",()=>{n.disabled=!0,n.textContent="✔ Talked!",pr("talk-"+n.dataset.t)})),it("talkHome").onclick=()=>cl(null),it("talkNextRoom").onclick=()=>cl(it("talkNextRoom").dataset.room),it("bookBtn").onclick=()=>ua(),it("bookClose").onclick=()=>Oe("bookScreen"),it("bookPrev").onclick=()=>{di=(di+tn.length-1)%tn.length,ha(),Ze.page()},it("bookNext").onclick=()=>{di=(di+1)%tn.length,ha(),Ze.page()},it("finaleClose").onclick=()=>{pr(),Oe("finaleScreen")};const e=()=>{c_(!uu()),As()};it("muteBtn").onclick=e,it("muteBtn2").onclick=e,__()}async function x_(){var r;const i=new A0({canvas:it("scene"),antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.outputColorSpace=Ge;try{await Promise.race([document.fonts.load("bold 40px Amiri","الشمس"),new Promise(s=>setTimeout(s,2500))]),await document.fonts.load('800 40px "Baloo 2"')}catch{}Se=await Og(i),v_(),Ki(),Cn="title",it("hubHud").classList.add("hidden"),(Qt.current||xi())&&(it("startBtn").textContent=Qt.current?`Continue: ${((r=ji[Qt.current.id])==null?void 0:r.title)||"the House"}`:"Continue"),Je("titleScreen"),it("loading").remove(),As();let t=performance.now(),e=1;function n(s){const o=Math.max(0,Math.min(.05,(s-t)/1e3))*e;if(t=s,Se.update(o),ct!=null&&ct.selected){const a=ct.set.tokens[ct.selected];a&&!ct.set.onSelect&&a.obj.scale.setScalar(1.18+Math.sin(Se.time*6)*.06);const c=Se.toScreen(a.obj,.7),l=it("nameTag");l.textContent=ct.room.tokens.find(u=>u.id===ct.selected).name,l.style.left=c.x+"px",l.style.top=c.y+"px",l.classList.toggle("hidden",Gi())}else it("nameTag").classList.add("hidden");Se.render(),requestAnimationFrame(n)}requestAnimationFrame(n),window.game={ready:!0,stage:Se,save:Qt,get mode(){return Cn},get room(){return ct&&{id:ct.id,filled:ct.filled.slice(),selected:ct.selected,tries:ct.tries,slots:ct.slots.map(s=>s.label)}},answer:()=>ct.slots.map(s=>s.answer),tokenScreen:s=>Se.toScreen(ct.set.tokens[s].obj,.05),doorScreen:s=>Se.toScreen(du.doors[s],1),enterRoom:Rs,goHub:Ki,selectToken:mu,tapSlot:gu,tryLock:vu,openBook:ua,setSpeed:s=>{e=s}}}x_();
