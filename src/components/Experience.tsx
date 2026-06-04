import { Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Experience() {
  return (
    <section id="experience" className="border-b hairline bg-[--color-bg] py-24">
      <div className="section-shell">
        <div className="mb-14 grid gap-6 border-b hairline pb-8 lg:grid-cols-[0.55fr_1fr]">
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-none text-[--color-primary]">
            Expedia
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-[--color-secondary]">
            Internal observability systems for incident search, routing, escalation, and production context.
          </p>
        </div>

        <AnimatedSection>
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/expedia.png"
                alt="Expedia Group"
                className="h-16 w-16 rounded-[8px] border hairline bg-[--color-bg-card] object-contain p-2"
              />
              <div>
                <h3 className="text-3xl font-extrabold text-[--color-primary]">
                  Software Development Engineer II
                </h3>
                <p className="mt-1 text-base font-bold text-[--color-accent]">
                  Event Management and Notification Team, Observability Org
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-[--color-muted]">
              <span className="inline-flex items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/70 px-3 py-2">
                <Calendar size={14} />
                Aug 2023 - Present
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border hairline bg-[--color-bg-card]/70 px-3 py-2">
                <MapPin size={14} />
                Chicago, IL
              </span>
            </div>
          </div>

          <p className="mb-10 max-w-4xl text-lg leading-relaxed text-[--color-secondary]">
            Building internal tools that help Expedia's Network Operation Center monitor and respond to production incidents across the company's infrastructure.
          </p>

          <div className="divide-y hairline border-y hairline">
            <div className="grid gap-6 py-8 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <span className="mb-4 inline-flex rounded-lg bg-[--color-accent] px-3 py-1.5 text-xs font-bold text-[--color-bg]">
                  Lead Developer
                </span>
                <h4 className="text-2xl font-extrabold text-[--color-primary]">
                  Incident and Event Search Console
                </h4>
              </div>
              <div>
                <p className="mb-5 text-lg leading-relaxed text-[--color-secondary]">
                  Designed and built an internal search surface for millions of production incidents and events.
                </p>
                <ul className="grid gap-3 text-sm font-medium text-[--color-muted] md:grid-cols-2">
                  <li>Selected PostgreSQL and authored schemas, indexes, and partitioning strategy.</li>
                  <li>Designed streaming architecture (SNS → SQS → Lambda) for real-time DynamoDB sync.</li>
                  <li>Built TypeScript/React UI with URL-based state for shareable, deep-linkable searches.</li>
                  <li>Developed Python Flask API endpoints with optimized SQL functions for complex filtering.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 py-8 lg:grid-cols-[0.34fr_0.66fr]">
              <h4 className="text-2xl font-extrabold text-[--color-primary]">
                AI-Powered Incident Summarization
              </h4>
              <div>
                <p className="text-lg leading-relaxed text-[--color-secondary]">
                  Built an AI feature that aggregates correlated events, transforms payloads, and generates dynamic LLM prompts for instant incident context.
                </p>
                <p className="mt-4 text-sm font-bold text-[--color-muted]">
                  Impact: reduced mean time to resolution by replacing manual analysis across multiple event logs.
                </p>
              </div>
            </div>

            <div className="grid gap-6 py-8 lg:grid-cols-[0.34fr_0.66fr]">
              <h4 className="text-2xl font-extrabold text-[--color-primary]">
                Datadog On-Call Integration
              </h4>
              <p className="text-lg leading-relaxed text-[--color-secondary]">
                Led a large part of the migration from PagerDuty to Datadog On-Call for Expedia's incident routing workflows, integrating automated escalation into the event management system.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="mb-4 text-sm font-extrabold text-[--color-primary]">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'React',
                'TypeScript',
                'Python',
                'Flask',
                'AWS Lambda',
                'DynamoDB',
                'PostgreSQL',
                'SQS/SNS',
                'Cloudwatch',
                'Docker',
                'Spinnaker',
                'Datadog',
                'Splunk',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border hairline bg-[--color-bg-card]/70 px-3 py-1.5 text-sm font-semibold text-[--color-secondary]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
