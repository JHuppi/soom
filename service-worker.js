const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/app/immutable/entry/app.931ffd13.js",
  e + "/app/immutable/assets/0.cb58c5e6.css",
  e + "/app/immutable/nodes/0.b48bb19c.js",
  e + "/app/immutable/nodes/1.d7e47a43.js",
  e + "/app/immutable/assets/2.99161510.css",
  e + "/app/immutable/nodes/2.c520c9e6.js",
  e + "/app/immutable/nodes/3.d4f660b3.js",
  e + "/app/immutable/nodes/4.d3b6170c.js",
  e + "/app/immutable/nodes/5.cc139456.js",
  e + "/app/immutable/nodes/6.bbd82685.js",
  e + "/app/immutable/assets/RoutineWrapper.5fca8c1c.css",
  e + "/app/immutable/chunks/RoutineWrapper.3bad8bf7.js",
  e + "/app/immutable/chunks/index.83bb740a.js",
  e + "/app/immutable/chunks/paths.f58ec1e1.js",
  e + "/app/immutable/chunks/scheduler.ab84cf82.js",
  e + "/app/immutable/chunks/singletons.afcfb48c.js",
  e + "/app/immutable/entry/start.01399aed.js"
], l = [
  e + "/favicon.png",
  e + "/manifest.json",
  e + "/soom-logo.svg"
], u = "1709141786778", o = [...m, ...l], i = `cache-${u}`, p = self;
p.addEventListener("install", (a) => {
  const t = async () => {
    await (await caches.open(i)).addAll(o);
  };
  a.waitUntil(t());
});
p.addEventListener("activate", (a) => {
  const t = async () => {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  };
  a.waitUntil(t());
});
p.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  const t = async () => {
    const s = new URL(a.request.url), c = await caches.open(i);
    if (o.includes(s.pathname))
      return c.match(s.pathname);
    try {
      const n = await fetch(a.request);
      return n.status === 200 && c.put(a.request, n.clone()), n;
    } catch {
      return c.match(a.request);
    }
  };
  a.respondWith(t());
});
