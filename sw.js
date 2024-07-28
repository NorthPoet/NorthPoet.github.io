/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6cacd124bc0b8b38684f19d044090f84"],["/about/index.html","3e0740b7ea5328494eed837dd7e50539"],["/archives/2023/11/index.html","fbfbc48adf5bcd17775db772ce0a8491"],["/archives/2023/11/page/2/index.html","9fdb14bc1a592e4b555fb0996fcfbe16"],["/archives/2023/11/page/3/index.html","8628b7922958dd8e552cde2f4bda2674"],["/archives/2023/12/index.html","07a4adfabeb6117d4c3ccc3d2135f915"],["/archives/2023/index.html","b05ebc11216e9b2da1935bd5e89c2599"],["/archives/2023/page/2/index.html","5f90e4789b17b2ffece3afc1380dcb13"],["/archives/2023/page/3/index.html","e8689d6da1b36676fd568d8b24fefece"],["/archives/2024/07/index.html","508bf5ab97ba771078aa1cb302f0ad40"],["/archives/2024/07/page/2/index.html","d8377219872904e76c96ce3116b9435d"],["/archives/2024/index.html","ec23ae1927d19d0ee09a1fe5a81a630c"],["/archives/2024/page/2/index.html","c79c65522b183b7c513d0d0c8133c26c"],["/archives/index.html","e7a68d1ee4460a459a0d3c4622e83c4c"],["/archives/page/2/index.html","67d6c65e6d1d1d20f0ecb96024a606b2"],["/archives/page/3/index.html","0ea666422176d42c4090010d747b2f7f"],["/archives/page/4/index.html","27f8cfd1522801b6ce58d03b33324809"],["/archives/page/5/index.html","110faf21c189b443e3d820623b7a3a98"],["/categories/Java后端/index.html","11eeba1fa7ec33f1a726a7c1499f9af2"],["/categories/Java后端/page/2/index.html","1e4160890b51560a64b7ddb2eecda8f4"],["/categories/Java后端/page/3/index.html","55b5fd136b27b1cb42d931a45b3062fd"],["/categories/Java后端/page/4/index.html","9caf0e287064ecdedf7d34331a2ab736"],["/categories/index.html","6d142f8f0a5788d80d0635b0f21dbcae"],["/categories/友人帐/index.html","c0bbbc743d41aff6428a8bdf13452355"],["/categories/版本控制/index.html","9663277735fbd0ac02cc237fd5c7940d"],["/categories/考研408/index.html","e477797eb1c3ee135a0a616fa98d7747"],["/categories/读书笔记/index.html","5119180b5f6826a325054441b80f3ab4"],["/categories/软件工程/index.html","7df62bef2a31629bf5bacd17ef33bef9"],["/chat/index.html","418559413ef6e75db4b231308cf46ee6"],["/comments/index.html","8b2e0d9e7486cbda629276de2787bc22"],["/css/custom.css","5e9f835fc5651669166a6f22456f9232"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","0356b8c376f3652923c6eba5be241a3a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","b7de9bdff8638609d994a07dfeb0089b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","f571c711b117db6f32456f64d8fc8130"],["/page/3/index.html","9cc5969e29361cc311ad7fd63519e9b2"],["/page/4/index.html","4bb6a0c5615ad579733674795715f016"],["/posts/18bf100b.html","c80e77054a7c63b7a0c5fa84266711b6"],["/posts/1fcb7e57.html","3556cfd79beabab5d8b36f71d3059187"],["/posts/254393f0.html","2f2ee11d59319edc05b17cc8249732ba"],["/posts/28b3fa6.html","4fe279ea3d9bdc86a05351f4a30447c6"],["/posts/29f0725f.html","d2f7692458069da9d92cf43c888d04b6"],["/posts/31c36041.html","b0e47716d52087ff2c6e6e5a495eea21"],["/posts/3513a7dc.html","bd7b5874abf1a160eba66d0340a57a53"],["/posts/3e69d26.html","8db2c0813b33ef0069ee5adad06c65c6"],["/posts/417de2f1.html","f929990ba06454a7876d20fdca5bc447"],["/posts/458f2701.html","08d4ea4e70bf8daf8cabf8c06e76c728"],["/posts/4e6d3c3b.html","3bfe5c1056f50905419115cfa67b5e67"],["/posts/51361b40.html","c1e419271e8d7fa38975cf1f24954b69"],["/posts/5413be0e.html","d76277293a2ab8cd293d9eb2d5a30dac"],["/posts/5596f2.html","a93306d79ae0a206a53e57d5e8c6e6c7"],["/posts/5c81b531.html","83605a838c97592d7c2c5d98b67c87da"],["/posts/629aaf98.html","b9ad73eaa309c8464bb5513959407de7"],["/posts/65c29e.html","953555f552b001669f42ab366d38ff97"],["/posts/7105be24.html","d111ecd747df432f1f9ac315a320c60d"],["/posts/750cb0cc.html","d098584b1b62ee21a2edad1921c753bd"],["/posts/76897b5c.html","17cd41d7e90934d23f0627ab0670969f"],["/posts/852e85aa.html","84d46ef5f6f079f1f3bbc05c71859d03"],["/posts/8712b9be.html","542276ba29d1c9e6e101346c6dbc2640"],["/posts/8e1cab8e.html","e47f8b3365c1264fd955b64213c02e8d"],["/posts/8ebfad52.html","7096eb2f3f3c9e5206419e3f35dc5d17"],["/posts/8fd19ba2.html","1671cfebd5ffce7184e2ead83af1efa2"],["/posts/92d0de5b.html","31395949ad5e7299b69bfd2e6707e145"],["/posts/9e3d6f34.html","5718c1ab9dc867f4cda8a9360b05baca"],["/posts/a25a408.html","edbae17966ddc559f113433e0ab3c93c"],["/posts/a6b15897.html","2f0556e0cd2e4719f1349c66ede74c00"],["/posts/a9867134.html","f42f2b003465d1fd394b783827ca078a"],["/posts/aa351366.html","9321f2bf4ed14d421d5635130dd2ec38"],["/posts/b42f7f50.html","3258b40b6be14924f4d05257da780fcb"],["/posts/b492def1.html","bf757d6aecbc158d70bd15e52f9fc4ee"],["/posts/cca6755e.html","07612458da36c945a8af603d6e57e523"],["/posts/cf1cd846.html","cdf9602b301e50330c28d2d720e454ab"],["/posts/d6a434b9.html","2ffcc4c3419883596c023c4f03cee60b"],["/posts/ecaa32e3.html","c2d6b8289df09714e17361d3f7073254"],["/posts/ed8ba887.html","cac394e30fe44238497493611c04a63b"],["/posts/edab46fe.html","a846ee23eedc62b2733827abe7256945"],["/posts/edd0080.html","27a0bf3e4cd34af80ebe7ed93517ce38"],["/posts/f2f795cc.html","6643c0e4dc2b27620de2643f2632d165"],["/posts/f7c947df.html","69b1f86a1e4bd649649c848a38b4b0f6"],["/posts/f7d3a65a.html","278f31a8481a4763f1f3956a6ffcf09b"],["/posts/f82b2580.html","697179db45e87bea80fe5f11d994ced3"],["/posts/fac97174.html","4ce8469dd645ee9a79f20da1da2183b5"],["/posts/facab7a2.html","78c7ed722c2b2a66c073894aaf4eb8a8"],["/posts/fdab9a5f.html","291f47f4e1686c61b56867c1dfebd0ce"],["/posts/fffd9e73.html","d062bcd19188af5fd72dd6ad7f4b864d"],["/sw-register.js","0f6127994233b35c16ac9ccd7ef79a05"],["/tags/Git/index.html","93eb8a34f77d625e0114008325f23165"],["/tags/IDEA的基本使用/index.html","45dba61f3336d29e02fb6e7b0713f23a"],["/tags/JavaSE/index.html","01d654c5db5e86da830e872c2ecfb372"],["/tags/Java基础/index.html","8f56c5a742d65d8a19e199da79b2e5f2"],["/tags/Java课程作业/index.html","3bd97ab06e241d27e8dfc18d9d501726"],["/tags/Maven/index.html","fdbf2cecd3eda34a75de78bb25e75e73"],["/tags/MyBatis/index.html","6f22b845e0f34b2f0c0e199f2f81026e"],["/tags/Mysql基础/index.html","245b9bf47e127874af2fc7f4181b1a86"],["/tags/Redis基础/index.html","bda81e2112deeeb9fe10d445b7f4a7c5"],["/tags/Redis实战/index.html","b3154f4c17d36889c656c7734d582f4b"],["/tags/SpringBoot/index.html","d671bd9c11f9bde5e225a4e9bd9ed410"],["/tags/SpringBoot项目/index.html","4473f5410a11a2423b50e242690a9cbd"],["/tags/Spring整合系列/index.html","c3148bc8d7d110749f71dff8898bd9b7"],["/tags/index.html","17f1f16a061637374f715d49053c2ce0"],["/tags/redis秒杀业务/index.html","1eecc4fc95b9dd36cf14cf9b96619c3d"],["/tags/响应式Web/index.html","558d7b6a6917e029ada04785841ff6f3"],["/tags/我在人间凑数的日子/index.html","c4fa20ae46a4e462b77e70ba74401ffe"],["/tags/操作系统/index.html","cdac2e670375c90358a82679551460e7"],["/tags/数据结构作业/index.html","65ffafd9db02015adbb3b66b88adeac6"],["/tags/编程和环境配置/index.html","ca76336bfc5364e81cb0924c54afb516"]];
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
