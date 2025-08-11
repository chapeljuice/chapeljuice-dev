# Walnut & Web Portfolio

A modern portfolio website showcasing web development expertise and custom woodworking, built with Astro, React, and Tailwind CSS.

## 🚀 Features

- **Dual Portfolio**: Showcases both technical projects and woodworking creations
- **Modern Design**: Clean, responsive design with smooth animations
- **Fast Performance**: Astro's static site generation for optimal loading speeds
- **Interactive Components**: React components for dynamic filtering and forms
- **SEO Optimized**: Built-in SEO best practices and meta tags
- **Mobile First**: Fully responsive design that works on all devices

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **UI Library**: [React](https://reactjs.org/) - Interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **TypeScript**: Type-safe development
- **Icons**: Heroicons via SVG

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Main navigation
│   ├── Footer.tsx       # Site footer
│   ├── ProjectCard.tsx  # Project display component
│   ├── ProductCard.tsx  # Product display component
│   └── ContactForm.tsx  # Contact form
├── data/               # JSON data files
│   ├── projects.json   # Technical projects data
│   └── products.json   # Woodworking products data
├── layouts/            # Astro layouts
│   └── Layout.astro    # Main page layout
├── pages/              # Site pages
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   ├── projects.astro  # Projects showcase
│   ├── products.astro  # Woodworking products
│   └── contact.astro   # Contact page
└── styles/
    └── global.css      # Global styles and utilities
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd walnutandweb
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

### Adding Woodworking Products

Edit `src/data/products.json` to showcase your woodworking:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "description": "Product description",
  "category": "Furniture",
  "materials": ["Oak", "Steel Hardware"],
  "dimensions": "24\" L x 18\" W x 30\" H",
  "price": 850,
  "status": "Available",
  "images": ["/images/product-1.jpg"],
  "featured": true,
  "craftingTime": "3 weeks",
  "year": "2024"
}
```

### Updating Content

- **Navigation**: Edit `src/components/Navigation.tsx`
- **Footer**: Edit `src/components/Footer.tsx`
- **About Page**: Edit `src/pages/about.astro`
- **Contact Info**: Edit `src/pages/contact.astro`

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in components

## 🌐 Deployment

### Building for Production

```bash
npm run build
```

This generates a `dist/` folder with static files ready for deployment.

### Hosting Options

**Netlify** (Recommended):
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

The site uses a warm, professional color palette:

- **Primary**: Amber (`#F59E0B`)
- **Secondary**: Gray (`#6B7280`)
- **Accent**: Blue (`#3B82F6`)
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

Feel free to submit issues and pull requests to improve the portfolio template!

---

Built with ❤️ using Astro, React, and Tailwind CSS
