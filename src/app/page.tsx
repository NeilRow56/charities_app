import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      title: "Fund accounting",
      description:
        "Track restricted, unrestricted, and designated funds clearly, with balances that stay visible as work is posted.",
    },
    {
      title: "Transactions and bank feeds",
      description:
        "Bring bank activity into a review workflow so imported transactions can be checked, matched, and posted with care.",
    },
    {
      title: "Reports",
      description:
        "Prepare trustees, management, and fund reports from the same accounting records, without spreadsheet drift.",
    },
    {
      title: "Year-end accounts",
      description:
        "Close financial years confidently and keep historical records read-only once accounts have been finalised.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-14 sm:px-10 sm:py-20">
        <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Charity accounting software
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Accounts built for small UK charities
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Manage funds, transactions, reporting, and year-end accounts in a
              clear workspace designed around charity finance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/sign-up">Sign up</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              key={feature.title}
            >
              <h2 className="text-lg font-semibold text-slate-950">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <section className="border-t border-slate-200 pt-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Audit-friendly
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Posted records are treated carefully, with corrections handled
                through transparent reversal and repost workflows.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Trustee-ready
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep day-to-day bookkeeping connected to the reports trustees
                need for oversight and decisions.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Built to grow
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Start with practical accounting foundations before adding team,
                approval, and banking workflows.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
