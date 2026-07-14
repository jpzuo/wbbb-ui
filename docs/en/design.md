# Design Tokens and States

Wbbb UI visual decisions are driven by replaceable tokens. Components and Playground pages must not scatter raw color values.

| Token family | Typical purpose |
| --- | --- |
| primary | Primary action, selected state, link |
| success | Completed work and successful feedback |
| warning | Risk and attention states |
| danger | Failure, deletion, validation errors |
| info | Neutral explanation and supporting feedback |
| neutral | Containers, separators, low-emphasis content |

Interactive controls cover default, focus, pressed, selected, and disabled states. H5 also respects `prefers-reduced-motion`.
