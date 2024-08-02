/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","179cc8a1358c1618ba8dc4ff304b198b"],["/about/index.html","c82ed7fec1fbadf0bc66e28803ef9a8c"],["/archives/2023/11/index.html","0c2b2bb99124026919f54c316dd0ad1c"],["/archives/2023/11/page/2/index.html","3b30965d34acba223095ea8f7e4ceabf"],["/archives/2023/11/page/3/index.html","a294010635914483adb964a6cbc5ac5c"],["/archives/2023/12/index.html","c81c70bdd6edd0003b76735089e9de3a"],["/archives/2023/index.html","e9bc423d394de5fd93bc8d810bd399cb"],["/archives/2023/page/2/index.html","f7a986535a2fc1deecae25121dcff8f7"],["/archives/2023/page/3/index.html","b2df82df1c47b3f05612f0c2061f22a8"],["/archives/2024/07/index.html","d52ad0e998e26aa7c5e0c56176bb8ae5"],["/archives/2024/07/page/2/index.html","41c7efd3b0d25552b4cfe8e97f1a5ee9"],["/archives/2024/07/page/3/index.html","39efc22415635b09048e7ca65e070466"],["/archives/2024/index.html","8853e91ca4fc939e5e8595d4d9fbef4f"],["/archives/2024/page/2/index.html","ad5a4ff8fe4dcdb009baeb9a10f9f7c9"],["/archives/2024/page/3/index.html","a464f076c5fc8d43bdbc306c39b24d59"],["/archives/index.html","22c201957c6d4f409cac78af6daac9dd"],["/archives/page/2/index.html","91e8f457a29e07c6891ac7329bff79cd"],["/archives/page/3/index.html","907d44c0ebc43d69ac2d660ef316feb7"],["/archives/page/4/index.html","ffe223289f75a19a5825d837e05a9357"],["/archives/page/5/index.html","3efa8759a5982ac3164a5b0354063c06"],["/archives/page/6/index.html","b4a78228a6e6dd042abb2ba1d3925ebf"],["/categories/Java后端/index.html","5ab911248747ba0c8713093fcf5ad9b0"],["/categories/Java后端/page/2/index.html","f146d24bca8ffe413888b9834c1e2ed9"],["/categories/Java后端/page/3/index.html","402275403c5511bea5e616ef4d77e368"],["/categories/Java后端/page/4/index.html","e00be7747948190f35a495fa23e2fa9f"],["/categories/index.html","e760761cba93b576181ef12eb6dc8f51"],["/categories/友人帐/index.html","50eabc585732d24db624b8e5074fca48"],["/categories/思源笔记/index.html","4555fa5afbbc4d60f38ab4eecb30be8a"],["/categories/版本控制/index.html","72c48332d6250ad453998a0d7f09bb5f"],["/categories/考研408/index.html","af4f7f3357f987cc4f0ad1bc14bc7f0c"],["/categories/读书笔记/index.html","9c1ede6c1318af8f83b0176d99d11e7c"],["/categories/软件工程/index.html","bc209ec4f089f792941cb146c05a454d"],["/chat/index.html","9489059446f0dabeb8a2e3aa255edad8"],["/comments/index.html","a29287f6e8383c472787846fcd1c6e93"],["/css/custom.css","6f173171fbe4ed0cd8993c5b7c6fda88"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","648f15bb1b2f5441585476284e321a9c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","8b5128d2f3566f414e19551cf8037301"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","691588f0d181e733fc4c854c4fc14ff6"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","f93632ae4d2886cdaf7c624605132a0c"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","cf02950734a9dbeeda1ac61b28583bf7"],["/page/3/index.html","7177a102622acd64df11d136578b4daa"],["/page/4/index.html","56c364fcf0b15206ebabd6cd4824a695"],["/page/5/index.html","a080972a093c91541509b481540f1318"],["/posts/18bf100b.html","3f6544fa86c3641a09de20308603a954"],["/posts/1fcb7e57.html","acda35aeefbc99f1184fac6d3961a246"],["/posts/254393f0.html","91168eff68f07efa77bd5168f6bec0e7"],["/posts/28b3fa6.html","6b08b50068a0c0603a338b691a8aa10f"],["/posts/29f0725f.html","fda6f3644174dd864b112d65c49a4758"],["/posts/31c36041.html","4f392b007bc1e7cde6fb82d5acb1c917"],["/posts/3513a7dc.html","d1eb6f7b06054989e9e58a60b7609778"],["/posts/3e69d26.html","8baf1f2e4b70496fdf4995d799704aee"],["/posts/417de2f1.html","0252159fa7b9946cc9e57ee8fef99640"],["/posts/442fdc66.html","434ad73b8dba6a7d7de9cbd5709a2893"],["/posts/458f2701.html","c56c26920e16e6629906090d73b2aab4"],["/posts/4e6d3c3b.html","06b137797bc5b0aee0fe2d4631f27cee"],["/posts/4fc13381.html","269a2a0fe04f53678a0ce4ced65714ca"],["/posts/51361b40.html","c7e6dc6f5281216c07a4905d5cb1259b"],["/posts/5413be0e.html","ea9e70aff92a9ed954a989ea60b62259"],["/posts/5596f2.html","36d7ed4d6d0cb424376d1d81655a4ca5"],["/posts/5c81b531.html","f9cf42d24bd99178bfc52237ae73a466"],["/posts/629aaf98.html","a3f302c2d33b985e446d3110ddd7482d"],["/posts/65c29e.html","5fd08a7ccadaf27d1991333f74d3c3e9"],["/posts/7105be24.html","e2a92d12fdcba4ddbff808172f416ede"],["/posts/750cb0cc.html","25174b30d58a316e35b2025f1b903802"],["/posts/76897b5c.html","bf009b22df30de587b75d35bcd888ad9"],["/posts/852e85aa.html","77beb87313627c51742c8f6c0e1da280"],["/posts/8712b9be.html","e25b5d57c1a2f25ceb969239117c0c72"],["/posts/8e1cab8e.html","98362b77de42f372db4778f123d81193"],["/posts/8ebfad52.html","aef2020616f1b112f3b8dca231415ea6"],["/posts/8fd19ba2.html","8d0e09e3412e4e38a65f13b6c070a84d"],["/posts/92d0de5b.html","4781a31674e087f8910d0dda1513b49b"],["/posts/9e3d6f34.html","b7dcf8af4ba367d3a6ae425eec5fe48a"],["/posts/a0708e01.html","57f70bb5f1f7dadbc2a091f52532179d"],["/posts/a25a408.html","d7cdd2c9ebcada9f54d9dcfe1cbd4478"],["/posts/a6b15897.html","4f8b264c18a73bcf5e1e6c3b07c5f232"],["/posts/a9867134.html","5ef4d4aff7ec340e9a449347ab21188b"],["/posts/aa351366.html","f37c337702127ef82eef1c7a2af70375"],["/posts/b42f7f50.html","08a20a7500037a3b8f8a281765bc54c7"],["/posts/b492def1.html","d28ee6b08d75aeb5bcf06e8c0b8870c1"],["/posts/cca6755e.html","709c7df75c8afd08fbf4c64c95257af0"],["/posts/cf1cd846.html","eeaa20b99d96fcd7a1a14d96429c7626"],["/posts/d6a434b9.html","e7785c24a82693141f222484c3f792f1"],["/posts/ecaa32e3.html","a8207cfeed147a8b666971cb8b52e093"],["/posts/ed8ba887.html","d6c905f520454ed6907ca019285fd362"],["/posts/edab46fe.html","84b444e43d1287ed8a0b4506c754936f"],["/posts/edd0080.html","fbe2e9eda06aafaa7b62600e71f51113"],["/posts/f2f795cc.html","c0d92d7cf8f414e12a1f4f9f18db1969"],["/posts/f7c947df.html","0a6c78776bef729279b6ee1e19bb954d"],["/posts/f7d3a65a.html","c96b148b895a2e7ebcaac2d0a6bd3884"],["/posts/f82b2580.html","d74e0bfedfb4e298c96499fa039ed746"],["/posts/fac97174.html","0ff444ade369950513156e1f9501b890"],["/posts/facab7a2.html","f40c5e60d1ee9ceef307c76ebc72fde6"],["/posts/fdab9a5f.html","c7c3cabae8f0fb96930f042c0eff6fe2"],["/posts/fffd9e73.html","7f175587c657731c73551efa91546d92"],["/sw-register.js","743921bbc9f69a6b21f7883a3a276fa4"],["/tags/Git/index.html","aaa7f61f81d4ef75ed0e77d24571e7a8"],["/tags/IDEA的基本使用/index.html","c18bc9ac736cd3eadacce1ffbf349a07"],["/tags/JavaSE/index.html","a019ad5a510484495952ee8dc5f6890d"],["/tags/Java基础/index.html","4e061a940e0bfb8994a79fc47cf417d1"],["/tags/Java课程作业/index.html","f4162ac2e1bd94acebbd8180a047496a"],["/tags/Maven/index.html","91046245ad1227648a3036e87a196e5b"],["/tags/MyBatis/index.html","dfec9d779e4d04f34f532848fa75458c"],["/tags/Mysql基础/index.html","07d2548b44566678b6a908eb3449073f"],["/tags/Redis基础/index.html","14fcde148223b00818d8b1f3894b08bc"],["/tags/Redis实战/index.html","bf2e21d8d7ad041ce62ab5bda5ab65de"],["/tags/SpringBoot/index.html","b13396d70864395bfc0b3e63fffde8f5"],["/tags/SpringBoot项目/index.html","ed750abc7846d8a05fd5cf5efe6ea3a9"],["/tags/Spring整合系列/index.html","e0237200b03b5f21c0fc4936a20f392c"],["/tags/index.html","73465dcc08a8c2d522268376ef095795"],["/tags/redis秒杀业务/index.html","92662da3616f0b3b685366600b95074f"],["/tags/响应式Web/index.html","25983cd6266a7b2edf91b338e5a00a05"],["/tags/思源笔记相关CSS/index.html","cc33b2ab68e6be44730c5e946d7aebeb"],["/tags/我在人间凑数的日子/index.html","3dec21eb2794e5bb001b47a8c6e2ecc9"],["/tags/报错杂谈/index.html","e5f2ba92a564cb3d7e3456ffe0d1e406"],["/tags/操作系统/index.html","883bf19cccd7e01ee88410c254cb0274"],["/tags/数据结构作业/index.html","c45ca39dd66ceb821ca33de56f3856f7"],["/tags/碎碎念/index.html","4b0d25d975929259b707f1472be42873"],["/tags/编程和环境配置/index.html","5099fb7a885ec53482bb062cb70eba11"]];
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
