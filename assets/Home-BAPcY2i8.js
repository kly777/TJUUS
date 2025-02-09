import{u as Qt,t as Ae,p as en,i as tn,a as nn,c as rn,d as M,b as me,h as _,r as k,o as on,e as sn,f as m,g as Oe,j as Ve,k as an,l as p,m as A,n as v,q as ft,s as qe,v as ln,w as un,x as cn,y as dn,z as Q,A as pt,B as fn,C as pn,D as vn,V as Ge,E as Qe,F as gn,G as xn,T as mn,H as vt,I as hn,J as se,K as et,L as ie,M as bn,N as wn,O as xe,P,Q as V,R as d,S as tt,_ as j,U as ee,W as Te,X as Ue,Y as gt,Z as Me,$ as yn,a0 as O}from"./index-BJCfcGPX.js";import{N as nt}from"./Divider-ClodbGy5.js";function _n(e){return Qt(Ae(e).toLowerCase())}function Sn(e,n,r,s){for(var i=-1,g=e==null?0:e.length;++i<g;)r=n(r,e[i],i,e);return r}function Cn(e){return function(n){return e==null?void 0:e[n]}}var Rn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},kn=Cn(Rn),$n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,zn="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Tn=zn+Pn+In,Dn="["+Tn+"]",En=RegExp(Dn,"g");function Nn(e){return e=Ae(e),e&&e.replace($n,kn).replace(En,"")}var An=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function On(e){return e.match(An)||[]}var Vn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Un(e){return Vn.test(e)}var xt="\\ud800-\\udfff",Mn="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",Ln="\\u20d0-\\u20ff",Bn=Mn+jn+Ln,mt="\\u2700-\\u27bf",ht="a-z\\xdf-\\xf6\\xf8-\\xff",Wn="\\xac\\xb1\\xd7\\xf7",Yn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zn="\\u2000-\\u206f",Xn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bt="A-Z\\xc0-\\xd6\\xd8-\\xde",Jn="\\ufe0e\\ufe0f",wt=Wn+Yn+Zn+Xn,yt="['’]",rt="["+wt+"]",Fn="["+Bn+"]",_t="\\d+",Hn="["+mt+"]",St="["+ht+"]",Ct="[^"+xt+wt+_t+mt+ht+bt+"]",Kn="\\ud83c[\\udffb-\\udfff]",qn="(?:"+Fn+"|"+Kn+")",Gn="[^"+xt+"]",Rt="(?:\\ud83c[\\udde6-\\uddff]){2}",kt="[\\ud800-\\udbff][\\udc00-\\udfff]",G="["+bt+"]",Qn="\\u200d",ot="(?:"+St+"|"+Ct+")",er="(?:"+G+"|"+Ct+")",st="(?:"+yt+"(?:d|ll|m|re|s|t|ve))?",it="(?:"+yt+"(?:D|LL|M|RE|S|T|VE))?",$t=qn+"?",zt="["+Jn+"]?",tr="(?:"+Qn+"(?:"+[Gn,Rt,kt].join("|")+")"+zt+$t+")*",nr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",or=zt+$t+tr,sr="(?:"+[Hn,Rt,kt].join("|")+")"+or,ir=RegExp([G+"?"+St+"+"+st+"(?="+[rt,G,"$"].join("|")+")",er+"+"+it+"(?="+[rt,G+ot,"$"].join("|")+")",G+"?"+ot+"+"+st,G+"+"+it,rr,nr,_t,sr].join("|"),"g");function ar(e){return e.match(ir)||[]}function lr(e,n,r){return e=Ae(e),n=n,n===void 0?Un(e)?ar(e):On(e):e.match(n)||[]}var ur="['’]",cr=RegExp(ur,"g");function dr(e){return function(n){return Sn(lr(Nn(n).replace(cr,"")),e,"")}}var at=dr(function(e,n,r){return n=n.toLowerCase(),e+(r?_n(n):n)});const Pt=rn("n-carousel-methods");function fr(e){en(Pt,e)}function je(e="unknown",n="component"){const r=tn(Pt);return r||nn(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function pr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function vr(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const gr=M({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=me(e),{isVertical:r,isPrevDisabled:s,isNextDisabled:i,prev:g,next:C}=je();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:s,isNextDisabled:i,prev:g,next:C}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},pr()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},vr()))}}),xr={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},mr=M({name:"CarouselDots",props:xr,setup(e){const{mergedClsPrefixRef:n}=me(e),r=k([]),s=je();function i(h,u){switch(h.key){case"Enter":case" ":h.preventDefault(),s.to(u);return}e.keyboard&&w(h)}function g(h){e.trigger==="hover"&&s.to(h)}function C(h){e.trigger==="click"&&s.to(h)}function w(h){var u;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const x=(u=document.activeElement)===null||u===void 0?void 0:u.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:S}=h,I=S==="PageUp"||S==="ArrowUp",L=S==="PageDown"||S==="ArrowDown",$=S==="PageUp"||S==="ArrowRight",z=S==="PageDown"||S==="ArrowLeft",B=s.isVertical(),Z=B?I:$,W=B?L:z;!Z&&!W||(h.preventDefault(),Z&&!s.isNextDisabled()?(s.next(),R(s.currentIndexRef.value)):W&&!s.isPrevDisabled()&&(s.prev(),R(s.currentIndexRef.value)))}function R(h){var u;(u=r.value[h])===null||u===void 0||u.focus()}return on(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:i,handleMouseenter:g,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},sn(this.total,r=>{const s=r===this.currentIndex;return _("div",{"aria-selected":s,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,s&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:i=>{this.handleKeydown(i,r)}})}))}}),ge="CarouselItem";function hr(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===ge}const br=M({name:ge,setup(e){const{mergedClsPrefixRef:n}=me(e),r=je(at(ge),`n-${at(ge)}`),s=k(),i=m(()=>{const{value:u}=s;return u?r.getSlideIndex(u):-1}),g=m(()=>r.isPrev(i.value)),C=m(()=>r.isNext(i.value)),w=m(()=>r.isActive(i.value)),R=m(()=>r.getSlideStyle(i.value));Oe(()=>{r.addSlide(s.value)}),Ve(()=>{r.removeSlide(s.value)});function h(u){const{value:x}=i;x!==void 0&&(r==null||r.onCarouselItemClick(x,u))}return{mergedClsPrefix:n,selfElRef:s,isPrev:g,isNext:C,isActive:w,index:i,style:R,handleClick:h}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:s,isNext:i,isActive:g,index:C,style:w}=this,R=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:g,[`${r}-carousel__slide--prev`]:s,[`${r}-carousel__slide--next`]:i}];return _("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!g,style:w,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:s,isNext:i,isActive:g,index:C}))}}),wr=an("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[p("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[p("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[A("> img",`
 display: block;
 `)])]),p("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dot",[p("dot",`
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
 `)])]),v("line",[p("dot",`
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
 `)])])]),p("arrow",`
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
 `,[p("slides",`
 flex-direction: column;
 `),v("fade",[p("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),v("card",[p("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[v("current",`
 transform: translateY(-50%) translateZ(0);
 `),v("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),v("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),v("usercontrol",[p("slides",[A(">",[A("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),v("left",[p("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[v("line",[p("dot",`
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
 `)])])]),p("dot",`
 margin: 4px 0;
 `)]),p("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),v("vertical",[p("arrow",`
 transform: rotate(90deg);
 `)]),v("show-arrow",[v("bottom",[p("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),v("top",[p("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("left",[p("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("right",[p("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),v("left",[p("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[A("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("right",[p("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[v("line",[p("dot",`
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
 `)])])]),p("dot",`
 margin: 4px 0;
 `),p("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[A("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("top",[p("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[v("line",[p("dot",`
 margin: 0 4px;
 `)])]),p("dot",`
 margin: 0 4px;
 `),p("arrow-group",`
 top: 12px;
 right: 12px;
 `,[A("> *:first-child",`
 margin-right: 12px;
 `)])]),v("bottom",[p("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[v("line",[p("dot",`
 margin: 0 4px;
 `)])]),p("dot",`
 margin: 0 4px;
 `),p("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[A("> *:first-child",`
 margin-right: 12px;
 `)])]),v("fade",[p("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[v("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),v("card",[p("slides",`
 perspective: 1000px;
 `),p("slide",`
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
 `)])])]);function yr(e){const{length:n}=e;return n>1&&(e.push(lt(e[0],0,"append")),e.unshift(lt(e[n-1],n-1,"prepend"))),e}function lt(e,n,r){return ft(e,{key:`carousel-item-duplicate-${n}-${r}`})}function ut(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function De(e,n){return n?e+1:e}function _r(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function Sr(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function Cr(e,n){return n&&e>3?e-2:e}function ct(e){return window.TouchEvent&&e instanceof window.TouchEvent}function dt(e,n){let{offsetWidth:r,offsetHeight:s}=e;if(n){const i=getComputedStyle(e);r=r-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),s=s-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:r,height:s}}function ve(e,n,r){return e<n?n:e>r?r:e}function Rr(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,s,,i="ms"]=r;return Number(s)*(i==="ms"?1:1e3)}return 0}const kr=["transitionDuration","transitionTimingFunction"],$r=Object.assign(Object.assign({},pt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ee=!1;const zr=M({name:"Carousel",props:$r,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=me(e),s=k(null),i=k(null),g=k([]),C={value:[]},w=m(()=>e.direction==="vertical"),R=m(()=>w.value?"height":"width"),h=m(()=>w.value?"bottom":"right"),u=m(()=>e.effect==="slide"),x=m(()=>e.loop&&e.slidesPerView===1&&u.value),S=m(()=>e.effect==="custom"),I=m(()=>!u.value||e.centeredSlides?1:e.slidesPerView),L=m(()=>S.value?1:e.slidesPerView),$=m(()=>I.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=k({width:0,height:0}),B=k(0),Z=m(()=>{const{value:t}=g;if(!t.length)return[];B.value;const{value:o}=$;if(o)return t.map(y=>dt(y));const{value:a}=L,{value:c}=z,{value:f}=R;let l=c[f];if(a!=="auto"){const{spaceBetween:y}=e,T=l-(a-1)*y,pe=1/Math.max(1,a);l=T*pe}const b=Object.assign(Object.assign({},c),{[f]:l});return t.map(()=>b)}),W=m(()=>{const{value:t}=Z;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:c}=R,{[c]:f}=z.value;let l=0;return t.map(({[c]:b})=>{let y=l;return o&&(y+=(b-f)/2),l+=b+a,y})}),Le=k(!1),he=m(()=>{const{transitionStyle:t}=e;return t?qe(t,kr):{}}),be=m(()=>S.value?0:Rr(he.value.transitionDuration)),Be=m(()=>{const{value:t}=g;if(!t.length)return[];const o=!($.value||L.value===1),a=b=>{if(o){const{value:y}=R;return{[y]:`${Z.value[b][y]}px`}}};if(S.value)return t.map((b,y)=>a(y));const{effect:c,spaceBetween:f}=e,{value:l}=h;return t.reduce((b,y,T)=>{const pe=Object.assign(Object.assign({},a(T)),{[`margin-${l}`]:`${f}px`});return b.push(pe),Le.value&&(c==="fade"||c==="card")&&Object.assign(pe,he.value),b},[])}),D=m(()=>{const{value:t}=I,{length:o}=g.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=Z,{length:c}=a;if(!c)return o;const{value:f}=W,{value:l}=R,b=z.value[l];let y=a[a.length-1][l],T=c;for(;T>1&&y<b;)T--,y+=f[T]-f[T-1];return ve(T+1,1,c)}}),we=m(()=>Cr(D.value,x.value)),Dt=De(e.defaultIndex,x.value),ye=k(ut(Dt,D.value,x.value)),U=ln(un(e,"currentIndex"),ye),E=m(()=>De(U.value,x.value));function te(t){var o,a;t=ve(t,0,D.value-1);const c=ut(t,D.value,x.value),{value:f}=U;c!==U.value&&(ye.value=c,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,c,f),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,c,f))}function _e(t=E.value){return _r(t,D.value,e.loop)}function Se(t=E.value){return Sr(t,D.value,e.loop)}function Et(t){const o=F(t);return o!==null&&_e()===o}function Nt(t){const o=F(t);return o!==null&&Se()===o}function We(t){return E.value===F(t)}function At(t){return U.value===t}function Ye(){return _e()===null}function Ze(){return Se()===null}let J=0;function Ce(t){const o=ve(De(t,x.value),0,D.value);(t!==U.value||o!==E.value)&&te(o)}function ae(){const t=_e();t!==null&&(J=-1,te(t))}function ne(){const t=Se();t!==null&&(J=1,te(t))}let N=!1;function Ot(){(!N||!x.value)&&ae()}function Vt(){(!N||!x.value)&&ne()}let X=0;const Re=k({});function le(t,o=0){Re.value=Object.assign({},he.value,{transform:w.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function re(t=0){u.value?ke(E.value,t):X!==0&&(!N&&t>0&&(N=!0),le(X=0,t))}function ke(t,o){const a=Xe(t);a!==X&&o>0&&(N=!0),X=Xe(E.value),le(a,o)}function Xe(t){let o;return t>=D.value-1?o=Je():o=W.value[t]||0,o}function Je(){if(I.value==="auto"){const{value:t}=R,{[t]:o}=z.value,{value:a}=W,c=a[a.length-1];let f;if(c===void 0)f=o;else{const{value:l}=Z;f=c+l[l.length-1][t]}return f-o}else{const{value:t}=W;return t[D.value-1]||0}}const oe={currentIndexRef:U,to:Ce,prev:Ot,next:Vt,isVertical:()=>w.value,isHorizontal:()=>!w.value,isPrev:Et,isNext:Nt,isActive:We,isPrevDisabled:Ye,isNextDisabled:Ze,getSlideIndex:F,getSlideStyle:jt,addSlide:Ut,removeSlide:Mt,onCarouselItemClick:Lt};fr(oe);function Ut(t){t&&g.value.push(t)}function Mt(t){if(!t)return;const o=F(t);o!==-1&&g.value.splice(o,1)}function F(t){return typeof t=="number"?t:t?g.value.indexOf(t):-1}function jt(t){const o=F(t);if(o!==-1){const a=[Be.value[o]],c=oe.isPrev(o),f=oe.isNext(o);return c&&a.push(e.prevSlideStyle||""),f&&a.push(e.nextSlideStyle||""),vt(a)}}let $e=0,ze=0,Y=0,Pe=0,ue=!1,Ie=!1;function Lt(t,o){let a=!N&&!ue&&!Ie;e.effect==="card"&&a&&!We(t)&&(Ce(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function H(){de(),!e.autoplay||we.value<2||(ce=window.setInterval(ne,e.interval))}function Fe(t){var o;if(Ee||!(!((o=i.value)===null||o===void 0)&&o.contains(hn(t))))return;Ee=!0,ue=!0,Ie=!1,Pe=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=ct(t)?t.touches[0]:t;w.value?ze=a.clientY:$e=a.clientX,e.touchable&&(se("touchmove",document,fe),se("touchend",document,K),se("touchcancel",document,K)),e.draggable&&(se("mousemove",document,fe),se("mouseup",document,K))}function fe(t){const{value:o}=w,{value:a}=R,c=ct(t)?t.touches[0]:t,f=o?c.clientY-ze:c.clientX-$e,l=z.value[a];Y=ve(f,-l,l),t.cancelable&&t.preventDefault(),u.value&&le(X-Y,0)}function K(){const{value:t}=E;let o=t;if(!N&&Y!==0&&u.value){const a=X-Y,c=[...W.value.slice(0,D.value-1),Je()];let f=null;for(let l=0;l<c.length;l++){const b=Math.abs(c[l]-a);if(f!==null&&f<b)break;f=b,o=l}}if(o===t){const a=Date.now()-Pe,{value:c}=R,f=z.value[c];Y>f/2||Y/a>.4?ae():(Y<-f/2||Y/a<-.4)&&ne()}o!==null&&o!==t?(Ie=!0,te(o),et(()=>{(!x.value||ye.value!==U.value)&&re(be.value)})):re(be.value),He(),H()}function He(){ue&&(Ee=!1),ue=!1,$e=0,ze=0,Y=0,Pe=0,ie("touchmove",document,fe),ie("touchend",document,K),ie("touchcancel",document,K),ie("mousemove",document,fe),ie("mouseup",document,K)}function Bt(){if(u.value&&N){const{value:t}=E;ke(t,0)}else H();u.value&&(Re.value.transitionDuration="0ms"),N=!1}function Wt(t){if(t.preventDefault(),N)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const c=-1,f=1,l=(o||a)>0?f:c;let b=0,y=0;w.value?y=l:b=l;const T=10;(y*a>=T||b*o>=T)&&(l===f&&!Ze()?ne():l===c&&!Ye()&&ae())}function Yt(){z.value=dt(s.value,!0),H()}function Zt(){$.value&&B.value++}function Xt(){e.autoplay&&de()}function Jt(){e.autoplay&&H()}Oe(()=>{cn(H),requestAnimationFrame(()=>Le.value=!0)}),Ve(()=>{He(),de()}),dn(()=>{const{value:t}=g,{value:o}=C,a=new Map,c=l=>a.has(l)?a.get(l):-1;let f=!1;for(let l=0;l<t.length;l++){const b=o.findIndex(y=>y.el===t[l]);b!==l&&(f=!0),a.set(t[l],b)}f&&t.sort((l,b)=>c(l)-c(b))}),Q(E,(t,o)=>{if(t===o){J=0;return}if(H(),u.value){if(x.value){const{value:a}=D;J===-1&&o===1&&t===a-2?t=0:J===1&&o===a-2&&t===1&&(t=a-1)}ke(t,be.value)}else re();J=0},{immediate:!0}),Q([x,I],()=>void et(()=>{te(E.value)})),Q(W,()=>{u.value&&re()},{deep:!0}),Q(u,t=>{t?re():(N=!1,le(X=0))});const Ft=m(()=>({onTouchstartPassive:e.touchable?Fe:void 0,onMousedown:e.draggable?Fe:void 0,onWheel:e.mousewheel?Wt:void 0})),Ht=m(()=>Object.assign(Object.assign({},qe(oe,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:we.value,currentIndex:U.value})),Kt=m(()=>({total:we.value,currentIndex:U.value,to:oe.to})),qt={getCurrentIndex:()=>U.value,to:Ce,prev:ae,next:ne},Gt=pt("Carousel","-carousel",wr,fn,e,n),Ke=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:c,dotColorFocus:f,dotLineWidth:l,dotLineWidthActive:b,arrowColor:y}}=Gt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":f,"--n-dot-color-active":c,"--n-dot-size":o,"--n-dot-line-width":l,"--n-dot-line-width-active":b,"--n-arrow-color":y}}),q=r?pn("carousel",void 0,Ke,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:s,slidesElRef:i,slideVNodes:C,duplicatedable:x,userWantsControl:S,autoSlideSize:$,realIndex:E,slideStyles:Be,translateStyle:Re,slidesControlListeners:Ft,handleTransitionEnd:Bt,handleResize:Yt,handleSlideResize:Zt,handleMouseenter:Xt,handleMouseleave:Jt,isActive:At,arrowSlotProps:Ht,dotSlotProps:Kt},qt),{cssVars:r?void 0:Ke,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:s,slideStyles:i,dotType:g,dotPlacement:C,slidesControlListeners:w,transitionProps:R={},arrowSlotProps:h,dotSlotProps:u,$slots:{default:x,dots:S,arrow:I}}=this,L=x&&vn(x())||[];let $=Pr(L);return $.length||($=L.map(z=>_(br,null,{default:()=>ft(z)}))),this.duplicatedable&&($=yr($)),this.slideVNodes.value=$,this.autoSlideSize&&($=$.map(z=>_(Ge,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,s&&`${n}-carousel--usercontrol`],style:this.cssVars},w,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(Ge,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},s?$.map((z,B)=>_("div",{style:i[B],key:B},gn(_(mn,Object.assign({},R),{default:()=>z}),[[xn,this.isActive(B)]]))):$)}),this.showDots&&u.total>1&&Qe(S,u,()=>[_(mr,{key:g+C,total:u.total,currentIndex:u.currentIndex,dotType:g,trigger:this.trigger,keyboard:this.keyboard})]),r&&Qe(I,h,()=>[_(gr,null)]))}});function Pr(e){return e.reduce((n,r)=>(hr(r)&&n.push(r),n),[])}function Ir(e){return bn()?(wn(e),!0):!1}function It(e){return typeof e=="function"?e():xe(e)}const Tr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Dr=Object.prototype.toString,Er=e=>Dr.call(e)==="[object Object]",Nr=()=>{},Tt=Tr?window:void 0;function Ar(e){var n;const r=It(e);return(n=r==null?void 0:r.$el)!=null?n:r}function Or(...e){let n,r,s,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,s,i]=e,n=Tt):[n,r,s,i]=e,!n)return Nr;Array.isArray(r)||(r=[r]),Array.isArray(s)||(s=[s]);const g=[],C=()=>{g.forEach(u=>u()),g.length=0},w=(u,x,S,I)=>(u.addEventListener(x,S,I),()=>u.removeEventListener(x,S,I)),R=Q(()=>[Ar(n),It(i)],([u,x])=>{if(C(),!u)return;const S=Er(x)?{...x}:x;g.push(...r.flatMap(I=>s.map(L=>w(u,I,L,S))))},{immediate:!0,flush:"post"}),h=()=>{R(),C()};return Ir(h),h}function Vr(e={}){const{window:n=Tt,behavior:r="auto"}=e;if(!n)return{x:k(0),y:k(0)};const s=k(n.scrollX),i=k(n.scrollY),g=m({get(){return s.value},set(w){scrollTo({left:w,behavior:r})}}),C=m({get(){return i.value},set(w){scrollTo({top:w,behavior:r})}});return Or(n,"scroll",()=>{s.value=n.scrollX,i.value=n.scrollY},{capture:!1,passive:!0}),{x:g,y:C}}const Ur={class:"home-container animate__animated animate__pulse"},Mr=M({__name:"SPic",setup(e){const n=k(),{y:r}=Vr();return Q(r,s=>{n.value.style.transform=`translateY(${-s/6}px)`}),(s,i)=>(P(),V("div",Ur,[i[0]||(i[0]=d("div",{class:"logo animate__animated animate__fadeInUp pointer-events-none"},[d("div",{class:"title mx-auto"},[d("div",{class:"text-80px sm:text-100px md:text-120px lg:text-140px scale-x-115"},"TJUUS")]),d("div",{class:"describe"},[tt("TianJinUniversity"),d("br"),tt("UnitedServer")])],-1)),d("div",{class:"background",ref_key:"background",ref:n},null,512)]))}}),jr=j(Mr,[["__scopeId","data-v-6a2ac41f"]]),Lr={},Br={class:"bg flex justify-center items-center h-100px w-85% mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all"};function Wr(e,n){return P(),V("div",Br,n[0]||(n[0]=[d("div",{class:"tip-text absolute sm:text-3xl text-xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out"}," #网站正在施工中...... ",-1)]))}const Yr=j(Lr,[["render",Wr],["__scopeId","data-v-46aa5e10"]]),Zr={class:"main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem"},Xr={class:"sub"},Jr=M({__name:"Divline",props:{main:String,sub:String},setup(e){return(n,r)=>(P(),V("div",null,[d("div",Zr,ee(e.main),1),d("div",Xr,ee(e.sub),1)]))}}),Ne=j(Jr,[["__scopeId","data-v-224d59c0"]]),Fr={class:"n-card border-solid border-gray-300 rounded-lg shadow-md border hover:scale-103 transition-transform duration-300 ease-in-out lg:w-80% box-border max-w-780px"},Hr={class:"flex flex-col md:flex-row p-0"},Kr=["src"],qr={class:"text-xl font-bold mb-2"},Gr={class:""},Qr=M({__name:"Server",props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},imageOnRight:{type:Boolean,default:!1}},setup(e){function n(s){return s.slice(0,30)+(s.length>30?"......":"")}const r=e;return(s,i)=>(P(),V("div",Fr,[d("div",Hr,[d("div",{class:Te(["w-full md:w-1/2",{"md:order-2":e.imageOnRight,"order-1":!e.imageOnRight}])},[d("img",{src:r.imageSrc,class:Te(["w-full h-full object-cover",{"rounded-t-lg md:rounded-l-lg md:rounded-tr-none":!e.imageOnRight,"rounded-t-lg md:rounded-r-lg md:rounded-tl-none":e.imageOnRight}])},null,10,Kr)],2),d("div",{class:Te(["w-full md:w-1/2 px-6 py-4 min-h-40",{"order-1":e.imageOnRight,"order-2":!e.imageOnRight}])},[d("h2",qr,ee(r.title),1),d("p",Gr,ee(n(r.description)),1)],2)])]))}}),eo=j(Qr,[["__scopeId","data-v-07202a12"]]),to={class:"servers-container sm:w-90% box-border"},no={class:"grid place-items-center"},ro=M({__name:"Servers",setup(e){const n=k([{imageSrc:"tianda1.png",title:"服务器1",description:"这是服务器1的描述"},{imageSrc:"tianda2.png",title:"服务器2",description:"这是服务器2的描述"},{imageSrc:"server.jpg",title:"服务器3",description:"这是服务器3的描述"}]);return(r,s)=>(P(),V("div",to,[d("div",no,[(P(!0),V(Ue,null,gt(n.value,(i,g)=>(P(),Me(eo,{key:g,imageSrc:i.imageSrc,title:i.title,description:i.description,imageOnRight:g%2===1},null,8,["imageSrc","title","description","imageOnRight"]))),128))])]))}}),oo=j(ro,[["__scopeId","data-v-d454e102"]]),so={class:"component"},io={class:"flex justify-center align-center"},ao={class:"text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50"},lo={class:"text-center text-.8rem dark:text-cyan100"},uo={__name:"Building",props:{title:{type:String,required:!0},description:{type:String,required:!0},imageSrc:{type:String,required:!0}},setup(e){return(n,r)=>(P(),V("div",so,[d("div",io,[d("div",{class:"bg rounded-lg hover:scale-108 transition-all duration-300 border",style:vt({backgroundImage:`url(${e.imageSrc})`})},null,4)]),d("h2",ao,ee(e.title),1),d("p",lo,ee(e.description),1)]))}},co=j(uo,[["__scopeId","data-v-d1daf901"]]),fo={class:"building-container"},po={class:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}},vo=M({__name:"Buildings",setup(e){const n=k([{imageSrc:"dongdamen.jpeg",title:"天大大门",description:"实事求是"},{imageSrc:"eg/6.png",title:"网图 0",description:"Description"},{imageSrc:"eg/3.png",title:"网图 1",description:"Description too"},{imageSrc:"eg/4.png",title:"网图 2",description:"Description again"}]);return(r,s)=>(P(),V("div",fo,[d("div",po,[(P(!0),V(Ue,null,gt(n.value,(i,g)=>(P(),Me(co,{key:g,imageSrc:i.imageSrc,title:i.title,description:i.description},null,8,["imageSrc","title","description"]))),128))])]))}}),go=j(vo,[["__scopeId","data-v-ebd86458"]]),xo="https://kly777.github.io/TJUUS/eg/1.png",mo="https://kly777.github.io/TJUUS/eg/2.png",ho="https://kly777.github.io/TJUUS/eg/0.png",bo="https://kly777.github.io/TJUUS/eg/5.png",wo="https://kly777.github.io/TJUUS/eg/7.png",yo="https://kly777.github.io/TJUUS/eg/8.png",_o={__name:"Carousel",setup(e){const n=k(1);function r(){n.value=window.innerWidth>768?3:1}return Oe(()=>{r(),window.addEventListener("resize",r)}),Ve(()=>{window.removeEventListener("resize",r)}),(s,i)=>(P(),Me(xe(zr),{autoplay:"","slides-per-view":n.value,"space-between":20},{default:yn(()=>i[0]||(i[0]=[d("img",{class:"carousel-img",src:xo},null,-1),d("img",{class:"carousel-img",src:mo},null,-1),d("img",{class:"carousel-img",src:ho},null,-1),d("img",{class:"carousel-img",src:bo},null,-1),d("img",{class:"carousel-img",src:wo},null,-1),d("img",{class:"carousel-img",src:yo},null,-1)])),_:1},8,["slides-per-view"]))}},So=j(_o,[["__scopeId","data-v-9e0155f6"]]),Co={},Ro={class:"background relative sm:h-500px h-300px w-100vw"};function ko(e,n){return P(),V("div",Ro,n[0]||(n[0]=[d("div",{class:"p-40px p-l-40 text-white relative"},[d("div",{class:"z-1 absolute"},[d("h1",null,"TJUUS"),d("h2",null,"是一个"),d("h2",null,"人很多"),d("h2",null,"的"),d("h2",null,"社团")])],-1)]))}const $o=j(Co,[["render",ko],["__scopeId","data-v-b5c5eb03"]]),zo={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8"},Po={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},Io=M({__name:"Home",setup(e){return(n,r)=>(P(),V(Ue,null,[O(jr),d("div",zo,[O(Yr,{class:"developing"}),O(xe(nt)),O(oo,{class:"row"}),O(xe(nt)),O(Ne,{class:"row",main:"我们是",sub:"TJUUS"})]),O($o),d("div",Po,[O(Ne,{class:"row",main:"建设成果",sub:"探索Minecraft的无限可能"}),O(go,{class:"row"}),O(Ne,{class:"row my-5",main:"我们的伙伴",sub:"联合"}),O(So,{class:"row my-5"})])],64))}}),Eo=j(Io,[["__scopeId","data-v-b4ca41e4"]]);export{Eo as default};
