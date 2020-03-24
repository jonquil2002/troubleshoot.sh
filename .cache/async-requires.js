// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-spec-js": () => import("./../src/pages/spec.js" /* webpackChunkName: "component---src-pages-spec-js" */),
  "component---src-pages-explore-spec-js": () => import("./../src/pages/explore-spec.js" /* webpackChunkName: "component---src-pages-explore-spec-js" */)
}
