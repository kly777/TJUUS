import{u as Jt,t as Oe,a as Gt,i as Qt,c as en,p as tn,d as U,h as _,b as ge,e as nn,r as z,o as rn,f as g,g as Ve,j as Me,k as on,l as f,m as v,n as O,q as ft,s as sn,V as Qe,v as et,w as an,x as ln,T as un,y as tt,z as cn,A as dn,B as fn,C as vn,D as ae,E as vt,F as xn,G as pn,H as gn,I as oe,J as nt,K as se,L as xt,M as P,N as u,O as Ae,P as S,_ as V,Q,R as De,S as me,U as Ue,W as je,X as mn,Y as pt,Z as T}from"./index-BWGSNwMr.js";import{u as hn,C as bn}from"./Creeper-SDWRr-5_.js";import{N as wn}from"./Divider-BQvb0fA4.js";function _n(e){return Jt(Oe(e).toLowerCase())}function yn(e,n,r,a){for(var i=-1,p=e==null?0:e.length;++i<p;)r=n(r,e[i],i,e);return r}function Sn(e){return function(n){return e==null?void 0:e[n]}}var Cn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Rn=Sn(Cn),$n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,In="\\u0300-\\u036f",kn="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",Pn=In+kn+zn,Dn="["+Pn+"]",Tn=RegExp(Dn,"g");function Nn(e){return e=Oe(e),e&&e.replace($n,Rn).replace(Tn,"")}var En=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function An(e){return e.match(En)||[]}var On=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Vn(e){return On.test(e)}var gt="\\ud800-\\udfff",Mn="\\u0300-\\u036f",Un="\\ufe20-\\ufe2f",jn="\\u20d0-\\u20ff",Ln=Mn+Un+jn,mt="\\u2700-\\u27bf",ht="a-z\\xdf-\\xf6\\xf8-\\xff",Bn="\\xac\\xb1\\xd7\\xf7",Zn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Fn="\\u2000-\\u206f",Wn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bt="A-Z\\xc0-\\xd6\\xd8-\\xde",Yn="\\ufe0e\\ufe0f",wt=Bn+Zn+Fn+Wn,_t="['’]",rt="["+wt+"]",Xn="["+Ln+"]",yt="\\d+",Hn="["+mt+"]",St="["+ht+"]",Ct="[^"+gt+wt+yt+mt+ht+bt+"]",Kn="\\ud83c[\\udffb-\\udfff]",qn="(?:"+Xn+"|"+Kn+")",Jn="[^"+gt+"]",Rt="(?:\\ud83c[\\udde6-\\uddff]){2}",$t="[\\ud800-\\udbff][\\udc00-\\udfff]",G="["+bt+"]",Gn="\\u200d",ot="(?:"+St+"|"+Ct+")",Qn="(?:"+G+"|"+Ct+")",st="(?:"+_t+"(?:d|ll|m|re|s|t|ve))?",at="(?:"+_t+"(?:D|LL|M|RE|S|T|VE))?",It=qn+"?",kt="["+Yn+"]?",er="(?:"+Gn+"(?:"+[Jn,Rt,$t].join("|")+")"+kt+It+")*",tr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rr=kt+It+er,or="(?:"+[Hn,Rt,$t].join("|")+")"+rr,sr=RegExp([G+"?"+St+"+"+st+"(?="+[rt,G,"$"].join("|")+")",Qn+"+"+at+"(?="+[rt,G+ot,"$"].join("|")+")",G+"?"+ot+"+"+st,G+"+"+at,nr,tr,yt,or].join("|"),"g");function ar(e){return e.match(sr)||[]}function ir(e,n,r){return e=Oe(e),n=n,n===void 0?Vn(e)?ar(e):An(e):e.match(n)||[]}var lr="['’]",ur=RegExp(lr,"g");function cr(e){return function(n){return yn(ir(Nn(n).replace(ur,"")),e,"")}}var it=cr(function(e,n,r){return n=n.toLowerCase(),e+(r?_n(n):n)});const zt=en("n-carousel-methods");function dr(e){tn(zt,e)}function Le(e="unknown",n="component"){const r=Qt(zt);return r||Gt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function fr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function vr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const xr=U({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ge(e),{isVertical:r,isPrevDisabled:a,isNextDisabled:i,prev:p,next:C}=Le();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:a,isNextDisabled:i,prev:p,next:C}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},fr()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},vr()))}}),pr={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},gr=U({name:"CarouselDots",props:pr,setup(e){const{mergedClsPrefixRef:n}=ge(e),r=z([]),a=Le();function i(h,x){switch(h.key){case"Enter":case" ":h.preventDefault(),a.to(x);return}e.keyboard&&y(h)}function p(h){e.trigger==="hover"&&a.to(h)}function C(h){e.trigger==="click"&&a.to(h)}function y(h){var x;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const w=(x=document.activeElement)===null||x===void 0?void 0:x.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:I}=h,Z=I==="PageUp"||I==="ArrowUp",F=I==="PageDown"||I==="ArrowDown",$=I==="PageUp"||I==="ArrowRight",k=I==="PageDown"||I==="ArrowLeft",j=a.isVertical(),W=j?Z:$,L=j?F:k;!W&&!L||(h.preventDefault(),W&&!a.isNextDisabled()?(a.next(),R(a.currentIndexRef.value)):L&&!a.isPrevDisabled()&&(a.prev(),R(a.currentIndexRef.value)))}function R(h){var x;(x=r.value[h])===null||x===void 0||x.focus()}return rn(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:i,handleMouseenter:p,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},nn(this.total,r=>{const a=r===this.currentIndex;return _("div",{"aria-selected":a,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,a&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:i=>{this.handleKeydown(i,r)}})}))}}),pe="CarouselItem";function mr(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===pe}const hr=U({name:pe,setup(e){const{mergedClsPrefixRef:n}=ge(e),r=Le(it(pe),`n-${it(pe)}`),a=z(),i=g(()=>{const{value:x}=a;return x?r.getSlideIndex(x):-1}),p=g(()=>r.isPrev(i.value)),C=g(()=>r.isNext(i.value)),y=g(()=>r.isActive(i.value)),R=g(()=>r.getSlideStyle(i.value));Ve(()=>{r.addSlide(a.value)}),Me(()=>{r.removeSlide(a.value)});function h(x){const{value:w}=i;w!==void 0&&(r==null||r.onCarouselItemClick(w,x))}return{mergedClsPrefix:n,selfElRef:a,isPrev:p,isNext:C,isActive:y,index:i,style:R,handleClick:h}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:a,isNext:i,isActive:p,index:C,style:y}=this,R=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:p,[`${r}-carousel__slide--prev`]:a,[`${r}-carousel__slide--next`]:i}];return _("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!p,style:y,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:a,isNext:i,isActive:p,index:C}))}}),br=on("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[f("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[f("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[O("> img",`
 display: block;
 `)])]),f("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dot",[f("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[O("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 background-color: var(--n-dot-color-active);
 `)])]),v("line",[f("dot",`
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
 `,[O("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),f("arrow",`
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
 `,[O("svg",`
 height: 1em;
 width: 1em;
 `),O("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),v("vertical",`
 touch-action: pan-x;
 `,[f("slides",`
 flex-direction: column;
 `),v("fade",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),v("card",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[v("current",`
 transform: translateY(-50%) translateZ(0);
 `),v("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),v("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),v("usercontrol",[f("slides",[O(">",[O("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),v("left",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `)]),f("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),v("vertical",[f("arrow",`
 transform: rotate(90deg);
 `)]),v("show-arrow",[v("bottom",[f("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),v("top",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("left",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("right",[f("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),v("left",[f("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[O("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("right",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[O("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("top",[f("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 top: 12px;
 right: 12px;
 `,[O("> *:first-child",`
 margin-right: 12px;
 `)])]),v("bottom",[f("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[O("> *:first-child",`
 margin-right: 12px;
 `)])]),v("fade",[f("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[v("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),v("card",[f("slides",`
 perspective: 1000px;
 `),f("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[v("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),v("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),v("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function wr(e){const{length:n}=e;return n>1&&(e.push(lt(e[0],0,"append")),e.unshift(lt(e[n-1],n-1,"prepend"))),e}function lt(e,n,r){return ft(e,{key:`carousel-item-duplicate-${n}-${r}`})}function ut(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Te(e,n){return n?e+1:e}function _r(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function yr(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function Sr(e,n){return n&&e>3?e-2:e}function ct(e){return window.TouchEvent&&e instanceof window.TouchEvent}function dt(e,n){let{offsetWidth:r,offsetHeight:a}=e;if(n){const i=getComputedStyle(e);r=r-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),a=a-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:r,height:a}}function xe(e,n,r){return e<n?n:e>r?r:e}function Cr(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,a,,i="ms"]=r;return Number(a)*(i==="ms"?1:1e3)}return 0}const Rr=["transitionDuration","transitionTimingFunction"],$r=Object.assign(Object.assign({},vt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ne=!1;const Ir=U({name:"Carousel",props:$r,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ge(e),a=z(null),i=z(null),p=z([]),C={value:[]},y=g(()=>e.direction==="vertical"),R=g(()=>y.value?"height":"width"),h=g(()=>y.value?"bottom":"right"),x=g(()=>e.effect==="slide"),w=g(()=>e.loop&&e.slidesPerView===1&&x.value),I=g(()=>e.effect==="custom"),Z=g(()=>!x.value||e.centeredSlides?1:e.slidesPerView),F=g(()=>I.value?1:e.slidesPerView),$=g(()=>Z.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),k=z({width:0,height:0}),j=z(0),W=g(()=>{const{value:t}=p;if(!t.length)return[];j.value;const{value:o}=$;if(o)return t.map(b=>dt(b));const{value:s}=F,{value:c}=k,{value:d}=R;let l=c[d];if(s!=="auto"){const{spaceBetween:b}=e,D=l-(s-1)*b,ve=1/Math.max(1,s);l=D*ve}const m=Object.assign(Object.assign({},c),{[d]:l});return t.map(()=>m)}),L=g(()=>{const{value:t}=W;if(!t.length)return[];const{centeredSlides:o,spaceBetween:s}=e,{value:c}=R,{[c]:d}=k.value;let l=0;return t.map(({[c]:m})=>{let b=l;return o&&(b+=(m-d)/2),l+=m+s,b})}),Ze=z(!1),he=g(()=>{const{transitionStyle:t}=e;return t?tt(t,Rr):{}}),be=g(()=>I.value?0:Cr(he.value.transitionDuration)),Fe=g(()=>{const{value:t}=p;if(!t.length)return[];const o=!($.value||F.value===1),s=m=>{if(o){const{value:b}=R;return{[b]:`${W.value[m][b]}px`}}};if(I.value)return t.map((m,b)=>s(b));const{effect:c,spaceBetween:d}=e,{value:l}=h;return t.reduce((m,b,D)=>{const ve=Object.assign(Object.assign({},s(D)),{[`margin-${l}`]:`${d}px`});return m.push(ve),Ze.value&&(c==="fade"||c==="card")&&Object.assign(ve,he.value),m},[])}),N=g(()=>{const{value:t}=Z,{length:o}=p.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:s}=W,{length:c}=s;if(!c)return o;const{value:d}=L,{value:l}=R,m=k.value[l];let b=s[s.length-1][l],D=c;for(;D>1&&b<m;)D--,b+=d[D]-d[D-1];return xe(D+1,1,c)}}),we=g(()=>Sr(N.value,w.value)),Pt=Te(e.defaultIndex,w.value),_e=z(ut(Pt,N.value,w.value)),M=cn(dn(e,"currentIndex"),_e),E=g(()=>Te(M.value,w.value));function ee(t){var o,s;t=xe(t,0,N.value-1);const c=ut(t,N.value,w.value),{value:d}=M;c!==M.value&&(_e.value=c,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,c,d),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,c,d))}function ye(t=E.value){return _r(t,N.value,e.loop)}function Se(t=E.value){return yr(t,N.value,e.loop)}function Dt(t){const o=H(t);return o!==null&&ye()===o}function Tt(t){const o=H(t);return o!==null&&Se()===o}function We(t){return E.value===H(t)}function Nt(t){return M.value===t}function Ye(){return ye()===null}function Xe(){return Se()===null}let X=0;function Ce(t){const o=xe(Te(t,w.value),0,N.value);(t!==M.value||o!==E.value)&&ee(o)}function ie(){const t=ye();t!==null&&(X=-1,ee(t))}function te(){const t=Se();t!==null&&(X=1,ee(t))}let A=!1;function Et(){(!A||!w.value)&&ie()}function At(){(!A||!w.value)&&te()}let Y=0;const Re=z({});function le(t,o=0){Re.value=Object.assign({},he.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function ne(t=0){x.value?$e(E.value,t):Y!==0&&(!A&&t>0&&(A=!0),le(Y=0,t))}function $e(t,o){const s=He(t);s!==Y&&o>0&&(A=!0),Y=He(E.value),le(s,o)}function He(t){let o;return t>=N.value-1?o=Ke():o=L.value[t]||0,o}function Ke(){if(Z.value==="auto"){const{value:t}=R,{[t]:o}=k.value,{value:s}=L,c=s[s.length-1];let d;if(c===void 0)d=o;else{const{value:l}=W;d=c+l[l.length-1][t]}return d-o}else{const{value:t}=L;return t[N.value-1]||0}}const re={currentIndexRef:M,to:Ce,prev:Et,next:At,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Dt,isNext:Tt,isActive:We,isPrevDisabled:Ye,isNextDisabled:Xe,getSlideIndex:H,getSlideStyle:Mt,addSlide:Ot,removeSlide:Vt,onCarouselItemClick:Ut};dr(re);function Ot(t){t&&p.value.push(t)}function Vt(t){if(!t)return;const o=H(t);o!==-1&&p.value.splice(o,1)}function H(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function Mt(t){const o=H(t);if(o!==-1){const s=[Fe.value[o]],c=re.isPrev(o),d=re.isNext(o);return c&&s.push(e.prevSlideStyle||""),d&&s.push(e.nextSlideStyle||""),xt(s)}}let Ie=0,ke=0,B=0,ze=0,ue=!1,Pe=!1;function Ut(t,o){let s=!A&&!ue&&!Pe;e.effect==="card"&&s&&!We(t)&&(Ce(t),s=!1),s||(o.preventDefault(),o.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function K(){de(),!e.autoplay||we.value<2||(ce=window.setInterval(te,e.interval))}function qe(t){var o;if(Ne||!(!((o=i.value)===null||o===void 0)&&o.contains(gn(t))))return;Ne=!0,ue=!0,Pe=!1,ze=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=ct(t)?t.touches[0]:t;y.value?ke=s.clientY:Ie=s.clientX,e.touchable&&(oe("touchmove",document,fe),oe("touchend",document,q),oe("touchcancel",document,q)),e.draggable&&(oe("mousemove",document,fe),oe("mouseup",document,q))}function fe(t){const{value:o}=y,{value:s}=R,c=ct(t)?t.touches[0]:t,d=o?c.clientY-ke:c.clientX-Ie,l=k.value[s];B=xe(d,-l,l),t.cancelable&&t.preventDefault(),x.value&&le(Y-B,0)}function q(){const{value:t}=E;let o=t;if(!A&&B!==0&&x.value){const s=Y-B,c=[...L.value.slice(0,N.value-1),Ke()];let d=null;for(let l=0;l<c.length;l++){const m=Math.abs(c[l]-s);if(d!==null&&d<m)break;d=m,o=l}}if(o===t){const s=Date.now()-ze,{value:c}=R,d=k.value[c];B>d/2||B/s>.4?ie():(B<-d/2||B/s<-.4)&&te()}o!==null&&o!==t?(Pe=!0,ee(o),nt(()=>{(!w.value||_e.value!==M.value)&&ne(be.value)})):ne(be.value),Je(),K()}function Je(){ue&&(Ne=!1),ue=!1,Ie=0,ke=0,B=0,ze=0,se("touchmove",document,fe),se("touchend",document,q),se("touchcancel",document,q),se("mousemove",document,fe),se("mouseup",document,q)}function jt(){if(x.value&&A){const{value:t}=E;$e(t,0)}else K();x.value&&(Re.value.transitionDuration="0ms"),A=!1}function Lt(t){if(t.preventDefault(),A)return;let{deltaX:o,deltaY:s}=t;t.shiftKey&&!o&&(o=s);const c=-1,d=1,l=(o||s)>0?d:c;let m=0,b=0;y.value?b=l:m=l;const D=10;(b*s>=D||m*o>=D)&&(l===d&&!Xe()?te():l===c&&!Ye()&&ie())}function Bt(){k.value=dt(a.value,!0),K()}function Zt(){$.value&&j.value++}function Ft(){e.autoplay&&de()}function Wt(){e.autoplay&&K()}Ve(()=>{fn(K),requestAnimationFrame(()=>Ze.value=!0)}),Me(()=>{Je(),de()}),vn(()=>{const{value:t}=p,{value:o}=C,s=new Map,c=l=>s.has(l)?s.get(l):-1;let d=!1;for(let l=0;l<t.length;l++){const m=o.findIndex(b=>b.el===t[l]);m!==l&&(d=!0),s.set(t[l],m)}d&&t.sort((l,m)=>c(l)-c(m))}),ae(E,(t,o)=>{if(t===o){X=0;return}if(K(),x.value){if(w.value){const{value:s}=N;X===-1&&o===1&&t===s-2?t=0:X===1&&o===s-2&&t===1&&(t=s-1)}$e(t,be.value)}else ne();X=0},{immediate:!0}),ae([w,Z],()=>void nt(()=>{ee(E.value)})),ae(L,()=>{x.value&&ne()},{deep:!0}),ae(x,t=>{t?ne():(A=!1,le(Y=0))});const Yt=g(()=>({onTouchstartPassive:e.touchable?qe:void 0,onMousedown:e.draggable?qe:void 0,onWheel:e.mousewheel?Lt:void 0})),Xt=g(()=>Object.assign(Object.assign({},tt(re,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:we.value,currentIndex:M.value})),Ht=g(()=>({total:we.value,currentIndex:M.value,to:re.to})),Kt={getCurrentIndex:()=>M.value,to:Ce,prev:ie,next:te},qt=vt("Carousel","-carousel",br,xn,e,n),Ge=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:s,dotColorActive:c,dotColorFocus:d,dotLineWidth:l,dotLineWidthActive:m,arrowColor:b}}=qt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":d,"--n-dot-color-active":c,"--n-dot-size":o,"--n-dot-line-width":l,"--n-dot-line-width-active":m,"--n-arrow-color":b}}),J=r?pn("carousel",void 0,Ge,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:a,slidesElRef:i,slideVNodes:C,duplicatedable:w,userWantsControl:I,autoSlideSize:$,realIndex:E,slideStyles:Fe,translateStyle:Re,slidesControlListeners:Yt,handleTransitionEnd:jt,handleResize:Bt,handleSlideResize:Zt,handleMouseenter:Ft,handleMouseleave:Wt,isActive:Nt,arrowSlotProps:Xt,dotSlotProps:Ht},Kt),{cssVars:r?void 0:Ge,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:a,slideStyles:i,dotType:p,dotPlacement:C,slidesControlListeners:y,transitionProps:R={},arrowSlotProps:h,dotSlotProps:x,$slots:{default:w,dots:I,arrow:Z}}=this,F=w&&sn(w())||[];let $=kr(F);return $.length||($=F.map(k=>_(hr,null,{default:()=>ft(k)}))),this.duplicatedable&&($=wr($)),this.slideVNodes.value=$,this.autoSlideSize&&($=$.map(k=>_(Qe,{onResize:this.handleSlideResize},{default:()=>k}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,a&&`${n}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Qe,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},a?$.map((k,j)=>_("div",{style:i[j],key:j},an(_(un,Object.assign({},R),{default:()=>k}),[[ln,this.isActive(j)]]))):$)}),this.showDots&&x.total>1&&et(I,x,()=>[_(gr,{key:p+C,total:x.total,currentIndex:x.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),r&&et(Z,h,()=>[_(xr,null)]))}});function kr(e){return e.reduce((n,r)=>(mr(r)&&n.push(r),n),[])}const zr={class:"home-container animate__animated animate__pulse"},Pr=U({__name:"PageBanner",setup(e){const n=z(),{y:r}=hn();return ae(r,a=>{n.value.style.transform=`translateY(${-a/6}px)`}),(a,i)=>(S(),P("div",zr,[i[0]||(i[0]=u("div",{class:"logo animate__animated animate__fadeInUp pointer-events-none"},[u("div",{class:"title mx-auto"},[u("div",{class:"text-80px sm:text-100px md:text-120px lg:text-140px scale-x-115"},"TJUUS")]),u("div",{class:"describe"},[Ae("TianJinUniversity"),u("br"),Ae("UnitedServer")])],-1)),u("div",{class:"background",ref_key:"background",ref:n},null,512)]))}}),Dr=V(Pr,[["__scopeId","data-v-fdc04c0a"]]),Tr={},Nr={class:"bg flex justify-center items-center h-100px w-85% mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all"};function Er(e,n){return S(),P("div",Nr,n[0]||(n[0]=[u("div",{class:"tip-text absolute sm:text-3xl text-xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out"}," #网站正在施工中...... ",-1)]))}const Ar=V(Tr,[["render",Er],["__scopeId","data-v-46aa5e10"]]),Or={class:"main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem"},Vr={class:"sub"},Mr=U({__name:"SectionTitle",props:{main:String,sub:String},setup(e){return(n,r)=>(S(),P("div",null,[u("div",Or,Q(e.main),1),u("div",Vr,Q(e.sub),1)]))}}),Ee=V(Mr,[["__scopeId","data-v-e056fb76"]]),Ur={class:"n-card border-solid border-op-20 border-dark-50 rounded-lg shadow-lg border-1 hover:scale-103 transition-all duration-500 ease-in-out lg:w-80% box-border max-w-780px dark:bg-dark-600 dark:border-dark-700 bg-white dark:text-white"},jr={class:"flex flex-col md:flex-row md:h-55 p-0"},Lr=["src"],Br={class:"text-xl font-bold mb-2"},Zr={class:""},Fr=U({__name:"InfoCard",props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},imageOnRight:{type:Boolean,default:!1}},setup(e){function n(a){return a.slice(0,30)+(a.length>30?"......":"")}const r=e;return(a,i)=>(S(),P("div",Ur,[u("div",jr,[u("div",{class:De(["w-full md:w-1/2",{"md:order-2":e.imageOnRight,"order-1":!e.imageOnRight}])},[u("img",{src:r.imageSrc,class:De(["w-full h-full object-cover",{"rounded-t-lg md:rounded-l-lg md:rounded-tr-none":!e.imageOnRight,"rounded-t-lg md:rounded-r-lg md:rounded-tl-none":e.imageOnRight}])},null,10,Lr)],2),u("div",{class:De(["w-full md:w-1/2 px-6 py-4 min-h-40",{"order-1":e.imageOnRight,"order-2":!e.imageOnRight}])},[u("h2",Br,Q(r.title),1),u("p",Zr,Q(n(r.description)),1)],2)])]))}}),Wr=V(Fr,[["__scopeId","data-v-d2d94c0e"]]),Yr=[{imageSrc:"server/tianda1.png",title:"文本1",description:"这是文本1的描述"},{imageSrc:"server/tianda2.png",title:"文本2",description:"这是文本2的描述"},{imageSrc:"server/tianda2.png",title:"文本3",description:"这是文本3的描述"},{imageSrc:"server/tianda2.png",title:"文本4",description:"这是文本4的描述"},{imageSrc:"server/tianda2.png",title:"文本5",description:"这是文本5的描述"}],Xr=["eg/1.png","eg/2.png","eg/0.png","eg/5.png","eg/7.png","eg/8.png"],Hr=[{imageSrc:"building/eastDoor.png",title:"天大大门",description:"实事求是"},{imageSrc:"building/shiShi.png",title:"北洋广场",description:"Description"},{imageSrc:"building/胡.png",title:"网图 1",description:"Description too"},{imageSrc:"building/水塔.png",title:"网图 2",description:"Description again"}],Be={server:Yr,carousel:Xr,building:Hr},Kr={class:"servers-container sm:w-85% box-border"},qr={class:"grid place-items-center"},Jr=U({__name:"InfoCards",setup(e){const n=z(Be.server);return(r,a)=>(S(),P("div",Kr,[u("div",qr,[(S(!0),P(me,null,Ue(n.value,(i,p)=>(S(),je(Wr,{key:p,imageSrc:i.imageSrc,title:i.title,description:i.description,imageOnRight:p%2===1},null,8,["imageSrc","title","description","imageOnRight"]))),128))])]))}}),Gr=V(Jr,[["__scopeId","data-v-93140b40"]]),Qr={class:"component"},eo={class:"flex justify-center align-center"},to={class:"text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50"},no={class:"text-center text-.8rem dark:text-cyan100"},ro={__name:"FeaturedItem",props:{title:{type:String,required:!0},description:{type:String,required:!0},imageSrc:{type:String,required:!0}},setup(e){return(n,r)=>(S(),P("div",Qr,[u("div",eo,[u("div",{class:"bg rounded-lg hover:scale-108 transition-all duration-300 border",style:xt({backgroundImage:`url(${e.imageSrc})`})},null,4)]),u("h2",to,Q(e.title),1),u("p",no,Q(e.description),1)]))}},oo=V(ro,[["__scopeId","data-v-7af50fc6"]]),so={class:"building-container"},ao={class:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}},io=U({__name:"FeaturedItems",setup(e){const n=z(Be.building);return(r,a)=>(S(),P("div",so,[u("div",ao,[(S(!0),P(me,null,Ue(n.value,(i,p)=>(S(),je(oo,{key:p,imageSrc:i.imageSrc,title:i.title,description:i.description},null,8,["imageSrc","title","description"]))),128))])]))}}),lo=V(io,[["__scopeId","data-v-342f42e6"]]),uo=["src"],co={__name:"Carousel",setup(e){const n=z(1),r=z(Be.carousel);function a(){n.value=window.innerWidth>768?3:1}return Ve(()=>{a(),window.addEventListener("resize",a)}),Me(()=>{window.removeEventListener("resize",a)}),(i,p)=>(S(),je(pt(Ir),{autoplay:"","slides-per-view":n.value,"space-between":20},{default:mn(()=>[(S(!0),P(me,null,Ue(r.value,(C,y)=>(S(),P("img",{key:y,class:"carousel-img",src:C},null,8,uo))),128))]),_:1},8,["slides-per-view"]))}},fo=V(co,[["__scopeId","data-v-b2593021"]]),vo={},xo={class:"background relative sm:h-500px h-300px w-100vw"};function po(e,n){return S(),P("div",xo,n[0]||(n[0]=[u("div",{class:"text-white relative"},[u("div",{class:"z-1 absolute overflow-hidden sm:h-500px w-100vw h-300px p-30px pl-20 box-border flex flex-col items-start flex-wrap"},[u("h1",null,"TJUUS"),u("h2",null,"是一个"),u("h2",null,"人很多"),u("h2",null,"的"),u("h2",null,"社团")])],-1)]))}const go=V(vo,[["render",po],["__scopeId","data-v-cc827b97"]]),mo="/TJUUS/icon/bili.png",ho={},bo={class:"follow-container"};function wo(e,n){return S(),P("div",bo,n[0]||(n[0]=[u("div",{class:"overlay"},[u("h1",null,"关注我们!!!!!"),u("p",null,[u("a",{href:"https://space.bilibili.com/1343371808",target:"_blank",class:"text-white flex items-center justify-center decoration-none"},[u("img",{src:mo,alt:"bilibili Logo",class:"h-7 mr-2"}),Ae(" bilibili ")])])],-1)]))}const _o=V(ho,[["render",wo],["__scopeId","data-v-adb5bdbb"]]),yo={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-85% py-8"},So={class:"grid sc box-border justify-center items-center sm:mx-7 mx-9"},Co={class:"grid-cols-1"},Ro={class:"h-auto w-0 justify-self-start creeper"},$o={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8"},Io={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},ko=U({__name:"Home",setup(e){return(n,r)=>(S(),P(me,null,[T(Dr),u("section",yo,[T(Ar,{class:"developing"})]),T(pt(wn),{dashed:!0}),u("section",So,[u("div",Co,[T(Gr,{class:"row lg:w-80%"})]),u("div",Ro,[T(bn,{class:"md:h-400px md:w-400px lg:h-550px lg:w-550px sm:h-350px sm:w-300px w-250px h-260px"})])]),u("section",$o,[T(Ee,{class:"row my",main:"我们是",sub:"TJUUS"})]),T(go),u("section",Io,[T(Ee,{class:"row my",main:"建设成果",sub:"探索Minecraft的无限可能"}),T(lo,{class:"row"}),T(Ee,{class:"row my-5",main:"我们的伙伴",sub:"联合"}),T(fo,{class:"row my-5"})]),T(_o,{class:"mt"})],64))}}),To=V(ko,[["__scopeId","data-v-b02d2291"]]);export{To as default};
