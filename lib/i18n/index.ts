import ca from "./ca.json"
import es from "./es.json"

export type Locale = "ca" | "es"

export const translations = { ca, es }

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.ca
}
