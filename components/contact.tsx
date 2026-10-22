"use client";

import { useState } from "react";
import { profile } from "@/data/data";
import { Section } from "./section";
import { GlowCard } from "./reveal";

const field =
  "mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-fg placeholder:text-muted/60 transition-colors focus:border-cyan focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${d.get("name")}`,
    );
    const body = encodeURIComponent(
      `${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <Section
      id="contact"
      title="Contact us"
      intro="Hiring for a React Native role, or have an app to build? Send a message and I'll reply by email."
    >
      <div className="grid gap-8 md:grid-cols-5">
        <GlowCard className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8 md:col-span-3">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-muted">
                Your name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className={field}
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block text-sm text-muted">
                Your email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                  placeholder="jane@company.com"
                />
              </label>
            </div>
            <label className="block text-sm text-muted">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className={field}
                placeholder="Tell me about the role or project."
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center rounded-full bg-cyan px-6 font-medium text-ink shadow-[0_0_30px_-6px] shadow-cyan/60 transition-all hover:-translate-y-0.5 hover:bg-fg"
            >
              Send message
            </button>
            <p
              role="status"
              aria-live="polite"
              className="min-h-6 text-sm text-cyan"
            >
              {sent &&
                "Your email app should open with the message ready to send."}
            </p>
          </form>
        </GlowCard>

        <div className="space-y-6 md:col-span-2">
          <div>
            <p className="text-sm text-muted">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="break-all font-display text-xl font-semibold text-cyan underline decoration-cyan/40 underline-offset-4 hover:decoration-cyan"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-2 block text-sm text-muted hover:text-fg"
            >
              {copied ? "Copied" : "Copy email address"}
            </button>
          </div>
          <div>
            <p className="text-sm text-muted">Phone</p>
            <a href={profile.phoneHref} className="hover:text-cyan">
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="text-sm text-muted">Location</p>
            <p>{profile.location}</p>
          </div>
          <ul className="space-y-2">
            {profile.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm transition-all hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  {l.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex min-h-11 items-center rounded-full border border-line px-6 font-medium transition-colors hover:border-violet hover:text-violet"
          >
            Download résumé (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}
