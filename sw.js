/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","842af96c57d27fe73695de361f3e571a"],["/about/index.html","173a98cd30118433c2c0e514cfc631fe"],["/archives/2023/11/index.html","166bebecbea80ff2051404cb61d45dcd"],["/archives/2023/11/page/2/index.html","7ab0a20cce7b3c743c5d9c3b7a9c57e7"],["/archives/2023/11/page/3/index.html","294500c19657f2fd9b10ace0ebf300e0"],["/archives/2023/12/index.html","9bc43138a1a9b9c29e5e8920a81f8a37"],["/archives/2023/index.html","7d36558161dfca1de28d139b498a129a"],["/archives/2023/page/2/index.html","84429b47fe0f5c17f161c13312b051cf"],["/archives/2023/page/3/index.html","a34955587fc97c9ad1ff40851e4a7592"],["/archives/2024/07/index.html","c159b74804700a6957aca7d40f77224b"],["/archives/2024/07/page/2/index.html","0f36b3047ef686f8759c01bdab4dcaf6"],["/archives/2024/07/page/3/index.html","30f0ad6e5a8a9dbe30ce7678046583c2"],["/archives/2024/index.html","b4215255055f62b3561951a4eb4a2747"],["/archives/2024/page/2/index.html","c101fa9a7b9f4783578ce4db97cdf9c3"],["/archives/2024/page/3/index.html","8ebd7110a1d6767e41126e7ddbecf4c0"],["/archives/index.html","015022ebe2fe00b19771324e1c1ae55e"],["/archives/page/2/index.html","3d9f63b002b8ebc24be5a967db86317e"],["/archives/page/3/index.html","2644deb68bf77037344f505f102b06be"],["/archives/page/4/index.html","d08ea44e0d767f618b7480e8b3ea1eb3"],["/archives/page/5/index.html","7803cf3211e06f2fbc81baf8f0866595"],["/categories/Java后端/index.html","d230249af5cca757c1a0955a502253ea"],["/categories/Java后端/page/2/index.html","fe135fbd4a72c9d0c3d1c97843a20123"],["/categories/Java后端/page/3/index.html","55cc3eb88bf4403afc5fa89de537b634"],["/categories/Java后端/page/4/index.html","cdd49cfe323de25627ec4a93592fbe9b"],["/categories/index.html","251487a5871b52a78d0b266fda18c1f9"],["/categories/友人帐/index.html","e0b8e3f18ca128396fcbd98e7ff57756"],["/categories/版本控制/index.html","618e26f1acd321e55cbf74f0f0d8f1ec"],["/categories/考研408/index.html","93df0b227de15d2884efba847f4afa28"],["/categories/读书笔记/index.html","fe317a66d91e00d572e69b49e10bb3aa"],["/categories/软件工程/index.html","a5cd2b4b1d6a68e8c830a7a14edf9cd2"],["/chat/index.html","c3bef051f5c9589d811bc5119ac148a9"],["/comments/index.html","03586a980176a0c17cf499ddda027a97"],["/css/custom.css","52cb9a51921c7dfc1e1a19204442a32b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","98c5c5d2c702720f76debe787671c732"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","c8576ca0b2fb0f184f16195229f8b210"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4b8a5faebf229b8e4be3820529336b6e"],["/page/3/index.html","0062e81fc73ceeb2f1fd062cdd9c3495"],["/page/4/index.html","3084b7a60ec8873813ae3d87de0e8d69"],["/page/5/index.html","576beb27e302398da6ddc6bbf3938c61"],["/posts/18bf100b.html","b02a39b136c21f4f9564c69fd5c5e3ac"],["/posts/1fcb7e57.html","68d968386a54ea17608aac3b56698f15"],["/posts/254393f0.html","2998a00d0aaa6f6c8aef5ff4b8a3bd39"],["/posts/28b3fa6.html","c11e3258c6a5e72470171ecbc2df7373"],["/posts/29f0725f.html","8e8b70af48b20a227394cb0ad577c807"],["/posts/31c36041.html","bbfab032affa75a084f2628293b842aa"],["/posts/3513a7dc.html","c1ae7a43a8c08ea144b746dd3c1022c2"],["/posts/3e69d26.html","19c47570065465da0b0a0b622cc3e87f"],["/posts/417de2f1.html","0f74f04d7fe7e7d1f45b47a540aef834"],["/posts/458f2701.html","32f9fe75ec5c38480c5468c81bc50c95"],["/posts/4e6d3c3b.html","d58af8e18067498a57cd418f8df02fdf"],["/posts/51361b40.html","70a6296d27acaf8139f6f058dc673e68"],["/posts/5413be0e.html","d0b05237ea2758d742283c03f044209f"],["/posts/5596f2.html","2409bcb91430ef8640097ede49d9f900"],["/posts/5c81b531.html","48f28c50bbf61634e1f0aa7db36be7fa"],["/posts/629aaf98.html","33732af88a4ec16630f02f7180967579"],["/posts/65c29e.html","9bb480115509a719d089d3dd29bd3ea9"],["/posts/7105be24.html","db36fedf88022ad633b3c74edd28099c"],["/posts/750cb0cc.html","f1013a9e81163fb3d6fef01f969e3447"],["/posts/76897b5c.html","4983f3c71e6476c31925e117e703a898"],["/posts/852e85aa.html","41c791c7e2a75cf96bf18d71ec415e67"],["/posts/8712b9be.html","d9a1eb5348529ecf5ff91c02168cf561"],["/posts/8e1cab8e.html","8171e873932fae2d7e453491d3660d14"],["/posts/8ebfad52.html","34d6efee15ecbf0eab8d06a8b2a0ce34"],["/posts/8fd19ba2.html","4d9132c15d48ec3f2a94621490b55447"],["/posts/92d0de5b.html","e9731d6c0d039554e71b289313c2eb31"],["/posts/9e3d6f34.html","cd7f0a7544633ddb8dde0a0a6fccdcee"],["/posts/a25a408.html","02ee05d8da50898507cb82ee3124adb0"],["/posts/a6b15897.html","7783178a115e80b1dc2fe71a54584055"],["/posts/a9867134.html","56c57122540747cdb660a4d3297514f0"],["/posts/aa351366.html","77765de31c0745627f73847316f00181"],["/posts/b42f7f50.html","3c422af03bef852c1c7ecfc2050df420"],["/posts/b492def1.html","d7d54b71a3eb818300eadb5baf9bc149"],["/posts/cca6755e.html","4c549127558f439ca419f89a1fd7be06"],["/posts/cf1cd846.html","0878861e6cf58aa96aa3367bf1ae9774"],["/posts/d6a434b9.html","e5efe2c4d6523ef0190ccd50bcb01938"],["/posts/ecaa32e3.html","7c96c2f2ef45e6dfbe12a33f71b91e73"],["/posts/ed8ba887.html","03d5718ea9e26312bc7bfc4365389028"],["/posts/edab46fe.html","63956dc4a8daf79165e612c1dc35af94"],["/posts/edd0080.html","40caa89a39664ab0520ddea8928fbc2a"],["/posts/f2f795cc.html","3cd773da533ae734d74d24ff93168a0e"],["/posts/f7c947df.html","3a01057273a05f7d2da4e60d2eacee03"],["/posts/f7d3a65a.html","cdc6d48f5014ec1f5a63356194ce600d"],["/posts/f82b2580.html","1226816f6104a1058565e352a650be53"],["/posts/fac97174.html","af40c3f775ac90dbe91e3a03b574f539"],["/posts/facab7a2.html","f82fa255046440186e37f2ccca1f4862"],["/posts/fdab9a5f.html","ed2c0b489dbc83c7c41df4a5fa2ae479"],["/posts/fffd9e73.html","ee2eee1b3c471e9e1e175e758acbfcae"],["/posts/undefined.html","ddd02064df49c5fc208f6bcc5f5bee01"],["/sw-register.js","5d936df3cc425f755b472c37579456f4"],["/tags/Git/index.html","2d211ceecd39cf7623bc79fbcf216c08"],["/tags/IDEA的基本使用/index.html","383d5bdec854e076f2b7036a3059311e"],["/tags/JavaSE/index.html","0ac493d1e951949ea8ce3ff82336c23e"],["/tags/Java基础/index.html","90cd231591e7504fa0fd2c1dad98880b"],["/tags/Java课程作业/index.html","32001761aa68f8d6ab5b4522f7423c6b"],["/tags/Maven/index.html","e370159aaae973732f5a88dd29699f8f"],["/tags/MyBatis/index.html","c93762308ada45f0de43a00fb2f5051e"],["/tags/Mysql基础/index.html","99bbbf4527c0956377ccae3dfad378ba"],["/tags/Redis基础/index.html","a1bf8270d53290b8c2208d5261b54b39"],["/tags/Redis实战/index.html","e7eca46dc152c568f889a7c49a1ae321"],["/tags/SpringBoot/index.html","f2f541d81479861fb4d984b39796c44a"],["/tags/SpringBoot项目/index.html","fc9b3e43c2852363fb0e9315cf32d002"],["/tags/Spring整合系列/index.html","432fc96f2217018dec2d710360b7788c"],["/tags/index.html","c54f7d9255504386a0fe620330250373"],["/tags/redis秒杀业务/index.html","cfe34f971a7c5eb272b673d028f4ab02"],["/tags/响应式Web/index.html","8c6c9e669a6117a6d4e19a4cd5f3c711"],["/tags/我在人间凑数的日子/index.html","d5fb7e06f1376b15dd876a4ef1716a40"],["/tags/操作系统/index.html","2ff1a47f536c0e5a25c099d56a577f26"],["/tags/数据结构作业/index.html","edaccbcb46e4ad3e6f02fe85776e0688"],["/tags/碎碎念/index.html","e4d5286234e9a2ca58e6b12560f36e68"],["/tags/编程和环境配置/index.html","b2a95bf4b54c558819657482cf6c8525"]];
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
