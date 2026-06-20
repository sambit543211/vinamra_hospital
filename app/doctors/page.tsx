import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DoctorsPreview from "@/components/DoctorsPreview";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EmergencyCTA from "@/components/EmergencyCTA";
import { Stethoscope } from "lucide-react";
import { departments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Doctors & Schedule",
  description:
    "Meet the specialist doctors at Vinamra Swaraj Hospital, Vashi, and view OPD schedules across General Surgery, Orthopedics, Neurology, Cardiology and more.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHeader title="Doctors & schedule" crumb="Doctors" />

      <DoctorsPreview />

      <section className="bg-white py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="All departments"
            title="Consulting departments"
            subtitle="Specialist consultations available across these departments. Call the hospital to confirm the current OPD timing for any department."
          />
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {departments.map((d, i) => (
              <Reveal key={d} delay={(i % 4) * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-bordersoft bg-forest-50/50 px-4 py-3.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-forest-500 text-white">
                    <Stethoscope size={16} />
                  </span>
                  <span className="text-[13px] font-medium text-forest-800">{d}</span>
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
