import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './consts';

const categorySlugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(categorySlugs),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('The Watsons Interiors Team'),
      /** Reading time in minutes; auto-fallback computed if omitted. */
      readingTime: z.number().optional(),
      /** Real watermarked cover photo (optimised by Astro). Falls back to a
       *  generated SVG cover when omitted. */
      cover: image().optional(),
      /** Source/license note for the cover — shown as image credit "proof". */
      coverCredit: z.string().optional(),
      /** Alt text + placeholder cover hue source. */
      coverAlt: z.string(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articles };
