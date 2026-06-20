import { Ambulance, Phone, MessageCircle, MapPin } from "lucide-react";
import { hospital } from "@/lib/data";

export default function EmergencyCTA() {
  const waLink = `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(
    "Hi, I need help with an appointment at Vinamra Swaraj Hospital."
  )}`;
  return (
    <section className="bg-forest-800">
      <div className="container-x flex flex-col items-start justify-between gap-5 py-9 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-forest-300">
            <Ambulance size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white">Need immediate care?</h2>
            <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[13px] text-white/60">
              24/7 emergency · Ambulance · ICU · Walk-in welcome
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-forest-300" /> {hospital.address.line1}, Vashi
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={`tel:${hospital.phones.appointment}`} className="flex items-center gap-2 rounded-xl bg-forest-400 px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]">
            <Phone size={16} /> {hospital.phones.appointment}
          </a>
        </div>
      </div>
    </section>
  );
}
