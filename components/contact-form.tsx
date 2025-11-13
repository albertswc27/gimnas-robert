"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface ContactFormProps {
  locale: Locale
  translations: any
}

export function ContactForm({ locale, translations }: ContactFormProps) {
  const t = translations.contact
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    privacy: false,
    marketing: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus("success")
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        privacy: false,
        marketing: false,
      })
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">{t.name}</Label>
        <Input
          id="name"
          type="text"
          required
          minLength={2}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="phone">{t.phone}</Label>
        <Input
          id="phone"
          type="tel"
          required
          pattern="[0-9]{9,15}"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="email">{t.email}</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="message">{t.message}</Label>
        <Textarea
          id="message"
          required
          minLength={10}
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-2"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Checkbox
            id="privacy"
            required
            checked={formData.privacy}
            onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
          />
          <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
            {t.privacy}
          </Label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="marketing"
            checked={formData.marketing}
            onCheckedChange={(checked) => setFormData({ ...formData, marketing: checked as boolean })}
          />
          <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer">
            {t.marketing}
          </Label>
        </div>
      </div>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">{t.success}</div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">{t.error}</div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90" size="lg">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {t.sending}
          </>
        ) : (
          t.submit
        )}
      </Button>
    </form>
  )
}
