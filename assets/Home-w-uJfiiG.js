import{u as Jt,t as Ve,a as Gt,i as Qt,c as en,p as tn,d as U,h as _,b as xe,e as nn,r as z,o as an,f as x,g as Oe,j as Me,k as rn,l as c,m as f,n as V,q as ft,s as on,V as Qe,v as et,w as sn,x as ln,T as un,y as tt,z as dn,A as cn,B as fn,C as vn,D as se,E as vt,F as hn,G as pn,H as xn,I as re,J as nt,K as oe,L as ht,M as P,N as v,O as Ae,P as S,_ as O,Q,R as De,S as ge,U as Ue,W as je,X as gn,Y as pt,Z as mn,$ as T}from"./index-CJSr-ejm.js";import{u as bn,C as wn}from"./Creeper-DEe8_F-l.js";import{N as _n}from"./Divider-BwempkLB.js";function yn(e){return Jt(Ve(e).toLowerCase())}function Sn(e,n,a,s){for(var i=-1,p=e==null?0:e.length;++i<p;)a=n(a,e[i],i,e);return a}function Cn(e){return function(n){return e==null?void 0:e[n]}}var Rn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},$n=Cn(Rn),kn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,In="\\u0300-\\u036f",zn="\\ufe20-\\ufe2f",Pn="\\u20d0-\\u20ff",Dn=In+zn+Pn,Tn="["+Dn+"]",Nn=RegExp(Tn,"g");function En(e){return e=Ve(e),e&&e.replace(kn,$n).replace(Nn,"")}var An=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Vn(e){return e.match(An)||[]}var On=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Mn(e){return On.test(e)}var xt="\\ud800-\\udfff",Un="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",Ln="\\u20d0-\\u20ff",Bn=Un+jn+Ln,gt="\\u2700-\\u27bf",mt="a-z\\xdf-\\xf6\\xf8-\\xff",Zn="\\xac\\xb1\\xd7\\xf7",Fn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Wn="\\u2000-\\u206f",Yn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bt="A-Z\\xc0-\\xd6\\xd8-\\xde",Xn="\\ufe0e\\ufe0f",wt=Zn+Fn+Wn+Yn,_t="['’]",at="["+wt+"]",Hn="["+Bn+"]",yt="\\d+",Kn="["+gt+"]",St="["+mt+"]",Ct="[^"+xt+wt+yt+gt+mt+bt+"]",qn="\\ud83c[\\udffb-\\udfff]",Jn="(?:"+Hn+"|"+qn+")",Gn="[^"+xt+"]",Rt="(?:\\ud83c[\\udde6-\\uddff]){2}",$t="[\\ud800-\\udbff][\\udc00-\\udfff]",G="["+bt+"]",Qn="\\u200d",rt="(?:"+St+"|"+Ct+")",ea="(?:"+G+"|"+Ct+")",ot="(?:"+_t+"(?:d|ll|m|re|s|t|ve))?",st="(?:"+_t+"(?:D|LL|M|RE|S|T|VE))?",kt=Jn+"?",It="["+Xn+"]?",ta="(?:"+Qn+"(?:"+[Gn,Rt,$t].join("|")+")"+It+kt+")*",na="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",aa="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ra=It+kt+ta,oa="(?:"+[Kn,Rt,$t].join("|")+")"+ra,sa=RegExp([G+"?"+St+"+"+ot+"(?="+[at,G,"$"].join("|")+")",ea+"+"+st+"(?="+[at,G+rt,"$"].join("|")+")",G+"?"+rt+"+"+ot,G+"+"+st,aa,na,yt,oa].join("|"),"g");function ia(e){return e.match(sa)||[]}function la(e,n,a){return e=Ve(e),n=n,n===void 0?Mn(e)?ia(e):Vn(e):e.match(n)||[]}var ua="['’]",da=RegExp(ua,"g");function ca(e){return function(n){return Sn(la(En(n).replace(da,"")),e,"")}}var it=ca(function(e,n,a){return n=n.toLowerCase(),e+(a?yn(n):n)});const zt=en("n-carousel-methods");function fa(e){tn(zt,e)}function Le(e="unknown",n="component"){const a=Qt(zt);return a||Gt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),a}function va(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function ha(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const pa=U({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=xe(e),{isVertical:a,isPrevDisabled:s,isNextDisabled:i,prev:p,next:C}=Le();return{mergedClsPrefix:n,isVertical:a,isPrevDisabled:s,isNextDisabled:i,prev:p,next:C}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},va()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},ha()))}}),xa={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},ga=U({name:"CarouselDots",props:xa,setup(e){const{mergedClsPrefixRef:n}=xe(e),a=z([]),s=Le();function i(m,h){switch(m.key){case"Enter":case" ":m.preventDefault(),s.to(h);return}e.keyboard&&y(m)}function p(m){e.trigger==="hover"&&s.to(m)}function C(m){e.trigger==="click"&&s.to(m)}function y(m){var h;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const w=(h=document.activeElement)===null||h===void 0?void 0:h.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:k}=m,Z=k==="PageUp"||k==="ArrowUp",F=k==="PageDown"||k==="ArrowDown",$=k==="PageUp"||k==="ArrowRight",I=k==="PageDown"||k==="ArrowLeft",j=s.isVertical(),W=j?Z:$,L=j?F:I;!W&&!L||(m.preventDefault(),W&&!s.isNextDisabled()?(s.next(),R(s.currentIndexRef.value)):L&&!s.isPrevDisabled()&&(s.prev(),R(s.currentIndexRef.value)))}function R(m){var h;(h=a.value[m])===null||h===void 0||h.focus()}return an(()=>a.value.length=0),{mergedClsPrefix:n,dotEls:a,handleKeydown:i,handleMouseenter:p,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},nn(this.total,a=>{const s=a===this.currentIndex;return _("div",{"aria-selected":s,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,s&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:i=>{this.handleKeydown(i,a)}})}))}}),pe="CarouselItem";function ma(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===pe}const ba=U({name:pe,setup(e){const{mergedClsPrefixRef:n}=xe(e),a=Le(it(pe),`n-${it(pe)}`),s=z(),i=x(()=>{const{value:h}=s;return h?a.getSlideIndex(h):-1}),p=x(()=>a.isPrev(i.value)),C=x(()=>a.isNext(i.value)),y=x(()=>a.isActive(i.value)),R=x(()=>a.getSlideStyle(i.value));Oe(()=>{a.addSlide(s.value)}),Me(()=>{a.removeSlide(s.value)});function m(h){const{value:w}=i;w!==void 0&&(a==null||a.onCarouselItemClick(w,h))}return{mergedClsPrefix:n,selfElRef:s,isPrev:p,isNext:C,isActive:y,index:i,style:R,handleClick:m}},render(){var e;const{$slots:n,mergedClsPrefix:a,isPrev:s,isNext:i,isActive:p,index:C,style:y}=this,R=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:p,[`${a}-carousel__slide--prev`]:s,[`${a}-carousel__slide--next`]:i}];return _("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!p,style:y,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:s,isNext:i,isActive:p,index:C}))}}),wa=rn("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[V("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[c("dot",`
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
 `)])]),f("line",[c("dot",`
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
 `)])])]),c("arrow",`
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
 `,[c("slides",`
 flex-direction: column;
 `),f("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[c("slides",[V(">",[V("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
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
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
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
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
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
 `)])])]);function _a(e){const{length:n}=e;return n>1&&(e.push(lt(e[0],0,"append")),e.unshift(lt(e[n-1],n-1,"prepend"))),e}function lt(e,n,a){return ft(e,{key:`carousel-item-duplicate-${n}-${a}`})}function ut(e,n,a){return n===1?0:a?e===0?n-3:e===n-1?0:e-1:e}function Te(e,n){return n?e+1:e}function ya(e,n,a){return e<0?null:e===0?a?n-1:null:e-1}function Sa(e,n,a){return e>n-1?null:e===n-1?a?0:null:e+1}function Ca(e,n){return n&&e>3?e-2:e}function dt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ct(e,n){let{offsetWidth:a,offsetHeight:s}=e;if(n){const i=getComputedStyle(e);a=a-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),s=s-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:a,height:s}}function he(e,n,a){return e<n?n:e>a?a:e}function Ra(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(n);if(a){const[,s,,i="ms"]=a;return Number(s)*(i==="ms"?1:1e3)}return 0}const $a=["transitionDuration","transitionTimingFunction"],ka=Object.assign(Object.assign({},vt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ne=!1;const Ia=U({name:"Carousel",props:ka,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=xe(e),s=z(null),i=z(null),p=z([]),C={value:[]},y=x(()=>e.direction==="vertical"),R=x(()=>y.value?"height":"width"),m=x(()=>y.value?"bottom":"right"),h=x(()=>e.effect==="slide"),w=x(()=>e.loop&&e.slidesPerView===1&&h.value),k=x(()=>e.effect==="custom"),Z=x(()=>!h.value||e.centeredSlides?1:e.slidesPerView),F=x(()=>k.value?1:e.slidesPerView),$=x(()=>Z.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),I=z({width:0,height:0}),j=z(0),W=x(()=>{const{value:t}=p;if(!t.length)return[];j.value;const{value:r}=$;if(r)return t.map(b=>ct(b));const{value:o}=F,{value:u}=I,{value:d}=R;let l=u[d];if(o!=="auto"){const{spaceBetween:b}=e,D=l-(o-1)*b,ve=1/Math.max(1,o);l=D*ve}const g=Object.assign(Object.assign({},u),{[d]:l});return t.map(()=>g)}),L=x(()=>{const{value:t}=W;if(!t.length)return[];const{centeredSlides:r,spaceBetween:o}=e,{value:u}=R,{[u]:d}=I.value;let l=0;return t.map(({[u]:g})=>{let b=l;return r&&(b+=(g-d)/2),l+=g+o,b})}),Ze=z(!1),me=x(()=>{const{transitionStyle:t}=e;return t?tt(t,$a):{}}),be=x(()=>k.value?0:Ra(me.value.transitionDuration)),Fe=x(()=>{const{value:t}=p;if(!t.length)return[];const r=!($.value||F.value===1),o=g=>{if(r){const{value:b}=R;return{[b]:`${W.value[g][b]}px`}}};if(k.value)return t.map((g,b)=>o(b));const{effect:u,spaceBetween:d}=e,{value:l}=m;return t.reduce((g,b,D)=>{const ve=Object.assign(Object.assign({},o(D)),{[`margin-${l}`]:`${d}px`});return g.push(ve),Ze.value&&(u==="fade"||u==="card")&&Object.assign(ve,me.value),g},[])}),N=x(()=>{const{value:t}=Z,{length:r}=p.value;if(t!=="auto")return Math.max(r-t,0)+1;{const{value:o}=W,{length:u}=o;if(!u)return r;const{value:d}=L,{value:l}=R,g=I.value[l];let b=o[o.length-1][l],D=u;for(;D>1&&b<g;)D--,b+=d[D]-d[D-1];return he(D+1,1,u)}}),we=x(()=>Ca(N.value,w.value)),Pt=Te(e.defaultIndex,w.value),_e=z(ut(Pt,N.value,w.value)),M=dn(cn(e,"currentIndex"),_e),E=x(()=>Te(M.value,w.value));function ee(t){var r,o;t=he(t,0,N.value-1);const u=ut(t,N.value,w.value),{value:d}=M;u!==M.value&&(_e.value=u,(r=e["onUpdate:currentIndex"])===null||r===void 0||r.call(e,u,d),(o=e.onUpdateCurrentIndex)===null||o===void 0||o.call(e,u,d))}function ye(t=E.value){return ya(t,N.value,e.loop)}function Se(t=E.value){return Sa(t,N.value,e.loop)}function Dt(t){const r=H(t);return r!==null&&ye()===r}function Tt(t){const r=H(t);return r!==null&&Se()===r}function We(t){return E.value===H(t)}function Nt(t){return M.value===t}function Ye(){return ye()===null}function Xe(){return Se()===null}let X=0;function Ce(t){const r=he(Te(t,w.value),0,N.value);(t!==M.value||r!==E.value)&&ee(r)}function ie(){const t=ye();t!==null&&(X=-1,ee(t))}function te(){const t=Se();t!==null&&(X=1,ee(t))}let A=!1;function Et(){(!A||!w.value)&&ie()}function At(){(!A||!w.value)&&te()}let Y=0;const Re=z({});function le(t,r=0){Re.value=Object.assign({},me.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${r}ms`})}function ne(t=0){h.value?$e(E.value,t):Y!==0&&(!A&&t>0&&(A=!0),le(Y=0,t))}function $e(t,r){const o=He(t);o!==Y&&r>0&&(A=!0),Y=He(E.value),le(o,r)}function He(t){let r;return t>=N.value-1?r=Ke():r=L.value[t]||0,r}function Ke(){if(Z.value==="auto"){const{value:t}=R,{[t]:r}=I.value,{value:o}=L,u=o[o.length-1];let d;if(u===void 0)d=r;else{const{value:l}=W;d=u+l[l.length-1][t]}return d-r}else{const{value:t}=L;return t[N.value-1]||0}}const ae={currentIndexRef:M,to:Ce,prev:Et,next:At,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Dt,isNext:Tt,isActive:We,isPrevDisabled:Ye,isNextDisabled:Xe,getSlideIndex:H,getSlideStyle:Mt,addSlide:Vt,removeSlide:Ot,onCarouselItemClick:Ut};fa(ae);function Vt(t){t&&p.value.push(t)}function Ot(t){if(!t)return;const r=H(t);r!==-1&&p.value.splice(r,1)}function H(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function Mt(t){const r=H(t);if(r!==-1){const o=[Fe.value[r]],u=ae.isPrev(r),d=ae.isNext(r);return u&&o.push(e.prevSlideStyle||""),d&&o.push(e.nextSlideStyle||""),ht(o)}}let ke=0,Ie=0,B=0,ze=0,ue=!1,Pe=!1;function Ut(t,r){let o=!A&&!ue&&!Pe;e.effect==="card"&&o&&!We(t)&&(Ce(t),o=!1),o||(r.preventDefault(),r.stopPropagation())}let de=null;function ce(){de&&(clearInterval(de),de=null)}function K(){ce(),!e.autoplay||we.value<2||(de=window.setInterval(te,e.interval))}function qe(t){var r;if(Ne||!(!((r=i.value)===null||r===void 0)&&r.contains(xn(t))))return;Ne=!0,ue=!0,Pe=!1,ze=Date.now(),ce(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const o=dt(t)?t.touches[0]:t;y.value?Ie=o.clientY:ke=o.clientX,e.touchable&&(re("touchmove",document,fe),re("touchend",document,q),re("touchcancel",document,q)),e.draggable&&(re("mousemove",document,fe),re("mouseup",document,q))}function fe(t){const{value:r}=y,{value:o}=R,u=dt(t)?t.touches[0]:t,d=r?u.clientY-Ie:u.clientX-ke,l=I.value[o];B=he(d,-l,l),t.cancelable&&t.preventDefault(),h.value&&le(Y-B,0)}function q(){const{value:t}=E;let r=t;if(!A&&B!==0&&h.value){const o=Y-B,u=[...L.value.slice(0,N.value-1),Ke()];let d=null;for(let l=0;l<u.length;l++){const g=Math.abs(u[l]-o);if(d!==null&&d<g)break;d=g,r=l}}if(r===t){const o=Date.now()-ze,{value:u}=R,d=I.value[u];B>d/2||B/o>.4?ie():(B<-d/2||B/o<-.4)&&te()}r!==null&&r!==t?(Pe=!0,ee(r),nt(()=>{(!w.value||_e.value!==M.value)&&ne(be.value)})):ne(be.value),Je(),K()}function Je(){ue&&(Ne=!1),ue=!1,ke=0,Ie=0,B=0,ze=0,oe("touchmove",document,fe),oe("touchend",document,q),oe("touchcancel",document,q),oe("mousemove",document,fe),oe("mouseup",document,q)}function jt(){if(h.value&&A){const{value:t}=E;$e(t,0)}else K();h.value&&(Re.value.transitionDuration="0ms"),A=!1}function Lt(t){if(t.preventDefault(),A)return;let{deltaX:r,deltaY:o}=t;t.shiftKey&&!r&&(r=o);const u=-1,d=1,l=(r||o)>0?d:u;let g=0,b=0;y.value?b=l:g=l;const D=10;(b*o>=D||g*r>=D)&&(l===d&&!Xe()?te():l===u&&!Ye()&&ie())}function Bt(){I.value=ct(s.value,!0),K()}function Zt(){$.value&&j.value++}function Ft(){e.autoplay&&ce()}function Wt(){e.autoplay&&K()}Oe(()=>{fn(K),requestAnimationFrame(()=>Ze.value=!0)}),Me(()=>{Je(),ce()}),vn(()=>{const{value:t}=p,{value:r}=C,o=new Map,u=l=>o.has(l)?o.get(l):-1;let d=!1;for(let l=0;l<t.length;l++){const g=r.findIndex(b=>b.el===t[l]);g!==l&&(d=!0),o.set(t[l],g)}d&&t.sort((l,g)=>u(l)-u(g))}),se(E,(t,r)=>{if(t===r){X=0;return}if(K(),h.value){if(w.value){const{value:o}=N;X===-1&&r===1&&t===o-2?t=0:X===1&&r===o-2&&t===1&&(t=o-1)}$e(t,be.value)}else ne();X=0},{immediate:!0}),se([w,Z],()=>void nt(()=>{ee(E.value)})),se(L,()=>{h.value&&ne()},{deep:!0}),se(h,t=>{t?ne():(A=!1,le(Y=0))});const Yt=x(()=>({onTouchstartPassive:e.touchable?qe:void 0,onMousedown:e.draggable?qe:void 0,onWheel:e.mousewheel?Lt:void 0})),Xt=x(()=>Object.assign(Object.assign({},tt(ae,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:we.value,currentIndex:M.value})),Ht=x(()=>({total:we.value,currentIndex:M.value,to:ae.to})),Kt={getCurrentIndex:()=>M.value,to:Ce,prev:ie,next:te},qt=vt("Carousel","-carousel",wa,hn,e,n),Ge=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:r,dotColor:o,dotColorActive:u,dotColorFocus:d,dotLineWidth:l,dotLineWidthActive:g,arrowColor:b}}=qt.value;return{"--n-bezier":t,"--n-dot-color":o,"--n-dot-color-focus":d,"--n-dot-color-active":u,"--n-dot-size":r,"--n-dot-line-width":l,"--n-dot-line-width-active":g,"--n-arrow-color":b}}),J=a?pn("carousel",void 0,Ge,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:s,slidesElRef:i,slideVNodes:C,duplicatedable:w,userWantsControl:k,autoSlideSize:$,realIndex:E,slideStyles:Fe,translateStyle:Re,slidesControlListeners:Yt,handleTransitionEnd:jt,handleResize:Bt,handleSlideResize:Zt,handleMouseenter:Ft,handleMouseleave:Wt,isActive:Nt,arrowSlotProps:Xt,dotSlotProps:Ht},Kt),{cssVars:a?void 0:Ge,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:a,userWantsControl:s,slideStyles:i,dotType:p,dotPlacement:C,slidesControlListeners:y,transitionProps:R={},arrowSlotProps:m,dotSlotProps:h,$slots:{default:w,dots:k,arrow:Z}}=this,F=w&&on(w())||[];let $=za(F);return $.length||($=F.map(I=>_(ba,null,{default:()=>ft(I)}))),this.duplicatedable&&($=_a($)),this.slideVNodes.value=$,this.autoSlideSize&&($=$.map(I=>_(Qe,{onResize:this.handleSlideResize},{default:()=>I}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,s&&`${n}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Qe,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},s?$.map((I,j)=>_("div",{style:i[j],key:j},sn(_(un,Object.assign({},R),{default:()=>I}),[[ln,this.isActive(j)]]))):$)}),this.showDots&&h.total>1&&et(k,h,()=>[_(ga,{key:p+C,total:h.total,currentIndex:h.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),a&&et(Z,m,()=>[_(pa,null)]))}});function za(e){return e.reduce((n,a)=>(ma(a)&&n.push(a),n),[])}const Pa={class:"home-container animate__animated animate__pulse"},Da=U({__name:"SPic",setup(e){const n=z(),{y:a}=bn();return se(a,s=>{n.value.style.transform=`translateY(${-s/6}px)`}),(s,i)=>(S(),P("div",Pa,[i[0]||(i[0]=v("div",{class:"logo animate__animated animate__fadeInUp pointer-events-none"},[v("div",{class:"title mx-auto"},[v("div",{class:"text-80px sm:text-100px md:text-120px lg:text-140px scale-x-115"},"TJUUS")]),v("div",{class:"describe"},[Ae("TianJinUniversity"),v("br"),Ae("UnitedServer")])],-1)),v("div",{class:"background",ref_key:"background",ref:n},null,512)]))}}),Ta=O(Da,[["__scopeId","data-v-6a2ac41f"]]),Na={},Ea={class:"bg flex justify-center items-center h-100px w-85% mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all"};function Aa(e,n){return S(),P("div",Ea,n[0]||(n[0]=[v("div",{class:"tip-text absolute sm:text-3xl text-xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out"}," #网站正在施工中...... ",-1)]))}const Va=O(Na,[["render",Aa],["__scopeId","data-v-46aa5e10"]]),Oa={class:"main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem"},Ma={class:"sub"},Ua=U({__name:"SectionTitle",props:{main:String,sub:String},setup(e){return(n,a)=>(S(),P("div",null,[v("div",Oa,Q(e.main),1),v("div",Ma,Q(e.sub),1)]))}}),Ee=O(Ua,[["__scopeId","data-v-e056fb76"]]),ja={class:"n-card border-solid border-op-20 border-dark-50 rounded-lg shadow-lg border-1 hover:scale-103 transition-all duration-500 ease-in-out lg:w-80% box-border max-w-780px dark:bg-dark-600 dark:border-dark-700 bg-white dark:text-white"},La={class:"flex flex-col md:flex-row md:h-55 p-0"},Ba=["src"],Za={class:"text-xl font-bold mb-2"},Fa={class:""},Wa=U({__name:"InfoCard",props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},imageOnRight:{type:Boolean,default:!1}},setup(e){function n(s){return s.slice(0,30)+(s.length>30?"......":"")}const a=e;return(s,i)=>(S(),P("div",ja,[v("div",La,[v("div",{class:De(["w-full md:w-1/2",{"md:order-2":e.imageOnRight,"order-1":!e.imageOnRight}])},[v("img",{src:a.imageSrc,class:De(["w-full h-full object-cover",{"rounded-t-lg md:rounded-l-lg md:rounded-tr-none":!e.imageOnRight,"rounded-t-lg md:rounded-r-lg md:rounded-tl-none":e.imageOnRight}])},null,10,Ba)],2),v("div",{class:De(["w-full md:w-1/2 px-6 py-4 min-h-40",{"order-1":e.imageOnRight,"order-2":!e.imageOnRight}])},[v("h2",Za,Q(a.title),1),v("p",Fa,Q(n(a.description)),1)],2)])]))}}),Ya=O(Wa,[["__scopeId","data-v-e0bce645"]]),Xa=[{imageSrc:"server/tianda1.png",title:"文本1",description:"这是文本1的描述"},{imageSrc:"server/tianda2.png",title:"文本2",description:"这是文本2的描述"},{imageSrc:"server/tianda2.png",title:"文本3",description:"这是文本3的描述"},{imageSrc:"server/tianda2.png",title:"文本4",description:"这是文本4的描述"},{imageSrc:"server/tianda2.png",title:"文本5",description:"这是文本5的描述"}],Ha=["eg/1.png","eg/2.png","eg/0.png","eg/5.png","eg/7.png","eg/8.png"],Ka=[{imageSrc:"building/eastDoor.png",title:"天大大门",description:"实事求是"},{imageSrc:"building/shiShi.png",title:"北洋广场",description:"Description"},{imageSrc:"building/胡.png",title:"网图 1",description:"Description too"},{imageSrc:"building/水塔.png",title:"网图 2",description:"Description again"}],Be={server:Xa,carousel:Ha,building:Ka},qa={class:"servers-container sm:w-85% box-border"},Ja={class:"grid place-items-center"},Ga=U({__name:"InfoCards",setup(e){const n=z(Be.server);return(a,s)=>(S(),P("div",qa,[v("div",Ja,[(S(!0),P(ge,null,Ue(n.value,(i,p)=>(S(),je(Ya,{key:p,imageSrc:i.imageSrc,title:i.title,description:i.description,imageOnRight:p%2===1},null,8,["imageSrc","title","description","imageOnRight"]))),128))])]))}}),Qa=O(Ga,[["__scopeId","data-v-93140b40"]]),er={class:"component"},tr={class:"flex justify-center align-center"},nr={class:"text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50"},ar={class:"text-center text-.8rem dark:text-cyan100"},rr={__name:"FeaturedItem",props:{title:{type:String,required:!0},description:{type:String,required:!0},imageSrc:{type:String,required:!0}},setup(e){return(n,a)=>(S(),P("div",er,[v("div",tr,[v("div",{class:"bg rounded-lg hover:scale-108 transition-all duration-300 border",style:ht({backgroundImage:`url(${e.imageSrc})`})},null,4)]),v("h2",nr,Q(e.title),1),v("p",ar,Q(e.description),1)]))}},or=O(rr,[["__scopeId","data-v-7af50fc6"]]),sr={class:"building-container"},ir={class:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}},lr=U({__name:"FeaturedItems",setup(e){const n=z(Be.building);return(a,s)=>(S(),P("div",sr,[v("div",ir,[(S(!0),P(ge,null,Ue(n.value,(i,p)=>(S(),je(or,{key:p,imageSrc:i.imageSrc,title:i.title,description:i.description},null,8,["imageSrc","title","description"]))),128))])]))}}),ur=O(lr,[["__scopeId","data-v-342f42e6"]]),dr=["src"],cr={__name:"Carousel",setup(e){const n=z(1),a=z(Be.carousel);function s(){n.value=window.innerWidth>768?3:1}return Oe(()=>{s(),window.addEventListener("resize",s)}),Me(()=>{window.removeEventListener("resize",s)}),(i,p)=>(S(),je(pt(Ia),{autoplay:"","slides-per-view":n.value,"space-between":20},{default:gn(()=>[(S(!0),P(ge,null,Ue(a.value,(C,y)=>(S(),P("img",{key:y,class:"carousel-img",src:C},null,8,dr))),128))]),_:1},8,["slides-per-view"]))}},fr=O(cr,[["__scopeId","data-v-b2593021"]]),vr={},hr={class:"background relative sm:h-500px h-300px w-100vw"};function pr(e,n){return S(),P("div",hr,n[0]||(n[0]=[mn('<div class="text-white relative" data-v-7de08cda><div class="z-1 absolute overflow-hidden sm:h-500px w-100vw h-300px p-30px pl-20 box-border flex flex-col items-start flex-wrap" data-v-7de08cda><h1 data-v-7de08cda>TJUUS</h1><h2 data-v-7de08cda>是一个</h2><h2 data-v-7de08cda>人很多</h2><h2 data-v-7de08cda>的</h2><h2 data-v-7de08cda>社团</h2><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3><h3 data-v-7de08cda>测试超出范围</h3></div></div>',1)]))}const xr=O(vr,[["render",pr],["__scopeId","data-v-7de08cda"]]),gr="https://kly777.github.io/TJUUS/icon/bili.png",mr={},br={class:"follow-container"};function wr(e,n){return S(),P("div",br,n[0]||(n[0]=[v("div",{class:"overlay"},[v("h1",null,"关注我们!!!!!"),v("p",null,[v("a",{href:"https://space.bilibili.com/1343371808",target:"_blank",class:"text-white flex items-center justify-center decoration-none"},[v("img",{src:gr,alt:"bilibili Logo",class:"h-7 mr-2"}),Ae(" bilibili ")])])],-1)]))}const _r=O(mr,[["render",wr],["__scopeId","data-v-e2c4f3a5"]]),yr={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-85% py-8"},Sr={class:"grid sc box-border justify-center items-center sm:mx-7 mx-9"},Cr={class:"grid-cols-1"},Rr={class:"h-auto w-0 justify-self-start creeper"},$r={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8"},kr={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},Ir=U({__name:"Home",setup(e){return(n,a)=>(S(),P(ge,null,[T(Ta),v("div",yr,[T(Va,{class:"developing"})]),T(pt(_n),{dashed:!0}),v("div",Sr,[v("div",Cr,[T(Qa,{class:"row lg:w-80%"})]),v("div",Rr,[T(wn,{class:"md:h-400px md:w-400px lg:h-550px lg:w-550px sm:h-350px sm:w-300px w-250px h-260px"})])]),v("div",$r,[T(Ee,{class:"row my",main:"我们是",sub:"TJUUS"})]),T(xr),v("div",kr,[T(Ee,{class:"row my",main:"建设成果",sub:"探索Minecraft的无限可能"}),T(ur,{class:"row"}),T(Ee,{class:"row my-5",main:"我们的伙伴",sub:"联合"}),T(fr,{class:"row my-5"})]),T(_r,{class:"mt"})],64))}}),Tr=O(Ir,[["__scopeId","data-v-dbe6b7fd"]]);export{Tr as default};
