import Image from "next/image"

export function Gallery() {
  const images = [
    {
      src: "/cozy-cabin-bedroom-with-mountain-view.jpg",
      alt: "Dormitorio con vista a las sierras",
    },
    {
      src: "/cabin-living-room-with-fireplace-and-wooden-furnit.jpg",
      alt: "Living con chimenea",
    },
    {
      src: "/cabin-exterior-with-nature-and-mountains-in-c-rdob.jpg",
      alt: "Exterior de la cabaña",
    },
    {
      src: "/outdoor-grill-area-with-mountain-landscape.jpg",
      alt: "Área de parrilla al aire libre",
    },
    {
      src: "/cabin-kitchen-fully-equipped-modern.jpg",
      alt: "Cocina equipada",
    },
    {
      src: "/sunset-view-from-cabin-with-mountains-and-nature.jpg",
      alt: "Atardecer en las sierras",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Galería</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
