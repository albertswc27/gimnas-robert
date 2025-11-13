import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations, type Locale } from "@/lib/i18n"
import { use } from "react"

export default function PrivacyPolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-neutral">{t.footer.privacy}</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                {locale === "ca" ? "Última actualització: Gener 2025" : "Última actualización: Enero 2025"}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">
                {locale === "ca" ? "Responsable del tractament" : "Responsable del tratamiento"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "ca"
                  ? "Responsable: Robert Rigol Vallejo. Finalitat: Oferir i facturar els serveis del gimnàs. Legitimació: Consentiment de l'interessat. Destinataris: No es cediran dades a tercers excepte obligació legal. Drets: Accés, rectificació, supressió, oposició, limitació i portabilitat."
                  : "Responsable: Robert Rigol Vallejo. Finalidad: Ofrecer y facturar los servicios del gimnasio. Legitimación: Consentimiento del interesado. Destinatarios: No se cederán datos a terceros excepto obligación legal. Derechos: Acceso, rectificación, supresión, oposición, limitación y portabilidad."}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">
                {locale === "ca" ? "Dades recollides" : "Datos recogidos"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "ca"
                  ? "Recollim les dades necessàries per a la prestació dels nostres serveis: nom, telèfon, correu electrònic i missatge de contacte."
                  : "Recogemos los datos necesarios para la prestación de nuestros servicios: nombre, teléfono, correo electrónico y mensaje de contacto."}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral">
                {locale === "ca" ? "Exercici de drets" : "Ejercicio de derechos"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "ca"
                  ? "Pots exercir els teus drets enviant un correu a gymrobert@gmail.com."
                  : "Puedes ejercer tus derechos enviando un correo a gymrobert@gmail.com."}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
    </>
  )
}
