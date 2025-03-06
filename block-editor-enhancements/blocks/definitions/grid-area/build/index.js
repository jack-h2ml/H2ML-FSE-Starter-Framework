!function(){"use strict";var e,t={35:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.primitives,n=(0,t.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(r.Path,{d:"M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"})),a=JSON.parse('{"u2":"h2ml/grid-area"}'),i=window.wp.blockEditor,l=window.wp.components,o=window.wp.data,s=(0,t.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(r.Path,{d:"M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"})),c=window.wp.i18n;const u=(0,o.withDispatch)(((e,t,r)=>({setRequestEdit(e){const{clientId:r,setAttributes:n}=t;n({requestEdit:e})},setStackingOrder(e){const{setAttributes:r}=t;r({stackingOrder:Number(e)})}})))((r=>{const{attributes:{gridArea:n,stackingOrder:a,requestEdit:u,number:d,breakpointDefinitions:p},setRequestEdit:m,setStackingOrder:g,clientId:f,__unstableLayoutClassNames:b}=r,{selectedBlockClientId:h,gridAreaIds:k,isSelectedGridArea:v,childBlocks:y,themeSupportsLayout:_}=(0,o.useSelect)((e=>{const{getBlocks:t,getBlockOrder:r,getBlockRootClientId:n,getSettings:a,getSelectedBlockClientId:l}=e(i.store),{getSelectedGridArea:o}=e("h2ml/grid_area_store"),s=l(),c=n(f),u=t(f),d=o();return{selectedBlockClientId:s,childBlocks:u.length?u:null,gridAreaIds:r(c),isSelectedGridArea:d?.parents.find((e=>e.clientId===f)),themeSupportsLayout:a()?.supportsLayout}}),[]);(0,t.useEffect)((()=>{1===y?.length?y.forEach((t=>{const{clientId:r,name:n}=t,{category:a}=(0,e.getBlockType)(n);["media","embed"].includes(a)&&(0,o.dispatch)(i.store).updateBlockAttributes(r,{h2mlCanFillGridArea:!0})})):y&&y.forEach((t=>{const{clientId:r,name:n}=t,{category:a}=(0,e.getBlockType)(n);["media","embed"].includes(a)&&(0,o.dispatch)(i.store).updateBlockAttributes(r,{h2mlCanFillGridArea:!1})}))}),[y]);const w={...(0,i.useSetting)("layout"),type:"flex",orientation:"vertical"},x=(0,i.useInnerBlocksProps)((0,i.useBlockProps)({className:[`h2mlGridArea${d} ${b}`],style:{gridArea:n.parsed,zIndex:v?v.editorStackingOrder:a},"aria-label":(0,c.__)(`Grid-Area (${k.indexOf(f)+1} of ${k.length})`,"h2ml")}),{renderAppender:y?void 0:i.InnerBlocks.ButtonBlockAppender,__experimentalLayout:_?w:void 0});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.BlockControls,null,(0,t.createElement)(l.ToolbarGroup,null,(0,t.createElement)(l.ToolbarButton,{icon:s,label:(0,c.__)("Resize Grid Area","h2ml"),isPressed:u,onClick:()=>m(!u)}))),(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(l.Panel,null,(0,t.createElement)(l.PanelBody,{title:(0,c.__)("Grid Area Settings","h2ml"),initialOpen:!0},(0,t.createElement)(l.__experimentalNumberControl,{label:(0,c.__)("Stacking Order","h2ml"),isShiftStepEnabled:!0,onChange:g,shiftStep:1,value:a})))),(0,t.createElement)("div",x))}));function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}var p=JSON.parse('{"Y4":{"verticalAlignment":{"type":"string","default":"start"},"style":{"type":"object","default":{"color":{"background":null}}},"gridArea":{"type":"object","default":{"start":{"x":1,"y":1},"end":{"x":1,"y":1},"parsed":"MS8x"}},"stackingOrder":{"type":"number","default":0},"requestEdit":{"type":"boolean","default":false},"number":{"type":"number","default":null},"breakpointDefinitions":{"type":"object","default":{}}},"be":{"__experimentalSettings":true,"__experimentalLayout":{"allowSizingOnChildren":false},"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"blockGap":true,"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}}}');(0,e.registerBlockType)(a.u2,{icon:n,edit:function(e){return(0,t.createElement)(u,e)},save:function(e){let{attributes:{stackingOrder:r,breakpointDefinitions:n,gridArea:{parsed:a},layout:l={orientation:"vertical"}}}=e;const{children:o,...s}=i.useInnerBlocksProps.save({style:{zIndex:r,gridArea:a}},i.useBlockProps.save());return console.log(s),(0,t.createElement)("div",d({},s,{"data-breakpoint-definitions":Object.keys(n)?btoa(JSON.stringify(Object.values(n).reduce(((e,t)=>({...e,[`${t.mediaQuery}`]:{...t.coords?{gridArea:t.coords,display:"flex"}:{display:"none"}}})),{}))):void 0}),o)},deprecated:[{attributes:p.Y4,supports:p.be,save:function(e){let{attributes:{gridArea:{parsed:r},stackingOrder:n,verticalAlignment:a,backgroundColor:l,style:{color:{background:o}={}}={},breakpointDefinitions:s}}=e;const c=i.useInnerBlocksProps.save({...i.useBlockProps.save({className:"is-layout-flex",style:{justifyContent:a,...!l&&{backgroundColor:o},gridArea:r,zIndex:n,alignItems:"unset"},"data-breakpoint-definitions":Object.keys(s)?btoa(JSON.stringify(Object.values(s).reduce(((e,t)=>({...e,[`${t.mediaQuery}`]:{...t.coords?{gridArea:t.coords,display:"flex"}:{display:"none"}}})),{}))):void 0})});return(0,t.createElement)("div",c)}}]})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,a,i){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],i=e[u][2];for(var o=!0,s=0;s<r.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(o=!1,i<l&&(l=i));if(o){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,l=r[0],o=r[1],s=r[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(s)var u=s(n)}for(t&&t(r);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunkka_example_block=self.webpackChunkka_example_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[431],(function(){return n(35)}));a=n.O(a)}();