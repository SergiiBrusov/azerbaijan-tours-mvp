import { packages } from "@/data/packages";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Tour Packages
        </h2>

        <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Choose the tour package that matches your comfort level,
          travel style and budget.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {packages.map(pkg => {
            const isPremium = pkg.type === "premium";

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 border transition flex flex-col
                ${
                  isPremium
                    ? "border-emerald-500 bg-emerald-50 shadow-xl scale-[1.05]"
                    : "border-gray-200 bg-white hover:shadow-lg"
                }`}
              >
                {isPremium && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-sm px-6 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-3 text-slate-800">
                  {pkg.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {pkg.description}
                </p>

                {/* FEATURES */}
                <ul className="mb-8 space-y-2 text-slate-700">
                  <li>✔ Comfortable hotels</li>
                  <li>✔ Local English-speaking guide</li>
                  <li>✔ Airport pickup</li>
                  {isPremium && <li>✔ VIP support 24/7</li>}
                </ul>

                {/* PRICE */}
                <div className="text-4xl font-extrabold text-slate-800 mb-6">
                  ${pkg.price}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`mt-auto block text-center py-4 rounded-xl text-lg font-semibold transition
                  ${
                    isPremium
                      ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-md"
                      : "bg-slate-800 text-white hover:bg-slate-900"
                  }`}
                >
                  Book via WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
