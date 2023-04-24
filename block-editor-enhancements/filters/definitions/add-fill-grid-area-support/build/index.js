!function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},e.apply(this,arguments)}var t=window.wp.element,r=window.wp.hooks,l=window.wp.blockEditor,i=window.wp.components,a=window.wp.i18n,n=window.wp.primitives,o=(0,t.createElement)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(n.Path,{d:"M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"})),d=window.wp.compose;const s="fillGridArea",c=["media","embed"];(0,r.addFilter)("blocks.registerBlockType","h2ml/add-canFillGridArea-attribute",(e=>{if(e?.attributes){const{category:t}=e;if(c.includes(t))return{...e,attributes:{...e.attributes,h2mlFillGridArea:{type:"boolean",default:!1},h2mlCanFillGridArea:{type:"boolean",default:!1}}}}return e})),(0,r.addFilter)("editor.BlockListBlock","h2ml/add-fillGridArea-class-edit",(0,d.createHigherOrderComponent)((r=>l=>{const{attributes:{h2mlCanFillGridArea:i,h2mlFillGridArea:a}}=l;if(i){const n=i&&a?s:"";return(0,t.createElement)(r,e({},l,{className:n}))}return(0,t.createElement)(r,l)}),"withCustomAttributeClass")),(0,r.addFilter)("editor.BlockEdit","h2ml/add-canFillGridArea-class-blockEdit",(0,d.createHigherOrderComponent)((e=>r=>{const{attributes:{h2mlCanFillGridArea:n,h2mlFillGridArea:d},setAttributes:s}=r;return n?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(i.ToolbarGroup,null,(0,t.createElement)(i.ToolbarButton,{icon:o,label:(0,a.__)("Cover Grid Area","h2ml"),isPressed:d,onClick:()=>{s({h2mlFillGridArea:!d})}}))),(0,t.createElement)(e,r)):(0,t.createElement)(e,r)}),"showCanFillGridAreaToolbarButton")),(0,r.addFilter)("blocks.getSaveContent.extraProps","h2ml/add-fillGridArea-class-save",((e,t,r)=>{const{className:l}=e,{h2mlCanFillGridArea:i,h2mlFillGridArea:a}=r,n=(l?l.split(" "):[]).reduce(((e,t)=>t!==s?`${e} ${t}`:`${e}`),i&&a?s:"");return{...e,className:n}}))}();