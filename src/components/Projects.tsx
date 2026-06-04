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
    name: 'Content Engine',
    tagline: 'AI workflow studio for content automation',
    description:
      'In-progress full-stack platform for defining brand context, composing reusable AI workflows on a node canvas, running automations, storing artifacts, and connecting generation providers to publishing workflows.',
    tech: ['React', 'TypeScript', 'React Flow', 'Convex', 'Clerk', 'AI Providers'],
    image: '/images/content-engine.png',
    links: {},
    highlights: [
      'Typed workflow graph with port validation, execution state, and run debugging',
      'Provider abstractions for AI generation, publishing, model metadata, and async jobs',
      'MCP-style agent tools for inspecting, editing, validating, and running workflows',
      'Product architecture across identity, assets, workflows, artifacts, and metrics',
    ],
  },
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
    <section id="projects" className="border-b hairline bg-[--color-bg-alt]/75 py-24">
      <div className="section-shell">
        <div className="mb-14 grid gap-6 border-b hairline pb-8 lg:grid-cols-[0.55fr_1fr]">
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-none text-[--color-primary]">
            Selected work
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-[--color-secondary]">
            Full-stack products, internal systems, and mobile apps built around complex data, real users, and fast iteration.
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} delay={index * 100}>
              <div
                className="group grid gap-8 border-b hairline py-12 transition-colors duration-300 lg:grid-cols-[0.42fr_0.58fr]"
              >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border hairline bg-[--color-bg-card]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-5 flex items-baseline justify-between gap-6">
                  <div>
                    <p className="mb-2 text-sm font-bold text-[--color-muted]">
                      0{index + 1}
                    </p>
                    <h3 className="text-3xl font-extrabold text-[--color-primary] md:text-4xl">
                      {project.name}
                    </h3>
                  </div>
                  <p className="hidden max-w-xs text-right text-base font-bold text-[--color-accent] md:block">
                    {project.tagline}
                  </p>
                </div>
                <p className="max-w-3xl text-lg leading-relaxed text-[--color-secondary]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border hairline bg-[--color-bg-card]/75 px-3 py-1.5 text-sm font-semibold text-[--color-secondary]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-7 grid gap-2 text-sm font-medium text-[--color-muted] md:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[--color-warm]"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[--color-primary] px-4 py-2.5 text-sm font-bold text-[--color-bg] transition-transform duration-300 hover:-translate-y-0.5"
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
                      className="inline-flex items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/75 px-4 py-2.5 text-sm font-bold text-[--color-primary] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Apple size={16} />
                      App Store
                    </a>
                  )}
                  {project.links.appStorePending && (
                    <div className="relative">
                      <button
                        onClick={handlePendingClick}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/75 px-4 py-2.5 text-sm font-bold text-[--color-primary] transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        <Apple size={16} />
                        App Store
                      </button>
                      {showPendingToast && (
                        <span
                          className="absolute left-0 top-full z-10 mt-2 whitespace-nowrap rounded-lg bg-[--color-primary] px-3 py-1.5 text-sm text-[--color-bg] shadow-lg"
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
