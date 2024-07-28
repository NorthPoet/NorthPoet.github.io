/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","45e33ba85a458e0e347f537f7b41848a"],["/about/index.html","733430cd87e7338e71cfd30708de495a"],["/archives/2023/11/index.html","2f08f9175d89ce6b03dadf04d341ea58"],["/archives/2023/11/page/2/index.html","be433f96c669568627d506ded2be06ed"],["/archives/2023/11/page/3/index.html","4a287214641a3f46b4f4a6f1ae9dbd90"],["/archives/2023/12/index.html","844d632c67cf85adc30d86fae480d2e4"],["/archives/2023/index.html","bf0822eb45e0a8045fc229bf8b359418"],["/archives/2023/page/2/index.html","85af1788392ba470f52a787094f44966"],["/archives/2023/page/3/index.html","5f8e7c64ee11cc733147e62dea89c1c7"],["/archives/2024/07/index.html","3b5dfa370b616f39df194d3e2d9f2c61"],["/archives/2024/07/page/2/index.html","3d802fcb5f98247036e23ec05008a2e0"],["/archives/2024/index.html","20992ae603ea806b72e55762e9ae3378"],["/archives/2024/page/2/index.html","c5acdf0c937f59f6dedec9c784954026"],["/archives/index.html","127e32156f146a8ed1911fabd287c8ce"],["/archives/page/2/index.html","92fa228fb33126020ee5a1e25659abc3"],["/archives/page/3/index.html","009ed29ffe941a148848bbfd073bc185"],["/archives/page/4/index.html","ecc7efe694116370d8dd60183e3b3b9b"],["/archives/page/5/index.html","0e53efdcb28028143742c555c52e1816"],["/categories/Java后端/index.html","3cddd427f3bb9ca22335aafd381e5297"],["/categories/Java后端/page/2/index.html","708af3537ae8c6dcdff1354e6f1ba958"],["/categories/Java后端/page/3/index.html","1f979cd5e5d7e3d150fb5a727e305c1a"],["/categories/Java后端/page/4/index.html","cd5f2174c2ccf649dff7b3c0af027a09"],["/categories/index.html","43ab0d3f23c8f088bb3309e37d744e8c"],["/categories/友人帐/index.html","3bd0922e1aa69a1d3df8835ba52b5ef0"],["/categories/版本控制/index.html","592f6282eded623a679eba852f51843f"],["/categories/考研408/index.html","be93ad1985e5dbb6c54f9e7b138f587f"],["/categories/读书笔记/index.html","808fdbfec4512550d1c08a5511228ac0"],["/categories/软件工程/index.html","9759c1b9834c4ee4191072579dc54151"],["/chat/index.html","6a997943f4a7ff6d4c4f583abe9f20bd"],["/comments/index.html","97c453f9a5423c15b65746ae94fbdc3a"],["/css/custom.css","03dfd183766909e4e62c826f3424b2e0"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","3e5ea4bdf3b4188d7c5a813e92482ed3"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","623db6ef8f1ea82bcbd3240ea5512c66"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c11ac0c44b037e0e0e656d4bab006896"],["/page/3/index.html","f82ed94d16b8c0b665b183a35d20d883"],["/page/4/index.html","668b572ed8f9a32dee013ccf55ebbdac"],["/posts/18bf100b.html","8098d5b82c507591988b07cb719a54e8"],["/posts/1fcb7e57.html","fd3527529202689e147fe8810f05a535"],["/posts/254393f0.html","dfe171dd3da697ca0bd92e3bc4c3061f"],["/posts/28b3fa6.html","d788fa3a9e80e72ca2576d1d93e6a3cf"],["/posts/29f0725f.html","79e63e8235b0181cb69fabbd22b1b36f"],["/posts/31c36041.html","4a2bd509d463685a969ada1c42f79611"],["/posts/3513a7dc.html","05c12155a1926f01edf1a4b3e46b92ef"],["/posts/3e69d26.html","524260884a49776d4547249590b6ceae"],["/posts/417de2f1.html","011d5b4c25b5d94f384c9c01f2a2122f"],["/posts/458f2701.html","38109fdf808b4702b935b6ff38304bd5"],["/posts/4e6d3c3b.html","197e345d33d6b2df1d9b6ccece08aa86"],["/posts/51361b40.html","ca50cec37ae431860c8dca44631ac33e"],["/posts/5413be0e.html","47c499463d907229520846c5ad73f33f"],["/posts/5596f2.html","45c0db76825a6e726de05647bc563904"],["/posts/5c81b531.html","2ed71f66529ec8c9994ab28d2efe9c6c"],["/posts/629aaf98.html","74247e6f827bdde32b9905381df6b703"],["/posts/65c29e.html","819ace9f0e2817a14955f46fa7e77681"],["/posts/7105be24.html","0bdacf299e696c346bedec75bc88804f"],["/posts/750cb0cc.html","79089d423daa49cc95dad3f0b9e525dd"],["/posts/76897b5c.html","333fd782b9132092ec8a9475c98ffc83"],["/posts/852e85aa.html","d2b17b44d38004c39cb6f71302966aae"],["/posts/8712b9be.html","90cf5dadff7a2774f7db2eb566a0dc7c"],["/posts/8e1cab8e.html","a74015cbbead3db33b7fd02467af7a10"],["/posts/8ebfad52.html","a17802d9c8dac17e3c2000a12c2bca3f"],["/posts/8fd19ba2.html","8e3072a4d7f1bb034361d59e6208e34d"],["/posts/92d0de5b.html","79ad3ccaf20aec0cbf70a2c6832e953f"],["/posts/9e3d6f34.html","4daff3981f58a60e948fc7fc5886a895"],["/posts/a25a408.html","df6c7f464ec6ba10fb351f571cba205e"],["/posts/a6b15897.html","92ebd89ad9ba82ec75051b03c90e96fa"],["/posts/a9867134.html","33b2b6d29f8e368a3b0861ede4766dc3"],["/posts/aa351366.html","f554280a25af37d60dc6601d9d3c66c0"],["/posts/b42f7f50.html","7c64263c32f5eb96d8390a6d28f56658"],["/posts/b492def1.html","def157c07e34fc4e20f74b7311a7132f"],["/posts/cca6755e.html","098690e0ed3cd3df7b05a3177b83f200"],["/posts/cf1cd846.html","0d0c6c26a8993a04ee0ffc8600a41332"],["/posts/d6a434b9.html","97e2f45a493fb25fd7dad2aafa23edd5"],["/posts/ecaa32e3.html","88d68eb0477aa9b6438c17041055f3a3"],["/posts/ed8ba887.html","15006fc2a036722a2e5253ec6d0e8a23"],["/posts/edab46fe.html","46ceca3a19c88af3c6643d87ec8ebb20"],["/posts/edd0080.html","23a35880ff346c84eb6ec20fd4bb0be7"],["/posts/f2f795cc.html","47ac2276d40c33e3c6a605fe2740eef7"],["/posts/f7c947df.html","d9ba4a7e3ee48083d7d0b19f83ad4749"],["/posts/f7d3a65a.html","8a4c926e07288a9367e2f21a2dae2c6e"],["/posts/f82b2580.html","87a7d32f55c8687b453a0a398bfddfa6"],["/posts/fac97174.html","8ea5b032cb2bdea2bea5048a2dee3849"],["/posts/facab7a2.html","2f71c6e135e6f456b529eeb8cac0c73f"],["/posts/fdab9a5f.html","432c7d7c945a43006502f99e37b48f54"],["/posts/fffd9e73.html","0644cfcd443cc825b3a3d93622927bf8"],["/sw-register.js","5de457adde492ae903586455fd05dcce"],["/tags/Git/index.html","eedf1a199bd3511bd4abf755ac0ae9e0"],["/tags/IDEA的基本使用/index.html","9555dc9eb1a91f3689db014f2e424a2a"],["/tags/JavaSE/index.html","2a0dd030b58a32d940b6584652140ccd"],["/tags/Java基础/index.html","350066c48334c78605c9ae578917a059"],["/tags/Java课程作业/index.html","0b39682b98de9257117eb7bf0ad1b5ee"],["/tags/Maven/index.html","caebb5de44607258b0cc3b15f40cfe8b"],["/tags/MyBatis/index.html","619b6f2cc98e5e744bb7ac1401af34de"],["/tags/Mysql基础/index.html","245689f521fdf2619a07ed406d035724"],["/tags/Redis基础/index.html","3f89264a18f25892d1c9be5980ebbd36"],["/tags/Redis实战/index.html","6ccebe311f3815b4e64039458fd7371c"],["/tags/SpringBoot/index.html","fbce1fc545979c99f40f2df741e93ea8"],["/tags/SpringBoot项目/index.html","a27048844dc8987a3537ded0697b7ddc"],["/tags/Spring整合系列/index.html","65957631e44e0610a6f02a1680f37aeb"],["/tags/index.html","d4830eb949c5f5f55f8cd51778e9a66d"],["/tags/redis秒杀业务/index.html","2b4bf3ca6abae0f655ba31f27f0d77cd"],["/tags/响应式Web/index.html","c29b01c063e54c6044c07fef8208e1f6"],["/tags/我在人间凑数的日子/index.html","42c7a7c24ac34ebbc93ecb58fc1edbf5"],["/tags/操作系统/index.html","e7f4f2cfc49102cab3867809638fd677"],["/tags/数据结构作业/index.html","7753358bed1e09bdff801c22cab6584f"],["/tags/编程和环境配置/index.html","0877888d1bf12afeb716eababb42ff4c"]];
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
