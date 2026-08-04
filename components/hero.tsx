import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface HeroProps {
  locale: Locale
  translations: any
}

export function Hero({ locale, translations }: HeroProps) {
  const t = translations.hero

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay — art direction: dominadas en móvil, remo en escritorio */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-dominadas-rack-exterior-gimnas-robert-parets.avif"
          />
          <img
            src="/images/hero-remo-polea-entrenamiento-espalda-gimnas-robert-parets.avif"
            alt="Entrenament al Gimnàs Robert de Parets del Vallès"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 md:bg-gradient-to-l md:from-black/85 md:via-black/55 md:to-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl md:ml-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">{t.title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-semibold">{t.subtitle}</p>
            <p className="text-base md:text-lg lg:text-xl text-white/70 mb-8 leading-relaxed">{t.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto">
              <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                {t.cta_primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 h-auto bg-transparent"
            >
              <Link href={`/${locale}/${locale === "ca" ? "horaris" : "horarios"}`}>
                <Calendar className="mr-2 h-5 w-5" />
                {t.cta_secondary}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
