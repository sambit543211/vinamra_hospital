"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MessageCircle, Phone, ShieldCheck, Clock, CreditCard, Home, Stethoscope } from "lucide-react";
import { hospital, todayOPD } from "@/lib/data";

export default function Hero() {
  const reduce = useReducedMotion();
  const waLink = `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(
    "Hi, I would like to book an appointment at Vinamra Swaraj Hospital."
  )}`;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
  };

  const trust = [
    { icon: ShieldCheck, label: "NABH certified" },
    { icon: Clock, label: "24/7 emergency" },
    { icon: CreditCard, label: "Cashless insurance" },
    { icon: Home, label: "Home blood collection" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-forest-500">
      {/* Ambient circles */}
      <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute right-24 -bottom-28 h-56 w-56 rounded-full bg-white/[0.03]" />

      <div className="container-x relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_320px] lg:items-center">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90"
          >
            <ShieldCheck size={13} /> NABH Accredited Hospital · Sector 11, Vashi
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-[34px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[44px]"
          >
            Advanced care.<br />
            Delivered with{" "}
            <span className="text-forest-300">compassion.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/75">
            {hospital.shortDesc}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="flex items-center gap-2 rounded-xl bg-forest-400 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-transform hover:scale-[1.02]">
              <Calendar size={17} /> Book appointment
            </Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-transform hover:scale-[1.02]">
              <MessageCircle size={17} /> WhatsApp us
            </a>
            <a href={`tel:${hospital.phones.appointment}`} className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">
              <Phone size={17} /> Call now
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-1.5 text-[12px] text-white/65">
                <t.icon size={15} className="text-forest-300" /> {t.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — OPD + NABH cards */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="space-y-3"
        >
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-white/90">
              <Clock size={14} /> Today&apos;s OPD
            </div>
            <ul className="space-y-2">
              {todayOPD.map((o) => (
                <li key={o.dept} className="flex items-center justify-between">
                  <span className="text-[12.5px] text-white/80">{o.dept}</span>
                  <span className="text-[11px] font-semibold text-forest-300">{o.time}</span>
                </li>
              ))}
            </ul>
            <Link href="/doctors" className="mt-3 block text-center text-[11px] text-white/55 transition-colors hover:text-white">
              + 11 more departments →
            </Link>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-gold/40 bg-goldlight px-4 py-3">
            <span className="rounded-md bg-gold px-2 py-1 text-[10px] font-extrabold tracking-wide text-white">NABH</span>
            <div>
              <div className="text-[12px] font-semibold leading-tight text-golddark">Entry Level Accredited</div>
              <div className="text-[10px] text-gold">Quality &amp; Patient Safety certified</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Soft bottom edge */}
      <div className="h-6 bg-white" style={{ borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%" }} />
    </section>
  );
}
