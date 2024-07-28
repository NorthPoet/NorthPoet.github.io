/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","781c9e7ed599a04d870eb0df3abb9a44"],["/about/index.html","cad9a2761db8ead3bd225dfb25701c3d"],["/archives/2023/11/index.html","26fba106ef1dc08defb29adbaa1c0aba"],["/archives/2023/11/page/2/index.html","0d22cf9a8ed138142ff40c3eeeffb7bb"],["/archives/2023/11/page/3/index.html","3a2d8525032aed5f0ace48bb653ba416"],["/archives/2023/12/index.html","9e3ddaf0f1ef2893f42cfe744efc9d4d"],["/archives/2023/index.html","1ef60ea72a02b028273e440f244cd711"],["/archives/2023/page/2/index.html","f34674f9fd6e2eb772b2a4c70912d209"],["/archives/2023/page/3/index.html","fe8aaabba8df0bc621fa7e353f69b331"],["/archives/2024/07/index.html","7691b6bad9f95fba701e0638aaef570e"],["/archives/2024/07/page/2/index.html","093e6b5dc090f016cb25389179cadb85"],["/archives/2024/index.html","b14f8df9c125f57adbc7624b255bde2a"],["/archives/2024/page/2/index.html","79fa4ca2bf87c7e9616b77d15882e511"],["/archives/index.html","40d270c76869fd1b20e64e1ebde02d74"],["/archives/page/2/index.html","7af90e94b609e937e43890934e3f24ef"],["/archives/page/3/index.html","c8ed806e9e4c0830f05368151e06ac7a"],["/archives/page/4/index.html","ec1cc6e96195a40abf0cc11af5126d2c"],["/archives/page/5/index.html","da3fe9fac82e15ee8ba97ce4b678fadd"],["/categories/Java后端/index.html","ec4a33b111ae3b4c0353742e59d619af"],["/categories/Java后端/page/2/index.html","b35ef5cdc238cd41dccb246c7f3f8b3b"],["/categories/Java后端/page/3/index.html","34aca4867b5b33fe7983c6428d48027c"],["/categories/Java后端/page/4/index.html","341ddf25aa8f94505af6cbe971aa59b2"],["/categories/index.html","a7dc03844797a4d8a2a70fb6a95c9f10"],["/categories/友人帐/index.html","c168eb0d49aaa1a13191133f230d8d25"],["/categories/版本控制/index.html","108fd7f71e0d64fcd7fdc0f01ca33e92"],["/categories/考研408/index.html","be84d58d157ade9bb32b9820496b8590"],["/categories/读书笔记/index.html","a0715eea06dab5a5fb7d4648115c4556"],["/categories/软件工程/index.html","4010035e9ebfe9200db1579944a7cbc6"],["/chat/index.html","d56791374a9b6152772eb088f030052d"],["/comments/index.html","07970b92165a433eac48a48b98602817"],["/css/custom.css","8838a30e726396c9147ec6bc8fb8a72d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","e58067a8ab48b888b0b983d402b407c7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","3117edfff4f4d6831f108f234deee69b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4ddbe0c876fc03be0e442d472fc48a3a"],["/page/3/index.html","776da8d3896aefc627d78a40081b246b"],["/page/4/index.html","425df60b05fb47f213799012a8b198fc"],["/posts/18bf100b.html","0e41da07b62be39dec99324dcea15869"],["/posts/1fcb7e57.html","848b54dca3a0469f7b978108a06eb7ce"],["/posts/254393f0.html","09655f631ed8e718843514f543ed0878"],["/posts/28b3fa6.html","bbb4ea52b3fd934e8041a2ef8ec205e6"],["/posts/29f0725f.html","d8ea7731722d7ccba0dd4e22b9438617"],["/posts/31c36041.html","5270c47bcabe46dad4b08845bd491b9b"],["/posts/3513a7dc.html","57c0acf563d0ea6f028939fefbea75b9"],["/posts/3e69d26.html","2577aa42cf974d81cc3e0bd72b830174"],["/posts/417de2f1.html","5c4a0c5f6c0728ee821bc0ceb476f675"],["/posts/458f2701.html","d5b56eedd86721e1dc415f1d37077bf7"],["/posts/4e6d3c3b.html","c935f205c7c950795c2e099bd6c1ceaf"],["/posts/51361b40.html","604064abbbaf7fef3294cae280694937"],["/posts/5413be0e.html","db09db76a5be4b9fca2f268988aeb580"],["/posts/5596f2.html","c0ee08ee6c47c453a467a71183a79dec"],["/posts/5c81b531.html","ab16941fc1c997e400ec4d50215cf16c"],["/posts/629aaf98.html","b68c2a47798889344a0f935444666472"],["/posts/65c29e.html","f014f207a63a42334d7a4c8ae57ecab3"],["/posts/7105be24.html","8a19c56e55704083fa8de5854baad6d4"],["/posts/750cb0cc.html","47a5e2bd320c991072cb2cf2294e536c"],["/posts/76897b5c.html","f40a98864fd0c45f694aa2dfbf0923e5"],["/posts/852e85aa.html","828236ebf1939b00d5c70b8a9d173a12"],["/posts/8712b9be.html","019d56bc332460b98577e60b203d17e1"],["/posts/8e1cab8e.html","fc640fd636731e697e197a0e6e7efad2"],["/posts/8ebfad52.html","429e0ba85d171dda1cf397e187209d58"],["/posts/8fd19ba2.html","7787cd4683697964267634af7cdc58ed"],["/posts/92d0de5b.html","034cd246d039176de92f5bac9e772429"],["/posts/9e3d6f34.html","bfc62ce612bc118b16ef1201b156de9e"],["/posts/a25a408.html","b4d4d8fd974b1444d4bca2b4734ec8ba"],["/posts/a6b15897.html","52fae9a98fa9ff103b486670b6723555"],["/posts/a9867134.html","f4603625f58e2462493c2285b23bd98c"],["/posts/aa351366.html","9587626c5400734759233597cc62d058"],["/posts/b42f7f50.html","6e1acca50e44306c3dffbe1f8f52e492"],["/posts/b492def1.html","68a233cbab479ad4a9d241d8ab7b474c"],["/posts/cca6755e.html","0a848e7476bf63165925412185474597"],["/posts/cf1cd846.html","69390f55784cca915b818f9ee36a84d3"],["/posts/d6a434b9.html","9c252d7e0baed1fd963eddb6cc06f02d"],["/posts/ecaa32e3.html","9f9e1cbf2ee5e4df0276d32fe3b28801"],["/posts/ed8ba887.html","1b23dcde31bc0997804bba3cde02cac3"],["/posts/edab46fe.html","3248e5b44ae258319dc0142a4e45762f"],["/posts/edd0080.html","ac99d828d0f2fa6291b60e12564021f5"],["/posts/f2f795cc.html","d75c6c6d847ed6760c65d4f14e5b95f4"],["/posts/f7c947df.html","7c662880d33504b1b6b49e9d903fac14"],["/posts/f7d3a65a.html","e81b7b3aad8e27d21149b58ed7f373c6"],["/posts/f82b2580.html","864fc1c8b9814b1e69bc20100a46662a"],["/posts/fac97174.html","a4fee5c975554db231efceaf261c80a9"],["/posts/facab7a2.html","25315cdd52ce7d1392378a4e78d800e9"],["/posts/fdab9a5f.html","041cddd54991a2bb21e7f075fe9ecd91"],["/posts/fffd9e73.html","94f832e89b88a046bbeee94004ddd7f0"],["/sw-register.js","7546c64f8c31798e5b69d7dcb5cfd835"],["/tags/Git/index.html","1cf7203b843c0a698293891f0f5911a4"],["/tags/IDEA的基本使用/index.html","b53394fa63bb7041729b99ba3110c674"],["/tags/JavaSE/index.html","8749c7fbd2aadae1c269f5ea950ce2dc"],["/tags/Java基础/index.html","ba8dec6ce2ad436d17d1ff168368896e"],["/tags/Java课程作业/index.html","1593a71548a5ae22baccaa7efe8966c0"],["/tags/Maven/index.html","129b4ad601102d0f3975cd50d0f8b843"],["/tags/MyBatis/index.html","1244f6c4925075ce767a8070de5b21fe"],["/tags/Mysql基础/index.html","672928b79731617eb747203cda92aec1"],["/tags/Redis基础/index.html","ede5cf70a62544f0f23b647070e74d53"],["/tags/Redis实战/index.html","7a483624724514c4648157db28d93879"],["/tags/SpringBoot/index.html","0087bb315431cb3d4da1a6e205acacc8"],["/tags/SpringBoot项目/index.html","42e72b7981e59545b32dc4e6f7b43d3e"],["/tags/Spring整合系列/index.html","a3d18aeb2971f3843bc6d1578fc42a6d"],["/tags/index.html","7ed2bc5582250023f78cd24aa6b1ee24"],["/tags/redis秒杀业务/index.html","e5e9c37b8aa32afd9e9af5acd8840e22"],["/tags/响应式Web/index.html","9aa16d943c9e4719e507f619842a38d3"],["/tags/我在人间凑数的日子/index.html","dd1e2be64581b8e95013c9c68ea955c5"],["/tags/操作系统/index.html","9b1a8699bc5f8591eda0da39d41b276a"],["/tags/数据结构作业/index.html","5d63b1150a4f3c7097301aab1d27e47e"],["/tags/编程和环境配置/index.html","9ada6272055416fd38277641bc092fb5"]];
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
