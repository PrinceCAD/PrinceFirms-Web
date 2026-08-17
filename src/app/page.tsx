import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const steps = [
  {
    title: "Ranked by distance, not by ad spend",
    body: "Every search, feed and listing is ordered by how far it actually is from where you are standing. The shop around the corner outranks the chain across town.",
  },
  {
    title: "Talk to the seller directly",
    body: "Chat is built in. Ask about stock, agree a price, arrange a pickup time — no phone numbers traded through the comments of a post.",
  },
  {
    title: "Know who you are buying from",
    body: "Verified badges are earned through a real safety audit, not bought as a sticker. Every badge on a profile links back to the audit that justified it.",
  },
];

const fulfilment = [
  {
    label: "Pickup",
    body: "Buyer collects from the store. Free, immediate, and the default for anything nearby.",
  },
  {
    label: "Self delivery",
    body: "The business delivers with its own riders and carries its own delivery badge.",
  },
  {
    label: "PrinceFirms Logistics",
    body: "Our mover network handles the drop — including standalone parcels with no order attached.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
          />
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
            <p className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              In development — launching region by region
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              {site.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                Get early access
              </a>
              <a
                href="#businesses"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-surface"
              >
                List your business
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              How it works
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.title} className="space-y-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-600/10 font-mono text-sm text-brand-600 dark:text-brand-300">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="leading-7 text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For businesses */}
        <section id="businesses" className="scroll-mt-16 border-b border-border bg-surface">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:py-24 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for the shop, not the shopping mall
              </h2>
              <p className="mt-6 leading-7 text-muted-foreground">
                A PrinceFirms account is one account with many profiles. You
                shop as yourself, then add a business profile beside it — you
                never convert one into the other or juggle two logins.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Trust is earned on the platform. Pass the mandatory safety audit
                and your Verified badge points at the audit record that granted
                it, so customers can see exactly what was checked.
              </p>
            </div>
            <dl className="space-y-6">
              {fulfilment.map((option) => (
                <div
                  key={option.label}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <dt className="font-medium">{option.label}</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">
                    {option.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Logistics */}
        <section id="logistics" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A delivery network that works even without an order
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
              Movers on the PrinceFirms network carry orders from local stores —
              and take standalone parcel jobs from anyone who needs something
              moved across town. Same riders, same tracking, same accountability.
            </p>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="scroll-mt-16">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
            <div className="rounded-3xl border border-border bg-surface px-8 py-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Be first in your area
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
                We open one region at a time, starting with the businesses
                already trading there. Tell us where you are and we will bring
                PrinceFirms to you.
              </p>
              <a
                href="mailto:hello@princefirms.com?subject=Early%20access"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                Request early access
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
