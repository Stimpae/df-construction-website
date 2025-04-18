import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    coverImage: z.string(),
    client: z.string(),
    location: z.string(),
    services: z.array(z.string()),
    duration: z.string(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string().optional(),
    company: z.string().optional(),
    testimonial: z.string(),
    date: z.string(),
    projectType: z.string(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'testimonials': testimonialsCollection,
};