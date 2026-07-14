# API Conventions

## Props

- `modelValue` powers two-way binding with `update:modelValue`.
- `customClass` and `customStyle` are available on public components.
- `type` uses `default`, `primary`, `success`, `warning`, `danger`, or `info` when a semantic color is needed.
- `size` uses `mini`, `small`, `medium`, or `large`.
- Components with default display copy accept an optional `locale`. Explicit copy props take precedence over component locale, global locale, and the Chinese default.

## Events

- `change` emits the normalized value after a user action.
- `click` emits for button-like interactions.
- Overlay components emit `close` after the visible state becomes false.

## Slots

- Default slots carry main content.
- Named slots are only used for stable regions such as `title`, `left`, `right`, `header`, or `footer`.

## Platform Rules

- Do not use direct DOM APIs inside components.
- Platform-specific behavior must be hidden behind uni-app APIs or conditional compilation.
- Keep the public API identical across H5, App Vue, and Mini Program targets.
- H5-only accessibility enhancements use semantic roles, keyboard activation, visible focus rings, and reduced-motion CSS; they must degrade harmlessly on native targets.

## Contribution Gate

Every new component must register in the Playground catalog, export its component and style entry, define props, expose a real Playground state, update generated API documentation, and provide behavior coverage before release.

## Native Service Fallbacks

- `showToast`, `showDialog`, and `showActionSheet` delegate to their corresponding uni-app APIs.
- `showNotify` uses the native toast fallback: `success` maps to the success icon, `danger` to the error icon, and `info`/`warning` to no icon. Use `WbbbNotify` when an in-page notification style is required.
- Mount `WbbbOverlayHost` once near the application root to route Toast, Notify, Dialog, and ActionSheet services through the Wbbb UI visual system. Existing service signatures remain unchanged.
