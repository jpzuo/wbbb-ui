# Platform Matrix

Halo UI v1 uses uni-app Vue 3 and avoids DOM-only APIs.

| Target | Build status | Runtime status |
| --- | --- |
| H5 | Required, build verified | Pending browser/device record |
| App Vue | Required, build verified | Pending device record |
| WeChat Mini Program | Required, build verified | Pending developer-tool or device record |
| Alipay Mini Program | Build verified | Pending developer-tool or device record |
| Douyin Mini Program | Build verified | Pending developer-tool or device record |
| Baidu Mini Program | Not verified | Not verified |
| QQ Mini Program | Not verified | Not verified |
| Kuaishou Mini Program | Not verified | Not verified |
| App nvue | Not promised in v1 | Not applicable |
| uni-app x / uvue | Not promised in v1 | Not applicable |

When a component needs platform-specific behavior, keep the public API stable and isolate differences behind an internal adapter or conditional compilation.

## Verified Commands

```bash
npm run build:h5 -w @halo-ui/playground
npm run build:app -w @halo-ui/playground
npm run build:mp-weixin -w @halo-ui/playground
npm run build:mp-alipay -w @halo-ui/playground
npm run build:mp-toutiao -w @halo-ui/playground
```

Build output is generated under `examples/playground/dist/build/*`.

GitHub Actions runs the H5, App Vue, WeChat, Alipay, and Douyin build commands on every pull request and push. Device verification remains required before release because a successful build cannot validate touch behavior, safe areas, native upload, or system date pickers. Use the [runtime verification checklist](device-verification.md) to record that evidence.
