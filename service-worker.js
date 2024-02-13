const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/app/immutable/entry/app.929d9673.js",
  a + "/app/immutable/assets/0.418f0db2.css",
  a + "/app/immutable/nodes/0.414d567c.js",
  a + "/app/immutable/nodes/1.e29b133c.js",
  a + "/app/immutable/assets/2.9de49fb8.css",
  a + "/app/immutable/nodes/2.ccd18dc1.js",
  a + "/app/immutable/nodes/3.dfaf519a.js",
  a + "/app/immutable/nodes/4.9ed30a21.js",
  a + "/app/immutable/nodes/5.390e4b9b.js",
  a + "/app/immutable/nodes/6.aa153c17.js",
  a + "/app/immutable/assets/RoutineWrapper.5fca8c1c.css",
  a + "/app/immutable/chunks/RoutineWrapper.03856647.js",
  a + "/app/immutable/chunks/index.83bb740a.js",
  a + "/app/immutable/chunks/paths.2347d7ba.js",
  a + "/app/immutable/chunks/scheduler.ab84cf82.js",
  a + "/app/immutable/chunks/singletons.3f21684b.js",
  a + "/app/immutable/entry/start.ec1b131a.js"
], l = [
  a + "/favicon.png",
  a + "/manifest.json",
  a + "/soom-logo.svg"
], u = "1707850705783", o = [...m, ...l], i = `cache-${u}`, p = self;
p.addEventListener("install", (e) => {
  const t = async () => {
    await (await caches.open(i)).addAll(o);
  };
  e.waitUntil(t());
});
p.addEventListener("activate", (e) => {
  const t = async () => {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  };
  e.waitUntil(t());
});
p.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  const t = async () => {
    const s = new URL(e.request.url), c = await caches.open(i);
    if (o.includes(s.pathname))
      return c.match(s.pathname);
    try {
      const n = await fetch(e.request);
      return n.status === 200 && c.put(e.request, n.clone()), n;
    } catch {
      return c.match(e.request);
    }
  };
  e.respondWith(t());
});
