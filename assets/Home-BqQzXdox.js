import{u as Qt,t as Oe,p as en,i as tn,a as nn,c as rn,d as j,b as me,h as y,r as k,o as sn,e as on,f as m,g as Ue,j as Ve,k as an,l as p,m as U,n as v,q as ft,s as Ge,v as ln,w as un,x as cn,y as dn,z as Q,A as pt,B as fn,C as pn,D as vn,V as Qe,E as et,F as gn,G as xn,T as mn,H as vt,I as hn,J as oe,K as tt,L as ie,M as bn,N as wn,O as xe,P,Q as E,R as l,S as Ae,_ as V,U as ee,W as Te,X as Me,Y as gt,Z as je,$ as _n,a0 as D}from"./index-rN8DQ-Dl.js";import{N as nt}from"./Divider-DgHYqYdX.js";function yn(e){return Qt(Oe(e).toLowerCase())}function Sn(e,n,r,o){for(var i=-1,g=e==null?0:e.length;++i<g;)r=n(r,e[i],i,e);return r}function Cn(e){return function(n){return e==null?void 0:e[n]}}var Rn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},kn=Cn(Rn),$n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,zn="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Tn=zn+Pn+In,Dn="["+Tn+"]",En=RegExp(Dn,"g");function Nn(e){return e=Oe(e),e&&e.replace($n,kn).replace(En,"")}var An=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function On(e){return e.match(An)||[]}var Un=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Vn(e){return Un.test(e)}var xt="\\ud800-\\udfff",Mn="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",Ln="\\u20d0-\\u20ff",Bn=Mn+jn+Ln,mt="\\u2700-\\u27bf",ht="a-z\\xdf-\\xf6\\xf8-\\xff",Wn="\\xac\\xb1\\xd7\\xf7",Yn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zn="\\u2000-\\u206f",Xn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bt="A-Z\\xc0-\\xd6\\xd8-\\xde",Jn="\\ufe0e\\ufe0f",wt=Wn+Yn+Zn+Xn,_t="['’]",rt="["+wt+"]",Fn="["+Bn+"]",yt="\\d+",Hn="["+mt+"]",St="["+ht+"]",Ct="[^"+xt+wt+yt+mt+ht+bt+"]",Kn="\\ud83c[\\udffb-\\udfff]",qn="(?:"+Fn+"|"+Kn+")",Gn="[^"+xt+"]",Rt="(?:\\ud83c[\\udde6-\\uddff]){2}",kt="[\\ud800-\\udbff][\\udc00-\\udfff]",G="["+bt+"]",Qn="\\u200d",st="(?:"+St+"|"+Ct+")",er="(?:"+G+"|"+Ct+")",ot="(?:"+_t+"(?:d|ll|m|re|s|t|ve))?",it="(?:"+_t+"(?:D|LL|M|RE|S|T|VE))?",$t=qn+"?",zt="["+Jn+"]?",tr="(?:"+Qn+"(?:"+[Gn,Rt,kt].join("|")+")"+zt+$t+")*",nr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sr=zt+$t+tr,or="(?:"+[Hn,Rt,kt].join("|")+")"+sr,ir=RegExp([G+"?"+St+"+"+ot+"(?="+[rt,G,"$"].join("|")+")",er+"+"+it+"(?="+[rt,G+st,"$"].join("|")+")",G+"?"+st+"+"+ot,G+"+"+it,rr,nr,yt,or].join("|"),"g");function ar(e){return e.match(ir)||[]}function lr(e,n,r){return e=Oe(e),n=n,n===void 0?Vn(e)?ar(e):On(e):e.match(n)||[]}var ur="['’]",cr=RegExp(ur,"g");function dr(e){return function(n){return Sn(lr(Nn(n).replace(cr,"")),e,"")}}var at=dr(function(e,n,r){return n=n.toLowerCase(),e+(r?yn(n):n)});const Pt=rn("n-carousel-methods");function fr(e){en(Pt,e)}function Le(e="unknown",n="component"){const r=tn(Pt);return r||nn(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function pr(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function vr(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const gr=j({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=me(e),{isVertical:r,isPrevDisabled:o,isNextDisabled:i,prev:g,next:C}=Le();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:o,isNextDisabled:i,prev:g,next:C}},render(){const{mergedClsPrefix:e}=this;return y("div",{class:`${e}-carousel__arrow-group`},y("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},pr()),y("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},vr()))}}),xr={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},mr=j({name:"CarouselDots",props:xr,setup(e){const{mergedClsPrefixRef:n}=me(e),r=k([]),o=Le();function i(h,c){switch(h.key){case"Enter":case" ":h.preventDefault(),o.to(c);return}e.keyboard&&w(h)}function g(h){e.trigger==="hover"&&o.to(h)}function C(h){e.trigger==="click"&&o.to(h)}function w(h){var c;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const x=(c=document.activeElement)===null||c===void 0?void 0:c.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:S}=h,I=S==="PageUp"||S==="ArrowUp",L=S==="PageDown"||S==="ArrowDown",$=S==="PageUp"||S==="ArrowRight",z=S==="PageDown"||S==="ArrowLeft",B=o.isVertical(),Z=B?I:$,W=B?L:z;!Z&&!W||(h.preventDefault(),Z&&!o.isNextDisabled()?(o.next(),R(o.currentIndexRef.value)):W&&!o.isPrevDisabled()&&(o.prev(),R(o.currentIndexRef.value)))}function R(h){var c;(c=r.value[h])===null||c===void 0||c.focus()}return sn(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:i,handleMouseenter:g,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return y("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},on(this.total,r=>{const o=r===this.currentIndex;return y("div",{"aria-selected":o,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,o&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:i=>{this.handleKeydown(i,r)}})}))}}),ge="CarouselItem";function hr(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===ge}const br=j({name:ge,setup(e){const{mergedClsPrefixRef:n}=me(e),r=Le(at(ge),`n-${at(ge)}`),o=k(),i=m(()=>{const{value:c}=o;return c?r.getSlideIndex(c):-1}),g=m(()=>r.isPrev(i.value)),C=m(()=>r.isNext(i.value)),w=m(()=>r.isActive(i.value)),R=m(()=>r.getSlideStyle(i.value));Ue(()=>{r.addSlide(o.value)}),Ve(()=>{r.removeSlide(o.value)});function h(c){const{value:x}=i;x!==void 0&&(r==null||r.onCarouselItemClick(x,c))}return{mergedClsPrefix:n,selfElRef:o,isPrev:g,isNext:C,isActive:w,index:i,style:R,handleClick:h}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:o,isNext:i,isActive:g,index:C,style:w}=this,R=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:g,[`${r}-carousel__slide--prev`]:o,[`${r}-carousel__slide--next`]:i}];return y("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!g,style:w,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:o,isNext:i,isActive:g,index:C}))}}),wr=an("carousel",`
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
 `,[U("> img",`
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
 `,[U("&:focus",`
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
 `,[U("&:focus",`
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
 `,[U("svg",`
 height: 1em;
 width: 1em;
 `),U("&:hover",`
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
 `)])])]),v("usercontrol",[p("slides",[U(">",[U("div",`
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
 `,[U("> *:first-child",`
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
 `,[U("> *:first-child",`
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
 `,[U("> *:first-child",`
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
 `,[U("> *:first-child",`
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
 `)])])]);function _r(e){const{length:n}=e;return n>1&&(e.push(lt(e[0],0,"append")),e.unshift(lt(e[n-1],n-1,"prepend"))),e}function lt(e,n,r){return ft(e,{key:`carousel-item-duplicate-${n}-${r}`})}function ut(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function De(e,n){return n?e+1:e}function yr(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function Sr(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function Cr(e,n){return n&&e>3?e-2:e}function ct(e){return window.TouchEvent&&e instanceof window.TouchEvent}function dt(e,n){let{offsetWidth:r,offsetHeight:o}=e;if(n){const i=getComputedStyle(e);r=r-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),o=o-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:r,height:o}}function ve(e,n,r){return e<n?n:e>r?r:e}function Rr(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,o,,i="ms"]=r;return Number(o)*(i==="ms"?1:1e3)}return 0}const kr=["transitionDuration","transitionTimingFunction"],$r=Object.assign(Object.assign({},pt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ee=!1;const zr=j({name:"Carousel",props:$r,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=me(e),o=k(null),i=k(null),g=k([]),C={value:[]},w=m(()=>e.direction==="vertical"),R=m(()=>w.value?"height":"width"),h=m(()=>w.value?"bottom":"right"),c=m(()=>e.effect==="slide"),x=m(()=>e.loop&&e.slidesPerView===1&&c.value),S=m(()=>e.effect==="custom"),I=m(()=>!c.value||e.centeredSlides?1:e.slidesPerView),L=m(()=>S.value?1:e.slidesPerView),$=m(()=>I.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=k({width:0,height:0}),B=k(0),Z=m(()=>{const{value:t}=g;if(!t.length)return[];B.value;const{value:s}=$;if(s)return t.map(_=>dt(_));const{value:a}=L,{value:d}=z,{value:f}=R;let u=d[f];if(a!=="auto"){const{spaceBetween:_}=e,T=u-(a-1)*_,pe=1/Math.max(1,a);u=T*pe}const b=Object.assign(Object.assign({},d),{[f]:u});return t.map(()=>b)}),W=m(()=>{const{value:t}=Z;if(!t.length)return[];const{centeredSlides:s,spaceBetween:a}=e,{value:d}=R,{[d]:f}=z.value;let u=0;return t.map(({[d]:b})=>{let _=u;return s&&(_+=(b-f)/2),u+=b+a,_})}),Be=k(!1),he=m(()=>{const{transitionStyle:t}=e;return t?Ge(t,kr):{}}),be=m(()=>S.value?0:Rr(he.value.transitionDuration)),We=m(()=>{const{value:t}=g;if(!t.length)return[];const s=!($.value||L.value===1),a=b=>{if(s){const{value:_}=R;return{[_]:`${Z.value[b][_]}px`}}};if(S.value)return t.map((b,_)=>a(_));const{effect:d,spaceBetween:f}=e,{value:u}=h;return t.reduce((b,_,T)=>{const pe=Object.assign(Object.assign({},a(T)),{[`margin-${u}`]:`${f}px`});return b.push(pe),Be.value&&(d==="fade"||d==="card")&&Object.assign(pe,he.value),b},[])}),N=m(()=>{const{value:t}=I,{length:s}=g.value;if(t!=="auto")return Math.max(s-t,0)+1;{const{value:a}=Z,{length:d}=a;if(!d)return s;const{value:f}=W,{value:u}=R,b=z.value[u];let _=a[a.length-1][u],T=d;for(;T>1&&_<b;)T--,_+=f[T]-f[T-1];return ve(T+1,1,d)}}),we=m(()=>Cr(N.value,x.value)),Dt=De(e.defaultIndex,x.value),_e=k(ut(Dt,N.value,x.value)),M=ln(un(e,"currentIndex"),_e),A=m(()=>De(M.value,x.value));function te(t){var s,a;t=ve(t,0,N.value-1);const d=ut(t,N.value,x.value),{value:f}=M;d!==M.value&&(_e.value=d,(s=e["onUpdate:currentIndex"])===null||s===void 0||s.call(e,d,f),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,d,f))}function ye(t=A.value){return yr(t,N.value,e.loop)}function Se(t=A.value){return Sr(t,N.value,e.loop)}function Et(t){const s=F(t);return s!==null&&ye()===s}function Nt(t){const s=F(t);return s!==null&&Se()===s}function Ye(t){return A.value===F(t)}function At(t){return M.value===t}function Ze(){return ye()===null}function Xe(){return Se()===null}let J=0;function Ce(t){const s=ve(De(t,x.value),0,N.value);(t!==M.value||s!==A.value)&&te(s)}function ae(){const t=ye();t!==null&&(J=-1,te(t))}function ne(){const t=Se();t!==null&&(J=1,te(t))}let O=!1;function Ot(){(!O||!x.value)&&ae()}function Ut(){(!O||!x.value)&&ne()}let X=0;const Re=k({});function le(t,s=0){Re.value=Object.assign({},he.value,{transform:w.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${s}ms`})}function re(t=0){c.value?ke(A.value,t):X!==0&&(!O&&t>0&&(O=!0),le(X=0,t))}function ke(t,s){const a=Je(t);a!==X&&s>0&&(O=!0),X=Je(A.value),le(a,s)}function Je(t){let s;return t>=N.value-1?s=Fe():s=W.value[t]||0,s}function Fe(){if(I.value==="auto"){const{value:t}=R,{[t]:s}=z.value,{value:a}=W,d=a[a.length-1];let f;if(d===void 0)f=s;else{const{value:u}=Z;f=d+u[u.length-1][t]}return f-s}else{const{value:t}=W;return t[N.value-1]||0}}const se={currentIndexRef:M,to:Ce,prev:Ot,next:Ut,isVertical:()=>w.value,isHorizontal:()=>!w.value,isPrev:Et,isNext:Nt,isActive:Ye,isPrevDisabled:Ze,isNextDisabled:Xe,getSlideIndex:F,getSlideStyle:jt,addSlide:Vt,removeSlide:Mt,onCarouselItemClick:Lt};fr(se);function Vt(t){t&&g.value.push(t)}function Mt(t){if(!t)return;const s=F(t);s!==-1&&g.value.splice(s,1)}function F(t){return typeof t=="number"?t:t?g.value.indexOf(t):-1}function jt(t){const s=F(t);if(s!==-1){const a=[We.value[s]],d=se.isPrev(s),f=se.isNext(s);return d&&a.push(e.prevSlideStyle||""),f&&a.push(e.nextSlideStyle||""),vt(a)}}let $e=0,ze=0,Y=0,Pe=0,ue=!1,Ie=!1;function Lt(t,s){let a=!O&&!ue&&!Ie;e.effect==="card"&&a&&!Ye(t)&&(Ce(t),a=!1),a||(s.preventDefault(),s.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function H(){de(),!e.autoplay||we.value<2||(ce=window.setInterval(ne,e.interval))}function He(t){var s;if(Ee||!(!((s=i.value)===null||s===void 0)&&s.contains(hn(t))))return;Ee=!0,ue=!0,Ie=!1,Pe=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=ct(t)?t.touches[0]:t;w.value?ze=a.clientY:$e=a.clientX,e.touchable&&(oe("touchmove",document,fe),oe("touchend",document,K),oe("touchcancel",document,K)),e.draggable&&(oe("mousemove",document,fe),oe("mouseup",document,K))}function fe(t){const{value:s}=w,{value:a}=R,d=ct(t)?t.touches[0]:t,f=s?d.clientY-ze:d.clientX-$e,u=z.value[a];Y=ve(f,-u,u),t.cancelable&&t.preventDefault(),c.value&&le(X-Y,0)}function K(){const{value:t}=A;let s=t;if(!O&&Y!==0&&c.value){const a=X-Y,d=[...W.value.slice(0,N.value-1),Fe()];let f=null;for(let u=0;u<d.length;u++){const b=Math.abs(d[u]-a);if(f!==null&&f<b)break;f=b,s=u}}if(s===t){const a=Date.now()-Pe,{value:d}=R,f=z.value[d];Y>f/2||Y/a>.4?ae():(Y<-f/2||Y/a<-.4)&&ne()}s!==null&&s!==t?(Ie=!0,te(s),tt(()=>{(!x.value||_e.value!==M.value)&&re(be.value)})):re(be.value),Ke(),H()}function Ke(){ue&&(Ee=!1),ue=!1,$e=0,ze=0,Y=0,Pe=0,ie("touchmove",document,fe),ie("touchend",document,K),ie("touchcancel",document,K),ie("mousemove",document,fe),ie("mouseup",document,K)}function Bt(){if(c.value&&O){const{value:t}=A;ke(t,0)}else H();c.value&&(Re.value.transitionDuration="0ms"),O=!1}function Wt(t){if(t.preventDefault(),O)return;let{deltaX:s,deltaY:a}=t;t.shiftKey&&!s&&(s=a);const d=-1,f=1,u=(s||a)>0?f:d;let b=0,_=0;w.value?_=u:b=u;const T=10;(_*a>=T||b*s>=T)&&(u===f&&!Xe()?ne():u===d&&!Ze()&&ae())}function Yt(){z.value=dt(o.value,!0),H()}function Zt(){$.value&&B.value++}function Xt(){e.autoplay&&de()}function Jt(){e.autoplay&&H()}Ue(()=>{cn(H),requestAnimationFrame(()=>Be.value=!0)}),Ve(()=>{Ke(),de()}),dn(()=>{const{value:t}=g,{value:s}=C,a=new Map,d=u=>a.has(u)?a.get(u):-1;let f=!1;for(let u=0;u<t.length;u++){const b=s.findIndex(_=>_.el===t[u]);b!==u&&(f=!0),a.set(t[u],b)}f&&t.sort((u,b)=>d(u)-d(b))}),Q(A,(t,s)=>{if(t===s){J=0;return}if(H(),c.value){if(x.value){const{value:a}=N;J===-1&&s===1&&t===a-2?t=0:J===1&&s===a-2&&t===1&&(t=a-1)}ke(t,be.value)}else re();J=0},{immediate:!0}),Q([x,I],()=>void tt(()=>{te(A.value)})),Q(W,()=>{c.value&&re()},{deep:!0}),Q(c,t=>{t?re():(O=!1,le(X=0))});const Ft=m(()=>({onTouchstartPassive:e.touchable?He:void 0,onMousedown:e.draggable?He:void 0,onWheel:e.mousewheel?Wt:void 0})),Ht=m(()=>Object.assign(Object.assign({},Ge(se,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:we.value,currentIndex:M.value})),Kt=m(()=>({total:we.value,currentIndex:M.value,to:se.to})),qt={getCurrentIndex:()=>M.value,to:Ce,prev:ae,next:ne},Gt=pt("Carousel","-carousel",wr,fn,e,n),qe=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:s,dotColor:a,dotColorActive:d,dotColorFocus:f,dotLineWidth:u,dotLineWidthActive:b,arrowColor:_}}=Gt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":f,"--n-dot-color-active":d,"--n-dot-size":s,"--n-dot-line-width":u,"--n-dot-line-width-active":b,"--n-arrow-color":_}}),q=r?pn("carousel",void 0,qe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:o,slidesElRef:i,slideVNodes:C,duplicatedable:x,userWantsControl:S,autoSlideSize:$,realIndex:A,slideStyles:We,translateStyle:Re,slidesControlListeners:Ft,handleTransitionEnd:Bt,handleResize:Yt,handleSlideResize:Zt,handleMouseenter:Xt,handleMouseleave:Jt,isActive:At,arrowSlotProps:Ht,dotSlotProps:Kt},qt),{cssVars:r?void 0:qe,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:o,slideStyles:i,dotType:g,dotPlacement:C,slidesControlListeners:w,transitionProps:R={},arrowSlotProps:h,dotSlotProps:c,$slots:{default:x,dots:S,arrow:I}}=this,L=x&&vn(x())||[];let $=Pr(L);return $.length||($=L.map(z=>y(br,null,{default:()=>ft(z)}))),this.duplicatedable&&($=_r($)),this.slideVNodes.value=$,this.autoSlideSize&&($=$.map(z=>y(Qe,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),y("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,o&&`${n}-carousel--usercontrol`],style:this.cssVars},w,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),y(Qe,{onResize:this.handleResize},{default:()=>y("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},o?$.map((z,B)=>y("div",{style:i[B],key:B},gn(y(mn,Object.assign({},R),{default:()=>z}),[[xn,this.isActive(B)]]))):$)}),this.showDots&&c.total>1&&et(S,c,()=>[y(mr,{key:g+C,total:c.total,currentIndex:c.currentIndex,dotType:g,trigger:this.trigger,keyboard:this.keyboard})]),r&&et(I,h,()=>[y(gr,null)]))}});function Pr(e){return e.reduce((n,r)=>(hr(r)&&n.push(r),n),[])}function Ir(e){return bn()?(wn(e),!0):!1}function It(e){return typeof e=="function"?e():xe(e)}const Tr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Dr=Object.prototype.toString,Er=e=>Dr.call(e)==="[object Object]",Nr=()=>{},Tt=Tr?window:void 0;function Ar(e){var n;const r=It(e);return(n=r==null?void 0:r.$el)!=null?n:r}function Or(...e){let n,r,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,o,i]=e,n=Tt):[n,r,o,i]=e,!n)return Nr;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const g=[],C=()=>{g.forEach(c=>c()),g.length=0},w=(c,x,S,I)=>(c.addEventListener(x,S,I),()=>c.removeEventListener(x,S,I)),R=Q(()=>[Ar(n),It(i)],([c,x])=>{if(C(),!c)return;const S=Er(x)?{...x}:x;g.push(...r.flatMap(I=>o.map(L=>w(c,I,L,S))))},{immediate:!0,flush:"post"}),h=()=>{R(),C()};return Ir(h),h}function Ur(e={}){const{window:n=Tt,behavior:r="auto"}=e;if(!n)return{x:k(0),y:k(0)};const o=k(n.scrollX),i=k(n.scrollY),g=m({get(){return o.value},set(w){scrollTo({left:w,behavior:r})}}),C=m({get(){return i.value},set(w){scrollTo({top:w,behavior:r})}});return Or(n,"scroll",()=>{o.value=n.scrollX,i.value=n.scrollY},{capture:!1,passive:!0}),{x:g,y:C}}const Vr={class:"home-container animate__animated animate__pulse"},Mr=j({__name:"SPic",setup(e){const n=k(),{y:r}=Ur();return Q(r,o=>{n.value.style.transform=`translateY(${-o/6}px)`}),(o,i)=>(P(),E("div",Vr,[i[0]||(i[0]=l("div",{class:"logo animate__animated animate__fadeInUp pointer-events-none"},[l("div",{class:"title mx-auto"},[l("div",{class:"text-80px sm:text-100px md:text-120px lg:text-140px scale-x-115"},"TJUUS")]),l("div",{class:"describe"},[Ae("TianJinUniversity"),l("br"),Ae("UnitedServer")])],-1)),l("div",{class:"background",ref_key:"background",ref:n},null,512)]))}}),jr=V(Mr,[["__scopeId","data-v-6a2ac41f"]]),Lr={},Br={class:"bg flex justify-center items-center h-100px w-85% mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all"};function Wr(e,n){return P(),E("div",Br,n[0]||(n[0]=[l("div",{class:"tip-text absolute sm:text-3xl text-xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out"}," #网站正在施工中...... ",-1)]))}const Yr=V(Lr,[["render",Wr],["__scopeId","data-v-46aa5e10"]]),Zr={class:"main light:text-blue500 dark:text-blue200 lg:text-2.5rem md:text-2rem text-1.5rem"},Xr={class:"sub"},Jr=j({__name:"Divline",props:{main:String,sub:String},setup(e){return(n,r)=>(P(),E("div",null,[l("div",Zr,ee(e.main),1),l("div",Xr,ee(e.sub),1)]))}}),Ne=V(Jr,[["__scopeId","data-v-224d59c0"]]),Fr={class:"n-card border-solid border-gray-300 rounded-lg shadow-md border hover:scale-103 transition-transform duration-300 ease-in-out lg:w-80% box-border max-w-780px"},Hr={class:"flex flex-col md:flex-row p-0"},Kr=["src"],qr={class:"text-xl font-bold mb-2"},Gr={class:""},Qr=j({__name:"Server",props:{imageSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},imageOnRight:{type:Boolean,default:!1}},setup(e){function n(o){return o.slice(0,30)+(o.length>30?"......":"")}const r=e;return(o,i)=>(P(),E("div",Fr,[l("div",Hr,[l("div",{class:Te(["w-full md:w-1/2",{"md:order-2":e.imageOnRight,"order-1":!e.imageOnRight}])},[l("img",{src:r.imageSrc,class:Te(["w-full h-full object-cover",{"rounded-t-lg md:rounded-l-lg md:rounded-tr-none":!e.imageOnRight,"rounded-t-lg md:rounded-r-lg md:rounded-tl-none":e.imageOnRight}])},null,10,Kr)],2),l("div",{class:Te(["w-full md:w-1/2 px-6 py-4 min-h-40",{"order-1":e.imageOnRight,"order-2":!e.imageOnRight}])},[l("h2",qr,ee(r.title),1),l("p",Gr,ee(n(r.description)),1)],2)])]))}}),es=V(Qr,[["__scopeId","data-v-07202a12"]]),ts={class:"servers-container sm:w-90% box-border"},ns={class:"grid place-items-center"},rs=j({__name:"Servers",setup(e){const n=k([{imageSrc:"tianda1.png",title:"服务器1",description:"这是服务器1的描述"},{imageSrc:"tianda2.png",title:"服务器2",description:"这是服务器2的描述"},{imageSrc:"server.jpg",title:"服务器3",description:"这是服务器3的描述"}]);return(r,o)=>(P(),E("div",ts,[l("div",ns,[(P(!0),E(Me,null,gt(n.value,(i,g)=>(P(),je(es,{key:g,imageSrc:i.imageSrc,title:i.title,description:i.description,imageOnRight:g%2===1},null,8,["imageSrc","title","description","imageOnRight"]))),128))])]))}}),ss=V(rs,[["__scopeId","data-v-d454e102"]]),os={class:"component"},is={class:"flex justify-center align-center"},as={class:"text-1.5rem font-semibold mb-2 text-center m-t5 dark:text-cyan50"},ls={class:"text-center text-.8rem dark:text-cyan100"},us={__name:"Building",props:{title:{type:String,required:!0},description:{type:String,required:!0},imageSrc:{type:String,required:!0}},setup(e){return(n,r)=>(P(),E("div",os,[l("div",is,[l("div",{class:"bg rounded-lg hover:scale-108 transition-all duration-300 border",style:vt({backgroundImage:`url(${e.imageSrc})`})},null,4)]),l("h2",as,ee(e.title),1),l("p",ls,ee(e.description),1)]))}},cs=V(us,[["__scopeId","data-v-d1daf901"]]),ds={class:"building-container"},fs={class:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}},ps=j({__name:"Buildings",setup(e){const n=k([{imageSrc:"dongdamen.jpeg",title:"天大大门",description:"实事求是"},{imageSrc:"eg/6.png",title:"网图 0",description:"Description"},{imageSrc:"eg/3.png",title:"网图 1",description:"Description too"},{imageSrc:"eg/4.png",title:"网图 2",description:"Description again"}]);return(r,o)=>(P(),E("div",ds,[l("div",fs,[(P(!0),E(Me,null,gt(n.value,(i,g)=>(P(),je(cs,{key:g,imageSrc:i.imageSrc,title:i.title,description:i.description},null,8,["imageSrc","title","description"]))),128))])]))}}),vs=V(ps,[["__scopeId","data-v-ebd86458"]]),gs="https://kly777.github.io/TJUUS/eg/1.png",xs="https://kly777.github.io/TJUUS/eg/2.png",ms="https://kly777.github.io/TJUUS/eg/0.png",hs="https://kly777.github.io/TJUUS/eg/5.png",bs="https://kly777.github.io/TJUUS/eg/7.png",ws="https://kly777.github.io/TJUUS/eg/8.png",_s={__name:"Carousel",setup(e){const n=k(1);function r(){n.value=window.innerWidth>768?3:1}return Ue(()=>{r(),window.addEventListener("resize",r)}),Ve(()=>{window.removeEventListener("resize",r)}),(o,i)=>(P(),je(xe(zr),{autoplay:"","slides-per-view":n.value,"space-between":20},{default:_n(()=>i[0]||(i[0]=[l("img",{class:"carousel-img",src:gs},null,-1),l("img",{class:"carousel-img",src:xs},null,-1),l("img",{class:"carousel-img",src:ms},null,-1),l("img",{class:"carousel-img",src:hs},null,-1),l("img",{class:"carousel-img",src:bs},null,-1),l("img",{class:"carousel-img",src:ws},null,-1)])),_:1},8,["slides-per-view"]))}},ys=V(_s,[["__scopeId","data-v-9e0155f6"]]),Ss={},Cs={class:"background relative sm:h-500px h-300px w-100vw"};function Rs(e,n){return P(),E("div",Cs,n[0]||(n[0]=[l("div",{class:"p-40px p-l-40 text-white relative"},[l("div",{class:"z-1 absolute"},[l("h1",null,"TJUUS"),l("h2",null,"是一个"),l("h2",null,"人很多"),l("h2",null,"的"),l("h2",null,"社团")])],-1)]))}const ks=V(Ss,[["render",Rs],["__scopeId","data-v-b5c5eb03"]]),$s="https://kly777.github.io/TJUUS/icon/bili.png",zs={},Ps={class:"follow-container"};function Is(e,n){return P(),E("div",Ps,n[0]||(n[0]=[l("div",{class:"overlay"},[l("h1",null,"关注我们"),l("p",null,[l("a",{href:"https://space.bilibili.com/1343371808",target:"_blank",class:"text-white flex items-center justify-center decoration-none"},[l("img",{src:$s,alt:"bilibili Logo",class:"h-7 mr-2"}),Ae(" bilibili ")])])],-1)]))}const Ts=V(zs,[["render",Is],["__scopeId","data-v-dc467fd4"]]),Ds={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-0 w-80% py-8"},Es={class:"intro sm:mx-10 md:mx-20 lg:mx-30 mx-5 w-80% py-8"},Ns=j({__name:"Home",setup(e){return(n,r)=>(P(),E(Me,null,[D(jr),l("div",Ds,[D(Yr,{class:"developing"}),D(xe(nt)),D(ss,{class:"row"}),D(xe(nt)),D(Ne,{class:"row",main:"我们是",sub:"TJUUS"})]),D(ks),l("div",Es,[D(Ne,{class:"row",main:"建设成果",sub:"探索Minecraft的无限可能"}),D(vs,{class:"row"}),D(Ne,{class:"row my-5",main:"我们的伙伴",sub:"联合"}),D(ys,{class:"row my-5"})]),D(Ts)],64))}}),Us=V(Ns,[["__scopeId","data-v-65a58340"]]);export{Us as default};
