# Theme

Theme tokens live in `packages/halo-ui/src/styles/tokens.scss`.

## Token Groups

- Color: primary, success, warning, danger, info, text, border, background, surface.
- Shape: small, medium, large radius.
- Spacing: xs, sm, md, lg.
- Typography: xs, sm, md, lg and base line-height.
- Motion and z-index: popup, toast, fast/base duration.

## Usage

```scss
@use 'halo-ui/theme' with (
  $halo-color-primary: #0f7c66
);
```

Component styles only depend on tokens and mixins, so a single component style can be imported without the full stylesheet.

