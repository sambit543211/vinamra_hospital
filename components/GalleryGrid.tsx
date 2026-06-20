"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ImageIcon } from "lucide-react";

// Placeholder gallery. Swap `src: null` for real image paths under /public/gallery
// e.g. { label: "Building", src: "/gallery/building.jpg" }
const items = [
  { label: "Hospital building", src: null },
  { label: "Radiology room", src: null },
  { label: "Patient ward", src: null },
  { label: "Reception", src: null },
  { label: "Operation theatre", src: null },
  { label: "ICU", src: null },
  { label: "Pharmacy", src: null },
  { label: "Waiting area", src: null },
];

export default function GalleryGrid() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.button
            key={it.label}
            onClick={() => it.src && setActive(i)}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-bordersoft bg-forest-50 text-left"
          >
            {it.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.src} alt={it.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-forest-300">
                <ImageIcon size={28} />
                <span className="px-2 text-center text-[12px] font-medium text-forest-500">{it.label}</span>
              </div>
            )}
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/70 to-transparent px-3 py-2 text-[12px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {it.label}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && items[active].src && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-slatedeep/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white" aria-label="Close">
              <X size={20} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={items[active].src!} alt={items[active].label} className="max-h-[85vh] max-w-full rounded-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
