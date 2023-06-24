import { ui, defaultLang } from "@/i18n/ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export function removeLeadingSlash(path: string) {
  return path.replace(/^[/\\]+/, "");
}

export function removeTrailingSlash(path: string) {
  return path.replace(/[/\\]+$/, "");
}

export function l(url: URL, lang: keyof typeof ui) {
  const currentLang = getLangFromUrl(url);
  let pathname = removeTrailingSlash(url.pathname);

  if (currentLang !== lang) {
    pathname = removeLeadingSlash(pathname);

    if (lang === defaultLang) {
      pathname = `/${pathname.split("/").slice(1).join("/")}`;
    } else {
      pathname = pathname ? `/${lang}/${pathname}` : `/${lang}`;
    }

    return pathname;
  }

  return pathname;
}

export function normalizeLangTag(tag: string) {
  if (!tag.includes("-")) return tag.toLowerCase();

  const [lang, region] = tag.split("-");

  return lang.toLowerCase() + "-" + region.toUpperCase();
}

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
