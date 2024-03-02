"use client";

import { unsubscribeToNewsletter } from "@/actions/unsubscribe-to-newsletter";
import { Button } from "@/components/button";
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
    <div className="px-6 md:px-20 flex flex-col items-center justify-center gap-6 md:gap-8 h-[calc(100vh-(80px+96px+64px))]">
      <h1 className="font-sans text-2xl md:text-3xl md:max-w-[568px] font-bold text-neutral-900 text-center">
        Você quer cancelar sua inscrição? Sentiremos sua falta :(
      </h1>
      <form
        action={formAction}
        className="w-full flex flex-col items-center justify-center"
      >
        <input type="hidden" name="subscriberId" value={params.subscriberId} />
        <Button
          type="button"
          submit
          variant="destroy"
          className="!w-full md:!w-[246px]"
        >
          Cancelar inscrição
        </Button>
      </form>
    </div>
  );
}
