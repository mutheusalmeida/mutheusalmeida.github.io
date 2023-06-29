import { defineCollection, reference, z } from 'astro:content'

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    translatedSlug: reference('articles').transform((item) => item.slug),
    date: z.date(),
    draft: z.boolean(),
    tag: z.string(),
  }),
})

export const collections = {
  articles: articlesCollection,
}
