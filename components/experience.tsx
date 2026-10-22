import { experience } from "@/data/data";
import { Section, Tag } from "./section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Where I've worked, most recent first."
    >
      <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(1.5rem+4.5px)] top-2.5 size-2.5 rounded-full bg-cyan ring-4 ring-ink sm:-left-[calc(2rem+4.5px)]"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-xl font-semibold">{job.role}</h3>
              <p className="shrink-0 text-sm text-muted">
                {job.start} – {job.end}
              </p>
            </div>
            <p className="mt-1 text-violet">
              {job.company}
              <span className="text-muted">
                {" "}
                · {job.type} · {job.location}
              </span>
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-line">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {job.stack && (
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {job.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
