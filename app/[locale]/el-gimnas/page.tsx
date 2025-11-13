import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getTranslations, type Locale } from "@/lib/i18n"
import { Building2, Calendar, Eye, Dumbbell } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { use } from "react"

export default function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.about.title}</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {locale === "ca"
                  ? "Més de 30 anys d'experiència al servei de la salut i el benestar dels nostres socis."
                  : "Más de 30 años de experiencia al servicio de la salud y el bienestar de nuestros socios."}
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">1989 - 2025</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-neutral">{t.about.history_title}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">{t.about.history_text}</p>
                  <p className="text-lg">
                    {locale === "ca"
                      ? "Des d'aleshores, hem crescut i evolucionat per oferir les millors instal·lacions i serveis als nostres socis. El nostre compromís amb l'excel·lència i l'atenció personalitzada ens ha convertit en un referent a Parets del Vallès."
                      : "Desde entonces, hemos crecido y evolucionado para ofrecer las mejores instalaciones y servicios a nuestros socios. Nuestro compromiso con la excelencia y la atención personalizada nos ha convertido en un referente en Parets del Vallès."}
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image src="/images/logo-gimnas-robert-gimnasio-oficial.png" alt="Historia Gimnàs Robert" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-neutral">{t.about.facilities_title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.features}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral">
                  {locale === "ca" ? "Planta Baixa" : "Planta Baja"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t.about.floor_0}</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral">
                  {locale === "ca" ? "Primera Planta" : "Primera Planta"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t.about.floor_1}</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral">
                  {locale === "ca" ? "Segona Planta" : "Segunda Planta"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t.about.floor_2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              {locale === "ca"
                ? "Vine a descobrir les nostres instal·lacions"
                : "Ven a descubrir nuestras instalaciones"}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {locale === "ca"
                ? "T'esperem per fer una visita guiada i conèixer tots els nostres serveis."
                : "Te esperamos para hacer una visita guiada y conocer todos nuestros servicios."}
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                {locale === "ca" ? "Contacta'ns" : "Contáctanos"}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
      <WhatsAppButton label={t.whatsapp_button} />
    </>
  )
}
