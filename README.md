# Calculator

## Overview

This project is a responsive calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations while demonstrating effective use of GitHub Copilot for software development.

The primary goal of this project was to showcase GitHub Copilot's context management, prompting strategy, agent workflow, and documentation rather than to build a complex application.

## Features

* Addition
* Subtraction
* Multiplication
* Division
* Decimal number support
* Keyboard shortcuts
* Clear functionality
* Division-by-zero validation
* Responsive user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## GitHub Copilot Usage

GitHub Copilot was used throughout the project to:

* Generate the initial application structure.
* Implement calculator functionality.
* Add additional features.
* Refactor JavaScript into smaller reusable functions.
* Review and improve the overall codebase using Agent Mode.
* Assist with project documentation.

Project-specific instructions and reusable skills were added under the `.github` directory to provide Copilot with context and improve future development.

## Copilot Context Architecture

Here's a quick breakdown of when to use `copilot-instructions.md` versus `AGENTS.md`:

*   **`copilot-instructions.md`**: Think of this as the rulebook for your code. It tells Copilot things like "always use this specific color format" or "never use the eval() function." It's great for making sure code suggestions match your project's style.
*   **`AGENTS.md`**: This is more like an employee handbook for the Copilot Agent. Instead of just coding rules, it gives the agent step-by-step workflows, like "whenever you change a file, make sure to run the tests first."

**Do you need both?**
Yes, you can absolutely use both in the same project! `copilot-instructions.md` makes sure the code looks right, while `AGENTS.md` makes sure the AI agent acts right and follows your workflow.

## Agent Skills

We added a custom skill (`calculator-testing`) to help the Copilot Agent test our app.

**Why is this a Skill instead of going in `copilot-instructions.md`?**
Because `copilot-instructions.md` is passive—it sits in the background and makes sure the code being written matches our style. A Skill is active. It gives the agent a specific, step-by-step job to do (like running a syntax check command and then giving us a checklist of manual tests to click through). You use instructions for how the code should *look*, and skills for what the agent should *do*.

## Project Structure

```text
calculator/
├── index.html
├── style.css
├── script.js
├── README.md
├── WORKFLOW.md
└── .github/
    ├── copilot-instructions.md
    ├── instructions/
    │   └── javascript.instructions.md
    └── skills/
        └── calculator-testing/
            └── SKILL.md
```

## Running the Project

Clone the repository and open `index.html` in any modern web browser.

No additional dependencies or installation steps are required.

## Assumptions

* The calculator is intended to run entirely in the browser.
* No external libraries or frameworks were used.
* The focus of the project is demonstrating GitHub Copilot workflows and best practices.

## What I'm Most Proud Of

I'm particularly proud of using GitHub Copilot beyond simple code generation by providing project-specific instructions, creating a reusable testing skill, documenting the prompting workflow, and using Agent Mode to review and improve the implementation. This helped produce a cleaner, more maintainable project while demonstrating how contextual guidance improves AI-assisted development.
