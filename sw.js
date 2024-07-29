/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","af976c58cfc9eeadce89ef9edff25065"],["/about/index.html","8170c65a3452cc52e1601ccffb3874d9"],["/archives/2023/11/index.html","1353ec7762efb4746eb1be7d9449ffb4"],["/archives/2023/11/page/2/index.html","b6b4ec4de652f4ca07efad88534eb2e3"],["/archives/2023/11/page/3/index.html","06d5b5acef857b29add6afb68dca9620"],["/archives/2023/12/index.html","a6e4a05da95840127e02319968d90172"],["/archives/2023/index.html","ebaa7ed78b2eb4f3d5bf3a8a3f69410e"],["/archives/2023/page/2/index.html","3c05ead65789c334a72f078cfa152891"],["/archives/2023/page/3/index.html","0c6f76b6ead9962678dd749b4cb774df"],["/archives/2024/07/index.html","385d3c73d97a6385b17abdeee718aad5"],["/archives/2024/07/page/2/index.html","a6740bbcf3f5b01ee121be71d1b1c144"],["/archives/2024/07/page/3/index.html","ed38669ea269491853fb6d9ca725bbe9"],["/archives/2024/index.html","12900b7e7caf1fad05e3b3bfdc50cc95"],["/archives/2024/page/2/index.html","4d923b4b5ad530d03b9d65d64bd02f4b"],["/archives/2024/page/3/index.html","9286451538d2dd3ddc67d5c06f31daa2"],["/archives/index.html","ef9df43269589750adfebae4d9e40508"],["/archives/page/2/index.html","e6f5383dcd2a21cfd8d810261d41583f"],["/archives/page/3/index.html","8b596315e295dc8a9fbcd3234f1e0e3e"],["/archives/page/4/index.html","2dc968907a2db1a087c88f74d2bf7276"],["/archives/page/5/index.html","c71c4ce789c59e6e26242a6831ddc4bb"],["/categories/Java后端/index.html","c8f9731a1c0bb577d9d84d72f7f0fe72"],["/categories/Java后端/page/2/index.html","50a937e850e20f7a06c786f873c6f83f"],["/categories/Java后端/page/3/index.html","406ce90b98fd08461958531181a803c9"],["/categories/Java后端/page/4/index.html","b23726d6084581ee275cd0c4e353027f"],["/categories/index.html","7fabae46a2e128de2c05fcb8430782b9"],["/categories/友人帐/index.html","36311af17fd9963e4b4a98e33814c41d"],["/categories/思源笔记/index.html","9f476aee2390b851e795206d976bfb54"],["/categories/版本控制/index.html","1c3797b17fbd3383f388e604e7050f65"],["/categories/考研408/index.html","ad04a437d04037539a9af0936211569a"],["/categories/读书笔记/index.html","8e8674b05c3564f3ca64be02952fa193"],["/categories/软件工程/index.html","c1a65d1d06016d331d287e4772e1e9dd"],["/chat/index.html","7d5d0fd6f45f7d08c123b4ec222850e2"],["/comments/index.html","ec39015c99a4b7b5788490d95f0d8d20"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","d0b5a96bd2bba77e9145165c642c207c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","4ba42a447772963914763f651f8f5d02"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","64347ceff8678c9f0ddc4de57e3678ae"],["/page/3/index.html","1ed9257e461936dbdcbfbcb59390abb6"],["/page/4/index.html","df4e1e5b6bba05fa1a907c23c35f2ae4"],["/page/5/index.html","f9e939056fb64f8fae4ae5cd9706b423"],["/posts/18bf100b.html","06d63dbc363a57c6b2afc7e4431ac7ab"],["/posts/1fcb7e57.html","7a894f23709cb7aebac514f12f89ccca"],["/posts/254393f0.html","bfcdf39b90e62c1201871b58d3366d36"],["/posts/28b3fa6.html","9edbd0f1d69af6f4d1c14b20965b8e95"],["/posts/29f0725f.html","4a19cd95a7142d47709480d9055c9b15"],["/posts/31c36041.html","67f58ce9cd4e31a7fc0b586b5a904832"],["/posts/3513a7dc.html","04067d9a1fa205d0497d61d65207f38b"],["/posts/3e69d26.html","abb627bf29af1a2b55c77983d46029df"],["/posts/417de2f1.html","3e97de9e090aa76074b507e9544843a0"],["/posts/442fdc66.html","728397d45e11a657f7efd296485f5b8c"],["/posts/458f2701.html","99d2cbb8b0774b0e65ecb16079759335"],["/posts/4e6d3c3b.html","0c5a5d88ac27a1d45f6682eedc04f2cb"],["/posts/51361b40.html","991d7b57f7bf406c56e1a647ee249733"],["/posts/5413be0e.html","2ddd1811d4ba685bcb3c991db375c26f"],["/posts/5596f2.html","31f85d16388f24c368b445bb46c96958"],["/posts/5c81b531.html","0f1d0ea53114a5be682a63350dfc0da0"],["/posts/629aaf98.html","17470f72d0baa2ca55890370fe7d9063"],["/posts/65c29e.html","59ac6217124de42aa54b9bd22bccd1eb"],["/posts/7105be24.html","833c89f20a920640f0c6b1ca7e5b5624"],["/posts/750cb0cc.html","2712218190c6de9c94f661debb3dd59d"],["/posts/76897b5c.html","cad1a464832277641e95c8b0a129a6ea"],["/posts/852e85aa.html","4b5a18e165403a41852ac52c24823004"],["/posts/8712b9be.html","8ff8a821e42bfa859820368a2dc6139a"],["/posts/8e1cab8e.html","50415a4b99e33fbfb447352faab72892"],["/posts/8ebfad52.html","275f87117653173a36a449fe7a60941e"],["/posts/8fd19ba2.html","222183c546eda58ccc727d4023f79e55"],["/posts/92d0de5b.html","62b89df408855be0b43c395c7dd3fdb1"],["/posts/9e3d6f34.html","1187c22972d2d644af6876f70bd13e4d"],["/posts/a0708e01.html","8ab3063e85caf40ce9556041ac2f41f7"],["/posts/a25a408.html","602e579db08cc0a4bebfe3e21447e5b3"],["/posts/a6b15897.html","1306a727174e9159878cb290306d0c56"],["/posts/a9867134.html","f0296b1b879633767d6c7732b567eadc"],["/posts/aa351366.html","c2be1485bd08449bfb05587f7a96f302"],["/posts/b42f7f50.html","75d7c475b1911e1a60bf19f578d23808"],["/posts/b492def1.html","b71f412a3137e3f8d5792da7f427b597"],["/posts/cca6755e.html","59b761da6ea79e3115f33784710d638c"],["/posts/cf1cd846.html","5fc500f29380f86d5d033808af368395"],["/posts/d6a434b9.html","a3d09d02f9c507866cb6270b0b32b758"],["/posts/ecaa32e3.html","e76b93af2bb449e8d8aec9c1ff1d9917"],["/posts/ed8ba887.html","b1604e5118f85074ef76b41a80d94d0c"],["/posts/edab46fe.html","a7089c501f3018796a56fa58005c26dc"],["/posts/edd0080.html","6636d1cf96f17ec9c7c2a38a2cb559af"],["/posts/f2f795cc.html","00593c19f7b7f18063e50d46d6bb222f"],["/posts/f7c947df.html","a2f9c9dd91cccc795fdd00076782d226"],["/posts/f7d3a65a.html","e688baae59b57311770337ba82426331"],["/posts/f82b2580.html","fd0d77c7e55c91d2566688e8cf57f38c"],["/posts/fac97174.html","e6fdd4d8a94c6086539a1f5569855072"],["/posts/facab7a2.html","604f361e77f4e2d8e330012242799f65"],["/posts/fdab9a5f.html","9337c9f1f6da4896f41c706d6a014f2e"],["/posts/fffd9e73.html","3bc42457048f25a28ed0f3879339859c"],["/sw-register.js","58d21157201bc19d0c7d9a084b05fb30"],["/tags/Git/index.html","20e5a3c02dc5dd925d8a54092dedf114"],["/tags/IDEA的基本使用/index.html","0fbdf539a2630b7d349e64aa6251802e"],["/tags/JavaSE/index.html","80ea2c0abd4ba5de2b91c833174b877c"],["/tags/Java基础/index.html","74e3a83b9a8ab814e2b4bdbf505f9886"],["/tags/Java课程作业/index.html","ed453d2ee3dcc39f16953bf2da824c1a"],["/tags/Maven/index.html","bf95622ac822e3ca2b3e340fe8e2505b"],["/tags/MyBatis/index.html","5b8e0baabc03ae89d833cd55d5448a0b"],["/tags/Mysql基础/index.html","e1f1bf39a37a02a9845bcb5a85220dd0"],["/tags/Redis基础/index.html","d0f6ba5d82882efc49be54b93399a3e6"],["/tags/Redis实战/index.html","8f578896d460b4bccae7d1f13832b690"],["/tags/SpringBoot/index.html","06e8fcca3e3eff353327e79d78458c8e"],["/tags/SpringBoot项目/index.html","cd7181ccd528eb3ae6a48f26cda68b58"],["/tags/Spring整合系列/index.html","94402e0f105394a1905de1e1f7fac21f"],["/tags/index.html","d95ed1bb2417a2185bc35727d2f2d6e5"],["/tags/redis秒杀业务/index.html","a2ffb4ef573ac4e41c1140df78ab7e36"],["/tags/响应式Web/index.html","9cef1ac2223af02f10422e0d6b2b0040"],["/tags/思源笔记相关CSS/index.html","3e3b1c6da1416773085f79b9586d5aa6"],["/tags/我在人间凑数的日子/index.html","2e2380bbc67f91a08d025fb1417d807a"],["/tags/操作系统/index.html","5c2c12b0803950a0c7bd1d30b35572e5"],["/tags/数据结构作业/index.html","a3be8baf93729f287f095b6fb46249ed"],["/tags/碎碎念/index.html","38f4d4e2972239bae7e5b62c4cf9a43c"],["/tags/编程和环境配置/index.html","2ec8a171f5e73bfede69329cc94e04af"]];
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
