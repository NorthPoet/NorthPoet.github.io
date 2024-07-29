/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7688a279715c234d0e481a73e3aeab03"],["/about/index.html","3f0bd5e2354fd9c11b81f19aa84d40c5"],["/archives/2023/11/index.html","e45d4bf843855e8662913b1a750c6860"],["/archives/2023/11/page/2/index.html","af7c18612d2114e0af041be538ae8a25"],["/archives/2023/11/page/3/index.html","48e568e63209e70c12aa3a38022cd9d1"],["/archives/2023/12/index.html","139a4b27680ca614c87700741af92d90"],["/archives/2023/index.html","653160e6c560cacb78a76e6c4c8b0f85"],["/archives/2023/page/2/index.html","14a618952ac8c7c0fbb563fbaeb942d2"],["/archives/2023/page/3/index.html","e530a950bc37ada87db5f67f1c9aa649"],["/archives/2024/07/index.html","d58eea7357f4b39612f0648d7259c811"],["/archives/2024/07/page/2/index.html","de1db81b70737201016b4c5b391444ad"],["/archives/2024/07/page/3/index.html","f2a4debe9c2a0fce24ea3b216c21aea0"],["/archives/2024/index.html","a7ed6cce2f26bf15da80ac87454ac941"],["/archives/2024/page/2/index.html","d3ec84a8500c9940450779c3d1605dfb"],["/archives/2024/page/3/index.html","7feb77c807bb0f6978af0a55fb35029a"],["/archives/index.html","69bc4b5d14481d85d77ad7dcc36123b6"],["/archives/page/2/index.html","353ec97846bd748564258b6f6640cfc4"],["/archives/page/3/index.html","0613ab1053261893dad0c3d349b50ca5"],["/archives/page/4/index.html","78a0f41062eda21c8da498099bdc5dd2"],["/archives/page/5/index.html","58f4f9566b951f82876dfd2e47192db0"],["/archives/page/6/index.html","94f95fda44218e95db55edd36ea3a7b7"],["/categories/Java后端/index.html","571b1b133c7280810103e7e861a71156"],["/categories/Java后端/page/2/index.html","3544558c1c3658b73026fa72d3ea46ed"],["/categories/Java后端/page/3/index.html","e2650948d92bdd28113e7b5ae402c145"],["/categories/Java后端/page/4/index.html","e5c896705902d97c13c53df70f33c9a4"],["/categories/index.html","c9e387fcc222976bafceceae44fe94d2"],["/categories/友人帐/index.html","1dfc228dda556e6024e9f0738849fffe"],["/categories/思源笔记/index.html","983120b5179ef65653e1090603f9ea32"],["/categories/版本控制/index.html","2db6869e7a6fe04059e27729dc2f3c49"],["/categories/考研408/index.html","86e6bae984da5c649c172837f213cb2b"],["/categories/读书笔记/index.html","6351a958c19de5a0e6a8972748807567"],["/categories/软件工程/index.html","a6507da79e0f989522437b83e724de39"],["/chat/index.html","1a653db42bc3f75675259894ce91c02f"],["/comments/index.html","5b5b9ae6afac4b61813cfa627059840f"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","8ab9c62c91eab65856431102a68e1db9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a9fb2f172cbb446b0245d81dbc8ed0cc"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","862bb2c5eb19251dcf9e9778366b01a6"],["/page/3/index.html","23422351e4e54b07c430c9c44b88d6c3"],["/page/4/index.html","0b81a4efb1527876bbe1aa4b2cd5c2bc"],["/page/5/index.html","a50fd7cafcea4343ccbf507b3cbead44"],["/posts/18bf100b.html","bd8834ce5eaf503942cf82c8df87a13d"],["/posts/1fcb7e57.html","e8f91b19af2dd94f37a6e7292cd73ec7"],["/posts/254393f0.html","a964a0f6c89985034ea7d80f9bc54ecc"],["/posts/28b3fa6.html","9df3305304c0d451f2ec01d681385ff2"],["/posts/29f0725f.html","406e921e4f7e7601f6284fc738195e5d"],["/posts/31c36041.html","c911f15e9766bd725fc7e9769893e13a"],["/posts/3513a7dc.html","0f664293280557b94de4406b60b65f39"],["/posts/3e69d26.html","d7c7c6285379224ec991d59979023412"],["/posts/417de2f1.html","53dc164b045317c451d5df100a1f6d11"],["/posts/458f2701.html","a2d1e60737ca9beec48540bf54426251"],["/posts/4e6d3c3b.html","f213f130f195b315524b0d45d0d24121"],["/posts/51361b40.html","c0a5b30e16ec330a5ef9f407eeb35c3c"],["/posts/5413be0e.html","58550b0065c5b0030c83196cd2846ec8"],["/posts/5596f2.html","486f27249c2d808d68ca11f45d0e053a"],["/posts/5c81b531.html","73a55152d6784a7176728afb7e31cd86"],["/posts/629aaf98.html","2069998f7897d00bdddee80d7a04cf8e"],["/posts/65c29e.html","3a2bfe1ed9588eee324c7b57a1ca90a8"],["/posts/7105be24.html","26e1167d598eb5f058e6a020c95dfd58"],["/posts/750cb0cc.html","74c3780b24e7fc6eb116eb92d318ffa6"],["/posts/76897b5c.html","340fc6dc73287c47fee0ed6ea2e38617"],["/posts/852e85aa.html","e0b389614bed9644892bc294e7591ea9"],["/posts/8712b9be.html","7949ee74518da1437b8541d3d92ef2e0"],["/posts/8e1cab8e.html","a97af685c1dac11811ac5ec57ee489a1"],["/posts/8ebfad52.html","4a23c3d850150e9e362c0ae65a7efdef"],["/posts/8fd19ba2.html","54509c8c560a5cd9262ee9960130dc9c"],["/posts/92d0de5b.html","ede582ec1421e15a61adf9b013e729e9"],["/posts/9e3d6f34.html","8d25f2a82ff95af40fa3d4d861ca5d60"],["/posts/a25a408.html","60d6b0064263c0c5fbb37a161481ee87"],["/posts/a6b15897.html","6cace6b75955b08191788610f3e6a47d"],["/posts/a9867134.html","fcc3ed51f71d0567e244ce7dfa6f3e8e"],["/posts/aa351366.html","f6156487ddd3919749fd08a790c12768"],["/posts/b42f7f50.html","d12254aa2b4f1091a8af20a5230a4a20"],["/posts/b492def1.html","e0312b522ea3c94878f689ecabf115af"],["/posts/cca6755e.html","b3f1b862084c9e581637d25b91683ccb"],["/posts/cf1cd846.html","e01e95f960bc75faa16d1f6dc2a8603d"],["/posts/d6a434b9.html","fe0794a89c536dc0c377f90c5ce952f4"],["/posts/ecaa32e3.html","0f490bfb3c11306835b351047ee228e2"],["/posts/ed8ba887.html","f72e414fbe7636f13ff25f3d7c6ae46a"],["/posts/edab46fe.html","75a38bd31466361d69af2aada15b25d3"],["/posts/edd0080.html","840465cf7d5dc25e17d9a0c22f6d9fb0"],["/posts/f2f795cc.html","3cf9db77ed86db10943d15ca2c8247d4"],["/posts/f7c947df.html","55129fc5d5b088cd6a4e40121973431e"],["/posts/f7d3a65a.html","3893e0f1da5d285e50fc47ed415b0d4f"],["/posts/f82b2580.html","89465e014f788f9d4f220bb6d0496100"],["/posts/fac97174.html","fb03598d1896f65abb4c230c7926a56f"],["/posts/facab7a2.html","c5967fd2fc54fc464ef4ccf56df82085"],["/posts/fdab9a5f.html","2ac3f3952021524a6400f0ae40548ed6"],["/posts/fffd9e73.html","f575667eb21afe7d7b7ff11b2c3ea510"],["/posts/null.html","3d5d8acad2ba028a7c344b6fbb98f7b8"],["/posts/undefined.html","e34c5e68886b24774eb63a5b87d4aa6f"],["/sw-register.js","f78bff7bd8bc62cf324bf7c65b1c4a22"],["/tags/Git/index.html","527211b0f697041e16b5183a6aa93a19"],["/tags/IDEA的基本使用/index.html","1003a9257fb900a636029613f321e244"],["/tags/JavaSE/index.html","0adc28b3b48e3b35f6c34e5c125f1525"],["/tags/Java基础/index.html","9a2ee68b999094f5e2b464a4c3bfec96"],["/tags/Java课程作业/index.html","87a8237e61bff72d0f6fcbb7ed58a17a"],["/tags/Maven/index.html","b8888a3c9f6acb79698118a18f760efa"],["/tags/MyBatis/index.html","637031719d58ff2f8845f78d13787c88"],["/tags/Mysql基础/index.html","a1db20a46e1facfc77fa28c6325231cc"],["/tags/Redis基础/index.html","773550f1108ee265435f96e3432dbddd"],["/tags/Redis实战/index.html","5a4dc38c89058b4103f6b3d1561de6d9"],["/tags/SpringBoot/index.html","6899b81b68bfc313b9e31761b22afea0"],["/tags/SpringBoot项目/index.html","71f490c0362dc7106c790384d0af4b68"],["/tags/Spring整合系列/index.html","065c3c4d29b73dd483841804a2cdb8aa"],["/tags/index.html","e454e3beb6718ed6727bc43ddf29b297"],["/tags/redis秒杀业务/index.html","7ab074215ad65e3734fdbbf424024614"],["/tags/响应式Web/index.html","46e1bea6a1c501e027cc5aa9691b2b28"],["/tags/思源笔记相关CSS/index.html","e5d1fcb2a658b0baf073dbb0f53e546e"],["/tags/我在人间凑数的日子/index.html","c6b81dbafe7b655911006eb8af253fa2"],["/tags/操作系统/index.html","e875544837d5417ae978e0f8f8ecac7e"],["/tags/数据结构作业/index.html","65496c87e5c3bb3f8fe3b430d5d2c9d4"],["/tags/碎碎念/index.html","582dfddd979f07a80724997aa355cb43"],["/tags/编程和环境配置/index.html","e75f1a02225d58b2ecbfaa089d62a304"]];
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
