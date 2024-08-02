/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b7076d60943a2df2dbe43f106ad52dec"],["/about/index.html","33df2b4c0d2108cc5cd89767e596f109"],["/archives/2023/11/index.html","3a7bf3610dcab26c16537ff82ad9c868"],["/archives/2023/11/page/2/index.html","188cad299d9569db46d293ff2b5d9b2b"],["/archives/2023/11/page/3/index.html","4ebc3bc616318d2ac8f940ee8da7f5c1"],["/archives/2023/12/index.html","d621c4fffc73c037e8f58e78d68aa970"],["/archives/2023/index.html","f4c38d092bd4570bc2ba249d29e26016"],["/archives/2023/page/2/index.html","b7abf45e24cd8192f9c0b5f5538149db"],["/archives/2023/page/3/index.html","53e2f9499ddb000551ed8ab32f211ee6"],["/archives/2024/07/index.html","84c0cb334aa3ead356ee6ffbd3338265"],["/archives/2024/07/page/2/index.html","87090b97dad13422ec32fdc7a948a2cd"],["/archives/2024/07/page/3/index.html","5937df9ce8197addcf2475c44c6c258e"],["/archives/2024/index.html","6db5029398890c23e9dea4f1bae27cd7"],["/archives/2024/page/2/index.html","b75b13b701b1668860d38e0f930b1294"],["/archives/2024/page/3/index.html","5c008f34617c14dd14d92c70f9765ab1"],["/archives/index.html","62a5f6afec94467096fb777ccd6a5c75"],["/archives/page/2/index.html","c48ba88d945ec1be264f49ecf6edcc9f"],["/archives/page/3/index.html","5d31e3db2129a5a2849a05a40e12323e"],["/archives/page/4/index.html","80ff96732df5b754e2bb09b974676679"],["/archives/page/5/index.html","943f45e150d33280c52018a14837e8d3"],["/archives/page/6/index.html","c931e805ad9e8f5796c5f49198aab8b6"],["/categories/Java后端/index.html","b59bad7c72163838a4d97cd22e57d3df"],["/categories/Java后端/page/2/index.html","8a8466599ec24419c323588157daaef3"],["/categories/Java后端/page/3/index.html","7406c186f0730b04ba73533c91f7408b"],["/categories/Java后端/page/4/index.html","b720638e0edddf3065e294475b0c5773"],["/categories/index.html","0f17c43cc6b1f31813845e80c37e6775"],["/categories/友人帐/index.html","567b447c8eb9ffd1ab824a38aca53035"],["/categories/思源笔记/index.html","e6f3cf413181924a7a08acb2fe07774c"],["/categories/版本控制/index.html","5ce1bb61400d80bebcbb59bddd92e696"],["/categories/考研408/index.html","18cb0091ac6d78e2135f3ee24f482a2a"],["/categories/读书笔记/index.html","0b06c7251d8bbd3ff70a3c67aa548a84"],["/categories/软件工程/index.html","54ab0e0c14c9eeaf5c67512a75e17bcf"],["/chat/index.html","4e2a3e7e2d732f02d2e2415afaeecf8a"],["/comments/index.html","9caa088048b15e23246cf3187c82d5e0"],["/css/custom.css","6f173171fbe4ed0cd8993c5b7c6fda88"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","454a0bc7344ce49e0cfca887936ac0b8"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","691588f0d181e733fc4c854c4fc14ff6"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","24fa3c39aaa350ef8207dafc5ae2e382"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8d2b71838e92ebb18ceb642fb9bad23e"],["/page/3/index.html","0d7891c9efe5ae73b738b54e50f6bbdc"],["/page/4/index.html","2415bcee7bb18530f9303890f18d5b66"],["/page/5/index.html","bd7d9d081ad821e4ee1ea8f55fc387eb"],["/posts/18bf100b.html","84f0bcbfa62df9b78bf0af06bb28a181"],["/posts/1fcb7e57.html","f69fa910fe6763262d675772f0246ac4"],["/posts/254393f0.html","03ecde2d6f688c4d5ad4fc8cd429be40"],["/posts/28b3fa6.html","a2596e3d3ca7fbf5361fd20a216b4536"],["/posts/29f0725f.html","10c19da6e117884999ce9b6f06e6f7e6"],["/posts/31c36041.html","ed1ee1ef1c10fb12cf66085228e044dc"],["/posts/3513a7dc.html","d0a3eda049ebc677e3a0477f21b61cec"],["/posts/3e69d26.html","dc8441700be2eece8bfbf4b9832d547c"],["/posts/417de2f1.html","d2c214808e301c6cb6e96ba87fa33dfd"],["/posts/442fdc66.html","2106523f9a56a0107e63e43a03a7db88"],["/posts/458f2701.html","3f34c6702778749a2755d4193067720e"],["/posts/4e6d3c3b.html","0752867bbffef7737524c04e5c36e889"],["/posts/4fc13381.html","05389ffc3c525275abfd85730b30c158"],["/posts/51361b40.html","ae6fd76117991a2abdac8c7d0b8ab676"],["/posts/5413be0e.html","e7eca64d3e18000da9a29da088fe5cfc"],["/posts/5596f2.html","4afaf70cbd1bc21ffe2aaa7ae9241b4e"],["/posts/5c81b531.html","0528c41a6dc3aa71d14b5b30b5a3abf2"],["/posts/629aaf98.html","f5eeeb66558e23cfd49a68104c2ec985"],["/posts/65c29e.html","d0d946d260d488d2e60b0de1c96e7f76"],["/posts/7105be24.html","220a67f4cf52e504030785ff8bbcaa06"],["/posts/750cb0cc.html","37e4b9506786c924fd69adf86805db30"],["/posts/76897b5c.html","1568d9e5ccf2f33c708370b72f7908be"],["/posts/852e85aa.html","e89d6813b69b8787603c9918b324656c"],["/posts/8712b9be.html","404f438c80123ee41769f59bd260f513"],["/posts/8e1cab8e.html","65bee658a52df33ae3adf86b902cddf2"],["/posts/8ebfad52.html","378652ad9381c8c08f7f8b6066949ea1"],["/posts/8fd19ba2.html","be9f3feb4361781f217d247cb74cffb7"],["/posts/92d0de5b.html","92e4e55447cd05eea0e5696367b2f9cf"],["/posts/9e3d6f34.html","d251e460140c0d9dec0d3bb302fbdd65"],["/posts/a0708e01.html","6c4facc2824106544deca82acead15aa"],["/posts/a25a408.html","88e47d08f38fa9cb6eb3b87b209b6ea2"],["/posts/a6b15897.html","920627e079a769b425f9b5abec01d170"],["/posts/a9867134.html","808239cf6d228343f115984756a3bc67"],["/posts/aa351366.html","9fb6ee933c06213ae45baaa52f662aa6"],["/posts/b42f7f50.html","b825411b9c9fb3650807c5f577a6b1b5"],["/posts/b492def1.html","bd65d95b90fc99effac272c098485176"],["/posts/cca6755e.html","d63e5271db45a0b186c6ac649e698bbf"],["/posts/cf1cd846.html","8580935c3a249448752d2b22a47d99f9"],["/posts/d6a434b9.html","2758989eee77191ee2531d464124d21e"],["/posts/ecaa32e3.html","7cd16fb3f5449e4e6a9c427a9932bfef"],["/posts/ed8ba887.html","5d55a140197e0a347b73369fbeb44188"],["/posts/edab46fe.html","4c8b63949a9e347b12469ec232edbd3c"],["/posts/edd0080.html","fcd0f5368f02c375d96ebb371e580954"],["/posts/f2f795cc.html","d91d0b2c9d4c997fd8499fe1cbb2e541"],["/posts/f7c947df.html","14decf8e65bca5edb7685bdb18d97202"],["/posts/f7d3a65a.html","b310beb9ff87612db476d255d6eeb8ca"],["/posts/f82b2580.html","39ac9444ea8fa22d88be9b42b327912d"],["/posts/fac97174.html","733540b1fe747f58d342fb664b634245"],["/posts/facab7a2.html","1c55ad7784ef4c4d86df296a78acdd18"],["/posts/fdab9a5f.html","3d0a1419017169edd3a617fb39a1a3e5"],["/posts/fffd9e73.html","9592a7f94cc9c6162373e83d1984863d"],["/sw-register.js","de86183a19a07c64b81843e685b0aacd"],["/tags/Git/index.html","2453b12912ca4d4246b32478fc77a1ee"],["/tags/IDEA的基本使用/index.html","bb2b8d7f2e8bf77e80067b9bd12ca73f"],["/tags/JavaSE/index.html","e2ba3c22bb79ab23841b0100d76d9c8a"],["/tags/Java基础/index.html","aace9e50de2dc557b9a1818fa8dc2b3e"],["/tags/Java课程作业/index.html","4ac343ade2db8c3f28f95aa249fdddfb"],["/tags/Maven/index.html","f7b2b7ee42f4f6d56b5710008d50c849"],["/tags/MyBatis/index.html","d25ecabac630da8080c81e19a0be9e4a"],["/tags/Mysql基础/index.html","a7f6f3f0474193b35d43dd527011d5a1"],["/tags/Redis基础/index.html","04d4f8c0095243a62819ee085ee02040"],["/tags/Redis实战/index.html","e65739f913e4e839497eab93c35ab7eb"],["/tags/SpringBoot/index.html","0e9c5110c5989d3e95992cd35b8cd54c"],["/tags/SpringBoot项目/index.html","f022202e42586e4c5a79478b941f1dd4"],["/tags/Spring整合系列/index.html","175985feaa24822df78849ce635170f3"],["/tags/index.html","51d49a0618707dcd5445be6b5c4a782a"],["/tags/redis秒杀业务/index.html","7f7f8580ba42aa09441b6eb7c503ceea"],["/tags/响应式Web/index.html","1c2471923d63203bee29a31cd6e2d0ed"],["/tags/思源笔记相关CSS/index.html","904ba08701adace80f4e635d06011ca8"],["/tags/我在人间凑数的日子/index.html","0674d63d978909e401d9fd9b8422bed2"],["/tags/报错杂谈/index.html","bc622214ba4385dd6621d111563f5544"],["/tags/操作系统/index.html","9ea220218bdbd014bc77c7da210f9050"],["/tags/数据结构作业/index.html","de0f607fcae9f88c0b8863363a464389"],["/tags/碎碎念/index.html","782ced414be0843ae5e7bce356324a3f"],["/tags/编程和环境配置/index.html","83a8074c29548440f66d85e68d378ea0"]];
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
