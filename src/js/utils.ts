import { ui, defaultLang } from '@/i18n/ui'

export function getLangFromUrl (url: URL) {
  const [, lang] = url.pathname.split('/')

  if (lang in ui) return lang as keyof typeof ui

  return defaultLang
}

export function useTranslations (lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function formatDate (data: Date, lang: string, options?: Intl.DateTimeFormatOptions) {
  const config = options || {
    month: 'short',
    year: 'numeric',
  }

  const formatedDate = data.toLocaleString(lang, config)

  return formatedDate
}
