import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  items: string[]
}

export function ServiceCard({ icon: Icon, title, items }: ServiceCardProps) {
  return (
    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-0 overflow-hidden group">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-neutral">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
