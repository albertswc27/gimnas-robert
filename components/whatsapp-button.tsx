"use client"

import { MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/constants"

interface WhatsAppButtonProps {
  label: string
}

export function WhatsAppButton({ label }: WhatsAppButtonProps) {
  return (
    <a
      href={CONTACT.WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 group"
      aria-label={label}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">{label}</span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </a>
  )
}
