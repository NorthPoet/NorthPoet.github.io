/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d17bdd4d055e83c5a5fa89d084133cc1"],["/about/index.html","b85715f4f4635abc5a6a503bf6614488"],["/archives/2023/11/index.html","bedd29f2b0e81a4e12ac23aa5e618324"],["/archives/2023/11/page/2/index.html","2b14c6dd67d1441b3433f712deda7513"],["/archives/2023/11/page/3/index.html","76cfe7160783ba4eb0d897e0ef755e6d"],["/archives/2023/12/index.html","66d8105eb5c08e65b332803d2fbdac71"],["/archives/2023/index.html","51e00193fa78b4c511f7e2f9ee0da9ec"],["/archives/2023/page/2/index.html","2e8a02b0e698b1b7d23c7e2d4fb11a12"],["/archives/2023/page/3/index.html","8218f81a0639d1b4d3f6e46fd55c9226"],["/archives/2024/07/index.html","906a86be8c079941211dbdfc7eb4813e"],["/archives/2024/07/page/2/index.html","6cad09b2f8b771bc7ade19a26bb2368c"],["/archives/2024/07/page/3/index.html","5e70ac2f2ac796e6098d44adcc083b13"],["/archives/2024/index.html","431b6ceabb66e6d0f4c81be917ffb060"],["/archives/2024/page/2/index.html","2f330d3b5482c831b596fe5ea77c16e5"],["/archives/2024/page/3/index.html","1181bd03c97569732ce8106f96e3d7e4"],["/archives/index.html","9dcc79bb279e09fb214e21a9796ef7b7"],["/archives/page/2/index.html","d1521f1de6a54eacc3ad286e15ddffac"],["/archives/page/3/index.html","81036530add56ac9be234823a7c747cd"],["/archives/page/4/index.html","34939fad268faa7c5f18b2cf319ab6fa"],["/archives/page/5/index.html","2036c3aab7962a55306248967f2c09e2"],["/categories/Java后端/index.html","b3cb101cb587be03dce890d72d97d5a8"],["/categories/Java后端/page/2/index.html","08264547cf121bd176688d4503e683a2"],["/categories/Java后端/page/3/index.html","a9df5c7f948b4e2324d84f247953c243"],["/categories/Java后端/page/4/index.html","e014956a8972b06ab672505d1b398d67"],["/categories/index.html","64c3f462797da77339e921dc1b7e000e"],["/categories/友人帐/index.html","5e6db448e51e41e86b13a3057f42e9de"],["/categories/思源笔记/index.html","f62319b6f3195727828e7d6a245c4129"],["/categories/版本控制/index.html","eb52caceca4650b4b88c4332078abcfb"],["/categories/考研408/index.html","db7ed20bcf47db30e9a1b4a02cd3f3cb"],["/categories/读书笔记/index.html","7e43174adc00ae91a949078dd0c85b3f"],["/categories/软件工程/index.html","559ae8b70c1741bca8c6c495951eedd6"],["/chat/index.html","1f97f096847f8cdbb59b116fa2901e4e"],["/comments/index.html","c39527a875b1c79f57be095d08b2fb5a"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","ba915006f40574111fe3bf5a08e91f01"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1de9c8e43bec6734f51ecf2891242c13"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","034e11ba267e47199006aa3342a12b30"],["/page/3/index.html","7f268608a2f2d53279a8ee0f3d291950"],["/page/4/index.html","c877dc32782befaf0a4a5104ac9a9215"],["/page/5/index.html","2534012d6a2c4e5655ec9c39d52a3e3d"],["/posts/18bf100b.html","c19dc9e80e707f9f1240084e2dda9fdc"],["/posts/1fcb7e57.html","0daaf6bac4327084179c6893a3100053"],["/posts/254393f0.html","a5a4dd8dac3bd7bdfe9a47db215b8a0b"],["/posts/28b3fa6.html","f88eeecee4567b69f46d62991a4f6390"],["/posts/29f0725f.html","b05fa7212267749ec9781cb49a1b8e5c"],["/posts/31c36041.html","a1308e5652cfecb01927ad269c4d3159"],["/posts/3513a7dc.html","5693557278475a817520c34b09229f54"],["/posts/3e69d26.html","e62946f4f73a0834d9618ac1d4505ff0"],["/posts/417de2f1.html","0ec6a5376595fe3485d8e8e185c813a6"],["/posts/442fdc66.html","2306c9d891e360548f61af70385daeeb"],["/posts/458f2701.html","f368b2a7674dc5fdf60f6d695f5a2950"],["/posts/4e6d3c3b.html","2a7f316b4242afcd5cec191957dc0b86"],["/posts/51361b40.html","ab87a5fc6585ef27cf75d041662b8ba2"],["/posts/5413be0e.html","c8146e8922fe1363658e35ebcfaf57aa"],["/posts/5596f2.html","4e6b88f6155f8e0cb876b4dffc1f4968"],["/posts/5c81b531.html","3b5e149b8d7c98cabd748a67a74735cb"],["/posts/629aaf98.html","f525cb6628729e7f67d0077793da4e8e"],["/posts/65c29e.html","f4f366eef9f91d92e5b3fe31afee7612"],["/posts/7105be24.html","44347e18c472de741b2f420c8e3d819c"],["/posts/750cb0cc.html","2ad3301c19fa7664dabfde20916825e9"],["/posts/76897b5c.html","d47c68d69fdb2c214277f748deba3436"],["/posts/852e85aa.html","9650ae69fff4f207353ac64b17bb0cda"],["/posts/8712b9be.html","80c1bd7e296d52e9fae21623caa75f59"],["/posts/8e1cab8e.html","01774996dfcc1dad2af83558b39d6143"],["/posts/8ebfad52.html","b938f11d9a56030256d219e8f739c1c5"],["/posts/8fd19ba2.html","b2606f85dfae63edc55fa9e07ef0732f"],["/posts/92d0de5b.html","4536d0747b8f025fefebe4a08fa41e4b"],["/posts/9e3d6f34.html","458a8d3d671325f203d8b1353ecb0a1c"],["/posts/a0708e01.html","75457dec5c4f77a707537c4c84e120a3"],["/posts/a25a408.html","845e952879b42e989aa77c5f01086e29"],["/posts/a6b15897.html","71d7cd9ef80deb3d6aa5426884afca2c"],["/posts/a9867134.html","f83970bddffba14fdd04daaa0b2403f0"],["/posts/aa351366.html","32e3b115119357c7c2e33b5172218892"],["/posts/b42f7f50.html","39604eea39e55fae5236af2e191be8d9"],["/posts/b492def1.html","f18b07322045cb157d4ef46a882755b8"],["/posts/cca6755e.html","1f788979e47dd987459f196fae416997"],["/posts/cf1cd846.html","33cd3128d50a6f0356fa062c2f079b36"],["/posts/d6a434b9.html","4a4e96c0c4047890c5f701222aceacdd"],["/posts/ecaa32e3.html","8edc8f6ca76bcd57ba4cdadbbfcc2b41"],["/posts/ed8ba887.html","2d557da8053c1e87f78586bcdee302c1"],["/posts/edab46fe.html","b6defa57ebd1c85f10fc612e7d81ce9d"],["/posts/edd0080.html","c4d870ffb353fe5e28a30564a67e602e"],["/posts/f2f795cc.html","536d8e6043c2c1238f53ef3750ca2e83"],["/posts/f7c947df.html","0e83db718de83bd5b4143f3e63961e96"],["/posts/f7d3a65a.html","afc14e9e094ed047785efc404fa00a25"],["/posts/f82b2580.html","74af73ea285068b3dde4f9e77fbe5973"],["/posts/fac97174.html","670d12a33d807803dc333b8961f52ce6"],["/posts/facab7a2.html","aa9d5a7d994b756ae5870d76a4523a22"],["/posts/fdab9a5f.html","8a98c4cee1b584a7cbe15cef98ebeac9"],["/posts/fffd9e73.html","4ec9d2e16a5fd37e2d296f637eac4166"],["/sw-register.js","f1f607aae5a4e1e1460b829c24db202f"],["/tags/Git/index.html","0c6af45fbfed29f4c69c6f7050b3231a"],["/tags/IDEA的基本使用/index.html","658b1bec9a4e6cb633ed6457e993448c"],["/tags/JavaSE/index.html","61d5a8d231f775eedfab6eede4b3cf5f"],["/tags/Java基础/index.html","6406e0cb476dd20d018ae200ebf587f0"],["/tags/Java课程作业/index.html","d2ce0a24322e4a29ce644d1ac05ef143"],["/tags/Maven/index.html","f28311678fba166a213a4c71d82e25f8"],["/tags/MyBatis/index.html","08c9386493e239a06e5afd0518cb6082"],["/tags/Mysql基础/index.html","8e76dd1843bcabf8c97d9c5a11084e13"],["/tags/Redis基础/index.html","12bbac0ec47988146886052d5a23d160"],["/tags/Redis实战/index.html","6d0e5601908160f096b6336f430929e2"],["/tags/SpringBoot/index.html","2ef09fde2cc367e3e51a4aaa630437a6"],["/tags/SpringBoot项目/index.html","853b352a541b6bbb7503e633ea6b93c3"],["/tags/Spring整合系列/index.html","6c8813f343732e900100fd32a984df77"],["/tags/index.html","34278476af68860724a1632f1ab59012"],["/tags/redis秒杀业务/index.html","59f7f9c5c77c4720bc0fbc87753810ee"],["/tags/响应式Web/index.html","1f17c67c7850674233068d8c6539bb4e"],["/tags/思源笔记相关CSS/index.html","33b1cc3ae3361f8f1f7eaf3fdf283d69"],["/tags/我在人间凑数的日子/index.html","24a98976d20561d1dcb9627ee7dd994a"],["/tags/操作系统/index.html","b7a2462be21a6e7e79a552ba30256667"],["/tags/数据结构作业/index.html","9128f0960088e0bc1adc8ff5e061e464"],["/tags/碎碎念/index.html","773f1db90ee8bb30437c40dfd5c6ca20"],["/tags/编程和环境配置/index.html","9ad6e7cc66716d8380017caca7d78e5e"]];
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
