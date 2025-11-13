import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations, type Locale } from "@/lib/i18n"
import { use } from "react"

export default function LegalNoticePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-neutral">{t.footer.legal_notice}</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                {locale === "ca" ? "Última actualització: Gener 2025" : "Última actualización: Enero 2025"}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">
                {locale === "ca" ? "Dades identificatives" : "Datos identificativos"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "ca"
                  ? "Titular: Robert Rigol Vallejo. Adreça: C/ Sant Jordi Nº 10, 08150 Parets del Vallès, Barcelona. Correu electrònic: gymrobert@gmail.com. Telèfon: 935 624 934 / 615 687 473."
                  : "Titular: Robert Rigol Vallejo. Dirección: C/ Sant Jordi Nº 10, 08150 Parets del Vallès, Barcelona. Correo electrónico: gymrobert@gmail.com. Teléfono: 935 624 934 / 615 687 473."}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">{locale === "ca" ? "Objecte" : "Objeto"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "ca"
                  ? "Aquest lloc web té com a objectiu proporcionar informació sobre els serveis del Gimnàs Robert i facilitar el contacte amb els usuaris."
                  : "Este sitio web tiene como objetivo proporcionar información sobre los servicios del Gimnàs Robert y facilitar el contacto con los usuarios."}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">
                {locale === "ca" ? "Condicions d'ús" : "Condiciones de uso"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "ca"
                  ? "L'accés i ús d'aquest lloc web implica l'acceptació de les presents condicions. L'usuari es compromet a fer un ús adequat dels continguts i serveis."
                  : "El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios."}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
    </>
  )
}
