export const SUPPORTED_LANGUAGES = ["en", "de", "hu"] as const;

export type Lang = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Lang = "en";

export const isSupportedLang = (value: string | undefined): value is Lang =>
  SUPPORTED_LANGUAGES.includes(value as Lang);
