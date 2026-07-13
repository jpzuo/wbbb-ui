# uni_modules Publishing

`packages/halo-ui` is the package that should be published to npm and copied to `uni_modules/halo-ui`.

It is intentionally a uni-app source package. npm consumers must use it from a uni-app/Vite compilation pipeline; Node.js does not execute its TypeScript and Vue entry files directly.

Required shape:

```text
uni_modules/halo-ui/
  package.json
  components/
    halo-button/
      halo-button.vue
      index.ts
      props.ts
      style.scss
  src/
    styles/
    services/
```

## easycom

Component directories use the `halo-*` prefix so projects can use tags like:

```vue
<halo-button type="primary">Submit</halo-button>
```

CLI projects can use PascalCase imports:

```ts
import { HaloButton } from 'halo-ui/components/button'
```

The playground syncs the local package into `examples/playground/uni_modules/halo-ui` before each build. This keeps mini-program builds away from npm `file:` symlink paths and matches how DCloud projects commonly consume component libraries.

For mini-program builds, the sync script also refreshes `examples/playground/src/uni_modules/halo-ui` because uni-app easycom scans that location in addition to the project root.

## Release Checklist

- Run `npm run check:exports`.
- Run `npm run typecheck`, `npm run test`, and `npm run build`.
- Run `npm run prepare:uni-modules` to create `dist/uni_modules/halo-ui`.
- Run playground builds for H5, App Vue, WeChat mini-program, Alipay mini-program, and Douyin mini-program.
- Update `CHANGELOG.md`, `docs/platforms.md`, and component docs when behavior changes.
