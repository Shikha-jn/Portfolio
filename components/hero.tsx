import Image from "next/image";
import { profile } from "@/data/data";
import heroImage from "@/public/images/shikha-hero.webp";
const chip =
  "chip absolute hidden rounded-2xl border border-white/15 bg-surface/70 px-4 py-2 text-sm font-medium backdrop-blur-md sm:block";

export function Hero() {
  return (
    <>
      <section id="top" aria-labelledby="hero-title" className="hero-stage relative overflow-hidden px-5 pb-20 pt-8 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:px-12 lg:pb-12 lg:pt-14">
        <div className="aurora" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative z-10 max-w-xl lg:pl-8">
            <p className="hero-reveal eyebrow" style={{ "--i": 0 } as React.CSSProperties}>APP DEVELOPER <span>/</span> MOBILE &amp; FULL STACK</p>
            <h1 id="hero-title" className="hero-reveal mt-6 font-display text-[clamp(3.4rem,8vw,7.2rem)] font-semibold leading-[.86] tracking-[-.07em]" style={{ "--i": 1 } as React.CSSProperties}>
              I build apps<br /><span className="gradient-text">that feel alive.</span>
            </h1>
            <p className="hero-reveal mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg" style={{ "--i": 2 } as React.CSSProperties}>
              I develop complete digital products, from intuitive mobile experiences and scalable backends to deployment and production.
            </p>
            <div className="hero-reveal mt-9 flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
              <a href="#projects" className="btn-primary">Explore my work <span aria-hidden="true">↗</span></a>
              <a href="#contact" className="btn-ghost">Let&apos;s connect</a>
            </div>
            <div className="hero-reveal mt-12 flex items-center gap-4 text-xs uppercase tracking-[.18em] text-muted" style={{ "--i": 4 } as React.CSSProperties}>
              <span className="status-dot" /> {profile.status} <span className="text-line" /> {profile.location.split(",")[0]}
            </div>
          </div>

          <div className="hero-orbit hero-reveal relative" style={{ "--i": 2 } as React.CSSProperties}>
            <div className="orbit-ring orbit-ring-one" aria-hidden="true" />
            <div className="orbit-ring orbit-ring-two" aria-hidden="true" />
            <div className="hero-visual">
              <Image src={heroImage} alt="Illustration of Shikha Jain in a purple hoodie at a futuristic developer workstation." priority placeholder="blur" sizes="(min-width: 1024px) 65vw, 100vw" className="h-full w-full object-cover" />
              <div className="screen-sheen" aria-hidden="true" />
            </div>
            <div className="interface-panel panel-top" aria-hidden="true"><span className="panel-label">BUILD / 028</span><strong>SHIPPED</strong><span className="panel-bars"><i /><i /><i /><i /></span></div>
            <div className="interface-panel panel-side" aria-hidden="true"><span className="panel-label">CURRENT FOCUS</span><strong>React Native</strong><span className="panel-code">&lt; smooth / scalable / shipped / &gt;</span></div>
            <div className="interface-panel panel-bottom" aria-hidden="true"><span className="panel-label">SYSTEM STATUS</span><strong><span className="status-dot" /> ONLINE</strong></div>
            <span className="orbit-tag tag-one">APIs</span><span className="orbit-tag tag-two">iOS + Android</span>
          </div>
        </div>
      </section>
    </>
  );
}
