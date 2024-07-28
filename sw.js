/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e273dc28d62cdcb8325dd724f124c3a3"],["/about/index.html","f6fec467f2348c3f643b94c7758b85cc"],["/archives/2023/11/index.html","ed8a39f68e4ceb4694f8bd51b9ecff73"],["/archives/2023/11/page/2/index.html","dc80b650f4586018d11b5193760bba1e"],["/archives/2023/11/page/3/index.html","9a1c9385cf5ba90647513d624c58c75a"],["/archives/2023/12/index.html","bd8269da7bd949461942b1b7ce14b52a"],["/archives/2023/index.html","26260f5525bb03ec4b8d7a14df2b000e"],["/archives/2023/page/2/index.html","4316cdb337a197356196ce2389c17105"],["/archives/2023/page/3/index.html","f13b804c06efd05ed6177fd4f1f95b0c"],["/archives/2024/07/index.html","1bf9513870bc3c53faa0744b56d5d47a"],["/archives/2024/07/page/2/index.html","1e96bbcd5ded33074a202cdc49c88bb2"],["/archives/2024/07/page/3/index.html","bf7894e0c11a5d2649cb436753379f16"],["/archives/2024/index.html","1657457bed3d490042439bae246ede81"],["/archives/2024/page/2/index.html","aef2b401ea32eaaf5c504d5cfd9cd1ea"],["/archives/2024/page/3/index.html","0e289e092be39e4b7e9730a7cc6c7abb"],["/archives/index.html","544655554dea0b4c2b3c627361b14d38"],["/archives/page/2/index.html","756bf6cb9cd8ac043d16251998c3661c"],["/archives/page/3/index.html","7cb7bc1c17d2a793887075ec74b9613c"],["/archives/page/4/index.html","bd32716ed77d3a69015669369fc7d838"],["/archives/page/5/index.html","6483914537a5a5aabd34b92e6afaf2f9"],["/categories/Java后端/index.html","02a71661c5e0f904f785a9680d6f7b76"],["/categories/Java后端/page/2/index.html","fc05c84f5447d06f4111b17e6191504d"],["/categories/Java后端/page/3/index.html","3bd3a90055da593c2954ad245524ce93"],["/categories/Java后端/page/4/index.html","4c9794aa10abe10a042a6da195899183"],["/categories/index.html","0536a2e5c69d5730402358f4bcd0bf82"],["/categories/友人帐/index.html","e12d1426be8e3b5988abddad14b872f1"],["/categories/版本控制/index.html","2636871fdbc3e7da8a86daafdce1e486"],["/categories/考研408/index.html","6c02970bb03e50523b00f6c1a3c200ea"],["/categories/读书笔记/index.html","86a032e770c33af6effbdbb793ac0fbf"],["/categories/软件工程/index.html","03e0d7e30aac749b2a7e872ef795f8e2"],["/chat/index.html","16189462b42ee2098774e0839b9f02be"],["/comments/index.html","089ebdcf4bfa5f742441b73aaeef271a"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","2021221f390ed8179fe5ae56544dc88b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","82663c8d98f5c8e1b4bc1731b52af738"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8e54c978db59832b8df775b20b80f535"],["/page/3/index.html","b166863068dec24c471a93e5817d4add"],["/page/4/index.html","50b5afa1f7ab870640052f9c34e361d1"],["/page/5/index.html","425f7c186b371687542982216d956f79"],["/posts/18bf100b.html","57b5fad9718f32b3fa627d052dea06d5"],["/posts/1fcb7e57.html","21bfcfe264084f92206ed708a5533b91"],["/posts/254393f0.html","bedb1b0417ddab4a2fd6598ff7b71567"],["/posts/28b3fa6.html","ea37c27d4c479bd42f8bb0113d9ae9d1"],["/posts/29f0725f.html","135482454a5a842722b51a32b49d6144"],["/posts/31c36041.html","8b80dccfe6840656a08a2fa0ba518f7a"],["/posts/3513a7dc.html","2a4ccc2c6d1ac9ae627418a6b36271ba"],["/posts/3e69d26.html","c4ef503d9bda2b324e7b68f6801a200d"],["/posts/417de2f1.html","869e540cc5326693ddbbc0f6ae34dd13"],["/posts/458f2701.html","be330c02ca5bfc0b7f387460669a1607"],["/posts/4e6d3c3b.html","9755b0cd51d6c50c8a63f120348c2ed1"],["/posts/51361b40.html","46c71fe88a77db16696e5f623644285f"],["/posts/5413be0e.html","d0b05237ea2758d742283c03f044209f"],["/posts/5596f2.html","fb297f12217d64c040bd5826b329a026"],["/posts/5c81b531.html","387a29c0717d50f0e492ba315e8b764e"],["/posts/629aaf98.html","79172d6be96c3350dd6d87c50d20fcc1"],["/posts/65c29e.html","d30eb75c93ffefa787b538983b719f18"],["/posts/7105be24.html","9e50f57c8647d73b52aaec789a3c53dc"],["/posts/750cb0cc.html","f1013a9e81163fb3d6fef01f969e3447"],["/posts/76897b5c.html","a8d4f5a589b0ad2db47a87e768bf027b"],["/posts/852e85aa.html","24061dd5ca03a9828c3ccb1140f952fd"],["/posts/8712b9be.html","9fbab6a696a3bc57dae27325fc5c191e"],["/posts/8e1cab8e.html","07c65c31b307ffc33d69add1423ce630"],["/posts/8ebfad52.html","db14411991e98d8750e3648f6c264e56"],["/posts/8fd19ba2.html","95ea64170fb2d5a7b2376a8d030892e3"],["/posts/92d0de5b.html","7a422b48fbab16bd997755d816123dda"],["/posts/9e3d6f34.html","d0172b763a6b78fef71a1e8ab1fe336c"],["/posts/a25a408.html","0da829c01152022c050a0185a1930e3a"],["/posts/a6b15897.html","6f6efc25b274ba79d94ccd0f45c0e572"],["/posts/a9867134.html","443860f33ca3c4fddeb5142a69e4915c"],["/posts/aa351366.html","9ff4f03d9d30a64fe948acc9bfee850e"],["/posts/b42f7f50.html","5a909cdae14c37a915c600b5788b6292"],["/posts/b492def1.html","ff85146e6c915662d58cf543fb975865"],["/posts/cca6755e.html","c68674c8ddb729f97e1779463ab93ddf"],["/posts/cf1cd846.html","4cc7055ccfaf4512cd3fe52e09f8eb3b"],["/posts/d6a434b9.html","6e9e39dddefbdc861052d226830e4a17"],["/posts/ecaa32e3.html","bc4f0ed8b29544470361a9995b4c6709"],["/posts/ed8ba887.html","a5d0de6afd40f59a1cf385e681673d38"],["/posts/edab46fe.html","d6b193d205742d6ca680faeadd48a725"],["/posts/edd0080.html","6125ceecad383b9904c9f43dc709bb7d"],["/posts/f2f795cc.html","d6e4a098b4e740e220dba74e7fa29017"],["/posts/f7c947df.html","1ab7a85d3327fda1da6d6ac136110603"],["/posts/f7d3a65a.html","50c1e4d8c16b35c042539f01254ad94e"],["/posts/f82b2580.html","88ac2010ccf8331269cdf5d63fd24ffe"],["/posts/fac97174.html","7140cf771252485198acd8e46a28bab5"],["/posts/facab7a2.html","5f95e9802a7319a85a84fffed25e4a05"],["/posts/fdab9a5f.html","b4d94573c530b33f08c50edc5e2765d4"],["/posts/fffd9e73.html","c76a8a4500dc9fe8eb5d7ced40e119f1"],["/posts/undefined.html","bf136790a29ef64fce80611b51126a82"],["/sw-register.js","f0ca22ff483e13c3a0320dea90f327d8"],["/tags/Git/index.html","4e297fff8134ce542b068c1ffd5092ab"],["/tags/IDEA的基本使用/index.html","e67798ec96a233c70556dbcacfb7e71f"],["/tags/JavaSE/index.html","ea20d237410f620b63198c223c3f4f4f"],["/tags/Java基础/index.html","fd5b06b613116671c7d3ae6641baaaa0"],["/tags/Java课程作业/index.html","077037dadf10008c7eeb12948415586b"],["/tags/Maven/index.html","2e32e618fcc6e77acf172c2095a8ebb2"],["/tags/MyBatis/index.html","f14a947ec0eb8b441445a8f5569c8408"],["/tags/Mysql基础/index.html","5a7d327da9a61f033b99ec304f86f15f"],["/tags/Redis基础/index.html","0c2113ada54d0ed0df43a27ae8399563"],["/tags/Redis实战/index.html","55de0dd3a59b77bacab157ff272c295c"],["/tags/SpringBoot/index.html","aca1fc9f391cfad8459d5baa11f7370e"],["/tags/SpringBoot项目/index.html","9e096f006383e55911a2480d510d98a4"],["/tags/Spring整合系列/index.html","654bdc2ce7a4d7298a36b2413fe5ba03"],["/tags/index.html","50a5d62f17a79f4f4d1451f67ec94dcd"],["/tags/redis秒杀业务/index.html","1723828e28e06207cfe8173863102085"],["/tags/响应式Web/index.html","ed53eb69abc9099ab4cfa02167f16798"],["/tags/我在人间凑数的日子/index.html","007ef7ee43590b74fc248c9835458968"],["/tags/操作系统/index.html","b8b4e87c0780f793e3d3dbac8e225495"],["/tags/数据结构作业/index.html","be4400de778b587df4a47ece5aad44cf"],["/tags/碎碎念/index.html","6b53a203e6725a210528d66f84beb7c1"],["/tags/编程和环境配置/index.html","cfbf94089fad3042dff19207af46ab69"]];
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
