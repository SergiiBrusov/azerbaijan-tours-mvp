import { tours } from "@/data/tours";
import Link from "next/link";

export default function ToursPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map((tour) => (
        <div key={tour.id} className="border rounded shadow p-4">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{tour.title}</h2>
          <p className="mt-1 text-gray-600">{tour.description}</p>
          <p className="mt-1 font-semibold">${tour.price}</p>
          <p className="mt-1 text-sm text-gray-500">{tour.duration}</p>
          {tour.whatsapp && (
            <a
              href={`https://wa.me/${tour.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded"
            >
              Contact on WhatsApp
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
