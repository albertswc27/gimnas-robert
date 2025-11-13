import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["ca", "es"]
const defaultLocale = "ca"

function getLocale(request: NextRequest): string {
  // Check if locale is stored in cookie
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase())
      .find((lang) => locales.some((locale) => lang.startsWith(locale)))

    if (preferredLocale) {
      const locale = locales.find((l) => preferredLocale.startsWith(l))
      if (locale) return locale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Redirect to locale-prefixed path
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  const response = NextResponse.redirect(request.nextUrl)
  response.cookies.set("NEXT_LOCALE", locale, { maxAge: 31536000 })

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
}
