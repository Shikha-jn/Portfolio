import { certificates, education } from "@/data/data";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-8">
        {education.map((item) => (
          <li key={item.school}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-xl font-semibold">{item.school}</h3>
              <p className="shrink-0 text-sm text-muted">
                {item.start} – {item.end}
              </p>
            </div>
            <p className="mt-1 text-violet">
              {item.degree}, {item.field}
            </p>
            <p className="mt-1 text-muted">
              {item.location} · {item.score}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-14 font-display text-xl font-semibold">Certificates</h3>
      <ul className="mt-6 grid gap-8 sm:grid-cols-2">
        {certificates.map((cert) => (
          <li key={cert.name} className="border-l border-line pl-5">
            <p className="font-medium">{cert.name}</p>
            <p className="text-violet">
              {cert.issuer}
              <span className="text-muted"> · {cert.date}</span>
            </p>
            <p className="mt-2 text-muted">{cert.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
