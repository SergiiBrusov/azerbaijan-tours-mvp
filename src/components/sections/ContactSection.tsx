"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // URL вашей Google Form (замени на свою)
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeEXAMPLE/formResponse";

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "Contact",
        event_label: "WhatsApp Click",
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Собираем данные из формы
    const data = new FormData(form);

    // Отправка в Google Form через fetch
    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    }).then(() => {
      setSubmitted(true);
      form.reset();
    });
  };

  return (
    <section id="contact" className="py-24 bg-emerald-50">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-slate-800">
          Contact Us via WhatsApp
        </h2>

        <p className="text-slate-600 mb-8 text-lg">
          Have questions or ready to book your tour?
          <br />
          Our team replies within minutes.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/994501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-emerald-600 transition shadow-lg"
          onClick={handleWhatsAppClick}
        >
          💬 Chat on WhatsApp
        </a>

        <p className="mt-6 text-sm text-slate-500">
          Available 7 days a week · English support · Secure booking
        </p>

        {/* Мини-форма для Google Sheets */}
        <div className="mt-12 text-left">
          {!submitted ? (
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Or leave your request:</h3>

              <input
                type="text"
                name="entry.1234567890" // замените на id вашего поля в Google Form
                placeholder="Your Name"
                required
                className="border rounded px-4 py-2 w-full"
              />
              <input
                type="tel"
                name="entry.0987654321" // замените на id вашего поля в Google Form
                placeholder="Phone / WhatsApp"
                required
                className="border rounded px-4 py-2 w-full"
              />
              <textarea
                name="entry.1122334455" // замените на id вашего поля в Google Form
                placeholder="Your message (optional)"
                className="border rounded px-4 py-2 w-full"
              />

              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-semibold text-center">
              Thank you! Your request has been sent.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
