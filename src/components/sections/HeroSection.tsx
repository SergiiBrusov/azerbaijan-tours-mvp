export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* TEXT */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
            🇮🇳 Tailored for Indian travelers
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
            Discover Azerbaijan
            <br />
            with Local Experts
          </h1>

          <p className="text-lg text-slate-600 max-w-xl mb-10">
            Safe, comfortable and unforgettable travel experiences.
            Carefully designed tour packages with full local support.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#packages"
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-600 transition shadow-md text-center"
            >
              View Tour Packages
            </a>

            <a
              href="#contact"
              className="border border-slate-300 px-8 py-4 rounded-xl text-lg hover:bg-white transition text-center"
            >
              Contact via WhatsApp
            </a>
          </div>

          {/* Trust */}
          <p className="mt-6 text-sm text-slate-500">
            ⭐ Trusted by travelers from India • Real reviews • Local guides
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-0">
  <video
    className="w-full max-w-2xl aspect-video rounded-3xl shadow-lg object-cover"
    controls
    autoPlay
    loop
    muted
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
      </div>
    </section>
  );
}
