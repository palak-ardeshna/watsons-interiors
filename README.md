# Watsons Interiors

**Australia's Home Design & Interior Inspiration Platform.**
Built with [Astro](https://astro.build) for top SEO and Core Web Vitals — exactly what
AdSense approval rewards.

Domain: `watsonsinteriors.com.au` · Tagline: *Beautiful Homes. Practical Ideas.*

---

## Quick start

```bash
npm install      # one time
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into /dist
npm run preview  # preview the production build
```

You only need **Node 18+** (you have v22). No database, no server — it builds to plain
static HTML you can host **free** on Netlify, Vercel or Cloudflare Pages.

---

## How to add a new article (the main thing you'll do)

1. Create a file in `src/content/articles/`, e.g. `kitchen-storage-hacks.md`.
   The file name becomes the URL: `/articles/kitchen-storage-hacks`.
2. Copy the frontmatter block from any existing article and edit it:

```markdown
---
title: "Your Article Title"
description: "150-character summary for Google search results."
category: "kitchen"          # must match a slug in src/consts.ts
pubDate: 2026-06-20
author: "The Watsons Interiors Team"
coverAlt: "Describe the cover image for accessibility & SEO"
tags: ["kitchen storage", "small kitchen"]
featured: false              # set true to feature on the homepage
readingTime: 7
---

Write your article body here in Markdown...
```

3. Aim for **1200–1800 words**, use `## subheadings`, and add **internal links** to
   related articles and categories — e.g. `[kitchen ideas](/category/kitchen)`.
4. Save. The article appears automatically on the homepage, its category page, the blog,
   the sitemap and the RSS feed. No other step needed.

**Categories available** (edit in `src/consts.ts`): living-room, bedroom, kitchen,
bathroom, home-office, diy-decor, home-organization, furniture-guides, australian-homes.

---

## What's already built

| Area | Included |
|------|----------|
| **Homepage** | Hero, trust cards, featured article, browse-by-room grid, latest, DIY & furniture sections, newsletter |
| **Categories** | All 9 category pages auto-generated with their articles |
| **Articles** | Full template: breadcrumbs, author box, related posts, ad slots, schema |
| **Trust pages** | About, Contact (form), Author profile |
| **Legal pages** | Privacy Policy, Terms, Disclaimer — written for **Google AdSense** compliance |
| **SEO** | Sitemap, RSS, robots.txt, canonical URLs, Open Graph, Twitter cards, JSON-LD (Organization, Article, Breadcrumb, Person) |
| **Design** | Editorial palette + Playfair Display / Inter fonts, fully mobile-first, fast |
| **Sample content** | 3 complete 1200+ word articles you can clone |

---

## Before you apply to AdSense — do these

1. **Publish 30+ articles.** You have 3 samples + the structure. Clone the pattern.
   (See the article keyword list in your blueprint.)
2. **Point your domain.** Deploy `/dist` and connect `watsonsinteriors.com.au` (HTTPS is
   automatic on Netlify/Vercel/Cloudflare).
3. **Update real details** in `src/consts.ts`: email, social links, and after approval,
   your AdSense publisher ID (`adsensePublisherId`).
4. **Set `ads.txt`** (in `/public`) with your real publisher ID after approval.
5. **Wire up the forms:** add a real endpoint to the contact form
   (`src/pages/contact.astro`) and newsletter (`src/components/Newsletter.astro`) —
   e.g. Formspree, Web3Forms, Mailchimp.
6. **Swap placeholder cover images** for real photos when you can (keep them 1200×800 to
   protect your CLS score). See `src/lib/cover.ts`.

---

## AdSense checklist → where it's handled

This maps to the approval checklist in your screenshot:

- ✅ Original, unique content → 3 hand-written articles, structure for more
- ✅ Privacy Policy / Terms / Disclaimer → `/privacy-policy`, `/terms`, `/disclaimer`
- ✅ About / Contact / Author pages → `/about`, `/contact`, `/authors/watsons-team`
- ✅ Easy navigation & categories → header nav, footer, category pages, breadcrumbs
- ✅ Robots.txt & Sitemap.xml → `/public/robots.txt`, auto-generated `/sitemap-index.xml`
- ✅ Schema / structured data → JSON-LD in layouts
- ✅ Mobile friendly & fast (Core Web Vitals) → static Astro, optimised fonts/images
- ✅ SSL → automatic on recommended hosts
- ✅ No excessive ads → 2 restrained ad slots per article, clearly labelled
- ⏳ 30+ articles / 40,000+ words → add more using the workflow above
- ⏳ Some traffic & social links → set socials in `consts.ts`, share on Pinterest/Instagram

---

## Deploy (free options)

**Cloudflare Pages / Netlify / Vercel:** connect the repo (or drag-and-drop `/dist` after
`npm run build`). Build command: `npm run build`. Output directory: `dist`.

Then add your custom domain `watsonsinteriors.com.au` in the host's dashboard and update
DNS — HTTPS is issued automatically.
# watsons-interiors
