import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-[--color-bg-alt]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[--color-primary] mb-4">
          Let's Connect
        </h2>
        <p className="text-[--color-secondary] mb-8 leading-relaxed">
          I'm always interested in hearing about new opportunities,
          especially at early-stage startups where I can make a real impact.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:gabe.liss17@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium rounded-full bg-[--color-primary] text-white hover:bg-[--color-secondary] transition-colors shadow-lg hover:shadow-xl"
        >
          <Mail size={22} />
          gabe.liss17@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://github.com/gabeliss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-muted] hover:text-[--color-primary] transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/gabe-liss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-muted] hover:text-[--color-primary] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
