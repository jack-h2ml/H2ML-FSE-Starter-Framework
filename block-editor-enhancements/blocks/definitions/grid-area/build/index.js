!function(){"use strict";var e,t={585:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.primitives,n=(0,t.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(r.Path,{d:"M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"})),i=JSON.parse('{"u2":"h2ml/grid-area"}'),l=window.wp.blockEditor,a=window.wp.components,o=window.wp.data,s=(0,t.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(r.Path,{d:"M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"})),c=window.wp.i18n;const u=(0,o.withDispatch)(((e,t,r)=>({setRequestEdit(e){const{clientId:r,setAttributes:n}=t;n({requestEdit:e})},setStackingOrder(e){const{setAttributes:r}=t;r({stackingOrder:Number(e)})}})))((r=>{var n;let{attributes:i,setRequestEdit:u,setStackingOrder:d,clientId:p}=r;const{gridArea:m,stackingOrder:g,requestEdit:f,number:b,breakpointDefinitions:k}=i,{selectedBlockClientId:h,gridAreaIds:v,isSelectedGridArea:y,childBlocks:_,themeSupportsLayout:w}=(0,o.useSelect)((e=>{const{getBlocks:t,getBlockOrder:r,getBlockRootClientId:n,getSettings:i,getSelectedBlockClientId:a}=e(l.store),{getSelectedGridArea:o}=e("h2ml/grid_area_store"),s=a(),c=n(p),u=t(p),d=o();return{selectedBlockClientId:s,childBlocks:u.length?u:null,gridAreaIds:r(c),isSelectedGridArea:d?.parents.find((e=>e.clientId===p)),themeSupportsLayout:i()?.supportsLayout}}),[]);(0,t.useEffect)((()=>{1===_?.length?_.forEach((t=>{const{clientId:r,name:n}=t,{category:i}=(0,e.getBlockType)(n);["media","embed"].includes(i)&&(0,o.dispatch)(l.store).updateBlockAttributes(r,{h2mlCanFillGridArea:!0})})):_&&_.forEach((t=>{const{clientId:r,name:n}=t,{category:i}=(0,e.getBlockType)(n);["media","embed"].includes(i)&&(0,o.dispatch)(l.store).updateBlockAttributes(r,{h2mlCanFillGridArea:!1})}))}),[_]);const x={...(0,l.useSetting)("layout")},O={vertical:"column",horizontal:"row"}[null!==(n=x.orientation)&&void 0!==n?n:"vertical"];console.log("hmm",i,x.orientation,O);const S=(0,l.useInnerBlocksProps)((0,l.useBlockProps)({className:[`h2mlGridArea${b}`],style:{gridArea:m.parsed,zIndex:y?y.editorStackingOrder:g,flexDirection:O},"aria-label":(0,c.__)(`Grid-Area (${v.indexOf(p)+1} of ${v.length})`,"h2ml")}),{renderAppender:_?void 0:l.InnerBlocks.ButtonBlockAppender,__experimentalLayout:w?x:void 0});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(a.ToolbarGroup,null,(0,t.createElement)(a.ToolbarButton,{icon:s,label:(0,c.__)("Resize Grid Area","h2ml"),isPressed:f,onClick:()=>u(!f)}))),(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,c.__)("Grid Area Settings","h2ml"),initialOpen:!0},(0,t.createElement)(a.__experimentalNumberControl,{label:(0,c.__)("Stacking Order","h2ml"),isShiftStepEnabled:!0,onChange:d,shiftStep:1,value:g})))),(0,t.createElement)("div",S))}));var d=JSON.parse('{"Y4":{"verticalAlignment":{"type":"string","default":"start"},"style":{"type":"object","default":{"color":{"background":null}}},"gridArea":{"type":"object","default":{"start":{"x":1,"y":1},"end":{"x":1,"y":1},"parsed":"MS8x"}},"stackingOrder":{"type":"number","default":0},"requestEdit":{"type":"boolean","default":false},"number":{"type":"number","default":null},"breakpointDefinitions":{"type":"object","default":{}}},"be":{"__experimentalSettings":true,"__experimentalLayout":{"allowSizingOnChildren":false},"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"blockGap":true,"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}}}');(0,e.registerBlockType)(i.u2,{icon:n,edit:function(e){return(0,t.createElement)(u,e)},save:function(e){let{attributes:{stackingOrder:r,breakpointDefinitions:n,gridArea:{parsed:i},layout:a={orientation:"vertical"}}}=e;const o={vertical:"column",horizontal:"row"}[a.orientation],s=l.useBlockProps.save({className:"alignfull",style:{zIndex:r,gridArea:i,flexDirection:o},"data-breakpoint-definitions":Object.keys(n)?btoa(JSON.stringify(Object.values(n).reduce(((e,t)=>({...e,[`${t.mediaQuery}`]:{...t.coords?{gridArea:t.coords,display:"flex"}:{display:"none"}}})),{}))):void 0});return(0,t.createElement)("div",s,(0,t.createElement)(l.InnerBlocks.Content,null))},deprecated:[{attributes:d.Y4,supports:d.be,save:function(e){let{attributes:{gridArea:{parsed:r},stackingOrder:n,verticalAlignment:i,backgroundColor:a,style:{color:{background:o}={}}={},breakpointDefinitions:s}}=e;const c=l.useInnerBlocksProps.save({...l.useBlockProps.save({className:"is-layout-flex",style:{justifyContent:i,...!a&&{backgroundColor:o},gridArea:r,zIndex:n,alignItems:"unset"},"data-breakpoint-definitions":Object.keys(s)?btoa(JSON.stringify(Object.values(s).reduce(((e,t)=>({...e,[`${t.mediaQuery}`]:{...t.coords?{gridArea:t.coords,display:"flex"}:{display:"none"}}})),{}))):void 0})});return(0,t.createElement)("div",c)}}]})}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,r,i,l){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],l=e[u][2];for(var o=!0,s=0;s<r.length;s++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(o=!1,l<a&&(a=l));if(o){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,i,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,l,a=r[0],o=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(s)var u=s(n)}for(t&&t(r);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},r=self.webpackChunkka_example_block=self.webpackChunkka_example_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var i=n.O(void 0,[431],(function(){return n(585)}));i=n.O(i)}();