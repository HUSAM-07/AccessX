if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Footer.png",revision:"51ae9ab18c5992f16173aca5b78ec095"},{url:"/UniDash_Thumbnail.png",revision:"3584c20253207cacfe6e306f8d589077"},{url:"/_next/app-build-manifest.json",revision:"dbb3efaedc104ee5b1de3bb8ac201648"},{url:"/_next/static/chunks/0e5ce63c-5d51f5cf7f73397f.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/117-059d6a0398d326be.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/146.6ea3f6d6583cc9f1.js",revision:"6ea3f6d6583cc9f1"},{url:"/_next/static/chunks/317-3c463a959f8eabb3.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/602.70554f843eb38bd3.js",revision:"70554f843eb38bd3"},{url:"/_next/static/chunks/633-0d9e95e0eb8f2c4d.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/689-43472294fc917d27.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/772-f9388c22240e53f1.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/85-7f983eeb73bfd8c5.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/878-a2280621102c04aa.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/972-c9bf53e4a145eef9.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/_not-found/page-087c98e2392f170c.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/about/page-7c86f6672d07ee6f.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/attendance-tracker/page-f06b007ec85d7f14.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/career/page-9c5e9647bb432756.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/course-handouts/page-fc8b620d9ba488d0.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/dashboard/page-f64d0792e02617fd.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/layout-1bd9189604a8b663.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/page-69ac1560853e4e21.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/app/paper-analysis/page-67442a3723144abc.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/d441faa4.8e1de6310eb8dca6.js",revision:"8e1de6310eb8dca6"},{url:"/_next/static/chunks/fd9d1056-d2c99f95a12296db.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/main-a00b8340d8b31ca4.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/main-app-992835f4caeb4206.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-6df4123666665dac.js",revision:"mJnOJjXUZTNBKRa9spgBq"},{url:"/_next/static/css/5c2e00b020f4b39e.css",revision:"5c2e00b020f4b39e"},{url:"/_next/static/mJnOJjXUZTNBKRa9spgBq/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/mJnOJjXUZTNBKRa9spgBq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/bits.png",revision:"9a62280db9a66a6ef482b705e0faa6e8"},{url:"/career.png",revision:"c81c0fb1d0591cab28158b82f30e7121"},{url:"/cdc_illustration.svg",revision:"7278ba587f8a56bd155b2cbfa7193380"},{url:"/companies.csv",revision:"6d6e610f55f8cd7a56566191cb56c91f"},{url:"/dashboard-preview.png",revision:"e4aa8c849d2f79381b82c13e628e013d"},{url:"/handouts/Compiler Construction.pdf",revision:"f6430990308eca1a42cc7fee76d78506"},{url:"/handouts/Data Mining.pdf",revision:"bbb963a02ffd8be7d78962adf0803f56"},{url:"/handouts/Introduction to ARABIC.pdf",revision:"419af3e488d9635bd9ad1defb6ff0a80"},{url:"/handouts/Optimization.pdf",revision:"4a880c26c3f3ef92ed524772702b7380"},{url:"/handouts/Principles of Economics.pdf",revision:"c4619967b8d0a0396fe36857365e5906"},{url:"/handouts/Principles of Management.pdf",revision:"75675ea8b3770d01f12dc057b496c2ef"},{url:"/handouts/Principles of Programming Languages.pdf",revision:"f5ff728184d555bb71a6b9ba7fbe2162"},{url:"/handouts/TOC.pdf",revision:"2cc668dc2f9c318dea8807dfde09b5f8"},{url:"/manifest.json",revision:"2f55b00e2acac46b9e64e1f9ebdc68af"},{url:"/register-sw.js",revision:"8a43f0bba3455ad85686c19b496bf7e7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
