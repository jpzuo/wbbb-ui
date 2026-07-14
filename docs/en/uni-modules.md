# uni_modules Usage and Publishing

`packages/wbbb-ui` can be published to npm or copied to `uni_modules/wbbb-ui`. It is a uni-app source package and must be handled by the uni-app/Vite build pipeline.

```text
uni_modules/wbbb-ui/
  components/
  src/
  package.json
```

The `wbbb-*` component directories work with easycom:

```vue
<wbbb-button type="primary">Submit</wbbb-button>
```
