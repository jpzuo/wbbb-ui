# Icon Guide

Halo UI ships a curated 64-icon Lucide subset as a local font. The generated TTF is kept under 60 KiB for mini-program main packages; Lucide tooling is only used during library development and is never a runtime dependency.

## Core Icons

Use a core icon by name:

```vue
<halo-icon name="search" :size="32" color="var(--halo-color-primary)" />
```

The core set includes navigation, actions, feedback, people, media, dates, settings, commerce, and data icons. Existing names remain supported: `left`, `back`, `right`, `up`, `down`, `close`, `warning`, and `default` map to their Lucide equivalents.

## Image Icons

Use `src` for a business image asset. It has the highest source priority.

```vue
<halo-icon src="/static/brand-mark.png" :size="40" />
```

## Direct iconfont Code Point

Register the font file in the application, then provide its family and glyph code point. `code` accepts `e600`, `0xe600`, or a literal glyph.

```scss
@font-face {
  font-family: "business-icons";
  src: url("/static/business-icons.ttf") format("truetype");
}
```

```vue
<halo-icon font-family="business-icons" code="e600" :size="32" />
```

## Registered iconfont Set

For long-lived business icon fonts, register semantic names once and use `font-set` with `name`.

```ts
import { registerHaloIconFont } from 'halo-ui/icons'

registerHaloIconFont({
  name: 'business',
  fontFamily: 'business-icons',
  glyphs: { dashboard: 'e600', order: 'e601' }
})
```

```vue
<halo-icon font-set="business" name="dashboard" />
```

Source resolution is `src` → `fontFamily + code` → `fontSet + name` → core `name` → help fallback. An explicit `font-set` never falls through to a same-named core icon.

## Attribution

The generated core set is derived from Lucide (ISC) through `@react-native-vector-icons/lucide` (MIT). Both are development-time sources; Halo UI publishes only the generated subset font.
