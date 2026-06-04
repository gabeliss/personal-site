import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[--color-primary] py-24 text-[--color-bg]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
        <div>
          <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-none">
            Let's build something difficult.
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[color-mix(in_oklch,var(--color-bg)_76%,var(--color-primary))]">
            I'm looking for software engineering roles where I can own ambitious product and infrastructure work,
            especially in New York City or remote.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <a
            href="mailto:gabe.liss17@gmail.com"
            className="inline-flex items-center gap-3 rounded-lg bg-[--color-bg] px-6 py-4 text-lg font-extrabold text-[--color-primary] transition-transform duration-300 hover:-translate-y-1"
          >
            <Mail size={22} />
            gabe.liss17@gmail.com
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/gabeliss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color-mix(in_oklch,var(--color-bg)_70%,var(--color-primary))] transition-colors hover:text-[--color-bg]"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/gabe-liss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color-mix(in_oklch,var(--color-bg)_70%,var(--color-primary))] transition-colors hover:text-[--color-bg]"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
