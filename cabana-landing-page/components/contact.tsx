"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    dates: "",
    people: "",
    message: "",
  })

  const whatsappNumber = "5493512345678"

  const handleWhatsApp = () => {
    const message = `Hola! Mi nombre es ${formData.name || "[nombre]"}. Me gustaría consultar disponibilidad para ${formData.people || "[cantidad]"} personas para las fechas ${formData.dates || "[fechas]"}. ${formData.message ? `Mensaje adicional: ${formData.message}` : ""}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleWhatsApp()
  }

  return (
    <section id="contacto" className="py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Consultá disponibilidad</h2>
        <p className="text-center text-muted-foreground mb-8">Envianos tu consulta y te responderemos a la brevedad</p>

        <div className="flex flex-col gap-6">
          <Button
            size="lg"
            className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
            onClick={() => {
              const message = encodeURIComponent(
                "Hola! Me gustaría consultar disponibilidad para Cabañas El Refugio del Valle",
              )
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
            }}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Consultar por WhatsApp
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">O completá el formulario</span>
            </div>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dates">Fechas</Label>
                  <Input
                    id="dates"
                    type="text"
                    placeholder="Ej: 15-20 de enero"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="people">Cantidad de personas</Label>
                  <Input
                    id="people"
                    type="text"
                    placeholder="Ej: 2 adultos, 1 niño"
                    value={formData.people}
                    onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Contanos más sobre tu consulta..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar consulta por WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
