"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function MobileWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappNumber = "5493512345678"
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría consultar disponibilidad para Cabañas El Refugio del Valle",
  )

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <Button
      size="lg"
      className={`fixed bottom-6 right-6 rounded-full h-14 w-14 sm:h-16 sm:w-16 shadow-2xl z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } bg-primary hover:bg-primary/90`}
      asChild
    >
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </Button>
  )
}
