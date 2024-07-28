/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f6d0488ceff050c31f1762c3c8278d7a"],["/about/index.html","3f4f84782c962ed74131496d2200be2a"],["/archives/2023/11/index.html","eec52e2f0943987e8e0e79b8e05e78ec"],["/archives/2023/11/page/2/index.html","e213a0ebd76878af0cf3e0c987937b43"],["/archives/2023/11/page/3/index.html","27d33a1bd965c2efe23815d7d899f467"],["/archives/2023/12/index.html","1dda032690fadff0bdd9bebe0b613b94"],["/archives/2023/index.html","98dc53b7ccf5fcc69e34dc4807bcaa27"],["/archives/2023/page/2/index.html","c8fef204b411e7c962de40fc5c937a6f"],["/archives/2023/page/3/index.html","6b968d4132bfde78d1fcda3fa559e08f"],["/archives/2024/07/index.html","cc94adb366345a586b79f060a14d065a"],["/archives/2024/07/page/2/index.html","f89065e0129b8b7ff0c9d1fc18979f85"],["/archives/2024/index.html","b8fa0e7e42f0cded7a3bf47e5bfb4921"],["/archives/2024/page/2/index.html","d695f9d15888ae775dc68a60dc8bb2eb"],["/archives/index.html","230c60fb179a56e83026f9f0136375de"],["/archives/page/2/index.html","dca9a4e9bcd23842fb4deba3d4173e32"],["/archives/page/3/index.html","0425e3ce77e2381798250852a2f45d13"],["/archives/page/4/index.html","52576bccb82314fd0988892aa76b5612"],["/archives/page/5/index.html","69edcf504154410c2254a32af8da567f"],["/categories/Java后端/index.html","0bd95320ad7277f4427de43026bfe018"],["/categories/Java后端/page/2/index.html","f659ec1fc07c8dab499223c75537a339"],["/categories/Java后端/page/3/index.html","709b0df225f93ac590d05e67016eea86"],["/categories/Java后端/page/4/index.html","38c4ca40f349ee05d6e46ce36d5fa802"],["/categories/index.html","5ab4673cee0993733066a32d4636cac0"],["/categories/友人帐/index.html","445fcb5a007ad94c8ba49b22e5434e71"],["/categories/版本控制/index.html","2b162e1db623799675c5134d01e338d8"],["/categories/考研408/index.html","ed49b5142e9975c44010d8f29d8b0d46"],["/categories/读书笔记/index.html","cc842cd78beef9291dc1f437ce32677c"],["/categories/软件工程/index.html","6e37dbff0c68c5830aa89675a0757e8b"],["/chat/index.html","30b59f14c37dd39796ae999b2c1d5a33"],["/comments/index.html","a1dc16c79ab1cfa23baa24cb11cf5daa"],["/css/custom.css","03dfd183766909e4e62c826f3424b2e0"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","5652a072b10efecc1ba87d07dc237964"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","39fcb715467ced9c40f7b84a5cdb18cc"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6c840c193b28a4bac9b5c9ad91cdf242"],["/page/3/index.html","ccffeca8d7c2c41d4b596a140947eef8"],["/page/4/index.html","d627fdb7cd67d8d512f845ff53ced42a"],["/posts/18bf100b.html","801bb5297979154f4907139b5dec04dd"],["/posts/1fcb7e57.html","16d2e9fb12297231af0d8c4eaa446010"],["/posts/254393f0.html","6c00ba976d8a3c857b56bccef871d7a0"],["/posts/28b3fa6.html","066c1294830b7929cf8b71970244bd99"],["/posts/29f0725f.html","6f9aeb1d5d62f83add230df8084f2a36"],["/posts/31c36041.html","e4e6b918c71abe4f83f7e8fb884282a8"],["/posts/3513a7dc.html","aeb9f2e19e63d48f892963b941ddf63c"],["/posts/3e69d26.html","7969c1f28e269bc69cc972e028e022c6"],["/posts/417de2f1.html","8e86b39912b5241185ac81cf35b66100"],["/posts/458f2701.html","cbb86061719541b252a74caf2867c170"],["/posts/4e6d3c3b.html","1e3f61bf2347756abfaa91e70dc91956"],["/posts/51361b40.html","9c3689d32d55925a5d8f433201b72a7d"],["/posts/5413be0e.html","9e8b4f817699e5c556bfc523a69dbee1"],["/posts/5596f2.html","e95fc8c76f1ebc81d7551e90aea6265a"],["/posts/5c81b531.html","6f68f23e1cd6ea58b5746661356b85fe"],["/posts/629aaf98.html","513a55188c5ce1405d089af709c762ef"],["/posts/65c29e.html","8ea9fef8b829d15706e583ac14ed2efd"],["/posts/7105be24.html","381cec0cc5f1ca897b4d413982fa3fab"],["/posts/750cb0cc.html","6565041dfd78782e4081371025964eb5"],["/posts/76897b5c.html","69eebed5a5eb87719eaa55df772a007c"],["/posts/852e85aa.html","8d22a4960658e27f9afdcdb0e3d37ecd"],["/posts/8712b9be.html","c9664a6f8c7c6862c5430bf8698f7d38"],["/posts/8e1cab8e.html","7c2a9139833a3a2c8257ebfbb7d9c8a2"],["/posts/8ebfad52.html","956e02771f208b31512a1bd585bd6783"],["/posts/8fd19ba2.html","a5ebfb7053e4d521b564a57a455b1d97"],["/posts/92d0de5b.html","c3e7340d4b6b279002cd2f5e2e0b74be"],["/posts/9e3d6f34.html","d08886da383f4b71bec09e4dd68dedc2"],["/posts/a25a408.html","aac493ca07d1d1931e0b12c3afea53b6"],["/posts/a6b15897.html","38f24190280a8524e47755243076723d"],["/posts/a9867134.html","34e4c989d53da2c77ef729db2f9be374"],["/posts/aa351366.html","ba7fdefff3aaaa8d61e01b8b8d4bfe69"],["/posts/b42f7f50.html","55c4635d5d9a18ef30fea8c3b0f4511f"],["/posts/b492def1.html","11c79c47a2b70ace942212c8c616b367"],["/posts/cca6755e.html","bcbaa9458758736b5f12b414a0ad2591"],["/posts/cf1cd846.html","26bb70b798264a7796914028912e9fda"],["/posts/d6a434b9.html","7c06e8e3d011cf3016c0c9a7952f2d8f"],["/posts/ecaa32e3.html","68c1061fe61894933967b880d0cd0616"],["/posts/ed8ba887.html","8067393af270f51dc7cf3bf27575fd66"],["/posts/edab46fe.html","7dd316b2550115a06c260f373749c410"],["/posts/edd0080.html","32cebd24a4852f5d590f2249c5286023"],["/posts/f2f795cc.html","d184b25c15403346eac320ab10fe3274"],["/posts/f7c947df.html","c36dc65cbb81a798af56e9762594972a"],["/posts/f7d3a65a.html","e76def1fcc5186400db33735251cfbf6"],["/posts/f82b2580.html","f0235190fd7281cb4bdeeb67c66b7217"],["/posts/fac97174.html","886e5e1a039cc47af000ec71ffcf2f96"],["/posts/facab7a2.html","d650a4be31696bfd6b88e013688a9d83"],["/posts/fdab9a5f.html","929813b4a2dcadfe16f9fb723eaec9a7"],["/posts/fffd9e73.html","da68a1eb579803647f4a62f557db39d8"],["/sw-register.js","2d45f48170e65dc6137dde0d82dc1597"],["/tags/Git/index.html","61890fb94b87633ad2a9bccd83da5cf7"],["/tags/IDEA的基本使用/index.html","d6f46e6986b62fe6249466effa97b22a"],["/tags/JavaSE/index.html","c1c6d99641bb6a43c8da46a465bf562a"],["/tags/Java基础/index.html","5d4cb6dc0656d5ce9f1c77c1d5e202fa"],["/tags/Java课程作业/index.html","721598fcabae84fa196ec48538d530b3"],["/tags/Maven/index.html","5e2218c88f660bc6f03e4e4a0a0cdb9d"],["/tags/MyBatis/index.html","ae9576cef9c9c153bd655ae18304ef24"],["/tags/Mysql基础/index.html","f552bebc4804c681e61b7477d19135ff"],["/tags/Redis基础/index.html","45d0d154faa77ad55796a7986a27415a"],["/tags/Redis实战/index.html","4046b8c2c63f4565d21bf3ed63e21436"],["/tags/SpringBoot/index.html","0bcdeb0719fe1646fdfe2dcf46de2385"],["/tags/SpringBoot项目/index.html","894fe94314fa1c33619af67a493d556a"],["/tags/Spring整合系列/index.html","1f3774dc992b0f5b96195e420ce31269"],["/tags/index.html","361107775a4ae3b489f2c5ff81c51f0a"],["/tags/redis秒杀业务/index.html","c49de1080cde6004226252f6249b6889"],["/tags/响应式Web/index.html","6dcb4b87f9dd2d88181e65c72b4dd177"],["/tags/我在人间凑数的日子/index.html","2ec50789dfd0a6c83bea1aca5a81184b"],["/tags/操作系统/index.html","a1ccc99f531f64e306739f71536a4b2c"],["/tags/数据结构作业/index.html","a0ee435dc62a49e60644d3a6be2165b9"],["/tags/编程和环境配置/index.html","cf4433a9415882427c1079c8f43d7d9e"]];
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
