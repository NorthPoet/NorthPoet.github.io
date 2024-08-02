/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9667987e47e72e05b2d06a3c7be8076a"],["/about/index.html","cce60e5817aca7e7a9ce5dbfac32c547"],["/archives/2023/11/index.html","158878ee055d55bc144d4bb74ff5e2ef"],["/archives/2023/11/page/2/index.html","eb25c517f2ed2f4ad7c4e68cadce798c"],["/archives/2023/11/page/3/index.html","ebf8f83aed829c5e7d730346951a2201"],["/archives/2023/12/index.html","a9cc55038546db76fa725f1a842d8668"],["/archives/2023/index.html","db3930e2c1a7494aa0e33ccf24758dd8"],["/archives/2023/page/2/index.html","91f1efd48cdf170d0739ff06b688a961"],["/archives/2023/page/3/index.html","4139d48d26cf694bb19e5a69f08a4f8f"],["/archives/2024/07/index.html","2372fe94ec21b9ee9809a80c44e81992"],["/archives/2024/07/page/2/index.html","a3a5d377e77531d99e759a8a1eadc863"],["/archives/2024/07/page/3/index.html","9e4d831e7d44b5878da7835f4b6724de"],["/archives/2024/index.html","9a902609465287e072cc82086af366d0"],["/archives/2024/page/2/index.html","a148dba9075933ff775f557d637f3634"],["/archives/2024/page/3/index.html","b93b98f04777a9590844e917264e1562"],["/archives/index.html","cd35cfdf909bb6fbbc57e4c331ced3d2"],["/archives/page/2/index.html","b784f257ec8a708a5da5f6e060c8721f"],["/archives/page/3/index.html","6b1365ad8827f4206b0fe16237bc11d6"],["/archives/page/4/index.html","7d53b4e62d41ddd20678ff9dfa69e767"],["/archives/page/5/index.html","eb1ac4139840de042a334cf7ff4c50a5"],["/archives/page/6/index.html","fac386049a20fd77d7895c4a3c5f51db"],["/categories/Java后端/index.html","f408fb94c41e5086689d6f8988afa3c0"],["/categories/Java后端/page/2/index.html","71792a15d68d9542f86abb01d8c23141"],["/categories/Java后端/page/3/index.html","2a91ae04ae78f670a012de96a74a173e"],["/categories/Java后端/page/4/index.html","d75b017b68d24af9f477b9b6ec412915"],["/categories/index.html","6e3946834915ddbaac9dbc85749472ed"],["/categories/友人帐/index.html","54f55b0c0ad7eeacc7cf7e19bc45e0de"],["/categories/思源笔记/index.html","044017a81cede56192e05cc058684137"],["/categories/版本控制/index.html","cf7e9c3ee98bbf8e351251d8c317d01d"],["/categories/考研408/index.html","5bc3baa93912b9ef2eb52d864af25a07"],["/categories/读书笔记/index.html","18441dc44148f757d497dc695c6e5131"],["/categories/软件工程/index.html","b82e52b2bee80aa1ac4ff2625d73d7f0"],["/chat/index.html","547e2e60f1baf6eae07119a73daf188c"],["/comments/index.html","827c72fcb117819bc30ee50b1ddc6993"],["/css/custom.css","447d4a2026f6d9557bcd766de1805e62"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","a66a15cc4ac92f78e079892908f93e49"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","e5508945ab3fdf143e7b7aeb8b65259d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","128284e5a429cb800c2f368ba5c51128"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","6d72d5eaccec3602675dece306d96647"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","6d539e80f4c8dd4664754d79be6565f1"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3ce8e2856860bf21f19ea6bcec606bce"],["/page/3/index.html","4e534498635f6d91a06304076e24a8d2"],["/page/4/index.html","3d011a1f069b47d30466fbd956fbab39"],["/page/5/index.html","4dfce696cb46263ca58c2131bf43786f"],["/posts/18bf100b.html","e18992a28cd6428bad6316681055a634"],["/posts/1fcb7e57.html","68eae43b706e38677cefe82faba26de0"],["/posts/254393f0.html","54cbfd0e1d3761454c832781d196a7a8"],["/posts/28b3fa6.html","2ceeca2c20e48fe7451f5fff347f2152"],["/posts/29f0725f.html","b4059bc9cd4688bd26e57139761e2834"],["/posts/31c36041.html","74ca4917706a8bf7c24c2443abcb579e"],["/posts/3513a7dc.html","1e911a1c884b2449a10c2acd60378996"],["/posts/3e69d26.html","2cc91914cd7a59f37bea4993c73bd2b3"],["/posts/417de2f1.html","63dc560e462d1b32a870a0de50a57254"],["/posts/442fdc66.html","1646af2bf99ee04e8069ee1b3fe658b2"],["/posts/458f2701.html","3673862547edfd4c2bd4682c58547422"],["/posts/4e6d3c3b.html","a4713f36e5d4e5971a7369c56ecf0833"],["/posts/4fc13381.html","0853e4b188010e2d00ef7b98f665aac5"],["/posts/51361b40.html","caf16e8dc9e6826cdc810d4318d9f5eb"],["/posts/5413be0e.html","2b5575ab95e704664dbc7dba2c2d6654"],["/posts/5596f2.html","c8ed576982787068ccc64c773d8be65d"],["/posts/5c81b531.html","3aa3f4309d9f22bd649ee1c1c0640760"],["/posts/629aaf98.html","4dec4ed5e03fa5e4616bae2eed876dda"],["/posts/65c29e.html","e30aabda1b8c2152c47b59031184c1d9"],["/posts/7105be24.html","bbdf7bc1970c87c5437df852886f77be"],["/posts/750cb0cc.html","43bf73657e22d3be8eae1fb91e42d2ea"],["/posts/76897b5c.html","d227bb2248089fb95bd948f9f9affdec"],["/posts/852e85aa.html","95f64fe2e245250538aff995d00fe3eb"],["/posts/8712b9be.html","ad4c3e5eb8d6bb9c88981e876253ebe3"],["/posts/8e1cab8e.html","52ccaf33b76dda6fa3b255e9ac2659c4"],["/posts/8ebfad52.html","29f6b17b96e34e7a002b4fbcc6cfa35d"],["/posts/8fd19ba2.html","83f2a9c6b37d6a830d9fac6fef96965d"],["/posts/92d0de5b.html","c26887f0c6465549b0ae62af92b85c01"],["/posts/9e3d6f34.html","2f301389af935ad23d7248fd2a5779cb"],["/posts/a0708e01.html","c9c6b5475715f95aa86d4109e3bc3316"],["/posts/a25a408.html","e237767b19ac906a7cf18d1a0779a37a"],["/posts/a6b15897.html","b06349dbb3e665cbb3dd28fd7bca4e33"],["/posts/a9867134.html","5f1010b2a333f52b947f5d6f76fd9fdf"],["/posts/aa351366.html","6b8073013a36898af9ce50c836d9fc36"],["/posts/b42f7f50.html","096c115c981f91fd172be85909d8e001"],["/posts/b492def1.html","e81a7c646ddd0bb8b519cd4dbb1363a2"],["/posts/cca6755e.html","5c5809966ff9899c30044b5d82b3c2cb"],["/posts/cf1cd846.html","2a65ca5ec7fd12035da1f2c4f0f60a7f"],["/posts/d6a434b9.html","8bd062d5a442bbb75accc0136ad4639c"],["/posts/ecaa32e3.html","97747234e7a7fa2a20ac6a049f8f3a76"],["/posts/ed8ba887.html","1f31f7c9563713fa426b78a58cbb7b9d"],["/posts/edab46fe.html","3f6bbf208dd2804f733ed9286cf3f029"],["/posts/edd0080.html","9751f66c2a811b24595e597b1e510192"],["/posts/f2f795cc.html","9cd1a3820c0ab415ea1bd1ce417dee34"],["/posts/f7c947df.html","a94385e695be3a9f7c7f922612570c81"],["/posts/f7d3a65a.html","817f6a0ea78353817ac31f1b80f0a98c"],["/posts/f82b2580.html","6b906e91ccf115b74b6f24efe3c7cde9"],["/posts/fac97174.html","9f4eb9a227ff7c6cf2a65e8c764714a6"],["/posts/facab7a2.html","a87030a7a707212a40af9caa302b1d4a"],["/posts/fdab9a5f.html","5c85764efef8022b5b589b9cf6a9be4c"],["/posts/fffd9e73.html","8dcaa16a69556860b281e6da27395268"],["/sw-register.js","261809ccd70275cba751c4cb734ff959"],["/tags/Git/index.html","7376bec2bb30a30e27102e723087aa0f"],["/tags/IDEA的基本使用/index.html","48276fc583fa7429b90a0cd2a7f7e9c8"],["/tags/JavaSE/index.html","abb956b302416d7b3f7d01a3cb899c76"],["/tags/Java基础/index.html","d4ff776cc977e8ea9421cde7d97865d7"],["/tags/Java课程作业/index.html","9697192fd0b2a71bbd1c0fbdf13f737b"],["/tags/Maven/index.html","c8802d4d24effc32337d70569f9aff93"],["/tags/MyBatis/index.html","8a4db9e2290314685e63311a0c059842"],["/tags/Mysql基础/index.html","e5cf9401ff05043ac985ee1a29a5d73e"],["/tags/Redis基础/index.html","2095e3c022a816e87dcad7a6b080cb01"],["/tags/Redis实战/index.html","c49de0cc9b3abd4bb9deb53e742ba677"],["/tags/SpringBoot/index.html","4135e8549e0de654832a1b8375f21d0a"],["/tags/SpringBoot项目/index.html","5159b47867c686eceb26c9380b7684d1"],["/tags/Spring整合系列/index.html","c278832e4771947673f530210b1079ee"],["/tags/index.html","9c4c9b08b426945ac4d7fa00a389740f"],["/tags/redis秒杀业务/index.html","21c68a53c37e579834d3293b3a85a4e6"],["/tags/响应式Web/index.html","1b888eae4b82db77ea080be0e6e5c2ab"],["/tags/思源笔记相关CSS/index.html","aa30d1f511403ac22220cddc66636231"],["/tags/我在人间凑数的日子/index.html","b0ad42bbcc78c97bec4201d0ea0aa85c"],["/tags/报错杂谈/index.html","fa5e518a5b963b02413179babbdcbc9d"],["/tags/操作系统/index.html","dd6785749bf56f0790a8a150d874c0f8"],["/tags/数据结构作业/index.html","9a8af8a8b520c402c114d5613e84d06e"],["/tags/碎碎念/index.html","5283b768e84d019ae6cba30dd2a9a61e"],["/tags/编程和环境配置/index.html","3fc7cad72ffc2b13109ac3afcb2e9ca7"]];
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
