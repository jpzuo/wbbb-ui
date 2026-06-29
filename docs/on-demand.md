# On-Demand Imports

On-demand import is a v1 requirement.

## Rules

- Root package import exports components and services, but does not import `styles/index.scss`.
- Every component has an independent entry under `halo-ui/components/*`.
- Every component has an independent style entry under `halo-ui/styles/*`.
- Service components also expose independent entries, such as `halo-ui/services/toast`.

## Examples

```ts
import { HaloInput } from 'halo-ui/components/input'
import 'halo-ui/styles/input'
```

```ts
import { showDialog } from 'halo-ui/services/dialog'
```

The check script verifies each `components/halo-*` folder has `index.ts`, `props.ts`, Vue source, and `style.scss`.

