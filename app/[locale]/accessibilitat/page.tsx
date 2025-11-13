import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations, type Locale } from "@/lib/i18n"
import { use } from "react"

export default function AccessibilityPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-neutral">{t.footer.accessibility}</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                {locale === "ca" ? "Última revisió: Gener 2025" : "Última revisión: Enero 2025"}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {locale === "ca"
                  ? "El Gimnàs Robert està compromès amb l'accessibilitat web i treballa per garantir que aquest lloc web compleixi amb les Pautes d'Accessibilitat per al Contingut Web (WCAG) 2.1 nivell AA."
                  : "El Gimnàs Robert está comprometido con la accesibilidad web y trabaja para garantizar que este sitio web cumpla con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA."}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">
                {locale === "ca" ? "Característiques d'accessibilitat" : "Características de accesibilidad"}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{locale === "ca" ? "Navegació per teclat" : "Navegación por teclado"}</li>
                <li>{locale === "ca" ? "Text alternatiu per a imatges" : "Texto alternativo para imágenes"}</li>
                <li>{locale === "ca" ? "Contrast de colors adequat" : "Contraste de colores adecuado"}</li>
                <li>
                  {locale === "ca"
                    ? "Etiquetes ARIA per a lectors de pantalla"
                    : "Etiquetas ARIA para lectores de pantalla"}
                </li>
                <li>{locale === "ca" ? "Disseny responsiu" : "Diseño responsivo"}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">{locale === "ca" ? "Contacte" : "Contacto"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "ca"
                  ? "Si trobes alguna barrera d'accessibilitat, si us plau contacta'ns a gymrobert@gmail.com."
                  : "Si encuentras alguna barrera de accesibilidad, por favor contáctanos en gymrobert@gmail.com."}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
    </>
  )
}
