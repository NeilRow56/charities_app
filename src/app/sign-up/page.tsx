import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Sign up",
};

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <SignUpForm />
    </main>
  );
}
