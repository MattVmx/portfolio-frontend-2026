# Matías Speroni - Frontend Portfolio

A bilingual portfolio showcasing selected front-end, full-stack and UI projects. Built with Next.js and focused on responsive design, accessibility and a clear project-review experience.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

**[View live portfolio](https://matias-speroni-portfolio.vercel.app/)** · **[LinkedIn](https://www.linkedin.com/in/speroni-matias/)**

<p align="center">
  <a href="https://matias-speroni-portfolio.vercel.app/">
    <img src="docs/portfolio-preview.webp" alt="Matías Speroni frontend portfolio preview" width="100%">
  </a>
</p>

## Overview

This portfolio presents Matías Speroni's experience, technical focus and selected projects through a single-page interface. Each project card opens an interactive case summary with its outcome, features, technology stack and original demo or repository.

The interface supports Spanish and English and preserves the selected language and color theme in the browser.

## Features

- Responsive layout for desktop, tablet and mobile screens
- Spanish and English interface
- Light and dark themes with saved preferences
- Filterable project gallery
- Accessible project-detail dialogs with keyboard support
- Categorized technology and tool explorer
- Direct links to live demos, GitHub, LinkedIn and email
- SEO metadata and social-sharing preview
- Reduced-motion support

## Selected projects

| Project | Type | Link |
| --- | --- | --- |
| Vitalidapp | Full-stack healthcare application | [Source](https://github.com/MattVmx/vitalidapp) |
| Ladera Stay | Custom WordPress hospitality site | [Live demo](https://playground.wordpress.net/#%7B%22%24schema%22%3A%22https%3A%2F%2Fplayground.wordpress.net%2Fblueprint-schema.json%22%2C%22preferredVersions%22%3A%7B%22php%22%3A%228.3%22%2C%22wp%22%3A%22latest%22%7D%2C%22landingPage%22%3A%22%2F%22%2C%22login%22%3Atrue%2C%22steps%22%3A%5B%7B%22step%22%3A%22installTheme%22%2C%22themeData%22%3A%7B%22resource%22%3A%22git%3Adirectory%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FMattVmx%2Fladera-stay-wordpress%22%2C%22ref%22%3A%22main%22%2C%22path%22%3A%22%2F%22%7D%2C%22options%22%3A%7B%22activate%22%3Atrue%7D%7D%5D%7D) |
| Punta Glacial | Ice cream shop website | [Live demo](https://mattvmx.github.io/puntaglacial-web/) |
| Macrotec | Real estate website | [Live demo](https://mattvmx.github.io/macrotec-web/) |
| Supremo | Restaurant website | [Live demo](https://mattvmx.github.io/supremo-web/) |
| SUCAR | Car dealership website | [Live demo](https://mattvmx.github.io/sucar-web/) |
| App Design | Visual landing page | [Live demo](https://mattvmx.github.io/app-visual-design/) |

## Tech stack

- Next.js 15
- React 19
- TypeScript
- CSS3
- Vercel

## Project structure

```text
portfolio-frontend-2026/
├── app/
│   ├── globals.css    # Design system and responsive styles
│   ├── layout.tsx     # Global metadata and page shell
│   └── page.tsx       # Portfolio content and interactions
├── public/images/     # Profile, project and social-preview assets
├── scripts/           # Build helpers
└── package.json
```

## Run locally

```bash
git clone https://github.com/MattVmx/portfolio-frontend-2026.git
cd portfolio-frontend-2026
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
npm start
```

The production site is deployed automatically through Vercel.

## Author

Developed by **Matías Speroni**.

- [Portfolio](https://matias-speroni-portfolio.vercel.app/)
- [GitHub](https://github.com/MattVmx)
- [LinkedIn](https://www.linkedin.com/in/speroni-matias/)
