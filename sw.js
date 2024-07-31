/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ad57618c3a604bcc030c3adadd201293"],["/about/index.html","dc48b6547b38954d67f682d850613c87"],["/archives/2023/11/index.html","5db37a2d22562d4d82fedb1439139fe0"],["/archives/2023/11/page/2/index.html","4afec46ecc21fec9fe96175817466c3b"],["/archives/2023/11/page/3/index.html","13e8f0d5ba03d18a34e3347820db781b"],["/archives/2023/12/index.html","691631a9057500169df01d25e59dc243"],["/archives/2023/index.html","5bc9edca6a977015214278b775d61354"],["/archives/2023/page/2/index.html","dbf2e057e350f2d596aae5c741e3f658"],["/archives/2023/page/3/index.html","17a406c76627a697756fd1505a579db1"],["/archives/2024/07/index.html","727bba7124684e72ea2c9f64592ca966"],["/archives/2024/07/page/2/index.html","b47bf66531827b901bfc9b7caffcf373"],["/archives/2024/07/page/3/index.html","4f59bd287cb749b931a5ee5ed27e6ae1"],["/archives/2024/index.html","7ff0f3e0f0e28e0bee7dbb4241de9430"],["/archives/2024/page/2/index.html","8c456cf1b97a00426f3c3c30411a076b"],["/archives/2024/page/3/index.html","b858fecd6a2a8df5feb6e53df2357748"],["/archives/index.html","ca3e9d5d1132c29297d6b0d10d341a27"],["/archives/page/2/index.html","fbf3772b805c93f212685d4b4a30e701"],["/archives/page/3/index.html","ff2b0e8b297481e54f5249668643e2eb"],["/archives/page/4/index.html","e62a063c6c467ec669558f921ce86141"],["/archives/page/5/index.html","db627405880f035afa33176033df0f7b"],["/archives/page/6/index.html","eeb3ef1be652a761f57ce386b7f193b8"],["/categories/Java后端/index.html","9d0d6dc4f66a460766cdd3ba2d0e62d0"],["/categories/Java后端/page/2/index.html","da7c78caffcb7e63595ac196697237e5"],["/categories/Java后端/page/3/index.html","d3747bf8d9d8d2a5ce3e6edee873fd62"],["/categories/Java后端/page/4/index.html","f014d2ffbf5fc718287293dd2d62a393"],["/categories/index.html","8c2ffea8903a0c7d4bf8c8d74bd1386f"],["/categories/友人帐/index.html","6430d2a72254ec8cd6be1107f008f859"],["/categories/思源笔记/index.html","e6857cec38005b4c7a439c89548ed26b"],["/categories/版本控制/index.html","b4af77d7bdbce11a63815bad7d175297"],["/categories/考研408/index.html","77e3864cafe44155cb0f2cc6773afbae"],["/categories/读书笔记/index.html","ab816415a695207cccd986979f6736a3"],["/categories/软件工程/index.html","c97e9f5621abb8e804e6bc4b832f8ba5"],["/chat/index.html","5502974ccf3918e83e646266b147f441"],["/comments/index.html","f293c402ce2791e067433dcdb27ab22b"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e5943540557d7534593ac9c436f3b0ab"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","ff472863a3399de3c8ed1a244bc3273a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","0d33258be3229fc9f127d072cd0bad76"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","77c6e9896acaf873da179f4be472ed32"],["/page/3/index.html","fb239bf0d7f37efd04ca454d8d308c1c"],["/page/4/index.html","ebedaeb8e6f001fabe78cd19acc04832"],["/page/5/index.html","22f901aefd31f65594fa66c0d05df9eb"],["/posts/18bf100b.html","570496141fd1cd3c1ccea3d615be4592"],["/posts/1fcb7e57.html","6248e4fa1ff1ea081f0789fed481897a"],["/posts/254393f0.html","d8413a3d7d25e5aa3ba01eb908d4e5a8"],["/posts/28b3fa6.html","9cd5c85348ab7cae2a2dda0c1ef87e30"],["/posts/29f0725f.html","21c931c63024c5b014f5fdb852b25fc4"],["/posts/31c36041.html","25fab514ea4c8d3a90a647fad639f70d"],["/posts/3513a7dc.html","d677037d5627f2d88af0db1b90523953"],["/posts/3e69d26.html","711b91cddf1eed4287b0d28a9f428057"],["/posts/417de2f1.html","0a24ab1861ba94afb3f74c72648deb02"],["/posts/442fdc66.html","a7c02198dc788f205b9df7294673951f"],["/posts/458f2701.html","33b42e6c63513281394f9b7ee39199c3"],["/posts/4e6d3c3b.html","8c4912992f823cea7a362eb47c326990"],["/posts/4fc13381.html","139f8aacb427d30414ec0f6ecf3eee2d"],["/posts/51361b40.html","9b2bd0c9720b2e08af460714f5a64745"],["/posts/5413be0e.html","804117a7a1003c095d127f0001962671"],["/posts/5596f2.html","5b8b8b4a2068113fcb2636a9c6f561e0"],["/posts/5c81b531.html","7d5ca2b61d8471a6a43b73497be4bac3"],["/posts/629aaf98.html","597024754a6ecaa643feb89029ae4686"],["/posts/65c29e.html","0dbee629c1bdd8deffadd881c7fab797"],["/posts/7105be24.html","dba6352d8aeb6229d1191e145432b9ed"],["/posts/750cb0cc.html","2f1aee7dbfd0362334cccc8fee52b3b4"],["/posts/76897b5c.html","dc7295e6895b0c6b3aa8bba13c444088"],["/posts/852e85aa.html","931d09d4386e0f3469eb9dac5b236d64"],["/posts/8712b9be.html","6fc582fdce245b014e285244eb17a903"],["/posts/8e1cab8e.html","6333e34924ad04b2bead58344f4046fe"],["/posts/8ebfad52.html","5f5720a94d0f40a5fed7617914c24b38"],["/posts/8fd19ba2.html","ffe1a2d361ebeeec507222dc896a8e76"],["/posts/92d0de5b.html","23504f1c1aac4fed5c4b2f6a0e6ca347"],["/posts/9e3d6f34.html","9b1451c08cd63a67470b16f93120ff19"],["/posts/a0708e01.html","4a47b05ba1510984ca79568b5959afa5"],["/posts/a25a408.html","59fb3ab2328c57fdc41a5a54e3907e18"],["/posts/a6b15897.html","283103860b991c624089e3bc0a3cdccb"],["/posts/a9867134.html","1c57eb47a1b6f1315376ba9a0a569518"],["/posts/aa351366.html","59d86e5b47ad492e222be8a11f8588ed"],["/posts/b42f7f50.html","cf14f045379a78c08e510de31c686c4e"],["/posts/b492def1.html","db3db7822b6c999d56017e4637654a78"],["/posts/cca6755e.html","1f8d71fcb9677604ea7068678fafed96"],["/posts/cf1cd846.html","354435ad5091f2d4756ca57a95517d84"],["/posts/d6a434b9.html","0703c1c4932125b0bb05c6692533abd4"],["/posts/ecaa32e3.html","06197999811f5a029c81abbb7f042cf7"],["/posts/ed8ba887.html","6a87d6df75199f54eb62211327ae1c75"],["/posts/edab46fe.html","ef1f0a2e877b6d1da86636b31126ccc4"],["/posts/edd0080.html","7c41b379ec055075169783744f0fe225"],["/posts/f2f795cc.html","1ba80a75a63c298361769a7368118ef9"],["/posts/f7c947df.html","a2ac87adc398fe3ab4d6efa03c0fbd6c"],["/posts/f7d3a65a.html","e76a4428d61a8be7a9eabbe026166e92"],["/posts/f82b2580.html","0790077e9dd1041d9151ffa6a14cc1f8"],["/posts/fac97174.html","fe69b37061ecbb9593f8366d28d72dfc"],["/posts/facab7a2.html","a410a27b9553cd2d777685189d0b6df6"],["/posts/fdab9a5f.html","99d31dbb522005f09a94f88dab890d7c"],["/posts/fffd9e73.html","7383f007e46e825f5d8f5ab4dd80dac2"],["/sw-register.js","a2d85383c85b7a04ca55c6e8b955b9f4"],["/tags/Git/index.html","5ba454d983709158c6b880e02575309d"],["/tags/IDEA的基本使用/index.html","e0f40ca011581f170ed2572d36f2bf79"],["/tags/JavaSE/index.html","528d7180061771e3c3d1b68e476a54d0"],["/tags/Java基础/index.html","5e0c1cdeb5baf1cb24ed1fa2ebacb54d"],["/tags/Java课程作业/index.html","f0ac4ce30ed09bbe6b2419038e4a3613"],["/tags/Maven/index.html","dbeddd97f7c13422cde6b9df12aae38b"],["/tags/MyBatis/index.html","841c9e1b0846549ff63fd69560f4450c"],["/tags/Mysql基础/index.html","ec22138502f459c565bbb960effac459"],["/tags/Redis基础/index.html","ec8e2c59a242f310121266949f209b98"],["/tags/Redis实战/index.html","4dd9290e4db63733c1606aafa26fd385"],["/tags/SpringBoot/index.html","b0a262ce8ef3f71fcb19f8acfed46758"],["/tags/SpringBoot项目/index.html","9b6268ca7db148b98fc43145895174c0"],["/tags/Spring整合系列/index.html","c5b059d0b404dea54ba1445b4dbb3979"],["/tags/index.html","3d43b96690f7b78fcd78a881f9cfe5f9"],["/tags/redis秒杀业务/index.html","949df04074ef5034fdc6ba36a737e383"],["/tags/响应式Web/index.html","ad333de504c018a8c15cc0e41f3f826f"],["/tags/思源笔记相关CSS/index.html","523e06d111188a9427731323c7e5e3c9"],["/tags/我在人间凑数的日子/index.html","8cc000f9a9e78863c8387b38ee7a693d"],["/tags/报错杂谈/index.html","c4a36f0a7e00668ddc77918dd41550ae"],["/tags/操作系统/index.html","5141c278272c503f5c7b8716a73a00ba"],["/tags/数据结构作业/index.html","158138f7ce0749a828cdc236e1e57f2a"],["/tags/碎碎念/index.html","b0c2f4ccba9d99bbc62d3670f160ccec"],["/tags/编程和环境配置/index.html","5f98975210915465c91dd205a187e644"]];
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
