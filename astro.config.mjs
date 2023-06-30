import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('rehype-pretty-code').Options} */

const prettyCodeOptions = {
  theme: 'github-dark',
}

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: 'https://mutheusalmeida.github.io',
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  experimental: {
    assets: true,
  },
})
