/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","941d40a566370e447d3bbf8b68fc5d50"],["/about/index.html","3666d701e9776aff5e93c534c93f7314"],["/archives/2023/11/index.html","9a8e26b534bc6135bd630e43139a4f1a"],["/archives/2023/11/page/2/index.html","7506ab7e116c6eb322befc0d7728e6b5"],["/archives/2023/11/page/3/index.html","c52b574d0e7d88d6ded04c8011aaaa84"],["/archives/2023/12/index.html","63501cfcb9c6904a40f99338781a648e"],["/archives/2023/index.html","95647f196f6311098ecad1609d7332a3"],["/archives/2023/page/2/index.html","a341e0efbe49bd0a5bd5443a0ffcba1d"],["/archives/2023/page/3/index.html","b34bb2ea2c843c8a0f5907c7edcc39f1"],["/archives/2024/07/index.html","3fecc9afd83cf771a7510ecbe02ff7b6"],["/archives/2024/07/page/2/index.html","59aecf2328fedb54e8dd67da9f0d919e"],["/archives/2024/07/page/3/index.html","dcf2bf1f25dfa194feb29585c2d36800"],["/archives/2024/index.html","50900fb66c7f931d3f1bfeece013f333"],["/archives/2024/page/2/index.html","fa25baf32e3330f940544a397751a091"],["/archives/2024/page/3/index.html","7195b2a703e24373791b89ce3b20db54"],["/archives/index.html","86df99e02836d3d305e08c6adbe31afc"],["/archives/page/2/index.html","14d61148450f7ced3e46c19c11ae98a4"],["/archives/page/3/index.html","08c23c52a1ea55708a65c2a3b9d6b37c"],["/archives/page/4/index.html","87bc0e91c41a34b7f08a122ac6ce4083"],["/archives/page/5/index.html","cc02fb57832d967a71ae6841da9c285e"],["/categories/Java后端/index.html","7c2e0dcdabbff1ea2ef2a65c05598f4d"],["/categories/Java后端/page/2/index.html","110430635507fb49c027e9d2b6d62863"],["/categories/Java后端/page/3/index.html","33953cd6ccfb2377c809a07e9b1238d0"],["/categories/Java后端/page/4/index.html","7052b3ece14fc352d096f384165d9f1b"],["/categories/index.html","3ee0403fd7e457f3ed690076a8047d90"],["/categories/友人帐/index.html","9129f9183c0e18628971a5e68da54918"],["/categories/版本控制/index.html","035a2a1818a8bdff4c1cf721a6377918"],["/categories/考研408/index.html","29f9b2ec4eb0b00b2a9fe3a719569cb6"],["/categories/读书笔记/index.html","5037c5275148e0cd6d1a398f9d5c0533"],["/categories/软件工程/index.html","70c9281edbd554eb472cf0dc89fd6194"],["/chat/index.html","045bb4b0c084fbb5e2362862477ee966"],["/comments/index.html","a088d6527a9a418027295e48ded47f0a"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","3d127ba2de3fb937ec1e3698ebf08044"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a8aa256d1e13d3b500715c9fd1276d5d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7604329aa9b76ffa0fe561381ccd4034"],["/page/3/index.html","f15c3fc17be37948d9a09a696f51ca7e"],["/page/4/index.html","4889f2819abee7430234d2753bb18299"],["/page/5/index.html","abba6164aa5a2e5cda476909c3e35b33"],["/posts/18bf100b.html","b02a39b136c21f4f9564c69fd5c5e3ac"],["/posts/1fcb7e57.html","b4bee3d189ce19aeb99fde44ba6ec9f3"],["/posts/254393f0.html","2998a00d0aaa6f6c8aef5ff4b8a3bd39"],["/posts/28b3fa6.html","5f37e6c5dcff0ac82f4f703057255242"],["/posts/29f0725f.html","8e8b70af48b20a227394cb0ad577c807"],["/posts/31c36041.html","bbfab032affa75a084f2628293b842aa"],["/posts/3513a7dc.html","c1ae7a43a8c08ea144b746dd3c1022c2"],["/posts/3e69d26.html","7e770f0079b360787a9f82bde92d226b"],["/posts/417de2f1.html","0f74f04d7fe7e7d1f45b47a540aef834"],["/posts/458f2701.html","3fa95b3947dd850e45f58c4fabc2a182"],["/posts/4e6d3c3b.html","148c452e958ad37b8a0974182a0915a6"],["/posts/51361b40.html","e69c842567a73fe9d3c20b4cdf363858"],["/posts/5413be0e.html","d0b05237ea2758d742283c03f044209f"],["/posts/5596f2.html","2409bcb91430ef8640097ede49d9f900"],["/posts/5c81b531.html","48f28c50bbf61634e1f0aa7db36be7fa"],["/posts/629aaf98.html","edc1deea47a2893a087bf2fb8bce5e88"],["/posts/65c29e.html","9bb480115509a719d089d3dd29bd3ea9"],["/posts/7105be24.html","c1319eb295ce862c65867e181d8fb649"],["/posts/750cb0cc.html","f1013a9e81163fb3d6fef01f969e3447"],["/posts/76897b5c.html","4983f3c71e6476c31925e117e703a898"],["/posts/852e85aa.html","9aed5bed2f61f7addc205b33ddbe9cd8"],["/posts/8712b9be.html","d9a1eb5348529ecf5ff91c02168cf561"],["/posts/8e1cab8e.html","8171e873932fae2d7e453491d3660d14"],["/posts/8ebfad52.html","2931360672be38edd9723b310379d23c"],["/posts/8fd19ba2.html","4d9132c15d48ec3f2a94621490b55447"],["/posts/92d0de5b.html","e9731d6c0d039554e71b289313c2eb31"],["/posts/9e3d6f34.html","cd7f0a7544633ddb8dde0a0a6fccdcee"],["/posts/a25a408.html","02ee05d8da50898507cb82ee3124adb0"],["/posts/a6b15897.html","7783178a115e80b1dc2fe71a54584055"],["/posts/a9867134.html","c5f78a964ab77cce1f1c9c7b3475bdef"],["/posts/aa351366.html","43ac6dcb0834a02017bca3b50043c387"],["/posts/b42f7f50.html","3c422af03bef852c1c7ecfc2050df420"],["/posts/b492def1.html","8e81ab4f5dcc852d9c43968df360e0f8"],["/posts/cca6755e.html","59e1830d56c1b1998cce9e273ef47d3b"],["/posts/cf1cd846.html","0878861e6cf58aa96aa3367bf1ae9774"],["/posts/d6a434b9.html","e5efe2c4d6523ef0190ccd50bcb01938"],["/posts/ecaa32e3.html","7c96c2f2ef45e6dfbe12a33f71b91e73"],["/posts/ed8ba887.html","3ec3293f7322fd6cd1f218ea19442606"],["/posts/edab46fe.html","63956dc4a8daf79165e612c1dc35af94"],["/posts/edd0080.html","9549c1756991ad328273f35802b18fe9"],["/posts/f2f795cc.html","a965df281b66c38708dd7b5219612ca0"],["/posts/f7c947df.html","76bfd076fc09e14390b523b1befbf89e"],["/posts/f7d3a65a.html","cdc6d48f5014ec1f5a63356194ce600d"],["/posts/f82b2580.html","1226816f6104a1058565e352a650be53"],["/posts/fac97174.html","5f8596974b1d85ece000c13b4c2d9624"],["/posts/facab7a2.html","cac7be6dca99cb7bf3a89b6829f3cdb7"],["/posts/fdab9a5f.html","77fde3d7273252e619f757706c6faee8"],["/posts/fffd9e73.html","2eda42b57e4d6da0bd22ac6eededd32e"],["/posts/undefined.html","ddd02064df49c5fc208f6bcc5f5bee01"],["/sw-register.js","fb6c7b37df713affcf1ecaf571083b25"],["/tags/Git/index.html","406bbeab40ae73b78ec4e00c4273cefb"],["/tags/IDEA的基本使用/index.html","3514d3e9eba6a4ae2d0148966e1d869e"],["/tags/JavaSE/index.html","0357eba8dbbf2c4739ec75bffb17094e"],["/tags/Java基础/index.html","64b28bffc32d612156b0e1b6cb93695a"],["/tags/Java课程作业/index.html","fe70851b070a923aa78285bd68aa2913"],["/tags/Maven/index.html","a9bc4b945f9613ff16d9d61c95065415"],["/tags/MyBatis/index.html","33c423b6496dd13e011f0ce362d2c876"],["/tags/Mysql基础/index.html","e50a7ced1b10effb6fef07735aa9d08a"],["/tags/Redis基础/index.html","9d676ea5de93f2f68e3cca5edffa9d84"],["/tags/Redis实战/index.html","268235c11076d061904f93a6800b3d49"],["/tags/SpringBoot/index.html","8d6346e5e1e7130efb90f4838537e79e"],["/tags/SpringBoot项目/index.html","68e1ddecbc5f9991486ef0e94580e032"],["/tags/Spring整合系列/index.html","739798eca8a9392e3f2e2dcb3dd1be41"],["/tags/index.html","7543eaf500e094f28a34d06eafad831a"],["/tags/redis秒杀业务/index.html","f999bb00b2241282ed6c0ae4e7e9628f"],["/tags/响应式Web/index.html","c6b1e77285af6b00b4f8a70ecf54fb19"],["/tags/我在人间凑数的日子/index.html","10dc95dfc31a83318e5d1a3ca14db868"],["/tags/操作系统/index.html","db57e1bc744b198dc752254d3f39fdf8"],["/tags/数据结构作业/index.html","e5a78236e4f551de9f3a0a51971547c1"],["/tags/碎碎念/index.html","549825f35d5a35ec147d82e36748c301"],["/tags/编程和环境配置/index.html","750f93eac7a4325dbef426112a707e7c"]];
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
