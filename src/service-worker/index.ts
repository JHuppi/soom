/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const ASSETS = [...build, ...files];
const CACHE = `cache-${version}`;
const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', (e) => {
	const addFilesToCache = async () => {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	};

	e.waitUntil(addFilesToCache());
});

sw.addEventListener('activate', (e) => {
	const deleteOldCaches = async () => {
		for (const key of await caches.keys()) {
			if (key !== CACHE) {
				await caches.delete(key);
			}
		}
	};

	e.waitUntil(deleteOldCaches());
});

sw.addEventListener('fetch', (e) => {
	if (e.request.method !== 'GET') {
		return;
	}

    const respond = async () => {
        const url = new URL(e.request.url);
        const cache = await caches.open(CACHE);

        if (ASSETS.includes(url.pathname)) {
            return cache.match(url.pathname) as Promise<Response>;
        }

        try {
            const response = await fetch(e.request);

            if (response.status === 200) {
                cache.put(e.request, response.clone());
            }

            return response;
        } catch {
            return cache.match(e.request) as Promise<Response>;
        }
    }

    e.respondWith(respond());
});
