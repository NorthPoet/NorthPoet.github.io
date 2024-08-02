/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","50ea550609eb0a4e9d16179a0798ff0d"],["/about/index.html","0fccb0632cc1b1e699f9d205595af9e0"],["/archives/2023/11/index.html","12c513e1dd928ddd7ae0d9fcc0309e20"],["/archives/2023/11/page/2/index.html","5f9e44395cf03cc176cb572718914bb0"],["/archives/2023/11/page/3/index.html","8a84dc263d976fa71902d64d92ef096b"],["/archives/2023/12/index.html","633fcdde48d6b371e885d28d3da11137"],["/archives/2023/index.html","5c8fc06c304859d8954c977a215e1a0f"],["/archives/2023/page/2/index.html","adbc13c77fb25ba7cf8768cd71172b1a"],["/archives/2023/page/3/index.html","a0a23673ac1a0a3bddf8e80d10096a7e"],["/archives/2024/07/index.html","cd70e3c102ca8151925e613d7f013efd"],["/archives/2024/07/page/2/index.html","40a6b024580769b4936e050abf5d1791"],["/archives/2024/07/page/3/index.html","1e05c2838130d3e993aed5f0c793107d"],["/archives/2024/index.html","d8ce3f93bb468da5d393ded90ff7dc41"],["/archives/2024/page/2/index.html","33fdad9ab59806059b303264eab5c661"],["/archives/2024/page/3/index.html","43641fe50892b4f78634f96db1edb7c6"],["/archives/index.html","77f22ee677ff4e74b07054e1990a96db"],["/archives/page/2/index.html","80c519778800f721e6335a3cc7f974d9"],["/archives/page/3/index.html","da69a7d51903386bd328fa28e3596f78"],["/archives/page/4/index.html","6027e56b083365ee4a76b6d1e9c3b465"],["/archives/page/5/index.html","5288c886d98122686699c9eda42e037b"],["/archives/page/6/index.html","b65a95de72070deaafe3778b4fcb2fb1"],["/categories/Java后端/index.html","df79d7a6ecc1ac1e6c19c4216128c744"],["/categories/Java后端/page/2/index.html","d8fd94c63f93d0d0096e224bfc52c145"],["/categories/Java后端/page/3/index.html","064a4b4c1fe1e6097ab95ae1197da9d4"],["/categories/Java后端/page/4/index.html","547d152f5f362abe6354d5a49b87d593"],["/categories/index.html","27624f399b3c074195e37bc08d156678"],["/categories/友人帐/index.html","3d1b10f97a7c6ffc03eb6dd62f1735dc"],["/categories/思源笔记/index.html","c27e38b9e0ccf6d66eacb614a5f9f91a"],["/categories/版本控制/index.html","1f0fb0279504884e17d1f9fd5dbbe2a5"],["/categories/考研408/index.html","188234cf535dcbf0a110a65e7dbe0675"],["/categories/读书笔记/index.html","e5ff0348b42f103cd20d96fa0fa54705"],["/categories/软件工程/index.html","162859c17fe8dda8db5fbb08e2e89e66"],["/chat/index.html","755f044b29b31fb5aa7149f8e967d2b4"],["/comments/index.html","a3afb4699e97c2cc88d622cfe9c94e6a"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","c9e470a7b679e9f3efbb7451e610380a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","85dab102e383b559de6116ef509ceba8"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ce6994605d205a2ef6332e0314f44ddd"],["/page/3/index.html","9beca8c18bc987d1512d3b9633f51063"],["/page/4/index.html","0037835d17509a8fffff5c0fbb40d7de"],["/page/5/index.html","677785b407bc4edbe41501911ad480c7"],["/posts/18bf100b.html","f2cdf85a65aa98fac0421fd0db7cf359"],["/posts/1fcb7e57.html","50eab518824bc8756662642ccedc2842"],["/posts/254393f0.html","a73e026e34c2c7c28c389e585980859a"],["/posts/28b3fa6.html","68632c630d6a14cb0e49d803db5dbe59"],["/posts/29f0725f.html","b33e225bf797684a9a19a6b8342e64eb"],["/posts/31c36041.html","1570629d7c7a9a1885d3372ad7235ee0"],["/posts/3513a7dc.html","70e890b9b1f4dff45b22a6ddf5a7651b"],["/posts/3e69d26.html","d4045443bac51a9afdd3aadbfd7291cc"],["/posts/417de2f1.html","781c3ae9e2ce7238785e8692f083717b"],["/posts/442fdc66.html","5d7b5917e384b1d303aef9b1b955dccc"],["/posts/458f2701.html","d5d837987b46df2c1f0259f43fbbd098"],["/posts/4e6d3c3b.html","4d6cb9f1177409f9181a621a4da1fb18"],["/posts/4fc13381.html","caf25e8cdc53f1a0a8730150d3f64d78"],["/posts/51361b40.html","7dcf67040755c1e2b1a974d1e4babdb9"],["/posts/5413be0e.html","314b4699d62b6d4305110af5c0a48c47"],["/posts/5596f2.html","be9e3ff9a9ee0bba20811b5254841d2b"],["/posts/5c81b531.html","5ac44e43528b043d284967d8e9990c45"],["/posts/629aaf98.html","32a6a7e353cb2ceb2a4683808eb7ac0d"],["/posts/65c29e.html","7f7a873ca1a214c80a4e5d156c56ed3c"],["/posts/7105be24.html","9c73c867b1ee00cb40d05230297d9709"],["/posts/750cb0cc.html","2dda108897d2143e77fed215feb23e8f"],["/posts/76897b5c.html","a216ffc28ad0a44bfe4f7c0edfb607f5"],["/posts/852e85aa.html","768c3edbfb736fc999cae012213b90c4"],["/posts/8712b9be.html","dcfceef2beb4d0935129067fdb069f6f"],["/posts/8e1cab8e.html","7946b1ecbfb5fd314fa864bf9c6c1eb1"],["/posts/8ebfad52.html","4961180877a17d9c948a2630cb0b0c0c"],["/posts/8fd19ba2.html","9a57068d0ca28f20fff1d12bf9c8bf12"],["/posts/92d0de5b.html","39f78f8013ab8cdd9fd9375717e93a0e"],["/posts/9e3d6f34.html","8d8d47fd6d2eedfab814ac9fbd0c52f4"],["/posts/a0708e01.html","68cbe054fd67f369a64147a4d3a3ec50"],["/posts/a25a408.html","c87e1880534538d601df411773122305"],["/posts/a6b15897.html","5907d7315c1b38878062d09dd65b6348"],["/posts/a9867134.html","09d22793ae37922b3a79508e2beaa3ea"],["/posts/aa351366.html","9327b1a963cdbced66c02b513b2f5c16"],["/posts/b42f7f50.html","29e8e613b96f98998af5119e84f862e4"],["/posts/b492def1.html","5ff1518ec531632910ac79ef8b48094f"],["/posts/cca6755e.html","7154b0e1d7bb2ef553febe86d49bc0d6"],["/posts/cf1cd846.html","2a5787578df878cc6f890a6f8c8d0386"],["/posts/d6a434b9.html","fde5a77bde6a13b1cfcb4b6a64f13fb4"],["/posts/ecaa32e3.html","d2d8840dd4be28eb51dc4c00b6ac1490"],["/posts/ed8ba887.html","b38be39c146087f73c6d0b4940745a85"],["/posts/edab46fe.html","40be37d384c36ee78d35f9c4d6cfc952"],["/posts/edd0080.html","fbb4d1b586b3e0ba4240242b3d3c4676"],["/posts/f2f795cc.html","cfe07f44f1cd33633c737cb01e9ba6e6"],["/posts/f7c947df.html","b16fb7eec326029635af30c9bd9a04de"],["/posts/f7d3a65a.html","53d26b253179145aa7a59f8c133d62c5"],["/posts/f82b2580.html","8dba5968e09fa2d1e1ec0f19df55477c"],["/posts/fac97174.html","88cf61e50e25647620bd399fd02e7f9c"],["/posts/facab7a2.html","65e6526c02ae1e76d40c304cdfe4d8b6"],["/posts/fdab9a5f.html","79f91cec3e60d9bd27ca4185726f304e"],["/posts/fffd9e73.html","3c53ee9867e1319c46bd3252398f4e62"],["/sw-register.js","911c4e2f91116919a8c5b48444695f86"],["/tags/Git/index.html","2302fa810d01bfeb9c4c1922506d08d7"],["/tags/IDEA的基本使用/index.html","ee5f88bbd9cc1ff3ebe2953dfee334f3"],["/tags/JavaSE/index.html","65ebab23735af69597eef1697f06d269"],["/tags/Java基础/index.html","f879d6786e1ce4f129ce617c735ac51d"],["/tags/Java课程作业/index.html","b59bc22dd74fbdfe9c36e8438094436d"],["/tags/Maven/index.html","83a330302030995ed0d8234f14057dcc"],["/tags/MyBatis/index.html","09c5a5877e5a31b443002aa8deb0329d"],["/tags/Mysql基础/index.html","c10a160d4ef8c5e00c0f7e1170051f26"],["/tags/Redis基础/index.html","4e369e9a26f91f071968045ba9f5dda8"],["/tags/Redis实战/index.html","5162ba972886ecf9be55ed8bc2c2daa7"],["/tags/SpringBoot/index.html","c420c8d06ef8115cca1e752633fdbd8a"],["/tags/SpringBoot项目/index.html","22a954a97edadcdf5035635ae301967f"],["/tags/Spring整合系列/index.html","b0d1b09a5b219056355654f92710be82"],["/tags/index.html","704cb2d2d9aecf73a25293f9af23373e"],["/tags/redis秒杀业务/index.html","398307b2d0ce4e12610029d24935f6e9"],["/tags/响应式Web/index.html","fa56967a12c99de0089fffa1e6932436"],["/tags/思源笔记相关CSS/index.html","df9ad4caf3618b9f97d4fa32becf21ed"],["/tags/我在人间凑数的日子/index.html","155ed4967e8856ab413aaba3a61a3363"],["/tags/报错杂谈/index.html","0196bdb60ced7dfeba0171efcdf4498f"],["/tags/操作系统/index.html","647c3ac2c4b392344fd5805c1e22025c"],["/tags/数据结构作业/index.html","ef66313359894294b70fed477a1b8e48"],["/tags/碎碎念/index.html","d4454b196f969097374ccd166f6188c0"],["/tags/编程和环境配置/index.html","16a0935b069d4b8ee210f796aa2bfbd5"]];
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
