/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b9d3b941ace0110e102bd60954a71509"],["/about/index.html","36e01dd107bd34fb8d31d63e17d640c4"],["/archives/2023/11/index.html","eeacc88860687de66674e204fb8cb31d"],["/archives/2023/11/page/2/index.html","39c76abe04b153d1f256a8c00a4782dc"],["/archives/2023/11/page/3/index.html","8568f19745ffff9e9289b8f67c0177aa"],["/archives/2023/12/index.html","34ebfb11edd0a5d133a3a6dd34a4eee8"],["/archives/2023/index.html","5943d9b5c8dceb8f0e1c97155aa0b032"],["/archives/2023/page/2/index.html","48add748a1a3dff8118d0e41102d3aa7"],["/archives/2023/page/3/index.html","a620eeba7c7d1f3bfcddc15ae614ba3c"],["/archives/2024/07/index.html","21a9c3752ce776d6d8a144d7cffbb878"],["/archives/2024/07/page/2/index.html","1a343f456a94225a7616d4facc7efae3"],["/archives/2024/07/page/3/index.html","54a38076fe391b5cf5441da65358af2d"],["/archives/2024/index.html","3cc75457ec9977dec1e32bcd4d6f5884"],["/archives/2024/page/2/index.html","c1ef5b45d1251c5772105f8327f9a056"],["/archives/2024/page/3/index.html","b312ebd24b3b302c981673a7f535cbcb"],["/archives/index.html","dba56a791e72d5693e5d99101ea34a11"],["/archives/page/2/index.html","9a4a6c8966429c90fe326c5005c6dd9d"],["/archives/page/3/index.html","df2d6b8269b9d67c74f17e10c4f1dbdc"],["/archives/page/4/index.html","e33101f239b5edb45c448b4174a6ce62"],["/archives/page/5/index.html","060fe1b12c1dc76b608dee72da49b5c8"],["/categories/Java后端/index.html","2822bee11b7510b59cb5bbe78e63c568"],["/categories/Java后端/page/2/index.html","5ae0643dd9a18e06abafb11f752cbd66"],["/categories/Java后端/page/3/index.html","64f8f4cc5df8a456e00a6a3c446b05c2"],["/categories/Java后端/page/4/index.html","8c17f0a0cf04bf39a254328bf1897d92"],["/categories/index.html","237edbdceeb78cacea1e2c79bf70055c"],["/categories/友人帐/index.html","34c3edd3bed5e85cdf9956888732cc89"],["/categories/思源笔记/index.html","9ca389a248bfa26246faf8447175de1c"],["/categories/版本控制/index.html","ac479441b15379be471e67ab36c0e085"],["/categories/考研408/index.html","5cc50e448e044a87a46ee55e8be9c455"],["/categories/读书笔记/index.html","1d6dced742a0576c476c1feb8f181c69"],["/categories/软件工程/index.html","1a983fdc82502d95bd5cf8e7c9f88cf6"],["/chat/index.html","8c9d6822d1f422dc1c13e2adcc8ad1d6"],["/comments/index.html","920baadab3c01af8a049d2ecbd63c835"],["/css/custom.css","6f173171fbe4ed0cd8993c5b7c6fda88"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","648f15bb1b2f5441585476284e321a9c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","c597166378013adb789094435e1f188b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","691588f0d181e733fc4c854c4fc14ff6"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","5f92ce54b6c0afcb8533acdaffa56f0e"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","cc9853bee66c66934014724d4a02ac93"],["/page/3/index.html","a5b8f154f28fa436aeb2994bbe789283"],["/page/4/index.html","ca015419f50fbc242f566cb6e860d7ea"],["/page/5/index.html","2dca4ed016da5ddb01a6c4149a7ad552"],["/posts/18bf100b.html","a586fbd54261d89637ada68113118eb3"],["/posts/1fcb7e57.html","8379c1f548b4b5d0ce87b99bfa267e28"],["/posts/254393f0.html","5bffca48f7d82f564f4c544b07a713db"],["/posts/28b3fa6.html","c29a975e78bb39a8635c981d782753fd"],["/posts/29f0725f.html","501593851b657b2709f8ee91bcb26a8e"],["/posts/31c36041.html","bd33f0a133fd08f175f9bbf6f76951c4"],["/posts/3513a7dc.html","ead97cfa2e85ee79e646c5180c10538b"],["/posts/3e69d26.html","27fb35f6a076c72c031816dc58f7e065"],["/posts/417de2f1.html","5281d3f7aacd3dbe151d018d95e0a93a"],["/posts/442fdc66.html","655b640c094fbe0887faca4271ce993c"],["/posts/458f2701.html","b83b6bdaf1e908c0544109770539b6fa"],["/posts/4e6d3c3b.html","e670fe4d65a83e243a84a98d6f482f06"],["/posts/51361b40.html","fca95b1889521f6ea98f4e579239af15"],["/posts/5413be0e.html","dc6531e185a765294e3af16c36c9ffe1"],["/posts/5596f2.html","cf4d9ab6abb929333e09851a30cf8143"],["/posts/5c81b531.html","21c5ce46109eba6b49c7fb4ab79b83ac"],["/posts/629aaf98.html","d0f8c59f9bcb0a2389daa47255667955"],["/posts/65c29e.html","0a1cbe3755993c37206d1bb19434a618"],["/posts/7105be24.html","8a193ec3e13b147cbb4ecb1d1e747514"],["/posts/750cb0cc.html","165d7311da1022800b0d5accc5f4f84f"],["/posts/76897b5c.html","37b9d5b613c5af8fc9970fa929fdd923"],["/posts/852e85aa.html","53a8bec0dc8a2887828a368980198373"],["/posts/8712b9be.html","73b620d6e8d236cd53a29f3758ec2899"],["/posts/8e1cab8e.html","079d545b551462b65a9083032ff067d2"],["/posts/8ebfad52.html","7cbe6081ba9469efb1ee132b0cc0a00f"],["/posts/8fd19ba2.html","ddfd7a3552b88915b75cc542e2f104ea"],["/posts/92d0de5b.html","82dcf659649de96d33b7540f493acf5a"],["/posts/9e3d6f34.html","b5032986aac9b7f1f5b7c2811fbaedb8"],["/posts/a0708e01.html","3a3469fc4a682a03c4e2c6b3d968c098"],["/posts/a25a408.html","56a67d8cb3e0cd7da74c9b82ef3801fe"],["/posts/a6b15897.html","9dd3dd435de12c59bf7c7908d31e90f0"],["/posts/a9867134.html","49841eee222ee504d60d1cca818975a6"],["/posts/aa351366.html","57f67789d697206f97c371e0d301d822"],["/posts/b42f7f50.html","c85d36a2aeef126628ee214ed3015f7d"],["/posts/b492def1.html","a1b0233e11e38a57514f06f8e6f883e6"],["/posts/cca6755e.html","f70592151eeaaaec3ddb07eed2313d4b"],["/posts/cf1cd846.html","292048d0677d3947921c2d16d2868295"],["/posts/d6a434b9.html","dc51518d191c4397ead3efcdeff1b884"],["/posts/ecaa32e3.html","8f81476db04d1c029fefae6d7835a8c0"],["/posts/ed8ba887.html","73f05860eebbb6abf3035d77eb0ea24a"],["/posts/edab46fe.html","7a711ae0c9117af3e1b679d1cfeb85a9"],["/posts/edd0080.html","ce505ab4fec9f08f8f3ba56062637173"],["/posts/f2f795cc.html","20e663b9625dfe0f1a76298ea7ca66b6"],["/posts/f7c947df.html","a0ef75a0859b97f02ed2e992526e86b5"],["/posts/f7d3a65a.html","a85c3735c5e1409a165a681e8823b1a5"],["/posts/f82b2580.html","53b59f666726dc235bb6fa99bea78c87"],["/posts/fac97174.html","d6593ef8c5ba7b819558a535cf728e64"],["/posts/facab7a2.html","42e444bb95967c5cfb07bc6a81792c8d"],["/posts/fdab9a5f.html","d604baf9dda2a9765c34c613e34f9937"],["/posts/fffd9e73.html","ac99dcd84e7ea3bf706330eee5bce732"],["/sw-register.js","cd8d860430f378e0790f94bab6aa8583"],["/tags/Git/index.html","a3db57057a3513cb79e736df5beec8df"],["/tags/IDEA的基本使用/index.html","e9dde14c5ee39ddc37b590b893cb1264"],["/tags/JavaSE/index.html","33381de2c4b09518f255f74f1a337a62"],["/tags/Java基础/index.html","6711b359ab9ea8d23929da52acdb10e9"],["/tags/Java课程作业/index.html","5aeb4033f32e777427f5eb19fdf7a793"],["/tags/Maven/index.html","c26716387ad29a9ff11f7c8bc6242084"],["/tags/MyBatis/index.html","6fdb26db3964ca722f057b82ba7e5ad8"],["/tags/Mysql基础/index.html","d72aea222d249bcab44db96338286d02"],["/tags/Redis基础/index.html","7adaaf0aba61d4b8cb32dc28e0f60165"],["/tags/Redis实战/index.html","9641405bfa503a0eff52b5ab4aa9187e"],["/tags/SpringBoot/index.html","b5d794eb836fd80c25871304b19449f0"],["/tags/SpringBoot项目/index.html","d6ca6ca4c62b9e39ab4cc4402eba5026"],["/tags/Spring整合系列/index.html","8ce7a08c477886128203c2f5bea18280"],["/tags/index.html","be479e76899c505cbbd95ac6cb3fbb9e"],["/tags/redis秒杀业务/index.html","a91c5904b2acffbcd45ec4a7e2526f64"],["/tags/响应式Web/index.html","a8cb4fdf68455db5ab3a3fa415ee7f79"],["/tags/思源笔记相关CSS/index.html","e8cf9edf5f5d855f68d5fc46802c9ef8"],["/tags/我在人间凑数的日子/index.html","4925218acc8ecdc8b3447d865adc0747"],["/tags/操作系统/index.html","b5286a8e49eaa399dea4fcddbe642c99"],["/tags/数据结构作业/index.html","864f6ec93236843c0d08c7e0831e01f6"],["/tags/碎碎念/index.html","669697c63c04e0069fa1ec36f6739d38"],["/tags/编程和环境配置/index.html","9d07bbdd9bdce74ad4f4483656458fe8"]];
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
