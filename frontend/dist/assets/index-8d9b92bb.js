import{r as e,i as t,bU as n,bZ as r,Y as o,Z as l,m as i,b_ as a,aU as s,bV as c,ap as u,a1 as d,h as m,b$ as p,c0 as f,aX as g,k as h,aW as b,c1 as y,c2 as v,c3 as $,c4 as x,c5 as w,c6 as C,c7 as E,aC as O,aV as S,ab as k,ah as I,bA as j,bt as M,a6 as F,bF as N,c8 as P,c9 as T,bI as _,aN as W,p as R,b8 as H,as as q,o as z,ca as A,cb as D,cc as L,cd as B,ce as V,bK as X,a0 as G,bR as Y,cf as K,cg as U}from"./index-32c3357d.js";import{C as Z,R as J}from"./row-4d2b6eab.js";const Q=e=>"object"==typeof e&&null!=e&&1===e.nodeType,ee=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,te=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return ee(n.overflowY,t)||ee(n.overflowX,t)||(e=>{const t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},ne=(e,t,n,r,o,l,i,a)=>l<e&&i>t||l>e&&i<t?0:l<=e&&a<=n||i>=t&&a>=n?l-e-r:i>t&&a<n||l<e&&a>n?i-t+o:0,re=e=>{const t=e.parentElement;return null==t?e.getRootNode().host||null:t},oe=(e,t)=>{var n,r,o,l;if("undefined"==typeof document)return[];const{scrollMode:i,block:a,inline:s,boundary:c,skipOverflowHiddenElements:u}=t,d="function"==typeof c?c:e=>e!==c;if(!Q(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,p=[];let f=e;for(;Q(f)&&d(f);){if(f=re(f),f===m){p.push(f);break}null!=f&&f===document.body&&te(f)&&!te(document.documentElement)||null!=f&&te(f,u)&&p.push(f)}const g=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,h=null!=(l=null==(o=window.visualViewport)?void 0:o.height)?l:innerHeight,{scrollX:b,scrollY:y}=window,{height:v,width:$,top:x,right:w,bottom:C,left:E}=e.getBoundingClientRect(),{top:O,right:S,bottom:k,left:I}=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);let j="start"===a||"nearest"===a?x-O:"end"===a?C+k:x+v/2-O+k,M="center"===s?E+$/2-I+S:"end"===s?w+S:E-I;const F=[];for(let N=0;N<p.length;N++){const e=p[N],{height:t,width:n,top:r,right:o,bottom:l,left:c}=e.getBoundingClientRect();if("if-needed"===i&&x>=0&&E>=0&&C<=h&&w<=g&&x>=r&&C<=l&&E>=c&&w<=o)return F;const u=getComputedStyle(e),d=parseInt(u.borderLeftWidth,10),f=parseInt(u.borderTopWidth,10),O=parseInt(u.borderRightWidth,10),S=parseInt(u.borderBottomWidth,10);let k=0,I=0;const P="offsetWidth"in e?e.offsetWidth-e.clientWidth-d-O:0,T="offsetHeight"in e?e.offsetHeight-e.clientHeight-f-S:0,_="offsetWidth"in e?0===e.offsetWidth?0:n/e.offsetWidth:0,W="offsetHeight"in e?0===e.offsetHeight?0:t/e.offsetHeight:0;if(m===e)k="start"===a?j:"end"===a?j-h:"nearest"===a?ne(y,y+h,h,f,S,y+j,y+j+v,v):j-h/2,I="start"===s?M:"center"===s?M-g/2:"end"===s?M-g:ne(b,b+g,g,d,O,b+M,b+M+$,$),k=Math.max(0,k+y),I=Math.max(0,I+b);else{k="start"===a?j-r-f:"end"===a?j-l+S+T:"nearest"===a?ne(r,l,t,f,S+T,j,j+v,v):j-(r+t/2)+T/2,I="start"===s?M-c-d:"center"===s?M-(c+n/2)+P/2:"end"===s?M-o+O+P:ne(c,o,n,d,O+P,M,M+$,$);const{scrollLeft:i,scrollTop:u}=e;k=0===W?0:Math.max(0,Math.min(u+k/W,e.scrollHeight-t/W+T)),I=0===_?0:Math.max(0,Math.min(i+I/_,e.scrollWidth-n/_+P)),j+=u-k,M+=i-I}F.push({el:e,top:k,left:I})}return F},le=e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"};function ie(t){const[n,r]=e.useState(t);return e.useEffect((()=>{const e=setTimeout((()=>{r(t)}),t.length?0:10);return()=>{clearTimeout(e)}}),[t]),n}const ae=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},se=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${l(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${l(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),ce=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},ue=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},o(e)),se(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},ce(e,e.controlHeightSM)),"&-large":Object.assign({},ce(e,e.controlHeightLG))})}},de=e=>{const{formItemCls:t,iconCls:n,componentCls:l,rootPrefixCls:i,labelRequiredMarkColor:a,labelColor:s,labelFontSize:c,labelHeight:u,labelColonMarginInlineStart:d,labelColonMarginInlineEnd:m,itemMarginBottom:p}=e;return{[t]:Object.assign(Object.assign({},o(e)),{marginBottom:p,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,\n        &-hidden.${i}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:u,color:s,fontSize:c,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${l}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${l}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:d,marginInlineEnd:m},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${i}-col-'"]):not([class*="' ${i}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:r,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},me=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},pe=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,\n        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},fe=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),ge=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:fe(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},he=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${t}-vertical`]:{[n]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${n}-label,\n      .${r}-col-24${n}-label,\n      .${r}-col-xl-24${n}-label`]:fe(e),[`@media (max-width: ${l(e.screenXSMax)})`]:[ge(e),{[t]:{[`.${r}-col-xs-24${n}-label`]:fe(e)}}],[`@media (max-width: ${l(e.screenSMMax)})`]:{[t]:{[`.${r}-col-sm-24${n}-label`]:fe(e)}},[`@media (max-width: ${l(e.screenMDMax)})`]:{[t]:{[`.${r}-col-md-24${n}-label`]:fe(e)}},[`@media (max-width: ${l(e.screenLGMax)})`]:{[t]:{[`.${r}-col-lg-24${n}-label`]:fe(e)}}}},be=(e,t)=>i(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),ye=t("Form",((e,t)=>{let{rootPrefixCls:o}=t;const l=be(e,o);return[ue(l),de(l),ae(l),me(l),pe(l),he(l),n(l),r]}),(e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0})),{order:-1e3}),ve=[];function $e(e,t,n){return{key:"string"==typeof e?e:`${t}-${arguments.length>3&&void 0!==arguments[3]?arguments[3]:0}`,error:e,errorStatus:n}}const xe=t=>{let{help:n,helpStatus:r,errors:o=ve,warnings:l=ve,className:i,fieldId:f,onVisibleChanged:g}=t;const{prefixCls:h}=e.useContext(a),b=`${h}-item-explain`,y=s(h),[v,$,x]=ye(h,y),w=e.useMemo((()=>c(h)),[h]),C=ie(o),E=ie(l),O=e.useMemo((()=>null!=n?[$e(n,"help",r)]:[].concat(u(C.map(((e,t)=>$e(e,"error","error",t)))),u(E.map(((e,t)=>$e(e,"warning","warning",t)))))),[n,r,C,E]),S={};return f&&(S.id=`${f}_help`),v(e.createElement(d,{motionDeadline:w.motionDeadline,motionName:`${h}-show-help`,visible:!!O.length,onVisibleChanged:g},(t=>{const{className:n,style:r}=t;return e.createElement("div",Object.assign({},S,{className:m(b,n,x,y,i,$),style:r,role:"alert"}),e.createElement(p,Object.assign({keys:O},c(h),{motionName:`${h}-show-help-item`,component:!1}),(t=>{const{key:n,error:r,errorStatus:o,className:l,style:i}=t;return e.createElement("div",{key:n,className:m(l,{[`${b}-${o}`]:o}),style:i},r)})))})))},we=["parentNode"],Ce="form_item";function Ee(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function Oe(e,t){if(!e.length)return;const n=e.join("_");if(t)return`${t}_${n}`;return we.includes(n)?`${Ce}_${n}`:n}function Se(e,t,n,r,o,l){let i=r;return void 0!==l?i=l:n.validating?i="validating":e.length?i="error":t.length?i="warning":(n.touched||o&&n.validated)&&(i="success"),i}function ke(e){return Ee(e).join("_")}function Ie(t){const[n]=f(),r=e.useRef({}),o=e.useMemo((()=>null!=t?t:Object.assign(Object.assign({},n),{__INTERNAL__:{itemRef:e=>t=>{const n=ke(e);t?r.current[n]=t:delete r.current[n]}},scrollToField:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=Oe(Ee(e),o.__INTERNAL__.name),r=n?document.getElementById(n):null;r&&function(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;const n=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if((e=>"object"==typeof e&&"function"==typeof e.behavior)(t))return t.behavior(oe(e,t));const r="boolean"==typeof t||null==t?void 0:t.behavior;for(const{el:o,top:l,left:i}of oe(e,le(t))){const e=l-n.top+n.bottom,t=i-n.left+n.right;o.scroll({top:e,left:t,behavior:r})}}(r,Object.assign({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:e=>{const t=ke(e);return r.current[t]}})),[t,n]);return[o]}var je=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Me=(t,n)=>{const r=e.useContext(g),{getPrefixCls:o,direction:l,form:i}=e.useContext(h),{prefixCls:a,className:c,rootClassName:u,size:d,disabled:p=r,form:f,colon:O,labelAlign:S,labelWrap:k,labelCol:I,wrapperCol:j,hideRequiredMark:M,layout:F="horizontal",scrollToFirstError:N,requiredMark:P,onFinishFailed:T,name:_,style:W,feedbackIcons:R,variant:H}=t,q=je(t,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),z=b(d),A=e.useContext(y),D=e.useMemo((()=>void 0!==P?P:!M&&(!i||void 0===i.requiredMark||i.requiredMark)),[M,P,i]),L=null!=O?O:null==i?void 0:i.colon,B=o("form",a),V=s(B),[X,G,Y]=ye(B,V),K=m(B,`${B}-${F}`,{[`${B}-hide-required-mark`]:!1===D,[`${B}-rtl`]:"rtl"===l,[`${B}-${z}`]:z},Y,V,G,null==i?void 0:i.className,c,u),[U]=Ie(f),{__INTERNAL__:Z}=U;Z.name=_;const J=e.useMemo((()=>({name:_,labelAlign:S,labelCol:I,labelWrap:k,wrapperCol:j,vertical:"vertical"===F,colon:L,requiredMark:D,itemRef:Z.itemRef,form:U,feedbackIcons:R})),[_,S,I,j,F,L,D,U,R]);e.useImperativeHandle(n,(()=>U));const Q=(e,t)=>{if(e){let n={block:"nearest"};"object"==typeof e&&(n=e),U.scrollToField(t,n)}};return X(e.createElement(v.Provider,{value:H},e.createElement($,{disabled:p},e.createElement(x.Provider,{value:z},e.createElement(w,{validateMessages:A},e.createElement(C.Provider,{value:J},e.createElement(E,Object.assign({id:_},q,{name:_,onFinishFailed:e=>{if(null==T||T(e),e.errorFields.length){const t=e.errorFields[0].name;if(void 0!==N)return void Q(N,t);i&&void 0!==i.scrollToFirstError&&Q(i.scrollToFirstError,t)}},form:U,style:Object.assign(Object.assign({},null==i?void 0:i.style),W),className:K}))))))))},Fe=e.forwardRef(Me);const Ne=()=>{const{status:t,errors:n=[],warnings:r=[]}=e.useContext(S);return{status:t,errors:n,warnings:r}};Ne.Context=S;const Pe=Ne;const Te=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},_e=j(["Form","item-item"],((e,t)=>{let{rootPrefixCls:n}=t;const r=be(e,n);return[Te(r)]})),We=t=>{const{prefixCls:n,status:r,wrapperCol:o,children:l,errors:i,warnings:s,_internalItemRender:c,extra:u,help:d,fieldId:p,marginBottom:f,onErrorVisibleChanged:g}=t,h=`${n}-item`,b=e.useContext(C),y=o||b.wrapperCol||{},v=m(`${h}-control`,y.className),$=e.useMemo((()=>Object.assign({},b)),[b]);delete $.labelCol,delete $.wrapperCol;const x=e.createElement("div",{className:`${h}-control-input`},e.createElement("div",{className:`${h}-control-input-content`},l)),w=e.useMemo((()=>({prefixCls:n,status:r})),[n,r]),E=null!==f||i.length||s.length?e.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},e.createElement(a.Provider,{value:w},e.createElement(xe,{fieldId:p,errors:i,warnings:s,help:d,helpStatus:r,className:`${h}-explain-connected`,onVisibleChanged:g})),!!f&&e.createElement("div",{style:{width:0,height:f}})):null,O={};p&&(O.id=`${p}_extra`);const S=u?e.createElement("div",Object.assign({},O,{className:`${h}-extra`}),u):null,k=c&&"pro_table_render"===c.mark&&c.render?c.render(t,{input:x,errorList:E,extra:S}):e.createElement(e.Fragment,null,x,E,S);return e.createElement(C.Provider,{value:$},e.createElement(Z,Object.assign({},y,{className:v}),k),e.createElement(_e,{prefixCls:n}))};var Re=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const He=t=>{let{prefixCls:n,label:r,htmlFor:o,labelCol:l,labelAlign:i,colon:a,required:s,requiredMark:c,tooltip:u}=t;var d;const[p]=M("Form"),{vertical:f,labelAlign:g,labelCol:h,labelWrap:b,colon:y}=e.useContext(C);if(!r)return null;const v=l||h||{},$=`${n}-item-label`,x=m($,"left"===(i||g)&&`${$}-left`,v.className,{[`${$}-wrap`]:!!b});let w=r;const E=!0===a||!1!==y&&!1!==a;E&&!f&&"string"==typeof r&&""!==r.trim()&&(w=r.replace(/[:|：]\s*$/,""));const O=function(t){return t?"object"!=typeof t||e.isValidElement(t)?{title:t}:t:null}(u);if(O){const{icon:t=e.createElement(P,null)}=O,r=Re(O,["icon"]),o=e.createElement(F,Object.assign({},r),e.cloneElement(t,{className:`${n}-item-tooltip`,title:"",onClick:e=>{e.preventDefault()},tabIndex:null}));w=e.createElement(e.Fragment,null,w,o)}const S="optional"===c,k="function"==typeof c;k?w=c(w,{required:!!s}):S&&!s&&(w=e.createElement(e.Fragment,null,w,e.createElement("span",{className:`${n}-item-optional`,title:""},(null==p?void 0:p.optional)||(null===(d=N.Form)||void 0===d?void 0:d.optional))));const I=m({[`${n}-item-required`]:s,[`${n}-item-required-mark-optional`]:S||k,[`${n}-item-no-colon`]:!E});return e.createElement(Z,Object.assign({},v,{className:x}),e.createElement("label",{htmlFor:o,className:I,title:"string"==typeof r?r:""},w))},qe={success:T,warning:_,error:W,validating:R};function ze(t){let{children:n,errors:r,warnings:o,hasFeedback:l,validateStatus:i,prefixCls:a,meta:s,noStyle:c}=t;const u=`${a}-item`,{feedbackIcons:d}=e.useContext(C),p=Se(r,o,s,null,!!l,i),{isFormItemInput:f,status:g,hasFeedback:h,feedbackIcon:b}=e.useContext(S),y=e.useMemo((()=>{var t;let n;if(l){const i=!0!==l&&l.icons||d,a=p&&(null===(t=null==i?void 0:i({status:p,errors:r,warnings:o}))||void 0===t?void 0:t[p]),s=p&&qe[p];n=!1!==a&&s?e.createElement("span",{className:m(`${u}-feedback-icon`,`${u}-feedback-icon-${p}`)},a||e.createElement(s,null)):null}const i={status:p||"",errors:r,warnings:o,hasFeedback:!!l,feedbackIcon:n,isFormItemInput:!0};return c&&(i.status=(null!=p?p:g)||"",i.isFormItemInput=f,i.hasFeedback=!!(null!=l?l:h),i.feedbackIcon=void 0!==l?i.feedbackIcon:b),i}),[p,l,c,f,g]);return e.createElement(S.Provider,{value:y},n)}var Ae=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function De(t){const{prefixCls:n,className:r,rootClassName:o,style:l,help:i,errors:a,warnings:s,validateStatus:c,meta:u,hasFeedback:d,hidden:p,children:f,fieldId:g,required:h,isRequired:b,onSubItemMetaChange:y}=t,v=Ae(t,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),$=`${n}-item`,{requiredMark:x}=e.useContext(C),w=e.useRef(null),E=ie(a),O=ie(s),S=null!=i,k=!!(S||a.length||s.length),I=!!w.current&&H(w.current),[j,M]=e.useState(null);q((()=>{if(k&&w.current){const e=getComputedStyle(w.current);M(parseInt(e.marginBottom,10))}}),[k,I]);const F=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Se(e?E:u.errors,e?O:u.warnings,u,"",!!d,c)}(),N=m($,r,o,{[`${$}-with-help`]:S||E.length||O.length,[`${$}-has-feedback`]:F&&d,[`${$}-has-success`]:"success"===F,[`${$}-has-warning`]:"warning"===F,[`${$}-has-error`]:"error"===F,[`${$}-is-validating`]:"validating"===F,[`${$}-hidden`]:p});return e.createElement("div",{className:N,style:l,ref:w},e.createElement(J,Object.assign({className:`${$}-row`},z(v,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),e.createElement(He,Object.assign({htmlFor:g},t,{requiredMark:x,required:null!=h?h:b,prefixCls:n})),e.createElement(We,Object.assign({},t,u,{errors:E,warnings:O,prefixCls:n,status:F,help:i,marginBottom:j,onErrorVisibleChanged:e=>{e||M(null)}}),e.createElement(A.Provider,{value:y},e.createElement(ze,{prefixCls:n,meta:u,errors:u.errors,warnings:u.warnings,hasFeedback:d,validateStatus:F},f)))),!!j&&e.createElement("div",{className:`${$}-margin-offset`,style:{marginBottom:-j}}))}const Le=e.memo((e=>{let{children:t}=e;return t}),((e,t)=>function(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>{const r=e[n],o=t[n];return r===o||"function"==typeof r||"function"==typeof o}))}(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(((e,n)=>e===t.childProps[n]))));const Be=function(t){const{name:n,noStyle:r,className:o,dependencies:l,prefixCls:i,shouldUpdate:a,rules:c,children:d,required:p,label:f,messageVariables:g,trigger:b="onChange",validateTrigger:y,hidden:v,help:$}=t,{getPrefixCls:x}=e.useContext(h),{name:w}=e.useContext(C),E=function(e){if("function"==typeof e)return e;const t=O(e);return t.length<=1?t[0]:t}(d),S="function"==typeof E,j=e.useContext(A),{validateTrigger:M}=e.useContext(D),F=void 0!==y?y:M,N=!(null==n),P=x("form",i),T=s(P),[_,W,R]=ye(P,T);Y();const H=e.useContext(L),q=e.useRef(),[z,K]=function(t){const[n,r]=e.useState(t),o=e.useRef(null),l=e.useRef([]),i=e.useRef(!1);return e.useEffect((()=>(i.current=!1,()=>{i.current=!0,k.cancel(o.current),o.current=null})),[]),[n,function(e){i.current||(null===o.current&&(l.current=[],o.current=k((()=>{o.current=null,r((e=>{let t=e;return l.current.forEach((e=>{t=e(t)})),t}))}))),l.current.push(e))}]}({}),[U,Z]=B((()=>({errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}))),J=(e,t)=>{K((n=>{const r=Object.assign({},n),o=[].concat(u(e.name.slice(0,-1)),u(t)).join("__SPLIT__");return e.destroy?delete r[o]:r[o]=e,r}))},[Q,ee]=e.useMemo((()=>{const e=u(U.errors),t=u(U.warnings);return Object.values(z).forEach((n=>{e.push.apply(e,u(n.errors||[])),t.push.apply(t,u(n.warnings||[]))})),[e,t]}),[z,U.errors,U.warnings]),te=function(){const{itemRef:t}=e.useContext(C),n=e.useRef({});return function(e,r){const o=r&&"object"==typeof r&&r.ref,l=e.join("_");return n.current.name===l&&n.current.originRef===o||(n.current.name=l,n.current.originRef=o,n.current.ref=I(t(e),o)),n.current.ref}}();function ne(n,l,i){return r&&!v?e.createElement(ze,{prefixCls:P,hasFeedback:t.hasFeedback,validateStatus:t.validateStatus,meta:U,errors:Q,warnings:ee,noStyle:!0},n):e.createElement(De,Object.assign({key:"row"},t,{className:m(o,R,T,W),prefixCls:P,fieldId:l,isRequired:i,errors:Q,warnings:ee,meta:U,onSubItemMetaChange:J}),n)}if(!N&&!S&&!l)return _(ne(E));let re={};return"string"==typeof f?re.label=f:n&&(re.label=String(n)),g&&(re=Object.assign(Object.assign({},re),g)),_(e.createElement(V,Object.assign({},t,{messageVariables:re,trigger:b,validateTrigger:F,onMetaChange:e=>{const t=null==H?void 0:H.getKey(e.name);if(Z(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}:e,!0),r&&!1!==$&&j){let n=e.name;if(e.destroy)n=q.current||n;else if(void 0!==t){const[e,r]=t;n=[e].concat(u(r)),q.current=n}j(e,n)}}}),((r,o,i)=>{const s=Ee(n).length&&o?o.name:[],d=Oe(s,w),m=void 0!==p?p:!(!c||!c.some((e=>{if(e&&"object"==typeof e&&e.required&&!e.warningOnly)return!0;if("function"==typeof e){const t=e(i);return t&&t.required&&!t.warningOnly}return!1}))),f=Object.assign({},r);let g=null;if(Array.isArray(E)&&N)g=E;else if(S&&(!a&&!l||N));else if(!l||S||N)if(e.isValidElement(E)){const n=Object.assign(Object.assign({},E.props),f);if(n.id||(n.id=d),$||Q.length>0||ee.length>0||t.extra){const e=[];($||Q.length>0)&&e.push(`${d}_help`),t.extra&&e.push(`${d}_extra`),n["aria-describedby"]=e.join(" ")}Q.length>0&&(n["aria-invalid"]="true"),m&&(n["aria-required"]="true"),X(E)&&(n.ref=te(s,E));new Set([].concat(u(Ee(b)),u(Ee(F)))).forEach((e=>{n[e]=function(){for(var t,n,r,o,l,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];null===(r=f[e])||void 0===r||(t=r).call.apply(t,[f].concat(a)),null===(l=(o=E.props)[e])||void 0===l||(n=l).call.apply(n,[o].concat(a))}}));const r=[n["aria-required"],n["aria-invalid"],n["aria-describedby"]];g=e.createElement(Le,{control:f,update:E,childProps:r},G(E,n))}else g=S&&(a||l)&&!N?E(i):E;else;return ne(g,d,m)})))};Be.useStatus=Pe;const Ve=Be;var Xe=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Ge=t=>{var{prefixCls:n,children:r}=t,o=Xe(t,["prefixCls","children"]);const{getPrefixCls:l}=e.useContext(h),i=l("form",n),s=e.useMemo((()=>({prefixCls:i,status:"error"})),[i]);return e.createElement(K,Object.assign({},o),((t,n,o)=>e.createElement(a.Provider,{value:s},r(t.map((e=>Object.assign(Object.assign({},e),{fieldKey:e.key}))),n,{errors:o.errors,warnings:o.warnings}))))};const Ye=Fe;Ye.Item=Ve,Ye.List=Ge,Ye.ErrorList=xe,Ye.useForm=Ie,Ye.useFormInstance=function(){const{form:t}=e.useContext(C);return t},Ye.useWatch=U,Ye.Provider=w,Ye.create=()=>{};const Ke=Ye;export{Ke as F};
