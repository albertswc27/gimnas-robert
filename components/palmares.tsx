import { getTranslations, type Locale } from "@/lib/i18n"
import { Trophy, Medal, Award, Star } from "lucide-react"

type AchievementType = "champion" | "runnerup" | "third" | "place"

interface Achievement {
  year: number
  type: AchievementType
  weight: string
  org: string
  ca: string
  es: string
}

// Palmarés esportiu d'en Robert (culturisme). Ordenat per any.
const achievements: Achievement[] = [
  {
    year: 2001,
    type: "champion",
    weight: "70 kg",
    org: "IFBB",
    ca: "Campió promeses de Catalunya",
    es: "Campeón promesas de Cataluña",
  },
  {
    year: 2001,
    type: "champion",
    weight: "70 kg",
    org: "IFBB",
    ca: "Campió de la ciutat de Barcelona",
    es: "Campeón de la ciudad de Barcelona",
  },
  {
    year: 2001,
    type: "champion",
    weight: "70 kg",
    org: "IFBB",
    ca: "Campió provincial de Lleida",
    es: "Campeón provincial de Lleida",
  },
  {
    year: 2001,
    type: "runnerup",
    weight: "75 kg",
    org: "IFBB",
    ca: "Subcampió de la ciutat de Badalona",
    es: "Subcampeón de la ciudad de Badalona",
  },
  {
    year: 2001,
    type: "runnerup",
    weight: "70 kg",
    org: "IFBB",
    ca: "Subcampió de Catalunya",
    es: "Subcampeón de Cataluña",
  },
  {
    year: 2004,
    type: "champion",
    weight: "75 kg",
    org: "IFBB",
    ca: "Campió de la ciutat de Barcelona",
    es: "Campeón de la ciudad de Barcelona",
  },
  {
    year: 2004,
    type: "champion",
    weight: "75 kg",
    org: "IFBB",
    ca: "Campió del Gran Prix de Catalunya",
    es: "Campeón del Gran Prix de Cataluña",
  },
  {
    year: 2004,
    type: "champion",
    weight: "75 kg",
    org: "IFBB",
    ca: "Campió de Catalunya",
    es: "Campeón de Cataluña",
  },
  {
    year: 2004,
    type: "third",
    weight: "75 kg",
    org: "IFBB",
    ca: "3r lloc, trofeu nivell nacional amb la selecció catalana",
    es: "3er puesto, trofeo nivel nacional con la selección catalana",
  },
  {
    year: 2004,
    type: "place",
    weight: "75 kg",
    org: "IFBB",
    ca: "Sisè lloc Open de Catalunya",
    es: "Sexto lugar Open de Cataluña",
  },
  {
    year: 2007,
    type: "third",
    weight: "70 kg",
    org: "FCCN",
    ca: "3r lloc amb la Federació Catalana de Culturisme Natural",
    es: "3er puesto con la Federación Catalana de Culturismo Natural",
  },
  {
    year: 2013,
    type: "champion",
    weight: "70 kg",
    org: "FCC",
    ca: "Campió de Catalunya amb la Federació Catalana de Culturisme",
    es: "Campeón de Cataluña con la Federación Catalana de Culturismo",
  },
]

const typeStyles: Record<AchievementType, { icon: typeof Trophy; iconClass: string; ringClass: string }> = {
  champion: { icon: Trophy, iconClass: "text-yellow-400", ringClass: "bg-yellow-400/10" },
  runnerup: { icon: Medal, iconClass: "text-zinc-300", ringClass: "bg-zinc-300/10" },
  third: { icon: Award, iconClass: "text-amber-600", ringClass: "bg-amber-600/10" },
  place: { icon: Star, iconClass: "text-white/50", ringClass: "bg-white/5" },
}

export function Palmares({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)

  const years = Array.from(new Set(achievements.map((a) => a.year))).sort((a, b) => a - b)
  const championCount = achievements.filter((a) => a.type === "champion").length
  const firstYear = years[0]
  const lastYear = years[years.length - 1]

  const typeLabel: Record<AchievementType, string> = {
    champion: t.palmares.champion,
    runnerup: t.palmares.runnerup,
    third: t.palmares.third,
    place: t.palmares.place,
  }

  return (
    <section className="py-12 md:py-20 bg-neutral text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
            <Trophy className="h-4 w-4 md:h-5 md:w-5" />
            <span className="font-semibold tracking-wide uppercase text-xs md:text-sm">{t.palmares.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">{t.palmares.title}</h2>
          <p className="text-base md:text-xl text-white/70 leading-relaxed">{t.palmares.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-10 md:mb-16">
          {[
            { value: `${championCount}`, label: t.palmares.stat_titles },
            { value: `${firstYear}–${lastYear}`, label: t.palmares.stat_years },
            { value: "70–75 kg", label: t.palmares.stat_categories },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-5 text-center"
            >
              <p className="text-xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-[11px] md:text-sm text-white/60 mt-0.5 md:mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline grouped by year */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {years.map((year) => (
            <div key={year} className="grid md:grid-cols-[120px_1fr] gap-3 md:gap-8">
              <div className="md:text-right">
                <span className="inline-block text-xl md:text-2xl font-bold text-white border-l-4 md:border-l-0 md:border-r-4 border-primary pl-3 md:pl-0 md:pr-3">
                  {year}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {achievements
                  .filter((a) => a.year === year)
                  .map((a, i) => {
                    const style = typeStyles[a.type]
                    const Icon = style.icon
                    return (
                      <div
                        key={i}
                        className="flex gap-3 md:gap-4 bg-white/5 border border-white/10 rounded-lg p-3.5 md:p-5 hover:bg-white/[0.08] transition-colors"
                      >
                        <div className={`shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-lg flex items-center justify-center ${style.ringClass}`}>
                          <Icon className={`h-5 w-5 md:h-6 md:w-6 ${style.iconClass}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1">
                            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-primary">
                              {typeLabel[a.type]}
                            </span>
                            <span className="text-[11px] md:text-xs text-white/40">·</span>
                            <span className="text-[11px] md:text-xs text-white/50">{a.weight}</span>
                          </div>
                          <p className="text-sm md:text-base font-semibold leading-snug text-white">{locale === "ca" ? a.ca : a.es}</p>
                          <p className="text-[11px] md:text-xs text-white/40 mt-1">{a.org}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
