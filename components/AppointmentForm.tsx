"use client";

import { useState } from "react";
import { Calendar, MessageCircle, Check } from "lucide-react";
import { hospital, specialities } from "@/lib/data";

// The form has no backend in this build. On submit it composes a WhatsApp
// message with the patient's details — zero infra, works immediately, and
// routes the lead straight to the hospital's phone. Swap handleSubmit for a
// POST to your API / email service when a backend is ready.
export default function AppointmentForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    dept: "",
    time: "Morning",
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `New appointment request%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Department: ${form.dept || "Not specified"}%0A` +
      `Preferred time: ${form.time}%0A` +
      `Message: ${form.message || "—"}`;
    window.open(`https://wa.me/${hospital.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  };

  const field =
    "w-full rounded-lg border border-bordersoft bg-white px-3.5 py-2.5 text-[14px] text-slatedeep outline-none transition-colors placeholder:text-slate-400 focus:border-forest-400 focus:ring-2 focus:ring-forest-100";

  if (sent) {
    return (
      <div className="grid h-full min-h-[400px] place-items-center rounded-2xl border border-bordersoft bg-forest-50 p-8 text-center">
        <div>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest-500 text-white">
            <Check size={28} />
          </div>
          <h3 className="mt-4 font-display text-lg font-bold text-forest-800">Request ready to send</h3>
          <p className="mt-2 max-w-xs text-[14px] text-slatemid">
            We&apos;ve opened WhatsApp with your details. Press send there and our team will confirm your appointment shortly.
          </p>
          <button onClick={() => setSent(false)} className="mt-5 rounded-lg border border-forest-400 px-4 py-2 text-[13px] font-semibold text-forest-600 transition-colors hover:bg-forest-50">
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-bordersoft bg-white p-6 shadow-sm sm:p-7">
      <div className="flex items-center gap-2 text-forest-700">
        <Calendar size={18} />
        <h3 className="font-display text-lg font-bold text-forest-800">Book an appointment</h3>
      </div>
      <p className="mt-1 text-[13px] text-slatemid">
        Fill this in and we&apos;ll confirm over WhatsApp. Fields marked * are required.
      </p>

      <div className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-slatedeep">Full name *</label>
            <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={field} />
          </div>
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-slatedeep">Phone *</label>
            <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="10-digit mobile" className={field} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-slatedeep">Department</label>
            <select value={form.dept} onChange={(e) => update("dept", e.target.value)} className={field}>
              <option value="">Select department</option>
              {specialities.map((s) => (
                <option key={s.slug} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-slatedeep">Preferred time</label>
            <select value={form.time} onChange={(e) => update("time", e.target.value)} className={field}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slatedeep">Message</label>
          <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={3} placeholder="Briefly describe your concern (optional)" className={field} />
        </div>

        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.01]">
          <MessageCircle size={18} /> Send request via WhatsApp
        </button>
        <p className="text-center text-[11px] text-slatemid">
          Prefer to call? Dial{" "}
          <a href={`tel:${hospital.phones.appointment}`} className="font-semibold text-forest-600">
            {hospital.phones.appointment}
          </a>
        </p>
      </div>
    </form>
  );
}
