"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-extrabold text-lg">
          Azerbaijan Tours
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="hover:text-emerald-600">Main</a>
          <a href="#packages" className="hover:text-emerald-600">Packages</a>
          <a href="#reviews" className="hover:text-emerald-600">Reviews</a>
          <a href="#contact" className="hover:text-emerald-600">Contacts</a>

          <a
            href="#contact"
            className="ml-4 bg-emerald-500 text-white px-5 py-2 rounded-xl hover:bg-emerald-600 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-6 gap-4 text-lg">
            <a onClick={() => setOpen(false)} href="#hero">Main</a>
            <a onClick={() => setOpen(false)} href="#packages">Packages</a>
            <a onClick={() => setOpen(false)} href="#reviews">Reviews</a>
            <a onClick={() => setOpen(false)} href="#contact">Contacts</a>

            <a
              href="#contact"
              className="mt-4 bg-emerald-500 text-white py-3 rounded-xl text-center"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

