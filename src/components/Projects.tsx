import { Apple, ExternalLink } from 'lucide-react';

type Project = {
  name: string;
  sentence: string;
  image: string;
  website?: string;
  appStore?: string;
};

const projects: Project[] = [
  {
    name: 'Content Engine',
    sentence: 'Building an AI agent for content creation.',
    image: '/images/content-engine-mark.svg',
    website: 'https://www.content-engine.dev/',
  },
  {
    name: 'Caravan Trip Plan',
    sentence: 'Camping trip planner with dynamic itinerary generation, campground selection, route previews, and archived real-time availability/pricing.',
    image: '/images/caravan.jpg',
    website: 'https://caravan-trip-plan.vercel.app/',
  },
  {
    name: 'Rewinded',
    sentence: 'iOS app that turns camera rolls into collaborative, shareable visual stories.',
    image: '/images/rewinded.jpeg',
    website: 'https://www.rewinded.app/',
    appStore: 'https://apps.apple.com/us/app/rewinded/id6755892837',
  },
  {
    name: 'MindMend',
    sentence: 'AI wellness app with contextual coaching across habits, journals, and voice input.',
    image: '/images/mindmend.png',
    website: 'https://www.getmindmend.com/',
    appStore: 'https://apps.apple.com/us/app/mindmend-habit-tracker/id6753316303',
  },
];

export default function Projects() {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold text-[--color-primary]">Projects</h2>
      <div className="mt-4 space-y-4">
        {projects.map((project) => (
          <article className="project-item" key={project.name}>
            <img src={project.image} alt="" className="h-9 w-9 rounded-md object-cover ring-1 ring-[--color-border]" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-medium text-[--color-primary]">{project.name}</h3>
                <div className="flex items-center gap-2">
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} website`}>
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} App Store`}>
                      <Apple size={15} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-1 text-sm leading-6 text-[--color-muted]">{project.sentence}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
