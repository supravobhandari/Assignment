# Calculator Test Cases Reference

This reference document outlines the core behavior that must be validated whenever the calculator logic is changed.

## Mathematical Operations
| Operation | Input Sequence | Expected Result | Notes |
| :--- | :--- | :--- | :--- |
| Addition | `2 + 3 =` | `5` | |
| Subtraction | `10 - 4 =` | `6` | |
| Multiplication | `8 * 8 =` | `64` | |
| Division | `20 / 4 =` | `5` | |
| Decimal Math | `1.5 + 2.5 =` | `4` | |

## Edge Cases
| Scenario | Input Sequence | Expected Result | Notes |
| :--- | :--- | :--- | :--- |
| Division by Zero | `5 / 0 =` | `Error` | Handled via `!Number.isFinite()` |
| Multiple Decimals | `1 . 2 . 3 =` | `1.23` | Should prevent multiple decimals in a single segment |
| Chained Operators | `5 + * 2 =` | `10` | Should replace the previous operator `+` with `*` |

## Keyboard Mapping
| Key Press | Mapped Action |
| :--- | :--- |
| `0`-`9`, `.` | Appends digit / decimal |
| `+`, `-`, `*`, `/` | Appends operator |
| `Enter`, `=` | Evaluates result |
| `Backspace` | Deletes last character |
| `Escape`, `Delete`, `c` | Clears all (`C`) |
