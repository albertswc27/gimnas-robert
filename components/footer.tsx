import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import type { Locale } from "@/lib/i18n"

interface FooterProps {
  locale: Locale
  translations: any
}

export function Footer({ locale, translations }: FooterProps) {
  const t = translations.footer
  const nav = translations.nav

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo-gimnas-robert-gimnasio-oficial.png"
                  alt="Gimnàs Robert Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-primary">GIMNÀS ROBERT</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{t.about_text}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.quick_links}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-white/70 hover:text-primary transition-colors text-sm">
                  {nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/${locale === "ca" ? "el-gimnas" : "el-gimnasio"}`}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/${locale === "ca" ? "serveis" : "servicios"}`}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/${locale === "ca" ? "preus" : "precios"}`}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {nav.prices}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/${locale === "ca" ? "horaris" : "horarios"}`}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {nav.schedule}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{nav.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70">{CONTACT.ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={`tel:${CONTACT.PHONE_MAIN}`} className="text-white/70 hover:text-primary transition-colors">
                  {CONTACT.PHONE_MAIN}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={`mailto:${CONTACT.EMAIL}`} className="text-white/70 hover:text-primary transition-colors">
                  {CONTACT.EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/${locale === "ca" ? "avis-legal" : "aviso-legal"}`}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {t.legal_notice}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/${locale === "ca" ? "politica-de-privacitat" : "politica-de-privacidad"}`}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/${locale === "ca" ? "accessibilitat" : "accesibilidad"}`}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  {t.accessibility}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Gimnàs Robert. {t.rights}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
