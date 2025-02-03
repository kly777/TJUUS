import{u as qt,t as Ne,p as Qt,i as en,a as tn,c as nn,d as M,b as me,h as _,r as z,o as rn,e as sn,f as m,g as Ae,j as Oe,k as on,l as f,m as A,n as v,q as ft,s as Je,v as an,w as ln,x as un,y as cn,z as Q,A as vt,B as dn,C as fn,D as vn,V as Ge,E as qe,F as pn,G as xn,T as gn,H as mn,I as hn,J as se,K as Qe,L as oe,M as bn,N as wn,O as xe,P as k,Q as O,R as x,S as et,_ as L,U as ge,W as Te,X as Ve,Y as pt,Z as je,$ as yn,a0 as j}from"./index-m7FfNnOo.js";import{N as tt}from"./Divider-BTYu6zFC.js";function _n(e){return qt(Ne(e).toLowerCase())}function Sn(e,n,r,o){for(var i=-1,p=e==null?0:e.length;++i<p;)r=n(r,e[i],i,e);return r}function Cn(e){return function(n){return e==null?void 0:e[n]}}var Rn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},zn=Cn(Rn),Pn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$n="\\u0300-\\u036f",kn="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Tn=$n+kn+In,Dn="["+Tn+"]",En=RegExp(Dn,"g");function Nn(e){return e=Ne(e),e&&e.replace(Pn,zn).replace(En,"")}var An=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function On(e){return e.match(An)||[]}var Vn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function jn(e){return Vn.test(e)}var xt="\\ud800-\\udfff",Mn="\\u0300-\\u036f",Ln="\\ufe20-\\ufe2f",Un="\\u20d0-\\u20ff",Bn=Mn+Ln+Un,gt="\\u2700-\\u27bf",mt="a-z\\xdf-\\xf6\\xf8-\\xff",Wn="\\xac\\xb1\\xd7\\xf7",Yn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zn="\\u2000-\\u206f",Xn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ht="A-Z\\xc0-\\xd6\\xd8-\\xde",Fn="\\ufe0e\\ufe0f",bt=Wn+Yn+Zn+Xn,wt="['’]",nt="["+bt+"]",Hn="["+Bn+"]",yt="\\d+",Kn="["+gt+"]",_t="["+mt+"]",St="[^"+xt+bt+yt+gt+mt+ht+"]",Jn="\\ud83c[\\udffb-\\udfff]",Gn="(?:"+Hn+"|"+Jn+")",qn="[^"+xt+"]",Ct="(?:\\ud83c[\\udde6-\\uddff]){2}",Rt="[\\ud800-\\udbff][\\udc00-\\udfff]",q="["+ht+"]",Qn="\\u200d",rt="(?:"+_t+"|"+St+")",er="(?:"+q+"|"+St+")",st="(?:"+wt+"(?:d|ll|m|re|s|t|ve))?",ot="(?:"+wt+"(?:D|LL|M|RE|S|T|VE))?",zt=Gn+"?",Pt="["+Fn+"]?",tr="(?:"+Qn+"(?:"+[qn,Ct,Rt].join("|")+")"+Pt+zt+")*",nr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sr=Pt+zt+tr,or="(?:"+[Kn,Ct,Rt].join("|")+")"+sr,ar=RegExp([q+"?"+_t+"+"+st+"(?="+[nt,q,"$"].join("|")+")",er+"+"+ot+"(?="+[nt,q+rt,"$"].join("|")+")",q+"?"+rt+"+"+st,q+"+"+ot,rr,nr,yt,or].join("|"),"g");function ir(e){return e.match(ar)||[]}function lr(e,n,r){return e=Ne(e),n=n,n===void 0?jn(e)?ir(e):On(e):e.match(n)||[]}var ur="['’]",cr=RegExp(ur,"g");function dr(e){return function(n){return Sn(lr(Nn(n).replace(cr,"")),e,"")}}var at=dr(function(e,n,r){return n=n.toLowerCase(),e+(r?_n(n):n)});const $t=nn("n-carousel-methods");function fr(e){Qt($t,e)}function Me(e="unknown",n="component"){const r=en($t);return r||tn(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function vr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function pr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const xr=M({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=me(e),{isVertical:r,isPrevDisabled:o,isNextDisabled:i,prev:p,next:C}=Me();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:o,isNextDisabled:i,prev:p,next:C}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},vr()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},pr()))}}),gr={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},mr=M({name:"CarouselDots",props:gr,setup(e){const{mergedClsPrefixRef:n}=me(e),r=z([]),o=Me();function i(h,u){switch(h.key){case"Enter":case" ":h.preventDefault(),o.to(u);return}e.keyboard&&w(h)}function p(h){e.trigger==="hover"&&o.to(h)}function C(h){e.trigger==="click"&&o.to(h)}function w(h){var u;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const g=(u=document.activeElement)===null||u===void 0?void 0:u.nodeName.toLowerCase();if(g==="input"||g==="textarea")return;const{code:S}=h,I=S==="PageUp"||S==="ArrowUp",U=S==="PageDown"||S==="ArrowDown",P=S==="PageUp"||S==="ArrowRight",$=S==="PageDown"||S==="ArrowLeft",B=o.isVertical(),Z=B?I:P,W=B?U:$;!Z&&!W||(h.preventDefault(),Z&&!o.isNextDisabled()?(o.next(),R(o.currentIndexRef.value)):W&&!o.isPrevDisabled()&&(o.prev(),R(o.currentIndexRef.value)))}function R(h){var u;(u=r.value[h])===null||u===void 0||u.focus()}return rn(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:i,handleMouseenter:p,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},sn(this.total,r=>{const o=r===this.currentIndex;return _("div",{"aria-selected":o,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,o&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:i=>{this.handleKeydown(i,r)}})}))}}),pe="CarouselItem";function hr(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===pe}const br=M({name:pe,setup(e){const{mergedClsPrefixRef:n}=me(e),r=Me(at(pe),`n-${at(pe)}`),o=z(),i=m(()=>{const{value:u}=o;return u?r.getSlideIndex(u):-1}),p=m(()=>r.isPrev(i.value)),C=m(()=>r.isNext(i.value)),w=m(()=>r.isActive(i.value)),R=m(()=>r.getSlideStyle(i.value));Ae(()=>{r.addSlide(o.value)}),Oe(()=>{r.removeSlide(o.value)});function h(u){const{value:g}=i;g!==void 0&&(r==null||r.onCarouselItemClick(g,u))}return{mergedClsPrefix:n,selfElRef:o,isPrev:p,isNext:C,isActive:w,index:i,style:R,handleClick:h}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:o,isNext:i,isActive:p,index:C,style:w}=this,R=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:p,[`${r}-carousel__slide--prev`]:o,[`${r}-carousel__slide--next`]:i}];return _("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!p,style:w,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:o,isNext:i,isActive:p,index:C}))}}),wr=on("carousel",`
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
 `)])])]);function yr(e){const{length:n}=e;return n>1&&(e.push(it(e[0],0,"append")),e.unshift(it(e[n-1],n-1,"prepend"))),e}function it(e,n,r){return ft(e,{key:`carousel-item-duplicate-${n}-${r}`})}function lt(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function De(e,n){return n?e+1:e}function _r(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function Sr(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function Cr(e,n){return n&&e>3?e-2:e}function ut(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ct(e,n){let{offsetWidth:r,offsetHeight:o}=e;if(n){const i=getComputedStyle(e);r=r-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),o=o-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:r,height:o}}function ve(e,n,r){return e<n?n:e>r?r:e}function Rr(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,o,,i="ms"]=r;return Number(o)*(i==="ms"?1:1e3)}return 0}const zr=["transitionDuration","transitionTimingFunction"],Pr=Object.assign(Object.assign({},vt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ee=!1;const $r=M({name:"Carousel",props:Pr,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=me(e),o=z(null),i=z(null),p=z([]),C={value:[]},w=m(()=>e.direction==="vertical"),R=m(()=>w.value?"height":"width"),h=m(()=>w.value?"bottom":"right"),u=m(()=>e.effect==="slide"),g=m(()=>e.loop&&e.slidesPerView===1&&u.value),S=m(()=>e.effect==="custom"),I=m(()=>!u.value||e.centeredSlides?1:e.slidesPerView),U=m(()=>S.value?1:e.slidesPerView),P=m(()=>I.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),$=z({width:0,height:0}),B=z(0),Z=m(()=>{const{value:t}=p;if(!t.length)return[];B.value;const{value:s}=P;if(s)return t.map(y=>ct(y));const{value:a}=U,{value:c}=$,{value:d}=R;let l=c[d];if(a!=="auto"){const{spaceBetween:y}=e,T=l-(a-1)*y,fe=1/Math.max(1,a);l=T*fe}const b=Object.assign(Object.assign({},c),{[d]:l});return t.map(()=>b)}),W=m(()=>{const{value:t}=Z;if(!t.length)return[];const{centeredSlides:s,spaceBetween:a}=e,{value:c}=R,{[c]:d}=$.value;let l=0;return t.map(({[c]:b})=>{let y=l;return s&&(y+=(b-d)/2),l+=b+a,y})}),Le=z(!1),he=m(()=>{const{transitionStyle:t}=e;return t?Je(t,zr):{}}),be=m(()=>S.value?0:Rr(he.value.transitionDuration)),Ue=m(()=>{const{value:t}=p;if(!t.length)return[];const s=!(P.value||U.value===1),a=b=>{if(s){const{value:y}=R;return{[y]:`${Z.value[b][y]}px`}}};if(S.value)return t.map((b,y)=>a(y));const{effect:c,spaceBetween:d}=e,{value:l}=h;return t.reduce((b,y,T)=>{const fe=Object.assign(Object.assign({},a(T)),{[`margin-${l}`]:`${d}px`});return b.push(fe),Le.value&&(c==="fade"||c==="card")&&Object.assign(fe,he.value),b},[])}),D=m(()=>{const{value:t}=I,{length:s}=p.value;if(t!=="auto")return Math.max(s-t,0)+1;{const{value:a}=Z,{length:c}=a;if(!c)return s;const{value:d}=W,{value:l}=R,b=$.value[l];let y=a[a.length-1][l],T=c;for(;T>1&&y<b;)T--,y+=d[T]-d[T-1];return ve(T+1,1,c)}}),we=m(()=>Cr(D.value,g.value)),Tt=De(e.defaultIndex,g.value),ye=z(lt(Tt,D.value,g.value)),V=an(ln(e,"currentIndex"),ye),E=m(()=>De(V.value,g.value));function ee(t){var s,a;t=ve(t,0,D.value-1);const c=lt(t,D.value,g.value),{value:d}=V;c!==V.value&&(ye.value=c,(s=e["onUpdate:currentIndex"])===null||s===void 0||s.call(e,c,d),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,c,d))}function _e(t=E.value){return _r(t,D.value,e.loop)}function Se(t=E.value){return Sr(t,D.value,e.loop)}function Dt(t){const s=H(t);return s!==null&&_e()===s}function Et(t){const s=H(t);return s!==null&&Se()===s}function Be(t){return E.value===H(t)}function Nt(t){return V.value===t}function We(){return _e()===null}function Ye(){return Se()===null}let F=0;function Ce(t){const s=ve(De(t,g.value),0,D.value);(t!==V.value||s!==E.value)&&ee(s)}function ae(){const t=_e();t!==null&&(F=-1,ee(t))}function te(){const t=Se();t!==null&&(F=1,ee(t))}let N=!1;function At(){(!N||!g.value)&&ae()}function Ot(){(!N||!g.value)&&te()}let X=0;const Re=z({});function ie(t,s=0){Re.value=Object.assign({},he.value,{transform:w.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${s}ms`})}function ne(t=0){u.value?ze(E.value,t):X!==0&&(!N&&t>0&&(N=!0),ie(X=0,t))}function ze(t,s){const a=Ze(t);a!==X&&s>0&&(N=!0),X=Ze(E.value),ie(a,s)}function Ze(t){let s;return t>=D.value-1?s=Xe():s=W.value[t]||0,s}function Xe(){if(I.value==="auto"){const{value:t}=R,{[t]:s}=$.value,{value:a}=W,c=a[a.length-1];let d;if(c===void 0)d=s;else{const{value:l}=Z;d=c+l[l.length-1][t]}return d-s}else{const{value:t}=W;return t[D.value-1]||0}}const re={currentIndexRef:V,to:Ce,prev:At,next:Ot,isVertical:()=>w.value,isHorizontal:()=>!w.value,isPrev:Dt,isNext:Et,isActive:Be,isPrevDisabled:We,isNextDisabled:Ye,getSlideIndex:H,getSlideStyle:Mt,addSlide:Vt,removeSlide:jt,onCarouselItemClick:Lt};fr(re);function Vt(t){t&&p.value.push(t)}function jt(t){if(!t)return;const s=H(t);s!==-1&&p.value.splice(s,1)}function H(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function Mt(t){const s=H(t);if(s!==-1){const a=[Ue.value[s]],c=re.isPrev(s),d=re.isNext(s);return c&&a.push(e.prevSlideStyle||""),d&&a.push(e.nextSlideStyle||""),mn(a)}}let Pe=0,$e=0,Y=0,ke=0,le=!1,Ie=!1;function Lt(t,s){let a=!N&&!le&&!Ie;e.effect==="card"&&a&&!Be(t)&&(Ce(t),a=!1),a||(s.preventDefault(),s.stopPropagation())}let ue=null;function ce(){ue&&(clearInterval(ue),ue=null)}function K(){ce(),!e.autoplay||we.value<2||(ue=window.setInterval(te,e.interval))}function Fe(t){var s;if(Ee||!(!((s=i.value)===null||s===void 0)&&s.contains(hn(t))))return;Ee=!0,le=!0,Ie=!1,ke=Date.now(),ce(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=ut(t)?t.touches[0]:t;w.value?$e=a.clientY:Pe=a.clientX,e.touchable&&(se("touchmove",document,de),se("touchend",document,J),se("touchcancel",document,J)),e.draggable&&(se("mousemove",document,de),se("mouseup",document,J))}function de(t){const{value:s}=w,{value:a}=R,c=ut(t)?t.touches[0]:t,d=s?c.clientY-$e:c.clientX-Pe,l=$.value[a];Y=ve(d,-l,l),t.cancelable&&t.preventDefault(),u.value&&ie(X-Y,0)}function J(){const{value:t}=E;let s=t;if(!N&&Y!==0&&u.value){const a=X-Y,c=[...W.value.slice(0,D.value-1),Xe()];let d=null;for(let l=0;l<c.length;l++){const b=Math.abs(c[l]-a);if(d!==null&&d<b)break;d=b,s=l}}if(s===t){const a=Date.now()-ke,{value:c}=R,d=$.value[c];Y>d/2||Y/a>.4?ae():(Y<-d/2||Y/a<-.4)&&te()}s!==null&&s!==t?(Ie=!0,ee(s),Qe(()=>{(!g.value||ye.value!==V.value)&&ne(be.value)})):ne(be.value),He(),K()}function He(){le&&(Ee=!1),le=!1,Pe=0,$e=0,Y=0,ke=0,oe("touchmove",document,de),oe("touchend",document,J),oe("touchcancel",document,J),oe("mousemove",document,de),oe("mouseup",document,J)}function Ut(){if(u.value&&N){const{value:t}=E;ze(t,0)}else K();u.value&&(Re.value.transitionDuration="0ms"),N=!1}function Bt(t){if(t.preventDefault(),N)return;let{deltaX:s,deltaY:a}=t;t.shiftKey&&!s&&(s=a);const c=-1,d=1,l=(s||a)>0?d:c;let b=0,y=0;w.value?y=l:b=l;const T=10;(y*a>=T||b*s>=T)&&(l===d&&!Ye()?te():l===c&&!We()&&ae())}function Wt(){$.value=ct(o.value,!0),K()}function Yt(){P.value&&B.value++}function Zt(){e.autoplay&&ce()}function Xt(){e.autoplay&&K()}Ae(()=>{un(K),requestAnimationFrame(()=>Le.value=!0)}),Oe(()=>{He(),ce()}),cn(()=>{const{value:t}=p,{value:s}=C,a=new Map,c=l=>a.has(l)?a.get(l):-1;let d=!1;for(let l=0;l<t.length;l++){const b=s.findIndex(y=>y.el===t[l]);b!==l&&(d=!0),a.set(t[l],b)}d&&t.sort((l,b)=>c(l)-c(b))}),Q(E,(t,s)=>{if(t===s){F=0;return}if(K(),u.value){if(g.value){const{value:a}=D;F===-1&&s===1&&t===a-2?t=0:F===1&&s===a-2&&t===1&&(t=a-1)}ze(t,be.value)}else ne();F=0},{immediate:!0}),Q([g,I],()=>void Qe(()=>{ee(E.value)})),Q(W,()=>{u.value&&ne()},{deep:!0}),Q(u,t=>{t?ne():(N=!1,ie(X=0))});const Ft=m(()=>({onTouchstartPassive:e.touchable?Fe:void 0,onMousedown:e.draggable?Fe:void 0,onWheel:e.mousewheel?Bt:void 0})),Ht=m(()=>Object.assign(Object.assign({},Je(re,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:we.value,currentIndex:V.value})),Kt=m(()=>({total:we.value,currentIndex:V.value,to:re.to})),Jt={getCurrentIndex:()=>V.value,to:Ce,prev:ae,next:te},Gt=vt("Carousel","-carousel",wr,dn,e,n),Ke=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:s,dotColor:a,dotColorActive:c,dotColorFocus:d,dotLineWidth:l,dotLineWidthActive:b,arrowColor:y}}=Gt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":d,"--n-dot-color-active":c,"--n-dot-size":s,"--n-dot-line-width":l,"--n-dot-line-width-active":b,"--n-arrow-color":y}}),G=r?fn("carousel",void 0,Ke,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:o,slidesElRef:i,slideVNodes:C,duplicatedable:g,userWantsControl:S,autoSlideSize:P,realIndex:E,slideStyles:Ue,translateStyle:Re,slidesControlListeners:Ft,handleTransitionEnd:Ut,handleResize:Wt,handleSlideResize:Yt,handleMouseenter:Zt,handleMouseleave:Xt,isActive:Nt,arrowSlotProps:Ht,dotSlotProps:Kt},Jt),{cssVars:r?void 0:Ke,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:o,slideStyles:i,dotType:p,dotPlacement:C,slidesControlListeners:w,transitionProps:R={},arrowSlotProps:h,dotSlotProps:u,$slots:{default:g,dots:S,arrow:I}}=this,U=g&&vn(g())||[];let P=kr(U);return P.length||(P=U.map($=>_(br,null,{default:()=>ft($)}))),this.duplicatedable&&(P=yr(P)),this.slideVNodes.value=P,this.autoSlideSize&&(P=P.map($=>_(Ge,{onResize:this.handleSlideResize},{default:()=>$}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,o&&`${n}-carousel--usercontrol`],style:this.cssVars},w,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Ge,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},o?P.map(($,B)=>_("div",{style:i[B],key:B},pn(_(gn,Object.assign({},R),{default:()=>$}),[[xn,this.isActive(B)]]))):P)}),this.showDots&&u.total>1&&qe(S,u,()=>[_(mr,{key:p+C,total:u.total,currentIndex:u.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),r&&qe(I,h,()=>[_(xr,null)]))}});function kr(e){return e.reduce((n,r)=>(hr(r)&&n.push(r),n),[])}function Ir(e){return bn()?(wn(e),!0):!1}function kt(e){return typeof e=="function"?e():xe(e)}const Tr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Dr=Object.prototype.toString,Er=e=>Dr.call(e)==="[object Object]",Nr=()=>{},It=Tr?window:void 0;function Ar(e){var n;const r=kt(e);return(n=r==null?void 0:r.$el)!=null?n:r}function Or(...e){let n,r,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,o,i]=e,n=It):[n,r,o,i]=e,!n)return Nr;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const p=[],C=()=>{p.forEach(u=>u()),p.length=0},w=(u,g,S,I)=>(u.addEventListener(g,S,I),()=>u.removeEventListener(g,S,I)),R=Q(()=>[Ar(n),kt(i)],([u,g])=>{if(C(),!u)return;const S=Er(g)?{...g}:g;p.push(...r.flatMap(I=>o.map(U=>w(u,I,U,S))))},{immediate:!0,flush:"post"}),h=()=>{R(),C()};return Ir(h),h}function Vr(e={}){const{window:n=It,behavior:r="auto"}=e;if(!n)return{x:z(0),y:z(0)};const o=z(n.scrollX),i=z(n.scrollY),p=m({get(){return o.value},set(w){scrollTo({left:w,behavior:r})}}),C=m({get(){return i.value},set(w){scrollTo({top:w,behavior:r})}});return Or(n,"scroll",()=>{o.value=n.scrollX,i.value=n.scrollY},{capture:!1,passive:!0}),{x:p,y:C}}const jr={class:"home-container animate__animated animate__pulse"},Mr=M({__name:"SPic",setup(e){const n=z(),{y:r}=Vr();return Q(r,o=>{n.value.style.transform=`translateY(${-o/6}px)`}),(o,i)=>(k(),O("div",jr,[i[0]||(i[0]=x("div",{class:"logo animate__animated animate__fadeInUp pointer-events-none"},[x("div",{class:"title mx-auto"},[x("div",{class:"text-80px sm:text-100px md:text-120px lg:text-140px scale-x-115"},"TJUUS")]),x("div",{class:"describe"},[et("TianJinUniversity"),x("br"),et("UnitedServer")])],-1)),x("div",{class:"background",ref_key:"background",ref:n},null,512)]))}}),Lr=L(Mr,[["__scopeId","data-v-6a2ac41f"]]),Ur={},Br={class:"bg flex justify-center items-center h-100px w-85% mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all"};function Wr(e,n){return k(),O("div",Br,n[0]||(n[0]=[x("div",{class:"tip-text absolute sm:text-3xl text-xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out"}," #网站正在施工中...... ",-1)]))}const Yr=L(Ur,[["render",Wr],["__scopeId","data-v-46aa5e10"]]),Zr={class:"main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem"},Xr={class:"sub"},Fr=M({__name:"Divline",props:{main:String,sub:String},setup(e){return(n,r)=>(k(),O("div",null,[x("div",Zr,ge(e.main),1),x("div",Xr,ge(e.sub),1)]))}}),dt=L(Fr,[["__scopeId","data-v-224d59c0"]]),Hr={class:"n-card border-solid border-gray-300 rounded-lg shadow-md border hover:scale-103 transition-transform duration-300 ease-in-out w-100% box-border max-w-780px"},Kr={class:"flex flex-col md:flex-row p-0"},Jr=["src"],Gr={class:"text-xl font-bold mb-2"},qr={class:""},Qr=M({__name:"Server",props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},imageOnRight:{type:Boolean,default:!1}},setup(e){function n(o){return o.slice(0,30)+(o.length>30?"......":"")}const r=e;return(o,i)=>(k(),O("div",Hr,[x("div",Kr,[x("div",{class:Te(["w-full md:w-1/2",{"order-2":e.imageOnRight,"order-1":!e.imageOnRight}])},[x("img",{src:r.imageSrc,class:Te(["w-full h-full object-cover",{"rounded-t-lg md:rounded-l-lg md:rounded-tr-none":!e.imageOnRight,"rounded-t-lg md:rounded-r-lg md:rounded-tl-none":e.imageOnRight}])},null,10,Jr)],2),x("div",{class:Te(["w-full md:w-1/2 p-4",{"order-1":e.imageOnRight,"order-2":!e.imageOnRight}])},[x("h2",Gr,ge(r.title),1),x("p",qr,ge(n(r.description)),1)],2)])]))}}),es=L(Qr,[["__scopeId","data-v-51be7e3a"]]),ts={class:"servers-container"},ns={class:"grid place-items-center"},rs=M({__name:"Servers",setup(e){const n=z([{imageSrc:"tianda1.png"},{imageSrc:"tianda2.png"},{imageSrc:"server.jpg"}]);return(r,o)=>(k(),O("div",ts,[x("div",ns,[(k(!0),O(Ve,null,pt(n.value,(i,p)=>(k(),je(es,{key:p,imageSrc:i.imageSrc,title:"也许你需要这个",description:"休息一下吧111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"},null,8,["imageSrc"]))),128))])]))}}),ss=L(rs,[["__scopeId","data-v-268b29aa"]]),os={class:"component"},as={__name:"Building",setup(e){return(n,r)=>(k(),O("div",os,r[0]||(r[0]=[x("div",{class:"flex justify-center align-center"},[x("div",{class:"bg rounded-lg hover:scale-108 transition-all duration-300 border"})],-1),x("h2",{class:"text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50"},"高速熔炉",-1),x("p",{class:"text-center text-.8rem dark:text-cyan100"},"高效处理矿石，提升资源获取速度。",-1)])))}},is=L(as,[["__scopeId","data-v-843245b3"]]),ls={class:"building-container"},us={class:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}},cs=M({__name:"Buildings",setup(e){const n=z([{imageSrc:"tianda1.png"},{imageSrc:"tianda2.png"},{imageSrc:"server3.jpg"}]);return(r,o)=>(k(),O("div",ls,[x("div",us,[(k(!0),O(Ve,null,pt(n.value,(i,p)=>(k(),je(is,{key:p,imageSrc:i.imageSrc},null,8,["imageSrc"]))),128))])]))}}),ds=L(cs,[["__scopeId","data-v-2c2ca114"]]),fs={__name:"Carousel",setup(e){const n=z(1);function r(){n.value=window.innerWidth>768?3:1}return Ae(()=>{r(),window.addEventListener("resize",r)}),Oe(()=>{window.removeEventListener("resize",r)}),(o,i)=>(k(),je(xe($r),{autoplay:"","slides-per-view":n.value,"space-between":20},{default:yn(()=>i[0]||(i[0]=[x("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1),x("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1),x("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1),x("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)])),_:1},8,["slides-per-view"]))}},vs=L(fs,[["__scopeId","data-v-7ccfebc3"]]),ps={},xs={class:"background relative sm:h-400px h-300px w-100vw"};function gs(e,n){return k(),O("div",xs,n[0]||(n[0]=[x("div",{class:"p-40px p-l-40 text-white relative"},[x("div",{class:"z-1 absolute"},[x("h1",null,"TTTT"),x("h2",null,"JJJJ")])],-1)]))}const ms=L(ps,[["render",gs],["__scopeId","data-v-57b9796b"]]),hs={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},bs={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},ws=M({__name:"Home",setup(e){return(n,r)=>(k(),O(Ve,null,[j(Lr),x("div",hs,[j(Yr,{class:"developing"}),j(xe(tt)),j(ss,{class:"row"}),j(xe(tt)),j(dt,{class:"row",main:"建设成果",sub:"不知道写什么"}),j(ds,{class:"row"}),j(dt,{class:"row",main:"我们是",sub:"TJUUS团队"})]),j(ms),x("div",bs,[j(vs,{class:"row"})])],64))}}),Ss=L(ws,[["__scopeId","data-v-ab931d65"]]);export{Ss as default};
