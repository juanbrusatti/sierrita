import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 md:p-12 text-center relative">
          <Quote className="h-12 w-12 text-primary/20 absolute top-6 left-6" />
          <p className="text-lg md:text-xl italic mb-4 text-pretty leading-relaxed">
            "Un lugar hermoso para descansar, súper tranquilo y muy cómodo. Volveríamos sin dudas."
          </p>
          <p className="text-muted-foreground font-medium">— María G.</p>
        </Card>
      </div>
    </section>
  )
}
