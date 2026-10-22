import type { ReactNode } from "react";
import { Reveal } from "./reveal";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-16 border-t border-line py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2
                id={`${id}-title`}
                className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {title}
              </h2>
              <span
                aria-hidden="true"
                className="mt-4 block h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-violet"
              />
              {intro && <p className="mt-4 max-w-sm text-muted">{intro}</p>}
            </Reveal>
          </div>
        </div>
        <Reveal delay={120} className="lg:col-span-8">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line px-2.5 py-1 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan hover:text-cyan">
      {children}
    </li>
  );
}
