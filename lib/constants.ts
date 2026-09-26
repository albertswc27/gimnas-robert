export const CONTACT = {
  ADDRESS: "C/ Sant Jordi Nº 10, 08150 Parets del Vallès, Barcelona",
  PHONE_MAIN: "+34 935 624 934",
  PHONE_MOBILE: "+34 615 687 473",
  WHATSAPP_URL: "https://wa.me/34615687473",
  EMAIL: "gymrobert@gmail.com",
  GOOGLE_MAPS_URL:
    "https://www.google.com/maps/search/?api=1&query=C%2F+Sant+Jordi+N%C2%BA+10%2C+08150+Parets+del+Vall%C3%A8s%2C+Barcelona",
} as const

export const SCHEDULE = {
  sala: {
    weekdays: { open: "5:00", close: "22:00" },
    saturday: { open: "6:30", close: "13:00" },
  },
  juniors: {
    days: ["Dilluns", "Dimarts", "Dijous"],
    time: { start: "17:30", end: "18:45" },
  },
  seniors: {
    days: ["Dilluns", "Dimarts", "Dijous"],
    time: { start: "18:45", end: "20:00" },
  },
} as const
