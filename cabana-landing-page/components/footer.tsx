import { MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const whatsappNumber = "5493512345678"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cabañas El Refugio del Valle</h3>
            <p className="text-sm text-background/80">Naturaleza, tranquilidad y confort en las sierras de Córdoba</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors mb-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: +54 9 351 234-5678
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Ubicación</h4>
            <div className="flex items-start gap-2 text-sm text-background/80">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Valle de Punilla, Córdoba – Argentina</span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/60">
          <p>
            Landing creada por <span className="font-semibold text-background/80">DLAY</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
