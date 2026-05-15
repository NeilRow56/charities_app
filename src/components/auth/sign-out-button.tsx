"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleClick() {
    await authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You've logged out. See you soon!", {
            duration: 5000,
          });
          router.push("/");
          router.refresh();
        },
      },
    });
  }

  return (
    <Button
      className="bg-red-500 text-white hover:bg-red-600"
      disabled={isPending}
      onClick={handleClick}
      size="sm"
      type="button"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </Button>
  );
}
