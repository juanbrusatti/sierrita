import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar } from "lucide-react"

export function Hero() {
  const whatsappNumber = "5493512345678" // Número de ejemplo
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría consultar disponibilidad para Cabañas El Refugio del Valle",
  )

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/beautiful-cabin-in-the-mountains-of-c-rdoba-argent.jpg"
        alt="Cabañas El Refugio del Valle en las sierras de Córdoba"
        fill
        className="object-cover brightness-75"
        priority
      />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
          Descansá en las sierras de Córdoba
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-balance font-light">
          Cabañas El Refugio del Valle – Naturaleza, tranquilidad y confort
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base md:text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Reservar por WhatsApp
            </a>
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-base md:text-lg px-8 py-6 bg-white/90 hover:bg-white text-foreground"
            asChild
          >
            <a href="#contacto" className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Consultar disponibilidad
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
