'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/config": "d18dbcf66a51b6d25eef4e180328da85",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1255a44121e4695ca6aa088be1335ca5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9cf5442f4687845f1087ad5614879b2f",
".git/logs/refs/heads/master": "9cf5442f4687845f1087ad5614879b2f",
".git/logs/refs/remotes/origin/master": "df73316ce5e483c8313179a265a1ae88",
".git/objects/01/aba0b39c88bbb6d2f83afd0fbd82eff580880a": "101d74686acf4b5cce09b262c0015ca4",
".git/objects/05/bd7ee48e8d76198f562946e7b1aa16aed0c58c": "2d098836e7954854fcd3ef0e45bfe465",
".git/objects/0f/54eefa5eab9c6d4673d6ceeb1dd3ff479f5a93": "555479a2e4c613eb19472b9411c9cce3",
".git/objects/0f/7eaebfd19b584b2f9d9344e8119acf570c6d6b": "6bd16e782145079481b3f5af3402eb5a",
".git/objects/18/d87b3c703ae4e23a29d9f83cc76dff97f92a9b": "d1b5e3ad97951166d4e17b7fa8a0648e",
".git/objects/19/276a0b72eb90a0d3964f26d7cc49f6b6c6b821": "f65cc881e7fc425db790c823a51bc736",
".git/objects/19/5e020cd4745a4570e191d29b1532a618c4a292": "e1d5809c5e9a6a9ca76389ec3406425e",
".git/objects/1d/581bd3f69e0972596777328e32a1e628ac2b85": "4f1da19ebf50ac864aefa79d07dc3643",
".git/objects/1e/6ba2bc8e009fb1521c0e846f39562a9a8dc8ec": "1445acb03e5cd5c1780c62f1bb044f0c",
".git/objects/32/777944f91796ab84c918820c46199966ceee11": "7ae5078ad5b0f629ba8cd86058695bb0",
".git/objects/34/c4b4a6a110294c3545576d24a5a80d2d3f90a1": "d4bc22de500baebf1d40753bb460498c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/9e042bff337b80fcd7f7786484a091ac0b02df": "601e9822c8f5293f55349cd257c04242",
".git/objects/38/3d7b27e1b3e18af5e6783c078e0e6221f293bb": "3cc540c49a29e38effbd4f8e81840169",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4c483aa227648c035b89b99ee363ed000c822a": "df0a8f791df28f537b0d1e99cf898123",
".git/objects/49/e4f4bcecf9e167c9302b59531b7c28bfbe0c71": "583e2fb697217819c30871e18c48a0ba",
".git/objects/4e/3c6b1a69ebf387af0a4191782819ee2d5b2c38": "ab13470324247de9b9d78a05593e9ce3",
".git/objects/52/1744f1f6c114c68289197fd2132ea4cadd930a": "3d65f042ff42c81aa02302aafe2c7af4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/4e245d4d8c02bd748af03bb962e3d9bab11f9c": "34b13b50a64efbc2d552e22d19cd1115",
".git/objects/57/7d37ed22c63eb089d6a20d546a60b2231ce64c": "f7c84ede0943996223d1e2978317dbeb",
".git/objects/59/a0bbaaae26552814d6a04b8c7a3ac127522d1a": "d7bb5270412678869f528586f9f0be1f",
".git/objects/63/1de61b99377a5d6b44aa0ef6b56091e3d4ab38": "518b38ac600ea920c16bd64d50284ce6",
".git/objects/6a/0b08c321e7713dcbfff9cc50e249cb0c5f058b": "763b6bf7efb4626b705515699e5811b7",
".git/objects/6a/b74775af3d3a783ae276699944df37db1eae99": "71337304dc3409f937b4879ef87a077a",
".git/objects/71/dbeedffa519032ddb7f4082da323f6c4638750": "62f131f80a3e572c665b5225a390778e",
".git/objects/74/1ae4311954ec856ecf5f181dcffaa15b6af86a": "a09edaa85acb0772d7f7e6cbefa79b72",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/3b0f5d49f170b5df303ab4e44719d9810056b5": "7cef0a992ed1e389b3365bae6c7f8ac1",
".git/objects/9c/284dcdd7f99ad06e9fdbac47eac99b07ff042c": "8a4905783b2f4c738c7c95b469d80721",
".git/objects/ab/87a62cb66af7a7b928fcf926bb5aa285420d4b": "6ddb2fa7fe1b508a15fd3d8ad32c81bf",
".git/objects/b2/df3f7f5e259bd3923d0aacb0b5a292919caba3": "1ba76bfd257440cc323183fc68a1bb02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/6722b2e61f999638f6da7209784c5a144d764e": "2325d1b8b6edeeb7ac7067c68915891b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/1e743d1fcadbfc62aff67a956122fe90ac9b9a": "3b8700783eb53cc578fbd2dc9ce0a8e7",
".git/objects/c0/6f97a475fe72666f3ab294dcaedd21003b67c4": "7ef267d4a17547590b98581b5f2b056a",
".git/objects/c4/29daa8424b9f2c9e9e9950b42cafcf165f6078": "3b8694fb6222193ec662f629bff0bc51",
".git/objects/c5/ca6ddf6812e0d115766df8379ae4dd9f79130a": "0b9a90344b773c619e5d3d28dc250abe",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/cc/13212dc2121933be13d3728873cfecc05fa58a": "9d7c5db39f1f59e09e888a0d0655797b",
".git/objects/d5/8ab02764aa068a66367fa66dea09837b943fa2": "05551bfd817858e859abb980d9b94c05",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/dfac7f5b4d56b71868a3e303509e1a544b418c": "935734505392cf5e4ba1225f3cd7e995",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/7a9bd7111f8e67a6a87e5c988345a9f29b73df": "e0b1dbea91558c2a75cc7c9224564f3a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/f1242e5f793f0568053eeb1c62467ac649b0c5": "6fbef7f0e148feb151d399d105187dfb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/c36e1046034150068502b01839efd4ccc0c69d": "ffae233c109c6ce35d9fe304808315fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a5f4068e8b7a23689ee196ba83321ec43c339b": "692e3468011fad06b0e8b8e2712e4746",
".git/objects/f2/acc95829f2e69de76a0e8b03bbca705f67226e": "93c96644b9473b884f5481e6bdafd64e",
".git/objects/f3/06467b8dd5d387a7d1f02cc4fc7a898e719787": "4441653a7ae96a61140cf0df04343ce6",
".git/objects/f3/388bfb8450e696ec03a1c62e7d9244095f1c3f": "1b5ffc17fb8afb2d4c5bde594e056751",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/7b30a1fec7f419de064c08ec322f70a7b8efa7": "e2bce4593cc0e06a50193c3da934d328",
".git/refs/heads/master": "631d8875494a5c2329957f9450ebb387",
".git/refs/remotes/origin/master": "631d8875494a5c2329957f9450ebb387",
"assets/AssetManifest.bin": "01f2793beccd9be72493d4422fa6f426",
"assets/AssetManifest.json": "1db5a225bcac5a41589aeab05dbaf4f8",
"assets/assets/images/%25EB%258F%25BC%25EC%25A7%2580%25EB%25B0%2594.jpeg": "1ab82ec439ea3042fcf7e8f821ce7c32",
"assets/assets/images/%25EB%25A9%2594%25EB%25A1%259C%25EB%2582%2598.jpeg": "0180ebe6f582bd9a310e3f5d2bd38dd8",
"assets/assets/images/%25EC%2583%2588%25EC%259A%25B0%25EA%25B9%25A1.jpeg": "72cdb90df1ed452af9d21571fc7f9250",
"assets/assets/images/%25EC%258A%25A4%25ED%2583%2580%25EB%25B2%2585%25EC%258A%25A4.jpeg": "bf693e6c7b0b54edb1d5f28170ba47d9",
"assets/assets/images/%25EC%258B%25A0%25EB%259D%25BC%25EB%25A9%25B4.jpeg": "7e25511ee99039251b9d08df206e21f8",
"assets/assets/images/%25ED%258C%258C%25EC%259D%25B8%25ED%258A%25B8.jpeg": "457b395801ec1355b5fa59ea05fb71c0",
"assets/assets/images/%25ED%258F%25AC%25EC%25B9%25B4%25EC%25B9%25A9.jpeg": "9d0bb9c5dd34b52824f3d52d80e2fba5",
"assets/assets/images/CU5000%25EC%259B%2590.jpeg": "97b331f665c31e2980c524a7f540c68c",
"assets/assets/video/video1.mp4": "0a1014da764a4f5256c252cab66acc02",
"assets/assets/video/video2.mp4": "be90bd97a61aee1ca517b42b1751db97",
"assets/assets/video/video3.mp4": "0a1014da764a4f5256c252cab66acc02",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "73305973cafff706c39f7caf174b8eb7",
"assets/NOTICES": "900555eb89ee8b955940ba8234ee70ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "830a7e2368c91ef1426052135c4d5b73",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "c8c81977a0d500dae9dfc828850b285d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "dd94788e9c3e9b064b1b3ce1927a4293",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a9b42ac120df018b45228de3665999f",
"/": "4a9b42ac120df018b45228de3665999f",
"main.dart.js": "b62aa4b4f25fc61d09196550931a7879",
"manifest.json": "17a0f631c2b273f6f0db8ac3bfb8c570",
"version.json": "f0a3ef17baf554b73433e09370ab157d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
