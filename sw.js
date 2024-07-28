/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6e4ef9b482a2eae81cf3ce752b2021ae"],["/about/index.html","8b373b9bbec39708493f718cbf64f467"],["/archives/2023/11/index.html","2d83f56a53a5000ee1500ef133935b2f"],["/archives/2023/11/page/2/index.html","42324e02a83638c48eb90f52b2904e89"],["/archives/2023/11/page/3/index.html","b59da9a883fac88db83bfbfd9335bda1"],["/archives/2023/12/index.html","9a6ba63a958f96dba2248a6140dcafdf"],["/archives/2023/index.html","e7f1bccff410168765d4fe741793dce9"],["/archives/2023/page/2/index.html","6f9a30ecb501f233508a25e05bf1bf31"],["/archives/2023/page/3/index.html","852d1a0b32ee67a81170a8c9c57a63c5"],["/archives/2024/07/index.html","7f74e91f486650b4f708250ebb96cb23"],["/archives/2024/07/page/2/index.html","8c799a8be99c031ad51f79f24c1d4dbc"],["/archives/2024/index.html","a7d8515ffc780e4648962e438e1895b6"],["/archives/2024/page/2/index.html","326aa708ebf41cdcee9dcab7ccc26e2f"],["/archives/index.html","2448d6c01abcb0e2ce554df49f6fd260"],["/archives/page/2/index.html","97f3388440239b39c745060a1764a3a9"],["/archives/page/3/index.html","51da1617bb8b2d8f5b8fb3da3e13efa6"],["/archives/page/4/index.html","9088651946b35287730eaf058c0d774f"],["/archives/page/5/index.html","76d00931173c43c5fc2529c1e6398e32"],["/categories/Java后端/index.html","e3ab6f7ac440248a1ae9f23aa63ecf92"],["/categories/Java后端/page/2/index.html","278322d7cc5607a9004afea8d4500f28"],["/categories/Java后端/page/3/index.html","b90adcda52aa89cf223f056f27f7ad36"],["/categories/Java后端/page/4/index.html","919ebdf50adb937fe8b0a6febf833897"],["/categories/index.html","d70e38f334a6349e4e7dc8e7664751b9"],["/categories/友人帐/index.html","65581f4cdb811c48ff604875b4d1a2f1"],["/categories/版本控制/index.html","2d948d4e6e50c281d28f3222d806d24b"],["/categories/考研408/index.html","a3f8ce3494860f519ec035e90f453492"],["/categories/读书笔记/index.html","76f1069353f3997b3b9cdf3f4a722852"],["/categories/软件工程/index.html","56949bb1c6ffaef861a7ce300dfa7ef3"],["/chat/index.html","338a3b5ef9ca91a1ca02f37081eb8f97"],["/comments/index.html","22309416b6e3995f70141e95588d6dc2"],["/css/custom.css","8838a30e726396c9147ec6bc8fb8a72d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","e3b1e1c3019cf01e5f65b405dd38d949"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a61fae9b416fe998c34191f6b8c116fc"],["/page/2/index.html","1a066b39ea8ae7e307df0f715b66bbbe"],["/page/3/index.html","a0a6bc6770d6c170c174a5fc88f2a9af"],["/page/4/index.html","c37cc0285a16bc90395ebee78bbac460"],["/posts/18bf100b.html","a137e82b13cd68abd79ff0f11c66ae3f"],["/posts/1fcb7e57.html","b63a5964f7acc72fdb69713afbc94dee"],["/posts/254393f0.html","6c8253698d430f15da8eea14635cd5aa"],["/posts/28b3fa6.html","271afd575fb10650ccbe6c0e51696335"],["/posts/29f0725f.html","00059202564e5867c9c7de1634047fe6"],["/posts/31c36041.html","89685b9d3dfd38d209cb4d0e1df8caa8"],["/posts/3513a7dc.html","5e30143e9ef647e31dc57a86564ec144"],["/posts/3e69d26.html","027383645a90a99b7076dbf8321b9ab4"],["/posts/417de2f1.html","5bdb20e5b1550df59fe92fbb0b6d088a"],["/posts/458f2701.html","98309d16ff7551b1adffa45493bec755"],["/posts/4e6d3c3b.html","b397e3c7007b14b31516f3035a2591e3"],["/posts/51361b40.html","39f8fba0f4f701f41949b20c3de4bae4"],["/posts/5413be0e.html","f687e6e9e46a241b3a3861f30f347638"],["/posts/5596f2.html","353efd9a79820d54bb9376914074cc71"],["/posts/5c81b531.html","77fa88fc4c124fb7e7c280eb406dbfa6"],["/posts/629aaf98.html","d2315cd94972257ab0e1b2359d9648c2"],["/posts/65c29e.html","0a50b0081de1c1e2de59a3ed9d4dbbd2"],["/posts/7105be24.html","73e9b8dd537cfebb173b1147933c7ee7"],["/posts/750cb0cc.html","ae2dbd1e8e72469f174f08e0d525564f"],["/posts/76897b5c.html","553e40e9e4897f38646e7fa8c827c449"],["/posts/852e85aa.html","55759c9198af9212a111402567ca6560"],["/posts/8712b9be.html","6bc5a9f4201a03c56322d50bab38f61e"],["/posts/8e1cab8e.html","d8f25cc82bd6e317056457ade6c19832"],["/posts/8ebfad52.html","03fa2b1d7a47b6c21e3499c37221fbf7"],["/posts/8fd19ba2.html","84146eeaa7a617b9f17aaf17037d62d1"],["/posts/92d0de5b.html","f6f905814b33e73b2d46618fee971ea5"],["/posts/9e3d6f34.html","e6b1f2982d9ada1d46c4e4343126e33f"],["/posts/a25a408.html","3f389b6e3a5b019388ca94fa2b892328"],["/posts/a6b15897.html","81389a783e390199c8706f042620a4a9"],["/posts/a9867134.html","bf6ae57223c230f2997ce6e3b0b045da"],["/posts/aa351366.html","c0e71bf80fff3683532e2ba2a3968f77"],["/posts/b42f7f50.html","fb14fd3ca7d4dccb55cfca57caf064ea"],["/posts/b492def1.html","ee71fbac3a82d03d993d0ae4649b37ad"],["/posts/cca6755e.html","ddcbb05a7439bbcce9e4264507af9410"],["/posts/cf1cd846.html","5ad9e34d1cc759541d37957041252ee4"],["/posts/d6a434b9.html","10edd1b2a6b7500b6fdfbc34e3a3f2a1"],["/posts/ecaa32e3.html","fbb1f60a683e6d93328a507adf547656"],["/posts/ed8ba887.html","4fa3750f6cf6c384faa4dd88af489274"],["/posts/edab46fe.html","ea60522e731fb6e17edc6eb321ab264a"],["/posts/edd0080.html","bb5a69ab11cb3288f1286e77968c263b"],["/posts/f2f795cc.html","d9c60ae4146e20bc636c9247b002b65f"],["/posts/f7c947df.html","47aa23f576f53dd32ef162b267660dc7"],["/posts/f7d3a65a.html","f759e23bc449c347a9ddc9b7374691fb"],["/posts/f82b2580.html","d0d50313ba80415f81388cc72e4deb07"],["/posts/fac97174.html","4c8640121c732c9376f3f9cab8423d30"],["/posts/facab7a2.html","40dfca28c2725e3f1c1e99a11678d314"],["/posts/fdab9a5f.html","8b5108e28cca3fefc5c80874d12e9a71"],["/posts/fffd9e73.html","ef3cf06c11014f00c2e86ec985b9f0ee"],["/sw-register.js","28598fbf34153c0c7e63e938eaa1b5d5"],["/tags/Git/index.html","dc11018a601b926e8156f0afdd34ea5c"],["/tags/IDEA的基本使用/index.html","f6f7afe0c4f15ea1226dd2e1f43eb317"],["/tags/JavaSE/index.html","53a25b2959778a7eefba30d6fe9b4094"],["/tags/Java基础/index.html","806d1c176f795d598fdf3d919209b8c0"],["/tags/Java课程作业/index.html","c9f626a81c7b9bce39779a1d566ef520"],["/tags/Maven/index.html","087a798fce85fabbb5f260185f18ecf2"],["/tags/MyBatis/index.html","f73c0bf0ae9a8983b58f4d4de54217e9"],["/tags/Mysql基础/index.html","413b99268661f2a5ce69d8dbbd7ff5fa"],["/tags/Redis基础/index.html","03d0f10440f5b1f924f3a24094df33c8"],["/tags/Redis实战/index.html","c6cd089db8c103d007b73b883dc62fba"],["/tags/SpringBoot/index.html","e8923965b5cd7e47b7e79f26d6f9e496"],["/tags/SpringBoot项目/index.html","837932916ac270b49cf4761403af203c"],["/tags/Spring整合系列/index.html","978e33b75aeafe2c48829683cab68128"],["/tags/index.html","39ebfb154ca0a9e4c43cf787b8e37263"],["/tags/redis秒杀业务/index.html","f589a7adb0141f1d5d4b202e5471295b"],["/tags/响应式Web/index.html","616750395cbbb3d221cd54785579eada"],["/tags/我在人间凑数的日子/index.html","e565c746f82c138b4a99b8b6db08c4f7"],["/tags/操作系统/index.html","f974cbac850ccb908be75d2f463c960d"],["/tags/数据结构作业/index.html","6243513931598eed69d1dec9673b4a95"],["/tags/编程和环境配置/index.html","0143f9579df4893b277ac0ee387915e9"]];
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
