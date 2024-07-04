import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "ru" as const;
export const locales = ["en", "ru"] as const;

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/check": {
    en: "/check",
    ru: "/proverka",
  },
};
