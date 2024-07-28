/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2d39bf391e3c1a1993824222f43da137"],["/about/index.html","a732393c9af8d679ab91c361f1d16833"],["/archives/2023/11/index.html","bc8ff1db813a04b8882f3c2737936898"],["/archives/2023/11/page/2/index.html","c6244364accc6672b04720a91f195876"],["/archives/2023/11/page/3/index.html","07efa87b54983b07964eee3fa9d152c9"],["/archives/2023/12/index.html","0b4727cbb1384e779412ca50a344b74d"],["/archives/2023/index.html","1569829a1aff0e8987f8e5cadbd6655b"],["/archives/2023/page/2/index.html","37edc2be0e14136ece533df79503f3ac"],["/archives/2023/page/3/index.html","a4e7ed789ad1e51049ed9d91fa8bca87"],["/archives/2024/07/index.html","0f0082d7d98bc7195989b9702256e16f"],["/archives/2024/07/page/2/index.html","b4dcf4fecae38bd81f853810a7fb399e"],["/archives/2024/07/page/3/index.html","444e285a89c5dd54545373eee193085f"],["/archives/2024/index.html","afbf6d4dceb55c1df5d2e418e40760c5"],["/archives/2024/page/2/index.html","3d5e0ff95214270eb6f894de7d368a94"],["/archives/2024/page/3/index.html","8143eddd3cf35e4b492a791858bb5f48"],["/archives/index.html","89fb9328e967340e4e216ad9a1850e2e"],["/archives/page/2/index.html","f93c80df16aa76d0b5ae50b881d9b2cf"],["/archives/page/3/index.html","6b98ea8d65688537ce768ce126b16202"],["/archives/page/4/index.html","8df9a53d83558c62b39fb57e11dfa277"],["/archives/page/5/index.html","020ae2e5b156d65bc40f1e5eb33582a3"],["/categories/Java后端/index.html","490fafb8f8898ab4bd9c56001118cf44"],["/categories/Java后端/page/2/index.html","e804ef07d3e47c4b3ea7a352ea3fd89a"],["/categories/Java后端/page/3/index.html","767b7c72933a54a19903d7b990315ec9"],["/categories/Java后端/page/4/index.html","f4de00f0e00d19140b9f10e854720360"],["/categories/index.html","ccadacd41bbce244e1c855d98f46bc18"],["/categories/友人帐/index.html","4282b2b4617d8bb7eee29ad39eb4daab"],["/categories/版本控制/index.html","6e4f5c21bca74efd5556eed0b309c24e"],["/categories/考研408/index.html","7c7fca8d5b384eef0cb8678d3f5c352a"],["/categories/读书笔记/index.html","c839f9ad824a8055b703570f75f78c0e"],["/categories/软件工程/index.html","77f7991ebd9ce8925c64a1b08ca7ee2b"],["/chat/index.html","e437bd2bed5f5e952b2642937da05a22"],["/comments/index.html","9b3a03369bdb067af8cd33ea6bde565e"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","7524b448713bf3240fcf78e7e2532b3f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","0171181b6644195844f933701f94e333"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9f0b1cb01801baee979be6415fee1c82"],["/page/3/index.html","ca7f80af843dc4d967105f1844a0e982"],["/page/4/index.html","c687ecfa75f050ae805620e4c655c5a9"],["/page/5/index.html","f469e9293d60740394f1506f9b17cbd5"],["/posts/18bf100b.html","b02a39b136c21f4f9564c69fd5c5e3ac"],["/posts/1fcb7e57.html","8b104a511c546ec116e8906ac17aac9f"],["/posts/254393f0.html","2998a00d0aaa6f6c8aef5ff4b8a3bd39"],["/posts/28b3fa6.html","4b44ed84e01816ae15eae7a94e78f170"],["/posts/29f0725f.html","8e8b70af48b20a227394cb0ad577c807"],["/posts/31c36041.html","bbfab032affa75a084f2628293b842aa"],["/posts/3513a7dc.html","c1ae7a43a8c08ea144b746dd3c1022c2"],["/posts/3e69d26.html","fb8427a8a72f9abb4c0bc4cd8a8b0c12"],["/posts/417de2f1.html","8ec7efa410ca9e2a87ade533b413d027"],["/posts/458f2701.html","3fa95b3947dd850e45f58c4fabc2a182"],["/posts/4e6d3c3b.html","148c452e958ad37b8a0974182a0915a6"],["/posts/51361b40.html","e69c842567a73fe9d3c20b4cdf363858"],["/posts/5413be0e.html","57c1c33af992cb10d4de8dd4783cc950"],["/posts/5596f2.html","2409bcb91430ef8640097ede49d9f900"],["/posts/5c81b531.html","48f28c50bbf61634e1f0aa7db36be7fa"],["/posts/629aaf98.html","aedc494647bb5e0d6e8a9085367afd29"],["/posts/65c29e.html","6fcfd8ae6ae9998f92fb4896be730b6b"],["/posts/7105be24.html","c1319eb295ce862c65867e181d8fb649"],["/posts/750cb0cc.html","f1013a9e81163fb3d6fef01f969e3447"],["/posts/76897b5c.html","87a744f5e0ffd3b44fa5cc6c602c8132"],["/posts/852e85aa.html","9aed5bed2f61f7addc205b33ddbe9cd8"],["/posts/8712b9be.html","d9a1eb5348529ecf5ff91c02168cf561"],["/posts/8e1cab8e.html","8171e873932fae2d7e453491d3660d14"],["/posts/8ebfad52.html","1061757b767b60a570bdaf0a850fed5f"],["/posts/8fd19ba2.html","4d9132c15d48ec3f2a94621490b55447"],["/posts/92d0de5b.html","e9731d6c0d039554e71b289313c2eb31"],["/posts/9e3d6f34.html","cd7f0a7544633ddb8dde0a0a6fccdcee"],["/posts/a25a408.html","02ee05d8da50898507cb82ee3124adb0"],["/posts/a6b15897.html","7783178a115e80b1dc2fe71a54584055"],["/posts/a9867134.html","0547022628d1cceb7701223e5b8375b1"],["/posts/aa351366.html","acbea9ac702bbfc6921f8cb6bb132859"],["/posts/b42f7f50.html","3c422af03bef852c1c7ecfc2050df420"],["/posts/b492def1.html","3c8a8e6da6fea42f81de3b8acbde3498"],["/posts/cca6755e.html","59e1830d56c1b1998cce9e273ef47d3b"],["/posts/cf1cd846.html","24802249099a13e0c5df6738688a117a"],["/posts/d6a434b9.html","e5efe2c4d6523ef0190ccd50bcb01938"],["/posts/ecaa32e3.html","ae48886c59fead2a64bb57f62a3e267e"],["/posts/ed8ba887.html","d8f8ae4a5799aa73a49b1f342c8a2c0f"],["/posts/edab46fe.html","813ec984ff0c6530d37bd7818b2e10cd"],["/posts/edd0080.html","9549c1756991ad328273f35802b18fe9"],["/posts/f2f795cc.html","a965df281b66c38708dd7b5219612ca0"],["/posts/f7c947df.html","f9d1891ce93d9ba5204e0c8ecb1f234c"],["/posts/f7d3a65a.html","cdc6d48f5014ec1f5a63356194ce600d"],["/posts/f82b2580.html","1226816f6104a1058565e352a650be53"],["/posts/fac97174.html","5f8596974b1d85ece000c13b4c2d9624"],["/posts/facab7a2.html","33b7e012d8838667c57abc9ff2b1a70a"],["/posts/fdab9a5f.html","77fde3d7273252e619f757706c6faee8"],["/posts/fffd9e73.html","ee2eee1b3c471e9e1e175e758acbfcae"],["/posts/undefined.html","ddd02064df49c5fc208f6bcc5f5bee01"],["/sw-register.js","486ccc682b557f29eebbdd636b52c245"],["/tags/Git/index.html","2a9024abfd257b2397b1f00ccb7adc77"],["/tags/IDEA的基本使用/index.html","04ee8bbfb051e078e53e079262572a16"],["/tags/JavaSE/index.html","1d73db28dff20c1a59b0d7fe4c9b3aba"],["/tags/Java基础/index.html","7f7baa1a4389277624fefa0bb08fd6fc"],["/tags/Java课程作业/index.html","de2bffb88696a00f25183bed8614272b"],["/tags/Maven/index.html","d6f8115eba2a1b73e59ecc49ab9c8066"],["/tags/MyBatis/index.html","0aa89b8ab3cda91a3894894008996009"],["/tags/Mysql基础/index.html","03295b83da9e12f346b363a039b265d6"],["/tags/Redis基础/index.html","2ab90cee79d5b55d615a653308fefff3"],["/tags/Redis实战/index.html","c87ca6a5b0e499fd7689122ca1afa4ae"],["/tags/SpringBoot/index.html","3736c8a4d0650e65627cd9198a5190ce"],["/tags/SpringBoot项目/index.html","e95738b44e0cbf287271ce793ca9e630"],["/tags/Spring整合系列/index.html","662c24a908ab606edd4b7a82bf4c31ef"],["/tags/index.html","3ef810469710e6ab7c11f2b49254964a"],["/tags/redis秒杀业务/index.html","11f1435e4cafb206b320b0e3a4c69fc9"],["/tags/响应式Web/index.html","7a4956308dbf9557b91de988877eb3e6"],["/tags/我在人间凑数的日子/index.html","1bf3179a1c838059a400e24fd37afb7b"],["/tags/操作系统/index.html","d4c776e7948f592939f945eb66006d40"],["/tags/数据结构作业/index.html","f7a4690b7e863da5f3d06bfb56f29772"],["/tags/碎碎念/index.html","cf2ffeb4cc35b865d40b5a247785a6f0"],["/tags/编程和环境配置/index.html","dc5f3cfcf78b505f7827b9dfed05caab"]];
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
