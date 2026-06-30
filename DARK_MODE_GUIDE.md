# Dark Mode & Glassmorphism Implementation

## Overview

GENRO Plumbing Services website now features a complete light/dark mode toggle with glassmorphism UI design and professional pipe background images.

---

## Features Implemented

### 🌓 Dark Mode Toggle

- **Automatic detection**: Respects system dark mode preference
- **Manual toggle**: Theme toggle button in navbar
- **Persistent storage**: Theme preference saved to localStorage
- **Smooth transitions**: CSS transitions between light and dark modes
- **Full coverage**: All pages and components support both themes

### 🎨 Glassmorphism Design

- **Glass cards**: Semi-transparent cards with backdrop blur effect
- **Enhanced depth**: Multi-layered glass elements for visual hierarchy
- **Smooth hover effects**: Interactive states with smooth transitions
- **Premium aesthetic**: Modern, elegant UI appearance

### 🖼️ Professional Backgrounds

**Hero Section:**
- Light theme: Professional plumbing/pipes background
- URL: `https://images.unsplash.com/photo-1678446332656-e1749cbf63c3`

**Stats Section:**
- Dark theme: Industrial pipes background
- URL: `https://images.unsplash.com/photo-1678446332668-301c5ea11739`

---

## Technical Implementation

### Theme Hook (`src/hooks/useTheme.ts`)

```typescript
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage or system preference
  });

  useEffect(() => {
    // Apply 'dark' class to html element
    // Save preference to localStorage
  }, [theme]);

  const toggleTheme = () => {
    // Switch between 'light' and 'dark'
  };

  return { theme, toggleTheme };
}
```

**Usage:**
```typescript
const { theme, toggleTheme } = useTheme();
```

### Theme Toggle Component (`src/components/ui/ThemeToggle.tsx`)

Visible in navbar with sun/moon icons:
- **Light mode**: Moon icon
- **Dark mode**: Sun icon
- Works on desktop and mobile

### Tailwind Dark Mode Configuration

**File:** `tailwind.config.js`

```javascript
{
  darkMode: 'class',  // Uses class-based dark mode
  // ... other config
}
```

**HTML Dark Class:**
- When dark mode is active: `<html class="dark">`
- When light mode is active: `<html class="">` (no class)

### CSS Utilities

**File:** `src/styles/index.css`

#### Glass Classes

```css
.glass {
  @apply backdrop-blur-md bg-white/70 border border-white/30 rounded-xl;
}

.glass-dark {
  @apply backdrop-blur-md bg-slate-900/70 border border-white/10 rounded-xl;
}

.glass-card {
  @apply backdrop-blur-md bg-white/70 dark:bg-slate-900/70 
         border border-white/30 dark:border-white/10 rounded-xl 
         p-6 hover:bg-white/80 dark:hover:bg-slate-800/60 
         transition-all;
}
```

#### Button Classes

```css
.btn-primary {
  @apply inline-block px-6 py-3 bg-blue-600 text-white 
         rounded-lg font-semibold hover:bg-blue-700 
         transition-colors dark:bg-blue-700 dark:hover:bg-blue-600;
}
```

---

## Usage in Components

### Applying Dark Mode Styling

**Text Colors:**
```tsx
<h1 className="text-gray-900 dark:text-white">Title</h1>
<p className="text-gray-600 dark:text-gray-300">Description</p>
```

**Background Colors:**
```tsx
<section className="bg-white dark:bg-slate-900">
  Content
</section>
```

**Glass Cards:**
```tsx
<div className="glass-card">
  Content with glassmorphism effect
</div>
```

**Backgrounds with Overlay:**
```tsx
<section
  className="bg-cover bg-center"
  style={{
    backgroundImage: `url('...')`
  }}
>
  <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/80" />
  {/* Content */}
</section>
```

---

## Color Palette

### Light Theme
- Background: `white`
- Text Primary: `gray-900`
- Text Secondary: `gray-600`
- Accent: `blue-600`
- Glass: `white/70` with `white/30` border

### Dark Theme
- Background: `slate-900`
- Text Primary: `white`
- Text Secondary: `gray-300`
- Accent: `blue-400` / `blue-700`
- Glass: `slate-900/70` with `white/10` border

---

## Pages Updated with Dark Mode

✅ Home
✅ Features
✅ Pricing
✅ About
✅ Contact
✅ Blog
✅ Blog Detail
✅ Privacy
✅ Terms
✅ 404 Not Found
✅ Navbar (with theme toggle)
✅ Footer

---

## Background Images

### How to Change Backgrounds

**Edit `src/pages/Home.tsx` (Hero Section):**
```tsx
style={{
  backgroundImage: `url('your-image-url')`
}}
```

**Edit `src/pages/Home.tsx` (Stats Section):**
```tsx
style={{
  backgroundImage: `url('your-image-url')`
}}
```

### Image Requirements

- Format: JPG, PNG (JPG recommended for performance)
- Size: Minimum 1200px wide
- Aspect Ratio: Wide format (16:9 or wider)
- Optimization: Use services like:
  - Unsplash (royalty-free)
  - Pexels (royalty-free)
  - Pixabay (royalty-free)
  - TinyPNG (optimization)

---

## Performance Notes

- ✅ No additional bundle size impact
- ✅ CSS-based dark mode (efficient)
- ✅ System preference detection (battery-friendly on dark mode devices)
- ✅ Smooth transitions (60fps animations)
- ✅ Background images lazy-loaded
- ✅ Glassmorphism uses GPU acceleration

---

## Browser Support

- ✅ Chrome 76+
- ✅ Firefox 67+
- ✅ Safari 12.1+
- ✅ Edge 79+

**Dark Mode Detection Support:**
- `prefers-color-scheme` media query supported in all modern browsers

---

## Testing Dark Mode

### Manual Testing

1. **Light Mode (Default)**
   - Check all text is readable
   - Verify cards have proper opacity
   - Confirm hover states work

2. **Dark Mode Toggle**
   - Click theme toggle in navbar
   - Verify instant theme switch
   - Check localStorage persistence
   - Refresh page—theme should persist

3. **System Preference**
   - Clear localStorage: `localStorage.clear()`
   - Set OS to dark mode
   - Refresh page—should auto-select dark mode

4. **Contrast Check**
   - Use WebAIM contrast checker
   - All text should have minimum 4.5:1 ratio
   - Verify on all background colors

---

## Customization Guide

### Adding Dark Mode to New Components

**Step 1: Add light/dark variants to class names**
```tsx
<div className="bg-white dark:bg-slate-900">
  <h2 className="text-gray-900 dark:text-white">Title</h2>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
</div>
```

**Step 2: Test both themes**
- Toggle theme in navbar
- Verify readability and aesthetics
- Check hover/focus states

### Creating Custom Glass Variants

Edit `src/styles/index.css`:
```css
.glass-sm {
  @apply backdrop-blur-sm bg-white/50 dark:bg-slate-900/50 
         border border-white/20 dark:border-white/5 rounded-lg;
}
```

Then use in components:
```tsx
<div className="glass-sm p-4">Content</div>
```

---

## Troubleshooting

### Theme Not Persisting

**Issue:** Dark mode resets on refresh

**Solution:** Check localStorage:
```javascript
// In browser console
localStorage.getItem('theme')  // Should return 'light' or 'dark'
```

If empty, theme detection is working but theme preference wasn't saved.

### Glassmorphism Not Showing

**Issue:** Glass effect looks solid, not transparent

**Causes:**
- Missing `backdrop-blur-md` class
- Check browser version (Safari 9+ required)
- Ensure parent has background image or color

### Dark Mode Not Applying

**Issue:** Styles not changing in dark mode

**Solution:** Ensure:
1. HTML element has `class="dark"`
2. Component uses `dark:` prefix on classes
3. Rebuild: `npm run build`

---

## Future Enhancements

Potential improvements:
- [ ] Per-page theme override
- [ ] Custom theme palette editor
- [ ] High contrast mode for accessibility
- [ ] Theme persistence with cloud sync
- [ ] Animated theme transition effects
- [ ] Additional theme options (sepia, etc.)

---

## Resources

- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [CSS Backdrop Blur](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [Prefers Color Scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Glassmorphism Design](https://uxdesign.cc/glassmorphism-in-user-interfaces-3f50eb1e5933)

---

**Last Updated:** April 27, 2026
**Version:** 1.0
**Status:** Production Ready ✅
