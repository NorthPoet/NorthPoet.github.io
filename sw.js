/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6a99caf7e5d5740230df24708a2791d2"],["/about/index.html","c7403e3cc1d5beadef999f165fb9c8c6"],["/archives/2023/11/index.html","4bfad66770400e035a6e311c9c70dd4a"],["/archives/2023/11/page/2/index.html","f828a904140bfdf76f6d1fcbe77f0034"],["/archives/2023/11/page/3/index.html","43dbc1d12961ff5ced956c7535d64272"],["/archives/2023/12/index.html","2841bb436992af6cbcda9175675978ea"],["/archives/2023/index.html","3535486e0b6dbcc62ab5e38bb9307270"],["/archives/2023/page/2/index.html","8a18958ba781edebb4c0c43e8befd51a"],["/archives/2023/page/3/index.html","ee8c7d6287a08b9c291149533276de75"],["/archives/2024/07/index.html","4efc12fe4fbd166d85ba7a84b0104a8a"],["/archives/2024/07/page/2/index.html","9cb613ae04cb6e8645e6dafd8c3b529c"],["/archives/2024/07/page/3/index.html","67287e7cf615f34a042f29cf622a265c"],["/archives/2024/index.html","94c53b2eca84de7a918fbbcfceb6c9c1"],["/archives/2024/page/2/index.html","828cfb6ff6093d79ed001bbc54277777"],["/archives/2024/page/3/index.html","aef280bf9edc518ef0ab913e9bfbb366"],["/archives/index.html","a40014482719b483490906506365e92c"],["/archives/page/2/index.html","fad298242b6aafd844aad11ec09b5d6f"],["/archives/page/3/index.html","486253638b1356cf3a3fdb239f1c17cf"],["/archives/page/4/index.html","4eaa721ef69c0a8c8fe1cbf269939a01"],["/archives/page/5/index.html","ce3f5866e05c5e5561606cde144d89ce"],["/archives/page/6/index.html","7b06bec68d9b7126eb4f0dfd6d857e4d"],["/categories/Java后端/index.html","c4c795d676039848a68e574ad2bca1ea"],["/categories/Java后端/page/2/index.html","4135d43926a69290e48f55edd025c5ff"],["/categories/Java后端/page/3/index.html","830f84daf0e56fb12f28fda95ef3cbf2"],["/categories/Java后端/page/4/index.html","f09dc57e9575cbd4dd4b872fa7e6f899"],["/categories/index.html","db76a9c12aceba0dd479b716320b09b7"],["/categories/友人帐/index.html","b416365e74dd3b0ffa5787b664a1330c"],["/categories/思源笔记/index.html","81e07463b9d6a7069c4b76a11a2fc3dc"],["/categories/版本控制/index.html","7ca3f9b0d627450969676c460cd79835"],["/categories/考研408/index.html","41dc4340fa24b1eefaf0936db1938c01"],["/categories/读书笔记/index.html","021168b4203f5dcbe25f598157ce1c5d"],["/categories/软件工程/index.html","90031266bdc624ae0ff37a603baedb8f"],["/chat/index.html","eb137a1fe25e7cd811aafd8568ac2c96"],["/comments/index.html","84735a8cefef4ac5eafa7b6510f7633a"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","b6e173b4231538dd3e437b4957032ba2"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","395695bf40dab638408f7d0ab20a92a7"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3cb6ef6042421382f65d97ef505f09c2"],["/page/3/index.html","a6b86f2c19e67a12feb0711dec821e3d"],["/page/4/index.html","403c755f8932356bc703618e9ef4dc95"],["/page/5/index.html","c23fcc05d7266b789813329dc7aa7093"],["/posts/18bf100b.html","f2cdf85a65aa98fac0421fd0db7cf359"],["/posts/1fcb7e57.html","29fe9cf98beeffdb59e551ea7845915d"],["/posts/254393f0.html","a73e026e34c2c7c28c389e585980859a"],["/posts/28b3fa6.html","9bb5e0b9ff0d7dc5ac8d4147e36b89d8"],["/posts/29f0725f.html","b94dfbd3562fd9b9fa784e746a8a4df3"],["/posts/31c36041.html","1570629d7c7a9a1885d3372ad7235ee0"],["/posts/3513a7dc.html","70e890b9b1f4dff45b22a6ddf5a7651b"],["/posts/3e69d26.html","17effa0df271e51dbe4852e51da47b66"],["/posts/417de2f1.html","781c3ae9e2ce7238785e8692f083717b"],["/posts/442fdc66.html","5d7b5917e384b1d303aef9b1b955dccc"],["/posts/458f2701.html","5c84e6f1c8227ddb4d70fc8a52d671aa"],["/posts/4e6d3c3b.html","a283a09d39843abf484a15ce9432e094"],["/posts/4fc13381.html","caf25e8cdc53f1a0a8730150d3f64d78"],["/posts/51361b40.html","6467d23e090834591a3ce08a82dd5b44"],["/posts/5413be0e.html","0ca160d68df177e4434e12288038f625"],["/posts/5596f2.html","be9e3ff9a9ee0bba20811b5254841d2b"],["/posts/5c81b531.html","5ac44e43528b043d284967d8e9990c45"],["/posts/629aaf98.html","32a6a7e353cb2ceb2a4683808eb7ac0d"],["/posts/65c29e.html","7f7a873ca1a214c80a4e5d156c56ed3c"],["/posts/7105be24.html","63b0638f285e5af0f691f0fb1a774cfa"],["/posts/750cb0cc.html","a30d5f408fd1e3ce269e7efa69c152be"],["/posts/76897b5c.html","a216ffc28ad0a44bfe4f7c0edfb607f5"],["/posts/852e85aa.html","768c3edbfb736fc999cae012213b90c4"],["/posts/8712b9be.html","dcfceef2beb4d0935129067fdb069f6f"],["/posts/8e1cab8e.html","7946b1ecbfb5fd314fa864bf9c6c1eb1"],["/posts/8ebfad52.html","95c3090e07f2c9f5c064d22c95dae955"],["/posts/8fd19ba2.html","9a57068d0ca28f20fff1d12bf9c8bf12"],["/posts/92d0de5b.html","39f78f8013ab8cdd9fd9375717e93a0e"],["/posts/9e3d6f34.html","8d8d47fd6d2eedfab814ac9fbd0c52f4"],["/posts/a0708e01.html","68cbe054fd67f369a64147a4d3a3ec50"],["/posts/a25a408.html","c87e1880534538d601df411773122305"],["/posts/a6b15897.html","5907d7315c1b38878062d09dd65b6348"],["/posts/a9867134.html","bfe5356f2b28a1a930612e7cbdc6999a"],["/posts/aa351366.html","ed60afaa7b3fac12f677b7352c21b311"],["/posts/b42f7f50.html","29e8e613b96f98998af5119e84f862e4"],["/posts/b492def1.html","1b4e6323bd72ee7d0b9bcd03bde2fb6f"],["/posts/cca6755e.html","7154b0e1d7bb2ef553febe86d49bc0d6"],["/posts/cf1cd846.html","2a5787578df878cc6f890a6f8c8d0386"],["/posts/d6a434b9.html","fde5a77bde6a13b1cfcb4b6a64f13fb4"],["/posts/ecaa32e3.html","d2d8840dd4be28eb51dc4c00b6ac1490"],["/posts/ed8ba887.html","ab2cb921cc42fd9e06c9c135247c09fc"],["/posts/edab46fe.html","40be37d384c36ee78d35f9c4d6cfc952"],["/posts/edd0080.html","fbb4d1b586b3e0ba4240242b3d3c4676"],["/posts/f2f795cc.html","e8e11d32ee51313a947004e24e82fd28"],["/posts/f7c947df.html","374d2ca16a057e6638ae198c7561d064"],["/posts/f7d3a65a.html","53d26b253179145aa7a59f8c133d62c5"],["/posts/f82b2580.html","8dba5968e09fa2d1e1ec0f19df55477c"],["/posts/fac97174.html","88cf61e50e25647620bd399fd02e7f9c"],["/posts/facab7a2.html","65e6526c02ae1e76d40c304cdfe4d8b6"],["/posts/fdab9a5f.html","79f91cec3e60d9bd27ca4185726f304e"],["/posts/fffd9e73.html","3c53ee9867e1319c46bd3252398f4e62"],["/sw-register.js","e7f214f296c64b020e4f2f377be38a60"],["/tags/Git/index.html","513ffe01ae8a36feaa2957626e5359ab"],["/tags/IDEA的基本使用/index.html","c9dca7b750129fcf2afab1cfdd123d6b"],["/tags/JavaSE/index.html","4cf63c6b1c906c2c8c98240f3483137a"],["/tags/Java基础/index.html","7c9e41d75785453568d8d272ddd77dba"],["/tags/Java课程作业/index.html","97e7cbe053093046a3ccd66d2e0636c9"],["/tags/Maven/index.html","b386ad37f64e177b753ad2dbdd03e101"],["/tags/MyBatis/index.html","348b20673aeef4904151ba2b41c1acb3"],["/tags/Mysql基础/index.html","6f03712a88d5eb546053ba2692bcaeaa"],["/tags/Redis基础/index.html","3c4516b73f66eabf17ab62875976219a"],["/tags/Redis实战/index.html","e147da9962e4ae638952b610f2ff04d1"],["/tags/SpringBoot/index.html","72e6e386654d0948e90cea024a2c017c"],["/tags/SpringBoot项目/index.html","0a4c6bf2a2de8e211879381e2f26d6c1"],["/tags/Spring整合系列/index.html","f7ce714c2f228a256606161152b12e09"],["/tags/index.html","1ee6db28be4d49359584ed64c16f35ba"],["/tags/redis秒杀业务/index.html","6110c8d3778d583ff725a213f8181c42"],["/tags/响应式Web/index.html","62775342019ceae73e2ef83d270f06db"],["/tags/思源笔记相关CSS/index.html","5b12df4fdd6487c50d39f4dc280690ec"],["/tags/我在人间凑数的日子/index.html","5d2e878cd4b71256f8921d6e82af5418"],["/tags/报错杂谈/index.html","a8c7b30a6594cb495c380d7bfb87afe8"],["/tags/操作系统/index.html","1e7111bb72402c077c49546d4053c93d"],["/tags/数据结构作业/index.html","65d534b96ecb6ca9eda46ca8715e047a"],["/tags/碎碎念/index.html","4ffdc4fe326f3d147e08a21d2aeb67d2"],["/tags/编程和环境配置/index.html","7e127d9c78f62abe9b7fd98896ecc210"]];
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
