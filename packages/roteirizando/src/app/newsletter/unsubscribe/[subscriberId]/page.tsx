"use client";

import { unsubscribeToNewsletter } from "@/actions/unsubscribe-to-newsletter";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

export default function Unsubscribe({
  params,
}: {
  params: { subscriberId: string };
}) {
  const [formState, formAction] = useFormState(unsubscribeToNewsletter, {
    error: "",
    success: "",
  });

  useEffect(() => {
    if (formState.error) {
      toast.error(formState.error);
      redirect("/");
    }

    if (formState.success) {
      toast.success(formState.success);
      redirect("/");
    }
  }, [formState]);

  return (
    <div>
      <h1>Unsubscribe</h1>
      <p>Subscriber ID: {params.subscriberId}</p>

      <form action={formAction}>
        <input type="hidden" name="subscriberId" value={params.subscriberId} />
        <button type="submit">Unsubscribe</button>
      </form>
    </div>
  );
}
