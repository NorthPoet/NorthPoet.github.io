/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4d0a4fc25b02bb6846a61e6e787e5ae7"],["/about/index.html","c438427e5cd906e223982935d0050c2e"],["/archives/2023/11/index.html","5d82038b37d5dc59f06b4bb907c7097e"],["/archives/2023/11/page/2/index.html","936c858e1b614eff217b841aaca95b4a"],["/archives/2023/11/page/3/index.html","6ed43d144148b7bb8b5aac7be6ac242c"],["/archives/2023/12/index.html","77ff738f285d9c86ea64a8d386a4734d"],["/archives/2023/index.html","29f3bb3b621ef1f9758935c19c6e3662"],["/archives/2023/page/2/index.html","dbf9e30a5d07bc051c0fb2759569fb48"],["/archives/2023/page/3/index.html","24281dadaaec9b26c5e122eaef3e667b"],["/archives/2024/07/index.html","ed297ecfce0b350232568a17b746a8ce"],["/archives/2024/07/page/2/index.html","da76b0694f8d5d0f06adc83bdb10799b"],["/archives/2024/index.html","29c5cae6f975f14af658fda163030a75"],["/archives/2024/page/2/index.html","81d0bdd0dfb46e91a050a5676f075492"],["/archives/index.html","e094c7b9f0f1a5d32696f00a25fb0657"],["/archives/page/2/index.html","295a4ac750e2379b38d3f193d3cd5a5f"],["/archives/page/3/index.html","5aeab2b8dbacf5be11300d930b790184"],["/archives/page/4/index.html","307dcf8a29d91a6ef387c0b8e4385b19"],["/archives/page/5/index.html","582fb88518cf8d3eb5d480ca2f5d08e2"],["/categories/Java后端/index.html","58a39a399f27a68d8a5eda3f783c77f3"],["/categories/Java后端/page/2/index.html","dace3220bd455c26741e4a6f354a45d9"],["/categories/Java后端/page/3/index.html","109fd4d3eb6e391abad43f253a9e4523"],["/categories/Java后端/page/4/index.html","dd6560b1cfc781e6e8b4e37aceb2e2ee"],["/categories/index.html","037b50406300ddd2fc246b8300aafe56"],["/categories/友人帐/index.html","fc3f5d767e34937d7b85be91686ab7c4"],["/categories/版本控制/index.html","3e4055b204abfeda59bbe7f276072186"],["/categories/考研408/index.html","4d58d63d571d0f1ab8b91f0a3d589d54"],["/categories/读书笔记/index.html","94d615173c64eacbe28e6be462bcdb32"],["/categories/软件工程/index.html","b1db293155caec8145ab2652d98fdfc8"],["/chat/index.html","938501b7b7a6a62a9ba4148e27857efd"],["/comments/index.html","4601bd61d2b07293f02c845a03e29141"],["/css/custom.css","9b6961b5c92f42e076c0be43ee63a75a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","2d1a7e8ffcdb2974fced70d35eaa362b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a9e17357d6410b19e5401c880fcc3f1b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c74c347191fb088c2d7f333fc5db4bb2"],["/page/3/index.html","4674b31ba83b37cbe5925efced04377b"],["/page/4/index.html","5e248158a0d4d0a8ada6d7a4ae4590d4"],["/posts/18bf100b.html","f620fce64156c5517de290c0e425a2b1"],["/posts/1fcb7e57.html","9559765a50343660c94962b0564f1c69"],["/posts/254393f0.html","2cfca15168240b16c7315ef5c86e2c9b"],["/posts/28b3fa6.html","511e10975c9a28c4d9d6e3e546c37a5a"],["/posts/29f0725f.html","29f02fbb9519621844b9d5d967e033dd"],["/posts/31c36041.html","4d89a7c45e2c49d01b0c9cb5c51acff4"],["/posts/3513a7dc.html","1a0fc1ee9b629a69e0c089e6c423086b"],["/posts/3e69d26.html","1193ffdf69a75c2f5fb74bf692bffe97"],["/posts/417de2f1.html","c1903f08b6b2d163b545b4c1340a9f26"],["/posts/458f2701.html","e322376b57dba96bf69e11f0477672b2"],["/posts/4e6d3c3b.html","cdb0688e4c7def36dfb89ba259edfcfa"],["/posts/51361b40.html","6b7949f81580934f9bbe4ec46e93e5b0"],["/posts/5413be0e.html","1f455130ce83f1c788b82ad3c5c34069"],["/posts/5596f2.html","8806dd34e62dec2bd42613abcfd1664b"],["/posts/5c81b531.html","62fbea043db7cae5faa591085025261b"],["/posts/629aaf98.html","72f71375f65240f3169baf0d90e53ad3"],["/posts/65c29e.html","a75f6156805a531e08a9f16fa745c4de"],["/posts/7105be24.html","1fa9d80e4fc4b13ddbdd64a08b40e708"],["/posts/750cb0cc.html","cd95511541d7662a8effc4a8b7cfba7a"],["/posts/76897b5c.html","9a7387d7ded6a8c0cf1131f1a3721d21"],["/posts/852e85aa.html","d52207ff9dfd17dfb6b3a550a82c3ca3"],["/posts/8712b9be.html","5c8361ac7616f1debd464508268c6715"],["/posts/8e1cab8e.html","3f6750b77b478c506cd92c8bc11dc8b7"],["/posts/8ebfad52.html","4fe96a92fa6df564911a5398ece2be51"],["/posts/8fd19ba2.html","d8c36778b3a59649cbde5586688e1878"],["/posts/92d0de5b.html","5fa38c55ff7f39847060358afb5aef75"],["/posts/9e3d6f34.html","95478aa10cf5a7f94eeffa39f90f809f"],["/posts/a25a408.html","bc78ed37913f3c529abd98903dc133e6"],["/posts/a6b15897.html","f7d0a3e240a022bba0a9c87382f0e2d1"],["/posts/a9867134.html","22cedb54cac344f67a2e8da16c3ec3d6"],["/posts/aa351366.html","c8ff9d0610d742b055cb8ee5f4d41261"],["/posts/b42f7f50.html","080445f80d87bebdb099117f1849ea21"],["/posts/b492def1.html","90c477c8c61110da70c35745b68e9575"],["/posts/cca6755e.html","acc2e94607c4babc5a5481d785ebc7b8"],["/posts/cf1cd846.html","9bdfd4a03584b357c278222e4b4e4404"],["/posts/d6a434b9.html","351471bdbe23f5815bce11697d3fd062"],["/posts/ecaa32e3.html","14b58185f84e0a1a7da28e2ab3034189"],["/posts/ed8ba887.html","39b52755cda2d351cb1a76952b66e41c"],["/posts/edab46fe.html","24cd19d86ff3cc04eea7b31ae3f2ac0d"],["/posts/edd0080.html","1a71c6eca8c0024fcce291bff82c82ea"],["/posts/f2f795cc.html","c9ab434c540212beac50e0a59c295b90"],["/posts/f7c947df.html","4c574076c3b1dd87f3ab7d8979b0041c"],["/posts/f7d3a65a.html","5205801bbb23ea17884958d7f581572b"],["/posts/f82b2580.html","a70046276184cd0cae0d85e668b64106"],["/posts/fac97174.html","b5034f6fbc52d22608e78e4c8c9287b5"],["/posts/facab7a2.html","c497ceeacaa67078a8c543f68a24b252"],["/posts/fdab9a5f.html","8f2b80afaa9611f405d9648d1389e068"],["/posts/fffd9e73.html","f233194ffa07fa459d901d907cb93077"],["/sw-register.js","143e665879fee43408d671e44d366b88"],["/tags/Git/index.html","c408124ecbfc1ab392b0af53c5b90b84"],["/tags/IDEA的基本使用/index.html","bff048e1ea24aa66543038b23424da60"],["/tags/JavaSE/index.html","9dbb8e181fcf4ab0b4b288876e47e0a4"],["/tags/Java基础/index.html","ef0b0766206bc1eed21e6385ab67c8a3"],["/tags/Java课程作业/index.html","63ef2b64fc5728b97978f14c2bf29513"],["/tags/Maven/index.html","da99ac1359fe4dd509bc6f7734211f32"],["/tags/MyBatis/index.html","d4c417e1423a4bcf3306b796a89c3154"],["/tags/Mysql基础/index.html","6d7b8d0382cc62ddc0611d82ba9a5424"],["/tags/Redis基础/index.html","baa2a546b95e54a870272ef0f4038951"],["/tags/Redis实战/index.html","1161ffe5ece55d2d06e7acc02650c542"],["/tags/SpringBoot/index.html","fea1da8f5525917d619a6ea8c4cb8a01"],["/tags/SpringBoot项目/index.html","954b755acb177f72933e34e4f70513e1"],["/tags/Spring整合系列/index.html","4d8106956b86d2283139bff66bf2195e"],["/tags/index.html","eb24e29b1111ed45c27d643a4efd4fb1"],["/tags/redis秒杀业务/index.html","ed539cbce6448b738639ee700b93d580"],["/tags/响应式Web/index.html","e2f176152bf065cbba00fc89a5265849"],["/tags/我在人间凑数的日子/index.html","50547bd55161324a9cfa4a0672494fb4"],["/tags/操作系统/index.html","4434bddb194287f7d42d7c4e1919307e"],["/tags/数据结构作业/index.html","e2ff46d7529fac704dd7589d6c3f7dbe"],["/tags/编程和环境配置/index.html","60a2a2fff19cdcf0ecc1fd8e2ba4819e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
