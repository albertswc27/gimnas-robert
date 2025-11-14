import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { getTranslations, type Locale } from "@/lib/i18n"
import { Dumbbell, Users, Target, Building2, Heart, Zap, Shield, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { use } from "react"

export default function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{t.services.title}</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">{t.services.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral">
                {locale === "ca" ? "Per què triar-nos?" : "¿Por qué elegirnos?"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {locale === "ca"
                  ? "Més de 30 anys d'experiència ens avalen"
                  : "Más de 30 años de experiencia nos avalan"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-neutral">
                  {locale === "ca" ? "Atenció Personalitzada" : "Atención Personalizada"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "ca"
                    ? "Seguiment individual dels teus objectius"
                    : "Seguimiento individual de tus objetivos"}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-neutral">
                  {locale === "ca" ? "Equipament d'Alta Gamma" : "Equipamiento de Alta Gama"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "ca" ? "Màquines modernes i ben mantingudes" : "Máquinas modernas y bien mantenidas"}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-neutral">
                  {locale === "ca" ? "Ambient Segur" : "Ambiente Seguro"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "ca"
                    ? "Instal·lacions netes i ben ventilades"
                    : "Instalaciones limpias y bien ventiladas"}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-neutral">
                  {locale === "ca" ? "Experiència Provada" : "Experiencia Probada"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "ca" ? "Més de 30 anys al teu servei" : "Más de 30 años a tu servicio"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{locale === "ca" ? "Comença avui mateix" : "Empieza hoy mismo"}</h2>
            <p className="text-base md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {locale === "ca"
                ? "Contacta amb nosaltres per més informació sobre els nostres serveis i tarifes."
                : "Contáctanos para más información sobre nuestros servicios y tarifas."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                  {locale === "ca" ? "Contacta'ns" : "Contáctanos"}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
              >
                <Link href={`/${locale}/${locale === "ca" ? "horaris" : "horarios"}`}>
                  {locale === "ca" ? "Veure horaris" : "Ver horarios"}
                </Link>
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
