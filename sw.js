/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e89b9a089755832456eac7eb8b713f99"],["/about/index.html","f1ccca0d438d2af8bfed79f3283ea8ad"],["/archives/2023/11/index.html","3bc5d7cdc79126ca337645ffdff54111"],["/archives/2023/11/page/2/index.html","22d71bf4e61d9a7d6c0a2f442cd9472c"],["/archives/2023/11/page/3/index.html","ea847bd3d53929f30fc5dc77cf6b81e2"],["/archives/2023/12/index.html","77f818784c113c5b66067f676a1155b9"],["/archives/2023/index.html","bbe77a960a7692ce8abab65801e47fcd"],["/archives/2023/page/2/index.html","c1ebae3ba017690975ca32e26847e018"],["/archives/2023/page/3/index.html","43dd329cd03f4ece7d22bb88ffd9ced2"],["/archives/2024/07/index.html","dda05f213030e03cc9dd7b051c4401c5"],["/archives/2024/07/page/2/index.html","473967d00b562dc073fbdd7aa7a45727"],["/archives/2024/index.html","ce26238fc5b8064ab0cf7dedbeb14c2d"],["/archives/2024/page/2/index.html","1ddddac415ee65ea0bcc83b7a4ed6272"],["/archives/index.html","2ead2570129d0ee37cba7e5874d0a066"],["/archives/page/2/index.html","25c09634372da02b5545c3df70ee82fb"],["/archives/page/3/index.html","9055f5194bdb6ef4120314655285fdd6"],["/archives/page/4/index.html","5c0e264b794c772b4f0414c5ea49f7d1"],["/archives/page/5/index.html","28e98c1c2b6d22c9b326b040026dab34"],["/categories/Java后端/index.html","c9e6577e3efce46f86c823649716a087"],["/categories/Java后端/page/2/index.html","999e967b35b046df8ab1d09ff351a019"],["/categories/Java后端/page/3/index.html","ecd55983c406ddf1abd02ba6ca5a6efe"],["/categories/Java后端/page/4/index.html","2566732a1c51d044be553f2f08eb3617"],["/categories/index.html","22caaa0191b069508af97d0199b12aa1"],["/categories/友人帐/index.html","ce041ba09128f0432d6d65c05b6650f2"],["/categories/版本控制/index.html","3371b9d1b30ebcc8165e1f83e017566d"],["/categories/考研408/index.html","6e767b416370cd50972ac4ca8d3690e4"],["/categories/读书笔记/index.html","6812f77d473865dc7a7eebafa7324c42"],["/categories/软件工程/index.html","97dbd7426f71630b8b24ce962f0f4bd8"],["/chat/index.html","eb8a9c810ad10c8e490d82b8cd591627"],["/comments/index.html","184b5aefa9f35cfd58aa120caa33bcd1"],["/css/custom.css","5e9f835fc5651669166a6f22456f9232"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","8b27b202843a46b9db1ed9deb3b572fb"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","2a31a0cf9a3c1f233606e1e49c32f413"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","02498928e001eeca76f13221aa457e4d"],["/page/3/index.html","94d47b82411e85975f7fdfee440cdfbe"],["/page/4/index.html","6c0f2733aa4e0f80edeb12c88ae96b15"],["/posts/18bf100b.html","8098d5b82c507591988b07cb719a54e8"],["/posts/1fcb7e57.html","a5a47e96cd9f022015b3771f6e7d66f2"],["/posts/254393f0.html","dfe171dd3da697ca0bd92e3bc4c3061f"],["/posts/28b3fa6.html","1ac250bdf3b6ba3bf8e32e5e3ce977b5"],["/posts/29f0725f.html","acf0c4bb9501098d765350e7be3c0773"],["/posts/31c36041.html","4a2bd509d463685a969ada1c42f79611"],["/posts/3513a7dc.html","05c12155a1926f01edf1a4b3e46b92ef"],["/posts/3e69d26.html","1c76fb97666bda4eadf20bd268f24d88"],["/posts/417de2f1.html","3e352efc58aa21bff06a8400ff2aedb7"],["/posts/458f2701.html","38109fdf808b4702b935b6ff38304bd5"],["/posts/4e6d3c3b.html","197e345d33d6b2df1d9b6ccece08aa86"],["/posts/51361b40.html","ca50cec37ae431860c8dca44631ac33e"],["/posts/5413be0e.html","7fc1cc2c4dcacdef736308b77c959b5a"],["/posts/5596f2.html","45c0db76825a6e726de05647bc563904"],["/posts/5c81b531.html","2ed71f66529ec8c9994ab28d2efe9c6c"],["/posts/629aaf98.html","b608efaba6717997b85f0b9ce57aba2a"],["/posts/65c29e.html","79d764fd5aca533bffa901c6c6e89a33"],["/posts/7105be24.html","0bdacf299e696c346bedec75bc88804f"],["/posts/750cb0cc.html","2d790fb53fa79c49587e3321790eeec9"],["/posts/76897b5c.html","c3b7e7c715b71d9770c187682191dd3d"],["/posts/852e85aa.html","d2b17b44d38004c39cb6f71302966aae"],["/posts/8712b9be.html","90cf5dadff7a2774f7db2eb566a0dc7c"],["/posts/8e1cab8e.html","a74015cbbead3db33b7fd02467af7a10"],["/posts/8ebfad52.html","6426a7aed4c401953efcb8935d7ac42b"],["/posts/8fd19ba2.html","8e3072a4d7f1bb034361d59e6208e34d"],["/posts/92d0de5b.html","79ad3ccaf20aec0cbf70a2c6832e953f"],["/posts/9e3d6f34.html","d3c63039f4c9a9c009febbb33d2e75a7"],["/posts/a25a408.html","bf925fbf335d9ca74073ea618bf37ddc"],["/posts/a6b15897.html","92ebd89ad9ba82ec75051b03c90e96fa"],["/posts/a9867134.html","c9e38f8666f6300c902c7a3f8c4a3420"],["/posts/aa351366.html","f5d229d2a7655a6789502f41ab27bac7"],["/posts/b42f7f50.html","7c64263c32f5eb96d8390a6d28f56658"],["/posts/b492def1.html","fb893f9de4b2f54bae70302bc3419945"],["/posts/cca6755e.html","7bb5becaa0ed26f0e20371d36efc0573"],["/posts/cf1cd846.html","3d9a921c84584a081ac06c4f515731ae"],["/posts/d6a434b9.html","97e2f45a493fb25fd7dad2aafa23edd5"],["/posts/ecaa32e3.html","3884edbd24467f25702457f67d951710"],["/posts/ed8ba887.html","fd2fc65cb2d9830eba45720a0b2c5ed2"],["/posts/edab46fe.html","43f664b74e60d682346249cfdc4b5f1f"],["/posts/edd0080.html","23a35880ff346c84eb6ec20fd4bb0be7"],["/posts/f2f795cc.html","47ac2276d40c33e3c6a605fe2740eef7"],["/posts/f7c947df.html","124487d27aca18af622d77f1892488ba"],["/posts/f7d3a65a.html","8a4c926e07288a9367e2f21a2dae2c6e"],["/posts/f82b2580.html","87a7d32f55c8687b453a0a398bfddfa6"],["/posts/fac97174.html","6a18dcf3a0e81093e0752b4d234ac470"],["/posts/facab7a2.html","923e915e9d040dd1904b8096caefad5b"],["/posts/fdab9a5f.html","4b899358132d1000da361b131dfb1964"],["/posts/fffd9e73.html","d4edf6bd5e0c0ac2270da0542500696b"],["/sw-register.js","168ea8966c6ab230742d0ec8fec4b0ed"],["/tags/Git/index.html","c42ab69a53172d4ba807494bf6a6ce9e"],["/tags/IDEA的基本使用/index.html","52852ef27841b453656710b61678df02"],["/tags/JavaSE/index.html","265f1503db2bb4b9383c497c0cfcc492"],["/tags/Java基础/index.html","0fe35c553f741d21932fb4e88202d0dc"],["/tags/Java课程作业/index.html","eb86bd48ddaa2855655e0fd7c0652139"],["/tags/Maven/index.html","98b62f39ef01d486e06f91e44dbea756"],["/tags/MyBatis/index.html","5cc6f5b742c86a1da268239953770893"],["/tags/Mysql基础/index.html","b5983161b2970090549818145fa80b76"],["/tags/Redis基础/index.html","8d4b37011eec1798766e68e08f20e431"],["/tags/Redis实战/index.html","96c0381346c32ed3d4027f2a99dc400d"],["/tags/SpringBoot/index.html","7b9d5cbc66a5ec209efc1370c43b2c09"],["/tags/SpringBoot项目/index.html","219f5e180521d858ff9b8f7b15f958bf"],["/tags/Spring整合系列/index.html","e73a38639d169df102c8a5162a28843c"],["/tags/index.html","2a4173770943eb9a96f84068777d89fc"],["/tags/redis秒杀业务/index.html","a754f966b15d8d3c80a61d99068fc48e"],["/tags/响应式Web/index.html","adab0f076d5a3082f3734925d38cc322"],["/tags/我在人间凑数的日子/index.html","2d2e859cd2ecb8fba1744b6b6a37e823"],["/tags/操作系统/index.html","b0711e84ad05077f7cb689b1d40b6a31"],["/tags/数据结构作业/index.html","8a310e58148ae154cbbe2297c20e8920"],["/tags/编程和环境配置/index.html","ff3faa04e737e0659488dba82a4d3ed3"]];
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
