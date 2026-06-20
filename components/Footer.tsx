import Link from "next/link";
import { Phone, Droplet, ScanLine, Mail, MapPin, ShieldCheck, Camera, ThumbsUp } from "lucide-react";
import { hospital, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slatedeep text-white/70">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <div className="font-display text-base font-bold text-white">{hospital.name}</div>
          <div className="mt-0.5 text-[11px] text-white/40">{hospital.tagline}</div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/45">
            {hospital.longDesc}
          </p>
          <div className="mt-4 flex gap-2.5">
            <a href={hospital.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-lg bg-white/8 text-white/70 transition-colors hover:bg-forest-500 hover:text-white">
              <ThumbsUp size={16} />
            </a>
            <a href={hospital.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-lg bg-white/8 text-white/70 transition-colors hover:bg-forest-500 hover:text-white">
              <Camera size={16} />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <div className="mb-4 text-[11px] font-bold uppercase tracking-wider text-white/50">Pages</div>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[13px] text-white/60 transition-colors hover:text-forest-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="mb-4 text-[11px] font-bold uppercase tracking-wider text-white/50">Quick contact</div>
          <ul className="space-y-3 text-[13px]">
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-forest-400" />
              <span>Appointment: {hospital.phones.appointment} / {hospital.phones.appointmentAlt}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Droplet size={15} className="mt-0.5 shrink-0 text-forest-400" />
              <span>Home blood collection: {hospital.phones.homeBlood}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ScanLine size={15} className="mt-0.5 shrink-0 text-forest-400" />
              <span>Radiology: {hospital.phones.radiology}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 shrink-0 text-forest-400" />
              <span>{hospital.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-forest-400" />
              <span>{hospital.address.line1}, {hospital.address.line2}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-forest-900">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-3 text-center sm:flex-row sm:text-left">
          <span className="text-[11px] text-white/40">
            © {new Date().getFullYear()} {hospital.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-white/40">
            <span className="flex items-center gap-1 rounded bg-gold px-2 py-0.5 font-bold text-white">
              <ShieldCheck size={11} /> NABH
            </span>
            Entry Level Accredited
          </span>
        </div>
      </div>
    </footer>
  );
}
