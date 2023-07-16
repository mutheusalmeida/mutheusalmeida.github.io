import image from "@astrojs/image";
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */

const prettyCodeOptions = {
  theme: JSON.parse(readFileSync(new URL('./src/assets/theme.json', import.meta.url)))
};

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: 'https://mutheusalmeida.github.io',
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  },
  experimental: {
    assets: true
  }
});
