/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","261e1a4fce93d064087aa3c43d8c0f44"],["/about/index.html","b1ff5023919e8e159dc273a1b0196ce4"],["/archives/2023/11/index.html","df17cc1811b9d78616df75e2a4f81287"],["/archives/2023/11/page/2/index.html","9848da4880f5ea19c629b2e5d159d44e"],["/archives/2023/11/page/3/index.html","c80211139e988957c96d106d9a10ef02"],["/archives/2023/12/index.html","4205cb4288a037431d1923c2e367e0cb"],["/archives/2023/index.html","c8290d11fb27c69fb52ec4a3bf2e341a"],["/archives/2023/page/2/index.html","980b901dde2f97b4fb51b1ab09194bf2"],["/archives/2023/page/3/index.html","62a619802a8b4e33fd131436a716fbe4"],["/archives/2024/07/index.html","52f4970fb6c2eee7e5c7b47078f8c2d2"],["/archives/2024/07/page/2/index.html","72dcc8c252b9fa679ce52fa1178123bc"],["/archives/2024/07/page/3/index.html","df45c36fe50cefab8ecfbd5320a32f28"],["/archives/2024/index.html","46bfa9ca764b1bc57c184d204aa56224"],["/archives/2024/page/2/index.html","92b9ec1b9ad1ae358b2b41ce7d3889b1"],["/archives/2024/page/3/index.html","6f6521dc15f4381c37959a4ae05a5f55"],["/archives/index.html","2d72ba488bd8be877de42802f7e9e392"],["/archives/page/2/index.html","349dc86ed0b8e8b82fcdf2d621f0b316"],["/archives/page/3/index.html","e4b0b40d61980818baf1a5d9ffaeb345"],["/archives/page/4/index.html","506bc226cc1fa36c5368ca82fd19d7dc"],["/archives/page/5/index.html","665af5914a5568ee5f1b5705a32caf1f"],["/categories/Java后端/index.html","1b27e29edd35ac8b03fe84976ea7cd1a"],["/categories/Java后端/page/2/index.html","816346ecee32768387f32d01ffb6e485"],["/categories/Java后端/page/3/index.html","4a4378d44ba02ce2243ec43c687d5221"],["/categories/Java后端/page/4/index.html","c9d8af57a5577ff2ba9dc36b0be71538"],["/categories/index.html","3cd69e338ee352d60fd02a5ed18ef957"],["/categories/友人帐/index.html","72e8ece769b9c794c662e6cf49b4a3e6"],["/categories/思源笔记/index.html","efa8d824ea7f42e6e233ba820b2166f1"],["/categories/版本控制/index.html","884830f55b99f58707829250fdea9456"],["/categories/考研408/index.html","04d17bfe4da0640b3218ebe08de4519e"],["/categories/读书笔记/index.html","19a4d36795411c453f71890d94ca4599"],["/categories/软件工程/index.html","000478ef2c0e25e78275fd48dd688d55"],["/chat/index.html","55983d7b8c75f4db3d10937efb885584"],["/comments/index.html","bf8e755fcb8a8f1802e8ca42d36a8753"],["/css/custom.css","c19b709a7e08f3cc8f976ff4d554a0ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","38bb344fabf28863eef2e415e228996d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","64551fd2dd73c58dd25e6f81346ef4fc"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8e36f7ec10f0bce423c07e0413429cd3"],["/page/3/index.html","327f4ce83cabb93db6589be478df9b64"],["/page/4/index.html","626cbff9712724c87ca617ef0b262fb8"],["/page/5/index.html","3c8fefbf72cd9c55a1ceb1aa745db87a"],["/posts/18bf100b.html","6b877c896eac788fbdb94ecb4b4b4ea3"],["/posts/1fcb7e57.html","29ff5e090958a4180a34c2cca03c209f"],["/posts/254393f0.html","ab2295d97748468a2cdef9c3676d82ac"],["/posts/28b3fa6.html","fd1302cc4a2c666412a98ec97422ce60"],["/posts/29f0725f.html","384007151b9e9939edfcf0f80a820121"],["/posts/31c36041.html","f3bb38728f7147ce15777abc9cc3788e"],["/posts/3513a7dc.html","bd76c56b0e72ce1092cfc21bc2128e90"],["/posts/3e69d26.html","999731e3b46fb9e04d80143f908582dd"],["/posts/417de2f1.html","b5bc5fd6502204a8b0d614299c257b62"],["/posts/442fdc66.html","728397d45e11a657f7efd296485f5b8c"],["/posts/458f2701.html","f08b9691dda76937bbb567dbdd4620c5"],["/posts/4e6d3c3b.html","e99dd72b4cc27951e770c9bb55f608b8"],["/posts/51361b40.html","b558f4db030bffffd8e354f204e9ea95"],["/posts/5413be0e.html","269d9d1e327f778885a3ce4b384a72b6"],["/posts/5596f2.html","ae0be87963d67f4c8c3c67dec478ce38"],["/posts/5c81b531.html","6614296b7f72d225bdd8b56ac4454fb7"],["/posts/629aaf98.html","0634ec3709f59368e000952d6103e244"],["/posts/65c29e.html","a0d7ad536fe20155d873a8733d6a3e80"],["/posts/7105be24.html","79d06a4997910ec15192153b3e0b032a"],["/posts/750cb0cc.html","2712218190c6de9c94f661debb3dd59d"],["/posts/76897b5c.html","762bb04cf750058557eb7cbeea2ecea6"],["/posts/852e85aa.html","0fea9be9778fe1ea5eb38ac0f9847cb2"],["/posts/8712b9be.html","05f487ed17eef63c4d1d8a77df45fbf4"],["/posts/8e1cab8e.html","78bcf08afe9a94d39b760d7d1a9c5de6"],["/posts/8ebfad52.html","f1baee3d09ba40eb2664aefb40b150fb"],["/posts/8fd19ba2.html","ceb6c7f0e066bb2935cd8d017e63f87a"],["/posts/92d0de5b.html","a1f561f1fe2336c255c5d43e12061ef3"],["/posts/9e3d6f34.html","f444f049f6bf67fc72adcb26b6873814"],["/posts/a0708e01.html","265267f4e7acd309ea9830c9d982fdec"],["/posts/a25a408.html","2ad8c6e3884080332c43bc3d6a704dbc"],["/posts/a6b15897.html","e75ac092c038d1f9dae66a7c247c52e8"],["/posts/a9867134.html","e2ed1cafd85fd4ba9fdc5522c63dab86"],["/posts/aa351366.html","9244ce5e051ab1245c164222a120a8e4"],["/posts/b42f7f50.html","0a58de64faef500eda7303f12bf54aa2"],["/posts/b492def1.html","0c39796948367b441eb42be590080f4a"],["/posts/cca6755e.html","17c5720294917b4b400cba0770e9faba"],["/posts/cf1cd846.html","b7d1587df14a05c83b4598f645f27c2d"],["/posts/d6a434b9.html","91974b5ec438103ef4870292d49f8325"],["/posts/ecaa32e3.html","a0e4cb68d0e86f272b0dc1af538ff0b5"],["/posts/ed8ba887.html","dccc0c3d03060d8a571d7598ad3fb197"],["/posts/edab46fe.html","4579c856104c052be2ac7a07338a1be9"],["/posts/edd0080.html","963e483411c64410e253d18457516805"],["/posts/f2f795cc.html","be9a93fe13a7ece334b3daafccb26ac7"],["/posts/f7c947df.html","864aed65fd4764277a1b480528887bd6"],["/posts/f7d3a65a.html","74f49dcfc29efbcd3677d826206f1f78"],["/posts/f82b2580.html","a07dc3c91b3f18c4f1e56e08ab44d60b"],["/posts/fac97174.html","1fc7b941cb70c45e2946d96723d6ff03"],["/posts/facab7a2.html","71c3b1ccc9cf920cfcfbc69ab7c2db70"],["/posts/fdab9a5f.html","bcbaed3a7a1d6da9297465417bc118af"],["/posts/fffd9e73.html","27c9032470bf40a01bec99902b5135d2"],["/sw-register.js","ac120151316c5027947f09b0311392c3"],["/tags/Git/index.html","5020cf743085a616e59b2211aef1b70d"],["/tags/IDEA的基本使用/index.html","1a53588314799e36ebd30c69e7ce9a4b"],["/tags/JavaSE/index.html","a257069ebe3e89d72f1665c0d1506b88"],["/tags/Java基础/index.html","1692ded4d0039d356b3acb48744fb770"],["/tags/Java课程作业/index.html","6c013766d59e0fd43726b2c1001c4ae7"],["/tags/Maven/index.html","570e8c9cd57bb802583c8f92bb4f06cc"],["/tags/MyBatis/index.html","51257d74515c2115aea806c3542667eb"],["/tags/Mysql基础/index.html","294642e4c9f5b00c467fa0d80917ce96"],["/tags/Redis基础/index.html","8c8737e023bb98e809b3f353c4aef61e"],["/tags/Redis实战/index.html","aaa346a569ff4e58a296c1ae67c89256"],["/tags/SpringBoot/index.html","a24da3d841aeed6796fe1b0449c00af9"],["/tags/SpringBoot项目/index.html","e2547a65584e54a27cab857bcc2dd011"],["/tags/Spring整合系列/index.html","65bbcdc4be11ccb59311194f5987d99e"],["/tags/index.html","a9e5ff2fc5b67f4605299cd8aa439576"],["/tags/redis秒杀业务/index.html","afafc67661f533c99056b7d938082f33"],["/tags/响应式Web/index.html","bc10bc5b9bd58ed762d80866427f59bc"],["/tags/思源笔记相关CSS/index.html","1a4a3197793a480cfa5e741de8c475fb"],["/tags/我在人间凑数的日子/index.html","7b2794d930ce74de9db4d2eb966c8d70"],["/tags/操作系统/index.html","1c5559273b054657ea8e4d38e928cb3d"],["/tags/数据结构作业/index.html","abdb8eb34a54365020bf9ed04cea85b6"],["/tags/碎碎念/index.html","de7e6a4c2556e75ce1847fb6ee266a41"],["/tags/编程和环境配置/index.html","476dc98e545479b14a2037a0ab0ceff3"]];
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
