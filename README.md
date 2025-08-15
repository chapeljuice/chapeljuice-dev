# Chapeljuice.dev - Ryan Chapel's Portfolio

A modern portfolio website showcasing web development expertise, built with Astro, React, and Tailwind CSS.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d3f3de3-58c4-444e-b0a0-bc4dd361f57b/deploy-status)](https://app.netlify.com/projects/animated-pixie-4fea0d/deploys)

## 🚀 Features

- **Dynamic Color Themes**: Click the logo to switch between teal and orange color schemes
- **Portfolio Showcase**: Interactive project filtering and modal displays
- **Modern Design**: Clean, responsive design with smooth animations and hover effects
- **Fast Performance**: Optimized for Core Web Vitals with responsive images, preloading and lazy loading
- **Interactive Components**: React components for dynamic filtering, forms, and navigation
- **SEO Optimized**: Built-in SEO best practices, structured data, and meta tags
- **Mobile First**: Fully responsive design that works on all devices
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Security**: Content Security Policy (CSP) and security headers
- **PWA Ready**: Web app manifest and theme color support

## 🎨 Color Theme System

The site features a dynamic color switching system:
- **Default Theme**: Teal color scheme (`#008080`)
- **Alternate Theme**: Orange color scheme (`#ee5418`)
- **How to Use**: Click the main logo in the navigation to toggle themes
- **Implementation**: CSS custom properties with React state management

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **UI Library**: [React](https://reactjs.org/) - Interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **TypeScript**: Type-safe development
- **Analytics**: Google Tag Manager (GTM)
- **Icons**: Heroicons via SVG
- **Fonts**: Google Fonts (Silkscreen & Jost)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Main navigation with theme switching
│   ├── Footer.tsx       # Site footer
│   ├── ProjectCard.tsx  # Project display component
│   ├── ProjectFilter.tsx # Project filtering component
│   ├── ProjectModal.tsx # Project detail modal
│   ├── ContactForm.tsx  # Contact form
│   ├── ResponsiveImage.tsx # React responsive image component
│   ├── ResponsiveImage.astro # Astro responsive image component
│   └── SectionDivider.tsx # Chevron-looking section dividers
├── data/               # JSON data files
│   └── projects.json   # Technical projects data
├── layouts/            # Astro layouts
│   └── Layout.astro    # Main page layout
├── pages/              # Site pages
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   ├── projects.astro  # Projects showcase
│   ├── contact.astro   # Contact page
│   └── sitemap.xml.ts  # Dynamic sitemap generation
└── styles/
    └── global.css      # Global styles, theme variables, and utilities
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chapeljuice-dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 🎯 Key Features Implementation

### Color Theme Switching
- **Location**: `src/components/Navigation.tsx`
- **CSS Variables**: `src/styles/global.css`
- **How it works**: React state manages theme, CSS custom properties handle color changes
- **Accessibility**: Keyboard navigation and ARIA labels included

### Performance Optimizations
- **Responsive Images**: Picture element with WebP fallbacks and multiple sizes
- **Image Optimization**: Lazy loading, proper dimensions, and loading strategies
- **Font Loading**: Preconnect and optimized font loading
- **Bundle Splitting**: Separate vendor chunks for React and Astro
- **Caching**: Optimized cache headers for static assets

### Security Features
- **Content Security Policy**: Configured for GTM and inline scripts
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **HTTPS Enforcement**: Secure connections only

## 📝 Customization

### Adding Projects

Edit `src/data/projects.json` to add your technical projects:

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js", "PostgreSQL"],
  "category": "Web Development",
  "year": "2024",
  "status": "Completed",
  "image": "/images/project-image.jpg",
  "link": "https://project-url.com",
  "github": "https://github.com/username/repo"
}
```

### Customizing Color Themes

Edit `src/styles/global.css` to modify the color schemes:

```css
:root {
  --primary-color: #008080;    /* Default teal */
  --primary-hover: #006666;
  /* ... other teal variants */
}

body.orange-theme {
  --primary-color: #ee5418;    /* Orange theme */
  --primary-hover: #d14a15;
  /* ... other orange variants */
}
```

### Updating Content

- **Navigation**: Edit `src/components/Navigation.tsx`
- **Footer**: Edit `src/components/Footer.tsx`
- **About Page**: Edit `src/pages/about.astro`
- **Contact Info**: Edit `src/pages/contact.astro`
- **Projects**: Edit `src/data/projects.json`

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in components
- Theme-aware classes: Use `.text-primary`, `.bg-primary`, etc.

## 🌐 Deployment

### Building for Production

```bash
npm run build
```

This generates a `dist/` folder with static files ready for deployment.

### Hosting Options

**Netlify** (Recommended and what I'm currently using):
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

**Vercel**:
1. Import your GitHub repository
2. Vercel auto-detects Astro settings
3. Deploy!

**GitHub Pages**:
1. Update `astro.config.mjs` with your GitHub Pages URL
2. Use GitHub Actions for automatic deployment

**Other Static Hosts**:
- Cloudflare Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

### Environment Variables

For contact form functionality, you may want to add:

```env
PUBLIC_SITE_URL=https://yourdomain.com
```

## 📧 Contact Form Setup

The contact form currently shows a success message without actually sending emails. To enable real form submission:

1. **Netlify Forms**: Add `netlify` attribute to the form
2. **Formspree**: Add your Formspree endpoint
3. **EmailJS**: Integrate with EmailJS service
4. **Custom API**: Create your own backend endpoint

## 🎨 Color Scheme

The site uses dynamic color themes:

### Default Theme (Teal)
- **Primary**: Teal (`#008080`)
- **Secondary**: Gray (`#6B7280`)
- **Background**: Light gray (`#F9FAFB`)

### Alternate Theme (Orange)
- **Primary**: Orange (`#ee5418`)
- **Secondary**: Gray (`#6B7280`)
- **Background**: Light gray (`#F9FAFB`)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests to improve my portfolio template!

---

Built with ❤️ by Chapeljuice. This project is using Astro, React, and Tailwind CSS.
