"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Palmares } from "@/components/palmares"
import { getTranslations, type Locale } from "@/lib/i18n"
import Image from "next/image"
import { useState, use } from "react"
import { Button } from "@/components/ui/button"

export default function GalleryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  const t = getTranslations(locale)
  const [filter, setFilter] = useState<string>("all")

  const galleryImages = [
    // Nuevas fotos profesionales (julio 2026)
    {
      id: 1,
      src: "/images/hero-remo-polea-entrenamiento-espalda-gimnas-robert-parets.avif",
      alt: locale === "ca" ? "Entrenament d'esquena amb rem a politja a la sala de musculació" : "Entrenamiento de espalda con remo en polea en la sala de musculación",
      category: "musculacion"
    },
    {
      id: 2,
      src: "/images/hero-dominadas-rack-exterior-gimnas-robert-parets.avif",
      alt: locale === "ca" ? "Dominades al rack de la zona exterior d'entrenament" : "Dominadas en el rack de la zona exterior de entrenamiento",
      category: "exterior"
    },
    {
      id: 3,
      src: "/images/gallery/sala-musculacion-maquinas-profesionales-gym-robert-parets.avif",
      alt: locale === "ca" ? "Sala de musculació amb màquines professionals" : "Sala de musculación con máquinas profesionales",
      category: "musculacion"
    },
    {
      id: 4,
      src: "/images/gallery/sala-musculacion-pesas-discos-barras-gym-robert-parets.avif",
      alt: locale === "ca" ? "Sala de musculació amb peses, discos i barres" : "Sala de musculación con pesas, discos y barras",
      category: "musculacion"
    },
    {
      id: 5,
      src: "/images/gallery/entrenamiento-hip-thrust-barra-discos-gym-robert-parets.avif",
      alt: locale === "ca" ? "Entrenament de hip thrust amb barra i discos" : "Entrenamiento de hip thrust con barra y discos",
      category: "musculacion"
    },
    {
      id: 6,
      src: "/images/gallery/press-inclinado-maquina-sala-musculacion-gym-robert-parets.avif",
      alt: locale === "ca" ? "Press inclinat a màquina a la sala de musculació" : "Press inclinado en máquina en la sala de musculación",
      category: "musculacion"
    },
    {
      id: 7,
      src: "/images/gallery/sala-artes-marciales-tatami-sacos-boxeo-kickboxing-gym-robert-parets-nueva.avif",
      alt: locale === "ca" ? "Sala d'arts marcials amb tatami i sacs de boxa i kick boxing" : "Sala de artes marciales con tatami y sacos de boxeo y kick boxing",
      category: "boxeo"
    },
    {
      id: 8,
      src: "/images/gallery/fachada-edificio-gimnas-robert-parets-dia-soleado.avif",
      alt: locale === "ca" ? "Façana del Gimnàs Robert a Parets del Vallès" : "Fachada del Gimnàs Robert en Parets del Vallès",
      category: "exterior"
    },
    {
      id: 9,
      src: "/images/gallery/fachada-gimnas-robert-zona-exterior-calistenia-rack-getstrong.avif",
      alt: locale === "ca" ? "Zona exterior de cal·listènia amb rack davant del gimnàs" : "Zona exterior de calistenia con rack frente al gimnasio",
      category: "exterior"
    },

    // Instalaciones del Gimnasio - Sala Principal
    {
      id: 10,
      src: "/images/gallery/sala-musculacion-gimnas-robert-maquinas-pesas-barras-entrenamiento.avif",
      alt: locale === "ca" ? "Sala de musculació amb màquines, peses i barres d'entrenament" : "Sala de musculación con máquinas, pesas y barras de entrenamiento",
      category: "musculacion"
    },
    {
      id: 11,
      src: "/images/gallery/vista-panoramica-gimnasio-maquinas-musculacion-zona-pesas-iluminacion.avif",
      alt: locale === "ca" ? "Vista panoràmica de la zona de màquines i peses" : "Vista panorámica de la zona de máquinas y pesas",
      category: "musculacion"
    },
    {
      id: 12,
      src: "/images/gallery/zona-entrenamiento-funcional-pesas-libres-mancuernas-gimnas-robert.avif",
      alt: locale === "ca" ? "Zona d'entrenament funcional amb peses lliures i manuelles" : "Zona de entrenamiento funcional con pesas libres y mancuernas",
      category: "musculacion"
    },
    {
      id: 13,
      src: "/images/gallery/grupo-usuarios-entrenando-sala-principal-gimnas-robert-ambiente-activo.avif",
      alt: locale === "ca" ? "Grup d'usuaris entrenant a la sala principal" : "Grupo de usuarios entrenando en la sala principal",
      category: "musculacion"
    },

    // Zona de Cardio
    {
      id: 14,
      src: "/images/gallery/area-fitness-gimnas-robert-bicicletas-estaticas-cintas-correr-moderno.avif",
      alt: locale === "ca" ? "Àrea de fitness amb bicicletes estàtiques i cintes de córrer" : "Área de fitness con bicicletas estáticas y cintas de correr",
      category: "cardio"
    },
    {
      id: 15,
      src: "/images/gallery/zona-cardio-gimnas-robert-elipticas-bicicletas-televisores-aerobicos.avif",
      alt: locale === "ca" ? "Zona de cardio amb el·líptiques i bicicletes" : "Zona de cardio con elípticas y bicicletas",
      category: "cardio"
    },
    {
      id: 16,
      src: "/images/gallery/sala-cardio-gimnas-robert-equipamiento-aerobico-fitness.avif",
      alt: locale === "ca" ? "Màquines de cardio" : "Máquinas de cardio",
      category: "cardio"
    },

    // Boxeo y Artes Marciales
    {
      id: 17,
      src: "/images/gallery/sala-boxeo-gimnas-robert-sacos-golpeo-tatami-kickboxing-artes-marciales.avif",
      alt: locale === "ca" ? "Sala de boxa amb sacs de colpeig i tatami" : "Sala de boxeo con sacos de golpeo y tatami",
      category: "boxeo"
    },
    {
      id: 18,
      src: "/images/gallery/entrenadores-alumnos-boxeo-gimnas-robert-ambiente-deportivo-energia.avif",
      alt: locale === "ca" ? "Entrenadors i alumnes de boxa" : "Entrenadores y alumnos de boxeo",
      category: "boxeo"
    },
    {
      id: 19,
      src: "/images/gallery/entrenamiento-boxeo-guantes-saco-gimnas-robert-tecnica-profesional.avif",
      alt: locale === "ca" ? "Entrenament de boxa amb guants i sac" : "Entrenamiento de boxeo con guantes y saco",
      category: "boxeo"
    },
    {
      id: 20,
      src: "/images/gallery/tatami-artes-marciales-gimnas-robert-suelo-entrenamiento.avif",
      alt: locale === "ca" ? "Tatami per a arts marcials" : "Tatami para artes marciales",
      category: "boxeo"
    },
    {
      id: 21,
      src: "/images/gallery/tatami-entrenamiento-artes-marciales-gimnas-robert-superficie.avif",
      alt: locale === "ca" ? "Superfície de tatami per a entrenament" : "Superficie de tatami para entrenamiento",
      category: "boxeo"
    },
    {
      id: 22,
      src: "/images/gallery/equipo-boxeo-gimnas-robert-material-entrenamiento-combate.avif",
      alt: locale === "ca" ? "Equip de boxa" : "Equipo de boxeo",
      category: "boxeo"
    },

    // Exterior y Fachada
    {
      id: 23,
      src: "/images/gallery/fachada-principal-gimnas-robert-cartel-identificativo-acceso-calle.avif",
      alt: locale === "ca" ? "Façana principal del gimnàs amb cartell identificatiu" : "Fachada principal del gimnasio con cartel identificativo",
      category: "exterior"
    },

    // Historia de Robert (Propietario)
    {
      id: 24,
      src: "/images/gallery/robert-concurso-culturismo-competicion-gimnas-robert-propietario.avif", 
      alt: locale === "ca" ? "Robert concurs de culturisme" : "Robert concurso de culturismo", 
      category: "historia" 
    },
    {
      id: 25,
      src: "/images/gallery/robert-culturismo-competencia-musculacion-gimnas-robert-fundador.avif",
      alt: locale === "ca" ? "Robert en competència de culturisme" : "Robert en competencia de culturismo", 
      category: "historia" 
    },
    {
      id: 26,
      src: "/images/gallery/robert-campeonato-culturismo-victoria-gimnas-robert-logros.avif",
      alt: locale === "ca" ? "Robert després d'un campionat de culturisme" : "Robert después de un campeonato de culturismo", 
      category: "historia" 
    },
    {
      id: 27,
      src: "/images/gallery/robert-carrera-atletismo-deporte-gimnas-robert-entrenador.avif",
      alt: locale === "ca" ? "Robert en una carrera d'atletisme" : "Robert en una carrera de atletismo", 
      category: "historia" 
    },
    {
      id: 28,
      src: "/images/gallery/dorsales-carreras-robert-atletismo-competiciones-gimnas-robert.avif",
      alt: locale === "ca" ? "Dorsals de carreres de Robert" : "Dorsales de carreras de Robert", 
      category: "historia" 
    },
    {
      id: 29,
      src: "/images/gallery/robert-futbol-deporte-juventud-gimnas-robert-historia-deportiva.avif",
      alt: locale === "ca" ? "Robert quan jugava a futbol" : "Robert cuando jugaba fútbol", 
      category: "historia" 
    },
    {
      id: 30,
      src: "/images/gallery/robert-futbolista-pasado-deportivo-gimnas-robert-trayectoria.avif",
      alt: locale === "ca" ? "Robert futbolista en el seu passat esportiu" : "Robert futbolista en su pasado deportivo", 
      category: "historia" 
    },
    {
      id: 31,
      src: "/images/gallery/robert-moto-motocicleta-aficion-gimnas-robert-propietario.avif",
      alt: locale === "ca" ? "Robert amb la seva moto" : "Robert con su moto", 
      category: "historia" 
    },
    {
      id: 32,
      src: "/images/gallery/robert-motociclismo-pasion-motor-gimnas-robert-dueno.avif",
      alt: locale === "ca" ? "Robert i la seva passió pel motociclisme" : "Robert y su pasión por el motociclismo", 
      category: "historia" 
    },
    {
      id: 33,
      src: "/images/gallery/robert-moto-aventura-deportes-motor-gimnas-robert-fundador.avif",
      alt: locale === "ca" ? "Robert en aventura amb moto" : "Robert en aventura con moto", 
      category: "historia" 
    },
  ]

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const categories = [
    { id: "all", label: locale === "ca" ? "Totes" : "Todas" },
    { id: "musculacion", label: locale === "ca" ? "Musculació" : "Musculación" },
    { id: "cardio", label: locale === "ca" ? "Cardio" : "Cardio" },
    { id: "boxeo", label: locale === "ca" ? "Boxa" : "Boxeo" },
    { id: "exterior", label: locale === "ca" ? "Exterior" : "Exterior" },
    { id: "historia", label: locale === "ca" ? "Història de Robert" : "Historia de Robert" },
  ]

  return (
    <>
      <Header locale={locale} translations={t} />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-neutral text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">{t.nav.gallery}</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                {locale === "ca"
                  ? "Descobreix les nostres instal·lacions i l'ambient del gimnàs."
                  : "Descubre nuestras instalaciones y el ambiente del gimnasio."}
              </p>
            </div>
          </div>
        </section>

        {/* Palmarés Section */}
        <Palmares locale={locale} />

        {/* Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-12 px-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  variant={filter === category.id ? "default" : "outline"}
                  className={filter === category.id ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <p className="text-white font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} translations={t} />
      <WhatsAppButton label={t.whatsapp_button} />
    </>
  )
}
