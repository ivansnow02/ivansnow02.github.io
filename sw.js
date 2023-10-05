/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","26250bb360d4bafb66c1740c4e741919"],["/about/index.html","3b5c762795e52f0dcc0d470e63b8b49e"],["/archives/2023/04/index.html","8d63f21bb42e9169db427aa182106703"],["/archives/2023/05/index.html","5228674199090d0b62a10935170d28a3"],["/archives/2023/06/index.html","606754609cb4329cdbde0068622ea8f3"],["/archives/2023/06/page/2/index.html","298f79e33d3b2d1f15061eca24cb07de"],["/archives/2023/07/index.html","96a261ae57868b1a0de59eac15fc90b2"],["/archives/2023/08/index.html","9d562dcb094e597c1211bbc0f984d577"],["/archives/2023/09/index.html","9b82b81613ecc24fd7504546b0122e2f"],["/archives/2023/index.html","16b32272c59cf6cb247e95c408871ac9"],["/archives/2023/page/2/index.html","b972b1b060762aece5ebd3fe0380d78c"],["/archives/2023/page/3/index.html","7f0515432fe41bfcb353ae22b556350a"],["/archives/index.html","de3f86fc9b6766d574d53fb20bc9d2c8"],["/archives/page/2/index.html","d9fc229920a087e13068c73b2398be36"],["/archives/page/3/index.html","ada3a274c3741482a087616a9ffd56c8"],["/assets/DataStructureMindMap.html","54fd548ddab25f752226dd1133883954"],["/assets/DiscreteMathMindMap.html","6b224a5faa487c71f5af48c95733a1b8"],["/assets/Physics.html","fb54cb96d154312312f018153e90b7a5"],["/assets/XJP.html","f94a1e4cd788b2df2e54baadb0717174"],["/categories/English/index.html","84b4f2ffa6fa4da2289269946d6adb61"],["/categories/Math/index.html","db4bd05756ee0481b60b2a352c6b3e64"],["/categories/Physics/index.html","e584c549e2cff101750fb4c9b54cab0e"],["/categories/coding/Django/index.html","343bcb0a0a118db508378a5181af300a"],["/categories/coding/Redis/index.html","502d83f4bc833788c5ed57b69e2606cf"],["/categories/coding/coursera/Algorithms-Part-I/index.html","f7f45ddb6b86fe3ad91c9554f0fbb891"],["/categories/coding/coursera/index.html","7ced7cac23a4798d11fc380222471c5a"],["/categories/coding/data-structure/index.html","484a38360581584260e26d73b3c5f1ee"],["/categories/coding/data-structure/page/2/index.html","7483d809db4fdd97400572a829d77f85"],["/categories/coding/index.html","e1ca4759a78ff652489dac30d758d761"],["/categories/coding/page/2/index.html","213ace6c811e620951e129e4db431661"],["/categories/index.html","120803a9e7ed3706c91b887d6a408ce1"],["/categories/test/index.html","ead33e2801c2ac13e3457dee3f640bba"],["/categories/trash/index.html","03d682de61a01905cc00bd72cce6e0aa"],["/css/custom.css","95f18e594dcd77079e5cbbe48ac7f250"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","cf9f8833b380a4a130bcf60dde627efc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/main.css","fd06f7ba0019fdb102710433ec11bf2b"],["/google4fee7949ef6062d7.html","af68f7cd44c1236bf7fc5005a55f04df"],["/img/784785.png","bf2bacbc1fbcf3164b8a488eb55e1882"],["/img/OIP.jpg","42c832988e15c0df8d58000b947c2c4e"],["/img/R.jpg","54c8f0acb7e42b37bd6d6f1409bc44b0"],["/img/avatar.png","7c857ac3d5e4056ab3a26e70e31ca1e3"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon512.png","c7f3ef06d19eb61b15bb4937cb8ede28"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/friend.jpg","ee6ee620a8ef7eb317d43d2e1a0d2d1c"],["/img/illust_107830061_20230512_135833.jpg","e712e7c6204f540f0946116a9bf83d92"],["/img/loading.gif","d037d39c753c47145f8e1de5ddeb8d1e"],["/img/logo.png","03dacfb887c5f9cc256f7e0714d7c8cf"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/redis.jpg","338c5b2c26ff0ba72394f4e44b08944a"],["/img/the_falling_soldier.jpg","d89d198ca0ebfde190a0e18260f37020"],["/img/vim.png","53ef7f0339bd238c164b36f9b5925028"],["/index.html","799ac9d3799c9b4369277d24badab650"],["/js/aplayer.js","35a245ea681f6225c59dfb5ad8c79aa2"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","605f587be2ab3d36472bb03ac27ede65"],["/js/color-thief.js","421df21ba198d65ea583b8d878124e05"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/markmap.js","f6a3d576050cf14ffb0fae023598b645"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","e924bd66283d5aac50973ad64969216d"],["/page/2/index.html","587cadab34d7bab4e0a97a70006dfd29"],["/page/3/index.html","eb9cc5ca713998aa006e29df462802de"],["/posts/12732/index.html","f3f89c8dee17f2a8edee37d00374acbc"],["/posts/14492/SDS.png","af7081fd6355d67bb5e250b1a2142e5b"],["/posts/14492/entry.png","bf9a2331c3333f72da87b0f16049898b"],["/posts/14492/index.html","677e150074ac79c63f345748cef5f973"],["/posts/14492/int-1682306725947-10.png","ca929c95925a3f57bd653285e2ae8d4e"],["/posts/14492/intset.png","7c51fa661d9362a313d560df9f3f9a9e"],["/posts/14492/linkedlist.png","2b9514b584f552d6c5d81afb6e1389f6"],["/posts/14492/quicklist.png","63f9056b36b576411fe437c6767d3bf0"],["/posts/14492/skiplist.png","ac1038eebae00d9eb1a72bcab0f3bcff"],["/posts/14492/ziplist.png","50d5172689ec6ffe38f92a11472cc1d5"],["/posts/15714/index.html","dab14c9599844ebf947d10a277df6cd2"],["/posts/16273/index.html","1bdcd96fc2d0e96e8aa8d3d81c652351"],["/posts/16574/image-20230530103359493.png","88ccbd05b0c8c02e11d2c7521cbf869a"],["/posts/16574/index.html","cd77cb3e208eba914ee37a57d5e4344f"],["/posts/17687/index.html","1caabb9cc66b66f34151c2e2a2676958"],["/posts/25422/image-20230627150524180.png","b77d1599e0ac52018d3b8a0fa69cb566"],["/posts/25422/image-20230627150701546.png","6ae3b1864d17c8db9a5f13a404facf28"],["/posts/25422/image-20230627150853262.png","67f5584ea8202d7d5b4a4a69cb6509a2"],["/posts/25422/image-20230627151028143.png","cea29f83b80fc91641ff391cfccf3376"],["/posts/25422/index.html","82a4b132a74956ffdb3ce5e625320a24"],["/posts/28245/index.html","a24152c3bbf7ecaa43c333214771a9c7"],["/posts/31475/index.html","c023c4e551533c285e87c1f911de24ca"],["/posts/31475/linkedlist.png","2b9514b584f552d6c5d81afb6e1389f6"],["/posts/33053/index.html","4c44d747629957cb960cb9d0520ac447"],["/posts/36820/index.html","e0669acf96019af694ca028440ea700d"],["/posts/37632/image-20230704173145405.png","9b3ba11810d4914842d589e981ac8e85"],["/posts/37632/index.html","5ed32c1a7c709cca8e014077200a4cfe"],["/posts/40417/index.html","43cbfeb5675165223a0f7db851017d63"],["/posts/40417/the_falling_soldier.jpg","d89d198ca0ebfde190a0e18260f37020"],["/posts/42679/index.html","44871bb747d4e4167727c938f6c1f0cf"],["/posts/45419/index.html","8eaaac6eae560fd970b08e28c64d1c00"],["/posts/45583/index.html","68527275035a16313c6681ec2cf1fa16"],["/posts/45666/index.html","3dd23b68b153ad437ed7a2ba31b60b14"],["/posts/46991/index.html","c25e8b1141d649da4abcb5d442eab788"],["/posts/49742/index.html","ca6c8c773d311ed8b21a9eeb43b4ee7b"],["/posts/51544/index.html","d63873f4d2c6cd9b2eca5b92dcaba6a4"],["/posts/52585/1.png","1bf91e1aa67b535d04cf451b76400fb3"],["/posts/52585/2.png","5cfac40347a13958a97e5bffe9d6da6b"],["/posts/52585/index.html","c9e1f1dc20bda44e0becfe375aec652b"],["/posts/53823/index.html","9fdbe1a9508727420a86724c344fa46c"],["/posts/54039/index.html","b182b6bcb9d7d372026569cad6de8780"],["/posts/55223/index.html","0d4db30f19760abede5575eaca3b65cd"],["/posts/56431/index.html","0b52a782b56e0e93b4fb08b3ba7a9a7b"],["/posts/57769/image1.png","ab6c5a0f97e45380737cdc0167f5fa5b"],["/posts/57769/image2.png","b0fc1a7fa2c5a76bc6f214b1c58b8761"],["/posts/57769/image3.png","5a070b266a1a7afe31d4aea2ac3bb9c5"],["/posts/57769/index.html","a41973b2db4d42f8cb98f37b0a1bd73a"],["/posts/59964/1.jpg","931f624b668e6a4a53ed9df07d24e2b9"],["/posts/59964/index.html","464fb2d9eb59b3136b2a91c2ecf1ef12"],["/posts/60968/index.html","e321b0dc31cd2428bea456038a97cdbb"],["/posts/60968/vim工作模式.png","dcd25a6082e1989975c280213f3e1052"],["/posts/60968/vim键位.gif","acc327dfe0d5328c1ad102179c70b641"],["/posts/61809/image-20230521192309273.png","8df8fe0377360a67ca2f96f1e356dca7"],["/posts/61809/index.html","23ae79276033a6da5c69bf329010f049"],["/posts/63610/1.png","bac5b3bb088bc4ca1ea167eaa06c6702"],["/posts/63610/2.png","c5ff34a6c6c1c499798dc05e1bbfa99a"],["/posts/63610/3.png","ed4283f71aa3fd7b8a528c6f45dd941f"],["/posts/63610/4.png","8c525bccc98512ddb216bd1173c52980"],["/posts/63610/5.png","64a638580284771f6ff46215be145f7d"],["/posts/63610/index.html","d0d1db2981585a29fd903e3e87b4612a"],["/sw-register.js","3359d07a814d1e21d3c859ba0d5010f6"],["/tags/Discrete-Mathematics/index.html","c42a30559e0fcb3e7fa7a0665aa6785e"],["/tags/Django/index.html","c5fb695ffcda9ad2b70e4235cb3ce61c"],["/tags/English/index.html","0af5c2e57defbbabec64dab58b11db02"],["/tags/Java/index.html","8b90686368f34508ac13c6362e5b7530"],["/tags/Linear-Algebra/index.html","cc9e4af1599653b2de84da6e16a58f80"],["/tags/Math/index.html","f49e75126ede97d42695992e4b82e141"],["/tags/Python/index.html","d3f32202c651825c998ff39d01cb3d3f"],["/tags/Redis/index.html","c81cf21f745c874dfff9f63333215d1b"],["/tags/Spring/index.html","7b18ea7259cf40bb495f8926d85d3db5"],["/tags/algorithms/index.html","c34a66a41ffa8b76cab5d3e0a2bc2368"],["/tags/coding/index.html","409254b4d8e97433f8e52561f583e0f3"],["/tags/coding/page/2/index.html","c018417af83990f052df49d376c9c30d"],["/tags/coursera/index.html","ca696a1c40d171df3ba7579549e1feb8"],["/tags/data-structure/index.html","1e6360440b56124574253770511e24d0"],["/tags/data-structure/page/2/index.html","fddd24716d432734ccad9ff9ff26ce8b"],["/tags/index.html","e0c5c75c1e0feb58a7217e658b7910cc"],["/tags/learning/index.html","aab3250ed3afb415307381d0df36e039"],["/tags/test/index.html","1f509f6f2a06d90866e3b85089e5eafa"],["/tags/trash/index.html","62e5e4331461711ac7ed554fc0edb1b2"],["/tags/tree/index.html","fdbb40760ce793a5e9b83e5b4935d479"],["/tags/vim/index.html","7ff3a449e23fd52b4f5d6260813d4d17"]];
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
