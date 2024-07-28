/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1e90adfc3cf24a8646e5ad316bc0db1d"],["/about/index.html","ebeb4df44e346f3fe4a74fd052c55eda"],["/archives/2023/11/index.html","0d9e88ec07b1e95a62d3e383b9b41cd7"],["/archives/2023/11/page/2/index.html","c47571e5905b8748afb8840dd077278c"],["/archives/2023/11/page/3/index.html","0c950d2b9311b9cad02a187f9ed14dcf"],["/archives/2023/12/index.html","9f42fa9ab2f5c1e36cc0a642bc8265bb"],["/archives/2023/index.html","9c861ef3783f627299f4e76dcb61cd09"],["/archives/2023/page/2/index.html","ce0f57e6ba0d7caf29a5ed92f3fa8fb4"],["/archives/2023/page/3/index.html","c1e1cd512d782bde3e38266ff275e260"],["/archives/2024/07/index.html","82c1f1284207b6edb4f5edcaf37df1e0"],["/archives/2024/07/page/2/index.html","d7f8b71bdbcf5c8ba7c54263523b9c4e"],["/archives/2024/index.html","810e4fbfd6edf8aae6f1711db2f91ef8"],["/archives/2024/page/2/index.html","14b81c58bf09e59d5d1079283539f226"],["/archives/index.html","c001c16c0a7b9434fff01d8eb319a640"],["/archives/page/2/index.html","e0a2109a5bfda81b4be86abb39db520f"],["/archives/page/3/index.html","002ffa9fc716150c0de8f5948699daf5"],["/archives/page/4/index.html","ee152bb272361011cc8b4e7203b3b94b"],["/archives/page/5/index.html","db15eaa63c4f5d85607c81ea0bfe235f"],["/categories/Java后端/index.html","c1b1784e286370c4fa832562b3696943"],["/categories/Java后端/page/2/index.html","a209fbcc040bb97995e7d86954c266e9"],["/categories/Java后端/page/3/index.html","4a007c76c33ca4b19780efd066ffb5cb"],["/categories/Java后端/page/4/index.html","50d1f1692eb28b05e389d95b9bfa3fcb"],["/categories/index.html","1de20e52c93bc6bd0ee9a79218cf8546"],["/categories/友人帐/index.html","47e643630ec9e928353a8a13d6739440"],["/categories/版本控制/index.html","11917dc618f53ae04681f64d87b7207d"],["/categories/考研408/index.html","5096d8f96396a6b3f6583adec457f7f9"],["/categories/读书笔记/index.html","111d8bb8bf88d607e00901042053905b"],["/categories/软件工程/index.html","2f7ec3b0c7328158423191e1f3020689"],["/categories/项目笔记/index.html","3269f42ccbda7e3daeab89d6993e4310"],["/chat/index.html","9f55d1338f94d7c16ffa9ad412a4985c"],["/comments/index.html","dd7bcdadd3310407ccdfe81a629b766c"],["/css/custom.css","5e9f835fc5651669166a6f22456f9232"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","399c1027aa4ecd944ce2d7ed3cb5ea0d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","dcb1ff22a5e8e69f328c1c1533b9ad77"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5660b8572cadc2b3fa4135aedb58033d"],["/page/3/index.html","9325f3976920ab1be282d71cb91fa2ac"],["/page/4/index.html","7667f5cd4f34bee0067f8a718f4df74a"],["/posts/18bf100b.html","a52c552d7dc94681c74c5f6ce1ccbdf6"],["/posts/1fcb7e57.html","d239ad75c0dd1216310e5797cbcc4842"],["/posts/254393f0.html","7692fe75fe475e90097414eb315f210e"],["/posts/28b3fa6.html","4af322251204858099e347ac106c9a90"],["/posts/29f0725f.html","ae372b7cfac09d34ccfefae4703f038c"],["/posts/31c36041.html","8f1eaa3e8140ce65d26306ea5447455f"],["/posts/3513a7dc.html","0405a026713f27ef8f6db2bba337d7ba"],["/posts/3e69d26.html","13a4e39b9a35e4e16cb6e7865101868e"],["/posts/417de2f1.html","d30dfe9fe237349c2ac5586646f16d78"],["/posts/458f2701.html","9820a4ef9a2897a6e1cbf59bf8926ed8"],["/posts/4e6d3c3b.html","534e9c4185c12f5fc34e38ec8a9e6cf7"],["/posts/51361b40.html","e273f34102df917621493f8fc95f8bb6"],["/posts/5413be0e.html","9735de49420fa5c3b5864eff9894db56"],["/posts/5596f2.html","c2b960cd5eb038ba15bf9f695393b50a"],["/posts/5c81b531.html","e028c6ddd34f31df9114f5b5300e3657"],["/posts/629aaf98.html","074bebbcf1e5560200519437c05a2a22"],["/posts/65c29e.html","594c6b719029b1b4113e934bd7737b00"],["/posts/7105be24.html","0aa529f235e6ce74a9392ee77954114c"],["/posts/750cb0cc.html","f91bce58e15f9758f251556d373c0d09"],["/posts/76897b5c.html","9c4dc35d2cf7ded20b01055d3ac77f96"],["/posts/852e85aa.html","78d41acfc148e75ac8d7c2e4a128a3fb"],["/posts/8712b9be.html","c4bbfe5be46e00842c3aa40b3397d63a"],["/posts/8e1cab8e.html","dc274a2078f3713644b5b831cc19f4a7"],["/posts/8ebfad52.html","2000dd67e88ce701337ce9893c1c671c"],["/posts/8fd19ba2.html","b44567a7a569bd0975cec85b79e19042"],["/posts/92d0de5b.html","da735c91002c720f373bed43ccfaf2a2"],["/posts/9e3d6f34.html","d0e18f9ccd531b1bd3997c40c33b982d"],["/posts/a25a408.html","0fb745408fd599df125e951ba81c165b"],["/posts/a6b15897.html","4e6b26045b932e15f72aed2a32ce6f91"],["/posts/a9867134.html","792efa8037f204f0af80e47130e09a24"],["/posts/aa351366.html","738e33d65862d8e64943ecbc4cbf09d6"],["/posts/b42f7f50.html","905384c27320756f55ee757506aa182e"],["/posts/b492def1.html","96d1919ac2da643ad0fb879f4d4f3c79"],["/posts/cca6755e.html","fce61f598526bd72e86bef3d558a9c79"],["/posts/cf1cd846.html","c6c95dc65b65ac4b90dabbde53183380"],["/posts/d6a434b9.html","0f5da2b3358f746a1fb85e174000062d"],["/posts/ecaa32e3.html","29a2fc49ff26ed837d3865c11af9f46c"],["/posts/ed8ba887.html","b107bff0f8407cdba85552f6b32d107a"],["/posts/edab46fe.html","946758ccd980e53142a6fc6a5a0748ee"],["/posts/edd0080.html","0386e16c04047921469b61d84b863efb"],["/posts/f2f795cc.html","7978fc6df4d097204e767855b88f38b9"],["/posts/f7c947df.html","b6b7da461303875657fca93b2914cd3b"],["/posts/f7d3a65a.html","d2469d6a05483418f7a10c9eb330de0a"],["/posts/f82b2580.html","2331f8bd1f1aebdb4236f9a5a5d53c72"],["/posts/fac97174.html","cfd093229fa092dece324dc08c4f6c2f"],["/posts/facab7a2.html","2c93f6b9f6b61e1bd6fa5f7c791f3dcd"],["/posts/fdab9a5f.html","31430d195e1b07daf4ba7f6a0db66456"],["/posts/fffd9e73.html","a93d550eb7e5cb2bca30d8a47d84ac53"],["/sw-register.js","aacdd9d0130a54e6f01f8ef494983f60"],["/tags/Git/index.html","a48f396a67a870e5f92a11b08b507ad2"],["/tags/IDEA的基本使用/index.html","c3de0343ba3a772f334d40d18c36ff78"],["/tags/JavaSE/index.html","a94021bc3c34e777aab775bb55af0679"],["/tags/Java基础/index.html","0408cef0c1921a766baf1b8d30bedaea"],["/tags/Java课程作业/index.html","9220685cc2534619cbafb25d16fdb6fa"],["/tags/Maven/index.html","dad51838ed52b0dbc8a6177d76933c5c"],["/tags/MyBatis/index.html","187fda9eb2bb0b5a74ec5ee752fc7d77"],["/tags/Mysql基础/index.html","ba5dc00ab21127483b7d3750d9567156"],["/tags/Redis基础/index.html","18fe9af9cfc894c570e24deaf7914ac5"],["/tags/Redis实战/index.html","754c3fedc42b0f14ee6e81b1e588eb23"],["/tags/SpringBoot/index.html","dcb215fb3284ec364111acb7e5b6f0e7"],["/tags/SpringBoot项目/index.html","94bd9f5ee1afaf43241e058b2226a43c"],["/tags/Spring整合系列/index.html","2ade7034516600567e6f378cdd9bf326"],["/tags/index.html","290a0a5f5a40a66bee0bd92d8acc4cc3"],["/tags/redis秒杀业务/index.html","0313d043188e50b1e6917b5aa7cfe1f9"],["/tags/响应式Web/index.html","02f6c0d5e549d5501ce07de618045bbc"],["/tags/我在人间凑数的日子/index.html","b25346b67dd9dca40aa348d0d064cf79"],["/tags/操作系统/index.html","e6a2400d3d2f719b83f4156565f580d8"],["/tags/数据结构作业/index.html","998e69dce638c58b52c0d37d6e63035b"],["/tags/编程和环境配置/index.html","f7f7869bf30876fec4dd1a4ad84c6fd6"]];
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
