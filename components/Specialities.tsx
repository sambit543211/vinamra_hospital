"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { specialities } from "@/lib/data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Specialities({ limit }: { limit?: number }) {
  const reduce = useReducedMotion();
  const list = limit ? specialities.slice(0, limit) : specialities;

  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we treat"
          title="Our specialities"
          subtitle="From everyday care to advanced surgery — 16+ departments staffed by experienced specialists, all under one roof in Vashi."
        />

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              whileHover={reduce ? {} : { y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-bordersoft bg-white p-5 text-center transition-shadow hover:shadow-md"
            >
              <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-forest-500 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-forest-50 text-forest-500 transition-colors group-hover:bg-forest-500 group-hover:text-white">
                <Icon name={s.icon} size={24} />
              </div>
              <div className="mt-3 text-[13px] font-semibold text-forest-800">{s.name}</div>
              <div className="mt-0.5 text-[11px] text-slatemid">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-8 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-lg bg-forest-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-600">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
