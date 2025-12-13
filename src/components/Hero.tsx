import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

function useExpediaTenure() {
  const startDate = new Date('2023-08-21');

  const calculateTenure = () => {
    const now = new Date();
    const diffMs = now.getTime() - startDate.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const years = diffDays / 365;
    return `${years.toFixed(1)} yrs`;
  };

  const [tenure, setTenure] = useState(calculateTenure);

  useEffect(() => {
    const timer = setInterval(() => {
      setTenure(calculateTenure());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, []);

  return tenure;
}

export default function Hero() {
  const expediaTenure = useExpediaTenure();

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-8 py-20">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative w-36 h-36 mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[--color-accent] to-blue-600 rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-500 group-hover:duration-200 pointer-events-none"></div>
            <img
              src="/images/profile.jpeg"
              alt="Gabriel Liss"
              className="relative w-36 h-36 rounded-full object-cover shadow-lg border-4 border-[--color-bg] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-[--color-primary] mb-4">
          Gabriel Liss
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[--color-secondary] mb-4 font-medium">
          Software Engineer
        </p>

        {/* Location, Education & Tenure */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[--color-muted] mb-8">
          <span className="flex items-center gap-1">
            <MapPin size={16} />
            Chicago, IL
          </span>
          <span className="hidden sm:inline text-[--color-border]">|</span>
          <span className="flex items-center gap-2">
            <img src="/images/umich.png" alt="University of Michigan" className="w-5 h-5" />
            Michigan '23
          </span>
          <span className="hidden sm:inline text-[--color-border]">|</span>
          <span className="flex items-center gap-2">
            <img src="/images/expedia.png" alt="Expedia" className="w-5 h-5 object-contain" />
            <span>{expediaTenure} @ Expedia</span>
          </span>
        </div>

        {/* Bio */}
        <div className="text-lg text-[--color-secondary] max-w-xl mx-auto mb-10 leading-relaxed space-y-4 text-center">
          <p>
            I'm a software engineer with a passion for building great user experiences. I am currently at Expedia working on internal observability systems.
          </p>
          <p>
            Outside of my job, I love working on side projects and learning new technologies.
            I also enjoy playing tennis, basketball, or anything that will get me outside.
          </p>
          <p>
            I am always looking for new opportunities to connect, please feel free to reach out.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/gabeliss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[--color-border] text-[--color-primary] hover:border-[--color-border-hover] hover:bg-[--color-bg-alt] transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gabe-liss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[--color-border] text-[--color-primary] hover:border-[--color-border-hover] hover:bg-[--color-bg-alt] transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:gabe.liss17@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[--color-border] text-[--color-primary] hover:border-[--color-border-hover] hover:bg-[--color-bg-alt] transition-colors"
          >
            <Mail size={20} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
