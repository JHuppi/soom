const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/app/immutable/entry/app.3f98661f.js",
  e + "/app/immutable/assets/0.cb58c5e6.css",
  e + "/app/immutable/nodes/0.675a37e9.js",
  e + "/app/immutable/nodes/1.72c45a1d.js",
  e + "/app/immutable/assets/2.99161510.css",
  e + "/app/immutable/nodes/2.c520c9e6.js",
  e + "/app/immutable/nodes/3.d4f660b3.js",
  e + "/app/immutable/nodes/4.d3b6170c.js",
  e + "/app/immutable/nodes/5.cc139456.js",
  e + "/app/immutable/nodes/6.bbd82685.js",
  e + "/app/immutable/assets/RoutineWrapper.5fca8c1c.css",
  e + "/app/immutable/chunks/RoutineWrapper.3bad8bf7.js",
  e + "/app/immutable/chunks/index.83bb740a.js",
  e + "/app/immutable/chunks/paths.6f2eb85e.js",
  e + "/app/immutable/chunks/scheduler.ab84cf82.js",
  e + "/app/immutable/chunks/singletons.a48d3084.js",
  e + "/app/immutable/entry/start.61d9b82a.js"
], l = [
  e + "/favicon.png",
  e + "/manifest.json",
  e + "/soom-logo.svg"
], u = "1710194500720", o = [...m, ...l], i = `cache-${u}`, p = self;
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