import { ExternalLink, Apple } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    website?: string;
    appStore?: string;
    appStorePending?: boolean;
  };
  highlights: string[];
}

const projects: Project[] = [
  {
    name: 'Rewinded',
    tagline: 'Transform your camera roll into shareable visual stories',
    description:
      'Native iOS app that organizes scattered photos and videos into themed "moments" on an interactive spatial canvas. Features real-time collaboration, shareable trip links, and auto-generated web previews.',
    tech: ['Swift', 'SwiftUI', 'Convex', 'Next.js', 'Clerk', 'RevenueCat'],
    image: '/images/rewinded.jpeg',
    links: {
      website: 'https://www.rewinded.app/',
      appStore: 'https://apps.apple.com/us/app/rewinded/id6755892837',
    },
    highlights: [
      'Real-time multi-user collaboration via WebSocket subscriptions',
      'Custom masonry layout algorithm with drag-and-drop',
      'Shareable trip links with auto-generated web previews',
      'Full-stack: iOS (SwiftUI) + Web (Next.js) + serverless backend',
    ],
  },
  {
    name: 'MindMend',
    tagline: 'AI-powered wellness with contextual coaching',
    description:
      'Full-stack iOS wellness app combining habit tracking, journaling, and AI coaching. The AI coach "Aya" uses function calling to access behavioral and emotional data for genuinely personalized insights.',
    tech: ['SwiftUI', 'Convex', 'OpenAI GPT-4o', 'Firebase Auth', 'RevenueCat'],
    image: '/images/mindmend.png',
    links: {
      website: 'https://www.getmindmend.com/',
      appStore: 'https://apps.apple.com/us/app/mindmend-habit-tracker/id6753316303',
    },
    highlights: [
      'AI coach with access to habits + journal entries for personalized insights',
      'GPT-4o function calling to dynamically fetch relevant user data',
      'Advanced analytics, charts, and graphs to help you track your progress',
      'Smooth voice dictation integration with natural language parsing',
    ],
  },
  {
    name: 'DreamDex',
    tagline: 'Record, analyze, and visualize your dreams',
    description:
      'Cross-platform mobile app for dream journaling with AI-powered analysis. Features voice-to-text recording, emotional analysis, lucidity scoring, and AI-generated dream artwork.',
    tech: ['Flutter', 'Convex', 'Google Gemini', 'Firebase Auth', 'RevenueCat'],
    image: '/images/dreamdex.png',
    links: {
      website: 'https://www.dreamdexapp.com/',
      appStore: 'https://apps.apple.com/us/app/dreamdex/id6752360041',
    },
    highlights: [
      'AI image generation from dream descriptions using Gemini',
      'Emotional analysis & AI generated dream interpretations',
      'Smooth voice-to-text integration for seamless dream recording',
      'Cross-platform Flutter codebase for iOS and Android',
    ],
  },
  {
    name: 'Caravan Trip Plan (inactive)',
    tagline: 'Smart road trip planning for RV enthusiasts',
    description:
      'Full-stack SaaS for RV and camping trip planning. Features real-time campground availability via distributed web scraping, interactive maps, and intelligent itinerary generation.',
    tech: ['React', 'TypeScript', 'Flask', 'AWS Lambda', 'Supabase', 'Stripe', 'Mapbox'],
    image: '/images/caravan.jpg',
    links: {
      website: 'https://caravan-trip-plan.vercel.app/',
    },
    highlights: [
      'Microservices architecture with 50+ AWS Lambda scrapers',
      'Reverse-engineered booking site APIs for fast, reliable data fetching',
      'Async task queuing with result caching for performance',
      'Stripe checkout with seamless guest-to-user migration',
    ],
  },
];

export default function Projects() {
  const [showPendingToast, setShowPendingToast] = useState(false);

  const handlePendingClick = () => {
    setShowPendingToast(true);
    setTimeout(() => setShowPendingToast(false), 2000);
  };

  return (
    <section id="projects" className="py-20 px-8 bg-[--color-bg-alt]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[--color-primary] mb-4 text-center">
          Projects
        </h2>
        <p className="text-[--color-muted] text-center mb-12 max-w-2xl mx-auto">
          Lately I've been into consumer mobile apps.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} delay={index * 100}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center p-6 rounded-2xl transition-all duration-300 hover:bg-[--color-bg] hover:shadow-lg hover:-translate-y-1`}
              >
              {/* Image */}
              <div className="w-full lg:w-2/5 flex-shrink-0 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[--color-accent] rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl shadow-md object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5">
                <h3 className="text-2xl font-bold text-[--color-primary] mb-2">
                  {project.name}
                </h3>
                <p className="text-[--color-accent] font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-[--color-secondary] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-[--color-bg] text-[--color-secondary] rounded-full border border-[--color-border]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="text-sm text-[--color-muted] mb-6 space-y-1">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="text-[--color-accent] mt-1">-</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-3 items-center">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-[--color-primary] text-white hover:bg-[--color-secondary] transition-colors"
                    >
                      <ExternalLink size={16} />
                      Website
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-[--color-border] text-[--color-primary] hover:border-[--color-border-hover] hover:bg-[--color-bg] transition-colors"
                    >
                      <Apple size={16} />
                      App Store
                    </a>
                  )}
                  {project.links.appStorePending && (
                    <div className="relative">
                      <button
                        onClick={handlePendingClick}
                        className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-[--color-border] hover:border-[--color-border-hover] hover:bg-[--color-bg] transition-colors cursor-pointer"
                        style={{ color: '#0ea5e9' }}
                      >
                        <Apple size={16} />
                        App Store
                      </button>
                      {showPendingToast && (
                        <span
                          className="absolute left-0 top-full mt-2 whitespace-nowrap px-3 py-1.5 text-sm rounded-lg shadow-lg z-10"
                          style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                        >
                          Pending App Store review
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
