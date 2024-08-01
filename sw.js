/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","80089261bfa2c2d6d23b076cbda9a1c5"],["/about/index.html","394f3b7e22c5694318e3cb07600cd334"],["/archives/2023/11/index.html","777e657d4b1de273e46f5c251a572cbd"],["/archives/2023/11/page/2/index.html","3571f125dc00b0f0a589ab7ed358bc1c"],["/archives/2023/11/page/3/index.html","50c936dc8b61492cad4e737a274bb30b"],["/archives/2023/12/index.html","71bbcc255c5dce3d8d99c9d840aa5856"],["/archives/2023/index.html","1f0c26320b727db87252509ff852c945"],["/archives/2023/page/2/index.html","6d511bc39b824b61cdf1efd221bd4f70"],["/archives/2023/page/3/index.html","f712ab0b304b370693dd41d67186bcb0"],["/archives/2024/07/index.html","293f15ef80d8754b8860001244539bbc"],["/archives/2024/07/page/2/index.html","d9e76b120998a4625eedcca4816ba602"],["/archives/2024/07/page/3/index.html","58cda76bd9af46041e12010a62e0f4da"],["/archives/2024/index.html","a78e32711f832cf05eafd3df7f4a75e6"],["/archives/2024/page/2/index.html","45f76fd96ef938bffa854fc37c702a03"],["/archives/2024/page/3/index.html","89410f1ca9ac392e576abce6f1ce939c"],["/archives/index.html","842223c857cb946c44bece300dc9d492"],["/archives/page/2/index.html","0b1efa50a5d3d675f2652e9c330ac62c"],["/archives/page/3/index.html","c5a903ff6619b86f83e88e29f2e07ffa"],["/archives/page/4/index.html","b0c8cbb6fb34d7da49597373f663b809"],["/archives/page/5/index.html","b434d2ab2758b3193df61e3aa5a43eb2"],["/archives/page/6/index.html","f1cf27ca8b9dc8a2c8d3348cf7a7f51d"],["/categories/Java后端/index.html","5217e615ebf2c2b360a301832ab7b62c"],["/categories/Java后端/page/2/index.html","683dee22a472e4b0c2883964dc45abad"],["/categories/Java后端/page/3/index.html","828c3c0251c0fad9709679dcfd737705"],["/categories/Java后端/page/4/index.html","8f13ec57d7153a0b055f966202850e2f"],["/categories/index.html","8396af3716b0e5135c4fae6c449d60cf"],["/categories/友人帐/index.html","5eb6698303f2dcd1e684e38ad6376a4c"],["/categories/思源笔记/index.html","28574a7cf115c3687351dd757d7e1c8e"],["/categories/版本控制/index.html","5ee4e9f6f3113c784538c3f839e9a2f4"],["/categories/考研408/index.html","36cc0e4a657f6f70bddebe98e79e768d"],["/categories/读书笔记/index.html","6f2e011a3d6d9e3bd6bfd52af57d6719"],["/categories/软件工程/index.html","43b72881bc1c85c654b12ff3e3c6e0f4"],["/chat/index.html","51a4387c6f69cbbc7c695f3a5d984769"],["/comments/index.html","1c9729a1df19bccfe5ec239caa068708"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","ee4e6b8bc3df97e58ceff9edb28fcbbf"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","baf5e1617c756df27685feee750366a1"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","48ccc03d5d8f7561889cb394a12419fa"],["/page/3/index.html","29dd8f391f08c62ab0a9ab58548fec32"],["/page/4/index.html","20ca8722ad009526f30ac01c07eafdb3"],["/page/5/index.html","e8624725c93ef511cb384dbd3c97a7c8"],["/posts/18bf100b.html","810088b6c38fb943d8fa9e4fb120aa10"],["/posts/1fcb7e57.html","1f96f9db3d34286830d3758121cad8de"],["/posts/254393f0.html","ed1de4f79a1edadbf304e4d5523af58b"],["/posts/28b3fa6.html","2536e07d1b00e0031cea505b23452b27"],["/posts/29f0725f.html","4f6a2b5b9dfa9ba640b40e65a5f8ee52"],["/posts/31c36041.html","14800c08e593099ea86e5546c74e8996"],["/posts/3513a7dc.html","45370bc99816bf0c680476a24b8f0338"],["/posts/3e69d26.html","12133fd10bb88fa49e7f4c772af8e563"],["/posts/417de2f1.html","7dfd85106e29efeeab92be33fb63a3c8"],["/posts/442fdc66.html","528f5946565e9dd178823c02a81e593e"],["/posts/458f2701.html","6c541870b80f36baba353ede0cbf8819"],["/posts/4e6d3c3b.html","291663c1334172cd5d8cb9a46c6b1917"],["/posts/4fc13381.html","53eeaa20cb2f47eb1f7126d07379a5d2"],["/posts/51361b40.html","f0722c1142b70244a339c848055fc927"],["/posts/5413be0e.html","0a19ec9a9f1e9672739b6e86f1ee1c2f"],["/posts/5596f2.html","17b1d478689d6bf240b8017130993a22"],["/posts/5c81b531.html","e5ab3af712169dd872e373c9f70624d3"],["/posts/629aaf98.html","6c24bb28020e3ddc09f7b1c4fd9a4c11"],["/posts/65c29e.html","8a700511525a29df87fccf706c5e0320"],["/posts/7105be24.html","b12d76abd0c6d7574b029940a3ceafb1"],["/posts/750cb0cc.html","b33e1618d4226d5a9ad39cdfa7b3b2d1"],["/posts/76897b5c.html","4ece4b55196243d3c9b0e7b3ab178bc9"],["/posts/852e85aa.html","7c13e0abfc30aeef187e814ee3398ea9"],["/posts/8712b9be.html","70f63d9138d4392382d615267f69e1e3"],["/posts/8e1cab8e.html","ee451ed65afcdea6c0c9dbcdff2d2d2d"],["/posts/8ebfad52.html","5617de5071b3231ffcac307b858ac941"],["/posts/8fd19ba2.html","85891623ea2c73e6b3fbe530e705316c"],["/posts/92d0de5b.html","8a9766e36fe7bfa967635608c0d0a4ca"],["/posts/9e3d6f34.html","dfcbef3c46c1de5a6c0434170f1cc2bd"],["/posts/a0708e01.html","51428405f0434ed5ac24610c54957e54"],["/posts/a25a408.html","46c70f4713eb3e64fc8fe201c70a400c"],["/posts/a6b15897.html","c941e3adcc04ee04acc68fed3a7ccb17"],["/posts/a9867134.html","bcd24b7c251f01878a7a0114c393f93e"],["/posts/aa351366.html","1a4146155075d17694bbe0b628f63a8c"],["/posts/b42f7f50.html","ca2d1dea17ec6731331a1d12a2fba9ea"],["/posts/b492def1.html","87375813f12b305c17f31dd08c9fc3d3"],["/posts/cca6755e.html","5d66631be183345b4d73fcfa0599edf0"],["/posts/cf1cd846.html","305a9def378137274dfb233215f7559d"],["/posts/d6a434b9.html","de4aa3ed1270976d4258b633f75488de"],["/posts/ecaa32e3.html","efc8db13ae43404bf6a19acf6e9803b3"],["/posts/ed8ba887.html","b1290c3a65b41fa11aa7109e31721dc9"],["/posts/edab46fe.html","0781ae45bf700e7ae00ca0661deb51ce"],["/posts/edd0080.html","ca5407f1e6b556fbcad8c58b95be2d31"],["/posts/f2f795cc.html","500c3cfaa1e372d5fab71a4b1ceeab8e"],["/posts/f7c947df.html","d9824abb2b911093a9b9f3ca607bc125"],["/posts/f7d3a65a.html","83bd25eb9b471d1dba966a0ac525fa2f"],["/posts/f82b2580.html","3772a229f75d14a36e5781447d52364e"],["/posts/fac97174.html","212b7cb56fdd9f3145b013a4e5b05bee"],["/posts/facab7a2.html","4f0860e3ac482ad451fece210aa8d01a"],["/posts/fdab9a5f.html","268472b26da010e978ba163e8f657e18"],["/posts/fffd9e73.html","3cc268b2ab62cbc4d9bf29fc0be83e24"],["/sw-register.js","9141738521dee642b6cc54bdd3228e70"],["/tags/Git/index.html","a1eba953c52f397ab662023a96fafe06"],["/tags/IDEA的基本使用/index.html","15395f4b69e52bde52bdc2889a660961"],["/tags/JavaSE/index.html","002345bbd60d9f9a7a38cec1a2a47352"],["/tags/Java基础/index.html","0b3bede5b267bf5d0e1231f1b8e630ba"],["/tags/Java课程作业/index.html","395709ba0ac346ece679a996d470be1f"],["/tags/Maven/index.html","bec8aea1b4b2c4b6cd99cb6b5eec9489"],["/tags/MyBatis/index.html","318549ffbf2b6378b1f42dec7ff410a0"],["/tags/Mysql基础/index.html","746d3088be11a73a78b335d9f9132a08"],["/tags/Redis基础/index.html","b981d180fbde7393381c94fb578e87e1"],["/tags/Redis实战/index.html","f3efda5460a03c1ad0f525a9a76525f7"],["/tags/SpringBoot/index.html","5da2ce05728d2dc8513c20930cca18d6"],["/tags/SpringBoot项目/index.html","ccf3f636341dde597bf811248fbec24f"],["/tags/Spring整合系列/index.html","2ace3dcc7926946df9370ad06de215fa"],["/tags/index.html","79d2aeb86d931c13e075fdb0cab1420b"],["/tags/redis秒杀业务/index.html","24a2b53644b6bd9d1afbe070afefb3f4"],["/tags/响应式Web/index.html","92f209ad883ca598cde3fd6112acf494"],["/tags/思源笔记相关CSS/index.html","b8d4097b19f7c874cca6a037e14dbe43"],["/tags/我在人间凑数的日子/index.html","0428164df527ae7a6e3a667082cda21e"],["/tags/报错杂谈/index.html","8a300ec737078305cab985cb17ebad39"],["/tags/操作系统/index.html","0b5aa8fc1fb6602982f04e1b877b10c3"],["/tags/数据结构作业/index.html","ba389758928d7435714b1ed29e0bdfe6"],["/tags/碎碎念/index.html","984fcdf27b5ba77ee2632089ecfd8001"],["/tags/编程和环境配置/index.html","bedbdc6c84799425055240e9a3ee0a55"]];
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
