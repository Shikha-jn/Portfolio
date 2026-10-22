import { profile } from "@/data/data";

export function Footer() {
  return (
    <footer className="portfolio-footer border-t border-line/70 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-5"><span className="status-dot" /> Available for the next build</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Let&apos;s make something <span className="gradient-text">worth shipping.</span></h2>
        </div>
        <div className="flex items-end lg:col-span-8">
          <a href="#contact" className="footer-arrow group" aria-label="Go to contact section">
            <span>Start a conversation</span><span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="flex flex-col gap-5 border-t border-line/70 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:col-span-12">
          <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
          <div className="flex gap-5">{profile.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">{link.label}</a>)}</div>
        </div>
      </div>
    </footer>
  );
}
