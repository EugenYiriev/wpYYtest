(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[5445],{789:(t,o,e)=>{"use strict";e.r(o),e.d(o,{Block:()=>u,default:()=>d});var n=e(9196),r=e(5736),c=e(4184),s=e.n(c),l=e(2864),i=e(3611),a=e(721);e(39);const u=t=>{const{className:o}=t,e=(0,i.F)(t),{parentClassName:c}=(0,l.useInnerBlockLayoutContext)(),{product:a}=(0,l.useProductDataContext)();if(!a.id)return null;const u=!!a.is_in_stock,d=a.low_stock_remaining,p=a.is_on_backorder;return(0,n.createElement)("div",{className:s()(o,{[`${c}__stock-indicator`]:c,"wc-block-components-product-stock-indicator--in-stock":u,"wc-block-components-product-stock-indicator--out-of-stock":!u,"wc-block-components-product-stock-indicator--low-stock":!!d,"wc-block-components-product-stock-indicator--available-on-backorder":!!p,...t.isDescendantOfAllProducts&&{[e.className]:e.className,"wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator":!0}}),...t.isDescendantOfAllProducts&&{style:e.style}},(({isInStock:t=!1,isLowStock:o=!1,lowStockAmount:e=null,isOnBackorder:n=!1})=>o&&null!==e?(0,r.sprintf)(/* translators: %d stock amount (number of items in stock for product) */
(0,r.__)("%d left in stock","woocommerce"),e):n?(0,r.__)("Available on backorder","woocommerce"):t?(0,r.__)("In stock","woocommerce"):(0,r.__)("Out of stock","woocommerce"))({isInStock:u,isLowStock:!!d,lowStockAmount:d,isOnBackorder:p}))},d=(0,a.withProductDataContext)(u)},3611:(t,o,e)=>{"use strict";e.d(o,{F:()=>a});var n=e(4184),r=e.n(n),c=e(7884),s=e(2646),l=e(1473),i=e(2661);const a=t=>{const o=(t=>{const o=(0,c.Kn)(t)?t:{style:{}};let e=o.style;return(0,s.H)(e)&&(e=JSON.parse(e)||{}),(0,c.Kn)(e)||(e={}),{...o,style:e}})(t),e=(0,i.vc)(o),n=(0,i.l8)(o),a=(0,i.su)(o),u=(0,l.f)(o);return{className:r()(u.className,e.className,n.className,a.className),style:{...u.style,...e.style,...n.style,...a.style}}}},1473:(t,o,e)=>{"use strict";e.d(o,{f:()=>c});var n=e(7884),r=e(2646);const c=t=>{const o=(0,n.Kn)(t.style.typography)?t.style.typography:{},e=(0,r.H)(o.fontFamily)?o.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:e,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:o.fontSize,fontStyle:o.fontStyle,fontWeight:o.fontWeight,letterSpacing:o.letterSpacing,lineHeight:o.lineHeight,textDecoration:o.textDecoration,textTransform:o.textTransform}}}},2661:(t,o,e)=>{"use strict";e.d(o,{l8:()=>d,su:()=>p,vc:()=>u});var n=e(4184),r=e.n(n),c=e(9784),s=e(2289),l=e(7884);function i(t={}){const o={};return(0,s.getCSSRules)(t,{selector:""}).forEach((t=>{o[t.key]=t.value})),o}function a(t,o){return t&&o?`has-${(0,c.o)(o)}-${t}`:""}function u(t){var o,e,n,c,s,u,d;const{backgroundColor:p,textColor:f,gradient:k,style:v}=t,b=a("background-color",p),g=a("color",f),m=function(t){if(t)return`has-${t}-gradient-background`}(k),y=m||(null==v||null===(o=v.color)||void 0===o?void 0:o.gradient);return{className:r()(g,m,{[b]:!y&&!!b,"has-text-color":f||(null==v||null===(e=v.color)||void 0===e?void 0:e.text),"has-background":p||(null==v||null===(n=v.color)||void 0===n?void 0:n.background)||k||(null==v||null===(c=v.color)||void 0===c?void 0:c.gradient),"has-link-color":(0,l.Kn)(null==v||null===(s=v.elements)||void 0===s?void 0:s.link)?null==v||null===(u=v.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:i({color:(null==v?void 0:v.color)||{}})}}function d(t){var o;const e=(null===(o=t.style)||void 0===o?void 0:o.border)||{};return{className:function(t){var o;const{borderColor:e,style:n}=t,c=e?a("border-color",e):"";return r()({"has-border-color":!!e||!(null==n||null===(o=n.border)||void 0===o||!o.color),[c]:!!c})}(t),style:i({border:e})}}function p(t){var o;return{className:void 0,style:i({spacing:(null===(o=t.style)||void 0===o?void 0:o.spacing)||{}})}}},8519:(t,o,e)=>{"use strict";e.d(o,{F:()=>n});const n=t=>null===t},7884:(t,o,e)=>{"use strict";e.d(o,{$n:()=>c,Kn:()=>r});var n=e(8519);const r=t=>!(0,n.F)(t)&&t instanceof Object&&t.constructor===Object;function c(t,o){return r(t)&&o in t}},2646:(t,o,e)=>{"use strict";e.d(o,{H:()=>n});const n=t=>"string"==typeof t},1290:(t,o,e)=>{"use strict";e.d(o,{$:()=>c});var n=e(7582),r=e(307);function c(t,o){return void 0===o&&(o={}),(0,r.B)(t,(0,n.pi)({delimiter:"."},o))}},39:()=>{},9562:(t,o,e)=>{"use strict";function n(t){return t.toLowerCase()}e.d(o,{U:()=>n})},307:(t,o,e)=>{"use strict";e.d(o,{B:()=>s});var n=e(9562),r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function s(t,o){void 0===o&&(o={});for(var e=o.splitRegexp,s=void 0===e?r:e,i=o.stripRegexp,a=void 0===i?c:i,u=o.transform,d=void 0===u?n.U:u,p=o.delimiter,f=void 0===p?" ":p,k=l(l(t,s,"$1\0$2"),a,"\0"),v=0,b=k.length;"\0"===k.charAt(v);)v++;for(;"\0"===k.charAt(b-1);)b--;return k.slice(v,b).split("\0").map(d).join(f)}function l(t,o,e){return o instanceof RegExp?t.replace(o,e):o.reduce((function(t,o){return t.replace(o,e)}),t)}},9784:(t,o,e)=>{"use strict";e.d(o,{o:()=>c});var n=e(7582),r=e(1290);function c(t,o){return void 0===o&&(o={}),(0,r.$)(t,(0,n.pi)({delimiter:"-"},o))}},7582:(t,o,e)=>{"use strict";e.d(o,{pi:()=>n});var n=function(){return n=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var r in o=arguments[e])Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);