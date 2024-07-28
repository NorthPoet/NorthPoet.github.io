/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c4132c8def10d42d8c74674105e6eab4"],["/about/index.html","51f593bfd3a37f0220f5a1e5388c9e55"],["/archives/2023/11/index.html","51929c0cac2a391d9fd631e2d76f0788"],["/archives/2023/11/page/2/index.html","6fb8472859b9a818bb53c0fa21917ab3"],["/archives/2023/11/page/3/index.html","8c3f0904725bc7988fc67fa69576612f"],["/archives/2023/12/index.html","8387159b7452afdf69c17f5e62628fde"],["/archives/2023/index.html","ab6adffcb8e05ab96bd15693308f34f1"],["/archives/2023/page/2/index.html","4631766c7e48c5debb414c14244fb7e2"],["/archives/2023/page/3/index.html","40132867c06e5cd09f03e0ff89fb0183"],["/archives/2024/07/index.html","82c0bde4fa793170ee938c36b456c9c5"],["/archives/2024/07/page/2/index.html","f8cb1f5fa81347452225eeb943a2cd56"],["/archives/2024/index.html","773535fa65ac8c241348fe3f54cfe016"],["/archives/2024/page/2/index.html","4dd8da319357930c4536d18645bdfaab"],["/archives/index.html","90411dc8641bc010e64737a8b719d55c"],["/archives/page/2/index.html","5b215be9f1b7d0d534a32e30221d427c"],["/archives/page/3/index.html","6b667be53d2625ac502c823663f0897e"],["/archives/page/4/index.html","bf18dbaf67323bbcff11efde36627e7d"],["/archives/page/5/index.html","703cf76e47126cd9599eb4616db6140b"],["/categories/Java后端/index.html","0a0d98b8ec15a7248a1f47f8e11c699d"],["/categories/Java后端/page/2/index.html","3ca6de3267c8e52dc94dd7201f42f092"],["/categories/Java后端/page/3/index.html","bba7244e3ac99e057b89c7c1568ab895"],["/categories/Java后端/page/4/index.html","3f0d9b45b3e26ed34910ec6d68433076"],["/categories/index.html","f141db7dd3c43fdf9a09dd1bec939aea"],["/categories/友人帐/index.html","d0553ef2aeba6cd3d4bc55840e1df52b"],["/categories/版本控制/index.html","7624f54790c0af65c76f5c0a39b9f216"],["/categories/考研408/index.html","bd4be0fc055f475878c15c99c9111c10"],["/categories/读书笔记/index.html","bc95104ec5565075b5fd9dc6b3271114"],["/categories/软件工程/index.html","e07ba1f93e941607c4e863fbaef0ec52"],["/chat/index.html","57a86aea97b48cc1dc85ff1127acac56"],["/comments/index.html","0cf2bf45f2527c55cba78f65812444fd"],["/css/custom.css","8838a30e726396c9147ec6bc8fb8a72d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","2c5563a11fc6c5f0b2760b22eb4bbe96"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","bbd401c49cfb95aa20733272a3a4e6b0"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6ca490a8d25e73ba16b770a282fa9598"],["/page/3/index.html","cffee8d03ffaf8a12020904a0165733d"],["/page/4/index.html","696457eef5e42d5c9d86a3ba47ce0e37"],["/posts/18bf100b.html","709cb48c0318fcc686f4f97f8f6487da"],["/posts/1fcb7e57.html","2bd7d4382d4c3526bcb57cc28e0e0308"],["/posts/254393f0.html","af6e03859a0bbf69a6a1c38ccd980d3a"],["/posts/28b3fa6.html","2415e0e797bb293bbf1f45344f1cb121"],["/posts/29f0725f.html","4d64687bdd399b7fea6e73817e9f752f"],["/posts/31c36041.html","c625935c7bf56818f9d4bb43697ddcd5"],["/posts/3513a7dc.html","8c382dbddfefc5e64a4d47c395a5f216"],["/posts/3e69d26.html","c5ccd7124874344bd9085bebb9f45334"],["/posts/417de2f1.html","436f0bc3ee3bc58347f69c1d750170a7"],["/posts/458f2701.html","a6d0ff0ae5ddc0e3f113928804d53087"],["/posts/4e6d3c3b.html","3f7406567aeb11d85320dc4fbe814dbf"],["/posts/51361b40.html","1d2e434bd97129a0bb9adcaaecccc3b8"],["/posts/5413be0e.html","7fc1cc2c4dcacdef736308b77c959b5a"],["/posts/5596f2.html","4544a211e378eb2062f1b5b0733941a9"],["/posts/5c81b531.html","6824d0163146e221d9281093f881f312"],["/posts/629aaf98.html","8f61695b4f5a9b455e6ef4d761944fa1"],["/posts/65c29e.html","66d51231ca62fca1454e89f71e0b6365"],["/posts/7105be24.html","e4a28c851bc83c04782ef5c9480128eb"],["/posts/750cb0cc.html","2d790fb53fa79c49587e3321790eeec9"],["/posts/76897b5c.html","3f091ca12e9ce3aea6f08078338bbb32"],["/posts/852e85aa.html","cbe8465cc1c9dab6fd5e2e5579b39e4e"],["/posts/8712b9be.html","1979f845a6e8831ac6d1e017d5aa867d"],["/posts/8e1cab8e.html","a21168cab0793f7df482b05cfd7402e7"],["/posts/8ebfad52.html","9ec1ce24664d1638d762963beb17887e"],["/posts/8fd19ba2.html","e424a3d3714571acdf72907f332b78a2"],["/posts/92d0de5b.html","e6705581aadfd5850e812f54ccc9d707"],["/posts/9e3d6f34.html","ebeaeef8cb0aec4668dabc130fef1508"],["/posts/a25a408.html","91d4578b60d2b188ac1244552ac035b2"],["/posts/a6b15897.html","64dfbc57b18047be0db9342961709108"],["/posts/a9867134.html","1cf6f6032aeea63658db5dcbfe27dd0c"],["/posts/aa351366.html","ebc4beb2c4d3ddf3e99fb3c9e1aaca07"],["/posts/b42f7f50.html","f39a84325c7f4a56ecf72d0fea7444fb"],["/posts/b492def1.html","4431cc31850d7e766995fe10d2c09d12"],["/posts/cca6755e.html","2a7511760867c9d3406ed349e2e3e3c2"],["/posts/cf1cd846.html","b8676a07e412f889e34d2a2db283455e"],["/posts/d6a434b9.html","5cad3e5ea4dba934dff72e2823be72e5"],["/posts/ecaa32e3.html","80646128e3f0076de3110a311a52fbc4"],["/posts/ed8ba887.html","31a994a15f1bdfc5d36b4027eefbbebc"],["/posts/edab46fe.html","b2a5e7247e571b4d97673351e38f282e"],["/posts/edd0080.html","4949a82d76c2d14a586ba139f6665506"],["/posts/f2f795cc.html","0bbb251c4ebd6d59a67a23150150ac5a"],["/posts/f7c947df.html","ee95945150b59d4bee7afe25d116a197"],["/posts/f7d3a65a.html","a71b93c4020a12c9191061fd4b472187"],["/posts/f82b2580.html","672448a16ad5c9ba267eabdc7d43bdc3"],["/posts/fac97174.html","51251e7d0a1627b159c366bf46d9f70a"],["/posts/facab7a2.html","d4ed82b6132e9760b2929333fa520bb0"],["/posts/fdab9a5f.html","a93b4a8917286ecf76c29af94ccb9792"],["/posts/fffd9e73.html","e8f77805fd91d78cf5ae083d98b6ef46"],["/sw-register.js","325d089c443b6e4f952b88a0bdbc8110"],["/tags/Git/index.html","766ab85f4970d76c6983a7e36127cbd1"],["/tags/IDEA的基本使用/index.html","f574d1599915dc9b10aaa5c363d09c89"],["/tags/JavaSE/index.html","a9ccdedf884a83026b0920032f0c944d"],["/tags/Java基础/index.html","0948058c2fde2d65c50a6a262a6e35c8"],["/tags/Java课程作业/index.html","67be8bdcf413026cfef4a22ac166ea53"],["/tags/Maven/index.html","c86e4752871f996580807ee1a892ddf2"],["/tags/MyBatis/index.html","bbc61199a3e9b30f9105881daf2a2b56"],["/tags/Mysql基础/index.html","e7e8641d363e4320a56291d7e8df4854"],["/tags/Redis基础/index.html","b528c30ef6e8445f7a20d3947f0288f1"],["/tags/Redis实战/index.html","a9ddc4bc45c262527636990638ef5fa4"],["/tags/SpringBoot/index.html","d62c64c743eef0f41ee493ddd9261652"],["/tags/SpringBoot项目/index.html","fca546f38fa4504c6a741a15bcbdbc69"],["/tags/Spring整合系列/index.html","ec3913141fea542892c38f9a30620920"],["/tags/index.html","7d1a497a3ec603577efc2e979b8aca83"],["/tags/redis秒杀业务/index.html","f1ac2c7ca4331b03149c881738a81f91"],["/tags/响应式Web/index.html","9eab9859245aa52477f4cf6e11c2b670"],["/tags/我在人间凑数的日子/index.html","9f7a56e371439763deab52408594a5de"],["/tags/操作系统/index.html","347d5a396570398791bdbc2b69f111f2"],["/tags/数据结构作业/index.html","e52957b347cad2dfb00f17b609f539eb"],["/tags/编程和环境配置/index.html","d08515d3dabc242837e664d36360a065"]];
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
