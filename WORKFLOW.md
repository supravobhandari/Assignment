# GitHub Copilot Workflow

## Overview

This project was built to demonstrate how GitHub Copilot can be used throughout the software development lifecycle. Rather than using Copilot only for code generation, I used it to scaffold the application, enhance functionality, refactor code, review the implementation, and document the project.

---

# Prompt Engineering

## Prompt 1 – Create the Initial Calculator

### Prompt

> Create a responsive calculator using HTML, CSS, and JavaScript. Organize the project into `index.html`, `style.css`, and `script.js`. Support addition, subtraction, multiplication, and division.

### Reason

I wanted Copilot to generate the initial project structure and implement the core calculator functionality.

### Result

Copilot generated the HTML layout, responsive styling, and JavaScript logic for the four arithmetic operations.

---

## Prompt 2 – Improve Functionality

### Prompt

> Add decimal support, keyboard shortcuts, a clear button, and handle division by zero with an appropriate error message.

### Reason

The initial implementation lacked features expected from a practical calculator.

### Result

Copilot added keyboard support, improved input handling, decimal calculations, and validation for division by zero.

---

## Prompt 3 – Refactor the Code

### Prompt

> Review the JavaScript and refactor it into smaller reusable functions without changing the calculator's behavior.

### Reason

I wanted to improve readability, maintainability, and reduce duplicate code.

### Result

Copilot reorganized the code into smaller reusable functions while preserving functionality.

---

## Prompt Improvement

### Initial Prompt

> Create a calculator.

### Issue

The generated calculator worked but lacked responsive design, keyboard support, modular code, and proper validation.

### Improved Prompt

> Create a responsive calculator using HTML, CSS, and JavaScript with keyboard shortcuts, decimal support, modular JavaScript, and proper error handling.

### Result

The refined prompt produced a much more complete implementation and required significantly fewer manual changes.

---

# Agentic Workflow

## Scenario 1 – Initial Project Generation

### Task

Generate the initial calculator application.

### Delegated to Copilot

- Create the HTML structure.
- Generate responsive CSS.
- Implement JavaScript logic.
- Connect all calculator buttons.

### My Intervention

I reviewed the generated code, adjusted the layout where necessary, and verified that all calculator operations worked correctly.

### Verification

I manually tested:

- Addition
- Subtraction
- Multiplication
- Division

before continuing development.

---

## Scenario 2 – Design System Refactor & Validation (Multi-step Agent Mode)

### Task

Refactor the UI to use a custom CSS variable design system across multiple files, test the logic, and fix any breaking changes.

### Delegated to Copilot Agent (Workspace / Agent Mode)

- **Multi-file edit**: Extract all hardcoded colors in `style.css` into `:root` CSS variables (e.g., `--panel`, `--background`) and update `index.html` classes to match the new structure.
- **Testing**: Run the `calculator-testing` skill to verify nothing broke.

### My Intervention & Iteration

During the first pass, the Agent successfully refactored the CSS, but it accidentally removed the `data-action` attributes from `index.html`, which broke the JavaScript event listeners. When the agent ran the test script, it realized the buttons weren't responding. 

I had to iterate by prompting: *"You broke the JavaScript bindings in the HTML. Restore the `data-action` and `data-value` attributes and re-run the tests."* 

The Agent then fixed the HTML file and re-ran the syntax and manual test steps.

### Verification

After the agent reported the fix, I manually ran through the `calculator-testing` reference doc (testing addition, division by zero, and keyboard shortcuts) to verify the result before trusting it.

---

# Context & Token Economy

## Model Used

- **GPT-4o (Inline Copilot & Standard Chat):** Used for single-file code generation (like writing the initial functions in `script.js`) because of its speed and low latency.
- **Claude 3.5 Sonnet (Agent Mode / Copilot Workspace):** Used for the multi-file design system refactor and running the testing skill, because it excels at planning and executing multi-step procedural tasks across an entire codebase.

## Context Strategy & Trimming

To reduce unnecessary context and token usage, I actively trimmed the instructions:

- **Concrete Example**: Instead of putting the entire 20-step manual testing checklist inside the always-on `copilot-instructions.md` (which would consume tokens on *every* single code completion request), I moved the testing procedure into a dedicated custom Skill (`calculator-testing`). This way, those tokens are only consumed when the agent is actively asked to test the app.
- Path-scoped instructions (`javascript.instructions.md`) ensure that HTML and CSS files aren't burdened with JS-specific rules.

## Premium / Agent Usage

Approximately 10–15 GitHub Copilot interactions were used during development, including:

- Initial project generation
- Feature enhancements
- JavaScript refactoring
- Agent-based project review
- Documentation assistance

The exact number may vary depending on prompt refinements and accepted suggestions.

---

# Verification Summary

After every major change, I verified the following functionality:

- ✅ Addition
- ✅ Subtraction
- ✅ Multiplication
- ✅ Division
- ✅ Decimal calculations
- ✅ Division by zero handling
- ✅ Keyboard shortcuts
- ✅ Responsive layout
- ✅ No JavaScript console errors

These verification steps ensured that all Copilot-generated changes maintained the expected behavior of the application.