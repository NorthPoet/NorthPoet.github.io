/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4995d221fdf92c0165b4b97e50bdc363"],["/about/index.html","85d4ebed9a86e72809270879f36566c7"],["/archives/2023/11/index.html","404f308e59fd3b35066d8149d334bdf2"],["/archives/2023/11/page/2/index.html","185b8260259eb7802a60fdd334b76402"],["/archives/2023/11/page/3/index.html","68a85f3f7ec188cc8bdee872d35a0fb8"],["/archives/2023/12/index.html","6251c3525644e2f157354cde0f5ca17b"],["/archives/2023/index.html","d8522957b30f8d81a469c28623c3879d"],["/archives/2023/page/2/index.html","0f75e784e610821b41ea0fe3a51a3e34"],["/archives/2023/page/3/index.html","a76e564b70e532a961fe4fb7d74f502e"],["/archives/2024/07/index.html","4b9c216d9384fbedb554e1c49360fc77"],["/archives/2024/07/page/2/index.html","45578e9a6b5175ecbd24e261ba149ec7"],["/archives/2024/07/page/3/index.html","a240176658bc304d80e2cdbfeb48f7af"],["/archives/2024/index.html","a3a6126f0cc175aaeb3938de93cd7ed0"],["/archives/2024/page/2/index.html","6dd2c331c94a34543e91259f5ff906fd"],["/archives/2024/page/3/index.html","4f046986ac22bfa03d2e6384d061257b"],["/archives/index.html","50e2487ff8ab4daa0eb8de15a1862f06"],["/archives/page/2/index.html","8000e080d2ae5fe8b8ee5f48c1804cc9"],["/archives/page/3/index.html","1b93957bde9d6247ac4ddadb55a1cb7a"],["/archives/page/4/index.html","468d5039151d96f9076fe247a6b10d2d"],["/archives/page/5/index.html","95521b41ec3b89f2440fae6bee597972"],["/categories/Java后端/index.html","e815dddd23b545f945112a60755be7fa"],["/categories/Java后端/page/2/index.html","7f1487215856bce28f6a76962b90840d"],["/categories/Java后端/page/3/index.html","8fb01db7c5d0c678737ee11c24352c76"],["/categories/Java后端/page/4/index.html","1da573dfbfe082de7b1dd17e2cebc796"],["/categories/index.html","3cfd4e73369d8a5b4835a58e710d65a4"],["/categories/友人帐/index.html","c155ffe8a7bdb1c7744ca9cfdfb06773"],["/categories/版本控制/index.html","45890d6eef342f7e3149402e91da1656"],["/categories/考研408/index.html","a6b4653457e6a4187c61ee9ae3e7a154"],["/categories/读书笔记/index.html","2ecb8cbc852242070e9006b4de8cfb7d"],["/categories/软件工程/index.html","437ab578656e31ea7fbeb7d87240e3f3"],["/chat/index.html","e7d5b1d86771f38bcfc75a6d17d14e4f"],["/comments/index.html","856f9522882f532412a2dbe62a8ebe4b"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","83d658012418e1a95c65c9e89dc47209"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","b49f8ccbf28243ac4e3ea48fe2d5b098"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4779968ecf176ff5f43f68602d19fb98"],["/page/3/index.html","4ea4e34303ad76b882cfb0f497a0f3f6"],["/page/4/index.html","9c060905ad6da6bc6eb082c74be11875"],["/page/5/index.html","affc5cbd8d58a0d6be996b1bbe97ae17"],["/posts/18bf100b.html","57b5fad9718f32b3fa627d052dea06d5"],["/posts/1fcb7e57.html","457bd98a4ac9e3db87d37dd9f28da359"],["/posts/254393f0.html","bedb1b0417ddab4a2fd6598ff7b71567"],["/posts/28b3fa6.html","368cfb02d348aa94bbf9e5b9a66c1db4"],["/posts/29f0725f.html","135482454a5a842722b51a32b49d6144"],["/posts/31c36041.html","8b80dccfe6840656a08a2fa0ba518f7a"],["/posts/3513a7dc.html","2a4ccc2c6d1ac9ae627418a6b36271ba"],["/posts/3e69d26.html","ca08222775988269fc5e5d1be165402c"],["/posts/417de2f1.html","873d7de9bcc8cc7c1637a94fc0500262"],["/posts/458f2701.html","af3c08733b24850002bf996fe520e0be"],["/posts/4e6d3c3b.html","7f0a6c598c76da35ce7cfd7b7b29de95"],["/posts/51361b40.html","5666dae3dcfa9d3ea1edd114ec0ea6ff"],["/posts/5413be0e.html","d0b05237ea2758d742283c03f044209f"],["/posts/5596f2.html","fb297f12217d64c040bd5826b329a026"],["/posts/5c81b531.html","387a29c0717d50f0e492ba315e8b764e"],["/posts/629aaf98.html","8a871429ef33d122d99310cf8e91ebb8"],["/posts/65c29e.html","a4d5310121438a998d17a93b41be1d1c"],["/posts/7105be24.html","386e0c050140c8b64fdedc077f9bfbce"],["/posts/750cb0cc.html","f1013a9e81163fb3d6fef01f969e3447"],["/posts/76897b5c.html","c7426a4077e07b1a3a1db8ec9e91e49b"],["/posts/852e85aa.html","24061dd5ca03a9828c3ccb1140f952fd"],["/posts/8712b9be.html","9fbab6a696a3bc57dae27325fc5c191e"],["/posts/8e1cab8e.html","07c65c31b307ffc33d69add1423ce630"],["/posts/8ebfad52.html","db14411991e98d8750e3648f6c264e56"],["/posts/8fd19ba2.html","95ea64170fb2d5a7b2376a8d030892e3"],["/posts/92d0de5b.html","7a422b48fbab16bd997755d816123dda"],["/posts/9e3d6f34.html","b26f63b75a908504833ae86e9c988633"],["/posts/a25a408.html","0ca560f20c3ce694d3dd445ae79e7d79"],["/posts/a6b15897.html","6f6efc25b274ba79d94ccd0f45c0e572"],["/posts/a9867134.html","99336a2db9db70c214836b2af7b2c7e6"],["/posts/aa351366.html","85fbcbbebb4b52d03813e3a4a1961cad"],["/posts/b42f7f50.html","5a909cdae14c37a915c600b5788b6292"],["/posts/b492def1.html","78a122cfcbf1206cb45bce060c1b60b5"],["/posts/cca6755e.html","c3254bf5e1a850fd620ce1da73df5ea1"],["/posts/cf1cd846.html","6dd97cc0035b9371607371037a6a1a4e"],["/posts/d6a434b9.html","6e9e39dddefbdc861052d226830e4a17"],["/posts/ecaa32e3.html","2c14826af7f44dead3360d9b6c49c852"],["/posts/ed8ba887.html","243f2c2585ad1b5eaf39e235e48a740b"],["/posts/edab46fe.html","5da705c3c38b637c68d4bf3a21ede4a7"],["/posts/edd0080.html","2b04227a85e992407e7aa86f852ccf8b"],["/posts/f2f795cc.html","d6e4a098b4e740e220dba74e7fa29017"],["/posts/f7c947df.html","efc2ce9370950f68225623373ecf14c1"],["/posts/f7d3a65a.html","50c1e4d8c16b35c042539f01254ad94e"],["/posts/f82b2580.html","88ac2010ccf8331269cdf5d63fd24ffe"],["/posts/fac97174.html","c52a74918c9af54b2f2c873f6361d849"],["/posts/facab7a2.html","5f95e9802a7319a85a84fffed25e4a05"],["/posts/fdab9a5f.html","02fe646fbde61490f31e6053220ecd7b"],["/posts/fffd9e73.html","12ec74c223c08435074aa2c96ff40a1d"],["/posts/undefined.html","bf136790a29ef64fce80611b51126a82"],["/sw-register.js","96f3ad687cc5368d3eee52488f9b123f"],["/tags/Git/index.html","5414716a6c6084db7ea55ba00c6ca5d8"],["/tags/IDEA的基本使用/index.html","fda39bff7e38bebb52cf8d7aaf215a98"],["/tags/JavaSE/index.html","7ed32f1d2beb75d91a760824a70761cf"],["/tags/Java基础/index.html","3b04383b66935ead175298da5d6977d9"],["/tags/Java课程作业/index.html","b80910009b8b3679c466b9d7de856527"],["/tags/Maven/index.html","d8e9bac3b044e71fe3af006c2f2c3fe5"],["/tags/MyBatis/index.html","f923759202e7e12b5803eec42f4df25d"],["/tags/Mysql基础/index.html","54b982db5cf59ee57cdee02d0bcaa390"],["/tags/Redis基础/index.html","715ef899c9242f9b4d3947768b2cef2e"],["/tags/Redis实战/index.html","5dfd4bc1ad37b40e32ce6dfe37e9bad7"],["/tags/SpringBoot/index.html","23110367805cedf4a5b56bff98bb9d2a"],["/tags/SpringBoot项目/index.html","45e3b5306e324cd938703668730c8e9d"],["/tags/Spring整合系列/index.html","5c30db80ca9ca7ab2fa2ad64df946b61"],["/tags/index.html","61451ea6649e7d74aee8162aa95b53b0"],["/tags/redis秒杀业务/index.html","03a1c8bc120d3ea7e7fceaa971409859"],["/tags/响应式Web/index.html","19c1753bba7828b3a30f5c7c770b3580"],["/tags/我在人间凑数的日子/index.html","2a4a8f6dc227562782a0b6d54d1e254b"],["/tags/操作系统/index.html","85958449ab0347001e58287ef3449d57"],["/tags/数据结构作业/index.html","6df885a306b9cb78a1937d8b40047781"],["/tags/碎碎念/index.html","1d0252843e38c1e067d25c7948ab737d"],["/tags/编程和环境配置/index.html","6d39195b1e8da28a35d3775232d7a637"]];
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
