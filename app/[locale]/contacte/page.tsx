import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getTranslations, type Locale } from "@/lib/i18n"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { use } from "react"

export default function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{t.contact.title}</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">{t.contact.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-neutral">{t.contact.visit_us}</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral mb-1">{locale === "ca" ? "Adreça" : "Dirección"}</h3>
                      <p className="text-muted-foreground">{CONTACT.ADDRESS}</p>
                      <Button asChild variant="link" className="px-0 text-primary">
                        <a href={CONTACT.GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                          {locale === "ca" ? "Veure al mapa" : "Ver en el mapa"}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral mb-1">{t.contact.call_us}</h3>
                      <p className="text-muted-foreground">
                        <a href={`tel:${CONTACT.PHONE_MAIN}`} className="hover:text-primary transition-colors">
                          {CONTACT.PHONE_MAIN}
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href={`tel:${CONTACT.PHONE_MOBILE}`} className="hover:text-primary transition-colors">
                          {CONTACT.PHONE_MOBILE}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href={`mailto:${CONTACT.EMAIL}`} className="hover:text-primary transition-colors">
                          {CONTACT.EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-lg mt-8">
                    <h3 className="font-semibold text-neutral mb-3">{t.contact.whatsapp}</h3>
                    <p className="text-muted-foreground mb-4">
                      {locale === "ca"
                        ? "Contacta'ns directament per WhatsApp per a consultes ràpides."
                        : "Contáctanos directamente por WhatsApp para consultas rápidas."}
                    </p>
                    <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] w-full">
                      <a href={CONTACT.WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        {locale === "ca" ? "Obrir WhatsApp" : "Abrir WhatsApp"}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-neutral">
                {locale === "ca" ? "Com arribar" : "Cómo llegar"}
              </h2>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://maps.google.com/maps?q=Carrer%20de%20Sant%20Jordi%2010%2C%2008150%20Parets%20del%20Vall%C3%A8s%2C%20Barcelona%2C%20Spain&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={locale === "ca" ? "Ubicació Gimnàs Robert - C/ Sant Jordi 10, Parets del Vallès" : "Ubicación Gimnàs Robert - C/ Sant Jordi 10, Parets del Vallès"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
      <WhatsAppButton label={t.whatsapp_button} />
    </>
  )
}
