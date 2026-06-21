// ---------------------------------------------------------------------------
// Central site configuration. Edit these values to rebrand the whole site.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Watsons Interiors',
  domain: 'watsonsinteriors.com.au',
  url: 'https://watsonsinteriors.com.au',
  tagline: 'Beautiful Homes. Practical Ideas.',
  description:
    "Australia's home design resource hub. Practical interior design ideas, room guides, DIY decor, and furniture buying advice for modern Australian living.",
  locale: 'en_AU',
  email: 'hello@watsonsinteriors.com.au',
  author: 'The Watsons Interiors Team',
  // Replace with your real AdSense publisher ID after approval, e.g. 'ca-pub-1234567890123456'
  adsensePublisherId: '',
  social: {
    instagram: 'https://www.instagram.com/watsonsinteriors',
    pinterest: 'https://www.pinterest.com.au/watsonsinteriors',
    facebook: 'https://www.facebook.com/watsonsinteriors',
  },
} as const;

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  /** Hue used to generate the placeholder cover gradient. */
  hue: number;
  group: 'room' | 'diy' | 'furniture' | 'australian';
};

export const CATEGORIES: Category[] = [
  {
    slug: 'living-room',
    name: 'Living Room',
    short: 'Living Room',
    description:
      'Living room ideas, layouts, and styling tips — from small apartments to coastal Australian homes.',
    hue: 28,
    group: 'room',
  },
  {
    slug: 'bedroom',
    name: 'Bedroom',
    short: 'Bedroom',
    description:
      'Bedroom design ideas, storage solutions, lighting, and colour schemes for restful Australian bedrooms.',
    hue: 268,
    group: 'room',
  },
  {
    slug: 'kitchen',
    name: 'Kitchen',
    short: 'Kitchen',
    description:
      'Kitchen styling, small kitchen design, storage hacks, and modern Australian kitchen trends.',
    hue: 14,
    group: 'room',
  },
  {
    slug: 'bathroom',
    name: 'Bathroom',
    short: 'Bathroom',
    description:
      'Bathroom makeover ideas, small bathroom design, storage, and decor inspiration.',
    hue: 192,
    group: 'room',
  },
  {
    slug: 'home-office',
    name: 'Home Office',
    short: 'Home Office',
    description:
      'Home office setup guides, small workspace ideas, furniture, and productivity-friendly design.',
    hue: 210,
    group: 'room',
  },
  {
    slug: 'diy-decor',
    name: 'DIY Decor',
    short: 'DIY Decor',
    description:
      'DIY wall decor, shelving, furniture makeovers, and budget-friendly weekend projects.',
    hue: 96,
    group: 'diy',
  },
  {
    slug: 'home-organization',
    name: 'Home Organization',
    short: 'Organization',
    description:
      'Storage solutions, decluttering guides, and small-space organisation for Australian homes.',
    hue: 48,
    group: 'diy',
  },
  {
    slug: 'furniture-guides',
    name: 'Furniture Guides',
    short: 'Furniture',
    description:
      'Honest furniture buying guides — sofas, dining tables, desks, and storage for every budget.',
    hue: 18,
    group: 'furniture',
  },
  {
    slug: 'australian-homes',
    name: 'Australian Homes',
    short: 'Australian Homes',
    description:
      'Coastal style, Queensland homes, sustainable design, and modern Australian interior trends.',
    hue: 160,
    group: 'australian',
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
) as Record<string, Category>;

// Primary navigation shown in the header.
export const NAV: { label: string; href: string }[] = [
  { label: 'Living Room', href: '/category/living-room' },
  { label: 'Bedroom', href: '/category/bedroom' },
  { label: 'Kitchen', href: '/category/kitchen' },
  { label: 'DIY Decor', href: '/category/diy-decor' },
  { label: 'Furniture Guides', href: '/category/furniture-guides' },
  { label: 'Australian Homes', href: '/category/australian-homes' },
  { label: 'Blog', href: '/blog' },
];
