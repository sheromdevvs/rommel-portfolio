import Reveal from "@/components/Reveal";
import { AppleLogo, AndroidLogo, WhatsAppLogo } from "@/components/PlatformLogos";
import {
  PROFILE,
  STATS,
  SECTORS,
  STAGES,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
} from "@/lib/content";

const SectorIco: Record<string, React.ReactNode> = {
  card: (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" />
    </svg>
  ),
  shield: (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" />
    </svg>
  ),
  book: (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6.5A2.5 2.5 0 0 0 4 19.5z" /><path d="M8 7h7M8 11h7" />
    </svg>
  ),
  mic: (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
    </svg>
  ),
};

export default function Portfolio() {
  const initials = PROFILE.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-ink)]">
      {/* ══ NAV + HERO (dark) ═══════════════════════════════════════════════ */}
      <div className="grain relative overflow-hidden bg-[var(--color-sidebar)] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div
            data-anim
            className="absolute -top-32 left-[12%] h-[30rem] w-[30rem] rounded-full bg-[var(--color-brand-500)] opacity-25 blur-[130px]"
            style={{ animation: "aurora 20s ease-in-out infinite" }}
          />
          <div
            data-anim
            className="absolute top-8 right-[8%] h-96 w-96 rounded-full bg-[var(--color-ios)] opacity-20 blur-[130px]"
            style={{ animation: "aurora 26s ease-in-out infinite reverse" }}
          />
        </div>

        <header className="relative z-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-[13px] font-bold text-white">
                {initials}
              </span>
              <span className="text-[18px] font-bold tracking-tight">{PROFILE.name}</span>
            </a>
            <div className="flex items-center gap-4">
              <a href="#domains" className="hidden text-sm text-white/60 hover:text-white sm:inline">Domains</a>
              <a href="#experience" className="hidden text-sm text-white/60 hover:text-white sm:inline">Experience</a>
              <a href="#projects" className="hidden text-sm text-white/60 hover:text-white sm:inline">Projects</a>
              <a href="#skills" className="hidden text-sm text-white/60 hover:text-white sm:inline">Skills</a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-xl bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--color-brand-500)] transition hover:bg-[var(--color-accent-hover)]"
              >
                Get in touch
              </a>
            </div>
          </nav>
        </header>

        <section id="top" className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-14 lg:pt-20">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-brand-300)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-400)]" />
            {PROFILE.title} · {PROFILE.location}
          </span>
          <h1 className="mt-6 max-w-4xl text-[42px] font-bold leading-[1.04] tracking-tight sm:text-[64px]">
            {PROFILE.tagline}
            <span className="bg-gradient-to-r from-[var(--color-brand-300)] via-[var(--color-brand-400)] to-[var(--color-ios)] bg-clip-text text-transparent">
              {PROFILE.taglineAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{PROFILE.summary}</p>

          {/* Platform strip — the two ecosystems Rommel ships to, in brand color */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-semibold">
              <AppleLogo className="h-4 w-4 text-white" />
              <span className="text-white/90">iOS</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-ios)]" />
              <span className="text-white/50">Swift · SwiftUI</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-semibold">
              <AndroidLogo className="h-4 w-4 text-[var(--color-android)]" />
              <span className="text-white/90">Android</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-android)]" />
              <span className="text-white/50">Kotlin · Compose</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-xl bg-[var(--color-accent)] px-6 py-3 font-semibold text-white shadow-[0_10px_40px_-10px_var(--color-brand-500)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Email me
            </a>
            {PROFILE.whatsapp && (
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <WhatsAppLogo className="h-[17px] w-[17px] text-[#25D366]" />
                WhatsApp
              </a>
            )}
            {PROFILE.github && (
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            )}
            {PROFILE.linkedin && (
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            )}
            {PROFILE.cv && (
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                Download CV
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/45">
            <span>{PROFILE.email}</span>
            <span className="hidden sm:inline">·</span>
            <span>{PROFILE.phone}</span>
          </div>
        </section>
      </div>

      {/* ══ STATS BAND ══════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 text-center sm:text-left">
              {s.value === "iOS + Android" ? (
                <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                  <AppleLogo className="h-6 w-6 text-[var(--color-ink)]" />
                  <span className="text-2xl font-bold tracking-tight text-[var(--color-muted)] sm:text-[28px]">+</span>
                  <AndroidLogo className="h-6 w-6 text-[var(--color-android)]" />
                </div>
              ) : (
                <div className="text-2xl font-bold tracking-tight text-[var(--color-accent)] sm:text-[28px]">
                  {s.value}
                </div>
              )}
              <div className="mt-1 text-xs leading-snug text-[var(--color-muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTORS / DOMAINS ═══════════════════════════════════════════════ */}
      <section id="domains" className="mx-auto max-w-6xl px-6 pt-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Domains</p>
            <h2 className="mt-2 text-[32px] font-bold tracking-tight sm:text-[40px]">
              Fintech first — and I adapt fast
            </h2>
            <p className="mt-4 text-[var(--color-muted)]">
              Payments at scale is where I go deepest, but I&apos;ve shipped production software across four
              regulated and consumer domains.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div
                className={`h-full rounded-2xl border p-6 shadow-[var(--shadow-card)] ${
                  i === 0
                    ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                    : "border-[var(--color-line)] bg-[var(--color-surface)]"
                }`}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-accent)] shadow-sm">
                  {SectorIco[s.icon]}
                </span>
                <h3 className="text-[17px] font-bold">{s.name}</h3>
                <p className="mt-1 text-xs font-semibold text-[var(--color-accent)]">{s.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{s.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ PRODUCT STAGE — the 0→1 / 1→N arc (dark) ════════════════════════ */}
      <div id="stage" className="grain relative mt-20 overflow-hidden bg-[var(--color-sidebar)] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div
            data-anim
            className="absolute left-[15%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--color-brand-500)] opacity-20 blur-[120px]"
            style={{ animation: "aurora 22s ease-in-out infinite" }}
          />
          <div
            data-anim
            className="absolute right-[15%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--color-ios)] opacity-15 blur-[120px]"
            style={{ animation: "aurora 26s ease-in-out infinite reverse" }}
          />
        </div>

        <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-brand-300)]">
                Product stage
              </p>
              <h2 className="mt-2 text-[32px] font-bold tracking-tight sm:text-[40px]">
                From zero to one — and from one to half a million
              </h2>
              <p className="mt-4 text-white/60">
                I&apos;ve built the first version a startup showed its earliest customers, and I&apos;ve modernized a
                platform that was already carrying 500,000 of them. Knowing which job you&apos;re in is most of the work.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {STAGES.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-ios)] bg-clip-text text-[32px] font-bold tracking-tight text-transparent">
                      {s.label}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                      {s.org}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] font-bold uppercase tracking-widest text-[var(--color-brand-300)]">
                    {s.phase}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{s.blurb}</p>

                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-white/80">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand-400)]" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-white/10 pt-4 text-sm font-bold text-white">{s.metric}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ══ EXPERIENCE (light) ══════════════════════════════════════════════ */}
      <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Work history</p>
            <h2 className="mt-2 text-[32px] font-bold tracking-tight sm:text-[40px]">
              Where I&apos;ve shipped
            </h2>
            <p className="mt-4 text-[var(--color-muted)]">
              Fintech at scale, a startup rebuilt from prototype to platform, and full-stack delivery in between.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-5">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 70}>
              <article className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)] sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="mt-0.5 text-[15px] font-semibold text-[var(--color-accent)]">
                      {job.company}
                      <span className="font-normal text-[var(--color-subtle)]"> · {job.location}</span>
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold text-[var(--color-muted)]">
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">{job.blurb}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ SKILLS (dark) ═══════════════════════════════════════════════════ */}
      <div id="skills" className="grain relative overflow-hidden bg-[var(--color-sidebar)] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div
            data-anim
            className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[var(--color-brand-500)] opacity-15 blur-[120px]"
            style={{ animation: "aurora 24s ease-in-out infinite" }}
          />
          <div
            data-anim
            className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-[var(--color-ios)] opacity-15 blur-[120px]"
            style={{ animation: "aurora 28s ease-in-out infinite reverse" }}
          />
        </div>
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-brand-300)]">Toolbox</p>
              <h2 className="mt-2 text-[32px] font-bold tracking-tight sm:text-[40px]">Skills &amp; stack</h2>
              <p className="mt-4 text-white/60">
                Native-first, security-minded, and comfortable owning delivery end to end.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[var(--color-brand-300)]">
                    {s.group === "Mobile" && (
                      <span className="flex items-center gap-1.5">
                        <AppleLogo className="h-3.5 w-3.5 text-white/80" />
                        <AndroidLogo className="h-3.5 w-3.5 text-[var(--color-android)]" />
                      </span>
                    )}
                    {s.group}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ══ PROJECTS (light) ════════════════════════════════════════════════ */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Personal projects</p>
            <h2 className="mt-2 text-[32px] font-bold tracking-tight sm:text-[40px]">Things I built for myself</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <a
                href={p.href ?? "#"}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noreferrer" : undefined}
                className="group flex h-full flex-col rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  {p.href && (
                    <span className="text-[var(--color-muted)] transition group-hover:text-[var(--color-accent)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H8M17 7v9" />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-semibold text-[var(--color-accent)]">{p.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[var(--color-line)] bg-[var(--color-bg)] px-2 py-1 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}

          {/* Education card, styled to sit beside projects */}
          <Reveal delay={PROJECTS.length * 70}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] p-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-subtle)]">Education</p>
              <h3 className="mt-2 text-lg font-bold">{EDUCATION.degree}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {EDUCATION.school} · {EDUCATION.location}
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-accent)]">{EDUCATION.year}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FINAL CTA (dark) + FOOTER ═══════════════════════════════════════ */}
      <div className="grain relative overflow-hidden bg-[var(--color-sidebar)] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div
            data-anim
            className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[var(--color-brand-500)] opacity-20 blur-[130px]"
            style={{ animation: "aurora 20s ease-in-out infinite" }}
          />
        </div>
        <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-[34px] font-bold tracking-tight sm:text-[44px]">Let&apos;s build something.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Open to mobile engineering roles. The fastest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-xl bg-[var(--color-accent)] px-6 py-3 font-semibold text-white shadow-[0_10px_40px_-10px_var(--color-brand-500)] transition hover:bg-[var(--color-accent-hover)]"
              >
                {PROFILE.email}
              </a>
              {PROFILE.whatsapp && (
                <a
                  href={PROFILE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  <WhatsAppLogo className="h-[17px] w-[17px] text-[#25D366]" />
                  WhatsApp
                </a>
              )}
              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
              )}
            </div>
          </Reveal>
        </section>

        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-[12px] text-white/40 sm:flex-row">
            <p>© {new Date().getFullYear()} {PROFILE.name}. {PROFILE.location}.</p>
            <div className="flex gap-4">
              <a href="#experience" className="hover:text-white">Experience</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              {PROFILE.whatsapp && (
                <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
              )}
              <a href={`mailto:${PROFILE.email}`} className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
