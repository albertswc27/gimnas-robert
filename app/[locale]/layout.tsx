import type { Metadata } from "next"
import { getTranslations, type Locale } from "@/lib/i18n"

type Props = {
  params: Promise<{ locale: Locale }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)

  return {
    title:
      locale === "ca"
        ? "Gimnàs Robert - Centre Esportiu a Parets del Vallès"
        : "Gimnàs Robert - Centro Deportivo en Parets del Vallès",
    description:
      locale === "ca"
        ? "Més de 30 anys d'experiència en fitness, musculació i arts marcials. Sala de musculació, cardio, kickboxing i entrenament personalitzat."
        : "Más de 30 años de experiencia en fitness, musculación y artes marciales. Sala de musculación, cardio, kickboxing y entrenamiento personalizado.",
  }
}

// Child layout must not render <html> or <body> — only the root `app/layout.tsx` does.
export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
