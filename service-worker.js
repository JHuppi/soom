const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  e + "/app/immutable/entry/app.07d79749.js",
  e + "/app/immutable/assets/0.418f0db2.css",
  e + "/app/immutable/nodes/0.16ac1ecc.js",
  e + "/app/immutable/nodes/1.0147a860.js",
  e + "/app/immutable/assets/2.9de49fb8.css",
  e + "/app/immutable/nodes/2.ccd18dc1.js",
  e + "/app/immutable/nodes/3.dfaf519a.js",
  e + "/app/immutable/nodes/4.9ed30a21.js",
  e + "/app/immutable/nodes/5.390e4b9b.js",
  e + "/app/immutable/nodes/6.aa153c17.js",
  e + "/app/immutable/assets/RoutineWrapper.5fca8c1c.css",
  e + "/app/immutable/chunks/RoutineWrapper.03856647.js",
  e + "/app/immutable/chunks/index.83bb740a.js",
  e + "/app/immutable/chunks/scheduler.ab84cf82.js",
  e + "/app/immutable/chunks/singletons.d5406929.js",
  e + "/app/immutable/entry/start.8bed7455.js"
], m = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/manifest.json",
  e + "/soom-logo.svg"
], u = "1699402803409", o = [...l, ...m], i = `cache-${u}`, p = self;
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
    const s = new URL(a.request.url), n = await caches.open(i);
    if (o.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && n.put(a.request, c.clone()), c;
    } catch {
      return n.match(a.request);
    }
  };
  a.respondWith(t());
});
