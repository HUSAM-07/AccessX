if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>i(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Footer.png",revision:"51ae9ab18c5992f16173aca5b78ec095"},{url:"/Resume Building Process.pdf",revision:"8fc017b33fa8ac521988d29dca0582c5"},{url:"/UniDash_Thumbnail.png",revision:"3584c20253207cacfe6e306f8d589077"},{url:"/_next/app-build-manifest.json",revision:"f7db6453baf1c40a033acea810ab7a28"},{url:"/_next/static/chunks/0e5ce63c-5d51f5cf7f73397f.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/117-059d6a0398d326be.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/146.6ea3f6d6583cc9f1.js",revision:"6ea3f6d6583cc9f1"},{url:"/_next/static/chunks/317-3c463a959f8eabb3.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/371-87ac28f8b6c6926e.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/602.70554f843eb38bd3.js",revision:"70554f843eb38bd3"},{url:"/_next/static/chunks/633-0d9e95e0eb8f2c4d.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/772-f9388c22240e53f1.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/85-c9e13735dcb29d72.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/878-a2280621102c04aa.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/892-86be72e338ca4082.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/972-c9bf53e4a145eef9.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/_not-found/page-087c98e2392f170c.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/about/page-e661d2c9d0880e7f.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/attendance-tracker/page-5089f09d82d8806a.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/career/page-61b20a9570b59915.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/course-handouts/page-f74fc3b21c2ab3e0.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/dashboard/page-a8d49ee91fa78e79.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/layout-720c0a678b839b39.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/page-ec565de491c37bc7.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/app/paper-analysis/page-616b81c119b62515.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/d441faa4.8e1de6310eb8dca6.js",revision:"8e1de6310eb8dca6"},{url:"/_next/static/chunks/fd9d1056-d2c99f95a12296db.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/main-a00b8340d8b31ca4.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/main-app-64ec1cca76e98edc.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-6df4123666665dac.js",revision:"miCMXiq3no65eZ9IB5sNA"},{url:"/_next/static/css/484892002c9df55f.css",revision:"484892002c9df55f"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/miCMXiq3no65eZ9IB5sNA/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/miCMXiq3no65eZ9IB5sNA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/bits.png",revision:"9a62280db9a66a6ef482b705e0faa6e8"},{url:"/career.png",revision:"c81c0fb1d0591cab28158b82f30e7121"},{url:"/cdc_illustration.svg",revision:"7278ba587f8a56bd155b2cbfa7193380"},{url:"/companies.csv",revision:"a075b9d03fdee9fe4238aaaaa45d64ec"},{url:"/dashboard-preview.png",revision:"e4aa8c849d2f79381b82c13e628e013d"},{url:"/handouts/Applied Statistical Methods.docx",revision:"6bdf995c94c7a62ed73e2bd26fd5f79e"},{url:"/handouts/Compiler Construction.pdf",revision:"f6430990308eca1a42cc7fee76d78506"},{url:"/handouts/Computer Networks.pdf",revision:"0b6e862f5eeb2d9c8b097a345a392edd"},{url:"/handouts/Data Mining.pdf",revision:"bbb963a02ffd8be7d78962adf0803f56"},{url:"/handouts/Design and Analysis of Algorithms.doc",revision:"3664d31b50f182437af9f6378f634d0d"},{url:"/handouts/Environmental Studies.pdf",revision:"199c7d381b6e522c77c7724453b74cb2"},{url:"/handouts/International Law.docx",revision:"6c5757dfc126c63ac14a6c113ef976b7"},{url:"/handouts/Introduction to ARABIC.pdf",revision:"419af3e488d9635bd9ad1defb6ff0a80"},{url:"/handouts/Introduction to Psychology.docx",revision:"8fc42a3e598c15ad5e9a4f72ad76295f"},{url:"/handouts/Machine Learning.pdf",revision:"84251dd170300f0367e70e8aacbb1dd5"},{url:"/handouts/Modern Political Concepts.doc",revision:"78020c86a3b00d0739676a689a08486b"},{url:"/handouts/Optimization.pdf",revision:"4a880c26c3f3ef92ed524772702b7380"},{url:"/handouts/Principles of Economics.pdf",revision:"c4619967b8d0a0396fe36857365e5906"},{url:"/handouts/Principles of Management.pdf",revision:"75675ea8b3770d01f12dc057b496c2ef"},{url:"/handouts/Principles of Programming Languages.pdf",revision:"f5ff728184d555bb71a6b9ba7fbe2162"},{url:"/handouts/TOC.pdf",revision:"2cc668dc2f9c318dea8807dfde09b5f8"},{url:"/manifest.json",revision:"2f55b00e2acac46b9e64e1f9ebdc68af"},{url:"/register-sw.js",revision:"8a43f0bba3455ad85686c19b496bf7e7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
