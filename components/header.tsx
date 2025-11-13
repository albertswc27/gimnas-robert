"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"

interface HeaderProps {
  locale: Locale
  translations: any
}

export function Header({ locale, translations }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations.nav

  const navigation = [
    { name: t.home, href: `/${locale}` },
    { name: t.about, href: `/${locale}/${locale === "ca" ? "el-gimnas" : "el-gimnasio"}` },
    { name: t.services, href: `/${locale}/${locale === "ca" ? "serveis" : "servicios"}` },
    { name: t.prices, href: `/${locale}/${locale === "ca" ? "preus" : "precios"}` },
    { name: t.schedule, href: `/${locale}/${locale === "ca" ? "horaris" : "horarios"}` },
    { name: t.gallery, href: `/${locale}/${locale === "ca" ? "galeria" : "galeria"}` },
    { name: t.contact, href: `/${locale}/${locale === "ca" ? "contacte" : "contacto"}` },
  ]

  const toggleLanguage = () => {
    const newLocale = locale === "ca" ? "es" : "ca"
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    window.location.href = `/${newLocale}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo-gimnas-robert-gimnasio-oficial.png"
                alt="Gimnàs Robert Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xl font-bold text-white">
              <span className="text-primary">GIMNÀS</span> ROBERT
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              aria-label={`Switch to ${locale === "ca" ? "Spanish" : "Catalan"}`}
              className="text-white/80 hover:text-primary"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">{locale.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="justify-start text-white/80 hover:text-primary"
              >
                <Globe className="h-5 w-5 mr-2" />
                {locale === "ca" ? "Español" : "Català"}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
