import { Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[--color-primary] mb-12 text-center">
          Experience
        </h2>

        {/* Expedia */}
        <AnimatedSection>
          {/* Company Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <img
              src="/images/expedia.png"
              alt="Expedia Group"
              className="w-16 h-16 rounded-xl object-contain bg-white shadow-sm border border-[--color-border]"
            />
            <div>
              <h3 className="text-2xl font-bold text-[--color-primary]">
                Expedia Group
              </h3>
              <p className="text-lg text-[--color-accent] font-medium">
                Software Development Engineer
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[--color-muted] mt-1">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  Aug 2023 - Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Chicago, IL
                </span>
              </div>
            </div>
          </div>

          {/* Team Context */}
          <p className="text-[--color-secondary] mb-8 leading-relaxed">
            Event Management and Notification Team within Observability Org. Building internal tools
            that help Expedia's Network Operation Center (NOC) monitor and respond to production incidents
            across the company's infrastructure.
          </p>

          {/* Key Projects */}
          <div className="space-y-8">
            {/* Search Console */}
            <div className="bg-[--color-bg-alt] rounded-xl p-6 border border-[--color-border]">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 text-xs font-medium bg-[--color-accent] text-white rounded-full">
                  Lead Developer
                </span>
              </div>
              <h4 className="text-xl font-semibold text-[--color-primary] mb-3">
                Incident & Event Search Console
              </h4>
              <p className="text-[--color-secondary] mb-4 leading-relaxed">
                Designed and built an internal tool enabling NOC operators to search through millions of
                production incidents and events by keyword, time range, and dynamic filters.
              </p>
              <ul className="text-sm text-[--color-muted] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[--color-accent] mt-0.5">-</span>
                  Selected PostgreSQL and provisioned production cluster via Cerebro (internal DBaaS);
                  authored schemas, indexes, and partitioning strategy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--color-accent] mt-0.5">-</span>
                  Designed streaming architecture (SNS → SQS → Lambda) for real-time DynamoDB sync
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--color-accent] mt-0.5">-</span>
                  Built ~5,500 lines of TypeScript/React UI with URL-based state management for
                  shareable, deep-linkable searches
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--color-accent] mt-0.5">-</span>
                  Developed Python Flask API endpoints with optimized SQL functions for complex filtering
                </li>
              </ul>
            </div>

            {/* AI Summarization */}
            <div className="bg-[--color-bg-alt] rounded-xl p-6 border border-[--color-border]">
              <h4 className="text-xl font-semibold text-[--color-primary] mb-3">
                AI-Powered Incident Summarization
              </h4>
              <p className="text-[--color-secondary] mb-4 leading-relaxed">
                Built an AI feature that aggregates correlated events, transforms payloads, and
                generates dynamic LLM prompts to provide NOC operators with instant context summaries.
              </p>
              <p className="text-sm text-[--color-muted]">
                <span className="text-[--color-accent]">Impact:</span> Reduced mean time to resolution
                by providing actionable summaries that previously required manual analysis of multiple
                event logs.
              </p>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-[--color-primary] mb-3 uppercase tracking-wide">
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
                  className="px-3 py-1 text-sm bg-[--color-bg-alt] text-[--color-secondary] rounded-full border border-[--color-border]"
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
