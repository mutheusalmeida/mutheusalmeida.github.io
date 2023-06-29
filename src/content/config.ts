import { defineCollection, z } from 'astro:content'

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    tag: z.string(),
  }),
})

export const collections = {
  articles: articlesCollection,
}
