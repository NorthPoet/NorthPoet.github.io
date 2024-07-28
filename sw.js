/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","04f9720abbc66d9f3bfd209d0efd7d82"],["/about/index.html","38326496718eb7cb17d59907d02d943d"],["/archives/2023/11/index.html","2e18d81e9cb4b226b35040d893aa6ef8"],["/archives/2023/11/page/2/index.html","6b71fdde701e85b1def12b74be5b175e"],["/archives/2023/11/page/3/index.html","c3bea9c50f6db49478652f29fcca9741"],["/archives/2023/12/index.html","f14c5d63b93526efd87f3dff1d5b456a"],["/archives/2023/index.html","25a911c00e2b76a7a685a5f06830758b"],["/archives/2023/page/2/index.html","9417d3a531101d852dd1962ba4dd27d4"],["/archives/2023/page/3/index.html","98d8a2aa4478bb41fe06d52e80691f09"],["/archives/2024/07/index.html","dfaaa2d396526e753c69ee4d0a14a8b3"],["/archives/2024/07/page/2/index.html","8bf392bfd337d2fe42078b773b44101b"],["/archives/2024/index.html","963a8bf6e8e9bf4c6b1e5a115d9d7463"],["/archives/2024/page/2/index.html","e746e21bbb13200e1bb2eb2a556f6047"],["/archives/index.html","9474e5f10954a77f104298cc6402fc40"],["/archives/page/2/index.html","356ef9ed0f52875412aeb65c81aac02c"],["/archives/page/3/index.html","b975f70a95ab2ff21cbebbd255e46189"],["/archives/page/4/index.html","9ca8d3eef8285bdae6018909cd112ab0"],["/archives/page/5/index.html","0c35c0c030391f572ce4257c1a45c1ee"],["/categories/Java后端/index.html","e88341020b4bd7f76dc8f8448df7b76d"],["/categories/Java后端/page/2/index.html","6c28c60e54d4690b8d906f42acdd1c72"],["/categories/Java后端/page/3/index.html","b72d0cd7603ccebe9f44cdf37c3d0557"],["/categories/Java后端/page/4/index.html","4967fd2a0438aa4dcee97089e9761153"],["/categories/index.html","ade3520032922e29e365d32bb45530fa"],["/categories/友人帐/index.html","97ee89c9b2f6fa8246f0d203ee46614f"],["/categories/版本控制/index.html","a6f218dc0d18fbaef007e155c3cda4af"],["/categories/考研408/index.html","4362a52de6f7d89e2fd6c12605105e7c"],["/categories/读书笔记/index.html","6ea8bb6b3b862945b561095ce2cf129e"],["/categories/软件工程/index.html","3af99ce452a37eb5b8ad37e1669fe3d2"],["/chat/index.html","dd8b2003311e118b3ec3f1a2047139ea"],["/comments/index.html","82b99c1938f79e8bb1672efa63ffee68"],["/css/custom.css","03dfd183766909e4e62c826f3424b2e0"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","9841d21bfffa723576625615254ec7ec"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","d94dfb80bbecb568a2620c9d533416a0"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5daaaebf796bd8dab2155dfa1e29bd9f"],["/page/3/index.html","cd72d48f22933d02b0603c6ba67f5839"],["/page/4/index.html","d89c95ce93ba60179e2c414f77830e65"],["/posts/18bf100b.html","2677d1f4a5767460d7fea7a014658699"],["/posts/1fcb7e57.html","629c3a4a7cd96d951f907bc2b5cc0bb9"],["/posts/254393f0.html","11092e35ff9ea8820f952bbb398ae15c"],["/posts/28b3fa6.html","217850449b453b027002829e62cfad02"],["/posts/29f0725f.html","3c927316d77c64366db93e4b3d155e0d"],["/posts/31c36041.html","f5eac126e6e5ba512dba2c60df5e2bee"],["/posts/3513a7dc.html","31df437075fb8311217d261a770ac03b"],["/posts/3e69d26.html","3f1570c6425b962d01a2aff9e91423de"],["/posts/417de2f1.html","9e125a794128c0d972d17873523e6427"],["/posts/458f2701.html","0ff7ddf2d447bb03ed7116ca3a6c6f38"],["/posts/4e6d3c3b.html","2df259ad2ececc07d4bd425e09540707"],["/posts/51361b40.html","6e977021baed6d8517cb00b75c0cb5e6"],["/posts/5413be0e.html","b6cd588837590303739a7f7d2ad282d1"],["/posts/5596f2.html","1e9f58d47ef8b8f07ea005f4d4fa9537"],["/posts/5c81b531.html","1f46f2f5972ae0e0cd8009f376625c09"],["/posts/629aaf98.html","2c1bafaf5c8d61c3593f08200e12893c"],["/posts/65c29e.html","05acf74a854608ba2d581a06d0b37b7b"],["/posts/7105be24.html","7fb186fbea0aa7afc6244048ed3e1cd9"],["/posts/750cb0cc.html","3460d8ba99d3ea76a9e18569c3360ead"],["/posts/76897b5c.html","0c3ac0276f50b88ffd7ec0e8b00cc698"],["/posts/852e85aa.html","26f24c8301b7fffb3ae78b85f499a122"],["/posts/8712b9be.html","45f47ea9fce5001f63379bf93d47c558"],["/posts/8e1cab8e.html","d4091f1b573fc07f5c704539410d291e"],["/posts/8ebfad52.html","260905ff643a8d7631785a19197a2856"],["/posts/8fd19ba2.html","ef73004be7905cac6cf8ea1f9b01f6b3"],["/posts/92d0de5b.html","5ab12ba9801aaef8fd307575a66612c6"],["/posts/9e3d6f34.html","31969aa582683f6bae4f21b246770df0"],["/posts/a25a408.html","2c8eb8cbc85de3e1e4d3e256dbd4592a"],["/posts/a6b15897.html","ca3181ef3f4fb0809cdeb4f5d8b7f264"],["/posts/a9867134.html","831dc292f4681ed522dfceb009c0b6ff"],["/posts/aa351366.html","72b7f21517ccb7f0e6c58e06bdc3abea"],["/posts/b42f7f50.html","e53bad12e613a2e20f5f4cdd1ac91715"],["/posts/b492def1.html","1261acbce41c7ff386876dc259175e38"],["/posts/cca6755e.html","3a04e5fa7c07887a258d2dd5e37d3761"],["/posts/cf1cd846.html","5861fee3429dac94faccf4b159b67818"],["/posts/d6a434b9.html","3790258079e7e4cdaa70e2f4da700a4d"],["/posts/ecaa32e3.html","0dc2686d15727bc1709b7718235772b0"],["/posts/ed8ba887.html","f5f2bea488f23cbf09d1b9e31abc30b4"],["/posts/edab46fe.html","25b0d1b202d4d1380f259f2e5d374d69"],["/posts/edd0080.html","95771d0689ed4649f307b8a29d2c1a85"],["/posts/f2f795cc.html","091e4536e10cf4e5608530fd5e3a8d73"],["/posts/f7c947df.html","1896205a45f38d55aad8922302efc841"],["/posts/f7d3a65a.html","4ee2165c2f6e63da9c3517b884082675"],["/posts/f82b2580.html","8e10b6063cb7dfe32f08f6a7fbdafa8f"],["/posts/fac97174.html","ff99e0a1b202dd41950982370156ee88"],["/posts/facab7a2.html","0d47296c55b9c1a0e7a6dad17a0f430b"],["/posts/fdab9a5f.html","7768cc17bbd941daa46a1b6dc6129c35"],["/posts/fffd9e73.html","6ec473b0904298b2aad51975bf884c81"],["/sw-register.js","39035334fc11376552428eda680589d3"],["/tags/Git/index.html","06b0bf1cf7b36e77416ffd2190b01509"],["/tags/IDEA的基本使用/index.html","81d4a3d0366cd953e8c62aec6f396448"],["/tags/JavaSE/index.html","6010b21562006992711cd554907518f6"],["/tags/Java基础/index.html","04b0cfddb95f6a6bc676c87676d7d854"],["/tags/Java课程作业/index.html","a54a544a43dda8e952fa8a2e038d8abf"],["/tags/Maven/index.html","4b98a984d930caa895d0f1ec54623a72"],["/tags/MyBatis/index.html","095764bc0fe01f54340cd3a5cd52894d"],["/tags/Mysql基础/index.html","be02f128fec74056470d2b72568f3138"],["/tags/Redis基础/index.html","9bf842e1a1aeeab3b147b10db78cb553"],["/tags/Redis实战/index.html","c267e0dc951e530f4d811f9b3f5428ad"],["/tags/SpringBoot/index.html","d1723e2b73811eea4ab41462bce2521f"],["/tags/SpringBoot项目/index.html","491d08e2e781787e2c94fad78619c68b"],["/tags/Spring整合系列/index.html","91b23530ae5781938bb4906766dafb61"],["/tags/index.html","c95f21a1439015a39fd779776de9d4a0"],["/tags/redis秒杀业务/index.html","91a95c9f2869bb3bfb383b0225df8fd6"],["/tags/响应式Web/index.html","1aec1685f0930576c32de26f810cfcc6"],["/tags/我在人间凑数的日子/index.html","c5bd1a6267a8ed36b994770c02a42d17"],["/tags/操作系统/index.html","438349332d3c2c1f906457ad6f4c33fd"],["/tags/数据结构作业/index.html","544a4d7bc4083f227609b7a75e700a9d"],["/tags/编程和环境配置/index.html","0f7749b19e523f740b6335db048b432f"]];
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
