/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","238f1a3a7a5db98a4f0c7fb5985b2b89"],["/about/index.html","0bc0a60a45ff37060b9b36b4854bfd33"],["/archives/2023/11/index.html","04a97cf748e83f9a69e24d08096f1fb6"],["/archives/2023/11/page/2/index.html","726e61c9cb77bfad5b9bc53eddf28b2e"],["/archives/2023/11/page/3/index.html","19dcee8fa9d12b93fc776a21c826ae1a"],["/archives/2023/12/index.html","f29bc36874ce9f8d9864a96f7f697d59"],["/archives/2023/index.html","2a994aff442ce81840353bdc3318d07a"],["/archives/2023/page/2/index.html","a21363c22370ce6fa977e6129f3dac20"],["/archives/2023/page/3/index.html","5c987b6ad205e359a4cdad9ef0cccd8b"],["/archives/2024/07/index.html","6ca0ef74800960ee4875860412ac8911"],["/archives/2024/07/page/2/index.html","ff9702e318b11a1fed01f6a931737b33"],["/archives/2024/07/page/3/index.html","0826b0f73bf9e8d4b732680d53f0885f"],["/archives/2024/index.html","406953059ca457b5a6f67f650cd62e0b"],["/archives/2024/page/2/index.html","96e10e75fe950e509796dd7c4abb5bec"],["/archives/2024/page/3/index.html","744c793f6409f0231dbf5888da6a4af6"],["/archives/index.html","3764f83c2f11b6f5d31dd427074373e4"],["/archives/page/2/index.html","c46117199108ce7cbf18dfc02168e623"],["/archives/page/3/index.html","654b45e776fd0b55e4aafcffa9460078"],["/archives/page/4/index.html","7390cdef91c7cc996c5d037f055e0692"],["/archives/page/5/index.html","c7a0bba8bfea577b3641e3447f5bc26c"],["/categories/Java后端/index.html","aabaea5e7db20263c1723427f1658b1e"],["/categories/Java后端/page/2/index.html","d5821c9c35f86566d020d5068a992b85"],["/categories/Java后端/page/3/index.html","efdf457bebfa35f48f55ca60787aedf2"],["/categories/Java后端/page/4/index.html","797689d62454a41cc7a581b92d9fda23"],["/categories/index.html","49c1db00b8e3ee1ef9b63b34073d920c"],["/categories/友人帐/index.html","6f1e158b448166be1c50f28e70201846"],["/categories/思源笔记/index.html","b4da8eb01f2934b50ff92c09b510deda"],["/categories/版本控制/index.html","ad8d856da2e88f2dbb18155d79625aca"],["/categories/考研408/index.html","de41f4a9f4341f661db15e18183b99a1"],["/categories/读书笔记/index.html","3df9275b6d7122b97de3e6686e57d912"],["/categories/软件工程/index.html","d710e869d0be83feba19900074ab8f8e"],["/chat/index.html","e737836b8730ef8d8d0eb59d42a90410"],["/comments/index.html","ff8c1d35875f15362021e8070dcd5f36"],["/css/custom.css","c19b709a7e08f3cc8f976ff4d554a0ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","644207fc7d559b1696e48c37b5bd4539"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1cf149a26fabe0fd58c49e85e395f376"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","255ed4ad65caa6f04dfd0234485e3bbe"],["/page/3/index.html","5f7b2774ad302d3e5b48f2143a491e4c"],["/page/4/index.html","80c24b221e8d7135ccfc4ffb24eb3fc7"],["/page/5/index.html","8f57984f557c2977f9bf0aac5957eae3"],["/posts/18bf100b.html","2a2790252bbd7ad1dfcf8dcb205d8a06"],["/posts/1fcb7e57.html","8fd2d9f394cb8eb11778861e5482439f"],["/posts/254393f0.html","9f39513f4de2b74fe30c619aea1bbc04"],["/posts/28b3fa6.html","cf940cf62c05d7cb49c4c761826412a7"],["/posts/29f0725f.html","eeffde0d1af1a083f6d9b2b09dade390"],["/posts/31c36041.html","9ab49278e0ef36b3947a1e24c0e426ee"],["/posts/3513a7dc.html","2fd25f42ad296999c76c22625ef25c5a"],["/posts/3e69d26.html","35c785d903229bdaf33c33ba4e9ade4d"],["/posts/417de2f1.html","ee2b1042834ba084ec176ef74acc5a1f"],["/posts/442fdc66.html","04f6e0a387d3ea220c98df40e91d0441"],["/posts/458f2701.html","44f751c5c27fb979b1ff991bc3586212"],["/posts/4e6d3c3b.html","dbf72363651fa63e825377fe3b941cec"],["/posts/51361b40.html","c66d54e2df9dcbe68c4d9d7eb00fc175"],["/posts/5413be0e.html","27d3f5bedb8103ee30a273311dd9fab3"],["/posts/5596f2.html","527d20431967792ada53843c0fd055f6"],["/posts/5c81b531.html","e06decb775a9027d529d91dd13a147a4"],["/posts/629aaf98.html","446cffa117d8a6b439fdfecdaab74313"],["/posts/65c29e.html","6c54807cffc0dafa4301c1c0fd9f79ef"],["/posts/7105be24.html","b5375af35d0ca4f87e2e1dbbe6677cbf"],["/posts/750cb0cc.html","a22d32b9668e27d44e9daa548299be65"],["/posts/76897b5c.html","4c13f004687a657d3a57d5ab5a8bae29"],["/posts/852e85aa.html","955e67d0ba831829249f81031f4691d3"],["/posts/8712b9be.html","f71df6a454db5e53b76104c044221eec"],["/posts/8e1cab8e.html","91a8476a87b4eda0716468e4c38b681f"],["/posts/8ebfad52.html","99a678242ab3763c442034a6f7ca464b"],["/posts/8fd19ba2.html","5734883f7e21d255978ef5211ffec4e7"],["/posts/92d0de5b.html","ff6aa608c8f5cb000ca272763b7b54ea"],["/posts/9e3d6f34.html","307e9940fbfa1f53f8f9774831bb83a0"],["/posts/a0708e01.html","658e59f0a226598a00f5b80d7ddb1547"],["/posts/a25a408.html","1e615b0f3e1fe6d09b27442c676db2e7"],["/posts/a6b15897.html","729861ea0a46e10be0af5ce5b1351694"],["/posts/a9867134.html","cda970d73e2cd34314c7d006d4699ca1"],["/posts/aa351366.html","187cbace0603fb2dcc6ce45f9d880a35"],["/posts/b42f7f50.html","c4a5dd0d8ca95a87d3807771924df526"],["/posts/b492def1.html","54a810ff4afe31206eb97af90184cc50"],["/posts/cca6755e.html","5aaffa48428cb7e23b4d86673f0b105f"],["/posts/cf1cd846.html","0799a4def87a1205a1ad2e027ed6f6c7"],["/posts/d6a434b9.html","ca920c6ec1c1e80ed048d3b3e36a991f"],["/posts/ecaa32e3.html","1ab114eb86a5d2cb3f4ef397aad0c2ce"],["/posts/ed8ba887.html","fc10905b404837bbe90374e4d72a5390"],["/posts/edab46fe.html","cccd9a7a054517af487b02035346944e"],["/posts/edd0080.html","8e73d55d9c51a08983d0d3d2e9cde079"],["/posts/f2f795cc.html","9eb34cfdbaacf89ba0f3a5587a256195"],["/posts/f7c947df.html","e4a589dc2ed842477f5ec67610d39d97"],["/posts/f7d3a65a.html","a3f51458a479535079796f2e64fa84b9"],["/posts/f82b2580.html","6319de63612438558f26d10b32996d57"],["/posts/fac97174.html","3a89e4852bd69b77753e2598dd832199"],["/posts/facab7a2.html","c70b99576a82b69cf582937b42d216d1"],["/posts/fdab9a5f.html","a70f1f7e4140840588e60435a8925ad3"],["/posts/fffd9e73.html","71391f956d96caebf9c095627cad7217"],["/sw-register.js","0fb70af2202e7ad6094c7fd8a1a824f8"],["/tags/Git/index.html","533a9c42a962142e2c05ca47aa5e15cb"],["/tags/IDEA的基本使用/index.html","d23d9899bc48edf7cc4ab41a6c5c811b"],["/tags/JavaSE/index.html","e6a460ee2dd6f465c4fe44471c3802be"],["/tags/Java基础/index.html","f47180dc21abbaf19350292beb0dcf76"],["/tags/Java课程作业/index.html","3666f850926859340888f7f310558351"],["/tags/Maven/index.html","6f7ad2cc206f7a9657e6fb91c5537c35"],["/tags/MyBatis/index.html","a6b77f4c6bd40b020ba79742690aa5e9"],["/tags/Mysql基础/index.html","bc8a07347b4a41e16a40329c5013e938"],["/tags/Redis基础/index.html","2bc9c1686de4e9623e1cc6975c6a51fa"],["/tags/Redis实战/index.html","f0266fcaa1e7936b4b8cfb71cc59dabe"],["/tags/SpringBoot/index.html","8e1b01334727f7f8068d0e8d62075a27"],["/tags/SpringBoot项目/index.html","f40ee36e5745d3e13e84626fe97710d9"],["/tags/Spring整合系列/index.html","fc56ecd6a5ad0a75f30801ecfdaf6861"],["/tags/index.html","2ce1af5890eb43e6d4d150a8c98cb0c5"],["/tags/redis秒杀业务/index.html","177bedcbdd61be0f37c53dd0adf864ce"],["/tags/响应式Web/index.html","f916dd5b7ced44bb77a29afda9ca6cca"],["/tags/思源笔记相关CSS/index.html","a5a4088764ad48e33fb2dbab8522d21f"],["/tags/我在人间凑数的日子/index.html","eb96640c3bd6f43327ad7b6c898ebc30"],["/tags/操作系统/index.html","555af8fa122dbd8e9ed64f0af6d5abb8"],["/tags/数据结构作业/index.html","7f7582454eea9864b8eb0ecbfaeadc76"],["/tags/碎碎念/index.html","6dd683948d217af527d4d48c70051bb6"],["/tags/编程和环境配置/index.html","6c139cb4950086215b3478343be6b30f"]];
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
