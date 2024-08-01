/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1360f9acbd0aef51def4ee306ba02add"],["/about/index.html","59ca447f5dc1ee224a3a89ef1183f6a9"],["/archives/2023/11/index.html","126d0693792e186beb62519e19e6ec3b"],["/archives/2023/11/page/2/index.html","33267b5090695a22801fe4a1b2444feb"],["/archives/2023/11/page/3/index.html","1b5bb961306f6a0e72c3b4e5fc30c4e8"],["/archives/2023/12/index.html","d01cc6d145ab9b5a34707712e9605f67"],["/archives/2023/index.html","958e992adafecbe3d88a87b430704297"],["/archives/2023/page/2/index.html","b7334e06f64e4339fe4d89078d33fbf7"],["/archives/2023/page/3/index.html","29319a16da1e323c86beed509711fa09"],["/archives/2024/07/index.html","710f246beff4913a12c65812fdeb7396"],["/archives/2024/07/page/2/index.html","e8f2b7557af4bfbfe1524bcb7f48b94f"],["/archives/2024/07/page/3/index.html","2a852fcf8fde8fc517b2b1d7c06ab5ad"],["/archives/2024/index.html","f795cee76b7eee39ac1b2fde2e667d05"],["/archives/2024/page/2/index.html","dcd3d19e5210b504b9f95726420414ef"],["/archives/2024/page/3/index.html","3ee7ae8699ddff648d8fd70cbec6ef04"],["/archives/index.html","1b5d9045d1e7846de867dc86ebb1ea15"],["/archives/page/2/index.html","7b5d16ecc068b63b3b95de97ac6dc9ad"],["/archives/page/3/index.html","898ab040acd3fafde073a7e298acfe4f"],["/archives/page/4/index.html","5d4b2f87b5cb7aa953e6e3d07bbac394"],["/archives/page/5/index.html","c79c0c5972773ab405bdbbe8d4ed26ba"],["/archives/page/6/index.html","baeceb31ef96d5138fe96046d2b0ee1f"],["/categories/Java后端/index.html","c6fb68cd95474f96a8dcf72f72dd1c78"],["/categories/Java后端/page/2/index.html","d5939960bcfa4aeba13899e1de3d77ee"],["/categories/Java后端/page/3/index.html","9f13c444c576e4a03268572b82f11f46"],["/categories/Java后端/page/4/index.html","0851dfed2b13082b96a4857778b280b3"],["/categories/index.html","2317fa93ad6758d1015996a57049eb4a"],["/categories/友人帐/index.html","1c317f3fe83242431987e0d07ee0cfa1"],["/categories/思源笔记/index.html","5b538947dac5950283557848e52c990c"],["/categories/版本控制/index.html","4eda7cdf76f4048505641c5226f9497d"],["/categories/考研408/index.html","8fb897013a2694205bf380db60d4ce8a"],["/categories/读书笔记/index.html","dd3cf4846129411922fe7d3bf4fd7493"],["/categories/软件工程/index.html","d09d03eb9a9ac97b13cafaa91e7b3753"],["/chat/index.html","b7d3a18153aa8f8c1d06f8481f0868b2"],["/comments/index.html","c235836240c6298aa0fde08f561c4345"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","6baf89db490ac9a781a95ef83de08eae"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","c9582306b548e253578ed85e9cb909da"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c7387849cb8015295b50d0a24bf8b59c"],["/page/3/index.html","78ac71a13dae777d1c992affd893c515"],["/page/4/index.html","1613b5dfebd0f1dca83484e28b6c5c37"],["/page/5/index.html","d87c539a2cb1bc3ac693e1c178af1775"],["/posts/18bf100b.html","c339996d959fd043f197e349f63e7edf"],["/posts/1fcb7e57.html","e8443fc30e7313e53398550c5fedad6c"],["/posts/254393f0.html","79e9a09964242fb95bc0e1aaa1871874"],["/posts/28b3fa6.html","b7e54aaf7846fd2ab8c50985fee776e1"],["/posts/29f0725f.html","217eb6a1c587fb9dbc3d053485dbe488"],["/posts/31c36041.html","767a0ab9956c40077fee37056dac439d"],["/posts/3513a7dc.html","453568b4605b323727b4d52a7c92c791"],["/posts/3e69d26.html","581ba18e581bf30f4aed3f7be9170ea8"],["/posts/417de2f1.html","6ed2b241e79296666dcbf7eb9cab6d86"],["/posts/442fdc66.html","5d7b5917e384b1d303aef9b1b955dccc"],["/posts/458f2701.html","07c386565b16d658be5713938f1ef32d"],["/posts/4e6d3c3b.html","b2503b4483a36324122fe136cc7afcc7"],["/posts/4fc13381.html","9d5ea7fa8f55f4650a3e8aacf4bb1784"],["/posts/51361b40.html","4ff90d74bba55f4e4509acc748b8366a"],["/posts/5413be0e.html","0ca160d68df177e4434e12288038f625"],["/posts/5596f2.html","af8d708511c31493d122f32336af4722"],["/posts/5c81b531.html","03b18a2d3a16ac16ae9ace8e99bec2de"],["/posts/629aaf98.html","bc60ca66a214327d4b8f52d1d14f1260"],["/posts/65c29e.html","5e8e5a1b0bac0eee0f39a9e15e39fa3b"],["/posts/7105be24.html","8940ce7641d4add4e6d2aac3e7c56beb"],["/posts/750cb0cc.html","a30d5f408fd1e3ce269e7efa69c152be"],["/posts/76897b5c.html","3e06be19b8810a2b288ff681dd11888a"],["/posts/852e85aa.html","5f34dd3b09ce4df977370b4d1614e466"],["/posts/8712b9be.html","529dc297cf042868b8d6fee5b1c11ae1"],["/posts/8e1cab8e.html","4c21514c45a182b6b75b91805a7f6867"],["/posts/8ebfad52.html","e222b0284719daa7b889f57f6456977b"],["/posts/8fd19ba2.html","da9b61d5baa1beb506d403787a145fcf"],["/posts/92d0de5b.html","8dd013fe69dd1fcf6d4634482364e1a5"],["/posts/9e3d6f34.html","c946a2886870a31fe79fc8ed0bae21c7"],["/posts/a0708e01.html","d502d20137e0bffce6a928d412671805"],["/posts/a25a408.html","2dd9d22773bdcb083627fa466be31bae"],["/posts/a6b15897.html","7b76c8898b2248aefb50282d3aa4cf9f"],["/posts/a9867134.html","d7d8f83ff1afb74083e7fec51aaa6480"],["/posts/aa351366.html","37bb879d50cbc563efe11b7b372dcc63"],["/posts/b42f7f50.html","81b1b060f239254509dd44cea78a4b58"],["/posts/b492def1.html","31b41ec67623b9be853d60fdc836a50d"],["/posts/cca6755e.html","2aba34677c652fd2bfde8146a9b3e243"],["/posts/cf1cd846.html","2a03eaa4133dd0275ffc1d23afb7eb16"],["/posts/d6a434b9.html","eb0eda43d2a9d8b77e9b504683c70499"],["/posts/ecaa32e3.html","3d8819d172f415364826c091cc30a9f8"],["/posts/ed8ba887.html","23d930007fb4c646559b023772e9dad3"],["/posts/edab46fe.html","4c9299c82cc7bae861e1c8a5abdec1bc"],["/posts/edd0080.html","e3eaf050506c0ac9156978f1ae7ec6b3"],["/posts/f2f795cc.html","2c8dd0a9aaa102735ecf399af1d74871"],["/posts/f7c947df.html","77661268536e9ae66efbb29e4de05854"],["/posts/f7d3a65a.html","cd7442f22756083c5e2b2195ae2255ed"],["/posts/f82b2580.html","7fc8d99e3c794ffdc6af72eba1203984"],["/posts/fac97174.html","dceca4c2e6075bd2256fa731be3ea4de"],["/posts/facab7a2.html","42014ba01987b12d57ef2319930de5ba"],["/posts/fdab9a5f.html","f0924b5de3dad23fe4dd7e11ab009218"],["/posts/fffd9e73.html","c8ead7d8f68d49cb16b74ecf15719b71"],["/sw-register.js","bcb6c932df8b9869c24017ff7e0c0a30"],["/tags/Git/index.html","73d9ac3831c0de7ce34ca65a9d9e0771"],["/tags/IDEA的基本使用/index.html","683fcd34dfca3b46511be2993cbc3326"],["/tags/JavaSE/index.html","00b87bd8eba959b08a791b207d72c606"],["/tags/Java基础/index.html","850a6394e21dea7e38f91ae7b72ec389"],["/tags/Java课程作业/index.html","9c680db0015104759d9686aa333af311"],["/tags/Maven/index.html","229063b4ea2d2075903f050f7f2c8622"],["/tags/MyBatis/index.html","066471a51e9cab75ae23b4ebcb352297"],["/tags/Mysql基础/index.html","966bf18d0e85b8162cdf132a1eb3b7ca"],["/tags/Redis基础/index.html","61f7d5f420cafe1ccf3882e5f8a0bd5e"],["/tags/Redis实战/index.html","92833c91d289cbac366d5428f4183cb9"],["/tags/SpringBoot/index.html","e5427c18a072cfe8416125e7a2017f1b"],["/tags/SpringBoot项目/index.html","899949da9a82c99455c50a8ff0cdab78"],["/tags/Spring整合系列/index.html","2c3fe1eaaa02dd8c3b1171507c8d9573"],["/tags/index.html","cd1242f4327d8624ffac0493b7798d0a"],["/tags/redis秒杀业务/index.html","12b6bb88b96a185ff6f59721e24b9524"],["/tags/响应式Web/index.html","b919745050ee7c69143481d6da24fa57"],["/tags/思源笔记相关CSS/index.html","2d43ce04d9937b23f82ac21a83896aae"],["/tags/我在人间凑数的日子/index.html","50b250590ee59320ab76cab1496e8b5e"],["/tags/报错杂谈/index.html","3650cc2a1190fcc4c607bdb1407b9684"],["/tags/操作系统/index.html","181f9ddf95d6bcc96b920da5a90907fc"],["/tags/数据结构作业/index.html","8e0dfcc565b79de0e21c850cdb1459d9"],["/tags/碎碎念/index.html","b73ebac3aaa9f00472f973abac1e8d0a"],["/tags/编程和环境配置/index.html","f5dc92762ad13db00936a6ef23cdeb61"]];
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
