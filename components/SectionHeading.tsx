import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-forest-500">
        {eyebrow}
      </div>
      <h2 className="mt-1 font-display text-[26px] font-bold tracking-tight text-forest-800 sm:text-[30px]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-[14px] leading-relaxed text-slatemid ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
