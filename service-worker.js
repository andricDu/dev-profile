"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","e815b665f0a5b1222b21e519c441d87b"],["static/css/main.22b5b19d.css","71f8cf15d7723077a41304b6c6d87f89"],["static/js/main.8cbb6e84.js","37e0200a1c6f6ad305cbccb742d30e18"],["static/media/AmazonWebservices_Logo.svg.003f5948.png","003f5948b5ca02167efd6a26b33b263e"],["static/media/Ansible_logo.svg.b6a387b4.png","b6a387b4caade5b5593c0ce1e48d1b2e"],["static/media/C.ef38512f.png","ef38512fe54581ac14c0382b1a29b5d4"],["static/media/Centos-logo-light.svg.81f95389.png","81f953892496963b5fc42326e62e66fd"],["static/media/Elasticsearch-Logo-Color-V.066bcf7d.png","066bcf7d24a6d86f02fa4857d6b8421a"],["static/media/Hadoop_logo.cfc4daac.svg","cfc4daacc26319aa983786a8c661e690"],["static/media/Java.7f25e6c0.png","7f25e6c03fffcf0bff24c9d75866fcf9"],["static/media/OpenStack®_Logo_2016.svg.c402a030.png","c402a030d5de4c9f6f302ebbc3aa365f"],["static/media/backend.b935b211.svg","b935b211e2bc621129ab8e98a009396a"],["static/media/background.0a77fa7b.jpg","0a77fa7b88e44ec1e07919c32284260a"],["static/media/dusan.2c8742eb.png","2c8742eb3132c0e4c85f23d0c05f92fe"],["static/media/frontend.f971c909.svg","f971c909cb69c04144e4a7f3c675a5f8"],["static/media/infra.e7cdbd7b.svg","e7cdbd7b81bf34925b68ae969b03f9c3"],["static/media/microsoft-azure-2.4d28b791.svg","4d28b79142bc329c0b20be38b567e1a6"],["static/media/python.a17f3512.png","a17f3512911fd4ce679f1c20cafff452"],["static/media/spark-logo.3daecf3b.png","3daecf3b5bfb6c0348ec2f9e1cc4bf3d"],["static/media/ubuntu-logo14.94938a7c.png","94938a7cff091f8ca7db12d6a8c35aa7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/dev-profile/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});