"use client";

import { subscribeToNewsletter } from "@/actions/subscribe-to-newsletter";
import { Button } from "./button";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [formState, formAction] = useFormState(subscribeToNewsletter, {
    error: "",
    success: "",
  });

  useEffect(() => {
    if (formState.error) {
      (document.getElementById("email") as HTMLInputElement).focus();
      toast.error(formState.error);
    }

    if (formState.success) {
      (document.getElementById("email") as HTMLInputElement).value = "";
      toast.success(formState.success);
    }
  }, [formState]);

  return (
    <div className="px-6 md:px-20 mt-14 md:mt-24" id="newsletter">
      <div className="bg-blue-700 rounded-2xl flex flex-col items-center justify-start px-6 py-10 md:px-14 md:py-16 gap-10 md:gap-14">
        <h1 className="text-neutral-50 font-sans font-bold text-2xl md:text-3xl leading-snug md:leading-normal text-center max-w-[570px]">
          Se inscreva na newsletter do roteirizando para receber dicas de viagem{" "}
          <span className="underline text-yellow-300">semanalmente</span>
        </h1>
        <form
          className="flex flex-col gap-4 w-full items-center"
          action={formAction}
        >
          <div className="flex flex-col gap-2 w-full md:w-[412px] items-start">
            <label
              htmlFor="email"
              className="font-sans text-sm font-semibold text-neutral-50"
            >
              Seu melhor e-mail
            </label>
            <input
              type="email"
              placeholder="querodicas@exemplo.com"
              name="email"
              id="email"
              required
              className="rounded-lg px-4 py-2 w-full bg-neutral-100 text-neutral-500 font-sans font-normal text-sm h-12"
            />
          </div>
          <Button
            type="button"
            submit
            variant="primary"
            className="w-full md:w-[412px]"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};
