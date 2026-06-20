import { stats } from "@/lib/data";
import CountUp from "./CountUp";

export default function StatsBar() {
  return (
    <section className="bg-slatedeep">
      <div className="container-x grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-3 md:grid-cols-5">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center ${i < stats.length - 1 ? "md:border-r md:border-white/10" : ""}`}
          >
            <div className="font-display text-3xl font-extrabold text-forest-400">
              <CountUp value={s.value} />
            </div>
            <div className="mt-1 text-[12px] text-white/50">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
