/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5b681c7bdbea5117182136b5b50aa6f2"],["/about/index.html","7879e0745332a0895f8ee78b3434214e"],["/archives/2023/11/index.html","ad8da8be66d435194681ff6fb80c374a"],["/archives/2023/11/page/2/index.html","8639ef24c1d63e91bd7a41145f56a59e"],["/archives/2023/11/page/3/index.html","73186887a0c82151bbc534bd850ddf20"],["/archives/2023/12/index.html","6a13a74ebe76f55cad42f1e1766d3a70"],["/archives/2023/index.html","c5cfa25eec64717cda947d23b6de940b"],["/archives/2023/page/2/index.html","75a440db98c630c5a98a2a4a475f23eb"],["/archives/2023/page/3/index.html","82573e61283060b6bd624f88e7cfeba1"],["/archives/2024/07/index.html","9ca6f881c948ac6681ed9fc97f4c1117"],["/archives/2024/07/page/2/index.html","708d580559e90f054884144d26f12b13"],["/archives/2024/07/page/3/index.html","29a6d1cf62cce299312996b64f4e3f15"],["/archives/2024/index.html","9936b7f1eb21e06589a3c9751d23135e"],["/archives/2024/page/2/index.html","3a4d380b28fa9ce0bf6e0f643739de24"],["/archives/2024/page/3/index.html","2dabb7598250d1459d1bf51fc993e57a"],["/archives/index.html","b2e5f1b187945777db27130fda04ffcc"],["/archives/page/2/index.html","c0b30b3f333e6c6571362d77547f817e"],["/archives/page/3/index.html","7a4047e3a800cf2f907b2a3c8008c03a"],["/archives/page/4/index.html","6ca27e30b3848d50fbd3ded1c1dfb8a7"],["/archives/page/5/index.html","dc6ab3502258d21f8de560c6a1c6c98e"],["/categories/Java后端/index.html","b4392e1fde64255ebed304d24e366b67"],["/categories/Java后端/page/2/index.html","9d51b51070547b53bf6cf19fdb34a041"],["/categories/Java后端/page/3/index.html","32476c335203199edc713eeb9e016237"],["/categories/Java后端/page/4/index.html","4065fffcb3951d636916e6c1118a3580"],["/categories/index.html","19aed46a1f15da43448f7ab0145dc286"],["/categories/友人帐/index.html","f24d530ba26e5d40167d0ed9e44ee154"],["/categories/思源笔记/index.html","d055779a71e15d9c6ef4618a0a7161fb"],["/categories/版本控制/index.html","41ae90bbd91b8b6e89c7e126b1839550"],["/categories/考研408/index.html","5430a2f11b4a0126617361501c506ccc"],["/categories/读书笔记/index.html","1be355259ef69340a3dad0f4567f1ac5"],["/categories/软件工程/index.html","8a74da1756c8ced7f9db1cb53ccaed1f"],["/chat/index.html","022f011b369cc2c9b7577cc5e57a2361"],["/comments/index.html","ab87c5c50ac1ca4715ab45f8a63615ff"],["/css/custom.css","5d99d369d0267bdec0877fdd825db47b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","6255b9cbbc8a73bb2a4111835ae32ef9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ba83f8b0f5da0fbb00de6442bd8b0c32"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0e4be9abf4441dd480e79bfc8b89d1e3"],["/page/3/index.html","47325121bde71b475a69ce04d9b5b27a"],["/page/4/index.html","1d70e6b61b72788a91957276ad602062"],["/page/5/index.html","01b0fa7dd46f0ae19fdbf2b7f21c9e30"],["/posts/18bf100b.html","fa44c52d08d0793d31eb8eacb64b7421"],["/posts/1fcb7e57.html","5e132dc1f17bc73c66857f379c7338b2"],["/posts/254393f0.html","2e8507bc5386ed26c9461862859f8307"],["/posts/28b3fa6.html","6b635835535e9212dece173193aed82e"],["/posts/29f0725f.html","719c6925690113611f6d22505c78fbdd"],["/posts/31c36041.html","a6f40ba566ba53709652b73425b01897"],["/posts/3513a7dc.html","51c836fc340cf78cc3d4d722ad7b5850"],["/posts/3e69d26.html","7b42a21b0830d92124cd22f0c9baddce"],["/posts/417de2f1.html","2915ddd6d5d290ada1d62c4349681d0c"],["/posts/458f2701.html","a4d1d8bacbc17b19e60749013362a72e"],["/posts/4e6d3c3b.html","b9c8b0ea2161b042799d849aabd3bc7b"],["/posts/51361b40.html","22b9c0e28f8b17c687387523071dec9d"],["/posts/5413be0e.html","1b9ed6a96fc94a33eb53c728d90f8807"],["/posts/5596f2.html","7b2e7893c8cf358c3b5fda5de759f474"],["/posts/5c81b531.html","b78c77ce8471f19205d6e3a2e2a402ba"],["/posts/629aaf98.html","dd19a9aba6eeea0d5141eecd620531c0"],["/posts/65c29e.html","62b4ce80a9d1bd76b2299027d7d772a1"],["/posts/7105be24.html","abfd688382d687419a24d6b606eed505"],["/posts/750cb0cc.html","8b3372b3f00d047913292964ed30342e"],["/posts/76897b5c.html","e404407d02ef6a60e8097f13990ec6d2"],["/posts/852e85aa.html","3965da3eb66dda80912749d06c657c5e"],["/posts/8712b9be.html","160b9fda59e862011a9bb2f80eea41aa"],["/posts/8e1cab8e.html","7fcd72791cf57607bca3a8575bf1abc6"],["/posts/8ebfad52.html","7ffbbb28e653002ca8a0d59754294428"],["/posts/8fd19ba2.html","ce5d39fa605e0911e2dc2e8f80982896"],["/posts/92d0de5b.html","6a74b6abba84add80cb7b72e5b851672"],["/posts/9e3d6f34.html","16a00a2ed8237cfefa28ec7997c6080b"],["/posts/a25a408.html","aa193d6fa199a9f2a00387b810ce7a37"],["/posts/a6b15897.html","98e57fd890928f7d8756876e96590fde"],["/posts/a9867134.html","e2c31c7a91090d40dea1540c3fef57d7"],["/posts/aa351366.html","480c65001a81cc674d2ef1a50cf4f346"],["/posts/b42f7f50.html","0c6d8beb0bc8660451f00f9a0864697c"],["/posts/b492def1.html","58c297d596ba90fb16b41ce408708461"],["/posts/cca6755e.html","7509fb681879615068f3a051c515751c"],["/posts/cf1cd846.html","22e5631a9d0db6a2cd80f3e12f5dba73"],["/posts/d6a434b9.html","1f36d43ed18b059ef12539e9b88ab406"],["/posts/ecaa32e3.html","ae3ee2af654728f3e402a1a51d0abcf5"],["/posts/ed8ba887.html","e23237ae541dce7647983db211453fe8"],["/posts/edab46fe.html","62430ace6a75e4005a8d4284018f7748"],["/posts/edd0080.html","a0653e5384e81fcc52eefb7d0c5e93fa"],["/posts/f2f795cc.html","0ec08a401e2a480d3ecf49d5688e3c6a"],["/posts/f7c947df.html","08df819931f9b861231be01c6e456e0a"],["/posts/f7d3a65a.html","b0213682439d21ee8bce46d72d10f30f"],["/posts/f82b2580.html","58545f344d369b9849e1d8a2f7cb312e"],["/posts/fac97174.html","913f39098e255837f24e39ad00d3757a"],["/posts/facab7a2.html","9e6e91b5d725c1a440b578a162bc8cef"],["/posts/fdab9a5f.html","a6a075a21ee0888a6540b9a822de4032"],["/posts/fffd9e73.html","ed328f98a0b48eecec729e27c7702caa"],["/posts/undefined.html","62d774bbc08682adb4fface720ba9842"],["/sw-register.js","ddde5be6d10fe30a32c1814132fb99ff"],["/tags/Git/index.html","2f0a186b375b25fa4448eb574ae0732e"],["/tags/IDEA的基本使用/index.html","ae4798912908488980a7c1d428a7147e"],["/tags/JavaSE/index.html","f97454610b2915f28c0593052a530166"],["/tags/Java基础/index.html","a1f695653d3aa317f626ef1dde33647b"],["/tags/Java课程作业/index.html","84f6fa0285ba1a9226b4dcf16109e8c1"],["/tags/Maven/index.html","989802e0dc723847499b4c3e811669ac"],["/tags/MyBatis/index.html","a593e9279f95e442144d133610443482"],["/tags/Mysql基础/index.html","b24bd788bfcd93235d60c3f126c152f1"],["/tags/Redis基础/index.html","3c9e069a066d30183deca05d66337a3c"],["/tags/Redis实战/index.html","3b440317b3c1ee55858fc1790d8e794d"],["/tags/SpringBoot/index.html","5abf12c64708de696527ebc887acb354"],["/tags/SpringBoot项目/index.html","fa01446d2aa20e12138a2a9b4f8257bc"],["/tags/Spring整合系列/index.html","f29d60ea214035d6147d984c1240ea72"],["/tags/index.html","86db60666ce8b65460c21e4b1f51ac42"],["/tags/redis秒杀业务/index.html","e642a38ff7cf2af0fc9dc17f3f8c88fa"],["/tags/响应式Web/index.html","969f100606eee4cfdc14de43f506e673"],["/tags/思源笔记相关CSS/index.html","48b16c4ffaece6a69307af8e3da2c092"],["/tags/我在人间凑数的日子/index.html","38bb8497f93efbf683f02c55dadb6313"],["/tags/操作系统/index.html","0cb3f538529110a2c0c7187152fea91e"],["/tags/数据结构作业/index.html","88c6896e95b5456815259e986f9b31d5"],["/tags/碎碎念/index.html","a32fd57871eda2e4e5e680bad1cb63b1"],["/tags/编程和环境配置/index.html","d8b35065e6ee440f6113047abe249cd8"]];
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
