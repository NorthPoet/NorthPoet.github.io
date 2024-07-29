/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","606b91e0d3f8bd16b4a80107ef4e1d3d"],["/about/index.html","2154e3d4a434adffff557eca5a454034"],["/archives/2023/11/index.html","0bbf6ca1b1c918393fc24470e1409d5b"],["/archives/2023/11/page/2/index.html","a2d3b221f705e80dd54bea59bbfd96cc"],["/archives/2023/11/page/3/index.html","f6a2a7c8c1b651251b9966a3cd2f51cf"],["/archives/2023/12/index.html","71516a841551a07a6312cb3c6b429898"],["/archives/2023/index.html","800d772da1b4ebfed412ffe71e6baa24"],["/archives/2023/page/2/index.html","df362080b746b854ec712a9b2e5db2dd"],["/archives/2023/page/3/index.html","4fdbcc107fde48ee38b950ca08023b7d"],["/archives/2024/07/index.html","456285ac3f91e8014341538a61ceb6bb"],["/archives/2024/07/page/2/index.html","28d99234adc1ae550b2d2dd21b971a96"],["/archives/2024/07/page/3/index.html","14381d8bebdc58531064beb0701ca47a"],["/archives/2024/index.html","13717f402fda40959e0005c1ad5cb752"],["/archives/2024/page/2/index.html","0ec564c15cb34cf38e7d13f31df528a1"],["/archives/2024/page/3/index.html","ce4107f3325e7ef5e234ad4529864fe5"],["/archives/index.html","994b2bb7887671e2d7f01c052cb7ad70"],["/archives/page/2/index.html","bdd3e060f8bb21b783f32cde8936f1a5"],["/archives/page/3/index.html","75e8f38208f8f88d4aef4d3c3a168274"],["/archives/page/4/index.html","2985d0487d7614a77b9dc1083ca9d5e1"],["/archives/page/5/index.html","d43792a0ed977fe0296bcc0956f6f981"],["/categories/Java后端/index.html","f9c610e8d1dbc4dd624c05c2fea780d3"],["/categories/Java后端/page/2/index.html","ca01dac2b7cb818d21258529bd44050e"],["/categories/Java后端/page/3/index.html","5a68eef8479d7ca4dbe318aeef88c9f3"],["/categories/Java后端/page/4/index.html","6496917e15b0103013b7378cd29bdc3e"],["/categories/index.html","d316c1505a50a998f638ee093332aea1"],["/categories/友人帐/index.html","412046851a5bbac62691aa0fdf2f84aa"],["/categories/思源笔记/index.html","ae6336ff80b8af7e9c5698d722d183a9"],["/categories/版本控制/index.html","15b2980b3ce91592b82b47fd661afaff"],["/categories/考研408/index.html","23cf79fff68965d1cc75551b65c34458"],["/categories/读书笔记/index.html","735d7a578c1e2183c63cd50fe8194120"],["/categories/软件工程/index.html","800645f325366f02be313734fcf6e4f3"],["/chat/index.html","2278c10ed17ef6d6cb9a894902858fdd"],["/comments/index.html","89dc35e0caf3b95dccfcf95ebb9c8217"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","13f8a62f7bcf38744833aa575755c115"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","74dc6e08463e504764f125ddff29dd08"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4f11a22b4c5462fd51b56911515a9978"],["/page/3/index.html","69d66bb06b1baa50756fa31894c26ad2"],["/page/4/index.html","8e9f54ad9074136e057c820266f6392b"],["/page/5/index.html","feb19f93e1b4123dda442088b78a2714"],["/posts/18bf100b.html","85e02ead1e552c28cf7cdc00c8c59014"],["/posts/1fcb7e57.html","cce3ba62c7e9307142b0dbd80422f78a"],["/posts/254393f0.html","6e275af3b091bdc2d7e5ab77f106caf1"],["/posts/28b3fa6.html","541acbe270f550957af41283defc329c"],["/posts/29f0725f.html","6ef86835e51fdebbfe242b5b46a4445c"],["/posts/31c36041.html","33a7912fd945611578fe68dcb43e5ac2"],["/posts/3513a7dc.html","d94adb7d29f957b1dda99c9bb4b50762"],["/posts/3e69d26.html","5db317ef29bc1080b51bff1d1d139288"],["/posts/417de2f1.html","7cabaf4f5959942bb74d7b668ea7f4f4"],["/posts/458f2701.html","f715b36a714365fa3df644c88ff1ed17"],["/posts/4e6d3c3b.html","237d098ceb6515f48fb993b789a152e6"],["/posts/51361b40.html","b056ef22edebe44f1bfc3203779b17bb"],["/posts/5413be0e.html","d68d012ab269bcde84d9d91f78f433e4"],["/posts/5596f2.html","039213b08fceb82e97edcc4d06411f5c"],["/posts/5c81b531.html","1b233433ee31ff0d6e7bd7c5c8bf9997"],["/posts/629aaf98.html","f5ab4dde4b0570d9c8155419d471cc7e"],["/posts/65c29e.html","73eefa0f6df931ca8a6851af2e2f8d40"],["/posts/7105be24.html","33a3e2986af559d07558e7774cb87a9c"],["/posts/750cb0cc.html","151891ef4ff313082d5aea05fd6af00f"],["/posts/76897b5c.html","5d86b2fde3286f515fe2fd01cdc75994"],["/posts/852e85aa.html","7aefde4be7544ed93e0ee59d917df8e6"],["/posts/8712b9be.html","1ebe420885eba199908e8a0126a130f4"],["/posts/8e1cab8e.html","c999c8013470ee3c67b2a7ec290d217b"],["/posts/8ebfad52.html","b99b2207dcd3af098b25e08c97fbb034"],["/posts/8fd19ba2.html","4c611c54ddf354dacbc60d78bcc9be57"],["/posts/92d0de5b.html","d3d843238ba26365967c00ee8bfcf98d"],["/posts/9e3d6f34.html","5b5158c0a9818c43bb9c9e473ee862c7"],["/posts/a25a408.html","73d69ab7444c4b8053b80f2ea6a17984"],["/posts/a6b15897.html","83f500952107cfca2c9cd0902299387a"],["/posts/a9867134.html","c577144a3622ba135222ced7307d33c1"],["/posts/aa351366.html","ffb64bd63f22dd52c6d5323f3b7c7e3a"],["/posts/b42f7f50.html","86ee082cb5937b7a48c9de51e3ab861e"],["/posts/b492def1.html","caca6192eaa4c98747f215262a118706"],["/posts/cca6755e.html","7fa395d9d56ea395ae418805dac6befe"],["/posts/cf1cd846.html","7bc7333e38edcabd1de1d41bec4e990b"],["/posts/d6a434b9.html","2d6a0b1306f9aeb91ff27c8d1ac3b369"],["/posts/ecaa32e3.html","9c3f46a9e10b5acfbecf857e71d93b9f"],["/posts/ed8ba887.html","83d959232e15568ddbd169208522a944"],["/posts/edab46fe.html","eef0b5e5cd4797719ae7f4e23aac39fb"],["/posts/edd0080.html","d25f38f6fede93276a6fe1bb1a13094e"],["/posts/f2f795cc.html","08f67db3a8eb0b048cf3eb6dc0bbd34c"],["/posts/f7c947df.html","95cda5355f4d8546ea0d3a1ddda81dae"],["/posts/f7d3a65a.html","ecc26ac87b7d590cdfb8d2db7a70e65e"],["/posts/f82b2580.html","05b6017a21a2f75bffbfa0d0834d1595"],["/posts/fac97174.html","ae87da43ba9ec48cb54015b3da41f938"],["/posts/facab7a2.html","7f1c3d0937751767883c0fb4e0b86de8"],["/posts/fdab9a5f.html","80bedb55652d421e22b89959c2255fed"],["/posts/fffd9e73.html","1fa3f5555b2e7c17bd7f9c465b713a44"],["/posts/undefined.html","9d75515f7af9250a34b7cd07f6c6b49d"],["/sw-register.js","194c70af3a6b45c71c9be38aa55c88ff"],["/tags/Git/index.html","e74a0fe3ca96ca031b1b28cab29c2fd9"],["/tags/IDEA的基本使用/index.html","3e02ec2587b87387724f7b058a5162b3"],["/tags/JavaSE/index.html","33690e5e1a365c8149d3368cc3cf4f84"],["/tags/Java基础/index.html","9783e0228bddce75b7db16dee517f9ef"],["/tags/Java课程作业/index.html","15be73d232fbef4b4f2b723ac1a2db87"],["/tags/Maven/index.html","0771d576839fc81006c9e78cf8a1cd40"],["/tags/MyBatis/index.html","da49ad2932f8068524c151407a43d46c"],["/tags/Mysql基础/index.html","2a7b823ba5920d109f445ef0dc581ebe"],["/tags/Redis基础/index.html","920492f100e3d50e07836b4f394110fb"],["/tags/Redis实战/index.html","8dcca496ab922430867cd0773a68bfcb"],["/tags/SpringBoot/index.html","81f4910ce26bf9942d964aa80d2b9c3d"],["/tags/SpringBoot项目/index.html","5e7a55dfa190df16bf6dcfe899ce227a"],["/tags/Spring整合系列/index.html","b236ddf4cfbb517236b15dae8dffebe3"],["/tags/index.html","189c467862eed916a585385ac36887b0"],["/tags/redis秒杀业务/index.html","d20f5c22b67655e31904f82b672da2a9"],["/tags/响应式Web/index.html","c0fcad80fd71dc1cc91cb1ffb667f61f"],["/tags/思源笔记相关CSS/index.html","afee8400b119b3c65295484afc1569a1"],["/tags/我在人间凑数的日子/index.html","029df9817d530a38fdc73cd3e7306ef7"],["/tags/操作系统/index.html","71be713fc604374887ce785410f3458e"],["/tags/数据结构作业/index.html","db24b1bf1e0b0de194b9b17a3e79dba5"],["/tags/碎碎念/index.html","a08bac2d5a5580d6522bcb101201c111"],["/tags/编程和环境配置/index.html","695673a459333aae75cd448796e15176"]];
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
