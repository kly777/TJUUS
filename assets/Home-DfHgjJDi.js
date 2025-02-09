import{u as Qt,t as Ae,p as en,i as tn,a as nn,c as rn,d as M,b as me,h as _,r as $,o as sn,e as on,f as m,g as Oe,j as Ve,k as an,l as f,m as A,n as v,q as ft,s as Je,v as ln,w as un,x as cn,y as dn,z as Q,A as vt,B as fn,C as vn,D as pn,V as Ge,E as Qe,F as xn,G as gn,T as mn,H as pt,I as hn,J as oe,K as et,L as ae,M as bn,N as wn,O as ge,P,Q as V,R as p,S as tt,_ as U,U as ee,W as De,X as je,Y as xt,Z as Me,$ as yn,a0 as O}from"./index-BaapnUg_.js";import{N as nt}from"./Divider-CA7CmhV1.js";function _n(e){return Qt(Ae(e).toLowerCase())}function Sn(e,n,r,o){for(var a=-1,x=e==null?0:e.length;++a<x;)r=n(r,e[a],a,e);return r}function Cn(e){return function(n){return e==null?void 0:e[n]}}var Rn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},$n=Cn(Rn),zn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,kn="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Dn=kn+Pn+In,Tn="["+Dn+"]",En=RegExp(Tn,"g");function Nn(e){return e=Ae(e),e&&e.replace(zn,$n).replace(En,"")}var An=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function On(e){return e.match(An)||[]}var Vn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function jn(e){return Vn.test(e)}var gt="\\ud800-\\udfff",Mn="\\u0300-\\u036f",Un="\\ufe20-\\ufe2f",Bn="\\u20d0-\\u20ff",Ln=Mn+Un+Bn,mt="\\u2700-\\u27bf",ht="a-z\\xdf-\\xf6\\xf8-\\xff",Wn="\\xac\\xb1\\xd7\\xf7",Yn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zn="\\u2000-\\u206f",Xn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bt="A-Z\\xc0-\\xd6\\xd8-\\xde",Fn="\\ufe0e\\ufe0f",wt=Wn+Yn+Zn+Xn,yt="['’]",rt="["+wt+"]",Hn="["+Ln+"]",_t="\\d+",Kn="["+mt+"]",St="["+ht+"]",Ct="[^"+gt+wt+_t+mt+ht+bt+"]",qn="\\ud83c[\\udffb-\\udfff]",Jn="(?:"+Hn+"|"+qn+")",Gn="[^"+gt+"]",Rt="(?:\\ud83c[\\udde6-\\uddff]){2}",$t="[\\ud800-\\udbff][\\udc00-\\udfff]",G="["+bt+"]",Qn="\\u200d",st="(?:"+St+"|"+Ct+")",er="(?:"+G+"|"+Ct+")",ot="(?:"+yt+"(?:d|ll|m|re|s|t|ve))?",at="(?:"+yt+"(?:D|LL|M|RE|S|T|VE))?",zt=Jn+"?",kt="["+Fn+"]?",tr="(?:"+Qn+"(?:"+[Gn,Rt,$t].join("|")+")"+kt+zt+")*",nr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sr=kt+zt+tr,or="(?:"+[Kn,Rt,$t].join("|")+")"+sr,ar=RegExp([G+"?"+St+"+"+ot+"(?="+[rt,G,"$"].join("|")+")",er+"+"+at+"(?="+[rt,G+st,"$"].join("|")+")",G+"?"+st+"+"+ot,G+"+"+at,rr,nr,_t,or].join("|"),"g");function ir(e){return e.match(ar)||[]}function lr(e,n,r){return e=Ae(e),n=n,n===void 0?jn(e)?ir(e):On(e):e.match(n)||[]}var ur="['’]",cr=RegExp(ur,"g");function dr(e){return function(n){return Sn(lr(Nn(n).replace(cr,"")),e,"")}}var it=dr(function(e,n,r){return n=n.toLowerCase(),e+(r?_n(n):n)});const Pt=rn("n-carousel-methods");function fr(e){en(Pt,e)}function Ue(e="unknown",n="component"){const r=tn(Pt);return r||nn(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function vr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function pr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const xr=M({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=me(e),{isVertical:r,isPrevDisabled:o,isNextDisabled:a,prev:x,next:C}=Ue();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:o,isNextDisabled:a,prev:x,next:C}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},vr()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},pr()))}}),gr={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},mr=M({name:"CarouselDots",props:gr,setup(e){const{mergedClsPrefixRef:n}=me(e),r=$([]),o=Ue();function a(h,u){switch(h.key){case"Enter":case" ":h.preventDefault(),o.to(u);return}e.keyboard&&w(h)}function x(h){e.trigger==="hover"&&o.to(h)}function C(h){e.trigger==="click"&&o.to(h)}function w(h){var u;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const g=(u=document.activeElement)===null||u===void 0?void 0:u.nodeName.toLowerCase();if(g==="input"||g==="textarea")return;const{code:S}=h,I=S==="PageUp"||S==="ArrowUp",B=S==="PageDown"||S==="ArrowDown",z=S==="PageUp"||S==="ArrowRight",k=S==="PageDown"||S==="ArrowLeft",L=o.isVertical(),Z=L?I:z,W=L?B:k;!Z&&!W||(h.preventDefault(),Z&&!o.isNextDisabled()?(o.next(),R(o.currentIndexRef.value)):W&&!o.isPrevDisabled()&&(o.prev(),R(o.currentIndexRef.value)))}function R(h){var u;(u=r.value[h])===null||u===void 0||u.focus()}return sn(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:a,handleMouseenter:x,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},on(this.total,r=>{const o=r===this.currentIndex;return _("div",{"aria-selected":o,ref:a=>n.push(a),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,o&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:a=>{this.handleKeydown(a,r)}})}))}}),xe="CarouselItem";function hr(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===xe}const br=M({name:xe,setup(e){const{mergedClsPrefixRef:n}=me(e),r=Ue(it(xe),`n-${it(xe)}`),o=$(),a=m(()=>{const{value:u}=o;return u?r.getSlideIndex(u):-1}),x=m(()=>r.isPrev(a.value)),C=m(()=>r.isNext(a.value)),w=m(()=>r.isActive(a.value)),R=m(()=>r.getSlideStyle(a.value));Oe(()=>{r.addSlide(o.value)}),Ve(()=>{r.removeSlide(o.value)});function h(u){const{value:g}=a;g!==void 0&&(r==null||r.onCarouselItemClick(g,u))}return{mergedClsPrefix:n,selfElRef:o,isPrev:x,isNext:C,isActive:w,index:a,style:R,handleClick:h}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:o,isNext:a,isActive:x,index:C,style:w}=this,R=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:x,[`${r}-carousel__slide--prev`]:o,[`${r}-carousel__slide--next`]:a}];return _("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!x,style:w,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:o,isNext:a,isActive:x,index:C}))}}),wr=an("carousel",`
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
 `,[A("> img",`
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
 `,[A("&:focus",`
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
 `,[A("&:focus",`
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
 `,[A("svg",`
 height: 1em;
 width: 1em;
 `),A("&:hover",`
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
 `)])])]),v("usercontrol",[f("slides",[A(">",[A("div",`
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
 `,[A("> *:first-child",`
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
 `,[A("> *:first-child",`
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
 `,[A("> *:first-child",`
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
 `,[A("> *:first-child",`
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
 `)])])]);function yr(e){const{length:n}=e;return n>1&&(e.push(lt(e[0],0,"append")),e.unshift(lt(e[n-1],n-1,"prepend"))),e}function lt(e,n,r){return ft(e,{key:`carousel-item-duplicate-${n}-${r}`})}function ut(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Te(e,n){return n?e+1:e}function _r(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function Sr(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function Cr(e,n){return n&&e>3?e-2:e}function ct(e){return window.TouchEvent&&e instanceof window.TouchEvent}function dt(e,n){let{offsetWidth:r,offsetHeight:o}=e;if(n){const a=getComputedStyle(e);r=r-Number.parseFloat(a.getPropertyValue("padding-left"))-Number.parseFloat(a.getPropertyValue("padding-right")),o=o-Number.parseFloat(a.getPropertyValue("padding-top"))-Number.parseFloat(a.getPropertyValue("padding-bottom"))}return{width:r,height:o}}function pe(e,n,r){return e<n?n:e>r?r:e}function Rr(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,o,,a="ms"]=r;return Number(o)*(a==="ms"?1:1e3)}return 0}const $r=["transitionDuration","transitionTimingFunction"],zr=Object.assign(Object.assign({},vt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ee=!1;const kr=M({name:"Carousel",props:zr,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=me(e),o=$(null),a=$(null),x=$([]),C={value:[]},w=m(()=>e.direction==="vertical"),R=m(()=>w.value?"height":"width"),h=m(()=>w.value?"bottom":"right"),u=m(()=>e.effect==="slide"),g=m(()=>e.loop&&e.slidesPerView===1&&u.value),S=m(()=>e.effect==="custom"),I=m(()=>!u.value||e.centeredSlides?1:e.slidesPerView),B=m(()=>S.value?1:e.slidesPerView),z=m(()=>I.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),k=$({width:0,height:0}),L=$(0),Z=m(()=>{const{value:t}=x;if(!t.length)return[];L.value;const{value:s}=z;if(s)return t.map(y=>dt(y));const{value:i}=B,{value:c}=k,{value:d}=R;let l=c[d];if(i!=="auto"){const{spaceBetween:y}=e,D=l-(i-1)*y,ve=1/Math.max(1,i);l=D*ve}const b=Object.assign(Object.assign({},c),{[d]:l});return t.map(()=>b)}),W=m(()=>{const{value:t}=Z;if(!t.length)return[];const{centeredSlides:s,spaceBetween:i}=e,{value:c}=R,{[c]:d}=k.value;let l=0;return t.map(({[c]:b})=>{let y=l;return s&&(y+=(b-d)/2),l+=b+i,y})}),Be=$(!1),he=m(()=>{const{transitionStyle:t}=e;return t?Je(t,$r):{}}),be=m(()=>S.value?0:Rr(he.value.transitionDuration)),Le=m(()=>{const{value:t}=x;if(!t.length)return[];const s=!(z.value||B.value===1),i=b=>{if(s){const{value:y}=R;return{[y]:`${Z.value[b][y]}px`}}};if(S.value)return t.map((b,y)=>i(y));const{effect:c,spaceBetween:d}=e,{value:l}=h;return t.reduce((b,y,D)=>{const ve=Object.assign(Object.assign({},i(D)),{[`margin-${l}`]:`${d}px`});return b.push(ve),Be.value&&(c==="fade"||c==="card")&&Object.assign(ve,he.value),b},[])}),T=m(()=>{const{value:t}=I,{length:s}=x.value;if(t!=="auto")return Math.max(s-t,0)+1;{const{value:i}=Z,{length:c}=i;if(!c)return s;const{value:d}=W,{value:l}=R,b=k.value[l];let y=i[i.length-1][l],D=c;for(;D>1&&y<b;)D--,y+=d[D]-d[D-1];return pe(D+1,1,c)}}),we=m(()=>Cr(T.value,g.value)),Tt=Te(e.defaultIndex,g.value),ye=$(ut(Tt,T.value,g.value)),j=ln(un(e,"currentIndex"),ye),E=m(()=>Te(j.value,g.value));function te(t){var s,i;t=pe(t,0,T.value-1);const c=ut(t,T.value,g.value),{value:d}=j;c!==j.value&&(ye.value=c,(s=e["onUpdate:currentIndex"])===null||s===void 0||s.call(e,c,d),(i=e.onUpdateCurrentIndex)===null||i===void 0||i.call(e,c,d))}function _e(t=E.value){return _r(t,T.value,e.loop)}function Se(t=E.value){return Sr(t,T.value,e.loop)}function Et(t){const s=H(t);return s!==null&&_e()===s}function Nt(t){const s=H(t);return s!==null&&Se()===s}function We(t){return E.value===H(t)}function At(t){return j.value===t}function Ye(){return _e()===null}function Ze(){return Se()===null}let F=0;function Ce(t){const s=pe(Te(t,g.value),0,T.value);(t!==j.value||s!==E.value)&&te(s)}function ie(){const t=_e();t!==null&&(F=-1,te(t))}function ne(){const t=Se();t!==null&&(F=1,te(t))}let N=!1;function Ot(){(!N||!g.value)&&ie()}function Vt(){(!N||!g.value)&&ne()}let X=0;const Re=$({});function le(t,s=0){Re.value=Object.assign({},he.value,{transform:w.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${s}ms`})}function re(t=0){u.value?$e(E.value,t):X!==0&&(!N&&t>0&&(N=!0),le(X=0,t))}function $e(t,s){const i=Xe(t);i!==X&&s>0&&(N=!0),X=Xe(E.value),le(i,s)}function Xe(t){let s;return t>=T.value-1?s=Fe():s=W.value[t]||0,s}function Fe(){if(I.value==="auto"){const{value:t}=R,{[t]:s}=k.value,{value:i}=W,c=i[i.length-1];let d;if(c===void 0)d=s;else{const{value:l}=Z;d=c+l[l.length-1][t]}return d-s}else{const{value:t}=W;return t[T.value-1]||0}}const se={currentIndexRef:j,to:Ce,prev:Ot,next:Vt,isVertical:()=>w.value,isHorizontal:()=>!w.value,isPrev:Et,isNext:Nt,isActive:We,isPrevDisabled:Ye,isNextDisabled:Ze,getSlideIndex:H,getSlideStyle:Ut,addSlide:jt,removeSlide:Mt,onCarouselItemClick:Bt};fr(se);function jt(t){t&&x.value.push(t)}function Mt(t){if(!t)return;const s=H(t);s!==-1&&x.value.splice(s,1)}function H(t){return typeof t=="number"?t:t?x.value.indexOf(t):-1}function Ut(t){const s=H(t);if(s!==-1){const i=[Le.value[s]],c=se.isPrev(s),d=se.isNext(s);return c&&i.push(e.prevSlideStyle||""),d&&i.push(e.nextSlideStyle||""),pt(i)}}let ze=0,ke=0,Y=0,Pe=0,ue=!1,Ie=!1;function Bt(t,s){let i=!N&&!ue&&!Ie;e.effect==="card"&&i&&!We(t)&&(Ce(t),i=!1),i||(s.preventDefault(),s.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function K(){de(),!e.autoplay||we.value<2||(ce=window.setInterval(ne,e.interval))}function He(t){var s;if(Ee||!(!((s=a.value)===null||s===void 0)&&s.contains(hn(t))))return;Ee=!0,ue=!0,Ie=!1,Pe=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const i=ct(t)?t.touches[0]:t;w.value?ke=i.clientY:ze=i.clientX,e.touchable&&(oe("touchmove",document,fe),oe("touchend",document,q),oe("touchcancel",document,q)),e.draggable&&(oe("mousemove",document,fe),oe("mouseup",document,q))}function fe(t){const{value:s}=w,{value:i}=R,c=ct(t)?t.touches[0]:t,d=s?c.clientY-ke:c.clientX-ze,l=k.value[i];Y=pe(d,-l,l),t.cancelable&&t.preventDefault(),u.value&&le(X-Y,0)}function q(){const{value:t}=E;let s=t;if(!N&&Y!==0&&u.value){const i=X-Y,c=[...W.value.slice(0,T.value-1),Fe()];let d=null;for(let l=0;l<c.length;l++){const b=Math.abs(c[l]-i);if(d!==null&&d<b)break;d=b,s=l}}if(s===t){const i=Date.now()-Pe,{value:c}=R,d=k.value[c];Y>d/2||Y/i>.4?ie():(Y<-d/2||Y/i<-.4)&&ne()}s!==null&&s!==t?(Ie=!0,te(s),et(()=>{(!g.value||ye.value!==j.value)&&re(be.value)})):re(be.value),Ke(),K()}function Ke(){ue&&(Ee=!1),ue=!1,ze=0,ke=0,Y=0,Pe=0,ae("touchmove",document,fe),ae("touchend",document,q),ae("touchcancel",document,q),ae("mousemove",document,fe),ae("mouseup",document,q)}function Lt(){if(u.value&&N){const{value:t}=E;$e(t,0)}else K();u.value&&(Re.value.transitionDuration="0ms"),N=!1}function Wt(t){if(t.preventDefault(),N)return;let{deltaX:s,deltaY:i}=t;t.shiftKey&&!s&&(s=i);const c=-1,d=1,l=(s||i)>0?d:c;let b=0,y=0;w.value?y=l:b=l;const D=10;(y*i>=D||b*s>=D)&&(l===d&&!Ze()?ne():l===c&&!Ye()&&ie())}function Yt(){k.value=dt(o.value,!0),K()}function Zt(){z.value&&L.value++}function Xt(){e.autoplay&&de()}function Ft(){e.autoplay&&K()}Oe(()=>{cn(K),requestAnimationFrame(()=>Be.value=!0)}),Ve(()=>{Ke(),de()}),dn(()=>{const{value:t}=x,{value:s}=C,i=new Map,c=l=>i.has(l)?i.get(l):-1;let d=!1;for(let l=0;l<t.length;l++){const b=s.findIndex(y=>y.el===t[l]);b!==l&&(d=!0),i.set(t[l],b)}d&&t.sort((l,b)=>c(l)-c(b))}),Q(E,(t,s)=>{if(t===s){F=0;return}if(K(),u.value){if(g.value){const{value:i}=T;F===-1&&s===1&&t===i-2?t=0:F===1&&s===i-2&&t===1&&(t=i-1)}$e(t,be.value)}else re();F=0},{immediate:!0}),Q([g,I],()=>void et(()=>{te(E.value)})),Q(W,()=>{u.value&&re()},{deep:!0}),Q(u,t=>{t?re():(N=!1,le(X=0))});const Ht=m(()=>({onTouchstartPassive:e.touchable?He:void 0,onMousedown:e.draggable?He:void 0,onWheel:e.mousewheel?Wt:void 0})),Kt=m(()=>Object.assign(Object.assign({},Je(se,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:we.value,currentIndex:j.value})),qt=m(()=>({total:we.value,currentIndex:j.value,to:se.to})),Jt={getCurrentIndex:()=>j.value,to:Ce,prev:ie,next:ne},Gt=vt("Carousel","-carousel",wr,fn,e,n),qe=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:s,dotColor:i,dotColorActive:c,dotColorFocus:d,dotLineWidth:l,dotLineWidthActive:b,arrowColor:y}}=Gt.value;return{"--n-bezier":t,"--n-dot-color":i,"--n-dot-color-focus":d,"--n-dot-color-active":c,"--n-dot-size":s,"--n-dot-line-width":l,"--n-dot-line-width-active":b,"--n-arrow-color":y}}),J=r?vn("carousel",void 0,qe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:o,slidesElRef:a,slideVNodes:C,duplicatedable:g,userWantsControl:S,autoSlideSize:z,realIndex:E,slideStyles:Le,translateStyle:Re,slidesControlListeners:Ht,handleTransitionEnd:Lt,handleResize:Yt,handleSlideResize:Zt,handleMouseenter:Xt,handleMouseleave:Ft,isActive:At,arrowSlotProps:Kt,dotSlotProps:qt},Jt),{cssVars:r?void 0:qe,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:o,slideStyles:a,dotType:x,dotPlacement:C,slidesControlListeners:w,transitionProps:R={},arrowSlotProps:h,dotSlotProps:u,$slots:{default:g,dots:S,arrow:I}}=this,B=g&&pn(g())||[];let z=Pr(B);return z.length||(z=B.map(k=>_(br,null,{default:()=>ft(k)}))),this.duplicatedable&&(z=yr(z)),this.slideVNodes.value=z,this.autoSlideSize&&(z=z.map(k=>_(Ge,{onResize:this.handleSlideResize},{default:()=>k}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,o&&`${n}-carousel--usercontrol`],style:this.cssVars},w,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Ge,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},o?z.map((k,L)=>_("div",{style:a[L],key:L},xn(_(mn,Object.assign({},R),{default:()=>k}),[[gn,this.isActive(L)]]))):z)}),this.showDots&&u.total>1&&Qe(S,u,()=>[_(mr,{key:x+C,total:u.total,currentIndex:u.currentIndex,dotType:x,trigger:this.trigger,keyboard:this.keyboard})]),r&&Qe(I,h,()=>[_(xr,null)]))}});function Pr(e){return e.reduce((n,r)=>(hr(r)&&n.push(r),n),[])}function Ir(e){return bn()?(wn(e),!0):!1}function It(e){return typeof e=="function"?e():ge(e)}const Dr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Tr=Object.prototype.toString,Er=e=>Tr.call(e)==="[object Object]",Nr=()=>{},Dt=Dr?window:void 0;function Ar(e){var n;const r=It(e);return(n=r==null?void 0:r.$el)!=null?n:r}function Or(...e){let n,r,o,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,o,a]=e,n=Dt):[n,r,o,a]=e,!n)return Nr;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const x=[],C=()=>{x.forEach(u=>u()),x.length=0},w=(u,g,S,I)=>(u.addEventListener(g,S,I),()=>u.removeEventListener(g,S,I)),R=Q(()=>[Ar(n),It(a)],([u,g])=>{if(C(),!u)return;const S=Er(g)?{...g}:g;x.push(...r.flatMap(I=>o.map(B=>w(u,I,B,S))))},{immediate:!0,flush:"post"}),h=()=>{R(),C()};return Ir(h),h}function Vr(e={}){const{window:n=Dt,behavior:r="auto"}=e;if(!n)return{x:$(0),y:$(0)};const o=$(n.scrollX),a=$(n.scrollY),x=m({get(){return o.value},set(w){scrollTo({left:w,behavior:r})}}),C=m({get(){return a.value},set(w){scrollTo({top:w,behavior:r})}});return Or(n,"scroll",()=>{o.value=n.scrollX,a.value=n.scrollY},{capture:!1,passive:!0}),{x,y:C}}const jr={class:"home-container animate__animated animate__pulse"},Mr=M({__name:"SPic",setup(e){const n=$(),{y:r}=Vr();return Q(r,o=>{n.value.style.transform=`translateY(${-o/6}px)`}),(o,a)=>(P(),V("div",jr,[a[0]||(a[0]=p("div",{class:"logo animate__animated animate__fadeInUp pointer-events-none"},[p("div",{class:"title mx-auto"},[p("div",{class:"text-80px sm:text-100px md:text-120px lg:text-140px scale-x-115"},"TJUUS")]),p("div",{class:"describe"},[tt("TianJinUniversity"),p("br"),tt("UnitedServer")])],-1)),p("div",{class:"background",ref_key:"background",ref:n},null,512)]))}}),Ur=U(Mr,[["__scopeId","data-v-6a2ac41f"]]),Br={},Lr={class:"bg flex justify-center items-center h-100px w-85% mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all"};function Wr(e,n){return P(),V("div",Lr,n[0]||(n[0]=[p("div",{class:"tip-text absolute sm:text-3xl text-xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out"}," #网站正在施工中...... ",-1)]))}const Yr=U(Br,[["render",Wr],["__scopeId","data-v-46aa5e10"]]),Zr={class:"main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem"},Xr={class:"sub"},Fr=M({__name:"Divline",props:{main:String,sub:String},setup(e){return(n,r)=>(P(),V("div",null,[p("div",Zr,ee(e.main),1),p("div",Xr,ee(e.sub),1)]))}}),Ne=U(Fr,[["__scopeId","data-v-224d59c0"]]),Hr={class:"n-card border-solid border-gray-300 rounded-lg shadow-md border hover:scale-103 transition-transform duration-300 ease-in-out lg:w-80% box-border max-w-780px"},Kr={class:"flex flex-col md:flex-row p-0"},qr=["src"],Jr={class:"text-xl font-bold mb-2"},Gr={class:""},Qr=M({__name:"Server",props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},imageOnRight:{type:Boolean,default:!1}},setup(e){function n(o){return o.slice(0,30)+(o.length>30?"......":"")}const r=e;return(o,a)=>(P(),V("div",Hr,[p("div",Kr,[p("div",{class:De(["w-full md:w-1/2",{"md:order-2":e.imageOnRight,"order-1":!e.imageOnRight}])},[p("img",{src:r.imageSrc,class:De(["w-full h-full object-cover",{"rounded-t-lg md:rounded-l-lg md:rounded-tr-none":!e.imageOnRight,"rounded-t-lg md:rounded-r-lg md:rounded-tl-none":e.imageOnRight}])},null,10,qr)],2),p("div",{class:De(["w-full md:w-1/2 px-6 py-4 min-h-40",{"order-1":e.imageOnRight,"order-2":!e.imageOnRight}])},[p("h2",Jr,ee(r.title),1),p("p",Gr,ee(n(r.description)),1)],2)])]))}}),es=U(Qr,[["__scopeId","data-v-07202a12"]]),ts={class:"servers-container sm:w-90% box-border"},ns={class:"grid place-items-center"},rs=M({__name:"Servers",setup(e){const n=$([{imageSrc:"tianda1.png",title:"服务器1",description:"这是服务器1的描述"},{imageSrc:"tianda2.png",title:"服务器2",description:"这是服务器2的描述"},{imageSrc:"server.jpg",title:"服务器3",description:"这是服务器3的描述"}]);return(r,o)=>(P(),V("div",ts,[p("div",ns,[(P(!0),V(je,null,xt(n.value,(a,x)=>(P(),Me(es,{key:x,imageSrc:a.imageSrc,title:a.title,description:a.description,imageOnRight:x%2===1},null,8,["imageSrc","title","description","imageOnRight"]))),128))])]))}}),ss=U(rs,[["__scopeId","data-v-d454e102"]]),os={class:"component"},as={class:"flex justify-center align-center"},is={class:"text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50"},ls={class:"text-center text-.8rem dark:text-cyan100"},us={__name:"Building",props:{title:{type:String,required:!0},description:{type:String,required:!0},imageSrc:{type:String,required:!0}},setup(e){return(n,r)=>(P(),V("div",os,[p("div",as,[p("div",{class:"bg rounded-lg hover:scale-108 transition-all duration-300 border",style:pt({backgroundImage:`url(${e.imageSrc})`})},null,4)]),p("h2",is,ee(e.title),1),p("p",ls,ee(e.description),1)]))}},cs=U(us,[["__scopeId","data-v-d1daf901"]]),ds={class:"building-container"},fs={class:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}},vs=M({__name:"Buildings",setup(e){const n=$([{imageSrc:"dongdamen.jpeg",title:"天大大门",description:"。。。"},{imageSrc:"tianda2.png",title:"Building 2",description:"Description for Building 2"},{imageSrc:"server.jpg",title:"Building 3",description:"Description for Building 3"}]);return(r,o)=>(P(),V("div",ds,[p("div",fs,[(P(!0),V(je,null,xt(n.value,(a,x)=>(P(),Me(cs,{key:x,imageSrc:a.imageSrc,title:a.title,description:a.description},null,8,["imageSrc","title","description"]))),128))])]))}}),ps=U(vs,[["__scopeId","data-v-2d2b7934"]]),xs={__name:"Carousel",setup(e){const n=$(1);function r(){n.value=window.innerWidth>768?3:1}return Oe(()=>{r(),window.addEventListener("resize",r)}),Ve(()=>{window.removeEventListener("resize",r)}),(o,a)=>(P(),Me(ge(kr),{autoplay:"","slides-per-view":n.value,"space-between":20},{default:yn(()=>a[0]||(a[0]=[p("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1),p("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1),p("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1),p("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)])),_:1},8,["slides-per-view"]))}},gs=U(xs,[["__scopeId","data-v-7ccfebc3"]]),ms={},hs={class:"background relative sm:h-500px h-300px w-100vw"};function bs(e,n){return P(),V("div",hs,n[0]||(n[0]=[p("div",{class:"p-40px p-l-40 text-white relative"},[p("div",{class:"z-1 absolute"},[p("h1",null,"TJUUS"),p("h2",null,"是一个"),p("h2",null,"人很多"),p("h2",null,"的"),p("h2",null,"社团")])],-1)]))}const ws=U(ms,[["render",bs],["__scopeId","data-v-b5c5eb03"]]),ys={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8"},_s={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},Ss=M({__name:"Home",setup(e){return(n,r)=>(P(),V(je,null,[O(Ur),p("div",ys,[O(Yr,{class:"developing"}),O(ge(nt)),O(ss,{class:"row"}),O(ge(nt)),O(Ne,{class:"row",main:"我们是",sub:"TJUUS"})]),O(ws),p("div",_s,[O(Ne,{class:"row",main:"建设成果",sub:"探索Minecraft的无限可能"}),O(ps,{class:"row"}),O(Ne,{class:"row my-5",main:"我们的伙伴",sub:"联合"}),O(gs,{class:"row my-5"})])],64))}}),$s=U(Ss,[["__scopeId","data-v-b4ca41e4"]]);export{$s as default};
