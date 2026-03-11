import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDatetime: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    author: z.string().default("관리자"),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  posts
};
