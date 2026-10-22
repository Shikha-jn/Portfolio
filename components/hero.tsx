import Image from "next/image";
import { profile, skills } from "@/data/data";
import heroImage from "@/public/images/shikha-hero.webp";

export function Hero() {
  const tech = skills.flatMap((g) => g.items);
  return (
    <>
      <section
        id="top"
        aria-labelledby="hero-title"
        className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16 lg:grid-cols-12 lg:items-center lg:gap-12"
      >
        <div className="aurora" aria-hidden="true" />
        <div className="lg:col-span-5">
          <p
            className="hero-reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-sm text-muted backdrop-blur"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan" />
            </span>
            {profile.status}
          </p>

          <h1
            id="hero-title"
            className="hero-reveal mt-6 font-display text-[clamp(3.75rem,14vw,6.75rem)] font-bold leading-[0.88] tracking-tighter"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {profile.firstName}
            <br />
            <span className="gradient-text">{profile.lastName}</span>
          </h1>

          <p
            className="hero-reveal mt-6 font-display text-xl font-medium text-violet sm:text-2xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {profile.role}
          </p>

          <div
            className="hero-reveal mt-5 max-w-prose space-y-4 text-muted"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {profile.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div
            className="hero-reveal mt-8 flex flex-wrap gap-3"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center rounded-full bg-cyan px-6 font-medium text-ink shadow-[0_0_30px_-6px] shadow-cyan/60 transition-all hover:-translate-y-0.5 hover:bg-fg"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-full border border-violet/60 px-6 font-medium text-violet transition-all hover:-translate-y-0.5 hover:bg-violet hover:text-ink"
            >
              Contact us
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex min-h-11 items-center rounded-full border border-line px-6 font-medium transition-colors hover:border-violet hover:text-violet"
            >
              Download résumé
            </a>
          </div>
        </div>

        <div
          className="hero-reveal lg:col-span-7"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <div
            className="float rounded-3xl p-px shadow-[0_30px_80px_-30px] shadow-violet/50"
            style={{
              background:
                "linear-gradient(135deg, var(--color-cyan), var(--color-line) 40%, var(--color-violet))",
            }}
          >
            <Image
              src={heroImage}
              alt="Illustration of Shikha Jain, wearing glasses and a purple hoodie, at her desk with React Native code and app mockups on the screen behind her."
              priority
              placeholder="blur"
              sizes="(min-width: 1152px) 660px, (min-width: 1024px) 56vw, 100vw"
              className="h-auto w-full rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <div
        className="marquee border-y border-line bg-surface/40 py-4"
        aria-hidden="true"
      >
        <div className="marquee-track font-display text-lg text-muted">
          {[...tech, ...tech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              {t}
              <span className="size-1.5 rounded-full bg-violet/60" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
