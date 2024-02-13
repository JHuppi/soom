const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/app/immutable/entry/app.944eb0b1.js",
  e + "/app/immutable/assets/0.418f0db2.css",
  e + "/app/immutable/nodes/0.8e291915.js",
  e + "/app/immutable/nodes/1.8c94c711.js",
  e + "/app/immutable/assets/2.9de49fb8.css",
  e + "/app/immutable/nodes/2.ccd18dc1.js",
  e + "/app/immutable/nodes/3.dfaf519a.js",
  e + "/app/immutable/nodes/4.9ed30a21.js",
  e + "/app/immutable/nodes/5.390e4b9b.js",
  e + "/app/immutable/nodes/6.aa153c17.js",
  e + "/app/immutable/assets/RoutineWrapper.5fca8c1c.css",
  e + "/app/immutable/chunks/RoutineWrapper.03856647.js",
  e + "/app/immutable/chunks/index.83bb740a.js",
  e + "/app/immutable/chunks/paths.7b53810b.js",
  e + "/app/immutable/chunks/scheduler.ab84cf82.js",
  e + "/app/immutable/chunks/singletons.a9b2822b.js",
  e + "/app/immutable/entry/start.8819c0d0.js"
], l = [
  e + "/favicon.png",
  e + "/manifest.json",
  e + "/soom-logo.svg"
], u = "1707854239564", o = [...m, ...l], i = `cache-${u}`, p = self;
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
