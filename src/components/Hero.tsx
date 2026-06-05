import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <aside className="text-center sm:sticky sm:top-24">
      <img
        src="/images/profile.jpeg"
        alt="Gabriel Liss"
        className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-[--color-accent] md:h-36 md:w-36"
      />

      <h2 className="mt-5 text-2xl font-semibold text-[--color-primary]">
        Gabriel Liss
      </h2>

      <p className="mt-2 text-[--color-secondary]">
        Software Engineer
      </p>

      <p className="text-[--color-secondary]">
        Expedia
      </p>

      <nav className="mt-6 flex items-center justify-center gap-3">
        <a className="social-link" href="mailto:gabe.liss17@gmail.com" aria-label="Email">
          <Mail size={24} />
        </a>
        <a className="social-link" href="https://github.com/gabeliss" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={24} />
        </a>
        <a className="social-link" href="https://linkedin.com/in/gabe-liss" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a className="social-link" href="/resume/gabriel_liss_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
          <FileText size={24} />
        </a>
      </nav>
    </aside>
  );
}
