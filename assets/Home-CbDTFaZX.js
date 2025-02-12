import{u as Gt,t as Oe,a as Qt,i as en,c as tn,p as nn,d as U,h as _,b as ge,e as rn,r as I,o as an,f as g,g as Me,j as Ue,k as on,l as d,m as f,n as V,q as pt,s as sn,V as et,v as tt,w as ln,x as un,T as cn,y as nt,z as dn,A as fn,B as vn,C as pn,D as se,E as xt,F as xn,G as gn,H as hn,I as ae,J as rt,K as oe,L as gt,M as P,N as v,O as Ae,P as S,_ as O,Q,R as De,S as he,U as je,W as Le,X as mn,Y as Ve,Z as bn,$ as D}from"./index-BrMjs5Pn.js";import{u as wn,a as _n,C as yn}from"./Creeper-DElzUpQR.js";import{N as at}from"./Divider-BeR1n-56.js";function Sn(e){return Gt(Oe(e).toLowerCase())}function Cn(e,n,r,s){for(var i=-1,x=e==null?0:e.length;++i<x;)r=n(r,e[i],i,e);return r}function Rn(e){return function(n){return e==null?void 0:e[n]}}var $n={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},kn=Rn($n),zn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,In="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",Dn="\\u20d0-\\u20ff",Nn=In+Pn+Dn,Tn="["+Nn+"]",En=RegExp(Tn,"g");function An(e){return e=Oe(e),e&&e.replace(zn,kn).replace(En,"")}var Vn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function On(e){return e.match(Vn)||[]}var Mn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Un(e){return Mn.test(e)}var ht="\\ud800-\\udfff",jn="\\u0300-\\u036f",Ln="\\ufe20-\\ufe2f",Bn="\\u20d0-\\u20ff",Wn=jn+Ln+Bn,mt="\\u2700-\\u27bf",bt="a-z\\xdf-\\xf6\\xf8-\\xff",Zn="\\xac\\xb1\\xd7\\xf7",Yn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xn="\\u2000-\\u206f",Fn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wt="A-Z\\xc0-\\xd6\\xd8-\\xde",Hn="\\ufe0e\\ufe0f",_t=Zn+Yn+Xn+Fn,yt="['’]",ot="["+_t+"]",Kn="["+Wn+"]",St="\\d+",qn="["+mt+"]",Ct="["+bt+"]",Rt="[^"+ht+_t+St+mt+bt+wt+"]",Jn="\\ud83c[\\udffb-\\udfff]",Gn="(?:"+Kn+"|"+Jn+")",Qn="[^"+ht+"]",$t="(?:\\ud83c[\\udde6-\\uddff]){2}",kt="[\\ud800-\\udbff][\\udc00-\\udfff]",G="["+wt+"]",er="\\u200d",st="(?:"+Ct+"|"+Rt+")",tr="(?:"+G+"|"+Rt+")",it="(?:"+yt+"(?:d|ll|m|re|s|t|ve))?",lt="(?:"+yt+"(?:D|LL|M|RE|S|T|VE))?",zt=Gn+"?",It="["+Hn+"]?",nr="(?:"+er+"(?:"+[Qn,$t,kt].join("|")+")"+It+zt+")*",rr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ar="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",or=It+zt+nr,sr="(?:"+[qn,$t,kt].join("|")+")"+or,ir=RegExp([G+"?"+Ct+"+"+it+"(?="+[ot,G,"$"].join("|")+")",tr+"+"+lt+"(?="+[ot,G+st,"$"].join("|")+")",G+"?"+st+"+"+it,G+"+"+lt,ar,rr,St,sr].join("|"),"g");function lr(e){return e.match(ir)||[]}function ur(e,n,r){return e=Oe(e),n=n,n===void 0?Un(e)?lr(e):On(e):e.match(n)||[]}var cr="['’]",dr=RegExp(cr,"g");function fr(e){return function(n){return Cn(ur(An(n).replace(dr,"")),e,"")}}var ut=fr(function(e,n,r){return n=n.toLowerCase(),e+(r?Sn(n):n)});const Pt=tn("n-carousel-methods");function vr(e){nn(Pt,e)}function Be(e="unknown",n="component"){const r=en(Pt);return r||Qt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function pr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function xr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const gr=U({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ge(e),{isVertical:r,isPrevDisabled:s,isNextDisabled:i,prev:x,next:C}=Be();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:s,isNextDisabled:i,prev:x,next:C}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},pr()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},xr()))}}),hr={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},mr=U({name:"CarouselDots",props:hr,setup(e){const{mergedClsPrefixRef:n}=ge(e),r=I([]),s=Be();function i(m,p){switch(m.key){case"Enter":case" ":m.preventDefault(),s.to(p);return}e.keyboard&&y(m)}function x(m){e.trigger==="hover"&&s.to(m)}function C(m){e.trigger==="click"&&s.to(m)}function y(m){var p;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const w=(p=document.activeElement)===null||p===void 0?void 0:p.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:k}=m,W=k==="PageUp"||k==="ArrowUp",Z=k==="PageDown"||k==="ArrowDown",$=k==="PageUp"||k==="ArrowRight",z=k==="PageDown"||k==="ArrowLeft",j=s.isVertical(),Y=j?W:$,L=j?Z:z;!Y&&!L||(m.preventDefault(),Y&&!s.isNextDisabled()?(s.next(),R(s.currentIndexRef.value)):L&&!s.isPrevDisabled()&&(s.prev(),R(s.currentIndexRef.value)))}function R(m){var p;(p=r.value[m])===null||p===void 0||p.focus()}return an(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:i,handleMouseenter:x,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},rn(this.total,r=>{const s=r===this.currentIndex;return _("div",{"aria-selected":s,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,s&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:i=>{this.handleKeydown(i,r)}})}))}}),xe="CarouselItem";function br(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===xe}const wr=U({name:xe,setup(e){const{mergedClsPrefixRef:n}=ge(e),r=Be(ut(xe),`n-${ut(xe)}`),s=I(),i=g(()=>{const{value:p}=s;return p?r.getSlideIndex(p):-1}),x=g(()=>r.isPrev(i.value)),C=g(()=>r.isNext(i.value)),y=g(()=>r.isActive(i.value)),R=g(()=>r.getSlideStyle(i.value));Me(()=>{r.addSlide(s.value)}),Ue(()=>{r.removeSlide(s.value)});function m(p){const{value:w}=i;w!==void 0&&(r==null||r.onCarouselItemClick(w,p))}return{mergedClsPrefix:n,selfElRef:s,isPrev:x,isNext:C,isActive:y,index:i,style:R,handleClick:m}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:s,isNext:i,isActive:x,index:C,style:y}=this,R=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:x,[`${r}-carousel__slide--prev`]:s,[`${r}-carousel__slide--next`]:i}];return _("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!x,style:y,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:s,isNext:i,isActive:x,index:C}))}}),_r=on("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[V("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[d("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[V("svg",`
 height: 1em;
 width: 1em;
 `),V("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[V(">",[V("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function yr(e){const{length:n}=e;return n>1&&(e.push(ct(e[0],0,"append")),e.unshift(ct(e[n-1],n-1,"prepend"))),e}function ct(e,n,r){return pt(e,{key:`carousel-item-duplicate-${n}-${r}`})}function dt(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Ne(e,n){return n?e+1:e}function Sr(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function Cr(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function Rr(e,n){return n&&e>3?e-2:e}function ft(e){return window.TouchEvent&&e instanceof window.TouchEvent}function vt(e,n){let{offsetWidth:r,offsetHeight:s}=e;if(n){const i=getComputedStyle(e);r=r-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),s=s-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:r,height:s}}function pe(e,n,r){return e<n?n:e>r?r:e}function $r(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,s,,i="ms"]=r;return Number(s)*(i==="ms"?1:1e3)}return 0}const kr=["transitionDuration","transitionTimingFunction"],zr=Object.assign(Object.assign({},xt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Te=!1;const Ir=U({name:"Carousel",props:zr,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ge(e),s=I(null),i=I(null),x=I([]),C={value:[]},y=g(()=>e.direction==="vertical"),R=g(()=>y.value?"height":"width"),m=g(()=>y.value?"bottom":"right"),p=g(()=>e.effect==="slide"),w=g(()=>e.loop&&e.slidesPerView===1&&p.value),k=g(()=>e.effect==="custom"),W=g(()=>!p.value||e.centeredSlides?1:e.slidesPerView),Z=g(()=>k.value?1:e.slidesPerView),$=g(()=>W.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=I({width:0,height:0}),j=I(0),Y=g(()=>{const{value:t}=x;if(!t.length)return[];j.value;const{value:a}=$;if(a)return t.map(b=>vt(b));const{value:o}=Z,{value:u}=z,{value:c}=R;let l=u[c];if(o!=="auto"){const{spaceBetween:b}=e,N=l-(o-1)*b,ve=1/Math.max(1,o);l=N*ve}const h=Object.assign(Object.assign({},u),{[c]:l});return t.map(()=>h)}),L=g(()=>{const{value:t}=Y;if(!t.length)return[];const{centeredSlides:a,spaceBetween:o}=e,{value:u}=R,{[u]:c}=z.value;let l=0;return t.map(({[u]:h})=>{let b=l;return a&&(b+=(h-c)/2),l+=h+o,b})}),Ze=I(!1),me=g(()=>{const{transitionStyle:t}=e;return t?nt(t,kr):{}}),be=g(()=>k.value?0:$r(me.value.transitionDuration)),Ye=g(()=>{const{value:t}=x;if(!t.length)return[];const a=!($.value||Z.value===1),o=h=>{if(a){const{value:b}=R;return{[b]:`${Y.value[h][b]}px`}}};if(k.value)return t.map((h,b)=>o(b));const{effect:u,spaceBetween:c}=e,{value:l}=m;return t.reduce((h,b,N)=>{const ve=Object.assign(Object.assign({},o(N)),{[`margin-${l}`]:`${c}px`});return h.push(ve),Ze.value&&(u==="fade"||u==="card")&&Object.assign(ve,me.value),h},[])}),T=g(()=>{const{value:t}=W,{length:a}=x.value;if(t!=="auto")return Math.max(a-t,0)+1;{const{value:o}=Y,{length:u}=o;if(!u)return a;const{value:c}=L,{value:l}=R,h=z.value[l];let b=o[o.length-1][l],N=u;for(;N>1&&b<h;)N--,b+=c[N]-c[N-1];return pe(N+1,1,u)}}),we=g(()=>Rr(T.value,w.value)),Dt=Ne(e.defaultIndex,w.value),_e=I(dt(Dt,T.value,w.value)),M=dn(fn(e,"currentIndex"),_e),E=g(()=>Ne(M.value,w.value));function ee(t){var a,o;t=pe(t,0,T.value-1);const u=dt(t,T.value,w.value),{value:c}=M;u!==M.value&&(_e.value=u,(a=e["onUpdate:currentIndex"])===null||a===void 0||a.call(e,u,c),(o=e.onUpdateCurrentIndex)===null||o===void 0||o.call(e,u,c))}function ye(t=E.value){return Sr(t,T.value,e.loop)}function Se(t=E.value){return Cr(t,T.value,e.loop)}function Nt(t){const a=H(t);return a!==null&&ye()===a}function Tt(t){const a=H(t);return a!==null&&Se()===a}function Xe(t){return E.value===H(t)}function Et(t){return M.value===t}function Fe(){return ye()===null}function He(){return Se()===null}let F=0;function Ce(t){const a=pe(Ne(t,w.value),0,T.value);(t!==M.value||a!==E.value)&&ee(a)}function ie(){const t=ye();t!==null&&(F=-1,ee(t))}function te(){const t=Se();t!==null&&(F=1,ee(t))}let A=!1;function At(){(!A||!w.value)&&ie()}function Vt(){(!A||!w.value)&&te()}let X=0;const Re=I({});function le(t,a=0){Re.value=Object.assign({},me.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${a}ms`})}function ne(t=0){p.value?$e(E.value,t):X!==0&&(!A&&t>0&&(A=!0),le(X=0,t))}function $e(t,a){const o=Ke(t);o!==X&&a>0&&(A=!0),X=Ke(E.value),le(o,a)}function Ke(t){let a;return t>=T.value-1?a=qe():a=L.value[t]||0,a}function qe(){if(W.value==="auto"){const{value:t}=R,{[t]:a}=z.value,{value:o}=L,u=o[o.length-1];let c;if(u===void 0)c=a;else{const{value:l}=Y;c=u+l[l.length-1][t]}return c-a}else{const{value:t}=L;return t[T.value-1]||0}}const re={currentIndexRef:M,to:Ce,prev:At,next:Vt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Nt,isNext:Tt,isActive:Xe,isPrevDisabled:Fe,isNextDisabled:He,getSlideIndex:H,getSlideStyle:Ut,addSlide:Ot,removeSlide:Mt,onCarouselItemClick:jt};vr(re);function Ot(t){t&&x.value.push(t)}function Mt(t){if(!t)return;const a=H(t);a!==-1&&x.value.splice(a,1)}function H(t){return typeof t=="number"?t:t?x.value.indexOf(t):-1}function Ut(t){const a=H(t);if(a!==-1){const o=[Ye.value[a]],u=re.isPrev(a),c=re.isNext(a);return u&&o.push(e.prevSlideStyle||""),c&&o.push(e.nextSlideStyle||""),gt(o)}}let ke=0,ze=0,B=0,Ie=0,ue=!1,Pe=!1;function jt(t,a){let o=!A&&!ue&&!Pe;e.effect==="card"&&o&&!Xe(t)&&(Ce(t),o=!1),o||(a.preventDefault(),a.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function K(){de(),!e.autoplay||we.value<2||(ce=window.setInterval(te,e.interval))}function Je(t){var a;if(Te||!(!((a=i.value)===null||a===void 0)&&a.contains(hn(t))))return;Te=!0,ue=!0,Pe=!1,Ie=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const o=ft(t)?t.touches[0]:t;y.value?ze=o.clientY:ke=o.clientX,e.touchable&&(ae("touchmove",document,fe),ae("touchend",document,q),ae("touchcancel",document,q)),e.draggable&&(ae("mousemove",document,fe),ae("mouseup",document,q))}function fe(t){const{value:a}=y,{value:o}=R,u=ft(t)?t.touches[0]:t,c=a?u.clientY-ze:u.clientX-ke,l=z.value[o];B=pe(c,-l,l),t.cancelable&&t.preventDefault(),p.value&&le(X-B,0)}function q(){const{value:t}=E;let a=t;if(!A&&B!==0&&p.value){const o=X-B,u=[...L.value.slice(0,T.value-1),qe()];let c=null;for(let l=0;l<u.length;l++){const h=Math.abs(u[l]-o);if(c!==null&&c<h)break;c=h,a=l}}if(a===t){const o=Date.now()-Ie,{value:u}=R,c=z.value[u];B>c/2||B/o>.4?ie():(B<-c/2||B/o<-.4)&&te()}a!==null&&a!==t?(Pe=!0,ee(a),rt(()=>{(!w.value||_e.value!==M.value)&&ne(be.value)})):ne(be.value),Ge(),K()}function Ge(){ue&&(Te=!1),ue=!1,ke=0,ze=0,B=0,Ie=0,oe("touchmove",document,fe),oe("touchend",document,q),oe("touchcancel",document,q),oe("mousemove",document,fe),oe("mouseup",document,q)}function Lt(){if(p.value&&A){const{value:t}=E;$e(t,0)}else K();p.value&&(Re.value.transitionDuration="0ms"),A=!1}function Bt(t){if(t.preventDefault(),A)return;let{deltaX:a,deltaY:o}=t;t.shiftKey&&!a&&(a=o);const u=-1,c=1,l=(a||o)>0?c:u;let h=0,b=0;y.value?b=l:h=l;const N=10;(b*o>=N||h*a>=N)&&(l===c&&!He()?te():l===u&&!Fe()&&ie())}function Wt(){z.value=vt(s.value,!0),K()}function Zt(){$.value&&j.value++}function Yt(){e.autoplay&&de()}function Xt(){e.autoplay&&K()}Me(()=>{vn(K),requestAnimationFrame(()=>Ze.value=!0)}),Ue(()=>{Ge(),de()}),pn(()=>{const{value:t}=x,{value:a}=C,o=new Map,u=l=>o.has(l)?o.get(l):-1;let c=!1;for(let l=0;l<t.length;l++){const h=a.findIndex(b=>b.el===t[l]);h!==l&&(c=!0),o.set(t[l],h)}c&&t.sort((l,h)=>u(l)-u(h))}),se(E,(t,a)=>{if(t===a){F=0;return}if(K(),p.value){if(w.value){const{value:o}=T;F===-1&&a===1&&t===o-2?t=0:F===1&&a===o-2&&t===1&&(t=o-1)}$e(t,be.value)}else ne();F=0},{immediate:!0}),se([w,W],()=>void rt(()=>{ee(E.value)})),se(L,()=>{p.value&&ne()},{deep:!0}),se(p,t=>{t?ne():(A=!1,le(X=0))});const Ft=g(()=>({onTouchstartPassive:e.touchable?Je:void 0,onMousedown:e.draggable?Je:void 0,onWheel:e.mousewheel?Bt:void 0})),Ht=g(()=>Object.assign(Object.assign({},nt(re,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:we.value,currentIndex:M.value})),Kt=g(()=>({total:we.value,currentIndex:M.value,to:re.to})),qt={getCurrentIndex:()=>M.value,to:Ce,prev:ie,next:te},Jt=xt("Carousel","-carousel",_r,xn,e,n),Qe=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:a,dotColor:o,dotColorActive:u,dotColorFocus:c,dotLineWidth:l,dotLineWidthActive:h,arrowColor:b}}=Jt.value;return{"--n-bezier":t,"--n-dot-color":o,"--n-dot-color-focus":c,"--n-dot-color-active":u,"--n-dot-size":a,"--n-dot-line-width":l,"--n-dot-line-width-active":h,"--n-arrow-color":b}}),J=r?gn("carousel",void 0,Qe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:s,slidesElRef:i,slideVNodes:C,duplicatedable:w,userWantsControl:k,autoSlideSize:$,realIndex:E,slideStyles:Ye,translateStyle:Re,slidesControlListeners:Ft,handleTransitionEnd:Lt,handleResize:Wt,handleSlideResize:Zt,handleMouseenter:Yt,handleMouseleave:Xt,isActive:Et,arrowSlotProps:Ht,dotSlotProps:Kt},qt),{cssVars:r?void 0:Qe,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:s,slideStyles:i,dotType:x,dotPlacement:C,slidesControlListeners:y,transitionProps:R={},arrowSlotProps:m,dotSlotProps:p,$slots:{default:w,dots:k,arrow:W}}=this,Z=w&&sn(w())||[];let $=Pr(Z);return $.length||($=Z.map(z=>_(wr,null,{default:()=>pt(z)}))),this.duplicatedable&&($=yr($)),this.slideVNodes.value=$,this.autoSlideSize&&($=$.map(z=>_(et,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,s&&`${n}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(et,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},s?$.map((z,j)=>_("div",{style:i[j],key:j},ln(_(cn,Object.assign({},R),{default:()=>z}),[[un,this.isActive(j)]]))):$)}),this.showDots&&p.total>1&&tt(k,p,()=>[_(mr,{key:x+C,total:p.total,currentIndex:p.currentIndex,dotType:x,trigger:this.trigger,keyboard:this.keyboard})]),r&&tt(W,m,()=>[_(gr,null)]))}});function Pr(e){return e.reduce((n,r)=>(br(r)&&n.push(r),n),[])}const Dr={class:"home-container animate__animated animate__pulse"},Nr=U({__name:"SPic",setup(e){const n=I(),{y:r}=wn();return se(r,s=>{n.value.style.transform=`translateY(${-s/6}px)`}),(s,i)=>(S(),P("div",Dr,[i[0]||(i[0]=v("div",{class:"logo animate__animated animate__fadeInUp pointer-events-none"},[v("div",{class:"title mx-auto"},[v("div",{class:"text-80px sm:text-100px md:text-120px lg:text-140px scale-x-115"},"TJUUS")]),v("div",{class:"describe"},[Ae("TianJinUniversity"),v("br"),Ae("UnitedServer")])],-1)),v("div",{class:"background",ref_key:"background",ref:n},null,512)]))}}),Tr=O(Nr,[["__scopeId","data-v-6a2ac41f"]]),Er={},Ar={class:"bg flex justify-center items-center h-100px w-85% mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all"};function Vr(e,n){return S(),P("div",Ar,n[0]||(n[0]=[v("div",{class:"tip-text absolute sm:text-3xl text-xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out"}," #网站正在施工中...... ",-1)]))}const Or=O(Er,[["render",Vr],["__scopeId","data-v-46aa5e10"]]),Mr={class:"main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem"},Ur={class:"sub"},jr=U({__name:"Divline",props:{main:String,sub:String},setup(e){return(n,r)=>(S(),P("div",null,[v("div",Mr,Q(e.main),1),v("div",Ur,Q(e.sub),1)]))}}),Ee=O(jr,[["__scopeId","data-v-224d59c0"]]),Lr={class:"n-card border-solid border-op-20 border-dark-50 rounded-lg shadow-lg border-1 hover:scale-103 transition-all duration-500 ease-in-out lg:w-80% box-border max-w-780px dark:bg-dark-600 dark:border-dark-700 bg-white dark:text-white"},Br={class:"flex flex-col md:flex-row md:h-55 p-0"},Wr=["src"],Zr={class:"text-xl font-bold mb-2"},Yr={class:""},Xr=U({__name:"InfoCard",props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},imageOnRight:{type:Boolean,default:!1}},setup(e){function n(s){return s.slice(0,30)+(s.length>30?"......":"")}const r=e;return(s,i)=>(S(),P("div",Lr,[v("div",Br,[v("div",{class:De(["w-full md:w-1/2",{"md:order-2":e.imageOnRight,"order-1":!e.imageOnRight}])},[v("img",{src:r.imageSrc,class:De(["w-full h-full object-cover",{"rounded-t-lg md:rounded-l-lg md:rounded-tr-none":!e.imageOnRight,"rounded-t-lg md:rounded-r-lg md:rounded-tl-none":e.imageOnRight}])},null,10,Wr)],2),v("div",{class:De(["w-full md:w-1/2 px-6 py-4 min-h-40",{"order-1":e.imageOnRight,"order-2":!e.imageOnRight}])},[v("h2",Zr,Q(r.title),1),v("p",Yr,Q(n(r.description)),1)],2)])]))}}),Fr=O(Xr,[["__scopeId","data-v-e0bce645"]]),Hr=[{imageSrc:"server/tianda1.png",title:"文本1",description:"这是文本1的描述"},{imageSrc:"server/tianda2.png",title:"文本2",description:"这是文本2的描述"},{imageSrc:"server/tianda2.png",title:"文本3",description:"这是文本3的描述"},{imageSrc:"server/tianda2.png",title:"文本4",description:"这是文本4的描述"},{imageSrc:"server/tianda2.png",title:"文本5",description:"这是文本5的描述"}],Kr=["eg/1.png","eg/2.png","eg/0.png","eg/5.png","eg/7.png","eg/8.png"],qr=[{imageSrc:"building/dongdamen.jpeg",title:"天大大门",description:"实事求是"},{imageSrc:"eg/6.png",title:"网图 0",description:"Description"},{imageSrc:"eg/3.png",title:"网图 1",description:"Description too"},{imageSrc:"eg/4.png",title:"网图 2",description:"Description again"}],We={server:Hr,carousel:Kr,building:qr},Jr={class:"servers-container sm:w-85% box-border"},Gr={class:"grid place-items-center"},Qr=U({__name:"InfoCards",setup(e){const n=I(We.server);return(r,s)=>(S(),P("div",Jr,[v("div",Gr,[(S(!0),P(he,null,je(n.value,(i,x)=>(S(),Le(Fr,{key:x,imageSrc:i.imageSrc,title:i.title,description:i.description,imageOnRight:x%2===1},null,8,["imageSrc","title","description","imageOnRight"]))),128))])]))}}),ea=O(Qr,[["__scopeId","data-v-93140b40"]]),ta={class:"component"},na={class:"flex justify-center align-center"},ra={class:"text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50"},aa={class:"text-center text-.8rem dark:text-cyan100"},oa={__name:"Building",props:{title:{type:String,required:!0},description:{type:String,required:!0},imageSrc:{type:String,required:!0}},setup(e){return(n,r)=>(S(),P("div",ta,[v("div",na,[v("div",{class:"bg rounded-lg hover:scale-108 transition-all duration-300 border",style:gt({backgroundImage:`url(${e.imageSrc})`})},null,4)]),v("h2",ra,Q(e.title),1),v("p",aa,Q(e.description),1)]))}},sa=O(oa,[["__scopeId","data-v-d1daf901"]]),ia={class:"building-container"},la={class:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}},ua=U({__name:"Buildings",setup(e){const n=I(We.building);return(r,s)=>(S(),P("div",ia,[v("div",la,[(S(!0),P(he,null,je(n.value,(i,x)=>(S(),Le(sa,{key:x,imageSrc:i.imageSrc,title:i.title,description:i.description},null,8,["imageSrc","title","description"]))),128))])]))}}),ca=O(ua,[["__scopeId","data-v-74e62907"]]),da=["src"],fa={__name:"Carousel",setup(e){const n=I(1),r=I(We.carousel);function s(){n.value=window.innerWidth>768?3:1}return Me(()=>{s(),window.addEventListener("resize",s)}),Ue(()=>{window.removeEventListener("resize",s)}),(i,x)=>(S(),Le(Ve(Ir),{autoplay:"","slides-per-view":n.value,"space-between":20},{default:mn(()=>[(S(!0),P(he,null,je(r.value,(C,y)=>(S(),P("img",{key:y,class:"carousel-img",src:C},null,8,da))),128))]),_:1},8,["slides-per-view"]))}},va=O(fa,[["__scopeId","data-v-b2593021"]]),pa={},xa={class:"background relative sm:h-500px h-300px w-100vw"};function ga(e,n){return S(),P("div",xa,n[0]||(n[0]=[bn('<div class="text-white relative" data-v-266e128a><div class="z-1 absolute overflow-hidden sm:h-500px h-300px p-30px pl-20 box-border" data-v-266e128a><h1 data-v-266e128a>TJUUS</h1><h2 data-v-266e128a>是一个</h2><h2 data-v-266e128a>人很多</h2><h2 data-v-266e128a>的</h2><h2 data-v-266e128a>社团</h2><h3 data-v-266e128a>测试超出范围</h3><h3 data-v-266e128a>测试超出范围</h3><h3 data-v-266e128a>测试超出范围</h3><h3 data-v-266e128a>测试超出范围</h3><h3 data-v-266e128a>测试超出范围</h3><h3 data-v-266e128a>测试超出范围</h3><h3 data-v-266e128a>测试超出范围</h3></div></div>',1)]))}const ha=O(pa,[["render",ga],["__scopeId","data-v-266e128a"]]),ma="https://kly777.github.io/TJUUS/icon/bili.png",ba={},wa={class:"follow-container"};function _a(e,n){return S(),P("div",wa,n[0]||(n[0]=[v("div",{class:"overlay"},[v("h1",null,"关注我们!!!!!"),v("p",null,[v("a",{href:"https://space.bilibili.com/1343371808",target:"_blank",class:"text-white flex items-center justify-center decoration-none"},[v("img",{src:ma,alt:"bilibili Logo",class:"h-7 mr-2"}),Ae(" bilibili ")])])],-1)]))}const ya=O(ba,[["render",_a],["__scopeId","data-v-0fa9df34"]]),Sa={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-85% py-8"},Ca={class:"grid sc box-border justify-center items-center sm:mx-7 mx-9"},Ra={class:"grid-cols-1"},$a={class:"h-auto w-0 justify-self-start creeper"},ka={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8"},za={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},Ia=U({__name:"Home",setup(e){return _n(),(n,r)=>(S(),P(he,null,[D(Tr),v("div",Sa,[D(Or,{class:"developing"})]),D(Ve(at)),v("div",Ca,[v("div",Ra,[D(ea,{class:"row lg:w-80%"})]),v("div",$a,[D(yn,{class:"md:h-400px md:w-400px lg:h-550px lg:w-550px sm:h-350px sm:w-300px w-200px h-260px"})])]),v("div",ka,[D(Ve(at)),D(Ee,{class:"row",main:"我们是",sub:"TJUUS"})]),D(ha),v("div",za,[D(Ee,{class:"row",main:"建设成果",sub:"探索Minecraft的无限可能"}),D(ca,{class:"row"}),D(Ee,{class:"row my-5",main:"我们的伙伴",sub:"联合"}),D(va,{class:"row my-5"})]),D(ya)],64))}}),Ta=O(Ia,[["__scopeId","data-v-184c821b"]]);export{Ta as default};
