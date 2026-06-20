"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 5s, pause on hover.
  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused, reduce]);

  const t = testimonials[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient experiences"
          title="What our patients say"
          center
        />

        <div
          className="relative mx-auto mt-9 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="min-h-[200px] rounded-2xl border border-bordersoft bg-forest-50/60 p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
              >
                <div className="font-serif text-5xl leading-none text-forest-300">&ldquo;</div>
                <div className="mt-1 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-slatedeep">{t.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-500 font-bold text-white">
                    {t.initial}
                  </span>
                  <span className="text-[14px] font-semibold text-forest-800">{t.name}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-9 w-9 place-items-center rounded-full border border-bordersoft text-forest-600 transition-colors hover:bg-forest-50">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-forest-500" : "w-2 bg-forest-200"
                  }`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next testimonial" className="grid h-9 w-9 place-items-center rounded-full border border-bordersoft text-forest-600 transition-colors hover:bg-forest-50">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
