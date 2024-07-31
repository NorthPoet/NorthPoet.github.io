/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a2af91019f88a9123f973b2f90dc9209"],["/about/index.html","660ab7a0f22b35831017949321f35e73"],["/archives/2023/11/index.html","81335ac8744037aad4f90a520ec84ce8"],["/archives/2023/11/page/2/index.html","bdb505db57bb3dd56c88c35622e82302"],["/archives/2023/11/page/3/index.html","bc6118f7f190798b4715c44eeeb5e0e0"],["/archives/2023/12/index.html","4ba738262d28c85a1ce044e6fc78aef5"],["/archives/2023/index.html","eea0555ccd3b3890b7e8f9ccbf1e03d9"],["/archives/2023/page/2/index.html","ca1aa6f837c4dbe20388d5644ab50928"],["/archives/2023/page/3/index.html","9961eadade38e045847f9cd5ea77d7d5"],["/archives/2024/07/index.html","c35bc8def285cda1e7f3b1756ebfeed4"],["/archives/2024/07/page/2/index.html","7561075f6eb95cd47ae633a24c1c0f84"],["/archives/2024/07/page/3/index.html","07be6409f4adac07c9b0ac943d5870c8"],["/archives/2024/index.html","9764c1aa9a13454e7a13310f0e519fcc"],["/archives/2024/page/2/index.html","13512e9da41c2635d279543c9296c8ad"],["/archives/2024/page/3/index.html","beac2939e87d8b06909ffcf8930d6b3c"],["/archives/index.html","e4dc1c8285a14bdb5a89408c512136c5"],["/archives/page/2/index.html","590f41ab8db489d071f1773ff4e5c78f"],["/archives/page/3/index.html","8f558c7e2dbc55458e572df41f594c8f"],["/archives/page/4/index.html","a61ba66a36c93cdcd94a97d79bd95c89"],["/archives/page/5/index.html","835eeac684079a47d71cb178cd9c492e"],["/archives/page/6/index.html","e73916ce9a27af46e3df222ed4ea60b9"],["/categories/Java后端/index.html","3314c1b9ed054742001ef3e9e38945c8"],["/categories/Java后端/page/2/index.html","053aa8362c95cec0aa3d83ec30ad36ea"],["/categories/Java后端/page/3/index.html","2bd0a7a7444b86cad877eb1fed992dff"],["/categories/Java后端/page/4/index.html","b8ce090d8a60f6b3d4c7871fa8d1b9d3"],["/categories/index.html","96529acd08dfc63802d22865395a06e1"],["/categories/友人帐/index.html","30c4d454e36259182c8a36374b3ab5ae"],["/categories/思源笔记/index.html","743f257faa608ff8b500dfb9e44712b7"],["/categories/版本控制/index.html","ae4ab341543f5138c4e8453402399d4e"],["/categories/考研408/index.html","698daa4a841a455cc16c0813920e6e34"],["/categories/读书笔记/index.html","ab2c5e3da0a445dbeef641332f7ab06f"],["/categories/软件工程/index.html","d9e1e7656f39b77fb36a4cf3f0dc2941"],["/chat/index.html","a6ad01e99761aca825808ab6c288707e"],["/comments/index.html","6b0392d6e2d45b3fe932f0a565312711"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","bd8ef526305906bf271dbb8e54904536"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","55279176c2ef44a8642731efcd443f7c"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","2460d9325e6d41731230434eca61e48e"],["/page/3/index.html","a7d1ea3cc2bb316e619e1a0c1d70b712"],["/page/4/index.html","3531e57d61cf355fae48d0518e3ef086"],["/page/5/index.html","38714fe87c6f2c9876a25dcffbb83c50"],["/posts/18bf100b.html","f2cdf85a65aa98fac0421fd0db7cf359"],["/posts/1fcb7e57.html","2b459a4dd8ed461e7182daf862a5ecdb"],["/posts/254393f0.html","a73e026e34c2c7c28c389e585980859a"],["/posts/28b3fa6.html","d0584f6644962ebe4cf9e9f62b8c795e"],["/posts/29f0725f.html","b33e225bf797684a9a19a6b8342e64eb"],["/posts/31c36041.html","1570629d7c7a9a1885d3372ad7235ee0"],["/posts/3513a7dc.html","70e890b9b1f4dff45b22a6ddf5a7651b"],["/posts/3e69d26.html","23dc1b9e03231c46067a7d4cad611489"],["/posts/417de2f1.html","ca6e28c62a1872509ab1ff61dd4976b8"],["/posts/442fdc66.html","5d7b5917e384b1d303aef9b1b955dccc"],["/posts/458f2701.html","b7c3fa8e7ccfffb0f2f0f041cd40f284"],["/posts/4e6d3c3b.html","7b556d36d81a5be62c0ccf9238f576c4"],["/posts/4fc13381.html","caf25e8cdc53f1a0a8730150d3f64d78"],["/posts/51361b40.html","5bd57d83045f0ab7dc2ee0928702eaa9"],["/posts/5413be0e.html","98c4277f1901c2469548f21a804149eb"],["/posts/5596f2.html","be9e3ff9a9ee0bba20811b5254841d2b"],["/posts/5c81b531.html","5ac44e43528b043d284967d8e9990c45"],["/posts/629aaf98.html","548743e63be091b5214d1bf170cc19d4"],["/posts/65c29e.html","7f7a873ca1a214c80a4e5d156c56ed3c"],["/posts/7105be24.html","160b2cbc7e9b2bf10e1332d5bfbefa9b"],["/posts/750cb0cc.html","2dda108897d2143e77fed215feb23e8f"],["/posts/76897b5c.html","04bb14f2a656e8bd2749bb80c3d65f2c"],["/posts/852e85aa.html","61545e26883673322b93b653ff806180"],["/posts/8712b9be.html","dcfceef2beb4d0935129067fdb069f6f"],["/posts/8e1cab8e.html","9a231b38611b5bc1f219f0d32d4c46ff"],["/posts/8ebfad52.html","f03722b1d4622d3d7e9feda91f359b9b"],["/posts/8fd19ba2.html","9a57068d0ca28f20fff1d12bf9c8bf12"],["/posts/92d0de5b.html","39f78f8013ab8cdd9fd9375717e93a0e"],["/posts/9e3d6f34.html","f579d425fba303f5b2cba018b39fada6"],["/posts/a0708e01.html","68cbe054fd67f369a64147a4d3a3ec50"],["/posts/a25a408.html","2a89feb036833591b08f4f79a0716e3b"],["/posts/a6b15897.html","5907d7315c1b38878062d09dd65b6348"],["/posts/a9867134.html","f1319cd6192ac1a14bb17202262a7cd3"],["/posts/aa351366.html","01fa1436828a63eba5d3a3f49bb9b302"],["/posts/b42f7f50.html","29e8e613b96f98998af5119e84f862e4"],["/posts/b492def1.html","89480b614c6d2c30eb1ab62e6b060b2f"],["/posts/cca6755e.html","f40e7c778d379fc61205ebd6041d3541"],["/posts/cf1cd846.html","0618f56152d83d540c542d12074f03d0"],["/posts/d6a434b9.html","fde5a77bde6a13b1cfcb4b6a64f13fb4"],["/posts/ecaa32e3.html","10fa683a3e12762167fe4b1cf336007f"],["/posts/ed8ba887.html","4ee9fc08b1be55f41f76ff9e4668ce50"],["/posts/edab46fe.html","a132e190601116df08cc642dcb1dd859"],["/posts/edd0080.html","39c0413ba9b2af8a419c4336458ef54f"],["/posts/f2f795cc.html","78621b893c247f4d03a19d5f12f1b762"],["/posts/f7c947df.html","b1da155b8d50e292307b7736d30d04b2"],["/posts/f7d3a65a.html","53d26b253179145aa7a59f8c133d62c5"],["/posts/f82b2580.html","8dba5968e09fa2d1e1ec0f19df55477c"],["/posts/fac97174.html","88cf61e50e25647620bd399fd02e7f9c"],["/posts/facab7a2.html","d91152a2bd80bb9b83e3fda47e195795"],["/posts/fdab9a5f.html","8ec3faf5ae6a45a70ac1df0a46235fae"],["/posts/fffd9e73.html","dd3aa3d564861693acfdfb31c77d2a9d"],["/sw-register.js","ce10d83a7131871760afcd2ffa4c6d80"],["/tags/Git/index.html","c703ac029a08bf8016e871f6f8f160f5"],["/tags/IDEA的基本使用/index.html","812dd2583c6cf423bbfeccf642a2bc39"],["/tags/JavaSE/index.html","3e4db017124c1bba1184cab8900752a3"],["/tags/Java基础/index.html","984ffa932fff548e6abb29c7034d73cb"],["/tags/Java课程作业/index.html","62f6ce752cc1adc3d599d600161da975"],["/tags/Maven/index.html","6d6cc9dc3e297131f232cc6c98cfc62e"],["/tags/MyBatis/index.html","34f1ee9f61d1d8f02d9978586f3e8a2d"],["/tags/Mysql基础/index.html","c08c560985412ec4211090f57794ce04"],["/tags/Redis基础/index.html","a4dab9d6a60790b536653079371dd1de"],["/tags/Redis实战/index.html","b85d2e4e57597793794a4f4c45598e8c"],["/tags/SpringBoot/index.html","9f6a2cad7ee3d8b18b6a7e9b238e07e1"],["/tags/SpringBoot项目/index.html","7f0e7c47c30cff3aab0286a578ce28c8"],["/tags/Spring整合系列/index.html","794b3be63be53189b9b70bf2ed17bf7e"],["/tags/index.html","eb4be52cac832a09f59a23906738b085"],["/tags/redis秒杀业务/index.html","5a6e4d47a49bfef4ef33699d617226fe"],["/tags/响应式Web/index.html","eb368a0ef2c9d02966db95b882518be4"],["/tags/思源笔记相关CSS/index.html","54fb0eaa82cdb632f147f625d366c98f"],["/tags/我在人间凑数的日子/index.html","69ea9c7bbdba68df7b6df784c78a1d97"],["/tags/报错杂谈/index.html","2dd5eafec67e8e8d4d40a3966d2e9def"],["/tags/操作系统/index.html","b93b9e96672143b20cdeb23706fb4bbe"],["/tags/数据结构作业/index.html","45f6f61e66320c5aea7b7e3ec590b3d6"],["/tags/碎碎念/index.html","323242eb080a491b0074556ec49409cf"],["/tags/编程和环境配置/index.html","f454f6174352b2d693e36cc6e42b7360"]];
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
