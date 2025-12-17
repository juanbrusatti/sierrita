export function Location() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">¿Dónde estamos?</h2>
        <p className="text-center text-muted-foreground mb-8 text-lg">
          A minutos del centro y de los principales puntos turísticos del valle.
        </p>

        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108825.77954912383!2d-64.54451788437501!3d-31.31663779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8d542a8c96bf%3A0x82cb57c35e7c932e!2sValle%20de%20Punilla%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Cabañas El Refugio del Valle"
          />
        </div>
      </div>
    </section>
  )
}
