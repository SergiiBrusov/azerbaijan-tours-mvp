import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Travelers Say
        </h2>

        <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Real experiences from travelers who explored Azerbaijan with us.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center gap-4 mb-4">
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                    {r.name.charAt(0)}
                  </div>
                )}

                <div>
                  <p className="font-semibold text-slate-800">{r.name}</p>
                  <p className="text-sm text-slate-500">Verified traveler</p>
                </div>
              </div>

              {/* COMMENT */}
              <p className="text-slate-600 mb-4 leading-relaxed">
                “{r.comment}”
              </p>

              {/* VIDEO */}
              {r.video && (
                <div className="mt-auto rounded-xl overflow-hidden border">
                  <video
                    controls
                    className="w-full h-48 object-cover"
                  >
                    <source src={r.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
