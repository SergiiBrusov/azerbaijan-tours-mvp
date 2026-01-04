export default function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Experience Azerbaijan
        </h2>

        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Mountains, culture, food and unforgettable moments
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/images/tower.jpg",
        "/images/Baku_view.jpg",
            "/images/granate.jpg",
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={src}
                alt="Azerbaijan travel"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
