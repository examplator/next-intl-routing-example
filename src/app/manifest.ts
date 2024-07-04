// import { MetadataRoute } from "next";
// import { getTranslations } from "next-intl/server";
// import { defaultLocale } from "@/locales";
// export default async function manifest(): Promise<MetadataRoute.Manifest> {
//   const t = await getTranslations({ defaultLocale, namespace: "Manifest" });
//   return {
//     name: t("name"),
//     start_url: "/",
//     theme_color: "#101E33",
//   };
// }
///---

import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { defaultLocale } from "@/locales";
// console.log("def", defaultLocale);
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = defaultLocale;
  const t = await getTranslations({ locale, namespace: "Manifest" });
  return {
    name: t("name"),
    start_url: "/",
    theme_color: "#101E33",
  };
}
