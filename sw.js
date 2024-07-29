/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f73f1f05fddc5e0ad65421efb7e4d29e"],["/about/index.html","480dc65b161a1a99262363ca6089cc67"],["/archives/2023/11/index.html","d0a66d57dd5a40aa6c5ba9122aa1b747"],["/archives/2023/11/page/2/index.html","13499b7a7a2f63f65cc32798fe9aa0f5"],["/archives/2023/11/page/3/index.html","05b528be6c9ed79605716651fce3a016"],["/archives/2023/12/index.html","e30c4aa21d8aa4e0f3f4e2ff029b9dcb"],["/archives/2023/index.html","ce481ec1e5cfcc5ee88745328d757acb"],["/archives/2023/page/2/index.html","bc394d3adc16d384babfc7969b2975b1"],["/archives/2023/page/3/index.html","257675c17d548bf50836c015c1f239c0"],["/archives/2024/07/index.html","7441a8851e2cbc1d78ee23bdf90876a1"],["/archives/2024/07/page/2/index.html","a50755523920d29e52d6cf88a7b2a233"],["/archives/2024/07/page/3/index.html","39d96f0f333aed4af1089e7ee403d574"],["/archives/2024/index.html","d373b1dd9193070d84f3f3b3a224eb52"],["/archives/2024/page/2/index.html","4c63f9608605ed47fe7a6f4243283ed0"],["/archives/2024/page/3/index.html","beeea8eac5712a1d23c1ac19d54c8e86"],["/archives/index.html","eb3c6996d936731337c12950607ce030"],["/archives/page/2/index.html","4b1b271ebcf0d9beb99a37a3903f9d96"],["/archives/page/3/index.html","6c9dcb4bf99843f7a87b6e874862079b"],["/archives/page/4/index.html","a3a3207439422c265815eed0b6bcee91"],["/archives/page/5/index.html","eb5c347d929483aa210df31ae0fc497c"],["/categories/Java后端/index.html","3674c878f2d12bc030a457dadd7dffa6"],["/categories/Java后端/page/2/index.html","5525f2eadbbaae55fd0a1f15d92a49fe"],["/categories/Java后端/page/3/index.html","a72fb69d606c85f1467e78eaf023d51d"],["/categories/Java后端/page/4/index.html","5feb20e4c906995c320bae0adc56898d"],["/categories/index.html","1864fba16ad6d021cccbc8fec0d16e79"],["/categories/友人帐/index.html","7ba5e6824a852f3bac66f2d8558635cd"],["/categories/思源笔记/index.html","50becc8462755003d15534ca84d5f939"],["/categories/版本控制/index.html","ecbb0905b2809f7b4dc2de1976a2ff2a"],["/categories/考研408/index.html","d87318ca3180aacfcef5ed8e66ae0f15"],["/categories/读书笔记/index.html","819943956b45918c757107501dfb748c"],["/categories/软件工程/index.html","db1e9cd4cace4264fbc35ee9c487ba72"],["/chat/index.html","f866c53c6b154f8af53e61e673d357d5"],["/comments/index.html","4df8a6020a1a5dee1563e55af9659d6c"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","c1298b78d6cf69462719abefcd156eea"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a3197eb48c9233231290bf2489504cba"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0857d24618d00c0ad265e99e0bb97718"],["/page/3/index.html","6bc3a44afc82942e5e6465cff009b126"],["/page/4/index.html","61e41e39b383c17889ac4657166c7d5b"],["/page/5/index.html","d0ec8e627e9d2413479e49c96debe67d"],["/posts/18bf100b.html","2a6c2042d0ad2b7c940dd8c96a36b7a5"],["/posts/1fcb7e57.html","2f3349440ff1c0863cdd9f5cab6d4d87"],["/posts/254393f0.html","2d91ec46d46528187fa5266ecfcc2a00"],["/posts/28b3fa6.html","f9ce4f3d4804b91bcf7a94028747f2c5"],["/posts/29f0725f.html","ec06199685f82a370f02134cb24cf6c8"],["/posts/31c36041.html","f99ec4b4f4559f3f4f9b418439d42f6c"],["/posts/3513a7dc.html","5fe3790c62141eacd1c6eaf7d9d9f06e"],["/posts/3e69d26.html","6c9a1a4d17e06e470aca5b8df5379c72"],["/posts/417de2f1.html","08e2b78b12ea5dc1aaec7fff19492402"],["/posts/442fdc66.html","666fc72a0cd0f9e124f0b1dc72516542"],["/posts/458f2701.html","fa7ffbd5eac3e9613eb3b079967fb43e"],["/posts/4e6d3c3b.html","e8ba6baa02a4ca9ef7114d3193f444fd"],["/posts/51361b40.html","0276b6b6a0734af2e7ed8c8a29826f2f"],["/posts/5413be0e.html","3ebdf3eff94d6181569b4d12dd492434"],["/posts/5596f2.html","93a66cb82649c161e49e0b8d094d9db6"],["/posts/5c81b531.html","01c687cf2332aa118768fe4edb32ecb6"],["/posts/629aaf98.html","07a1b917040c31d84371cee3ee2f1df2"],["/posts/65c29e.html","625c45058a0974187c557c87891da967"],["/posts/7105be24.html","cfbf7c0120ddc79308cb667d08452554"],["/posts/750cb0cc.html","ad0c6e14deefcb7219252f5b85a6aa27"],["/posts/76897b5c.html","bee69cd5448a28988b6a83960500edf4"],["/posts/852e85aa.html","d9599a280559be5a571356b74ef62b61"],["/posts/8712b9be.html","099691bf170179806b12b899d33390ba"],["/posts/8e1cab8e.html","5636db4f54018c8160d68be8bf5c92fc"],["/posts/8ebfad52.html","c7019482f1afd2349f04068d0acee25b"],["/posts/8fd19ba2.html","40840234238abb0ab1d591e03c48307a"],["/posts/92d0de5b.html","627d1759449db3fade84487ec4684cad"],["/posts/9e3d6f34.html","72c78d0f564b6b5f6f26ec7b375a7d23"],["/posts/a0708e01.html","6d8d35a173068e3ad2e9a69df70db400"],["/posts/a25a408.html","917ecedfd3f18c3403341b17d1ca6102"],["/posts/a6b15897.html","b934f37a1665428a433ea7ac5c5489f7"],["/posts/a9867134.html","685a9ea0b5b72a4f3730cdaf9ce70c22"],["/posts/aa351366.html","dd44317c65f8671e0c7a5c00e4f59e5c"],["/posts/b42f7f50.html","8a66406161ba57a063a8f12f20e76e7e"],["/posts/b492def1.html","38966d46a4d3ecec7cb8c91b003b4784"],["/posts/cca6755e.html","2466fc0c6b187b47dcbcbc2d2f8aa226"],["/posts/cf1cd846.html","d10e2d95dea809687fddb54c02f2ed3a"],["/posts/d6a434b9.html","53ff9239b2d5ae60ded5d3008bfd813d"],["/posts/ecaa32e3.html","687cf28586bf75e3f4c1ab07de6cecf6"],["/posts/ed8ba887.html","5f246439884af87e7b30c98cb2407b9e"],["/posts/edab46fe.html","8dd383ddaf586c79b1774ab141d9e492"],["/posts/edd0080.html","1f4a859af7049e11d5c5753072835614"],["/posts/f2f795cc.html","3c9bf5e4d635cd1571ce10f4dd811294"],["/posts/f7c947df.html","7ece6aae32311b985deb8de2705b0450"],["/posts/f7d3a65a.html","73576b3696ed00b23e90fef41d5e43b3"],["/posts/f82b2580.html","301c6dc6109e13a350306da1ce00ce29"],["/posts/fac97174.html","6f4f6da34b4543e2737b33e8ef42024e"],["/posts/facab7a2.html","97fbb024c9d6d02b92d0ca8c45c4fd4a"],["/posts/fdab9a5f.html","49b910aefa85e8a11ec371d77bea173c"],["/posts/fffd9e73.html","11a1a6bb145f4810ec5789ec88095df6"],["/sw-register.js","c87b00e3788a328045ef9d64096526f9"],["/tags/Git/index.html","3908d544626249dd6bdcd913566beaef"],["/tags/IDEA的基本使用/index.html","23b6cd44683ee136fbf719c7342ca1b7"],["/tags/JavaSE/index.html","3f02954b2db0ba407e1b798f35f3b881"],["/tags/Java基础/index.html","41119eb79aec8271749b8faa1ae9259c"],["/tags/Java课程作业/index.html","b272f6bec84354bbaa92c8160d2b8e28"],["/tags/Maven/index.html","29715990d50e8adcc7e1c06888cc6eae"],["/tags/MyBatis/index.html","93f0ade47765572c5358f538e5c7b7dc"],["/tags/Mysql基础/index.html","d0ab88d7eff33900fb792b924aa6e423"],["/tags/Redis基础/index.html","27efdd41d694721f0b3acb04b08d67be"],["/tags/Redis实战/index.html","fd6fc62a0d53968f51d87915e3dd9a70"],["/tags/SpringBoot/index.html","5b9fef6aaa35ddd842bd70f6a6257011"],["/tags/SpringBoot项目/index.html","2faa25b489308e7877dc8997f8736fd9"],["/tags/Spring整合系列/index.html","b9269bb8ed95265f6cf3b18cb462ef16"],["/tags/index.html","0d00fcf0031d35aaaf4cbc4d8106fada"],["/tags/redis秒杀业务/index.html","d1310ccf1f6a84033033411903cf8e8b"],["/tags/响应式Web/index.html","732428326017e3ef44f1389add8b85da"],["/tags/思源笔记相关CSS/index.html","e7c0b3dc5817dd0fe2b6156afb196ed4"],["/tags/我在人间凑数的日子/index.html","8f9d3a61317e65c413244cfe5fda74a2"],["/tags/操作系统/index.html","cfdfd447061e11371769f6ac0dffc3dd"],["/tags/数据结构作业/index.html","5a35ad9d1b834ac347bef338fd8a0cd5"],["/tags/碎碎念/index.html","f27a58cfd0a1ad2c86380acb09352a82"],["/tags/编程和环境配置/index.html","f50d4e9351ca812ad29fb0fd6e202204"]];
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
