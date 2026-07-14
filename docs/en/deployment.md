# Documentation Deployment

Deploy the documentation and Playground as separate Cloudflare Pages projects.

| Site | Recommended domain | Build command | Output directory |
| --- | --- | --- | --- |
| Documentation | `ui.<your-domain>` | `npm run docs:api && npm run docs:build` | `docs/.vitepress/dist` |
| Playground | `wbbb-ui.pages.dev` | `npm run build -w wbbb-ui && npm run build:h5 -w @wbbb-ui/playground` | `examples/playground/dist/build/h5` |

Set `NODE_VERSION=24` and `WBBB_PLAYGROUND_URL=https://wbbb-ui.pages.dev` for the documentation project. The build also accepts a value ending in `/#/` and normalizes it before generating component preview routes.
