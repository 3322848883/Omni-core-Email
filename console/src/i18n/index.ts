import { i18n } from "@lingui/core"

export type Locale = "en" | "fr" | "es" | "de" | "ca" | "pt-BR" | "ja" | "it" | "zh"

export const locales: Locale[] = ["en", "fr", "es", "de", "ca", "pt-BR", "ja", "it", "zh"]

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  ca: "Català",
  "pt-BR": "Português (Brasil)",
  ja: "日本語",
  it: "Italiano",
  zh: "简体中文",
}

/**
 * Load and activate a locale
 */
export async function loadLocale(locale: Locale): Promise<void> {
  try {
    const { messages } = await import(`./locales/${locale}.mjs`)
    i18n.load(locale, messages)
    i18n.activate(locale)
    localStorage.setItem("locale", locale)
  } catch (error) {
    console.error(`Failed to load locale ${locale}:`, error)
    if (locale !== "en") {
      await loadLocale("en")
    }
  }
}

/**
 * Get the initial locale from localStorage or default to Chinese
 */
export function getInitialLocale(): Locale {
  const stored = localStorage.getItem("locale")
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale
  }
  return "zh"
}

/**
 * Initialize i18n with the stored or default locale
 */
export async function initI18n(): Promise<void> {
  const locale = getInitialLocale()
  await loadLocale(locale)
}

export { i18n }
