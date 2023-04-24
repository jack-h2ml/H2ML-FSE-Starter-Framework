!function(){"use strict";var e=window.wp.element,t=window.wp.hooks,l=window.wp.blockEditor,n=window.wp.data,a=window.wp.i18n,o=window.wp.compose;const r=(0,n.createReduxStore)("h2mlFilterStore",{reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{globals:{}},t=arguments.length>1?arguments[1]:void 0;return"H2ML_SET_GLOBAL"===t.type?{...e,[t.key]:{...e[t.key]&&e.value,...t.value}}:e},actions:{setGlobal(e,t){return{type:"H2ML_SET_GLOBAL",key:e,value:t}}},selectors:{hasGlobal(e,t){return Object.hasOwn(e,t)},getGlobal(e,t){const{[t]:l}=e;return l}},persist:["preferences"]});(0,n.register)(r);const i=()=>{const{hasGlobal:e,getGlobal:t}=(0,n.useSelect)(r),{setGlobal:l}=(0,n.dispatch)(r);return e("ParsedAnimateDotCSS")||(console.debug("Setting Animate.css Definitions"),l("ParsedAnimateDotCSS",[...document.styleSheets].reduce(((e,t)=>t.href&&t.href.includes("add-animate-on-scroll-support")?(console.debug("Generating Animate.css Definitions"),[...t.cssRules].reduce(((e,t)=>({...e,...Object.getPrototypeOf(t).constructor===CSSStyleRule&&t.selectorText.includes(".animate__")&&!t.selectorText.includes(".animate__animated")&&(t.selectorText.includes("In")||t.selectorText.includes("Out"))&&".animate__jackInTheBox"!==t.selectorText&&(t.selectorText.includes("In")?{animateIn:[...e.animateIn,{label:[...t.style.animationName.replace(/([A-Z])/g," $1")].reduce(((e,t,l)=>`${e}${l?t:t.toUpperCase()}`),""),value:t.selectorText.replace(/[.,\s]/g,"")}]}:{animateOut:[...e.animateOut,{label:[...t.style.animationName.replace(/([A-Z])/g," $1")].reduce(((e,t,l)=>`${e}${l?t:t.toUpperCase()}`),""),value:t.selectorText.replace(/[.,\s]/g,"")}]})})),{animateIn:[{label:"None",value:""}],animateOut:[{label:"None",value:""}]})):e),[]))),t("ParsedAnimateDotCSS")};var s=window.wp.components;const m=t=>(0,e.createElement)("span",null,(0,a.__)("The 'Animate Out' animation plays when scrolling beyond the specified trigger threshold.","h2ml")),c=t=>(0,e.createElement)("span",null,(0,a.__)("The 'Animate In' animation plays when scrolling below the specified trigger threshold.","h2ml")),h=t=>(0,e.createElement)("span",null,(0,a.__)("Add a comma seperated list of custom 'Classnames' to toggle, this can be used instead of, or in addition to, the predefined animations above.","h2ml")),u=t=>(0,e.createElement)(s.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,a.__)("Set this block's 'Trigger Threshold', this determines how far the user must scroll (in px's) before the block is hidden.","html")),(0,e.createElement)("span",null,(0,a.__)("By default this is '100'.","h2ml"))),d=t=>(0,e.createElement)(s.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,a.__)("When enabled the block will be shown when scrolling back up the page from any point, rather than waiting until the user has scrolled back to the top of the page.","html")),(0,e.createElement)("span",null,(0,a.__)("By default this is disabled.","h2ml"))),p=t=>(0,e.createElement)(s.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,a.__)("Determening when this block's Hide on Scroll Set will take effect by setting a 'Breapoint' ","html")," ",(0,e.createElement)(s.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/time"},(0,a.__)("Media Query","h2ml")),".")),_=t=>(0,e.createElement)(s.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,a.__)("Set this block's 'Animate In'","html")," ",(0,e.createElement)(s.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/time"},(0,a.__)("duration","h2ml")),"."),(0,e.createElement)("span",null,(0,a.__)("By default this is '500ms'.","h2ml"))),g=t=>(0,e.createElement)(s.__experimentalVStack,{as:"span",spacing:1},(0,e.createElement)("span",null,(0,a.__)("Set this block's 'Animate Out'","html")," ",(0,e.createElement)(s.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/time"},(0,a.__)("duration","h2ml")),"."),(0,e.createElement)("span",null,(0,a.__)("By default this is '500ms'.","h2ml"))),b=t=>{const{existingAttributes:n,existingAttributes:{animateOut:o,animateIn:r,customClasses:i=[],triggerThreshold:b,showOnScrollUp:S,breakpoint:E,animateInDuration:O,animateOutDuration:w},optionalAttributesDefaults:k,animationClassNames:x,setAttributes:C}=t;return(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(s.Panel,null,(0,e.createElement)(s.PanelBody,{title:(0,a.__)("Hide on Scroll","h2ml"),initialOpen:!1,className:"h2mlHideOnScrollPanel"},(0,e.createElement)(s.__experimentalVStack,{as:"div",spacing:4},(0,e.createElement)(s.Notice,{isDismissible:!1},(0,e.createElement)(s.__experimentalText,{size:"12px",color:"rgb(117, 117, 117)"},(0,a.__)("When adding animations which transition off-screen ensure that the document body has the","h2ml")," ",(0,e.createElement)(s.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y"},"overflow-x")," ",(0,a.__)("property set to either 'hidden' or 'clip'.","h2ml"))),(0,e.createElement)(s.SelectControl,{onChange:e=>{C({h2mlHideOnScroll:{...n,animateOut:e}})},value:o,options:x.animateOut,label:(0,a.__)("Set the 'Animate Out' style","h2ml"),help:(0,e.createElement)(m,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}),(0,e.createElement)(s.SelectControl,{onChange:e=>{C({h2mlHideOnScroll:{...n,animateIn:e}})},value:r,options:x.animateIn,label:(0,a.__)("Set the 'Animate In' style","h2ml"),help:(0,e.createElement)(c,null),style:{marginBottom:0},__nextHasNoMarginBottom:!0}),(0,e.createElement)(s.TextControl,{value:i.join(", "),onChange:e=>{C({h2mlHideOnScroll:{...n,customClasses:e.split(",").map((e=>e.trim())).filter((e=>""!==e))}})},label:(0,a.__)("Custom Classnames","h2ml"),help:(0,e.createElement)(h,null)}),(r||o||i.length)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.__experimentalNumberControl,{onChange:e=>{C({h2mlHideOnScroll:{...n,triggerThreshold:e||100}})},value:b,min:1,step:25,label:(0,a.__)("Trigger Threshold","h2ml"),help:(0,e.createElement)(u,null)}),(0,e.createElement)(s.ToggleControl,{checked:S,onChange:()=>{C({h2mlHideOnScroll:{...n,showOnScrollUp:!S}})},label:(0,a.__)("Show on scroll up","h2ml"),help:(0,e.createElement)(d,null)}),(0,e.createElement)(s.__experimentalToolsPanel,{label:(0,a.__)("Hide on Scroll Additional Settings","h2ml"),resetAll:()=>{C({h2mlHideOnScroll:{...n,...k}})}},(0,e.createElement)(s.__experimentalToolsPanelItem,{hasValue:()=>E!==k.breakpoint,label:(0,a.__)("Breakpoint","h2ml"),onDeselect:()=>{C({h2mlHideOnScroll:{...n,breakpoint:k.breakpoint}})},isShownByDefault:!1},(0,e.createElement)(s.TextControl,{value:E,onChange:e=>{C({h2mlHideOnScroll:{...n,breakpoint:e}})},label:(0,a.__)("Breakpoint","h2ml"),help:(0,e.createElement)(p,null)})),(0,e.createElement)(s.__experimentalToolsPanelItem,{hasValue:()=>O!==k.animateInDuration,label:(0,a.__)("Animate In Duration","h2ml"),onDeselect:()=>{C({h2mlHideOnScroll:{...n,animateInDuration:k.animateInDuration}})},isShownByDefault:!1},(0,e.createElement)(s.TextControl,{value:O,onChange:e=>{C({h2mlHideOnScroll:{...n,animateInDuration:e}})},label:(0,a.__)("Animate In Duration","h2ml"),help:(0,e.createElement)(_,null)})),(0,e.createElement)(s.__experimentalToolsPanelItem,{hasValue:()=>w!==k.animateOutDuration,label:(0,a.__)("Animate Out Duration","h2ml"),onDeselect:()=>{C({h2mlHideOnScroll:{...n,animateOutDuration:k.animateOutDuration}})},isShownByDefault:!1},(0,e.createElement)(s.TextControl,{value:w,onChange:e=>{C({h2mlHideOnScroll:{...n,animateOutDuration:e}})},label:(0,a.__)("Animate Out Duration","h2ml"),help:(0,e.createElement)(g,null)}))))))))},S="animate__animated",E={breakpoint:"",animateInDuration:"500ms",animateOutDuration:"500ms"};(0,t.addFilter)("blocks.registerBlockType","h2ml/add-hide-on-scroll-attribute",(e=>e?.attributes?{...e,attributes:{...e.attributes,h2mlHideOnScroll:{type:"object",default:{animateIn:"",animateOut:"",customClasses:[],triggerThreshold:100,showOnScrollUp:!1,...E}}}}:e)),(0,t.addFilter)("editor.BlockEdit","h2ml/add-hide-on-scroll-insepctor-controls-edit",(0,o.createHigherOrderComponent)((t=>a=>{const{attributes:{h2mlHideOnScroll:o},clientId:r,setAttributes:s}=a,{getBlockParents:m,getBlockAttributes:c}=(0,n.useSelect)(l.store);return m(r).find((e=>!!c(e).h2mlPositioning?.type))?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(b,{existingAttributes:o,optionalAttributesDefaults:E,animationClassNames:i(),setAttributes:s}),(0,e.createElement)(t,a)):(0,e.createElement)(t,a)}),"addHideOnScrollInspectorControlsEdit")),(0,t.addFilter)("blocks.getSaveContent.extraProps","h2ml/add-hide-on-scroll-styles-save",((e,t,l)=>{const{className:n}=e,{h2mlHideOnScroll:{animateIn:a,animateOut:o,customClasses:r,triggerThreshold:i,showOnScrollUp:s,breakpoint:m,animateInDuration:c,animateOutDuration:h}={}}=l;if(a||o||r?.length){const t=(n?n.split(" "):[]).reduce(((e,t)=>t!==S?`${e} ${t}`:`${e}`),S),l=e=>{let t=(new DOMParser).parseFromString(e,"text/html");return encodeURIComponent(t.body.textContent)||""};return{...e,className:t,"data-hide-on-scroll":"",...a&&{"data-hide-on-scroll-animate-in":a},...o&&{"data-hide-on-scroll-animate-out":o},...r.length&&{"data-hide-on-scroll-custom-classes":l(r.join(" "))},...i&&{"data-hide-on-scroll-threshold":i},...s&&{"data-hide-on-scroll-show-on-scroll-up":s},...m&&{"data-hide-on-scroll-breakpoint":l(m)},...c&&{"data-hide-on-scroll-animate-in-duration":c},...h&&{"data-hide-on-scroll-animate-out-duration":h}}}return e}))}();