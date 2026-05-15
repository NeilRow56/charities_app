export default function Home() {
  const features = [
    "Funds",
    "Transactions",
    "Reports",
    "Financial Years",
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950 sm:px-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Charity accounting software
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Charity Accounts
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-600">
            Simple accounts, reporting, and fund tracking for small UK
            charities.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              key={feature}
            >
              <h2 className="text-lg font-semibold text-slate-950">
                {feature}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Manage the core accounting details your charity needs in one
                clear workspace.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
