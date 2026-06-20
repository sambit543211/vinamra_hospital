import type { Metadata } from "next";
import { Phone, Droplet, ScanLine, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import AppointmentForm from "@/components/AppointmentForm";
import EmergencyCTA from "@/components/EmergencyCTA";
import { hospital } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Appointment",
  description:
    "Contact Vinamra Swaraj Hospital, Vashi, Navi Mumbai. Book an appointment, call 022-42061000, or visit us at Sector 11, Vashi. 24/7 emergency care.",
};

const contactRows = [
  { icon: Phone, label: "Appointment", value: `${hospital.phones.appointment} / ${hospital.phones.appointmentAlt}`, href: `tel:${hospital.phones.appointment}` },
  { icon: Droplet, label: "Home blood collection", value: hospital.phones.homeBlood, href: `tel:${hospital.phones.homeBlood}` },
  { icon: ScanLine, label: "Radiology", value: hospital.phones.radiology, href: `tel:${hospital.phones.radiology}` },
  { icon: Mail, label: "Email", value: hospital.email, href: `mailto:${hospital.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact & appointment" crumb="Contact" />

      <section className="bg-white py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — contact details */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-forest-500">Get in touch</div>
            <h2 className="mt-1 font-display text-[26px] font-bold tracking-tight text-forest-800">
              We&apos;re here to help, 24/7
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slatemid">
              Call us, message on WhatsApp, or fill the form and our team will get back to you. For emergencies,
              please call directly or walk in — we&apos;re open round the clock.
            </p>

            <div className="mt-6 space-y-3">
              {contactRows.map((r) => (
                <a key={r.label} href={r.href} className="flex items-center gap-3 rounded-xl border border-bordersoft bg-forest-50/50 p-4 transition-colors hover:border-forest-300">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-forest-500 text-white">
                    <r.icon size={18} />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slatemid">{r.label}</div>
                    <div className="text-[14px] font-semibold text-forest-800">{r.value}</div>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-3 rounded-xl border border-bordersoft bg-forest-50/50 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-forest-500 text-white">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slatemid">Address</div>
                  <div className="text-[14px] font-semibold text-forest-800">{hospital.address.line1}</div>
                  <div className="text-[13px] text-slatemid">{hospital.address.line2}</div>
                  <div className="text-[12px] text-slatemid">{hospital.address.near}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gold/40 bg-goldlight p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold text-white">
                  <Clock size={18} />
                </span>
                <div className="text-[13px] font-semibold text-golddark">
                  Open 24 hours · 7 days a week · Emergency always available
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-forest-50 py-12">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-bordersoft">
            <iframe
              title="Vinamra Swaraj Hospital location"
              src="https://www.google.com/maps?q=Vinamra+Swaraj+Hospital+Vashi+Navi+Mumbai&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
