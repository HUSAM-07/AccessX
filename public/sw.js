if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Footer.png",revision:"51ae9ab18c5992f16173aca5b78ec095"},{url:"/Resume Building Process.pdf",revision:"8fc017b33fa8ac521988d29dca0582c5"},{url:"/UniDash_Thumbnail.png",revision:"3584c20253207cacfe6e306f8d589077"},{url:"/_next/app-build-manifest.json",revision:"332fd86d8557b153e1a3a0a6401434c8"},{url:"/_next/static/chunks/0e5ce63c-1d4d1101db49cc92.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/1243.ea2826fb35adb15a.js",revision:"ea2826fb35adb15a"},{url:"/_next/static/chunks/133.392ae90c3b2a67f2.js",revision:"392ae90c3b2a67f2"},{url:"/_next/static/chunks/1592.b069bdb7aaddd2eb.js",revision:"b069bdb7aaddd2eb"},{url:"/_next/static/chunks/1871-c363f256b91cc754.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/2069.f060659791c0c484.js",revision:"f060659791c0c484"},{url:"/_next/static/chunks/2076-320844465e41bb83.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/2117-4f3b11e2f3c0707c.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/2170.45431769330fa5b7.js",revision:"45431769330fa5b7"},{url:"/_next/static/chunks/2395-1da86892fb89b7dc.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/29-d75a777b6794a51d.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/2972-25be34e6c6fe0747.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/3237.c4754f02f1a388cb.js",revision:"c4754f02f1a388cb"},{url:"/_next/static/chunks/3305.1fc7297ba154ee95.js",revision:"1fc7297ba154ee95"},{url:"/_next/static/chunks/3332.6313db5217bb1b67.js",revision:"6313db5217bb1b67"},{url:"/_next/static/chunks/3451.421db0b49fdbd881.js",revision:"421db0b49fdbd881"},{url:"/_next/static/chunks/3460.39c2b9b6a3898384.js",revision:"39c2b9b6a3898384"},{url:"/_next/static/chunks/3471-83af279592d3e1f6.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/3602.3a59777c96ae606f.js",revision:"3a59777c96ae606f"},{url:"/_next/static/chunks/4146.349ad44e948dfddc.js",revision:"349ad44e948dfddc"},{url:"/_next/static/chunks/4299.2aaa569416cfc208.js",revision:"2aaa569416cfc208"},{url:"/_next/static/chunks/4327.613a173b6b49df19.js",revision:"613a173b6b49df19"},{url:"/_next/static/chunks/4415.e0c0da5eedae4dd7.js",revision:"e0c0da5eedae4dd7"},{url:"/_next/static/chunks/4650.41f041da0ad365ad.js",revision:"41f041da0ad365ad"},{url:"/_next/static/chunks/4872.5422e8324272ab40.js",revision:"5422e8324272ab40"},{url:"/_next/static/chunks/5061.79a660faed0e16a9.js",revision:"79a660faed0e16a9"},{url:"/_next/static/chunks/5279.85d537880b8041ae.js",revision:"85d537880b8041ae"},{url:"/_next/static/chunks/5402.b9460f1b16b57e92.js",revision:"b9460f1b16b57e92"},{url:"/_next/static/chunks/5555.f7cf9795d675de51.js",revision:"f7cf9795d675de51"},{url:"/_next/static/chunks/58.f4bd8a3c9d88f5fe.js",revision:"f4bd8a3c9d88f5fe"},{url:"/_next/static/chunks/5852-0bee02589a1b3778.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/5878-c38080953d612480.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/5978.ddc72cd73130aadc.js",revision:"ddc72cd73130aadc"},{url:"/_next/static/chunks/6137-2d733888d12dfba0.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/6279-c1e4c3ef84c704db.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/6434.e6cd986d690f2cef.js",revision:"e6cd986d690f2cef"},{url:"/_next/static/chunks/7140.4be689873f6a2d1f.js",revision:"4be689873f6a2d1f"},{url:"/_next/static/chunks/7293.fb88bb102af4aa04.js",revision:"fb88bb102af4aa04"},{url:"/_next/static/chunks/7836.86884157d53d23a1.js",revision:"86884157d53d23a1"},{url:"/_next/static/chunks/7890.f681eb1d1f83bea2.js",revision:"f681eb1d1f83bea2"},{url:"/_next/static/chunks/7953.f6fc335a23efb959.js",revision:"f6fc335a23efb959"},{url:"/_next/static/chunks/8254.3145a4fbdcfdca46.js",revision:"3145a4fbdcfdca46"},{url:"/_next/static/chunks/8400.c95e4e79bcd79a56.js",revision:"c95e4e79bcd79a56"},{url:"/_next/static/chunks/8673.be44c4d9e4f1d084.js",revision:"be44c4d9e4f1d084"},{url:"/_next/static/chunks/8698.a088118fef40d302.js",revision:"a088118fef40d302"},{url:"/_next/static/chunks/9022.33974a513a281fd2.js",revision:"33974a513a281fd2"},{url:"/_next/static/chunks/90542734.fecd4dc1a89ed166.js",revision:"fecd4dc1a89ed166"},{url:"/_next/static/chunks/9433.b1b5f5d050c43e3c.js",revision:"b1b5f5d050c43e3c"},{url:"/_next/static/chunks/9822.34f293973c4e9b04.js",revision:"34f293973c4e9b04"},{url:"/_next/static/chunks/app/_not-found/page-3fe6474b7c849bff.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/about/page-deae79ba3cd4ba45.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/attendance-tracker/page-f61ba96307eae1e3.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/author/page-cfc2dc263f8cd966.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/career/page-2de884a91c9e40d6.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/contribute/page-b4d4b7794f8c3848.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/course-handouts/page-a16ce8174dc5918d.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/courses/page-817f7c8be1426460.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/dashboard/page-df7fef84d425a651.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/error-universal/page-d17d6503c4e2b267.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/layout-6336cae7823fb1ac.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/page-13b36c89be17230b.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/paper-analysis/page-e63e4bc628e43a77.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/app/resume-generator/page-befdaea5f71df509.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/d3ac728e.e517fee0d175ef7e.js",revision:"e517fee0d175ef7e"},{url:"/_next/static/chunks/d441faa4.552dc15c514df396.js",revision:"552dc15c514df396"},{url:"/_next/static/chunks/ebbfb5c1-a73c51b6a41a5ff6.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/fd9d1056-21ec400f045e5cc4.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/main-app-2f676c91cd6ca997.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/main-c386f485b74a2b7c.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-e58fc86aaffc2ec1.js",revision:"gUlqwY3UQ6xJQ2bjS35_J"},{url:"/_next/static/css/a454f79310df22e9.css",revision:"a454f79310df22e9"},{url:"/_next/static/gUlqwY3UQ6xJQ2bjS35_J/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/gUlqwY3UQ6xJQ2bjS35_J/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/bits.png",revision:"9a62280db9a66a6ef482b705e0faa6e8"},{url:"/career-illustrations.png",revision:"fb2fd5e62e0c7fb2f0141b1fffcb4be4"},{url:"/career.png",revision:"c81c0fb1d0591cab28158b82f30e7121"},{url:"/cdc_illustration.svg",revision:"7278ba587f8a56bd155b2cbfa7193380"},{url:"/companies.csv",revision:"92df1493b89de3b5515cf2f8f845aa9c"},{url:"/contributors/husam.jpg",revision:"dc11e32cc20142c660e26a2320d19a0f"},{url:"/dashboard-preview.png",revision:"e4aa8c849d2f79381b82c13e628e013d"},{url:"/handouts/Applied Statistical Methods.docx",revision:"6bdf995c94c7a62ed73e2bd26fd5f79e"},{url:"/handouts/Compiler Construction.pdf",revision:"f6430990308eca1a42cc7fee76d78506"},{url:"/handouts/Computer Networks.pdf",revision:"0b6e862f5eeb2d9c8b097a345a392edd"},{url:"/handouts/Data Mining.pdf",revision:"bbb963a02ffd8be7d78962adf0803f56"},{url:"/handouts/Design and Analysis of Algorithms.doc",revision:"3664d31b50f182437af9f6378f634d0d"},{url:"/handouts/Environmental Studies.pdf",revision:"199c7d381b6e522c77c7724453b74cb2"},{url:"/handouts/International Law.docx",revision:"6c5757dfc126c63ac14a6c113ef976b7"},{url:"/handouts/Introduction to ARABIC.pdf",revision:"419af3e488d9635bd9ad1defb6ff0a80"},{url:"/handouts/Introduction to Psychology.docx",revision:"8fc42a3e598c15ad5e9a4f72ad76295f"},{url:"/handouts/Machine Learning.pdf",revision:"84251dd170300f0367e70e8aacbb1dd5"},{url:"/handouts/Modern Political Concepts.doc",revision:"78020c86a3b00d0739676a689a08486b"},{url:"/handouts/Optimization.pdf",revision:"4a880c26c3f3ef92ed524772702b7380"},{url:"/handouts/Principles of Economics.pdf",revision:"c4619967b8d0a0396fe36857365e5906"},{url:"/handouts/Principles of Management.pdf",revision:"75675ea8b3770d01f12dc057b496c2ef"},{url:"/handouts/Principles of Programming Languages.pdf",revision:"f5ff728184d555bb71a6b9ba7fbe2162"},{url:"/handouts/TOC.pdf",revision:"2cc668dc2f9c318dea8807dfde09b5f8"},{url:"/hero-illustration.png",revision:"440d5a2c5bd34fce07df0e22548d70c9"},{url:"/manifest.json",revision:"2f55b00e2acac46b9e64e1f9ebdc68af"},{url:"/register-sw.js",revision:"8a43f0bba3455ad85686c19b496bf7e7"},{url:"/resume-mockup.jpg",revision:"3f33c20a3915bb960f76fa5d889e8cf9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
