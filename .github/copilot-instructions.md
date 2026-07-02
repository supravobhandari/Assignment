# Stack
- Vanilla HTML5 / CSS3 / JavaScript (ES6).
- No build steps, no external frameworks, no bundlers.

# Global Project Rules
- **CSS Architecture**: We use a custom property (`var(--name)`) based design system in `style.css` (e.g. `--background`, `--panel`). Do not hardcode colors in new CSS rules.
- **HTML Structure**: The calculator layout relies on CSS Grid and Flexbox. Do not introduce Bootstrap or utility classes like Tailwind.
- **No Third-Party Dependencies**: The calculator must run entirely in the browser using native web APIs.