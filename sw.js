/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d428b2d6ca9006042cfea3e5afe6341b"],["/about/index.html","2a3a2c6df08bdf1276998c8e027e99c4"],["/archives/2023/11/index.html","5b893f62a4def8fa4e3e246752be1f1e"],["/archives/2023/11/page/2/index.html","9ac35988dc1b5dc517c3fde9c9589000"],["/archives/2023/11/page/3/index.html","3e4aa22d1e2d37a6e96855fdb3c5d037"],["/archives/2023/12/index.html","011f0bb70fcd10ef56c48ff04fa65419"],["/archives/2023/index.html","1ddbe4d7ed637e5af2a8efd05a1ad13d"],["/archives/2023/page/2/index.html","4727f44ed07d7e3d2ae9d4c1febb286e"],["/archives/2023/page/3/index.html","629b78f633722e9f8f824a086f12a108"],["/archives/2024/07/index.html","cebc4c35edd1ec34fb99fb3e6318057a"],["/archives/2024/07/page/2/index.html","8f2b92fe39ebd016913ef09da5d09822"],["/archives/2024/07/page/3/index.html","a5f2a8be191dbc61566320061ce6e46e"],["/archives/2024/index.html","13c927996da2e677abbc8835ac75daa9"],["/archives/2024/page/2/index.html","8a114a186292f1978e0728ffb4cd0d0c"],["/archives/2024/page/3/index.html","9f2e6ea524f26f0029fa6d9486a10175"],["/archives/index.html","e3c17ee76b9a99aa7fd9c3e5521d40a0"],["/archives/page/2/index.html","3963fab1b8e9bf07f0f70d832d1031a0"],["/archives/page/3/index.html","f7a83bd6c810bb671f105f2ef3ce5240"],["/archives/page/4/index.html","8c0e3143478db6a847531ebac36b31a2"],["/archives/page/5/index.html","51cb374a1057442cb13960dbcc380870"],["/archives/page/6/index.html","75d0e9e657c1ed335ec44f4dac27cdc4"],["/categories/Java后端/index.html","97fbe99a8655ffd8690ccbac7622df3d"],["/categories/Java后端/page/2/index.html","f503ee052fc8eb54544acac715bca352"],["/categories/Java后端/page/3/index.html","7258b673b106d8e0880820f882a34a6f"],["/categories/Java后端/page/4/index.html","fa7abdd8dac097917ae4802be368c437"],["/categories/index.html","fc95ff1c70bb9cb6ab2925bd1683ec7e"],["/categories/友人帐/index.html","7629c36e3dc9337e9bc181fc1d929a93"],["/categories/思源笔记/index.html","fb7b7614013bb967551d6415acbe3c09"],["/categories/版本控制/index.html","a37837aaea6c0076c2e68548c927346f"],["/categories/考研408/index.html","42091e9a0817b7160f746eb44ce78b0f"],["/categories/读书笔记/index.html","281d32eef55f5b74606b185c03650eaa"],["/categories/软件工程/index.html","a3a184bfc64cf41040d5252355e45d5f"],["/chat/index.html","f306eccfe397b6eaafe8426343bb4932"],["/comments/index.html","263f4727e55128fb86442e2f82b76151"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","c844e7bf3e80692fb7211c45bfb92147"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","0e08ae2fda2393acf491f89240cab6e1"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9a3834fd4247fb2782c17807b563c254"],["/page/3/index.html","18119e3f44cd61975003f79dd07e08e0"],["/page/4/index.html","803536910b0c6cb5b9f1e6b9669c3ef5"],["/page/5/index.html","a479e0a5e4b0bfc90d34687fd41dc6c1"],["/posts/18bf100b.html","3f6544fa86c3641a09de20308603a954"],["/posts/1fcb7e57.html","4f3b81975a2cfe38940657d421bc7cb9"],["/posts/254393f0.html","91168eff68f07efa77bd5168f6bec0e7"],["/posts/28b3fa6.html","72804ee6872995dddcf52d07347028c0"],["/posts/29f0725f.html","08af20f98470bb8baa4c3fa60152af9a"],["/posts/31c36041.html","4f392b007bc1e7cde6fb82d5acb1c917"],["/posts/3513a7dc.html","d1eb6f7b06054989e9e58a60b7609778"],["/posts/3e69d26.html","860ba0f3b3f44b12079446dcbe413584"],["/posts/417de2f1.html","43bf40273bddf1075a91baea9bb5bd4a"],["/posts/442fdc66.html","434ad73b8dba6a7d7de9cbd5709a2893"],["/posts/458f2701.html","b60cdc32a61fdfb6675e5525dac93e2c"],["/posts/4e6d3c3b.html","ca0e4dd795fa1b239817961239f64e47"],["/posts/4fc13381.html","269a2a0fe04f53678a0ce4ced65714ca"],["/posts/51361b40.html","39e426ffe301e6779a6cf6bf6b9a9549"],["/posts/5413be0e.html","885de38e618d68406f86457c90fbe8d0"],["/posts/5596f2.html","36d7ed4d6d0cb424376d1d81655a4ca5"],["/posts/5c81b531.html","f9cf42d24bd99178bfc52237ae73a466"],["/posts/629aaf98.html","8e06a21c71e0e68cc84a902d240947ae"],["/posts/65c29e.html","5fd08a7ccadaf27d1991333f74d3c3e9"],["/posts/7105be24.html","d323335afb5d345c43c2dab43ddc8f6e"],["/posts/750cb0cc.html","5faad027066ec5f2a52d3840ba2079d5"],["/posts/76897b5c.html","de5e93a189d0ebf067181fe7e98780bf"],["/posts/852e85aa.html","5bffd2c32931c70bfcb0d9088ab5c5d6"],["/posts/8712b9be.html","e25b5d57c1a2f25ceb969239117c0c72"],["/posts/8e1cab8e.html","8f024aa0c9857a453db1385d689a476b"],["/posts/8ebfad52.html","48090686c218fc62088d6abc517a880a"],["/posts/8fd19ba2.html","8d0e09e3412e4e38a65f13b6c070a84d"],["/posts/92d0de5b.html","4781a31674e087f8910d0dda1513b49b"],["/posts/9e3d6f34.html","97e2bc477cbdeefde9d18858037ed5b4"],["/posts/a0708e01.html","57f70bb5f1f7dadbc2a091f52532179d"],["/posts/a25a408.html","609a26b0d801b61d7f1f706f4f061261"],["/posts/a6b15897.html","4f8b264c18a73bcf5e1e6c3b07c5f232"],["/posts/a9867134.html","d68e97b6d89d43acd73726ea0dbee3f7"],["/posts/aa351366.html","e0fd772a6f0b2231100ce41fc2f98f4f"],["/posts/b42f7f50.html","08a20a7500037a3b8f8a281765bc54c7"],["/posts/b492def1.html","27973af4b5b3641a0ebe2dfa85c37877"],["/posts/cca6755e.html","50073c8e28a22ab5aedae4c1ef3e57c5"],["/posts/cf1cd846.html","47ceecef08bba8e0805361e128a44734"],["/posts/d6a434b9.html","17f0d8d4e566f0fa0e5a2144129e3f6a"],["/posts/ecaa32e3.html","e8a22f949a334f830b2ed10356e042b9"],["/posts/ed8ba887.html","94621b19679593ce8fe97da3136087b5"],["/posts/edab46fe.html","0fb7b71296426044ec2afc09f6fc6610"],["/posts/edd0080.html","9d9e8513953ed19a664d094d41401d75"],["/posts/f2f795cc.html","9c644ad770d2ccb755e48e25626bc461"],["/posts/f7c947df.html","92b4bace66376df3e12cd5477e1d6fa6"],["/posts/f7d3a65a.html","c96b148b895a2e7ebcaac2d0a6bd3884"],["/posts/f82b2580.html","d74e0bfedfb4e298c96499fa039ed746"],["/posts/fac97174.html","9f7e5bca2cc5b934e4a8d96cb9114972"],["/posts/facab7a2.html","fcc39a284a27e5c110893e59e5e739c6"],["/posts/fdab9a5f.html","826f29f081a83ee9f288104a3fbde33d"],["/posts/fffd9e73.html","e5c9be5b99f7c90697b91f84f0e2a2ca"],["/sw-register.js","aabb56467aa3bd2aa6d4724d5394f647"],["/tags/Git/index.html","bcea4da95c24abaa2897d0376b6d398c"],["/tags/IDEA的基本使用/index.html","6a080a76b89ebfcbf334dbf69961b0fa"],["/tags/JavaSE/index.html","ed79b53652edf1cd024314435a25e440"],["/tags/Java基础/index.html","da2b96c6bb8646001fcf839f0729c144"],["/tags/Java课程作业/index.html","b6427a04d573ad5ffe9e348cac9b6dc4"],["/tags/Maven/index.html","c33f2596add3318f4831ced5b3dee5d1"],["/tags/MyBatis/index.html","842226392f2f4d69d335beb2c321389d"],["/tags/Mysql基础/index.html","79fb677a0aec353369f406afb5bed07d"],["/tags/Redis基础/index.html","d7d645136196da6a323b8d60b39fde74"],["/tags/Redis实战/index.html","e812095eb793ac38555f67e3e2d26727"],["/tags/SpringBoot/index.html","d3aab9bf76653a62210fd0c4d6eb1738"],["/tags/SpringBoot项目/index.html","8aa642fb78cd1de4175bc79d912c5356"],["/tags/Spring整合系列/index.html","fd5f7529f3c7846e919ca75387e94052"],["/tags/index.html","7c3195fda608b90f40fe0b569c7a8ec6"],["/tags/redis秒杀业务/index.html","8066ba1ba99fdaee199cd114a8f0a462"],["/tags/响应式Web/index.html","c8188b67e7e05028dde029d304c55df5"],["/tags/思源笔记相关CSS/index.html","86e53eff63561f89147d93937a14a82a"],["/tags/我在人间凑数的日子/index.html","aa7a472afcd56ba2beca6005e525d35d"],["/tags/报错杂谈/index.html","3affb4bf9cd14180f0e3e7e8c160bf26"],["/tags/操作系统/index.html","86da65c8d242c38b9234cf486aee4faa"],["/tags/数据结构作业/index.html","4bd7598a01b58dfe9dacb1bece4b6f09"],["/tags/碎碎念/index.html","79aae663d498aa3dc30de0da232270b4"],["/tags/编程和环境配置/index.html","466fea9da34c26f6b7aa7d27b443be77"]];
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
