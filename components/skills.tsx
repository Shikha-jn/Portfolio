import { skills } from "@/data/data";
import { Section, Tag } from "./section";
import { GlowCard } from "./reveal";

const palette = ["cyan", "pink", "amber", "mint", "violet"];

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Tools I use day to day.">
      <ul className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <li key={group.title} data-accent={palette[i % palette.length]}>
            <GlowCard className="h-full rounded-2xl border border-line bg-surface/70 p-5">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-full bg-(--accent) shadow-[0_0_12px_var(--accent)]"
                />
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </GlowCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
