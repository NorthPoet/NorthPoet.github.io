/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","aa776535be903ac4b8d3a2f660c51fde"],["/about/index.html","d4286305fd4708fdd7052f636b00e6b7"],["/archives/2023/11/index.html","09780eaaff660a8c480eb3fd55282d5d"],["/archives/2023/11/page/2/index.html","0010a1f8d3b0a230ba05acc5d3f7dca6"],["/archives/2023/11/page/3/index.html","5d1c3ce64574b70de6394ee763393c5b"],["/archives/2023/12/index.html","a6e98f1815934d4d50e3c21b9e88a001"],["/archives/2023/index.html","8c4514082b7b57c0bafcfde24ec2ce39"],["/archives/2023/page/2/index.html","847f319c3122f241640b7c012cc62309"],["/archives/2023/page/3/index.html","3ffae6d8d00e4a4a3dfa62fa0ce80226"],["/archives/2024/07/index.html","d2547c23256493889c38834522444e00"],["/archives/2024/07/page/2/index.html","fa25ac40a44667fb4d50e3cc076bd621"],["/archives/2024/07/page/3/index.html","2a31d902b2a85dd65f9f7c23a0a762a9"],["/archives/2024/index.html","6842c18793b02239311055c6b97bd821"],["/archives/2024/page/2/index.html","d6c199cf51afaf214c20b3ad7b062f20"],["/archives/2024/page/3/index.html","b67fa5143ca6534ea0619d7e0972af19"],["/archives/index.html","7d7ab5307a2455babb3fded3ba43e963"],["/archives/page/2/index.html","1bb2b6f7690201f0c76d313383e30e42"],["/archives/page/3/index.html","914284d0ddd1d07ce524521625e4bb7f"],["/archives/page/4/index.html","218a38872a65af5687de6769fbee6817"],["/archives/page/5/index.html","59dc85db4c164deb09f0b888df490ead"],["/archives/page/6/index.html","3cdbebf0095c7a6c697756ac52835721"],["/categories/Java后端/index.html","e438df35f9c3f4df56708cf6e0e93b1f"],["/categories/Java后端/page/2/index.html","b1b790456d23b3a64238189aa41e9c56"],["/categories/Java后端/page/3/index.html","9ed48e0353747309b6ca11e5d2508478"],["/categories/Java后端/page/4/index.html","8dc41e26a3311287259e0e9548d812be"],["/categories/index.html","db35172c6fd47afe3502d26fcb12d78d"],["/categories/友人帐/index.html","8bf65f5943fbc04a9c684c345b8929e2"],["/categories/思源笔记/index.html","885b00cc9f4384b7f2bb7f85c44a8743"],["/categories/版本控制/index.html","e8f42440098e03999ffb77dd0dce1e66"],["/categories/考研408/index.html","b4a7a73359c6b6bae13ca146f673fbc6"],["/categories/读书笔记/index.html","121a28131c2a64f3339a0c2057f74bf6"],["/categories/软件工程/index.html","d220c616cd341d75c6a064e90109fa4a"],["/chat/index.html","16ff0530dabdf89025ae532fd7a632ea"],["/comments/index.html","cd11a5e0e1c3fad5530ee13188a69c66"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","1d0f34fdeb0dbef62e28ecec502db39b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a734c0f097d4200fb48c336772a184fc"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","2d91df5fa2f595191e31279d6b16c013"],["/page/3/index.html","4290917b7cad82d128214398cbd62221"],["/page/4/index.html","fb13aba599f2367571e4eb2de1219644"],["/page/5/index.html","da03951adc3d1d8bc622400159e6f472"],["/posts/18bf100b.html","f2cdf85a65aa98fac0421fd0db7cf359"],["/posts/1fcb7e57.html","dea14478db54661205b7eb4c10052603"],["/posts/254393f0.html","a73e026e34c2c7c28c389e585980859a"],["/posts/28b3fa6.html","013128e36adf66996915d49f572f973e"],["/posts/29f0725f.html","b33e225bf797684a9a19a6b8342e64eb"],["/posts/31c36041.html","1570629d7c7a9a1885d3372ad7235ee0"],["/posts/3513a7dc.html","70e890b9b1f4dff45b22a6ddf5a7651b"],["/posts/3e69d26.html","bdbb679cbc6278c685334c9336e9662c"],["/posts/417de2f1.html","ddb3159353ddd3ac096fc8fdeb9e98a5"],["/posts/442fdc66.html","5d7b5917e384b1d303aef9b1b955dccc"],["/posts/458f2701.html","96ae0c693d9c5afdc0d71a0c4664e998"],["/posts/4e6d3c3b.html","b52d2fa65fbae18b64f0cdd903a81d61"],["/posts/4fc13381.html","caf25e8cdc53f1a0a8730150d3f64d78"],["/posts/51361b40.html","2b9490e1185652ba265a4685178a76a6"],["/posts/5413be0e.html","98c4277f1901c2469548f21a804149eb"],["/posts/5596f2.html","be9e3ff9a9ee0bba20811b5254841d2b"],["/posts/5c81b531.html","5ac44e43528b043d284967d8e9990c45"],["/posts/629aaf98.html","32a6a7e353cb2ceb2a4683808eb7ac0d"],["/posts/65c29e.html","7f7a873ca1a214c80a4e5d156c56ed3c"],["/posts/7105be24.html","cf8be4e9c07cc5ad2c0c16cf158e027f"],["/posts/750cb0cc.html","2dda108897d2143e77fed215feb23e8f"],["/posts/76897b5c.html","4784c0c42aa0e934d304f7dc0880917b"],["/posts/852e85aa.html","cc32c5a603857a2daf2fb9c72c173003"],["/posts/8712b9be.html","dcfceef2beb4d0935129067fdb069f6f"],["/posts/8e1cab8e.html","9a231b38611b5bc1f219f0d32d4c46ff"],["/posts/8ebfad52.html","20ffeb3db2ad9d8d95baa2953ba84aa4"],["/posts/8fd19ba2.html","9a57068d0ca28f20fff1d12bf9c8bf12"],["/posts/92d0de5b.html","39f78f8013ab8cdd9fd9375717e93a0e"],["/posts/9e3d6f34.html","2412651e92e45839bd987cbd15cf37a2"],["/posts/a0708e01.html","68cbe054fd67f369a64147a4d3a3ec50"],["/posts/a25a408.html","631869896e50a4ea3bde2e4be2bcc065"],["/posts/a6b15897.html","5907d7315c1b38878062d09dd65b6348"],["/posts/a9867134.html","ec4837b245dcc3b1590716571176cc28"],["/posts/aa351366.html","544714d508205ac7559a1b562aafffbf"],["/posts/b42f7f50.html","29e8e613b96f98998af5119e84f862e4"],["/posts/b492def1.html","e3f3f80c85aba63a42fb27ad91cee580"],["/posts/cca6755e.html","7154b0e1d7bb2ef553febe86d49bc0d6"],["/posts/cf1cd846.html","2a5787578df878cc6f890a6f8c8d0386"],["/posts/d6a434b9.html","fde5a77bde6a13b1cfcb4b6a64f13fb4"],["/posts/ecaa32e3.html","d2d8840dd4be28eb51dc4c00b6ac1490"],["/posts/ed8ba887.html","ab2cb921cc42fd9e06c9c135247c09fc"],["/posts/edab46fe.html","09e78c242843a1efcdc90e205a300152"],["/posts/edd0080.html","6ceb3e41612620c6f0dedbd6e89f1dec"],["/posts/f2f795cc.html","3f5a3a0dc5878e6178e1c76615bcce2b"],["/posts/f7c947df.html","f3cda40bce0b99363e15300bbbe78f21"],["/posts/f7d3a65a.html","53d26b253179145aa7a59f8c133d62c5"],["/posts/f82b2580.html","8dba5968e09fa2d1e1ec0f19df55477c"],["/posts/fac97174.html","88cf61e50e25647620bd399fd02e7f9c"],["/posts/facab7a2.html","d91152a2bd80bb9b83e3fda47e195795"],["/posts/fdab9a5f.html","79f91cec3e60d9bd27ca4185726f304e"],["/posts/fffd9e73.html","ec851b83709ebb22d4640ce738dca7ca"],["/sw-register.js","35b50477df1d4e270d3236c89d601b05"],["/tags/Git/index.html","db1164a79e40578bcc7e0091eae320c0"],["/tags/IDEA的基本使用/index.html","e56cb16f6bb2ed5fd6667c3e38746224"],["/tags/JavaSE/index.html","5d3394d52a6efd74d134fd85f98ff534"],["/tags/Java基础/index.html","921021a173014e6401d2f76541fe8b9f"],["/tags/Java课程作业/index.html","a898a989f940f2fc484720dc96f70694"],["/tags/Maven/index.html","64c0776de2c5b807e53d8513d4ed67ad"],["/tags/MyBatis/index.html","091304d47ec62941ff765ae341ba1c8e"],["/tags/Mysql基础/index.html","e53e2e60d4f648594ad8e7443a64bc99"],["/tags/Redis基础/index.html","1e0503d51e56f39bf2967844c1b081fd"],["/tags/Redis实战/index.html","aa47a7d3262f0431ef019cb25561e88c"],["/tags/SpringBoot/index.html","a1ea3007b02d44ba62ae83b16e0e68e8"],["/tags/SpringBoot项目/index.html","02e3ac9b22620279928583c46fa3f01e"],["/tags/Spring整合系列/index.html","15fa7f1e8120ce98eaef8def96249a25"],["/tags/index.html","6ba81d78f25cd27c4d0328fc7b0a922a"],["/tags/redis秒杀业务/index.html","d3ed688c473980707f8811a8373d9814"],["/tags/响应式Web/index.html","6cd6488d127da40fbfff91d7ec51423f"],["/tags/思源笔记相关CSS/index.html","368d4381cf93f2576650374b66542485"],["/tags/我在人间凑数的日子/index.html","2785e6d0ca4890c14a3dafc4efe3c2c9"],["/tags/报错杂谈/index.html","f80492353086452cb2cf0508ae1d168f"],["/tags/操作系统/index.html","99e130e03d4cd1f8a7be1812b47ad2ae"],["/tags/数据结构作业/index.html","1c77bdf291d05d3324647768cfcbe046"],["/tags/碎碎念/index.html","d82a524d4755ab375b68fa87e1465d04"],["/tags/编程和环境配置/index.html","8c460feefbf6b630d9c00497298b2b2e"]];
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
