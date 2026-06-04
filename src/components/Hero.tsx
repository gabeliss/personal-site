import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

function calculateExpediaTenure() {
  const startDate = new Date('2023-08-21');
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const years = diffDays / 365;
  return `${years.toFixed(1)} yrs`;
}

function useExpediaTenure() {
  const [tenure, setTenure] = useState(calculateExpediaTenure);

  useEffect(() => {
    const timer = setInterval(() => {
      setTenure(calculateExpediaTenure());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, []);

  return tenure;
}

export default function Hero() {
  const expediaTenure = useExpediaTenure();

  return (
    <section className="relative min-h-[92svh] overflow-hidden border-b hairline">
      <div className="section-shell grid min-h-[92svh] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="hero-rise max-w-3xl">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-[--color-muted]">
            <span className="inline-flex items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/75 px-3 py-2">
              <MapPin size={15} />
              NYC or Remote
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/75 px-3 py-2">
              <img src="/images/expedia.png" alt="Expedia" className="h-4 w-4 object-contain" />
              {expediaTenure} at Expedia
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/75 px-3 py-2">
              <img src="/images/umich.png" alt="University of Michigan" className="h-4 w-4" />
              Michigan '23
            </span>
          </div>

          <p className="mb-4 text-base font-bold text-[--color-accent]">
            Software Development Engineer II at Expedia
          </p>

          <h1 className="max-w-4xl text-[clamp(4rem,11vw,9rem)] font-extrabold leading-[0.9] text-[--color-primary]">
            Gabriel Liss
          </h1>

          <div className="mt-7 grid grid-cols-[0.65fr_0.35fr] gap-3 lg:hidden">
            <div className="aspect-[4/3] overflow-hidden rounded-[8px] border hairline bg-[--color-bg-card]">
              <img
                src="/images/profile.jpeg"
                alt="Gabriel Liss"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-[8px] border hairline bg-[--color-bg-card]">
              <img
                src="/images/content-engine.png"
                alt="Content Engine project mark"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-8 max-w-2xl space-y-4 text-xl leading-relaxed text-[--color-secondary]">
            <p>
              I build full-stack product and platform systems, from incident search and observability tools at Expedia to AI-enabled products outside work.
            </p>
            <p>
              I like complex interfaces, fast-moving teams, and owning work across product, frontend, backend, and infrastructure.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/resume/gabriel_liss_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[--color-primary] px-5 py-3 font-bold text-[--color-bg] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <FileText size={19} />
              Resume
            </a>
            <a
              href="mailto:gabe.liss17@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/80 px-5 py-3 font-bold text-[--color-primary] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={19} />
              Email
            </a>
            <a
              href="https://github.com/gabeliss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border hairline bg-[--color-bg-card]/80 text-[--color-primary] transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gabe-liss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border hairline bg-[--color-bg-card]/80 text-[--color-primary] transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-rise relative hidden min-h-[620px] lg:block" style={{ animationDelay: '140ms' }}>
          <div className="absolute right-0 top-8 h-[470px] w-[370px] overflow-hidden rounded-[8px] border hairline bg-[--color-bg-card] shadow-2xl shadow-[color-mix(in_oklch,var(--color-primary)_14%,transparent)]">
            <img
              src="/images/profile.jpeg"
              alt="Gabriel Liss"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute left-0 top-0 h-64 w-64 overflow-hidden rounded-[8px] border hairline bg-[--color-bg-card] shadow-xl">
            <img
              src="/images/content-engine.png"
              alt="Content Engine project mark"
              className="h-full w-full object-cover"
            />
          </div>
          <a
            href="#projects"
            className="absolute bottom-8 right-20 inline-flex items-center gap-3 rounded-lg border hairline bg-[--color-bg-card] px-5 py-4 font-bold text-[--color-primary] shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            Selected work
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
