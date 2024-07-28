/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","037375dd8928dbbd3c948c3d59fe9416"],["/about/index.html","4dddaeecea720267be682ab4436c3f34"],["/archives/2023/11/index.html","b7dc1c6dde200961f6680a191b2cb070"],["/archives/2023/11/page/2/index.html","9cfb0187b2d0ba8ebcf1283f9ee82cfa"],["/archives/2023/11/page/3/index.html","d5ffd367da24617b902aaee83ef26fce"],["/archives/2023/12/index.html","7b7c6d72fce6131ecd34b263d9dae95c"],["/archives/2023/index.html","ab63709e8d660d8adaf58e476c5b7662"],["/archives/2023/page/2/index.html","bc1e55b4efa3c4c02fa039ac3868f8e0"],["/archives/2023/page/3/index.html","2d14d0cb0997534cc0a48c6346b762f3"],["/archives/2024/07/index.html","09a1fa5139ca54f552784c754a928235"],["/archives/2024/07/page/2/index.html","c8449020f96008a11e609d8234e168f2"],["/archives/2024/index.html","eb9f4d270303c6ab86406b17b6777e3f"],["/archives/2024/page/2/index.html","3da9d708a5ae466e286af83cd48e59e3"],["/archives/index.html","f4f724407da34d265f612ccc4ac43f5f"],["/archives/page/2/index.html","609279be41e022694fe4205c68b5be18"],["/archives/page/3/index.html","036d534d399e54c7ec825d98a873be29"],["/archives/page/4/index.html","b1cc087aeba2cbfa4cf20c8a5828e734"],["/archives/page/5/index.html","7d5c8a4532c742996f5bb3555c61b0c1"],["/categories/Java后端/index.html","bec9acc3892435e1eeb10df032692beb"],["/categories/Java后端/page/2/index.html","67fb091364626e176081fded0c5cf760"],["/categories/Java后端/page/3/index.html","5a644f96f93c1ac0a7a9d29491f71530"],["/categories/Java后端/page/4/index.html","cf941c62e6f5e35f49594c7f1eaa10bd"],["/categories/index.html","f97bba73f07f3d278d73541153968384"],["/categories/友人帐/index.html","a222f18a9b12621fb335f736b0ff130e"],["/categories/版本控制/index.html","ce98b800d0340203a5d96ba50c56120d"],["/categories/考研408/index.html","b55983ef81770e59a58e471e3a339e96"],["/categories/读书笔记/index.html","140053e9cea6ea705f57f3b8ae24b300"],["/categories/软件工程/index.html","100169092fd62f6cd5cd85807708979e"],["/chat/index.html","06c12b0e96c23b264ed0854011edaba1"],["/comments/index.html","ea0bb81984b67b34c8f03028e74b8f2f"],["/css/custom.css","03dfd183766909e4e62c826f3424b2e0"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","079c73b57be6f95031d486cc63685bd0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","3f0a7b1ad11ee93d58016607fad42cea"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","a02277c7836c99276f4311ef18af13dd"],["/page/3/index.html","90006ac92523b44cb57cc2c6737f9cec"],["/page/4/index.html","5d9d83711e0205669dec4429353eed2b"],["/posts/18bf100b.html","72c4d014b640ff1dd691361236d371f1"],["/posts/1fcb7e57.html","52a0da5850f29875588bab21fa9e84fd"],["/posts/254393f0.html","4241a293bbf6daf3d50982f854d8f4d7"],["/posts/28b3fa6.html","4706dcd520ba481c398f5bc79285ef93"],["/posts/29f0725f.html","b7cf1f507788cb88f4536c0626d7dd0d"],["/posts/31c36041.html","84e971e9c7e16576c8d8b36bd77c2267"],["/posts/3513a7dc.html","bf29451384d456b64a518890ff9d9e31"],["/posts/3e69d26.html","94fb033d8afe8c962335e2bbf08383c9"],["/posts/417de2f1.html","eb3ecb4bf5e8bf22aa22ec50207bc29c"],["/posts/458f2701.html","354127589f35c73321fbd9e3289c7f3e"],["/posts/4e6d3c3b.html","ab98fc94acf313bd9694ae101347d9d0"],["/posts/51361b40.html","7093470a0ce3f5b2343e9193bcedae24"],["/posts/5413be0e.html","4078c498c248c85983b554d89fda765d"],["/posts/5596f2.html","9216d0f715069b8d64d3248d09fb5174"],["/posts/5c81b531.html","93b40fc96c31eb1ba6e541e02e02bda0"],["/posts/629aaf98.html","2859d996f53ba5b7a6c5b570149700ab"],["/posts/65c29e.html","b5e9760bd052fbc39d5b3fee89dbb435"],["/posts/7105be24.html","0cbbc454b9fd7d66af125094be1c4db6"],["/posts/750cb0cc.html","a6f7ba35cfef8a8a94f45b49f3d6ef36"],["/posts/76897b5c.html","72d589c192eb40153780be8da5b4673c"],["/posts/852e85aa.html","843742e31c29ee783c848ea246174e89"],["/posts/8712b9be.html","1e536b95a5251c4e2d2c47108b11c900"],["/posts/8e1cab8e.html","95fc3c209d886d0b2761c21525a6f9b7"],["/posts/8ebfad52.html","bf4f3b591f4fee7b5a607c45a100f802"],["/posts/8fd19ba2.html","b95131ad770343c9084e79705f36b59a"],["/posts/92d0de5b.html","23213287afcf8a07e149f2f05caf9701"],["/posts/9e3d6f34.html","e4ad2ad8625402c9dee43681b4b070f7"],["/posts/a25a408.html","41503395984bd0fa412b2cf2f80a9aba"],["/posts/a6b15897.html","25b64a92f366632efed9fa869d114430"],["/posts/a9867134.html","d4e8d21f0929d0e4c491e55306ddd013"],["/posts/aa351366.html","21300b341097340dbac160e10d24ac33"],["/posts/b42f7f50.html","1c7554421665ab312b5804fa25f6f9d6"],["/posts/b492def1.html","7abdc961e2bb87e179d1553ddfb3f413"],["/posts/cca6755e.html","bed71077c4ac6bdec9bc84dca925f368"],["/posts/cf1cd846.html","db94689d95604eb67872eb8c41096b96"],["/posts/d6a434b9.html","534169d1b58e3d0c7dd9c961e691b655"],["/posts/ecaa32e3.html","2de1756c63b3a5971dff98aec5c14533"],["/posts/ed8ba887.html","5421d59ba30cffe79837a53cc303f51f"],["/posts/edab46fe.html","9d1890aa2dbc8d17ab16073de37c4e55"],["/posts/edd0080.html","77677320245e17a851d05cf645322876"],["/posts/f2f795cc.html","847457a3dcd84c03be95b6712606eaa6"],["/posts/f7c947df.html","f7fb81693d38e07cf6552785741daafc"],["/posts/f7d3a65a.html","061456ad6d5da64e92e5d2ce5e92a769"],["/posts/f82b2580.html","704ff435e15f7531bd96a0f6d9e46bfc"],["/posts/fac97174.html","afa25510b533e929d5005a44a534c763"],["/posts/facab7a2.html","7220c6b63ccc13d8ea63ef40005493a3"],["/posts/fdab9a5f.html","b08b85b6d5ba9028fa0ace7d692b78a9"],["/posts/fffd9e73.html","9ed8102801a150a7143c5c5a5508be50"],["/sw-register.js","dd1b165c6fefd7c237ca3be356bb1a5b"],["/tags/Git/index.html","bff509f4082e71c7c02e6c964515ae1f"],["/tags/IDEA的基本使用/index.html","79a9785a467fb8c3d93d993fcc2f4863"],["/tags/JavaSE/index.html","97c7aa858fe9edc189d36a4c833e966a"],["/tags/Java基础/index.html","00bb0ff8dc98b9683fb459b6da20022f"],["/tags/Java课程作业/index.html","8c3643983c6835b2c51e2a97eb776f6a"],["/tags/Maven/index.html","77c95f6c8421bfd0a5dd2cdbe8b0dc4c"],["/tags/MyBatis/index.html","cbd2c44aa5c85d3d660ed4182cc35373"],["/tags/Mysql基础/index.html","5f383a88dadb165be50449bcca8fbe62"],["/tags/Redis基础/index.html","b2d882230829576153acc1ddab31e3fe"],["/tags/Redis实战/index.html","cfdd98836b33ee19cd350b807d17a678"],["/tags/SpringBoot/index.html","44e000fb2a03e0d418d5947d9ad3c27d"],["/tags/SpringBoot项目/index.html","f4cf8400e76853b55383740c1d8a67d4"],["/tags/Spring整合系列/index.html","ef6676750fe8d86458ddea1445113ad1"],["/tags/index.html","c6e405508a2a99396e8b028784d08904"],["/tags/redis秒杀业务/index.html","fa374faec65c68e4d973f146aa00c266"],["/tags/响应式Web/index.html","ef2fd3a6ea90cb98a361e45226a317d3"],["/tags/我在人间凑数的日子/index.html","c708ba75acbd975960a06ea6bf10a256"],["/tags/操作系统/index.html","181d3cdb63a00031794bb75d73dfc8c1"],["/tags/数据结构作业/index.html","0d0ac0001f726889852cfd3a89256907"],["/tags/编程和环境配置/index.html","fa420f732d3c330f2fd083a23d352fb6"]];
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
