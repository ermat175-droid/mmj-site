import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    description: z.string().optional(), // описание может быть пустым
    unit: z.string().optional().default('шт'),
  }),
});

export const collections = {
  'products': productsCollection,
};