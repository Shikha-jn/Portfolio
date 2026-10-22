import { skills } from "@/data/data";
import { Section, Tag } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Tools I use day to day.">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title}>
            <dt className="font-display text-lg font-semibold">{group.title}</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
