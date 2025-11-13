import Image from "next/image"
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img-0724.avif"
          alt="Gimnàs Robert Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{t.title}</h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold">{t.subtitle}</p>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">{t.description}</p>
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
