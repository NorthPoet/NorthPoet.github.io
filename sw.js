/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2a14321cb0009a2a7f6f49083b0e2f32"],["/about/index.html","31fafb68fc804bc1142cb02b481e0939"],["/archives/2023/11/index.html","f8cbb9d523c64aadabb3aecdb0c02a80"],["/archives/2023/11/page/2/index.html","d4141c99ce73bf89ce4c812d0db4fb94"],["/archives/2023/11/page/3/index.html","6dd5e8d4222ce23a52aac09f9d0b6f2c"],["/archives/2023/12/index.html","3c246490158811ac5caf03efd72c7008"],["/archives/2023/index.html","a74cd5e374bcdedcca7d54b2cb5f7a4b"],["/archives/2023/page/2/index.html","36683b143fa91e3fbc09b7fa8102df3e"],["/archives/2023/page/3/index.html","3ce3b9bca1681820fad8ea41d82fa85c"],["/archives/2024/07/index.html","59e8ee6a42eccfd0ecadc33f9a5a25f0"],["/archives/2024/07/page/2/index.html","b5d966e4331c53736f5997dc0678b6d3"],["/archives/2024/07/page/3/index.html","3693fb4a617ca0e03cdd807c494fcabc"],["/archives/2024/index.html","7137bc996ebbdcb8208c0dde43b2a2f0"],["/archives/2024/page/2/index.html","cd6729db15facb276d1fa7823339aa72"],["/archives/2024/page/3/index.html","d34240b27ba52ff7620b4cb77d8b7f42"],["/archives/index.html","29f10935c0262397d1ea103887ea0966"],["/archives/page/2/index.html","5d9d238a54ab23123cb3625241c975f7"],["/archives/page/3/index.html","ad6552df6827401dd87ae088da6fd4f4"],["/archives/page/4/index.html","8d4b5b13a50937a828342bdb4e3489af"],["/archives/page/5/index.html","9013b0c5e9d49185266620488dfc2b99"],["/archives/page/6/index.html","dd1291f9a3117e2c7b206108104629f0"],["/categories/Java后端/index.html","aa2fea2e0c562f76c42efbef8c13e35b"],["/categories/Java后端/page/2/index.html","f98bdfeaf3341b765d2b5cb7b0ec8483"],["/categories/Java后端/page/3/index.html","1815b1920f6101d89978da63b5688292"],["/categories/Java后端/page/4/index.html","92482ceec39fd789b7e5c43105af359a"],["/categories/index.html","518a16ed3758ee3029657ac7f6c06650"],["/categories/友人帐/index.html","a2fff6ed2947805c1376c78e2037285b"],["/categories/思源笔记/index.html","2a070a7d40ebdcb16b1abcd28940016e"],["/categories/报错杂谈/index.html","8a3080034be844d4720f88ea57a05e3c"],["/categories/版本控制/index.html","9b2ca71e9846e3d30336d2f313ceddec"],["/categories/考研408/index.html","39f4818c14684e43b29445a8d3329a97"],["/categories/读书笔记/index.html","9347f234e69c2b4bcc59cfd441c590cd"],["/categories/软件工程/index.html","90890defd761a3a1080d0307c0b0441d"],["/chat/index.html","b014b68f761777528843589f3d364d7d"],["/comments/index.html","b35e982bc4b9cd4c13b606426401d821"],["/css/custom.css","399bfdb87ec5f2ebd9eeaa055d04ac6e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","5f429fabf7f7b823516e2386fe9fee50"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","f6fdea7422454019bf5d104f0f38f2f6"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d7d1e59d19942d95d9ce43d22cca32f7"],["/page/3/index.html","a7ef3e7b7c25ad0f75211d21fc286e33"],["/page/4/index.html","d03eb252853633e3bc18ba9c42a6d1ed"],["/page/5/index.html","b8fcd0f7c4e8149b8bed918e26d1978e"],["/posts/18bf100b.html","10b696e03aa74d7b1a7ae4d0cee8f93d"],["/posts/1fcb7e57.html","be371736fdea14c35b33262092037b13"],["/posts/254393f0.html","fe8bd84af6230d1daae0fdd40dd4baf0"],["/posts/28b3fa6.html","23d0e90873ba83ea59ee30550f384ac8"],["/posts/29f0725f.html","e3fe5b6de6f73a3f132ad5abcd2f67a1"],["/posts/31c36041.html","1b386a4c14c6e7faed6f8dfec888f493"],["/posts/3513a7dc.html","5e492a5f323486b9aca4e840a3962f40"],["/posts/3e69d26.html","72468ce24fb2fd82333a49ed4823d9d8"],["/posts/417de2f1.html","6d23fb01461eb7e6dfb6a551a4d1f363"],["/posts/442fdc66.html","b50dbe5628aba3f4b9cf026005a5ca61"],["/posts/458f2701.html","4ece5bcf678b82f9430fcac3a11fe6f3"],["/posts/4e6d3c3b.html","5a4eac0a8e968e9975a42bc5e79030c2"],["/posts/51361b40.html","1ed34c08bdae0f03da1f87259ff8c087"],["/posts/5413be0e.html","590aa577432c73fec306b012e281a3a4"],["/posts/5596f2.html","ac884913f22c7734077b65c3a6af2f48"],["/posts/5c81b531.html","9f59fe93fbc4d2940a628d45b49d4732"],["/posts/629aaf98.html","d649cb1eb7362f2d9fa0101879b4ad71"],["/posts/65c29e.html","0050e76e88272c11b171cca1ba48b42a"],["/posts/7105be24.html","68157a3765a7d45022589ee394dfad92"],["/posts/750cb0cc.html","307350bd4b98ca4ae83ea9387ffee8a1"],["/posts/76897b5c.html","c0ff19e4bfb6db5e6e6c2ffc0c771248"],["/posts/852e85aa.html","7edd180747c61f3afd33b4f631c2c88b"],["/posts/8712b9be.html","8883a5888cea940b987337040906201c"],["/posts/8b91221e.html","b5212adf8cc3d866234e75ea2505b1b8"],["/posts/8e1cab8e.html","378d1b1ffd38130cec3f266b9546ba9d"],["/posts/8ebfad52.html","b6843a3b916f2b13b0e6cd5395fa2697"],["/posts/8fd19ba2.html","b177e0a8ec7afb513a6ce99b2b11d999"],["/posts/92d0de5b.html","7cb595b589936937d84da7b8bbe99584"],["/posts/9e3d6f34.html","c6ab81fa63341be0759c244ea9dde301"],["/posts/a0708e01.html","0572383adbba16e821219cb61cff5f10"],["/posts/a25a408.html","568bf67a8d20e6d6861b17ff2ef7859e"],["/posts/a6b15897.html","c3343de95a6270697598dbeef93bda5a"],["/posts/a9867134.html","1af2bba9e03529bacb98541a506c9ad9"],["/posts/aa351366.html","2b0c694e9b825156d81256e174264f13"],["/posts/b42f7f50.html","e6fb8ec6c6c287fe1d0ac97bf2a2cf33"],["/posts/b492def1.html","9181a4ba61b33cab2dae773a9e6fd605"],["/posts/cca6755e.html","4d0c5fc40057d73efafa441850c535de"],["/posts/cf1cd846.html","cd28b33ad3765d7b463eed8473d46978"],["/posts/d6a434b9.html","8d9024c1148a5abb5f7fb9d48324e2bb"],["/posts/ecaa32e3.html","0a7976a797d39e5fc1e70d4d4b4cb934"],["/posts/ed8ba887.html","9fcf1175c2039f7b994f864e0ba99889"],["/posts/edab46fe.html","e34b1bab4e971ab4981c0d271edbfd6d"],["/posts/edd0080.html","a9dae2bc0d884bdeecbf76a078af3451"],["/posts/f2f795cc.html","40d6404663d1b256ba01c8f9d49c3ef8"],["/posts/f7c947df.html","75d0821bf424ebcb91ffb86cd7c82fbd"],["/posts/f7d3a65a.html","81a0806d704111c1c25889eec4c7748c"],["/posts/f82b2580.html","cb807741ff15031ed1a6c960cb698239"],["/posts/fac97174.html","789834539e7223209de0382ddf9fe9bd"],["/posts/facab7a2.html","82a5a4e19224a87485a34a4d00820c0e"],["/posts/fdab9a5f.html","8482ec5a67012cceb0eb7d7faf58aff4"],["/posts/fffd9e73.html","3a8887a5120efa7a3d3ec6d9b728a3d7"],["/sw-register.js","6af950a05678238d5aa8dd8c18c40f51"],["/tags/Git/index.html","0a32507358c467b25d30e127a97fea4c"],["/tags/IDEA的基本使用/index.html","1c2a13bc83570e919ff7463c9e3a9bce"],["/tags/JavaSE/index.html","56a54966d00e5a39b4e6a1260fde9860"],["/tags/Java基础/index.html","6d7c9935621a78fdf64fb7489b81bce6"],["/tags/Java课程作业/index.html","c5b602a5b530ed1eef874b10be56ae83"],["/tags/Maven/index.html","04940f1a3d2fcc2597d931caf7dcad0d"],["/tags/MyBatis/index.html","d6e97a44f14bc13a5d1e53745eb6442d"],["/tags/Mysql基础/index.html","358ad68bd9a40276250c8bcc678f169c"],["/tags/Redis基础/index.html","350ef094610e614bfc35972e62b0b072"],["/tags/Redis实战/index.html","45c31797cd124c335f8ebe8454a46ddd"],["/tags/SpringBoot/index.html","f78a8ad32920f4d87c33045ac34cffcc"],["/tags/SpringBoot项目/index.html","37e8a8132f768fedfff49dc00a916df4"],["/tags/Spring整合系列/index.html","a7464da1e61347bf152b5d20af5c9dc6"],["/tags/index.html","042eb376ed492a5b33332be5a9f5752c"],["/tags/redis报错杂谈/index.html","21212d51ae111a701baeb8c82dc3a6f3"],["/tags/redis秒杀业务/index.html","5389bcbb116b23efb6ebae19343939be"],["/tags/响应式Web/index.html","4431c7b8a8dfae8ebde47e5d423ec753"],["/tags/思源笔记相关CSS/index.html","e58d52b62a647d8ea574af7d0df0c751"],["/tags/我在人间凑数的日子/index.html","2c8b96342360c26acf906493f756fae2"],["/tags/操作系统/index.html","d49bfb679e33b5b5c9b0dc1686a01957"],["/tags/数据结构作业/index.html","a3901a6b9186f9be71187027ef13a371"],["/tags/碎碎念/index.html","c5cacfa793125c2aa84a1a60930e2f15"],["/tags/编程和环境配置/index.html","478bbf9e8b1fe14aa92e193c40766d3f"]];
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
