"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Calendar, MessageCircle, Phone, ShieldCheck, Clock,
  CreditCard, Home, ChevronLeft, ChevronRight,
} from "lucide-react";
import { hospital, todayOPD } from "@/lib/data";

const slides = [
  {
    id: "compassion",
    image: "/hospital-building.jpg",
    eyebrow: "NABH Accredited · Sector 11, Vashi",
    line1: "Advanced care.",
    line2: "Delivered with",
    highlight: "compassion.",
    sub: "Multi-speciality hospital serving Navi Mumbai. 26+ departments, experienced specialist doctors, and 24/7 emergency care — all under one roof.",
  },
  {
    id: "specialists",
    image: "/hospital-building.jpg",
    eyebrow: "26+ Specialities Under One Roof",
    line1: "Expert specialists.",
    line2: "Comprehensive",
    highlight: "treatment.",
    sub: "From cardiology to neurosurgery, orthopaedics to oncology — every major speciality available with experienced consultants on call.",
  },
  {
    id: "emergency",
    image: "/hospital-building.jpg",
    eyebrow: "Emergency & Critical Care",
    line1: "Always here.",
    line2: "Round-the-clock",
    highlight: "emergency.",
    sub: "Our emergency team is available 24 hours a day, 7 days a week — rapid response, stabilisation and specialist escalation when every minute matters.",
  },
  {
    id: "insurance",
    image: "/hospital-building.jpg",
    eyebrow: "Cashless Insurance · 9+ Partners",
    line1: "Quality care.",
    line2: "Affordable",
    highlight: "billing.",
    sub: "Transparent, easy billing with cashless insurance tie-ups across Star Health, ICICI Lombard, Niva Bupa, SBI General and more.",
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length), []);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused, reduce, next]);

  const waLink = `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(
    "Hi, I would like to book an appointment at Vinamra Swaraj Hospital."
  )}`;

  const trust = [
    { icon: ShieldCheck, label: "NABH certified" },
    { icon: Clock, label: "24/7 emergency" },
    { icon: CreditCard, label: "Cashless insurance" },
    { icon: Home, label: "Home blood collection" },
  ];

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-forest-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt="Vinamra Swaraj Hospital"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-forest-900/72" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-x relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_320px] lg:items-center">

        {/* Left — animated per slide */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90">
              <ShieldCheck size={13} /> {slide.eyebrow}
            </span>

            <h1 className="mt-4 font-display text-[34px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[44px]">
              {slide.line1}<br />
              {slide.line2}{" "}
              <span className="text-forest-300">{slide.highlight}</span>
            </h1>

            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/75">
              {slide.sub}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="flex items-center gap-2 rounded-xl bg-forest-400 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-transform hover:scale-[1.02]">
                <Calendar size={17} /> Book appointment
              </Link>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-transform hover:scale-[1.02]">
                <MessageCircle size={17} /> WhatsApp us
              </a>
              <a href={`tel:${hospital.phones.appointment}`} className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                <Phone size={17} /> Call now
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {trust.map((t) => (
                <div key={t.label} className="flex items-center gap-1.5 text-[12px] text-white/65">
                  <t.icon size={15} className="text-forest-300" /> {t.label}
                </div>
              ))}
            </div>

            {/* Dot navigation + arrows */}
            <div className="mt-8 flex items-center gap-4">
              <button onClick={prev} aria-label="Previous slide" className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20">
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-forest-300" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button onClick={next} aria-label="Next slide" className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20">
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right — OPD + NABH (fixed, not part of carousel) */}
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
              + more departments →
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

      {/* Progress bar */}
      {!paused && !reduce && (
        <motion.div
          key={current}
          className="absolute bottom-6 left-0 h-[2px] bg-forest-300/60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL / 1000, ease: "linear" }}
        />
      )}
    </section>
  );
}
