import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScheduleTable } from "@/components/schedule-table"
import { getTranslations, type Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, MapPin } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { use } from "react"

export default function SchedulePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-neutral text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.schedule.title}</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {locale === "ca"
                  ? "Consulta els nostres horaris i planifica el teu entrenament."
                  : "Consulta nuestros horarios y planifica tu entrenamiento."}
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScheduleTable locale={locale} translations={t} />

              {/* Additional Info */}
              <div className="mt-12 bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-neutral">
                  {locale === "ca" ? "Informació addicional" : "Información adicional"}
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {locale === "ca"
                        ? "La recepció atén de dilluns a divendres de 9:00 h a 14:00 h i de 17:00 h a 21:45 h."
                        : "La recepción atiende de lunes a viernes de 9:00 h a 14:00 h y de 17:00 h a 21:45 h."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {locale === "ca"
                        ? "Els horaris poden variar durant festius i períodes especials."
                        : "Los horarios pueden variar durante festivos y períodos especiales."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {locale === "ca"
                        ? "Per a més informació sobre les classes, contacta amb nosaltres."
                        : "Para más información sobre las clases, contáctanos."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              {locale === "ca" ? "Tens alguna pregunta?" : "¿Tienes alguna pregunta?"}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {locale === "ca"
                ? "Contacta amb nosaltres per més informació sobre horaris i disponibilitat."
                : "Contáctanos para más información sobre horarios y disponibilidad."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.title}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
              >
                <a href={CONTACT.GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  {locale === "ca" ? "Com arribar" : "Cómo llegar"}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
      <WhatsAppButton label={t.whatsapp_button} />
    </>
  )
}
