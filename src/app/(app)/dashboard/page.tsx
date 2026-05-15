import type { Metadata } from "next";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { SignOutButton } from "@/components/auth/sign-out-button";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950 sm:px-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Dashboard
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              Charity Accounts
            </h1>
            <p className="mt-3 text-slate-600">
              Signed in as {session?.user.email}
            </p>
          </div>
          <SignOutButton />
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Workspace ready</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Authentication is in place. The accounting modules can now be built
            behind this protected app area.
          </p>
        </div>
      </section>
    </main>
  );
}
