import { ShieldCheck } from "lucide-react";
import { insurancePartners } from "@/lib/data";
import SectionHeading from "./SectionHeading";

// Infinite marquee of insurance/TPA partners. Track is duplicated so the
// -50% translate loops seamlessly. Pauses on hover (see globals.css).
export default function InsuranceMarquee() {
  const doubled = [...insurancePartners, ...insurancePartners];
  return (
    <section className="bg-slatesoft py-14">
      <div className="container-x">
        <SectionHeading
          eyebrow="Cashless treatment"
          title="Insurance & TPA partners"
          subtitle="We work with leading insurers and TPAs to make cashless admission and reimbursement smooth for you."
          center
        />
      </div>

      <div className="relative mt-8 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slatesoft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slatesoft to-transparent" />
        <div className="marquee-track flex w-max gap-3">
          {doubled.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-bordersoft bg-white px-5 py-3 text-[13px] font-medium text-slatemid"
            >
              <ShieldCheck size={15} className="text-forest-500" /> {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
