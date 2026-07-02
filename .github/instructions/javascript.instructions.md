---
applyTo: "**/*.js"
---

# JavaScript Rules

- **Evaluation**: We evaluate expressions using `Function('"use strict"; return (${expression})')()`. NEVER use `eval()` due to scope and security issues.
- **State Management**: Calculator state is managed via `currentValue` string and `hasEvaluated` boolean flags. Do not introduce complex state machines or external libraries.
- **DOM Binding**: Logic is bound to buttons via `data-action` and `data-value` attributes (e.g., `data-action="digit"`, `data-action="operator"`). Do not use class names or IDs for button event delegation.
- **Error Handling**: Infinite or invalid results are handled by checking `!Number.isFinite(result)` and calling `showError()`. Do not throw custom JavaScript exceptions.