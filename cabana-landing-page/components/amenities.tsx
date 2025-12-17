import { Bed, Sofa, Wind, Tv, UtensilsCrossed, Flame, Car, Wifi, Mountain } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Amenities() {
  const amenities = [
    { icon: Bed, text: "Cama matrimonial" },
    { icon: Sofa, text: "Sofá cama" },
    { icon: Wind, text: "Aire acondicionado" },
    { icon: Tv, text: "Smart TV" },
    { icon: UtensilsCrossed, text: "Cocina equipada" },
    { icon: Flame, text: "Parrilla" },
    { icon: Car, text: "Cochera" },
    { icon: Wifi, text: "WiFi" },
    { icon: Mountain, text: "Vista a las sierras" },
  ]

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Servicios y comodidades</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <Card
                key={index}
                className="p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-sm md:text-base">{amenity.text}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
