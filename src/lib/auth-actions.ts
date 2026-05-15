"use server";

import { APIError } from "better-auth/api";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/lib/auth";

export type AuthActionState = {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};

const signInSchema = z.object({
  email: z.email("Enter a valid email address.").trim(),
  password: z.string().min(1, "Enter your password."),
});

const signUpSchema = z.object({
  name: z.string().min(2, "Enter your name.").trim(),
  email: z.email("Enter a valid email address.").trim(),
  password: z.string().min(8, "Use at least 8 characters."),
});

function authErrorMessage(error: unknown) {
  if (error instanceof APIError) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}

export async function signIn(
  _state: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  try {
    await auth.api.signInEmail({
      body: {
        email: parsed.data.email,
        password: parsed.data.password,
      },
      headers: await headers(),
    });
  } catch (error) {
    return { message: authErrorMessage(error) };
  }

  redirect("/dashboard");
}

export async function signUp(
  _state: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  try {
    await auth.api.signUpEmail({
      body: {
        name: parsed.data.name,
        email: parsed.data.email,
        password: parsed.data.password,
      },
      headers: await headers(),
    });
  } catch (error) {
    return { message: authErrorMessage(error) };
  }

  redirect("/dashboard");
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/sign-in");
}
