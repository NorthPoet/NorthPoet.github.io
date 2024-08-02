/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","edf8d04286d87af496ae3d26fe673d22"],["/about/index.html","10e96ac54267f5472f4f76eef1212529"],["/archives/2023/11/index.html","27626f2d260a5b5cf8de90c902200961"],["/archives/2023/11/page/2/index.html","1e374add881a6860ad6dbf63745f8d4d"],["/archives/2023/11/page/3/index.html","83196be4bc01c41c806b47274c41e05d"],["/archives/2023/12/index.html","c1ff2fe991cdf2428aa7bbd3e6896eca"],["/archives/2023/index.html","4c956fac6fe1199b2979b98c9b74a072"],["/archives/2023/page/2/index.html","6773c652153a98785afd772dda33c0b7"],["/archives/2023/page/3/index.html","39f4467c0a9d7f02ff40f33ee278110c"],["/archives/2024/07/index.html","e4b835366a4dfe7c0ff363ff69ecab7c"],["/archives/2024/07/page/2/index.html","32a3335a9b8e46251261e4694d74e67e"],["/archives/2024/07/page/3/index.html","33cde8f7355b9f9e433f5556f10a1377"],["/archives/2024/index.html","9f4192472434256af2f5732f4b88d287"],["/archives/2024/page/2/index.html","75790dd71bfced6cea6a15b181085eec"],["/archives/2024/page/3/index.html","1c86fbae295633dae385ce7b6dc46dc8"],["/archives/index.html","edb523bbe59b2617c33748becec2fe4b"],["/archives/page/2/index.html","bbb63799429b76069db3df73c32282b5"],["/archives/page/3/index.html","817c22401b521e78ce4e3f0e1e489e3c"],["/archives/page/4/index.html","dc751cecafc0abbaa6834d4c3da48af2"],["/archives/page/5/index.html","662c3d991b84d67ab5cd286488c3cfa5"],["/archives/page/6/index.html","9b467140de945266af96ffb2dcb7cdc7"],["/categories/Java后端/index.html","96a7f3e782cf9369d1da0b00fddecba5"],["/categories/Java后端/page/2/index.html","e815d2b0099f8eaa0df1fbdd9dbf0fdc"],["/categories/Java后端/page/3/index.html","d0ae4ef5f78de7137a896f95d7edd9b0"],["/categories/Java后端/page/4/index.html","17f544ccce4555a0295f83013c09ce0c"],["/categories/index.html","5ca0bc7fed13bd287de88833eac2f955"],["/categories/友人帐/index.html","2f0b440f5208636ed8d3d3461026b336"],["/categories/思源笔记/index.html","508649e62877e12f536e12d9cbcdfd9d"],["/categories/版本控制/index.html","541448fab7712e2d2f658ee1cf6fe457"],["/categories/考研408/index.html","d56c784c6d2d6f26a10d910ea9bb9c1c"],["/categories/读书笔记/index.html","150ed9da6f3daad6856a4f999d81a0ec"],["/categories/软件工程/index.html","8669d7e25a511c01942daeb91f5436c8"],["/chat/index.html","17cb8607a64f9319998eeb6eac00176b"],["/comments/index.html","2092f9573af357b50535057dedb9dec1"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","2ade418cc337ace3368d3e887241a5e1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","3f4e98cda4fc9a61b662c41ad3ea773e"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","624f48c716beb4eb00e46b1883dc97eb"],["/page/3/index.html","38fd80632a982b7bbb8d8d24f4034c6d"],["/page/4/index.html","6487e6375ac4369f43b2cf0b49987929"],["/page/5/index.html","c9bba1451bf18740e4ec3296542f6640"],["/posts/18bf100b.html","3f6544fa86c3641a09de20308603a954"],["/posts/1fcb7e57.html","4e6ca23f174072e4a896816fa701f932"],["/posts/254393f0.html","91168eff68f07efa77bd5168f6bec0e7"],["/posts/28b3fa6.html","0d1c03629cd753f8800812c8248de455"],["/posts/29f0725f.html","fda6f3644174dd864b112d65c49a4758"],["/posts/31c36041.html","4f392b007bc1e7cde6fb82d5acb1c917"],["/posts/3513a7dc.html","d1eb6f7b06054989e9e58a60b7609778"],["/posts/3e69d26.html","860ba0f3b3f44b12079446dcbe413584"],["/posts/417de2f1.html","43bf40273bddf1075a91baea9bb5bd4a"],["/posts/442fdc66.html","434ad73b8dba6a7d7de9cbd5709a2893"],["/posts/458f2701.html","ce3d198e98a66e4f354bf1ca0579b8a5"],["/posts/4e6d3c3b.html","ca0e4dd795fa1b239817961239f64e47"],["/posts/4fc13381.html","269a2a0fe04f53678a0ce4ced65714ca"],["/posts/51361b40.html","c443041e1a0fa24ac5c7f448bd232609"],["/posts/5413be0e.html","ea9e70aff92a9ed954a989ea60b62259"],["/posts/5596f2.html","36d7ed4d6d0cb424376d1d81655a4ca5"],["/posts/5c81b531.html","f9cf42d24bd99178bfc52237ae73a466"],["/posts/629aaf98.html","60c1229abbadf61ed176657ad709fd88"],["/posts/65c29e.html","af9df12e1b0f09c93e850927414aa4d8"],["/posts/7105be24.html","d323335afb5d345c43c2dab43ddc8f6e"],["/posts/750cb0cc.html","25174b30d58a316e35b2025f1b903802"],["/posts/76897b5c.html","de5e93a189d0ebf067181fe7e98780bf"],["/posts/852e85aa.html","425e6439c357c902f63e35f2e1365275"],["/posts/8712b9be.html","e25b5d57c1a2f25ceb969239117c0c72"],["/posts/8e1cab8e.html","8f024aa0c9857a453db1385d689a476b"],["/posts/8ebfad52.html","aef2020616f1b112f3b8dca231415ea6"],["/posts/8fd19ba2.html","8d0e09e3412e4e38a65f13b6c070a84d"],["/posts/92d0de5b.html","4781a31674e087f8910d0dda1513b49b"],["/posts/9e3d6f34.html","97e2bc477cbdeefde9d18858037ed5b4"],["/posts/a0708e01.html","57f70bb5f1f7dadbc2a091f52532179d"],["/posts/a25a408.html","609a26b0d801b61d7f1f706f4f061261"],["/posts/a6b15897.html","4f8b264c18a73bcf5e1e6c3b07c5f232"],["/posts/a9867134.html","bfd29c915cfc7cc886d42ab58b116419"],["/posts/aa351366.html","fd0f55c06cde8de077259f6d9d9aff68"],["/posts/b42f7f50.html","08a20a7500037a3b8f8a281765bc54c7"],["/posts/b492def1.html","98e0f5274bde84230cdf917e52d7b8b4"],["/posts/cca6755e.html","50073c8e28a22ab5aedae4c1ef3e57c5"],["/posts/cf1cd846.html","47ceecef08bba8e0805361e128a44734"],["/posts/d6a434b9.html","17f0d8d4e566f0fa0e5a2144129e3f6a"],["/posts/ecaa32e3.html","e8a22f949a334f830b2ed10356e042b9"],["/posts/ed8ba887.html","94621b19679593ce8fe97da3136087b5"],["/posts/edab46fe.html","0fb7b71296426044ec2afc09f6fc6610"],["/posts/edd0080.html","5ddda39730e11f359aaa5c93748913b3"],["/posts/f2f795cc.html","93dbc63a1657e71323fd3e2971ecea60"],["/posts/f7c947df.html","32c5a584d47c217455500105ab068570"],["/posts/f7d3a65a.html","c96b148b895a2e7ebcaac2d0a6bd3884"],["/posts/f82b2580.html","d74e0bfedfb4e298c96499fa039ed746"],["/posts/fac97174.html","9f7e5bca2cc5b934e4a8d96cb9114972"],["/posts/facab7a2.html","f40c5e60d1ee9ceef307c76ebc72fde6"],["/posts/fdab9a5f.html","826f29f081a83ee9f288104a3fbde33d"],["/posts/fffd9e73.html","e5c9be5b99f7c90697b91f84f0e2a2ca"],["/sw-register.js","1ce6d729ca22c23e93e17d9f2593aa86"],["/tags/Git/index.html","be97f8bd9bc7e71db4e0d3e5ebf14c90"],["/tags/IDEA的基本使用/index.html","614a937904f7c9d3a4b808ed8637a15d"],["/tags/JavaSE/index.html","376c002a867feee866e8bc5ce3539a72"],["/tags/Java基础/index.html","1092e4385f3ab3056f3dd96e442a512f"],["/tags/Java课程作业/index.html","c4b37636747e6fd9f028312acea7e2cc"],["/tags/Maven/index.html","9b63c57a8a830276e79c5fa83f9eb706"],["/tags/MyBatis/index.html","612d943f07291faaafffdf530d303fed"],["/tags/Mysql基础/index.html","b108a4da7724615d28ecf4714a26c1a5"],["/tags/Redis基础/index.html","ca7c60d74ad380233b6809ca0565a55c"],["/tags/Redis实战/index.html","f01f3176af436fcc6beb567a4cf436ba"],["/tags/SpringBoot/index.html","b88ca641898b32e806337ab1fd2885f7"],["/tags/SpringBoot项目/index.html","45cb4e39f957c0c6b32603faf637da2d"],["/tags/Spring整合系列/index.html","7b783f1abfd5aa6f5d17a53b54d0b1ce"],["/tags/index.html","a8ce788fd83db690b880bf9910c2a86a"],["/tags/redis秒杀业务/index.html","f8f8a73c38fcff1ffe073ba9a28ea322"],["/tags/响应式Web/index.html","4daa3a8d8dcf9ebabfc29b47ccd60eb2"],["/tags/思源笔记相关CSS/index.html","4d36f82bd0820ccb651b7df929f45dac"],["/tags/我在人间凑数的日子/index.html","a22af8073898b3bc1384a13fb6153666"],["/tags/报错杂谈/index.html","91bd89910a8c2538d018e46af1d044d1"],["/tags/操作系统/index.html","d4ea9ffe653a55ea9fb945579474026b"],["/tags/数据结构作业/index.html","faa73d3a5c6cf79ed25911140b3c0a72"],["/tags/碎碎念/index.html","df30de9a2a13757c01bda5825fed077f"],["/tags/编程和环境配置/index.html","f8e629db23cd9099b89db9b7e08cddf6"]];
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
