/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","db4e5c94813af606f288f3513486cc6a"],["/about/index.html","02f7a0181ebfe83dd8040abc228d298d"],["/archives/2023/11/index.html","b035890086f183ce89abe6972985f134"],["/archives/2023/11/page/2/index.html","53e63adc6dd2717b14821b85d39b9e7e"],["/archives/2023/11/page/3/index.html","7d4a97eda3190d66ed3d63cf5e77c5ac"],["/archives/2023/12/index.html","6a77bcd77fb7fd92b081468c9258f19b"],["/archives/2023/index.html","6fc0fc9e1489223ad42b186ca1268df9"],["/archives/2023/page/2/index.html","49ffd00edea5d28e010a42dee0ca5736"],["/archives/2023/page/3/index.html","f173224385435dac685b72bddf0c9e59"],["/archives/2024/07/index.html","a8fd03a39b5055e386db82fcdf749051"],["/archives/2024/07/page/2/index.html","81d1d98a516af3a54f2c5a176e059c18"],["/archives/2024/07/page/3/index.html","28e6e66e1dedfe772903642db75069cf"],["/archives/2024/index.html","2506c96b778938eec90dbb352cc15ea2"],["/archives/2024/page/2/index.html","1f68f873e0b1b11a78be993560d91ff8"],["/archives/2024/page/3/index.html","bec0aef9f6b29a166867ad601c4aed25"],["/archives/index.html","20354ab3b26476cb821493ea4761532f"],["/archives/page/2/index.html","2e7ce5c217171b68ad93ba5a58dd90ec"],["/archives/page/3/index.html","8dc01dc74ddf48e52e11b09596a09a29"],["/archives/page/4/index.html","71dadd1f511ad8ba859bc708c9fe5550"],["/archives/page/5/index.html","6a0d9571db66a7e4ff9f4bd8c3485871"],["/archives/page/6/index.html","05aea7f075619015a167769f9f71c923"],["/categories/Java后端/index.html","78b87df27b92d7f09326ed9a20680e39"],["/categories/Java后端/page/2/index.html","470892d533cbc61528e34ead03a739b4"],["/categories/Java后端/page/3/index.html","d4053ea9d502840704f40f8570a3d8af"],["/categories/Java后端/page/4/index.html","31fc8cffd85d60cbcdc4b0e34a185167"],["/categories/index.html","19a416fca843449fb3584730250947ba"],["/categories/友人帐/index.html","6de16854410868d2db00f5ff9de5e848"],["/categories/思源笔记/index.html","2b1f5b7be174fc4216579a177812a9e3"],["/categories/版本控制/index.html","5691f9221956514ea28255b0c7bccba3"],["/categories/考研408/index.html","2a2fc2980cd2a42ef9e628000ee4dcd0"],["/categories/读书笔记/index.html","70e4dbe7dd37432e12b9042d5fb67a0a"],["/categories/软件工程/index.html","758ce8e709b15287e2c180badcff8045"],["/chat/index.html","eb6093853c26258ab422f7464c449993"],["/comments/index.html","5f8397117ec1c19372cc46e1b56c19d9"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","c15323d731ac57d50321734ede678dc2"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","29ab64f69337c4f3b84a7f2880a0821f"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0bd90d6ca2312dc28a72f4656a6b043e"],["/page/3/index.html","67553e6f2b0afdc1af1fccdc5e9d6cc2"],["/page/4/index.html","8db686d5f59f8a724ef63c7015bb3b5f"],["/page/5/index.html","c9ed0780dfae88b1c2989db381ead58d"],["/posts/18bf100b.html","f2cdf85a65aa98fac0421fd0db7cf359"],["/posts/1fcb7e57.html","ea6012d31925576344d51bbef8e2a235"],["/posts/254393f0.html","a73e026e34c2c7c28c389e585980859a"],["/posts/28b3fa6.html","074b69b584ea46b1beb92d802bc92535"],["/posts/29f0725f.html","b33e225bf797684a9a19a6b8342e64eb"],["/posts/31c36041.html","1570629d7c7a9a1885d3372ad7235ee0"],["/posts/3513a7dc.html","70e890b9b1f4dff45b22a6ddf5a7651b"],["/posts/3e69d26.html","e0825edbb855807d7c12b7073a001467"],["/posts/417de2f1.html","ddb3159353ddd3ac096fc8fdeb9e98a5"],["/posts/442fdc66.html","5d7b5917e384b1d303aef9b1b955dccc"],["/posts/458f2701.html","5c84e6f1c8227ddb4d70fc8a52d671aa"],["/posts/4e6d3c3b.html","a283a09d39843abf484a15ce9432e094"],["/posts/4fc13381.html","caf25e8cdc53f1a0a8730150d3f64d78"],["/posts/51361b40.html","6467d23e090834591a3ce08a82dd5b44"],["/posts/5413be0e.html","98c4277f1901c2469548f21a804149eb"],["/posts/5596f2.html","be9e3ff9a9ee0bba20811b5254841d2b"],["/posts/5c81b531.html","5ac44e43528b043d284967d8e9990c45"],["/posts/629aaf98.html","12b31d63448f111d63b9f7560c4bbe51"],["/posts/65c29e.html","7f7a873ca1a214c80a4e5d156c56ed3c"],["/posts/7105be24.html","63b0638f285e5af0f691f0fb1a774cfa"],["/posts/750cb0cc.html","2dda108897d2143e77fed215feb23e8f"],["/posts/76897b5c.html","4784c0c42aa0e934d304f7dc0880917b"],["/posts/852e85aa.html","768c3edbfb736fc999cae012213b90c4"],["/posts/8712b9be.html","dcfceef2beb4d0935129067fdb069f6f"],["/posts/8e1cab8e.html","7946b1ecbfb5fd314fa864bf9c6c1eb1"],["/posts/8ebfad52.html","f03722b1d4622d3d7e9feda91f359b9b"],["/posts/8fd19ba2.html","9a57068d0ca28f20fff1d12bf9c8bf12"],["/posts/92d0de5b.html","39f78f8013ab8cdd9fd9375717e93a0e"],["/posts/9e3d6f34.html","2412651e92e45839bd987cbd15cf37a2"],["/posts/a0708e01.html","68cbe054fd67f369a64147a4d3a3ec50"],["/posts/a25a408.html","631869896e50a4ea3bde2e4be2bcc065"],["/posts/a6b15897.html","5907d7315c1b38878062d09dd65b6348"],["/posts/a9867134.html","74cf995e2385e0e94a72006842c21207"],["/posts/aa351366.html","d8aff5b7df40888306b3638dbbc1a36f"],["/posts/b42f7f50.html","29e8e613b96f98998af5119e84f862e4"],["/posts/b492def1.html","41a75f922b1a27591340f27406c63340"],["/posts/cca6755e.html","19f0980ecfe2f001676dd438d04d6096"],["/posts/cf1cd846.html","2a5787578df878cc6f890a6f8c8d0386"],["/posts/d6a434b9.html","fde5a77bde6a13b1cfcb4b6a64f13fb4"],["/posts/ecaa32e3.html","d2d8840dd4be28eb51dc4c00b6ac1490"],["/posts/ed8ba887.html","6fbf8bb017d8823d2ee8d13cdb4b0064"],["/posts/edab46fe.html","09e78c242843a1efcdc90e205a300152"],["/posts/edd0080.html","fbb4d1b586b3e0ba4240242b3d3c4676"],["/posts/f2f795cc.html","e8e11d32ee51313a947004e24e82fd28"],["/posts/f7c947df.html","93cee4b8427b58081ed93116045ce779"],["/posts/f7d3a65a.html","53d26b253179145aa7a59f8c133d62c5"],["/posts/f82b2580.html","8dba5968e09fa2d1e1ec0f19df55477c"],["/posts/fac97174.html","619ad88183ddcb092be98c8d0c258992"],["/posts/facab7a2.html","d91152a2bd80bb9b83e3fda47e195795"],["/posts/fdab9a5f.html","79f91cec3e60d9bd27ca4185726f304e"],["/posts/fffd9e73.html","6b9f8fb4e2033e4a99e4ac5582039401"],["/sw-register.js","811fbcfa4e2399a7baf13b93f3427d05"],["/tags/Git/index.html","46c0036e12c52045cf8022354980eb2c"],["/tags/IDEA的基本使用/index.html","bb104543201350e9237eb0754e657413"],["/tags/JavaSE/index.html","0c486525cf3db98b962d0d1c989d0f70"],["/tags/Java基础/index.html","39d7b5c5902293fd605239409c580ca9"],["/tags/Java课程作业/index.html","a150401270b791ad2f8661300b1739c9"],["/tags/Maven/index.html","88675d76aa30158efc4e562c7de1d2ce"],["/tags/MyBatis/index.html","2245c769bb0e4c871abdd707ef667c7e"],["/tags/Mysql基础/index.html","5a8c1c7b354f1cdd199a7f8f219cb374"],["/tags/Redis基础/index.html","a91171618af8c7af45b1bebecf897014"],["/tags/Redis实战/index.html","63130e32fe7c3a92865f6c666f59d20a"],["/tags/SpringBoot/index.html","f2abbafa8e5b23aae1ea8fca56689ce8"],["/tags/SpringBoot项目/index.html","c7991592340ac193c0985ab8ae5670ae"],["/tags/Spring整合系列/index.html","f0072d87674fcb1a91a401e7e43be572"],["/tags/index.html","a1aee7dfba4da1ab0cdc57ba940d60de"],["/tags/redis秒杀业务/index.html","9d20c5cbda333aea18be219a14822801"],["/tags/响应式Web/index.html","b4e4cb2cad2e7c33e7f30d84ce8c85cf"],["/tags/思源笔记相关CSS/index.html","a2a8466748b7d40dead8e1f5220ebcc2"],["/tags/我在人间凑数的日子/index.html","d3a2a6b9181f5796387598086e2b9ce1"],["/tags/报错杂谈/index.html","366dbdaab2df271d6a6c9d4d8b759cf3"],["/tags/操作系统/index.html","273865c3cafb0683db0019491c177d2d"],["/tags/数据结构作业/index.html","0d5fa5955291ab86dd6795da7ec58a85"],["/tags/碎碎念/index.html","baf7a0080a708b94fcae9cb734fbae50"],["/tags/编程和环境配置/index.html","4979e3acd71e76da3557e5d240b36b01"]];
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
