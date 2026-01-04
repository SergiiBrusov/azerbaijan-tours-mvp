import { reviews } from "@/data/reviews";
import Avatar from "@/components/Avatar";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Travelers Say
        </h2>

        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Real experiences from travelers who explored Azerbaijan with us
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <Avatar name={r.name} src={r.avatar} />
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-slate-500">{r.country}</p>
                </div>
              </div>

              {/* Comment */}
              <p className="text-slate-600 text-sm mb-4">
                “{r.comment}”
              </p>

              {/* Video */}
              {r.video && (
                <video
                  className="w-full rounded-xl mt-3"
                  controls
                >
                  <source src={r.video} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
