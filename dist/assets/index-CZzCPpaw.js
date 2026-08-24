(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="169",Ql=0,Ja=1,tc=2,gl=1,_l=2,on=3,En=0,Le=1,Ke=2,Mn=0,pi=1,ln=2,Qa=3,to=4,ec=5,Bn=100,nc=101,ic=102,sc=103,rc=104,ac=200,oc=201,lc=202,cc=203,Nr=204,Fr=205,hc=206,dc=207,uc=208,fc=209,pc=210,mc=211,gc=212,_c=213,vc=214,Or=0,Br=1,kr=2,xi=3,zr=4,Gr=5,Hr=6,Vr=7,Ta=0,xc=1,Mc=2,yn=0,yc=1,Sc=2,bc=3,vl=4,Ec=5,wc=6,Tc=7,xl=300,Mi=301,yi=302,Wr=303,Xr=304,ks=306,Ps=1e3,zn=1001,qr=1002,Pe=1003,Ac=1004,Yi=1005,$e=1006,js=1007,Gn=1008,hn=1009,Ml=1010,yl=1011,Vi=1012,Aa=1013,Hn=1014,Qe=1015,Wi=1016,Ra=1017,Ca=1018,Si=1020,Sl=35902,bl=1021,El=1022,je=1023,wl=1024,Tl=1025,mi=1026,bi=1027,Pa=1028,La=1029,Al=1030,Ia=1031,Da=1033,bs=33776,Es=33777,ws=33778,Ts=33779,Yr=35840,Kr=35841,$r=35842,jr=35843,Zr=36196,Jr=37492,Qr=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,da=37819,ua=37820,fa=37821,As=36492,pa=36494,ma=36495,Rl=36283,ga=36284,_a=36285,va=36286,Rc=3200,Cc=3201,Ua=0,Pc=1,xn="",Oe="srgb",Tn="srgb-linear",Na="display-p3",zs="display-p3-linear",Ls="linear",re="srgb",Is="rec709",Ds="p3",Yn=7680,eo=519,Lc=512,Ic=513,Dc=514,Cl=515,Uc=516,Nc=517,Fc=518,Oc=519,xa=35044,Ma=35048,no="300 es",cn=2e3,Us=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,ya=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Ce(s,t,e){return Math.max(t,Math.min(e,s))}function Bc(s,t){return(s%t+t)%t}function Js(s,t,e){return(1-e)*s+e*t}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,r,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],f=i[3],m=i[6],b=i[1],M=i[4],E=i[7],L=i[2],A=i[5],T=i[8];return r[0]=a*v+o*b+l*L,r[3]=a*f+o*M+l*A,r[6]=a*m+o*E+l*T,r[1]=c*v+h*b+d*L,r[4]=c*f+h*M+d*A,r[7]=c*m+h*E+d*T,r[2]=u*v+p*b+g*L,r[5]=u*f+p*M+g*A,r[8]=u*m+p*E+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qs.makeScale(t,e)),this}rotate(t){return this.premultiply(Qs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qs=new Nt;function Pl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kc(){const s=Ns("canvas");return s.style.display="block",s}const io={};function Rs(s){s in io||(io[s]=!0,console.warn(s))}function zc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const so=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ro=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pi={[Tn]:{transfer:Ls,primaries:Is,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Oe]:{transfer:re,primaries:Is,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zs]:{transfer:Ls,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(ro),fromReference:s=>s.applyMatrix3(so)},[Na]:{transfer:re,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(ro),fromReference:s=>s.applyMatrix3(so).convertLinearToSRGB()}},Vc=new Set([Tn,zs]),jt={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Vc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Pi[t].toReference,i=Pi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Pi[s].primaries},getTransfer:function(s){return s===xn?Ls:Pi[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Pi[t].luminanceCoefficients)}};function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Kn;class Wc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kn===void 0&&(Kn=Ns("canvas")),Kn.width=t.width,Kn.height=t.height;const n=Kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xc=0;class Ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(er(i[a].image)):r.push(er(i[a]))}else r=er(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function er(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qc=0;class Se extends Ti{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=zn,i=zn,r=$e,a=Gn,o=je,l=hn,c=Se.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Sn(),this.name="",this.source=new Ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=xl;Se.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(p+1)/2,L=(m+1)/2,A=(h+u)/4,T=(d+v)/4,P=(g+f)/4;return M>E&&M>L?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=T/n):E>L?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=A/i,r=P/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=P/r),this.set(n,i,r,e),this}let b=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yc extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Se(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ll(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Yc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Il extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kc extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let f=1-o;const m=l*u+c*p+h*g+d*v,b=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const L=Math.sqrt(M),A=Math.atan2(L,m*b);f=Math.sin(f*A)/L,o=Math.sin(o*A)/L}const E=o*b;if(l=l*f+u*E,c=c*f+p*E,h=h*f+g*E,d=d*f+v*E,f===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ao.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ao.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nr.copy(this).projectOnVector(t),this.sub(nr)}reflect(t){return this.sub(nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new R,ao=new Ai;class Xn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(t.matrixWorld),this.union(Ki)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),$i.subVectors(this.max,Li),$n.subVectors(t.a,Li),jn.subVectors(t.b,Li),Zn.subVectors(t.c,Li),un.subVectors(jn,$n),fn.subVectors(Zn,jn),Cn.subVectors($n,Zn);let e=[0,-un.z,un.y,0,-fn.z,fn.y,0,-Cn.z,Cn.y,un.z,0,-un.x,fn.z,0,-fn.x,Cn.z,0,-Cn.x,-un.y,un.x,0,-fn.y,fn.x,0,-Cn.y,Cn.x,0];return!ir(e,$n,jn,Zn,$i)||(e=[1,0,0,0,1,0,0,0,1],!ir(e,$n,jn,Zn,$i))?!1:(ji.crossVectors(un,fn),e=[ji.x,ji.y,ji.z],ir(e,$n,jn,Zn,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new R,new R,new R,new R,new R,new R,new R,new R],We=new R,Ki=new Xn,$n=new R,jn=new R,Zn=new R,un=new R,fn=new R,Cn=new R,Li=new R,$i=new R,ji=new R,Pn=new R;function ir(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pn.fromArray(s,r);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $c=new Xn,Ii=new R,sr=new R;class Ri{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$c.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(sr)),this.expandByPoint(Ii.copy(t.center).sub(sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new R,rr=new R,Zi=new R,pn=new R,ar=new R,Ji=new R,or=new R;class Fa{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rr.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(rr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zi),o=pn.dot(this.direction),l=-pn.dot(Zi),c=pn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(rr).addScaledVector(Zi,u),p}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,i,r){ar.subVectors(e,t),Ji.subVectors(n,t),or.crossVectors(ar,Ji);let a=this.direction.dot(or),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,t);const l=o*this.direction.dot(Ji.crossVectors(pn,Ji));if(l<0)return null;const c=o*this.direction.dot(ar.cross(pn));if(c<0||l+c>a)return null;const h=-o*pn.dot(or);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(t,e,n,i,r,a,o,l,c,h,d,u,p,g,v,f){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,p,g,v,f)}set(t,e,n,i,r,a,o,l,c,h,d,u,p,g,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),a=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jc,t,Zc)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),mn.crossVectors(n,Ne),mn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),mn.crossVectors(n,Ne)),mn.normalize(),Qi.crossVectors(Ne,mn),i[0]=mn.x,i[4]=Qi.x,i[8]=Ne.x,i[1]=mn.y,i[5]=Qi.y,i[9]=Ne.y,i[2]=mn.z,i[6]=Qi.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],b=n[3],M=n[7],E=n[11],L=n[15],A=i[0],T=i[4],P=i[8],W=i[12],_=i[1],S=i[5],F=i[9],k=i[13],V=i[2],K=i[6],z=i[10],j=i[14],G=i[3],rt=i[7],at=i[11],ut=i[15];return r[0]=a*A+o*_+l*V+c*G,r[4]=a*T+o*S+l*K+c*rt,r[8]=a*P+o*F+l*z+c*at,r[12]=a*W+o*k+l*j+c*ut,r[1]=h*A+d*_+u*V+p*G,r[5]=h*T+d*S+u*K+p*rt,r[9]=h*P+d*F+u*z+p*at,r[13]=h*W+d*k+u*j+p*ut,r[2]=g*A+v*_+f*V+m*G,r[6]=g*T+v*S+f*K+m*rt,r[10]=g*P+v*F+f*z+m*at,r[14]=g*W+v*k+f*j+m*ut,r[3]=b*A+M*_+E*V+L*G,r[7]=b*T+M*S+E*K+L*rt,r[11]=b*P+M*F+E*z+L*at,r[15]=b*W+M*k+E*j+L*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*p-n*l*p)+v*(+e*l*p-e*c*u+r*a*u-i*a*p+i*c*h-r*l*h)+f*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+m*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],b=d*f*c-v*u*c+v*l*p-o*f*p-d*l*m+o*u*m,M=g*u*c-h*f*c-g*l*p+a*f*p+h*l*m-a*u*m,E=h*v*c-g*d*c+g*o*p-a*v*p-h*o*m+a*d*m,L=g*d*l-h*v*l-g*o*u+a*v*u+h*o*f-a*d*f,A=e*b+n*M+i*E+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=b*T,t[1]=(v*u*r-d*f*r-v*i*p+n*f*p+d*i*m-n*u*m)*T,t[2]=(o*f*r-v*l*r+v*i*c-n*f*c-o*i*m+n*l*m)*T,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*p-n*l*p)*T,t[4]=M*T,t[5]=(h*f*r-g*u*r+g*i*p-e*f*p-h*i*m+e*u*m)*T,t[6]=(g*l*r-a*f*r-g*i*c+e*f*c+a*i*m-e*l*m)*T,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*p+e*l*p)*T,t[8]=E*T,t[9]=(g*d*r-h*v*r-g*n*p+e*v*p+h*n*m-e*d*m)*T,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*m+e*o*m)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*T,t[12]=L*T,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*f+e*d*f)*T,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*f-e*o*f)*T,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,v=a*h,f=a*d,m=o*d,b=l*c,M=l*h,E=l*d,L=n.x,A=n.y,T=n.z;return i[0]=(1-(v+m))*L,i[1]=(p+E)*L,i[2]=(g-M)*L,i[3]=0,i[4]=(p-E)*A,i[5]=(1-(u+m))*A,i[6]=(f+b)*A,i[7]=0,i[8]=(g+M)*T,i[9]=(f-b)*T,i[10]=(1-(u+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Jn.set(i[0],i[1],i[2]).length();const a=Jn.set(i[4],i[5],i[6]).length(),o=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/r,h=1/a,d=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=d,Xe.elements[9]*=d,Xe.elements[10]*=d,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=cn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(o===cn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Us)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=cn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*c,p=(n+i)*h;let g,v;if(o===cn)g=(a+r)*d,v=-2*d;else if(o===Us)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new R,Xe=new Yt,jc=new R(0,0,0),Zc=new R(1,1,1),mn=new R,Qi=new R,Ne=new R,oo=new Yt,lo=new Ai;class He{constructor(t=0,e=0,n=0,i=He.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lo.setFromEuler(this),this.setFromQuaternion(lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}He.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jc=0;const co=new R,Qn=new Ai,sn=new Yt,ts=new R,Di=new R,Qc=new R,th=new Ai,ho=new R(1,0,0),uo=new R(0,1,0),fo=new R(0,0,1),po={type:"added"},eh={type:"removed"},ti={type:"childadded",child:null},lr={type:"childremoved",child:null};class fe extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new R,e=new He,n=new Ai,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Nt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(ho,t)}rotateY(t){return this.rotateOnAxis(uo,t)}rotateZ(t){return this.rotateOnAxis(fo,t)}translateOnAxis(t,e){return co.copy(t).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ho,t)}translateY(t){return this.translateOnAxis(uo,t)}translateZ(t){return this.translateOnAxis(fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Di,ts,this.up):sn.lookAt(ts,Di,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(sn),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(po),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eh),lr.child=t,this.dispatchEvent(lr),lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(po),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,Qc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new R,rn=new R,cr=new R,an=new R,ei=new R,ni=new R,mo=new R,hr=new R,dr=new R,ur=new R,fr=new ee,pr=new ee,mr=new ee;class Ge{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qe.subVectors(i,e),rn.subVectors(n,e),cr.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(rn),l=qe.dot(cr),c=rn.dot(rn),h=rn.dot(cr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,an.x),l.addScaledVector(a,an.y),l.addScaledVector(o,an.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return fr.setScalar(0),pr.setScalar(0),mr.setScalar(0),fr.fromBufferAttribute(t,e),pr.fromBufferAttribute(t,n),mr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(fr,r.x),a.addScaledVector(pr,r.y),a.addScaledVector(mr,r.z),a}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),rn.subVectors(t,e),qe.cross(rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),qe.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ei.subVectors(i,n),ni.subVectors(r,n),hr.subVectors(t,n);const l=ei.dot(hr),c=ni.dot(hr);if(l<=0&&c<=0)return e.copy(n);dr.subVectors(t,i);const h=ei.dot(dr),d=ni.dot(dr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ei,a);ur.subVectors(t,r);const p=ei.dot(ur),g=ni.dot(ur);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ni,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return mo.subVectors(r,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(mo,o);const m=1/(f+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(ei,a).addScaledVector(ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},es={h:0,s:0,l:0};function gr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Bc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=gr(a,r,t+1/3),this.g=gr(a,r,t),this.b=gr(a,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return jt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ce(ye.r*255,0,255))*65536+Math.round(Ce(ye.g*255,0,255))*256+Math.round(Ce(ye.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,r=ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Oe){jt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(es);const n=Js(gn.h,es.h,e),i=Js(gn.s,es.s,e),r=Js(gn.l,es.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Ft;Ft.NAMES=Dl;let nh=0;class An extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=pi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bn extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new R,ns=new Ct;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class Ul extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nl extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ih=0;const ze=new Yt,_r=new fe,ii=new R,Fe=new Xn,Ui=new Xn,ge=new R;class ve extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pl(t)?Nl:Ul)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return _r.lookAt(t),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Fe.min,Ui.min),Fe.expandByPoint(ge),ge.addVectors(Fe.max,Ui.max),Fe.expandByPoint(ge)):(Fe.expandByPoint(Ui.min),Fe.expandByPoint(Ui.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(ii.fromBufferAttribute(t,c),ge.add(ii)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;const c=new R,h=new R,d=new R,u=new Ct,p=new Ct,g=new Ct,v=new R,f=new R;function m(P,W,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,W),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(S),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),o[P].add(v),o[W].add(v),o[_].add(v),l[P].add(f),l[W].add(f),l[_].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,W=b.length;P<W;++P){const _=b[P],S=_.start,F=_.count;for(let k=S,V=S+F;k<V;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new R,E=new R,L=new R,A=new R;function T(P){L.fromBufferAttribute(i,P),A.copy(L);const W=o[P];M.copy(W),M.sub(L.multiplyScalar(L.dot(W))).normalize(),E.crossVectors(A,W);const S=E.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,S)}for(let P=0,W=b.length;P<W;++P){const _=b[P],S=_.start,F=_.count;for(let k=S,V=S+F;k<V;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[p++]}return new be(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const go=new Yt,Ln=new Fa,is=new Ri,_o=new R,ss=new R,rs=new R,as=new R,vr=new R,os=new R,vo=new R,ls=new R;class ct extends fe{constructor(t=new ve,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(vr.fromBufferAttribute(d,t),a?os.addScaledVector(vr,h):os.addScaledVector(vr.sub(e),h))}e.add(os)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(is.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(is,_o)===null||Ln.origin.distanceToSquared(_o)>(t.far-t.near)**2))&&(go.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(go),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const f=u[g],m=a[f.materialIndex],b=Math.max(f.start,p.start),M=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let E=b,L=M;E<L;E+=3){const A=o.getX(E),T=o.getX(E+1),P=o.getX(E+2);i=cs(this,m,t,n,c,h,d,A,T,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const b=o.getX(f),M=o.getX(f+1),E=o.getX(f+2);i=cs(this,a,t,n,c,h,d,b,M,E),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const f=u[g],m=a[f.materialIndex],b=Math.max(f.start,p.start),M=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=b,L=M;E<L;E+=3){const A=E,T=E+1,P=E+2;i=cs(this,m,t,n,c,h,d,A,T,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const b=f,M=f+1,E=f+2;i=cs(this,a,t,n,c,h,d,b,M,E),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function sh(s,t,e,n,i,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===En,o),l===null)return null;ls.copy(o),ls.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ls);return c<e.near||c>e.far?null:{distance:c,point:ls.clone(),object:s}}function cs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ss),s.getVertexPosition(l,rs),s.getVertexPosition(c,as);const h=sh(s,t,e,n,ss,rs,as,vo);if(h){const d=new R;Ge.getBarycoord(vo,ss,rs,as,d),i&&(h.uv=Ge.getInterpolatedAttribute(i,o,l,c,d,new Ct)),r&&(h.uv1=Ge.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(h.normal=Ge.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};Ge.getNormal(ss,rs,as,u.normal),h.face=u,h.barycoord=d}return h}class Ot extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(v,f,m,b,M,E,L,A,T,P,W){const _=E/T,S=L/P,F=E/2,k=L/2,V=A/2,K=T+1,z=P+1;let j=0,G=0;const rt=new R;for(let at=0;at<z;at++){const ut=at*S-k;for(let Bt=0;Bt<K;Bt++){const Zt=Bt*_-F;rt[v]=Zt*b,rt[f]=ut*M,rt[m]=V,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[f]=0,rt[m]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Bt/T),d.push(1-at/P),j+=1}}for(let at=0;at<P;at++)for(let ut=0;ut<T;ut++){const Bt=u+ut+K*at,Zt=u+ut+K*(at+1),X=u+(ut+1)+K*(at+1),J=u+(ut+1)+K*at;l.push(Bt,Zt,J),l.push(Zt,X,J),G+=6}o.addGroup(p,G,W),p+=G,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=Ei(s[e]);for(const i in n)t[i]=n[i]}return t}function rh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Fl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const ah={clone:Ei,merge:Te};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ol extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new R,xo=new Ct,Mo=new Ct;class Be extends Ol{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,xo,Mo),e.subVectors(Mo,xo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ri=1;class ch extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(si,ri,t,e);i.layers=this.layers,this.add(i);const r=new Be(si,ri,t,e);r.layers=this.layers,this.add(r);const a=new Be(si,ri,t,e);a.layers=this.layers,this.add(a);const o=new Be(si,ri,t,e);o.layers=this.layers,this.add(o);const l=new Be(si,ri,t,e);l.layers=this.layers,this.add(l);const c=new Be(si,ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bl extends Se{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hh extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Bl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ot(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Mn});r.uniforms.tEquirect.value=e;const a=new ct(i,r),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=$e),new ch(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const xr=new R,dh=new R,uh=new Nt;class Fn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=xr.subVectors(n,e).cross(dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uh.getNormalMatrix(t),i=this.coplanarPoint(xr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ri,hs=new R;class Ba{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],v=i[10],f=i[11],m=i[12],b=i[13],M=i[14],E=i[15];if(n[0].setComponents(l-r,u-c,f-p,E-m).normalize(),n[1].setComponents(l+r,u+c,f+p,E+m).normalize(),n[2].setComponents(l+a,u+h,f+g,E+b).normalize(),n[3].setComponents(l-a,u-h,f-g,E-b).normalize(),n[4].setComponents(l-o,u-d,f-v,E-M).normalize(),e===cn)n[5].setComponents(l+o,u+d,f+v,E+M).normalize();else if(e===Us)n[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(hs.x=i.normal.x>0?t.max.x:t.min.x,hs.y=i.normal.y>0?t.max.y:t.min.y,hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function fh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class wi extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],v=[],f=[];for(let m=0;m<h;m++){const b=m*u-a;for(let M=0;M<c;M++){const E=M*d-r;g.push(E,-b,0),v.push(0,0,1),f.push(M/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const M=b+c*m,E=b+c*(m+1),L=b+1+c*(m+1),A=b+1+c*m;p.push(M,E,A),p.push(E,L,A)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
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
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
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
#endif`,bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,Rh=`#ifdef USE_BUMPMAP
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Oh=`#define PI 3.141592653589793
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
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kh=`vec3 transformedNormal = objectNormal;
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
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`
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
}`,qh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
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
}`,nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
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
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
}`,fd=`
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
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
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`float getShadowMask() {
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
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tu=`#ifdef USE_SKINNING
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
#endif`,eu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nu=`#ifdef USE_SKINNING
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
#endif`,iu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,su=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,au=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ou=`#ifdef USE_TRANSMISSION
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
#endif`,lu=`#ifdef USE_TRANSMISSION
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
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pu=`uniform sampler2D t2D;
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
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`#include <common>
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
}`,Mu=`#if DEPTH_PACKING == 3200
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
}`,yu=`#define DISTANCE
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
}`,Su=`#define DISTANCE
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
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`uniform float scale;
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
}`,Tu=`uniform vec3 diffuse;
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
}`,Au=`#include <common>
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Cu=`#define LAMBERT
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
}`,Pu=`#define LAMBERT
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
}`,Lu=`#define MATCAP
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
}`,Iu=`#define MATCAP
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
}`,Du=`#define NORMAL
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
}`,Uu=`#define NORMAL
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
}`,Nu=`#define PHONG
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
}`,Fu=`#define PHONG
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
}`,Ou=`#define STANDARD
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
}`,Bu=`#define STANDARD
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
}`,ku=`#define TOON
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
}`,zu=`#define TOON
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
}`,Gu=`uniform float size;
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
}`,Hu=`uniform vec3 diffuse;
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
}`,Vu=`#include <common>
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
}`,Wu=`uniform vec3 color;
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
}`,Xu=`uniform float rotation;
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
}`,qu=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:vh,alphatest_pars_fragment:xh,aomap_fragment:Mh,aomap_pars_fragment:yh,batching_pars_vertex:Sh,batching_vertex:bh,begin_vertex:Eh,beginnormal_vertex:wh,bsdfs:Th,iridescence_fragment:Ah,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Ih,color_fragment:Dh,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:kh,displacementmap_pars_vertex:zh,displacementmap_vertex:Gh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Vh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:qh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:Kh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:ad,envmap_vertex:jh,fog_vertex:Zh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_pars_fragment:nd,lights_lambert_fragment:id,lights_lambert_pars_fragment:sd,lights_pars_begin:rd,lights_toon_fragment:od,lights_toon_pars_fragment:ld,lights_phong_fragment:cd,lights_phong_pars_fragment:hd,lights_physical_fragment:dd,lights_physical_pars_fragment:ud,lights_fragment_begin:fd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:xd,map_fragment:Md,map_pars_fragment:yd,map_particle_fragment:Sd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:wd,morphinstance_vertex:Td,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Id,normal_pars_fragment:Dd,normal_pars_vertex:Ud,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:zd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:jd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Jd,skinbase_vertex:Qd,skinning_pars_vertex:tu,skinning_vertex:eu,skinnormal_vertex:nu,specularmap_fragment:iu,specularmap_pars_fragment:su,tonemapping_fragment:ru,tonemapping_pars_fragment:au,transmission_fragment:ou,transmission_pars_fragment:lu,uv_pars_fragment:cu,uv_pars_vertex:hu,uv_vertex:du,worldpos_vertex:uu,background_vert:fu,background_frag:pu,backgroundCube_vert:mu,backgroundCube_frag:gu,cube_vert:_u,cube_frag:vu,depth_vert:xu,depth_frag:Mu,distanceRGBA_vert:yu,distanceRGBA_frag:Su,equirect_vert:bu,equirect_frag:Eu,linedashed_vert:wu,linedashed_frag:Tu,meshbasic_vert:Au,meshbasic_frag:Ru,meshlambert_vert:Cu,meshlambert_frag:Pu,meshmatcap_vert:Lu,meshmatcap_frag:Iu,meshnormal_vert:Du,meshnormal_frag:Uu,meshphong_vert:Nu,meshphong_frag:Fu,meshphysical_vert:Ou,meshphysical_frag:Bu,meshtoon_vert:ku,meshtoon_frag:zu,points_vert:Gu,points_frag:Hu,shadow_vert:Vu,shadow_frag:Wu,sprite_vert:Xu,sprite_frag:qu},it={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ze={basic:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Te([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Te([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Te([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Te([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Te([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Te([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Te([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Te([it.lights,it.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ze.physical={uniforms:Te([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const ds={r:0,b:0,g:0},Dn=new He,Yu=new Yt;function Ku(s,t,e,n,i,r,a){const o=new Ft(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function v(b){let M=!1;const E=g(b);E===null?m(o,l):E&&E.isColor&&(m(E,1),M=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(b,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===ks)?(h===void 0&&(h=new ct(new Ot(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Ei(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Dn.copy(M.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yu.makeRotationFromEuler(Dn)),h.material.toneMapped=jt.getTransfer(E.colorSpace)!==re,(d!==E||u!==E.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ct(new wi(2,2),new wn({name:"BackgroundMaterial",uniforms:Ei(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=jt.getTransfer(E.colorSpace)!==re,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(ds,Fl(s)),n.buffers.color.setClear(ds.r,ds.g,ds.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(o,l)},render:v,addToRenderList:f}}function $u(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(_,S,F,k,V){let K=!1;const z=d(k,F,S);r!==z&&(r=z,c(r.object)),K=p(_,k,F,V),K&&g(_,k,F,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(_,S,F,k),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,S,F){const k=F.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let K=V[S.id];K===void 0&&(K={},V[S.id]=K);let z=K[k];return z===void 0&&(z=u(l()),K[k]=z),z}function u(_){const S=[],F=[],k=[];for(let V=0;V<e;V++)S[V]=0,F[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,S,F,k){const V=r.attributes,K=S.attributes;let z=0;const j=F.getAttributes();for(const G in j)if(j[G].location>=0){const at=V[G];let ut=K[G];if(ut===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor)),at===void 0||at.attribute!==ut||ut&&at.data!==ut.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(_,S,F,k){const V={},K=S.attributes;let z=0;const j=F.getAttributes();for(const G in j)if(j[G].location>=0){let at=K[G];at===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(at=_.instanceColor));const ut={};ut.attribute=at,at&&at.data&&(ut.data=at.data),V[G]=ut,z++}r.attributes=V,r.attributesNum=z,r.index=k}function v(){const _=r.newAttributes;for(let S=0,F=_.length;S<F;S++)_[S]=0}function f(_){m(_,0)}function m(_,S){const F=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;F[_]=1,k[_]===0&&(s.enableVertexAttribArray(_),k[_]=1),V[_]!==S&&(s.vertexAttribDivisor(_,S),V[_]=S)}function b(){const _=r.newAttributes,S=r.enabledAttributes;for(let F=0,k=S.length;F<k;F++)S[F]!==_[F]&&(s.disableVertexAttribArray(F),S[F]=0)}function M(_,S,F,k,V,K,z){z===!0?s.vertexAttribIPointer(_,S,F,V,K):s.vertexAttribPointer(_,S,F,k,V,K)}function E(_,S,F,k){v();const V=k.attributes,K=F.getAttributes(),z=S.defaultAttributeValues;for(const j in K){const G=K[j];if(G.location>=0){let rt=V[j];if(rt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){const at=rt.normalized,ut=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;const Zt=Bt.buffer,X=Bt.type,J=Bt.bytesPerElement,vt=X===s.INT||X===s.UNSIGNED_INT||rt.gpuType===Aa;if(rt.isInterleavedBufferAttribute){const ft=rt.data,Lt=ft.stride,Et=rt.offset;if(ft.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)m(G.location+Gt,ft.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)f(G.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let Gt=0;Gt<G.locationSize;Gt++)M(G.location+Gt,ut/G.locationSize,X,at,Lt*J,(Et+ut/G.locationSize*Gt)*J,vt)}else{if(rt.isInstancedBufferAttribute){for(let ft=0;ft<G.locationSize;ft++)m(G.location+ft,rt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ft=0;ft<G.locationSize;ft++)f(G.location+ft);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let ft=0;ft<G.locationSize;ft++)M(G.location+ft,ut/G.locationSize,X,at,ut*J,ut/G.locationSize*ft*J,vt)}}else if(z!==void 0){const at=z[j];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(G.location,at);break;case 3:s.vertexAttrib3fv(G.location,at);break;case 4:s.vertexAttrib4fv(G.location,at);break;default:s.vertexAttrib1fv(G.location,at)}}}}b()}function L(){P();for(const _ in n){const S=n[_];for(const F in S){const k=S[F];for(const V in k)h(k[V].object),delete k[V];delete S[F]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const F in S){const k=S[F];for(const V in k)h(k[V].object),delete k[V];delete S[F]}delete n[_.id]}function T(_){for(const S in n){const F=n[S];if(F[_.id]===void 0)continue;const k=F[_.id];for(const V in k)h(k[V].object),delete k[V];delete F[_.id]}}function P(){W(),a=!0,r!==i&&(r=i,c(r.object))}function W(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:W,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:f,disableUnusedAttributes:b}}function ju(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zu(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==je&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==hn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qe&&!P)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:L,maxSamples:A}}function Ju(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Fn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const b=r?0:n,M=b*4;let E=m.clippingState||null;l.value=E,E=h(g,u,M,p);for(let L=0;L!==M;++L)E[L]=e[L];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const m=p+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<m)&&(f=new Float32Array(m));for(let M=0,E=p;M!==v;++M,E+=4)a.copy(d[M]).applyMatrix4(b,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Qu(s){let t=new WeakMap;function e(a,o){return o===Wr?a.mapping=Mi:o===Xr&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===Xr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zl extends Ol{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fi=4,yo=[.125,.215,.35,.446,.526,.582],kn=20,Mr=new zl,So=new Ft;let yr=null,Sr=0,br=0,Er=!1;const On=(1+Math.sqrt(5))/2,ai=1/On,bo=[new R(-On,ai,0),new R(On,ai,0),new R(-ai,0,On),new R(ai,0,On),new R(0,On,-ai),new R(0,On,ai),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){yr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yr,Sr,br),this._renderer.xr.enabled=Er,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Wi,format:je,colorSpace:Tn,depthBuffer:!1},i=wo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tf(r)),this._blurMaterial=ef(r,t,e)}return i}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(So),h.toneMapping=yn,h.autoClear=!1;const p=new bn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new ct(new Ot,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(So),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const M=this._cubeSize;us(i,b*M,m>2?M:0,M,M),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Mi||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Mr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bo[(i-r-1)%bo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ct(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),v=r/g,f=isFinite(r)?1+Math.floor(h*v):kn;f>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${kn}`);const m=[];let b=0;for(let T=0;T<kn;++T){const P=T/v,W=Math.exp(-P*P/2);m.push(W),T===0?b+=W:T<f&&(b+=2*W)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const E=this._sizeLods[i],L=3*E*(i>M-fi?i-M+fi:0),A=4*(this._cubeSize-E);us(e,L,A,3*E,2*E),l.setRenderTarget(e),l.render(d,Mr)}}function tf(s){const t=[],e=[],n=[];let i=s;const r=s-fi+1+yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-fi?l=yo[a-s+fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,f=2,m=1,b=new Float32Array(v*g*p),M=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,W=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(W,v*g*A),M.set(u,f*g*A);const _=[A,A,A,A,A,A];E.set(_,m*g*A)}const L=new ve;L.setAttribute("position",new be(b,v)),L.setAttribute("uv",new be(M,f)),L.setAttribute("faceIndex",new be(E,m)),t.push(L),i>fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wo(s,t,e){const n=new Vn(s,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ef(s,t,e){const n=new Float32Array(kn),i=new R(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ka(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function To(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ao(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}function nf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wr||l===Xr,h=l===Mi||l===yi;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Eo(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Eo(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rf(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],s.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let M=0,E=b.length;M<E;M+=3){const L=b[M+0],A=b[M+1],T=b[M+2];u.push(L,A,A,T,T,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const L=M+0,A=M+1,T=M+2;u.push(L,A,A,T,T,L)}}else return;const f=new(Pl(u)?Nl:Ul)(u,1);f.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,f)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function af(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*a),e.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function d(u,p,g,v){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)c(u[m]/a,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,g);let m=0;for(let b=0;b<g;b++)m+=p[b];for(let b=0;b<v.length;b++)e.update(m,n,v[b])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function of(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lf(s,t,e){const n=new WeakMap,i=new ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),f===!0&&(E=3);let L=o.attributes.position.count*E,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*A*4*d),P=new Il(T,L,A,d);P.type=Qe,P.needsUpdate=!0;const W=E*4;for(let S=0;S<d;S++){const F=m[S],k=b[S],V=M[S],K=L*A*4*S;for(let z=0;z<F.count;z++){const j=z*W;g===!0&&(i.fromBufferAttribute(F,z),T[K+j+0]=i.x,T[K+j+1]=i.y,T[K+j+2]=i.z,T[K+j+3]=0),v===!0&&(i.fromBufferAttribute(k,z),T[K+j+4]=i.x,T[K+j+5]=i.y,T[K+j+6]=i.z,T[K+j+7]=0),f===!0&&(i.fromBufferAttribute(V,z),T[K+j+8]=i.x,T[K+j+9]=i.y,T[K+j+10]=i.z,T[K+j+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new Ct(L,A)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function cf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Gl extends Se{constructor(t,e,n,i,r,a,o,l,c,h=mi){if(h!==mi&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=Hn),n===void 0&&h===bi&&(n=Si),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hl=new Se,Ro=new Gl(1,1),Vl=new Il,Wl=new Kc,Xl=new Bl,Co=[],Po=[],Lo=new Float32Array(16),Io=new Float32Array(9),Do=new Float32Array(4);function Ci(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Co[i];if(r===void 0&&(r=new Float32Array(i),Co[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gs(s,t){let e=Po[t];e===void 0&&(e=new Int32Array(t),Po[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function pf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Do.set(n),s.uniformMatrix2fv(this.addr,!1,Do),me(e,n)}}function mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Io.set(n),s.uniformMatrix3fv(this.addr,!1,Io),me(e,n)}}function gf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Lo.set(n),s.uniformMatrix4fv(this.addr,!1,Lo),me(e,n)}}function _f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ro.compareFunction=Cl,r=Ro):r=Hl,e.setTexture2D(t||r,i)}function Tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wl,i)}function Af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xl,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vl,i)}function Cf(s){switch(s){case 5126:return hf;case 35664:return df;case 35665:return uf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return Mf;case 5125:return yf;case 36294:return Sf;case 36295:return bf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}function Pf(s,t){s.uniform1fv(this.addr,t)}function Lf(s,t){const e=Ci(t,this.size,2);s.uniform2fv(this.addr,e)}function If(s,t){const e=Ci(t,this.size,3);s.uniform3fv(this.addr,e)}function Df(s,t){const e=Ci(t,this.size,4);s.uniform4fv(this.addr,e)}function Uf(s,t){const e=Ci(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Nf(s,t){const e=Ci(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ff(s,t){const e=Ci(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Of(s,t){s.uniform1iv(this.addr,t)}function Bf(s,t){s.uniform2iv(this.addr,t)}function kf(s,t){s.uniform3iv(this.addr,t)}function zf(s,t){s.uniform4iv(this.addr,t)}function Gf(s,t){s.uniform1uiv(this.addr,t)}function Hf(s,t){s.uniform2uiv(this.addr,t)}function Vf(s,t){s.uniform3uiv(this.addr,t)}function Wf(s,t){s.uniform4uiv(this.addr,t)}function Xf(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Hl,r[a])}function qf(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Wl,r[a])}function Yf(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Xl,r[a])}function Kf(s,t,e){const n=this.cache,i=t.length,r=Gs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Vl,r[a])}function $f(s){switch(s){case 5126:return Pf;case 35664:return Lf;case 35665:return If;case 35666:return Df;case 35674:return Uf;case 35675:return Nf;case 35676:return Ff;case 5124:case 35670:return Of;case 35667:case 35671:return Bf;case 35668:case 35672:return kf;case 35669:case 35673:return zf;case 5125:return Gf;case 36294:return Hf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Kf}}class jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cf(e.type)}}class Zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$f(e.type)}}class Jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Uo(s,t){s.seq.push(t),s.map[t.id]=t}function Qf(s,t,e){const n=s.name,i=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Uo(e,c===void 0?new jf(o,s,t):new Zf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Jf(o),Uo(e,d)),e=d}}}class Cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Qf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function No(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const tp=37297;let ep=0;function np(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function ip(s){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(s);let n;switch(t===e?n="":t===Ds&&e===Is?n="LinearDisplayP3ToLinearSRGB":t===Is&&e===Ds&&(n="LinearSRGBToLinearDisplayP3"),s){case Tn:case zs:return[n,"LinearTransferOETF"];case Oe:case Na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Fo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+np(s.getShaderSource(t),a)}else return i}function sp(s,t){const e=ip(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rp(s,t){let e;switch(t){case yc:e="Linear";break;case Sc:e="Reinhard";break;case bc:e="Cineon";break;case vl:e="ACESFilmic";break;case wc:e="AgX";break;case Tc:e="Neutral";break;case Ec:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new R;function ap(){jt.getLuminanceCoefficients(fs);const s=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function op(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function lp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Gi(s){return s!==""}function Oo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(s){return s.replace(hp,up)}const dp=new Map;function up(s,t){let e=Ut[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ko(s){return s.replace(fp,pp)}function pp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zo(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function mp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function gp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case yi:t="ENVMAP_TYPE_CUBE";break;case ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _p(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ta:t="ENVMAP_BLENDING_MULTIPLY";break;case xc:t="ENVMAP_BLENDING_MIX";break;case Mc:t="ENVMAP_BLENDING_ADD";break}return t}function xp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=mp(e),c=gp(e),h=_p(e),d=vp(e),u=xp(e),p=op(e),g=lp(r),v=i.createProgram();let f,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`)):(f=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),m=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==yn?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,sp("linearToOutputTexel",e.outputColorSpace),ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Sa(a),a=Oo(a,e),a=Bo(a,e),o=Sa(o),o=Oo(o,e),o=Bo(o,e),a=ko(a),o=ko(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=b+f+a,E=b+m+o,L=No(i,i.VERTEX_SHADER,M),A=No(i,i.FRAGMENT_SHADER,E);i.attachShader(v,L),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(S){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(v).trim(),k=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(A).trim();let K=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,A);else{const j=Fo(i,L,"vertex"),G=Fo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+j+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||V==="")&&(z=!1);z&&(S.diagnostics={runnable:K,programLog:F,vertexShader:{log:k,prefix:f},fragmentShader:{log:V,prefix:m}})}i.deleteShader(L),i.deleteShader(A),P=new Cs(i,v),W=cp(i,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,tp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ep++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let yp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bp(t),e.set(t,n)),n}}class bp{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function Ep(s,t,e,n,i,r,a){const o=new Oa,l=new Sp,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,p=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,F,k,V){const K=k.fog,z=V.geometry,j=_.isMeshStandardMaterial?k.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||j),rt=G&&G.mapping===ks?G.image.height:null,at=v[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Bt=ut!==void 0?ut.length:0;let Zt=0;z.morphAttributes.position!==void 0&&(Zt=1),z.morphAttributes.normal!==void 0&&(Zt=2),z.morphAttributes.color!==void 0&&(Zt=3);let X,J,vt,ft;if(at){const Re=Ze[at];X=Re.vertexShader,J=Re.fragmentShader}else X=_.vertexShader,J=_.fragmentShader,l.update(_),vt=l.getVertexShaderID(_),ft=l.getFragmentShaderID(_);const Lt=s.getRenderTarget(),Et=V.isInstancedMesh===!0,Gt=V.isBatchedMesh===!0,Qt=!!_.map,Ht=!!_.matcap,C=!!G,Ie=!!_.aoMap,kt=!!_.lightMap,Wt=!!_.bumpMap,Tt=!!_.normalMap,ie=!!_.displacementMap,Pt=!!_.emissiveMap,w=!!_.metalnessMap,x=!!_.roughnessMap,N=_.anisotropy>0,Y=_.clearcoat>0,Z=_.dispersion>0,q=_.iridescence>0,Mt=_.sheen>0,st=_.transmission>0,pt=N&&!!_.anisotropyMap,Xt=Y&&!!_.clearcoatMap,Q=Y&&!!_.clearcoatNormalMap,mt=Y&&!!_.clearcoatRoughnessMap,At=q&&!!_.iridescenceMap,Rt=q&&!!_.iridescenceThicknessMap,gt=Mt&&!!_.sheenColorMap,zt=Mt&&!!_.sheenRoughnessMap,It=!!_.specularMap,ne=!!_.specularColorMap,I=!!_.specularIntensityMap,ht=st&&!!_.transmissionMap,H=st&&!!_.thicknessMap,$=!!_.gradientMap,ot=!!_.alphaMap,dt=_.alphaTest>0,Vt=!!_.alphaHash,de=!!_.extensions;let Ae=yn;_.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const qt={shaderID:at,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:J,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&V._colorsTexture!==null,instancing:Et,instancingColor:Et&&V.instanceColor!==null,instancingMorph:Et&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Tn,alphaToCoverage:!!_.alphaToCoverage,map:Qt,matcap:Ht,envMap:C,envMapMode:C&&G.mapping,envMapCubeUVHeight:rt,aoMap:Ie,lightMap:kt,bumpMap:Wt,normalMap:Tt,displacementMap:p&&ie,emissiveMap:Pt,normalMapObjectSpace:Tt&&_.normalMapType===Pc,normalMapTangentSpace:Tt&&_.normalMapType===Ua,metalnessMap:w,roughnessMap:x,anisotropy:N,anisotropyMap:pt,clearcoat:Y,clearcoatMap:Xt,clearcoatNormalMap:Q,clearcoatRoughnessMap:mt,dispersion:Z,iridescence:q,iridescenceMap:At,iridescenceThicknessMap:Rt,sheen:Mt,sheenColorMap:gt,sheenRoughnessMap:zt,specularMap:It,specularColorMap:ne,specularIntensityMap:I,transmission:st,transmissionMap:ht,thicknessMap:H,gradientMap:$,opaque:_.transparent===!1&&_.blending===pi&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:dt,alphaHash:Vt,combine:_.combine,mapUv:Qt&&f(_.map.channel),aoMapUv:Ie&&f(_.aoMap.channel),lightMapUv:kt&&f(_.lightMap.channel),bumpMapUv:Wt&&f(_.bumpMap.channel),normalMapUv:Tt&&f(_.normalMap.channel),displacementMapUv:ie&&f(_.displacementMap.channel),emissiveMapUv:Pt&&f(_.emissiveMap.channel),metalnessMapUv:w&&f(_.metalnessMap.channel),roughnessMapUv:x&&f(_.roughnessMap.channel),anisotropyMapUv:pt&&f(_.anisotropyMap.channel),clearcoatMapUv:Xt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:zt&&f(_.sheenRoughnessMap.channel),specularMapUv:It&&f(_.specularMap.channel),specularColorMapUv:ne&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:ht&&f(_.transmissionMap.channel),thicknessMapUv:H&&f(_.thicknessMap.channel),alphaMapUv:ot&&f(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Tt||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!z.attributes.uv&&(Qt||ot),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Qt&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ke,flipSided:_.side===Le,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&_.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function b(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)S.push(F),S.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(M(S,_),E(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function M(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function E(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const S=v[_.type];let F;if(S){const k=Ze[S];F=ah.clone(k.uniforms)}else F=_.uniforms;return F}function A(_,S){let F;for(let k=0,V=h.length;k<V;k++){const K=h[k];if(K.cacheKey===S){F=K,++F.usedTimes;break}}return F===void 0&&(F=new Mp(s,S,_,r),h.push(F)),F}function T(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function P(_){l.remove(_)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:L,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:W}}function wp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Tp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Go(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ho(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,p,g,v,f){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},s[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=f),t++,m}function o(d,u,p,g,v,f){const m=a(d,u,p,g,v,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(d,u,p,g,v,f){const m=a(d,u,p,g,v,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Tp),n.length>1&&n.sort(u||Go),i.length>1&&i.sort(u||Go)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Ap(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ho,s.set(n,[a])):i>=r.length?(a=new Ho,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ft};break;case"SpotLight":e={position:new R,direction:new R,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Cp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pp=0;function Lp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ip(s){const t=new Rp,e=Cp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new Yt,a=new Yt;function o(c){let h=0,d=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,b=0,M=0,E=0,L=0,A=0,T=0;c.sort(Lp);for(let W=0,_=c.length;W<_;W++){const S=c[W],F=S.color,k=S.intensity,V=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=F.r*k,d+=F.g*k,u+=F.b*k;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],k);T++}else if(S.isDirectionalLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const j=S.shadow,G=e.get(S);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=S.shadow.matrix,b++}n.directional[p]=z,p++}else if(S.isSpotLight){const z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(F).multiplyScalar(k),z.distance=V,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[v]=z;const j=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,j.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[v]=j.matrix,S.castShadow){const G=e.get(S);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=K,E++}v++}else if(S.isRectAreaLight){const z=t.get(S);z.color.copy(F).multiplyScalar(k),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=z,f++}else if(S.isPointLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){const j=S.shadow,G=e.get(S);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=S.shadow.matrix,M++}n.point[g]=z,g++}else if(S.isHemisphereLight){const z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(k),z.groundColor.copy(S.groundColor).multiplyScalar(k),n.hemi[m]=z,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==f||P.hemiLength!==m||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=f,P.hemiLength=m,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=L,P.numLightProbes=T,n.version=Pp++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const f=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const M=c[m];if(M.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),d++}else if(M.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),p++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(f),u++}else if(M.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:n}}function Vo(s){const t=new Ip(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Vo(s),t.set(i,[o])):r>=a.length?(o=new Vo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Up extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Np extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Op=`uniform sampler2D shadow_pass;
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
}`;function Bp(s,t,e){let n=new Ba;const i=new Ct,r=new Ct,a=new ee,o=new Up({depthPacking:Cc}),l=new Np,c={},h=e.maxTextureSize,d={[En]:Le,[Le]:En,[Ke]:Ke},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Fp,fragmentShader:Op}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let m=this.type;this.render=function(A,T,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const W=s.getRenderTarget(),_=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Mn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==on&&this.type===on,V=m===on&&this.type!==on;for(let K=0,z=A.length;K<z;K++){const j=A[K],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const rt=G.getFrameExtents();if(i.multiply(rt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||k===!0||V===!0){const ut=this.type!==on?{minFilter:Pe,magFilter:Pe}:{};G.map!==null&&G.map.dispose(),G.map=new Vn(i.x,i.y,ut),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const at=G.getViewportCount();for(let ut=0;ut<at;ut++){const Bt=G.getViewport(ut);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),F.viewport(a),G.updateMatrices(j,ut),n=G.getFrustum(),E(T,P,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===on&&b(G,P),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(W,_,S)};function b(A,T){const P=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,P,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,P,p,v,null)}function M(A,T,P,W){let _=null;const S=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)_=S;else if(_=P.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=_.uuid,k=T.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let K=V[k];K===void 0&&(K=_.clone(),V[k]=K,T.addEventListener("dispose",L)),_=K}if(_.visible=T.visible,_.wireframe=T.wireframe,W===on?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=s.properties.get(_);F.light=P}return _}function E(A,T,P,W,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===on)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=t.update(A),V=A.material;if(Array.isArray(V)){const K=k.groups;for(let z=0,j=K.length;z<j;z++){const G=K[z],rt=V[G.materialIndex];if(rt&&rt.visible){const at=M(A,rt,W,_);A.onBeforeShadow(s,A,T,P,k,at,G),s.renderBufferDirect(P,null,k,at,A,G),A.onAfterShadow(s,A,T,P,k,at,G)}}}else if(V.visible){const K=M(A,V,W,_);A.onBeforeShadow(s,A,T,P,k,K,null),s.renderBufferDirect(P,null,k,K,A,null),A.onAfterShadow(s,A,T,P,k,K,null)}}const F=A.children;for(let k=0,V=F.length;k<V;k++)E(F[k],T,P,W,_)}function L(A){A.target.removeEventListener("dispose",L);for(const P in c){const W=c[P],_=A.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}const kp={[Or]:Br,[kr]:Hr,[zr]:Vr,[xi]:Gr,[Br]:Or,[Hr]:kr,[Vr]:zr,[Gr]:xi};function zp(s){function t(){let I=!1;const ht=new ee;let H=null;const $=new ee(0,0,0,0);return{setMask:function(ot){H!==ot&&!I&&(s.colorMask(ot,ot,ot,ot),H=ot)},setLocked:function(ot){I=ot},setClear:function(ot,dt,Vt,de,Ae){Ae===!0&&(ot*=de,dt*=de,Vt*=de),ht.set(ot,dt,Vt,de),$.equals(ht)===!1&&(s.clearColor(ot,dt,Vt,de),$.copy(ht))},reset:function(){I=!1,H=null,$.set(-1,0,0,0)}}}function e(){let I=!1,ht=!1,H=null,$=null,ot=null;return{setReversed:function(dt){ht=dt},setTest:function(dt){dt?vt(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(dt){H!==dt&&!I&&(s.depthMask(dt),H=dt)},setFunc:function(dt){if(ht&&(dt=kp[dt]),$!==dt){switch(dt){case Or:s.depthFunc(s.NEVER);break;case Br:s.depthFunc(s.ALWAYS);break;case kr:s.depthFunc(s.LESS);break;case xi:s.depthFunc(s.LEQUAL);break;case zr:s.depthFunc(s.EQUAL);break;case Gr:s.depthFunc(s.GEQUAL);break;case Hr:s.depthFunc(s.GREATER);break;case Vr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=dt}},setLocked:function(dt){I=dt},setClear:function(dt){ot!==dt&&(s.clearDepth(dt),ot=dt)},reset:function(){I=!1,H=null,$=null,ot=null}}}function n(){let I=!1,ht=null,H=null,$=null,ot=null,dt=null,Vt=null,de=null,Ae=null;return{setTest:function(qt){I||(qt?vt(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(qt){ht!==qt&&!I&&(s.stencilMask(qt),ht=qt)},setFunc:function(qt,Re,tn){(H!==qt||$!==Re||ot!==tn)&&(s.stencilFunc(qt,Re,tn),H=qt,$=Re,ot=tn)},setOp:function(qt,Re,tn){(dt!==qt||Vt!==Re||de!==tn)&&(s.stencilOp(qt,Re,tn),dt=qt,Vt=Re,de=tn)},setLocked:function(qt){I=qt},setClear:function(qt){Ae!==qt&&(s.clearStencil(qt),Ae=qt)},reset:function(){I=!1,ht=null,H=null,$=null,ot=null,dt=null,Vt=null,de=null,Ae=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,m=null,b=null,M=null,E=null,L=null,A=new Ft(0,0,0),T=0,P=!1,W=null,_=null,S=null,F=null,k=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=z>=2);let G=null,rt={};const at=s.getParameter(s.SCISSOR_BOX),ut=s.getParameter(s.VIEWPORT),Bt=new ee().fromArray(at),Zt=new ee().fromArray(ut);function X(I,ht,H,$){const ot=new Uint8Array(4),dt=s.createTexture();s.bindTexture(I,dt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<H;Vt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(ht+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return dt}const J={};J[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),vt(s.DEPTH_TEST),r.setFunc(xi),kt(!1),Wt(Ja),vt(s.CULL_FACE),C(Mn);function vt(I){c[I]!==!0&&(s.enable(I),c[I]=!0)}function ft(I){c[I]!==!1&&(s.disable(I),c[I]=!1)}function Lt(I,ht){return h[I]!==ht?(s.bindFramebuffer(I,ht),h[I]=ht,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ht),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Et(I,ht){let H=u,$=!1;if(I){H=d.get(ht),H===void 0&&(H=[],d.set(ht,H));const ot=I.textures;if(H.length!==ot.length||H[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Vt=ot.length;dt<Vt;dt++)H[dt]=s.COLOR_ATTACHMENT0+dt;H.length=ot.length,$=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,$=!0);$&&s.drawBuffers(H)}function Gt(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const Qt={[Bn]:s.FUNC_ADD,[nc]:s.FUNC_SUBTRACT,[ic]:s.FUNC_REVERSE_SUBTRACT};Qt[sc]=s.MIN,Qt[rc]=s.MAX;const Ht={[ac]:s.ZERO,[oc]:s.ONE,[lc]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[pc]:s.SRC_ALPHA_SATURATE,[uc]:s.DST_COLOR,[hc]:s.DST_ALPHA,[cc]:s.ONE_MINUS_SRC_COLOR,[Fr]:s.ONE_MINUS_SRC_ALPHA,[fc]:s.ONE_MINUS_DST_COLOR,[dc]:s.ONE_MINUS_DST_ALPHA,[mc]:s.CONSTANT_COLOR,[gc]:s.ONE_MINUS_CONSTANT_COLOR,[_c]:s.CONSTANT_ALPHA,[vc]:s.ONE_MINUS_CONSTANT_ALPHA};function C(I,ht,H,$,ot,dt,Vt,de,Ae,qt){if(I===Mn){g===!0&&(ft(s.BLEND),g=!1);return}if(g===!1&&(vt(s.BLEND),g=!0),I!==ec){if(I!==v||qt!==P){if((f!==Bn||M!==Bn)&&(s.blendEquation(s.FUNC_ADD),f=Bn,M=Bn),qt)switch(I){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFunc(s.ONE,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case to:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case to:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,b=null,E=null,L=null,A.set(0,0,0),T=0,v=I,P=qt}return}ot=ot||ht,dt=dt||H,Vt=Vt||$,(ht!==f||ot!==M)&&(s.blendEquationSeparate(Qt[ht],Qt[ot]),f=ht,M=ot),(H!==m||$!==b||dt!==E||Vt!==L)&&(s.blendFuncSeparate(Ht[H],Ht[$],Ht[dt],Ht[Vt]),m=H,b=$,E=dt,L=Vt),(de.equals(A)===!1||Ae!==T)&&(s.blendColor(de.r,de.g,de.b,Ae),A.copy(de),T=Ae),v=I,P=!1}function Ie(I,ht){I.side===Ke?ft(s.CULL_FACE):vt(s.CULL_FACE);let H=I.side===Le;ht&&(H=!H),kt(H),I.blending===pi&&I.transparent===!1?C(Mn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),i.setMask(I.colorWrite);const $=I.stencilWrite;a.setTest($),$&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){W!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),W=I)}function Wt(I){I!==Ql?(vt(s.CULL_FACE),I!==_&&(I===Ja?s.cullFace(s.BACK):I===tc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),_=I}function Tt(I){I!==S&&(K&&s.lineWidth(I),S=I)}function ie(I,ht,H){I?(vt(s.POLYGON_OFFSET_FILL),(F!==ht||k!==H)&&(s.polygonOffset(ht,H),F=ht,k=H)):ft(s.POLYGON_OFFSET_FILL)}function Pt(I){I?vt(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function w(I){I===void 0&&(I=s.TEXTURE0+V-1),G!==I&&(s.activeTexture(I),G=I)}function x(I,ht,H){H===void 0&&(G===null?H=s.TEXTURE0+V-1:H=G);let $=rt[H];$===void 0&&($={type:void 0,texture:void 0},rt[H]=$),($.type!==I||$.texture!==ht)&&(G!==H&&(s.activeTexture(H),G=H),s.bindTexture(I,ht||J[I]),$.type=I,$.texture=ht)}function N(){const I=rt[G];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(I){Bt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Bt.copy(I))}function gt(I){Zt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Zt.copy(I))}function zt(I,ht){let H=l.get(ht);H===void 0&&(H=new WeakMap,l.set(ht,H));let $=H.get(I);$===void 0&&($=s.getUniformBlockIndex(ht,I.name),H.set(I,$))}function It(I,ht){const $=l.get(ht).get(I);o.get(ht)!==$&&(s.uniformBlockBinding(ht,$,I.__bindingPointIndex),o.set(ht,$))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,rt={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,m=null,b=null,M=null,E=null,L=null,A=new Ft(0,0,0),T=0,P=!1,W=null,_=null,S=null,F=null,k=null,Bt.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:vt,disable:ft,bindFramebuffer:Lt,drawBuffers:Et,useProgram:Gt,setBlending:C,setMaterial:Ie,setFlipSided:kt,setCullFace:Wt,setLineWidth:Tt,setPolygonOffset:ie,setScissorTest:Pt,activeTexture:w,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:mt,texImage3D:At,updateUBOMapping:zt,uniformBlockBinding:It,texStorage2D:Xt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:st,compressedTexSubImage3D:pt,scissor:Rt,viewport:gt,reset:ne}}function Wo(s,t,e,n){const i=Gp(n);switch(e){case bl:return s*t;case wl:return s*t;case Tl:return s*t*2;case Pa:return s*t/i.components*i.byteLength;case La:return s*t/i.components*i.byteLength;case Al:return s*t*2/i.components*i.byteLength;case Ia:return s*t*2/i.components*i.byteLength;case El:return s*t*3/i.components*i.byteLength;case je:return s*t*4/i.components*i.byteLength;case Da:return s*t*4/i.components*i.byteLength;case bs:case Es:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ws:case Ts:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kr:case jr:return Math.max(s,16)*Math.max(t,8)/4;case Yr:case $r:return Math.max(s,8)*Math.max(t,8)/2;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ia:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case sa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case oa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ha:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case As:case pa:case ma:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rl:case ga:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _a:case va:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gp(s){switch(s){case hn:case Ml:return{byteLength:1,components:1};case Vi:case yl:case Wi:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case Hn:case Aa:case Qe:return{byteLength:4,components:1};case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Hp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Ns("canvas")}function v(w,x,N){let Y=1;const Z=Pt(w);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(Y*Z.width),Mt=Math.floor(Y*Z.height);d===void 0&&(d=g(q,Mt));const st=x?g(q,Mt):d;return st.width=q,st.height=Mt,st.getContext("2d").drawImage(w,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Mt+")."),st}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==Pe&&w.minFilter!==$e}function m(w){s.generateMipmap(w)}function b(w,x,N,Y,Z=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===s.RED&&(N===s.FLOAT&&(q=s.R32F),N===s.HALF_FLOAT&&(q=s.R16F),N===s.UNSIGNED_BYTE&&(q=s.R8)),x===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.R8UI),N===s.UNSIGNED_SHORT&&(q=s.R16UI),N===s.UNSIGNED_INT&&(q=s.R32UI),N===s.BYTE&&(q=s.R8I),N===s.SHORT&&(q=s.R16I),N===s.INT&&(q=s.R32I)),x===s.RG&&(N===s.FLOAT&&(q=s.RG32F),N===s.HALF_FLOAT&&(q=s.RG16F),N===s.UNSIGNED_BYTE&&(q=s.RG8)),x===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RG8UI),N===s.UNSIGNED_SHORT&&(q=s.RG16UI),N===s.UNSIGNED_INT&&(q=s.RG32UI),N===s.BYTE&&(q=s.RG8I),N===s.SHORT&&(q=s.RG16I),N===s.INT&&(q=s.RG32I)),x===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(q=s.RGB16UI),N===s.UNSIGNED_INT&&(q=s.RGB32UI),N===s.BYTE&&(q=s.RGB8I),N===s.SHORT&&(q=s.RGB16I),N===s.INT&&(q=s.RGB32I)),x===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),N===s.UNSIGNED_INT&&(q=s.RGBA32UI),N===s.BYTE&&(q=s.RGBA8I),N===s.SHORT&&(q=s.RGBA16I),N===s.INT&&(q=s.RGBA32I)),x===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),x===s.RGBA){const Mt=Z?Ls:jt.getTransfer(Y);N===s.FLOAT&&(q=s.RGBA32F),N===s.HALF_FLOAT&&(q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(q=Mt===re?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(w,x){let N;return w?x===null||x===Hn||x===Si?N=s.DEPTH24_STENCIL8:x===Qe?N=s.DEPTH32F_STENCIL8:x===Vi&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Hn||x===Si?N=s.DEPTH_COMPONENT24:x===Qe?N=s.DEPTH_COMPONENT32F:x===Vi&&(N=s.DEPTH_COMPONENT16),N}function E(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pe&&w.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function L(w){const x=w.target;x.removeEventListener("dispose",L),T(x),x.isVideoTexture&&h.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),W(x)}function T(w){const x=n.get(w);if(x.__webglInit===void 0)return;const N=w.source,Y=u.get(N);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(w),Object.keys(Y).length===0&&u.delete(N)}n.remove(w)}function P(w){const x=n.get(w);s.deleteTexture(x.__webglTexture);const N=w.source,Y=u.get(N);delete Y[x.__cacheKey],a.memory.textures--}function W(w){const x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const q=n.get(N[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(w)}let _=0;function S(){_=0}function F(){const w=_;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),_+=1,w}function k(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function V(w,x){const N=n.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(N,w,x);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+x)}function K(w,x){const N=n.get(w);if(w.version>0&&N.__version!==w.version){Zt(N,w,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+x)}function z(w,x){const N=n.get(w);if(w.version>0&&N.__version!==w.version){Zt(N,w,x);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+x)}function j(w,x){const N=n.get(w);if(w.version>0&&N.__version!==w.version){X(N,w,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+x)}const G={[Ps]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},rt={[Pe]:s.NEAREST,[Ac]:s.NEAREST_MIPMAP_NEAREST,[Yi]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[js]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},at={[Lc]:s.NEVER,[Oc]:s.ALWAYS,[Ic]:s.LESS,[Cl]:s.LEQUAL,[Dc]:s.EQUAL,[Fc]:s.GEQUAL,[Uc]:s.GREATER,[Nc]:s.NOTEQUAL};function ut(w,x){if(x.type===Qe&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===js||x.magFilter===Yi||x.magFilter===Gn||x.minFilter===$e||x.minFilter===js||x.minFilter===Yi||x.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,G[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,G[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,G[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,rt[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,rt[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pe||x.minFilter!==Yi&&x.minFilter!==Gn||x.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Bt(w,x){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",L));const Y=x.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const q=k(x);if(q!==w.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[q].usedTimes++;const Mt=Z[w.__cacheKey];Mt!==void 0&&(Z[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&P(x)),w.__cacheKey=q,w.__webglTexture=Z[q].texture}return N}function Zt(w,x,N){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=Bt(w,x),q=x.source;e.bindTexture(Y,w.__webglTexture,s.TEXTURE0+N);const Mt=n.get(q);if(q.version!==Mt.__version||Z===!0){e.activeTexture(s.TEXTURE0+N);const st=jt.getPrimaries(jt.workingColorSpace),pt=x.colorSpace===xn?null:jt.getPrimaries(x.colorSpace),Xt=x.colorSpace===xn||st===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Q=v(x.image,!1,i.maxTextureSize);Q=ie(x,Q);const mt=r.convert(x.format,x.colorSpace),At=r.convert(x.type);let Rt=b(x.internalFormat,mt,At,x.colorSpace,x.isVideoTexture);ut(Y,x);let gt;const zt=x.mipmaps,It=x.isVideoTexture!==!0,ne=Mt.__version===void 0||Z===!0,I=q.dataReady,ht=E(x,Q);if(x.isDepthTexture)Rt=M(x.format===bi,x.type),ne&&(It?e.texStorage2D(s.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,mt,At,null));else if(x.isDataTexture)if(zt.length>0){It&&ne&&e.texStorage2D(s.TEXTURE_2D,ht,Rt,zt[0].width,zt[0].height);for(let H=0,$=zt.length;H<$;H++)gt=zt[H],It?I&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(s.TEXTURE_2D,H,Rt,gt.width,gt.height,0,mt,At,gt.data);x.generateMipmaps=!1}else It?(ne&&e.texStorage2D(s.TEXTURE_2D,ht,Rt,Q.width,Q.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,mt,At,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,mt,At,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Rt,zt[0].width,zt[0].height,Q.depth);for(let H=0,$=zt.length;H<$;H++)if(gt=zt[H],x.format!==je)if(mt!==null)if(It){if(I)if(x.layerUpdates.size>0){const ot=Wo(gt.width,gt.height,x.format,x.type);for(const dt of x.layerUpdates){const Vt=gt.data.subarray(dt*ot/gt.data.BYTES_PER_ELEMENT,(dt+1)*ot/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,dt,gt.width,gt.height,1,mt,Vt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,gt.width,gt.height,Q.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Rt,gt.width,gt.height,Q.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,gt.width,gt.height,Q.depth,mt,At,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,Rt,gt.width,gt.height,Q.depth,0,mt,At,gt.data)}else{It&&ne&&e.texStorage2D(s.TEXTURE_2D,ht,Rt,zt[0].width,zt[0].height);for(let H=0,$=zt.length;H<$;H++)gt=zt[H],x.format!==je?mt!==null?It?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,Rt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?I&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(s.TEXTURE_2D,H,Rt,gt.width,gt.height,0,mt,At,gt.data)}else if(x.isDataArrayTexture)if(It){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Rt,Q.width,Q.height,Q.depth),I)if(x.layerUpdates.size>0){const H=Wo(Q.width,Q.height,x.format,x.type);for(const $ of x.layerUpdates){const ot=Q.data.subarray($*H/Q.data.BYTES_PER_ELEMENT,($+1)*H/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,mt,At,ot)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,mt,At,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,mt,At,Q.data);else if(x.isData3DTexture)It?(ne&&e.texStorage3D(s.TEXTURE_3D,ht,Rt,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,mt,At,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,mt,At,Q.data);else if(x.isFramebufferTexture){if(ne)if(It)e.texStorage2D(s.TEXTURE_2D,ht,Rt,Q.width,Q.height);else{let H=Q.width,$=Q.height;for(let ot=0;ot<ht;ot++)e.texImage2D(s.TEXTURE_2D,ot,Rt,H,$,0,mt,At,null),H>>=1,$>>=1}}else if(zt.length>0){if(It&&ne){const H=Pt(zt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Rt,H.width,H.height)}for(let H=0,$=zt.length;H<$;H++)gt=zt[H],It?I&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,mt,At,gt):e.texImage2D(s.TEXTURE_2D,H,Rt,mt,At,gt);x.generateMipmaps=!1}else if(It){if(ne){const H=Pt(Q);e.texStorage2D(s.TEXTURE_2D,ht,Rt,H.width,H.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,At,Q)}else e.texImage2D(s.TEXTURE_2D,0,Rt,mt,At,Q);f(x)&&m(Y),Mt.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function X(w,x,N){if(x.image.length!==6)return;const Y=Bt(w,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+N);const q=n.get(Z);if(Z.version!==q.__version||Y===!0){e.activeTexture(s.TEXTURE0+N);const Mt=jt.getPrimaries(jt.workingColorSpace),st=x.colorSpace===xn?null:jt.getPrimaries(x.colorSpace),pt=x.colorSpace===xn||Mt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Xt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let $=0;$<6;$++)!Xt&&!Q?mt[$]=v(x.image[$],!0,i.maxCubemapSize):mt[$]=Q?x.image[$].image:x.image[$],mt[$]=ie(x,mt[$]);const At=mt[0],Rt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),zt=b(x.internalFormat,Rt,gt,x.colorSpace),It=x.isVideoTexture!==!0,ne=q.__version===void 0||Y===!0,I=Z.dataReady;let ht=E(x,At);ut(s.TEXTURE_CUBE_MAP,x);let H;if(Xt){It&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,At.width,At.height);for(let $=0;$<6;$++){H=mt[$].mipmaps;for(let ot=0;ot<H.length;ot++){const dt=H[ot];x.format!==je?Rt!==null?It?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,0,0,dt.width,dt.height,Rt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,zt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,0,0,dt.width,dt.height,Rt,gt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,zt,dt.width,dt.height,0,Rt,gt,dt.data)}}}else{if(H=x.mipmaps,It&&ne){H.length>0&&ht++;const $=Pt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){It?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,mt[$].width,mt[$].height,Rt,gt,mt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,mt[$].width,mt[$].height,0,Rt,gt,mt[$].data);for(let ot=0;ot<H.length;ot++){const Vt=H[ot].image[$].image;It?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,0,0,Vt.width,Vt.height,Rt,gt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,zt,Vt.width,Vt.height,0,Rt,gt,Vt.data)}}else{It?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,gt,mt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,Rt,gt,mt[$]);for(let ot=0;ot<H.length;ot++){const dt=H[ot];It?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,0,0,Rt,gt,dt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,zt,Rt,gt,dt.image[$])}}}f(x)&&m(s.TEXTURE_CUBE_MAP),q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function J(w,x,N,Y,Z,q){const Mt=r.convert(N.format,N.colorSpace),st=r.convert(N.type),pt=b(N.internalFormat,Mt,st,N.colorSpace);if(!n.get(x).__hasExternalTextures){const Q=Math.max(1,x.width>>q),mt=Math.max(1,x.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,pt,Q,mt,x.depth,0,Mt,st,null):e.texImage2D(Z,q,pt,Q,mt,0,Mt,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,n.get(N).__webglTexture,0,kt(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,n.get(N).__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(w,x,N){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=M(x.stencilBuffer,Z),Mt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=kt(x);Wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,q,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,q,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,w)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],Mt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),pt=b(q.internalFormat,Mt,st,q.colorSpace),Xt=kt(x);N&&Wt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,pt,x.width,x.height):Wt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,pt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,pt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,Z=kt(x);if(x.depthTexture.format===mi)Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(x.depthTexture.format===bi)Wt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Lt(w){const x=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ft(x.__webglFramebuffer,w)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),vt(x.__webglDepthbuffer[Y],w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),vt(x.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(w,x,N){const Y=n.get(w);x!==void 0&&J(Y.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Lt(w)}function Gt(w){const x=w.texture,N=n.get(w),Y=n.get(x);w.addEventListener("dispose",A);const Z=w.textures,q=w.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[st]=[];for(let pt=0;pt<x.mipmaps.length;pt++)N.__webglFramebuffer[st][pt]=s.createFramebuffer()}else N.__webglFramebuffer[st]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)N.__webglFramebuffer[st]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let st=0,pt=Z.length;st<pt;st++){const Xt=n.get(Z[st]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Wt(w)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const pt=Z[st];N.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[st]);const Xt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),mt=b(pt.internalFormat,Xt,Q,pt.colorSpace,w.isXRRenderTarget===!0),At=kt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,At,mt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,N.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ut(s.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)J(N.__webglFramebuffer[st][pt],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,pt);else J(N.__webglFramebuffer[st],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);f(x)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,pt=Z.length;st<pt;st++){const Xt=Z[st],Q=n.get(Xt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),ut(s.TEXTURE_2D,Xt),J(N.__webglFramebuffer,w,Xt,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,0),f(Xt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),ut(st,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)J(N.__webglFramebuffer[pt],w,x,s.COLOR_ATTACHMENT0,st,pt);else J(N.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,st,0);f(x)&&m(st),e.unbindTexture()}w.depthBuffer&&Lt(w)}function Qt(w){const x=w.textures;for(let N=0,Y=x.length;N<Y;N++){const Z=x[N];if(f(Z)){const q=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Mt=n.get(Z).__webglTexture;e.bindTexture(q,Mt),m(q),e.unbindTexture()}}}const Ht=[],C=[];function Ie(w){if(w.samples>0){if(Wt(w)===!1){const x=w.textures,N=w.width,Y=w.height;let Z=s.COLOR_BUFFER_BIT;const q=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(w),st=x.length>1;if(st)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Xt=n.get(x[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,s.NEAREST),l===!0&&(Ht.length=0,C.length=0,Ht.push(s.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ht.push(q),C.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Xt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function kt(w){return Math.min(i.maxSamples,w.samples)}function Wt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function ie(w,x){const N=w.colorSpace,Y=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Tn&&N!==xn&&(jt.getTransfer(N)===re?(Y!==je||Z!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=Et,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Wt}function Vp(s,t){function e(n,i=xn){let r;const a=jt.getTransfer(i);if(n===hn)return s.UNSIGNED_BYTE;if(n===Ra)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return s.BYTE;if(n===yl)return s.SHORT;if(n===Vi)return s.UNSIGNED_SHORT;if(n===Aa)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===Qe)return s.FLOAT;if(n===Wi)return s.HALF_FLOAT;if(n===bl)return s.ALPHA;if(n===El)return s.RGB;if(n===je)return s.RGBA;if(n===wl)return s.LUMINANCE;if(n===Tl)return s.LUMINANCE_ALPHA;if(n===mi)return s.DEPTH_COMPONENT;if(n===bi)return s.DEPTH_STENCIL;if(n===Pa)return s.RED;if(n===La)return s.RED_INTEGER;if(n===Al)return s.RG;if(n===Ia)return s.RG_INTEGER;if(n===Da)return s.RGBA_INTEGER;if(n===bs||n===Es||n===ws||n===Ts)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===Kr||n===$r||n===jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===Jr||n===Qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===Jr)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===da||n===ua||n===fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===As||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===As)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===ga||n===_a||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===As)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Wp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class oe extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xp={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yp=`
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

}`;class Kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Se,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:qp,fragmentShader:Yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $p extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=new Kp,f=e.getContextAttributes();let m=null,b=null;const M=[],E=[],L=new Ct;let A=null;const T=new Be;T.layers.enable(1),T.viewport=new ee;const P=new Be;P.layers.enable(2),P.viewport=new ee;const W=[T,P],_=new Wp;_.layers.enable(1),_.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=M[X];return J===void 0&&(J=new Tr,M[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=M[X];return J===void 0&&(J=new Tr,M[X]=J),J.getGripSpace()},this.getHand=function(X){let J=M[X];return J===void 0&&(J=new Tr,M[X]=J),J.getHandSpace()};function k(X){const J=E.indexOf(X.inputSource);if(J===-1)return;const vt=M[J];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",K);for(let X=0;X<M.length;X++){const J=E[X];J!==null&&(E[X]=null,M[X].disconnect(J))}S=null,F=null,v.reset(),t.setRenderTarget(m),p=null,u=null,d=null,i=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Vn(p.framebufferWidth,p.framebufferHeight,{format:je,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,vt=null,ft=null;f.depth&&(ft=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=f.stencil?bi:mi,vt=f.stencil?Si:Hn);const Lt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Lt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Vn(u.textureWidth,u.textureHeight,{format:je,type:hn,depthTexture:new Gl(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(X){for(let J=0;J<X.removed.length;J++){const vt=X.removed[J],ft=E.indexOf(vt);ft>=0&&(E[ft]=null,M[ft].disconnect(vt))}for(let J=0;J<X.added.length;J++){const vt=X.added[J];let ft=E.indexOf(vt);if(ft===-1){for(let Et=0;Et<M.length;Et++)if(Et>=E.length){E.push(vt),ft=Et;break}else if(E[Et]===null){E[Et]=vt,ft=Et;break}if(ft===-1)break}const Lt=M[ft];Lt&&Lt.connect(vt)}}const z=new R,j=new R;function G(X,J,vt){z.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const ft=z.distanceTo(j),Lt=J.projectionMatrix.elements,Et=vt.projectionMatrix.elements,Gt=Lt[14]/(Lt[10]-1),Qt=Lt[14]/(Lt[10]+1),Ht=(Lt[9]+1)/Lt[5],C=(Lt[9]-1)/Lt[5],Ie=(Lt[8]-1)/Lt[0],kt=(Et[8]+1)/Et[0],Wt=Gt*Ie,Tt=Gt*kt,ie=ft/(-Ie+kt),Pt=ie*-Ie;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(ie),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Lt[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=Gt+ie,x=Qt+ie,N=Wt-Pt,Y=Tt+(ft-Pt),Z=Ht*Qt/x*w,q=C*Qt/x*w;X.projectionMatrix.makePerspective(N,Y,Z,q,w,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let J=X.near,vt=X.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),_.near=P.near=T.near=J,_.far=P.far=T.far=vt,(S!==_.near||F!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,F=_.far);const ft=X.parent,Lt=_.cameras;rt(_,ft);for(let Et=0;Et<Lt.length;Et++)rt(Lt[Et],ft);Lt.length===2?G(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),at(X,_,ft)};function at(X,J,vt){vt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ya*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ut=null;function Bt(X,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ft=!1;vt.length!==_.cameras.length&&(_.cameras.length=0,ft=!0);for(let Et=0;Et<vt.length;Et++){const Gt=vt[Et];let Qt=null;if(p!==null)Qt=p.getViewport(Gt);else{const C=d.getViewSubImage(u,Gt);Qt=C.viewport,Et===0&&(t.setRenderTargetTextures(b,C.colorTexture,u.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(b))}let Ht=W[Et];Ht===void 0&&(Ht=new Be,Ht.layers.enable(Et),Ht.viewport=new ee,W[Et]=Ht),Ht.matrix.fromArray(Gt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Gt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Et===0&&(_.matrix.copy(Ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ft===!0&&_.cameras.push(Ht)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Et=d.getDepthInformation(vt[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,i.renderState)}}for(let vt=0;vt<M.length;vt++){const ft=E[vt],Lt=M[vt];ft!==null&&Lt!==void 0&&Lt.update(ft,J,c||a)}ut&&ut(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Zt=new kl;Zt.setAnimationLoop(Bt),this.setAnimationLoop=function(X){ut=X},this.dispose=function(){}}}const Un=new He,jp=new Yt;function Zp(s,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Fl(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,b,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),d(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),v(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,b,M):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Le&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Le&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const b=t.get(m),M=b.envMap,E=b.envMapRotation;M&&(f.envMap.value=M,Un.copy(E),Un.x*=-1,Un.y*=-1,Un.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),f.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(Un)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,b,M){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=M*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,b){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Le&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const b=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const E=M.program;n.uniformBlockBinding(b,E)}function c(b,M){let E=i[b.id];E===void 0&&(g(b),E=h(b),i[b.id]=E,b.addEventListener("dispose",f));const L=M.program;n.updateUBOMapping(b,L);const A=t.render.frame;r[b.id]!==A&&(u(b),r[b.id]=A)}function h(b){const M=d();b.__bindingPointIndex=M;const E=s.createBuffer(),L=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,E),E}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const M=i[b.id],E=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,T=E.length;A<T;A++){const P=Array.isArray(E[A])?E[A]:[E[A]];for(let W=0,_=P.length;W<_;W++){const S=P[W];if(p(S,A,W,L)===!0){const F=S.__offset,k=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let K=0;K<k.length;K++){const z=k[K],j=v(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+V,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,M,E,L){const A=b.value,T=M+"_"+E;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const P=L[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(b){const M=b.uniforms;let E=0;const L=16;for(let T=0,P=M.length;T<P;T++){const W=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,S=W.length;_<S;_++){const F=W[_],k=Array.isArray(F.value)?F.value:[F.value];for(let V=0,K=k.length;V<K;V++){const z=k[V],j=v(z),G=E%L,rt=G%j.boundary,at=G+rt;E+=rt,at!==0&&L-at<j.storage&&(E+=L-at),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=j.storage}}}const A=E%L;return A>0&&(E+=L-A),b.__size=E,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function f(b){const M=b.target;M.removeEventListener("dispose",f);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Qp{constructor(t={}){const{canvas:e=kc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=yn,this.toneMappingExposure=1;const M=this;let E=!1,L=0,A=0,T=null,P=-1,W=null;const _=new ee,S=new ee;let F=null;const k=new Ft(0);let V=0,K=e.width,z=e.height,j=1,G=null,rt=null;const at=new ee(0,0,K,z),ut=new ee(0,0,K,z);let Bt=!1;const Zt=new Ba;let X=!1,J=!1;const vt=new Yt,ft=new Yt,Lt=new R,Et=new ee,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Ht(){return T===null?j:1}let C=n;function Ie(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",dt,!1),C===null){const D="webgl2";if(C=Ie(D,y),C===null)throw Ie(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let kt,Wt,Tt,ie,Pt,w,x,N,Y,Z,q,Mt,st,pt,Xt,Q,mt,At,Rt,gt,zt,It,ne,I;function ht(){kt=new sf(C),kt.init(),It=new Vp(C,kt),Wt=new Zu(C,kt,t,It),Tt=new zp(C),Wt.reverseDepthBuffer&&Tt.buffers.depth.setReversed(!0),ie=new of(C),Pt=new wp,w=new Hp(C,kt,Tt,Pt,Wt,It,ie),x=new Qu(M),N=new nf(M),Y=new fh(C),ne=new $u(C,Y),Z=new rf(C,Y,ie,ne),q=new cf(C,Z,Y,ie),Rt=new lf(C,Wt,w),Q=new Ju(Pt),Mt=new Ep(M,x,N,kt,Wt,ne,Q),st=new Zp(M,Pt),pt=new Ap,Xt=new Dp(kt),At=new Ku(M,x,N,Tt,q,u,l),mt=new Bp(M,q,Wt),I=new Jp(C,ie,Wt,Tt),gt=new ju(C,kt,ie),zt=new af(C,kt,ie),ie.programs=Mt.programs,M.capabilities=Wt,M.extensions=kt,M.properties=Pt,M.renderLists=pt,M.shadowMap=mt,M.state=Tt,M.info=ie}ht();const H=new $p(M,C);this.xr=H,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=kt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=kt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(K,z,!1))},this.getSize=function(y){return y.set(K,z)},this.setSize=function(y,D,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,z=D,e.width=Math.floor(y*j),e.height=Math.floor(D*j),O===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(K*j,z*j).floor()},this.setDrawingBufferSize=function(y,D,O){K=y,z=D,j=O,e.width=Math.floor(y*O),e.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(at)},this.setViewport=function(y,D,O,B){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,D,O,B),Tt.viewport(_.copy(at).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(ut)},this.setScissor=function(y,D,O,B){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,D,O,B),Tt.scissor(S.copy(ut).multiplyScalar(j).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(y){Tt.setScissorTest(Bt=y)},this.setOpaqueSort=function(y){G=y},this.setTransparentSort=function(y){rt=y},this.getClearColor=function(y){return y.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(y=!0,D=!0,O=!0){let B=0;if(y){let U=!1;if(T!==null){const tt=T.texture.format;U=tt===Da||tt===Ia||tt===La}if(U){const tt=T.texture.type,lt=tt===hn||tt===Hn||tt===Vi||tt===Si||tt===Ra||tt===Ca,_t=At.getClearColor(),xt=At.getClearAlpha(),bt=_t.r,wt=_t.g,yt=_t.b;lt?(p[0]=bt,p[1]=wt,p[2]=yt,p[3]=xt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=bt,g[1]=wt,g[2]=yt,g[3]=xt,C.clearBufferiv(C.COLOR,0,g))}else B|=C.COLOR_BUFFER_BIT}D&&(B|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),pt.dispose(),Xt.dispose(),Pt.dispose(),x.dispose(),N.dispose(),q.dispose(),ne.dispose(),I.dispose(),Mt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Wa),H.removeEventListener("sessionend",Xa),Rn.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=ie.autoReset,D=mt.enabled,O=mt.autoUpdate,B=mt.needsUpdate,U=mt.type;ht(),ie.autoReset=y,mt.enabled=D,mt.autoUpdate=O,mt.needsUpdate=B,mt.type=U}function dt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Vt(y){const D=y.target;D.removeEventListener("dispose",Vt),de(D)}function de(y){Ae(y),Pt.remove(y)}function Ae(y){const D=Pt.get(y).programs;D!==void 0&&(D.forEach(function(O){Mt.releaseProgram(O)}),y.isShaderMaterial&&Mt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,B,U,tt){D===null&&(D=Gt);const lt=U.isMesh&&U.matrixWorld.determinant()<0,_t=$l(y,D,O,B,U);Tt.setMaterial(B,lt);let xt=O.index,bt=1;if(B.wireframe===!0){if(xt=Z.getWireframeAttribute(O),xt===void 0)return;bt=2}const wt=O.drawRange,yt=O.attributes.position;let Jt=wt.start*bt,se=(wt.start+wt.count)*bt;tt!==null&&(Jt=Math.max(Jt,tt.start*bt),se=Math.min(se,(tt.start+tt.count)*bt)),xt!==null?(Jt=Math.max(Jt,0),se=Math.min(se,xt.count)):yt!=null&&(Jt=Math.max(Jt,0),se=Math.min(se,yt.count));const ce=se-Jt;if(ce<0||ce===1/0)return;ne.setup(U,B,_t,O,xt);let De,Kt=gt;if(xt!==null&&(De=Y.get(xt),Kt=zt,Kt.setIndex(De)),U.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*Ht()),Kt.setMode(C.LINES)):Kt.setMode(C.TRIANGLES);else if(U.isLine){let St=B.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*Ht()),U.isLineSegments?Kt.setMode(C.LINES):U.isLineLoop?Kt.setMode(C.LINE_LOOP):Kt.setMode(C.LINE_STRIP)}else U.isPoints?Kt.setMode(C.POINTS):U.isSprite&&Kt.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const St=U._multiDrawStarts,xe=U._multiDrawCounts,$t=U._multiDrawCount,Ve=xt?Y.get(xt).bytesPerElement:1,qn=Pt.get(B).currentProgram.getUniforms();for(let Ue=0;Ue<$t;Ue++)qn.setValue(C,"_gl_DrawID",Ue),Kt.render(St[Ue]/Ve,xe[Ue])}else if(U.isInstancedMesh)Kt.renderInstances(Jt,ce,U.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,xe=Math.min(O.instanceCount,St);Kt.renderInstances(Jt,ce,xe)}else Kt.render(Jt,ce)};function qt(y,D,O){y.transparent===!0&&y.side===Ke&&y.forceSinglePass===!1?(y.side=Le,y.needsUpdate=!0,qi(y,D,O),y.side=En,y.needsUpdate=!0,qi(y,D,O),y.side=Ke):qi(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),f=Xt.get(O),f.init(D),b.push(f),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==O&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const B=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const _t=tt[lt];qt(_t,O,U),B.add(_t)}else qt(tt,O,U),B.add(tt)}),b.pop(),f=null,B},this.compileAsync=function(y,D,O=null){const B=this.compile(y,D,O);return new Promise(U=>{function tt(){if(B.forEach(function(lt){Pt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){U(y);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Re=null;function tn(y){Re&&Re(y)}function Wa(){Rn.stop()}function Xa(){Rn.start()}const Rn=new kl;Rn.setAnimationLoop(tn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(y){Re=y,H.setAnimationLoop(y),y===null?Rn.stop():Rn.start()},H.addEventListener("sessionstart",Wa),H.addEventListener("sessionend",Xa),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,D,T),f=Xt.get(y,b.length),f.init(D),b.push(f),ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Zt.setFromProjectionMatrix(ft),J=this.localClippingEnabled,X=Q.init(this.clippingPlanes,J),v=pt.get(y,m.length),v.init(),m.push(v),H.enabled===!0&&H.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&qs(tt,D,-1/0,M.sortObjects)}qs(y,D,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(G,rt),Qt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Qt&&At.addToRenderList(v,y),this.info.render.frame++,X===!0&&Q.beginShadows();const O=f.state.shadowsArray;mt.render(O,y,D),X===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=v.opaque,U=v.transmissive;if(f.setupLights(),D.isArrayCamera){const tt=D.cameras;if(U.length>0)for(let lt=0,_t=tt.length;lt<_t;lt++){const xt=tt[lt];Ya(B,U,y,xt)}Qt&&At.render(y);for(let lt=0,_t=tt.length;lt<_t;lt++){const xt=tt[lt];qa(v,y,xt,xt.viewport)}}else U.length>0&&Ya(B,U,y,D),Qt&&At.render(y),qa(v,y,D);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(M,y,D),ne.resetDefaultState(),P=-1,W=null,b.pop(),b.length>0?(f=b[b.length-1],X===!0&&Q.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function qs(y,D,O,B){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Zt.intersectsSprite(y)){B&&Et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ft);const lt=q.update(y),_t=y.material;_t.visible&&v.push(y,lt,_t,O,Et.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Zt.intersectsObject(y))){const lt=q.update(y),_t=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Et.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Et.copy(lt.boundingSphere.center)),Et.applyMatrix4(y.matrixWorld).applyMatrix4(ft)),Array.isArray(_t)){const xt=lt.groups;for(let bt=0,wt=xt.length;bt<wt;bt++){const yt=xt[bt],Jt=_t[yt.materialIndex];Jt&&Jt.visible&&v.push(y,lt,Jt,O,Et.z,yt)}}else _t.visible&&v.push(y,lt,_t,O,Et.z,null)}}const tt=y.children;for(let lt=0,_t=tt.length;lt<_t;lt++)qs(tt[lt],D,O,B)}function qa(y,D,O,B){const U=y.opaque,tt=y.transmissive,lt=y.transparent;f.setupLightsView(O),X===!0&&Q.setGlobalState(M.clippingPlanes,O),B&&Tt.viewport(_.copy(B)),U.length>0&&Xi(U,D,O),tt.length>0&&Xi(tt,D,O),lt.length>0&&Xi(lt,D,O),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Ya(y,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Vn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Wi:hn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[B.id],lt=B.viewport||_;tt.setSize(lt.z,lt.w);const _t=M.getRenderTarget();M.setRenderTarget(tt),M.getClearColor(k),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),Qt&&At.render(O);const xt=M.toneMapping;M.toneMapping=yn;const bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),X===!0&&Q.setGlobalState(M.clippingPlanes,B),Xi(y,O,B),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,Jt=D.length;yt<Jt;yt++){const se=D[yt],ce=se.object,De=se.geometry,Kt=se.material,St=se.group;if(Kt.side===Ke&&ce.layers.test(B.layers)){const xe=Kt.side;Kt.side=Le,Kt.needsUpdate=!0,Ka(ce,O,B,De,Kt,St),Kt.side=xe,Kt.needsUpdate=!0,wt=!0}}wt===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}M.setRenderTarget(_t),M.setClearColor(k,V),bt!==void 0&&(B.viewport=bt),M.toneMapping=xt}function Xi(y,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,tt=y.length;U<tt;U++){const lt=y[U],_t=lt.object,xt=lt.geometry,bt=B===null?lt.material:B,wt=lt.group;_t.layers.test(O.layers)&&Ka(_t,D,O,xt,bt,wt)}}function Ka(y,D,O,B,U,tt){y.onBeforeRender(M,D,O,B,U,tt),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,D,O,B,y,tt),U.transparent===!0&&U.side===Ke&&U.forceSinglePass===!1?(U.side=Le,U.needsUpdate=!0,M.renderBufferDirect(O,D,B,U,y,tt),U.side=En,U.needsUpdate=!0,M.renderBufferDirect(O,D,B,U,y,tt),U.side=Ke):M.renderBufferDirect(O,D,B,U,y,tt),y.onAfterRender(M,D,O,B,U,tt)}function qi(y,D,O){D.isScene!==!0&&(D=Gt);const B=Pt.get(y),U=f.state.lights,tt=f.state.shadowsArray,lt=U.state.version,_t=Mt.getParameters(y,U.state,tt,D,O),xt=Mt.getProgramCacheKey(_t);let bt=B.programs;B.environment=y.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(y.isMeshStandardMaterial?N:x).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,bt===void 0&&(y.addEventListener("dispose",Vt),bt=new Map,B.programs=bt);let wt=bt.get(xt);if(wt!==void 0){if(B.currentProgram===wt&&B.lightsStateVersion===lt)return ja(y,_t),wt}else _t.uniforms=Mt.getUniforms(y),y.onBeforeCompile(_t,M),wt=Mt.acquireProgram(_t,xt),bt.set(xt,wt),B.uniforms=_t.uniforms;const yt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=Q.uniform),ja(y,_t),B.needsLights=Zl(y),B.lightsStateVersion=lt,B.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=wt,B.uniformsList=null,wt}function $a(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Cs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function ja(y,D){const O=Pt.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function $l(y,D,O,B,U){D.isScene!==!0&&(D=Gt),w.resetTextureUnits();const tt=D.fog,lt=B.isMeshStandardMaterial?D.environment:null,_t=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Tn,xt=(B.isMeshStandardMaterial?N:x).get(B.envMap||lt),bt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,wt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!O.morphAttributes.position,Jt=!!O.morphAttributes.normal,se=!!O.morphAttributes.color;let ce=yn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ce=M.toneMapping);const De=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Kt=De!==void 0?De.length:0,St=Pt.get(B),xe=f.state.lights;if(X===!0&&(J===!0||y!==W)){const ke=y===W&&B.id===P;Q.setState(B,y,ke)}let $t=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==xe.state.version||St.outputColorSpace!==_t||U.isBatchedMesh&&St.batching===!1||!U.isBatchedMesh&&St.batching===!0||U.isBatchedMesh&&St.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&St.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&St.instancing===!1||!U.isInstancedMesh&&St.instancing===!0||U.isSkinnedMesh&&St.skinning===!1||!U.isSkinnedMesh&&St.skinning===!0||U.isInstancedMesh&&St.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&St.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&St.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&St.instancingMorph===!1&&U.morphTexture!==null||St.envMap!==xt||B.fog===!0&&St.fog!==tt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Q.numPlanes||St.numIntersection!==Q.numIntersection)||St.vertexAlphas!==bt||St.vertexTangents!==wt||St.morphTargets!==yt||St.morphNormals!==Jt||St.morphColors!==se||St.toneMapping!==ce||St.morphTargetsCount!==Kt)&&($t=!0):($t=!0,St.__version=B.version);let Ve=St.currentProgram;$t===!0&&(Ve=qi(B,D,U));let qn=!1,Ue=!1,Ys=!1;const he=Ve.getUniforms(),dn=St.uniforms;if(Tt.useProgram(Ve.program)&&(qn=!0,Ue=!0,Ys=!0),B.id!==P&&(P=B.id,Ue=!0),qn||W!==y){Wt.reverseDepthBuffer?(vt.copy(y.projectionMatrix),Gc(vt),Hc(vt),he.setValue(C,"projectionMatrix",vt)):he.setValue(C,"projectionMatrix",y.projectionMatrix),he.setValue(C,"viewMatrix",y.matrixWorldInverse);const ke=he.map.cameraPosition;ke!==void 0&&ke.setValue(C,Lt.setFromMatrixPosition(y.matrixWorld)),Wt.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&he.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,Ue=!0,Ys=!0)}if(U.isSkinnedMesh){he.setOptional(C,U,"bindMatrix"),he.setOptional(C,U,"bindMatrixInverse");const ke=U.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),he.setValue(C,"boneTexture",ke.boneTexture,w))}U.isBatchedMesh&&(he.setOptional(C,U,"batchingTexture"),he.setValue(C,"batchingTexture",U._matricesTexture,w),he.setOptional(C,U,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",U._indirectTexture,w),he.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",U._colorsTexture,w));const Ks=O.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Rt.update(U,O,Ve),(Ue||St.receiveShadow!==U.receiveShadow)&&(St.receiveShadow=U.receiveShadow,he.setValue(C,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(dn.envMap.value=xt,dn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(dn.envMapIntensity.value=D.environmentIntensity),Ue&&(he.setValue(C,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&jl(dn,Ys),tt&&B.fog===!0&&st.refreshFogUniforms(dn,tt),st.refreshMaterialUniforms(dn,B,j,z,f.state.transmissionRenderTarget[y.id]),Cs.upload(C,$a(St),dn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cs.upload(C,$a(St),dn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&he.setValue(C,"center",U.center),he.setValue(C,"modelViewMatrix",U.modelViewMatrix),he.setValue(C,"normalMatrix",U.normalMatrix),he.setValue(C,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const ke=B.uniformsGroups;for(let $s=0,Jl=ke.length;$s<Jl;$s++){const Za=ke[$s];I.update(Za,Ve),I.bind(Za,Ve)}}return Ve}function jl(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Zl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,D,O){Pt.get(y.texture).__webglTexture=D,Pt.get(y.depthTexture).__webglTexture=O;const B=Pt.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const O=Pt.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,O=0){T=y,L=D,A=O;let B=!0,U=null,tt=!1,lt=!1;if(y){const xt=Pt.get(y);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(xt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(xt.__hasExternalTextures)w.rebindTextures(y,Pt.get(y.texture).__webglTexture,Pt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const yt=y.depthTexture;if(xt.__boundDepthTexture!==yt){if(yt!==null&&Pt.has(yt)&&(y.width!==yt.image.width||y.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(lt=!0);const wt=Pt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?U=wt[D][O]:U=wt[D],tt=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?U=Pt.get(y).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[O]:U=wt,_.copy(y.viewport),S.copy(y.scissor),F=y.scissorTest}else _.copy(at).multiplyScalar(j).floor(),S.copy(ut).multiplyScalar(j).floor(),F=Bt;if(Tt.bindFramebuffer(C.FRAMEBUFFER,U)&&B&&Tt.drawBuffers(y,U),Tt.viewport(_),Tt.scissor(S),Tt.setScissorTest(F),tt){const xt=Pt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,O)}else if(lt){const xt=Pt.get(y.texture),bt=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.__webglTexture,O||0,bt)}P=-1},this.readRenderTargetPixels=function(y,D,O,B,U,tt,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){Tt.bindFramebuffer(C.FRAMEBUFFER,_t);try{const xt=y.texture,bt=xt.format,wt=xt.type;if(!Wt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-B&&O>=0&&O<=y.height-U&&C.readPixels(D,O,B,U,It.convert(bt),It.convert(wt),tt)}finally{const xt=T!==null?Pt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(C.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(y,D,O,B,U,tt,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){const xt=y.texture,bt=xt.format,wt=xt.type;if(!Wt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-B&&O>=0&&O<=y.height-U){Tt.bindFramebuffer(C.FRAMEBUFFER,_t);const yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),C.readPixels(D,O,B,U,It.convert(bt),It.convert(wt),0);const Jt=T!==null?Pt.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(C.FRAMEBUFFER,Jt);const se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await zc(C,se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(yt),C.deleteSync(se),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,O=0){y.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-O),U=Math.floor(y.image.width*B),tt=Math.floor(y.image.height*B),lt=D!==null?D.x:0,_t=D!==null?D.y:0;w.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,lt,_t,U,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(y,D,O=null,B=null,U=0){y.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],D=arguments[2],U=arguments[3]||0,O=null);let tt,lt,_t,xt,bt,wt;O!==null?(tt=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.min.x,xt=O.min.y):(tt=y.image.width,lt=y.image.height,_t=0,xt=0),B!==null?(bt=B.x,wt=B.y):(bt=0,wt=0);const yt=It.convert(D.format),Jt=It.convert(D.type);w.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const se=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),De=C.getParameter(C.UNPACK_SKIP_PIXELS),Kt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),xe=y.isCompressedTexture?y.mipmaps[U]:y.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,xt),y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,bt,wt,tt,lt,yt,Jt,xe.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,bt,wt,xe.width,xe.height,yt,xe.data):C.texSubImage2D(C.TEXTURE_2D,U,bt,wt,tt,lt,yt,Jt,xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,se),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,De),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),U===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(y,D,O=null,B=null,U=0){y.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0);let tt,lt,_t,xt,bt,wt,yt,Jt,se;const ce=y.isCompressedTexture?y.mipmaps[U]:y.image;O!==null?(tt=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.max.z-O.min.z,xt=O.min.x,bt=O.min.y,wt=O.min.z):(tt=ce.width,lt=ce.height,_t=ce.depth,xt=0,bt=0,wt=0),B!==null?(yt=B.x,Jt=B.y,se=B.z):(yt=0,Jt=0,se=0);const De=It.convert(D.format),Kt=It.convert(D.type);let St;if(D.isData3DTexture)w.setTexture3D(D,0),St=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)w.setTexture2DArray(D,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const xe=C.getParameter(C.UNPACK_ROW_LENGTH),$t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ve=C.getParameter(C.UNPACK_SKIP_PIXELS),qn=C.getParameter(C.UNPACK_SKIP_ROWS),Ue=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xt),C.pixelStorei(C.UNPACK_SKIP_ROWS,bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wt),y.isDataTexture||y.isData3DTexture?C.texSubImage3D(St,U,yt,Jt,se,tt,lt,_t,De,Kt,ce.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(St,U,yt,Jt,se,tt,lt,_t,De,ce.data):C.texSubImage3D(St,U,yt,Jt,se,tt,lt,_t,De,Kt,ce),C.pixelStorei(C.UNPACK_ROW_LENGTH,xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,qn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue),U===0&&D.generateMipmaps&&C.generateMipmap(St),Tt.unbindTexture()},this.initRenderTarget=function(y){Pt.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Tt.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,Tt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Na?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===zs?"display-p3":"srgb"}}class za{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tm extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new He,this.environmentIntensity=1,this.environmentRotation=new He,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class em{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xa,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new R;class Fs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _i extends An{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let oi;const Ni=new R,li=new R,ci=new R,hi=new Ct,Fi=new Ct,ql=new Yt,ps=new R,Oi=new R,ms=new R,Xo=new Ct,Ar=new Ct,qo=new Ct;class Hi extends fe{constructor(t=new _i){if(super(),this.isSprite=!0,this.type="Sprite",oi===void 0){oi=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new em(e,5);oi.setIndex([0,1,2,0,2,3]),oi.setAttribute("position",new Fs(n,3,0,!1)),oi.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=oi,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),li.setFromMatrixScale(this.matrixWorld),ql.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&li.multiplyScalar(-ci.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;gs(ps.set(-.5,-.5,0),ci,a,li,i,r),gs(Oi.set(.5,-.5,0),ci,a,li,i,r),gs(ms.set(.5,.5,0),ci,a,li,i,r),Xo.set(0,0),Ar.set(1,0),qo.set(1,1);let o=t.ray.intersectTriangle(ps,Oi,ms,!1,Ni);if(o===null&&(gs(Oi.set(-.5,.5,0),ci,a,li,i,r),Ar.set(0,1),o=t.ray.intersectTriangle(ps,ms,Oi,!1,Ni),o===null))return;const l=t.ray.origin.distanceTo(Ni);l<t.near||l>t.far||e.push({distance:l,point:Ni.clone(),uv:Ge.getInterpolation(Ni,ps,Oi,ms,Xo,Ar,qo,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gs(s,t,e,n,i,r){hi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Fi.x=r*hi.x-i*hi.y,Fi.y=i*hi.x+r*hi.y):Fi.copy(hi),s.copy(t),s.x+=Fi.x,s.y+=Fi.y,s.applyMatrix4(ql)}class nm extends Se{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Pe,h=Pe,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const di=new Yt,Ko=new Yt,_s=[],$o=new Xn,im=new Yt,Bi=new ct,ki=new Ri;class jo extends ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,im)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),$o.copy(t.boundingBox).applyMatrix4(di),this.boundingBox.union($o)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),ki.copy(t.boundingSphere).applyMatrix4(di),this.boundingSphere.union(ki)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),t.ray.intersectsSphere(ki)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,di),Ko.multiplyMatrices(n,di),Bi.matrixWorld=Ko,Bi.raycast(t,_s);for(let a=0,o=_s.length;a<o;a++){const l=_s[a];l.instanceId=r,l.object=this,e.push(l)}_s.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nm(new Float32Array(i*this.count),i,this.count,Pa,Qe));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hs extends An{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zo=new Yt,ba=new Fa,vs=new Ri,xs=new R;class Ga extends fe{constructor(t=new ve,e=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(i),vs.radius+=r,t.ray.intersectsSphere(vs)===!1)return;Zo.copy(i).invert(),ba.copy(t.ray).applyMatrix4(Zo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,v=p;g<v;g++){const f=c.getX(g);xs.fromBufferAttribute(d,f),Jo(xs,f,l,i,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,v=p;g<v;g++)xs.fromBufferAttribute(d,g),Jo(xs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jo(s,t,e,n,i,r,a){const o=ba.distanceSqToPoint(s);if(o<e){const l=new R;ba.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Vs extends Se{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Os extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _e extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const v=[],f=n/2;let m=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(p,2));function b(){const E=new R,L=new R;let A=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const W=[],_=P/r,S=_*(e-t)+t;for(let F=0;F<=i;F++){const k=F/i,V=k*l+o,K=Math.sin(V),z=Math.cos(V);L.x=S*K,L.y=-_*n+f,L.z=S*z,d.push(L.x,L.y,L.z),E.set(K,T,z).normalize(),u.push(E.x,E.y,E.z),p.push(k,1-_),W.push(g++)}v.push(W)}for(let P=0;P<i;P++)for(let W=0;W<r;W++){const _=v[W][P],S=v[W+1][P],F=v[W+1][P+1],k=v[W][P+1];t>0&&(h.push(_,S,k),A+=3),e>0&&(h.push(S,F,k),A+=3)}c.addGroup(m,A,0),m+=A}function M(E){const L=g,A=new Ct,T=new R;let P=0;const W=E===!0?t:e,_=E===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,f*_,0),u.push(0,_,0),p.push(.5,.5),g++;const S=g;for(let F=0;F<=i;F++){const V=F/i*l+o,K=Math.cos(V),z=Math.sin(V);T.x=W*z,T.y=f*_,T.z=W*K,d.push(T.x,T.y,T.z),u.push(0,_,0),A.x=K*.5+.5,A.y=z*.5*_+.5,p.push(A.x,A.y),g++}for(let F=0;F<i;F++){const k=L+F,V=S+F;E===!0?h.push(V,V+1,k):h.push(V+1,V,k),P+=3}c.addGroup(m,P,E===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ye extends _e{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ye(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ws extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new R,E=new R,L=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],M),p(e[A+1],E),p(e[A+2],L),l(M,E,L,b)}function l(b,M,E,L){const A=L+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const W=b.clone().lerp(E,P/A),_=M.clone().lerp(E,P/A),S=A-P;for(let F=0;F<=S;F++)F===0&&P===A?T[P][F]=W:T[P][F]=W.clone().lerp(_,F/S)}for(let P=0;P<A;P++)for(let W=0;W<2*(A-P)-1;W++){const _=Math.floor(W/2);W%2===0?(u(T[P][_+1]),u(T[P+1][_]),u(T[P][_])):(u(T[P][_+1]),u(T[P+1][_+1]),u(T[P+1][_]))}}function c(b){const M=new R;for(let E=0;E<r.length;E+=3)M.x=r[E+0],M.y=r[E+1],M.z=r[E+2],M.normalize().multiplyScalar(b),r[E+0]=M.x,r[E+1]=M.y,r[E+2]=M.z}function h(){const b=new R;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const E=f(b)/2/Math.PI+.5,L=m(b)/Math.PI+.5;a.push(E,1-L)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const M=a[b+0],E=a[b+2],L=a[b+4],A=Math.max(M,E,L),T=Math.min(M,E,L);A>.9&&T<.1&&(M<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),L<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function p(b,M){const E=b*3;M.x=t[E+0],M.y=t[E+1],M.z=t[E+2]}function g(){const b=new R,M=new R,E=new R,L=new R,A=new Ct,T=new Ct,P=new Ct;for(let W=0,_=0;W<r.length;W+=9,_+=6){b.set(r[W+0],r[W+1],r[W+2]),M.set(r[W+3],r[W+4],r[W+5]),E.set(r[W+6],r[W+7],r[W+8]),A.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),L.copy(b).add(M).add(E).divideScalar(3);const S=f(L);v(A,_+0,b,S),v(T,_+2,M,S),v(P,_+4,E,S)}}function v(b,M,E,L){L<0&&b.x===1&&(a[M]=b.x-1),E.x===0&&E.z===0&&(a[M]=L/2/Math.PI+.5)}function f(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.vertices,t.indices,t.radius,t.details)}}class Bs extends Ws{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bs(t.radius,t.detail)}}class Ha extends Ws{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ha(t.radius,t.detail)}}class vi extends ve{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,p=new R,g=new Ct;for(let v=0;v<=i;v++){for(let f=0;f<=n;f++){const m=r+f/n*a;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const f=v*(n+1);for(let m=0;m<n;m++){const b=m+f,M=b,E=b+n+1,L=b+n+2,A=b+1;o.push(M,E,A),o.push(E,L,A)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wn extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new R,u=new R,p=[],g=[],v=[],f=[];for(let m=0;m<=n;m++){const b=[],M=m/n;let E=0;m===0&&a===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(i+A*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(i+A*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),f.push(A+E,1-M),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const M=h[m][b+1],E=h[m][b],L=h[m+1][b],A=h[m+1][b+1];(m!==0||a>0)&&p.push(M,E,A),(m!==n-1||l<Math.PI)&&p.push(E,L,A)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Va extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new R,d=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,f=p/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(v),d.y=(t+e*Math.cos(f))*Math.sin(v),d.z=e*Math.sin(f),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,f=(i+1)*(p-1)+g-1,m=(i+1)*(p-1)+g,b=(i+1)*p+g;a.push(v,f,b),a.push(f,m,b)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Dt extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qo extends An{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xs extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sm extends Xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Rr=new Yt,tl=new R,el=new R;class Yl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tl.setFromMatrixPosition(t.matrixWorld),e.position.copy(tl),el.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(el),e.updateMatrixWorld(),Rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nl=new Yt,zi=new R,Cr=new R;class rm extends Yl{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zi.setFromMatrixPosition(t.matrixWorld),n.position.copy(zi),Cr.copy(n.position),Cr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cr),n.updateMatrixWorld(),i.makeTranslation(-zi.x,-zi.y,-zi.z),nl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl)}}class am extends Xs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class om extends Yl{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lm extends Xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends Xs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class hm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=il();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function il(){return performance.now()}const sl=new Yt;class dm{constructor(t,e,n=0,i=1/0){this.ray=new Fa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sl),this}intersectObject(t,e=!0,n=[]){return Ea(t,this,n,e),n.sort(rl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ea(t[i],this,n,e);return n.sort(rl),n}}function rl(s,t){return s.distance-t.distance}function Ea(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ea(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);class um{constructor(){this.phase="menu",this.paused=!1;try{const t=localStorage.getItem("fba-coins");this.coins=t===null?500:parseInt(t,10)||0,this.coins<0&&(this.coins=0)}catch{this.coins=500}this.settings={sensitivity:1,volume:.7,shadows:!0,skin:"knight",map:"citadel",bots:10},this.roster=new Map}register(t){this.roster.set(t.name,t)}rows(){return[...this.roster.values()].sort((t,e)=>e.kills-t.kills||t.deaths-e.deaths)}}const al=.55;class fm{constructor(t){this.bound=t,this.boxes=[],this.occluders=[]}addBox(t,e,n,i,r,a){this.boxes.push({minX:t,maxX:e,minZ:n,maxZ:i,baseY:r,topY:a})}addOccluder(t){this.occluders.push(t)}groundHeightAt(t,e,n,i=.35){let r=0;for(const a of this.boxes)t<a.minX-i||t>a.maxX+i||e<a.minZ-i||e>a.maxZ+i||a.topY<=n+al&&a.topY>r&&(r=a.topY);return r}resolveEntity(t){const e=t.pos,n=t.radius,i=e.y+t.height;for(const a of this.boxes){if(e.y>=a.topY-al||i<=a.baseY)continue;const o=Math.max(a.minX,Math.min(e.x,a.maxX)),l=Math.max(a.minZ,Math.min(e.z,a.maxZ)),c=e.x-o,h=e.z-l,d=c*c+h*h;if(!(d>n*n))if(d>1e-9){const u=Math.sqrt(d),p=(n-u)/u;e.x+=c*p,e.z+=h*p}else{const u=e.x-(a.minX-n),p=a.maxX+n-e.x,g=e.z-(a.minZ-n),v=a.maxZ+n-e.z,f=Math.min(u,p,g,v);f===u?e.x=a.minX-n:f===p?e.x=a.maxX+n:f===g?e.z=a.minZ-n:e.z=a.maxZ+n}}const r=this.bound-n;e.x<-r?(e.x=-r,t.vel.x<0&&(t.vel.x*=-.1)):e.x>r&&(e.x=r,t.vel.x>0&&(t.vel.x*=-.1)),e.z<-r?(e.z=-r,t.vel.z<0&&(t.vel.z*=-.1)):e.z>r&&(e.z=r,t.vel.z>0&&(t.vel.z*=-.1))}}const Pr=Math.PI*2,Ms=(s,t,e)=>Math.max(t,Math.min(e,s)),nt=(s,t)=>s+Math.random()*(t-s),Nn=s=>s[Math.floor(Math.random()*s.length)];function ol(s,t,e,n){let i=((t-s+Math.PI)%Pr+Pr)%Pr-Math.PI;return s+i*(1-Math.exp(-e*n))}const pm=[[-36,-36],[36,-36],[-36,36],[36,36],[36,0],[-36,0],[0,36],[0,-36],[18,18],[-18,-18],[24,-6],[-24,6],[6,24],[-6,-24],[32,-12]];class mm{constructor(){this.points=pm.map(([t,e])=>new R(t,0,e))}getSpawn(t=[]){let e=null,n=-1/0;for(let i=0;i<16;i++){const r=this.points[Math.floor(Math.random()*this.points.length)];let a=1/0;for(const o of t){const l=r.x-o.pos.x,c=r.z-o.pos.z,h=Math.sqrt(l*l+c*c)-o.radius;h<a&&(a=h)}a===1/0&&(a=999),a+=nt(-1,1),a>n&&(n=a,e=r)}return e.clone()}}class gm{constructor(t,e=500){this.capacity=e,this.alive=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.baseR=new Float32Array(e),this.baseG=new Float32Array(e),this.baseB=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e);const n=new ve;n.setAttribute("position",new be(this.pos,3).setUsage(Ma)),n.setAttribute("color",new be(this.col,3).setUsage(Ma)),n.setDrawRange(0,0);const i=new Hs({size:.14,vertexColors:!0,transparent:!0,blending:ln,depthWrite:!1,sizeAttenuation:!0});this.points=new Ga(n,i),this.points.frustumCulled=!1,t.add(this.points),this.geo=n,this._c=new Ft}spawnBurst(t,{count:e=12,color:n=16764006,speed:i=5,upBias:r=1.5,life:a=.45,gravity:o=-10}={}){this._c.set(n);for(let l=0;l<e;l++){if(this.alive>=this.capacity)return;const c=this.alive++,h=c*3,d=Math.random()*Math.PI*2,u=Math.acos(nt(-1,1)),p=i*nt(.35,1);this.pos[h]=t.x,this.pos[h+1]=t.y,this.pos[h+2]=t.z,this.vel[h]=Math.sin(u)*Math.cos(d)*p,this.vel[h+1]=Math.cos(u)*p*.7+r,this.vel[h+2]=Math.sin(u)*Math.sin(d)*p;const g=nt(.55,1.15);this.baseR[c]=this._c.r*g,this.baseG[c]=this._c.g*g,this.baseB[c]=this._c.b*g,this.maxLife[c]=a*nt(.6,1.4),this.life[c]=this.maxLife[c],this.grav[c]=o}}update(t){let e=0;for(;e<this.alive;){if(this.life[e]-=t,this.life[e]<=0){const r=--this.alive;if(e!==r){const a=e*3,o=r*3;for(let l=0;l<3;l++)this.pos[a+l]=this.pos[o+l],this.vel[a+l]=this.vel[o+l],this.col[a+l]=this.col[o+l];this.baseR[e]=this.baseR[r],this.baseG[e]=this.baseG[r],this.baseB[e]=this.baseB[r],this.life[e]=this.life[r],this.maxLife[e]=this.maxLife[r],this.grav[e]=this.grav[r]}continue}const n=e*3;this.vel[n+1]+=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;const i=Math.max(this.life[e]/this.maxLife[e],0);this.col[n]=this.baseR[e]*i,this.col[n+1]=this.baseG[e]*i,this.col[n+2]=this.baseB[e]*i,e++}this.geo.setDrawRange(0,this.alive),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}const _m=14;class vm{constructor(t){this.game=t,this.fighters=[],this.particles=new gm(t.scene,500),this.slashes=[];const e=new vi(.55,2.1,26,1,-1.25,2.5);for(let n=0;n<_m;n++){const i=new bn({color:16777215,transparent:!0,opacity:0,side:Ke,blending:ln,depthWrite:!1}),r=new ct(e,i);r.rotation.order="YXZ",r.visible=!1,r.frustumCulled=!1,t.scene.add(r),this.slashes.push({mesh:r,mat:i,life:0,maxLife:.16})}}register(t){this.fighters.includes(t)||this.fighters.push(t)}unregister(t){const e=this.fighters.indexOf(t);e>=0&&this.fighters.splice(e,1)}sweep(t,e){const n=e.def,i=Math.sin(t.yaw),r=Math.cos(t.yaw);for(const a of this.fighters){if(a===t||a.dead||e.hit.has(a))continue;const o=a.pos.x-t.pos.x,l=a.pos.z-t.pos.z;if(Math.abs(a.pos.y-t.pos.y)>2.2)continue;const c=Math.hypot(o,l);if(c-a.radius>n.range)continue;const h=c>1e-4?o/c:i,d=c>1e-4?l/c:r;if(i*h+r*d<n.arcCos)continue;e.hit.add(a);const u=new R(a.pos.x-h*.3,a.pos.y+1.3,a.pos.z-d*.3);this.applyHit(t,a,n.dmg*(t.dmgMul||1),u)}}applyHit(t,e,n,i){const r=e.takeDamage(n,t,i);r&&(r.blocked?(this.particles.spawnBurst(i,{count:16,color:16773296,speed:5.5,upBias:1,life:.32}),this.game.audio.clash()):(this.particles.spawnBurst(i,{count:13,color:16734772,speed:4.5,upBias:1.4,life:.42}),this.game.audio.hit()),t.isPlayer&&this.game.hud.hitMarker(r.blocked),e.isPlayer&&(this.game.hud.damageFlash(),this.game.cameraRig.addShake(r.blocked?.12:.34)))}deathFX(t){const e=t.pos.clone();e.y+=1.1,this.particles.spawnBurst(e,{count:20,color:13382451,speed:3.5,upBias:2.2,life:.7,gravity:-6})}spawnSlashFX(t,e){const n=this.slashes.find(o=>o.life<=0);if(!n)return;const i=n.mesh;i.visible=!0,n.life=n.maxLife=e.key==="strong"?.2:.16;const r=Math.sin(t.yaw),a=Math.cos(t.yaw);i.position.set(t.pos.x+r*(e.fx==="v"?1.15:.85),t.pos.y+(e.fx==="v"?1.35:1.25),t.pos.z+a*(e.fx==="v"?1.15:.85)),e.fx==="h"?(i.rotation.set(-Math.PI/2,0,e.mirror?Math.PI:0),i.rotation.y=t.yaw,i.scale.setScalar(1.15),n.mat.color.setHex(16771504)):(i.rotation.set(0,t.yaw,0),i.scale.set(1.05,.8,1),n.mat.color.setHex(12574975))}notifyAttack(t){for(const e of this.fighters){if(e===t||e.dead||!e.isEnemy)continue;Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<4.6&&e.onThreat(t)}}update(t){this.particles.update(t);for(const e of this.slashes)e.life<=0||(e.life-=t,e.life<=0?(e.mesh.visible=!1,e.mat.opacity=0):e.mat.opacity=e.life/e.maxLife*.9)}}const le={knight:{name:"Knight",desc:"Stalwart guard of the arena",primary:3498176,secondary:9081766,accent:14196778,decor:"knight",bladeGlow:0},crusader:{name:"Crusader",desc:"Holy warrior in heavy plate",primary:10498096,secondary:14209992,accent:13214247,decor:"crusader",bladeGlow:0},ranger:{name:"Ranger",desc:"Swift hunter of the wilds",primary:4160068,secondary:7033652,accent:11584650,decor:"ranger",bladeGlow:0},royal:{name:"Royal",desc:"Crowned champion of the realm",primary:7028640,secondary:13214247,accent:15259816,decor:"royal",bladeGlow:14196778},shadow:{name:"Shadow",desc:"Silent blade from the void",primary:2302766,secondary:4013394,accent:9055202,decor:"shadow",bladeGlow:9055202},dragonlord:{name:"Dragonlord",desc:"Bonded to an ancient dragon",primary:9050650,secondary:3816004,accent:16756768,decor:"dragon",bladeGlow:16733474,premium:!0},voidreaper:{name:"Void Reaper",desc:"Harvested from the void itself",primary:1446431,secondary:2761784,accent:9055202,decor:"reaper",bladeGlow:9055202,premium:!0},frostking:{name:"Frost King",desc:"Crowned in eternal winter",primary:10474728,secondary:14216436,accent:4892888,decor:"frostking",bladeGlow:6740479,premium:!0},warlord:{name:"Warlord",desc:"Conqueror of a hundred arenas",primary:5906207,secondary:2763312,accent:13214247,decor:"warlord",bladeGlow:16755251,price:1e3,aura:{colors:[16764006,16746547],every:.5,count:2,up:.8,grav:-1}},stormcaller:{name:"Storm Caller",desc:"Wielder of the living thunder",primary:2046574,secondary:9081766,accent:6737151,decor:"storm",bladeGlow:6737151,price:2e3,aura:{colors:[10476799,6737151,16777215],every:.25,count:3,up:1.2,grav:-1}},inferno:{name:"Inferno Knight",desc:"Armored in everburning flame",primary:3806216,secondary:8006160,accent:16738842,decor:"inferno",bladeGlow:16729088,price:5e3,aura:{colors:[16738842,16755234,16724736],every:.1,count:3,up:1.6,grav:-3}},celestial:{name:"Celestial Guardian",desc:"Sentinel of the heavens",primary:15262932,secondary:13214247,accent:16773824,decor:"celestial",bladeGlow:16771496,price:5e4,aura:{colors:[16773824,16771496,16777215],every:.12,count:3,up:1.8,grav:-.5}},cosmic:{name:"Cosmic Devourer",desc:"MYTHICAL - eater of worlds",primary:1312810,secondary:3807838,accent:11691775,decor:"cosmic",bladeGlow:10040319,price:1e6,aura:{colors:[11691775,6737151,16737976,16777215],every:.07,count:4,up:1.4,grav:-.8}}},Lr=(s,t)=>s+Math.random()*(t-s),et={head:new Ot(.5,.5,.48),torso:new Ot(.72,.85,.42),belt:new Ot(.76,.12,.46),helm:new Ot(.54,.2,.52),plume:new Ot(.08,.16,.44),pauldron:new Ot(.34,.18,.36),arm:new Ot(.22,.66,.22),leg:new Ot(.26,.82,.26),blade:new Ot(.075,1.05,.17),guard:new Ot(.36,.07,.24),grip:new _e(.05,.05,.3,6),pommel:new Wn(.06,6,6),greathelm:new Ot(.56,.52,.54),slit:new Ot(.46,.08,.56),tabard:new Ot(.64,.82,.06),crossV:new Ot(.09,.52,.02),crossH:new Ot(.32,.09,.02),hood:new Ye(.42,.62,6),cloak:new Ot(.8,.98,.05),hem:new Ot(.82,.09,.055),crown:new _e(.3,.3,.13,8),spike:new Ye(.06,.16,4),mask:new Ot(.44,.26,.06),eye:new Ot(.08,.05,.02),coil:new _e(.05,.08,.34,6),orb:new Wn(.09,8,6),halo:new Va(.26,.035,8,24),crystal:new Ha(.11,0)};function xm(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.font='bold 36px "Segoe UI", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.lineWidth=7,n.strokeStyle="rgba(0,0,0,0.85)",n.strokeText(s,128,34),n.fillStyle=t,n.fillText(s,128,34);const i=new Vs(e);return i.colorSpace=Oe,i}class Mm{constructor({name:t,primary:e,secondary:n,accent:i,isPlayer:r,skin:a}){this.name=t,this.isPlayer=!!r,this.skinId=a||"knight",this.decor=null,this.time=Math.random()*10,this.walkPhase=Math.random()*6,this.flashT=0,this.deadFaded=!1,this.matPrimary=new Dt({color:e,roughness:.75,metalness:.15,transparent:!0}),this.matSecondary=new Dt({color:n,roughness:.55,metalness:.35,transparent:!0}),this.matAccent=new Dt({color:i,roughness:.4,metalness:.6,transparent:!0}),this.matSkin=new Dt({color:14267276,roughness:.9,transparent:!0}),this.matDark=new Dt({color:3025459,roughness:.9,transparent:!0}),this.matBlade=new Dt({color:14147304,roughness:.25,metalness:.85,transparent:!0}),this.matGlow=new Dt({color:1118481,emissive:9055202,emissiveIntensity:2.2}),this.mats=[this.matPrimary,this.matSecondary,this.matAccent,this.matSkin,this.matDark,this.matBlade],this.root=new oe;const o=new oe;this.root.add(o),this.torsoPivot=new oe,o.add(this.torsoPivot);const l=new ct(et.torso,this.matPrimary);l.position.y=1.22,l.castShadow=!0,this.torsoPivot.add(l);const c=new ct(et.belt,this.matAccent);c.position.y=.84,c.castShadow=!0,this.torsoPivot.add(c);const h=new ct(et.head,this.matSkin);h.position.y=1.88,h.castShadow=!0,this.torsoPivot.add(h);const d=new ct(et.helm,this.matSecondary);d.position.y=2.08,d.castShadow=!0,this.torsoPivot.add(d);const u=new ct(et.plume,this.matAccent);u.position.y=2.24,this.torsoPivot.add(u),this.armL=this.makeArm(1),this.armR=this.makeArm(-1),this.torsoPivot.add(this.armL.pivot,this.armR.pivot),this.legL=this.makeLeg(-1),this.legR=this.makeLeg(1),o.add(this.legL,this.legR),this.buildSword(),this.healthGroup=new oe,this.healthGroup.position.y=2.62,this.barBgMat=new _i({color:1313035,opacity:.85,transparent:!0,depthTest:!1}),this.barBg=new Hi(this.barBgMat),this.barBg.scale.set(.95,.115,1),this.barBg.renderOrder=20,this.barFgMat=new _i({color:5824602,depthTest:!1}),this.barFg=new Hi(this.barFgMat),this.barFg.scale.set(.87,.065,1),this.barFg.position.x=-.435,this.barFg.renderOrder=21,this.healthGroup.add(this.barBg,this.barFg),this.root.add(this.healthGroup);const p=xm(t,r?"#8fd8ff":"#ffb3a3");this.nameSprite=new Hi(new _i({map:p,transparent:!0,depthTest:!1})),this.nameSprite.scale.set(1.7,.42,1),this.nameSprite.position.y=2.95,this.nameSprite.renderOrder=22,this.root.add(this.nameSprite),this.setSkin(this.skinId)}setSkin(t){const e=le[t]||le.knight;this.skinId=le[t]?t:"knight",this.matPrimary.color.setHex(e.primary),this.matSecondary.color.setHex(e.secondary),this.matAccent.color.setHex(e.accent),this.matBlade.emissive.setHex(e.bladeGlow||0),this.matBlade.emissiveIntensity=e.bladeGlow?.85:0,this.matGlow.emissive.setHex(e.bladeGlow||9055202),this.rebuildDecor(e.decor||"knight")}rebuildDecor(t){this.decor&&(this.torsoPivot.remove(this.decor),this.decor=null,this.orbitGroup=null),this.decorExtra&&(this.torsoPivot.remove(this.decorExtra),this.decorExtra=null);const e=new oe,n=(i,r,a,o,l)=>{const c=new ct(i,r);return c.position.set(a,o,l),c.castShadow=!0,e.add(c),c};if(t==="crusader")n(et.greathelm,this.matSecondary,0,1.86,0),n(et.slit,this.matDark,0,1.9,0),n(et.tabard,this.matPrimary,0,1.12,.235),n(et.crossV,this.matAccent,0,1.16,.27),n(et.crossH,this.matAccent,0,1.24,.27);else if(t==="ranger"){const i=n(et.hood,this.matPrimary,0,2.32,-.02);i.rotation.y=Math.PI/6,n(et.cloak,this.matSecondary,0,1.22,-.26),n(et.hem,this.matAccent,0,.76,-.265)}else if(t==="royal"){n(et.crown,this.matAccent,0,2.22,0);for(let a=0;a<4;a++){const o=a/4*Math.PI*2;n(et.spike,this.matAccent,Math.sin(o)*.22,2.34,Math.cos(o)*.22)}n(et.cloak,this.matPrimary,0,1.18,-.27).scale.set(1.1,1.15,1),n(et.hem,this.matAccent,0,.66,-.275).scale.set(1.1,1,1)}else if(t==="shadow"){const i=n(et.hood,this.matPrimary,0,2.34,-.02);i.rotation.y=Math.PI/6,n(et.mask,this.matDark,0,1.84,.25),n(et.eye,this.matGlow,-.1,1.87,.285),n(et.eye,this.matGlow,.1,1.87,.285)}else if(t==="dragon"){const i=n(et.spike,this.matAccent,-.15,2.2,.02);i.rotation.z=.5,i.scale.set(1.3,1.8,1.3);const r=n(et.spike,this.matAccent,.15,2.2,.02);r.rotation.z=-.5,r.scale.set(1.3,1.8,1.3);const a=n(et.cloak,this.matPrimary,-.42,1.45,-.3);a.rotation.y=.55,a.rotation.z=.5,a.scale.set(.62,.85,1);const o=n(et.cloak,this.matPrimary,.42,1.45,-.3);o.rotation.y=-.55,o.rotation.z=-.5,o.scale.set(.62,.85,1),n(et.crossV,this.matAccent,0,.62,-.26).scale.set(1.2,1.4,1)}else if(t==="reaper"){const i=n(et.hood,this.matPrimary,0,2.42,-.02);i.rotation.y=Math.PI/6,i.scale.set(1.2,1.2,1.2),n(et.mask,this.matDark,0,1.82,.26),n(et.eye,this.matGlow,-.09,1.86,.3),n(et.eye,this.matGlow,.09,1.86,.3);const r=n(et.spike,this.matDark,-.56,1.66,0);r.rotation.z=2.6,r.scale.set(1.4,2,1.4);const a=n(et.spike,this.matDark,.56,1.66,0);a.rotation.z=-2.6,a.scale.set(1.4,2,1.4)}else if(t==="frostking"){n(et.crown,this.matAccent,0,2.22,0);for(let o=0;4>o;o++){const l=o/4*Math.PI*2;n(et.spike,this.matAccent,Math.sin(l)*.22,2.36,Math.cos(l)*.22)}n(et.cloak,this.matSecondary,0,1.2,-.28).scale.set(1.15,1.1,1);const r=n(et.spike,this.matAccent,-.47,1.38,.02);r.rotation.x=Math.PI,r.scale.set(.8,1.6,.8);const a=n(et.spike,this.matAccent,.47,1.38,.02);a.rotation.x=Math.PI,a.scale.set(.8,1.6,.8)}else if(t==="warlord"){const i=n(et.spike,this.matAccent,-.17,2.18,.02);i.rotation.z=.65,i.scale.set(1.5,2.1,1.5);const r=n(et.spike,this.matAccent,.17,2.18,.02);r.rotation.z=-.65,r.scale.set(1.5,2.1,1.5),n(et.mask,this.matDark,0,1.84,.26),n(et.eye,this.matGlow,-.09,1.87,.3),n(et.eye,this.matGlow,.09,1.87,.3);for(let l=-1;l<=1;l++){const c=n(et.spike,this.matAccent,l*.22,.92,.26);c.rotation.x=Math.PI,c.scale.set(.7,1.1,.7)}const a=n(et.spike,this.matSecondary,-.5,1.72,0);a.rotation.z=2.7,a.scale.set(1.3,1.8,1.3);const o=n(et.spike,this.matSecondary,.5,1.72,0);o.rotation.z=-2.7,o.scale.set(1.3,1.8,1.3)}else if(t==="storm")n(et.coil,this.matSecondary,-.47,1.82,0),n(et.coil,this.matSecondary,.47,1.82,0),n(et.orb,this.matGlow,-.47,2.06,0),n(et.orb,this.matGlow,.47,2.06,0),n(et.crossV,this.matGlow,0,1.22,.23),n(et.crossH,this.matGlow,0,1.3,.23),n(et.spike,this.matAccent,0,2.32,-.05).scale.set(.9,1.5,.9);else if(t==="inferno"){for(let o=-1;o<=1;o++)n(et.spike,this.matGlow,o*.12,2.34+Math.abs(o)*-.06,0).scale.set(.9,1.6-Math.abs(o)*.3,.9);n(et.spike,this.matGlow,-.47,1.78,0).scale.set(1.1,1.5,1.1),n(et.spike,this.matGlow,.47,1.78,0).scale.set(1.1,1.5,1.1),n(et.cloak,this.matSecondary,0,1.18,-.28).scale.set(1.05,1.1,1)}else if(t==="celestial"){const i=new ct(et.halo,this.matGlow);i.position.y=2.52,i.rotation.x=Math.PI/2,this.torsoPivot.add(i),this.decorExtra=i;const r=n(et.cloak,this.matAccent,-.46,1.5,-.3);r.rotation.y=.6,r.rotation.z=.35,r.scale.set(.6,1,1);const a=n(et.cloak,this.matAccent,.46,1.5,-.3);a.rotation.y=-.6,a.rotation.z=-.35,a.scale.set(.6,1,1),n(et.crossV,this.matAccent,0,1.24,.235)}else if(t==="cosmic"){const i=n(et.hood,this.matPrimary,0,2.42,-.02);i.rotation.y=Math.PI/6,i.scale.set(1.25,1.25,1.25),n(et.mask,this.matDark,0,1.82,.26),n(et.eye,this.matGlow,-.09,1.86,.3),n(et.eye,this.matGlow,.09,1.86,.3),n(et.cloak,this.matSecondary,0,1.16,-.29).scale.set(1.25,1.25,1);for(let l=0;l<5;l++)n(et.orb,this.matGlow,Lr(-.3,.3),Lr(.9,1.6),-.32).scale.setScalar(Lr(.4,.9));const a=n(et.spike,this.matSecondary,-.54,1.7,0);a.rotation.z=2.6,a.scale.set(1.4,1.9,1.4);const o=n(et.spike,this.matSecondary,.54,1.7,0);o.rotation.z=-2.6,o.scale.set(1.4,1.9,1.4),this.orbitGroup=new oe,this.orbitGroup.position.y=1.5;for(let l=0;l<4;l++){const c=l/4*Math.PI*2,h=new ct(et.crystal,this.matGlow);h.position.set(Math.sin(c)*.95,Math.sin(l*2.1)*.22,Math.cos(c)*.95),h.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),this.orbitGroup.add(h)}e.add(this.orbitGroup)}e.children.length&&(this.torsoPivot.add(e),this.decor=e)}makeArm(t){const e=new oe;e.position.set(t*.47,1.56,0);const n=new ct(et.arm,this.matPrimary);n.position.y=-.33,n.castShadow=!0,e.add(n);const i=new ct(et.pauldron,this.matSecondary);i.position.y=-.04,i.castShadow=!0,e.add(i);const r=new oe;return r.position.y=-.66,e.add(r),{pivot:e,hand:r}}makeLeg(t){const e=new oe;e.position.set(t*.19,.84,0);const n=new ct(et.leg,this.matDark);return n.position.y=-.41,n.castShadow=!0,e.add(n),e}buildSword(){const t=new oe,e=new ct(et.blade,this.matBlade);e.position.y=.68,e.castShadow=!0;const n=new ct(et.guard,this.matAccent);n.position.y=.13;const i=new ct(et.grip,this.matDark);i.position.y=-.03;const r=new ct(et.pommel,this.matAccent);r.position.y=-.2,t.add(e,n,i,r),t.rotation.x=1.15,this.armR.hand.add(t),this.sword=t}setYaw(t){this.root.rotation.y=t}setHealthBar(t){t=Ms(t,0,1);const e=Math.max(.001,.87*t);this.barFg.scale.x=e,this.barFg.position.x=-.435+e/2,t>.5?this.barFgMat.color.setHex(5824602):t>.25?this.barFgMat.color.setHex(16757575):this.barFgMat.color.setHex(16729927)}setVisible(t){this.root.visible=t}hitFlash(){this.flashT=.18}reset(){this.root.rotation.x=0,this.setVisible(!0);for(const t of this.mats)t.opacity=1;this.flashT=0,this.deadFaded=!1,this.armL.pivot.rotation.set(0,0,0),this.armR.pivot.rotation.set(0,0,0),this.legL.rotation.set(0,0,0),this.legR.rotation.set(0,0,0),this.torsoPivot.rotation.set(0,0,0),this.torsoPivot.position.y=0,this.setHealthBar(1)}dispose(){this.nameSprite.material.map.dispose(),this.nameSprite.material.dispose();for(const t of this.mats)t.dispose();this.barBgMat.dispose(),this.barFgMat.dispose()}update(t,e){if(this.time+=t,this.flashT>0){this.flashT-=t;const L=Math.max(this.flashT/.18,0);this.matPrimary.emissive.setHex(11145489),this.matSecondary.emissive.setHex(6689041),this.matPrimary.emissiveIntensity=L*.9,this.matSecondary.emissiveIntensity=L*.9,this.flashT<=0&&(this.matPrimary.emissiveIntensity=0,this.matSecondary.emissiveIntensity=0)}if(e.invulnBlink?this.setVisible(Math.sin(this.time*24)>-.4):(!e.dead||e.deadT<3.1)&&!e.invulnBlink&&!e.dead&&this.setVisible(!0),e.dead){const L=Math.min(e.deadT/.45,1),A=1-Math.pow(1-L,3);this.root.rotation.x=-A*1.5;const T=Math.min(1,t*8);if(this.armL.pivot.rotation.x+=(-.7-this.armL.pivot.rotation.x)*T,this.armR.pivot.rotation.x+=(-.7-this.armR.pivot.rotation.x)*T,this.armL.pivot.rotation.z+=(.9-this.armL.pivot.rotation.z)*T,this.armR.pivot.rotation.z+=(-.9-this.armR.pivot.rotation.z)*T,this.legL.rotation.x+=(-.25-this.legL.rotation.x)*T,this.legR.rotation.x+=(.15-this.legR.rotation.x)*T,this.torsoPivot.rotation.x+=(0-this.torsoPivot.rotation.x)*T,e.deadT>2.2&&!this.deadFaded){const P=Math.max(0,1-(e.deadT-2.2)/.9);for(const W of this.mats)W.opacity=P;P<=.01&&(this.deadFaded=!0,this.setVisible(!1))}return}this.root.rotation.x+=(0-this.root.rotation.x)*Math.min(1,t*14);for(const L of this.mats)L.opacity<1&&(L.opacity=Math.min(1,L.opacity+t*4));const n=e.speedRatio||0,i=n>.02&&e.grounded!==!1;i&&(this.walkPhase+=t*(5+9*n));const r=i?Math.sin(this.walkPhase)*(.45+.35*n):0;let a=i?Math.abs(Math.cos(this.walkPhase))*.05*n:0;const o=Math.sin(this.time*1.9)*.02;let l=-r*.6,c=.09+o,h=r*.6,d=0,u=-(.09+o),p=r,g=-r,v=n*.16,f=0;if(e.grounded||(p=.5,g=-.35,l=-.4,h=-.3,v=.08),e.blocking&&(h=-1.35,d=.5,u=-.35,l=-.55,c=.75,v=.1),e.attack){let Bt=function(){return e.grounded?r*.6:-.3};var E=Bt;const L=e.attack.p,A=Ms(L/.32,0,1),T=Ms((L-.32)/.28,0,1),P=Ms((L-.6)/.4,0,1),W=1-(1-A)*(1-A),_=T*T*(3-2*T);let S,F,k,V,K,z,j,G,rt,at;e.attack.type==="slash"?(S=-1.1,F=-1.15,k=-1.2,j=-.55,rt=.06,V=-1.05,K=.75,z=-.25,G=.45,at=.12):e.attack.type==="slashR"?(S=-1.1,F=.95,k=-.3,j=.55,rt=.06,V=-1.05,K=-.75,z=-1.1,G=-.45,at=.12):(S=-2.75,F=0,k=-.15,j=0,rt=-.08,V=.55,K=0,z=-.15,G=0,at=.38);const ut={x:W*S+_*(V-S),y:W*F+_*(K-F),z:W*k+_*(z-k)};h=P<1?ut.x+P*(Bt()-ut.x):Bt(),d=P<1?ut.y+P*((d||0)-ut.y):d,u=P<1?ut.z+P*(-(.09+o)-ut.z):-(.09+o),f=P<1?(W*j+_*(G-j))*(1-P):0,v=P<1?W*rt+_*(at-rt):v,l=-.35+_*.25,c=.5,p*=.4,g*=.4}const m=e.dash||0;m>0&&(v+=m*.5,l+=m*.85,h+=m*.85,c+=m*.25,p-=m*.35,g+=m*.45);const b=e.land||0;b>0&&(a-=b*.14,p+=b*.55,g+=b*.55,v+=b*.18);const M=Math.min(1,t*(e.attack?28:14));this.armL.pivot.rotation.x+=(l-this.armL.pivot.rotation.x)*M,this.armL.pivot.rotation.z+=(c-this.armL.pivot.rotation.z)*M,this.armL.pivot.rotation.y+=(0-this.armL.pivot.rotation.y)*M,this.armR.pivot.rotation.x+=(h-this.armR.pivot.rotation.x)*M,this.armR.pivot.rotation.y+=(d-this.armR.pivot.rotation.y)*M,this.armR.pivot.rotation.z+=(u-this.armR.pivot.rotation.z)*M,this.legL.rotation.x+=(p-this.legL.rotation.x)*M,this.legR.rotation.x+=(g-this.legR.rotation.x)*M,this.torsoPivot.rotation.y+=(f-this.torsoPivot.rotation.y)*Math.min(1,t*20),this.torsoPivot.rotation.x+=(v-this.torsoPivot.rotation.x)*Math.min(1,t*12),this.torsoPivot.position.y=a,this.orbitGroup&&(this.orbitGroup.rotation.y+=t*2.3,this.orbitGroup.position.y=1.5+Math.sin(this.time*2.1)*.09)}}const ym=6.2,ll=9.8,Sm={slash:{key:"slash",label:"Horizontal Slash",dmg:20,range:3.15,arcCos:Math.cos(1.31),dur:.55,activeStart:.3,activeEnd:.52,cool:.14,lunge:2.2,fx:"h"},slashR:{key:"slashR",label:"Reverse Slash",dmg:20,range:3.15,arcCos:Math.cos(1.31),dur:.55,activeStart:.3,activeEnd:.52,cool:.14,lunge:2.2,fx:"h",mirror:!0},strong:{key:"strong",label:"Heavy Thrust",dmg:35,range:3.8,arcCos:Math.cos(.66),dur:.92,activeStart:.44,activeEnd:.64,cool:.34,lunge:3.6,fx:"v"}},cl=["slash","slashR","strong"],bm=5,Ir=new R;class Kl{constructor(t,{name:e,colors:n,pos:i,isPlayer:r=!1,isEnemy:a=!1,skin:o="knight",stats:l=null}){this.game=t,this.name=e,this.isPlayer=r,this.isEnemy=a,this.speedMul=1,this.stats=l||{name:e,kills:0,deaths:0},l||t.state.register(this.stats),this.pos=new R().copy(i),this.vel=new R,this.yaw=Math.atan2(-this.pos.x,-this.pos.z),this.radius=.45,this.height=1.8,this.grounded=!0,this.wasGrounded=!0,this.maxHp=100,this.hp=100,this.dead=!1,this.deadT=0,this.respawnT=0,this.invulnT=0,this.blocking=!1,this.blockStaggerT=0,this.attack=null,this.cooldownT=0,this.comboIdx=0,this.comboResetT=0,this.bufferedAttackT=0,this.dashT=0,this.dashCdT=0,this.landT=0,this.footAcc=0,this.rig=new Mm({name:e,primary:n.primary,secondary:n.secondary,accent:n.accent,isPlayer:r,skin:o}),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,t.scene.add(this.rig.root),t.combat.register(this)}fwd(t=Ir){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}canAct(){return!this.dead}canAttack(){return!this.dead&&!this.attack&&this.cooldownT<=0&&!this.blocking}requestAttack(){this.bufferedAttackT=.22}tryDash(t,e){if(this.dead||this.dashCdT>0||!this.grounded||this.blocking)return!1;const n=Math.hypot(t,e)||1;return this.vel.x=t/n*17,this.vel.z=e/n*17,this.vel.y=Math.max(this.vel.y,1.6),this.dashT=.22,this.dashCdT=1.05,this.game.audio.dash(),!0}setBlocking(t){this.blocking=!!t&&!this.dead&&!this.attack}startAttack(){if(!this.canAttack())return!1;const t=cl[this.comboIdx],e=Sm[t];this.attack={def:e,t:0,hit:new Set,swung:!1},this.comboIdx=(this.comboIdx+1)%cl.length,this.comboResetT=1,this.bufferedAttackT=0;const n=this.fwd(Ir);return this.vel.x+=n.x*e.lunge,this.vel.z+=n.z*e.lunge,!0}beginAttackIfReady(){this.bufferedAttackT>0&&this.canAttack()&&this.startAttack()}updateCommon(t){if(this.cooldownT>0&&(this.cooldownT-=t),this.invulnT>0&&(this.invulnT-=t),this.blockStaggerT>0&&(this.blockStaggerT-=t),this.bufferedAttackT>0&&(this.bufferedAttackT-=t),this.dashCdT>0&&(this.dashCdT-=t),this.landT>0&&(this.landT=Math.max(0,this.landT-t)),this.comboResetT>0&&(this.comboResetT-=t,this.comboResetT<=0&&(this.comboIdx=0)),this.dead)return this.deadT+=t,!this.isPlayer&&this.respawnT>0&&(this.respawnT-=t,this.respawnT<=0&&this.onRespawnReady()),this.rig.update(t,{dead:!0,deadT:this.deadT,speedRatio:0}),!1;if(this.attack){const e=this.attack,n=e.def;if(e.t+=t,!e.swung&&e.t>=n.activeStart){e.swung=!0;const i=n.key==="strong"?2:n.key==="slashR"?1:0;this.game.audio.swing(i),this.game.combat.notifyAttack(this),this.game.combat.spawnSlashFX(this,n)}e.t>=n.activeStart&&e.t<=n.activeEnd&&this.game.combat.sweep(this,e),e.t>=n.dur&&(this.attack=null,this.cooldownT=n.cool)}return this.beginAttackIfReady(),!0}applyMovement(t,e){const n=e.moveDir;if(this.dashT>0)this.dashT-=t;else{let a=(e.sprint?ll:ym)*this.speedMul;this.blocking?a*=.48:this.blockStaggerT>0?a*=.4:this.attack&&(a*=.35);const o=n.x*a,l=n.z*a,c=Math.min(1,(this.grounded?11:3.2)*t);this.vel.x+=(o-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c}e.jump&&this.grounded&&(this.vel.y=8.6,this.grounded=!1,this.game.audio.jump()),this.vel.y-=22*t,this.pos.addScaledVector(this.vel,t);const i=this.game.collision.groundHeightAt(this.pos.x,this.pos.z,this.pos.y);this.pos.y<=i+.001&&this.vel.y<=0?(!this.wasGrounded&&this.vel.y<-8&&(this.game.audio.land(),this.landT=.28),this.pos.y=i,this.vel.y=0,this.grounded=!0):this.grounded=!1,this.game.collision.resolveEntity(this);const r=Math.hypot(this.vel.x,this.vel.z);if(this.grounded&&r>1.4){this.footAcc+=r*t;const a=e.sprint?2.7:2.15;this.footAcc>a&&(this.footAcc=0,this.game.audio.footstep(e.sprint))}this.wasGrounded=this.grounded,this.rig.root.position.copy(this.pos),this.rig.setHealthBar(this.hp/this.maxHp)}takeDamage(t,e,n){if(this.dead||this.invulnT>0)return null;const i=this.pos.x-e.pos.x,r=this.pos.z-e.pos.z,a=Math.hypot(i,r)||1,o=i/a,l=r/a,c=this.fwd(Ir),h=c.x*-o+c.z*-l,d=this.blocking&&h>-.15&&!this.attack,u=d?bm:t;this.hp=Math.max(0,this.hp-u),this.rig.hitFlash(),d||this.rig.setHealthBar(this.hp/this.maxHp);const p=d?2.4:4.2;return this.vel.x+=o*p,this.vel.z+=l*p,!d&&this.grounded&&(this.vel.y=Math.min(this.vel.y+2.2,4)),d&&(this.blockStaggerT=.28),this.hp<=0&&this.die(e),{dmg:u,blocked:d}}die(t){this.dead=!0,this.stats.deaths++,this.attack=null,this.blocking=!1,this.bufferedAttackT=0,this.deadT=0,this.respawnT=this.isPlayer?3.2:4.5,this.onReleaseSlot&&this.onReleaseSlot(),this.game.audio.death(),this.game.combat.deathFX(this),t&&t!==this&&t.stats&&(t.stats.kills++,t.isPlayer&&(this.game.hud.showElimination(),this.game.audio.elimination(),this.game.addCoins(50))),this.isPlayer&&(this.game.hud.setHP(0,this.maxHp),this.game.onPlayerDied())}onRespawnReady(){}respawn(t){this.pos.copy(t),this.vel.set(0,0,0),this.hp=this.maxHp,this.dead=!1,this.deadT=0,this.respawnT=0,this.invulnT=1.4,this.cooldownT=.3,this.attack=null,this.blocking=!1,this.blockStaggerT=0,this.comboIdx=0,this.comboResetT=0,this.bufferedAttackT=0,this.grounded=!0,this.rig.reset(),this.rig.root.position.copy(this.pos)}syncRigAnim(t,e={}){const n=Math.hypot(this.vel.x,this.vel.z);this.rig.update(t,{speedRatio:Math.min(1,n/ll),grounded:this.grounded,blocking:this.blocking,attack:this.attack?{type:this.attack.def.key,p:this.attack.t/this.attack.def.dur}:null,invulnBlink:this.invulnT>0,dash:this.dashT>0?this.dashT/.22:0,land:this.landT>0?this.landT/.28:0,...e})}dispose(){this.game.scene.remove(this.rig.root),this.rig.dispose()}}const hl=new R,ui=new R,Em=.28;class dl extends Kl{constructor(t,e){super(t,{name:"You",isPlayer:!0,colors:le[t.state.settings.skin]||le.knight,pos:e}),this.tapTimes={}}applySkin(t){const e=le[t]?t:"knight";this.game.state.settings.skin=e,this.rig.setSkin(e)}idle(t){this.yaw+=t*.35,this.rig.setYaw(this.yaw),this.rig.update(t,{speedRatio:0,grounded:!0,blocking:!1,attack:null,invulnBlink:!1,dash:0,land:0})}handleDashTaps(t){const e=performance.now()/1e3,n=["KeyW","KeyS","KeyA","KeyD"];for(const i of n){if(!t.pressed.has(i))continue;const r=this.tapTimes[i];if(this.tapTimes[i]=e,r===void 0||e-r>=Em)continue;const a=Math.sin(this.yaw),o=Math.cos(this.yaw);if(i==="KeyW"?ui.set(a,0,o):i==="KeyS"?ui.set(-a,0,-o):i==="KeyA"?ui.set(o,0,-a):ui.set(-o,0,a),this.tryDash(ui.x,ui.z))break}}update(t){const e=this.game.input,n=this.game.cameraRig.yaw;if(!this.updateCommon(t)){this.rig.setYaw(this.yaw);return}const r=e.keys;let a=(r.KeyD?1:0)-(r.KeyA?1:0),o=(r.KeyW?1:0)-(r.KeyS?1:0);const l=Math.hypot(a,o);l>1&&(a/=l,o/=l);const c=Math.sin(n),h=Math.cos(n);hl.set(c*o-h*a,0,h*o+c*a);const d=!!(r.ShiftLeft||r.ShiftRight),u=e.buttons.right&&!this.attack;this.setBlocking(u),e.pressed.has("attack")&&this.requestAttack(),this.handleDashTaps(e);const p=e.pressed.has("jump");this.applyMovement(t,{moveDir:hl,sprint:d,jump:p}),this.yaw=n,this.rig.setYaw(this.yaw),this.syncRigAnim(t)}}const wm={aggressive:{detect:30,engage:2.8,keep:1.7,strafeAmt:.35,blockChance:.18,cd:[.9,1.6],speedMul:1.06},balanced:{detect:26,engage:2.9,keep:2.5,strafeAmt:.6,blockChance:.45,cd:[1.4,2.2],speedMul:1},defensive:{detect:24,engage:3.2,keep:3.2,strafeAmt:.85,blockChance:.72,cd:[1.9,3],speedMul:.94}},ul=["aggressive","balanced","defensive"],Dr=["dark","shadow","wolf","iron","storm","blaze","ghost","night","razor","silent","toxic","frost","wild","cyber","lucky","angry","epic","sneaky","mad","pro","salty","hyper"],ys=["john","slayer","blade","x","king","lord","hunter","reaper","ninja","gamer","max","sam","alex","rex","kai","fox","bear","mann","dilina","wow"];function Tm(s){for(let e=0;e<25;e++){let n;const i=Math.random();if(i<.35?n=Nn(Dr)+Nn(ys):i<.6?n=Nn(Dr)+Nn(ys)+Math.floor(Math.random()*100):i<.8?n=Nn(ys)+"_"+Nn(Dr):n=Nn(ys)+Math.floor(Math.random()*1e3),!s.has(n.toLowerCase()))return s.add(n.toLowerCase()),n}const t="player_"+Math.floor(Math.random()*1e5);return s.add(t.toLowerCase()),t}const we=new R;class Ur extends Kl{constructor(t,e,n,i,r="knight",a=!1){super(t,{name:Tm(t.usedNames||(t.usedNames=new Set)),isEnemy:!0,colors:i,pos:n,skin:r}),this.elite=!!a;const o=ul[e%ul.length];this.pKey=o,this.elite?this.p={detect:42,engage:3,keep:2,strafeAmt:.55,blockChance:.78,cd:[.8,1.4],speedMul:1.1}:this.p=wm[o],this.speedMul=this.p.speedMul,this.state="wander",this.wanderTarget=new R().copy(this.pos),this.thinkT=nt(.5,3),this.reactT=0,this.strafeDir=Math.random()<.5?-1:1,this.strafeT=nt(1,2.5),this.attackTimer=nt(.8,2.2),this.blockT=0,this.blockCd=0,this.dashTimer=nt(2,5),this.dodgeJumpT=0,this._stuckT=0,this.slotHeld=!1,this.target=null,this.retargetT=0,this.retaliateTarget=null,this.retaliateT=0}acquireTarget(){const t=[];for(const e of this.game.combat.fighters)if(e!==this&&!e.dead){const n=e.pos.x-this.pos.x,i=e.pos.z-this.pos.z,r=n*n+i*i;r<900&&t.push({f:e,d2:r})}if(t.length===0){this.target=null;return}t.sort((e,n)=>e.d2-n.d2),Math.random()<.75||t.length===1?this.target=t[0].f:this.target=t[Math.floor(Math.random()*Math.min(t.length,3))].f}takeDamage(t,e,n){const i=super.takeDamage(t,e,n);return i&&e&&e!==this&&!e.dead&&(this.retaliateTarget=e,this.retaliateT=6,this.state==="wander"&&(this.state="chase",this.reactT=nt(.1,.5))),i}releaseSlot(){this.slotHeld&&(this.game.releaseSlot(this),this.slotHeld=!1)}onReleaseSlot(){this.releaseSlot()}onThreat(t){if(!this.dead)if(this.blockCd<=0&&Math.random()<this.p.blockChance)this.blockT=nt(.5,.95),this.blockCd=this.elite?1.2:1.8;else if(this.elite&&Math.random()<.35)this.dodgeJumpT=.25;else if(Math.random()<.35&&t){const e=this.pos.x-t.pos.x,n=this.pos.z-t.pos.z;this.tryDash(e,n)}else this.strafeDir*=-1}pickWanderTarget(){for(let t=0;t<8;t++){const e=Math.random()*Math.PI*2,n=nt(12,40),i=this.pos.x+Math.sin(e)*n,r=this.pos.z+Math.cos(e)*n;if(Math.abs(i)<42&&Math.abs(r)<42){this.wanderTarget.set(i,0,r);break}}this.thinkT=nt(4,9)}update(t){if(!this.updateCommon(t))return;const n=this.game,i=n.state.phase==="playing";this.retaliateT>0&&(this.retaliateT-=t,this.retaliateT<=0&&(this.retaliateTarget=null)),this.retargetT-=t;const r=!this.target||this.target.dead;(i&&r&&this.retargetT<=0||i&&r&&this.state!=="wander")&&(this.retaliateTarget&&!this.retaliateTarget.dead?this.target=this.retaliateTarget:this.acquireTarget(),this.retargetT=nt(2.5,4.5)),i||(this.target=null,this.releaseSlot(),this.state!=="wander"&&(this.state="wander"));const a=this.target,o=!!a&&!a.dead&&i,l=o?a.pos.x-this.pos.x:0,c=o?a.pos.z-this.pos.z:0,h=o?Math.hypot(l,c):1/0;we.set(0,0,0);let d=!1,u=null;switch(this.dashTimer-=t,this.state){case"wander":{this.thinkT-=t;const m=this.wanderTarget.x-this.pos.x,b=this.wanderTarget.z-this.pos.z,M=Math.hypot(m,b);M<2||this.thinkT<=0?this.pickWanderTarget():(we.set(m/M,0,b/M).multiplyScalar(.72),u=Math.atan2(we.x,we.z)),o&&h<this.p.detect&&(this.state="chase",this.reactT=nt(.2,.8),n.audio.tone({f0:180,f1:140,dur:.12,type:"square",gain:.05}));break}case"chase":{if(!o||h>42){this.releaseSlot(),this.state="wander";break}u=Math.atan2(l,c),d=h>6,we.set(l/h,0,c/h),this.reactT>0&&(this.reactT-=t,we.multiplyScalar(.4)),h<this.p.engage+.5&&(this.elite?(this.state="combat",this.attackTimer=Math.min(this.attackTimer,.3)):n.requestSlot(this)?(this.slotHeld=!0,this.state="combat",this.attackTimer=nt(.15,.5)):this.state="circle");break}case"circle":{if(!o||h>40){this.state="wander";break}u=Math.atan2(l,c),this.strafeT-=t,this.strafeT<=0&&(this.strafeDir*=-1,this.strafeT=nt(1.2,2.6));const m=this.p.engage+2.2;let b=0;if(h>m+.6?b=.55:h<m-.6&&(b=-.45),we.set(-c/h*this.strafeDir*.85+l/h*b,0,l/h*this.strafeDir*.85+c/h*b),this.dashTimer<=0&&h>m+1.5&&(Math.random()<.5&&this.tryDash(l/h,c/h),this.dashTimer=nt(3,5)),h<this.p.engage+.3&&this.attackTimer<=0&&!this.attack){const M=Math.sin(this.yaw),E=Math.cos(this.yaw);l/h*M+c/h*E>.5&&this.startAttack()&&(this.attackTimer=nt(this.p.cd[0],this.p.cd[1])*1.8)}o&&h<this.p.engage+1.6&&n.requestSlot(this)&&(this.slotHeld=!0,this.state="combat",this.attackTimer=nt(.1,.45));break}case"combat":{if(!o){this.releaseSlot(),this.state="wander";break}u=Math.atan2(l,c),this.attackTimer-=t,this.strafeT-=t,this.strafeT<=0&&(Math.random()<.7&&(this.strafeDir*=-1),this.strafeT=nt(.8,2));let m=0;if(h>this.p.keep+.5?m=1:h<this.p.keep-.5&&(m=-.8),we.set(l/h*m+-c/h*this.strafeDir*this.p.strafeAmt,0,c/h*m+l/h*this.strafeDir*this.p.strafeAmt),d=h>this.p.keep+3,this.dashTimer<=0&&h>this.p.engage+1.5&&(Math.random()<(this.elite?.7:.5)&&this.tryDash(l/h,c/h),this.dashTimer=nt(2.8,4.5)),!this.attack&&this.attackTimer<=0&&h<this.p.engage+.5){const b=Math.sin(this.yaw),M=Math.cos(this.yaw),E=l/h*b+c/h*M,L=this.elite?.93:.5;E>L&&this.startAttack()&&(this.attackTimer=nt(this.p.cd[0],this.p.cd[1]))}h>this.p.engage+7&&(this.releaseSlot(),this.state="chase");break}}for(const m of n.combat.fighters){if(m===this||m.dead)continue;const b=this.pos.x-m.pos.x,M=this.pos.z-m.pos.z,E=b*b+M*M,L=1.7;if(E<L*L&&E>1e-4){const A=Math.sqrt(E),T=(L-A)/L*1.4;we.x+=b/A*T,we.z+=M/A*T}}const p=we.length();p>1&&we.divideScalar(p),this.blockT-=t,this.blockCd-=t;const g=this.blockT>0;this.setBlocking(this.blockT>0),this.elite&&g&&this.blockT<=0&&o&&h<this.p.engage+.5&&!this.attack&&(this.attackTimer=Math.min(this.attackTimer,.1));let v=!1;this.dodgeJumpT>0&&(this.dodgeJumpT-=t,this.grounded&&(v=!0)),o&&this.grounded&&h<5&&a.pos.y>this.pos.y+.6&&(v=!0),this.state==="combat"&&this.grounded&&Math.random()<t*.2&&(v=!0);const f=Math.hypot(this.vel.x,this.vel.z);this.grounded&&p>.4&&f<.6?(this._stuckT=(this._stuckT||0)+t,this._stuckT>.45&&(v=!0,this._stuckT=0)):this._stuckT=0,this.applyMovement(t,{moveDir:we,sprint:d,jump:v}),u!==null?this.yaw=ol(this.yaw,u,10,t):p>.05&&(this.yaw=ol(this.yaw,Math.atan2(we.x,we.z),7,t)),this.rig.setYaw(this.yaw),this.syncRigAnim(t,{})}onRespawnReady(){const t=[];this.game.player&&t.push({pos:this.game.player.pos,radius:14});for(const e of this.game.enemies)e!==this&&!e.dead&&t.push({pos:e.pos,radius:6});this.respawn(this.game.spawn.getSpawn(t))}respawn(t){super.respawn(t),this.target=null,this.retaliateTarget=null,this.state="wander",this.thinkT=nt(.5,2)}}class Am{constructor(t,e,n){this.cam=t,this.input=e,this.collision=n,this.yaw=0,this.pitch=.34,this.dist=5.6,this.curDist=5.6,this.sensitivity=1,this.pivot=new R,this.hasPivot=!1,this.shake=0,this.ray=new dm,this.ray.far=60,this.menuAngle=.6,this._back=new R,this._desired=new R}snap(t){this.pivot.copy(t),this.pivot.y+=1.65,this.hasPivot=!0}addShake(t){this.shake=Math.min(this.shake+t,.9)}update(t,e,n){if(n==="menu"){this.menuAngle+=t*.06;const h=54;this.cam.position.set(Math.sin(this.menuAngle)*h,26,Math.cos(this.menuAngle)*h),this.cam.lookAt(0,2,0);return}if(n==="preview"){const h=e?e.x:0,d=e?e.z:0,u=.7,p=4.6;this.cam.position.set(h+Math.sin(u)*p,2,d+Math.cos(u)*p),this.cam.lookAt(h,1.25,d);return}if(n==="mapPreview"){this.cam.position.set(36,22,36),this.cam.lookAt(0,1,0);return}if(this.input.locked){const h=this.input.consumeDelta();this.yaw-=h.dx*.0023*this.sensitivity,this.pitch=Math.max(-.55,Math.min(1.35,this.pitch+h.dy*.0023*this.sensitivity))}else this.input.consumeDelta();if(!this.hasPivot&&e&&this.snap(e),e){const h=1-Math.exp(-17*t);this.pivot.x+=(e.x-this.pivot.x)*h,this.pivot.y+=(e.y+1.65-this.pivot.y)*h,this.pivot.z+=(e.z-this.pivot.z)*h}let i=5.6;n==="dead"&&(this.yaw+=t*.55,this.pitch+=(.42-this.pitch)*Math.min(1,t*2),i=8);const r=Math.cos(this.pitch);this._back.set(-Math.sin(this.yaw)*r,Math.sin(this.pitch),-Math.cos(this.yaw)*r).normalize();let a=i;if(this.collision.occluders.length>0){this.ray.set(this.pivot,this._back),this.ray.far=i+.4;const h=this.ray.intersectObjects(this.collision.occluders,!1);h.length>0&&(a=Math.max(1.15,h[0].distance-.35))}a<this.curDist?this.curDist=a:this.curDist+=(a-this.curDist)*(1-Math.exp(-5*t)),this.shake*=Math.exp(-6.5*t);const o=this.shake,l=(Math.random()-.5)*o,c=(Math.random()-.5)*o;this._desired.copy(this.pivot).addScaledVector(this._back,this.curDist),this.cam.position.set(this._desired.x+l,Math.max(.35,this._desired.y+c),this._desired.z+l),this.cam.lookAt(this.pivot.x,this.pivot.y+.15+c,this.pivot.z)}}class fl{constructor(t,e){this.scene=t,this.theme=e,this.group=new oe,t.add(this.group),t.background=new Ft(e.sky),t.fog=new za(e.fogColor,e.fogNear,e.fogFar);const n=new sm(e.hemiSky,e.hemiGround,e.hemiI);this.group.add(n),this.group.add(new cm(e.ambColor,e.ambI));const i=new lm(e.sunColor,e.sunI);i.position.set(...e.sunPos),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.left=-78,i.shadow.camera.right=78,i.shadow.camera.top=78,i.shadow.camera.bottom=-78,i.shadow.camera.near=5,i.shadow.camera.far=220,i.shadow.bias=-4e-4,i.shadow.normalBias=.03,this.group.add(i),this.sun=i;const r=new Os(300,48),a=new ct(r,new Qo({color:e.grass}));a.rotation.x=-Math.PI/2,a.position.y=-.08,this.group.add(a);const o=new Qo({color:e.mountain,flatShading:!0});for(let c=0;c<14;c++){const h=c/14*Math.PI*2+Math.sin(c*7.3)*.2,d=175+Math.sin(c*13.1)*35,u=38+Math.abs(Math.sin(c*5.7))*48,p=26+Math.abs(Math.cos(c*3.3))*22,g=new ct(new Ye(p,u,5),o);g.position.set(Math.sin(h)*d,u/2-4,Math.cos(h)*d),g.rotation.y=Math.random()*Math.PI,this.group.add(g)}const l=new bn({color:16777215,transparent:!0,opacity:e.cloud,fog:!1});this.cloudGroup=new oe;for(let c=0;c<10;c++){const h=new oe,d=3+Math.floor(Math.random()*3);for(let g=0;g<d;g++){const v=6+Math.random()*10,f=new ct(new Wn(v,7,5),l);f.position.set(g*v*.8-d*v*.4,Math.random()*v*.3,Math.random()*v*.5),h.add(f)}const u=Math.random()*Math.PI*2,p=120+Math.random()*90;h.position.set(Math.sin(u)*p,60+Math.random()*35,Math.cos(u)*p),this.cloudGroup.add(h)}if(this.group.add(this.cloudGroup),e.stars){const h=new Float32Array(1650);for(let p=0;p<550;p++){const g=Math.random()*Math.PI*2,v=Math.acos(Math.random()*.85),f=240;h[p*3]=Math.sin(v)*Math.cos(g)*f,h[p*3+1]=Math.cos(v)*f+10,h[p*3+2]=Math.sin(v)*Math.sin(g)*f}const d=new ve;d.setAttribute("position",new be(h,3));const u=new Ga(d,new Hs({color:13623551,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9}));u.frustumCulled=!1,this.group.add(u)}if(e.moon){const c=new ct(new Os(14,32),new bn({color:15002879,fog:!1}));c.position.set(-120,85,-160),c.lookAt(0,0,0),this.group.add(c);const h=document.createElement("canvas");h.width=h.height=64;const d=h.getContext("2d"),u=d.createRadialGradient(32,32,4,32,32,30);u.addColorStop(0,"rgba(190,210,255,0.55)"),u.addColorStop(1,"rgba(190,210,255,0)"),d.fillStyle=u,d.fillRect(0,0,64,64);const p=new Vs(h),g=new Hi(new _i({map:p,transparent:!0,blending:ln,depthWrite:!1,fog:!1}));g.scale.setScalar(70),g.position.copy(c.position),this.group.add(g)}}update(t){this.cloudGroup.rotation.y+=t*.004}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.dispose(),n.dispose()}}),this.scene.remove(this.group),this.scene.fog=null}}const vn={citadel:{id:"citadel",name:"Sunrise Citadel",desc:"Classic stone arena at high noon",sky:10468569,fogColor:11125469,fogNear:70,fogFar:235,hemiSky:12572912,hemiGround:5522734,hemiI:.85,sunColor:16771005,sunI:1.5,sunPos:[45,70,30],ambColor:3356746,ambI:.28,grass:5861695,mountain:5333630,cloud:.85,stars:!1,moon:!1,torchColor:16751164,torchI:24,particles:null,t:{floor:16777215,wall:16777215,merlon:7235418,tower:7827551,roof:5259566,pillar:9077364,cap:7235418,platform:9603707,rock:8682864,trunk:6112294,leafA:4025140,leafB:5078842}},moonlight:{id:"moonlight",name:"Moonlight Hollow",desc:"Haunted forest beneath a giant moon",layout:"forest",sky:725030,fogColor:1054768,fogNear:55,fogFar:200,hemiSky:3820154,hemiGround:790302,hemiI:.55,sunColor:12570879,sunI:.85,sunPos:[-40,60,-30],ambColor:1712960,ambI:.5,grass:2767442,mountain:1713216,cloud:.22,stars:!0,moon:!0,torchColor:9416959,torchI:30,particles:{color:10475775,size:.16,vy:.35,drift:.5},t:{floor:7768248,wall:6978216,merlon:5925528,tower:8030904,roof:3819118,pillar:9083584,cap:6978216,platform:9083592,rock:7372976,trunk:3819106,leafA:3824234,leafB:4876922}},ember:{id:"ember",name:"Ember Hollow",desc:"Volcanic wasteland of lava and ash",layout:"ember",sky:1707274,fogColor:2757132,fogNear:50,fogFar:185,hemiSky:6696990,hemiGround:1707016,hemiI:.62,sunColor:16747082,sunI:.95,sunPos:[30,50,-40],ambColor:4200976,ambI:.5,grass:3810328,mountain:2757648,cloud:.18,stars:!1,moon:!1,torchColor:16733474,torchI:30,particles:{color:16742195,size:.17,vy:1.1,drift:.7},t:{floor:11569784,wall:10123882,merlon:8018506,tower:9071194,roof:4860446,pillar:10518640,cap:8018506,platform:11044986,rock:9071194,trunk:4861984,leafA:6965808,leafB:8017464}},frost:{id:"frost",name:"Frostfang Keep",desc:"Frozen village under a pale sun",layout:"frost",sky:13623538,fogColor:14478072,fogNear:60,fogFar:210,hemiSky:14675711,hemiGround:9082792,hemiI:.9,sunColor:15397631,sunI:1.3,sunPos:[-30,65,40],ambColor:4872816,ambI:.3,grass:14214382,mountain:9083570,cloud:.9,stars:!1,moon:!1,torchColor:16757866,torchI:26,particles:{color:16777215,size:.15,vy:-1.3,drift:1.1},t:{floor:14477554,wall:13162728,merlon:11584212,tower:12636384,roof:9085624,pillar:13688040,cap:11584212,platform:13951212,rock:12110040,trunk:6969930,leafA:10141900,leafB:12114144}},golden:{id:"golden",name:"Golden Oasis",desc:"Desert market oasis at golden hour",layout:"oasis",sky:15911056,fogColor:15251584,fogNear:65,fogFar:220,hemiSky:16769200,hemiGround:6967344,hemiI:.8,sunColor:16756832,sunI:1.6,sunPos:[60,45,-20],ambColor:4864040,ambI:.32,grass:13150314,mountain:9070664,cloud:.5,stars:!1,moon:!1,torchColor:16752688,torchI:26,particles:{color:16769184,size:.14,vy:.25,drift:.9},t:{floor:15255712,wall:14200968,merlon:12621928,tower:13674616,roof:9068600,pillar:14729368,cap:12621928,platform:14992544,rock:13150328,trunk:8018484,leafA:5929530,leafB:6982210}}};function pl(s,t,e,n=256){const i=document.createElement("canvas");i.width=i.height=n;const r=i.getContext("2d");r.fillStyle=s,r.fillRect(0,0,n,n);const a=n/e;for(let l=0;l<e;l++)for(let c=0;c<e;c++){const h=nt(-14,14),d=h>0?255:0;if(r.fillStyle=`rgba(${d},${d},${d},${Math.abs(h)/100})`,r.fillRect(c*a+1,l*a+1,a-2,a-2),Math.random()<.25){r.fillStyle="rgba(0,0,0,0.08)";for(let u=0;u<8;u++)r.fillRect(c*a+Math.random()*a,l*a+Math.random()*a,2,2)}}r.strokeStyle=t,r.lineWidth=3;for(let l=0;l<=e;l++)r.beginPath(),r.moveTo(l*a,0),r.lineTo(l*a,n),r.stroke(),r.beginPath(),r.moveTo(0,l*a),r.lineTo(n,l*a),r.stroke();const o=new Vs(i);return o.wrapS=o.wrapT=Ps,o.colorSpace=Oe,o.anisotropy=4,o}function Rm(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,240,180,1)"),e.addColorStop(.35,"rgba(255,170,60,0.9)"),e.addColorStop(.7,"rgba(255,90,20,0.35)"),e.addColorStop(1,"rgba(255,60,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Vs(s);return n.colorSpace=Oe,n}class ml{constructor(t,e,n=vn.citadel){this.scene=t,this.collision=e,this.theme=n,this.t=n.t,this.torches=[],this.group=new oe,t.add(this.group),this.buildFloor(),this.buildWalls(),this.buildTowers();const i=n.layout||"citadel";i==="forest"?this.buildForest():i==="ember"?this.buildEmber():i==="frost"?this.buildFrost():i==="oasis"?this.buildOasis():(this.buildPillars(),this.buildPlatforms(),this.buildRocks(),this.buildTrees()),this.buildTorches(),this.buildSpawnMarkers(),this.buildMotes()}buildFloor(){const t=pl("#8d8577","#57503f",4);t.repeat.set(13,13);const e=new Dt({map:t,roughness:.95,color:this.t.floor}),n=new ct(new Ot(104,1.2,104),e);n.position.y=-.6,n.receiveShadow=!0,this.group.add(n);const i=new bn({color:4866612,transparent:!0,opacity:.55}),r=new ct(new vi(6.2,7.5,48),i);r.rotation.x=-Math.PI/2,r.position.y=.02,this.group.add(r);const a=new ct(new vi(2.1,2.9,40),i);a.rotation.x=-Math.PI/2,a.position.y=.02,this.group.add(a)}buildWalls(){const t=pl("#7b7466","#4c463a",3);t.repeat.set(16,1.4);const e=new Dt({map:t,roughness:.95,color:this.t.wall}),n=8,i=[{x:0,z:-49.75,w:104,d:2.5},{x:0,z:49.75,w:104,d:2.5},{x:-49.75,z:0,w:2.5,d:104},{x:49.75,z:0,w:2.5,d:104}];for(const h of i){const d=new ct(new Ot(h.w,n,h.d),e);d.position.set(h.x,n/2-.05,h.z),d.castShadow=!0,d.receiveShadow=!0,this.group.add(d),this.collision.addOccluder(d)}const r=new Ot(1.7,1.3,1.1),a=new Dt({color:this.t.merlon,roughness:1}),o=new jo(r,a,26*4),l=new Yt;let c=0;for(let h=0;h<4;h++)for(let d=0;d<26;d++){const u=-49+d*4+h%2*2;let p,g;h===0?(p=u,g=-51):h===1?(p=u,g=51):h===2?(p=-51,g=u):(p=51,g=u),l.makeTranslation(p,8.6,g),o.setMatrixAt(c++,l)}o.castShadow=!0,this.group.add(o)}buildTowers(){const t=new Dt({color:this.t.tower,roughness:.95}),e=new Dt({color:this.t.roof,roughness:.9}),n=[[-49,-49],[49,-49],[-49,49],[49,49]],i=[3498176,10105394,13214247,3371086];n.forEach(([r,a],o)=>{const l=new ct(new _e(4.4,4.9,13,10),t);l.position.set(r,6.45,a),l.castShadow=!0,this.group.add(l),this.collision.addOccluder(l),this.collision.addBox(r-4.4,r+4.4,a-4.4,a+4.4,0,13);const c=new ct(new Ye(5.1,3.6,10),e);c.position.set(r,14.8,a),c.castShadow=!0,this.group.add(c);const h=new ct(new wi(1.9,4.4),new Dt({color:i[o],roughness:.85,side:Ke}));h.position.set(r*.906,8.4,a*.906),h.lookAt(0,8.4,0),this.group.add(h)})}buildPillars(t=8){const e=new Dt({color:this.t.pillar,roughness:.92}),n=new Dt({color:this.t.cap,roughness:.95});this.pillarPositions=[];for(let i=0;i<t;i++){const r=i/t*Math.PI*2+Math.PI/8,a=26,o=Math.sin(r)*a,l=Math.cos(r)*a;this.pillarPositions.push([o,l]);const c=new ct(new _e(.95,1.05,7,9),e);c.position.set(o,3.5,l),c.castShadow=!0,this.group.add(c),this.collision.addOccluder(c),this.collision.addBox(o-1,o+1,l-1,l+1,0,7);const h=new ct(new Ot(2.3,.5,2.3),n);h.position.set(o,7.25,l),h.castShadow=!0,this.group.add(h)}}buildPlatforms(){const t=new Dt({color:this.t.platform,roughness:.95}),e=[[24,-24],[-24,24]];for(const[n,i]of e){const r=new ct(new Ot(5.5,1,5.5),t);r.position.set(n,.5,i),r.castShadow=!0,r.receiveShadow=!0,this.group.add(r),this.collision.addOccluder(r),this.collision.addBox(n-2.75,n+2.75,i-2.75,i+2.75,0,1);const a=n-Math.sign(n)*4,o=i-Math.sign(i)*4,l=new ct(new Ot(2.6,.5,2.6),t);l.position.set(a,.25,o),l.receiveShadow=!0,this.group.add(l),this.collision.addBox(a-1.3,a+1.3,o-1.3,o+1.3,0,.5)}}buildRocks(){const t=new Bs(1,0),e=new Dt({color:this.t.rock,roughness:1,flatShading:!0}),n=new jo(t,e,22),i=new Yt,r=new Ai,a=new He,o=new R,l=new R;let c=0,h=0;for(;c<22&&h++<500;){const d=Math.random()*Math.PI*2,u=nt(13,43),p=Math.sin(d)*u,g=Math.cos(d)*u;if(Math.abs(Math.abs(p)-Math.abs(g))<6&&Math.abs(p)>20)continue;const v=nt(.55,1.7);if(o.set(p,v*.42,g),a.set(nt(0,3),nt(0,3),nt(0,3)),r.setFromEuler(a),l.set(v*nt(.8,1.2),v*nt(.65,1),v*nt(.8,1.2)),i.compose(o,r,l),n.setMatrixAt(c,i),v>1.15){const f=v*.85;this.collision.addBox(p-f,p+f,g-f,g+f,0,v*.84)}c++}n.castShadow=!0,n.receiveShadow=!0,this.group.add(n)}buildTrees(){const t=new Dt({color:this.t.trunk,roughness:1}),e=new Dt({color:this.t.leafA,roughness:1,flatShading:!0}),n=new Dt({color:this.t.leafB,roughness:1,flatShading:!0}),i=(r,a,o)=>{const l=new oe,c=new ct(new _e(.32*o,.42*o,3.4*o,7),t);c.position.y=1.7*o,c.castShadow=!0,l.add(c);const h=new ct(new Ye(2*o,3.2*o,8),e);h.position.y=4.2*o,h.castShadow=!0;const d=new ct(new Ye(1.45*o,2.5*o,8),n);d.position.y=6*o,d.castShadow=!0,l.add(h,d),l.position.set(r,0,a),l.rotation.y=Math.random()*Math.PI,this.group.add(l),Math.abs(r)<46&&Math.abs(a)<46&&(this.collision.addOccluder(c),this.collision.addBox(r-.45*o,r+.45*o,a-.45*o,a+.45*o,0,3.4*o))};i(30,-30,1.15),i(-30,30,1.05),i(31,31,1.25),i(-31,-31,.95);for(let r=0;r<20;r++){const a=Math.random()*Math.PI*2,o=nt(58,74);i(Math.sin(a)*o,Math.cos(a)*o,nt(.9,1.6))}}addTreeAt(t,e,n,i,r,a,o){const l=new oe,c=new ct(new _e(.32*n,.42*n,3.4*n,7),i);c.position.y=1.7*n,c.castShadow=!0,l.add(c);const h=new ct(new Ye(2*n,3.2*n,8),r);h.position.y=4.2*n,h.castShadow=!0;const d=new ct(new Ye(1.45*n,2.5*n,8),a);d.position.y=6*n,d.castShadow=!0,l.add(h,d),l.position.set(t,0,e),l.rotation.y=Math.random()*Math.PI,this.group.add(l),o&&(this.collision.addOccluder(c),this.collision.addBox(t-.45*n,t+.45*n,e-.45*n,e+.45*n,0,3.4*n))}buildForest(){const t=new Dt({color:this.t.trunk,roughness:1}),e=new Dt({color:this.t.leafA,roughness:1,flatShading:!0}),n=new Dt({color:this.t.leafB,roughness:1,flatShading:!0}),i=[[10,4],[-12,8],[16,-14],[-6,-16],[22,10],[-20,-6],[4,20],[-16,18],[28,-4],[-26,12],[12,26],[-8,-26]];for(const[o,l]of i)this.addTreeAt(o+nt(-2,2),l+nt(-2,2),nt(.95,1.35),t,e,n,!0);const r=new _e(.5,.62,.55,8);for(let o=0;o<6;o++){const l=Math.random()*Math.PI*2,c=nt(10,38),h=Math.sin(l)*c,d=Math.cos(l)*c,u=new ct(r,t);u.position.set(h,.27,d),u.castShadow=!0,this.group.add(u),this.collision.addBox(h-.55,h+.55,d-.55,d+.55,0,.55)}const a=new Dt({color:this.t.pillar,roughness:.95});for(let o=0;o<5;o++){const l=o/5*Math.PI*2+.5,c=nt(15,33),h=Math.sin(l)*c,d=Math.cos(l)*c,u=nt(1.4,2.8),p=new ct(new _e(.8,.9,u,9),a);p.position.set(h,u/2,d),p.castShadow=!0,this.group.add(p),this.collision.addOccluder(p),this.collision.addBox(h-.85,h+.85,d-.85,d+.85,0,u);const g=h+nt(-3,3),v=d+nt(-3,3),f=new ct(new Ot(2.4,.7,.9),a);f.position.set(g,.35,v),f.rotation.y=Math.random()*Math.PI,f.castShadow=!0,this.group.add(f),this.collision.addBox(g-1.3,g+1.3,v-1.3,v+1.3,0,.75)}for(let o=0;o<20;o++){const l=Math.random()*Math.PI*2,c=nt(58,74);this.addTreeAt(Math.sin(l)*c,Math.cos(l)*c,nt(.9,1.6),t,e,n,!1)}}buildEmber(){const t=new bn({color:16733464,transparent:!0,opacity:.9,blending:ln,depthWrite:!1});for(let a=0;a<7;a++){const o=Math.random()*Math.PI*2,l=nt(8,40),c=new ct(new wi(nt(5,10),nt(.7,1.4)),t);c.rotation.x=-Math.PI/2,c.rotation.z=Math.random()*Math.PI,c.position.set(Math.sin(o)*l,.03,Math.cos(o)*l),this.group.add(c)}const e=new Bs(1,0),n=new Dt({color:2038306,roughness:.4,metalness:.3,flatShading:!0});for(let a=0;a<9;a++){const o=Math.random()*Math.PI*2,l=nt(12,42),c=Math.sin(o)*l,h=Math.cos(o)*l,d=nt(1.2,2.2),u=new ct(e,n);u.position.set(c,d*.45,h),u.scale.set(d,d*nt(.8,1.3),d*nt(.8,1.2)),u.rotation.y=Math.random()*Math.PI,u.castShadow=!0,this.group.add(u),this.collision.addOccluder(u);const p=d*.85;this.collision.addBox(c-p,c+p,h-p,h+p,0,d)}const i=new Dt({color:this.t.trunk,roughness:1});for(let a=0;a<7;a++){const o=a/7*Math.PI*2+.4,l=nt(16,40),c=Math.sin(o)*l,h=Math.cos(o)*l,d=new oe,u=new ct(new _e(.22,.4,3.8,6),i);u.position.y=1.9,u.castShadow=!0,d.add(u);const p=new ct(new Ot(1.6,.14,.14),i);p.position.set(.6,2.9,0),p.rotation.z=.5,d.add(p);const g=new ct(new Ot(1.3,.13,.13),i);g.position.set(-.5,2.4,.1),g.rotation.z=-.6,d.add(g),d.position.set(c,0,h),d.rotation.y=Math.random()*Math.PI,this.group.add(d),this.collision.addBox(c-.4,c+.4,h-.4,h+.4,0,3.8)}const r=new Dt({color:2757648,roughness:1,emissive:16724736,emissiveIntensity:.7});for(let a=0;a<4;a++){const o=a/4*Math.PI*2+1.1,l=nt(20,38),c=new ct(new Ye(.7,.9,7),r);c.position.set(Math.sin(o)*l,.45,Math.cos(o)*l),c.castShadow=!0,this.group.add(c),this.collision.addBox(c.position.x-.6,c.position.x+.6,c.position.z-.6,c.position.z+.6,0,.9)}}buildFrost(){this.buildPillars(4);const t=new Dt({color:12575986,roughness:.15,metalness:.1,transparent:!0,opacity:.92,flatShading:!0});for(let o=0;o<8;o++){const l=Math.random()*Math.PI*2,c=nt(12,40),h=Math.sin(l)*c,d=Math.cos(l)*c,u=nt(1.2,2.1),p=new ct(new Ot(u,u*1.4,u),t);p.position.set(h,u*.7,d),p.rotation.y=Math.random()*Math.PI,p.castShadow=!0,this.group.add(p),this.collision.addOccluder(p);const g=u*.6;this.collision.addBox(h-g,h+g,d-g,d+g,0,u*1.4)}const e=new Dt({color:15791868,roughness:1});for(let o=0;o<6;o++){const l=o/6*Math.PI*2+.3,c=nt(14,36),h=Math.sin(l)*c,d=Math.cos(l)*c,u=new ct(new Wn(1,12,8),e);u.position.set(h,.1,d),u.scale.set(nt(2.2,3.4),.75,nt(2.2,3.4)),u.receiveShadow=!0,this.group.add(u),this.collision.addBox(h-1.6,h+1.6,d-1.6,d+1.6,0,.75)}const n=new Dt({color:this.t.trunk,roughness:1}),i=new Dt({color:this.t.leafA,roughness:1,flatShading:!0}),r=new Dt({color:this.t.leafB,roughness:1,flatShading:!0}),a=[[26,18],[-26,-18],[-18,26],[18,-26],[34,2],[-34,-2],[2,-34],[-2,34]];for(const[o,l]of a)this.addTreeAt(o,l,nt(1,1.3),n,i,r,!0);for(let o=0;o<20;o++){const l=Math.random()*Math.PI*2,c=nt(58,74);this.addTreeAt(Math.sin(l)*c,Math.cos(l)*c,nt(.9,1.6),n,i,r,!1)}}buildOasis(){const t=[10498096,2783882,13214247,7028640],e=new Dt({color:this.t.trunk,roughness:1}),n=new Dt({color:9071172,roughness:.9});[[14,8,.4],[-14,-8,2.2],[8,-16,1.2],[-8,16,3.1]].forEach(([h,d,u],p)=>{const g=new oe;for(const[m,b]of[[-.9,-.6],[.9,-.6],[-.9,.6],[.9,.6]]){const M=new ct(new _e(.07,.07,2.3,6),e);M.position.set(m,1.15,b),g.add(M)}const v=new ct(new Ot(2,.85,1),n);v.position.y=.43,v.castShadow=!0,g.add(v);const f=new ct(new Ot(2.4,.08,1.5),new Dt({color:t[p],roughness:.85}));f.position.y=2.3,f.rotation.z=.06,f.castShadow=!0,g.add(f),g.position.set(h,0,d),g.rotation.y=u,this.group.add(g),this.collision.addBox(h-1.1,h+1.1,d-.8,d+.8,0,.9)});const r=new Dt({color:11563068,roughness:.8});for(let h=0;h<6;h++){const d=Math.random()*Math.PI*2,u=nt(10,38),p=Math.sin(d)*u,g=Math.cos(d)*u,v=new ct(new _e(.28,.38,.8,8),r);v.position.set(p,.4,g),v.castShadow=!0,this.group.add(v),this.collision.addBox(p-.35,p+.35,g-.35,g+.35,0,.8)}const a=new Dt({color:9071164,roughness:1}),o=new Dt({color:this.t.leafA,roughness:1,flatShading:!0}),l=[[22,22],[-22,22],[22,-22],[-22,-22],[30,0],[-30,0],[0,30],[0,-30]];for(const[h,d]of l){const u=new oe,p=new ct(new _e(.2,.34,4.2,7),a);p.position.y=2.1,p.rotation.z=nt(-.08,.08),p.castShadow=!0,u.add(p);for(let g=0;g<5;g++){const v=new ct(new Ot(1.9,.07,.45),o),f=g/5*Math.PI*2;v.position.set(Math.sin(f)*.95,4.15,Math.cos(f)*.95),v.rotation.y=f,v.rotation.x=-.35,v.castShadow=!0,u.add(v)}u.position.set(h,0,d),this.group.add(u),this.collision.addBox(h-.35,h+.35,d-.35,d+.35,0,4.2)}const c=new Dt({color:this.t.floor,roughness:1});for(let h=0;h<3;h++){const d=h/3*Math.PI*2+.8,u=nt(28,40),p=Math.sin(d)*u,g=Math.cos(d)*u,v=new ct(new Wn(1,12,8),c);v.position.set(p,.05,g),v.scale.set(nt(4.5,6.5),1,nt(4.5,6.5)),v.receiveShadow=!0,this.group.add(v),this.collision.addBox(p-3.4,p+3.4,g-3.4,g+3.4,0,.95)}}buildTorches(){this.flameTex=Rm();const t=new Dt({color:3813936,roughness:.8,metalness:.4}),e=new Dt({color:2762276,roughness:.7,metalness:.5});let n=0;const i=(l,c,h)=>{const d=new oe,u=new ct(new _e(.06,.08,2.4,6),t);u.position.y=1.2,d.add(u);const p=new ct(new _e(.22,.1,.26,8),e);p.position.y=2.5,d.add(p);const g=new am(this.theme.torchColor,this.theme.torchI,13,2);g.position.y=2.85,d.add(g);const v=new Hi(new _i({map:this.flameTex,color:this.theme.torchColor,transparent:!0,blending:ln,depthWrite:!1}));v.scale.setScalar(1.1),v.position.y=2.95,d.add(v),d.position.set(l,c,h),this.group.add(d),this.torches.push({light:g,sprite:v,seed:n++*1.7})},r=this.pillarPositions&&this.pillarPositions.length>0,a=r?this.pillarPositions.slice(0,4):[[-20,-20],[20,-20],[20,20],[-20,20]],o=r?7.5:0;for(const[l,c]of a)i(l,o,c);i(-47.6,2.2,0),i(47.6,2.2,0),i(0,2.2,-47.6),i(0,2.2,47.6),i(-47.6,2.2,-24),i(47.6,2.2,24)}buildSpawnMarkers(){const t=new vi(.85,1.05,28),e=new bn({color:7330047,transparent:!0,opacity:.35,blending:ln,depthWrite:!1}),n=[[-36,-36],[36,-36],[-36,36],[36,36],[36,0],[-36,0],[0,36],[0,-36],[18,18],[-18,-18]];for(const[i,r]of n){const a=new ct(t,e);a.rotation.x=-Math.PI/2,a.position.set(i,.03,r),this.group.add(a)}}buildMotes(){const t=this.theme.particles;if(!t)return;const e=240;this.motePos=new Float32Array(e*3),this.moteVel=new Float32Array(e*3);for(let i=0;i<e;i++)this.motePos[i*3]=nt(-48,48),this.motePos[i*3+1]=nt(.5,12),this.motePos[i*3+2]=nt(-48,48),this.moteVel[i*3]=nt(-1,1)*t.drift,this.moteVel[i*3+1]=t.vy*nt(.5,1.3),this.moteVel[i*3+2]=nt(-1,1)*t.drift;this.moteGeo=new ve,this.moteGeo.setAttribute("position",new be(this.motePos,3).setUsage(Ma));const n=new Hs({color:t.color,size:t.size,transparent:!0,opacity:.85,blending:ln,depthWrite:!1});this.motes=new Ga(this.moteGeo,n),this.motes.frustumCulled=!1,this.group.add(this.motes)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.dispose(),n.dispose()}}),this.moteGeo&&this.moteGeo.dispose(),this.scene.remove(this.group)}update(t,e){for(const n of this.torches){const i=.82+.14*Math.sin(e*11+n.seed)+.07*Math.sin(e*23+n.seed*2.3);n.light.intensity=this.theme.torchI*i,n.sprite.scale.setScalar(1+i*.22)}if(this.motes){const n=this.theme.particles;for(let i=0;i<240;i++){const r=i*3;this.motePos[r]+=this.moteVel[r]*t,this.motePos[r+1]+=this.moteVel[r+1]*t,this.motePos[r+2]+=this.moteVel[r+2]*t,n.vy>=0?this.motePos[r+1]>12&&(this.motePos[r+1]=.4):this.motePos[r+1]<.2&&(this.motePos[r+1]=12),this.motePos[r]>50&&(this.motePos[r]=-50),this.motePos[r]<-50&&(this.motePos[r]=50),this.motePos[r+2]>50&&(this.motePos[r+2]=-50),this.motePos[r+2]<-50&&(this.motePos[r+2]=50)}this.moteGeo.attributes.position.needsUpdate=!0}}}class Cm{constructor(){this.root=document.createElement("div"),this.root.id="hud",this.root.innerHTML=`
      <div class="hp-panel">
        <div class="hp-label"><span>HP</span><span id="hp-text">100/100</span></div>
        <div class="hp-bar"><div id="hp-fill"></div></div>
      </div>

      <div class="score-panel">
        <div><span class="k">KILLS:</span> <span id="kills-val">0</span></div>
        <div><span class="d">DEATHS:</span> <span id="deaths-val">0</span></div>
        <div class="coins-line">COINS: <span id="coins-val">0</span></div>
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
    `,document.body.appendChild(this.deathScreen),this.respawnFlashEl=document.createElement("div"),this.respawnFlashEl.id="respawn-flash",this.respawnFlashEl.textContent="RESPAWN!",this.respawnFlashEl.style.display="none",document.body.appendChild(this.respawnFlashEl);const t=e=>this.root.querySelector(e);this.hpFill=t("#hp-fill"),this.hpText=t("#hp-text"),this.killsVal=t("#kills-val"),this.deathsVal=t("#deaths-val"),this.coinsVal=t("#coins-val"),this.crosshair=t("#crosshair"),this.vignette=t("#dmg-vignette"),this.elimination=t("#elimination"),this.deathCount=this.deathScreen.querySelector("#death-count"),this._lastCountdown=-1}setPlaying(t){this.root.style.display=t?"block":"none"}setHP(t,e){const n=Math.max(0,t/e);this.hpFill.style.width=`${n*100}%`,this.hpFill.classList.toggle("low",n<=.3),this.hpFill.classList.toggle("mid",n>.3&&n<=.55),this.hpText.textContent=`${Math.ceil(t)}/${e}`,n>0&&n<=.3?this.vignette.classList.add("low-hp"):this.vignette.classList.remove("low-hp")}setScore(t,e){this.killsVal.textContent=t,this.deathsVal.textContent=e}setCoins(t){this.coinsVal.textContent=Number(t||0).toLocaleString()}hitMarker(t){this.crosshair.animate([{transform:"translate(-50%,-50%) scale(1)",filter:"brightness(1)"},{transform:`translate(-50%,-50%) scale(${t?1.5:1.9})`,filter:t?"brightness(2.4) hue-rotate(180deg)":"brightness(2.6) sepia(1) saturate(6) hue-rotate(-15deg)"},{transform:"translate(-50%,-50%) scale(1)",filter:"brightness(1)"}],{duration:200,easing:"ease-out"})}damageFlash(){this.vignette.animate([{opacity:.85},{opacity:0}],{duration:480,easing:"ease-out"})}showElimination(){const t=this.elimination.querySelector(".elim-sub");t&&(t.textContent="+1 Kill  •  +50 Coins"),this.elimination.animate([{opacity:0,transform:"translate(-50%,-14px) scale(0.8)"},{opacity:1,transform:"translate(-50%,0) scale(1.08)",offset:.18},{opacity:1,transform:"translate(-50%,0) scale(1)",offset:.35},{opacity:1,transform:"translate(-50%,0) scale(1)",offset:.75},{opacity:0,transform:"translate(-50%,-10px) scale(0.95)"}],{duration:1500,easing:"ease-out"})}showDeath(){this._lastCountdown=-1,this.deathScreen.style.display="flex",this.deathScreen.animate([{opacity:0},{opacity:1}],{duration:350,easing:"ease-out"})}setDeathCount(t){t!==this._lastCountdown&&(this._lastCountdown=t,this.deathCount.textContent=String(Math.max(t,0)),t>0&&this.deathCount.animate([{transform:"scale(1.45)",opacity:.4},{transform:"scale(1)",opacity:1}],{duration:320,easing:"ease-out"}))}hideDeath(){this.deathScreen.style.display="none"}respawnFlash(){this.respawnFlashEl.style.display="block",this.respawnFlashEl.animate([{opacity:0,transform:"translate(-50%,-50%) scale(0.7)"},{opacity:1,transform:"translate(-50%,-50%) scale(1.12)",offset:.25},{opacity:1,transform:"translate(-50%,-50%) scale(1)",offset:.55},{opacity:0,transform:"translate(-50%,-50%) scale(1.05)"}],{duration:1100,easing:"ease-out"}).onfinish=()=>{this.respawnFlashEl.style.display="none"}}}class Pm{constructor({onPlay:t,onResume:e,onQuitToMenu:n,onSettings:i,onGetCoins:r,onSpendCoins:a}){this.onSettings=i,this.onGetCoins=r||(()=>0),this.onSpendCoins=a||(()=>!1),this.currentPanel="home",this.adModal=null,this.buyModal=null,this.root=document.createElement("div"),this.root.id="menu";const o=this.getUnlocked(),l=Object.entries(le).map(([v,f])=>{const m=`#${f.primary.toString(16).padStart(6,"0")}`,b=`#${f.accent.toString(16).padStart(6,"0")}`,M=(f.premium||f.price)&&!o.includes(v),E=f.premium?'<span class="ad-tag">AD</span>':f.price?`<span class="ad-tag buy">${Number(f.price).toLocaleString()}</span>`:"";return`
          <button class="skin-card${M?" locked":""}" data-skin="${v}">
            <span class="skin-chip" style="background:linear-gradient(135deg,${m} 55%,${b})"></span>
            <span class="skin-name">${f.name}</span>
            <span class="skin-desc">${M?f.premium?"LOCKED &mdash; watch ad to unlock":`BUY &mdash; ${Number(f.price).toLocaleString()} coins`:f.desc}</span>
            ${M?E:""}
          </button>`}).join(""),c=Object.entries(vn).map(([v,f])=>{const m=`#${f.sky.toString(16).padStart(6,"0")}`,b=`#${f.sunColor.toString(16).padStart(6,"0")}`;return`
          <button class="skin-card" data-map="${v}">
            <span class="skin-chip" style="background:linear-gradient(160deg,${m} 40%,${b})"></span>
            <span class="skin-name">${f.name}</span>
            <span class="skin-desc">${f.desc}</span>
          </button>`}).join("");this.root.innerHTML=`
      <div class="menu-inner">
        <h1 class="game-title">FUN BLADER ARENA</h1>
        <div class="game-subtitle">Fight &middot; Fall &middot; Rise Again</div>

        <div class="menu-panel" id="panel-home">
          <button class="menu-btn" id="btn-play">PLAY</button>
          <button class="menu-btn" id="btn-skins">SKINS</button>
          <button class="menu-btn" id="btn-maps">MAPS</button>
          <button class="menu-btn" id="btn-settings">SETTINGS</button>
          <button class="menu-btn" id="btn-controls">CONTROLS</button>
        </div>

        <div class="menu-panel" id="panel-skins" style="display:none">
          <div class="panel-title small">CHOOSE YOUR KNIGHT</div>
          <div class="coins-chip" id="coins-chip"></div>
          <div class="skin-hint">Your knight stands in the center &mdash; pick a skin and watch it change live. Earn coins with kills!</div>
          <div class="skin-grid" id="skin-grid">${l}</div>
          <button class="menu-btn small" id="btn-back-3">BACK</button>
        </div>

        <div class="menu-panel" id="panel-maps" style="display:none">
          <div class="panel-title small">CHOOSE YOUR BATTLEFIELD</div>
          <div class="skin-hint">The arena behind this panel is the live preview &mdash; pick a map to rebuild it instantly.</div>
          <div class="skin-grid" id="map-grid">${c}</div>
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
            <label>Enemy Bots</label>
            <input type="range" id="set-bots" min="1" max="15" step="1" value="10" />
            <span class="set-val" id="val-bots">10</span>
          </div>
          <div class="setting-row">
            <label>Shadows</label>
            <input type="checkbox" id="set-shadows" checked />
          </div>
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
    `,document.body.appendChild(this.root),this.pushAd(this.root.querySelector(".adsbygoogle")),this.pauseOverlay=document.createElement("div"),this.pauseOverlay.id="pause-overlay",this.pauseOverlay.innerHTML=`
      <div class="pause-card">
        <div class="pause-title">PAUSED</div>
        <div class="pause-sub">Click anywhere to resume</div>
        <button class="menu-btn small" id="btn-quit">QUIT TO MENU</button>
      </div>
    `,this.pauseOverlay.style.display="none",document.body.appendChild(this.pauseOverlay);const h=v=>this.root.querySelector(`#${v}`),d=v=>this.pauseOverlay.querySelector(`#${v}`);h("btn-play").addEventListener("click",()=>t()),h("btn-skins").addEventListener("click",()=>this.showPanel("skins")),h("btn-maps").addEventListener("click",()=>this.showPanel("maps")),h("btn-settings").addEventListener("click",()=>this.showPanel("settings")),h("btn-controls").addEventListener("click",()=>this.showPanel("controls")),h("btn-back-1").addEventListener("click",()=>this.showPanel("home")),h("btn-back-2").addEventListener("click",()=>this.showPanel("home")),h("btn-back-3").addEventListener("click",()=>this.showPanel("home")),h("btn-back-4").addEventListener("click",()=>this.showPanel("home")),this.skinGrid=h("skin-grid"),this.skinGrid.addEventListener("click",v=>{const f=v.target.closest(".skin-card");if(!(!f||!f.dataset.skin)){if(f.classList.contains("locked")){this.previewLockedSkin(f.dataset.skin);return}this.hidePreviewBar(),this.selectSkin(f.dataset.skin),this.onSettings({skin:f.dataset.skin})}}),this.mapGrid=h("map-grid"),this.mapGrid.addEventListener("click",v=>{const f=v.target.closest(".skin-card");!f||!f.dataset.map||(this.selectMap(f.dataset.map),this.onSettings({map:f.dataset.map}))});const u=h("set-sens");u.addEventListener("input",()=>{h("val-sens").textContent=Number(u.value).toFixed(1),this.onSettings({sensitivity:Number(u.value)})});const p=h("set-vol");p.addEventListener("input",()=>{h("val-vol").textContent=`${Math.round(p.value*100)}%`,this.onSettings({volume:Number(p.value)})});const g=h("set-bots");g.min=1,g.max=15,g.value=10,g.addEventListener("input",()=>{h("val-bots").textContent=g.value,this.onSettings({bots:Number(g.value)})}),h("set-shadows").addEventListener("change",v=>{this.onSettings({shadows:v.target.checked})}),this.pauseOverlay.addEventListener("click",()=>e()),d("btn-quit").addEventListener("click",v=>{v.stopPropagation(),n()})}getUnlocked(){try{const t=localStorage.getItem("fba-unlocked-skins");return t?JSON.parse(t):[]}catch{return[]}}unlockSkin(t){const e=this.getUnlocked();if(!e.includes(t)){e.push(t);try{localStorage.setItem("fba-unlocked-skins",JSON.stringify(e))}catch{}}const n=this.skinGrid.querySelector(`[data-skin="${t}"]`);if(n){n.classList.remove("locked");const i=n.querySelector(".skin-desc");i&&(i.textContent=le[t].desc);const r=n.querySelector(".ad-tag");r&&r.remove()}}pushAd(t){if(t)try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch{}}showAdModal(t){if(this.adModal)return;const e=le[t];if(!e)return;const n=document.createElement("div");n.id="ad-modal",n.innerHTML=`
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
      </div>`,document.body.appendChild(n),this.adModal=n,this.pushAd(n.querySelector(".adsbygoogle"));let i=10;const r=n.querySelector("#ad-bar"),a=n.querySelector("#ad-status"),o=setInterval(()=>{i-=1,r.style.width=`${(10-i)/10*100}%`,a.textContent=i>0?`Keep this open... ${i}`:"UNLOCKED!",i<=0&&(clearInterval(o),setTimeout(()=>{this.unlockSkin(t),n.remove(),this.adModal=null,this.hidePreviewBar(),this.selectSkin(t),this.onSettings({skin:t})},700))},1e3);n.querySelector("#ad-cancel").addEventListener("click",()=>{clearInterval(o),n.remove(),this.adModal=null})}selectSkin(t,e=!1){for(const n of this.skinGrid.querySelectorAll(".skin-card")){if(n.classList.contains("locked")&&!e){n.classList.remove("sel");continue}n.classList.toggle("sel",n.dataset.skin===t)}}previewLockedSkin(t){le[t]&&(this.selectSkin(t,!0),this.onSettings({skin:t}),this.showPreviewBar(t))}showPreviewBar(t){const e=le[t];if(!e)return;this.hidePreviewBar();const n=document.createElement("div");n.id="preview-bar";const i=e.premium?"WATCH AD TO UNLOCK":`BUY - ${Number(e.price).toLocaleString()} COINS`;n.innerHTML=`
      <span class="pb-name">${e.name}</span>
      <span class="pb-sub">${e.premium?"Ad-locked skin - try it on!":"Previewing - buy to keep it"}</span>
      <button class="menu-btn small" id="pb-action">${i}</button>
      <button class="menu-btn small" id="pb-close">X</button>
    `,this.root.appendChild(n),this.previewBar=n,n.querySelector("#pb-action").addEventListener("click",()=>{e.premium?this.showAdModal(t):this.showBuyModal(t)}),n.querySelector("#pb-close").addEventListener("click",()=>{this.hidePreviewBar();const r=this.lastAppliedSkin||"knight";this.selectSkin(r),this.onSettings({skin:r})})}hidePreviewBar(){this.previewBar&&(this.previewBar.remove(),this.previewBar=null)}selectMap(t){for(const e of this.mapGrid.querySelectorAll(".skin-card"))e.classList.toggle("sel",e.dataset.map===t)}showPanel(t){this.currentPanel=t,this.root.classList.toggle("skins-mode",t==="skins"),this.root.classList.toggle("maps-mode",t==="maps"),t!=="skins"&&this.hidePreviewBar();const e=n=>this.root.querySelector(`#${n}`);e("panel-home").style.display=t==="home"?"grid":"none",e("panel-skins").style.display=t==="skins"?"block":"none",e("panel-maps").style.display=t==="maps"?"block":"none",e("panel-settings").style.display=t==="settings"?"block":"none",e("panel-controls").style.display=t==="controls"?"block":"none",t==="skins"&&this.refreshCoins()}refreshCoins(){const t=this.root.querySelector("#coins-chip");t&&(t.textContent=`YOUR COINS: ${Number(this.onGetCoins()||0).toLocaleString()}`)}showBuyModal(t){if(this.buyModal)return;const e=le[t];if(!e)return;const n=document.createElement("div");n.id="buy-modal",n.innerHTML=`
      <div class="ad-card">
        <div class="ad-title">${e.name.toUpperCase()}</div>
        <div class="ad-sub">${e.desc}</div>
        <div class="buy-price">${Number(e.price).toLocaleString()} COINS</div>
        <div class="ad-status" id="buy-status"></div>
        <div class="srv-actions">
          <button class="menu-btn small" id="buy-confirm">BUY</button>
          <button class="menu-btn small" id="buy-cancel">CANCEL</button>
        </div>
      </div>`,document.body.appendChild(n),this.buyModal=n;const i=n.querySelector("#buy-status"),r=(a,o)=>{const l=Number(this.onGetCoins()||0),c=Math.max(0,e.price-l);i.style.color=o?"#ff8a7a":"#e8e2d5",i.textContent=a||`Balance: ${l.toLocaleString()} / ${e.price.toLocaleString()}`+(c>0?` — need ${c.toLocaleString()} more (50 per kill)`:" — you can afford this!")};r(),n.querySelector("#buy-cancel").addEventListener("click",()=>{n.remove(),this.buyModal=null}),n.querySelector("#buy-confirm").addEventListener("click",()=>{this.onSpendCoins(e.price)?(this.unlockSkin(t),n.remove(),this.buyModal=null,this.refreshCoins(),this.hidePreviewBar(),this.selectSkin(t),this.onSettings({skin:t})):r("Not enough coins! Kill knights — 50 coins each.",!0)})}applySettings(t){const e=n=>this.root.querySelector(`#${n}`);this.lastAppliedSkin=t.skin||"knight",e("set-sens").value=t.sensitivity,e("val-sens").textContent=Number(t.sensitivity).toFixed(1),e("set-vol").value=t.volume,e("val-vol").textContent=`${Math.round(t.volume*100)}%`,e("set-bots").value=t.bots,e("val-bots").textContent=String(t.bots),e("set-shadows").checked=t.shadows,this.selectSkin(t.skin||"knight"),this.selectMap(t.map||"citadel")}hideAll(){this.root.style.display="none",this.pauseOverlay.style.display="none"}showMain(){this.root.style.display="flex",this.showPanel("home")}showPause(){this.pauseOverlay.style.display="flex"}hidePause(){this.pauseOverlay.style.display="none"}}class Lm{constructor(){this.visible=!1,this.root=document.createElement("div"),this.root.id="scoreboard",this.root.style.display="none",this.root.innerHTML=`
      <div class="sb-card">
        <div class="sb-title">SCOREBOARD</div>
        <table>
          <thead>
            <tr><th class="name">PLAYER</th><th>KILLS</th><th>DEATHS</th></tr>
          </thead>
          <tbody id="sb-body"></tbody>
        </table>
      </div>
    `,document.body.appendChild(this.root),this.body=this.root.querySelector("#sb-body")}setVisible(t,e=null){this.visible=t,this.root.style.display=t?"flex":"none",t&&e&&this.refresh(e)}refresh(t){let e="";for(const n of t){const i=n.name==="You"?' class="me"':"";e+=`<tr${i}><td class="name">${n.name}</td><td>${n.kills}</td><td>${n.deaths}</td></tr>`}this.body.innerHTML=e}}class Im{constructor(){this.ctx=null,this.master=null,this.volume=.7,this.noiseBuf=null,this.stepAlt=!1}ensure(){try{if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!0;const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);const e=Math.floor(this.ctx.sampleRate*.8);this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;return!0}catch{return!1}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}tone({f0:t=440,f1:e=null,dur:n=.15,type:i="sine",gain:r=.25,delay:a=0}){if(this.ensure())try{const o=this.ctx.currentTime+a,l=this.ctx.createOscillator();l.type=i,l.frequency.setValueAtTime(Math.max(1,t),o),l.frequency.exponentialRampToValueAtTime(Math.max(1,e??t),o+n);const c=this.ctx.createGain();c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+n+.05)}catch{}}noise({dur:t=.2,type:e="bandpass",f0:n=1e3,f1:i=null,q:r=1,gain:a=.3,delay:o=0}){if(this.ensure())try{const l=this.ctx.currentTime+o,c=this.ctx.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;const h=this.ctx.createBiquadFilter();h.type=e,h.Q.value=r,h.frequency.setValueAtTime(Math.max(10,n),l),h.frequency.exponentialRampToValueAtTime(Math.max(10,i??n),l+t);const d=this.ctx.createGain();d.gain.setValueAtTime(a,l),d.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(d),d.connect(this.master),c.start(l,Math.random()*.5),c.stop(l+t+.05)}catch{}}uiClick(){this.tone({f0:760,f1:520,dur:.07,type:"square",gain:.12})}swing(t=0){t===2?this.noise({dur:.26,f0:900,f1:180,q:2.5,gain:.42}):t===1?this.noise({dur:.18,f0:1600,f1:320,q:2,gain:.3}):this.noise({dur:.16,f0:2100,f1:420,q:2,gain:.28})}hit(){this.tone({f0:150,f1:55,dur:.13,type:"sine",gain:.5}),this.noise({dur:.09,type:"lowpass",f0:700,gain:.3})}clash(){this.tone({f0:2490,f1:1900,dur:.14,type:"square",gain:.14}),this.tone({f0:3110,f1:2500,dur:.11,type:"triangle",gain:.16}),this.tone({f0:1250,f1:900,dur:.22,type:"triangle",gain:.08}),this.noise({dur:.07,type:"highpass",f0:3200,gain:.28})}footstep(t){this.stepAlt=!this.stepAlt,this.noise({dur:.06,type:"lowpass",f0:this.stepAlt?340:260,gain:t?.17:.1})}jump(){this.noise({dur:.12,type:"bandpass",f0:300,f1:800,gain:.09})}dash(){this.noise({dur:.16,type:"bandpass",f0:420,f1:1700,q:1.4,gain:.2})}land(){this.tone({f0:110,f1:50,dur:.1,type:"sine",gain:.24}),this.noise({dur:.08,type:"lowpass",f0:400,gain:.16})}death(){this.tone({f0:220,f1:50,dur:.65,type:"sawtooth",gain:.3}),this.noise({dur:.4,type:"lowpass",f0:600,f1:120,gain:.22})}respawn(){this.tone({f0:392,dur:.09,type:"triangle",gain:.18}),this.tone({f0:523,dur:.09,type:"triangle",gain:.18,delay:.09}),this.tone({f0:784,dur:.16,type:"triangle",gain:.2,delay:.18})}elimination(){this.tone({f0:523,f1:523,dur:.12,type:"square",gain:.16}),this.tone({f0:784,f1:784,dur:.2,type:"square",gain:.18,delay:.1}),this.tone({f0:1046,f1:1046,dur:.26,type:"triangle",gain:.16,delay:.2})}}class Dm{constructor(t){this.dom=t,this.keys=Object.create(null),this.buttons={left:!1,right:!1},this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.onLockChange=null,window.addEventListener("keydown",e=>{e.code==="Tab"&&e.preventDefault(),e.code==="Space"&&this.locked&&e.preventDefault(),!this.keys[e.code]&&!e.repeat&&(this.pressed.add(e.code),e.code==="Space"&&this.pressed.add("jump")),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{this.locked&&(e.button===1&&e.preventDefault(),e.button===0?(this.buttons.left||this.pressed.add("attack"),this.buttons.left=!0):e.button===2&&(this.buttons.right=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.buttons.left=!1),e.button===2&&(this.buttons.right=!1)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{this.locked&&(this.mouseDX+=e.movementX||0,this.mouseDY+=e.movementY||0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.keys=Object.create(null),this.buttons.left=!1,this.buttons.right=!1),this.onLockChange&&this.onLockChange(this.locked)})}lock(){try{const t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){try{document.exitPointerLock()}catch{}}isDown(t){return!!this.keys[t]}consumeDelta(){const t={dx:this.mouseDX,dy:this.mouseDY};return this.mouseDX=0,this.mouseDY=0,t}postUpdate(){this.pressed.clear(),this.mouseDX=0,this.mouseDY=0}}const Ss=Object.keys(le).filter(s=>!le[s].premium&&!le[s].price);class Um{constructor(t){this.renderer=new Qp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_l,this.renderer.toneMapping=vl,this.renderer.toneMappingExposure=1.05,t.appendChild(this.renderer.domElement),this.scene=new tm,this.camera=new Be(72,window.innerWidth/window.innerHeight,.1,500),this.scene.add(this.camera),this.state=new um,this.audio=new Im,this.input=new Dm(this.renderer.domElement),this.collision=new fm(46.4),this.spawn=new mm,this.env=new fl(this.scene,vn[this.state.settings.map]||vn.citadel),this.arena=new ml(this.scene,this.collision,vn[this.state.settings.map]||vn.citadel),this.combat=new vm(this),this.cameraRig=new Am(this.camera,this.input,this.collision),this.hud=new Cm,this.scoreboard=new Lm,this.menu=new Pm({onPlay:()=>this.start(),onResume:()=>this.resumeFromPause(),onQuitToMenu:()=>this.quitToMenu(),onSettings:i=>this.updateSettings(i),onGetCoins:()=>this.state.coins,onSpendCoins:i=>this.spendCoins(i)}),this.menu.applySettings(this.state.settings),this.cameraRig.sensitivity=this.state.settings.sensitivity;const e=document.createElement("div");e.id="watermark",e.textContent="⚔ FOUIE404 ⚔",document.body.appendChild(e),console.log("%cBLADE ARENA — created by Fouie404","color:#d8a02a;font-size:16px;font-weight:bold"),this.player=null,this.enemies=[],this._botCounter=0,this.slots={used:0,max:3},this.time=0,this.paused=!1,this._lastCd=-1,this._sbTimer=0,this._errShown=!1,this._auraT=0,this.clock=new hm,this.renderer.setAnimationLoop(()=>this.frame()),this.player=new dl(this,new R(0,0,0)),this.usedNames=new Set(["you"]);const n=Math.max(1,Math.min(15,this.state.settings.bots||10));for(let i=0;i<n;i++)this.createEnemy(i);this.createEliteBots(),this.hud.setCoins(this.state.coins),this.input.onLockChange=i=>{!i&&this.state.phase==="playing"&&this.player&&!this.player.dead&&(this.paused=!0,this.menu.showPause())},window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}createEnemy(t){const e=Ss[(t+1)%Ss.length],n=le[e],i=this.enemies.map(a=>({pos:a.pos,radius:9})),r=this.spawn.getSpawn(i);this.enemies.push(new Ur(this,this._botCounter++,r,n,e))}spawnBotAt(t){const e=Ss[Math.floor(Math.random()*Ss.length)],n=new Ur(this,this._botCounter++,t,le[e],e);return this.enemies.push(n),n}createEliteBots(){const t=Object.keys(le).filter(e=>le[e].premium||le[e].price);for(let e=0;e<3&&t.length>0;e++){const n=Math.floor(Math.random()*t.length),i=t.splice(n,1)[0],r=this.enemies.map(o=>({pos:o.pos,radius:9})),a=this.spawn.getSpawn(r);this.enemies.push(new Ur(this,this._botCounter++,a,le[i],i,!0))}}addCoins(t){this.state.coins=(this.state.coins||0)+t;try{localStorage.setItem("fba-coins",String(this.state.coins))}catch{}this.hud.setCoins(this.state.coins)}spendCoins(t){if((this.state.coins||0)<t)return!1;this.state.coins-=t;try{localStorage.setItem("fba-coins",String(this.state.coins))}catch{}return this.hud.setCoins(this.state.coins),!0}start(){if(this.audio.ensure(),this.audio.uiClick(),this.player){const t=this.menu.getUnlocked(),e=le[this.state.settings.skin];e&&(e.premium||e.price)&&!t.includes(this.state.settings.skin)&&(this.state.settings.skin="knight");const n=this.enemies.filter(i=>!i.dead).map(i=>({pos:i.pos,radius:10}));this.player.applySkin(this.state.settings.skin),this.player.respawn(this.spawn.getSpawn(n))}else{const t=this.enemies.filter(e=>!e.dead).map(e=>({pos:e.pos,radius:10}));this.player=new dl(this,this.spawn.getSpawn(t))}this.state.phase="playing",this.menu.hideAll(),this.hud.setPlaying(!0),this.hud.setHP(this.player.hp,this.player.maxHp),this.hud.setScore(this.player.stats.kills,this.player.stats.deaths),this.cameraRig.snap(this.player.pos),this.lockPointer()}quitToMenu(){this.audio.uiClick(),this.paused=!1,this.menu.hidePause(),this.menu.showMain(),this.state.phase="menu",this.hud.hideDeath(),this.hud.setPlaying(!1),this.scoreboard.setVisible(!1),this.player&&this.player.respawn(new R(0,0,0)),this.cameraRig.snap(new R(0,0,0)),this.input.unlock()}showFatalError(t){if(console.error(t),this._errShown)return;this._errShown=!0;const e=document.createElement("div");e.id="err-overlay";const n=String(t&&t.stack||t).slice(0,900);e.innerHTML=`
      <div class="err-card">
        <div class="err-title">ERROR CAUGHT &mdash; GAME KEPT RUNNING</div>
        <pre>${n.replace(/</g,"&lt;")}</pre>
        <button class="menu-btn small" id="err-ok">CONTINUE</button>
      </div>`,document.body.appendChild(e),e.querySelector("#err-ok").addEventListener("click",()=>{e.remove(),this._errShown=!1})}lockPointer(){this.input.lock()}resumeFromPause(){this.lockPointer(),setTimeout(()=>{this.input.locked?(this.paused=!1,this.menu.hidePause()):this.state.phase==="playing"&&!this.paused&&(this.paused=!0,this.menu.showPause())},180)}emitAura(t){const e=[this.player,...this.enemies];for(const n of e){if(!n||n.dead)continue;const i=le[n.rig.skinId];if(!i||!i.aura||(n._auraT=(n._auraT||0)-t,n._auraT>0))continue;n._auraT=i.aura.every;const r=n.pos,a=i.aura.colors[Math.floor(Math.random()*i.aura.colors.length)];this.combat.particles.spawnBurst({x:r.x+nt(-.45,.45),y:r.y+nt(.2,1.7),z:r.z+nt(-.45,.45)},{count:i.aura.count,color:a,speed:.8,upBias:i.aura.up,life:.75,gravity:i.aura.grav})}}updateSettings(t){Object.assign(this.state.settings,t);const e=this.state.settings;this.cameraRig.sensitivity=e.sensitivity,this.audio.setVolume(e.volume),this.applyShadows(e.shadows),t.skin!==void 0&&this.player&&this.player.applySkin(e.skin),t.map!==void 0&&this.applyMap(e.map),t.bots!==void 0&&this.setBotCount(Math.max(1,Math.min(15,Math.round(t.bots))))}applyMap(t){if(!vn[t])return;this.state.settings.map=t,this.collision.boxes.length=0,this.collision.occluders.length=0,this.env.dispose(),this.arena.dispose();const e=vn[t];this.env=new fl(this.scene,e),this.arena=new ml(this.scene,this.collision,e)}applyHostBots(t){const e=Math.max(1,Math.min(15,Math.round(t)));this.state.settings.bots=e,this.setBotCount(e),this.menu.applySettings(this.state.settings)}setBotCount(t){for(const e of this.enemies)this.combat.unregister(e),this.scene.remove(e.rig.root),e.rig.dispose();this.enemies.length=0,this.slots.used=0;for(let e=0;e<t;e++)this.createEnemy(e)}applyShadows(t){this.renderer.shadowMap.enabled=t,this.env.sun.castShadow=t,this.scene.traverse(e=>{if(e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n)i.needsUpdate=!0}})}requestSlot(t){return this.slots.used<this.slots.max?(this.slots.used++,t.slotHeld=!0,!0):!1}releaseSlot(t){t.slotHeld&&(t.slotHeld=!1,this.slots.used=Math.max(0,this.slots.used-1))}onPlayerDied(){this.hud.showDeath(),this._lastCd=-1}doRespawnPlayer(){const t=[];for(const n of this.enemies)n.dead||t.push({pos:n.pos,radius:13});t.push({pos:this.player.pos,radius:6});const e=this.spawn.getSpawn(t);this.player.respawn(e),this.cameraRig.snap(e),this.hud.hideDeath(),this.hud.respawnFlash(),this.audio.respawn()}frame(){const t=Math.min(this.clock.getDelta(),.05);this.time+=t;try{this.paused||this.tick(t),this.sanitize(),this.renderer.render(this.scene,this.camera)}catch(e){this.showFatalError(e);try{this.renderer.render(this.scene,this.camera)}catch{}}this.input.postUpdate()}sanitize(){const t=n=>!Number.isFinite(n);if(this.player){const n=this.player;(t(n.pos.x)||t(n.pos.y)||t(n.pos.z)||t(n.vel.x)||t(n.vel.y)||t(n.vel.z)||t(n.yaw))&&(n.pos.set(0,0,0),n.vel.set(0,0,0),n.yaw=0,n.hp=Math.max(n.hp||0,1),this.cameraRig.snap(n.pos))}for(const n of this.enemies)if(t(n.pos.x)||t(n.pos.y)||t(n.pos.z)||t(n.vel.x)||t(n.vel.y)||t(n.vel.z)){const i=this.enemies.filter(r=>r!==n&&!r.dead).map(r=>({pos:r.pos,radius:10}));n.respawn(this.spawn.getSpawn(i))}const e=this.camera.position;(t(e.x)||t(e.y)||t(e.z)||t(this.cameraRig.yaw)||t(this.cameraRig.pitch))&&(this.cameraRig.yaw=0,this.cameraRig.pitch=.34,this.cameraRig.curDist=5.6,this.player&&this.cameraRig.snap(this.player.pos))}tick(t){this.arena.update(t,this.time),this.env.update(t);let e="menu";if(this.player){if(this.state.phase==="menu"?this.player.idle(t):this.player.update(t),this.state.phase!=="menu")if(this.player.dead){this.player.respawnT-=t;const i=Math.max(0,Math.ceil(this.player.respawnT));this.hud.setDeathCount(i),this.player.respawnT<=0&&this.doRespawnPlayer()}else this.hud.setHP(this.player.hp,this.player.maxHp),this.hud.setScore(this.player.stats.kills,this.player.stats.deaths);e=this.state.phase==="menu"?this.menu.currentPanel==="skins"?"preview":this.menu.currentPanel==="maps"?"mapPreview":"menu":this.player.dead?"dead":"play"}for(const i of this.enemies)i.update(t);this.emitAura(t),this.combat.update(t),this.cameraRig.update(t,this.player?this.player.pos:null,e),!!this.input.keys.Tab&&this.state.phase==="playing"&&!this.paused?(this._sbTimer-=t,(!this.scoreboard.visible||this._sbTimer<=0)&&(this.scoreboard.setVisible(!0,this.state.rows()),this._sbTimer=.3)):this.scoreboard.visible&&this.scoreboard.setVisible(!1),this.input.pressed.has("KeyM")&&this.state.phase==="playing"&&this.quitToMenu()}}const Nm=document.getElementById("app");new Um(Nm);
