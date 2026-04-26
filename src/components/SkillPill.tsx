type SkillPillProps = {
  label: string;
};

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="rounded-full border border-white/10 bg-slate-800/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 shadow-sm shadow-black/10">
      {label}
    </span>
  );
}
