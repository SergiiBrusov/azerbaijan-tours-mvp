export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-emerald-50"
    >
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-slate-800">
          Contact Us via WhatsApp
        </h2>

        <p className="text-slate-600 mb-8 text-lg">
          Have questions or ready to book your tour?
          <br />
          Our team replies within minutes.
        </p>

        <a
          href="https://wa.me/994501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-emerald-600 transition shadow-lg"
        >
          💬 Chat on WhatsApp
        </a>

        <p className="mt-6 text-sm text-slate-500">
          Available 7 days a week · English support · Secure booking
        </p>
      </div>
    </section>
  );
}
