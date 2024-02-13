const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/app/immutable/entry/app.adc06262.js",
  a + "/app/immutable/assets/0.418f0db2.css",
  a + "/app/immutable/nodes/0.4435b020.js",
  a + "/app/immutable/nodes/1.13498719.js",
  a + "/app/immutable/assets/2.9de49fb8.css",
  a + "/app/immutable/nodes/2.ccd18dc1.js",
  a + "/app/immutable/nodes/3.dfaf519a.js",
  a + "/app/immutable/nodes/4.9ed30a21.js",
  a + "/app/immutable/nodes/5.390e4b9b.js",
  a + "/app/immutable/nodes/6.aa153c17.js",
  a + "/app/immutable/assets/RoutineWrapper.5fca8c1c.css",
  a + "/app/immutable/chunks/RoutineWrapper.03856647.js",
  a + "/app/immutable/chunks/index.83bb740a.js",
  a + "/app/immutable/chunks/paths.b800a9ed.js",
  a + "/app/immutable/chunks/scheduler.ab84cf82.js",
  a + "/app/immutable/chunks/singletons.b2cd9e64.js",
  a + "/app/immutable/entry/start.3f5a31aa.js"
], l = [
  a + "/favicon.png",
  a + "/manifest.json",
  a + "/soom-logo.svg"
], u = "1707850620141", o = [...m, ...l], i = `cache-${u}`, p = self;
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
    const s = new URL(e.request.url), n = await caches.open(i);
    if (o.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && n.put(e.request, c.clone()), c;
    } catch {
      return n.match(e.request);
    }
  };
  e.respondWith(t());
});
