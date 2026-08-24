(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="169",nc=0,to=1,ic=2,vl=1,yl=2,cn=3,En=0,De=1,He=2,Mn=0,gi=1,Ke=2,eo=3,no=4,sc=5,Bn=100,ac=101,rc=102,oc=103,lc=104,cc=200,hc=201,dc=202,uc=203,ka=204,Oa=205,fc=206,pc=207,mc=208,gc=209,_c=210,xc=211,vc=212,yc=213,Mc=214,Ba=0,za=1,Ga=2,Mi=3,Ha=4,Va=5,Wa=6,Xa=7,Cr=0,Sc=1,bc=2,Sn=0,wc=1,Ec=2,Tc=3,Ml=4,Ac=5,Rc=6,Cc=7,Sl=300,Si=301,bi=302,qa=303,Ya=304,Gs=306,Ds=1e3,Gn=1001,$a=1002,Le=1003,Pc=1004,Ki=1005,je=1006,Qs=1007,Hn=1008,un=1009,bl=1010,wl=1011,Xi=1012,Pr=1013,Wn=1014,tn=1015,qi=1016,Lr=1017,Dr=1018,wi=1020,El=35902,Tl=1021,Al=1022,Ze=1023,Rl=1024,Cl=1025,_i=1026,Ei=1027,Ir=1028,Ur=1029,Pl=1030,Nr=1031,Fr=1033,Es=33776,Ts=33777,As=33778,Rs=33779,Ka=35840,ja=35841,Za=35842,Ja=35843,Qa=36196,tr=37492,er=37496,nr=37808,ir=37809,sr=37810,ar=37811,rr=37812,or=37813,lr=37814,cr=37815,hr=37816,dr=37817,ur=37818,fr=37819,pr=37820,mr=37821,Cs=36492,gr=36494,_r=36495,Ll=36283,xr=36284,vr=36285,yr=36286,Lc=3200,Dc=3201,kr=0,Ic=1,yn="",Oe="srgb",An="srgb-linear",Or="display-p3",Hs="display-p3-linear",Is="linear",ce="srgb",Us="rec709",Ns="p3",$n=7680,io=519,Uc=512,Nc=513,Fc=514,Dl=515,kc=516,Oc=517,Bc=518,zc=519,Mr=35044,Sr=35048,so="300 es",dn=2e3,Fs=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,br=180/Math.PI;function bn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Gc(s,t){return(s%t+t)%t}function ea(s,t,e){return(1-e)*s+e*t}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,a,r,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],M=i[1],v=i[4],S=i[7],C=i[2],T=i[5],R=i[8];return a[0]=r*x+o*M+l*C,a[3]=r*m+o*v+l*T,a[6]=r*p+o*S+l*R,a[1]=c*x+h*M+d*C,a[4]=c*m+h*v+d*T,a[7]=c*p+h*S+d*R,a[2]=u*x+f*M+g*C,a[5]=u*m+f*v+g*T,a[8]=u*p+f*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,f=c*a-r*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*r)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*a-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Ft;function Il(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hc(){const s=ks("canvas");return s.style.display="block",s}const ao={};function Ps(s){s in ao||(ao[s]=!0,console.warn(s))}function Vc(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Wc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ro=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oo=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Li={[An]:{transfer:Is,primaries:Us,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Oe]:{transfer:ce,primaries:Us,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hs]:{transfer:Is,primaries:Ns,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(oo),fromReference:s=>s.applyMatrix3(ro)},[Or]:{transfer:ce,primaries:Ns,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(oo),fromReference:s=>s.applyMatrix3(ro).convertLinearToSRGB()}},qc=new Set([An,Hs]),te={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!qc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Li[t].toReference,i=Li[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Li[s].primaries},getTransfer:function(s){return s===yn?Is:Li[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Li[t].luminanceCoefficients)}};function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Kn;class Yc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kn===void 0&&(Kn=ks("canvas")),Kn.width=t.width,Kn.height=t.height;const n=Kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=xi(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $c=0;class Ul{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(sa(i[r].image)):a.push(sa(i[r]))}else a=sa(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kc=0;class be extends Ai{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Gn,i=Gn,a=je,r=Hn,o=Ze,l=un,c=be.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=bn(),this.name="",this.source=new Ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ds:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ds:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Sl;be.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(f+1)/2,C=(p+1)/2,T=(h+u)/4,R=(d+x)/4,D=(g+m)/4;return v>S&&v>C?v<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(v),i=T/n,a=R/n):S>C?S<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(S),n=T/i,a=D/i):C<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(C),n=R/a,i=D/a),this.set(n,i,a,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jc extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nl extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zc extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=a[r+0],f=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*x,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,p*M);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const S=o*M;if(l=l*m+u*S,c=c*m+f*S,h=h*m+g*S,d=d*m+x*S,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=a[r],u=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(a/2),u=l(n/2),f=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(a-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-i)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),d=2*(a*n-r*e);return this.x=e+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=i+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new P,lo=new Ri;class qn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,qe):qe.fromBufferAttribute(a,r),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),Zi.subVectors(this.max,Di),jn.subVectors(t.a,Di),Zn.subVectors(t.b,Di),Jn.subVectors(t.c,Di),pn.subVectors(Zn,jn),mn.subVectors(Jn,Zn),Pn.subVectors(jn,Jn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Pn.z,Pn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Pn.z,0,-Pn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Pn.y,Pn.x,0];return!ra(e,jn,Zn,Jn,Zi)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,jn,Zn,Jn,Zi))?!1:(Ji.crossVectors(pn,mn),e=[Ji.x,Ji.y,Ji.z],ra(e,jn,Zn,Jn,Zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sn=[new P,new P,new P,new P,new P,new P,new P,new P],qe=new P,ji=new qn,jn=new P,Zn=new P,Jn=new P,pn=new P,mn=new P,Pn=new P,Di=new P,Zi=new P,Ji=new P,Ln=new P;function ra(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Ln.fromArray(s,a);const o=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Jc=new qn,Ii=new P,oa=new P;class Ci{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jc.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(oa)),this.expandByPoint(Ii.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new P,la=new P,Qi=new P,gn=new P,ca=new P,ts=new P,ha=new P;class Br{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){la.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(la);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Qi),o=gn.dot(this.direction),l=-gn.dot(Qi),c=gn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(la).addScaledVector(Qi,u),f}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,a){ca.subVectors(e,t),ts.subVectors(n,t),ha.crossVectors(ca,ts);let r=this.direction.dot(ha),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;gn.subVectors(this.origin,t);const l=o*this.direction.dot(ts.crossVectors(gn,ts));if(l<0)return null;const c=o*this.direction.dot(ca.cross(gn));if(c<0||l+c>r)return null;const h=-o*gn.dot(ha);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,i,a,r,o,l,c,h,d,u,f,g,x,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,d,u,f,g,x,m)}set(t,e,n,i,a,r,o,l,c,h,d,u,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qn.setFromMatrixColumn(t,0).length(),a=1/Qn.setFromMatrixColumn(t,1).length(),r=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,f=r*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-r*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=x-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=r*l,f=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qc,t,th)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),_n.crossVectors(n,Fe),_n.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),_n.crossVectors(n,Fe)),_n.normalize(),es.crossVectors(Fe,_n),i[0]=_n.x,i[4]=es.x,i[8]=Fe.x,i[1]=_n.y,i[5]=es.y,i[9]=Fe.y,i[2]=_n.z,i[6]=es.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],v=n[7],S=n[11],C=n[15],T=i[0],R=i[4],D=i[8],W=i[12],_=i[1],w=i[5],k=i[9],z=i[13],X=i[2],j=i[6],G=i[10],Q=i[14],H=i[3],ot=i[7],rt=i[11],pt=i[15];return a[0]=r*T+o*_+l*X+c*H,a[4]=r*R+o*w+l*j+c*ot,a[8]=r*D+o*k+l*G+c*rt,a[12]=r*W+o*z+l*Q+c*pt,a[1]=h*T+d*_+u*X+f*H,a[5]=h*R+d*w+u*j+f*ot,a[9]=h*D+d*k+u*G+f*rt,a[13]=h*W+d*z+u*Q+f*pt,a[2]=g*T+x*_+m*X+p*H,a[6]=g*R+x*w+m*j+p*ot,a[10]=g*D+x*k+m*G+p*rt,a[14]=g*W+x*z+m*Q+p*pt,a[3]=M*T+v*_+S*X+C*H,a[7]=M*R+v*w+S*j+C*ot,a[11]=M*D+v*k+S*G+C*rt,a[15]=M*W+v*z+S*Q+C*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+a*l*d-i*c*d-a*o*u+n*c*u+i*o*f-n*l*f)+x*(+e*l*f-e*c*u+a*r*u-i*r*f+i*c*h-a*l*h)+m*(+e*c*d-e*o*f-a*r*d+n*r*f+a*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=d*m*c-x*u*c+x*l*f-o*m*f-d*l*p+o*u*p,v=g*u*c-h*m*c-g*l*f+r*m*f+h*l*p-r*u*p,S=h*x*c-g*d*c+g*o*f-r*x*f-h*o*p+r*d*p,C=g*d*l-h*x*l-g*o*u+r*x*u+h*o*m-r*d*m,T=e*M+n*v+i*S+a*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=M*R,t[1]=(x*u*a-d*m*a-x*i*f+n*m*f+d*i*p-n*u*p)*R,t[2]=(o*m*a-x*l*a+x*i*c-n*m*c-o*i*p+n*l*p)*R,t[3]=(d*l*a-o*u*a-d*i*c+n*u*c+o*i*f-n*l*f)*R,t[4]=v*R,t[5]=(h*m*a-g*u*a+g*i*f-e*m*f-h*i*p+e*u*p)*R,t[6]=(g*l*a-r*m*a-g*i*c+e*m*c+r*i*p-e*l*p)*R,t[7]=(r*u*a-h*l*a+h*i*c-e*u*c-r*i*f+e*l*f)*R,t[8]=S*R,t[9]=(g*d*a-h*x*a-g*n*f+e*x*f+h*n*p-e*d*p)*R,t[10]=(r*x*a-g*o*a+g*n*c-e*x*c-r*n*p+e*o*p)*R,t[11]=(h*o*a-r*d*a-h*n*c+e*d*c+r*n*f-e*o*f)*R,t[12]=C*R,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*m+e*d*m)*R,t[14]=(g*o*i-r*x*i-g*n*l+e*x*l+r*n*m-e*o*m)*R,t[15]=(r*d*i-h*o*i+h*n*l-e*d*l-r*n*u+e*o*u)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,u=a*c,f=a*h,g=a*d,x=r*h,m=r*d,p=o*d,M=l*c,v=l*h,S=l*d,C=n.x,T=n.y,R=n.z;return i[0]=(1-(x+p))*C,i[1]=(f+S)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(u+p))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+v)*R,i[9]=(m-M)*R,i[10]=(1-(u+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=Qn.set(i[0],i[1],i[2]).length();const r=Qn.set(i[4],i[5],i[6]).length(),o=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/a,h=1/r,d=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=dn){const l=this.elements,c=2*a/(e-t),h=2*a/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(o===dn)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Fs)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=dn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(r-a),u=(e+t)*c,f=(n+i)*h;let g,x;if(o===dn)g=(r+a)*d,x=-2*d;else if(o===Fs)g=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new P,Ye=new Zt,Qc=new P(0,0,0),th=new P(1,1,1),_n=new P,es=new P,Fe=new P,co=new Zt,ho=new Ri;class We{constructor(t=0,e=0,n=0,i=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return co.makeRotationFromQuaternion(t),this.setFromRotationMatrix(co,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ho.setFromEuler(this),this.setFromQuaternion(ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class zr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eh=0;const uo=new P,ti=new Ri,rn=new Zt,ns=new P,Ui=new P,nh=new P,ih=new Ri,fo=new P(1,0,0),po=new P(0,1,0),mo=new P(0,0,1),go={type:"added"},sh={type:"removed"},ei={type:"childadded",child:null},da={type:"childremoved",child:null};class me extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new P,e=new We,n=new Ri,i=new P(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ft}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(fo,t)}rotateY(t){return this.rotateOnAxis(po,t)}rotateZ(t){return this.rotateOnAxis(mo,t)}translateOnAxis(t,e){return uo.copy(t).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fo,t)}translateY(t){return this.translateOnAxis(po,t)}translateZ(t){return this.translateOnAxis(mo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ui,ns,this.up):rn.lookAt(ns,Ui,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(rn),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(go),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sh),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(go),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new P(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new P,on=new P,ua=new P,ln=new P,ni=new P,ii=new P,_o=new P,fa=new P,pa=new P,ma=new P,ga=new se,_a=new se,xa=new se;class Ve{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){$e.subVectors(i,e),on.subVectors(n,e),ua.subVectors(t,e);const r=$e.dot($e),o=$e.dot(on),l=$e.dot(ua),c=on.dot(on),h=on.dot(ua),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ln.x),l.addScaledVector(r,ln.y),l.addScaledVector(o,ln.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return ga.setScalar(0),_a.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,n),xa.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ga,a.x),r.addScaledVector(_a,a.y),r.addScaledVector(xa,a.z),r}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),on.subVectors(t,e),$e.cross(on).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),on.subVectors(this.a,this.b),$e.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;ni.subVectors(i,n),ii.subVectors(a,n),fa.subVectors(t,n);const l=ni.dot(fa),c=ii.dot(fa);if(l<=0&&c<=0)return e.copy(n);pa.subVectors(t,i);const h=ni.dot(pa),d=ii.dot(pa);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ni,r);ma.subVectors(t,a);const f=ni.dot(ma),g=ii.dot(ma);if(g>=0&&f<=g)return e.copy(a);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ii,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return _o.subVectors(a,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(_o,o);const p=1/(m+x+u);return r=x*p,o=u*p,e.copy(n).addScaledVector(ni,r).addScaledVector(ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},is={h:0,s:0,l:0};function va(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Gc(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=va(r,a,t+1/3),this.g=va(r,a,t),this.b=va(r,a,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return te.fromWorkingColorSpace(Se.copy(this),t),Math.round(Pe(Se.r*255,0,255))*65536+Math.round(Pe(Se.g*255,0,255))*256+Math.round(Pe(Se.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,i=Se.g,a=Se.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-n)/d+2;break;case a:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Oe){te.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,i=Se.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(is);const n=ea(xn.h,is.h,e),i=ea(xn.s,is.s,e),a=ea(xn.l,is.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new kt;kt.NAMES=Fl;let ah=0;class Rn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=gi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Oa,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new P,ss=new Lt;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mr,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),a=ie(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mr&&(t.usage=this.usage),t}}class kl extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ol extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rh=0;const Ge=new Zt,ya=new me,si=new P,ke=new qn,Ni=new qn,xe=new P;class ve extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?Ol:kl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ft().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new he(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];ke.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(ke.min,Ni.min),ke.expandByPoint(xe),xe.addVectors(ke.max,Ni.max),ke.expandByPoint(xe)):(ke.expandByPoint(Ni.min),ke.expandByPoint(Ni.max))}ke.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)xe.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(si.fromBufferAttribute(t,c),xe.add(si)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;const c=new P,h=new P,d=new P,u=new Lt,f=new Lt,g=new Lt,x=new P,m=new P;function p(D,W,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,W),d.fromBufferAttribute(n,_),u.fromBufferAttribute(a,D),f.fromBufferAttribute(a,W),g.fromBufferAttribute(a,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[D].add(x),o[W].add(x),o[_].add(x),l[D].add(m),l[W].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,W=M.length;D<W;++D){const _=M[D],w=_.start,k=_.count;for(let z=w,X=w+k;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new P,S=new P,C=new P,T=new P;function R(D){C.fromBufferAttribute(i,D),T.copy(C);const W=o[D];v.copy(W),v.sub(C.multiplyScalar(C.dot(W))).normalize(),S.crossVectors(T,W);const w=S.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,w)}for(let D=0,W=M.length;D<W;++D){const _=M[D],w=_.start,k=_.count;for(let z=w,X=w+k;z<X;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new we(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new Zt,Dn=new Br,as=new Ci,vo=new P,rs=new P,os=new P,ls=new P,Ma=new P,cs=new P,yo=new P,hs=new P;class Z extends me{constructor(t=new ve,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){cs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ma.fromBufferAttribute(d,t),r?cs.addScaledVector(Ma,h):cs.addScaledVector(Ma.sub(e),h))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(a),Dn.copy(t.ray).recast(t.near),!(as.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(as,vo)===null||Dn.origin.distanceToSquared(vo)>(t.far-t.near)**2))&&(xo.copy(a).invert(),Dn.copy(t.ray).applyMatrix4(xo),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,C=v;S<C;S+=3){const T=o.getX(S),R=o.getX(S+1),D=o.getX(S+2);i=ds(this,p,t,n,c,h,d,T,R,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=ds(this,r,t,n,c,h,d,M,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,C=v;S<C;S+=3){const T=S,R=S+1,D=S+2;i=ds(this,p,t,n,c,h,d,T,R,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,v=m+1,S=m+2;i=ds(this,r,t,n,c,h,d,M,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function oh(s,t,e,n,i,a,r,o){let l;if(t.side===De?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===En,o),l===null)return null;hs.copy(o),hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:s}}function ds(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,rs),s.getVertexPosition(l,os),s.getVertexPosition(c,ls);const h=oh(s,t,e,n,rs,os,ls,yo);if(h){const d=new P;Ve.getBarycoord(yo,rs,os,ls,d),i&&(h.uv=Ve.getInterpolatedAttribute(i,o,l,c,d,new Lt)),a&&(h.uv1=Ve.getInterpolatedAttribute(a,o,l,c,d,new Lt)),r&&(h.normal=Ve.getInterpolatedAttribute(r,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Ve.getNormal(rs,os,ls,u.normal),h.face=u,h.barycoord=d}return h}class xt extends ve{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function g(x,m,p,M,v,S,C,T,R,D,W){const _=S/R,w=C/D,k=S/2,z=C/2,X=T/2,j=R+1,G=D+1;let Q=0,H=0;const ot=new P;for(let rt=0;rt<G;rt++){const pt=rt*w-z;for(let Ot=0;Ot<j;Ot++){const Ht=Ot*_-k;ot[x]=Ht*M,ot[m]=pt*v,ot[p]=X,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[p]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Ot/R),d.push(1-rt/D),Q+=1}}for(let rt=0;rt<D;rt++)for(let pt=0;pt<R;pt++){const Ot=u+pt+j*rt,Ht=u+pt+j*(rt+1),q=u+(pt+1)+j*(rt+1),et=u+(pt+1)+j*rt;l.push(Ot,Ht,et),l.push(Ht,q,et),H+=6}o.addGroup(f,H,W),f+=H,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=Ti(s[e]);for(const i in n)t[i]=n[i]}return t}function lh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ch={clone:Ti,merge:Te};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=lh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zl extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new P,Mo=new Lt,So=new Lt;class Be extends zl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,Mo,So),e.subVectors(So,Mo)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ta*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,ri=1;class uh extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(ai,ri,t,e);i.layers=this.layers,this.add(i);const a=new Be(ai,ri,t,e);a.layers=this.layers,this.add(a);const r=new Be(ai,ri,t,e);r.layers=this.layers,this.add(r);const o=new Be(ai,ri,t,e);o.layers=this.layers,this.add(o);const l=new Be(ai,ri,t,e);l.layers=this.layers,this.add(l);const c=new Be(ai,ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gl extends be{constructor(t,e,n,i,a,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xt(5,5,5),a=new Tn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Mn});a.uniforms.tEquirect.value=e;const r=new Z(i,a),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=je),new uh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const Sa=new P,ph=new P,mh=new Ft;class kn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Sa.subVectors(n,e).cross(ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mh.getNormalMatrix(t),i=this.coplanarPoint(Sa).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ci,us=new P;class Gr{constructor(t=new kn,e=new kn,n=new kn,i=new kn,a=new kn,r=new kn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-a,u-c,m-f,S-p).normalize(),n[1].setComponents(l+a,u+c,m+f,S+p).normalize(),n[2].setComponents(l+r,u+h,m+g,S+M).normalize(),n[3].setComponents(l-r,u-h,m-g,S-M).normalize(),n[4].setComponents(l-o,u-d,m-x,S-v).normalize(),e===dn)n[5].setComponents(l+o,u+d,m+x,S+v).normalize();else if(e===Fs)n[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hl(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function gh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class Vn extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*u-r;for(let v=0;v<c;v++){const S=v*d-a;g.push(S,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const v=M+c*p,S=M+c*(p+1),C=M+1+c*(p+1),T=M+1+c*p;f.push(v,S,T),f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.widthSegments,t.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
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
#endif`,vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bh=`#ifdef USE_AOMAP
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
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
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
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zh=`#define PI 3.141592653589793
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
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hh=`vec3 transformedNormal = objectNormal;
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
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
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
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
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
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
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
#endif`,md=`struct PhysicalMaterial {
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
}`,gd=`
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Td=`#if defined( USE_POINTS_UV )
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
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
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
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eu=`float getShadowMask() {
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
}`,nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iu=`#ifdef USE_SKINNING
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
#endif`,su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,au=`#ifdef USE_SKINNING
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
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hu=`#ifdef USE_TRANSMISSION
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
#endif`,du=`#ifdef USE_TRANSMISSION
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
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_u=`uniform sampler2D t2D;
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
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`#include <common>
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
}`,bu=`#if DEPTH_PACKING == 3200
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
}`,wu=`#define DISTANCE
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
}`,Eu=`#define DISTANCE
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
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`uniform float scale;
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
}`,Cu=`uniform vec3 diffuse;
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
}`,Pu=`#include <common>
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
}`,Lu=`uniform vec3 diffuse;
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
}`,Du=`#define LAMBERT
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
}`,Iu=`#define LAMBERT
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
}`,Uu=`#define MATCAP
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
}`,Nu=`#define MATCAP
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
}`,Fu=`#define NORMAL
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
}`,ku=`#define NORMAL
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
}`,Ou=`#define PHONG
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
}`,Bu=`#define PHONG
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
}`,zu=`#define STANDARD
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
}`,Gu=`#define STANDARD
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
}`,Hu=`#define TOON
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
}`,Vu=`#define TOON
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
}`,Wu=`uniform float size;
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
}`,Xu=`uniform vec3 diffuse;
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
}`,qu=`#include <common>
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
}`,Yu=`uniform vec3 color;
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
}`,$u=`uniform float rotation;
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:_h,alphahash_pars_fragment:xh,alphamap_fragment:vh,alphamap_pars_fragment:yh,alphatest_fragment:Mh,alphatest_pars_fragment:Sh,aomap_fragment:bh,aomap_pars_fragment:wh,batching_pars_vertex:Eh,batching_vertex:Th,begin_vertex:Ah,beginnormal_vertex:Rh,bsdfs:Ch,iridescence_fragment:Ph,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:kh,color_pars_vertex:Oh,color_vertex:Bh,common:zh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:$h,envmap_fragment:Kh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Zh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:cd,envmap_vertex:Qh,fog_vertex:td,fog_pars_vertex:ed,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:ad,lights_lambert_fragment:rd,lights_lambert_pars_fragment:od,lights_pars_begin:ld,lights_toon_fragment:hd,lights_toon_pars_fragment:dd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:xd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:bd,map_pars_fragment:wd,map_particle_fragment:Ed,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Rd,morphinstance_vertex:Cd,morphcolor_vertex:Pd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Dd,morphtarget_vertex:Id,normal_fragment_begin:Ud,normal_fragment_maps:Nd,normal_pars_fragment:Fd,normal_pars_vertex:kd,normal_vertex:Od,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:$d,dithering_pars_fragment:Kd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:tu,shadowmask_pars_fragment:eu,skinbase_vertex:nu,skinning_pars_vertex:iu,skinning_vertex:su,skinnormal_vertex:au,specularmap_fragment:ru,specularmap_pars_fragment:ou,tonemapping_fragment:lu,tonemapping_pars_fragment:cu,transmission_fragment:hu,transmission_pars_fragment:du,uv_pars_fragment:uu,uv_pars_vertex:fu,uv_vertex:pu,worldpos_vertex:mu,background_vert:gu,background_frag:_u,backgroundCube_vert:xu,backgroundCube_frag:vu,cube_vert:yu,cube_frag:Mu,depth_vert:Su,depth_frag:bu,distanceRGBA_vert:wu,distanceRGBA_frag:Eu,equirect_vert:Tu,equirect_frag:Au,linedashed_vert:Ru,linedashed_frag:Cu,meshbasic_vert:Pu,meshbasic_frag:Lu,meshlambert_vert:Du,meshlambert_frag:Iu,meshmatcap_vert:Uu,meshmatcap_frag:Nu,meshnormal_vert:Fu,meshnormal_frag:ku,meshphong_vert:Ou,meshphong_frag:Bu,meshphysical_vert:zu,meshphysical_frag:Gu,meshtoon_vert:Hu,meshtoon_frag:Vu,points_vert:Wu,points_frag:Xu,shadow_vert:qu,shadow_frag:Yu,sprite_vert:$u,sprite_frag:Ku},st={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Je={basic:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Te([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Te([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Te([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Te([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Te([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Te([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Te([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Te([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Te([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Te([st.lights,st.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Je.physical={uniforms:Te([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const fs={r:0,b:0,g:0},Un=new We,ju=new Zt;function Zu(s,t,e,n,i,a,r){const o=new kt(0);let l=a===!0?0:1,c,h,d=null,u=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const S=g(M);S===null?p(o,l):S&&S.isColor&&(p(S,1),v=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Gs)?(h===void 0&&(h=new Z(new xt(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Ti(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Un.copy(v.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ju.makeRotationFromEuler(Un)),h.material.toneMapped=te.getTransfer(S.colorSpace)!==ce,(d!==S||u!==S.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Z(new Vn(2,2),new Tn({name:"BackgroundMaterial",uniforms:Ti(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==ce,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(fs,Bl(s)),n.buffers.color.setClear(fs.r,fs.g,fs.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:x,addToRenderList:m}}function Ju(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(_,w,k,z,X){let j=!1;const G=d(z,k,w);a!==G&&(a=G,c(a.object)),j=f(_,z,k,X),j&&g(_,z,k,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,S(_,w,k,z),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,w,k){const z=k.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let j=X[w.id];j===void 0&&(j={},X[w.id]=j);let G=j[z];return G===void 0&&(G=u(l()),j[z]=G),G}function u(_){const w=[],k=[],z=[];for(let X=0;X<e;X++)w[X]=0,k[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,w,k,z){const X=a.attributes,j=w.attributes;let G=0;const Q=k.getAttributes();for(const H in Q)if(Q[H].location>=0){const rt=X[H];let pt=j[H];if(pt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;G++}return a.attributesNum!==G||a.index!==z}function g(_,w,k,z){const X={},j=w.attributes;let G=0;const Q=k.getAttributes();for(const H in Q)if(Q[H].location>=0){let rt=j[H];rt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),X[H]=pt,G++}a.attributes=X,a.attributesNum=G,a.index=z}function x(){const _=a.newAttributes;for(let w=0,k=_.length;w<k;w++)_[w]=0}function m(_){p(_,0)}function p(_,w){const k=a.newAttributes,z=a.enabledAttributes,X=a.attributeDivisors;k[_]=1,z[_]===0&&(s.enableVertexAttribArray(_),z[_]=1),X[_]!==w&&(s.vertexAttribDivisor(_,w),X[_]=w)}function M(){const _=a.newAttributes,w=a.enabledAttributes;for(let k=0,z=w.length;k<z;k++)w[k]!==_[k]&&(s.disableVertexAttribArray(k),w[k]=0)}function v(_,w,k,z,X,j,G){G===!0?s.vertexAttribIPointer(_,w,k,X,j):s.vertexAttribPointer(_,w,k,z,X,j)}function S(_,w,k,z){x();const X=z.attributes,j=k.getAttributes(),G=w.defaultAttributeValues;for(const Q in j){const H=j[Q];if(H.location>=0){let ot=X[Q];if(ot===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){const rt=ot.normalized,pt=ot.itemSize,Ot=t.get(ot);if(Ot===void 0)continue;const Ht=Ot.buffer,q=Ot.type,et=Ot.bytesPerElement,vt=q===s.INT||q===s.UNSIGNED_INT||ot.gpuType===Pr;if(ot.isInterleavedBufferAttribute){const ut=ot.data,It=ut.stride,Tt=ot.offset;if(ut.isInstancedInterleavedBuffer){for(let Vt=0;Vt<H.locationSize;Vt++)p(H.location+Vt,ut.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Vt=0;Vt<H.locationSize;Vt++)m(H.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let Vt=0;Vt<H.locationSize;Vt++)v(H.location+Vt,pt/H.locationSize,q,rt,It*et,(Tt+pt/H.locationSize*Vt)*et,vt)}else{if(ot.isInstancedBufferAttribute){for(let ut=0;ut<H.locationSize;ut++)p(H.location+ut,ot.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ut=0;ut<H.locationSize;ut++)m(H.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let ut=0;ut<H.locationSize;ut++)v(H.location+ut,pt/H.locationSize,q,rt,pt*et,pt/H.locationSize*ut*et,vt)}}else if(G!==void 0){const rt=G[Q];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(H.location,rt);break;case 3:s.vertexAttrib3fv(H.location,rt);break;case 4:s.vertexAttrib4fv(H.location,rt);break;default:s.vertexAttrib1fv(H.location,rt)}}}}M()}function C(){D();for(const _ in n){const w=n[_];for(const k in w){const z=w[k];for(const X in z)h(z[X].object),delete z[X];delete w[k]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const k in w){const z=w[k];for(const X in z)h(z[X].object),delete z[X];delete w[k]}delete n[_.id]}function R(_){for(const w in n){const k=n[w];if(k[_.id]===void 0)continue;const z=k[_.id];for(const X in z)h(z[X].object),delete z[X];delete k[_.id]}}function D(){W(),r=!0,a!==i&&(a=i,c(a.object))}function W(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Qu(s,t,e){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tf(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==Ze&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==un&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tn&&!D)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function ef(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new kn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||a&&!m)a?h(null):c();else{const M=a?0:n,v=M*4;let S=p.clippingState||null;l.value=S,S=h(g,u,v,f);for(let C=0;C!==v;++C)S[C]=e[C];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=f;v!==x;++v,S+=4)r.copy(d[v]).applyMatrix4(M,o),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function nf(s){let t=new WeakMap;function e(r,o){return o===qa?r.mapping=Si:o===Ya&&(r.mapping=bi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===qa||o===Ya)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new fh(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Vl extends zl{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,bo=[.125,.215,.35,.446,.526,.582],zn=20,ba=new Vl,wo=new kt;let wa=null,Ea=0,Ta=0,Aa=!1;const On=(1+Math.sqrt(5))/2,oi=1/On,Eo=[new P(-On,oi,0),new P(On,oi,0),new P(-oi,0,On),new P(oi,0,On),new P(0,On,-oi),new P(0,On,oi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class To{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ea,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:qi,format:Ze,colorSpace:An,depthBuffer:!1},i=Ao(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(a)),this._blurMaterial=af(a,t,e)}return i}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(wo),h.toneMapping=Sn,h.autoClear=!1;const f=new en({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Z(new xt,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(wo),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;ps(i,M*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Si||t.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ro());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new Z(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Eo[(i-a-1)%Eo.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Z(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*zn-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):zn;m>zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const p=[];let M=0;for(let R=0;R<zn;++R){const D=R/x,W=Math.exp(-D*D/2);p.push(W),R===0?M+=W:R<m&&(M+=2*W)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const S=this._sizeLods[i],C=3*S*(i>v-mi?i-v+mi:0),T=4*(this._cubeSize-S);ps(e,C,T,3*S,2*S),l.setRenderTarget(e),l.render(d,ba)}}function sf(s){const t=[],e=[],n=[];let i=s;const a=s-mi+1+bo.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>s-mi?l=bo[r-s+mi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),v=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,D=T>2?0:-1,W=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];M.set(W,x*g*T),v.set(u,m*g*T);const _=[T,T,T,T,T,T];S.set(_,p*g*T)}const C=new ve;C.setAttribute("position",new we(M,x)),C.setAttribute("uv",new we(v,m)),C.setAttribute("faceIndex",new we(S,p)),t.push(C),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ao(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function af(s,t,e){const n=new Float32Array(zn),i=new P(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ro(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Co(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Hr(){return`

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
	`}function rf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qa||l===Ya,h=l===Si||l===bi;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new To(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new To(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function of(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lf(s,t,e,n){const i={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",r),delete i[u.id];const f=a.get(u);f&&(t.remove(f),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let v=0,S=M.length;v<S;v+=3){const C=M[v+0],T=M[v+1],R=M[v+2];u.push(C,T,T,R,R,C)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const C=v+0,T=v+1,R=v+2;u.push(C,T,T,R,R,C)}}else return;const m=new(Il(u)?Ol:kl)(u,1);m.version=x;const p=a.get(d);p&&t.remove(p),a.set(d,m)}function h(d){const u=a.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function cf(s,t,e){let n;function i(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,a,u*r),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,a,u*r,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,u,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<x.length;M++)e.update(p,n,x[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function hf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function df(s,t,e){const n=new WeakMap,i=new se;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let _=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var f=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let C=o.attributes.position.count*S,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*T*4*d),D=new Nl(R,C,T,d);D.type=tn,D.needsUpdate=!0;const W=S*4;for(let w=0;w<d;w++){const k=p[w],z=M[w],X=v[w],j=C*T*4*w;for(let G=0;G<k.count;G++){const Q=G*W;g===!0&&(i.fromBufferAttribute(k,G),R[j+Q+0]=i.x,R[j+Q+1]=i.y,R[j+Q+2]=i.z,R[j+Q+3]=0),x===!0&&(i.fromBufferAttribute(z,G),R[j+Q+4]=i.x,R[j+Q+5]=i.y,R[j+Q+6]=i.z,R[j+Q+7]=0),m===!0&&(i.fromBufferAttribute(X,G),R[j+Q+8]=i.x,R[j+Q+9]=i.y,R[j+Q+10]=i.z,R[j+Q+11]=X.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new Lt(C,T)},n.set(o,u),o.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function uf(s,t,e,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class Wl extends be{constructor(t,e,n,i,a,r,o,l,c,h=_i){if(h!==_i&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=Wn),n===void 0&&h===Ei&&(n=wi),super(null,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xl=new be,Po=new Wl(1,1),ql=new Nl,Yl=new Zc,$l=new Gl,Lo=[],Do=[],Io=new Float32Array(16),Uo=new Float32Array(9),No=new Float32Array(4);function Pi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=Lo[i];if(a===void 0&&(a=new Float32Array(i),Lo[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vs(s,t){let e=Do[t];e===void 0&&(e=new Int32Array(t),Do[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function _f(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;No.set(n),s.uniformMatrix2fv(this.addr,!1,No),_e(e,n)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Uo.set(n),s.uniformMatrix3fv(this.addr,!1,Uo),_e(e,n)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Io.set(n),s.uniformMatrix4fv(this.addr,!1,Io),_e(e,n)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function wf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Po.compareFunction=Dl,a=Po):a=Xl,e.setTexture2D(t||a,i)}function Cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yl,i)}function Pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$l,i)}function Lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ql,i)}function Df(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return xf;case 35676:return vf;case 5124:case 35670:return yf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return bf;case 5125:return wf;case 36294:return Ef;case 36295:return Tf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function If(s,t){s.uniform1fv(this.addr,t)}function Uf(s,t){const e=Pi(t,this.size,2);s.uniform2fv(this.addr,e)}function Nf(s,t){const e=Pi(t,this.size,3);s.uniform3fv(this.addr,e)}function Ff(s,t){const e=Pi(t,this.size,4);s.uniform4fv(this.addr,e)}function kf(s,t){const e=Pi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Of(s,t){const e=Pi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Bf(s,t){const e=Pi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zf(s,t){s.uniform1iv(this.addr,t)}function Gf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Vf(s,t){s.uniform4iv(this.addr,t)}function Wf(s,t){s.uniform1uiv(this.addr,t)}function Xf(s,t){s.uniform2uiv(this.addr,t)}function qf(s,t){s.uniform3uiv(this.addr,t)}function Yf(s,t){s.uniform4uiv(this.addr,t)}function $f(s,t,e){const n=this.cache,i=t.length,a=Vs(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),_e(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Xl,a[r])}function Kf(s,t,e){const n=this.cache,i=t.length,a=Vs(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),_e(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Yl,a[r])}function jf(s,t,e){const n=this.cache,i=t.length,a=Vs(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),_e(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||$l,a[r])}function Zf(s,t,e){const n=this.cache,i=t.length,a=Vs(e,i);ge(n,a)||(s.uniform1iv(this.addr,a),_e(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||ql,a[r])}function Jf(s){switch(s){case 5126:return If;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return kf;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return Gf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Df(e.type)}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Fo(s,t){s.seq.push(t),s.map[t.id]=t}function np(s,t,e){const n=s.name,i=n.length;for(Ra.lastIndex=0;;){const a=Ra.exec(n),r=Ra.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Fo(e,c===void 0?new Qf(o,s,t):new tp(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new ep(o),Fo(e,d)),e=d}}}class Ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);np(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function ko(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ip=37297;let sp=0;function ap(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function rp(s){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s);let n;switch(t===e?n="":t===Ns&&e===Us?n="LinearDisplayP3ToLinearSRGB":t===Us&&e===Ns&&(n="LinearSRGBToLinearDisplayP3"),s){case An:case Hs:return[n,"LinearTransferOETF"];case Oe:case Or:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Oo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+ap(s.getShaderSource(t),r)}else return i}function op(s,t){const e=rp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lp(s,t){let e;switch(t){case wc:e="Linear";break;case Ec:e="Reinhard";break;case Tc:e="Cineon";break;case Ml:e="ACESFilmic";break;case Rc:e="AgX";break;case Cc:e="Neutral";break;case Ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ms=new P;function cp(){te.getLuminanceCoefficients(ms);const s=ms.x.toFixed(4),t=ms.y.toFixed(4),e=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function dp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function up(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Vi(s){return s!==""}function Bo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(s){return s.replace(fp,mp)}const pp=new Map;function mp(s,t){let e=Nt[t];if(e===void 0){const n=pp.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wr(e)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Go(s){return s.replace(gp,_p)}function _p(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Ho(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function vp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case bi:t="ENVMAP_TYPE_CUBE";break;case Gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Mp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cr:t="ENVMAP_BLENDING_MULTIPLY";break;case Sc:t="ENVMAP_BLENDING_MIX";break;case bc:t="ENVMAP_BLENDING_ADD";break}return t}function Sp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bp(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=xp(e),c=vp(e),h=yp(e),d=Mp(e),u=Sp(e),f=hp(e),g=dp(a),x=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),p.length>0&&(p+=`
`)):(m=[Ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),p=[Ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,op("linearToOutputTexel",e.outputColorSpace),cp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),r=wr(r),r=Bo(r,e),r=zo(r,e),o=wr(o),o=Bo(o,e),o=zo(o,e),r=Go(r),o=Go(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===so?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===so?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+r,S=M+p+o,C=ko(i,i.VERTEX_SHADER,v),T=ko(i,i.FRAGMENT_SHADER,S);i.attachShader(x,C),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(w){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(x).trim(),z=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(T).trim();let j=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,T);else{const Q=Oo(i,C,"vertex"),H=Oo(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+Q+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||X==="")&&(G=!1);G&&(w.diagnostics={runnable:j,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(C),i.deleteShader(T),D=new Ls(i,x),W=up(i,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let W;this.getAttributes=function(){return W===void 0&&R(this),W};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,ip)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}let wp=0;class Ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tp(t),e.set(t,n)),n}}class Tp{constructor(t){this.id=wp++,this.code=t,this.usedTimes=0}}function Ap(s,t,e,n,i,a,r){const o=new zr,l=new Ep,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,w,k,z,X){const j=z.fog,G=X.geometry,Q=_.isMeshStandardMaterial?z.environment:null,H=(_.isMeshStandardMaterial?e:t).get(_.envMap||Q),ot=H&&H.mapping===Gs?H.image.height:null,rt=x[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ot=pt!==void 0?pt.length:0;let Ht=0;G.morphAttributes.position!==void 0&&(Ht=1),G.morphAttributes.normal!==void 0&&(Ht=2),G.morphAttributes.color!==void 0&&(Ht=3);let q,et,vt,ut;if(rt){const Ce=Je[rt];q=Ce.vertexShader,et=Ce.fragmentShader}else q=_.vertexShader,et=_.fragmentShader,l.update(_),vt=l.getVertexShaderID(_),ut=l.getFragmentShaderID(_);const It=s.getRenderTarget(),Tt=X.isInstancedMesh===!0,Vt=X.isBatchedMesh===!0,ne=!!_.map,Wt=!!_.matcap,L=!!H,Ie=!!_.aoMap,Bt=!!_.lightMap,Yt=!!_.bumpMap,Rt=!!_.normalMap,oe=!!_.displacementMap,Dt=!!_.emissiveMap,A=!!_.metalnessMap,y=!!_.roughnessMap,F=_.anisotropy>0,K=_.clearcoat>0,tt=_.dispersion>0,Y=_.iridescence>0,St=_.sheen>0,at=_.transmission>0,ft=F&&!!_.anisotropyMap,$t=K&&!!_.clearcoatMap,nt=K&&!!_.clearcoatNormalMap,mt=K&&!!_.clearcoatRoughnessMap,Ct=Y&&!!_.iridescenceMap,Pt=Y&&!!_.iridescenceThicknessMap,gt=St&&!!_.sheenColorMap,zt=St&&!!_.sheenRoughnessMap,Ut=!!_.specularMap,ae=!!_.specularColorMap,I=!!_.specularIntensityMap,ht=at&&!!_.transmissionMap,V=at&&!!_.thicknessMap,J=!!_.gradientMap,lt=!!_.alphaMap,dt=_.alphaTest>0,Xt=!!_.alphaHash,fe=!!_.extensions;let Re=Sn;_.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(Re=s.toneMapping);const Kt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:et,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Vt,batchingColor:Vt&&X._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&X.instanceColor!==null,instancingMorph:Tt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:It===null?s.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:An,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:Wt,envMap:L,envMapMode:L&&H.mapping,envMapCubeUVHeight:ot,aoMap:Ie,lightMap:Bt,bumpMap:Yt,normalMap:Rt,displacementMap:f&&oe,emissiveMap:Dt,normalMapObjectSpace:Rt&&_.normalMapType===Ic,normalMapTangentSpace:Rt&&_.normalMapType===kr,metalnessMap:A,roughnessMap:y,anisotropy:F,anisotropyMap:ft,clearcoat:K,clearcoatMap:$t,clearcoatNormalMap:nt,clearcoatRoughnessMap:mt,dispersion:tt,iridescence:Y,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:St,sheenColorMap:gt,sheenRoughnessMap:zt,specularMap:Ut,specularColorMap:ae,specularIntensityMap:I,transmission:at,transmissionMap:ht,thicknessMap:V,gradientMap:J,opaque:_.transparent===!1&&_.blending===gi&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:Xt,combine:_.combine,mapUv:ne&&m(_.map.channel),aoMapUv:Ie&&m(_.aoMap.channel),lightMapUv:Bt&&m(_.lightMap.channel),bumpMapUv:Yt&&m(_.bumpMap.channel),normalMapUv:Rt&&m(_.normalMap.channel),displacementMapUv:oe&&m(_.displacementMap.channel),emissiveMapUv:Dt&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:y&&m(_.roughnessMap.channel),anisotropyMapUv:ft&&m(_.anisotropyMap.channel),clearcoatMapUv:$t&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:zt&&m(_.sheenRoughnessMap.channel),specularMapUv:Ut&&m(_.specularMap.channel),specularColorMapUv:ae&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:ht&&m(_.transmissionMap.channel),thicknessMapUv:V&&m(_.thicknessMap.channel),alphaMapUv:lt&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Rt||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(ne||lt),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===He,flipSided:_.side===De,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function M(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)w.push(k),w.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(w,_),S(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){const w=x[_.type];let k;if(w){const z=Je[w];k=ch.clone(z.uniforms)}else k=_.uniforms;return k}function T(_,w){let k;for(let z=0,X=h.length;z<X;z++){const j=h[z];if(j.cacheKey===w){k=j,++k.usedTimes;break}}return k===void 0&&(k=new bp(s,w,_,a),h.push(k)),k}function R(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function D(_){l.remove(_)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:C,acquireProgram:T,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:W}}function Rp(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function Cp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Vo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Wo(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,f,g,x,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function o(d,u,f,g,x,m){const p=r(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,x,m){const p=r(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Cp),n.length>1&&n.sort(u||Vo),i.length>1&&i.sort(u||Vo)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function Pp(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Wo,s.set(n,[r])):i>=a.length?(r=new Wo,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ip=0;function Up(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Np(s){const t=new Lp,e=Dp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,a=new Zt,r=new Zt;function o(c){let h=0,d=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,v=0,S=0,C=0,T=0,R=0;c.sort(Up);for(let W=0,_=c.length;W<_;W++){const w=c[W],k=w.color,z=w.intensity,X=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=k.r*z,d+=k.g*z,u+=k.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],z);R++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,H=e.get(w);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=G,f++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(k).multiplyScalar(z),G.distance=X,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[x]=G;const Q=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,Q.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[x]=Q.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=j,S++}x++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(k).multiplyScalar(z),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=G,m++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const Q=w.shadow,H=e.get(w);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=w.shadow.matrix,v++}n.point[g]=G,g++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==v||D.numSpotShadows!==S||D.numSpotMaps!==C||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=v,D.numSpotShadows=S,D.numSpotMaps=C,D.numLightProbes=R,n.version=Ip++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Xo(s){const t=new Np(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Fp(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Xo(s),t.set(i,[o])):a>=r.length?(o=new Xo(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class kp extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Op extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
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
}`;function Gp(s,t,e){let n=new Gr;const i=new Lt,a=new Lt,r=new se,o=new kp({depthPacking:Dc}),l=new Op,c={},h=e.maxTextureSize,d={[En]:De,[De]:En,[He]:He},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Bp,fragmentShader:zp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Z(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(T,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const W=s.getRenderTarget(),_=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Mn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==cn&&this.type===cn,X=p===cn&&this.type!==cn;for(let j=0,G=T.length;j<G;j++){const Q=T[j],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ot=H.getFrameExtents();if(i.multiply(ot),a.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/ot.x),i.x=a.x*ot.x,H.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/ot.y),i.y=a.y*ot.y,H.mapSize.y=a.y)),H.map===null||z===!0||X===!0){const pt=this.type!==cn?{minFilter:Le,magFilter:Le}:{};H.map!==null&&H.map.dispose(),H.map=new Xn(i.x,i.y,pt),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const rt=H.getViewportCount();for(let pt=0;pt<rt;pt++){const Ot=H.getViewport(pt);r.set(a.x*Ot.x,a.y*Ot.y,a.x*Ot.z,a.y*Ot.w),k.viewport(r),H.updateMatrices(Q,pt),n=H.getFrustum(),S(R,D,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===cn&&M(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(W,_,w)};function M(T,R){const D=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,D,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,D,f,x,null)}function v(T,R,D,W){let _=null;const w=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=D.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=_.uuid,z=R.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let j=X[z];j===void 0&&(j=_.clone(),X[z]=j,R.addEventListener("dispose",C)),_=j}if(_.visible=R.visible,_.wireframe=R.wireframe,W===cn?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:d[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=s.properties.get(_);k.light=D}return _}function S(T,R,D,W,_){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===cn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const z=t.update(T),X=T.material;if(Array.isArray(X)){const j=z.groups;for(let G=0,Q=j.length;G<Q;G++){const H=j[G],ot=X[H.materialIndex];if(ot&&ot.visible){const rt=v(T,ot,W,_);T.onBeforeShadow(s,T,R,D,z,rt,H),s.renderBufferDirect(D,null,z,rt,T,H),T.onAfterShadow(s,T,R,D,z,rt,H)}}}else if(X.visible){const j=v(T,X,W,_);T.onBeforeShadow(s,T,R,D,z,j,null),s.renderBufferDirect(D,null,z,j,T,null),T.onAfterShadow(s,T,R,D,z,j,null)}}const k=T.children;for(let z=0,X=k.length;z<X;z++)S(k[z],R,D,W,_)}function C(T){T.target.removeEventListener("dispose",C);for(const D in c){const W=c[D],_=T.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}const Hp={[Ba]:za,[Ga]:Wa,[Ha]:Xa,[Mi]:Va,[za]:Ba,[Wa]:Ga,[Xa]:Ha,[Va]:Mi};function Vp(s){function t(){let I=!1;const ht=new se;let V=null;const J=new se(0,0,0,0);return{setMask:function(lt){V!==lt&&!I&&(s.colorMask(lt,lt,lt,lt),V=lt)},setLocked:function(lt){I=lt},setClear:function(lt,dt,Xt,fe,Re){Re===!0&&(lt*=fe,dt*=fe,Xt*=fe),ht.set(lt,dt,Xt,fe),J.equals(ht)===!1&&(s.clearColor(lt,dt,Xt,fe),J.copy(ht))},reset:function(){I=!1,V=null,J.set(-1,0,0,0)}}}function e(){let I=!1,ht=!1,V=null,J=null,lt=null;return{setReversed:function(dt){ht=dt},setTest:function(dt){dt?vt(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(dt){V!==dt&&!I&&(s.depthMask(dt),V=dt)},setFunc:function(dt){if(ht&&(dt=Hp[dt]),J!==dt){switch(dt){case Ba:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case Ga:s.depthFunc(s.LESS);break;case Mi:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Va:s.depthFunc(s.GEQUAL);break;case Wa:s.depthFunc(s.GREATER);break;case Xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=dt}},setLocked:function(dt){I=dt},setClear:function(dt){lt!==dt&&(s.clearDepth(dt),lt=dt)},reset:function(){I=!1,V=null,J=null,lt=null}}}function n(){let I=!1,ht=null,V=null,J=null,lt=null,dt=null,Xt=null,fe=null,Re=null;return{setTest:function(Kt){I||(Kt?vt(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(Kt){ht!==Kt&&!I&&(s.stencilMask(Kt),ht=Kt)},setFunc:function(Kt,Ce,nn){(V!==Kt||J!==Ce||lt!==nn)&&(s.stencilFunc(Kt,Ce,nn),V=Kt,J=Ce,lt=nn)},setOp:function(Kt,Ce,nn){(dt!==Kt||Xt!==Ce||fe!==nn)&&(s.stencilOp(Kt,Ce,nn),dt=Kt,Xt=Ce,fe=nn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){Re!==Kt&&(s.clearStencil(Kt),Re=Kt)},reset:function(){I=!1,ht=null,V=null,J=null,lt=null,dt=null,Xt=null,fe=null,Re=null}}}const i=new t,a=new e,r=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,m=null,p=null,M=null,v=null,S=null,C=null,T=new kt(0,0,0),R=0,D=!1,W=null,_=null,w=null,k=null,z=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=G>=2);let H=null,ot={};const rt=s.getParameter(s.SCISSOR_BOX),pt=s.getParameter(s.VIEWPORT),Ot=new se().fromArray(rt),Ht=new se().fromArray(pt);function q(I,ht,V,J){const lt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(I,dt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<V;Xt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(ht+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return dt}const et={};et[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),r.setClear(0),vt(s.DEPTH_TEST),a.setFunc(Mi),Bt(!1),Yt(to),vt(s.CULL_FACE),L(Mn);function vt(I){c[I]!==!0&&(s.enable(I),c[I]=!0)}function ut(I){c[I]!==!1&&(s.disable(I),c[I]=!1)}function It(I,ht){return h[I]!==ht?(s.bindFramebuffer(I,ht),h[I]=ht,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ht),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Tt(I,ht){let V=u,J=!1;if(I){V=d.get(ht),V===void 0&&(V=[],d.set(ht,V));const lt=I.textures;if(V.length!==lt.length||V[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Xt=lt.length;dt<Xt;dt++)V[dt]=s.COLOR_ATTACHMENT0+dt;V.length=lt.length,J=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,J=!0);J&&s.drawBuffers(V)}function Vt(I){return f!==I?(s.useProgram(I),f=I,!0):!1}const ne={[Bn]:s.FUNC_ADD,[ac]:s.FUNC_SUBTRACT,[rc]:s.FUNC_REVERSE_SUBTRACT};ne[oc]=s.MIN,ne[lc]=s.MAX;const Wt={[cc]:s.ZERO,[hc]:s.ONE,[dc]:s.SRC_COLOR,[ka]:s.SRC_ALPHA,[_c]:s.SRC_ALPHA_SATURATE,[mc]:s.DST_COLOR,[fc]:s.DST_ALPHA,[uc]:s.ONE_MINUS_SRC_COLOR,[Oa]:s.ONE_MINUS_SRC_ALPHA,[gc]:s.ONE_MINUS_DST_COLOR,[pc]:s.ONE_MINUS_DST_ALPHA,[xc]:s.CONSTANT_COLOR,[vc]:s.ONE_MINUS_CONSTANT_COLOR,[yc]:s.CONSTANT_ALPHA,[Mc]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,ht,V,J,lt,dt,Xt,fe,Re,Kt){if(I===Mn){g===!0&&(ut(s.BLEND),g=!1);return}if(g===!1&&(vt(s.BLEND),g=!0),I!==sc){if(I!==x||Kt!==D){if((m!==Bn||v!==Bn)&&(s.blendEquation(s.FUNC_ADD),m=Bn,v=Bn),Kt)switch(I){case gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ke:s.blendFunc(s.ONE,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ke:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,M=null,S=null,C=null,T.set(0,0,0),R=0,x=I,D=Kt}return}lt=lt||ht,dt=dt||V,Xt=Xt||J,(ht!==m||lt!==v)&&(s.blendEquationSeparate(ne[ht],ne[lt]),m=ht,v=lt),(V!==p||J!==M||dt!==S||Xt!==C)&&(s.blendFuncSeparate(Wt[V],Wt[J],Wt[dt],Wt[Xt]),p=V,M=J,S=dt,C=Xt),(fe.equals(T)===!1||Re!==R)&&(s.blendColor(fe.r,fe.g,fe.b,Re),T.copy(fe),R=Re),x=I,D=!1}function Ie(I,ht){I.side===He?ut(s.CULL_FACE):vt(s.CULL_FACE);let V=I.side===De;ht&&(V=!V),Bt(V),I.blending===gi&&I.transparent===!1?L(Mn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),i.setMask(I.colorWrite);const J=I.stencilWrite;r.setTest(J),J&&(r.setMask(I.stencilWriteMask),r.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),r.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){W!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),W=I)}function Yt(I){I!==nc?(vt(s.CULL_FACE),I!==_&&(I===to?s.cullFace(s.BACK):I===ic?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),_=I}function Rt(I){I!==w&&(j&&s.lineWidth(I),w=I)}function oe(I,ht,V){I?(vt(s.POLYGON_OFFSET_FILL),(k!==ht||z!==V)&&(s.polygonOffset(ht,V),k=ht,z=V)):ut(s.POLYGON_OFFSET_FILL)}function Dt(I){I?vt(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function A(I){I===void 0&&(I=s.TEXTURE0+X-1),H!==I&&(s.activeTexture(I),H=I)}function y(I,ht,V){V===void 0&&(H===null?V=s.TEXTURE0+X-1:V=H);let J=ot[V];J===void 0&&(J={type:void 0,texture:void 0},ot[V]=J),(J.type!==I||J.texture!==ht)&&(H!==V&&(s.activeTexture(V),H=V),s.bindTexture(I,ht||et[I]),J.type=I,J.texture=ht)}function F(){const I=ot[H];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){Ot.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ot.copy(I))}function gt(I){Ht.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ht.copy(I))}function zt(I,ht){let V=l.get(ht);V===void 0&&(V=new WeakMap,l.set(ht,V));let J=V.get(I);J===void 0&&(J=s.getUniformBlockIndex(ht,I.name),V.set(I,J))}function Ut(I,ht){const J=l.get(ht).get(I);o.get(ht)!==J&&(s.uniformBlockBinding(ht,J,I.__bindingPointIndex),o.set(ht,J))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},H=null,ot={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,m=null,p=null,M=null,v=null,S=null,C=null,T=new kt(0,0,0),R=0,D=!1,W=null,_=null,w=null,k=null,z=null,Ot.set(0,0,s.canvas.width,s.canvas.height),Ht.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),r.reset()}return{buffers:{color:i,depth:a,stencil:r},enable:vt,disable:ut,bindFramebuffer:It,drawBuffers:Tt,useProgram:Vt,setBlending:L,setMaterial:Ie,setFlipSided:Bt,setCullFace:Yt,setLineWidth:Rt,setPolygonOffset:oe,setScissorTest:Dt,activeTexture:A,bindTexture:y,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Ct,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:$t,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Pt,viewport:gt,reset:ae}}function qo(s,t,e,n){const i=Wp(n);switch(e){case Tl:return s*t;case Rl:return s*t;case Cl:return s*t*2;case Ir:return s*t/i.components*i.byteLength;case Ur:return s*t/i.components*i.byteLength;case Pl:return s*t*2/i.components*i.byteLength;case Nr:return s*t*2/i.components*i.byteLength;case Al:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case Fr:return s*t*4/i.components*i.byteLength;case Es:case Ts:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case As:case Rs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ja:case Ja:return Math.max(s,16)*Math.max(t,8)/4;case Ka:case Za:return Math.max(s,8)*Math.max(t,8)/2;case Qa:case tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ir:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ar:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case rr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case or:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case cr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ur:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case fr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case pr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case mr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Cs:case gr:case _r:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ll:case xr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vr:case yr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(s){switch(s){case un:case bl:return{byteLength:1,components:1};case Xi:case wl:case qi:return{byteLength:2,components:1};case Lr:case Dr:return{byteLength:2,components:4};case Wn:case Pr:case tn:return{byteLength:4,components:1};case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Xp(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):ks("canvas")}function x(A,y,F){let K=1;const tt=Dt(A);if((tt.width>F||tt.height>F)&&(K=F/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(K*tt.width),St=Math.floor(K*tt.height);d===void 0&&(d=g(Y,St));const at=y?g(Y,St):d;return at.width=Y,at.height=St,at.getContext("2d").drawImage(A,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+St+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Le&&A.minFilter!==je}function p(A){s.generateMipmap(A)}function M(A,y,F,K,tt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=y;if(y===s.RED&&(F===s.FLOAT&&(Y=s.R32F),F===s.HALF_FLOAT&&(Y=s.R16F),F===s.UNSIGNED_BYTE&&(Y=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.R8UI),F===s.UNSIGNED_SHORT&&(Y=s.R16UI),F===s.UNSIGNED_INT&&(Y=s.R32UI),F===s.BYTE&&(Y=s.R8I),F===s.SHORT&&(Y=s.R16I),F===s.INT&&(Y=s.R32I)),y===s.RG&&(F===s.FLOAT&&(Y=s.RG32F),F===s.HALF_FLOAT&&(Y=s.RG16F),F===s.UNSIGNED_BYTE&&(Y=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RG8UI),F===s.UNSIGNED_SHORT&&(Y=s.RG16UI),F===s.UNSIGNED_INT&&(Y=s.RG32UI),F===s.BYTE&&(Y=s.RG8I),F===s.SHORT&&(Y=s.RG16I),F===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),F===s.UNSIGNED_INT&&(Y=s.RGB32UI),F===s.BYTE&&(Y=s.RGB8I),F===s.SHORT&&(Y=s.RGB16I),F===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),F===s.UNSIGNED_INT&&(Y=s.RGBA32UI),F===s.BYTE&&(Y=s.RGBA8I),F===s.SHORT&&(Y=s.RGBA16I),F===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),y===s.RGBA){const St=tt?Is:te.getTransfer(K);F===s.FLOAT&&(Y=s.RGBA32F),F===s.HALF_FLOAT&&(Y=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Y=St===ce?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,y){let F;return A?y===null||y===Wn||y===wi?F=s.DEPTH24_STENCIL8:y===tn?F=s.DEPTH32F_STENCIL8:y===Xi&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wn||y===wi?F=s.DEPTH_COMPONENT24:y===tn?F=s.DEPTH_COMPONENT32F:y===Xi&&(F=s.DEPTH_COMPONENT16),F}function S(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==je?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&h.delete(y)}function T(A){const y=A.target;y.removeEventListener("dispose",T),W(y)}function R(A){const y=n.get(A);if(y.__webglInit===void 0)return;const F=A.source,K=u.get(F);if(K){const tt=K[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&D(A),Object.keys(K).length===0&&u.delete(F)}n.remove(A)}function D(A){const y=n.get(A);s.deleteTexture(y.__webglTexture);const F=A.source,K=u.get(F);delete K[y.__cacheKey],r.memory.textures--}function W(A){const y=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let tt=0;tt<y.__webglFramebuffer[K].length;tt++)s.deleteFramebuffer(y.__webglFramebuffer[K][tt]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=A.textures;for(let K=0,tt=F.length;K<tt;K++){const Y=n.get(F[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(F[K])}n.remove(A)}let _=0;function w(){_=0}function k(){const A=_;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),_+=1,A}function z(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const F=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(F,A,y);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function j(A,y){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Ht(F,A,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function G(A,y){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Ht(F,A,y);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function Q(A,y){const F=n.get(A);if(A.version>0&&F.__version!==A.version){q(F,A,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}const H={[Ds]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[$a]:s.MIRRORED_REPEAT},ot={[Le]:s.NEAREST,[Pc]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[Qs]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},rt={[Uc]:s.NEVER,[zc]:s.ALWAYS,[Nc]:s.LESS,[Dl]:s.LEQUAL,[Fc]:s.EQUAL,[Bc]:s.GEQUAL,[kc]:s.GREATER,[Oc]:s.NOTEQUAL};function pt(A,y){if(y.type===tn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===je||y.magFilter===Qs||y.magFilter===Ki||y.magFilter===Hn||y.minFilter===je||y.minFilter===Qs||y.minFilter===Ki||y.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,H[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,H[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,H[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ot[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ot[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Le||y.minFilter!==Ki&&y.minFilter!==Hn||y.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ot(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const K=y.source;let tt=u.get(K);tt===void 0&&(tt={},u.set(K,tt));const Y=z(y);if(Y!==A.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,F=!0),tt[Y].usedTimes++;const St=tt[A.__cacheKey];St!==void 0&&(tt[A.__cacheKey].usedTimes--,St.usedTimes===0&&D(y)),A.__cacheKey=Y,A.__webglTexture=tt[Y].texture}return F}function Ht(A,y,F){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const tt=Ot(A,y),Y=y.source;e.bindTexture(K,A.__webglTexture,s.TEXTURE0+F);const St=n.get(Y);if(Y.version!==St.__version||tt===!0){e.activeTexture(s.TEXTURE0+F);const at=te.getPrimaries(te.workingColorSpace),ft=y.colorSpace===yn?null:te.getPrimaries(y.colorSpace),$t=y.colorSpace===yn||at===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let nt=x(y.image,!1,i.maxTextureSize);nt=oe(y,nt);const mt=a.convert(y.format,y.colorSpace),Ct=a.convert(y.type);let Pt=M(y.internalFormat,mt,Ct,y.colorSpace,y.isVideoTexture);pt(K,y);let gt;const zt=y.mipmaps,Ut=y.isVideoTexture!==!0,ae=St.__version===void 0||tt===!0,I=Y.dataReady,ht=S(y,nt);if(y.isDepthTexture)Pt=v(y.format===Ei,y.type),ae&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,nt.width,nt.height,0,mt,Ct,null));else if(y.isDataTexture)if(zt.length>0){Ut&&ae&&e.texStorage2D(s.TEXTURE_2D,ht,Pt,zt[0].width,zt[0].height);for(let V=0,J=zt.length;V<J;V++)gt=zt[V],Ut?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(s.TEXTURE_2D,V,Pt,gt.width,gt.height,0,mt,Ct,gt.data);y.generateMipmaps=!1}else Ut?(ae&&e.texStorage2D(s.TEXTURE_2D,ht,Pt,nt.width,nt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Ct,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,nt.width,nt.height,0,mt,Ct,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ut&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Pt,zt[0].width,zt[0].height,nt.depth);for(let V=0,J=zt.length;V<J;V++)if(gt=zt[V],y.format!==Ze)if(mt!==null)if(Ut){if(I)if(y.layerUpdates.size>0){const lt=qo(gt.width,gt.height,y.format,y.type);for(const dt of y.layerUpdates){const Xt=gt.data.subarray(dt*lt/gt.data.BYTES_PER_ELEMENT,(dt+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,dt,gt.width,gt.height,1,mt,Xt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Pt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,nt.depth,mt,Ct,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Pt,gt.width,gt.height,nt.depth,0,mt,Ct,gt.data)}else{Ut&&ae&&e.texStorage2D(s.TEXTURE_2D,ht,Pt,zt[0].width,zt[0].height);for(let V=0,J=zt.length;V<J;V++)gt=zt[V],y.format!==Ze?mt!==null?Ut?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(s.TEXTURE_2D,V,Pt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(y.isDataArrayTexture)if(Ut){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Pt,nt.width,nt.height,nt.depth),I)if(y.layerUpdates.size>0){const V=qo(nt.width,nt.height,y.format,y.type);for(const J of y.layerUpdates){const lt=nt.data.subarray(J*V/nt.data.BYTES_PER_ELEMENT,(J+1)*V/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,mt,Ct,lt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ct,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,mt,Ct,nt.data);else if(y.isData3DTexture)Ut?(ae&&e.texStorage3D(s.TEXTURE_3D,ht,Pt,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ct,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,mt,Ct,nt.data);else if(y.isFramebufferTexture){if(ae)if(Ut)e.texStorage2D(s.TEXTURE_2D,ht,Pt,nt.width,nt.height);else{let V=nt.width,J=nt.height;for(let lt=0;lt<ht;lt++)e.texImage2D(s.TEXTURE_2D,lt,Pt,V,J,0,mt,Ct,null),V>>=1,J>>=1}}else if(zt.length>0){if(Ut&&ae){const V=Dt(zt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Pt,V.width,V.height)}for(let V=0,J=zt.length;V<J;V++)gt=zt[V],Ut?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,mt,Ct,gt):e.texImage2D(s.TEXTURE_2D,V,Pt,mt,Ct,gt);y.generateMipmaps=!1}else if(Ut){if(ae){const V=Dt(nt);e.texStorage2D(s.TEXTURE_2D,ht,Pt,V.width,V.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Ct,nt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,mt,Ct,nt);m(y)&&p(K),St.__version=Y.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function q(A,y,F){if(y.image.length!==6)return;const K=Ot(A,y),tt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const Y=n.get(tt);if(tt.version!==Y.__version||K===!0){e.activeTexture(s.TEXTURE0+F);const St=te.getPrimaries(te.workingColorSpace),at=y.colorSpace===yn?null:te.getPrimaries(y.colorSpace),ft=y.colorSpace===yn||St===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!$t&&!nt?mt[J]=x(y.image[J],!0,i.maxCubemapSize):mt[J]=nt?y.image[J].image:y.image[J],mt[J]=oe(y,mt[J]);const Ct=mt[0],Pt=a.convert(y.format,y.colorSpace),gt=a.convert(y.type),zt=M(y.internalFormat,Pt,gt,y.colorSpace),Ut=y.isVideoTexture!==!0,ae=Y.__version===void 0||K===!0,I=tt.dataReady;let ht=S(y,Ct);pt(s.TEXTURE_CUBE_MAP,y);let V;if($t){Ut&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,Ct.width,Ct.height);for(let J=0;J<6;J++){V=mt[J].mipmaps;for(let lt=0;lt<V.length;lt++){const dt=V[lt];y.format!==Ze?Pt!==null?Ut?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,dt.width,dt.height,Pt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,zt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,dt.width,dt.height,Pt,gt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,zt,dt.width,dt.height,0,Pt,gt,dt.data)}}}else{if(V=y.mipmaps,Ut&&ae){V.length>0&&ht++;const J=Dt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ut?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Pt,gt,mt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,mt[J].width,mt[J].height,0,Pt,gt,mt[J].data);for(let lt=0;lt<V.length;lt++){const Xt=V[lt].image[J].image;Ut?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,Xt.width,Xt.height,Pt,gt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,zt,Xt.width,Xt.height,0,Pt,gt,Xt.data)}}else{Ut?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,gt,mt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,Pt,gt,mt[J]);for(let lt=0;lt<V.length;lt++){const dt=V[lt];Ut?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,Pt,gt,dt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,zt,Pt,gt,dt.image[J])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),Y.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function et(A,y,F,K,tt,Y){const St=a.convert(F.format,F.colorSpace),at=a.convert(F.type),ft=M(F.internalFormat,St,at,F.colorSpace);if(!n.get(y).__hasExternalTextures){const nt=Math.max(1,y.width>>Y),mt=Math.max(1,y.height>>Y);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,ft,nt,mt,y.depth,0,St,at,null):e.texImage2D(tt,Y,ft,nt,mt,0,St,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,tt,n.get(F).__webglTexture,0,Bt(y)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,tt,n.get(F).__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(A,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const K=y.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Y=v(y.stencilBuffer,tt),St=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Bt(y);Yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Y,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Y,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Y,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,A)}else{const K=y.textures;for(let tt=0;tt<K.length;tt++){const Y=K[tt],St=a.convert(Y.format,Y.colorSpace),at=a.convert(Y.type),ft=M(Y.internalFormat,St,at,Y.colorSpace),$t=Bt(y);F&&Yt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,ft,y.width,y.height):Yt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,ft,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ft,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,tt=Bt(y);if(y.depthTexture.format===_i)Yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(y.depthTexture.format===Ei)Yt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function It(A){const y=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=K}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ut(y.__webglFramebuffer,A)}else if(F){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),vt(y.__webglDepthbuffer[K],A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),vt(y.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(A,y,F){const K=n.get(A);y!==void 0&&et(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&It(A)}function Vt(A){const y=A.texture,F=n.get(A),K=n.get(y);A.addEventListener("dispose",T);const tt=A.textures,Y=A.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,r.memory.textures++),Y){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ft=0;ft<y.mipmaps.length;ft++)F.__webglFramebuffer[at][ft]=s.createFramebuffer()}else F.__webglFramebuffer[at]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)F.__webglFramebuffer[at]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(St)for(let at=0,ft=tt.length;at<ft;at++){const $t=n.get(tt[at]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Yt(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const ft=tt[at];F.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const $t=a.convert(ft.format,ft.colorSpace),nt=a.convert(ft.type),mt=M(ft.internalFormat,$t,nt,ft.colorSpace,A.isXRRenderTarget===!0),Ct=Bt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,mt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,F.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),pt(s.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)et(F.__webglFramebuffer[at][ft],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else et(F.__webglFramebuffer[at],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,ft=tt.length;at<ft;at++){const $t=tt[at],nt=n.get($t);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),pt(s.TEXTURE_2D,$t),et(F.__webglFramebuffer,A,$t,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),pt(at,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)et(F.__webglFramebuffer[ft],A,y,s.COLOR_ATTACHMENT0,at,ft);else et(F.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,at,0);m(y)&&p(at),e.unbindTexture()}A.depthBuffer&&It(A)}function ne(A){const y=A.textures;for(let F=0,K=y.length;F<K;F++){const tt=y[F];if(m(tt)){const Y=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=n.get(tt).__webglTexture;e.bindTexture(Y,St),p(Y),e.unbindTexture()}}}const Wt=[],L=[];function Ie(A){if(A.samples>0){if(Yt(A)===!1){const y=A.textures,F=A.width,K=A.height;let tt=s.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(A),at=y.length>1;if(at)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const $t=n.get(y[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,F,K,0,0,F,K,tt,s.NEAREST),l===!0&&(Wt.length=0,L.length=0,Wt.push(s.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Wt.push(Y),L.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const $t=n.get(y[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Bt(A){return Math.min(i.maxSamples,A.samples)}function Yt(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(A){const y=r.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function oe(A,y){const F=A.colorSpace,K=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==An&&F!==yn&&(te.getTransfer(F)===ce?(K!==Ze||tt!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=Tt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Yt}function qp(s,t){function e(n,i=yn){let a;const r=te.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===Lr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===El)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return s.BYTE;if(n===wl)return s.SHORT;if(n===Xi)return s.UNSIGNED_SHORT;if(n===Pr)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===tn)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===Tl)return s.ALPHA;if(n===Al)return s.RGB;if(n===Ze)return s.RGBA;if(n===Rl)return s.LUMINANCE;if(n===Cl)return s.LUMINANCE_ALPHA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===Ir)return s.RED;if(n===Ur)return s.RED_INTEGER;if(n===Pl)return s.RG;if(n===Nr)return s.RG_INTEGER;if(n===Fr)return s.RGBA_INTEGER;if(n===Es||n===Ts||n===As||n===Rs)if(r===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===Za||n===Ja)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ka)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===tr||n===er)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Qa||n===tr)return r===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===er)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nr||n===ir||n===sr||n===ar||n===rr||n===or||n===lr||n===cr||n===hr||n===dr||n===ur||n===fr||n===pr||n===mr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===nr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ir)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ar)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===or)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ur)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mr)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cs||n===gr||n===_r)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Cs)return r===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_r)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===xr||n===vr||n===yr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Cs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===xr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Yp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qt extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jp=`
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

}`;class Zp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new be,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:Kp,fragmentShader:jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jp extends Ai{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=new Zp,m=e.getContextAttributes();let p=null,M=null;const v=[],S=[],C=new Lt;let T=null;const R=new Be;R.layers.enable(1),R.viewport=new se;const D=new Be;D.layers.enable(2),D.viewport=new se;const W=[R,D],_=new Yp;_.layers.enable(1),_.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=v[q];return et===void 0&&(et=new Ca,v[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=v[q];return et===void 0&&(et=new Ca,v[q]=et),et.getGripSpace()},this.getHand=function(q){let et=v[q];return et===void 0&&(et=new Ca,v[q]=et),et.getHandSpace()};function z(q){const et=S.indexOf(q.inputSource);if(et===-1)return;const vt=v[et];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||r),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",j);for(let q=0;q<v.length;q++){const et=S[q];et!==null&&(S[q]=null,v[q].disconnect(et))}w=null,k=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,M=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Ei:_i,vt=m.stencil?wi:Wn);const It={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:a};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(It),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Xn(u.textureWidth,u.textureHeight,{format:Ze,type:un,depthTexture:new Wl(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(q){for(let et=0;et<q.removed.length;et++){const vt=q.removed[et],ut=S.indexOf(vt);ut>=0&&(S[ut]=null,v[ut].disconnect(vt))}for(let et=0;et<q.added.length;et++){const vt=q.added[et];let ut=S.indexOf(vt);if(ut===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=S.length){S.push(vt),ut=Tt;break}else if(S[Tt]===null){S[Tt]=vt,ut=Tt;break}if(ut===-1)break}const It=v[ut];It&&It.connect(vt)}}const G=new P,Q=new P;function H(q,et,vt){G.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const ut=G.distanceTo(Q),It=et.projectionMatrix.elements,Tt=vt.projectionMatrix.elements,Vt=It[14]/(It[10]-1),ne=It[14]/(It[10]+1),Wt=(It[9]+1)/It[5],L=(It[9]-1)/It[5],Ie=(It[8]-1)/It[0],Bt=(Tt[8]+1)/Tt[0],Yt=Vt*Ie,Rt=Vt*Bt,oe=ut/(-Ie+Bt),Dt=oe*-Ie;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),It[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const A=Vt+oe,y=ne+oe,F=Yt-Dt,K=Rt+(ut-Dt),tt=Wt*ne/y*A,Y=L*ne/y*A;q.projectionMatrix.makePerspective(F,K,tt,Y,A,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ot(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,vt=q.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),_.near=D.near=R.near=et,_.far=D.far=R.far=vt,(w!==_.near||k!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,k=_.far);const ut=q.parent,It=_.cameras;ot(_,ut);for(let Tt=0;Tt<It.length;Tt++)ot(It[Tt],ut);It.length===2?H(_,R,D):_.projectionMatrix.copy(R.projectionMatrix),rt(q,_,ut)};function rt(q,et,vt){vt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=br*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let pt=null;function Ot(q,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ut=!1;vt.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let Tt=0;Tt<vt.length;Tt++){const Vt=vt[Tt];let ne=null;if(f!==null)ne=f.getViewport(Vt);else{const L=d.getViewSubImage(u,Vt);ne=L.viewport,Tt===0&&(t.setRenderTargetTextures(M,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(M))}let Wt=W[Tt];Wt===void 0&&(Wt=new Be,Wt.layers.enable(Tt),Wt.viewport=new se,W[Tt]=Wt),Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ne.x,ne.y,ne.width,ne.height),Tt===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(Wt)}const It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){const Tt=d.getDepthInformation(vt[0]);Tt&&Tt.isValid&&Tt.texture&&x.init(t,Tt,i.renderState)}}for(let vt=0;vt<v.length;vt++){const ut=S[vt],It=v[vt];ut!==null&&It!==void 0&&It.update(ut,et,c||r)}pt&&pt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Ht=new Hl;Ht.setAnimationLoop(Ot),this.setAnimationLoop=function(q){pt=q},this.dispose=function(){}}}const Nn=new We,Qp=new Zt;function tm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),x(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,S=M.envMapRotation;v&&(m.envMap.value=v,Nn.copy(S),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Nn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function em(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(g(M),S=h(M),i[M.id]=S,M.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(M,C);const T=t.render.frame;a[M.id]!==T&&(u(M),a[M.id]=T)}function h(M){const v=d();M.__bindingPointIndex=v;const S=s.createBuffer(),C=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function d(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=i[M.id],S=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,R=S.length;T<R;T++){const D=Array.isArray(S[T])?S[T]:[S[T]];for(let W=0,_=D.length;W<_;W++){const w=D[W];if(f(w,T,W,C)===!0){const k=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let j=0;j<z.length;j++){const G=z[j],Q=x(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,k+X,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,S,C){const T=M.value,R=v+"_"+S;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const D=C[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return C[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(M){const v=M.uniforms;let S=0;const C=16;for(let R=0,D=v.length;R<D;R++){const W=Array.isArray(v[R])?v[R]:[v[R]];for(let _=0,w=W.length;_<w;_++){const k=W[_],z=Array.isArray(k.value)?k.value:[k.value];for(let X=0,j=z.length;X<j;X++){const G=z[X],Q=x(G),H=S%C,ot=H%Q.boundary,rt=H+ot;S+=ot,rt!==0&&C-rt<Q.storage&&(S+=C-rt),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Q.storage}}}const T=S%C;return T>0&&(S+=C-T),M.__size=S,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=r.indexOf(v.__bindingPointIndex);r.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},a={}}return{bind:l,update:c,dispose:p}}class nm{constructor(t={}){const{canvas:e=Hc(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Sn,this.toneMappingExposure=1;const v=this;let S=!1,C=0,T=0,R=null,D=-1,W=null;const _=new se,w=new se;let k=null;const z=new kt(0);let X=0,j=e.width,G=e.height,Q=1,H=null,ot=null;const rt=new se(0,0,j,G),pt=new se(0,0,j,G);let Ot=!1;const Ht=new Gr;let q=!1,et=!1;const vt=new Zt,ut=new Zt,It=new P,Tt=new se,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Wt(){return R===null?Q:1}let L=n;function Ie(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rr}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){const U="webgl2";if(L=Ie(U,b),L===null)throw Ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,Yt,Rt,oe,Dt,A,y,F,K,tt,Y,St,at,ft,$t,nt,mt,Ct,Pt,gt,zt,Ut,ae,I;function ht(){Bt=new of(L),Bt.init(),Ut=new qp(L,Bt),Yt=new tf(L,Bt,t,Ut),Rt=new Vp(L),Yt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),oe=new hf(L),Dt=new Rp,A=new Xp(L,Bt,Rt,Dt,Yt,Ut,oe),y=new nf(v),F=new rf(v),K=new gh(L),ae=new Ju(L,K),tt=new lf(L,K,oe,ae),Y=new uf(L,tt,K,oe),Pt=new df(L,Yt,A),nt=new ef(Dt),St=new Ap(v,y,F,Bt,Yt,ae,nt),at=new tm(v,Dt),ft=new Pp,$t=new Fp(Bt),Ct=new Zu(v,y,F,Rt,Y,u,l),mt=new Gp(v,Y,Yt),I=new em(L,oe,Yt,Rt),gt=new Qu(L,Bt,oe),zt=new cf(L,Bt,oe),oe.programs=St.programs,v.capabilities=Yt,v.extensions=Bt,v.properties=Dt,v.renderLists=ft,v.shadowMap=mt,v.state=Rt,v.info=oe}ht();const V=new Jp(v,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(j,G,!1))},this.getSize=function(b){return b.set(j,G)},this.setSize=function(b,U,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,G=U,e.width=Math.floor(b*Q),e.height=Math.floor(U*Q),O===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(j*Q,G*Q).floor()},this.setDrawingBufferSize=function(b,U,O){j=b,G=U,Q=O,e.width=Math.floor(b*O),e.height=Math.floor(U*O),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(rt)},this.setViewport=function(b,U,O,B){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,U,O,B),Rt.viewport(_.copy(rt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(pt)},this.setScissor=function(b,U,O,B){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,U,O,B),Rt.scissor(w.copy(pt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(b){Rt.setScissorTest(Ot=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,U=!0,O=!0){let B=0;if(b){let N=!1;if(R!==null){const it=R.texture.format;N=it===Fr||it===Nr||it===Ur}if(N){const it=R.texture.type,ct=it===un||it===Wn||it===Xi||it===wi||it===Lr||it===Dr,_t=Ct.getClearColor(),yt=Ct.getClearAlpha(),Et=_t.r,At=_t.g,bt=_t.b;ct?(f[0]=Et,f[1]=At,f[2]=bt,f[3]=yt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Et,g[1]=At,g[2]=bt,g[3]=yt,L.clearBufferiv(L.COLOR,0,g))}else B|=L.COLOR_BUFFER_BIT}U&&(B|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ft.dispose(),$t.dispose(),Dt.dispose(),y.dispose(),F.dispose(),Y.dispose(),ae.dispose(),I.dispose(),St.dispose(),V.dispose(),V.removeEventListener("sessionstart",qr),V.removeEventListener("sessionend",Yr),Cn.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=oe.autoReset,U=mt.enabled,O=mt.autoUpdate,B=mt.needsUpdate,N=mt.type;ht(),oe.autoReset=b,mt.enabled=U,mt.autoUpdate=O,mt.needsUpdate=B,mt.type=N}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const U=b.target;U.removeEventListener("dispose",Xt),fe(U)}function fe(b){Re(b),Dt.remove(b)}function Re(b){const U=Dt.get(b).programs;U!==void 0&&(U.forEach(function(O){St.releaseProgram(O)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,O,B,N,it){U===null&&(U=Vt);const ct=N.isMesh&&N.matrixWorld.determinant()<0,_t=Jl(b,U,O,B,N);Rt.setMaterial(B,ct);let yt=O.index,Et=1;if(B.wireframe===!0){if(yt=tt.getWireframeAttribute(O),yt===void 0)return;Et=2}const At=O.drawRange,bt=O.attributes.position;let ee=At.start*Et,le=(At.start+At.count)*Et;it!==null&&(ee=Math.max(ee,it.start*Et),le=Math.min(le,(it.start+it.count)*Et)),yt!==null?(ee=Math.max(ee,0),le=Math.min(le,yt.count)):bt!=null&&(ee=Math.max(ee,0),le=Math.min(le,bt.count));const de=le-ee;if(de<0||de===1/0)return;ae.setup(N,B,_t,O,yt);let Ue,Jt=gt;if(yt!==null&&(Ue=K.get(yt),Jt=zt,Jt.setIndex(Ue)),N.isMesh)B.wireframe===!0?(Rt.setLineWidth(B.wireframeLinewidth*Wt()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(N.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),Rt.setLineWidth(wt*Wt()),N.isLineSegments?Jt.setMode(L.LINES):N.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else N.isPoints?Jt.setMode(L.POINTS):N.isSprite&&Jt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,ye=N._multiDrawCounts,Qt=N._multiDrawCount,Xe=yt?K.get(yt).bytesPerElement:1,Yn=Dt.get(B).currentProgram.getUniforms();for(let Ne=0;Ne<Qt;Ne++)Yn.setValue(L,"_gl_DrawID",Ne),Jt.render(wt[Ne]/Xe,ye[Ne])}else if(N.isInstancedMesh)Jt.renderInstances(ee,de,N.count);else if(O.isInstancedBufferGeometry){const wt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ye=Math.min(O.instanceCount,wt);Jt.renderInstances(ee,de,ye)}else Jt.render(ee,de)};function Kt(b,U,O){b.transparent===!0&&b.side===He&&b.forceSinglePass===!1?(b.side=De,b.needsUpdate=!0,$i(b,U,O),b.side=En,b.needsUpdate=!0,$i(b,U,O),b.side=He):$i(b,U,O)}this.compile=function(b,U,O=null){O===null&&(O=b),m=$t.get(O),m.init(U),M.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),b!==O&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const B=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let ct=0;ct<it.length;ct++){const _t=it[ct];Kt(_t,O,N),B.add(_t)}else Kt(it,O,N),B.add(it)}),M.pop(),m=null,B},this.compileAsync=function(b,U,O=null){const B=this.compile(b,U,O);return new Promise(N=>{function it(){if(B.forEach(function(ct){Dt.get(ct).currentProgram.isReady()&&B.delete(ct)}),B.size===0){N(b);return}setTimeout(it,10)}Bt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ce=null;function nn(b){Ce&&Ce(b)}function qr(){Cn.stop()}function Yr(){Cn.start()}const Cn=new Hl;Cn.setAnimationLoop(nn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(b){Ce=b,V.setAnimationLoop(b),b===null?Cn.stop():Cn.start()},V.addEventListener("sessionstart",qr),V.addEventListener("sessionend",Yr),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,R),m=$t.get(b,M.length),m.init(U),M.push(m),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ht.setFromProjectionMatrix(ut),et=this.localClippingEnabled,q=nt.init(this.clippingPlanes,et),x=ft.get(b,p.length),x.init(),p.push(x),V.enabled===!0&&V.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&Ks(it,U,-1/0,v.sortObjects)}Ks(b,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(H,ot),ne=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ne&&Ct.addToRenderList(x,b),this.info.render.frame++,q===!0&&nt.beginShadows();const O=m.state.shadowsArray;mt.render(O,b,U),q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,N=x.transmissive;if(m.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let ct=0,_t=it.length;ct<_t;ct++){const yt=it[ct];Kr(B,N,b,yt)}ne&&Ct.render(b);for(let ct=0,_t=it.length;ct<_t;ct++){const yt=it[ct];$r(x,b,yt,yt.viewport)}}else N.length>0&&Kr(B,N,b,U),ne&&Ct.render(b),$r(x,b,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,U),ae.resetDefaultState(),D=-1,W=null,M.pop(),M.length>0?(m=M[M.length-1],q===!0&&nt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ks(b,U,O,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ht.intersectsSprite(b)){B&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const ct=Y.update(b),_t=b.material;_t.visible&&x.push(b,ct,_t,O,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ht.intersectsObject(b))){const ct=Y.update(b),_t=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Tt.copy(ct.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(_t)){const yt=ct.groups;for(let Et=0,At=yt.length;Et<At;Et++){const bt=yt[Et],ee=_t[bt.materialIndex];ee&&ee.visible&&x.push(b,ct,ee,O,Tt.z,bt)}}else _t.visible&&x.push(b,ct,_t,O,Tt.z,null)}}const it=b.children;for(let ct=0,_t=it.length;ct<_t;ct++)Ks(it[ct],U,O,B)}function $r(b,U,O,B){const N=b.opaque,it=b.transmissive,ct=b.transparent;m.setupLightsView(O),q===!0&&nt.setGlobalState(v.clippingPlanes,O),B&&Rt.viewport(_.copy(B)),N.length>0&&Yi(N,U,O),it.length>0&&Yi(it,U,O),ct.length>0&&Yi(ct,U,O),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Kr(b,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Xn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?qi:un,minFilter:Hn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const it=m.state.transmissionRenderTarget[B.id],ct=B.viewport||_;it.setSize(ct.z,ct.w);const _t=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(z),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),ne&&Ct.render(O);const yt=v.toneMapping;v.toneMapping=Sn;const Et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),q===!0&&nt.setGlobalState(v.clippingPlanes,B),Yi(b,O,B),A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let bt=0,ee=U.length;bt<ee;bt++){const le=U[bt],de=le.object,Ue=le.geometry,Jt=le.material,wt=le.group;if(Jt.side===He&&de.layers.test(B.layers)){const ye=Jt.side;Jt.side=De,Jt.needsUpdate=!0,jr(de,O,B,Ue,Jt,wt),Jt.side=ye,Jt.needsUpdate=!0,At=!0}}At===!0&&(A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it))}v.setRenderTarget(_t),v.setClearColor(z,X),Et!==void 0&&(B.viewport=Et),v.toneMapping=yt}function Yi(b,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=b.length;N<it;N++){const ct=b[N],_t=ct.object,yt=ct.geometry,Et=B===null?ct.material:B,At=ct.group;_t.layers.test(O.layers)&&jr(_t,U,O,yt,Et,At)}}function jr(b,U,O,B,N,it){b.onBeforeRender(v,U,O,B,N,it),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,U,O,B,b,it),N.transparent===!0&&N.side===He&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,v.renderBufferDirect(O,U,B,N,b,it),N.side=En,N.needsUpdate=!0,v.renderBufferDirect(O,U,B,N,b,it),N.side=He):v.renderBufferDirect(O,U,B,N,b,it),b.onAfterRender(v,U,O,B,N,it)}function $i(b,U,O){U.isScene!==!0&&(U=Vt);const B=Dt.get(b),N=m.state.lights,it=m.state.shadowsArray,ct=N.state.version,_t=St.getParameters(b,N.state,it,U,O),yt=St.getProgramCacheKey(_t);let Et=B.programs;B.environment=b.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(b.isMeshStandardMaterial?F:y).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",Xt),Et=new Map,B.programs=Et);let At=Et.get(yt);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===ct)return Jr(b,_t),At}else _t.uniforms=St.getUniforms(b),b.onBeforeCompile(_t,v),At=St.acquireProgram(_t,yt),Et.set(yt,At),B.uniforms=_t.uniforms;const bt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=nt.uniform),Jr(b,_t),B.needsLights=tc(b),B.lightsStateVersion=ct,B.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function Zr(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Ls.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Jr(b,U){const O=Dt.get(b);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Jl(b,U,O,B,N){U.isScene!==!0&&(U=Vt),A.resetTextureUnits();const it=U.fog,ct=B.isMeshStandardMaterial?U.environment:null,_t=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:An,yt=(B.isMeshStandardMaterial?F:y).get(B.envMap||ct),Et=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,At=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),bt=!!O.morphAttributes.position,ee=!!O.morphAttributes.normal,le=!!O.morphAttributes.color;let de=Sn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=v.toneMapping);const Ue=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Jt=Ue!==void 0?Ue.length:0,wt=Dt.get(B),ye=m.state.lights;if(q===!0&&(et===!0||b!==W)){const ze=b===W&&B.id===D;nt.setState(B,b,ze)}let Qt=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ye.state.version||wt.outputColorSpace!==_t||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==yt||B.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==nt.numPlanes||wt.numIntersection!==nt.numIntersection)||wt.vertexAlphas!==Et||wt.vertexTangents!==At||wt.morphTargets!==bt||wt.morphNormals!==ee||wt.morphColors!==le||wt.toneMapping!==de||wt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,wt.__version=B.version);let Xe=wt.currentProgram;Qt===!0&&(Xe=$i(B,U,N));let Yn=!1,Ne=!1,js=!1;const ue=Xe.getUniforms(),fn=wt.uniforms;if(Rt.useProgram(Xe.program)&&(Yn=!0,Ne=!0,js=!0),B.id!==D&&(D=B.id,Ne=!0),Yn||W!==b){Yt.reverseDepthBuffer?(vt.copy(b.projectionMatrix),Wc(vt),Xc(vt),ue.setValue(L,"projectionMatrix",vt)):ue.setValue(L,"projectionMatrix",b.projectionMatrix),ue.setValue(L,"viewMatrix",b.matrixWorldInverse);const ze=ue.map.cameraPosition;ze!==void 0&&ze.setValue(L,It.setFromMatrixPosition(b.matrixWorld)),Yt.logarithmicDepthBuffer&&ue.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ue.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,Ne=!0,js=!0)}if(N.isSkinnedMesh){ue.setOptional(L,N,"bindMatrix"),ue.setOptional(L,N,"bindMatrixInverse");const ze=N.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ue.setValue(L,"boneTexture",ze.boneTexture,A))}N.isBatchedMesh&&(ue.setOptional(L,N,"batchingTexture"),ue.setValue(L,"batchingTexture",N._matricesTexture,A),ue.setOptional(L,N,"batchingIdTexture"),ue.setValue(L,"batchingIdTexture",N._indirectTexture,A),ue.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(L,"batchingColorTexture",N._colorsTexture,A));const Zs=O.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&Pt.update(N,O,Xe),(Ne||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,ue.setValue(L,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(fn.envMap.value=yt,fn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(fn.envMapIntensity.value=U.environmentIntensity),Ne&&(ue.setValue(L,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&Ql(fn,js),it&&B.fog===!0&&at.refreshFogUniforms(fn,it),at.refreshMaterialUniforms(fn,B,Q,G,m.state.transmissionRenderTarget[b.id]),Ls.upload(L,Zr(wt),fn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ls.upload(L,Zr(wt),fn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ue.setValue(L,"center",N.center),ue.setValue(L,"modelViewMatrix",N.modelViewMatrix),ue.setValue(L,"normalMatrix",N.normalMatrix),ue.setValue(L,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const ze=B.uniformsGroups;for(let Js=0,ec=ze.length;Js<ec;Js++){const Qr=ze[Js];I.update(Qr,Xe),I.bind(Qr,Xe)}}return Xe}function Ql(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function tc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,O){Dt.get(b.texture).__webglTexture=U,Dt.get(b.depthTexture).__webglTexture=O;const B=Dt.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const O=Dt.get(b);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,O=0){R=b,C=U,T=O;let B=!0,N=null,it=!1,ct=!1;if(b){const yt=Dt.get(b);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(yt.__hasExternalTextures)A.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const bt=b.depthTexture;if(yt.__boundDepthTexture!==bt){if(bt!==null&&Dt.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ct=!0);const At=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[U])?N=At[U][O]:N=At[U],it=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?N=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?N=At[O]:N=At,_.copy(b.viewport),w.copy(b.scissor),k=b.scissorTest}else _.copy(rt).multiplyScalar(Q).floor(),w.copy(pt).multiplyScalar(Q).floor(),k=Ot;if(Rt.bindFramebuffer(L.FRAMEBUFFER,N)&&B&&Rt.drawBuffers(b,N),Rt.viewport(_),Rt.scissor(w),Rt.setScissorTest(k),it){const yt=Dt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,O)}else if(ct){const yt=Dt.get(b.texture),Et=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.__webglTexture,O||0,Et)}D=-1},this.readRenderTargetPixels=function(b,U,O,B,N,it,ct){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){Rt.bindFramebuffer(L.FRAMEBUFFER,_t);try{const yt=b.texture,Et=yt.format,At=yt.type;if(!Yt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&O>=0&&O<=b.height-N&&L.readPixels(U,O,B,N,Ut.convert(Et),Ut.convert(At),it)}finally{const yt=R!==null?Dt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,U,O,B,N,it,ct){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const yt=b.texture,Et=yt.format,At=yt.type;if(!Yt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-B&&O>=0&&O<=b.height-N){Rt.bindFramebuffer(L.FRAMEBUFFER,_t);const bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,it.byteLength,L.STREAM_READ),L.readPixels(U,O,B,N,Ut.convert(Et),Ut.convert(At),0);const ee=R!==null?Dt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,ee);const le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vc(L,le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,it),L.deleteBuffer(bt),L.deleteSync(le),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,O=0){b.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(b.image.width*B),it=Math.floor(b.image.height*B),ct=U!==null?U.x:0,_t=U!==null?U.y:0;A.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,ct,_t,N,it),Rt.unbindTexture()},this.copyTextureToTexture=function(b,U,O=null,B=null,N=0){b.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,O=null);let it,ct,_t,yt,Et,At;O!==null?(it=O.max.x-O.min.x,ct=O.max.y-O.min.y,_t=O.min.x,yt=O.min.y):(it=b.image.width,ct=b.image.height,_t=0,yt=0),B!==null?(Et=B.x,At=B.y):(Et=0,At=0);const bt=Ut.convert(U.format),ee=Ut.convert(U.type);A.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const le=L.getParameter(L.UNPACK_ROW_LENGTH),de=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ue=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),wt=L.getParameter(L.UNPACK_SKIP_IMAGES),ye=b.isCompressedTexture?b.mipmaps[N]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_t),L.pixelStorei(L.UNPACK_SKIP_ROWS,yt),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Et,At,it,ct,bt,ee,ye.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Et,At,ye.width,ye.height,bt,ye.data):L.texSubImage2D(L.TEXTURE_2D,N,Et,At,it,ct,bt,ee,ye),L.pixelStorei(L.UNPACK_ROW_LENGTH,le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,O=null,B=null,N=0){b.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0);let it,ct,_t,yt,Et,At,bt,ee,le;const de=b.isCompressedTexture?b.mipmaps[N]:b.image;O!==null?(it=O.max.x-O.min.x,ct=O.max.y-O.min.y,_t=O.max.z-O.min.z,yt=O.min.x,Et=O.min.y,At=O.min.z):(it=de.width,ct=de.height,_t=de.depth,yt=0,Et=0,At=0),B!==null?(bt=B.x,ee=B.y,le=B.z):(bt=0,ee=0,le=0);const Ue=Ut.convert(U.format),Jt=Ut.convert(U.type);let wt;if(U.isData3DTexture)A.setTexture3D(U,0),wt=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),wt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ye=L.getParameter(L.UNPACK_ROW_LENGTH),Qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xe=L.getParameter(L.UNPACK_SKIP_PIXELS),Yn=L.getParameter(L.UNPACK_SKIP_ROWS),Ne=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(wt,N,bt,ee,le,it,ct,_t,Ue,Jt,de.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(wt,N,bt,ee,le,it,ct,_t,Ue,de.data):L.texSubImage3D(wt,N,bt,ee,le,it,ct,_t,Ue,Jt,de),L.pixelStorei(L.UNPACK_ROW_LENGTH,ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),N===0&&U.generateMipmaps&&L.generateMipmap(wt),Rt.unbindTexture()},this.initRenderTarget=function(b){Dt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Rt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Or?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Hs?"display-p3":"srgb"}}class Vr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class im extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mr,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,a=this.stride;i<a;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new P;class Os{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),a=ie(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Os(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vi extends Rn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let li;const Fi=new P,ci=new P,hi=new P,di=new Lt,ki=new Lt,Kl=new Zt,gs=new P,Oi=new P,_s=new P,Yo=new Lt,Pa=new Lt,$o=new Lt;class Wi extends me{constructor(t=new vi){if(super(),this.isSprite=!0,this.type="Sprite",li===void 0){li=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sm(e,5);li.setIndex([0,1,2,0,2,3]),li.setAttribute("position",new Os(n,3,0,!1)),li.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=li,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ci.setFromMatrixScale(this.matrixWorld),Kl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ci.multiplyScalar(-hi.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;xs(gs.set(-.5,-.5,0),hi,r,ci,i,a),xs(Oi.set(.5,-.5,0),hi,r,ci,i,a),xs(_s.set(.5,.5,0),hi,r,ci,i,a),Yo.set(0,0),Pa.set(1,0),$o.set(1,1);let o=t.ray.intersectTriangle(gs,Oi,_s,!1,Fi);if(o===null&&(xs(Oi.set(-.5,.5,0),hi,r,ci,i,a),Pa.set(0,1),o=t.ray.intersectTriangle(gs,_s,Oi,!1,Fi),o===null))return;const l=t.ray.origin.distanceTo(Fi);l<t.near||l>t.far||e.push({distance:l,point:Fi.clone(),uv:Ve.getInterpolation(Fi,gs,Oi,_s,Yo,Pa,$o,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xs(s,t,e,n,i,a){di.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ki.x=a*di.x-i*di.y,ki.y=i*di.x+a*di.y):ki.copy(di),s.copy(t),s.x+=ki.x,s.y+=ki.y,s.applyMatrix4(Kl)}class am extends be{constructor(t=null,e=1,n=1,i,a,r,o,l,c=Le,h=Le,d,u){super(null,r,o,l,c,h,i,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko extends we{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ui=new Zt,jo=new Zt,vs=[],Zo=new qn,rm=new Zt,Bi=new Z,zi=new Ci;class Jo extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Zo.copy(t.boundingBox).applyMatrix4(ui),this.boundingBox.union(Zo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),zi.copy(t.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),t.ray.intersectsSphere(zi)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,ui),jo.multiplyMatrices(n,ui),Bi.matrixWorld=jo,Bi.raycast(t,vs);for(let r=0,o=vs.length;r<o;r++){const l=vs[r];l.instanceId=a,l.object=this,e.push(l)}vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new am(new Float32Array(i*this.count),i,this.count,Ir,tn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*t;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ws extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qo=new Zt,Er=new Br,ys=new Ci,Ms=new P;class Wr extends me{constructor(t=new ve,e=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),ys.radius+=a,t.ray.intersectsSphere(ys)===!1)return;Qo.copy(i).invert(),Er.copy(t.ray).applyMatrix4(Qo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,x=f;g<x;g++){const m=c.getX(g);Ms.fromBufferAttribute(d,m),tl(Ms,m,l,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,x=f;g<x;g++)Ms.fromBufferAttribute(d,g),tl(Ms,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function tl(s,t,e,n,i,a,r){const o=Er.distanceSqToPoint(s);if(o<e){const l=new P;Er.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Xs extends be{constructor(t,e,n,i,a,r,o,l,c){super(t,e,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bs extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new P,h=new Lt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class re extends ve{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],u=[],f=[];let g=0;const x=[],m=n/2;let p=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2));function M(){const S=new P,C=new P;let T=0;const R=(e-t)/n;for(let D=0;D<=a;D++){const W=[],_=D/a,w=_*(e-t)+t;for(let k=0;k<=i;k++){const z=k/i,X=z*l+o,j=Math.sin(X),G=Math.cos(X);C.x=w*j,C.y=-_*n+m,C.z=w*G,d.push(C.x,C.y,C.z),S.set(j,R,G).normalize(),u.push(S.x,S.y,S.z),f.push(z,1-_),W.push(g++)}x.push(W)}for(let D=0;D<i;D++)for(let W=0;W<a;W++){const _=x[W][D],w=x[W+1][D],k=x[W+1][D+1],z=x[W][D+1];t>0&&(h.push(_,w,z),T+=3),e>0&&(h.push(w,k,z),T+=3)}c.addGroup(p,T,0),p+=T}function v(S){const C=g,T=new Lt,R=new P;let D=0;const W=S===!0?t:e,_=S===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;const w=g;for(let k=0;k<=i;k++){const X=k/i*l+o,j=Math.cos(X),G=Math.sin(X);R.x=W*G,R.y=m*_,R.z=W*j,d.push(R.x,R.y,R.z),u.push(0,_,0),T.x=j*.5+.5,T.y=G*.5*_+.5,f.push(T.x,T.y),g++}for(let k=0;k<i;k++){const z=C+k,X=w+k;S===!0?h.push(X,X+1,z):h.push(X+1,X,z),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ae extends re{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Ae(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qs extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),c(n),h(),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(a.slice(),3)),this.setAttribute("uv",new he(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new P,S=new P,C=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],S),f(e[T+2],C),l(v,S,C,M)}function l(M,v,S,C){const T=C+1,R=[];for(let D=0;D<=T;D++){R[D]=[];const W=M.clone().lerp(S,D/T),_=v.clone().lerp(S,D/T),w=T-D;for(let k=0;k<=w;k++)k===0&&D===T?R[D][k]=W:R[D][k]=W.clone().lerp(_,k/w)}for(let D=0;D<T;D++)for(let W=0;W<2*(T-D)-1;W++){const _=Math.floor(W/2);W%2===0?(u(R[D][_+1]),u(R[D+1][_]),u(R[D][_])):(u(R[D][_+1]),u(R[D+1][_+1]),u(R[D+1][_]))}}function c(M){const v=new P;for(let S=0;S<a.length;S+=3)v.x=a[S+0],v.y=a[S+1],v.z=a[S+2],v.normalize().multiplyScalar(M),a[S+0]=v.x,a[S+1]=v.y,a[S+2]=v.z}function h(){const M=new P;for(let v=0;v<a.length;v+=3){M.x=a[v+0],M.y=a[v+1],M.z=a[v+2];const S=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;r.push(S,1-C)}g(),d()}function d(){for(let M=0;M<r.length;M+=6){const v=r[M+0],S=r[M+2],C=r[M+4],T=Math.max(v,S,C),R=Math.min(v,S,C);T>.9&&R<.1&&(v<.2&&(r[M+0]+=1),S<.2&&(r[M+2]+=1),C<.2&&(r[M+4]+=1))}}function u(M){a.push(M.x,M.y,M.z)}function f(M,v){const S=M*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const M=new P,v=new P,S=new P,C=new P,T=new Lt,R=new Lt,D=new Lt;for(let W=0,_=0;W<a.length;W+=9,_+=6){M.set(a[W+0],a[W+1],a[W+2]),v.set(a[W+3],a[W+4],a[W+5]),S.set(a[W+6],a[W+7],a[W+8]),T.set(r[_+0],r[_+1]),R.set(r[_+2],r[_+3]),D.set(r[_+4],r[_+5]),C.copy(M).add(v).add(S).divideScalar(3);const w=m(C);x(T,_+0,M,w),x(R,_+2,v,w),x(D,_+4,S,w)}}function x(M,v,S,C){C<0&&M.x===1&&(r[v]=M.x-1),S.x===0&&S.z===0&&(r[v]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.vertices,t.indices,t.radius,t.details)}}class zs extends qs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zs(t.radius,t.detail)}}class Ys extends qs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ys(t.radius,t.detail)}}class yi extends ve{constructor(t=.5,e=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new P,g=new Lt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const M=p+m,v=M,S=M+n+1,C=M+n+2,T=M+1;o.push(v,S,T),o.push(S,C,T)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wn extends ve{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let S=0;p===0&&r===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const T=C/e;d.x=-t*Math.cos(i+T*a)*Math.sin(r+v*o),d.y=t*Math.cos(r+v*o),d.z=t*Math.sin(i+T*a)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+S,1-v),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=h[p][M+1],S=h[p][M],C=h[p+1][M],T=h[p+1][M+1];(p!==0||r>0)&&f.push(v,S,T),(p!==n-1||l<Math.PI)&&f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xr extends ve{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new P,d=new P,u=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const x=g/i*a,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;r.push(x,m,M),r.push(m,p,M)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mt extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class el extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $s extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class om extends $s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const La=new Zt,nl=new P,il=new P;class jl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(nl),il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(il),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sl=new Zt,Gi=new P,Da=new P;class lm extends jl{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),Da.copy(n.position),Da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Da),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl)}}class cm extends $s{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hm extends jl{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dm extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new hm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class um extends $s{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=al();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function al(){return performance.now()}const rl=new Zt;class pm{constructor(t,e,n=0,i=1/0){this.ray=new Br(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rl),this}intersectObject(t,e=!0,n=[]){return Tr(t,this,n,e),n.sort(ol),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)Tr(t[i],this,n,e);return n.sort(ol),n}}function ol(s,t){return s.distance-t.distance}function Tr(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)Tr(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);class mm{constructor(){this.phase="menu",this.paused=!1;let t="",e="knight",n,i=0;try{t=localStorage.getItem("fba-player-name")||"",e=localStorage.getItem("fba-skin")||"knight";const a=localStorage.getItem("fba-coins");n=a===null?500:parseInt(a,10)||0;const r=localStorage.getItem("fba-diamonds");i=r===null?0:parseInt(r,10)||0}catch{n=500,i=0}n<0&&(n=0),this.coins=n,this.diamonds=i,this.settings={sensitivity:1,volume:.7,shadows:!0,skin:e,map:"citadel",bots:10,roundMinutes:5,playerName:t},this.roundLeft=this.settings.roundMinutes*60,this.roundRunning=!1,this.roundPhase="playing",this.roster=new Map}register(t){this.roster.set(t.name,t)}unregister(t){this.roster.delete(t)}rows(){return[...this.roster.values()].sort((t,e)=>e.kills-t.kills||t.deaths-e.deaths)}}const ll=.55;class gm{constructor(t){this.bound=t,this.boxes=[],this.occluders=[]}addBox(t,e,n,i,a,r){this.boxes.push({minX:t,maxX:e,minZ:n,maxZ:i,baseY:a,topY:r})}addOccluder(t){this.occluders.push(t)}groundHeightAt(t,e,n,i=.35){let a=0;for(const r of this.boxes)t<r.minX-i||t>r.maxX+i||e<r.minZ-i||e>r.maxZ+i||r.topY<=n+ll&&r.topY>a&&(a=r.topY);return a}blockedAt(t,e,n,i=0){for(const a of this.boxes)if(!(a.topY<=i+.56)&&t>a.minX-n&&t<a.maxX+n&&e>a.minZ-n&&e<a.maxZ+n)return!0;return!1}resolveEntity(t){const e=t.pos,n=t.radius,i=e.y+t.height;for(const r of this.boxes){if(e.y>=r.topY-ll||i<=r.baseY)continue;const o=Math.max(r.minX,Math.min(e.x,r.maxX)),l=Math.max(r.minZ,Math.min(e.z,r.maxZ)),c=e.x-o,h=e.z-l,d=c*c+h*h;if(!(d>n*n))if(d>1e-9){const u=Math.sqrt(d),f=(n-u)/u;e.x+=c*f,e.z+=h*f}else{const u=e.x-(r.minX-n),f=r.maxX+n-e.x,g=e.z-(r.minZ-n),x=r.maxZ+n-e.z,m=Math.min(u,f,g,x);m===u?e.x=r.minX-n:m===f?e.x=r.maxX+n:m===g?e.z=r.minZ-n:e.z=r.maxZ+n}}const a=this.bound-n;e.x<-a?(e.x=-a,t.vel.x<0&&(t.vel.x*=-.1)):e.x>a&&(e.x=a,t.vel.x>0&&(t.vel.x*=-.1)),e.z<-a?(e.z=-a,t.vel.z<0&&(t.vel.z*=-.1)):e.z>a&&(e.z=a,t.vel.z>0&&(t.vel.z*=-.1))}}const Ia=Math.PI*2,Ss=(s,t,e)=>Math.max(t,Math.min(e,s)),$=(s,t)=>s+Math.random()*(t-s),Fn=s=>s[Math.floor(Math.random()*s.length)];function cl(s,t,e,n){let i=((t-s+Math.PI)%Ia+Ia)%Ia-Math.PI;return s+i*(1-Math.exp(-e*n))}const _m=[[-36,-36],[36,-36],[-36,36],[36,36],[36,0],[-36,0],[0,36],[0,-36],[18,18],[-18,-18],[24,-6],[-24,6],[6,24],[-6,-24],[32,-12]];class xm{constructor(){this.points=_m.map(([t,e])=>new P(t,0,e))}getSpawn(t=[]){let e=null,n=-1/0;for(let i=0;i<16;i++){const a=this.points[Math.floor(Math.random()*this.points.length)];let r=1/0;for(const o of t){const l=a.x-o.pos.x,c=a.z-o.pos.z,h=Math.sqrt(l*l+c*c)-o.radius;h<r&&(r=h)}r===1/0&&(r=999),r+=$(-1,1),r>n&&(n=r,e=a)}return e.clone()}}class vm{constructor(t,e=500){this.capacity=e,this.alive=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.baseR=new Float32Array(e),this.baseG=new Float32Array(e),this.baseB=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e);const n=new ve;n.setAttribute("position",new we(this.pos,3).setUsage(Sr)),n.setAttribute("color",new we(this.col,3).setUsage(Sr)),n.setDrawRange(0,0);const i=new Ws({size:.14,vertexColors:!0,transparent:!0,blending:Ke,depthWrite:!1,sizeAttenuation:!0});this.points=new Wr(n,i),this.points.frustumCulled=!1,t.add(this.points),this.geo=n,this._c=new kt}spawnBurst(t,{count:e=12,color:n=16764006,speed:i=5,upBias:a=1.5,life:r=.45,gravity:o=-10}={}){this._c.set(n);for(let l=0;l<e;l++){if(this.alive>=this.capacity)return;const c=this.alive++,h=c*3,d=Math.random()*Math.PI*2,u=Math.acos($(-1,1)),f=i*$(.35,1);this.pos[h]=t.x,this.pos[h+1]=t.y,this.pos[h+2]=t.z,this.vel[h]=Math.sin(u)*Math.cos(d)*f,this.vel[h+1]=Math.cos(u)*f*.7+a,this.vel[h+2]=Math.sin(u)*Math.sin(d)*f;const g=$(.55,1.15);this.baseR[c]=this._c.r*g,this.baseG[c]=this._c.g*g,this.baseB[c]=this._c.b*g,this.maxLife[c]=r*$(.6,1.4),this.life[c]=this.maxLife[c],this.grav[c]=o}}update(t){let e=0;for(;e<this.alive;){if(this.life[e]-=t,this.life[e]<=0){const a=--this.alive;if(e!==a){const r=e*3,o=a*3;for(let l=0;l<3;l++)this.pos[r+l]=this.pos[o+l],this.vel[r+l]=this.vel[o+l],this.col[r+l]=this.col[o+l];this.baseR[e]=this.baseR[a],this.baseG[e]=this.baseG[a],this.baseB[e]=this.baseB[a],this.life[e]=this.life[a],this.maxLife[e]=this.maxLife[a],this.grav[e]=this.grav[a]}continue}const n=e*3;this.vel[n+1]+=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;const i=Math.max(this.life[e]/this.maxLife[e],0);this.col[n]=this.baseR[e]*i,this.col[n+1]=this.baseG[e]*i,this.col[n+2]=this.baseB[e]*i,e++}this.geo.setDrawRange(0,this.alive),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}const ym=14;class Mm{constructor(t){this.game=t,this.fighters=[],this.particles=new vm(t.scene,500),this.slashes=[];const e=new yi(.55,2.1,26,1,-1.25,2.5);for(let n=0;n<ym;n++){const i=new en({color:16777215,transparent:!0,opacity:0,side:He,blending:Ke,depthWrite:!1}),a=new Z(e,i);a.rotation.order="YXZ",a.visible=!1,a.frustumCulled=!1,t.scene.add(a),this.slashes.push({mesh:a,mat:i,life:0,maxLife:.16})}}register(t){this.fighters.includes(t)||this.fighters.push(t)}unregister(t){const e=this.fighters.indexOf(t);e>=0&&this.fighters.splice(e,1)}sweep(t,e){const n=e.def,i=Math.sin(t.yaw),a=Math.cos(t.yaw);for(const r of this.fighters){if(r===t||r.dead||e.hit.has(r))continue;const o=r.pos.x-t.pos.x,l=r.pos.z-t.pos.z;if(Math.abs(r.pos.y-t.pos.y)>2.2)continue;const c=Math.hypot(o,l);if(c-r.radius>n.range)continue;const h=c>1e-4?o/c:i,d=c>1e-4?l/c:a;if(i*h+a*d<n.arcCos)continue;e.hit.add(r);const u=new P(r.pos.x-h*.3,r.pos.y+1.3,r.pos.z-d*.3);this.applyHit(t,r,n.dmg*(t.dmgMul||1),u)}}applyHit(t,e,n,i){const a=e.takeDamage(n,t,i);a&&(a.blocked?(this.particles.spawnBurst(i,{count:16,color:16773296,speed:5.5,upBias:1,life:.32}),this.game.audio.clash()):(this.particles.spawnBurst(i,{count:13,color:16734772,speed:4.5,upBias:1.4,life:.42}),this.game.audio.hit()),t.isPlayer&&this.game.hud.hitMarker(a.blocked),e.isPlayer&&(this.game.hud.damageFlash(),this.game.cameraRig.addShake(a.blocked?.12:.34)))}deathFX(t){const e=t.pos.clone();e.y+=1.1,this.particles.spawnBurst(e,{count:20,color:13382451,speed:3.5,upBias:2.2,life:.7,gravity:-6})}spawnSlashFX(t,e){const n=this.slashes.find(o=>o.life<=0);if(!n)return;const i=n.mesh;i.visible=!0,n.life=n.maxLife=e.key==="strong"?.2:.16;const a=Math.sin(t.yaw),r=Math.cos(t.yaw);i.position.set(t.pos.x+a*(e.fx==="v"?1.15:.85),t.pos.y+(e.fx==="v"?1.35:1.25),t.pos.z+r*(e.fx==="v"?1.15:.85)),e.fx==="h"?(i.rotation.set(-Math.PI/2,0,e.mirror?Math.PI:0),i.rotation.y=t.yaw,i.scale.setScalar(1.15),n.mat.color.setHex(16771504)):(i.rotation.set(0,t.yaw,0),i.scale.set(1.05,.8,1),n.mat.color.setHex(12574975))}notifyAttack(t){for(const e of this.fighters){if(e===t||e.dead||!e.isEnemy)continue;Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<4.6&&e.onThreat(t)}}update(t){this.particles.update(t);for(const e of this.slashes)e.life<=0||(e.life-=t,e.life<=0?(e.mesh.visible=!1,e.mat.opacity=0):e.mat.opacity=e.life/e.maxLife*.9)}}const Gt={knight:{name:"Knight",desc:"Stalwart guard of the arena",primary:3498176,secondary:9081766,accent:14196778,decor:"knight",blade:"sword",bladeGlow:0,rarity:"free"},crusader:{name:"Crusader",desc:"Holy warrior in heavy plate",primary:10498096,secondary:14209992,accent:13214247,decor:"crusader",blade:"sword",bladeGlow:0,rarity:"free"},ranger:{name:"Ranger",desc:"Swift hunter of the wilds",primary:4160068,secondary:7033652,accent:11584650,decor:"ranger",blade:"sword",bladeGlow:0,rarity:"free"},royal:{name:"Royal",desc:"Crowned champion of the realm",primary:7028640,secondary:13214247,accent:15259816,decor:"royal",blade:"sword",bladeGlow:0,rarity:"free"},shadow:{name:"Shadow",desc:"Silent blade from the void",primary:2302766,secondary:4013394,accent:9055202,decor:"shadow",blade:"sword",bladeGlow:9055202,rarity:"free"},dragonlord:{name:"Dragonlord",desc:"Bonded to an ancient dragon",primary:9050650,secondary:3816004,accent:16756768,decor:"dragon",blade:"sword",bladeGlow:16733474,rarity:"ad",premium:!0},voidreaper:{name:"Void Reaper",desc:"Harvested from the void itself",primary:1446431,secondary:2761784,accent:9055202,decor:"reaper",blade:"sword",bladeGlow:9055202,rarity:"ad",premium:!0},frostking:{name:"Frost King",desc:"Crowned in eternal winter",primary:10474728,secondary:14216436,accent:4892888,decor:"frostking",blade:"sword",bladeGlow:6740479,rarity:"ad",premium:!0},squire:{name:"Squire",desc:"Trainee of the arena grounds",primary:8019002,secondary:5916208,accent:10127978,decor:"squire",blade:"sword",rarity:"common",price:150},mercenary:{name:"Mercenary",desc:"Fights for coin, dies for none",primary:4868674,secondary:6969914,accent:9075274,decor:"mercenary",blade:"sword",rarity:"common",price:300},pikeman:{name:"Pikeman",desc:"Line holder of the old guard",primary:3820122,secondary:5925498,accent:9083562,decor:"pikeman",blade:"sword",rarity:"common",price:450},archerguard:{name:"Archer Guard",desc:"Keeps the walls safe at dusk",primary:4872756,secondary:6969914,accent:9083482,decor:"archerguard",blade:"sword",rarity:"common",price:650},ironclad:{name:"Ironclad",desc:"Slabs of iron, zero fear",primary:5921378,secondary:3816002,accent:8026754,decor:"ironclad",blade:"sword",rarity:"common",price:1e3},crimsonduelist:{name:"Crimson Duelist",desc:"One blade, one chance",primary:9050666,secondary:14209992,accent:14721184,decor:"duelist",blade:"sword",bladeGlow:16724804,rarity:"rare",price:1500,aura:{colors:[16724804],every:.5,count:1,up:.8,grav:-1}},venomacolyte:{name:"Venom Acolyte",desc:"Chanting in the toxic depths",primary:1980954,secondary:2771494,accent:6750054,decor:"venom",blade:"sword",bladeGlow:6750054,rarity:"rare",price:3e3,aura:{colors:[6750054,3394628],every:.4,count:2,up:.6,grav:-.5}},sandreaper:{name:"Sand Reaper",desc:"Walks where dunes bury kings",primary:13150314,secondary:9071162,accent:15259816,decor:"sandreaper",blade:"sword",rarity:"rare",price:5e3,aura:{colors:[15259816,13150314],every:.45,count:2,up:.9,grav:-1.5}},thunderguard:{name:"Thunder Guard",desc:"Static runs through his veins",primary:2767450,secondary:4872826,accent:10476799,decor:"thunderguard",blade:"sword",bladeGlow:10476799,rarity:"rare",price:7500,aura:{colors:[10476799,16777215],every:.35,count:2,up:1,grav:-1}},bloodbaron:{name:"Blood Baron",desc:"Nobility fed on crimson",primary:2755090,secondary:5902368,accent:12591168,decor:"bloodbaron",blade:"sword",bladeGlow:16720452,rarity:"rare",price:1e4,aura:{colors:[16720452,8917282],every:.4,count:2,up:.7,grav:-.8}},gladiatorgold:{name:"Golden Gladiator",desc:"Champion of the golden games",primary:13214247,secondary:9071130,accent:16769162,decor:"gladiatorgold",blade:"sword",bladeGlow:16766826,rarity:"legendary",price:2e4,aura:{colors:[16766826,16771496],every:.25,count:3,up:1.2,grav:-.6}},shadowassassin:{name:"Shadow Assassin",desc:"You never saw the second blade",primary:1052696,secondary:2039598,accent:5596927,decor:"shadowassassin",blade:"sword",bladeGlow:5596927,rarity:"legendary",price:28e3,aura:{colors:[3355466,1710634,5596927],every:.2,count:3,up:.4,grav:0}},frostwarden:{name:"Frost Warden",desc:"Winter answers to him alone",primary:10474728,secondary:5933748,accent:14217983,decor:"frostwarden",blade:"sword",bladeGlow:10476799,rarity:"legendary",price:35e3,aura:{colors:[14217983,10476799,16777215],every:.18,count:3,up:1,grav:-1.2}},emberchampion:{name:"Ember Champion",desc:"Forged in the heart of a volcano",primary:3806216,secondary:9054730,accent:16747050,decor:"emberchampion",blade:"sword",bladeGlow:16733440,rarity:"legendary",price:42e3,aura:{colors:[16747050,16733440,16759620],every:.15,count:3,up:1.5,grav:-2.5}},stormsovereign:{name:"Storm Sovereign",desc:"The sky kneels to his crown",primary:1714762,secondary:2771578,accent:16769357,decor:"stormsovereign",blade:"sword",bladeGlow:16769357,rarity:"legendary",price:5e4,aura:{colors:[16769357,10476799,16777215],every:.14,count:3,up:1.4,grav:-1}},abyssal:{name:"Abyssal Leviathan",desc:"Risen from the drowning deep",primary:666170,secondary:1722970,accent:2810072,decor:"abyssal",blade:"trident",bladeGlow:2810072,rarity:"mythical",price:7e4,aura:{colors:[2810072,1739444,11534335],every:.12,count:3,up:1.1,grav:-.8}},solarphoenix:{name:"Solar Phoenix",desc:"Reborn from the sun itself",primary:9054730,secondary:16742938,accent:16766826,decor:"phoenix",blade:"sword",bladeGlow:16742161,rarity:"mythical",price:1e5,aura:{colors:[16742938,16766826,16724736],every:.09,count:4,up:1.8,grav:-2}},voidemperor:{name:"Void Emperor",desc:"Thrones crumble in his orbit",primary:1312810,secondary:2759242,accent:10040319,decor:"voidemperor",blade:"beam",bladeGlow:10040319,rarity:"mythical",price:15e4,aura:{colors:[10040319,6693580,16738047],every:.1,count:3,up:.9,grav:-.4}},titanbreaker:{name:"Titan Breaker",desc:"Shatters mountains for sport",primary:4864554,secondary:9062938,accent:16742178,decor:"titanbreaker",blade:"hammer",bladeGlow:16742178,rarity:"godly",price:2e5,aura:{colors:[16742178,16755234,16729105],every:.09,count:4,up:1.6,grav:-2.2}},seraph:{name:"Divine Seraph",desc:"Six wings of pure judgment",primary:15788756,secondary:14202954,accent:16775384,decor:"seraph",blade:"beam",bladeGlow:16773824,rarity:"godly",price:32e4,aura:{colors:[16775384,16771496,16777215],every:.08,count:4,up:2,grav:-.3}},chaosoverlord:{name:"Chaos Overlord",desc:"Order dies where he steps",primary:1706526,secondary:4853808,accent:16720486,decor:"chaosoverlord",blade:"beam",bladeGlow:16720486,rarity:"godly",price:5e5,aura:{colors:[16720486,10040319,2280703],every:.07,count:4,up:1.5,grav:-.5}},fouiefury:{name:"Fouie Fury",desc:"AZURE — ninja of the creator",primary:66e4,secondary:1718876,accent:3394815,decor:"fouiefury",blade:"katana",bladeGlow:4513279,rarity:"azure",price:1e6,aura:{colors:[4513279,8974079,2254591,16777215],every:.06,count:5,up:1.6,grav:-.6}},prenpren:{name:"PrenPren",desc:"AZURE — death reaper of souls",primary:395279,secondary:924206,accent:2783999,decor:"prenpren",blade:"scythe",bladeGlow:2783999,rarity:"azure",price:5e7,aura:{colors:[2783999,6728447,1127270,11197951],every:.05,count:5,up:1.2,grav:-.4}},chronowarden:{name:"Chrono Warden",desc:"Guards every second of history",primary:1714730,secondary:3824218,accent:8060888,decor:"chronowarden",blade:"beam",bladeGlow:8060888,rarity:"mythical",price:8e4,aura:{colors:[8060888,16771496,16777215],every:.11,count:3,up:1.2,grav:-.5}},bloodmooncountess:{name:"Blood Moon Countess",desc:"Feeds only under the red moon",primary:1705224,secondary:4852244,accent:16722492,decor:"bloodmooncountess",blade:"scythe",bladeGlow:16722492,rarity:"mythical",price:12e4,aura:{colors:[16722492,9046548,16746649],every:.1,count:3,up:1,grav:-.6}},worldbreaker:{name:"Worldbreaker",desc:"One swing rewrites maps",primary:2759186,secondary:6957578,accent:16733457,decor:"worldbreaker",blade:"hammer",bladeGlow:16733457,rarity:"godly",price:25e4,aura:{colors:[16733457,16755234,8921600],every:.08,count:5,up:1.8,grav:-2.5}},archangel:{name:"Archangel",desc:"The final word of judgment",primary:16315616,secondary:13214247,accent:16777215,decor:"archangel",blade:"beam",bladeGlow:16775384,rarity:"godly",price:45e4,aura:{colors:[16777215,16771496,16775384],every:.06,count:5,up:2.2,grav:-.2}},paladin:{name:"Paladin",desc:"Sworn shield of the light",primary:14209992,secondary:13214247,accent:16773824,decor:"paladin",blade:"sword",rarity:"ad",premium:!0},ronin:{name:"Ronin",desc:"A masterless blade wanders",primary:4864554,secondary:9075290,accent:13214247,decor:"ronin",blade:"katana",rarity:"ad",premium:!0},dreadpirate:{name:"Dread Pirate",desc:"Terror of the salt seas",primary:1714746,secondary:9050650,accent:13214247,decor:"dreadpirate",blade:"sword",rarity:"ad",premium:!0},plaguedoctor:{name:"Plague Doctor",desc:"The cure is... more blades",primary:1710626,secondary:3815978,accent:8978244,decor:"plaguedoctor",blade:"sword",bladeGlow:8978244,rarity:"ad",premium:!0},oniwarrior:{name:"Oni Warrior",desc:"Demon blood, iron will",primary:5904922,secondary:2755082,accent:16729156,decor:"oniwarrior",blade:"katana",bladeGlow:16729156,rarity:"ad",premium:!0},moonlitmaiden:{name:"Moonlit Maiden",desc:"EXOTIC — daughter of the moon",primary:2767454,secondary:12574975,accent:15267071,decor:"moonlitmaiden",blade:"beam",bladeGlow:12574975,rarity:"exotic",female:!0,priceD:50,aura:{colors:[12574975,15267071,9417983],every:.14,count:3,up:1.3,grav:-.5}},scarletvale:{name:"Scarlet Vale",desc:"EXOTIC — every rose has thorns",primary:5900824,secondary:10494008,accent:16733559,decor:"scarletvale",blade:"scythe",bladeGlow:16733559,rarity:"exotic",female:!0,priceD:120,aura:{colors:[16733559,10494008],every:.13,count:3,up:1.1,grav:-.8}},tempestrose:{name:"Tempest Rose",desc:"EXOTIC — petals of the storm",primary:1718866,secondary:4881066,accent:11197951,decor:"tempestrose",blade:"spear",bladeGlow:11197951,rarity:"exotic",female:!0,priceD:250,aura:{colors:[11197951,4881066,16777215],every:.12,count:3,up:1.4,grav:-.9}},emberlily:{name:"Ember Lily",desc:"EXOTIC — blooms in fire",primary:3805706,secondary:10498064,accent:16755251,decor:"emberlily",blade:"sword",bladeGlow:16742178,rarity:"exotic",female:!0,priceD:500,aura:{colors:[16755251,16733457,16768392],every:.1,count:3,up:1.6,grav:-2}},frostlily:{name:"Frost Lily",desc:"EXOTIC — a cold gentle touch",primary:10471656,secondary:5933760,accent:15267583,decor:"frostlily",blade:"spear",bladeGlow:13167871,rarity:"exotic",female:!0,priceD:900,aura:{colors:[15267583,13167871,9423086],every:.1,count:3,up:1.2,grav:-1.4}},violetenchantress:{name:"Violet Enchantress",desc:"EXOTIC — spells woven in violet",primary:2756672,secondary:5909146,accent:13404415,decor:"violetenchantress",blade:"beam",bladeGlow:13404415,rarity:"exotic",female:!0,priceD:1500,aura:{colors:[13404415,9055202,16764159],every:.09,count:3,up:1,grav:-.3}},goldenempress:{name:"Golden Empress",desc:"EXOTIC — ruler of the gilded age",primary:9071130,secondary:14200906,accent:16771496,decor:"goldenempress",blade:"sword",bladeGlow:16766826,rarity:"exotic",female:!0,priceD:2500,aura:{colors:[16766826,16771496,14196778],every:.09,count:3,up:1.5,grav:-.7}},crimsonhuntress:{name:"Crimson Huntress",desc:"EXOTIC — the hunt never ends",primary:3803668,secondary:8002090,accent:16729190,decor:"crimsonhuntress",blade:"scythe",bladeGlow:16729190,rarity:"exotic",female:!0,priceD:4e3,aura:{colors:[16729190,8002090],every:.09,count:3,up:1.2,grav:-.9}},stormvalkyrie:{name:"Storm Valkyrie",desc:"EXOTIC — chooses the slain",primary:2767454,secondary:9083578,accent:16769357,decor:"stormvalkyrie",blade:"spear",bladeGlow:16769357,rarity:"exotic",female:!0,priceD:7e3,aura:{colors:[16769357,10476799,16777215],every:.08,count:4,up:1.7,grav:-1}},starweaver:{name:"Starweaver",desc:"EXOTIC — sews constellations",primary:657962,secondary:2763374,accent:8956671,decor:"starweaver",blade:"beam",bladeGlow:8956671,rarity:"exotic",female:!0,priceD:1e4,aura:{colors:[8956671,16771583,16777215,6737151],every:.07,count:4,up:1.4,grav:-.4}}},Ua=(s,t)=>s+Math.random()*(t-s),E={head:new xt(.5,.5,.48),torso:new xt(.72,.85,.42),belt:new xt(.76,.12,.46),helm:new xt(.54,.2,.52),plume:new xt(.08,.16,.44),pauldron:new xt(.34,.18,.36),arm:new xt(.22,.66,.22),leg:new xt(.26,.82,.26),blade:new xt(.075,1.05,.17),guard:new xt(.36,.07,.24),grip:new re(.05,.05,.3,6),pommel:new wn(.06,6,6),greathelm:new xt(.56,.52,.54),slit:new xt(.46,.08,.56),tabard:new xt(.64,.82,.06),crossV:new xt(.09,.52,.02),crossH:new xt(.32,.09,.02),hood:new Ae(.42,.62,6),cloak:new xt(.8,.98,.05),hem:new xt(.82,.09,.055),crown:new re(.3,.3,.13,8),spike:new Ae(.06,.16,4),mask:new xt(.44,.26,.06),eye:new xt(.08,.05,.02),coil:new re(.05,.08,.34,6),orb:new wn(.09,8,6),halo:new Xr(.26,.035,8,24),crystal:new Ys(.11,0),quiver:new re(.09,.09,.5,6),brim:new re(.34,.34,.04,10),feather:new xt(.08,.3,.03),strap:new xt(.14,.9,.03),longblade:new xt(.045,1.35,.11),katanaGuard:new re(.09,.09,.03,8),scythePole:new re(.035,.035,1.5,6),scytheBlade:new xt(.5,.09,.07),hammerHead:new xt(.44,.32,.56),prong:new Ae(.05,.42,5),beamBlade:new xt(.1,1.15,.1),wingBig:new xt(1,1.3,.04),collar:new xt(.12,.3,.3),jagged:new xt(.12,.4,.05),chestF:new xt(.5,.24,.4),hipsF:new xt(.68,.26,.44),hairBack:new xt(.42,.55,.16),hairSide:new xt(.1,.4,.12),spearPole:new re(.03,.03,1.7,6),spearTip:new Ae(.07,.3,5),skirt:new Ae(.42,.5,8)};function hl(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.font='bold 36px "Segoe UI", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.lineWidth=7,n.strokeStyle="rgba(0,0,0,0.85)",n.strokeText(s,128,34),n.fillStyle=t,n.fillText(s,128,34);const i=new Xs(e);return i.colorSpace=Oe,i}class Sm{constructor({name:t,primary:e,secondary:n,accent:i,isPlayer:a,skin:r}){this.name=t,this.isPlayer=!!a,this.skinId=r||"knight",this.decor=null,this.time=Math.random()*10,this.walkPhase=Math.random()*6,this.flashT=0,this.deadFaded=!1,this.matPrimary=new Mt({color:e,roughness:.75,metalness:.15,transparent:!0}),this.matSecondary=new Mt({color:n,roughness:.55,metalness:.35,transparent:!0}),this.matAccent=new Mt({color:i,roughness:.4,metalness:.6,transparent:!0}),this.matSkin=new Mt({color:14267276,roughness:.9,transparent:!0}),this.matDark=new Mt({color:3025459,roughness:.9,transparent:!0}),this.matBlade=new Mt({color:14147304,roughness:.25,metalness:.85,transparent:!0}),this.matBeam=new en({color:8956671,transparent:!0,opacity:.92,blending:Ke,depthWrite:!1}),this.matHair=new Mt({color:2759184,roughness:.9,transparent:!0}),this.matGlow=new Mt({color:1118481,emissive:9055202,emissiveIntensity:2.2}),this.mats=[this.matPrimary,this.matSecondary,this.matAccent,this.matSkin,this.matDark,this.matBlade],this.root=new qt;const o=new qt;this.root.add(o),this.torsoPivot=new qt,o.add(this.torsoPivot);const l=new Z(E.torso,this.matPrimary);l.position.y=1.22,l.castShadow=!0,this.torsoPivot.add(l);const c=new Z(E.belt,this.matAccent);c.position.y=.84,c.castShadow=!0,this.torsoPivot.add(c);const h=new Z(E.head,this.matSkin);h.position.y=1.88,h.castShadow=!0,this.torsoPivot.add(h),this.head=h;const d=new Z(E.helm,this.matSecondary);d.position.y=2.08,d.castShadow=!0,this.torsoPivot.add(d);const u=new Z(E.plume,this.matAccent);u.position.y=2.24,this.torsoPivot.add(u),this.armL=this.makeArm(1),this.armR=this.makeArm(-1),this.torsoPivot.add(this.armL.pivot,this.armR.pivot),this.legL=this.makeLeg(-1),this.legR=this.makeLeg(1),o.add(this.legL,this.legR),this.chestF=new Z(E.chestF,this.matPrimary),this.chestF.position.y=1.38,this.chestF.castShadow=!0,this.torsoPivot.add(this.chestF),this.chestF.visible=!1,this.hipsF=new Z(E.hipsF,this.matSecondary),this.hipsF.position.y=.78,this.hipsF.castShadow=!0,o.add(this.hipsF),this.hipsF.visible=!1,this.hairBack=new Z(E.hairBack,this.matHair),this.hairBack.position.set(0,1.74,-.28),this.hairBack.castShadow=!0,this.torsoPivot.add(this.hairBack),this.hairBack.visible=!1,this.hairL=new Z(E.hairSide,this.matHair),this.hairL.position.set(-.28,1.72,0),this.torsoPivot.add(this.hairL),this.hairL.visible=!1,this.hairR=new Z(E.hairSide,this.matHair),this.hairR.position.set(.28,1.72,0),this.torsoPivot.add(this.hairR),this.hairR.visible=!1,this.skirt=new Z(E.skirt,this.matPrimary),this.skirt.position.y=.72,this.skirt.castShadow=!0,o.add(this.skirt),this.skirt.visible=!1,this.buildSword(),this.healthGroup=new qt,this.healthGroup.position.y=2.62,this.barBgMat=new vi({color:1313035,opacity:.85,transparent:!0,depthTest:!1}),this.barBg=new Wi(this.barBgMat),this.barBg.scale.set(.95,.115,1),this.barBg.renderOrder=20,this.barFgMat=new vi({color:5824602,depthTest:!1}),this.barFg=new Wi(this.barFgMat),this.barFg.scale.set(.87,.065,1),this.barFg.position.x=-.435,this.barFg.renderOrder=21,this.healthGroup.add(this.barBg,this.barFg),this.root.add(this.healthGroup);const f=hl(t,a?"#8fd8ff":"#ffb3a3");this.nameSprite=new Wi(new vi({map:f,transparent:!0,depthTest:!1})),this.nameSprite.scale.set(1.7,.42,1),this.nameSprite.position.y=2.95,this.nameSprite.renderOrder=22,this.root.add(this.nameSprite),this.setSkin(this.skinId)}buildSword(t="sword"){this.sword&&(this.armR.hand.remove(this.sword),this.sword=null);const e=new qt,n=(i,a,r=0,o=0,l=0)=>{const c=new Z(i,a);return c.position.set(r,o,l),c.castShadow=!0,e.add(c),c};if(t==="katana")n(E.longblade,this.matBlade,0,.78,0),n(E.katanaGuard,this.matAccent,0,.12,0),n(E.grip,this.matDark,0,-.02,0),n(E.pommel,this.matGlow,0,-.19,0),e.rotation.x=1.02;else if(t==="scythe"){n(E.scythePole,this.matDark,0,.45,0);const i=n(E.scytheBlade,this.matBlade,.24,1.16,0);i.rotation.z=.55;const a=n(E.scytheBlade,this.matBlade,.46,1,0);a.rotation.z=.95,a.scale.set(.85,1,1);const r=n(E.scytheBlade,this.matGlow,.27,1.24,0);r.rotation.z=.55,r.scale.set(.4,1.15,.6),e.rotation.x=.85}else if(t==="hammer")n(E.scythePole,this.matDark,0,.35,0),n(E.hammerHead,this.matBlade,0,.98,0),n(E.orb,this.matGlow,0,.98,.29),n(E.orb,this.matGlow,0,.98,-.29),e.rotation.x=.95;else if(t==="trident"){n(E.scythePole,this.matBlade,0,.5,0),n(E.prong,this.matBlade,0,1.28,0);const i=n(E.prong,this.matBlade,-.17,1.1,0);i.rotation.z=.3;const a=n(E.prong,this.matBlade,.17,1.1,0);a.rotation.z=-.3,e.rotation.x=1}else if(t==="beam"){const i=new Z(E.beamBlade,this.matBeam);i.position.y=.74,e.add(i),n(E.guard,this.matAccent,0,.12,0),n(E.grip,this.matDark,0,-.03,0),e.rotation.x=1.05}else t==="spear"?(n(E.spearPole,this.matDark,0,.4,0),n(E.spearTip,this.matBlade,0,1.35,0),n(E.prong,this.matBlade,0,1.18,0).scale.set(.7,.6,.7),e.rotation.x=.9):(n(E.blade,this.matBlade,0,.68,0),n(E.guard,this.matAccent,0,.13,0),n(E.grip,this.matDark,0,-.03,0),n(E.pommel,this.matAccent,0,-.2,0),e.rotation.x=1.15);this.armR.hand.add(e),this.sword=e}setSkin(t){const e=Gt[t]||Gt.knight;this.skinId=Gt[t]?t:"knight",this.matPrimary.color.setHex(e.primary),this.matSecondary.color.setHex(e.secondary),this.matAccent.color.setHex(e.accent),this.matBlade.emissive.setHex(e.bladeGlow||0),this.matBlade.emissiveIntensity=e.bladeGlow?.85:0,this.matGlow.emissive.setHex(e.bladeGlow||9055202),this.matBeam.color.setHex(e.bladeGlow||8956671);const n=!!e.female;this.chestF.visible=n,this.hipsF.visible=n,this.hairBack.visible=n,this.hairL.visible=n,this.hairR.visible=n,this.skirt.visible=n,this.torsoPivot.children[0].scale.x=n?.84:1,this.armL.pivot.position.x=n?.4:.47,this.armR.pivot.position.x=n?-.4:-.47,this.armL.pivot.children[0].scale.x=n?.82:1,this.armR.pivot.children[0].scale.x=n?.82:1,n&&this.matHair.color.setHex(e.primary),this.buildSword(e.blade||"sword"),this.rebuildDecor(e.decor||"knight")}rebuildDecor(t){this.decor&&(this.torsoPivot.remove(this.decor),this.decor=null,this.orbitGroup=null),this.decorExtra&&(this.torsoPivot.remove(this.decorExtra),this.decorExtra=null);const e=new qt,n=(i,a,r,o,l)=>{const c=new Z(i,a);return c.position.set(r,o,l),c.castShadow=!0,e.add(c),c};if(t==="crusader")n(E.greathelm,this.matSecondary,0,1.86,0),n(E.slit,this.matDark,0,1.9,0),n(E.tabard,this.matPrimary,0,1.12,.235),n(E.crossV,this.matAccent,0,1.16,.27),n(E.crossH,this.matAccent,0,1.24,.27);else if(t==="ranger"){const i=n(E.hood,this.matPrimary,0,2.32,-.02);i.rotation.y=Math.PI/6,n(E.cloak,this.matSecondary,0,1.22,-.26),n(E.hem,this.matAccent,0,.76,-.265)}else if(t==="royal"){n(E.crown,this.matAccent,0,2.22,0);for(let r=0;r<4;r++){const o=r/4*Math.PI*2;n(E.spike,this.matAccent,Math.sin(o)*.22,2.34,Math.cos(o)*.22)}n(E.cloak,this.matPrimary,0,1.18,-.27).scale.set(1.1,1.15,1),n(E.hem,this.matAccent,0,.66,-.275).scale.set(1.1,1,1)}else if(t==="shadow"){const i=n(E.hood,this.matPrimary,0,2.34,-.02);i.rotation.y=Math.PI/6,n(E.mask,this.matDark,0,1.84,.25),n(E.eye,this.matGlow,-.1,1.87,.285),n(E.eye,this.matGlow,.1,1.87,.285)}else if(t==="dragon"){const i=n(E.spike,this.matAccent,-.15,2.2,.02);i.rotation.z=.5,i.scale.set(1.3,1.8,1.3);const a=n(E.spike,this.matAccent,.15,2.2,.02);a.rotation.z=-.5,a.scale.set(1.3,1.8,1.3);const r=n(E.cloak,this.matPrimary,-.42,1.45,-.3);r.rotation.y=.55,r.rotation.z=.5,r.scale.set(.62,.85,1);const o=n(E.cloak,this.matPrimary,.42,1.45,-.3);o.rotation.y=-.55,o.rotation.z=-.5,o.scale.set(.62,.85,1),n(E.crossV,this.matAccent,0,.62,-.26).scale.set(1.2,1.4,1)}else if(t==="reaper"){const i=n(E.hood,this.matPrimary,0,2.42,-.02);i.rotation.y=Math.PI/6,i.scale.set(1.2,1.2,1.2),n(E.mask,this.matDark,0,1.82,.26),n(E.eye,this.matGlow,-.09,1.86,.3),n(E.eye,this.matGlow,.09,1.86,.3);const a=n(E.spike,this.matDark,-.56,1.66,0);a.rotation.z=2.6,a.scale.set(1.4,2,1.4);const r=n(E.spike,this.matDark,.56,1.66,0);r.rotation.z=-2.6,r.scale.set(1.4,2,1.4)}else if(t==="frostking"){n(E.crown,this.matAccent,0,2.22,0);for(let o=0;4>o;o++){const l=o/4*Math.PI*2;n(E.spike,this.matAccent,Math.sin(l)*.22,2.36,Math.cos(l)*.22)}n(E.cloak,this.matSecondary,0,1.2,-.28).scale.set(1.15,1.1,1);const a=n(E.spike,this.matAccent,-.47,1.38,.02);a.rotation.x=Math.PI,a.scale.set(.8,1.6,.8);const r=n(E.spike,this.matAccent,.47,1.38,.02);r.rotation.x=Math.PI,r.scale.set(.8,1.6,.8)}else if(t==="warlord"){const i=n(E.spike,this.matAccent,-.17,2.18,.02);i.rotation.z=.65,i.scale.set(1.5,2.1,1.5);const a=n(E.spike,this.matAccent,.17,2.18,.02);a.rotation.z=-.65,a.scale.set(1.5,2.1,1.5),n(E.mask,this.matDark,0,1.84,.26),n(E.eye,this.matGlow,-.09,1.87,.3),n(E.eye,this.matGlow,.09,1.87,.3);for(let l=-1;l<=1;l++){const c=n(E.spike,this.matAccent,l*.22,.92,.26);c.rotation.x=Math.PI,c.scale.set(.7,1.1,.7)}const r=n(E.spike,this.matSecondary,-.5,1.72,0);r.rotation.z=2.7,r.scale.set(1.3,1.8,1.3);const o=n(E.spike,this.matSecondary,.5,1.72,0);o.rotation.z=-2.7,o.scale.set(1.3,1.8,1.3)}else if(t==="storm")n(E.coil,this.matSecondary,-.47,1.82,0),n(E.coil,this.matSecondary,.47,1.82,0),n(E.orb,this.matGlow,-.47,2.06,0),n(E.orb,this.matGlow,.47,2.06,0),n(E.crossV,this.matGlow,0,1.22,.23),n(E.crossH,this.matGlow,0,1.3,.23),n(E.spike,this.matAccent,0,2.32,-.05).scale.set(.9,1.5,.9);else if(t==="inferno"){for(let o=-1;o<=1;o++)n(E.spike,this.matGlow,o*.12,2.34+Math.abs(o)*-.06,0).scale.set(.9,1.6-Math.abs(o)*.3,.9);n(E.spike,this.matGlow,-.47,1.78,0).scale.set(1.1,1.5,1.1),n(E.spike,this.matGlow,.47,1.78,0).scale.set(1.1,1.5,1.1),n(E.cloak,this.matSecondary,0,1.18,-.28).scale.set(1.05,1.1,1)}else if(t==="celestial"){const i=new Z(E.halo,this.matGlow);i.position.y=2.52,i.rotation.x=Math.PI/2,this.torsoPivot.add(i),this.decorExtra=i;const a=n(E.cloak,this.matAccent,-.46,1.5,-.3);a.rotation.y=.6,a.rotation.z=.35,a.scale.set(.6,1,1);const r=n(E.cloak,this.matAccent,.46,1.5,-.3);r.rotation.y=-.6,r.rotation.z=-.35,r.scale.set(.6,1,1),n(E.crossV,this.matAccent,0,1.24,.235)}else if(t==="cosmic"){const i=n(E.hood,this.matPrimary,0,2.42,-.02);i.rotation.y=Math.PI/6,i.scale.set(1.25,1.25,1.25),n(E.mask,this.matDark,0,1.82,.26),n(E.eye,this.matGlow,-.09,1.86,.3),n(E.eye,this.matGlow,.09,1.86,.3),n(E.cloak,this.matSecondary,0,1.16,-.29).scale.set(1.25,1.25,1);for(let l=0;l<5;l++)n(E.orb,this.matGlow,Ua(-.3,.3),Ua(.9,1.6),-.32).scale.setScalar(Ua(.4,.9));const r=n(E.spike,this.matSecondary,-.54,1.7,0);r.rotation.z=2.6,r.scale.set(1.4,1.9,1.4);const o=n(E.spike,this.matSecondary,.54,1.7,0);o.rotation.z=-2.6,o.scale.set(1.4,1.9,1.4),this.orbitGroup=new qt,this.orbitGroup.position.y=1.5;for(let l=0;l<4;l++){const c=l/4*Math.PI*2,h=new Z(E.crystal,this.matGlow);h.position.set(Math.sin(c)*.95,Math.sin(l*2.1)*.22,Math.cos(c)*.95),h.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),this.orbitGroup.add(h)}e.add(this.orbitGroup)}else if(t==="squire"){n(E.hood,this.matSecondary,0,2.28,-.02).scale.setScalar(.8);const i=n(E.quiver,this.matDark,-.28,1.35,-.28);i.rotation.z=.4,n(E.strap,this.matAccent,.12,1.22,.23).rotation.z=-.5}else if(t==="mercenary"){n(E.brim,this.matDark,0,2.02,0).scale.setScalar(.75);const i=n(E.strap,this.matSecondary,-.1,1.22,.23);i.rotation.z=.55,n(E.pauldron,this.matSecondary,.52,1.62,0).scale.setScalar(1.2),n(E.eye,this.matGlow,-.09,1.87,.27)}else if(t==="pikeman")n(E.helm,this.matSecondary,0,2.06,0),n(E.strap,this.matDark,0,1.9,.25).scale.set(.5,.5,.4),n(E.tabard,this.matSecondary,0,1.12,.235);else if(t==="archerguard"){n(E.brim,this.matSecondary,0,2.08,0),n(E.hood,this.matPrimary,0,2.26,-.02).scale.setScalar(.7);const i=n(E.quiver,this.matDark,.3,1.4,-.28);i.rotation.z=-.45,n(E.strap,this.matSecondary,-.1,1.24,.22).rotation.z=.5}else if(t==="ironclad"){n(E.greathelm,this.matSecondary,0,1.88,0),n(E.slit,this.matDark,0,1.92,0),n(E.pauldron,this.matSecondary,-.52,1.6,0).scale.setScalar(1.35),n(E.pauldron,this.matSecondary,.52,1.6,0).scale.setScalar(1.35),n(E.tabard,this.matDark,0,1.1,.24);for(let r=0;r<3;r++)n(E.pommel,this.matAccent,-.2+r*.2,1.5,.24).scale.setScalar(.6)}else if(t==="duelist"){n(E.brim,this.matPrimary,0,2.14,0).scale.setScalar(.85);const a=n(E.feather,this.matAccent,.18,2.32,-.08);a.rotation.z=-.6;const r=n(E.strap,this.matAccent,.1,1.2,.24);r.rotation.z=-.6,n(E.cloak,this.matPrimary,0,1.24,-.27).scale.set(.7,.9,1)}else if(t==="venom"){const i=n(E.hood,this.matPrimary,0,2.36,-.02);i.rotation.y=Math.PI/6,n(E.mask,this.matDark,0,1.84,.25),n(E.eye,this.matGlow,-.09,1.87,.29),n(E.eye,this.matGlow,.09,1.87,.29),n(E.orb,this.matGlow,0,2.5,.1).scale.setScalar(.5)}else if(t==="sandreaper")n(E.hood,this.matPrimary,0,2.34,0).scale.set(1.1,1.1,1.1),n(E.cloak,this.matSecondary,0,1.2,-.27),n(E.mask,this.matDark,0,1.86,.24),n(E.eye,this.matAccent,-.08,1.9,.27),n(E.eye,this.matAccent,.08,1.9,.27);else if(t==="thunderguard")n(E.coil,this.matSecondary,0,2.24,-.05),n(E.orb,this.matGlow,0,2.46,-.05),n(E.crossV,this.matGlow,0,1.24,.23),n(E.eye,this.matGlow,-.08,1.88,.27),n(E.eye,this.matGlow,.08,1.88,.27);else if(t==="bloodbaron"){const i=n(E.collar,this.matSecondary,-.2,1.72,-.05);i.rotation.z=.3;const a=n(E.collar,this.matSecondary,.2,1.72,-.05);a.rotation.z=-.3,n(E.cloak,this.matPrimary,0,1.22,-.28),n(E.eye,this.matGlow,-.09,1.88,.26),n(E.eye,this.matGlow,.09,1.88,.26),n(E.crossV,this.matAccent,0,1.24,.23)}else if(t==="gladiatorgold")n(E.plume,this.matAccent,0,2.3,0).scale.set(1.6,2,1.4),n(E.pauldron,this.matAccent,-.52,1.62,0).scale.setScalar(1.3),n(E.pauldron,this.matAccent,.52,1.62,0).scale.setScalar(1.3),n(E.crossV,this.matSecondary,0,1.22,.235),n(E.pommel,this.matAccent,0,1,.24).scale.setScalar(1.4);else if(t==="shadowassassin"){const i=n(E.strap,this.matDark,0,1.62,.02);i.rotation.z=1.5,i.scale.set(2.4,.4,1),n(E.eye,this.matGlow,-.09,1.88,.26),n(E.eye,this.matGlow,.09,1.88,.26),n(E.hood,this.matPrimary,0,2.32,0).scale.set(1.05,1.05,1.05)}else if(t==="frostwarden")n(E.crown,this.matAccent,0,2.2,0),n(E.orb,this.matGlow,-.3,2.2,.1).scale.setScalar(.7),n(E.orb,this.matGlow,.3,2.2,.1).scale.setScalar(.7),n(E.cloak,this.matSecondary,0,1.2,-.28).scale.set(1.1,1.05,1);else if(t==="emberchampion"){for(let i=-1;i<=1;i++)n(E.spike,this.matGlow,i*.13,2.32-Math.abs(i)*.08,0).scale.set(.8,1.4-Math.abs(i)*.3,.8);n(E.crossV,this.matGlow,0,1.2,.235),n(E.eye,this.matGlow,-.09,1.88,.27),n(E.eye,this.matGlow,.09,1.88,.27)}else if(t==="stormsovereign"){for(let i=0;i<3;i++){const a=n(E.spike,this.matAccent,-.18+i*.18,2.3,0);a.rotation.z=(i-1)*.4,a.scale.set(.8,1.5,.8)}n(E.eye,this.matGlow,-.09,1.88,.27),n(E.eye,this.matGlow,.09,1.88,.27)}else if(t==="abyssal"){for(let a=0;a<3;a++){const r=n(E.jagged,this.matAccent,0,2.2+a*.12,-.1-a*.06);r.rotation.x=-.4,r.scale.set(.6,1-a*.2,.6)}n(E.eye,this.matGlow,-.1,1.88,.26),n(E.eye,this.matGlow,.1,1.88,.26),this.orbitGroup=new qt,this.orbitGroup.position.y=1.4;const i=new Z(E.orb,this.matGlow);i.scale.setScalar(1.4),i.position.x=.8,this.orbitGroup.add(i),e.add(this.orbitGroup)}else if(t==="phoenix"){const i=n(E.wingBig,this.matAccent,-.55,1.55,-.25);i.rotation.y=.5,i.rotation.z=.45;const a=n(E.wingBig,this.matAccent,.55,1.55,-.25);a.rotation.y=-.5,a.rotation.z=-.45;for(let r=0;r<3;r++)n(E.spike,this.matGlow,(r-1)*.12,2.34-Math.abs(r-1)*.05,0).scale.set(.7,1.3-Math.abs(r-1)*.25,.7);n(E.eye,this.matGlow,-.09,1.88,.27),n(E.eye,this.matGlow,.09,1.88,.27)}else if(t==="voidemperor"){for(let a=0;a<4;a++){const r=a/4*Math.PI*2;n(E.spike,this.matSecondary,Math.sin(r)*.2,2.34,Math.cos(r)*.2).scale.set(.9,1.7,.9)}n(E.cloak,this.matPrimary,0,1.18,-.29).scale.set(1.2,1.2,1),n(E.eye,this.matGlow,-.09,1.87,.28),n(E.eye,this.matGlow,.09,1.87,.28),this.orbitGroup=new qt,this.orbitGroup.position.y=1.45;const i=new Z(E.orb,this.matGlow);i.scale.setScalar(1.8),i.position.y=.3,this.orbitGroup.add(i),e.add(this.orbitGroup)}else if(t==="titanbreaker"){n(E.pauldron,this.matSecondary,-.55,1.62,0).scale.set(1.8,1.3,1.4),n(E.pauldron,this.matSecondary,.55,1.62,0).scale.set(1.8,1.3,1.4);const r=n(E.spike,this.matAccent,-.2,2.2,.05);r.rotation.z=.55,r.scale.set(1.2,1.6,1.2);const o=n(E.spike,this.matAccent,.2,2.2,.05);o.rotation.z=-.55,o.scale.set(1.2,1.6,1.2),n(E.crossV,this.matGlow,0,1.2,.235),n(E.crossH,this.matGlow,0,1.3,.235)}else if(t==="seraph"){const i=new Z(E.halo,this.matGlow);i.position.y=2.56,i.rotation.x=Math.PI/2,this.torsoPivot.add(i),this.decorExtra=i;for(const a of[-1,1])for(let r=0;r<3;r++){const o=n(E.wingBig,this.matSecondary,a*(.45+r*.16),1.7-r*.18,-.26-r*.05);o.rotation.y=a*(.4+r*.12),o.rotation.z=a*(.3-r*.1),o.scale.set(.75-r*.12,1.05-r*.15,1)}n(E.crossV,this.matAccent,0,1.24,.235)}else if(t==="chaosoverlord"){const i=n(E.spike,this.matSecondary,-.18,2.2,0);i.rotation.z=.8,i.rotation.x=.3,i.scale.set(1.3,1.9,1.3);const a=n(E.spike,this.matSecondary,.18,2.2,0);a.rotation.z=-.8,a.rotation.x=-.3,a.scale.set(1.3,1.9,1.3),n(E.eye,this.matGlow,-.09,1.87,.27),n(E.eye,this.matGlow,.09,1.87,.27),n(E.jagged,this.matGlow,-.15,1.2,.24).rotation.z=.4,n(E.jagged,this.matGlow,.15,1.14,.24).rotation.z=-.4,this.orbitGroup=new qt,this.orbitGroup.position.y=1.45;const r=new Z(E.orb,this.matGlow);r.position.set(.85,.2,0);const o=new Z(E.orb,this.matGlow);o.position.set(-.85,-.15,.2),o.scale.setScalar(.8),this.orbitGroup.add(r,o),e.add(this.orbitGroup)}else if(t==="fouiefury"){const i=new Z(E.longblade,this.matBlade);i.position.set(-.3,1.35,-.3),i.rotation.z=2.4,i.castShadow=!0,e.add(i),n(E.strap,this.matDark,0,1.3,.05).rotation.z=1.5,n(E.strap,this.matAccent,0,2,.02).scale.set(1.3,.35,1.2);const r=n(E.strap,this.matAccent,-.08,1.9,-.28);r.rotation.x=.4,r.scale.set(.3,1,.3);const o=n(E.strap,this.matAccent,.08,1.88,-.28);o.rotation.x=.5,o.scale.set(.3,.9,.3),n(E.eye,this.matGlow,-.09,1.88,.26),n(E.eye,this.matGlow,.09,1.88,.26)}else if(t==="prenpren"){n(E.hood,this.matPrimary,0,2.5,-.03).scale.set(1.35,1.4,1.35),n(E.mask,this.matDark,0,1.8,.27),n(E.eye,this.matGlow,-.09,1.85,.31),n(E.eye,this.matGlow,.09,1.85,.31);const a=n(E.cloak,this.matSecondary,-.14,1.12,-.3);a.rotation.z=.12,a.scale.set(.75,1.3,1);const r=n(E.cloak,this.matPrimary,.16,1.08,-.31);r.rotation.z=-.1,r.scale.set(.7,1.22,1);const o=n(E.collar,this.matSecondary,-.22,1.74,-.04);o.rotation.z=.35;const l=n(E.collar,this.matSecondary,.22,1.74,-.04);l.rotation.z=-.35,this.orbitGroup=new qt,this.orbitGroup.position.y=1.5;for(let c=0;c<3;c++){const h=c/3*Math.PI*2,d=new Z(E.orb,this.matGlow);d.position.set(Math.sin(h)*.95,Math.sin(c*2.4)*.3,Math.cos(h)*.95),d.scale.setScalar(.8+c*.15),this.orbitGroup.add(d)}e.add(this.orbitGroup)}else if(t==="chronowarden"){const i=new Z(E.halo,this.matGlow);i.position.y=2.54,i.rotation.x=Math.PI/2,this.torsoPivot.add(i),this.decorExtra=i,n(E.eye,this.matGlow,-.09,1.88,.27),n(E.eye,this.matGlow,.09,1.88,.27),this.orbitGroup=new qt,this.orbitGroup.position.y=1.5;for(let a=0;a<2;a++){const r=new Z(E.orb,this.matGlow);r.position.set(a===0?.9:-.9,.1,0),this.orbitGroup.add(r)}e.add(this.orbitGroup)}else if(t==="bloodmooncountess"){n(E.hood,this.matPrimary,0,2.4,-.02).scale.set(1.2,1.2,1.2),n(E.eye,this.matGlow,-.09,1.87,.28),n(E.eye,this.matGlow,.09,1.87,.28);const a=n(E.collar,this.matSecondary,-.22,1.72,-.04);a.rotation.z=.35;const r=n(E.collar,this.matSecondary,.22,1.72,-.04);r.rotation.z=-.35,n(E.cloak,this.matPrimary,0,1.14,-.3).scale.set(1.15,1.25,1)}else if(t==="worldbreaker"){n(E.pauldron,this.matSecondary,-.58,1.64,0).scale.set(2,1.5,1.5),n(E.pauldron,this.matSecondary,.58,1.64,0).scale.set(2,1.5,1.5),n(E.crossV,this.matGlow,0,1.18,.235),n(E.crossH,this.matGlow,0,1.3,.235),n(E.jagged,this.matGlow,-.18,1.05,.24).rotation.z=.5;const r=n(E.spike,this.matSecondary,-.22,2.22,0);r.rotation.z=.7;const o=n(E.spike,this.matSecondary,.22,2.22,0);o.rotation.z=-.7}else if(t==="archangel"){const i=new Z(E.halo,this.matGlow);i.position.y=2.6,i.rotation.x=Math.PI/2,this.torsoPivot.add(i),this.decorExtra=i;for(const a of[-1,1])for(let r=0;r<2;r++){const o=n(E.wingBig,this.matSecondary,a*(.5+r*.2),1.75-r*.22,-.28-r*.06);o.rotation.y=a*(.45+r*.15),o.rotation.z=a*(.35-r*.12),o.scale.set(.9-r*.15,1.25-r*.2,1)}n(E.crossV,this.matAccent,0,1.24,.235)}else if(t==="paladin")n(E.tabard,this.matSecondary,0,1.12,.235),n(E.crossV,this.matAccent,0,1.18,.27),n(E.helm,this.matSecondary,0,2.06,0),n(E.pauldron,this.matAccent,-.52,1.62,0).scale.setScalar(1.25),n(E.pauldron,this.matAccent,.52,1.62,0).scale.setScalar(1.25);else if(t==="ronin"){n(E.brim,this.matSecondary,0,2.1,0),n(E.strap,this.matSecondary,-.1,1.24,.22).rotation.z=.5;const i=new Z(E.longblade,this.matBlade);i.position.set(-.3,1.32,-.3),i.rotation.z=2.4,i.castShadow=!0,e.add(i)}else if(t==="dreadpirate")n(E.brim,this.matDark,0,2.14,0),n(E.eye,this.matGlow,.1,1.88,.27).scale.setScalar(.8),n(E.cloak,this.matPrimary,0,1.2,-.28),n(E.strap,this.matSecondary,-.1,1.24,.22).rotation.z=.5;else if(t==="plaguedoctor")n(E.hood,this.matPrimary,0,2.34,-.02).scale.set(1.1,1.1,1.1),n(E.mask,this.matSecondary,0,1.82,.26).scale.set(.8,1.3,.8),n(E.eye,this.matGlow,-.08,1.9,.28),n(E.eye,this.matGlow,.08,1.9,.28),n(E.crossV,this.matGlow,0,1.22,.235);else if(t==="oniwarrior"){const i=n(E.spike,this.matAccent,-.16,2.16,.05);i.rotation.z=.5,i.scale.set(1.2,1.7,1.2);const a=n(E.spike,this.matAccent,.16,2.16,.05);a.rotation.z=-.5,a.scale.set(1.2,1.7,1.2),n(E.mask,this.matDark,0,1.84,.26),n(E.eye,this.matGlow,-.09,1.88,.28),n(E.eye,this.matGlow,.09,1.88,.28),n(E.strap,this.matSecondary,.1,1.24,.22).rotation.z=-.5}else if(t==="moonlitmaiden"){n(E.hood,this.matSecondary,0,2.3,-.04).scale.set(1.05,.9,1.05),n(E.eye,this.matGlow,-.09,1.88,.27),n(E.eye,this.matGlow,.09,1.88,.27);const a=new Z(E.halo,this.matGlow);a.position.y=2.5,a.rotation.x=Math.PI/2,a.scale.setScalar(.8),this.torsoPivot.add(a),this.decorExtra=a}else if(t==="scarletvale")n(E.hood,this.matPrimary,0,2.34,-.02).scale.set(1.05,1.05,1.05),n(E.eye,this.matGlow,-.08,1.88,.27),n(E.eye,this.matGlow,.08,1.88,.27),n(E.orb,this.matGlow,.2,1.42,.24).scale.setScalar(.7),n(E.strap,this.matSecondary,-.1,1.26,.22).rotation.z=.5;else if(t==="tempestrose")n(E.brim,this.matSecondary,0,2.1,0).scale.setScalar(.8),n(E.eye,this.matGlow,-.08,1.88,.27),n(E.eye,this.matGlow,.08,1.88,.27),n(E.orb,this.matGlow,-.2,1.42,.24).scale.setScalar(.7),n(E.cloak,this.matPrimary,0,1.22,-.27).scale.set(.75,.95,1);else if(t==="emberlily"){for(let a=0;a<3;a++)n(E.spike,this.matGlow,(a-1)*.1,2.3-Math.abs(a-1)*.06,-.02).scale.set(.6,1.1-Math.abs(a-1)*.25,.6);n(E.eye,this.matGlow,-.08,1.88,.27),n(E.eye,this.matGlow,.08,1.88,.27),n(E.orb,this.matGlow,.18,1.44,.24).scale.setScalar(.7)}else if(t==="frostlily")n(E.crown,this.matAccent,0,2.2,0),n(E.eye,this.matGlow,-.08,1.88,.27),n(E.eye,this.matGlow,.08,1.88,.27),n(E.orb,this.matGlow,.18,1.44,.24).scale.setScalar(.7),n(E.cloak,this.matSecondary,0,1.22,-.27).scale.set(.8,.95,1);else if(t==="violetenchantress"){n(E.hood,this.matPrimary,0,2.36,-.02).scale.set(1.08,1.08,1.08),n(E.eye,this.matGlow,-.08,1.88,.28),n(E.eye,this.matGlow,.08,1.88,.28),this.orbitGroup=new qt,this.orbitGroup.position.y=1.45;const a=new Z(E.orb,this.matGlow);a.position.x=.85,a.scale.setScalar(1.2),this.orbitGroup.add(a),e.add(this.orbitGroup)}else if(t==="goldenempress"){n(E.crown,this.matAccent,0,2.2,0);for(let i=0;i<4;i++){const a=i/4*Math.PI*2;n(E.spike,this.matAccent,Math.sin(a)*.22,2.34,Math.cos(a)*.22).scale.setScalar(.8)}n(E.eye,this.matGlow,-.08,1.88,.27),n(E.eye,this.matGlow,.08,1.88,.27),n(E.cloak,this.matSecondary,0,1.2,-.28).scale.set(1.05,1.1,1)}else if(t==="crimsonhuntress")n(E.hood,this.matPrimary,0,2.34,-.02).scale.set(1.08,1.08,1.08),n(E.eye,this.matGlow,-.08,1.88,.28),n(E.eye,this.matGlow,.08,1.88,.28),n(E.quiver,this.matDark,.28,1.4,-.28).rotation.z=-.45,n(E.orb,this.matGlow,-.18,1.44,.24).scale.setScalar(.7);else if(t==="stormvalkyrie"){for(const i of[-1,1])for(let a=0;a<2;a++){const r=n(E.wingBig,this.matSecondary,i*(.48+a*.18),1.72-a*.2,-.27-a*.05);r.rotation.y=i*(.42+a*.14),r.rotation.z=i*(.32-a*.1),r.scale.set(.7-a*.1,1.1-a*.18,1)}n(E.eye,this.matGlow,-.08,1.88,.27),n(E.eye,this.matGlow,.08,1.88,.27)}else if(t==="starweaver"){n(E.hood,this.matPrimary,0,2.36,-.02).scale.set(1.1,1.1,1.1),n(E.eye,this.matGlow,-.08,1.88,.28),n(E.eye,this.matGlow,.08,1.88,.28),this.orbitGroup=new qt,this.orbitGroup.position.y=1.5;for(let a=0;a<3;a++){const r=a/3*Math.PI*2,o=new Z(E.crystal,this.matGlow);o.position.set(Math.sin(r)*.9,Math.sin(a*2.2)*.25,Math.cos(r)*.9),o.scale.setScalar(.7),this.orbitGroup.add(o)}e.add(this.orbitGroup)}e.children.length&&(this.torsoPivot.add(e),this.decor=e)}makeArm(t){const e=new qt;e.position.set(t*.47,1.56,0);const n=new Z(E.arm,this.matPrimary);n.position.y=-.33,n.castShadow=!0,e.add(n);const i=new Z(E.pauldron,this.matSecondary);i.position.y=-.04,i.castShadow=!0,e.add(i);const a=new qt;return a.position.y=-.66,e.add(a),{pivot:e,hand:a}}makeLeg(t){const e=new qt;e.position.set(t*.19,.84,0);const n=new Z(E.leg,this.matDark);return n.position.y=-.41,n.castShadow=!0,e.add(n),e}setYaw(t){this.root.rotation.y=t}setHealthBar(t){t=Ss(t,0,1);const e=Math.max(.001,.87*t);this.barFg.scale.x=e,this.barFg.position.x=-.435+e/2,t>.5?this.barFgMat.color.setHex(5824602):t>.25?this.barFgMat.color.setHex(16757575):this.barFgMat.color.setHex(16729927)}setVisible(t){this.root.visible=t}hitFlash(){this.flashT=.18}reset(){this.root.rotation.x=0,this.setVisible(!0);for(const t of this.mats)t.opacity=1;this.flashT=0,this.deadFaded=!1,this._celBase=null,this.removeCrown(),this.armL.pivot.rotation.set(0,0,0),this.armR.pivot.rotation.set(0,0,0),this.legL.rotation.set(0,0,0),this.legR.rotation.set(0,0,0),this.torsoPivot.rotation.set(0,0,0),this.torsoPivot.position.y=0,this.setHealthBar(1)}dispose(){this.nameSprite.material.map.dispose(),this.nameSprite.material.dispose();for(const t of this.mats)t.dispose();this.barBgMat.dispose(),this.barFgMat.dispose()}update(t,e){if(this.time+=t,this.flashT>0){this.flashT-=t;const T=Math.max(this.flashT/.18,0);this.matPrimary.emissive.setHex(11145489),this.matSecondary.emissive.setHex(6689041),this.matPrimary.emissiveIntensity=T*.9,this.matSecondary.emissiveIntensity=T*.9,this.flashT<=0&&(this.matPrimary.emissiveIntensity=0,this.matSecondary.emissiveIntensity=0)}if(e.invulnBlink?this.setVisible(Math.sin(this.time*24)>-.4):(!e.dead||e.deadT<3.1)&&!e.invulnBlink&&!e.dead&&this.setVisible(!0),e.dead){const T=Math.min(e.deadT/.45,1),R=1-Math.pow(1-T,3);this.root.rotation.x=-R*1.5;const D=Math.min(1,t*8);if(this.armL.pivot.rotation.x+=(-.7-this.armL.pivot.rotation.x)*D,this.armR.pivot.rotation.x+=(-.7-this.armR.pivot.rotation.x)*D,this.armL.pivot.rotation.z+=(.9-this.armL.pivot.rotation.z)*D,this.armR.pivot.rotation.z+=(-.9-this.armR.pivot.rotation.z)*D,this.legL.rotation.x+=(-.25-this.legL.rotation.x)*D,this.legR.rotation.x+=(.15-this.legR.rotation.x)*D,this.torsoPivot.rotation.x+=(0-this.torsoPivot.rotation.x)*D,e.deadT>2.2&&!this.deadFaded){const W=Math.max(0,1-(e.deadT-2.2)/.9);for(const _ of this.mats)_.opacity=W;W<=.01&&(this.deadFaded=!0,this.setVisible(!1))}return}this.root.rotation.x+=(0-this.root.rotation.x)*Math.min(1,t*14);for(const T of this.mats)T.opacity<1&&(T.opacity=Math.min(1,T.opacity+t*4));if(e.sit||e.celebrate){const T=Math.min(1,t*8);(this._celBase===null||this._celBase===void 0)&&(this._celBase=this.root.position.y),e.celebrate?(this.root.position.y=this._celBase+Math.abs(Math.sin(this.time*7))*.38,this.armL.pivot.rotation.x+=(-2.9-this.armL.pivot.rotation.x)*T,this.armR.pivot.rotation.x+=(-2.9-this.armR.pivot.rotation.x)*T,this.armL.pivot.rotation.z+=(.35-this.armL.pivot.rotation.z)*T,this.armR.pivot.rotation.z+=(-.35-this.armR.pivot.rotation.z)*T,this.legL.rotation.x+=(.15-this.legL.rotation.x)*T,this.legR.rotation.x+=(-.15-this.legR.rotation.x)*T,this.torsoPivot.rotation.x+=(-.06-this.torsoPivot.rotation.x)*T,this.torsoPivot.position.y+=(0-this.torsoPivot.position.y)*T):(this.root.position.y=this._celBase,this.legL.rotation.x+=(-1.5-this.legL.rotation.x)*T,this.legR.rotation.x+=(-1.5-this.legR.rotation.x)*T,this.armL.pivot.rotation.x+=(-.25-this.armL.pivot.rotation.x)*T,this.armR.pivot.rotation.x+=(-.25-this.armR.pivot.rotation.x)*T,this.armL.pivot.rotation.z+=(.45-this.armL.pivot.rotation.z)*T,this.armR.pivot.rotation.z+=(-.45-this.armR.pivot.rotation.z)*T,this.torsoPivot.rotation.x+=(-.14-this.torsoPivot.rotation.x)*T,this.torsoPivot.position.y+=(-.5-this.torsoPivot.position.y)*T),this.torsoPivot.rotation.y+=(0-this.torsoPivot.rotation.y)*T,this.head&&(this.head.rotation.y+=(0-this.head.rotation.y)*T);return}this._celBase=null;const n=e.speedRatio||0,i=n>.02&&e.grounded!==!1;i&&(this.walkPhase+=t*(6+10*n));const a=Math.min(n/.55,1),r=i?Math.sin(this.walkPhase)*(.55+.45*n):0;let o=i?Math.abs(Math.cos(this.walkPhase))*(.05+.05*a):0;const l=Math.sin(this.time*1.9)*.02;let c=i?-.45-r*.85:-.12+l*2.2,h=.12+l,d=i?-.45+r*.5-a*.35:-.38+l*1.6,u=0,f=-(.16+l),g=r,x=-r,m=n*(.18+.16*a),p=i?Math.sin(this.walkPhase)*.09*n:0;if(e.grounded||(g=.5,x=-.35,c=-.4,d=-.3,m=.08),e.blocking&&(d=-1.35,u=.5,f=-.35,c=-.55,h=.75,m=.1),e.attack){let Ht=function(){return e.grounded?r*.6:-.3};var C=Ht;const T=e.attack.p,R=Ss(T/.32,0,1),D=Ss((T-.32)/.28,0,1),W=Ss((T-.6)/.4,0,1),_=1-(1-R)*(1-R),w=D*D*(3-2*D);let k,z,X,j,G,Q,H,ot,rt,pt;e.attack.type==="slash"?(k=-1.1,z=-1.15,X=-1.2,H=-.55,rt=.06,j=-1.05,G=.75,Q=-.25,ot=.45,pt=.12):e.attack.type==="slashR"?(k=-1.1,z=.95,X=-.3,H=.55,rt=.06,j=-1.05,G=-.75,Q=-1.1,ot=-.45,pt=.12):(k=-2.75,z=0,X=-.15,H=0,rt=-.08,j=.55,G=0,Q=-.15,ot=0,pt=.38);const Ot={x:_*k+w*(j-k),y:_*z+w*(G-z),z:_*X+w*(Q-X)};d=W<1?Ot.x+W*(Ht()-Ot.x):Ht(),u=W<1?Ot.y+W*((u||0)-Ot.y):u,f=W<1?Ot.z+W*(-(.09+l)-Ot.z):-(.09+l),p=W<1?(_*H+w*(ot-H))*(1-W):0,m=W<1?_*rt+w*(pt-rt):m,c=-.35+w*.25,h=.5,g*=.4,x*=.4}const M=e.dash||0;M>0&&(m+=M*.5,c+=M*.85,d+=M*.85,h+=M*.25,g-=M*.35,x+=M*.45);const v=e.land||0;v>0&&(o-=v*.14,g+=v*.55,x+=v*.55,m+=v*.18);const S=Math.min(1,t*(e.attack?28:14));if(this.armL.pivot.rotation.x+=(c-this.armL.pivot.rotation.x)*S,this.armL.pivot.rotation.z+=(h-this.armL.pivot.rotation.z)*S,this.armL.pivot.rotation.y+=(0-this.armL.pivot.rotation.y)*S,this.armR.pivot.rotation.x+=(d-this.armR.pivot.rotation.x)*S,this.armR.pivot.rotation.y+=(u-this.armR.pivot.rotation.y)*S,this.armR.pivot.rotation.z+=(f-this.armR.pivot.rotation.z)*S,this.legL.rotation.x+=(g-this.legL.rotation.x)*S,this.legR.rotation.x+=(x-this.legR.rotation.x)*S,this.torsoPivot.rotation.y+=(p-this.torsoPivot.rotation.y)*Math.min(1,t*20),this.torsoPivot.rotation.x+=(m-this.torsoPivot.rotation.x)*Math.min(1,t*12),this.torsoPivot.position.y=o,this.orbitGroup&&(this.orbitGroup.rotation.y+=t*2.3,this.orbitGroup.position.y=1.5+Math.sin(this.time*2.1)*.09),this.crown&&(this.crown.position.y=3.32+Math.sin(this.time*2.5)*.07,this.crown.rotation.y+=t*.8),this.head){const T=e.lookAround?Math.sin(this.time*.85)*.6:0;this.head.rotation.y+=(T-this.head.rotation.y)*Math.min(1,t*6)}}addCrown(t){this.removeCrown();const e=[16766720,13159636,13471562],n=e[t-1]||e[0],i=new Mt({color:n,emissive:n,emissiveIntensity:.35,metalness:.7,roughness:.3}),a=new qt,r=new Z(new re(.3,.34,.14,8),i);a.add(r);for(let o=0;o<4;o++){const l=o/4*Math.PI*2,c=new Z(new Ae(.07,.2,4),i);c.position.set(Math.sin(l)*.24,.16,Math.cos(l)*.24),a.add(c)}a.position.y=3.32,this.torsoPivot.add(a),this.crown=a,this.crownMat=i}removeCrown(){this.crown&&(this.torsoPivot.remove(this.crown),this.crown=null),this.crownMat&&(this.crownMat.dispose(),this.crownMat=null)}setName(t){this.name=t;const e=hl(t,this.isPlayer?"#8fd8ff":"#ffb3a3"),n=this.nameSprite.material.map;this.nameSprite.material.map=e,this.nameSprite.material.needsUpdate=!0,n&&n.dispose()}}const bm=6.2,dl=9.8,wm={slash:{key:"slash",label:"Horizontal Slash",dmg:20,range:3.15,arcCos:Math.cos(1.31),dur:.55,activeStart:.3,activeEnd:.52,cool:.14,lunge:2.2,fx:"h"},slashR:{key:"slashR",label:"Reverse Slash",dmg:20,range:3.15,arcCos:Math.cos(1.31),dur:.55,activeStart:.3,activeEnd:.52,cool:.14,lunge:2.2,fx:"h",mirror:!0},strong:{key:"strong",label:"Heavy Thrust",dmg:35,range:3.8,arcCos:Math.cos(.66),dur:.92,activeStart:.44,activeEnd:.64,cool:.34,lunge:3.6,fx:"v"}},ul=["slash","slashR","strong"],Em=5,Na=new P;class Zl{constructor(t,{name:e,colors:n,pos:i,isPlayer:a=!1,isEnemy:r=!1,skin:o="knight",stats:l=null}){this.game=t,this.name=e,this.isPlayer=a,this.isEnemy=r,this.speedMul=1,this.stats=l||{name:e,kills:0,deaths:0},l||t.state.register(this.stats),this.pos=new P().copy(i),this.vel=new P,this.yaw=Math.atan2(-this.pos.x,-this.pos.z),this.radius=.45,this.height=1.8,this.grounded=!0,this.wasGrounded=!0,this.maxHp=100,this.hp=100,this.dead=!1,this.deadT=0,this.respawnT=0,this.invulnT=0,this.blocking=!1,this.blockStaggerT=0,this.attack=null,this.cooldownT=0,this.comboIdx=0,this.comboResetT=0,this.bufferedAttackT=0,this.dashT=0,this.dashCdT=0,this.landT=0,this.footAcc=0,this.rig=new Sm({name:e,primary:n.primary,secondary:n.secondary,accent:n.accent,isPlayer:a,skin:o}),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,t.scene.add(this.rig.root),t.combat.register(this)}fwd(t=Na){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}canAct(){return!this.dead}canAttack(){return!this.dead&&!this.attack&&this.cooldownT<=0&&!this.blocking}requestAttack(){this.bufferedAttackT=.22}tryDash(t,e){if(this.dead||this.dashCdT>0||!this.grounded||this.blocking)return!1;const n=Math.hypot(t,e)||1;return this.vel.x=t/n*17,this.vel.z=e/n*17,this.vel.y=Math.max(this.vel.y,1.6),this.dashT=.22,this.dashCdT=1.05,this.game.audio.dash(),!0}setBlocking(t){this.blocking=!!t&&!this.dead&&!this.attack}startAttack(){if(!this.canAttack())return!1;const t=ul[this.comboIdx],e=wm[t];this.attack={def:e,t:0,hit:new Set,swung:!1},this.comboIdx=(this.comboIdx+1)%ul.length,this.comboResetT=1,this.bufferedAttackT=0;const n=this.fwd(Na);return this.vel.x+=n.x*e.lunge,this.vel.z+=n.z*e.lunge,!0}beginAttackIfReady(){this.bufferedAttackT>0&&this.canAttack()&&this.startAttack()}updateCommon(t){if(this.cooldownT>0&&(this.cooldownT-=t),this.invulnT>0&&(this.invulnT-=t),this.blockStaggerT>0&&(this.blockStaggerT-=t),this.bufferedAttackT>0&&(this.bufferedAttackT-=t),this.dashCdT>0&&(this.dashCdT-=t),this.landT>0&&(this.landT=Math.max(0,this.landT-t)),this.comboResetT>0&&(this.comboResetT-=t,this.comboResetT<=0&&(this.comboIdx=0)),this.dead)return this.deadT+=t,!this.isPlayer&&this.respawnT>0&&(this.respawnT-=t,this.respawnT<=0&&this.onRespawnReady()),this.rig.update(t,{dead:!0,deadT:this.deadT,speedRatio:0}),!1;if(this.attack){const e=this.attack,n=e.def;if(e.t+=t,!e.swung&&e.t>=n.activeStart){e.swung=!0;const i=n.key==="strong"?2:n.key==="slashR"?1:0;this.game.audio.swing(i),this.game.combat.notifyAttack(this),this.game.combat.spawnSlashFX(this,n)}e.t>=n.activeStart&&e.t<=n.activeEnd&&this.game.combat.sweep(this,e),e.t>=n.dur&&(this.attack=null,this.cooldownT=n.cool)}return this.beginAttackIfReady(),!0}applyMovement(t,e){const n=e.moveDir;if(this.dashT>0)this.dashT-=t;else{let r=(e.sprint?dl:bm)*this.speedMul;this.blocking?r*=.48:this.blockStaggerT>0?r*=.4:this.attack&&(r*=.35);const o=n.x*r,l=n.z*r,c=Math.min(1,(this.grounded?11:3.2)*t);this.vel.x+=(o-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c}e.jump&&this.grounded&&(this.vel.y=8.6,this.grounded=!1,this.game.audio.jump()),this.vel.y-=22*t,this.pos.addScaledVector(this.vel,t);const i=this.game.collision.groundHeightAt(this.pos.x,this.pos.z,this.pos.y);this.pos.y<=i+.001&&this.vel.y<=0?(!this.wasGrounded&&this.vel.y<-8&&(this.game.audio.land(),this.landT=.28),this.pos.y=i,this.vel.y=0,this.grounded=!0):this.grounded=!1,this.game.collision.resolveEntity(this);const a=Math.hypot(this.vel.x,this.vel.z);if(this.grounded&&a>1.4){this.footAcc+=a*t;const r=e.sprint?2.7:2.15;this.footAcc>r&&(this.footAcc=0,this.game.audio.footstep(e.sprint))}this.wasGrounded=this.grounded,this.rig.root.position.copy(this.pos),this.rig.setHealthBar(this.hp/this.maxHp)}takeDamage(t,e,n){if(this.dead||this.invulnT>0)return null;const i=this.pos.x-e.pos.x,a=this.pos.z-e.pos.z,r=Math.hypot(i,a)||1,o=i/r,l=a/r,c=this.fwd(Na),h=c.x*-o+c.z*-l,d=this.blocking&&h>-.15&&!this.attack,u=d?Em:t;this.hp=Math.max(0,this.hp-u),this.rig.hitFlash(),d||this.rig.setHealthBar(this.hp/this.maxHp);const f=d?2.4:4.2;return this.vel.x+=o*f,this.vel.z+=l*f,!d&&this.grounded&&(this.vel.y=Math.min(this.vel.y+2.2,4)),d&&(this.blockStaggerT=.28),this.hp<=0&&this.die(e),{dmg:u,blocked:d}}die(t){this.dead=!0,this.stats.deaths++,this.attack=null,this.blocking=!1,this.bufferedAttackT=0,this.deadT=0,this.respawnT=this.isPlayer?3.2:4.5,this.onReleaseSlot&&this.onReleaseSlot(),this.game.audio.death(),this.game.combat.deathFX(this),t&&t!==this&&t.stats&&(t.stats.kills++,t.isPlayer&&(this.game.hud.showElimination(),this.game.audio.elimination(),this.game.addCoins(20)),t.startTaunt&&Math.random()<.2&&t.startTaunt()),this.isPlayer&&(this.game.hud.setHP(0,this.maxHp),this.game.onPlayerDied())}onRespawnReady(){}respawn(t){this.pos.copy(t),this.vel.set(0,0,0),this.hp=this.maxHp,this.dead=!1,this.deadT=0,this.respawnT=0,this.invulnT=1.4,this.cooldownT=.3,this.attack=null,this.blocking=!1,this.blockStaggerT=0,this.comboIdx=0,this.comboResetT=0,this.bufferedAttackT=0,this.grounded=!0,this.rig.reset(),this.rig.root.position.copy(this.pos)}syncRigAnim(t,e={}){const n=Math.hypot(this.vel.x,this.vel.z);this.rig.update(t,{speedRatio:Math.min(1,n/dl),grounded:this.grounded,blocking:this.blocking,attack:this.attack?{type:this.attack.def.key,p:this.attack.t/this.attack.def.dur}:null,invulnBlink:this.invulnT>0,dash:this.dashT>0?this.dashT/.22:0,land:this.landT>0?this.landT/.28:0,...e})}dispose(){this.game.scene.remove(this.rig.root),this.rig.dispose()}}const bs=new P,fi=new P,Tm=.28;class fl extends Zl{constructor(t,e){super(t,{name:t.state.settings.playerName||"You",isPlayer:!0,colors:Gt[t.state.settings.skin]||Gt.knight,pos:e}),this.tapTimes={}}applySkin(t){const e=Gt[t]?t:"knight";this.game.state.settings.skin=e,this.rig.setSkin(e)}idle(t){this.yaw=.7,this.rig.setYaw(this.yaw),this.rig.update(t,{speedRatio:0,grounded:!0,blocking:!1,attack:null,invulnBlink:!1,dash:0,land:0})}handleDashTaps(t){const e=performance.now()/1e3,n=["KeyW","KeyS","KeyA","KeyD"];for(const i of n){if(!t.pressed.has(i))continue;const a=this.tapTimes[i];if(this.tapTimes[i]=e,a===void 0||e-a>=Tm)continue;const r=Math.sin(this.yaw),o=Math.cos(this.yaw);if(i==="KeyW"?fi.set(r,0,o):i==="KeyS"?fi.set(-r,0,-o):i==="KeyA"?fi.set(o,0,-r):fi.set(-o,0,r),this.tryDash(fi.x,fi.z))break}}update(t){const e=this.game.input,n=this.game.cameraRig.yaw;if(!this.updateCommon(t)){this.rig.setYaw(this.yaw);return}const a=e.keys,r=e.mobile,o=r.active&&Math.hypot(r.x,r.y)>.12;let l=o?r.x:(a.KeyD?1:0)-(a.KeyA?1:0),c=o?r.y:(a.KeyW?1:0)-(a.KeyS?1:0);const h=Math.hypot(l,c);h>1&&(l/=h,c/=h);const d=Math.sin(n),u=Math.cos(n);bs.set(d*c-u*l,0,u*c+d*l);const f=!!((a.ShiftLeft||a.ShiftRight||o)&&h>0),g=(e.buttons.right||r.block)&&!this.attack;if(this.setBlocking(g),e.pressed.has("attack")&&this.requestAttack(),this.handleDashTaps(e),e.pressed.has("dash")){const m=o||h>0?bs.x:Math.sin(this.yaw),p=o||h>0?bs.z:Math.cos(this.yaw);this.tryDash(m,p)}const x=e.pressed.has("jump");this.applyMovement(t,{moveDir:bs,sprint:f,jump:x}),this.yaw=n,this.rig.setYaw(this.yaw),this.syncRigAnim(t)}}const Am={aggressive:{detect:30,engage:2.8,keep:1.7,strafeAmt:.35,blockChance:.18,cd:[.9,1.6],speedMul:1.06},balanced:{detect:26,engage:2.9,keep:2.5,strafeAmt:.6,blockChance:.45,cd:[1.4,2.2],speedMul:1},defensive:{detect:24,engage:3.2,keep:3.2,strafeAmt:.85,blockChance:.72,cd:[1.9,3],speedMul:.94}},pl=["aggressive","balanced","defensive"],Fa=["dark","shadow","wolf","iron","storm","blaze","ghost","night","razor","silent","toxic","frost","wild","cyber","lucky","angry","epic","sneaky","mad","pro","salty","hyper"],ws=["john","slayer","blade","x","king","lord","hunter","reaper","ninja","gamer","max","sam","alex","rex","kai","fox","bear","mann","dilina","wow"];function Ar(s){for(let e=0;e<25;e++){let n;const i=Math.random();if(i<.35?n=Fn(Fa)+Fn(ws):i<.6?n=Fn(Fa)+Fn(ws)+Math.floor(Math.random()*100):i<.8?n=Fn(ws)+"_"+Fn(Fa):n=Fn(ws)+Math.floor(Math.random()*1e3),!s.has(n.toLowerCase()))return s.add(n.toLowerCase()),n}const t="player_"+Math.floor(Math.random()*1e5);return s.add(t.toLowerCase()),t}const jt=new P;class Hi extends Zl{constructor(t,e,n,i,a="knight",r="normal"){super(t,{name:Ar(t.usedNames||(t.usedNames=new Set)),isEnemy:!0,colors:i,pos:n,skin:a}),this.tier=r,this.isPro=r!=="normal";const o=pl[e%pl.length];this.pKey=o,r==="skilled"?this.p={detect:45,engage:3,keep:2,strafeAmt:.55,blockChance:.85,cd:[.6,1.1],speedMul:1.12}:r==="pro"?this.p={detect:42,engage:3,keep:2,strafeAmt:.55,blockChance:.78,cd:[.8,1.4],speedMul:1.1}:this.p=Am[o],this.speedMul=this.p.speedMul,this.diamondTarget=null,this._diaT=Math.random()*.5,this.tauntT=0,this.processT=0,this._processBase=0,this._processedDeath=!1,this.state="wander",this.wanderTarget=new P().copy(this.pos),this.thinkT=$(.5,3),this.reactT=0,this.strafeDir=Math.random()<.5?-1:1,this.strafeT=$(1,2.5),this.attackTimer=$(.8,2.2),this.blockT=0,this.blockCd=0,this.dashTimer=$(2,5),this.dodgeJumpT=0,this._stuckT=0,this.fleeAt=1/0,this.fleeT=0,this.afkT=0,this.lookAround=!1,this.hopperT=0,this.hopDirT=0,this._hopCd=0,this._hopStateCd=$(14,22),this._afkCd=$(12,20),this._afkBase=0,this._t=Math.random()*10,this.slotHeld=!1,this.target=null,this.retargetT=0,this.retaliateTarget=null,this.retaliateT=0}acquireTarget(){const t=[];for(const e of this.game.combat.fighters)if(e!==this&&!e.dead){const n=e.pos.x-this.pos.x,i=e.pos.z-this.pos.z,a=n*n+i*i;a<900&&t.push({f:e,d2:a})}if(t.length===0){this.target=null;return}t.sort((e,n)=>e.d2-n.d2),Math.random()<.75||t.length===1?this.target=t[0].f:this.target=t[Math.floor(Math.random()*Math.min(t.length,3))].f}takeDamage(t,e,n){const i=super.takeDamage(t,e,n);return this.tauntT>0&&(this.tauntT=0,this.setBlocking(!1),this.state="chase",this.reactT=.1),i&&e&&e!==this&&!e.dead&&(this.state==="afk"&&(this.state="chase"),this.state==="hopper"&&Math.random()<.5&&(this.state="chase",this.reactT=.2),!(this.target===e)&&Math.random()<.6?(this.retaliateTarget=e,this.target=e,this.retargetT=$(3,5)):(!this.retaliateTarget||Math.random()<.3)&&(this.retaliateTarget=e),this.retaliateT=6,(this.state==="wander"||this.state==="afk")&&(this.state="chase",this.reactT=$(.1,.5)),this.state==="flee"&&Math.random()<.4&&(this.state="combat",this.attackTimer=.2)),i}releaseSlot(){this.slotHeld&&(this.game.releaseSlot(this),this.slotHeld=!1)}onReleaseSlot(){this.releaseSlot()}onThreat(t){if(!this.dead)if(this.blockCd<=0&&Math.random()<this.p.blockChance)this.blockT=$(.5,.95),this.blockCd=this.isPro?1:1.8;else if(this.isPro&&Math.random()<.35)this.dodgeJumpT=.25;else if(Math.random()<.35&&t){const e=this.pos.x-t.pos.x,n=this.pos.z-t.pos.z;this.tryDash(e,n)}else this.strafeDir*=-1}pickWanderTarget(){for(let t=0;t<8;t++){const e=Math.random()*Math.PI*2,n=$(12,40),i=this.pos.x+Math.sin(e)*n,a=this.pos.z+Math.cos(e)*n;if(Math.abs(i)<42&&Math.abs(a)<42){this.wanderTarget.set(i,0,a);break}}this.thinkT=$(4,9)}startTaunt(){this.tauntT=$(3,5),this.attack=null,this.blockT=0,this.releaseSlot(),this.state="taunt"}update(t){if(this._t+=t,this.tauntT>0){this.tauntT-=t,this.setBlocking(Math.sin(this.tauntT*22)>0),this.applyMovement(t,{moveDir:jt.set(0,0,0),sprint:!1,jump:this.grounded}),this.rig.root.position.copy(this.pos),this.rig.setYaw(this.yaw),this.syncRigAnim(t,{lookAround:!1}),this.tauntT<=0&&(this.setBlocking(!1),this.state="wander",this.pickWanderTarget());return}if(!this.updateCommon(t))return;const n=this.game,i=n.state.phase==="playing";if(this.retaliateT>0&&(this.retaliateT-=t,this.retaliateT<=0&&(this.retaliateTarget=null)),this.retargetT-=t,this.target&&this.target.dead&&!this._processedDeath){this._processedDeath=!0;let p=null,M=25;for(const v of n.combat.fighters){if(v===this||v.dead)continue;const S=v.pos.x-this.pos.x,C=v.pos.z-this.pos.z,T=S*S+C*C;T<M&&(M=T,p=v)}p?(this.target=p,this.retaliateTarget=p,this.retaliateT=6,this.state=M<9?"combat":"chase",this.attackTimer=Math.min(this.attackTimer,.4)):(this.target=null,this.state="wander",this.pickWanderTarget())}this.target&&!this.target.dead&&(this._processedDeath=!1);const a=!this.target||this.target.dead;if(i&&this.retargetT<=0){this.retargetT=$(1.5,2.5);let p=null,M=1/0;for(const v of n.combat.fighters){if(v===this||v.dead)continue;const S=v.pos.x-this.pos.x,C=v.pos.z-this.pos.z,T=S*S+C*C;T<M&&(M=T,p=v)}if(p){const v=a?1/0:Math.hypot(this.target.pos.x-this.pos.x,this.target.pos.z-this.pos.z);if(a||p!==this.target){const S=Math.sqrt(M);(a||S+1.2<v||this.state!=="combat"&&S<v)&&(this.target=p)}}}(i&&a&&this.retargetT<=0||i&&a&&this.state!=="wander")&&(this.retaliateTarget&&!this.retaliateTarget.dead?this.target=this.retaliateTarget:this.acquireTarget(),this.retargetT=$(2.5,4.5)),i||(this.target=null,this.releaseSlot(),this.state!=="wander"&&(this.state="wander"));const r=this.target,o=!!r&&!r.dead&&i,l=o?r.pos.x-this.pos.x:0,c=o?r.pos.z-this.pos.z:0,h=o?Math.hypot(l,c):1/0;jt.set(0,0,0);let d=!1,u=null;switch(this.dashTimer-=t,this.state){case"wander":{this.thinkT-=t;const p=this.wanderTarget.x-this.pos.x,M=this.wanderTarget.z-this.pos.z,v=Math.hypot(p,M);if(v<2||this.thinkT<=0){this.pickWanderTarget();const S=Math.random();if(S<.1&&this._afkCd<=0){this.state="afk",this.afkT=$(3,6),this._afkBase=this.yaw,this._afkSpin=Math.random()<.15,this._afkSpinSpeed=$(1,2.2)*(Math.random()<.5?-1:1),this._afkSwaySpeed=$(.4,1),this._afkSwayAmp=$(.5,.9),this._afkCd=$(12,20);break}if(S<.2&&this._hopStateCd<=0){this.state="hopper",this.hopperT=$(3,6),this.hopDirT=0,this._hopCd=0,this._hopStateCd=$(14,22);break}}else jt.set(p/v,0,M/v).multiplyScalar(.72),u=Math.atan2(jt.x,jt.z);o&&h<this.p.detect&&(this.state="chase",this.reactT=$(.2,.8),n.audio.tone({f0:180,f1:140,dur:.12,type:"square",gain:.05}));break}case"afk":{if(this.afkT-=t,this._afkSpin?u=this._afkBase+this._t*this._afkSpinSpeed:u=this._afkBase+Math.sin(this._t*this._afkSwaySpeed)*this._afkSwayAmp,this.afkT<=0){this.state="wander",this.pickWanderTarget();break}o&&h<9&&(this.state="chase",this.reactT=.1);break}case"hopper":{if(this.hopperT-=t,this._hopCd-=t,this.hopperT<=0){this.state="wander",this.pickWanderTarget();break}if(this.hopDirT-=t,this.hopDirT<=0){const p=Math.random()*Math.PI*2;this._hopDir=this._hopDir||new P,this._hopDir.set(Math.sin(p),0,Math.cos(p)),this.hopDirT=$(.6,1.3)}jt.copy(this._hopDir),d=!0,u=Math.atan2(jt.x,jt.z),this.grounded&&this._hopCd<=0&&(this.dodgeJumpT=.15,this._hopCd=.28);break}case"flee":{if(this.fleeT-=t,!o||this.fleeT<=0||h>25){this.state=o?"combat":"wander",this.attackTimer=.3;break}u=Math.atan2(l,c),d=!0,jt.set(-l/h,0,-c/h),h<5&&(jt.x+=-c/h*this.strafeDir*.7,jt.z+=l/h*this.strafeDir*.7);break}case"chase":{if(!o||h>42){this.releaseSlot(),this.state="wander";break}u=Math.atan2(l,c),d=!0,jt.set(l/h,0,c/h),this.reactT>0&&(this.reactT-=t,jt.multiplyScalar(.4)),h<this.p.engage+.5&&(this.isPro?(this.state="combat",this.attackTimer=Math.min(this.attackTimer,.3),Math.random()<.3&&(this.fleeAt=$(2,5))):n.requestSlot(this)?(this.slotHeld=!0,this.state="combat",this.attackTimer=$(.15,.5),Math.random()<.3?this.fleeAt=$(2,5):this.fleeAt=1/0):this.state="circle");break}case"circle":{if(!o||h>40){this.state="wander";break}u=Math.atan2(l,c),this.strafeT-=t,this.strafeT<=0&&(this.strafeDir*=-1,this.strafeT=$(1.2,2.6));const p=this.p.engage+2.2;let M=0;if(h>p+.6?M=.55:h<p-.6&&(M=-.45),jt.set(-c/h*this.strafeDir*.85+l/h*M,0,l/h*this.strafeDir*.85+c/h*M),this.dashTimer<=0&&h>p+1.5&&(Math.random()<.5&&this.tryDash(l/h,c/h),this.dashTimer=$(3,5)),h<this.p.engage+.3&&this.attackTimer<=0&&!this.attack){const v=Math.sin(this.yaw),S=Math.cos(this.yaw);l/h*v+c/h*S>.5&&this.startAttack()&&(this.attackTimer=$(this.p.cd[0],this.p.cd[1])*1.8)}o&&h<this.p.engage+1.6&&n.requestSlot(this)&&(this.slotHeld=!0,this.state="combat",this.attackTimer=$(.1,.45));break}case"combat":{if(!o){this.releaseSlot(),this.state="wander";break}u=Math.atan2(l,c),this.attackTimer-=t,this.strafeT-=t,this.strafeT<=0&&(Math.random()<.7&&(this.strafeDir*=-1),this.strafeT=$(.8,2));let p=0;if(h>this.p.keep+.5?p=1:h<this.p.keep-.5&&(p=-.8),jt.set(l/h*p+-c/h*this.strafeDir*this.p.strafeAmt,0,c/h*p+l/h*this.strafeDir*this.p.strafeAmt),d=h>2.2,this.fleeAt!==void 0&&this.fleeAt!==1/0&&(this.fleeAt-=t,this.fleeAt<=0&&h<this.p.engage+4)){this.state="flee",this.fleeT=4,this.fleeAt=1/0;break}if(this.dashTimer<=0&&h>this.p.engage+1.5&&(Math.random()<(this.isPro?.7:.5)&&this.tryDash(l/h,c/h),this.dashTimer=$(2.8,4.5)),!this.attack&&this.attackTimer<=0&&h<this.p.engage+.5){const M=Math.sin(this.yaw),v=Math.cos(this.yaw),S=l/h*M+c/h*v,C=this.isPro?.93:.3;S>C&&this.startAttack()&&(this.attackTimer=$(this.p.cd[0],this.p.cd[1]))}h>this.p.engage+7&&(this.releaseSlot(),this.state="chase");break}}for(const p of n.combat.fighters){if(p===this||p.dead)continue;const M=this.pos.x-p.pos.x,v=this.pos.z-p.pos.z,S=M*M+v*v,C=1.7;if(S<C*C&&S>1e-4){const T=Math.sqrt(S),R=(C-T)/C*1.4;jt.x+=M/T*R,jt.z+=v/T*R}}let f=jt.length();if(f>1&&jt.divideScalar(f),d=!0,this._diaT-=t,this._afkCd-=t,this._hopStateCd-=t,this._afkCd<-99&&(this._afkCd=0),this._hopStateCd<-99&&(this._hopStateCd=0),this._diaT<=0&&(this._diaT=.5,this.diamondTarget=null,(this.state==="wander"||this.state==="chase"||this.state==="circle")&&this.game.diamonds.length>0)){let p=null,M=196;for(const v of this.game.diamonds){const S=v.mesh.position.x-this.pos.x,C=v.mesh.position.z-this.pos.z,T=S*S+C*C;T<M&&(M=T,p=v)}this.diamondTarget=p}if(this.diamondTarget&&(this.state==="wander"||this.state==="chase"&&h>6||this.state==="circle")){const p=this.diamondTarget.mesh.position,M=p.x-this.pos.x,v=p.z-this.pos.z,S=Math.hypot(M,v)||1;jt.set(M/S,0,v/S),u=Math.atan2(M,v),d=!0,f=1}if(f>.3&&this.grounded){const p=this.pos.x+jt.x*1.15,M=this.pos.z+jt.z*1.15;if(this.game.collision.blockedAt(p,M,this.radius,this.pos.y)){const v=jt.z,S=-jt.x;this.game.collision.blockedAt(this.pos.x+v*1.15,this.pos.z+S*1.15,this.radius,this.pos.y)?(jt.set(-jt.x,0,-jt.z),this.dodgeJumpT=.15):jt.set(v,0,S)}}this.blockT-=t,this.blockCd-=t;const g=this.blockT>0;this.setBlocking(this.blockT>0),this.isPro&&g&&this.blockT<=0&&o&&h<this.p.engage+.5&&!this.attack&&(this.attackTimer=Math.min(this.attackTimer,.1));let x=!1;this.dodgeJumpT>0&&(this.dodgeJumpT-=t,this.grounded&&(x=!0)),o&&this.grounded&&h<5&&r.pos.y>this.pos.y+.6&&(x=!0),this.state==="combat"&&this.grounded&&Math.random()<t*.2&&(x=!0);const m=Math.hypot(this.vel.x,this.vel.z);this.grounded&&f>.4&&m<.6?(this._stuckT=(this._stuckT||0)+t,this._stuckT>.45&&(x=!0,this._stuckT=0)):this._stuckT=0,this.applyMovement(t,{moveDir:jt,sprint:d,jump:x}),u!==null?this.yaw=cl(this.yaw,u,10,t):f>.05&&(this.yaw=cl(this.yaw,Math.atan2(jt.x,jt.z),7,t)),this.rig.setYaw(this.yaw),this.syncRigAnim(t,{lookAround:this.state==="afk"})}onRespawnReady(){const t=[];this.game.player&&t.push({pos:this.game.player.pos,radius:14});for(const e of this.game.enemies)e!==this&&!e.dead&&t.push({pos:e.pos,radius:6});this.respawn(this.game.spawn.getSpawn(t))}respawn(t){super.respawn(t),this.target=null,this.retaliateTarget=null,this.state="wander",this.thinkT=$(.5,2)}}class Rm{constructor(t,e,n){this.cam=t,this.input=e,this.collision=n,this.yaw=0,this.pitch=.34,this.dist=5.6,this.curDist=5.6,this.sensitivity=1,this.pivot=new P,this.hasPivot=!1,this.shake=0,this.ray=new pm,this.ray.far=60,this.menuAngle=.6,this._back=new P,this._desired=new P}snap(t){this.pivot.copy(t),this.pivot.y+=1.65,this.hasPivot=!0}addShake(t){this.shake=Math.min(this.shake+t,.9)}update(t,e,n){if(n==="menu"){this.menuAngle+=t*.06;const d=54;this.cam.position.set(Math.sin(this.menuAngle)*d,26,Math.cos(this.menuAngle)*d),this.cam.lookAt(0,2,0);return}if(n==="preview"){const d=e?e.x:0,u=e?e.z:0,f=.7,g=4.4;this.cam.position.set(d+Math.sin(f)*g,2,u+Math.cos(f)*g),this.cam.lookAt(d-1.15,1.25,u);return}if(n==="mapPreview"){this.cam.position.set(36,22,36),this.cam.lookAt(0,1,0);return}const i=this.input.consumeDelta();if(this.yaw-=i.dx*.0023*this.sensitivity,this.pitch=Math.max(-.55,Math.min(1.35,this.pitch+i.dy*.0023*this.sensitivity)),!this.hasPivot&&e&&this.snap(e),e){const d=1-Math.exp(-17*t);this.pivot.x+=(e.x-this.pivot.x)*d,this.pivot.y+=(e.y+1.65-this.pivot.y)*d,this.pivot.z+=(e.z-this.pivot.z)*d}let a=5.6;n==="dead"&&(this.yaw+=t*.55,this.pitch+=(.42-this.pitch)*Math.min(1,t*2),a=8);const r=Math.cos(this.pitch);this._back.set(-Math.sin(this.yaw)*r,Math.sin(this.pitch),-Math.cos(this.yaw)*r).normalize();let o=a;if(this.collision.occluders.length>0){this.ray.set(this.pivot,this._back),this.ray.far=a+.4;const d=this.ray.intersectObjects(this.collision.occluders,!1);d.length>0&&(o=Math.max(1.15,d[0].distance-.35))}o<this.curDist?this.curDist=o:this.curDist+=(o-this.curDist)*(1-Math.exp(-5*t)),this.shake*=Math.exp(-6.5*t);const l=this.shake,c=(Math.random()-.5)*l,h=(Math.random()-.5)*l;this._desired.copy(this.pivot).addScaledVector(this._back,this.curDist),this.cam.position.set(this._desired.x+c,Math.max(.35,this._desired.y+h),this._desired.z+c),this.cam.lookAt(this.pivot.x,this.pivot.y+.15+h,this.pivot.z)}}class ml{constructor(t,e){this.scene=t,this.theme=e,this.group=new qt,t.add(this.group),t.background=new kt(e.sky),t.fog=new Vr(e.fogColor,e.fogNear,e.fogFar);const n=new om(e.hemiSky,e.hemiGround,e.hemiI);this.group.add(n),this.group.add(new um(e.ambColor,e.ambI));const i=new dm(e.sunColor,e.sunI);i.position.set(...e.sunPos),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.left=-78,i.shadow.camera.right=78,i.shadow.camera.top=78,i.shadow.camera.bottom=-78,i.shadow.camera.near=5,i.shadow.camera.far=220,i.shadow.bias=-4e-4,i.shadow.normalBias=.03,this.group.add(i),this.sun=i;const a=new Bs(300,48),r=new Z(a,new el({color:e.grass}));r.rotation.x=-Math.PI/2,r.position.y=-.08,this.group.add(r);const o=new el({color:e.mountain,flatShading:!0});for(let c=0;c<14;c++){const h=c/14*Math.PI*2+Math.sin(c*7.3)*.2,d=175+Math.sin(c*13.1)*35,u=38+Math.abs(Math.sin(c*5.7))*48,f=26+Math.abs(Math.cos(c*3.3))*22,g=new Z(new Ae(f,u,5),o);g.position.set(Math.sin(h)*d,u/2-4,Math.cos(h)*d),g.rotation.y=Math.random()*Math.PI,this.group.add(g)}const l=new en({color:16777215,transparent:!0,opacity:e.cloud,fog:!1});this.cloudGroup=new qt;for(let c=0;c<10;c++){const h=new qt,d=3+Math.floor(Math.random()*3);for(let g=0;g<d;g++){const x=6+Math.random()*10,m=new Z(new wn(x,7,5),l);m.position.set(g*x*.8-d*x*.4,Math.random()*x*.3,Math.random()*x*.5),h.add(m)}const u=Math.random()*Math.PI*2,f=120+Math.random()*90;h.position.set(Math.sin(u)*f,60+Math.random()*35,Math.cos(u)*f),this.cloudGroup.add(h)}if(this.group.add(this.cloudGroup),e.stars){const h=new Float32Array(1650);for(let f=0;f<550;f++){const g=Math.random()*Math.PI*2,x=Math.acos(Math.random()*.85),m=240;h[f*3]=Math.sin(x)*Math.cos(g)*m,h[f*3+1]=Math.cos(x)*m+10,h[f*3+2]=Math.sin(x)*Math.sin(g)*m}const d=new ve;d.setAttribute("position",new we(h,3));const u=new Wr(d,new Ws({color:13623551,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9}));u.frustumCulled=!1,this.group.add(u)}if(e.moon){const c=new Z(new Bs(14,32),new en({color:15002879,fog:!1}));c.position.set(-120,85,-160),c.lookAt(0,0,0),this.group.add(c);const h=document.createElement("canvas");h.width=h.height=64;const d=h.getContext("2d"),u=d.createRadialGradient(32,32,4,32,32,30);u.addColorStop(0,"rgba(190,210,255,0.55)"),u.addColorStop(1,"rgba(190,210,255,0)"),d.fillStyle=u,d.fillRect(0,0,64,64);const f=new Xs(h),g=new Wi(new vi({map:f,transparent:!0,blending:Ke,depthWrite:!1,fog:!1}));g.scale.setScalar(70),g.position.copy(c.position),this.group.add(g)}}update(t){this.cloudGroup.rotation.y+=t*.004}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.dispose(),n.dispose()}}),this.scene.remove(this.group),this.scene.fog=null}}const hn={citadel:{id:"citadel",name:"Sunrise Citadel",desc:"Classic stone arena at high noon",sky:10468569,fogColor:11125469,fogNear:70,fogFar:235,hemiSky:12572912,hemiGround:5522734,hemiI:.85,sunColor:16771005,sunI:1.5,sunPos:[45,70,30],ambColor:3356746,ambI:.28,grass:5861695,mountain:5333630,cloud:.85,stars:!1,moon:!1,torchColor:16751164,torchI:24,particles:null,t:{floor:16777215,wall:16777215,merlon:7235418,tower:7827551,roof:5259566,pillar:9077364,cap:7235418,platform:9603707,rock:8682864,trunk:6112294,leafA:4025140,leafB:5078842}},moonlight:{id:"moonlight",name:"Moonlight Hollow",desc:"Haunted forest beneath a giant moon",layout:"forest",sky:725030,fogColor:1054768,fogNear:55,fogFar:200,hemiSky:3820154,hemiGround:790302,hemiI:.55,sunColor:12570879,sunI:.85,sunPos:[-40,60,-30],ambColor:1712960,ambI:.5,grass:2767442,mountain:1713216,cloud:.22,stars:!0,moon:!0,torchColor:9416959,torchI:30,particles:{color:10475775,size:.16,vy:.35,drift:.5},t:{floor:7768248,wall:6978216,merlon:5925528,tower:8030904,roof:3819118,pillar:9083584,cap:6978216,platform:9083592,rock:7372976,trunk:3819106,leafA:3824234,leafB:4876922}},ember:{id:"ember",name:"Ember Hollow",desc:"Volcanic wasteland of lava and ash",layout:"ember",sky:1707274,fogColor:2757132,fogNear:50,fogFar:185,hemiSky:6696990,hemiGround:1707016,hemiI:.62,sunColor:16747082,sunI:.95,sunPos:[30,50,-40],ambColor:4200976,ambI:.5,grass:3810328,mountain:2757648,cloud:.18,stars:!1,moon:!1,torchColor:16733474,torchI:30,particles:{color:16742195,size:.17,vy:1.1,drift:.7},t:{floor:11569784,wall:10123882,merlon:8018506,tower:9071194,roof:4860446,pillar:10518640,cap:8018506,platform:11044986,rock:9071194,trunk:4861984,leafA:6965808,leafB:8017464}},frost:{id:"frost",name:"Frostfang Keep",desc:"Frozen village under a pale sun",layout:"frost",sky:13623538,fogColor:14478072,fogNear:60,fogFar:210,hemiSky:14675711,hemiGround:9082792,hemiI:.9,sunColor:15397631,sunI:1.3,sunPos:[-30,65,40],ambColor:4872816,ambI:.3,grass:14214382,mountain:9083570,cloud:.9,stars:!1,moon:!1,torchColor:16757866,torchI:26,particles:{color:16777215,size:.15,vy:-1.3,drift:1.1},t:{floor:14477554,wall:13162728,merlon:11584212,tower:12636384,roof:9085624,pillar:13688040,cap:11584212,platform:13951212,rock:12110040,trunk:6969930,leafA:10141900,leafB:12114144}},golden:{id:"golden",name:"Golden Oasis",desc:"Desert market oasis at golden hour",layout:"oasis",sky:15911056,fogColor:15251584,fogNear:65,fogFar:220,hemiSky:16769200,hemiGround:6967344,hemiI:.8,sunColor:16756832,sunI:1.6,sunPos:[60,45,-20],ambColor:4864040,ambI:.32,grass:13150314,mountain:9070664,cloud:.5,stars:!1,moon:!1,torchColor:16752688,torchI:26,particles:{color:16769184,size:.14,vy:.25,drift:.9},t:{floor:15255712,wall:14200968,merlon:12621928,tower:13674616,roof:9068600,pillar:14729368,cap:12621928,platform:14992544,rock:13150328,trunk:8018484,leafA:5929530,leafB:6982210}},temple:{id:"temple",name:"Sky Temple",desc:"Marble steps of the sky monks",layout:"temple",sky:12572904,fogColor:13162720,fogNear:70,fogFar:220,hemiSky:14215412,hemiGround:9079410,hemiI:.9,sunColor:16774360,sunI:1.45,sunPos:[30,75,40],ambColor:3817552,ambI:.3,grass:9085034,mountain:8030874,cloud:.6,stars:!1,moon:!1,torchColor:16760928,torchI:26,particles:{color:16771520,size:.13,vy:.3,drift:.6},t:{floor:15788760,wall:14735552,merlon:13287332,tower:14998724,roof:10127962,pillar:15920346,cap:13287332,platform:15525068,rock:13287328,trunk:8022602,leafA:8034906,leafB:9087590}},catacombs:{id:"catacombs",name:"Cursed Catacombs",desc:"Buried crypts that never sleep",layout:"catacombs",sky:657938,fogColor:1314846,fogNear:40,fogFar:160,hemiSky:4864618,hemiGround:657424,hemiI:.45,sunColor:9075455,sunI:.55,sunPos:[-30,60,-35],ambColor:2759226,ambI:.6,grass:1709602,mountain:1314848,cloud:.15,stars:!1,moon:!1,torchColor:11167487,torchI:30,particles:{color:11176191,size:.13,vy:.35,drift:.5},t:{floor:4867158,wall:3814472,merlon:3025468,tower:4209234,roof:2367280,pillar:5392998,cap:3025468,platform:5130336,rock:3946056,trunk:2761780,leafA:3812942,leafB:4602460}},cove:{id:"cove",name:"Wrecked Cove",desc:"A pirate graveyard on the sands",layout:"cove",sky:10146016,fogColor:11196640,fogNear:60,fogFar:200,hemiSky:13166832,hemiGround:5925450,hemiI:.85,sunColor:16773312,sunI:1.4,sunPos:[-45,55,25],ambColor:3820112,ambI:.3,grass:9083482,mountain:5929610,cloud:.7,stars:!1,moon:!1,torchColor:16752704,torchI:26,particles:null,t:{floor:14205072,wall:9075290,merlon:7234120,tower:10127972,roof:5917236,pillar:13152392,cap:7234120,platform:13151356,rock:11049592,trunk:6965802,leafA:4880954,leafB:5933636}}};function gl(s,t,e,n=256){const i=document.createElement("canvas");i.width=i.height=n;const a=i.getContext("2d");a.fillStyle=s,a.fillRect(0,0,n,n);const r=n/e;for(let l=0;l<e;l++)for(let c=0;c<e;c++){const h=$(-14,14),d=h>0?255:0;if(a.fillStyle=`rgba(${d},${d},${d},${Math.abs(h)/100})`,a.fillRect(c*r+1,l*r+1,r-2,r-2),Math.random()<.25){a.fillStyle="rgba(0,0,0,0.08)";for(let u=0;u<8;u++)a.fillRect(c*r+Math.random()*r,l*r+Math.random()*r,2,2)}}a.strokeStyle=t,a.lineWidth=3;for(let l=0;l<=e;l++)a.beginPath(),a.moveTo(l*r,0),a.lineTo(l*r,n),a.stroke(),a.beginPath(),a.moveTo(0,l*r),a.lineTo(n,l*r),a.stroke();const o=new Xs(i);return o.wrapS=o.wrapT=Ds,o.colorSpace=Oe,o.anisotropy=4,o}function Cm(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,240,180,1)"),e.addColorStop(.35,"rgba(255,170,60,0.9)"),e.addColorStop(.7,"rgba(255,90,20,0.35)"),e.addColorStop(1,"rgba(255,60,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Xs(s);return n.colorSpace=Oe,n}class _l{constructor(t,e,n=hn.citadel){this.scene=t,this.collision=e,this.theme=n,this.t=n.t,this.torches=[],this.group=new qt,t.add(this.group),this.buildFloor(),this.buildWalls(),this.buildTowers();const i=n.layout||"citadel";i==="forest"?this.buildForest():i==="ember"?this.buildEmber():i==="frost"?this.buildFrost():i==="oasis"?this.buildOasis():i==="temple"?this.buildTemple():i==="catacombs"?this.buildCatacombs():i==="cove"?this.buildCove():(this.buildPillars(),this.buildPlatforms(),this.buildRocks(),this.buildTrees()),this.buildTorches(),this.buildSpawnMarkers(),this.buildMotes()}buildFloor(){const t=gl("#8d8577","#57503f",4);t.repeat.set(13,13);const e=new Mt({map:t,roughness:.95,color:this.t.floor}),n=new Z(new xt(104,1.2,104),e);n.position.y=-.6,n.receiveShadow=!0,this.group.add(n);const i=new en({color:4866612,transparent:!0,opacity:.55}),a=new Z(new yi(6.2,7.5,48),i);a.rotation.x=-Math.PI/2,a.position.y=.02,this.group.add(a);const r=new Z(new yi(2.1,2.9,40),i);r.rotation.x=-Math.PI/2,r.position.y=.02,this.group.add(r)}buildWalls(){const t=gl("#7b7466","#4c463a",3);t.repeat.set(16,1.4);const e=new Mt({map:t,roughness:.95,color:this.t.wall}),n=8,i=[{x:0,z:-49.75,w:104,d:2.5},{x:0,z:49.75,w:104,d:2.5},{x:-49.75,z:0,w:2.5,d:104},{x:49.75,z:0,w:2.5,d:104}];for(const h of i){const d=new Z(new xt(h.w,n,h.d),e);d.position.set(h.x,n/2-.05,h.z),d.castShadow=!0,d.receiveShadow=!0,this.group.add(d),this.collision.addOccluder(d)}const a=new xt(1.7,1.3,1.1),r=new Mt({color:this.t.merlon,roughness:1}),o=new Jo(a,r,26*4),l=new Zt;let c=0;for(let h=0;h<4;h++)for(let d=0;d<26;d++){const u=-49+d*4+h%2*2;let f,g;h===0?(f=u,g=-51):h===1?(f=u,g=51):h===2?(f=-51,g=u):(f=51,g=u),l.makeTranslation(f,8.6,g),o.setMatrixAt(c++,l)}o.castShadow=!0,this.group.add(o)}buildTowers(){const t=new Mt({color:this.t.tower,roughness:.95}),e=new Mt({color:this.t.roof,roughness:.9}),n=[[-49,-49],[49,-49],[-49,49],[49,49]],i=[3498176,10105394,13214247,3371086];n.forEach(([a,r],o)=>{const l=new Z(new re(4.4,4.9,13,10),t);l.position.set(a,6.45,r),l.castShadow=!0,this.group.add(l),this.collision.addOccluder(l),this.collision.addBox(a-4.4,a+4.4,r-4.4,r+4.4,0,13);const c=new Z(new Ae(5.1,3.6,10),e);c.position.set(a,14.8,r),c.castShadow=!0,this.group.add(c);const h=new Z(new Vn(1.9,4.4),new Mt({color:i[o],roughness:.85,side:He}));h.position.set(a*.906,8.4,r*.906),h.lookAt(0,8.4,0),this.group.add(h)})}buildPillars(t=8){const e=new Mt({color:this.t.pillar,roughness:.92}),n=new Mt({color:this.t.cap,roughness:.95});this.pillarPositions=[];for(let i=0;i<t;i++){const a=i/t*Math.PI*2+Math.PI/8,r=26,o=Math.sin(a)*r,l=Math.cos(a)*r;this.pillarPositions.push([o,l]);const c=new Z(new re(.95,1.05,7,9),e);c.position.set(o,3.5,l),c.castShadow=!0,this.group.add(c),this.collision.addOccluder(c),this.collision.addBox(o-1,o+1,l-1,l+1,0,7);const h=new Z(new xt(2.3,.5,2.3),n);h.position.set(o,7.25,l),h.castShadow=!0,this.group.add(h)}}buildPlatforms(){const t=new Mt({color:this.t.platform,roughness:.95}),e=[[24,-24],[-24,24]];for(const[n,i]of e){const a=new Z(new xt(5.5,1,5.5),t);a.position.set(n,.5,i),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.collision.addOccluder(a),this.collision.addBox(n-2.75,n+2.75,i-2.75,i+2.75,0,1);const r=n-Math.sign(n)*4,o=i-Math.sign(i)*4,l=new Z(new xt(2.6,.5,2.6),t);l.position.set(r,.25,o),l.receiveShadow=!0,this.group.add(l),this.collision.addBox(r-1.3,r+1.3,o-1.3,o+1.3,0,.5)}}buildRocks(){const t=new zs(1,0),e=new Mt({color:this.t.rock,roughness:1,flatShading:!0}),n=new Jo(t,e,22),i=new Zt,a=new Ri,r=new We,o=new P,l=new P;let c=0,h=0;for(;c<22&&h++<500;){const d=Math.random()*Math.PI*2,u=$(13,43),f=Math.sin(d)*u,g=Math.cos(d)*u;if(Math.abs(Math.abs(f)-Math.abs(g))<6&&Math.abs(f)>20)continue;const x=$(.55,1.7);if(o.set(f,x*.42,g),r.set($(0,3),$(0,3),$(0,3)),a.setFromEuler(r),l.set(x*$(.8,1.2),x*$(.65,1),x*$(.8,1.2)),i.compose(o,a,l),n.setMatrixAt(c,i),x>1.15){const m=x*.85;this.collision.addBox(f-m,f+m,g-m,g+m,0,x*.84)}c++}n.castShadow=!0,n.receiveShadow=!0,this.group.add(n)}buildTrees(){const t=new Mt({color:this.t.trunk,roughness:1}),e=new Mt({color:this.t.leafA,roughness:1,flatShading:!0}),n=new Mt({color:this.t.leafB,roughness:1,flatShading:!0}),i=(a,r,o)=>{const l=new qt,c=new Z(new re(.32*o,.42*o,3.4*o,7),t);c.position.y=1.7*o,c.castShadow=!0,l.add(c);const h=new Z(new Ae(2*o,3.2*o,8),e);h.position.y=4.2*o,h.castShadow=!0;const d=new Z(new Ae(1.45*o,2.5*o,8),n);d.position.y=6*o,d.castShadow=!0,l.add(h,d),l.position.set(a,0,r),l.rotation.y=Math.random()*Math.PI,this.group.add(l),Math.abs(a)<46&&Math.abs(r)<46&&(this.collision.addOccluder(c),this.collision.addBox(a-.45*o,a+.45*o,r-.45*o,r+.45*o,0,3.4*o))};i(30,-30,1.15),i(-30,30,1.05),i(31,31,1.25),i(-31,-31,.95);for(let a=0;a<20;a++){const r=Math.random()*Math.PI*2,o=$(58,74);i(Math.sin(r)*o,Math.cos(r)*o,$(.9,1.6))}}addTreeAt(t,e,n,i,a,r,o){const l=new qt,c=new Z(new re(.32*n,.42*n,3.4*n,7),i);c.position.y=1.7*n,c.castShadow=!0,l.add(c);const h=new Z(new Ae(2*n,3.2*n,8),a);h.position.y=4.2*n,h.castShadow=!0;const d=new Z(new Ae(1.45*n,2.5*n,8),r);d.position.y=6*n,d.castShadow=!0,l.add(h,d),l.position.set(t,0,e),l.rotation.y=Math.random()*Math.PI,this.group.add(l),o&&(this.collision.addOccluder(c),this.collision.addBox(t-.45*n,t+.45*n,e-.45*n,e+.45*n,0,3.4*n))}buildForest(){const t=new Mt({color:this.t.trunk,roughness:1}),e=new Mt({color:this.t.leafA,roughness:1,flatShading:!0}),n=new Mt({color:this.t.leafB,roughness:1,flatShading:!0}),i=[[10,4],[-12,8],[16,-14],[-6,-16],[22,10],[-20,-6],[4,20],[-16,18],[28,-4],[-26,12],[12,26],[-8,-26]];for(const[o,l]of i)this.addTreeAt(o+$(-2,2),l+$(-2,2),$(.95,1.35),t,e,n,!0);const a=new re(.5,.62,.55,8);for(let o=0;o<6;o++){const l=Math.random()*Math.PI*2,c=$(10,38),h=Math.sin(l)*c,d=Math.cos(l)*c,u=new Z(a,t);u.position.set(h,.27,d),u.castShadow=!0,this.group.add(u),this.collision.addBox(h-.55,h+.55,d-.55,d+.55,0,.55)}const r=new Mt({color:this.t.pillar,roughness:.95});for(let o=0;o<5;o++){const l=o/5*Math.PI*2+.5,c=$(15,33),h=Math.sin(l)*c,d=Math.cos(l)*c,u=$(1.4,2.8),f=new Z(new re(.8,.9,u,9),r);f.position.set(h,u/2,d),f.castShadow=!0,this.group.add(f),this.collision.addOccluder(f),this.collision.addBox(h-.85,h+.85,d-.85,d+.85,0,u);const g=h+$(-3,3),x=d+$(-3,3),m=new Z(new xt(2.4,.7,.9),r);m.position.set(g,.35,x),m.rotation.y=Math.random()*Math.PI,m.castShadow=!0,this.group.add(m),this.collision.addBox(g-1.3,g+1.3,x-1.3,x+1.3,0,.75)}for(let o=0;o<20;o++){const l=Math.random()*Math.PI*2,c=$(58,74);this.addTreeAt(Math.sin(l)*c,Math.cos(l)*c,$(.9,1.6),t,e,n,!1)}}buildEmber(){const t=new en({color:16733464,transparent:!0,opacity:.9,blending:Ke,depthWrite:!1});for(let r=0;r<7;r++){const o=Math.random()*Math.PI*2,l=$(8,40),c=new Z(new Vn($(5,10),$(.7,1.4)),t);c.rotation.x=-Math.PI/2,c.rotation.z=Math.random()*Math.PI,c.position.set(Math.sin(o)*l,.03,Math.cos(o)*l),this.group.add(c)}const e=new zs(1,0),n=new Mt({color:2038306,roughness:.4,metalness:.3,flatShading:!0});for(let r=0;r<9;r++){const o=Math.random()*Math.PI*2,l=$(12,42),c=Math.sin(o)*l,h=Math.cos(o)*l,d=$(1.2,2.2),u=new Z(e,n);u.position.set(c,d*.45,h),u.scale.set(d,d*$(.8,1.3),d*$(.8,1.2)),u.rotation.y=Math.random()*Math.PI,u.castShadow=!0,this.group.add(u),this.collision.addOccluder(u);const f=d*.85;this.collision.addBox(c-f,c+f,h-f,h+f,0,d)}const i=new Mt({color:this.t.trunk,roughness:1});for(let r=0;r<7;r++){const o=r/7*Math.PI*2+.4,l=$(16,40),c=Math.sin(o)*l,h=Math.cos(o)*l,d=new qt,u=new Z(new re(.22,.4,3.8,6),i);u.position.y=1.9,u.castShadow=!0,d.add(u);const f=new Z(new xt(1.6,.14,.14),i);f.position.set(.6,2.9,0),f.rotation.z=.5,d.add(f);const g=new Z(new xt(1.3,.13,.13),i);g.position.set(-.5,2.4,.1),g.rotation.z=-.6,d.add(g),d.position.set(c,0,h),d.rotation.y=Math.random()*Math.PI,this.group.add(d),this.collision.addBox(c-.4,c+.4,h-.4,h+.4,0,3.8)}const a=new Mt({color:2757648,roughness:1,emissive:16724736,emissiveIntensity:.7});for(let r=0;r<4;r++){const o=r/4*Math.PI*2+1.1,l=$(20,38),c=new Z(new Ae(.7,.9,7),a);c.position.set(Math.sin(o)*l,.45,Math.cos(o)*l),c.castShadow=!0,this.group.add(c),this.collision.addBox(c.position.x-.6,c.position.x+.6,c.position.z-.6,c.position.z+.6,0,.9)}}buildFrost(){this.buildPillars(4);const t=new Mt({color:12575986,roughness:.15,metalness:.1,transparent:!0,opacity:.92,flatShading:!0});for(let o=0;o<8;o++){const l=Math.random()*Math.PI*2,c=$(12,40),h=Math.sin(l)*c,d=Math.cos(l)*c,u=$(1.2,2.1),f=new Z(new xt(u,u*1.4,u),t);f.position.set(h,u*.7,d),f.rotation.y=Math.random()*Math.PI,f.castShadow=!0,this.group.add(f),this.collision.addOccluder(f);const g=u*.6;this.collision.addBox(h-g,h+g,d-g,d+g,0,u*1.4)}const e=new Mt({color:15791868,roughness:1});for(let o=0;o<6;o++){const l=o/6*Math.PI*2+.3,c=$(14,36),h=Math.sin(l)*c,d=Math.cos(l)*c,u=new Z(new wn(1,12,8),e);u.position.set(h,.1,d),u.scale.set($(2.2,3.4),.75,$(2.2,3.4)),u.receiveShadow=!0,this.group.add(u),this.collision.addBox(h-1.6,h+1.6,d-1.6,d+1.6,0,.75)}const n=new Mt({color:this.t.trunk,roughness:1}),i=new Mt({color:this.t.leafA,roughness:1,flatShading:!0}),a=new Mt({color:this.t.leafB,roughness:1,flatShading:!0}),r=[[26,18],[-26,-18],[-18,26],[18,-26],[34,2],[-34,-2],[2,-34],[-2,34]];for(const[o,l]of r)this.addTreeAt(o,l,$(1,1.3),n,i,a,!0);for(let o=0;o<20;o++){const l=Math.random()*Math.PI*2,c=$(58,74);this.addTreeAt(Math.sin(l)*c,Math.cos(l)*c,$(.9,1.6),n,i,a,!1)}}buildOasis(){const t=[10498096,2783882,13214247,7028640],e=new Mt({color:this.t.trunk,roughness:1}),n=new Mt({color:9071172,roughness:.9});[[14,8,.4],[-14,-8,2.2],[8,-16,1.2],[-8,16,3.1]].forEach(([h,d,u],f)=>{const g=new qt;for(const[p,M]of[[-.9,-.6],[.9,-.6],[-.9,.6],[.9,.6]]){const v=new Z(new re(.07,.07,2.3,6),e);v.position.set(p,1.15,M),g.add(v)}const x=new Z(new xt(2,.85,1),n);x.position.y=.43,x.castShadow=!0,g.add(x);const m=new Z(new xt(2.4,.08,1.5),new Mt({color:t[f],roughness:.85}));m.position.y=2.3,m.rotation.z=.06,m.castShadow=!0,g.add(m),g.position.set(h,0,d),g.rotation.y=u,this.group.add(g),this.collision.addBox(h-1.1,h+1.1,d-.8,d+.8,0,.9)});const a=new Mt({color:11563068,roughness:.8});for(let h=0;h<6;h++){const d=Math.random()*Math.PI*2,u=$(10,38),f=Math.sin(d)*u,g=Math.cos(d)*u,x=new Z(new re(.28,.38,.8,8),a);x.position.set(f,.4,g),x.castShadow=!0,this.group.add(x),this.collision.addBox(f-.35,f+.35,g-.35,g+.35,0,.8)}const r=new Mt({color:9071164,roughness:1}),o=new Mt({color:this.t.leafA,roughness:1,flatShading:!0}),l=[[22,22],[-22,22],[22,-22],[-22,-22],[30,0],[-30,0],[0,30],[0,-30]];for(const[h,d]of l){const u=new qt,f=new Z(new re(.2,.34,4.2,7),r);f.position.y=2.1,f.rotation.z=$(-.08,.08),f.castShadow=!0,u.add(f);for(let g=0;g<5;g++){const x=new Z(new xt(1.9,.07,.45),o),m=g/5*Math.PI*2;x.position.set(Math.sin(m)*.95,4.15,Math.cos(m)*.95),x.rotation.y=m,x.rotation.x=-.35,x.castShadow=!0,u.add(x)}u.position.set(h,0,d),this.group.add(u),this.collision.addBox(h-.35,h+.35,d-.35,d+.35,0,4.2)}const c=new Mt({color:this.t.floor,roughness:1});for(let h=0;h<3;h++){const d=h/3*Math.PI*2+.8,u=$(28,40),f=Math.sin(d)*u,g=Math.cos(d)*u,x=new Z(new wn(1,12,8),c);x.position.set(f,.05,g),x.scale.set($(4.5,6.5),1,$(4.5,6.5)),x.receiveShadow=!0,this.group.add(x),this.collision.addBox(f-3.4,f+3.4,g-3.4,g+3.4,0,.95)}}buildTemple(){const t=new Mt({color:this.t.platform,roughness:.9}),e=[{s:11,h:.4},{s:7.5,h:.8},{s:4.5,h:1.2}];for(const r of e){const o=new Z(new xt(r.s,r.h,r.s),t);o.position.set(0,r.h/2,0),o.receiveShadow=!0,o.castShadow=!0,this.group.add(o),this.collision.addBox(-r.s/2,r.s/2,-r.s/2,r.s/2,0,r.h)}const n=new Z(new xt(1.6,.9,1),t);n.position.y=1.2+.45,n.castShadow=!0,this.group.add(n),this.collision.addBox(-.8,.8,-.5,.5,1.2,2.1);const i=new Mt({color:this.t.pillar,roughness:.9});for(let r=0;r<4;r++){const o=r/4*Math.PI*2+Math.PI/4,l=Math.sin(o)*20,c=Math.cos(o)*20,h=new Z(new xt(.8,5.2,.8),i);h.position.set(l-Math.cos(o)*1.6,2.6,c+Math.sin(o)*1.6);const d=h.clone();d.position.set(l+Math.cos(o)*1.6,2.6,c-Math.sin(o)*1.6);const u=new Z(new xt(.9,.7,4.6),i);u.position.set(l,5.4,c),u.rotation.y=o,h.castShadow=d.castShadow=u.castShadow=!0,this.group.add(h,d,u),this.collision.addOccluder(h),this.collision.addBox(h.position.x-.5,h.position.x+.5,h.position.z-.5,h.position.z+.5,0,5.2),this.collision.addBox(d.position.x-.5,d.position.x+.5,d.position.z-.5,d.position.z+.5,0,5.2)}const a=new Mt({color:this.t.rock,roughness:1});for(let r=0;r<6;r++){const o=r/6*Math.PI*2,l=32,c=Math.sin(o)*l,h=Math.cos(o)*l,d=new qt,u=new Z(new xt(1.4,2.6,.9),a);u.position.y=1.3;const f=new Z(GEO.head,a);f.position.y=2.85,f.scale.setScalar(1.3),u.castShadow=f.castShadow=!0,d.add(u,f),d.position.set(c,0,h),d.rotation.y=o+Math.PI,this.group.add(d),this.collision.addOccluder(u),this.collision.addBox(c-.8,c+.8,h-.6,h+.6,0,3.4)}}buildCatacombs(){const t=new Mt({color:this.t.platform,roughness:1}),e=new Mt({color:this.t.rock,roughness:1}),n=[[14,6],[-14,-6],[6,-16],[-6,16],[22,14],[-22,-14],[16,22],[-16,-22]];for(const[o,l]of n){const c=new Z(new xt(2.2,1,1.2),t);c.position.set(o,.5,l);const h=new Z(new xt(2.4,.25,1.4),e);h.position.set(o,1.1,l),c.castShadow=h.castShadow=!0,this.group.add(c,h),this.collision.addBox(o-1.2,o+1.2,l-.7,l+.7,0,1.25)}const i=new Mt({color:14209216,roughness:1});for(let o=0;o<6;o++){const l=Math.random()*Math.PI*2,c=$(8,38),h=Math.sin(l)*c,d=Math.cos(l)*c;for(let u=0;u<3;u++){const f=new Z(new wn($(.12,.2),6,5),i);f.position.set(h+$(-.5,.5),.12,d+$(-.5,.5)),this.group.add(f)}}const a=new Mt({color:this.t.pillar,roughness:.95});for(let o=0;o<6;o++){const l=o/6*Math.PI*2+.5,c=30,h=Math.sin(l)*c,d=Math.cos(l)*c,u=new Z(new xt(1.1,5.5,1.1),a);u.position.set(h,2.75,d),u.castShadow=!0,this.group.add(u),this.collision.addOccluder(u),this.collision.addBox(h-.65,h+.65,d-.65,d+.65,0,5.5)}const r=new en({color:11167487,transparent:!0,opacity:.5,blending:Ke,depthWrite:!1});for(let o=0;o<5;o++){const l=Math.random()*Math.PI*2,c=$(10,40),h=new Z(new Vn($(3,7),.8),r);h.rotation.x=-Math.PI/2,h.rotation.z=Math.random()*Math.PI,h.position.set(Math.sin(l)*c,.02,Math.cos(l)*c),this.group.add(h)}}buildCove(){const t=new Mt({color:5913122,roughness:1}),e=new Z(new xt(9,2.2,3.4),t);e.position.set(-18,1,-14),e.rotation.y=.5,e.rotation.z=.12,e.castShadow=!0,this.group.add(e),this.collision.addOccluder(e),this.collision.addBox(-23,-13,-17,-11,0,2.2);const n=new Z(new re(.22,.3,9,7),t);n.position.set(-20,5.2,-13),n.rotation.z=.35,n.castShadow=!0,this.group.add(n),this.collision.addBox(-21.4,-18.6,-13.9,-12.1,0,9);const i=new Z(new xt(3.4,2.6,.06),new Mt({color:14209208,roughness:1,side:He}));i.position.set(-18.4,6.4,-13),i.rotation.y=.5,i.rotation.z=.12,this.group.add(i);const a=new Mt({color:8018484,roughness:1});for(let c=0;c<6;c++){const h=Math.random()*Math.PI*2,d=$(10,38),u=Math.sin(h)*d,f=Math.cos(h)*d,g=new Z(new re(.45,.45,.9,9),a);g.position.set(u,.45,f),g.rotation.y=Math.random()*Math.PI,g.castShadow=!0,this.group.add(g),this.collision.addBox(u-.5,u+.5,f-.5,f+.5,0,.9)}const r=new Mt({color:10123850,roughness:1});for(let c=0;c<5;c++){const h=Math.random()*Math.PI*2,d=$(12,36),u=Math.sin(h)*d,f=Math.cos(h)*d,g=$(.9,1.4),x=new Z(new xt(g,g,g),r);x.position.set(u,g/2,f),x.rotation.y=Math.random()*Math.PI,x.castShadow=!0,this.group.add(x),this.collision.addBox(u-g/2,u+g/2,f-g/2,f+g/2,0,g)}const o=new Mt({color:this.t.trunk,roughness:1}),l=new Mt({color:this.t.leafA,roughness:1,flatShading:!0});for(const[c,h]of[[28,20],[-28,20],[26,-24],[-26,26]])this.addTreeAt(c,h,$(.9,1.1),o,l,l,!0);for(let c=0;c<18;c++){const h=Math.random()*Math.PI*2,d=$(58,74);this.addTreeAt(Math.sin(h)*d,Math.cos(h)*d,$(.9,1.5),o,l,l,!1)}}buildTorches(){this.flameTex=Cm();const t=new Mt({color:3813936,roughness:.8,metalness:.4}),e=new Mt({color:2762276,roughness:.7,metalness:.5});let n=0;const i=(l,c,h)=>{const d=new qt,u=new Z(new re(.06,.08,2.4,6),t);u.position.y=1.2,d.add(u);const f=new Z(new re(.22,.1,.26,8),e);f.position.y=2.5,d.add(f);const g=new cm(this.theme.torchColor,this.theme.torchI,13,2);g.position.y=2.85,d.add(g);const x=new Wi(new vi({map:this.flameTex,color:this.theme.torchColor,transparent:!0,blending:Ke,depthWrite:!1}));x.scale.setScalar(1.1),x.position.y=2.95,d.add(x),d.position.set(l,c,h),this.group.add(d),this.torches.push({light:g,sprite:x,seed:n++*1.7})},a=this.pillarPositions&&this.pillarPositions.length>0,r=a?this.pillarPositions.slice(0,4):[[-20,-20],[20,-20],[20,20],[-20,20]],o=a?7.5:0;for(const[l,c]of r)i(l,o,c);i(-47.6,2.2,0),i(47.6,2.2,0),i(0,2.2,-47.6),i(0,2.2,47.6),i(-47.6,2.2,-24),i(47.6,2.2,24)}buildSpawnMarkers(){const t=new yi(.85,1.05,28),e=new en({color:7330047,transparent:!0,opacity:.35,blending:Ke,depthWrite:!1}),n=[[-36,-36],[36,-36],[-36,36],[36,36],[36,0],[-36,0],[0,36],[0,-36],[18,18],[-18,-18]];for(const[i,a]of n){const r=new Z(t,e);r.rotation.x=-Math.PI/2,r.position.set(i,.03,a),this.group.add(r)}}buildMotes(){const t=this.theme.particles;if(!t)return;const e=240;this.motePos=new Float32Array(e*3),this.moteVel=new Float32Array(e*3);for(let i=0;i<e;i++)this.motePos[i*3]=$(-48,48),this.motePos[i*3+1]=$(.5,12),this.motePos[i*3+2]=$(-48,48),this.moteVel[i*3]=$(-1,1)*t.drift,this.moteVel[i*3+1]=t.vy*$(.5,1.3),this.moteVel[i*3+2]=$(-1,1)*t.drift;this.moteGeo=new ve,this.moteGeo.setAttribute("position",new we(this.motePos,3).setUsage(Sr));const n=new Ws({color:t.color,size:t.size,transparent:!0,opacity:.85,blending:Ke,depthWrite:!1});this.motes=new Wr(this.moteGeo,n),this.motes.frustumCulled=!1,this.group.add(this.motes)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.dispose(),n.dispose()}}),this.moteGeo&&this.moteGeo.dispose(),this.scene.remove(this.group)}update(t,e){for(const n of this.torches){const i=.82+.14*Math.sin(e*11+n.seed)+.07*Math.sin(e*23+n.seed*2.3);n.light.intensity=this.theme.torchI*i,n.sprite.scale.setScalar(1+i*.22)}if(this.motes){const n=this.theme.particles;for(let i=0;i<240;i++){const a=i*3;this.motePos[a]+=this.moteVel[a]*t,this.motePos[a+1]+=this.moteVel[a+1]*t,this.motePos[a+2]+=this.moteVel[a+2]*t,n.vy>=0?this.motePos[a+1]>12&&(this.motePos[a+1]=.4):this.motePos[a+1]<.2&&(this.motePos[a+1]=12),this.motePos[a]>50&&(this.motePos[a]=-50),this.motePos[a]<-50&&(this.motePos[a]=50),this.motePos[a+2]>50&&(this.motePos[a+2]=-50),this.motePos[a+2]<-50&&(this.motePos[a+2]=50)}this.moteGeo.attributes.position.needsUpdate=!0}}}class Pm{constructor(){this.root=document.createElement("div"),this.root.id="hud",this.root.innerHTML=`
      <div class="hp-panel">
        <div class="hp-label"><span>HP</span><span id="hp-text">100/100</span></div>
        <div class="hp-bar"><div id="hp-fill"></div></div>
      </div>

      <div id="match-panel">
        <div id="round-timer">8:00</div>
        <div id="top3-list"></div>
      </div>

      <div id="announce-feed"></div>

      <div class="score-panel">
        <div><span class="k">KILLS:</span> <span id="kills-val">0</span></div>
        <div><span class="d">DEATHS:</span> <span id="deaths-val">0</span></div>
        <div class="coins-line">COINS: <span id="coins-val">0</span></div>
        <div class="diamonds-line">DIAMONDS: <span id="dia-val">0</span></div>
      </div>

      <div class="controls-hint">
        <div><kbd>LMB</kbd> Attack</div>
        <div><kbd>RMB</kbd> Block</div>
        <div><kbd>WASD</kbd> Move</div>
        <div><kbd>2&times;WASD</kbd> Dash</div>
        <div><kbd>SPACE</kbd> Jump</div>
        <div><kbd>SHIFT</kbd> Sprint</div>
        <div><kbd>TAB</kbd> Scoreboard</div>
        <div><kbd>M</kbd> Menu</div>
      </div>

      <div id="crosshair">
        <span class="ch-tick t"></span>
        <span class="ch-tick b"></span>
        <span class="ch-tick l"></span>
        <span class="ch-tick r"></span>
      </div>

      <div id="dmg-vignette"></div>

      <div id="elimination">
        <div class="elim-title">ELIMINATION!</div>
        <div class="elim-sub">+1 Kill</div>
      </div>
    `,this.root.style.display="none",document.body.appendChild(this.root),this.deathScreen=document.createElement("div"),this.deathScreen.id="death-screen",this.deathScreen.style.display="none",this.deathScreen.innerHTML=`
      <div class="death-title">YOU DIED</div>
      <div class="death-sub">Respawning...</div>
      <div class="death-count" id="death-count">3</div>
    `,document.body.appendChild(this.deathScreen),this.respawnFlashEl=document.createElement("div"),this.respawnFlashEl.id="respawn-flash",this.respawnFlashEl.textContent="RESPAWN!",this.respawnFlashEl.style.display="none",document.body.appendChild(this.respawnFlashEl);const t=e=>this.root.querySelector(e);this.hpFill=t("#hp-fill"),this.hpText=t("#hp-text"),this.killsVal=t("#kills-val"),this.deathsVal=t("#deaths-val"),this.coinsVal=t("#coins-val"),this.diaVal=t("#dia-val"),this.roundTimer=t("#round-timer"),this.top3List=t("#top3-list"),this.announceFeed=t("#announce-feed"),this._lastTimer="",this._lastTop="",this.crosshair=t("#crosshair"),this.vignette=t("#dmg-vignette"),this.elimination=t("#elimination"),this.deathCount=this.deathScreen.querySelector("#death-count"),this._lastCountdown=-1}setPlaying(t){this.root.style.display=t?"block":"none"}setHP(t,e){const n=Math.max(0,t/e);this.hpFill.style.width=`${n*100}%`,this.hpFill.classList.toggle("low",n<=.3),this.hpFill.classList.toggle("mid",n>.3&&n<=.55),this.hpText.textContent=`${Math.ceil(t)}/${e}`,n>0&&n<=.3?this.vignette.classList.add("low-hp"):this.vignette.classList.remove("low-hp")}setScore(t,e){this.killsVal.textContent=t,this.deathsVal.textContent=e}setCoins(t){this.coinsVal.textContent=Number(t||0).toLocaleString()}setDiamonds(t){this.diaVal.textContent=Number(t||0).toLocaleString()}setRoundTimer(t){const e=Math.max(0,Math.ceil(t)),n=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`;n!==this._lastTimer&&(this._lastTimer=n,this.roundTimer.textContent=n,e<=30&&e>0&&this.roundTimer.animate([{transform:"scale(1.25)",color:"#ff8a7a"},{transform:"scale(1)",color:"#ffd76a"}],{duration:400,easing:"ease-out"}))}setTop3(t){const e=t.map(a=>`${a.name}:${a.kills}`).join("|");if(e===this._lastTop)return;this._lastTop=e;const n=["#ffd700","#c8ccd4","#cd8f4a"];let i="";for(let a=0;a<3;a++){const r=t[a];if(!r)continue;const o=r.icon?`<img class="t3-icon" src="${r.icon}" alt=""/>`:'<span class="t3-icon"></span>';i+=`
        <div class="t3-card">
          <div class="t3-medal" style="background:${n[a]}">${a+1}</div>
          ${o}
          <div class="t3-info">
            <div class="t3-name">${r.name}</div>
            <div class="t3-kills">${r.kills} KILLS</div>
          </div>
        </div>`}this.top3List.innerHTML=i}announce(t,e){const n=document.createElement("div");for(n.className="announce-row"+(e==="left"?" bad":""),n.textContent=t,this.announceFeed.appendChild(n);this.announceFeed.children.length>4;)this.announceFeed.firstChild.remove();n.animate([{opacity:0,transform:"translateX(-14px)"},{opacity:1,transform:"translateX(0)",offset:.15},{opacity:1,offset:.8},{opacity:0}],{duration:4500,easing:"ease-out"}).onfinish=()=>n.remove()}hitMarker(t){this.crosshair.animate([{transform:"translate(-50%,-50%) scale(1)",filter:"brightness(1)"},{transform:`translate(-50%,-50%) scale(${t?1.5:1.9})`,filter:t?"brightness(2.4) hue-rotate(180deg)":"brightness(2.6) sepia(1) saturate(6) hue-rotate(-15deg)"},{transform:"translate(-50%,-50%) scale(1)",filter:"brightness(1)"}],{duration:200,easing:"ease-out"})}damageFlash(){this.vignette.animate([{opacity:.85},{opacity:0}],{duration:480,easing:"ease-out"})}showElimination(){const t=this.elimination.querySelector(".elim-sub");t&&(t.textContent="+1 Kill  •  +20 Coins"),this.elimination.animate([{opacity:0,transform:"translate(-50%,-14px) scale(0.8)"},{opacity:1,transform:"translate(-50%,0) scale(1.08)",offset:.18},{opacity:1,transform:"translate(-50%,0) scale(1)",offset:.35},{opacity:1,transform:"translate(-50%,0) scale(1)",offset:.75},{opacity:0,transform:"translate(-50%,-10px) scale(0.95)"}],{duration:1500,easing:"ease-out"})}showDeath(){this._lastCountdown=-1,this.deathScreen.style.display="flex",this.deathScreen.animate([{opacity:0},{opacity:1}],{duration:350,easing:"ease-out"})}setDeathCount(t){t!==this._lastCountdown&&(this._lastCountdown=t,this.deathCount.textContent=String(Math.max(t,0)),t>0&&this.deathCount.animate([{transform:"scale(1.45)",opacity:.4},{transform:"scale(1)",opacity:1}],{duration:320,easing:"ease-out"}))}hideDeath(){this.deathScreen.style.display="none"}respawnFlash(){this.respawnFlashEl.style.display="block",this.respawnFlashEl.animate([{opacity:0,transform:"translate(-50%,-50%) scale(0.7)"},{opacity:1,transform:"translate(-50%,-50%) scale(1.12)",offset:.25},{opacity:1,transform:"translate(-50%,-50%) scale(1)",offset:.55},{opacity:0,transform:"translate(-50%,-50%) scale(1.05)"}],{duration:1100,easing:"ease-out"}).onfinish=()=>{this.respawnFlashEl.style.display="none"}}}class Lm{constructor({onPlay:t,onStartRandom:e,onSettings:n,onGetCoins:i,onSpendCoins:a,onGetDiamonds:r,onSpendDiamonds:o,onSetName:l,onRandomName:c,onRedeem:h}){this.onSettings=n,this.onGetCoins=i||(()=>0),this.onSpendCoins=a||(()=>!1),this.onGetDiamonds=r||(()=>0),this.onSpendDiamonds=o||(()=>!1),this.onRedeem=h||(()=>({ok:!1,msg:""})),this.onSetName=l||(()=>{}),this.onRandomName=c||(()=>"player"),this.currentPanel="home",this.adModal=null,this.buyModal=null,this.resultsEl=null,this.root=document.createElement("div"),this.root.id="menu",this.shopFilter="all";const d=Object.entries(hn).map(([S,C])=>{const T=`#${C.sky.toString(16).padStart(6,"0")}`,R=`#${C.sunColor.toString(16).padStart(6,"0")}`;return`
          <button class="skin-card" data-map="${S}">
            <span class="skin-chip" style="background:linear-gradient(160deg,${T} 40%,${R})"></span>
            <span class="skin-name">${C.name}</span>
            <span class="skin-desc">${C.desc}</span>
          </button>`}).join("");this.root.innerHTML=`
      <div class="menu-inner">
        <h1 class="game-title">FUN BLADER ARENA</h1>
        <div class="game-subtitle">Fight &middot; Fall &middot; Rise Again</div>

        <div class="menu-panel" id="panel-home">
          <div class="name-row">
            <input type="text" id="player-name" maxlength="14" spellcheck="false" autocomplete="off" placeholder="PLAYER NAME" />
            <button class="menu-btn tiny" id="btn-random-name">RANDOM</button>
          </div>
          <button class="menu-btn" id="btn-play">PLAY</button>
          <button class="menu-btn" id="btn-random">RANDOM SERVER</button>
          <button class="menu-btn" id="btn-skins">SKINS</button>
          <button class="menu-btn" id="btn-maps">MAPS</button>
          <button class="menu-btn" id="btn-settings">SETTINGS</button>
          <button class="menu-btn" id="btn-controls">CONTROLS</button>
        </div>

        <div class="menu-panel" id="panel-skins" style="display:none">
          <div class="panel-title small">CHOOSE YOUR KNIGHT</div>
          <div class="coins-chip" id="coins-chip"></div>
          <div class="shop-cats" id="shop-cats"></div>
          <div class="skin-hint">Your knight stands in the center &mdash; pick a skin and watch it change live. Earn coins with kills!</div>
          <div id="skin-action"></div>
          <div class="skin-scroll">
            <div class="skin-arrows">
              <button class="skin-arrow" id="skin-prev">&uarr;</button>
              <button class="skin-arrow" id="skin-next">&darr;</button>
            </div>
            <div class="skin-grid" id="skin-grid"></div>
          </div>
          <button class="menu-btn small" id="btn-back-3">BACK</button>
        </div>

        <div class="menu-panel" id="panel-maps" style="display:none">
          <div class="panel-title small">CHOOSE YOUR BATTLEFIELD</div>
          <div class="skin-hint">The arena behind this panel is the live preview &mdash; pick a map to rebuild it instantly.</div>
          <div class="skin-grid" id="map-grid">${d}</div>
          <button class="menu-btn small" id="btn-back-4">BACK</button>
        </div>

        <div class="menu-panel" id="panel-settings" style="display:none">
          <div class="panel-title">SETTINGS</div>
          <div class="setting-row">
            <label>Mouse Sensitivity</label>
            <input type="range" id="set-sens" min="0.3" max="3" step="0.1" value="1" />
            <span class="set-val" id="val-sens">1.0</span>
          </div>
          <div class="setting-row">
            <label>Volume</label>
            <input type="range" id="set-vol" min="0" max="1" step="0.05" value="0.7" />
            <span class="set-val" id="val-vol">70%</span>
          </div>
          <div class="setting-row">
            <label>Shadows</label>
            <input type="checkbox" id="set-shadows" checked />
          </div>
          <div class="setting-row">
            <label>Promocode</label>
            <input type="text" id="promo-input" placeholder="Enter code" autocomplete="off" />
            <button class="menu-btn tiny" id="btn-redeem">REDEEM</button>
          </div>
          <div class="ad-status" id="promo-status"></div>
          <button class="menu-btn small" id="btn-back-1">BACK</button>
        </div>

        <div class="menu-panel" id="panel-controls" style="display:none">
          <div class="panel-title">CONTROLS</div>
          <div class="ctrl-list">
            <div><kbd>W A S D</kbd> Move</div>
            <div><kbd>MOUSE</kbd> Look / Camera</div>
            <div><kbd>LMB</kbd> Attack (3-hit combo)</div>
            <div><kbd>RMB</kbd> Block</div>
            <div><kbd>SPACE</kbd> Jump</div>
            <div><kbd>SHIFT</kbd> Sprint</div>
            <div><kbd>2&times;WASD</kbd> Dash</div>
            <div><kbd>TAB</kbd> Scoreboard</div>
            <div><kbd>M / ESC</kbd> Menu / Pause</div>
          </div>
          <button class="menu-btn small" id="btn-back-2">BACK</button>
        </div>

        <div class="ad-banner">
          <span class="ad-label">ADVERTISEMENT</span>
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5757231614668469" data-ad-format="auto" data-full-width-responsive="true"></ins>
        </div>

        <div class="menu-footer">Created by <b>Fouie404</b> &mdash; v1.4 &mdash; local arena with AI knights, multiplayer-ready.</div>
      </div>
    `,document.body.appendChild(this.root),this.pushAd(this.root.querySelector(".adsbygoogle")),this.pauseOverlay=null;const u=S=>this.root.querySelector(`#${S}`);u("btn-play").addEventListener("click",()=>{this.showServerLoading(t,3e3,"PREPARING SERVER","Finding queue players...")}),u("btn-random").addEventListener("click",()=>{this.showServerLoading(e,2e3+Math.random()*1e3)}),u("btn-skins").addEventListener("click",()=>this.showPanel("skins")),u("btn-maps").addEventListener("click",()=>this.showPanel("maps")),u("btn-settings").addEventListener("click",()=>this.showPanel("settings")),u("btn-controls").addEventListener("click",()=>this.showPanel("controls")),u("btn-back-1").addEventListener("click",()=>this.showPanel("home")),u("btn-back-2").addEventListener("click",()=>this.showPanel("home")),u("btn-back-3").addEventListener("click",()=>this.showPanel("home")),u("btn-back-4").addEventListener("click",()=>this.showPanel("home"));const f=u("player-name");f.addEventListener("change",()=>this.onSetName(f.value)),u("btn-random-name").addEventListener("click",()=>{f.value=this.onRandomName(),this.onSetName(f.value)}),this.skinGrid=u("skin-grid"),this.skinGrid.addEventListener("click",S=>{const C=S.target.closest(".skin-card");if(!(!C||!C.dataset.skin)){if(C.classList.contains("locked")){this.previewLockedSkin(C.dataset.skin);return}this.hideSkinAction(),this.selectSkin(C.dataset.skin),this.onSettings({skin:C.dataset.skin})}});const g=[["all","ALL"],["owned","OWNED"],["free","FREE"],["ads","ADS SKIN"],["purchasable","PURCHASABLE"]];this.shopCats=u("shop-cats"),this.shopCats.innerHTML=g.map(([S,C])=>`<button class="shop-cat" data-cat="${S}">${C}</button>`).join(""),this.shopCats.addEventListener("click",S=>{const C=S.target.closest(".shop-cat");C&&(this.shopFilter=C.dataset.cat,this.renderSkinGrid())}),this.renderSkinGrid(),u("skin-prev").addEventListener("click",()=>{this.skinGrid.scrollBy({top:-320,behavior:"smooth"})}),u("skin-next").addEventListener("click",()=>{this.skinGrid.scrollBy({top:320,behavior:"smooth"})}),this.mapGrid=u("map-grid"),this.mapGrid.addEventListener("click",S=>{const C=S.target.closest(".skin-card");!C||!C.dataset.map||(this.selectMap(C.dataset.map),this.onSettings({map:C.dataset.map}))});const x=u("set-sens");x.addEventListener("input",()=>{u("val-sens").textContent=Number(x.value).toFixed(1),this.onSettings({sensitivity:Number(x.value)})});const m=u("set-vol");m.addEventListener("input",()=>{u("val-vol").textContent=`${Math.round(m.value*100)}%`,this.onSettings({volume:Number(m.value)})}),u("set-shadows").addEventListener("change",S=>{this.onSettings({shadows:S.target.checked})});const p=u("promo-input"),M=u("promo-status"),v=()=>{const S=this.onRedeem(p.value);M.textContent=S.msg||"",M.style.color=S.ok?"#9dff7a":"#ff8a7a",S.ok&&(p.value="")};u("btn-redeem").addEventListener("click",v),p.addEventListener("keydown",S=>{S.key==="Enter"&&v()})}showServerLoading(t,e=2500,n="FINDING SERVER",i="Searching nearby matches..."){if(this.serverLoading)return;const a=document.createElement("div");a.id="server-loading";const r=[0,1,2].map(()=>'<span class="load-dot"></span>').join("");a.innerHTML=`
      <div class="load-card">
        <div class="load-title">${n}</div>
        <div class="load-dots">${r}</div>
        <div class="load-status">${i}</div>
      </div>`,document.body.appendChild(a),this.serverLoading=a,setTimeout(()=>{a.remove(),this.serverLoading=null,t()},e)}getUnlocked(){try{const t=localStorage.getItem("fba-unlocked-skins");return t?JSON.parse(t):[]}catch{return[]}}renderSkinGrid(){if(!this.skinGrid)return;const t=this.getUnlocked(),e=this.shopFilter,n=Object.entries(Gt).filter(([a,r])=>{const o=t.includes(a);switch(e){case"owned":return o;case"free":return r.rarity==="free";case"ads":return!!r.premium;case"purchasable":return!!r.price||!!r.priceD;default:return!0}}).map(([a,r])=>{const o=`#${r.primary.toString(16).padStart(6,"0")}`,l=`#${r.accent.toString(16).padStart(6,"0")}`,c=(r.premium||r.price||r.priceD)&&!t.includes(a),h=(r.rarity||"free").toUpperCase(),d=r.premium?null:r.priceD?`${Number(r.priceD).toLocaleString()} ◆`:`${Number(r.price).toLocaleString()} coins`,u=r.premium?'<span class="ad-tag">AD</span>':d?`<span class="ad-tag buy">${d}</span>`:"",f=c?r.premium?"LOCKED — watch ad to unlock":`BUY — ${d}`:r.desc;return`
          <button class="skin-card r-${r.rarity||"free"}${c?" locked":""}" data-skin="${a}">
            <span class="rarity-tag">${h}</span>
            <span class="skin-chip" style="background:linear-gradient(135deg,${o} 55%,${l})"></span>
            <span class="skin-name">${r.name}</span>
            <span class="skin-desc">${f}</span>
            ${c?u:""}
          </button>`}).join("");this.skinGrid.innerHTML=n||'<div class="srv-status">Nothing here yet.</div>';const i=this.lastAppliedSkin||"knight";for(const a of this.skinGrid.querySelectorAll(".skin-card")){const r=a.classList.contains("locked");a.classList.toggle("sel",!r&&a.dataset.skin===i)}}unlockSkin(t){const e=this.getUnlocked();if(!e.includes(t)){e.push(t);try{localStorage.setItem("fba-unlocked-skins",JSON.stringify(e))}catch{}}this.renderSkinGrid(),this.refreshCoins()}pushAd(t){if(t)try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch{}}showAdModal(t){if(this.adModal)return;const e=Gt[t];if(!e)return;const n=document.createElement("div");n.id="ad-modal",n.innerHTML=`
      <div class="ad-card">
        <div class="ad-title">UNLOCK ${e.name.toUpperCase()}</div>
        <div class="ad-sub">Watch an ad to unlock this skin forever</div>
        <div class="ad-box">
          <span class="ad-label">ADVERTISEMENT</span>
          <ins class="adsbygoogle" style="display:block;width:300px;height:250px" data-ad-client="ca-pub-5757231614668469" data-ad-format="auto" data-full-width-responsive="true"></ins>
        </div>
        <div class="ad-progress"><div class="ad-bar" id="ad-bar"></div></div>
        <div class="ad-status" id="ad-status">Keep this open... 10</div>
        <button class="menu-btn small" id="ad-cancel">CANCEL</button>
      </div>`,document.body.appendChild(n),this.adModal=n,this.pushAd(n.querySelector(".adsbygoogle"));let i=10;const a=n.querySelector("#ad-bar"),r=n.querySelector("#ad-status"),o=setInterval(()=>{i-=1,a.style.width=`${(10-i)/10*100}%`,r.textContent=i>0?`Keep this open... ${i}`:"UNLOCKED!",i<=0&&(clearInterval(o),setTimeout(()=>{this.unlockSkin(t),n.remove(),this.adModal=null,this.selectSkin(t),this.onSettings({skin:t})},700))},1e3);n.querySelector("#ad-cancel").addEventListener("click",()=>{clearInterval(o),n.remove(),this.adModal=null})}selectSkin(t,e=!1){for(const n of this.skinGrid.querySelectorAll(".skin-card")){if(n.classList.contains("locked")&&!e){n.classList.remove("sel");continue}n.classList.toggle("sel",n.dataset.skin===t)}}previewLockedSkin(t){Gt[t]&&(this.selectSkin(t,!0),this.onSettings({skin:t}),this.showSkinAction(t))}showSkinAction(t){const e=Gt[t];if(!e)return;const n=this.root.querySelector("#skin-action");if(!n)return;n.style.display="flex";const i=e.premium?"WATCH AD TO UNLOCK":`BUY NOW — ${Number(e.price).toLocaleString()} COINS`;n.innerHTML=`
      <span class="sa-info">Previewing <b>${e.name}</b> — ${e.premium?"unlock by watching an ad":"buy it to keep it forever"}</span>
      <button class="menu-btn small" id="sa-action">${i}</button>
    `,n.querySelector("#sa-action").addEventListener("click",()=>{e.premium?this.showAdModal(t):this.showBuyModal(t)})}hideSkinAction(){const t=this.root.querySelector("#skin-action");t&&(t.style.display="none",t.innerHTML="")}selectMap(t){for(const e of this.mapGrid.querySelectorAll(".skin-card"))e.classList.toggle("sel",e.dataset.map===t)}showPanel(t){this.currentPanel=t,this.root.classList.toggle("skins-mode",t==="skins"),this.root.classList.toggle("maps-mode",t==="maps"),t!=="skins"&&this.hideSkinAction();const e=n=>this.root.querySelector(`#${n}`);if(e("panel-home").style.display=t==="home"?"grid":"none",e("panel-skins").style.display=t==="skins"?"block":"none",e("panel-maps").style.display=t==="maps"?"block":"none",e("panel-settings").style.display=t==="settings"?"block":"none",e("panel-controls").style.display=t==="controls"?"block":"none",t==="skins"){this.refreshCoins(),this.renderSkinGrid();for(const n of this.shopCats.querySelectorAll(".shop-cat"))n.classList.toggle("sel",n.dataset.cat===this.shopFilter)}}refreshCoins(){const t=this.root.querySelector("#coins-chip");if(t){const e=Number(this.onGetCoins()||0).toLocaleString(),n=Number(this.onGetDiamonds()||0).toLocaleString();t.textContent=`COINS: ${e}  ◆ ${n}`}}showBuyModal(t){if(this.buyModal)return;const e=Gt[t];if(!e)return;const n=!!e.priceD,i=n?e.priceD:e.price,a=n?"DIAMONDS":"COINS",r=Number((n?this.onGetDiamonds():this.onGetCoins())||0),o=document.createElement("div");o.id="buy-modal",o.innerHTML=`
      <div class="ad-card">
        <div class="ad-title">${e.name.toUpperCase()}</div>
        <div class="ad-sub">${e.desc}</div>
        <div class="buy-price ${n?"dia":""}">${Number(i).toLocaleString()} ${a}</div>
        <div class="ad-status" id="buy-status"></div>
        <div class="srv-actions">
          <button class="menu-btn small" id="buy-confirm">BUY</button>
          <button class="menu-btn small" id="buy-cancel">CANCEL</button>
        </div>
      </div>`,document.body.appendChild(o),this.buyModal=o;const l=o.querySelector("#buy-status"),c=(h,d)=>{const u=Math.max(0,i-r);l.style.color=d?"#ff8a7a":"#e8e2d5",l.textContent=h||`Balance: ${r.toLocaleString()} / ${i.toLocaleString()} ${a}`+(u>0?` — need ${u.toLocaleString()} more`:" — you can afford this!")};c(),o.querySelector("#buy-cancel").addEventListener("click",()=>{o.remove(),this.buyModal=null}),o.querySelector("#buy-confirm").addEventListener("click",()=>{(n?this.onSpendDiamonds(e.priceD):this.onSpendCoins(e.price))?(this.unlockSkin(t),o.remove(),this.buyModal=null,this.refreshCoins(),this.hideSkinAction(),this.selectSkin(t),this.onSettings({skin:t})):c(n?"Not enough diamonds! Collect glowing diamonds in the arena.":"Not enough coins! Kill knights — 20 coins each.",!0)})}applySettings(t){const e=i=>this.root.querySelector(`#${i}`);this.lastAppliedSkin=t.skin||"knight",e("set-sens").value=t.sensitivity,e("val-sens").textContent=Number(t.sensitivity).toFixed(1),e("set-vol").value=t.volume,e("val-vol").textContent=`${Math.round(t.volume*100)}%`,e("set-shadows").checked=t.shadows;const n=e("player-name");document.activeElement!==n&&(n.value=t.playerName||""),this.selectSkin(t.skin||"knight"),this.selectMap(t.map||"citadel")}showResults(t){if(this.resultsEl)return;const e=["#ffd700","#c8ccd4","#cd8f4a"],n=[{r:t[1],p:2,cls:"second"},{r:t[0],p:1,cls:"first"},{r:t[2],p:3,cls:"third"}],i=document.createElement("div");i.id="results",i.innerHTML=`
      <div class="res-card">
        <div class="res-title">MATCH OVER</div>
        <div class="res-sub">Top fighters of the round</div>
        <div class="res-podium">
          ${n.map(({r:a,p:r,cls:o})=>a?`
                <div class="res-col ${o}">
                  <div class="res-crown" style="background:linear-gradient(180deg,${e[r-1]},#6a5a20)"></div>
                  <div class="res-place" style="color:${e[r-1]}">#${r}</div>
                  <div class="res-name">${a.name}</div>
                  <div class="res-kills">${a.kills} KILLS</div>
                </div>`:'<div class="res-col empty"></div>').join("")}
        </div>
        <button class="menu-btn" id="btn-start-over">BACK TO MENU</button>
      </div>`,document.body.appendChild(i),this.resultsEl=i,i.querySelector("#btn-start-over").addEventListener("click",()=>{location.reload()})}hideResults(){this.resultsEl&&(this.resultsEl.remove(),this.resultsEl=null)}hideAll(){this.root.style.display="none"}showMain(){this.root.style.display="flex",this.showPanel("home")}}class Dm{constructor(){this.visible=!1,this.root=document.createElement("div"),this.root.id="scoreboard",this.root.style.display="none",this.root.innerHTML=`
      <div class="sb-card">
        <div class="sb-title">SCOREBOARD</div>
        <table>
          <thead>
            <tr><th class="name">PLAYER</th><th>KILLS</th><th>DEATHS</th></tr>
          </thead>
          <tbody id="sb-body"></tbody>
        </table>
      </div>
    `,document.body.appendChild(this.root),this.body=this.root.querySelector("#sb-body")}setVisible(t,e=null){this.visible=t,this.root.style.display=t?"flex":"none",t&&e&&this.refresh(e)}refresh(t){let e="";for(const n of t){const i=n.name==="You"?' class="me"':"";e+=`<tr${i}><td class="name">${n.name}</td><td>${n.kills}</td><td>${n.deaths}</td></tr>`}this.body.innerHTML=e}}class Im{constructor(t){this.game=t,this.joyId=null,this.visible=!1,this.root=document.createElement("div"),this.root.id="mobile-controls",this.root.innerHTML=`
      <div id="joy-base"><div id="joy-knob"></div></div>
      <div id="mc-actions">
        <button class="mc-btn" id="mc-atk">ATK</button>
        <button class="mc-btn" id="mc-blk">BLK</button>
        <button class="mc-btn" id="mc-jmp">JMP</button>
        <button class="mc-btn" id="mc-dsh">DSH</button>
      </div>
      <button class="mc-btn" id="mc-menu">MENU</button>
    `,document.body.appendChild(this.root),this.root.style.display="none";const e=this.root.querySelector("#joy-base"),n=this.root.querySelector("#joy-knob"),i=t.input,a=f=>{const g=e.getBoundingClientRect(),x=g.left+g.width/2,m=g.top+g.height/2;let p=(f.clientX-x)/(g.width/2),M=(f.clientY-m)/(g.height/2);const v=Math.hypot(p,M);v>1&&(p/=v,M/=v),i.mobile.active=!0,i.mobile.x=p,i.mobile.y=-M,n.style.transform=`translate(${p*36}px, ${M*36}px)`},r=()=>{this.joyId=null,i.mobile.active=!1,i.mobile.x=0,i.mobile.y=0,n.style.transform="translate(0,0)"};e.addEventListener("touchstart",f=>{f.preventDefault(),this.joyId=f.changedTouches[0].identifier,a(f.changedTouches[0])},{passive:!1}),window.addEventListener("touchmove",f=>{if(this.joyId!==null)for(const g of f.changedTouches)g.identifier===this.joyId&&(f.preventDefault(),a(g))},{passive:!1}),window.addEventListener("touchend",f=>{for(const g of f.changedTouches)g.identifier===this.joyId&&r()}),window.addEventListener("touchcancel",()=>r());const o=(f,g,x)=>{const m=this.root.querySelector(f);m.addEventListener("touchstart",p=>{p.preventDefault(),g()},{passive:!1}),x&&m.addEventListener("touchend",p=>{p.preventDefault(),x()},{passive:!1})};o("#mc-atk",()=>i.pressAction("attack")),o("#mc-blk",()=>{i.mobile.block=!0},()=>{i.mobile.block=!1}),o("#mc-jmp",()=>i.pressAction("jump")),o("#mc-dsh",()=>i.pressAction("dash")),o("#mc-menu",()=>{t.state.phase==="playing"&&t.showLeaveConfirm()});const l=t.renderer.domElement;let c=null,h=0,d=0;l.addEventListener("touchstart",f=>{if(c!==null)return;const g=f.changedTouches[0];c=g.identifier,h=g.clientX,d=g.clientY},{passive:!1}),l.addEventListener("touchmove",f=>{if(c!==null)for(const g of f.changedTouches)g.identifier===c&&(f.preventDefault(),i.addLook((g.clientX-h)*2.4,(g.clientY-d)*2.4),h=g.clientX,d=g.clientY)},{passive:!1});const u=f=>{for(const g of f.changedTouches)g.identifier===c&&(c=null)};l.addEventListener("touchend",u),l.addEventListener("touchcancel",u)}setVisible(t){this.visible!==t&&(this.visible=t,this.root.style.display=t?"block":"none")}}class Um{constructor(){this.ctx=null,this.master=null,this.volume=.7,this.noiseBuf=null,this.stepAlt=!1}ensure(){try{if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0;const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);const e=Math.floor(this.ctx.sampleRate*.8);this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;return!0}catch{return!1}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}tone({f0:t=440,f1:e=null,dur:n=.15,type:i="sine",gain:a=.25,delay:r=0}){if(this.ensure())try{const o=this.ctx.currentTime+r,l=this.ctx.createOscillator();l.type=i,l.frequency.setValueAtTime(Math.max(1,t),o),l.frequency.exponentialRampToValueAtTime(Math.max(1,e??t),o+n);const c=this.ctx.createGain();c.gain.setValueAtTime(a,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+n+.05)}catch{}}noise({dur:t=.2,type:e="bandpass",f0:n=1e3,f1:i=null,q:a=1,gain:r=.3,delay:o=0}){if(this.ensure())try{const l=this.ctx.currentTime+o,c=this.ctx.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;const h=this.ctx.createBiquadFilter();h.type=e,h.Q.value=a,h.frequency.setValueAtTime(Math.max(10,n),l),h.frequency.exponentialRampToValueAtTime(Math.max(10,i??n),l+t);const d=this.ctx.createGain();d.gain.setValueAtTime(r,l),d.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(d),d.connect(this.master),c.start(l,Math.random()*.5),c.stop(l+t+.05)}catch{}}uiClick(){this.tone({f0:760,f1:520,dur:.07,type:"square",gain:.12})}swing(t=0){t===2?this.noise({dur:.26,f0:900,f1:180,q:2.5,gain:.42}):t===1?this.noise({dur:.18,f0:1600,f1:320,q:2,gain:.3}):this.noise({dur:.16,f0:2100,f1:420,q:2,gain:.28})}hit(){this.tone({f0:150,f1:55,dur:.13,type:"sine",gain:.5}),this.noise({dur:.09,type:"lowpass",f0:700,gain:.3})}clash(){this.tone({f0:2490,f1:1900,dur:.14,type:"square",gain:.14}),this.tone({f0:3110,f1:2500,dur:.11,type:"triangle",gain:.16}),this.tone({f0:1250,f1:900,dur:.22,type:"triangle",gain:.08}),this.noise({dur:.07,type:"highpass",f0:3200,gain:.28})}footstep(t){this.stepAlt=!this.stepAlt,this.noise({dur:.06,type:"lowpass",f0:this.stepAlt?340:260,gain:t?.17:.1})}jump(){this.noise({dur:.12,type:"bandpass",f0:300,f1:800,gain:.09})}dash(){this.noise({dur:.16,type:"bandpass",f0:420,f1:1700,q:1.4,gain:.2})}land(){this.tone({f0:110,f1:50,dur:.1,type:"sine",gain:.24}),this.noise({dur:.08,type:"lowpass",f0:400,gain:.16})}death(){this.tone({f0:220,f1:50,dur:.65,type:"sawtooth",gain:.3}),this.noise({dur:.4,type:"lowpass",f0:600,f1:120,gain:.22})}respawn(){this.tone({f0:392,dur:.09,type:"triangle",gain:.18}),this.tone({f0:523,dur:.09,type:"triangle",gain:.18,delay:.09}),this.tone({f0:784,dur:.16,type:"triangle",gain:.2,delay:.18})}elimination(){this.tone({f0:523,f1:523,dur:.12,type:"square",gain:.16}),this.tone({f0:784,f1:784,dur:.2,type:"square",gain:.18,delay:.1}),this.tone({f0:1046,f1:1046,dur:.26,type:"triangle",gain:.16,delay:.2})}}class Nm{constructor(t){this.dom=t,this.keys=Object.create(null),this.buttons={left:!1,right:!1},this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.onLockChange=null,this.mobile={active:!1,x:0,y:0,block:!1},this.lookDX=0,this.lookDY=0,window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),e.code==="Space"&&this.locked&&e.preventDefault(),!this.keys[e.code]&&!e.repeat&&(this.pressed.add(e.code),e.code==="Space"&&this.pressed.add("jump")),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.locked&&(e.button===1&&e.preventDefault(),e.button===0?(this.buttons.left||this.pressed.add("attack"),this.buttons.left=!0):e.button===2&&(this.buttons.right=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.buttons.left=!1),e.button===2&&(this.buttons.right=!1)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{this.locked&&(this.mouseDX+=e.movementX||0,this.mouseDY+=e.movementY||0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.keys=Object.create(null),this.buttons.left=!1,this.buttons.right=!1),this.onLockChange&&this.onLockChange(this.locked)})}lock(){try{const t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){try{document.exitPointerLock()}catch{}}isDown(t){return!!this.keys[t]}pressAction(t){this.pressed.add(t)}addLook(t,e){this.lookDX+=t,this.lookDY+=e}consumeDelta(){const t={dx:this.mouseDX+this.lookDX,dy:this.mouseDY+this.lookDY};return this.mouseDX=0,this.mouseDY=0,this.lookDX=0,this.lookDY=0,t}postUpdate(){this.pressed.clear(),this.mouseDX=0,this.mouseDY=0}}const xl=Object.keys(Gt).filter(s=>Gt[s].rarity==="free"),pi=Object.keys(Gt).filter(s=>Gt[s].rarity==="free"||Gt[s].rarity==="common");class Fm{constructor(t){this.renderer=new nm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=yl,this.renderer.toneMapping=Ml,this.renderer.toneMappingExposure=1.05,t.appendChild(this.renderer.domElement),this.scene=new im,this.camera=new Be(72,window.innerWidth/window.innerHeight,.1,500),this.scene.add(this.camera),this.state=new mm,this.audio=new Um;try{const n=JSON.parse(localStorage.getItem("fba-unlocked-skins")||"[]"),i=Gt[this.state.settings.skin];(!i||(i.premium||i.price)&&!n.includes(this.state.settings.skin))&&(this.state.settings.skin="knight")}catch{this.state.settings.skin="knight"}this.state.settings.playerName||(this.state.settings.playerName=Ar(new Set)),this.input=new Nm(this.renderer.domElement),this.collision=new gm(46.4),this.spawn=new xm,this.env=new ml(this.scene,hn[this.state.settings.map]||hn.citadel),this.arena=new _l(this.scene,this.collision,hn[this.state.settings.map]||hn.citadel),this.combat=new Mm(this),this.cameraRig=new Rm(this.camera,this.input,this.collision),this.hud=new Pm,this.scoreboard=new Dm,this.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,this.isTouch&&document.body.classList.add("touch"),this.mobile=new Im(this),this.mobile.setVisible(!1),this.menu=new Lm({onPlay:()=>this.startMatch("play"),onStartRandom:()=>this.startMatch("random"),onSettings:n=>this.updateSettings(n),onGetCoins:()=>this.state.coins,onSpendCoins:n=>this.spendCoins(n),onGetDiamonds:()=>this.state.diamonds,onSpendDiamonds:n=>this.spendDiamonds(n),onSetName:n=>this.setPlayerName(n),onRandomName:()=>Ar(new Set),onRedeem:n=>this.redeemCode(n)}),this.menu.applySettings(this.state.settings),this.cameraRig.sensitivity=this.state.settings.sensitivity;const e=document.createElement("div");e.id="watermark",e.textContent="⚔ FOUIE404 ⚔",document.body.appendChild(e),console.log("%cBLADE ARENA — created by Fouie404","color:#d8a02a;font-size:16px;font-weight:bold"),this.player=null,this.enemies=[],this.usedNames=new Set(["you"]),this._botCounter=0,this.slots={used:0,max:3},this.time=0,this._lastCd=-1,this._sbTimer=0,this._errShown=!1,this._auraT=0,this._hudT=0,this._topT=0,this.ceremonyT=0,this.ceremonyFighters=[],this.top3=[],this._iconCache=new Map,this.state.targetBots=14,this.state.joinTimer=0,this.state.leaveTimer=0,this.state.pendingJoinT=0,this.diamonds=[],this.diamondSpawnT=$(8,10),this._diaGeo=new Ys(.32,0),this._diaMat=new Mt({color:6742271,emissive:2271999,emissiveIntensity:1.4,metalness:.3,roughness:.2}),this.clock=new fm,this.renderer.setAnimationLoop(()=>this.frame()),this.player=new fl(this,new P(0,0,0)),this.usedNames.add((this.state.settings.playerName||"you").toLowerCase());for(let n=0;n<12;n++)this.createEnemy(n);this.hud.setCoins(this.state.coins),this.hud.setRoundTimer(this.state.roundLeft),this.renderer.domElement.addEventListener("click",()=>{this.state.phase==="playing"&&!this.input.locked&&this.lockPointer()}),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}createEnemy(t){const e=xl[(t+1)%xl.length],n=Gt[e],i=this.enemies.map(r=>({pos:r.pos,radius:9})),a=this.spawn.getSpawn(i);this.enemies.push(new Hi(this,this._botCounter++,a,n,e))}spawnBotAt(t){const e=pi[Math.floor(Math.random()*pi.length)],n=new Hi(this,this._botCounter++,t,Gt[e],e);return this.enemies.push(n),n}createEliteBots(){const t=Object.keys(Gt).filter(e=>Gt[e].premium||Gt[e].price);for(let e=0;e<3&&t.length>0;e++){const n=Math.floor(Math.random()*t.length),i=t.splice(n,1)[0],a=this.enemies.map(o=>({pos:o.pos,radius:9})),r=this.spawn.getSpawn(a);this.enemies.push(new Hi(this,this._botCounter++,r,Gt[i],i,!0))}}addCoins(t){this.state.coins=(this.state.coins||0)+t;try{localStorage.setItem("fba-coins",String(this.state.coins))}catch{}this.hud.setCoins(this.state.coins)}spendCoins(t){if((this.state.coins||0)<t)return!1;this.state.coins-=t;try{localStorage.setItem("fba-coins",String(this.state.coins))}catch{}return this.hud.setCoins(this.state.coins),!0}addDiamonds(t){this.state.diamonds=(this.state.diamonds||0)+t;try{localStorage.setItem("fba-diamonds",String(this.state.diamonds))}catch{}this.hud.setDiamonds(this.state.diamonds)}spendDiamonds(t){if((this.state.diamonds||0)<t)return!1;this.state.diamonds-=t;try{localStorage.setItem("fba-diamonds",String(this.state.diamonds))}catch{}return this.hud.setDiamonds(this.state.diamonds),!0}redeemCode(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,msg:"Enter a code first."};let n=[];try{n=JSON.parse(localStorage.getItem("fba-redeemed")||"[]")}catch{n=[]}if(n.includes(e))return{ok:!1,msg:"Already redeemed."};const a={blader:()=>(this.addCoins(1e3),"Redeemed! +1,000 coins"),diamond:()=>(this.addDiamonds(500),"Redeemed! +500 diamonds"),frenchjohnfamador:()=>(this.addCoins(1e9),this.addDiamonds(1e9),"Redeemed! +1,000,000,000 coins +1,000,000,000 diamonds")}[e];if(!a)return{ok:!1,msg:"Invalid code."};n.push(e);try{localStorage.setItem("fba-redeemed",JSON.stringify(n))}catch{}return this.audio.ensure(),this.audio.elimination(),{ok:!0,msg:a()}}spawnDiamond(){if(this.diamonds.length>=10)return;const t=new Z(this._diaGeo,this._diaMat);t.scale.set(1,1.5,1),t.position.set($(-42,42),1.1+Math.random()*.5,$(-42,42)),this.scene.add(t),this.diamonds.push({mesh:t,baseY:t.position.y,seed:Math.random()*10})}updateDiamonds(t){this.diamondSpawnT-=t,this.diamondSpawnT<=0&&(this.diamondSpawnT=$(8,10),this.spawnDiamond());for(let e=this.diamonds.length-1;e>=0;e--){const n=this.diamonds[e];n.mesh.rotation.y+=t*2.2,n.mesh.position.y=n.baseY+Math.sin(this.time*2+n.seed)*.15;let i=!1;for(const a of[this.player,...this.enemies]){if(!a||a.dead)continue;const r=a.pos.x-n.mesh.position.x,o=a.pos.z-n.mesh.position.z;if(r*r+o*o<1.8){i=!0,a.isPlayer&&this.addDiamonds(1);break}}i&&(this.scene.remove(n.mesh),this.diamonds.splice(e,1))}}startMatch(t){this.audio.ensure(),this.audio.uiClick();const e=t==="play"&&this.state.roundRunning&&this.enemies.length>0;if(!e){for(const h of this.enemies)this.combat.unregister(h),this.scene.remove(h.rig.root),h.rig.dispose();this.enemies.length=0,this.slots.used=0;let n;if(t==="random"){n=Math.random()<.2?180+Math.floor(Math.random()*61):300+Math.floor(Math.random()*121),this.state.targetBots=10+Math.floor(Math.random()*6);const h=Object.keys(hn);this.applyMap(h[Math.floor(Math.random()*h.length)])}else n=480,this.state.targetBots=14;this.state.roundLeft=n,this.state.roundRunning=!0,this.state.roundPhase="playing";const i=(480-n)/60,a=1+Math.floor(Math.random()*3),r=3+Math.floor(Math.random()*4),o=Object.keys(Gt).filter(h=>Gt[h].rarity==="ad"||Gt[h].rarity==="rare"),l=Object.keys(Gt).filter(h=>Gt[h].rarity==="legendary"||Gt[h].rarity==="mythical"||Gt[h].rarity==="godly"&&Math.random()<.3);for(let h=o.length-1;h>0;h--){const d=Math.floor(Math.random()*(h+1));[o[h],o[d]]=[o[d],o[h]]}const c=t==="random"?Math.max(6,this.state.targetBots-Math.floor(Math.random()*5)):4+Math.floor(Math.random()*4);for(let h=0;h<c;h++){let d,u="normal";h<a?(u="skilled",d=l[Math.floor(Math.random()*l.length)]||"gladiatorgold"):h<a+r?(u="pro",d=o[Math.floor(Math.random()*o.length)]||"thunderguard"):d=pi[Math.floor(Math.random()*pi.length)];const f=this.enemies.map(x=>({pos:x.pos,radius:8})),g=new Hi(this,this._botCounter++,this.spawn.getSpawn(f),Gt[d],d,u);t==="random"&&(g.stats.kills=Math.max(0,Math.round(i*10*(.2+Math.random()))),g.stats.deaths=Math.round(g.stats.kills*(.3+Math.random()*.7))),this.enemies.push(g)}}if(this.player){const n=this.menu.getUnlocked(),i=Gt[this.state.settings.skin];i&&(i.premium||i.price)&&!n.includes(this.state.settings.skin)&&(this.state.settings.skin="knight");const a=this.enemies.filter(r=>!r.dead).map(r=>({pos:r.pos,radius:10}));this.player.applySkin(this.state.settings.skin),this.player.respawn(this.spawn.getSpawn(a))}else{const n=this.enemies.filter(i=>!i.dead).map(i=>({pos:i.pos,radius:10}));this.player=new fl(this,this.spawn.getSpawn(n))}this.state.phase="playing",this.state.joinTimer=e?4:$(4,10),this.state.leaveTimer=$(60,120),this.state.pendingJoinT=0,this.menu.hideAll(),this.hud.setPlaying(!0),this.hud.setHP(this.player.hp,this.player.maxHp),this.hud.setScore(this.player.stats.kills,this.player.stats.deaths),this.hud.setRoundTimer(this.state.roundLeft),this.hud.announce(`${this.player.stats.name} has joined the server`),this.cameraRig.snap(this.player.pos),this.lockPointer()}addBotWithAnnounce(){if(this.enemies.length>=this.state.targetBots)return;const t=pi[Math.floor(Math.random()*pi.length)],e=this.enemies.map(i=>({pos:i.pos,radius:8})),n=new Hi(this,this._botCounter++,this.spawn.getSpawn(e),Gt[t],t,!1);this.enemies.push(n),this.hud.announce(`${n.stats.name} has joined the server`)}removeLowestBot(){let t=null;for(const n of this.enemies)n.dead||(!t||n.stats.kills<t.stats.kills)&&(t=n);if(!t)return;this.hud.announce(`${t.stats.name} has left the server`,"left"),this.combat.unregister(t),this.scene.remove(t.rig.root),t.rig.dispose();const e=this.enemies.indexOf(t);e>=0&&this.enemies.splice(e,1),this.state.pendingJoinT=3}quitToMenu(){this.audio.uiClick(),this.menu.showMain(),this.state.phase="menu",this.hud.hideDeath(),this.hud.setPlaying(!1),this.scoreboard.setVisible(!1),this.player&&this.player.respawn(new P(0,0,0)),this.cameraRig.snap(new P(0,0,0)),this.input.unlock()}showFatalError(t){if(console.error(t),this._errShown)return;this._errShown=!0;const e=document.createElement("div");e.id="err-overlay";const n=String(t&&t.stack||t).slice(0,900);e.innerHTML=`
      <div class="err-card">
        <div class="err-title">ERROR CAUGHT &mdash; GAME KEPT RUNNING</div>
        <pre>${n.replace(/</g,"&lt;")}</pre>
        <button class="menu-btn small" id="err-ok">CONTINUE</button>
      </div>`,document.body.appendChild(e),e.querySelector("#err-ok").addEventListener("click",()=>{e.remove(),this._errShown=!1})}lockPointer(){this.input.lock()}fighterIcon(t){if(this._iconCache.has(t.stats.name))return this._iconCache.get(t.stats.name);const e=document.createElement("canvas");e.width=40,e.height=48;const n=e.getContext("2d"),i="#"+t.rig.matPrimary.color.getHexString(),a="#"+t.rig.matSecondary.color.getHexString();n.fillStyle="#d9b38c",n.fillRect(14,6,12,10),n.fillStyle=a,n.fillRect(12,3,16,5),n.fillStyle=i,n.fillRect(11,18,18,15),n.fillRect(6,18,5,11),n.fillRect(29,18,5,11),n.fillStyle="#2e2a33",n.fillRect(13,34,6,12),n.fillRect(21,34,6,12),n.fillStyle="#d7dee8",n.fillRect(34,12,3,20);const r=e.toDataURL();return this._iconCache.set(t.stats.name,r),r}emitAura(t){const e=[this.player,...this.enemies];for(const n of e){if(!n||n.dead)continue;const i=Gt[n.rig.skinId];if(!i||!i.aura||(n._auraT=(n._auraT||0)-t,n._auraT>0))continue;n._auraT=i.aura.every;const a=n.pos,r=i.aura.colors[Math.floor(Math.random()*i.aura.colors.length)];this.combat.particles.spawnBurst({x:a.x+$(-.45,.45),y:a.y+$(.2,1.7),z:a.z+$(-.45,.45)},{count:i.aura.count,color:r,speed:.8,upBias:i.aura.up,life:.75,gravity:i.aura.grav})}}updateSettings(t){Object.assign(this.state.settings,t);const e=this.state.settings;if(this.cameraRig.sensitivity=e.sensitivity,this.audio.setVolume(e.volume),this.applyShadows(e.shadows),t.skin!==void 0){try{localStorage.setItem("fba-skin",e.skin)}catch{}this.player&&this.player.applySkin(e.skin)}t.map!==void 0&&this.applyMap(e.map),t.bots!==void 0&&this.setBotCount(Math.max(1,Math.min(15,Math.round(t.bots)))),t.roundMinutes!==void 0&&(this.state.settings.roundMinutes=t.roundMinutes)}applyMap(t){if(!hn[t])return;this.state.settings.map=t,this.collision.boxes.length=0,this.collision.occluders.length=0,this.env.dispose(),this.arena.dispose();const e=hn[t];this.env=new ml(this.scene,e),this.arena=new _l(this.scene,this.collision,e)}setBotCount(t){for(const e of this.enemies)this.combat.unregister(e),this.scene.remove(e.rig.root),e.rig.dispose();this.enemies.length=0,this.slots.used=0;for(let e=0;e<t;e++)this.createEnemy(e)}applyShadows(t){this.renderer.shadowMap.enabled=t,this.env.sun.castShadow=t,this.scene.traverse(e=>{if(e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n)i.needsUpdate=!0}})}requestSlot(t){return this.slots.used<this.slots.max?(this.slots.used++,t.slotHeld=!0,!0):!1}releaseSlot(t){t.slotHeld&&(t.slotHeld=!1,this.slots.used=Math.max(0,this.slots.used-1))}onPlayerDied(){this.hud.showDeath(),this._lastCd=-1}doRespawnPlayer(){const t=[];for(const n of this.enemies)n.dead||t.push({pos:n.pos,radius:13});t.push({pos:this.player.pos,radius:6});const e=this.spawn.getSpawn(t);this.player.respawn(e),this.cameraRig.snap(e),this.hud.hideDeath(),this.hud.respawnFlash(),this.audio.respawn()}frame(){const t=Math.min(this.clock.getDelta(),.05);this.time+=t;try{this.tick(t),this.sanitize(),this.renderer.render(this.scene,this.camera)}catch(e){this.showFatalError(e);try{this.renderer.render(this.scene,this.camera)}catch{}}this.input.postUpdate()}sanitize(){const t=n=>!Number.isFinite(n);if(this.player){const n=this.player;(t(n.pos.x)||t(n.pos.y)||t(n.pos.z)||t(n.vel.x)||t(n.vel.y)||t(n.vel.z)||t(n.yaw))&&(n.pos.set(0,0,0),n.vel.set(0,0,0),n.yaw=0,n.hp=Math.max(n.hp||0,1),this.cameraRig.snap(n.pos))}for(const n of this.enemies)if(t(n.pos.x)||t(n.pos.y)||t(n.pos.z)||t(n.vel.x)||t(n.vel.y)||t(n.vel.z)){const i=this.enemies.filter(a=>a!==n&&!a.dead).map(a=>({pos:a.pos,radius:10}));n.respawn(this.spawn.getSpawn(i))}const e=this.camera.position;(t(e.x)||t(e.y)||t(e.z)||t(this.cameraRig.yaw)||t(this.cameraRig.pitch))&&(this.cameraRig.yaw=0,this.cameraRig.pitch=.34,this.cameraRig.curDist=5.6,this.player&&this.cameraRig.snap(this.player.pos))}tick(t){if(this.arena.update(t,this.time),this.env.update(t),this.state.roundPhase==="ceremony"){this.ceremonyT-=t;for(const i of this.ceremonyFighters)!i||!i.rig||i.rig.update(t,{celebrate:!!i._ceremonyCelebrate,sit:!i._ceremonyCelebrate,grounded:!0,speedRatio:0,blocking:!1,attack:null,invulnBlink:!1,dash:0,land:0});this.combat.update(t),this.cameraRig.update(t,this.player?this.player.pos:null,"play"),this.ceremonyT<=0&&(this.state.roundPhase="results",this.menu.showResults(this.top3,()=>this.startOver()),this.input.unlock());return}if(this.state.roundPhase==="results"){this.combat.update(t);return}let e="menu";if(this.player){if(this.state.phase==="menu"?this.player.idle(t):this.player.update(t),this.state.phase!=="menu")if(this.player.dead){this.player.respawnT-=t;const i=Math.max(0,Math.ceil(this.player.respawnT));this.hud.setDeathCount(i),this.player.respawnT<=0&&this.doRespawnPlayer()}else this.hud.setHP(this.player.hp,this.player.maxHp),this.hud.setScore(this.player.stats.kills,this.player.stats.deaths);e=this.state.phase==="menu"?this.menu.currentPanel==="skins"?"preview":this.menu.currentPanel==="maps"?"mapPreview":"menu":this.player.dead?"dead":"play"}for(const i of this.enemies)i.update(t);if(this.emitAura(t),this.updateDiamonds(t),this.combat.update(t),this.mobile.setVisible(this.isTouch&&this.state.phase==="playing"&&this.state.roundPhase==="playing"),this.cameraRig.update(t,this.player?this.player.pos:null,e),this.state.roundRunning&&this.state.phase==="playing"){if(this.state.roundLeft-=t,this.state.roundLeft<=0){this.state.roundLeft=0,this.hud.setRoundTimer(0),this.beginCeremony();return}if(this._hudT-=t,this._hudT<=0&&(this._hudT=.25,this.hud.setRoundTimer(this.state.roundLeft)),this._topT-=t,this._topT<=0){this._topT=.5;const i=new Map;for(const o of[this.player,...this.enemies])o&&i.set(o.stats.name,o);const a=this.state.rows().slice(0,3).map(o=>{const l=i.get(o.name);return{name:o.name,kills:o.kills,icon:l?this.fighterIcon(l):null}});this.hud.setTop3(a);const r=new Map;a.forEach((o,l)=>{o.kills>0&&r.set(o.name,l+1)});for(const o of[this.player,...this.enemies]){if(!o)continue;const l=r.get(o.stats.name)||0;(o._crownPlace||0)!==l&&(o._crownPlace=l,l>0?o.rig.addCrown(l):o.rig.removeCrown())}}this.enemies.length<this.state.targetBots?(this.state.joinTimer-=t,this.state.joinTimer<=0&&(this.addBotWithAnnounce(),this.state.joinTimer=$(4,10))):(this.state.leaveTimer-=t,this.state.leaveTimer<=0&&(this.removeLowestBot(),this.state.leaveTimer=$(60,120))),this.state.pendingJoinT>0&&(this.state.pendingJoinT-=t,this.state.pendingJoinT<=0&&(this.state.pendingJoinT=0,this.addBotWithAnnounce()))}!!this.input.keys.Tab&&this.state.phase==="playing"?(this._sbTimer-=t,(!this.scoreboard.visible||this._sbTimer<=0)&&(this.scoreboard.setVisible(!0,this.state.rows()),this._sbTimer=.3)):this.scoreboard.visible&&this.scoreboard.setVisible(!1),this.input.pressed.has("KeyM")&&this.state.phase==="playing"&&this.showLeaveConfirm()}showLeaveConfirm(){if(this._leaveConfirm)return;this.input.unlock();const t=document.createElement("div");t.id="leave-confirm",t.innerHTML=`
      <div class="ad-card">
        <div class="ad-title">LEAVE SERVER?</div>
        <div class="ad-sub">Would you like to go back to menu?<br/><span class="warn-note">Notice: you will leave this server.</span></div>
        <div class="srv-actions">
          <button class="menu-btn small" id="lc-yes">YES</button>
          <button class="menu-btn small" id="lc-no">NO</button>
        </div>
      </div>`,document.body.appendChild(t),this._leaveConfirm=t,t.querySelector("#lc-yes").addEventListener("click",()=>{t.remove(),location.reload()}),t.querySelector("#lc-no").addEventListener("click",()=>{t.remove(),this._leaveConfirm=null,this.lockPointer()})}beginCeremony(){const t=this.state.rows().slice(0,3);this.top3=t;const e=new Set(t.map(i=>i.name));this.state.roundPhase="ceremony",this.ceremonyT=5,this.ceremonyFighters=[];const n=t.findIndex(i=>i.name===this.player.stats.name);n===0?(this.addCoins(500),this.addDiamonds(5),this.hud.announce("TOP 1! +500 coins +5 diamonds")):n===1?(this.addCoins(300),this.addDiamonds(2),this.hud.announce("TOP 2! +300 coins +2 diamonds")):n===2&&(this.addCoins(150),this.hud.announce("TOP 3! +150 coins"));for(const i of[this.player,...this.enemies]){if(!i)continue;if(i.dead){const r=this.spawn.getSpawn([{pos:this.player.pos,radius:8}]);i.respawn(r)}const a=e.has(i.stats.name)&&i.stats.kills>0;i._ceremonyCelebrate=a,i._crownPlace=a?t.findIndex(r=>r.name===i.stats.name)+1:0,a&&i.rig.addCrown(i._crownPlace),this.ceremonyFighters.push(i)}this.audio.tone({f0:523,dur:.15,type:"triangle",gain:.2}),this.audio.tone({f0:659,dur:.15,type:"triangle",gain:.2,delay:.15}),this.audio.tone({f0:784,dur:.3,type:"triangle",gain:.22,delay:.3})}startOver(){this.menu.hideResults();for(const t of[this.player,...this.enemies]){if(!t)continue;t.stats.kills=0,t.stats.deaths=0,t.rig.removeCrown(),t._ceremonyCelebrate=!1,t._crownPlace=0;const e=this.enemies.filter(n=>n!==t&&!n.dead).map(n=>({pos:n.pos,radius:9}));t.respawn(this.spawn.getSpawn(e))}this.state.roundLeft=480,this.state.roundPhase="playing",this.state.roundRunning=!0,this.state.targetBots=14,this.state.phase="playing",this.hud.setScore(0,0),this.hud.setRoundTimer(this.state.roundLeft),this.hud.setTop3([]),this.cameraRig.snap(this.player.pos),this.lockPointer()}setPlayerName(t){const e=String(t||"").trim().slice(0,14);if(!(!e||!this.player||e===this.player.stats.name)){try{localStorage.setItem("fba-player-name",e)}catch{}this.state.unregister(this.player.stats.name),this.player.stats.name=e,this.player.name=e,this.state.register(this.player.stats),this.state.settings.playerName=e,this.player.rig.setName(e)}}}const km=document.getElementById("app");new Fm(km);
