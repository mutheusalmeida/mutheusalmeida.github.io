import { ui, defaultLang } from "@/i18n/ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export const l = (url: URL, lang: keyof typeof ui) => {
  const currentLang = getLangFromUrl(url);

  if (currentLang !== lang) {
    let withTrailingSlash = url.pathname.endsWith("/")
      ? url.pathname
      : url.pathname + "/";

    if (lang === defaultLang) {
      withTrailingSlash = withTrailingSlash.replace(`/${currentLang}`, "");
    } else {
      withTrailingSlash = "/" + lang + withTrailingSlash;
    }

    const withoutTrailingSlash = withTrailingSlash.slice(0, -1);

    return withoutTrailingSlash;
  }

  return url.pathname.endsWith("/") ? url.pathname.slice(0, -1) : url.pathname;
};

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function formatDate(
  data: Date,
  lang: string,
  options?: Intl.DateTimeFormatOptions
) {
  const config = options || {
    month: "short",
    year: "numeric",
  };

  const formatedDate = data.toLocaleString(lang, config);

  return formatedDate;
}
