# API Conventions

## Props

- `modelValue` powers two-way binding with `update:modelValue`.
- `customClass` and `customStyle` are available on public components.
- `type` uses `default`, `primary`, `success`, `warning`, `danger`, or `info` when a semantic color is needed.
- `size` uses `mini`, `small`, `medium`, or `large`.

## Events

- `change` emits the normalized value after a user action.
- `click` emits for button-like interactions.
- Overlay components emit `close` after the visible state becomes false.

## Slots

- Default slots carry main content.
- Named slots are only used where the component has stable regions such as `title`, `left`, `right`, `header`, or `footer`.

## Platform Rules

- Do not use direct DOM APIs inside components.
- Platform-specific behavior should be hidden behind uni-app APIs or conditional compilation.
- Keep the public API identical across H5, App Vue, and mini-program targets.
- H5-only accessibility enhancements use semantic roles, keyboard activation, visible focus rings, and reduced-motion CSS; they must degrade harmlessly on native targets.

## Contribution Gate

Every new component must register in the Playground catalog, export its component and style entry, define props, expose a real Playground state, update generated API documentation, and provide behavior coverage before release.

## Native service fallbacks

- `showToast`, `showDialog`, and `showActionSheet` delegate to the corresponding uni-app APIs.
- `showNotify` uses the native toast fallback: `success` maps to the success icon, `danger` to the error icon, and `info`/`warning` to no icon. Use the `HaloNotify` component when an in-page notification style is required.
- Mount `HaloOverlayHost` once near the application root to route Toast, Notify, Dialog, and ActionSheet services through the Halo UI visual system. The existing service signatures remain unchanged.
