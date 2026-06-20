import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Inner-page banner with breadcrumb. Uses the forest gradient + ambient
// circles so inner pages feel consistent with the hero.
export default function PageHeader({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600">
      <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/[0.04]" />
      <div className="container-x relative py-14 md:py-16">
        <h1 className="font-display text-[30px] font-extrabold tracking-tight text-white sm:text-[38px]">
          {title}
        </h1>
        <nav className="mt-2 flex items-center gap-1.5 text-[13px] text-white/60" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <span className="text-forest-300">{crumb}</span>
        </nav>
      </div>
      <div className="h-5 bg-white" style={{ borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%" }} />
    </section>
  );
}
