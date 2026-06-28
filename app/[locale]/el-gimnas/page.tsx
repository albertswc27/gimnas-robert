import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Palmares } from "@/components/palmares"
import { getTranslations, type Locale } from "@/lib/i18n"
import { Building2, Calendar, Eye, Dumbbell, Award, Mountain, Users, Heart, Bike, Footprints } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{t.about.title}</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">{t.about.history_title}</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral">{t.about.facilities_title}</h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.features}</p>
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

        {/* Additional Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral">
                {locale === "ca" ? "El que ens fa únics" : "Lo que nos hace únicos"}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Mountain className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">
                    {locale === "ca" ? "Vistes a Gallecs" : "Vistas a Gallecs"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {locale === "ca"
                      ? "Entrena gaudint de vistes privilegiades a la muntanya de Gallecs"
                      : "Entrena disfrutando de vistas privilegiadas a la montaña de Gallecs"}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Eye className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">
                    {locale === "ca" ? "Lluminositat Natural" : "Luminosidad Natural"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {locale === "ca"
                      ? "Espais amb abundant llum natural per un entrenament més agradable"
                      : "Espacios con abundante luz natural para un entrenamiento más agradable"}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Building2 className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">
                    {locale === "ca" ? "Bona Ventilació" : "Buena Ventilación"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {locale === "ca"
                      ? "Instal·lacions amb excel·lent ventilació per màxim confort"
                      : "Instalaciones con excelente ventilación para máximo confort"}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">
                    {locale === "ca" ? "Ambient Familiar" : "Ambiente Familiar"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {locale === "ca"
                      ? "Un espai proper on et sentiràs com a casa des del primer dia"
                      : "Un espacio cercano donde te sentirás como en casa desde el primer día"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Owner Experience Section */}
        <section className="py-20 bg-gradient-to-br from-neutral to-neutral/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">
                    {locale === "ca" ? "Experiència i Passió" : "Experiencia y Pasión"}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {locale === "ca" 
                    ? "Un propietari apassionat per l'esport"
                    : "Un propietario apasionado por el deporte"}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                  {locale === "ca"
                    ? "El nostre objectiu sempre ha estat crear un ambient proper i familiar on els nostres socis es trobin com a casa. Això és possible gràcies al compromís del propietari, un autèntic apassionat de l'esport amb àmplia experiència en múltiples disciplines."
                    : "Nuestro objetivo siempre ha sido crear un ambiente cercano y familiar donde nuestros socios se encuentren como en casa. Esto es posible gracias al compromiso del propietario, un auténtico apasionado del deporte con amplia experiencia en múltiples disciplinas."}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Footprints className="h-6 w-6 text-red-400" />
                      {locale === "ca" ? "Esports d'Resistència" : "Deportes de Resistencia"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/90">
                    <ul className="space-y-2 text-sm">
                      <li>{locale === "ca" ? "Curses Populars" : "Carreras Populares"}</li>
                      <li>{locale === "ca" ? "Maratons" : "Maratones"}</li>
                      <li>Trail Running</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Users className="h-6 w-6 text-red-400" />
                      {locale === "ca" ? "Esports d'Equip" : "Deportes de Equipo"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/90">
                    <ul className="space-y-2 text-sm">
                      <li>{locale === "ca" ? "Futbol" : "Fútbol"}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Bike className="h-6 w-6 text-red-400" />
                      {locale === "ca" ? "Esports de Motor i Ciclisme" : "Deportes de Motor y Ciclismo"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/90">
                    <ul className="space-y-2 text-sm">
                      <li>{locale === "ca" ? "Motociclisme" : "Motociclismo"}</li>
                      <li>BTT (Mountain Bike)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Palmarés Section */}
        <Palmares locale={locale} />

        {/* Timeline Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral">
                  {locale === "ca" ? "La nostra evolució" : "Nuestra evolución"}
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">1989</h3>
                      <h4 className="text-lg md:text-xl font-semibold text-neutral mb-3">
                        {locale === "ca" ? "Els inicis" : "Los inicios"}
                      </h4>
                      <p className="text-muted-foreground">
                        {locale === "ca"
                          ? "El Gimnàs Robert obre les seves portes en un petit local de 200m². Un somni que comença a fer-se realitat."
                          : "El Gimnasio Robert abre sus puertas en un pequeño local de 200m². Un sueño que comienza a hacerse realidad."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">1992</h3>
                      <h4 className="text-lg md:text-xl font-semibold text-neutral mb-3">
                        {locale === "ca" ? "L'expansió olímpica" : "La expansión olímpica"}
                      </h4>
                      <p className="text-muted-foreground">
                        {locale === "ca"
                          ? "Coincidint amb les Olimpíades de Barcelona, ens traslladem a la nostra ubicació actual. Oferim espais interiors i exteriors per gaudir de l'entrenament a l'aire lliure."
                          : "Coincidiendo con las Olimpiadas de Barcelona, nos trasladamos a nuestra ubicación actual. Ofrecemos espacios interiores y exteriores para disfrutar del entrenamiento al aire libre."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">2025</h3>
                      <h4 className="text-lg md:text-xl font-semibold text-neutral mb-3">
                        {locale === "ca" ? "Més de 35 anys" : "Más de 35 años"}
                      </h4>
                      <p className="text-muted-foreground">
                        {locale === "ca"
                          ? "Continuem creixent com un referent a Parets del Vallès, mantenint el nostre compromís amb la qualitat i l'atenció personalitzada."
                          : "Continuamos creciendo como un referente en Parets del Vallès, manteniendo nuestro compromiso con la calidad y la atención personalizada."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
