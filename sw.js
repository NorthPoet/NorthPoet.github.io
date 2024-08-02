/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","df9159d014f071c0b3afdd56325b08dd"],["/about/index.html","8196a68310d5ad9293d8aed0d7194f63"],["/archives/2023/11/index.html","1822869598a9144051a6c7d0e29a08d3"],["/archives/2023/11/page/2/index.html","b751e8539f1a9d348ef812298829d1c9"],["/archives/2023/11/page/3/index.html","019f9ec8fe825160478337f03f245fb3"],["/archives/2023/12/index.html","974fcae2ff67aadd2580aa4943853e98"],["/archives/2023/index.html","a1f83ff61dfdab23ca3301f840937076"],["/archives/2023/page/2/index.html","228e02502b5e50858861f6abc2f8e65d"],["/archives/2023/page/3/index.html","0d06ee03318ff96fcc6785d0f9d312db"],["/archives/2024/07/index.html","fedbd0dfa5e54d90a4ca6ad55bdc0e1a"],["/archives/2024/07/page/2/index.html","fb36ddc3c6aafc1d6faf8b0bb336c9da"],["/archives/2024/07/page/3/index.html","749497693bdcc5d561ec464bdd589e88"],["/archives/2024/index.html","1e58f58295c5c6cb46fd2fa945721d48"],["/archives/2024/page/2/index.html","3e7ea36f11242ed1130f675b865f8bb0"],["/archives/2024/page/3/index.html","9b69c0c1604ab273047299ba50fa447d"],["/archives/index.html","b031613191951614f2e6f874661dd971"],["/archives/page/2/index.html","d743427a07e2e0e7993d1134b939c3b4"],["/archives/page/3/index.html","f00a43b63cca84b11b2e0e291727a973"],["/archives/page/4/index.html","441709038a9e4a8e6c44fe9c0d8e4906"],["/archives/page/5/index.html","70201dd9677e12e4cf23541f3b79f66e"],["/archives/page/6/index.html","e2110c7715c52050110568fb8b65fddf"],["/categories/Java后端/index.html","a6d7e37e7abca21c8eb3619e5e5d95cf"],["/categories/Java后端/page/2/index.html","da5885f09b821e6ffc2fcdf1998a2e07"],["/categories/Java后端/page/3/index.html","451b5a5d5a8ca2501851e7c960728137"],["/categories/Java后端/page/4/index.html","96660dba37fc19cec002c40df55a5e1a"],["/categories/index.html","0e432de87b0912063db70920b247a232"],["/categories/友人帐/index.html","5e946b8892df9009b15d7623a5e892c2"],["/categories/思源笔记/index.html","d360c3e0195327473d8ff63fb20bc1bd"],["/categories/版本控制/index.html","19246e5f9636e9909f37490146567f4c"],["/categories/考研408/index.html","ce5286f712b60c4a033b99bdf6a89bd5"],["/categories/读书笔记/index.html","ef057b30935950b7f0f1553c954a26b2"],["/categories/软件工程/index.html","a01e3d5aa55f422e915499c2684432bb"],["/chat/index.html","1b54f12853644af02c10f94de4e3e746"],["/comments/index.html","082279d19f1ff343b21ad00d86a8cebc"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","e7bc7a277642c16d485350eae6f3d8d0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","734f6ea5ffc06f9a5ca07a02d7315560"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","40d3e80566b4e8a7e0f9c9ae83fe2f0b"],["/page/3/index.html","dd474f97ce1f23235ab829fe4cece63c"],["/page/4/index.html","523e6f5e88f50eb55fb61f323f1bf272"],["/page/5/index.html","aab563a383ba7900425cb6ca2f4588ae"],["/posts/18bf100b.html","3f6544fa86c3641a09de20308603a954"],["/posts/1fcb7e57.html","7370c2528cd6bf142549caca262c4893"],["/posts/254393f0.html","91168eff68f07efa77bd5168f6bec0e7"],["/posts/28b3fa6.html","a5ad71f6c30c91014bd6d9571b5992a1"],["/posts/29f0725f.html","fda6f3644174dd864b112d65c49a4758"],["/posts/31c36041.html","4f392b007bc1e7cde6fb82d5acb1c917"],["/posts/3513a7dc.html","d1eb6f7b06054989e9e58a60b7609778"],["/posts/3e69d26.html","860ba0f3b3f44b12079446dcbe413584"],["/posts/417de2f1.html","0252159fa7b9946cc9e57ee8fef99640"],["/posts/442fdc66.html","434ad73b8dba6a7d7de9cbd5709a2893"],["/posts/458f2701.html","a6d4f0d2af707af93824034e160d60dc"],["/posts/4e6d3c3b.html","a49bb553f63876d5dbb13df6e21bc38f"],["/posts/4fc13381.html","269a2a0fe04f53678a0ce4ced65714ca"],["/posts/51361b40.html","09f1036a30526ef587b68c48c64db2a2"],["/posts/5413be0e.html","d110a2c0e09b955452477aa8b9f2b573"],["/posts/5596f2.html","36d7ed4d6d0cb424376d1d81655a4ca5"],["/posts/5c81b531.html","f9cf42d24bd99178bfc52237ae73a466"],["/posts/629aaf98.html","5a3815cb635fc6b5e9dd067a0b9a75e5"],["/posts/65c29e.html","5fd08a7ccadaf27d1991333f74d3c3e9"],["/posts/7105be24.html","c6cbba5e252144a48dfa72f5913422f2"],["/posts/750cb0cc.html","25174b30d58a316e35b2025f1b903802"],["/posts/76897b5c.html","bf009b22df30de587b75d35bcd888ad9"],["/posts/852e85aa.html","5bffd2c32931c70bfcb0d9088ab5c5d6"],["/posts/8712b9be.html","e25b5d57c1a2f25ceb969239117c0c72"],["/posts/8e1cab8e.html","8f024aa0c9857a453db1385d689a476b"],["/posts/8ebfad52.html","48090686c218fc62088d6abc517a880a"],["/posts/8fd19ba2.html","8d0e09e3412e4e38a65f13b6c070a84d"],["/posts/92d0de5b.html","4781a31674e087f8910d0dda1513b49b"],["/posts/9e3d6f34.html","b7dcf8af4ba367d3a6ae425eec5fe48a"],["/posts/a0708e01.html","57f70bb5f1f7dadbc2a091f52532179d"],["/posts/a25a408.html","d7cdd2c9ebcada9f54d9dcfe1cbd4478"],["/posts/a6b15897.html","4f8b264c18a73bcf5e1e6c3b07c5f232"],["/posts/a9867134.html","cdd7550a1de339c969586866ab50e52b"],["/posts/aa351366.html","31ba25d6a1a1cc90423ef9719dc6e449"],["/posts/b42f7f50.html","08a20a7500037a3b8f8a281765bc54c7"],["/posts/b492def1.html","6999321dfe8b8d8d5224831f38ea1b11"],["/posts/cca6755e.html","50073c8e28a22ab5aedae4c1ef3e57c5"],["/posts/cf1cd846.html","eeaa20b99d96fcd7a1a14d96429c7626"],["/posts/d6a434b9.html","17f0d8d4e566f0fa0e5a2144129e3f6a"],["/posts/ecaa32e3.html","a8207cfeed147a8b666971cb8b52e093"],["/posts/ed8ba887.html","14587325c7f129d159f8192017127481"],["/posts/edab46fe.html","84b444e43d1287ed8a0b4506c754936f"],["/posts/edd0080.html","9d9e8513953ed19a664d094d41401d75"],["/posts/f2f795cc.html","4b8308e810e03a974e17c97da54e88df"],["/posts/f7c947df.html","4d3aa4c67e30db5ee71500f120db0782"],["/posts/f7d3a65a.html","c96b148b895a2e7ebcaac2d0a6bd3884"],["/posts/f82b2580.html","d74e0bfedfb4e298c96499fa039ed746"],["/posts/fac97174.html","0ff444ade369950513156e1f9501b890"],["/posts/facab7a2.html","fcc39a284a27e5c110893e59e5e739c6"],["/posts/fdab9a5f.html","826f29f081a83ee9f288104a3fbde33d"],["/posts/fffd9e73.html","a4c29865d09639f6fdd038ac08754a0a"],["/sw-register.js","1629e78493fb79f3d99456000e36dd1b"],["/tags/Git/index.html","0f95c01c9d579f57dffe0ca1cf465455"],["/tags/IDEA的基本使用/index.html","c09c7c065b8e46ade320a5d95a3c4231"],["/tags/JavaSE/index.html","b904ab03dd92069e59298b076001d307"],["/tags/Java基础/index.html","49db958fe2b35e47a616390b109a6cb5"],["/tags/Java课程作业/index.html","c550d2064763662c30d4f20b8861af04"],["/tags/Maven/index.html","8868035f3d71da4232fd9386aa1f3be7"],["/tags/MyBatis/index.html","68ab97e96e437c6ab7ccf1e44d8ec68d"],["/tags/Mysql基础/index.html","17ddc311a5e0c6c18926b15dd7380c80"],["/tags/Redis基础/index.html","a5a269552c11c84ea94aa54e7ef002df"],["/tags/Redis实战/index.html","f6ee441036a92da91a8aecba32ad236f"],["/tags/SpringBoot/index.html","eada8d9eef54803978e003a558e18dde"],["/tags/SpringBoot项目/index.html","cef2ad38abe0a6b0b9789d4325155f9d"],["/tags/Spring整合系列/index.html","16afcc8b2b8756073722f1f0b671d4f2"],["/tags/index.html","2c525c0bf51d45d9d1e18bc44384c617"],["/tags/redis秒杀业务/index.html","9738d95d93b46752f0a7a58ea6611262"],["/tags/响应式Web/index.html","6d71dc0c85a0d281cc31ec27bbad7271"],["/tags/思源笔记相关CSS/index.html","6b11aef35c8a8fe312c948b1a1555124"],["/tags/我在人间凑数的日子/index.html","16e03743cc5bacef8807cdabd347fa22"],["/tags/报错杂谈/index.html","73a59e9284d5718a2c365ccf10e98678"],["/tags/操作系统/index.html","1cf27b1b080e3b3ab3fb891685a54679"],["/tags/数据结构作业/index.html","0c2c8cfa14746a8124c4a89b755fa404"],["/tags/碎碎念/index.html","b890ffb99daa9f2b66c054125ae44dc4"],["/tags/编程和环境配置/index.html","acb53db443ac1906e0aa7a5bf0893d69"]];
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
