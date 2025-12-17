import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Amenities } from "@/components/amenities"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Testimonial } from "@/components/testimonial"
import { Footer } from "@/components/footer"
import { MobileWhatsAppButton } from "@/components/mobile-whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <Location />
      <Contact />
      <Testimonial />
      <Footer />
      <MobileWhatsAppButton />
    </main>
  )
}
