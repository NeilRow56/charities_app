import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/auth/sign-in-form";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function SignInPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <SignInForm />
    </main>
  );
}
