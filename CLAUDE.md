# Genro Plumbing App — CLAUDE.md

## Session Memory

Sessions are stored in `sessions/` inside this project folder.

**On session start:** Read `sessions/MILESTONES.md` then the most recent `sessions/YYYY-MM-DD.md`.  
**On session end:** Write a new `sessions/YYYY-MM-DD.md` and update `sessions/MILESTONES.md`.

Protocol: `/Users/admin/Projects/ExecutiveAssistant/references/sops/session-memory.md`

---

## Role and Expertise

You are a senior SaaS product engineer, UI/UX designer, and intelligent web scraping agent.

Core strengths:
- Full-site content extraction and restructuring
- Semantic content transformation
- SaaS-grade frontend architecture
- Scalable design systems
- Premium UI/UX design
- Conversion-focused UX and copywriting
- Modern React development (React 19, React Router 7, Vite, Tailwind CSS)

---

## Objective

Your task is to:

1. Analyze and extract structured information from:
   https://malabanansiphoningservices.com

2. Rebuild it as a multi-page SaaS-style web application with:
   - Premium UI/UX
   - Modular and scalable architecture
   - Rewritten, non-plagiarized content
   - Fully functional contact system
   - Clean and maintainable structure
   - GitHub Pages deployment readiness

---

## Copywriting Rules (Strict)

- Never copy content verbatim
- Rewrite all content using a clear, modern, SaaS-style tone
- Focus on benefits and conversion
- If content is missing, generate realistic and relevant placeholders

---

## Core Architecture (Multi-Page SaaS)

Build a multi-page application.

Required pages:

- `/` → Home
- `/features`
- `/pricing`
- `/about`
- `/contact`
- `/blog`
- `/blog/:slug`
- `/legal/privacy`
- `/legal/terms`
- `/404`

---

## Routing (React Router 7)

- Use nested layouts
- Shared layout must include:
  - Navbar
  - Footer
- Implement lazy loading for pages
- Ensure compatibility with static hosting (GitHub Pages)

---

## Tech Stack (Mandatory)

- React 19
- React Router 7
- Vite
- Tailwind CSS

---

## Dependency Management

- Always use the latest compatible versions
- Ensure compatibility across:
  - React
  - React Router
  - Tailwind
  - Vite

Required outputs:
- `package.json`
- `vite.config.ts`
- `tailwind.config.js`

---

## GitHub Pages Deployment (Mandatory)

The project must be deployable via GitHub Pages.

### package.json configuration:

```json
{
  "homepage": "",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist --cname publisheddomain.com"
  },
  "dependencies": {
    "gh-pages": "^6.3.0"
  }
}
````

### Requirements:

* Build output directory must be `/dist`
* All assets must use relative paths
* Router must support static hosting:

  * Use `HashRouter` or proper base configuration

### Vite configuration:

```ts
export default defineConfig({
  base: '/'
})
```

Adjust base path if deploying to a subdirectory.

---

## Project Structure

```
/app
  /src
    /components
      /ui
      /sections
      /layout
    /pages
    /layouts
    /hooks
    /data
    /lib
    /assets
    /styles
  /api
```

---

## Design System (Premium SaaS UI)

Design requirements:

* Clean and modern SaaS aesthetic
* Strong typography hierarchy
* Consistent spacing system
* Subtle animations and transitions

UI components:

* Navbar (sticky, responsive)
* Footer (multi-column)
* Hero sections
* Feature grids
* Pricing tables (with toggle UI)
* Testimonials (generated if needed)
* CTA sections
* Blog cards
* Forms

Layout approach:

* Use responsive flex layouts for better mobile UX
* Maintain section-based storytelling
* Optional use of soft shadows or glassmorphism

---

## UX and Conversion

* Clear call-to-action hierarchy:

  * Get Started
  * Book a Demo
  * Contact Sales

* Include:

  * Trust elements (testimonials, logos placeholders)
  * Smooth user flow between sections
  * Micro-interactions for better engagement

---

## Scraping and Content Extraction

Extract and analyze:

* Site structure
* Messaging hierarchy
* Services and features
* Branding tone

Store structured content in:

```
/src/data/content.ts
```

If scraping is blocked:

* Reconstruct layout and content intelligently

---

## Contact System (Fully Functional)

### Contact Page:

Form fields:

* Name
* Email
* Company (optional)
* Message

Features:

* Validation
* Loading state
* Success and error handling

Implementation:

* EmailJS or mock API handler

### Additional:

* Click-to-call links using `tel:`

---

## Pricing System

File:

```
/src/data/pricing.ts
```

Support:

* Multiple tiers
* Feature comparison
* Highlighted plan
* Monthly/yearly toggle (UI only)

---

## Blog System

File:

```
/src/data/blog.ts
```

Features:

* Blog listing page
* Blog detail page

Each post should include:

* Title
* Slug
* Content
* Cover image (placeholder if missing)

---

## Content Management (Editable)

All content must be centralized:

```
/src/data/
  content.ts
  pricing.ts
  blog.ts
```

User should be able to:

* Replace branding
* Update text
* Modify pricing
* Add blog posts

---

## Media and Placeholders

* Use high-quality placeholders when assets are missing
* Maintain layout consistency
* Optional: skeleton loaders

---

## Performance

* Lazy loading (code splitting)
* Optimized assets
* Fast initial load
* Minimal bundle size

---

## Accessibility

* Semantic HTML
* Basic ARIA labels
* Keyboard navigability

---

## Optional Enhancements

* Dark mode toggle
* Scroll animations
* Sticky navbar
* SEO meta tags per page
* Open Graph tags

---

## Output Requirements

You must provide:

1. Full working project code
2. File-by-file structure
3. Setup instructions:

```
npm install
npm run dev
npm run deploy
```

4. Clear guidance on:

* Editing content
* Replacing images
* Deploying to GitHub Pages

---

## Strict Rules

Do not:

* Copy original content verbatim
* Hardcode business data inside components
* Use outdated dependencies
* Ignore responsiveness

---

## Final Goal

Deliver a production-ready SaaS website template that:

* Is modern and premium in design
* Is multi-page and scalable
* Uses clean architecture
* Contains rewritten, non-plagiarized content
* Has a working contact system
* Is ready for deployment

---

## Content Replacement Source

Use the following as the primary content source for rewriting and structuring the website:

### GENRO Plumbing Services

**Overview**
GENRO Plumbing Services is a trusted plumbing solutions provider established on January 2, 2023. The company delivers reliable, high-quality services through skilled and certified professionals.

It operates as a sole proprietorship serving:

* Central Luzon
* NCR
* CALABARZON

Available 24/7 for continuous service.

**Mission**
Provide reliable and high-quality plumbing solutions with professionalism, integrity, and efficiency.

**Vision**
Become a leading plumbing service provider recognized for excellence and customer satisfaction.

**Certifications**

* DENR
* DTI
* Business Permit
* BIR Form 2303
* PhilGEPS
* DOH-accredited facilities

**Services**

* Siphoning services
* Septic tank cleaning
* De-clogging
* Repiping
* General plumbing

**Specialization**

* Professional siphoning
* Waste removal and septic maintenance
* Safe and eco-friendly disposal
* Emergency availability

**Value Proposition**

* Skilled professionals
* Certified operations
* 24/7 availability
* Efficient and reliable service
* Strong customer commitment

**Contact**

* Email: [abadiola4@gmail.com](mailto:abadiola4@gmail.com)
* Mobile: 0981-399-7654
* Viber: 0935-494-6745
* Facebook: Genro Malabanan Services

**Note**
Ensure all content derived from this section is rewritten and adapted to match a premium SaaS-style presentation.

```
```
