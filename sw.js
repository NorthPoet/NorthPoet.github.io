/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","69f2cebaac42c7a92817704e79c3a8b0"],["/about/index.html","713846922c9806fd7a73790164245a81"],["/archives/2023/11/index.html","d2d955afb128d124b91d4e78de403be6"],["/archives/2023/11/page/2/index.html","ce3e56f1627ebdeca01c0802585e1a28"],["/archives/2023/11/page/3/index.html","6bcede7bb619d0e573986debc1516a48"],["/archives/2023/12/index.html","6f4838ed8aa084e5c638d10cf90d711c"],["/archives/2023/index.html","bc903ddf67278494aac1ee56ff6987a3"],["/archives/2023/page/2/index.html","302c780af755475747abbec6f48b9db4"],["/archives/2023/page/3/index.html","cba7ef083caea07373d4b90e72225ffa"],["/archives/2024/07/index.html","b83e50fe0690375f8bfb789e023a53e8"],["/archives/2024/07/page/2/index.html","1b53fef93df9554abdbd629262178c85"],["/archives/2024/07/page/3/index.html","12e2b25c9baf73cd1c69a2042d5caab4"],["/archives/2024/index.html","d3415add079ff5885cb854d3f96a624c"],["/archives/2024/page/2/index.html","87f1892f9f3a3811bbd536cef042038d"],["/archives/2024/page/3/index.html","c619e9b0e3865dc527df95465df19c0b"],["/archives/index.html","32a46706023e71ce4daae47cf73e3888"],["/archives/page/2/index.html","3eab9541ea38dec9897b4ca911695c00"],["/archives/page/3/index.html","8bd6cbef340398d7c3c059bd99032146"],["/archives/page/4/index.html","24314897d2b100c3942020d58327c5d9"],["/archives/page/5/index.html","5fba303edf39a5073fb4629c2517519d"],["/archives/page/6/index.html","6f879c80b3cde1f7951c14d74a53d61c"],["/categories/Java后端/index.html","aa733b109816742c3312c6c85652ff54"],["/categories/Java后端/page/2/index.html","b7bacf7cb183edd264ee5aba2e3e50c6"],["/categories/Java后端/page/3/index.html","a621e7685b1bc6710c21babd2e877774"],["/categories/Java后端/page/4/index.html","f979e2721ba4924e8d4f080b3aafa538"],["/categories/index.html","76b87b30457e4043199085d206937c6a"],["/categories/友人帐/index.html","db9804332bd47cc599d7a89631d48a0c"],["/categories/思源笔记/index.html","253bd9fd4b17b600eb163993b72f2d70"],["/categories/版本控制/index.html","46d8da82b3b5db7f72f35790a160b6f2"],["/categories/考研408/index.html","82acc4d92a192ac7e84877de8be80d88"],["/categories/读书笔记/index.html","f2b969066fb5fad0757ec061d152bebf"],["/categories/软件工程/index.html","747346e52a93fe413e27da8d3685f7c5"],["/chat/index.html","c96ac9ad465a58ead73fee54cdb71eee"],["/comments/index.html","600f925dfa91efc9d433405279fb5e81"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","d9b3dc14d654ace590d0f94575a7eecd"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","7a2a57fc3715ec96573851a511f42606"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","91a81f157007442e1b649d682858c835"],["/page/3/index.html","682a59df259284dfffb4caf1d0b0c9b9"],["/page/4/index.html","35b03537534878027342a14f806e5709"],["/page/5/index.html","d6c2352fd97b714378b8f634fa45a1e4"],["/posts/18bf100b.html","239084a99733073903c67ff5faacb509"],["/posts/1fcb7e57.html","2d40b9fbf2ca8a50f6633ef24b772f8f"],["/posts/254393f0.html","ec9bde97a31bdd10bfb89b1eef871981"],["/posts/28b3fa6.html","22fac15dd83a1f971b4d0a6d99260667"],["/posts/29f0725f.html","aecc60eb8038548f590c31514417a9fd"],["/posts/31c36041.html","cff22e32c3a338ad10526b17a5dd90f1"],["/posts/3513a7dc.html","f67d3861ddf131aff7e6f6601963cd2e"],["/posts/3e69d26.html","6868ce3b731bc3c8b09ce82fbfec0724"],["/posts/417de2f1.html","a93afd8d36c62caa30d04e7261954aab"],["/posts/442fdc66.html","ce6141218871283c7c71c9e2002d4845"],["/posts/458f2701.html","a1902b33e1a003e4b25ea45b6f677cf9"],["/posts/4e6d3c3b.html","842eb5cf330243006abf5e843fa9931b"],["/posts/4fc13381.html","a750c21031e7f4594419bc504f8a405f"],["/posts/51361b40.html","6ca5260248452c45b66ec568a085505d"],["/posts/5413be0e.html","eb41888e5108346a0ef3e9ca87839b23"],["/posts/5596f2.html","b0960b706d05926b0a08f28b42a8f127"],["/posts/5c81b531.html","6b501ff97fd7f1d905878b2cbef4d7b5"],["/posts/629aaf98.html","4dc7361584654efca77d48f12e5ab4b7"],["/posts/65c29e.html","8bb34224148c5fff8cdcd55cd23ca666"],["/posts/7105be24.html","fe972beb2721944150aa3e643dd17ca5"],["/posts/750cb0cc.html","45364d2dd13e3c16e60dcdfd31cf09a6"],["/posts/76897b5c.html","a224f7f57a8c5a1bf5d7c91253897ce4"],["/posts/852e85aa.html","d1578740ff28e803ca869e7a04e5d77d"],["/posts/8712b9be.html","f67c64f8bfe1ca276dcba21703cebfe7"],["/posts/8e1cab8e.html","b929c8a56d4c9dba0e8cb693064e4c3b"],["/posts/8ebfad52.html","22500f4a43995148ab6783273de1a03b"],["/posts/8fd19ba2.html","ba4dcee9ea99a65af1b8ce7205afa995"],["/posts/92d0de5b.html","1fbe6eb696eca49a0e313cd000d9f74d"],["/posts/9e3d6f34.html","f0a897b14957612f2cfe45de2a10b869"],["/posts/a0708e01.html","2f259344802f2cb2ba06603874e65630"],["/posts/a25a408.html","645050456c2d7da9b8939c5565b5bdef"],["/posts/a6b15897.html","de2fed40058a0a965d9d5c6c0ca2a92f"],["/posts/a9867134.html","90df5deb48d6ba86fad1e713c6cd7268"],["/posts/aa351366.html","94e7470f1ef9d8d6d2c3a26257b98c47"],["/posts/b42f7f50.html","51aae8a39fa2b680476d1a17d1eb7bad"],["/posts/b492def1.html","e28e35ddb3832a5706b505f1f6483b6a"],["/posts/cca6755e.html","f3d853c050eff0b915f5e26b0a91d94f"],["/posts/cf1cd846.html","eea1d9e0af741ef862f7a340dc629c50"],["/posts/d6a434b9.html","59ab7d2a3dc863d334a8149010da33e8"],["/posts/ecaa32e3.html","566b9e17691e9ccd56b9c5af00445f78"],["/posts/ed8ba887.html","f6d0856e10972581e0c3e18cca0c2342"],["/posts/edab46fe.html","e869bea5ce54e773572dc0bd65a099a7"],["/posts/edd0080.html","9e9ee4ae9fd2ee400263fe2b91fe924e"],["/posts/f2f795cc.html","2c4a704287f69fa47bc5bdb203cad9f6"],["/posts/f7c947df.html","82dd1d6a497f70f9f2c33e7838bc959c"],["/posts/f7d3a65a.html","7634725e2274da6646aa87bf355e884b"],["/posts/f82b2580.html","527dd90c7e824d2a79ac368cb383e185"],["/posts/fac97174.html","f05b1c2e20260c8b9466983c189cd96a"],["/posts/facab7a2.html","3620b9760da187d72d23883d97d7bf21"],["/posts/fdab9a5f.html","46ecfa7097eab7399a60917d8acb5082"],["/posts/fffd9e73.html","4c27b683519848035dabc3f591347778"],["/sw-register.js","dafc3165e00c40cd2fec6cf12c0b6450"],["/tags/Git/index.html","cb91de90cae6892ed87ce6c0c38e3818"],["/tags/IDEA的基本使用/index.html","726c23d61304c892f9d98940fd30e459"],["/tags/JavaSE/index.html","1ae946d64a5546793ca9d9cf8e481b7c"],["/tags/Java基础/index.html","5c59eb1e0b9a96ad45cd9d2009287be8"],["/tags/Java课程作业/index.html","2d7dd2b734e3d9ccb2d5756e1a3c87bc"],["/tags/Maven/index.html","7520a796a2b01a114964fce83db62bdb"],["/tags/MyBatis/index.html","a29f1dcd0e597df2a0d3d31435a3a79c"],["/tags/Mysql基础/index.html","b4a3c7ac908063f811bce1ba0eaa23d8"],["/tags/Redis基础/index.html","4d70b25dc82c053d5d54bbf6030e502e"],["/tags/Redis实战/index.html","979ab6b04943262bdad5dc57a9fd0087"],["/tags/SpringBoot/index.html","a06b45b4916a870da5c9a9a521fd0783"],["/tags/SpringBoot项目/index.html","113ddda911874be0bd782fc04414ad27"],["/tags/Spring整合系列/index.html","be2666561b46dbc3a7d0632447586fba"],["/tags/index.html","ed3bf077d26c66b282ccc7ff258ccade"],["/tags/redis秒杀业务/index.html","a6d0fbe60c93f6edf40c4d39bc931e3c"],["/tags/响应式Web/index.html","6f0efdff6c60840fc45757ff3807ada7"],["/tags/思源笔记相关CSS/index.html","693ad64d0d8e2ee95c30af9c7c8fa908"],["/tags/我在人间凑数的日子/index.html","7928b8d5906a81361f443013633b2e0e"],["/tags/报错杂谈/index.html","40baf6747866c4a6a238399c17622860"],["/tags/操作系统/index.html","b9531b3f76cd12db78deac709cb39cbe"],["/tags/数据结构作业/index.html","ab1e1665e5f8ecde36d2c00f8308d730"],["/tags/碎碎念/index.html","e28624e065703f762ab9161a997818b1"],["/tags/编程和环境配置/index.html","3d6a74b8e2a6f1db0d1ce9d508811607"]];
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
