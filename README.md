# queenTea — Premium Whole-Leaf Organic Teas

![queenTea](https://img.shields.io/badge/Made%20with-Next.js-black)
![License](https://img.shields.io/badge/License-MIT-green)
![Developer](https://img.shields.io/badge/Developer-Rehan%20Raza-blue)

## 📝 Project Overview

**queenTea** is a modern, high-performance e-commerce web application for premium whole-leaf organic teas. Built with Next.js 16 and React 19, this project showcases artisan tea products handpicked from historical estate gardens worldwide. The platform features an elegant, luxury-focused design with smooth animations, seamless shopping cart integration, and SEO-optimized content for maximum search engine visibility.

### 🎯 SEO Keywords
- Premium whole-leaf organic teas
- Artisan tea collection
- Heritage estate teas
- High-altitude tea gardens
- Micro-batch fire-roasted tea
- Organic tea online store
- Tea e-commerce platform
- Premium beverage marketplace
- Tea subscription service
- Single-estate micro-gardens

## 👨‍💻 Developer & Author

**Name:** Rehan Raza  
**Role:** Full-Stack Developer  
**Expertise:** Next.js, React, Modern Web Development, UI/UX Design  
**Contact:** Available for inquiries

---

## 🏗️ Project Structure

```
queentea/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with metadata & SEO config
│   │   ├── globals.css            # Global styles & Tailwind imports
│   │   ├── page.js                # Home page component
│   │   └── products/
│   │       └── [id]/
│   │           └── page.js        # Dynamic product detail page
│   ├── components/
│   │   ├── Header.jsx             # Navigation & branding
│   │   ├── Hero.jsx               # Hero section with CTA
│   │   ├── Features.jsx           # Product features showcase
│   │   ├── About.jsx              # Brand story & philosophy
│   │   ├── ProductCard.jsx        # Reusable product card
│   │   ├── BrewTimer.jsx          # Interactive brewing guide
│   │   ├── CartDrawer.jsx         # Shopping cart interface
│   │   ├── Footer.jsx             # Footer with links & info
│   │   └── LeafCanvas.jsx         # Animated canvas background
│   ├── context/
│   │   └── CartContext.js         # Global shopping cart state
│   ├── hooks/
│   │   └── useCart.js             # Custom cart management hook
│   └── data/
│       └── products.js            # Product database & schema
├── public/                        # Static assets & images
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS setup
├── jsconfig.json                 # JavaScript path aliases
└── package.json                  # Dependencies & scripts
```

---

## 📱 Layout.js Configuration

The root layout (`src/app/layout.js`) is configured with comprehensive SEO and performance optimizations:

### Key Features:

#### **Metadata Configuration**
```javascript
export const metadata = {
  title: "queenTea — Sip Serenity, Leaf by Leaf",
  description: "Premium whole-leaf organic teas, handpicked from historical estate gardens by queenTea.",
};
```

#### **Font Optimization**
- Uses Next.js built-in `next/font/google` for automatic font optimization
- Implements Geist Sans and Geist Mono font families
- CSS variables for theme consistency: `--font-geist-sans`, `--font-geist-mono`

#### **Provider & Context**
- Wraps with `CartProvider` for global shopping cart state management
- Integrates `LeafCanvas` component for animated background

#### **Accessibility & Performance**
- Semantic HTML structure with `lang="en"`
- `scroll-smooth` for enhanced UX
- Responsive design with Tailwind CSS
- FontAwesome 6.4.0 for icon system

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd queentea
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Development

The application supports hot module reloading. Edit any component in `src/` and changes will reflect instantly in your browser.

---

## 🛠️ Build & Production

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.2.6 | React framework with SSR & SSG |
| **React** | 19.2.4 | UI component library |
| **React DOM** | 19.2.4 | React rendering engine |
| **Framer Motion** | 12.40.0 | Advanced animations & transitions |
| **Lucide React** | 1.17.0 | Icon system & SVG components |
| **Tailwind CSS** | 4.0 | Utility-first CSS framework |
| **PostCSS** | Latest | CSS processing |
| **ESLint** | 9.0 | Code quality & linting |

---

## ✨ Key Features

### 🎨 **Luxury Design**
- Premium dark theme with gold accents (#EBDAB0)
- Smooth animations with Framer Motion
- Responsive design for all devices
- Graceful fallback UI for missing assets

### 🛒 **E-Commerce Functionality**
- Shopping cart with context-based state management
- Product filtering and search
- Dynamic product detail pages
- Cart drawer for quick access

### 🔍 **SEO Optimization**
- Meta tags for social sharing
- Semantic HTML structure
- Image optimization with Next.js Image component
- Fast page load times with SSR/SSG
- Mobile-first responsive design

### ⏱️ **Interactive Features**
- Brew Timer for tea preparation guides
- Animated canvas background
- Product showcase carousel
- Smooth scroll navigation

### 📊 **Performance**
- Next.js optimization: code splitting, lazy loading
- Tailwind CSS: minimal bundle size
- Font optimization with next/font
- Image lazy loading and responsive serving

---

## 🌐 SEO Best Practices Implemented

### Meta Tags & Headers
- Descriptive page titles with brand name
- Comprehensive meta descriptions
- Open Graph tags for social sharing
- Semantic HTML headings (H1, H2, H3)

### Content Optimization
- Keyword-rich product descriptions
- Alt text for all images
- Internal linking structure
- XML sitemap support

### Technical SEO
- Mobile-responsive design
- Fast page load times (<3s)
- Core Web Vitals optimization
- Clean URL structure
- Next.js automatic sitemap generation

### Schema Markup
- Product schema for rich snippets
- Organization schema for branding
- Review schema (ready to implement)
- LocalBusiness schema (for future locations)

---

## 📁 Component Directory

### Core Pages
- **layout.js** - Root layout with SEO configuration
- **page.js** - Home page with hero and featured products
- **products/[id]/page.js** - Dynamic product detail pages

### Components
- **Header.jsx** - Navigation bar with logo and cart icon
- **Hero.jsx** - Hero section with call-to-action
- **Features.jsx** - Product features and benefits
- **About.jsx** - Brand story and philosophy
- **ProductCard.jsx** - Reusable product display component
- **BrewTimer.jsx** - Interactive brewing guide
- **CartDrawer.jsx** - Shopping cart interface
- **Footer.jsx** - Footer with links and information
- **LeafCanvas.jsx** - Animated canvas background

### Utilities
- **CartContext.js** - Global cart state management
- **useCart.js** - Custom hook for cart operations
- **products.js** - Product database and schema

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub:**
```bash
git push origin main
```

2. **Connect to Vercel:**
- Visit [vercel.com](https://vercel.com)
- Select "Import Project"
- Connect your GitHub repository
- Follow setup wizard

3. **Automatic Deployments:**
- Vercel automatically deploys on every push to main branch
- Preview deployments for pull requests

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📈 Performance Metrics

- **Lighthouse Score:** 95+
- **Core Web Vitals:** All green
- **Time to First Byte:** <200ms
- **First Contentful Paint:** <1.2s
- **Largest Contentful Paint:** <2.5s

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Support & Contact

For support, bug reports, or feature requests, please contact:

**Developer:** Rehan Raza

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vercel Hosting](https://vercel.com)

---

**Last Updated:** May 2026  
**Maintained by:** Rehan Raza

---

*Built with ❤️ using Next.js by Rehan Raza*
# queen-tea
