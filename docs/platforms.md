# Platform Matrix

Halo UI v1 uses uni-app Vue 3 and avoids DOM-only APIs.

| Target | v1 Policy |
| --- | --- |
| H5 | Required |
| App Vue | Required |
| WeChat Mini Program | Required |
| Alipay Mini Program | Build verification |
| Douyin Mini Program | Build verification |
| Baidu Mini Program | Build verification |
| QQ Mini Program | Build verification |
| Kuaishou Mini Program | Build verification |
| App nvue | Not promised in v1 |
| uni-app x / uvue | Not promised in v1 |

When a component needs platform-specific behavior, keep the public API stable and isolate differences behind an internal adapter or conditional compilation.

