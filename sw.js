/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3071b39d88f142d1c6ff4db71eb4c61d"],["/about/index.html","cb064ae1242f03c5e348ff998b446bc6"],["/archives/2023/11/index.html","0d7af4966d3b7583a13ba55f90c9e509"],["/archives/2023/11/page/2/index.html","2c69cdf90d9c027e166e333f1f6f6d2e"],["/archives/2023/11/page/3/index.html","1c5568a170de8fd1cb4cad197577af68"],["/archives/2023/12/index.html","3f1f59412b4a1a978ff763ffa9d5ee18"],["/archives/2023/index.html","fed653524b3561df861c00ce02c28d04"],["/archives/2023/page/2/index.html","581d911be49c84b02c56dd36fa414a3f"],["/archives/2023/page/3/index.html","37dde606c9d164dc8f90223f59fe10c0"],["/archives/2024/07/index.html","d420c1f8ca60e68028f4ff135065409f"],["/archives/2024/07/page/2/index.html","1d2839222327259e5b7ac761474d5eec"],["/archives/2024/07/page/3/index.html","b0a18acc30e5612408458325d95a4287"],["/archives/2024/index.html","5163231bbf24d81372f314a0956a94c2"],["/archives/2024/page/2/index.html","a9ae0a6fd7f5c7b70172680a35445b5c"],["/archives/2024/page/3/index.html","bcb8926c667521f49b095f8aa31f7f9b"],["/archives/index.html","37d680dc0700382bb2680473bc02bf7a"],["/archives/page/2/index.html","75ee4d8c2b9fa2e20408d725770c89ab"],["/archives/page/3/index.html","9e79cc8ca731c2229c07ebcc60c5c147"],["/archives/page/4/index.html","7fa16b3311cafb03ed8cd56158ee96ae"],["/archives/page/5/index.html","70674b7c83c85958a4543b64e1c98f2f"],["/archives/page/6/index.html","b1b08a2b669b738836b4181de7e19fa0"],["/categories/Java后端/index.html","79257f2139c9706ab55e1f919e8d4543"],["/categories/Java后端/page/2/index.html","0609664ea808459b6a7dd4f9fe3f8c89"],["/categories/Java后端/page/3/index.html","7d5ade982f87e115689e68035e2a2f70"],["/categories/Java后端/page/4/index.html","d13fb46a09c1c6d8fecbc9d4032dd384"],["/categories/index.html","e002db1dba8d9ba9c8ef55d2fc382cf4"],["/categories/友人帐/index.html","c45ee992345cebacfd1d82f66bf589f9"],["/categories/思源笔记/index.html","ded9caa73d0cbbb0b8f156652064d781"],["/categories/版本控制/index.html","72fd6663746e950ce83c6a1831bc2ea5"],["/categories/考研408/index.html","435f0332111a969a101810715947f195"],["/categories/读书笔记/index.html","593fb5fef43aaea308d0cda76e3da291"],["/categories/软件工程/index.html","136501b2c5222507744ef310dc31ea16"],["/chat/index.html","5ae37f33db0161e19a1156af565ec464"],["/comments/index.html","73a1ded4b8e683847fe0778075048172"],["/css/custom.css","6f173171fbe4ed0cd8993c5b7c6fda88"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","648f15bb1b2f5441585476284e321a9c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","09319754f5328062d8d6cf0eb7dc66ba"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","691588f0d181e733fc4c854c4fc14ff6"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","90e1851b4f6d427ec7c31a51135de207"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1595d5d54445407e0834066f2a9c3c77"],["/page/3/index.html","2d299eaba19c4bacc5ac1dec06dc4a48"],["/page/4/index.html","d18a891511099062a9556eaf0b587254"],["/page/5/index.html","1be412c1ee4ee01ffbcc2f889fc71118"],["/posts/18bf100b.html","d6399f8d0a15a2a08e9f0ad4582c2d68"],["/posts/1fcb7e57.html","2e2d84c39a45502914585f0e58cf23d3"],["/posts/254393f0.html","43b2f622e81a7aa68e3c25a0264237b8"],["/posts/28b3fa6.html","5501f5b95fda5d993ffee0a9a4f058c8"],["/posts/29f0725f.html","9db7b96d758bf232971d833781f7aa0f"],["/posts/31c36041.html","1b4946258fa323ee6311bd6d8f671ae7"],["/posts/3513a7dc.html","4d11e6df7311e00b3b21e4317852ebed"],["/posts/3e69d26.html","8f5945d8a7f647095d56ba383dd25c4e"],["/posts/417de2f1.html","13cde0abfca8d90611334759688c8990"],["/posts/442fdc66.html","434ad73b8dba6a7d7de9cbd5709a2893"],["/posts/458f2701.html","ab50fed917a24bcbd88e3adf7db29621"],["/posts/4e6d3c3b.html","7804e5d8468bd3c9ec8cfda5fd4f6adc"],["/posts/4fc13381.html","cf422e9d3301a80120b9d5033515cd98"],["/posts/51361b40.html","d8bac00ecea5a04a9818b2ee226608e2"],["/posts/5413be0e.html","d110a2c0e09b955452477aa8b9f2b573"],["/posts/5596f2.html","22fc14588731b78c15f8b2f0fcaffed2"],["/posts/5c81b531.html","7e220b482652a8fe7df190ba66daeb4f"],["/posts/629aaf98.html","d27cafffa2d556a0ece06502e304b2a2"],["/posts/65c29e.html","9dd17c936843b51be5bd5e1055f00fcf"],["/posts/7105be24.html","ddaf338ab53a76957880bc518985e5c8"],["/posts/750cb0cc.html","25174b30d58a316e35b2025f1b903802"],["/posts/76897b5c.html","ccae4ef24c0848b4df8b090bb6ebe503"],["/posts/852e85aa.html","18dc64df598a0ab521b022fa3e6bf940"],["/posts/8712b9be.html","729206c805bac5778a41e527c45cfec7"],["/posts/8e1cab8e.html","601ddf2b7f69be14bde2a659031b9d8a"],["/posts/8ebfad52.html","517569241a692c8e742c952a599678d3"],["/posts/8fd19ba2.html","9b07692a79c5b2c30d1293c1dec8ac72"],["/posts/92d0de5b.html","1505a47cda6e8872caa084ad4f09e925"],["/posts/9e3d6f34.html","61ad610655d6da0ac0a000441b6c1d0f"],["/posts/a0708e01.html","fbdb922a7bd2d4b29afaa1ea50ffdc34"],["/posts/a25a408.html","f27107f9df05e162accda4089b71ee0d"],["/posts/a6b15897.html","bf409300f89b0b54c55709c8e2a933d6"],["/posts/a9867134.html","7e9cad8f830445df3be85ac0ba2bdbdc"],["/posts/aa351366.html","e15c69ce44302c0ee372c7f56c6b2036"],["/posts/b42f7f50.html","884584b3f5e33d1fea7c9d6d6ef9fe39"],["/posts/b492def1.html","3b1f32e51952039bfa1e41bc2b83a797"],["/posts/cca6755e.html","3705ad85a752a667a513c2ff3b0f23f1"],["/posts/cf1cd846.html","9157d12d749162382cf8909339001b3b"],["/posts/d6a434b9.html","de286a6aa8d8e537b693cba408d22b21"],["/posts/ecaa32e3.html","59ce2da2fb67f198ae3b1e0b4f7182fc"],["/posts/ed8ba887.html","38510962bd68b58175885e0b7306e6ac"],["/posts/edab46fe.html","583b1804d4c812cf1ecc27928ba1bc61"],["/posts/edd0080.html","6a532c8f3b85469f8e18e4e8ef91f6a4"],["/posts/f2f795cc.html","44497fe7c2b29b6311c14e7eacd0c5b4"],["/posts/f7c947df.html","c40388d2effd76739b6205aeec21392e"],["/posts/f7d3a65a.html","caaacb99bd604ed54ecbe7b45a365718"],["/posts/f82b2580.html","b77cb460d4359244aa079efd8ccedbd5"],["/posts/fac97174.html","83d5ff70b0693a6e0c49bb18f9b382e6"],["/posts/facab7a2.html","971c6441374ddcb16e158487e719045e"],["/posts/fdab9a5f.html","3090516b08608ece270c22c6470ad089"],["/posts/fffd9e73.html","78609e64a99a2c6a12e2f4234940eedf"],["/sw-register.js","32a241d6289a84cceae1d8788fcb6ccd"],["/tags/Git/index.html","35fae8b0dfc0c8150266289466ca0296"],["/tags/IDEA的基本使用/index.html","598a9adf3324d4db5905973a447d145c"],["/tags/JavaSE/index.html","6757178d7b887ae31f6d9709be773d6a"],["/tags/Java基础/index.html","1e51e51fafdf583b13b54f13547daa66"],["/tags/Java课程作业/index.html","9305f99aa1f88c0a0cc3fa511d004187"],["/tags/Maven/index.html","5a1c04819228ac012039d7e9dfe2d9c5"],["/tags/MyBatis/index.html","4e297d9b0cbf4f7848299804c2c59e7f"],["/tags/Mysql基础/index.html","92094cf199a0193e2f316f92e9bc4e1f"],["/tags/Redis基础/index.html","e590c5520b80c31f575069ee5c47f641"],["/tags/Redis实战/index.html","860255e6af4bafd1e4933e257177664a"],["/tags/SpringBoot/index.html","68c99c55e9daa0023addb2a71c7cd51d"],["/tags/SpringBoot项目/index.html","18703422b8add320d837145af1b699db"],["/tags/Spring整合系列/index.html","309c1e9b32b0da15cd595de34307456e"],["/tags/index.html","f622e511015c9bf31bb893d6d139dc95"],["/tags/redis秒杀业务/index.html","f3a946db7a83e58d106ef44b301dca65"],["/tags/响应式Web/index.html","cd00b898ff299464be01722883d40b1a"],["/tags/思源笔记相关CSS/index.html","e67aa79be45586ab1ef7fe188860e0db"],["/tags/我在人间凑数的日子/index.html","74d7f586b5ccdc729bc2b5b2eb56592d"],["/tags/报错杂谈/index.html","d976927f8d796eee9a48683b2f43e896"],["/tags/操作系统/index.html","0358f3025296cc4d4bd79a2cfb46d48a"],["/tags/数据结构作业/index.html","65e0a1f7f8102491d8e4b73fc52573be"],["/tags/碎碎念/index.html","e14cd69a6b5984307a6e5a2f6963c139"],["/tags/编程和环境配置/index.html","149a2509b395b5f263a935758ef64e27"]];
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
