import{k as u,a7 as c,l as r,n,A as h,d as m,b as p,af as b,f as x,C,h as o,W as $}from"./index-C1vI5ZRD.js";const w=u("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[c("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[c("no-title",`
 display: flex;
 align-items: center;
 `)]),r("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),n("title-position-left",[r("line",[n("left",{width:"28px"})])]),n("title-position-right",[r("line",[n("right",{width:"28px"})])]),n("dashed",[r("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),n("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),r("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),c("dashed",[r("line",{backgroundColor:"var(--n-color)"})]),n("dashed",[r("line",{borderColor:"var(--n-color)"})]),n("vertical",{backgroundColor:"var(--n-color)"})]),_=Object.assign(Object.assign({},h.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),z=m({name:"Divider",props:_,setup(t){const{mergedClsPrefixRef:d,inlineThemeDisabled:l}=p(t),s=h("Divider","-divider",w,b,t,d),a=x(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:v,textColor:f,fontWeight:g}}=s.value;return{"--n-bezier":e,"--n-color":v,"--n-text-color":f,"--n-font-weight":g}}),i=l?C("divider",void 0,a,t):void 0;return{mergedClsPrefix:d,cssVars:l?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t;const{$slots:d,titlePlacement:l,vertical:s,dashed:a,cssVars:i,mergedClsPrefix:e}=this;return(t=this.onRender)===null||t===void 0||t.call(this),o("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:s,[`${e}-divider--no-title`]:!d.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${l}`]:d.default&&l}],style:i},s?null:o("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!s&&d.default?o($,null,o("div",{class:`${e}-divider__title`},this.$slots),o("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}});export{z as N};
