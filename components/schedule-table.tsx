"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SCHEDULE } from "@/lib/constants"
import { Clock } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface ScheduleTableProps {
  locale: Locale
  translations: any
}

export function ScheduleTable({ locale, translations }: ScheduleTableProps) {
  const t = translations.schedule

  return (
    <div className="space-y-8">
      {/* Desktop View - Full Table */}
      <div className="hidden md:block">
        <Card className="overflow-hidden border-0 shadow-xl">
          <CardContent className="p-0">
            <table className="w-full">
              <thead className="bg-neutral text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">{locale === "ca" ? "Activitat" : "Actividad"}</th>
                  <th className="px-6 py-4 text-left font-bold">{t.days}</th>
                  <th className="px-6 py-4 text-left font-bold">{locale === "ca" ? "Horari" : "Horario"}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-secondary transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-neutral">{t.sala_title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{t.weekdays}</td>
                  <td className="px-6 py-4 font-medium text-neutral">
                    {SCHEDULE.sala.weekdays.open} - {SCHEDULE.sala.weekdays.close}
                  </td>
                </tr>
                <tr className="hover:bg-secondary transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-neutral">{t.sala_title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{t.weekend}</td>
                  <td className="px-6 py-4 font-medium text-neutral">{t.closed}</td>
                </tr>
                <tr className="hover:bg-secondary transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-neutral">{t.juniors_title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{SCHEDULE.juniors.days.join(", ")}</td>
                  <td className="px-6 py-4 font-medium text-neutral">
                    {SCHEDULE.juniors.time.start} - {SCHEDULE.juniors.time.end}
                  </td>
                </tr>
                <tr className="hover:bg-secondary transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-neutral">{t.seniors_title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{SCHEDULE.seniors.days.join(", ")}</td>
                  <td className="px-6 py-4 font-medium text-neutral">
                    {SCHEDULE.seniors.time.start} - {SCHEDULE.seniors.time.end}
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Mobile View - Tabs */}
      <div className="md:hidden">
        <Tabs defaultValue="sala" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="sala">{locale === "ca" ? "Sala" : "Sala"}</TabsTrigger>
            <TabsTrigger value="juniors">Juniors</TabsTrigger>
            <TabsTrigger value="seniors">Seniors</TabsTrigger>
          </TabsList>

          <TabsContent value="sala">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral">{t.sala_title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{t.weekdays}</p>
                    <p className="text-lg font-semibold text-neutral">
                      {SCHEDULE.sala.weekdays.open} - {SCHEDULE.sala.weekdays.close}
                    </p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{t.weekend}</p>
                    <p className="text-lg font-semibold text-neutral">{t.closed}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="juniors">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral">{t.juniors_title}</h3>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{SCHEDULE.juniors.days.join(", ")}</p>
                  <p className="text-lg font-semibold text-neutral">
                    {SCHEDULE.juniors.time.start} - {SCHEDULE.juniors.time.end}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seniors">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral">{t.seniors_title}</h3>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{SCHEDULE.seniors.days.join(", ")}</p>
                  <p className="text-lg font-semibold text-neutral">
                    {SCHEDULE.seniors.time.start} - {SCHEDULE.seniors.time.end}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
