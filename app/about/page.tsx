import type { Metadata } from "next";
import { Eye, Target, Users, ShieldCheck, Heart, Clock, Home, Receipt, Building2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import StatsBar from "@/components/StatsBar";
import EmergencyCTA from "@/components/EmergencyCTA";
import { hospital, whyChooseUs } from "@/lib/data";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vinamra Swaraj Hospital — a NABH-accredited 30-bed multi-speciality hospital in Vashi, Navi Mumbai, delivering quality care with compassion since 2014.",
};

const vmv = [
  { icon: Eye, title: "Our vision", text: "To be known for delivering world-class service and care, with compassion to each and every patient." },
  { icon: Target, title: "Our mission", text: "To enhance the wellbeing and healing of the general population and the people we serve." },
  { icon: Users, title: "Our values", text: "Commitment to quality, compassion, teamwork, respect, and excellence in care." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About us" crumb="About" />

      <section className="bg-white py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-forest-500">
              Vinamra Swaraj Hospital, Vashi
            </div>
            <h2 className="mt-1 font-display text-[28px] font-bold tracking-tight text-forest-800">
              One of the best hospitals in Vashi, Navi Mumbai
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slatemid">
              Among the best medical facilities in the vicinity, Vinamra Swaraj Hospital is equipped with modern
              innovation and an experienced team of medical experts, making it a trusted name in healthcare services
              across Navi Mumbai.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slatemid">
              Keeping the future and the changing patterns in healthcare as a main priority, the management set their
              sights higher — and along these lines, the 30-bedded Vinamra Swaraj Hospital was built to serve the
              community with quality and compassion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 rounded-lg border border-gold/40 bg-goldlight px-3 py-2 text-[12px] font-semibold text-golddark">
                <ShieldCheck size={15} className="text-gold" /> {hospital.nabh}
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-bordersoft bg-forest-50 px-3 py-2 text-[12px] font-semibold text-forest-700">
                <Building2 size={15} /> {hospital.beds} beds · Since {hospital.established}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {vmv.map((v) => (
                <div key={v.title} className="flex gap-4 rounded-2xl border border-bordersoft bg-white p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-500 text-white">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold text-forest-800">{v.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slatemid">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBar />

      <section className="bg-forest-50 py-16">
        <div className="container-x">
          <SectionHeading eyebrow="Why choose us" title="What sets us apart" center />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full gap-4 rounded-xl border border-bordersoft bg-white p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-500">
                    <Icon name={w.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold text-forest-800">{w.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slatemid">{w.desc}</p>
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
