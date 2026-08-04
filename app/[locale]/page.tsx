import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { getTranslations, type Locale } from "@/lib/i18n"
import { Dumbbell, Users, Target, Building2, MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CONTACT, SCHEDULE } from "@/lib/constants"
import { use } from "react"

export default function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        <Hero locale={locale} translations={t} />

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-neutral">{t.about.title}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">{t.about.history_text}</p>
                  <p className="text-lg">{t.about.features}</p>
                </div>
                <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90">
                  <Link href={`/${locale}/${locale === "ca" ? "el-gimnas" : "el-gimnasio"}`}>
                    {locale === "ca" ? "Descobreix més" : "Descubre más"}
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/sala-musculacion-pesas-discos-barras-gym-robert-parets.avif"
                  alt={locale === "ca" ? "Sala de musculació del Gimnàs Robert amb peses, discos i barres" : "Sala de musculación del Gimnàs Robert con pesas, discos y barras"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral">{t.services.title}</h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={Dumbbell}
                title={t.services.training_rooms.title}
                items={t.services.training_rooms.items}
              />
              <ServiceCard
                icon={Users}
                title={t.services.directed_activities.title}
                items={t.services.directed_activities.items}
              />
              <ServiceCard
                icon={Target}
                title={t.services.personal_training.title}
                items={t.services.personal_training.items}
              />
              <ServiceCard
                icon={Building2}
                title={t.services.adapted_facilities.title}
                items={t.services.adapted_facilities.items}
              />
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
                <Link href={`/${locale}/${locale === "ca" ? "serveis" : "servicios"}`}>
                  {locale === "ca" ? "Veure tots els serveis" : "Ver todos los servicios"}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Schedule Preview */}
        <section className="py-20 bg-neutral text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.schedule.title}</h2>
              <p className="text-base md:text-lg lg:text-xl text-white/70">
                {locale === "ca" ? "Consulta els nostres horaris" : "Consulta nuestros horarios"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{t.schedule.sala_title}</h3>
                <div className="space-y-2 text-white/80">
                  <p className="text-sm">{t.schedule.weekdays}</p>
                  <p className="font-semibold text-white">
                    {SCHEDULE.sala.weekdays.open} - {SCHEDULE.sala.weekdays.close}
                  </p>
                  <p className="text-sm mt-3">{t.schedule.saturday}</p>
                  <p className="font-semibold text-white">
                    {SCHEDULE.sala.saturday.open} - {SCHEDULE.sala.saturday.close}
                  </p>
                  <p className="text-sm mt-3">{t.schedule.sunday}</p>
                  <p className="font-semibold text-white">{t.schedule.closed}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{t.schedule.juniors_title}</h3>
                <div className="space-y-2 text-white/80">
                  <p className="text-sm">{SCHEDULE.juniors.days.join(", ")}</p>
                  <p className="font-semibold text-white">
                    {SCHEDULE.juniors.time.start} - {SCHEDULE.juniors.time.end}
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{t.schedule.seniors_title}</h3>
                <div className="space-y-2 text-white/80">
                  <p className="text-sm">{SCHEDULE.seniors.days.join(", ")}</p>
                  <p className="font-semibold text-white">
                    {SCHEDULE.seniors.time.start} - {SCHEDULE.seniors.time.end}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href={`/${locale}/${locale === "ca" ? "horaris" : "horarios"}`}>
                  {locale === "ca" ? "Veure horaris complets" : "Ver horarios completos"}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{locale === "ca" ? "Vine a conèixer-nos" : "Ven a conocernos"}</h2>
            <p className="text-base md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {locale === "ca"
                ? "Estem a Parets del Vallès. Contacta amb nosaltres per més informació o vine a fer una visita."
                : "Estamos en Parets del Vallès. Contáctanos para más información o ven a hacer una visita."}
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
