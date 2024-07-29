/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","01e86ad1f03638428f8961be73e73ed3"],["/about/index.html","4bb510a075322df6d85560db3b29d204"],["/archives/2023/11/index.html","a041f1afdf44027f857fee8d5be8912f"],["/archives/2023/11/page/2/index.html","a596592fed53f555d0a94845a476f6da"],["/archives/2023/11/page/3/index.html","3e5b2c54a603cbecedb640662a38b7d8"],["/archives/2023/12/index.html","6e6a106936f877f259c8a27809f5b3e3"],["/archives/2023/index.html","e4ac4b86229fda95eda5e192a46143d5"],["/archives/2023/page/2/index.html","568089708bbf737ce0ecbe98769d5632"],["/archives/2023/page/3/index.html","899148b6eaa3f6659e91da1c856ab213"],["/archives/2024/07/index.html","258b6c19819d5615f23993aedc162567"],["/archives/2024/07/page/2/index.html","08a43ef7469a98bd532716bfefcdc959"],["/archives/2024/07/page/3/index.html","49d615113f49b7dd653c17c4882aea0e"],["/archives/2024/index.html","3ff900bceafb53758ccf8064bd18cfbf"],["/archives/2024/page/2/index.html","c4bf65843238e12edef135e9bad76853"],["/archives/2024/page/3/index.html","611045cf7e627aad1689eecadec267b1"],["/archives/index.html","d2a71aff7c9391ede3f620195af5f51a"],["/archives/page/2/index.html","f5a265bddd125c9828895e105c950292"],["/archives/page/3/index.html","cdb004a3c7755aa24aa27506bc139b69"],["/archives/page/4/index.html","8075a68c3590cb00074e80577d2b7d50"],["/archives/page/5/index.html","76189cf2ac8ae007bb502cf5b228f0ea"],["/categories/Java后端/index.html","c3a1fb27dcf9a602414a1d74059397d2"],["/categories/Java后端/page/2/index.html","9ecde95a9633c12a9fe8021f16696349"],["/categories/Java后端/page/3/index.html","3961346e64bda4f6581c30d09640401f"],["/categories/Java后端/page/4/index.html","31b241767845395d78c60c1a3a699d0b"],["/categories/index.html","d259eb1b660f0920566ddb8d5d61ebff"],["/categories/友人帐/index.html","ccaddcb2ed8ee7879aad56d6416bb128"],["/categories/思源笔记/index.html","b1f1d02d7223993628a6573e90689b32"],["/categories/版本控制/index.html","bf925095031a54b4c973df26634e0b80"],["/categories/考研408/index.html","be7985a1e31aed1a0c0f899139909366"],["/categories/读书笔记/index.html","ccf17b4a8465fff1faaba720e14fbae7"],["/categories/软件工程/index.html","c241220acf2ee38de850b5893eb39164"],["/chat/index.html","3002eb759333536af2074392c289949c"],["/comments/index.html","69fc4a2e63afee38faf49317bac9098e"],["/css/custom.css","afcb4a70cffd65403b365cc4e290901d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","cbb23960ba9d875f5a6f69d854da1139"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","153cc6b93066c53bb86b56ceba37c6ea"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7351c78fef1de5f48e46d7e0b19968a7"],["/page/3/index.html","1316d41109c768809bbdd4bc6f7e2640"],["/page/4/index.html","8e906847a2d88ecd674b6f96dcd82782"],["/page/5/index.html","73e4c9a3359c4537e82e5b1fb210d2a4"],["/posts/18bf100b.html","06d63dbc363a57c6b2afc7e4431ac7ab"],["/posts/1fcb7e57.html","0c87f8f8d7138cda62e2beb626eb111f"],["/posts/254393f0.html","bfcdf39b90e62c1201871b58d3366d36"],["/posts/28b3fa6.html","276aae3340454883c5bbcc48b27d853c"],["/posts/29f0725f.html","13dc9c528652771bbdb34278da344095"],["/posts/31c36041.html","67f58ce9cd4e31a7fc0b586b5a904832"],["/posts/3513a7dc.html","04067d9a1fa205d0497d61d65207f38b"],["/posts/3e69d26.html","ddd9b312adaaeea32c4605df50415641"],["/posts/417de2f1.html","b93fe5da9a3e945e5a020d63c702f513"],["/posts/442fdc66.html","728397d45e11a657f7efd296485f5b8c"],["/posts/458f2701.html","2fa6f61097dd98e4fc334c9005dc06a0"],["/posts/4e6d3c3b.html","e4bc3c0e87d7d03eb65bbafaf0ba1d89"],["/posts/51361b40.html","11666bdb8cc288f65697a2a88dbef0af"],["/posts/5413be0e.html","4c3f8ccfafeb8727fe37dfbc020d4439"],["/posts/5596f2.html","31f85d16388f24c368b445bb46c96958"],["/posts/5c81b531.html","0f1d0ea53114a5be682a63350dfc0da0"],["/posts/629aaf98.html","17470f72d0baa2ca55890370fe7d9063"],["/posts/65c29e.html","59ac6217124de42aa54b9bd22bccd1eb"],["/posts/7105be24.html","833c89f20a920640f0c6b1ca7e5b5624"],["/posts/750cb0cc.html","e5c75839eaf3de99da9c83a42872184c"],["/posts/76897b5c.html","e02076e5a374258ab4b6df475893a465"],["/posts/852e85aa.html","056d77fc9122cbfc74c1be9e82582db7"],["/posts/8712b9be.html","8ff8a821e42bfa859820368a2dc6139a"],["/posts/8e1cab8e.html","50415a4b99e33fbfb447352faab72892"],["/posts/8ebfad52.html","275f87117653173a36a449fe7a60941e"],["/posts/8fd19ba2.html","222183c546eda58ccc727d4023f79e55"],["/posts/92d0de5b.html","62b89df408855be0b43c395c7dd3fdb1"],["/posts/9e3d6f34.html","1187c22972d2d644af6876f70bd13e4d"],["/posts/a0708e01.html","8ab3063e85caf40ce9556041ac2f41f7"],["/posts/a25a408.html","602e579db08cc0a4bebfe3e21447e5b3"],["/posts/a6b15897.html","1306a727174e9159878cb290306d0c56"],["/posts/a9867134.html","59cc39b8e8d52bbfdfef2beba34f7638"],["/posts/aa351366.html","0360c015aeb5440023881ae1fd095265"],["/posts/b42f7f50.html","75d7c475b1911e1a60bf19f578d23808"],["/posts/b492def1.html","dd70feec4042ff8ea5ba305509a780e6"],["/posts/cca6755e.html","c6e7f629feb95864efa1d4ef3c945512"],["/posts/cf1cd846.html","e39d787c5805582ea1999fbf3eb8018b"],["/posts/d6a434b9.html","a3d09d02f9c507866cb6270b0b32b758"],["/posts/ecaa32e3.html","c3b0ac3b37b3fd6c95cd0e15d7d7b2c0"],["/posts/ed8ba887.html","166b82e40c8466b93948e8830d9208b8"],["/posts/edab46fe.html","9634049fb0945f11a28239a7e6afb636"],["/posts/edd0080.html","42a494958c0c588b296cc0c52f9dbad2"],["/posts/f2f795cc.html","4e3d82086d072d5ffe319502fc3528d3"],["/posts/f7c947df.html","b400257ddf2ce6f2636d2b31416545e4"],["/posts/f7d3a65a.html","e688baae59b57311770337ba82426331"],["/posts/f82b2580.html","fd0d77c7e55c91d2566688e8cf57f38c"],["/posts/fac97174.html","e6fdd4d8a94c6086539a1f5569855072"],["/posts/facab7a2.html","604f361e77f4e2d8e330012242799f65"],["/posts/fdab9a5f.html","9337c9f1f6da4896f41c706d6a014f2e"],["/posts/fffd9e73.html","a6daa974a7ee6fdbc2efbed2ec079b47"],["/sw-register.js","35ee87988f60430acbd8b80022208ea2"],["/tags/Git/index.html","1689ff6d607ae973d928d8147a66f5c4"],["/tags/IDEA的基本使用/index.html","57624cb58176d5fb55d5e315993f25b3"],["/tags/JavaSE/index.html","ee322a1ca21de6b3d5fe03130831765f"],["/tags/Java基础/index.html","960dc6ef11e2687ba3ae55793625a64e"],["/tags/Java课程作业/index.html","dc23d97dc55ae5f298e45281833972e1"],["/tags/Maven/index.html","8c4b3334244b8cf23240ebf5c8fd90d0"],["/tags/MyBatis/index.html","bbac6b3ba25b8017dc09d9c867bd953f"],["/tags/Mysql基础/index.html","d3de009f2fb6870ad842b271464984d0"],["/tags/Redis基础/index.html","91e8382dde2c74f58274f0329a1b96a3"],["/tags/Redis实战/index.html","8097d2135039bb869b635d3f1d72523f"],["/tags/SpringBoot/index.html","c6c772d19a84bb15b955dc41386100c2"],["/tags/SpringBoot项目/index.html","ac355e4822de4dc9643d8a1ca53466c6"],["/tags/Spring整合系列/index.html","7dc5385bf39b7d602d69eb2112db9129"],["/tags/index.html","c1afcf5613f55d6a1b96fbcf52e25716"],["/tags/redis秒杀业务/index.html","ae661eaaee45e70dfd0ab19e113531b4"],["/tags/响应式Web/index.html","52ededaa8e7cd89e5310d2f2ea396388"],["/tags/思源笔记相关CSS/index.html","72feffb00d95557bff22680d2155ee62"],["/tags/我在人间凑数的日子/index.html","0f4847f67ed887740ee63bc1c535bd5e"],["/tags/操作系统/index.html","4a64ca445dc0a266b9604d779724a41e"],["/tags/数据结构作业/index.html","c4858ea2be6a7517d5522eba03499dfb"],["/tags/碎碎念/index.html","cbe29da99c621675183f4fe0c7f88e4c"],["/tags/编程和环境配置/index.html","d319957059b2746a0c615647a54ee305"]];
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
