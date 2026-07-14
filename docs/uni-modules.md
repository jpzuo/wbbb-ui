# uni_modules 使用与发布

`packages/wbbb-ui` 可发布到 npm，也可复制到 `uni_modules/wbbb-ui`。它是 uni-app 源码包，必须由 uni-app/Vite 编译链处理。

```text
uni_modules/wbbb-ui/
  components/
  src/
  package.json
```

组件目录使用 `wbbb-*` 前缀，可配合 easycom 使用：

```vue
<wbbb-button type="primary">提交</wbbb-button>
```

发布前执行 `npm run release:dry`、类型检查、导出检查与跨端构建。
