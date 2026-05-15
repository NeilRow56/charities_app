"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signUp, type AuthActionState } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: AuthActionState = {};

export function SignUpForm() {
  const [state, action, pending] = useActionState(signUp, initialState);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Create your charity accounts workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(state.errors?.name)}
              required
            />
            {state.errors?.name ? (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(state.errors?.email)}
              required
            />
            {state.errors?.email ? (
              <p className="text-sm text-destructive">{state.errors.email[0]}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              aria-invalid={Boolean(state.errors?.password)}
              required
            />
            {state.errors?.password ? (
              <p className="text-sm text-destructive">
                {state.errors.password[0]}
              </p>
            ) : null}
          </div>
          {state.message ? (
            <p className="text-sm text-destructive">{state.message}</p>
          ) : null}
          <Button className="w-full" disabled={pending} type="submit">
            {pending ? "Creating account..." : "Create account"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link className="font-medium text-foreground underline" href="/sign-in">
              Sign in
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
