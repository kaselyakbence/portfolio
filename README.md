# Bence Kaselyák — Portfolio

My personal portfolio site, built to introduce myself and demonstrate my skills as a Web Developer & Software Tester.

**Live site:** [kaselyakbence.com](https://kaselyakbence.com/)

---

## Reaching the site

The site is available in three languages, each with its own shareable URL:

- English — [kaselyakbence.com/en](https://kaselyakbence.com/en)
- German — [kaselyakbence.com/de](https://kaselyakbence.com/de)
- Hungarian — [kaselyakbence.com/hu](https://kaselyakbence.com/hu)

## Key technologies and tools

- [TypeScript](https://www.typescriptlang.org/) — language for the entire codebase
- [React 19](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tooling and dev server
- [SCSS](https://sass-lang.com/) — styling
- [Git / GitHub](https://github.com/) — version control
- [Claude](https://claude.com/) — AI pair-programmer used throughout development
- [Visual Studio Code](https://code.visualstudio.com/) — editor

## How it's built

- **Single-page, section-based navigation.** Home, About, Skills, and Projects are full-height sections on one continuous page. Wheel, trackpad, and touch input are captured to snap between sections, while content that needs its own scrolling — the About page's experience timeline, the Skills carousel — still scrolls normally instead of jumping sections.
- **Language-aware routing.** Each language lives at its own URL (`/en`, `/de`, `/hu`) via `react-router`, so a link to a specific language can be shared directly and reopens in that language. `hreflang` tags and a per-language `sitemap.xml` keep it search-engine friendly.
- **Accessible by design.** Semantic markup, keyboard-operable controls, `aria-label`s on icon-only buttons, and text contrast checked against WCAG guidelines.
