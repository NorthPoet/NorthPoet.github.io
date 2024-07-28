/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3c4d0aba27e37b57b902fa484dbd51cc"],["/about/index.html","78ff8b328203b9c2738ffa54ab362335"],["/archives/2023/11/index.html","d4a7def0de67df8ddbd943d5cd4506cd"],["/archives/2023/11/page/2/index.html","3aa3287ae7df98ab6d2c01c58e10b915"],["/archives/2023/11/page/3/index.html","947084e9dbc689b69b7fba7ce6c5cf0a"],["/archives/2023/12/index.html","96469b686ac18c8eb9812d72b8316333"],["/archives/2023/index.html","b50ea3ddf874d836fb01503f3d1ec69b"],["/archives/2023/page/2/index.html","d3a6ca7e61c212e9508bc2d6cd134f70"],["/archives/2023/page/3/index.html","d92bafb54fd5967ab8d1484e86c32153"],["/archives/2024/07/index.html","19d2762e06d7e1a8be1238536c7a7e48"],["/archives/2024/07/page/2/index.html","3f8a4a05f45e43758fa329c03a03ae74"],["/archives/2024/07/page/3/index.html","3d003f1bf2640f48b6dd3365ffaeb7b0"],["/archives/2024/index.html","e96ba109ef8156adeb02708beee9ed81"],["/archives/2024/page/2/index.html","ff782c387881000abc3cf720dacd2973"],["/archives/2024/page/3/index.html","0135adf6a9b88a853de78389c8e4e9f2"],["/archives/index.html","e6525c930f78bfd4992ec3a2ba45edee"],["/archives/page/2/index.html","acce14c3a582d6ef241538d5eddd1772"],["/archives/page/3/index.html","f62e7e13a767c67ba69e4ee05f904fd6"],["/archives/page/4/index.html","0812c888b2e9a420c51374f1a1a63beb"],["/archives/page/5/index.html","3c1d75f3c8dec096a61c0c9b3742f9eb"],["/categories/Java后端/index.html","fa61d524fa13da5d8a7ef6409f71228a"],["/categories/Java后端/page/2/index.html","b5ac2f8f7078c5fba7bc5e945a97e36e"],["/categories/Java后端/page/3/index.html","7cbcdd83411be39846c0959f0fbad94c"],["/categories/Java后端/page/4/index.html","176462c83a407a2404a8bb6be22292b5"],["/categories/index.html","14c03f93e6e69fc581b453c145fe4975"],["/categories/友人帐/index.html","2e714077397e869ef6362508fd473058"],["/categories/版本控制/index.html","1a4c73bbf3500953810dd5b3c0ef187f"],["/categories/考研408/index.html","2666e462b7b42d04b9ebb759417467d2"],["/categories/读书笔记/index.html","df9a5fafa45d4cc75eb50a0449fe6598"],["/categories/软件工程/index.html","42183d604d39bf0a40273c8a7997e227"],["/chat/index.html","6cdf1106afeebb229837ab383fe41c9f"],["/comments/index.html","2d9761bbead231e8b5309b5050351fe8"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","6a7d0874e6330a039019b3dca50d2a75"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a7fdf9ddb8dfbfdc73858b7d9cb8c682"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e4ef797bc0956420c6d602e6067d45e0"],["/page/3/index.html","d919deab24e0762112e9c327eaf5e6c0"],["/page/4/index.html","c447af2973246b91906b020df47bd521"],["/page/5/index.html","dfc2cfc37151fea39b6b5d316202f90b"],["/posts/18bf100b.html","b02a39b136c21f4f9564c69fd5c5e3ac"],["/posts/1fcb7e57.html","967e7f062bc6fea304b50c71a3cbab18"],["/posts/254393f0.html","2998a00d0aaa6f6c8aef5ff4b8a3bd39"],["/posts/28b3fa6.html","7cc0274c900f0aba4e2c686218a82fd6"],["/posts/29f0725f.html","d9c7cb413585e202d1c2f3fa84e7c6fb"],["/posts/31c36041.html","bbfab032affa75a084f2628293b842aa"],["/posts/3513a7dc.html","c1ae7a43a8c08ea144b746dd3c1022c2"],["/posts/3e69d26.html","7e770f0079b360787a9f82bde92d226b"],["/posts/417de2f1.html","0f74f04d7fe7e7d1f45b47a540aef834"],["/posts/458f2701.html","3fa95b3947dd850e45f58c4fabc2a182"],["/posts/4e6d3c3b.html","d58af8e18067498a57cd418f8df02fdf"],["/posts/51361b40.html","e69c842567a73fe9d3c20b4cdf363858"],["/posts/5413be0e.html","47993a3f38e4a026bc89adc7c1875ed5"],["/posts/5596f2.html","2409bcb91430ef8640097ede49d9f900"],["/posts/5c81b531.html","48f28c50bbf61634e1f0aa7db36be7fa"],["/posts/629aaf98.html","916dc9b25e91d98d8a276c70012c672b"],["/posts/65c29e.html","6fcfd8ae6ae9998f92fb4896be730b6b"],["/posts/7105be24.html","db36fedf88022ad633b3c74edd28099c"],["/posts/750cb0cc.html","0628663ed46c923239530073ac4dc22d"],["/posts/76897b5c.html","4983f3c71e6476c31925e117e703a898"],["/posts/852e85aa.html","880e858672186a751be592e0c59b0342"],["/posts/8712b9be.html","d9a1eb5348529ecf5ff91c02168cf561"],["/posts/8e1cab8e.html","8171e873932fae2d7e453491d3660d14"],["/posts/8ebfad52.html","a6474e0babe819cbae4f22f0887e22e1"],["/posts/8fd19ba2.html","4d9132c15d48ec3f2a94621490b55447"],["/posts/92d0de5b.html","e9731d6c0d039554e71b289313c2eb31"],["/posts/9e3d6f34.html","cd7f0a7544633ddb8dde0a0a6fccdcee"],["/posts/a25a408.html","02ee05d8da50898507cb82ee3124adb0"],["/posts/a6b15897.html","7783178a115e80b1dc2fe71a54584055"],["/posts/a9867134.html","a4dd34d20d5b071ce13fbb6f6e6a2a3d"],["/posts/aa351366.html","ce22ef1ddcd91301b125f34263e698ea"],["/posts/b42f7f50.html","3c422af03bef852c1c7ecfc2050df420"],["/posts/b492def1.html","0236bfdca0f3d2f28447b3541cdb2a01"],["/posts/cca6755e.html","59e1830d56c1b1998cce9e273ef47d3b"],["/posts/cf1cd846.html","0878861e6cf58aa96aa3367bf1ae9774"],["/posts/d6a434b9.html","e5efe2c4d6523ef0190ccd50bcb01938"],["/posts/ecaa32e3.html","7c96c2f2ef45e6dfbe12a33f71b91e73"],["/posts/ed8ba887.html","03d5718ea9e26312bc7bfc4365389028"],["/posts/edab46fe.html","63956dc4a8daf79165e612c1dc35af94"],["/posts/edd0080.html","15e8f7c5fc9906deaf5006d5ab517e70"],["/posts/f2f795cc.html","a00456560c5f440d15cadaf06f337c8f"],["/posts/f7c947df.html","9038efa41d45adc8a72aa9822fce6104"],["/posts/f7d3a65a.html","cdc6d48f5014ec1f5a63356194ce600d"],["/posts/f82b2580.html","1226816f6104a1058565e352a650be53"],["/posts/fac97174.html","af40c3f775ac90dbe91e3a03b574f539"],["/posts/facab7a2.html","f1a0edd4004c12339a9fe137b2777844"],["/posts/fdab9a5f.html","ed2c0b489dbc83c7c41df4a5fa2ae479"],["/posts/fffd9e73.html","ee2eee1b3c471e9e1e175e758acbfcae"],["/posts/undefined.html","ddd02064df49c5fc208f6bcc5f5bee01"],["/sw-register.js","5fd2204d6ff92537db2ed7c6f33ee4e6"],["/tags/Git/index.html","28f5232bcd1793b17dbb585ea2f52b98"],["/tags/IDEA的基本使用/index.html","af3f37661eae31bd9acc7474ad3f15c6"],["/tags/JavaSE/index.html","74af596f2842200d2ba2d8759582cc88"],["/tags/Java基础/index.html","69590fc0bd1fa38b37d8250d43d01197"],["/tags/Java课程作业/index.html","2b54d03b0a84fe8ffecb254a66952fb3"],["/tags/Maven/index.html","c03c2ad42999a6ffa2e1566e80526e04"],["/tags/MyBatis/index.html","78374a31657a14e8c3e31e1cdaf3a4be"],["/tags/Mysql基础/index.html","c2a37c9180fd93f5d47bad644baf14ab"],["/tags/Redis基础/index.html","811e1dda94e7626caa65b9df3e829922"],["/tags/Redis实战/index.html","9434784b8ebf33d3925edefa4cd7b70d"],["/tags/SpringBoot/index.html","266125687c1d93b2b5958629bfb6121f"],["/tags/SpringBoot项目/index.html","934128010150b93ea18246a2a4f49cf2"],["/tags/Spring整合系列/index.html","2d339f95929a2d27d5a423554e54c87e"],["/tags/index.html","43f821a2928b96566b2c53dd0d88d8d5"],["/tags/redis秒杀业务/index.html","dbe15f3a5aa32c221517d58457137cd1"],["/tags/响应式Web/index.html","be4595f0bc0d246ef3d937126e4f3dbe"],["/tags/我在人间凑数的日子/index.html","15870b9739289091a824f4402e26cab0"],["/tags/操作系统/index.html","7aa34ad49f8b8a47adf56dbf9b937c9a"],["/tags/数据结构作业/index.html","b7e0e3305448af297340675f75d246bf"],["/tags/碎碎念/index.html","2be59ae42cc33382b2d758fd2cb17cd5"],["/tags/编程和环境配置/index.html","d052945b4cce9a18d0cad3b34db95a11"]];
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
