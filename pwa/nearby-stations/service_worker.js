var CACHE_DYNAMIC_VERSION = 'dynamic-v1';
var CACHE_NAME = 'pwa-stations-caches';
var urlsToCache = [
    '/taba9404.github.io/track/pwa/nearby-stations/index.html',
    '/taba9404.github.io/track/data/json/stations.json',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    console.log('[Service Worker] Fetching something ...');
    event.respondWith(
        // �L���b�V���̑��݃`�F�b�N
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                } else {
                    // �L���b�V�����Ȃ���΃��N�G�X�g�𓊂��āA���X�|���X���L���b�V���ɓ����
                    return fetch(event.request)
                        .then(res => {
                            return caches.open(CACHE_DYNAMIC_VERSION)
                                .then(cache => {
                                    // �Ō�� res ��Ԃ���悤�ɁA�����ł� clone() ����K�v������
                                    cache.put(event.request.url, res.clone());
                                    return res;
                                })
                        })
                        .catch(() => {});
                }
            })
    );
});
