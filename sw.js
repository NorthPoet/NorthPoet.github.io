/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8d337b6df72d81e3d2255142f7475ed8"],["/about/index.html","10983169b38a3b44a6fb0c47b0d972f7"],["/archives/2023/11/index.html","3851ea4fc93c9c61c72085e02e6762bb"],["/archives/2023/11/page/2/index.html","580eb3c7ea20fa5b85648b788a3b4f16"],["/archives/2023/11/page/3/index.html","bd0e61a7be9f810ff3945e9ca4aa1277"],["/archives/2023/12/index.html","6de8882d171a88e51181ca1899c7e9f1"],["/archives/2023/index.html","b1cc9ad5febbc5043f8ad28af1e812d2"],["/archives/2023/page/2/index.html","87c43fe9ef16ab5f3f74208e65288ea7"],["/archives/2023/page/3/index.html","3710c57ba81ae0d9fcf9b887ab6f8e69"],["/archives/2024/07/index.html","2a07114f0659931a2d457a0a38886d58"],["/archives/2024/07/page/2/index.html","bd2766aec646c0f8bf667fa637dd5489"],["/archives/2024/07/page/3/index.html","0c41fa7ef162ace7ed698bc9a42c3b08"],["/archives/2024/index.html","ad036fda7c26b0849ac68c8c7e9a5058"],["/archives/2024/page/2/index.html","570851ed4cd7c737d344d86fe922933d"],["/archives/2024/page/3/index.html","37a9dcdef7863bc86bc88bf5b905bfb0"],["/archives/index.html","601fe1d9d3bc4488aa17a49c9601bd96"],["/archives/page/2/index.html","f1b9368d1339ceaf8ecd9b30ae8faabc"],["/archives/page/3/index.html","bd91a3b02ad1320726e40d6793bb0d96"],["/archives/page/4/index.html","f8e73f206494d2bae0f560cb3192e03e"],["/archives/page/5/index.html","7a072d66035f6c4784534a6c36a846ee"],["/archives/page/6/index.html","d7ffc352812538d359e787676b68b633"],["/categories/Java后端/index.html","996d5ba420e99a98583ccce79abd01d3"],["/categories/Java后端/page/2/index.html","dc8271b18cb7fe5371009a7accda1545"],["/categories/Java后端/page/3/index.html","10cb5102ff47919e2207b6999948e5f1"],["/categories/Java后端/page/4/index.html","06ae21269b28171e23111c6ec82277b5"],["/categories/index.html","e9343e00f4e5e149bb64fc5b2e59ffc4"],["/categories/友人帐/index.html","3b0978d388295530c7a5a5d83101bff1"],["/categories/思源笔记/index.html","d3cb7fcf99efdb8aeec6a13c8021b85a"],["/categories/版本控制/index.html","fff5d490c6e907f8eefd1d3e6467c556"],["/categories/考研408/index.html","d2e19f13573052119e57074c30b527db"],["/categories/读书笔记/index.html","8bac5b668f83ff66db21950bb8bb7bda"],["/categories/软件工程/index.html","c2b54adc99e3135a1d6aaa4d5062f532"],["/chat/index.html","2440e0327ecebd649bb6949f4b86f13f"],["/comments/index.html","3623483520f75ed30e98ea4c65f9acf9"],["/css/custom.css","87149d64be1d200c6a847a0cfc4ab03f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a608e04b8bf37743a19c6a4dcf2106b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","90363f000374c5c069ebbee2a2354666"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","9d86c170a05a9127fc0f4ca15569b29d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","459929be79512799a5822c5ad0416bd2"],["/page/3/index.html","8a471e4e07d9931d6d6539ec3d01a9c3"],["/page/4/index.html","d784eb19ebad99115eca567952d9e6fd"],["/page/5/index.html","b4a3fdff0e43d6696dc7e6e0d1e5a3ac"],["/posts/18bf100b.html","d50ee5ed713fad63cfd956cd4c47d97e"],["/posts/1fcb7e57.html","6865f0d992512d13de686376308f3463"],["/posts/254393f0.html","9e2dbd8d9745d3d8207ccaa7229940fd"],["/posts/28b3fa6.html","0944009d8ed8bc62c819b8ba97ec9f8d"],["/posts/29f0725f.html","45af84bda18e3e323f7a07aeb6287ca8"],["/posts/31c36041.html","4b8ecf0251e505b83a796b231dd4e78d"],["/posts/3513a7dc.html","14513d0badecf1ab7583ab8836b87d79"],["/posts/3e69d26.html","f1e252a85ad61de22579ba3d598e029e"],["/posts/417de2f1.html","6d86fcbcafa54c7c6ade8796bc4d7085"],["/posts/442fdc66.html","0fbe25943a5a8ace14101eee1e4b0db1"],["/posts/458f2701.html","a6f5d7cca0989de92e3aa2acaecd9e6a"],["/posts/4e6d3c3b.html","78622bb00f0515f41f1244448ec150b5"],["/posts/4fc13381.html","d8f711cb0ececb358c428eada63acca9"],["/posts/51361b40.html","64c4624f68bc61e352b213d673100614"],["/posts/5413be0e.html","827088f0aead752e5cd6d3d482b5dbd2"],["/posts/5596f2.html","90470eb7c9e2b688af660501f754f7b4"],["/posts/5c81b531.html","844cea8ce744951702502589e70e1095"],["/posts/629aaf98.html","4770187b090f72ff9f0e5a644945b80c"],["/posts/65c29e.html","d976fff1564c5c9115c78c60f464c336"],["/posts/7105be24.html","bbb544f6719b3ee6b2c73f667b56d201"],["/posts/750cb0cc.html","03e7ca125896574aea66a0314af01b99"],["/posts/76897b5c.html","3de6a10ef9b17e9c1c72cf6e6bfed8bd"],["/posts/852e85aa.html","c6906963faed0a38d7b47632c92f9563"],["/posts/8712b9be.html","0a6599b32ada68374de641515abce317"],["/posts/8e1cab8e.html","89d6760aa657252090ce001eb85acb75"],["/posts/8ebfad52.html","c1cdeefad5484f33df5807cafd9aa663"],["/posts/8fd19ba2.html","1a6f3d8416961de74209c47e7a730f19"],["/posts/92d0de5b.html","0a35354ade1498f3c3cd7a69c83280d7"],["/posts/9e3d6f34.html","61e53f007ca863c498be73052280aa81"],["/posts/a0708e01.html","9ceff7550e191df9eaddf486088e336e"],["/posts/a25a408.html","3106f1362d147c71b2d6b9926e681bd3"],["/posts/a6b15897.html","ca2adfd05361db1b6b147c0e78dfe8b4"],["/posts/a9867134.html","11c28330fa59371dcc5a53b1d7ee751a"],["/posts/aa351366.html","65d83c66564f2ce9397f60707195bd6c"],["/posts/b42f7f50.html","49a0a120b8820c561e008331db0d8603"],["/posts/b492def1.html","a2c7ff574d8607516e21487367b01f35"],["/posts/cca6755e.html","943e295259edc153045692e3667f544c"],["/posts/cf1cd846.html","cac25b3fd2212f3b34995835f3acffcd"],["/posts/d6a434b9.html","ac12b8bac872b16dbd5c6efab3b52439"],["/posts/ecaa32e3.html","e44795809f84c908ba12c5b66fcd1948"],["/posts/ed8ba887.html","b244547d9af1934857c25398e8626f68"],["/posts/edab46fe.html","03bfacee645fe703f2b51a9f44bc6e20"],["/posts/edd0080.html","4b5bb5cff93ea201cbbc523827fdf459"],["/posts/f2f795cc.html","341e1d2f02c8dac616c48d2c708e5b16"],["/posts/f7c947df.html","4843bf36d36cf134f66503fbded9ec2d"],["/posts/f7d3a65a.html","48dddddf813ee085d8162ddef2834c5d"],["/posts/f82b2580.html","e32d6fb7bdd1ba326b04e9572bec7230"],["/posts/fac97174.html","245219d2429c0c9f3b75cb31c245ec46"],["/posts/facab7a2.html","23039185aeb15ba6f0f163ce8cba6927"],["/posts/fdab9a5f.html","853009daf9dace6bddaaf8616a781a5e"],["/posts/fffd9e73.html","e7bb5d9e0ad6b0be5c264a6477786344"],["/sw-register.js","8f0b46fba497c77d41b5102254a75da3"],["/tags/Git/index.html","1b895718580c82c316b29e10a6b07c9f"],["/tags/IDEA的基本使用/index.html","6d7222d3b606b4784a735b9f890ce751"],["/tags/JavaSE/index.html","b386fec87498cc8d0a91869ecf83e4b2"],["/tags/Java基础/index.html","e5603507ca325aa9ab874254572dd638"],["/tags/Java课程作业/index.html","e7eea0c2aef5a31d7420eaa676afda5f"],["/tags/Maven/index.html","c5402b6efd0df44a6b95b358d2f859f0"],["/tags/MyBatis/index.html","19fefa828f30564a7ad0eb7d24ab0a77"],["/tags/Mysql基础/index.html","d3d4349f35ec970d0b0bc0e52f95f937"],["/tags/Redis基础/index.html","adb4f234e8e49e28fbe26be9c966a2e2"],["/tags/Redis实战/index.html","1e76fd54c149fb99a851342cd88c6ca8"],["/tags/SpringBoot/index.html","173ff29cf75df5b8807daf5d9a746d67"],["/tags/SpringBoot项目/index.html","2a31d85444ca30e665a371ddeba3da5c"],["/tags/Spring整合系列/index.html","d0103cf3087e1edcb7268c7ff8c4fde0"],["/tags/index.html","e2bf4107f6cde15ca0cd700e8d0dc0cc"],["/tags/redis秒杀业务/index.html","828c0d533db510c6c6c256f74b8a529f"],["/tags/响应式Web/index.html","deae13005eb72bdc0e48599b9db7884e"],["/tags/思源笔记相关CSS/index.html","7c4e6fbfce64861dc7b8dadf6a1883b8"],["/tags/我在人间凑数的日子/index.html","02ca01c398f4441f53a494b5fbfa958f"],["/tags/报错杂谈/index.html","74df197625d9ccb271749025df68f993"],["/tags/操作系统/index.html","b3a44785d65ca22f950c208287b51375"],["/tags/数据结构作业/index.html","0733219cf08770dec9a41ed7bb716304"],["/tags/碎碎念/index.html","6b8466aaa6d57e94536e4ca0404dcf1a"],["/tags/编程和环境配置/index.html","dddeacd3704fb8b916a7109502285927"]];
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
