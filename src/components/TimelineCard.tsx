type TimelineCardProps = {
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export function TimelineCard({ title, subtitle, dates, location, bullets, tech }: TimelineCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow transition hover:-translate-y-1 hover:border-brand-400/30">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
        <div className="text-right text-sm text-slate-500">
          <p>{dates}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="space-y-3 text-sm leading-6 text-slate-300">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-700/80 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
