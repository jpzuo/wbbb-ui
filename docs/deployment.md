# 文档站部署

正式文档与 Playground 应部署为两个独立的 Cloudflare Pages 项目。

| 站点 | 推荐域名 | 构建命令 | 输出目录 |
| --- | --- | --- | --- |
| 正式文档 | `ui.<你的域名>` | `npm run docs:api && npm run docs:build` | `docs/.vitepress/dist` |
| Playground | `wbbb-ui.pages.dev` | `npm run build -w wbbb-ui && npm run build:h5 -w @wbbb-ui/playground` | `examples/playground/dist/build/h5` |

Cloudflare 会自动安装依赖，因此构建命令中不需要额外执行 `npm ci`。在文档项目的环境变量中设置：

```text
NODE_VERSION=24
WBBB_PLAYGROUND_URL=https://wbbb-ui.pages.dev
```

生产分支建议为 `main`；Pull Request 使用 Cloudflare Preview URL 验收文档、代码示例与移动端预览链接。
