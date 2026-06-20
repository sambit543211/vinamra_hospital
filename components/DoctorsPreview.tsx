"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { doctors } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function DoctorsPreview({ limit }: { limit?: number }) {
  const reduce = useReducedMotion();
  const list = limit ? doctors.slice(0, limit) : doctors;

  return (
    <section className="bg-forest-50 py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Meet our team"
          title="Specialist doctors"
          subtitle="Experienced consultants across surgery, medicine, orthopedics and more — with clear OPD schedules so you always know when to visit."
        />

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <motion.article
              key={d.name}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="overflow-hidden rounded-2xl border border-bordersoft bg-white"
            >
              <div className="relative flex h-20 items-center justify-center bg-forest-800">
                <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-white/20 bg-forest-500 font-display text-lg font-bold text-white">
                  {d.initials}
                </div>
                <span className="absolute bottom-2 right-3 rounded-full bg-forest-400 px-2 py-0.5 text-[9px] font-bold text-white">
                  {d.department}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-[15px] font-bold text-forest-800">{d.name}</h3>
                <p className="mt-0.5 text-[12px] text-slatemid">{d.qualification}</p>
                <div className="mt-3 flex items-start gap-1.5 border-t border-bordersoft pt-3">
                  <Clock size={14} className="mt-0.5 shrink-0 text-forest-500" />
                  <span className="text-[12px] font-medium text-forest-600">{d.schedule}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {limit && (
          <div className="mt-8 text-center">
            <Link href="/doctors" className="inline-flex items-center gap-2 rounded-lg bg-forest-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-600">
              <Users size={16} /> View all doctors &amp; schedules
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
