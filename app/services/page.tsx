import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Specialities from "@/components/Specialities";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EmergencyCTA from "@/components/EmergencyCTA";
import Icon from "@/components/Icon";
import { facilities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore 16+ specialities at Vinamra Swaraj Hospital, Vashi — surgery, cardiology, neurology, orthopedics, oncology and more, plus emergency, OT, radiology, lab and pharmacy facilities.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our services" crumb="Services" />

      <Specialities />

      <section className="bg-forest-50 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Facilities"
            title="Hospital with world-class facilities"
            subtitle="Every essential service, available on site and integrated for seamless patient care."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 0.06}>
                <div className="flex h-full gap-4 rounded-xl border border-bordersoft bg-white p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest-500 text-white">
                    <Icon name={f.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold text-forest-800">{f.name}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slatemid">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
