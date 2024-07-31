/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fedb122d5ee9345886509c7e04e1007a"],["/about/index.html","f3c0d1aa8e4daa35dc2643b79fb1456d"],["/archives/2023/11/index.html","d28f26ad4ef1c6f1fd61be35e5fcd91c"],["/archives/2023/11/page/2/index.html","aea494a17a885faad01bd7e7593e1658"],["/archives/2023/11/page/3/index.html","5d379d2b9d80758d9d4db80bdd58c7ae"],["/archives/2023/12/index.html","afba9e6b62020aa77b270c7abfee0980"],["/archives/2023/index.html","aa265091b44fe835c9400fc2f1b34176"],["/archives/2023/page/2/index.html","0cff07b91ffd6e78f9ed0b4d99522d4b"],["/archives/2023/page/3/index.html","d7976e498ecff8388d471e5a172b1396"],["/archives/2024/07/index.html","6d3546356561d36d056c5ab52273912d"],["/archives/2024/07/page/2/index.html","f9eaf569dfdc2fb13baacdbc5ebc6e1e"],["/archives/2024/07/page/3/index.html","f28bce37d45c54405950db68114a8af8"],["/archives/2024/index.html","310ac281812c471ef4e492641e8016a3"],["/archives/2024/page/2/index.html","a725bd8a91861b0ba9bc1cb1baee0ce7"],["/archives/2024/page/3/index.html","121f82469cfd13dee87e4de857c72b7f"],["/archives/index.html","d8a3e93746acfd62d14904e6327baedb"],["/archives/page/2/index.html","703b914c318cf26d7e50eb7953d74926"],["/archives/page/3/index.html","dc765069d87cfa5a65d4461c2c4d4fcb"],["/archives/page/4/index.html","0b437f250efc9950c372eaec86cc8f9f"],["/archives/page/5/index.html","3ff74681b676b1f50863edb30462be2e"],["/archives/page/6/index.html","e7aacbb6dbaa759d962a7bdbcca29156"],["/categories/Java后端/index.html","eed892b73b2cb04a8a27d7f9cec9a0de"],["/categories/Java后端/page/2/index.html","be1ff4603d60a3f7c9f706716b468d64"],["/categories/Java后端/page/3/index.html","30042621f6ea085641927c1188913ed8"],["/categories/Java后端/page/4/index.html","62bb4c9775f0b0ef7b02ba31822dadeb"],["/categories/index.html","aa56d610722db8f959489f50df619892"],["/categories/友人帐/index.html","ca801ec11ee68be1e8f841f884f19bda"],["/categories/思源笔记/index.html","659a1717dd1993125032169b754116ae"],["/categories/版本控制/index.html","bc9b2cbba2043b34708d7174f0f23059"],["/categories/考研408/index.html","c60317afa8951789c255910ea493b7b9"],["/categories/读书笔记/index.html","2281720b489d373bd7bc43cf5defd2c9"],["/categories/软件工程/index.html","821ce04bdc9d923d236d3e63d55455f1"],["/chat/index.html","11fdd02bbf56555b1722076be0a2c32a"],["/comments/index.html","374f15d03da9a7fbc641167c319ea849"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","3ca46c51a3285ab213a29005235ebe3f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","ffa6a2463fcfa9a731ced7164d4c47d1"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","8de0d582c62ae167f01a707a3b17d76d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","a5fc7ac59f6cd2174e136af407abd3e5"],["/page/3/index.html","bc5e7b01de2384a5d411005ce8f0adf3"],["/page/4/index.html","ad3aea7ec3c81207c6fca7e263a42027"],["/page/5/index.html","8a8a19d7e25c4b62ce22c048750ed1a7"],["/posts/18bf100b.html","f2cdf85a65aa98fac0421fd0db7cf359"],["/posts/1fcb7e57.html","ea7f6f002c1b325cab47ed1a4ae4950f"],["/posts/254393f0.html","a73e026e34c2c7c28c389e585980859a"],["/posts/28b3fa6.html","4c15cf65df661a13ac0044a191dfddef"],["/posts/29f0725f.html","b33e225bf797684a9a19a6b8342e64eb"],["/posts/31c36041.html","1570629d7c7a9a1885d3372ad7235ee0"],["/posts/3513a7dc.html","70e890b9b1f4dff45b22a6ddf5a7651b"],["/posts/3e69d26.html","32c900b3b7abae113be4a7b37cc136f1"],["/posts/417de2f1.html","ddb3159353ddd3ac096fc8fdeb9e98a5"],["/posts/442fdc66.html","5d7b5917e384b1d303aef9b1b955dccc"],["/posts/458f2701.html","b43c64d6b1554fb1e4b88794508fbee3"],["/posts/4e6d3c3b.html","1b13a72591bec44c1205b1c88bee1a69"],["/posts/4fc13381.html","caf25e8cdc53f1a0a8730150d3f64d78"],["/posts/51361b40.html","211409432be2c9b6f19b615c1a044631"],["/posts/5413be0e.html","314b4699d62b6d4305110af5c0a48c47"],["/posts/5596f2.html","be9e3ff9a9ee0bba20811b5254841d2b"],["/posts/5c81b531.html","5ac44e43528b043d284967d8e9990c45"],["/posts/629aaf98.html","32a6a7e353cb2ceb2a4683808eb7ac0d"],["/posts/65c29e.html","7f7a873ca1a214c80a4e5d156c56ed3c"],["/posts/7105be24.html","63b0638f285e5af0f691f0fb1a774cfa"],["/posts/750cb0cc.html","2dda108897d2143e77fed215feb23e8f"],["/posts/76897b5c.html","4784c0c42aa0e934d304f7dc0880917b"],["/posts/852e85aa.html","9d439fdf4468fe4bea67e325af1beca0"],["/posts/8712b9be.html","dcfceef2beb4d0935129067fdb069f6f"],["/posts/8e1cab8e.html","7946b1ecbfb5fd314fa864bf9c6c1eb1"],["/posts/8ebfad52.html","95c3090e07f2c9f5c064d22c95dae955"],["/posts/8fd19ba2.html","9a57068d0ca28f20fff1d12bf9c8bf12"],["/posts/92d0de5b.html","39f78f8013ab8cdd9fd9375717e93a0e"],["/posts/9e3d6f34.html","2412651e92e45839bd987cbd15cf37a2"],["/posts/a0708e01.html","68cbe054fd67f369a64147a4d3a3ec50"],["/posts/a25a408.html","631869896e50a4ea3bde2e4be2bcc065"],["/posts/a6b15897.html","5907d7315c1b38878062d09dd65b6348"],["/posts/a9867134.html","8075c018da5f4b911ecb5db20e48c74e"],["/posts/aa351366.html","5e3115b78e94324b1b460109dcb81a74"],["/posts/b42f7f50.html","29e8e613b96f98998af5119e84f862e4"],["/posts/b492def1.html","b77219b218e8d3eed2378fe3ef1bc812"],["/posts/cca6755e.html","dba50157e932d17a70fd67f6b93c36c4"],["/posts/cf1cd846.html","2a5787578df878cc6f890a6f8c8d0386"],["/posts/d6a434b9.html","fde5a77bde6a13b1cfcb4b6a64f13fb4"],["/posts/ecaa32e3.html","d2d8840dd4be28eb51dc4c00b6ac1490"],["/posts/ed8ba887.html","d91be25269018e1920181df5391e3553"],["/posts/edab46fe.html","09e78c242843a1efcdc90e205a300152"],["/posts/edd0080.html","6b08025f035d7a455dfef50062b26973"],["/posts/f2f795cc.html","e8e11d32ee51313a947004e24e82fd28"],["/posts/f7c947df.html","b9fc6fb6d1ce006a446775260bbae375"],["/posts/f7d3a65a.html","53d26b253179145aa7a59f8c133d62c5"],["/posts/f82b2580.html","8dba5968e09fa2d1e1ec0f19df55477c"],["/posts/fac97174.html","88cf61e50e25647620bd399fd02e7f9c"],["/posts/facab7a2.html","65e6526c02ae1e76d40c304cdfe4d8b6"],["/posts/fdab9a5f.html","79f91cec3e60d9bd27ca4185726f304e"],["/posts/fffd9e73.html","e7e10509856f261f730befbb183c6542"],["/sw-register.js","ea40524b8cefa0af89bea9a1968749ff"],["/tags/Git/index.html","9a17e3e8db4b4726b3373180f5d24aff"],["/tags/IDEA的基本使用/index.html","0aa3b251f55ce876006a3c5befb95cae"],["/tags/JavaSE/index.html","2d48afa3a5461d9e937dd62de91da0ef"],["/tags/Java基础/index.html","096abbefdd0eee103c7649961ed3186c"],["/tags/Java课程作业/index.html","e2f6c5a58aa5f14ede25a823bed87333"],["/tags/Maven/index.html","c8426482192560ee0e62fa3e0c977940"],["/tags/MyBatis/index.html","ffdf195a8af2bbe30eef6860233f32c0"],["/tags/Mysql基础/index.html","7618d5155ced13583b55db256d520fd9"],["/tags/Redis基础/index.html","fe00e1c261e106864b7776d37f4334a0"],["/tags/Redis实战/index.html","87275b424aa1844c7cd95be50b8210c7"],["/tags/SpringBoot/index.html","7355f75fc51bb2d91cb1b718abd6c77b"],["/tags/SpringBoot项目/index.html","f9a370709bac2afd14922053ee626303"],["/tags/Spring整合系列/index.html","16b57ca6820f25749bb3a270c1ab2345"],["/tags/index.html","e108e9bf849435de7236ed7c6e2440f6"],["/tags/redis秒杀业务/index.html","96a3a79c438241b9ee0acd0262c00211"],["/tags/响应式Web/index.html","7b65e008ba883f1f66bf3940cb59ba64"],["/tags/思源笔记相关CSS/index.html","5d322731fb2d9b734304cebb9e3b3e8e"],["/tags/我在人间凑数的日子/index.html","23127a454d17c26d03ab19a193cb19a0"],["/tags/报错杂谈/index.html","8a4b8c1616d7d03c31ee73edd291a8ec"],["/tags/操作系统/index.html","9ea60eece621b3bf84f567c7942f5ae7"],["/tags/数据结构作业/index.html","4df6370b4312712d4e2eb5a61f2ccc95"],["/tags/碎碎念/index.html","749f3a9976b6699be670eb6aed46c1dc"],["/tags/编程和环境配置/index.html","dea84a038e396d5713f4412a68f20ae2"]];
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
