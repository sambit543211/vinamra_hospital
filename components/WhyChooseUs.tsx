"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose us"
          title="Care you can count on"
          subtitle="The reasons families across Navi Mumbai trust Vinamra Swaraj Hospital with their health."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="flex gap-4 rounded-xl border border-bordersoft bg-white p-5"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-500">
                <Icon name={w.icon} size={22} />
              </div>
              <div>
                <h3 className="font-display text-[15px] font-semibold text-forest-800">{w.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slatemid">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
