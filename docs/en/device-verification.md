# Runtime Verification Checklist

Build success verifies generated code only. Before a public release, record the device or official developer-tool version, operating system, test date, and result for each target below.

| Target | Build verified | Runtime verified |
| --- | --- | --- |
| H5 | Yes | Pending browser/device record |
| App Vue | Yes | Pending device record |
| WeChat Mini Program | Yes | Pending developer-tool or device record |
| Alipay Mini Program | Yes | Pending developer-tool or device record |
| Douyin Mini Program | Yes | Pending developer-tool or device record |

For every verified target, check the Playground for:

- SafeArea at the top and bottom, including a fixed Tabbar.
- Native keyboard focus, input, validation errors, and return navigation.
- DatePicker and Calendar boundary/disabled-date behavior.
- Upload selection, failure, retry, deletion, and cancellation.
- Popup, Dialog, ActionSheet, Toast, and Notify close/back behavior.
- Light/dark theme switching, touch feedback, and reduced-motion behavior.

Attach the recorded result to the release issue or changelog entry. Baidu, QQ, and Kuaishou remain unverified until they have matching dependencies, CI builds, and a completed runtime record.
