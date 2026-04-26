import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Cloud, Code2, Github, Mail, Sparkles } from "lucide-react";
import { achievements, contactLinks, education, experience, hero, projects, skillCategories } from "./data";
import { SectionHeading } from "./components/SectionHeading";
import { SkillPill } from "./components/SkillPill";
import { TimelineCard } from "./components/TimelineCard";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hero-glow blur-3xl" />
      <main className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-glow backdrop-blur-xl sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-300">
                Hi, I’m {hero.name}
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Backend Engineer building scalable APIs, intelligent search, and GenAI systems.
              </h1>
              <p className="mt-5 inline-flex rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-100 shadow-sm shadow-brand-900/20">
                {hero.role}
              </p>
              <p className="mt-6 max-w-2xl text-slate-300 sm:text-lg">
                {hero.intro} I turn complex architecture into reliable backend experiences with Java, Node.js, and AWS.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {hero.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 shadow-glow"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:naveen.kamalapur.developer@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-400"
                >
                  <Mail size={16} /> Contact
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-400/30 hover:text-brand-200"
                >
                  View projects <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-300">
                  <Briefcase size={20} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">People-first systems</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Built Manager Hub and end-to-end workflows that simplify manager decisions across enterprise clients.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-300">
                  <Sparkles size={20} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">GenAI & search</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Delivered semantic search, RAG pipelines, and embedding-based retrieval with measurable business impact.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-300">
                  <Cloud size={20} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">Cloud native</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Architected scalable services with AWS, Docker, Kubernetes, and production-grade observability.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-300">
                  <Code2 size={20} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">Performance-first code</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Optimized APIs, caching, and data pipelines to reduce latency and scale with enterprise demand.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mt-14"
        >
          <SectionHeading
            title="Experience"
            description="Delivering backend systems, integrations, and AI-powered search products."
          />
          <div className="grid gap-6 xl:grid-cols-2">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.dates}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="will-change-transform"
              >
                <TimelineCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="mt-14"
        >
          <SectionHeading title="Projects" description="Real projects that show architecture, vector search, and tooling." />
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow transition-transform"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-brand-300">{project.year}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-700/80 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="mt-14"
        >
          <SectionHeading title="Skills" description="Core technologies and systems I work with every day." />
          <div className="grid gap-4 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow"
              >
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          className="mt-14"
        >
          <SectionHeading title="Education" description="Formal training, coursework, and academic results." />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-300">{education.dates}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{education.degree}</h3>
              <p className="mt-2 text-slate-300">{education.institution}</p>
              <p className="mt-4 text-sm text-slate-400">CGPA: <span className="font-semibold text-white">{education.cgpa}</span></p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow">
              <h4 className="text-lg font-semibold text-white">Relevant coursework</h4>
              <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                {education.coursework.map((course) => (
                  <span key={course} className="rounded-3xl border border-white/10 bg-slate-800/70 px-4 py-2">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="achievements"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
          className="mt-14"
        >
          <SectionHeading title="Achievements" description="Recognized results and competitive impact." />
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((item) => (
              <div key={item} className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-glow">
                <div className="flex items-center gap-3">
                  <Sparkles size={20} className="text-brand-300" />
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
          className="mt-14 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-glow"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Let’s connect</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Ready to build the next scalable platform?</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                I’m available for backend engineering, cloud architecture, and GenAI system design opportunities. Reach out and let’s discuss the next project.
              </p>
            </div>
            <div className="grid gap-3 sm:auto-cols-max sm:grid-flow-col">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-400/30 hover:bg-brand-500/10"
                >
                  {link.label === "GitHub" ? <Github size={16} /> : null}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
