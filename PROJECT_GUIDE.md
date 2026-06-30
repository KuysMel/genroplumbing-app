# Genro Plumbing — Project Guide

**Project Name:** Genro Plumbing Services  
**Description:** SaaS rebuild of a plumbing services website. Multi-page app with services, gallery, contact, booking.  
**Tech Lead:** Dangal Macatangay  
**Status:** On Hold (Almost Done)  
**Homepage:** https://genromalabanansiphoningservices.com

---

## Technology Stack

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0-rc-66 | UI framework |
| `react-dom` | ^19.0.0-rc-66 | React rendering |
| `react-router` | ^7.0.0 | Routing |
| `vite` | ^7.0.0 | Build tool |
| `tailwindcss` | ^4.0.0 | Styling |
| `lucide-react` | ^1.11.0 | Icons |
| `framer-motion` | ^12.38.0 | Animations |
| `hls.js` | ^1.6.16 | Video streaming |

---

## Primary Features ✅

- [x] Dark mode + light mode (full implementation)
- [x] Gallery component system
- [x] Premium UI/UX with animations
- [x] Service listings
- [x] Contact form
- [x] Responsive design
- [x] Video content (HLS streaming)

---

## Project Structure

```
genroplumbing-app/
├── src/
│   ├── pages/          # Service pages, landing, contact
│   ├── components/     # Reusable UI components
│   ├── styles/         # Global styles + Tailwind config
│   └── [other src files]
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## Deployment

**Target:** GitHub Pages (gh-pages deploy script configured)

```bash
npm run build
npm run deploy
```

---

## Known Issues
- None documented (project marked as "almost done")

---

## Next Steps
1. Final testing before production
2. Deploy to production domain
3. Monitor performance

---

## Documentation Files
- DARK_MODE_GUIDE.md — dark mode implementation
- GALLERY_COMPONENT_GUIDE.md — gallery system
- UNIVERSAL_DARK_MODE_UPDATE.md — theming
