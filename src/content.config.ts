import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Добавляем лоадер для файлов

const products = defineCollection({
  // Лоадер указывает, где искать файлы товаров
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    description: z.string().optional(),
    unit: z.string().optional().default('шт'),
  }),
});

export const collections = { products };