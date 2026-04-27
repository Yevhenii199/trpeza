/**
 * Central site configuration for SEO, social previews and metadata.
 * Edit these values to update Open Graph / Twitter Cards across the site.
 */

export type LocaleSeo = {
  title: string;
  description: string;
};

export const siteConfig = {
  /** Canonical site URL (no trailing slash). Used to build absolute URLs for OG images and canonical links. */
  siteUrl: "https://trpezasutomore.me",

  /** Brand name shown in OG site_name. */
  siteName: "Ресторан ТРПЕЗА",

  /** Default Twitter handle (with @). Leave empty if none. */
  twitterHandle: "",

  /** Absolute path (from public/) of the default 1200x630 OG image. */
  ogImagePath: "/og-image.jpg",

  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Ресторан ТРПЕЗА — балканская кухня и морепродукты Адриатики",

  /** Per-locale defaults used when a page does not provide its own. */
  defaults: {
    en: {
      title: "ТРПЕЗА — Балканская кухня и морепродукты Адриатики",
      description:
        "Откройте аутентичные балканские вкусы и свежайшие морепродукты Адриатики. Забронируйте столик в ТРПЕЗА сегодня.",
    },
    sr: {
      title: "ТРПЕЗА — Балканска кухиња и јадрански плодови мора",
      description:
        "Откријте аутентичне балканске укусе и најсвежије плодове мора Јадрана. Резервишите свој сто у ТРПЕЗА још данас.",
    },
    ru: {
      title: "ТРПЕЗА — Балканская кухня и морепродукты Адриатики",
      description:
        "Откройте аутентичные балканские вкусы и свежайшие морепродукты Адриатики. Забронируйте столик в ТРПЕЗА сегодня.",
    },
  } satisfies Record<string, LocaleSeo>,
} as const;

export type SupportedSeoLocale = keyof typeof siteConfig.defaults;

/** Build an absolute URL from a path or pass through if already absolute. */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}
