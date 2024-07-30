/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","468550c537820affcc6f75be81466a7e"],["/about/index.html","27175bed89b27d2cfa012947e9795bd5"],["/archives/2023/11/index.html","aa41b720edc3dcb230a022986bd78934"],["/archives/2023/11/page/2/index.html","955ada9fcdd4c6e84cbea99abb1a1a21"],["/archives/2023/11/page/3/index.html","63a7ef40210acd225b6c04fb5712797f"],["/archives/2023/12/index.html","10c5fdf78cf27dffb67b90c67d7f6ada"],["/archives/2023/index.html","568e5c261893426807725f3cf90e486d"],["/archives/2023/page/2/index.html","6deac72d29097c54154bc8fc38142fb1"],["/archives/2023/page/3/index.html","b13c06d7624e43e1808f34d04729d4a6"],["/archives/2024/07/index.html","44fd67dd1bc5703d9eaaa5ea5c1e0607"],["/archives/2024/07/page/2/index.html","56855550a19636b862f7a3c498df88f9"],["/archives/2024/07/page/3/index.html","9b0650c03e81fb90689c0ab216d16e09"],["/archives/2024/index.html","93ad374b120bece1fd3f1d623c9f1e87"],["/archives/2024/page/2/index.html","a1e47e31785fc6d77a70bcdfe02320ab"],["/archives/2024/page/3/index.html","b8f7a4b691ef8e8f8870f0483db2dd11"],["/archives/index.html","8cee12f53fb36b9ada2a01b389614af4"],["/archives/page/2/index.html","31d2eab1d01b177b77006105b125167c"],["/archives/page/3/index.html","3050a6c770d0cc6a98a89adb4612c1e5"],["/archives/page/4/index.html","c1ae8aa96d10c8e308cad92b4386a2ae"],["/archives/page/5/index.html","025739880886ceb5555f2aaf12d55d47"],["/archives/page/6/index.html","25045bdb566f5460eea694e623c6b22a"],["/categories/Java后端/index.html","87750785e4faa0a935d17602363e0063"],["/categories/Java后端/page/2/index.html","df0cbbd2f0e6626c525432c62e2144e4"],["/categories/Java后端/page/3/index.html","3ba3eed6efc06d989481705969d51717"],["/categories/Java后端/page/4/index.html","4d3954d113b9dbd239d7710437b92133"],["/categories/index.html","598fec0b3305855976f7a0464973bbb6"],["/categories/友人帐/index.html","58aa9d1b467c3e5b281b9c2f7427b49d"],["/categories/思源笔记/index.html","b12578528a470f9756f520d4f3a66117"],["/categories/版本控制/index.html","b1c0c8682a8f1ce530d94d5365a3e069"],["/categories/考研408/index.html","0cce10fddbb2164a9845d25f738a7984"],["/categories/读书笔记/index.html","216628f66499d8c8cc4c9e13fdc9f944"],["/categories/软件工程/index.html","f6583eaf1eb0b046f42636adb4c9bd0a"],["/chat/index.html","50e61c31d4fae565a4e83c7ccbcfc7be"],["/comments/index.html","9ba6d9c7d52930e234e16d8eba7a6319"],["/css/custom.css","399bfdb87ec5f2ebd9eeaa055d04ac6e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","d9ff9f371edd2bdc1661b907909ded1e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","14f3e1b10845d2f55d6ad92b31f0ab43"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","13c6350cd951d73ae8b436d3e0981e04"],["/page/3/index.html","522b4f57aa8edfcbecec2f62f915a6a1"],["/page/4/index.html","d2354a9c321bd28b69817f1997e03bc6"],["/page/5/index.html","d5d971946a7a579c1d8533b437c6cb98"],["/posts/18bf100b.html","198b6159772a0cd53d745e4aead437e1"],["/posts/1fcb7e57.html","c1d3c93c9373fe95eb3d39bd73b25fdb"],["/posts/254393f0.html","a10e39bee8011ffed988889c3c84d2cf"],["/posts/28b3fa6.html","44f77bf492db318f3f1dc0864eb75569"],["/posts/29f0725f.html","4956e8b4eaae124602d2a26b1a60360d"],["/posts/31c36041.html","4d84914b2ed90135307baa10feb73b88"],["/posts/3513a7dc.html","69673fc4fc0f3770fec2e82bbb749226"],["/posts/3e69d26.html","e09418b3c8a6814368d327822ca22034"],["/posts/417de2f1.html","00b362862353a65907972a7ca1f87471"],["/posts/442fdc66.html","6eb8cd7f80a22a9379794957ee460a13"],["/posts/458f2701.html","d79f4940ebdccac981fc2df8ae6b5699"],["/posts/4e6d3c3b.html","77dbc3851da1e573a1bb2f5a60904353"],["/posts/4fc13381.html","6c3494cbc53c7565e4c4edf72beb794f"],["/posts/51361b40.html","e0d44dea4f2bc51d53d46477c42701a6"],["/posts/5413be0e.html","dc251da75dd4f7de7ef23500ff4cd719"],["/posts/5596f2.html","66fe5029e9150d4b98fba8d50b3eb651"],["/posts/5c81b531.html","03731b76f924e605a4cc81988fef3999"],["/posts/629aaf98.html","f79b808c41d70cd4aaa2d2406030e35c"],["/posts/65c29e.html","12deaef62cb872063c6dab01cf1ddb82"],["/posts/7105be24.html","2a4ae026eab228e1da72bf23f362e677"],["/posts/750cb0cc.html","b8c4a4858f3c39add88a08cb6f916634"],["/posts/76897b5c.html","c00fe10e6dc4c4ac0146ecab374145f0"],["/posts/852e85aa.html","15def92122b55921f81caba0eef452e0"],["/posts/8712b9be.html","2afe4d8cd5119e0c1f484963eb39d00c"],["/posts/8e1cab8e.html","9481e10b8e8d5a01aea72dfa077ead81"],["/posts/8ebfad52.html","26a56acb85cec34fefa5a7b01e6a840f"],["/posts/8fd19ba2.html","0a39a05aafb53b33c1909cf911572f60"],["/posts/92d0de5b.html","959bb336ef30c94a745e451f069fb451"],["/posts/9e3d6f34.html","508fa9dfd2e7e1e4d129e598ba1e8f2a"],["/posts/a0708e01.html","4a8e48d19c62c378de19e0e7472d3ee9"],["/posts/a25a408.html","7c1f02cf9955881d17b3a98add39a307"],["/posts/a6b15897.html","764218ebe9b5a72fb1f739186c4746d0"],["/posts/a9867134.html","03e9013a0531e985227be73c849aa798"],["/posts/aa351366.html","907b68712d71da7e3b81a66a192b19c2"],["/posts/b42f7f50.html","691f0603bb5e4f38ca2bf04b5740b82c"],["/posts/b492def1.html","e18233b2c7a6d1aaaf3604535f3bf0b7"],["/posts/cca6755e.html","eb08d731527b26b083eecf6a730865b6"],["/posts/cf1cd846.html","9c065b3140dac58583122417c8a57b98"],["/posts/d6a434b9.html","0df4d34053f02b9c7e60ce63a4bd314e"],["/posts/ecaa32e3.html","6795ca277ec9c824a4b94f677af07655"],["/posts/ed8ba887.html","8299b4faadbad7fb0110b1a22f72400a"],["/posts/edab46fe.html","0516249626e61968e01e72288596dd87"],["/posts/edd0080.html","96c0a98e2836251cbd202ae2d5df73e4"],["/posts/f2f795cc.html","01d4ddb7392903a290fbe76cf2ad5125"],["/posts/f7c947df.html","420fd0871d860dcf6bf08acf38fbdfac"],["/posts/f7d3a65a.html","76fc4e4aab261d3a3548a4ea06051344"],["/posts/f82b2580.html","c5e36a59fe315b9260b24e2423db88a8"],["/posts/fac97174.html","a16503e3a65dfb2376b9339488e3ce12"],["/posts/facab7a2.html","b65273dd04599eb118c3b4e86a39eced"],["/posts/fdab9a5f.html","c54ff927474188b9cc81a1042b28bd9a"],["/posts/fffd9e73.html","bbbe367dbd04f092de7945d80dfec84f"],["/sw-register.js","4c4949b4f764174ee514329ad95980f3"],["/tags/Git/index.html","1a81ada60a2d1ee1a9f3d17fe5c67b27"],["/tags/IDEA的基本使用/index.html","fccc404b94e8989ab3a9d14fc0af98c7"],["/tags/JavaSE/index.html","93cc49559dfdd5316f7caf2d8acdadcd"],["/tags/Java基础/index.html","58ba615f0e3a4295ed7ea922dae025ec"],["/tags/Java课程作业/index.html","b5f6a9935b57d9984ad247bfc862d0fc"],["/tags/Maven/index.html","07708f3e54d4cdd022e7ee19129b2bf2"],["/tags/MyBatis/index.html","4eaa22725a2c4fb96886aef4b851930d"],["/tags/Mysql基础/index.html","4056f50edddf031027d4bd464facf6ec"],["/tags/Redis基础/index.html","60e50bfa75bdcb24d4d2f41af610ff56"],["/tags/Redis实战/index.html","c6ac112a997efca072d6465d794a2c7f"],["/tags/SpringBoot/index.html","a2a2f091058789729a72b5404a78ab72"],["/tags/SpringBoot项目/index.html","8669897d3a11dae9748411c325d52c78"],["/tags/Spring整合系列/index.html","8f8b388779ae3ba63b2aecf89c7d5e89"],["/tags/index.html","6c155eab269cdb59697ad4af83efd1b2"],["/tags/redis秒杀业务/index.html","e66132977d8867c8d630979fec6a4033"],["/tags/响应式Web/index.html","ea5b43bf040fe35695b26a46ff14373e"],["/tags/思源笔记相关CSS/index.html","462349075863b744c91e5f5fbf5b3644"],["/tags/我在人间凑数的日子/index.html","88d5a75146a0bac3abe1e552795895b9"],["/tags/报错杂谈/index.html","c4764faf73f8e0d919e5ef867c41cc8e"],["/tags/操作系统/index.html","38faacf1fcb2db0365eaa97c39901a5c"],["/tags/数据结构作业/index.html","f5d00080abb8f7514cb539eeecf24c6e"],["/tags/碎碎念/index.html","76de53c128f69c54f9c7e365643675b9"],["/tags/编程和环境配置/index.html","32695888bd92690adf6cf6bfce0a649e"]];
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
