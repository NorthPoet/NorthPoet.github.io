/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9d22d61351bf6c296dacad9d06517de9"],["/about/index.html","9a6991a40291b2b9be78d51c9bdb0284"],["/archives/2023/11/index.html","0514904a944f471cb1c92aeb7bb9bea9"],["/archives/2023/11/page/2/index.html","b08aca2077d15ad1d2c57342b0a69ab5"],["/archives/2023/11/page/3/index.html","b5e120581abd966f27a336fe9c17d9fe"],["/archives/2023/12/index.html","650828ef6284af75d30ad1fec2cb0468"],["/archives/2023/index.html","bcd847e8b9dc27c1100f25862ffff48d"],["/archives/2023/page/2/index.html","79b05126c1e30ebe6bef98fd3188b418"],["/archives/2023/page/3/index.html","0d45dcfe7ac15e109dc179ec73441072"],["/archives/2024/07/index.html","1c8196936a0eab2568a0b4b57fb31864"],["/archives/2024/07/page/2/index.html","925d93fc4d3645ca9dd20656afd705ca"],["/archives/2024/07/page/3/index.html","d11718007100cdbfcabf99181501540e"],["/archives/2024/index.html","04f14d9ca374963ab78275af5a4facde"],["/archives/2024/page/2/index.html","34aa6714405fcc479e3bc90a5bc68f73"],["/archives/2024/page/3/index.html","848c3ca2b4ac98d0215c8df4f9c762e8"],["/archives/index.html","4c82824213ac83a2264a25b5681965e7"],["/archives/page/2/index.html","84559baab19fd9105e360bc2f062453e"],["/archives/page/3/index.html","6417083e50c5d73a8c41079abcb5c7ef"],["/archives/page/4/index.html","9149e4c75c89638e6c42d9e40204c0c3"],["/archives/page/5/index.html","6d1ea39f8aaf3e5da1f1e42bbea5ef2f"],["/categories/Java后端/index.html","a9ae09bbf46597a05deccc91ac5f8d23"],["/categories/Java后端/page/2/index.html","4c83328cf3076194aa805648cb425e69"],["/categories/Java后端/page/3/index.html","ea996cd6d4b425daf34195839cb4a63f"],["/categories/Java后端/page/4/index.html","b2a3b6c783bf35477d57020d60f88b82"],["/categories/index.html","ef4953fc8b1800ba66a9521f28b548c3"],["/categories/友人帐/index.html","5a1e4758ed6c6bdb7917f1f34f5274fb"],["/categories/思源笔记/index.html","40f74f98e219f455cef10b06125fab7b"],["/categories/版本控制/index.html","4b70827dc2e115efa7aaf01a8544e0e8"],["/categories/考研408/index.html","a6ebb7b5942d7fadfd4c9cdd17877307"],["/categories/读书笔记/index.html","f201382d4b6af45df342309601e9441e"],["/categories/软件工程/index.html","49d406542192e4a84651f7d4eba37c73"],["/chat/index.html","d00cf99c1840b1d5c613f660f5fa2ec7"],["/comments/index.html","22db3d5dcb6b27772cc3a11ce5326556"],["/css/custom.css","afcb4a70cffd65403b365cc4e290901d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","01acdcf443bebaf5756e1204c5598a03"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","18930a423bf4e775431beba37abe5de2"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ad9de2e549e434f94b6a2c89405a1e82"],["/page/3/index.html","5f76abcd200eb67972d82273580b697d"],["/page/4/index.html","6bdab3a503ab081a12d7b9e88ede4440"],["/page/5/index.html","225fc691c39c8993dd7802c76bce15e5"],["/posts/18bf100b.html","af1f4540fbe660ea9c4879676ef7ef02"],["/posts/1fcb7e57.html","24406fe5bff248b89124fbf00bba7370"],["/posts/254393f0.html","691653db3900f2dd377d88e2c5be3f6f"],["/posts/28b3fa6.html","862faf87674f29c7faa216167dfb85f9"],["/posts/29f0725f.html","6fd691850999a9c501f216b6c48706df"],["/posts/31c36041.html","d4361d8834e8c2c40e6e827c0781cef1"],["/posts/3513a7dc.html","9aedbe60fb4bfc627894c04ab3031489"],["/posts/3e69d26.html","dd6eaee178465a41e7a94036f9997e60"],["/posts/417de2f1.html","72196e07e9b77280b8475d4ce14ce67d"],["/posts/442fdc66.html","97996f3ce04808652a860fde66807777"],["/posts/458f2701.html","202696c6f3e0ed366c829afee55a2224"],["/posts/4e6d3c3b.html","57f14101d96dce6f6ced36885642a179"],["/posts/51361b40.html","d1e11897566acf80852b3b4e073cb1ee"],["/posts/5413be0e.html","0dd022148eebbcd7c005015410379560"],["/posts/5596f2.html","d906e9dda108f925b2ad2af5f9720416"],["/posts/5c81b531.html","6737c7050f31560f2fa9e233139a63a7"],["/posts/629aaf98.html","6081c5df16cdc1433db5832c20e0f9ce"],["/posts/65c29e.html","4d50671f735ddda11a5e868807f8e6a5"],["/posts/7105be24.html","92687437e3b83ca8772279f7677dbcf1"],["/posts/750cb0cc.html","e205f4c0966be913d8a04b321a94703a"],["/posts/76897b5c.html","ae3b1ddf40fbe5403b99ad8013599d6f"],["/posts/852e85aa.html","adf6e9c80b61e3d7c0f75be28857e9cb"],["/posts/8712b9be.html","adb8287f8a5d1f38e348def2b8a66a3b"],["/posts/8e1cab8e.html","dd292c7b44474203704c132ad40e475d"],["/posts/8ebfad52.html","79185638055ee3dde4d9f2398b4f0738"],["/posts/8fd19ba2.html","11a6992442df675a2bf6a5f2adf2e2b1"],["/posts/92d0de5b.html","361c78c0d45e6300b1b8f34d1a6af73e"],["/posts/9e3d6f34.html","da7f4e9d59378ec97e33bda53ed7c242"],["/posts/a0708e01.html","21acf62185cf3ad66f5aa820b5529b47"],["/posts/a25a408.html","2893e1fd79e9bd7ff531573e85b7d5a8"],["/posts/a6b15897.html","95d9ff094321b6511a600535ba082054"],["/posts/a9867134.html","40a1f1bc210b4b743887e8e34a3012df"],["/posts/aa351366.html","df431774cb317d50e40c9fe44b705cf9"],["/posts/b42f7f50.html","64ca8368d87cf1b720e2890852bb9135"],["/posts/b492def1.html","9bf2d95fa4af607b7cb5280606c3f893"],["/posts/cca6755e.html","e16bcfb47a86743ef98301bae80a9324"],["/posts/cf1cd846.html","fb6ed5e4625677291e730b3a2bfd6e93"],["/posts/d6a434b9.html","e2d02dbd5c23ac4e80d4bfe4c30a47bf"],["/posts/ecaa32e3.html","76bce8b626a4ecbd9a441fdd59913ea9"],["/posts/ed8ba887.html","6872606b94734d74b273a9dd1ea2ec7a"],["/posts/edab46fe.html","cba64f8a75a52eb9baed092036c13740"],["/posts/edd0080.html","775079afba55429dc802f9887281d9bd"],["/posts/f2f795cc.html","99c39da1479f76161970dabf3426b8a2"],["/posts/f7c947df.html","22958fa5e44d5c278999183e2116190a"],["/posts/f7d3a65a.html","7ebb6c9eb413a25d0cb121ee5a98a2e7"],["/posts/f82b2580.html","349b9b24d34f7f412b0715e7e0dfbad0"],["/posts/fac97174.html","fa6647e5ba329e0157335333fa8e0cc3"],["/posts/facab7a2.html","f5c683cbd1fd3aaaa29e68bd35f8fdf0"],["/posts/fdab9a5f.html","3da0e45c0f07988888914a9d2df8af2c"],["/posts/fffd9e73.html","80064ac84408c268b27320b4983f6c65"],["/sw-register.js","e7dc557c6be02e9e11f68bc3d340ac5b"],["/tags/Git/index.html","da8a0c7004f8d08920255cd4d5cf4001"],["/tags/IDEA的基本使用/index.html","b1865bbbb0477a1e454235c1656ce4e6"],["/tags/JavaSE/index.html","e64108f6e140720c7560e1e085d353e9"],["/tags/Java基础/index.html","8520ca44adeca457c4977dec3a6d2bf1"],["/tags/Java课程作业/index.html","45228c67d9a17196ae2abcde3d7a3ab8"],["/tags/Maven/index.html","5719a1ccddb59f136f8e2bbed3754931"],["/tags/MyBatis/index.html","d5aa053e594e3f04c740ae9f2de5b0f5"],["/tags/Mysql基础/index.html","72fd0e28efe96752802be45c9e3a600c"],["/tags/Redis基础/index.html","88dd919ab1cb7bc4552684787e8327b4"],["/tags/Redis实战/index.html","15cd59286a494e247c65530c74454a7f"],["/tags/SpringBoot/index.html","03a5979d9f7a9ea810ad1d649013b496"],["/tags/SpringBoot项目/index.html","ea18d706122577af6d2be26ab7463eab"],["/tags/Spring整合系列/index.html","fd45c49df25a8c496c9c7bf12fc2ca4a"],["/tags/index.html","66f955906782620c4f8b9842377dabc6"],["/tags/redis秒杀业务/index.html","112c9bd07aa8bd491382444b8dc97706"],["/tags/响应式Web/index.html","7f8b2f03f097c49c04765780cb900fb9"],["/tags/思源笔记相关CSS/index.html","c426eedd2b6f3639131f87736068355f"],["/tags/我在人间凑数的日子/index.html","c5d2253dc03d347f05b66d0e008fdbde"],["/tags/操作系统/index.html","7150100ac9ff3e6491f7c95164572bff"],["/tags/数据结构作业/index.html","8065e1dd2befa43efbcedd01a0962e80"],["/tags/碎碎念/index.html","ec20d6516642c6b432b89bbd822f1abe"],["/tags/编程和环境配置/index.html","67a7f6d3d4831fac648425d4c5a62be8"]];
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
