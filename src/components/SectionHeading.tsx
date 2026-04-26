type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-300">{title}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{description}</h2>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 shadow-glow">
        Built with TypeScript, Tailwind, and polished motion.
      </div>
    </div>
  );
}
