import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANGUAGE, Lang, SUPPORTED_LANGUAGES } from "../i18n/languages";

const SITE_URL = "https://kaselyakbence.com";

const setMetaContent = (selector: string, content: string) => {
  document
    .querySelector<HTMLMetaElement>(selector)
    ?.setAttribute("content", content);
};

// Updates <head> tags (title, description, OG, Twitter, canonical, hreflang
// alternates) client-side after the active language changes. This is a CSR
// SPA with no prerendering, so non-JS-executing crawlers/link-preview bots
// will only ever see the static English defaults baked into index.html -
// that tradeoff is intentional (see the multi-language plan). This hook is
// aimed at crawlers that do execute JS (Google).
export const useLocalizedMeta = (lang: Lang) => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = `Bence Kaselyák — ${t("home.role")}`;
    const description = t("about.bio");
    const canonicalHref = `${SITE_URL}/${lang}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalHref);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (canonical) canonical.href = canonicalHref;

    const alternates = [
      ...SUPPORTED_LANGUAGES.map((code) => ({
        hreflang: code,
        href: `${SITE_URL}/${code}`,
      })),
      { hreflang: "x-default", href: `${SITE_URL}/${DEFAULT_LANGUAGE}` },
    ];

    // Upsert rather than remove+recreate: idempotent across React
    // StrictMode's dev-mode double-invoke, and across every language switch.
    alternates.forEach(({ hreflang, href }) => {
      let link = document.querySelector<HTMLLinkElement>(
        `link[data-hreflang-alt="${hreflang}"]`
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "alternate";
        link.setAttribute("data-hreflang-alt", hreflang);
        document.head.appendChild(link);
      }
      link.hreflang = hreflang;
      link.href = href;
    });
  }, [lang, t]);
};
