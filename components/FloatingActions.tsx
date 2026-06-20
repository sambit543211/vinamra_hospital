"use client";

import { Phone, MessageCircle } from "lucide-react";
import { hospital } from "@/lib/data";

// Always-visible floating call + WhatsApp buttons (mobile-first).
export default function FloatingActions() {
  const waLink = `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(
    "Hi, I would like to book an appointment at Vinamra Swaraj Hospital."
  )}`;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-pulse relative grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105"
        style={{ height: 52, width: 52 }}
      >
        <MessageCircle size={24} />
      </a>
      <a
        href={`tel:${hospital.phones.appointment}`}
        aria-label="Call the hospital"
        className="grid place-items-center rounded-full bg-forest-500 text-white shadow-lg shadow-black/15 transition-transform hover:scale-105"
        style={{ height: 52, width: 52 }}
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
