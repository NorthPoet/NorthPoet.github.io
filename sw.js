/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4be5fbbd80ba27f01b95c6b12ebd8bee"],["/about/index.html","e9e7fee69ab293d800e70d01399c3529"],["/archives/2023/11/index.html","1b0ef66f640e84e52499f9edb5589204"],["/archives/2023/11/page/2/index.html","3ac180cd0ff95afe96a3bfe0e167abc5"],["/archives/2023/11/page/3/index.html","e0dbac9ebfc407aa7568612e3af45b9d"],["/archives/2023/12/index.html","a48ace6c5841b7afd1d072327f48c6be"],["/archives/2023/index.html","7367b5078297e89e684b1b14ae6f3c67"],["/archives/2023/page/2/index.html","47b9fc282942b0a5604d977e1d6d7029"],["/archives/2023/page/3/index.html","133fb6addf29d47663a77f50a8cc3878"],["/archives/2024/07/index.html","3ab0609788b63ebbf3142ab72551e0cf"],["/archives/2024/07/page/2/index.html","659a4b1bc414ffbe51e8f6404de5b409"],["/archives/2024/index.html","79168bc6c5d967a2a52743fdbae4f0d8"],["/archives/2024/page/2/index.html","807bbc9e5f768a6e1c92ba909a04e97b"],["/archives/index.html","0aab0e8d20da2b26c3627d6d9bb17bf9"],["/archives/page/2/index.html","e32b950ca63f5e09fb7ce3222c781f6b"],["/archives/page/3/index.html","c4c5cef6044ea83f7dc1d47b913cb2a8"],["/archives/page/4/index.html","ebd09e40eb4e2507b219b45d8933bb73"],["/archives/page/5/index.html","7c13f47a2080c26e7f320c9b00289eb4"],["/categories/Java后端/index.html","4e0188f825b36e783788bdc5038e0040"],["/categories/Java后端/page/2/index.html","7fa3d99fec065a24e7586e4ff36ceac7"],["/categories/Java后端/page/3/index.html","69307e417fe491781b4eb06f94c392c6"],["/categories/Java后端/page/4/index.html","4e443f6cdb4b3f5ee7dc5f2d2a96ffaf"],["/categories/index.html","81ca303ec7b8039db9942d7520d9f054"],["/categories/友人帐/index.html","a280daa249917be6870281620326490f"],["/categories/版本控制/index.html","3bc8201e4db94c5e72409f58ab65d47b"],["/categories/考研408/index.html","5bb973f024edab3f4192553bd3a33a89"],["/categories/读书笔记/index.html","93876fa111d164ecd2510ac42375d3b3"],["/categories/软件工程/index.html","75d6d7739a30403556ed365605e31b0a"],["/chat/index.html","344e0415c7cb5d83211371cd32160421"],["/comments/index.html","691176bfc68080af39f13e4005064e82"],["/css/custom.css","6f70f12823f0ca919e4311cc0d29bdcc"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","030c43f2d482ddc7c38dd93793424a8e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","4bf587e90c373bff36acbf7b2fb491f3"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3a80749fdf1a0d766fb0692b6ef76f60"],["/page/3/index.html","a0ab8137d3582d73cff40c6122018e45"],["/page/4/index.html","7caef6b53d389666a969800b1aa2c8d5"],["/posts/18bf100b.html","b63328d9631fc38a50d6e7b68a78fbc9"],["/posts/1fcb7e57.html","00590ba08e72eb71bc160568fb364ec2"],["/posts/254393f0.html","d729371aee157636bd7cfb7838fee8be"],["/posts/28b3fa6.html","48caac42f1c243c113b6b4bfc3cc05d9"],["/posts/29f0725f.html","84c14a031269a4ccb000f8823536110a"],["/posts/31c36041.html","4d68fecd2ca1489cca43e6fb037b8481"],["/posts/3513a7dc.html","9855941acf64b291263221daaa238c73"],["/posts/3e69d26.html","e4d92cc0423900fdf1be5dc07213021a"],["/posts/417de2f1.html","2e693f0290b6c82cfcc91f96f63c74dc"],["/posts/458f2701.html","88b8fe429242fd9518a2e14da5247dce"],["/posts/4e6d3c3b.html","54afce55809ef27927565d841d549024"],["/posts/51361b40.html","df017d711c1bc75991bf0190b18e404e"],["/posts/5413be0e.html","1f455130ce83f1c788b82ad3c5c34069"],["/posts/5596f2.html","d5c0d126fbd4a6c4717128cc837285c9"],["/posts/5c81b531.html","e941b186575f66d504e2a21e2c0e9c07"],["/posts/629aaf98.html","edfbddbf56b0927d5c0586f580b10028"],["/posts/65c29e.html","280ccbfd5c6d7b409e5c6f69d817fe83"],["/posts/7105be24.html","e8ec0af39f1ac5086ceaf3c3a476e20a"],["/posts/750cb0cc.html","cd95511541d7662a8effc4a8b7cfba7a"],["/posts/76897b5c.html","6e00740ea279e9a85b6e4db42be40a95"],["/posts/852e85aa.html","0b477f4fc514fae85ce1bd1811ab905a"],["/posts/8712b9be.html","1f8b5c17e1ff1f2fd5cc30f526458005"],["/posts/8e1cab8e.html","53a154048a5afa5fa50edfa1b3342310"],["/posts/8ebfad52.html","86ed08c220be66920f1df4288ac3ac85"],["/posts/8fd19ba2.html","39d9fd0492fefc0f4dcaab8c7db49c41"],["/posts/92d0de5b.html","e1eeede8bc5f6e9c06c3fddbeee63e05"],["/posts/9e3d6f34.html","36634121e9989eb53a0435af7b98a6f8"],["/posts/a25a408.html","392846a2989b9bafa4572d95c314c0bc"],["/posts/a6b15897.html","649393914ddb7cbdbb130fb6b544b8ca"],["/posts/a9867134.html","07091866b4e480bfcf69591ba29dd954"],["/posts/aa351366.html","4d531579cc082488c828e56658533285"],["/posts/b42f7f50.html","5912d35fa07990b38276ef8c678d314d"],["/posts/b492def1.html","24ccd1649b2505e5362f722ff1e51b6b"],["/posts/cca6755e.html","e5866bac97b2553cac3cd3569f8d4e61"],["/posts/cf1cd846.html","860d3bcceeb9d6c1a7f05dfec8e8962f"],["/posts/d6a434b9.html","6d97cea96bd065793eae3b9000375032"],["/posts/ecaa32e3.html","7cce82f72e308b487249b8f3b94e627c"],["/posts/ed8ba887.html","27344d83d3f4912b1e8ee4ddd5a92c3f"],["/posts/edab46fe.html","e77720036f1237b053c4632b78f29c4e"],["/posts/edd0080.html","8a98c431692c2b2dd32d16e0d429ea85"],["/posts/f2f795cc.html","bc7404058cd1d174181d895f8a34ed2f"],["/posts/f7c947df.html","aad23230b6f47a8e1f4bbae80ab62c9a"],["/posts/f7d3a65a.html","4dd1c41e3df2271f3c616ac9fd0ca418"],["/posts/f82b2580.html","858f0de80b9525ec836a5030a6ad4a7c"],["/posts/fac97174.html","3649aa4b762a034910c1451e8b0dc834"],["/posts/facab7a2.html","b8ce4d5e5eab399c2a69232ec775584b"],["/posts/fdab9a5f.html","7fdbbb9f05235dc47d2dd8b088b3d409"],["/posts/fffd9e73.html","5fc3b5f9217dc1dae83314f91e6be21f"],["/sw-register.js","c0f11647c7fc186c1d2bf3aecb2d3c95"],["/tags/Git/index.html","0de6003f0e5d4015fc7cacca8a93e5d0"],["/tags/IDEA的基本使用/index.html","81343ab4fdc4e57b234b7490485f181a"],["/tags/JavaSE/index.html","84d347f0ad65ff53066099a5094b8e21"],["/tags/Java基础/index.html","c3e9a32bdacf97d47d001fed031a105f"],["/tags/Java课程作业/index.html","4545fb52172be85e9475c5090744dc1a"],["/tags/Maven/index.html","1901c10a5eda51b27811f74cfbfc355a"],["/tags/MyBatis/index.html","d6a6516f61405ae560c50e103245a89d"],["/tags/Mysql基础/index.html","ec08fbce54a9046380f2d8b475e28838"],["/tags/Redis基础/index.html","9d4f1429ce63a3e739bc9106a2ddeb29"],["/tags/Redis实战/index.html","4fcbc805df666ae2a2b6a668f4476cb4"],["/tags/SpringBoot/index.html","1104474caa4fb5c5d4c317ac83b189e9"],["/tags/SpringBoot项目/index.html","fec7ab1b6ffc420fa6add5e351cadaff"],["/tags/Spring整合系列/index.html","fc327c0dbed1d6ae0160b3054513c2b7"],["/tags/index.html","751ecc40b32eddf613582687f214844e"],["/tags/redis秒杀业务/index.html","a0168c815f358b242adcdeeeb99955f9"],["/tags/响应式Web/index.html","e146365f721f373b5a8659852e98fb32"],["/tags/我在人间凑数的日子/index.html","a107e69d2f99b10084afd7d9b64a2254"],["/tags/操作系统/index.html","429a20c0f94511185c1bef68eb518635"],["/tags/数据结构作业/index.html","64e26e3cff6f7fffbd526a21a25e5d93"],["/tags/编程和环境配置/index.html","ad5a5407f6c6f391f253fa6acde387e6"]];
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
