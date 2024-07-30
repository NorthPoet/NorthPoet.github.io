/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0ac49a46d33f5e07d30589097034dd48"],["/about/index.html","97e7a43759710b7d11087a8ae41ba53f"],["/archives/2023/11/index.html","3048aa5d8a25bbcd70de0b588fb10f2c"],["/archives/2023/11/page/2/index.html","ddeb26eb7dd11b1361409f9669b25c6a"],["/archives/2023/11/page/3/index.html","45d4b7ea25e127e9991139b7f06dc928"],["/archives/2023/12/index.html","fbed60a87240bd1622a464d653f94a50"],["/archives/2023/index.html","6f8dcd91bf364e601d3f5e1c6d653df7"],["/archives/2023/page/2/index.html","bc235408f50ebf0b5e614c87d1c210e5"],["/archives/2023/page/3/index.html","63e4514e01fba5834cd736f81d0e2eec"],["/archives/2024/07/index.html","21e25410381c193f5bf38d1ab2313d6d"],["/archives/2024/07/page/2/index.html","6378d4872a1282c786060c9d954c4704"],["/archives/2024/07/page/3/index.html","c6fe13e6f0c84af4baea74d83a4395f1"],["/archives/2024/index.html","07948e08ff3a36380fa87e53a881058d"],["/archives/2024/page/2/index.html","d6a20872dae768d9a61fe77cf94eccb7"],["/archives/2024/page/3/index.html","b2877b76234c93cde3374a5f051acc14"],["/archives/index.html","c22d4e02ed562b26d2e055c92b0ebcc5"],["/archives/page/2/index.html","9079d8741311dc7042c9211d3b001896"],["/archives/page/3/index.html","78bceee236beda4a2fb74fe930de7293"],["/archives/page/4/index.html","ad723d7d7e263f35283274cfcfd63483"],["/archives/page/5/index.html","c67eb28cefc13109eafa89474ee9a406"],["/categories/Java后端/index.html","ba6e2bd3a6a659aa66a4c7b7fb01623c"],["/categories/Java后端/page/2/index.html","b4f25c033292ded909893f37f8616589"],["/categories/Java后端/page/3/index.html","c30d68f07ad116176c61286e264dac34"],["/categories/Java后端/page/4/index.html","191a692f633c2b6484bf65d67fd7496e"],["/categories/index.html","f200bc2cdcc3da608a6d385ec7452a38"],["/categories/友人帐/index.html","326ca902a05f2bf76c25660530d81b07"],["/categories/思源笔记/index.html","0f797af6ea7df2a376a75251b409f9cf"],["/categories/版本控制/index.html","38f180b6cd6b50cc312a24177695f347"],["/categories/考研408/index.html","449a8eb40f30908eccdc1e09ad407e67"],["/categories/读书笔记/index.html","06b5b7faacd18c84976199c193c63fc5"],["/categories/软件工程/index.html","9f24617d4a1f0ef0d02877d71256c4ff"],["/chat/index.html","16dead20c4d612fa5dc9070502d1d6a9"],["/comments/index.html","1c21922af14f4046e17aa1f43794416b"],["/css/custom.css","c19b709a7e08f3cc8f976ff4d554a0ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","334b3cf1c0770ce645f3b5a0fe87e205"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","362572c964fa3dd4ea7138da5d645d45"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","f8b68ed410b8c6041652db5a9dbb322b"],["/page/3/index.html","7460756c24bc32ec70eef9161c5d34b8"],["/page/4/index.html","5e52609b1fe78edaa44905c946c7e98e"],["/page/5/index.html","1ef0f8a35c926284ba110fda21d394f6"],["/posts/18bf100b.html","6b877c896eac788fbdb94ecb4b4b4ea3"],["/posts/1fcb7e57.html","bda97415fbf3dcdf0990199253e04ca2"],["/posts/254393f0.html","ab2295d97748468a2cdef9c3676d82ac"],["/posts/28b3fa6.html","25befa329d4452017ba171cfdbbc6e3b"],["/posts/29f0725f.html","77c8987031b8b045c36a1a19be7dd1e2"],["/posts/31c36041.html","f3bb38728f7147ce15777abc9cc3788e"],["/posts/3513a7dc.html","bd76c56b0e72ce1092cfc21bc2128e90"],["/posts/3e69d26.html","999731e3b46fb9e04d80143f908582dd"],["/posts/417de2f1.html","78a0da8c1b57c6d4c462a6327e29f8c8"],["/posts/442fdc66.html","728397d45e11a657f7efd296485f5b8c"],["/posts/458f2701.html","cbdf70de27fa810a9d82b2881ae4a6d2"],["/posts/4e6d3c3b.html","e668159e3784f553a29d2c093883e5a7"],["/posts/51361b40.html","ba76a03972c4e06f47c47da719f81ead"],["/posts/5413be0e.html","8eea4683b8aefb6d4866fe34883e9920"],["/posts/5596f2.html","ae0be87963d67f4c8c3c67dec478ce38"],["/posts/5c81b531.html","6614296b7f72d225bdd8b56ac4454fb7"],["/posts/629aaf98.html","84ad619b718bbd2113e31c95446c48b6"],["/posts/65c29e.html","a0d7ad536fe20155d873a8733d6a3e80"],["/posts/7105be24.html","739f675eb53a17fe0f4a601dcf05714e"],["/posts/750cb0cc.html","e5c75839eaf3de99da9c83a42872184c"],["/posts/76897b5c.html","20815d1848407d5b63caf063d5ba91b1"],["/posts/852e85aa.html","7d9a15ddc82ff48167d15c6961a883a1"],["/posts/8712b9be.html","05f487ed17eef63c4d1d8a77df45fbf4"],["/posts/8e1cab8e.html","78bcf08afe9a94d39b760d7d1a9c5de6"],["/posts/8ebfad52.html","f1baee3d09ba40eb2664aefb40b150fb"],["/posts/8fd19ba2.html","ceb6c7f0e066bb2935cd8d017e63f87a"],["/posts/92d0de5b.html","a1f561f1fe2336c255c5d43e12061ef3"],["/posts/9e3d6f34.html","857bbaa9b191b26571d90c986f81f70c"],["/posts/a0708e01.html","265267f4e7acd309ea9830c9d982fdec"],["/posts/a25a408.html","2dcd3cf2cb730b904dd8e715e89cde5e"],["/posts/a6b15897.html","e75ac092c038d1f9dae66a7c247c52e8"],["/posts/a9867134.html","18c705efb03c303e5982f12247216ead"],["/posts/aa351366.html","e2e50500e6503777ed5877374b9a0248"],["/posts/b42f7f50.html","0a58de64faef500eda7303f12bf54aa2"],["/posts/b492def1.html","c7c3e0c2016ec8e11e74a8ab3cf74a53"],["/posts/cca6755e.html","17c5720294917b4b400cba0770e9faba"],["/posts/cf1cd846.html","9bfd2c5bfcdea1a6af9d03c19caff1cf"],["/posts/d6a434b9.html","91974b5ec438103ef4870292d49f8325"],["/posts/ecaa32e3.html","26e38220b0473d3493d8b62a2a92f31a"],["/posts/ed8ba887.html","dccc0c3d03060d8a571d7598ad3fb197"],["/posts/edab46fe.html","4579c856104c052be2ac7a07338a1be9"],["/posts/edd0080.html","2e4933fca469afa5110d28f4a3b7c309"],["/posts/f2f795cc.html","17bf60ac3118af3117a070f5b6e252d0"],["/posts/f7c947df.html","54436f079f239d369fdd13960e01b0eb"],["/posts/f7d3a65a.html","74f49dcfc29efbcd3677d826206f1f78"],["/posts/f82b2580.html","a07dc3c91b3f18c4f1e56e08ab44d60b"],["/posts/fac97174.html","cc4dfaefcba9f8231b10e7f8b5a4f607"],["/posts/facab7a2.html","71c3b1ccc9cf920cfcfbc69ab7c2db70"],["/posts/fdab9a5f.html","bcbaed3a7a1d6da9297465417bc118af"],["/posts/fffd9e73.html","27c9032470bf40a01bec99902b5135d2"],["/sw-register.js","bd1c499fd6e917e0c1ad2a1679487b8b"],["/tags/Git/index.html","4da37d2bb7a4104d290b78af43eab2e8"],["/tags/IDEA的基本使用/index.html","010045c6055ae59ac1e0879c13ed7e63"],["/tags/JavaSE/index.html","e4080abfa1727bf6b7637cde455a81e6"],["/tags/Java基础/index.html","95a8660159bcf27a111d0d1d9fa17c38"],["/tags/Java课程作业/index.html","bb97cd878ad5ea620e0a81d93de06534"],["/tags/Maven/index.html","fd7638947e2e5d93cdd987fcc659c0cc"],["/tags/MyBatis/index.html","d85188b27cb5fbfd1eef859fcc31a823"],["/tags/Mysql基础/index.html","676eeec73e487281fc7674ad1d4ab194"],["/tags/Redis基础/index.html","e144d6dfb41758b51a2c25d0bc44a3c0"],["/tags/Redis实战/index.html","61dcbc5266b552c3f469aa7a355d9e64"],["/tags/SpringBoot/index.html","ab3a72d4fbfb4c24be99db2a35982acd"],["/tags/SpringBoot项目/index.html","cfcca5e60edcb778f5f8b5709b8090a2"],["/tags/Spring整合系列/index.html","cc0660ea2f58afa6db6b95cc98867221"],["/tags/index.html","e9e45fd8c5f455184eed5558191e5149"],["/tags/redis秒杀业务/index.html","a707ad12b341e2270d199caf97d3c04e"],["/tags/响应式Web/index.html","7f70799c5496fa3ac15839ddf817e396"],["/tags/思源笔记相关CSS/index.html","44a1e6b0fdd74af3c532c822e39b0801"],["/tags/我在人间凑数的日子/index.html","b1df0d01292311b20778057bd60b1995"],["/tags/操作系统/index.html","beaad541521db2439141eaf1f71cbf9b"],["/tags/数据结构作业/index.html","0cc44b07605ca1b44b626d53e3dd9a65"],["/tags/碎碎念/index.html","b07948055cb01f8ffd877fcac65feed2"],["/tags/编程和环境配置/index.html","6c9c42d7ddee1bdcf0cd24f13b4c75bf"]];
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
