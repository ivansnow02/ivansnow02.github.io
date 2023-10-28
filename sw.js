/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","02529af6b00093df99b1ea989aa62682"],["/about/index.html","da274ca48048f396bbde6e6524e13a02"],["/archives/2023/04/index.html","fb8198f0b24ea3885cff4784156a505c"],["/archives/2023/05/index.html","1f5c05c7577fd6a195d9dc596cf2ece8"],["/archives/2023/06/index.html","883b085e99ae216d956edbdf014edae7"],["/archives/2023/06/page/2/index.html","161348df1511c6dd164868fc0a0a6ae8"],["/archives/2023/07/index.html","458b59dbdfaaf886659c621ceed57b0f"],["/archives/2023/08/index.html","3c7d7bb7fa6a68a0f10e538e5a3a97fa"],["/archives/2023/09/index.html","498e94a385494afd74a15bf7bab01aa9"],["/archives/2023/index.html","1c183a9e4f27857d85acf7034ddc648f"],["/archives/2023/page/2/index.html","859c6971ee92b913991c34eeef6be5ef"],["/archives/2023/page/3/index.html","0bcd2a53d507d0e846152feee0c1978e"],["/archives/index.html","8d0bbfb90448ca8dfa3f862f1d952dfd"],["/archives/page/2/index.html","e1dc9c82762f7b60e8e41e316dc674a2"],["/archives/page/3/index.html","2b5446f5072b1e4a1b74ef8bd25b4379"],["/assets/DataStructureMindMap.html","5607966fd99b0e2c3161f2d88fdf017d"],["/assets/DiscreteMathMindMap.html","51281dde8aac19dd7030a5161a9bcddf"],["/assets/LinearAlgebra.html","26703527a6ca4b2d7e82be0913ac7f63"],["/assets/Physics.html","563d5d596c252a4d95a96d72671068f4"],["/assets/XJP.html","37a5ed94c5ac14b286348c82d0d0493f"],["/categories/English/index.html","e1a469bff86f118f926843bd5744a3c3"],["/categories/Math/index.html","149d2807531ca3259060ecb975debe26"],["/categories/Physics/index.html","3fbf2cdec5dc7c0fb7fb5bc7cd23265d"],["/categories/coding/Django/index.html","4961460589a1eb0056eb1c57a29f1342"],["/categories/coding/Redis/index.html","9eaf11e824d62d3aeb448fd177cabf8a"],["/categories/coding/coursera/Algorithms-Part-I/index.html","a4118360d4e11353a2fcaf2f7bc37258"],["/categories/coding/coursera/index.html","0f3bd2f928d85708f9a6e7d717c1a011"],["/categories/coding/data-structure/index.html","8575e0b75c04daa0c5f1f130d0f0ef2c"],["/categories/coding/data-structure/page/2/index.html","1a1a1301c2157b1f0ab7d0697b59b28f"],["/categories/coding/index.html","e450cabbbc2a11253cbb7b3edf720456"],["/categories/coding/page/2/index.html","f4d477f72e7e311f7f836e78ed416bc9"],["/categories/index.html","4a3eb839e5cf606f1925b3cc1dc1b90b"],["/categories/test/index.html","e7d22e512871f8b2dc605df3be87cc6c"],["/categories/trash/index.html","d13ded3397a245d8a337a282963875b2"],["/css/custom.css","95f18e594dcd77079e5cbbe48ac7f250"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","cf9f8833b380a4a130bcf60dde627efc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/main.css","fd06f7ba0019fdb102710433ec11bf2b"],["/google4fee7949ef6062d7.html","af68f7cd44c1236bf7fc5005a55f04df"],["/img/784785.png","bf2bacbc1fbcf3164b8a488eb55e1882"],["/img/OIP.jpg","42c832988e15c0df8d58000b947c2c4e"],["/img/R.jpg","54c8f0acb7e42b37bd6d6f1409bc44b0"],["/img/avatar.png","7c857ac3d5e4056ab3a26e70e31ca1e3"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon512.png","c7f3ef06d19eb61b15bb4937cb8ede28"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/friend.jpg","ee6ee620a8ef7eb317d43d2e1a0d2d1c"],["/img/illust_107830061_20230512_135833.jpg","e712e7c6204f540f0946116a9bf83d92"],["/img/loading.gif","d037d39c753c47145f8e1de5ddeb8d1e"],["/img/logo.png","03dacfb887c5f9cc256f7e0714d7c8cf"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/redis.jpg","338c5b2c26ff0ba72394f4e44b08944a"],["/img/the_falling_soldier.jpg","d89d198ca0ebfde190a0e18260f37020"],["/img/vim.png","53ef7f0339bd238c164b36f9b5925028"],["/index.html","e0d565c6bccfd055f877ef3d6bdee69b"],["/js/aplayer.js","35a245ea681f6225c59dfb5ad8c79aa2"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","605f587be2ab3d36472bb03ac27ede65"],["/js/color-thief.js","421df21ba198d65ea583b8d878124e05"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/markmap.js","f6a3d576050cf14ffb0fae023598b645"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","c6f8cc6dda7c539803f3d4c7ee674d87"],["/page/2/index.html","42f3711af54dc43ef1bd528d33eca68a"],["/page/3/index.html","d3f98770e21e80d61cd6d178519267b0"],["/posts/12732/index.html","9edffcc1bde0995e485e9989b20b236e"],["/posts/14492/SDS.png","af7081fd6355d67bb5e250b1a2142e5b"],["/posts/14492/entry.png","bf9a2331c3333f72da87b0f16049898b"],["/posts/14492/index.html","db1747b7638f0a3c2371cb13fd77529d"],["/posts/14492/int-1682306725947-10.png","ca929c95925a3f57bd653285e2ae8d4e"],["/posts/14492/intset.png","7c51fa661d9362a313d560df9f3f9a9e"],["/posts/14492/linkedlist.png","2b9514b584f552d6c5d81afb6e1389f6"],["/posts/14492/quicklist.png","63f9056b36b576411fe437c6767d3bf0"],["/posts/14492/skiplist.png","ac1038eebae00d9eb1a72bcab0f3bcff"],["/posts/14492/ziplist.png","50d5172689ec6ffe38f92a11472cc1d5"],["/posts/15714/index.html","84d19953a1466104c305a1c0d4129947"],["/posts/16273/index.html","8f26aaf39e96f359013f708649cc8d46"],["/posts/16574/image-20230530103359493.png","88ccbd05b0c8c02e11d2c7521cbf869a"],["/posts/16574/index.html","978f6d4600fa66fc6a5b4600e2774a67"],["/posts/17687/index.html","5b3b387a2ec0ad91f6c8eaf1be2d46c1"],["/posts/25422/image-20230627150524180.png","b77d1599e0ac52018d3b8a0fa69cb566"],["/posts/25422/image-20230627150701546.png","6ae3b1864d17c8db9a5f13a404facf28"],["/posts/25422/image-20230627150853262.png","67f5584ea8202d7d5b4a4a69cb6509a2"],["/posts/25422/image-20230627151028143.png","cea29f83b80fc91641ff391cfccf3376"],["/posts/25422/index.html","7dc3bc947655d55aae41645552db7d65"],["/posts/28245/index.html","a551a096b33f2fa0b524243007e3dd3e"],["/posts/31475/index.html","d87149ab9110c6cf376043e2a415e6a8"],["/posts/31475/linkedlist.png","2b9514b584f552d6c5d81afb6e1389f6"],["/posts/33053/index.html","a5a3c452e967f5f08e4bb3d13dfe6938"],["/posts/36820/index.html","08a745f59188e1fcf83b215fb5b3ff20"],["/posts/37632/image-20230704173145405.png","9b3ba11810d4914842d589e981ac8e85"],["/posts/37632/index.html","c8630ef14149a698152f7e2f3c98b406"],["/posts/40417/index.html","cc8048b9204f3b5a70a8af301864bad1"],["/posts/40417/the_falling_soldier.jpg","d89d198ca0ebfde190a0e18260f37020"],["/posts/42679/index.html","a821f1da35438085786f02aed7382770"],["/posts/45419/index.html","8d301bd2f8a786c16d6c1e6ff935f576"],["/posts/45583/index.html","ea264164875b3f694c938d14c64a95dc"],["/posts/45666/index.html","090201f4ffeeb7e0c349628c1e648f07"],["/posts/46991/index.html","c30e680f2029845355f87cbf50c8dfdc"],["/posts/49742/index.html","7b823a0a2587774ae2135ba9d560d1c5"],["/posts/51544/index.html","2b0e2951a74c727647512471ddbfcb12"],["/posts/52585/1.png","1bf91e1aa67b535d04cf451b76400fb3"],["/posts/52585/2.png","5cfac40347a13958a97e5bffe9d6da6b"],["/posts/52585/index.html","c408fe41628571c1f7b43d1ae740e298"],["/posts/53823/index.html","d0f41cd02da23d03bebe810478bd2600"],["/posts/54039/index.html","eaee0ac13507e2722b1d45d19a38be36"],["/posts/55223/index.html","b70f2166d42de120a108b0ef61f9e124"],["/posts/56431/index.html","a5559b3d89016c1cffa3d84b7ba3e9d3"],["/posts/57769/image1.png","ab6c5a0f97e45380737cdc0167f5fa5b"],["/posts/57769/image2.png","b0fc1a7fa2c5a76bc6f214b1c58b8761"],["/posts/57769/image3.png","5a070b266a1a7afe31d4aea2ac3bb9c5"],["/posts/57769/index.html","7d5b643e66d09b024f9b0d98b3f19247"],["/posts/59964/1.jpg","931f624b668e6a4a53ed9df07d24e2b9"],["/posts/59964/index.html","adfd169a993856eb269534d05e7c707a"],["/posts/60968/index.html","54d35a29b629777e6979bd2a99fd1403"],["/posts/60968/vim工作模式.png","dcd25a6082e1989975c280213f3e1052"],["/posts/60968/vim键位.gif","acc327dfe0d5328c1ad102179c70b641"],["/posts/61809/image-20230521192309273.png","8df8fe0377360a67ca2f96f1e356dca7"],["/posts/61809/index.html","4d501f9d61b6ead132ff66cc139d717c"],["/posts/63610/1.png","bac5b3bb088bc4ca1ea167eaa06c6702"],["/posts/63610/2.png","c5ff34a6c6c1c499798dc05e1bbfa99a"],["/posts/63610/3.png","ed4283f71aa3fd7b8a528c6f45dd941f"],["/posts/63610/4.png","8c525bccc98512ddb216bd1173c52980"],["/posts/63610/5.png","64a638580284771f6ff46215be145f7d"],["/posts/63610/index.html","a80f08b999bc6f7c0293817a6f65c023"],["/sw-register.js","33fc1726308686719c091d7d18a3a220"],["/tags/Discrete-Mathematics/index.html","158ec00f7d4efd871bafe705ac37d398"],["/tags/Django/index.html","7013637494e1ae4f393d49e9f09029e9"],["/tags/English/index.html","66a9367ed92bc3e5c08342873b75b21c"],["/tags/Java/index.html","62c3f97395005b63cd172f161425e0e9"],["/tags/Linear-Algebra/index.html","e787d26f5aec95e8429199a794cf3172"],["/tags/Math/index.html","e49cd5360ef1709c9690e857db10ebd7"],["/tags/Python/index.html","eda3436669ebd0a98cda44293e97dbbe"],["/tags/Redis/index.html","7d28ab2749af34fc28d64cfc0f187128"],["/tags/Spring/index.html","63b035498256e32da64dd6658154ee9c"],["/tags/algorithms/index.html","67ccaa8a026e6bf427d27981c6e2ea55"],["/tags/coding/index.html","0293e5b882478eeff68bda31114d593c"],["/tags/coding/page/2/index.html","a24c4b7f7f443b3edc2223620338acf9"],["/tags/coursera/index.html","cb6e4655df890c4d19c20900f4f038b6"],["/tags/data-structure/index.html","207dd9bb21c5ddd8dc8652076284b404"],["/tags/data-structure/page/2/index.html","d670b16a5be267e451930e28c5e8dcee"],["/tags/index.html","b987addf37e6f7876a7bb9e2ec9dad0c"],["/tags/learning/index.html","164e40e67e3c1f94e692e29e9ef88066"],["/tags/test/index.html","288208b32c60316dae2e94fc4cc3ed5b"],["/tags/trash/index.html","6782815129ce743d6efe8f17228465c2"],["/tags/tree/index.html","6f346c3015304c690b7c79bda8944750"],["/tags/vim/index.html","3a78298e0a98088bf9ff2f0036766a7f"]];
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
