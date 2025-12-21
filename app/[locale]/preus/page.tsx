import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getTranslations, type Locale } from "@/lib/i18n"
import { Check, Star, Calendar, Euro, Users, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { use } from "react"

export default function PricesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)

  // Precios para CHICOS (2025-2026-2027)
  const pricesChicos = {
    primerMes: { price: "60€", description: locale === "ca" ? "matrícula + mes inclòs" : "matrícula + mes incluido" },
    mensual: { price: "45€", description: locale === "ca" ? "per mes" : "por mes" },
    trimestral: { price: "126€", pricePerMonth: "42€", description: locale === "ca" ? "per mes" : "por mes" },
    semestral: { price: "228€", pricePerMonth: "38€", description: locale === "ca" ? "per mes" : "por mes" },
    nouMesos: { price: "297€", pricePerMonth: "33€", description: locale === "ca" ? "per mes" : "por mes" },
    anual: { price: "375€", pricePerMonth: "31€", description: locale === "ca" ? "per mes" : "por mes" }
  }

  // Precios para CHICAS (2025-2026-2027)  
  const pricesChicas = {
    primerMes: { price: "55€", description: locale === "ca" ? "matrícula + mes inclòs" : "matrícula + mes incluido" },
    mensual: { price: "39€", description: locale === "ca" ? "per mes" : "por mes" },
    trimestral: { price: "110€", pricePerMonth: "36,6€", description: locale === "ca" ? "per mes" : "por mes" },
    semestral: { price: "175€", pricePerMonth: "29€", description: locale === "ca" ? "per mes" : "por mes" },
    nouMesos: { price: "243€", pricePerMonth: "27€", description: locale === "ca" ? "per mes" : "por mes" },
    anual: { price: "300€", pricePerMonth: "25€", description: locale === "ca" ? "per mes" : "por mes" }
  }

  const mainPlans = [
    {
      name: locale === "ca" ? "Primer Mes" : "Primer Mes",
      description: locale === "ca" ? "Primer mes tot inclòs amb matrícula i mensualitat" : "Primer mes todo incluido con matrícula y mensualidad",
      priceChicos: pricesChicos.primerMes.price,
      priceChicas: pricesChicas.primerMes.price,
      period: pricesChicos.primerMes.description,
      features: [
        locale === "ca" ? "Accés complet a totes les instal·lacions" : "Acceso completo a todas las instalaciones",
        locale === "ca" ? "Sala de musculació i cardio" : "Sala de musculación y cardio",
        locale === "ca" ? "Classes d'arts marcials" : "Clases de artes marciales",
        locale === "ca" ? "Vestuaris amb dutxes" : "Vestuarios con duchas"
      ],
      highlighted: false
    },
    {
      name: locale === "ca" ? "Mensual" : "Mensual", 
      description: locale === "ca" ? "Flexibilitat màxima sense compromisos" : "Flexibilidad máxima sin compromisos",
      priceChicos: pricesChicos.mensual.price,
      priceChicas: pricesChicas.mensual.price,
      period: pricesChicos.mensual.description,
      features: [
        locale === "ca" ? "Tot el contingut del primer mes" : "Todo el contenido del primer mes",
        locale === "ca" ? "Sense permanència" : "Sin permanencia",
        locale === "ca" ? "Pots cancel·lar quan vulguis" : "Puedes cancelar cuando quieras",
        locale === "ca" ? "Ideal per provar el gimnàs" : "Ideal para probar el gimnasio"
      ],
      highlighted: true,
      badge: locale === "ca" ? "Més popular" : "Más popular"
    },
    {
      name: locale === "ca" ? "Trimestral" : "Trimestral",
      description: locale === "ca" ? "Perfecte per crear una rutina" : "Perfecto para crear una rutina", 
      priceChicos: pricesChicos.trimestral.price,
      priceChicas: pricesChicas.trimestral.price,
      pricePerMonthChicos: pricesChicos.trimestral.pricePerMonth,
      pricePerMonthChicas: pricesChicas.trimestral.pricePerMonth,
      period: locale === "ca" ? "trimestre" : "trimestre",
      features: [
        locale === "ca" ? "3 mesos de compromís" : "3 meses de compromiso",
        locale === "ca" ? "Accés complet a totes les zones" : "Acceso completo a todas las zonas",
        locale === "ca" ? "Millor preu mensual" : "Mejor precio mensual",
        locale === "ca" ? "Ideal per objectius a curt termini" : "Ideal para objetivos a corto plazo"
      ],
      highlighted: false
    }
  ]

  const longerPlans = [
    {
      name: locale === "ca" ? "Semestral (6 mesos)" : "Semestral (6 meses)",
      priceChicos: pricesChicos.semestral.price,
      priceChicas: pricesChicas.semestral.price,
      monthlyPriceChicos: pricesChicos.semestral.pricePerMonth,
      monthlyPriceChicas: pricesChicas.semestral.pricePerMonth
    },
    {
      name: locale === "ca" ? "9 Mesos" : "9 Meses", 
      priceChicos: pricesChicos.nouMesos.price,
      priceChicas: pricesChicas.nouMesos.price,
      monthlyPriceChicos: pricesChicos.nouMesos.pricePerMonth,
      monthlyPriceChicas: pricesChicas.nouMesos.pricePerMonth
    },
    {
      name: locale === "ca" ? "Anual (12 mesos)" : "Anual (12 meses)",
      priceChicos: pricesChicos.anual.price,
      priceChicas: pricesChicas.anual.price,
      monthlyPriceChicos: pricesChicos.anual.pricePerMonth,
      monthlyPriceChicas: pricesChicas.anual.pricePerMonth,
      bestValue: true
    }
  ]

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-neutral text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{t.prices.title}</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">{t.prices.subtitle}</p>
              <div className="mt-6 inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">
                  {locale === "ca" ? "Tarifes diferenciades per gènere" : "Tarifas diferenciadas por género"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Price Legend */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <UserCheck className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">
                      {locale === "ca" ? "Tarifes Nois" : "Tarifas Chicos"}
                    </h3>
                  </div>
                  <p className="text-red-700 text-sm">
                    {locale === "ca" ? "Vàlides per 2025-2026-2027" : "Válidas para 2025-2026-2027"}
                  </p>
                  <p className="text-red-600 text-xs mt-1">
                    FITNESS, MUSCULACIÓ, CARDIO
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <UserCheck className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">
                      {locale === "ca" ? "Tarifes Noies" : "Tarifas Chicas"}
                    </h3>
                  </div>
                  <p className="text-red-700 text-sm">
                    {locale === "ca" ? "Vàlides per 2025-2026-2027" : "Válidas para 2025-2026-2027"}
                  </p>
                  <p className="text-red-600 text-xs mt-1">
                    FITNESS, MUSCULACIÓ, CARDIO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer ISCP */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {locale === "ca" 
                  ? "OFERTA ESPECIAL - Descompte per a aspirants a oposicions ISCP"
                  : "OFERTA ESPECIAL - Descuento para aspirantes a oposiciones ISCP"
                }
              </h2>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 mb-4">
                <p className="text-lg md:text-xl mb-4 font-semibold">
                  {locale === "ca"
                    ? "Institut de Seguretat Pública de Catalunya"
                    : "Institut de Seguretat Pública de Catalunya"
                  }
                </p>
                <p className="text-base md:text-lg mb-4">
                  {locale === "ca"
                    ? "Si estàs preparant oposicions per a l'ISCP, tens un descompte especial!"
                    : "Si estás preparando oposiciones para el ISCP, ¡tienes un descuento especial!"
                  }
                </p>
                <div className="bg-red-800/50 border-l-4 border-yellow-400 p-4 rounded text-left">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    {locale === "ca" ? "Requisits:" : "Requisitos:"}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>
                        {locale === "ca"
                          ? "Presentar el carnet d'aspirant a oposicions de l'ISCP"
                          : "Presentar el carnet de aspirante a oposiciones del ISCP"
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>
                        {locale === "ca"
                          ? "Contactar amb el gimnàs per aplicar l'oferta"
                          : "Contactar con el gimnasio para aplicar la oferta"
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-red-700 hover:bg-gray-100 font-bold shadow-xl">
                  <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                    <Calendar className="mr-2 h-5 w-5" />
                    {locale === "ca" ? "Contacta'ns ara" : "Contáctanos ahora"}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                  <a href="tel:+34935624934">
                    {locale === "ca" ? "Truca'ns" : "Llámanos"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
                {locale === "ca" ? "Plans principals" : "Planes principales"}
              </h2>
              <p className="text-muted-foreground">
                {locale === "ca" ? "Escull el pla que millor s'adapti al teu estil de vida" : "Elige el plan que mejor se adapte a tu estilo de vida"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mainPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.highlighted ? 'ring-2 ring-primary shadow-2xl scale-105' : 'shadow-lg'}`}>
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl md:text-2xl font-bold text-neutral">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                    
                    {/* Precios por género */}
                    <div className="mt-4 space-y-3">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <div className="text-sm text-red-600 font-medium mb-1">
                          {locale === "ca" ? "Nois" : "Chicos"}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-2xl md:text-3xl font-bold text-red-700">{plan.priceChicos}</span>
                          {plan.pricePerMonthChicos && (
                            <span className="text-sm text-red-600">({plan.pricePerMonthChicos}/{locale === "ca" ? "mes" : "mes"})</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <div className="text-sm text-red-600 font-medium mb-1">
                          {locale === "ca" ? "Noies" : "Chicas"}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-2xl md:text-3xl font-bold text-red-700">{plan.priceChicas}</span>
                          {plan.pricePerMonthChicas && (
                            <span className="text-sm text-red-600">({plan.pricePerMonthChicas}/{locale === "ca" ? "mes" : "mes"})</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      asChild 
                      className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90 text-neutral'}`}
                    >
                      <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                        {locale === "ca" ? "Contractar" : "Contratar"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Extended Plans */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">
                {locale === "ca" ? "Plans de compromís llarg" : "Planes de compromiso largo"}
              </h2>
              <p className="text-muted-foreground">
                {locale === "ca" ? "Millors preus mensuals amb compromisos més llargs" : "Mejores precios mensuales con compromisos más largos"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {longerPlans.map((plan, index) => (
                <Card key={index} className={`${plan.bestValue ? 'ring-2 ring-green-500 shadow-xl' : 'shadow-lg'}`}>
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {locale === "ca" ? "Millor valor" : "Mejor valor"}
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-neutral">{plan.name}</CardTitle>
                    
                    {/* Precios por género para planes largos */}
                    <div className="mt-4 space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <div className="text-xs text-red-600 mb-1">
                          {locale === "ca" ? "Nois" : "Chicos"}
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-red-700">{plan.priceChicos}</div>
                        <div className="text-sm text-red-600">{plan.monthlyPriceChicos}/{locale === "ca" ? "mes" : "mes"}</div>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded-lg">
                        <div className="text-xs text-red-600 mb-1">
                          {locale === "ca" ? "Noies" : "Chicas"}
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-red-700">{plan.priceChicas}</div>
                        <div className="text-sm text-red-600">{plan.monthlyPriceChicas}/{locale === "ca" ? "mes" : "mes"}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                        {locale === "ca" ? "Contractar" : "Contratar"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg max-w-4xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold text-neutral mb-4">
                {locale === "ca" ? "Vols més informació?" : "¿Quieres más información?"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {locale === "ca" 
                  ? "Contacta'ns per resoldre tots els teus dubtes sobre els nostres plans i tarifes"
                  : "Contáctanos para resolver todas tus dudas sobre nuestros planes y tarifas"
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={`/${locale}/${locale === "ca" ? "contacte" : "contacto"}`}>
                    <Calendar className="mr-2 h-5 w-5" />
                    {locale === "ca" ? "Reserva una visita" : "Reserva una visita"}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+34935624934">
                    {locale === "ca" ? "Truca'ns ara" : "Llámanos ahora"}
                  </a>
                </Button>
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