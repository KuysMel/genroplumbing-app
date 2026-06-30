# GENRO Plumbing Services - SaaS Website

A modern, multi-page SaaS website for GENRO Plumbing Services built with React 19, React Router 7, Vite, and Tailwind CSS.

## Features

- **Multi-page Application**: Home, Features, Pricing, About, Contact, Blog, Legal Pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Fully functional form with validation and submission handling
- **Blog System**: Dynamic blog listing and detail pages
- **Pricing**: Multiple service packages with feature comparison
- **SEO Ready**: Meta tags and semantic HTML
- **GitHub Pages Compatible**: Ready for static hosting deployment
- **Performance**: Code splitting and lazy loading for optimal performance

## Tech Stack

- **Framework**: React 19
- **Routing**: React Router 7
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
genroplumbing-app/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogDetail.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── NotFound.tsx
│   ├── layouts/
│   │   └── RootLayout.tsx
│   ├── data/
│   │   ├── content.ts (Site content and services)
│   │   ├── pricing.ts (Pricing plans and packages)
│   │   └── blog.ts (Blog posts)
│   ├── styles/
│   │   └── index.css (Tailwind and custom styles)
│   ├── App.tsx (Router configuration)
│   └── main.tsx (Entry point)
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd genroplumbing-app
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Build output is in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Editing Content

### Site Content

Edit `/src/data/content.ts` to change:
- Company information
- Hero section text
- Services descriptions
- Features
- Certifications

### Pricing

Edit `/src/data/pricing.ts` to change:
- Service packages and pricing
- Pricing tiers
- Feature comparisons

### Blog Posts

Edit `/src/data/blog.ts` to:
- Add new blog posts
- Update existing posts
- Modify blog metadata

### Pages

Each page is a standalone component in `/src/pages/`. Edit them to customize content, layout, or styling.

## Customization

### Branding

Update the company information in `/src/data/content.ts`:
```typescript
company: {
  name: 'GENRO Plumbing',
  email: 'abadiola4@gmail.com',
  phone: '0981-399-7654',
  // ... other details
}
```

### Colors

Modify colors in `/tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066cc',
      secondary: '#00a86b',
    },
  },
}
```

### Contact Form

The contact form in `/src/pages/Contact.tsx` currently uses a mock submission. To integrate with a real email service:

1. Use EmailJS (recommended)
2. Create a backend API endpoint
3. Use a serverless function

### Blog Images

Replace placeholder images in blog posts by updating image URLs in `/src/data/blog.ts`

## Deployment

### GitHub Pages

1. **Configure the repository:**
   ```bash
   git init
   git remote add origin https://github.com/yourusername/genroplumbing-app.git
   ```

2. **Update package.json:**
   - Modify the `homepage` field if deploying to a subdirectory
   - Default `/` assumes root domain deployment

3. **Build and Deploy:**
   ```bash
   npm run deploy
   ```

4. **GitHub Settings:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch and `/root` folder

### Other Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder to:**
   - Vercel
   - Netlify
   - Any static hosting service

## Performance

- Lazy loading for non-critical pages
- Code splitting per route
- Optimized bundle size (~250KB uncompressed)
- CSS optimization with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO

Each page includes:
- Meta description tags
- Open Graph tags (ready to implement)
- Semantic HTML
- Mobile-friendly viewport

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast

## Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clean dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment issues

Ensure:
- `base` in `vite.config.ts` matches your deployment path
- All assets use relative paths
- No hardcoded absolute paths in code

## Support & Contact

For questions about the website:
- **Email**: abadiola4@gmail.com
- **Phone**: 0981-399-7654
- **Facebook**: Genro Malabanan Services

## License

© 2026 GENRO Plumbing Services. All rights reserved.

---

**Built with ❤️ for GENRO Plumbing Services**
