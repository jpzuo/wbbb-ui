# Development Dependency Risks

`npm run audit:production` is the release gate. It excludes development tooling and must remain free of high and critical vulnerabilities.

`npm run audit:development` reports development-only findings without treating them as a publish failure. The current findings originate in the pinned uni-app alpha toolchain, notably `@dcloudio/uni-cli-shared` and the transitive `@intlify/*`, `express`, `jpeg-js`, `path-to-regexp`, and `ws` packages.

These tools are used to compile or test the project; they are not shipped in the Halo UI npm package. `npm audit` currently proposes versions outside the compatible alpha dependency graph. Do not run `npm audit fix --force`.

At each uni-app alpha upgrade, review the report, record the target DCloud release, and run the H5, App Vue, WeChat, Alipay, Douyin, consumer smoke, and visual test suites before adopting it. A compatible upstream release that removes a high or critical finding takes priority over routine dependency maintenance.
