import { projects } from "@/data/data";
import { Section, Tag } from "./section";
import { GlowCard } from "./reveal";

const palette = ["cyan", "pink", "amber", "mint", "violet"];

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Apps I've shipped, maintained or built to learn."
    >
      <ul className="project-gallery">
        {projects.map((project, i) => (
          <li key={project.id} data-accent={palette[i % palette.length]} className={`project-item project-item-${i + 1}`}>
            <GlowCard className="project-card h-full overflow-hidden">
              <div className="project-index">0{i + 1}</div>
              <article className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-9">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-(--accent)">{project.context} {project.period && <span className="text-muted">/ {project.period}</span>}</p>
                  <h3 className="mt-5 max-w-md font-display text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{project.name}</h3>
                  <p className="mt-4 max-w-lg text-muted">{project.description}</p>
                  <ul className="mt-5 max-w-xl list-disc space-y-2 pl-5 text-sm text-muted marker:text-(--accent)">{project.highlights.slice(0, 2).map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                  <ul className="flex max-w-md flex-wrap gap-2" aria-label="Technologies used">{project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}</ul>
                  {project.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">View project <span aria-hidden="true">↗</span><span className="sr-only">{link.label} for {project.name} (opens in a new tab)</span></a>)}
                </div>
              </article>
            </GlowCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
