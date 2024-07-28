/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dbcba85ff84477da8880370d6fe84c18"],["/about/index.html","55bf4b553077a37ec4a1dc32c481192a"],["/archives/2023/11/index.html","5052142701794302f8b828c2fa5d4d21"],["/archives/2023/11/page/2/index.html","a4468f5b2781cee5b22db62f6e1f3671"],["/archives/2023/11/page/3/index.html","e00359d456cff426421105fd332759ee"],["/archives/2023/12/index.html","e55c5497249b6270f7cf7697869cdfe1"],["/archives/2023/index.html","29d4a56a8a1b53a7845acda49f5b4e35"],["/archives/2023/page/2/index.html","86605170643b86c0ce68503c44045697"],["/archives/2023/page/3/index.html","711391ac90f23e9435c305e38e660136"],["/archives/2024/07/index.html","49f9eaeafee6b613a6618a3bdf08b2c6"],["/archives/2024/07/page/2/index.html","6af455e90decf47d2fcf36d0c682ba55"],["/archives/2024/07/page/3/index.html","1e42dd94ede2402317230682529ae874"],["/archives/2024/index.html","80af43a176bf40e4683b678d078c8e56"],["/archives/2024/page/2/index.html","c34c6912dc4b1b7d285eb23b5b1747b4"],["/archives/2024/page/3/index.html","51ad643783b1d24eff2b5f16a5feaca8"],["/archives/index.html","0036c46dd675dd342059bdfae9eebec8"],["/archives/page/2/index.html","27c868cae8f6ad7ed4c41082a7caf4e9"],["/archives/page/3/index.html","fb413c4fed4fa295747659384e892190"],["/archives/page/4/index.html","9a0e219dc301318d0bc9e163bd10c2ae"],["/archives/page/5/index.html","c40c9b90d383a1822a386cbddaf09955"],["/categories/Java后端/index.html","7877e845496c577520a656f862b389fd"],["/categories/Java后端/page/2/index.html","d5d09904e7141b7c0a42fef51a650164"],["/categories/Java后端/page/3/index.html","057e583be1e9b9d85d5af284c39cda6e"],["/categories/Java后端/page/4/index.html","48d408d06b6096ac860c6e5a0379eff5"],["/categories/index.html","d4ac807525c1cf8c69b608160f74efb7"],["/categories/友人帐/index.html","0eebf9d8bc75f0f8c0c427951e85b728"],["/categories/版本控制/index.html","ba9fcc63a6b13960a4abc67f1fa3d96e"],["/categories/考研408/index.html","dced67c76a6868c9f4f4dfb481162ea5"],["/categories/读书笔记/index.html","08228956542957d7343935f59c60d0cf"],["/categories/软件工程/index.html","a0d5cefe7bd84f04e2bc0487a111579d"],["/chat/index.html","08720c99ba6a7e79347c79de25838fda"],["/comments/index.html","beb0de6a29848c0973b0fab474d212ba"],["/css/custom.css","8838a30e726396c9147ec6bc8fb8a72d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","3c6b0547a593046719ac430242a7ab70"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","399ae3bea3d15d5c918b374f54cbc23d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b291c1fe7b47d3cb63654c06098fe094"],["/page/3/index.html","ef2e07c716a1cbb63b35acf48194bb62"],["/page/4/index.html","5fc3ce66d08a05e42ed4cbd75df77ba0"],["/page/5/index.html","fabdc7c1c94536f535ed4bd4e822865d"],["/posts/18bf100b.html","57b5fad9718f32b3fa627d052dea06d5"],["/posts/1fcb7e57.html","dfafede0130f8bc21f56866985c50a83"],["/posts/254393f0.html","bedb1b0417ddab4a2fd6598ff7b71567"],["/posts/28b3fa6.html","026fbc6dedd1dff9039c428a135169af"],["/posts/29f0725f.html","df8b01b356d8a3e0cb7d4f5b70a8afc6"],["/posts/31c36041.html","8b80dccfe6840656a08a2fa0ba518f7a"],["/posts/3513a7dc.html","2a4ccc2c6d1ac9ae627418a6b36271ba"],["/posts/3e69d26.html","0a75ab81e38be6eed1e5d27673645e99"],["/posts/417de2f1.html","873d7de9bcc8cc7c1637a94fc0500262"],["/posts/458f2701.html","6280481e4251c8a455ed481896b7c2f0"],["/posts/4e6d3c3b.html","ceb634784f100b086a23fc9c099aa748"],["/posts/51361b40.html","958056af8cd911a3b0ae2ea4bb7526e1"],["/posts/5413be0e.html","47993a3f38e4a026bc89adc7c1875ed5"],["/posts/5596f2.html","fb297f12217d64c040bd5826b329a026"],["/posts/5c81b531.html","387a29c0717d50f0e492ba315e8b764e"],["/posts/629aaf98.html","8eaa3af6dd24d71a035f3cc4b89114ac"],["/posts/65c29e.html","d30eb75c93ffefa787b538983b719f18"],["/posts/7105be24.html","0807fd4beebb46569c4f2951d925baee"],["/posts/750cb0cc.html","41146cc36096cfcadf54ad8fce833c47"],["/posts/76897b5c.html","911c4308764b92b053222cb775f17c36"],["/posts/852e85aa.html","575985d01bda16565ea6fd550c1e5a38"],["/posts/8712b9be.html","9fbab6a696a3bc57dae27325fc5c191e"],["/posts/8e1cab8e.html","305659f0ca01b6c2898bfa318054ffb2"],["/posts/8ebfad52.html","bfaa5ad795f6d44d40803ad76cfc4bc6"],["/posts/8fd19ba2.html","95ea64170fb2d5a7b2376a8d030892e3"],["/posts/92d0de5b.html","7a422b48fbab16bd997755d816123dda"],["/posts/9e3d6f34.html","c9822fa1e847a93c28e756c202275008"],["/posts/a25a408.html","082ad01f6bd96ec678d240cdd7149c58"],["/posts/a6b15897.html","6f6efc25b274ba79d94ccd0f45c0e572"],["/posts/a9867134.html","b9964d9ebf58af33c6fe505488715377"],["/posts/aa351366.html","71aa38ff446f0cf794ca64dfa4c768bf"],["/posts/b42f7f50.html","5a909cdae14c37a915c600b5788b6292"],["/posts/b492def1.html","147fb490f49f12e6631eb88f45a9aa95"],["/posts/cca6755e.html","66d2fd31573b92620192fdba1736de0b"],["/posts/cf1cd846.html","4cc7055ccfaf4512cd3fe52e09f8eb3b"],["/posts/d6a434b9.html","6e9e39dddefbdc861052d226830e4a17"],["/posts/ecaa32e3.html","bc4f0ed8b29544470361a9995b4c6709"],["/posts/ed8ba887.html","4179ab5c45b3835e47dc580025ace247"],["/posts/edab46fe.html","5da705c3c38b637c68d4bf3a21ede4a7"],["/posts/edd0080.html","4671fa078934404361b10c0ca30c96d6"],["/posts/f2f795cc.html","f617a6648baf29d1935e617e8a12951d"],["/posts/f7c947df.html","f88389b4c07089ec91498c434c278632"],["/posts/f7d3a65a.html","50c1e4d8c16b35c042539f01254ad94e"],["/posts/f82b2580.html","88ac2010ccf8331269cdf5d63fd24ffe"],["/posts/fac97174.html","7140cf771252485198acd8e46a28bab5"],["/posts/facab7a2.html","b1cef546971920f0e55c9670d4e5ba95"],["/posts/fdab9a5f.html","8a08de64caf7773a455c651cc22cac80"],["/posts/fffd9e73.html","12ec74c223c08435074aa2c96ff40a1d"],["/posts/undefined.html","bf136790a29ef64fce80611b51126a82"],["/sw-register.js","7e319860c9e3d33761d4acc274ce565a"],["/tags/Git/index.html","7cdc7587916937d237fd29be65e9e11c"],["/tags/IDEA的基本使用/index.html","1771ebb29dcc5b04096cbf69cc98b587"],["/tags/JavaSE/index.html","12e3950c983067b5adb1e95d6d1ea53e"],["/tags/Java基础/index.html","0d918c3a8d1c67d869adba9cef945059"],["/tags/Java课程作业/index.html","2b4cc1dadbf19ba92806b54f9b853698"],["/tags/Maven/index.html","e9e703b0a30372f3d88990e1826d7fcf"],["/tags/MyBatis/index.html","c83fb73ab1a70c0764e0fcbe1800acba"],["/tags/Mysql基础/index.html","380a1c892dc38825f96de90f7c77bb47"],["/tags/Redis基础/index.html","e5358c0425a2ef8234af4c501e189dc9"],["/tags/Redis实战/index.html","76e1ff65af7a47b1056fc391fc7e757a"],["/tags/SpringBoot/index.html","a3cc255cccd7fac5dcebda9af74cd307"],["/tags/SpringBoot项目/index.html","295f57001973ad5ff116e13e001e8503"],["/tags/Spring整合系列/index.html","e1785a2e3da5435084d33ba74b03f138"],["/tags/index.html","e3b5f25d715f3478eb2016bc50bb89c1"],["/tags/redis秒杀业务/index.html","79734949fad449f42e62fba34017ca95"],["/tags/响应式Web/index.html","ee498fcdac40e6d5a2e9c9b8ab8ac70c"],["/tags/我在人间凑数的日子/index.html","7582591399e3f5523a1233e1e75f5995"],["/tags/操作系统/index.html","9e86341fa30856d414c47c892d754deb"],["/tags/数据结构作业/index.html","824d7fcaaeab07a140ec332a2ecc9dbf"],["/tags/碎碎念/index.html","6690fde9fda5bb9b86d2f6b87ad74030"],["/tags/编程和环境配置/index.html","c573bddf4fe9a978005be76345c66ff4"]];
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
