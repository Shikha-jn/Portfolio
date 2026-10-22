import { projects } from "@/data/data";
import { Section, Tag } from "./section";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Apps I've shipped, maintained or built to learn."
    >
      <ul className="divide-y divide-line">
        {projects.map((project) => (
          <li key={project.id} className="py-10 first:pt-0 last:pb-0">
            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
                <p className="shrink-0 text-sm text-muted">{project.period}</p>
              </div>
              <p className="mt-1 text-violet">{project.context}</p>

              <p className="mt-4 max-w-prose">{project.description}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-line">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>

              {project.links && (
                <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:decoration-cyan"
                    >
                      {link.label}
                      <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                    </a>
                  ))}
                </p>
              )}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
