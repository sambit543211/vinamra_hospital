"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, Clock, ShieldCheck, Menu, X, Calendar, MessageCircle, Droplet,
} from "lucide-react";
import { hospital, navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const waLink = `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(
    "Hi, I would like to book an appointment at Vinamra Swaraj Hospital."
  )}`;

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar — hidden on mobile, collapses on scroll */}
      <div
        className={`hidden md:block bg-forest-800 text-white/70 overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 py-0 opacity-0" : "max-h-12 py-1.5 opacity-100"
        }`}
      >
        <div className="container-x flex items-center justify-between text-[12px]">
          <div className="flex items-center gap-5">
            <a href={`tel:${hospital.phones.appointment}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} className="text-forest-400" /> {hospital.phones.appointment} / {hospital.phones.appointmentAlt}
            </a>
            <a href={`mailto:${hospital.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} className="text-forest-400" /> {hospital.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Droplet size={13} className="text-forest-400" /> Home blood: {hospital.phones.homeBlood}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5">
              <Clock size={12} className="text-forest-400" /> 24/7 Emergency
            </span>
            <span className="flex items-center gap-1 rounded-full border border-gold/40 bg-gold/15 px-2.5 py-0.5 text-goldlight">
              <ShieldCheck size={12} /> NABH Accredited
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-bordersoft">
        <div className="container-x flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Vinamra Swaraj Hospital home">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-forest-500 text-white">
              <HeartLogo />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-[14px] text-forest-800">Vinamra Swaraj Hospital</div>
              <div className="text-[10px] text-slatemid">{hospital.tagline}</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative text-[13px] font-medium transition-colors ${
                      active ? "text-forest-500" : "text-slatedeep hover:text-forest-500"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-forest-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-forest-500 px-3 py-2 text-[12px] font-semibold text-forest-600 transition-colors hover:bg-forest-50"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 rounded-lg bg-forest-500 px-3.5 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-forest-600"
            >
              <Calendar size={15} /> Book appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-lg text-forest-700 hover:bg-forest-50"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slatedeep/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-xs bg-white shadow-xl lg:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between border-b border-bordersoft px-5 h-16">
                <span className="font-display font-bold text-forest-800">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-lg text-slatedeep hover:bg-slatesoft">
                  <X size={20} />
                </button>
              </div>
              <ul className="flex flex-col p-3">
                {navLinks.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${
                          active ? "bg-forest-50 text-forest-600" : "text-slatedeep hover:bg-slatesoft"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto space-y-2 border-t border-bordersoft p-4">
                <a href={`tel:${hospital.phones.appointment}`} className="flex items-center justify-center gap-2 rounded-lg bg-forest-500 px-4 py-3 text-sm font-semibold text-white">
                  <Phone size={16} /> Call {hospital.phones.appointment}
                </a>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white">
                  <MessageCircle size={16} /> WhatsApp us
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeartLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s-7-4.6-9.3-9C1.2 8.8 2.6 5 6 5c2 0 3.3 1.2 4 2.3C10.7 6.2 12 5 14 5c3.4 0 4.8 3.8 3.3 7-2.3 4.4-9.3 9-9.3 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" transform="translate(2,0)" />
      <path d="M3 12h3l1.5-3 2 5 1.5-2h3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
