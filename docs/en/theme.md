# Theme

Theme tokens live in `packages/wbbb-ui/src/styles/tokens.scss`. Color, spacing, radius, shadow, typography, and motion use the shared token system.

```scss
@use 'wbbb-ui/theme' with (
  $wbbb-color-primary: #0f7c66
);
```

Use the existing `setTheme('light' | 'dark')` API to change appearance.
