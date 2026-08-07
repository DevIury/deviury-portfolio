# DevIury Portfolio - Agent Guide

## Project Overview

Modern, SEO-optimized portfolio website for a web designer in Curvelo, MG, Brazil. Targets #1 ranking for web design in Curvelo through comprehensive local SEO, blog content, and conversion optimization.

**Primary Goals:**
- Showcase web design services and portfolio
- Generate leads via WhatsApp and contact forms
- Dominate local SEO for "web designer Curvelo"
- Build authority through blog content
- Provide bilingual support (Portuguese/English)

## Tech Stack & Dependencies

**Framework:** Astro (static site generator)
**Styling:** Tailwind CSS (utility-first CSS framework)
**Language:** TypeScript
**Deployment:** Cloudflare Pages
**Repository:** https://github.com/DevIury/deviury-portfolio

**Key Dependencies:**
- `@astrojs/sitemap` - Sitemap generation
- `@astrojs/tailwind` - Tailwind CSS integration
- `astro` - Core framework
- `tailwindcss` - CSS framework

## Project Structure

```
/
├── public/                    # Static assets
│   ├── fonts/inter/          # Self-hosted Inter font (woff2)
│   ├── *.webp                # Images (logo, favicon, portfolio)
│   ├── blog-*.svg            # Blog cover images (14 total)
│   ├── og-image.svg          # Open Graph image
│   ├── robots.txt            # AI bot blocking rules
│   └── google*.html          # Google Search Console verification
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header.astro      # Navigation + sidebar + focus trap
│   │   ├── Footer.astro      # Footer with social links
│   │   ├── FloatingWhatsApp.astro  # WhatsApp button (visible prop)
│   │   ├── CtaSection.astro  # Shared CTA section
│   │   ├── WhatsAppIcon.astro # Reusable SVG icon
│   │   ├── OptimizedImage.astro # Image component with lazy loading
│   │   └── Analytics.astro   # GA4 event tracking
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with SEO, JSON-LD, ViewTransitions
│   ├── pages/
│   │   ├── index.astro       # Main homepage
│   │   ├── blog.astro        # Blog listing page
│   │   ├── blog/[slug].astro # Blog post template
│   │   ├── en/               # English pages
│   │   ├── *.astro           # Landing pages and service pages
│   │   └── api/pexels.ts     # Pexels API proxy (API key in .env)
│   ├── content/
│   │   └── blog/             # Markdown blog posts
│   └── content.config.ts     # Content collection config
├── docs/                     # Documentation
│   ├── backlinks-diretorios.md # Brazilian directories for backlinks
│   └── google-meu-negocio.md # Google Business Profile setup guide
├── astro.config.mjs          # Astro configuration
└── package.json
```

## Important Configuration

**Site Configuration (astro.config.mjs):**
```javascript
site: 'https://deviury.pages.dev'  // Temp until domain purchase
// site: 'https://deviury.com.br'  // After domain purchase
compressHTML: true,
integrations: [tailwind(), sitemap()]
```

**Environment Variables (.env - gitignored):**
```
PEXELS_API_KEY=your_key_here
```

**Layout.astro Props:**
- `title` - Page title
- `description` - Meta description
- `ogImage` - Open Graph image (default: og-image.svg)
- `ogType` - Open Graph type (default: website)
- `lang` - Language (default: pt-BR)

## Content Structure

**Blog Posts (14 total):**
- Location: `src/content/blog/*.md`
- Required frontmatter: title, description, pubDate, author, tags
- Cover images: `/public/blog-*.svg`
- All posts 4000+ chars, Brazilian Portuguese
- Internal linking strategy implemented

**Portfolio Sites (8 total):**
- Real: Home Vantagens, Wallacy Designer
- Driffer: Marked "Novo" (green badge with pulse)
- Prototypes (orange badge): RGE Energia, CoEnergy, Somar Agrotech, Hospital Santo Antônio, Rz Net

**Landing Pages (43 total):**
- 30 city pages: `criacao-de-sites-*.astro`
- 9 landing pages: `landing-page-*.astro`
- 4 institutional: `site-institucional-*.astro`
- 3 service pages: WhatsApp, E-commerce, SEO Local

## Design System

**Color Palette:**
- Dark background: `#0a0a0a`
- Green accent: `#00E676`
- Gradient buttons: `#00C853` → `#00E676` → `#69F0AE`

**Typography:**
- Primary: Inter (self-hosted, weights 400-800)
- Mobile breakpoint: 768px
- Line height: 1.9 for blog content

**Components:**
- `.hero-only` class for mobile visibility
- `.testimonial-avatar` for initials
- `.scroll-reveal` for animations
- `.mobile-cta-bar` fixed bottom bar (CSS, not JS)

## SEO & Analytics

**Meta Tags:**
- Dynamic OG tags in Layout.astro
- Geo meta tags for Curvelo, MG
- Canonical URL currently set to `deviury.pages.dev`

**JSON-LD Schema:**
- Organization + ProfessionalService
- Founder with sameAs (WhatsApp, Instagram, LinkedIn)
- AggregateRating (5.0, 8 reviews)
- areaServed (Curvelo, BH, SP)
- FAQPage schema for FAQ sections

**Analytics:**
- Google Analytics ID: `G-NSWZ3EKZX9`
- Cookie consent gated for LGPD compliance
- Events tracked: whatsapp_click, cta_click, phone_click, email_click, portfolio_view, faq_open, scroll_depth, time_on_page

**Google Services:**
- Search Console verified with file `google0713a1e049d0717e.html`
- Business Profile created (verification pending, up to 5 days)
- Sitemap submitted to GSC

## Performance & Security

**Images:**
- All images converted to WebP format
- `fetchpriority="high"` on hero images
- Lazy loading implemented
- `width` and `height` attributes on all images

**Fonts:**
- Self-hosted Inter from `/public/fonts/inter/`
- No external font requests

**Security:**
- `rel="noopener noreferrer"` on all `target="_blank"` links
- AI bot blocking in robots.txt (GPTBot, ChatGPT-User, CCBot, ClaudeBot, anthropic-ai)
- Cookie consent banner for LGPD

**View Transitions:**
- Astro ViewTransitions with fade CSS animations
- Scroll reveal re-initializes on `astro:page-load` event

## Important Patterns & Conventions

**Component Patterns:**
- FloatingWhatsApp uses `visible` prop for mobile control
- Analytics component gates GA behind cookie consent
- OptimizedImage component handles lazy loading and fetchpriority

**CSS Patterns:**
- Mobile-first responsive design
- Focus trap for sidebar navigation (Tab cycling, Escape key, focus restore)
- `prefers-reduced-motion` support
- `.sr-only` class for screen reader content

**JavaScript Patterns:**
- IntersectionObserver for scroll animations
- `astro:page-load` event for ViewTransitions re-initialization
- Cookie consent state management

## Deployment

**Current:** Cloudflare Pages (free domain: `deviury.pages.dev`)
**Planned:** `deviury.com.br` (to be purchased this month)

**Deploy Process:**
1. Push to main branch
2. Cloudflare Pages auto-deploys
3. Submit sitemap to Google Search Console

**Domain Migration:**
- All code references updated to `.pages.dev` temporarily
- Will need to update to `.com.br` after purchase
- Update canonical URLs, sitemap, analytics

## Known Issues & Workarounds

1. **Domain References:** Currently using `deviury.pages.dev` - needs update to `deviury.com.br`
2. **OG Image:** Using SVG placeholder (`og-image.svg`) instead of PNG
3. **Mobile CTA Bar:** CSS conflict fixed (was `display: flex` then `display: none` in same media query)
4. **Blog Encoding:** Files had mojibake (UTF-8 bytes saved as Latin-1) - fixed with Latin1→UTF8 conversion
5. **Scroll Reveal:** Needed `astro:page-load` event listener for ViewTransitions

## Future Tasks

**High Priority:**
- Purchase domain `deviury.com.br` and update all references
- Submit sitemap to Google Search Console after latest deploy
- Register in Brazilian directories per `docs/backlinks-diretorios.md`

**Medium Priority:**
- ~~Implement pricing table~~ ✅ DONE (`/precos`)
- ~~Implement A/B testing~~ ✅ DONE (pricing page variants with 3 test groups)
- Continue blog (2-4 articles/month targeting local keywords)
- Study more reference sites for design patterns

**Low Priority:**
- Advanced animations and effects
- A/B testing for conversion optimization
- Multi-language expansion beyond Portuguese/English

## Key Files for Maintenance

1. `src/layouts/Layout.astro` - Base layout, SEO, analytics
2. `src/components/Header.astro` - Navigation, mobile menu
3. `src/components/FloatingWhatsApp.astro` - WhatsApp button
4. `src/pages/index.astro` - Main homepage
5. `src/pages/precos.astro` - Pricing page with 3 plans
6. `astro.config.mjs` - Site configuration
7. `src/content/blog/*.md` - Blog content
8. `public/robots.txt` - SEO bot rules
9. `.env` - API keys (gitignored)

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for broken links
npm run build  # (sitemap will show all pages)
```

## Important Notes

- **Always test on mobile** - 768px breakpoint is critical
- **Maintain Portuguese first** - English pages are secondary
- **Preserve existing SEO** - Don't break canonical URLs or schema
- **Keep WhatsApp visible on homepage** - It's the primary CTA
- **Blog internal linking** - Each post links to 3 related posts
- **Cookie consent required** - GA won't track without consent
- **SVG cover images** - Blog posts use simplified SVGs, not photos
