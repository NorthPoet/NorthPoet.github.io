/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9e358c4f91c8f858d4f60781c44625b6"],["/about/index.html","df7f0377be8be9b0a96a609d252fb77e"],["/archives/2023/11/index.html","98f41b2de3a97234defe64e416ec9562"],["/archives/2023/11/page/2/index.html","f1fe7fcd8089b70d1bb5dced17f7b7ee"],["/archives/2023/11/page/3/index.html","e3b265a1157c1218c58353b1f906e901"],["/archives/2023/12/index.html","36460146b66046323889fb65ad89ec9e"],["/archives/2023/index.html","9844aa390c7db29bc51b5206d5ab6a1b"],["/archives/2023/page/2/index.html","1dc8400ae3e8f03badf5862a4f6331be"],["/archives/2023/page/3/index.html","888f85ade6254efe28a7716aaf0e8f76"],["/archives/2024/07/index.html","087690028947c57a43e2e015d40d162a"],["/archives/2024/07/page/2/index.html","22b95fe124a1a66ad1ecdb06d2d7b907"],["/archives/2024/07/page/3/index.html","a1b70e5c93f89d161496354c7888cd3a"],["/archives/2024/index.html","cc52de2b5aa59a0737b76f0ad171cf1a"],["/archives/2024/page/2/index.html","2cb01d7b54bb52468ae5dc4be05295d1"],["/archives/2024/page/3/index.html","7fc18cbcd11b1dd5436d805712da76d8"],["/archives/index.html","988bb4a0119ffb7aabf2fb291abae12a"],["/archives/page/2/index.html","0a8cc4d7670b1b7735078dae559d9c28"],["/archives/page/3/index.html","52fc4a4bdb5382158c43fa9db10f36a8"],["/archives/page/4/index.html","59d766dcd3c77f39a0ef6afe9ca1a639"],["/archives/page/5/index.html","6a69d05044b6871d8d412445efa6dd04"],["/archives/page/6/index.html","cfa63cade3afc6f325f1baede7e35c91"],["/categories/Java后端/index.html","d693eaa033fe22b56e4cacef6e899c4b"],["/categories/Java后端/page/2/index.html","222e098188f568f82d8e393602930550"],["/categories/Java后端/page/3/index.html","e8c1dd29a0bceea4c31099c9fafb2607"],["/categories/Java后端/page/4/index.html","775587bcef62593d45c3e53ecab752ad"],["/categories/index.html","f4f5dff77d3f140340e31ed46197e4cb"],["/categories/友人帐/index.html","6edbfb7a0163b577cde5b747f9e286bf"],["/categories/思源笔记/index.html","636785d4dc8804093a9fcfdb843a3608"],["/categories/报错杂谈/index.html","d2ebe7327fc151d7e0e9e48989604df9"],["/categories/版本控制/index.html","49a0cac20e786af212298d8f90008195"],["/categories/考研408/index.html","508c5fcc1829b30fa01d71b84b8712ba"],["/categories/读书笔记/index.html","c6c16a1353fb87eed4708416aeaee1bd"],["/categories/软件工程/index.html","120f779211482771c0fcd054fac5279d"],["/chat/index.html","2cd08fc1da09e5092c10fe2c88a359fd"],["/comments/index.html","11b9dbc87a91fcebfe966dd678986253"],["/css/custom.css","c19b709a7e08f3cc8f976ff4d554a0ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","58728270fa1e9bb245e51c5314eb2f62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","189b253281118ce0f1835ae0b0a5f293"],["/img/back.jpg","040110bf91a9ff239ae76adc7e1e4706"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/north.jpg","f2e836c5ea76beaf3f58f13c49ca978e"],["/index.html","03a7cf4afcf6c76de4f3f5e9b6caf2ac"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/timeline.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","543e33e827fe8323174561ef8461fdd1"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","a120025ab74a16d779beedeca8426a2f"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","dfdd641d52661ce51901fbbe2cdb2887"],["/page/3/index.html","9fd76e09c592e3d8ed57f8b7dac42b48"],["/page/4/index.html","71dbe5f2ca0ded296ef631f4f2cd1bb3"],["/page/5/index.html","33e29c831c7c172036be9530fc2f10a4"],["/posts/18bf100b.html","7353c4f784e03e05618d16cf8dca8a63"],["/posts/1fcb7e57.html","f340e7d00e4535c86230ccace2c73892"],["/posts/254393f0.html","1b177afcb04f4d014f57e4158e639cd8"],["/posts/28b3fa6.html","5395180e1ab9184d5601596d6f4c8dc0"],["/posts/29f0725f.html","b6d118a7045e8bcfb182e713c08fc69a"],["/posts/31c36041.html","2de5427abd0c1b91302a64640c45d3ec"],["/posts/3513a7dc.html","fdbaa6eca6d44c7f01feec0774131287"],["/posts/3e69d26.html","f4cfe9bf3a139f223cbb9e9754b66133"],["/posts/417de2f1.html","6bcffd54be431fe8a1887cfd7b74474e"],["/posts/442fdc66.html","02b3e70d57142476ba8ebca329d86efb"],["/posts/458f2701.html","a6041a132af11b80ef29d248a4aa07d7"],["/posts/4e6d3c3b.html","887acfeda78a47bf4f1b71dc785b8b47"],["/posts/51361b40.html","cb3ebb9881821802930644de21895db2"],["/posts/5413be0e.html","593ee08ab07bb632d5f0c0f7c120f648"],["/posts/5596f2.html","25d9c0f31ff2a0e838de660e471261cf"],["/posts/5c81b531.html","6f667ca3240646fbb95939f61eac6662"],["/posts/629aaf98.html","380cdd80f960f4dffb329c520d8e28e2"],["/posts/65c29e.html","7bf96d36b4a660b9e19ca81d193c23a2"],["/posts/7105be24.html","5bc6908861b9ae1362a8615447de936a"],["/posts/750cb0cc.html","1d1d1be0dd30d70f0bc0d40435cd98db"],["/posts/76897b5c.html","d8d5e42150e9bd7ac5ccf755117f650e"],["/posts/852e85aa.html","10482dbd03b753eef2279cc4213c7b31"],["/posts/8712b9be.html","9bb67d3461e75c31bbbedb0defa6b0c8"],["/posts/8b91221e.html","5f45d3a84bec4892f79bdc340190091f"],["/posts/8e1cab8e.html","8c4f82864f712eff6b18f6b8a5fddef1"],["/posts/8ebfad52.html","4f49045bb01d222041010e996d8b24b4"],["/posts/8fd19ba2.html","f3e759e72d17494129321d7411df2661"],["/posts/92d0de5b.html","47cc0bbf0a4bc16a5597529e76222081"],["/posts/9e3d6f34.html","31bb182c61ae105e7ff115649c18a187"],["/posts/a0708e01.html","bf5c61a532e518846061d2ea0004f7de"],["/posts/a25a408.html","74534071c6dcbf7c6b02cc8297464c5f"],["/posts/a6b15897.html","1fb0a594e6b635e34a3c0ffa268c84d8"],["/posts/a9867134.html","e717c00e955ddf0785d6418663d485b6"],["/posts/aa351366.html","e53cf7509629de456c3ad96c6faf1b98"],["/posts/b42f7f50.html","793757da8a61f7ad1413a900008e0cd2"],["/posts/b492def1.html","80c406ec521d75b6eda981649cb0ab92"],["/posts/cca6755e.html","04d3c2566fbadf0d90f9c11baa913bea"],["/posts/cf1cd846.html","3e10817b23b7a224da439fc0312bc93e"],["/posts/d6a434b9.html","75dbfd8b604b4c122eb5a743a28f938a"],["/posts/ecaa32e3.html","32d6b770e954f38770f791c10612faad"],["/posts/ed8ba887.html","3cdf88c84ee61d9644a715c1cc4ed2bf"],["/posts/edab46fe.html","13b216a2ff81858ec8954c25b65665c0"],["/posts/edd0080.html","7cfdac8053e26c19cdc38feb15c7f9d9"],["/posts/f2f795cc.html","59eaff362a28ef5870d48fdcbb557f5b"],["/posts/f7c947df.html","2ffd8beab12d7f5171d5a4128860575e"],["/posts/f7d3a65a.html","f5a9984c7aa8435a0460d0c8f8a47ae7"],["/posts/f82b2580.html","b7053e809ed963ab4ec4c5418016b517"],["/posts/fac97174.html","be0f26f8138ded78da680dcb61219c80"],["/posts/facab7a2.html","1dfb902525ac120a1c2ec2729491ea23"],["/posts/fdab9a5f.html","d405f9f47fed2e8f617306501fe0fe12"],["/posts/fffd9e73.html","5486cd4c2e4676b640d3d9e83989a524"],["/sw-register.js","88e12d41748ccd6804737ff0248dc18a"],["/tags/Git/index.html","c9273b1aac77fbd3014c060b8d65308a"],["/tags/IDEA的基本使用/index.html","73bd4d9eb982031853b38e891e71a881"],["/tags/JavaSE/index.html","755618fd299ce8d02d2111c3f5295a53"],["/tags/Java基础/index.html","37e328d2aae14f623ee19a574d889fb2"],["/tags/Java课程作业/index.html","782b7418f12a26b4de22f6a628518a73"],["/tags/Maven/index.html","de5348357f9221a499650a55416098b6"],["/tags/MyBatis/index.html","ab06b56543729b8c56b5660e9eda085c"],["/tags/Mysql基础/index.html","0c58337186e87676a87a7b6181b9d55c"],["/tags/Redis基础/index.html","6f3f6dd285637f999092002b707588cd"],["/tags/Redis实战/index.html","0a769f5272aefc565778890a2b5dc40f"],["/tags/SpringBoot/index.html","989ecb61bdbdde1d5ee1c3a10021089d"],["/tags/SpringBoot项目/index.html","c910fc263c9a3fbd56908ef28c7aa61e"],["/tags/Spring整合系列/index.html","52706637e94b9ba69499a7f565e41d2c"],["/tags/index.html","c5c7aa4a5624a19b61a6384309d22306"],["/tags/redis报错杂谈/index.html","e56267c6f68a8e46d61a6ad1c7e66fc0"],["/tags/redis秒杀业务/index.html","76b036f19bd56528e4f8d77c56c9a247"],["/tags/响应式Web/index.html","4272e450872a666decc8c3128164d575"],["/tags/思源笔记相关CSS/index.html","8eabff3ad69dd5138d7111e7cbcd28b9"],["/tags/我在人间凑数的日子/index.html","142a61952324f85dc469f6d7a4f15a91"],["/tags/操作系统/index.html","a79bf4aaf5c52bee507417439070f26b"],["/tags/数据结构作业/index.html","8b05e1407a4488275f1d49508165ab53"],["/tags/碎碎念/index.html","c2281bb9a273a50dcc4fbfc6598977a0"],["/tags/编程和环境配置/index.html","798b3b18b751becd001386a17cbd2dbf"]];
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
