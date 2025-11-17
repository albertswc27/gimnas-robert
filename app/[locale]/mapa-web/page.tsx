import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations, type Locale } from "@/lib/i18n"
import Link from "next/link"
import { use } from "react"

export default function SitemapPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)

  const pages = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/${locale === "ca" ? "el-gimnas" : "el-gimnasio"}` },
    { name: t.nav.services, href: `/${locale}/${locale === "ca" ? "serveis" : "servicios"}` },
    { name: t.nav.schedule, href: `/${locale}/${locale === "ca" ? "horaris" : "horarios"}` },
    { name: t.nav.gallery, href: `/${locale}/${locale === "ca" ? "galeria" : "galeria"}` },
    { name: t.nav.contact, href: `/${locale}/${locale === "ca" ? "contacte" : "contacto"}` },
  ]

  const legal = [
    { name: t.footer.legal_notice, href: `/${locale}/${locale === "ca" ? "avis-legal" : "aviso-legal"}` },
    {
      name: t.footer.privacy,
      href: `/${locale}/${locale === "ca" ? "politica-de-privacitat" : "politica-de-privacidad"}`,
    },
    { name: locale === "ca" ? "Política de cookies" : "Política de cookies", href: `/${locale}/${locale === "ca" ? "politica-de-cookies" : "politica-de-cookies"}` },
    { name: t.footer.accessibility, href: `/${locale}/${locale === "ca" ? "accessibilitat" : "accesibilidad"}` },
  ]

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-neutral">{t.footer.sitemap}</h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-neutral">
                  {locale === "ca" ? "Pàgines principals" : "Páginas principales"}
                </h2>
                <ul className="space-y-3">
                  {pages.map((page) => (
                    <li key={page.href}>
                      <Link href={page.href} className="text-primary hover:underline text-lg">
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-neutral">
                  {locale === "ca" ? "Informació legal" : "Información legal"}
                </h2>
                <ul className="space-y-3">
                  {legal.map((page) => (
                    <li key={page.href}>
                      <Link href={page.href} className="text-primary hover:underline text-lg">
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
    </>
  )
}
