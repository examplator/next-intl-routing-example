// import createMiddleware from "next-intl/middleware";
// import { locales, defaultLocale } from "@/locales";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: locales,

//   // Used when no locale matches
//   defaultLocale: defaultLocale,
// });

// export const config = {
//   // Match only internationalized pathnames
//   // matcher: ["/", "/(ru|en)/:path*"],
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
//------

import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, pathnames, localePrefix } from "@/locales";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(ru|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
