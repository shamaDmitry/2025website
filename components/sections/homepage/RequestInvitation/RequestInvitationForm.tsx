"use client";

import { Button } from "@/components/controls/Button";
import { FormLabel } from "@/components/controls/FormLabel";
import { Input } from "@/components/controls/Input";
import { TextArea } from "@/components/controls/TextArea";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";
import { Spinner } from "@/components/shared/Spinner";
import { useFormspark } from "@formspark/use-formspark";
import Turnstile, { useTurnstile } from "react-turnstile";
import { useRef, useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { validationRules } from "./validationRules";

const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID!;
const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_KEY!;

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  "cf-turnstile-response": string;
};

export const RequestInvitationForm = () => {
  const turnstile = useTurnstile();

  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [submit] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setError(null);
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    const formData = new FormData(formRef.current);
    const token = formData.get("cf-turnstile-response");

    if (turnstileStatus !== "success") {
      setError("Please verify you are not a robot");
      setIsLoading(false);
      return;
    }

    try {
      const response = await submit({
        ...data,
        "cf-turnstile-response": token,
      });

      if (response) {
        toast.success(`Successfully sent!`, { duration: 5000 });

        reset();
        turnstile.reset();
        setTurnstileStatus("required");
      } else {
        setError("Invalid data. Please try again.");
      }
    } catch (err) {
      console.log("err", err);

      reset();
      turnstile.reset();
      setTurnstileStatus("error");
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 mb-2">
          <div className="flex-1">
            <FormLabel htmlFor="firstName" label="First name" required />

            <Input
              {...register("firstName", validationRules.firstName)}
              placeholder="First name"
              id="firstName"
              error={errors.firstName as FieldError}
            />
          </div>

          <div className="flex-1">
            <FormLabel htmlFor="lastName" label="Last name" required />

            <Input
              placeholder="Last name"
              id="lastName"
              {...register("lastName", { ...validationRules.lastName })}
              error={errors.lastName as FieldError}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-10 mb-2">
          <div className="flex-1">
            <FormLabel htmlFor="email" label="Email address" required />

            <Input
              placeholder="Email address"
              id="email"
              {...register("email", { ...validationRules.email })}
              error={errors.email as FieldError}
            />
          </div>

          <div className="flex-1">
            <FormLabel htmlFor="phone" label="Phone number" required />

            <Input
              placeholder="Phone number"
              id="phone"
              {...register("phone", { ...validationRules.phone })}
              error={errors.phone as FieldError}
            />
          </div>
        </div>

        <div className="flex gap-10 mb-5">
          <div className="flex-1">
            <FormLabel htmlFor="message" label="Message" required />

            <TextArea
              id="message"
              {...register("message", { ...validationRules.message })}
              error={errors.message as FieldError}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <Button
            disabled={isLoading}
            type="submit"
            size="lg"
            className="text-white gap-7 h-[65px] order-last lg:order-first"
          >
            <span>REQUEST INVITATION</span>

            {isLoading ? <Spinner /> : <NextArrowIcon className="size-5" />}
          </Button>

          <div className="order-first lg:order-last">
            <Turnstile
              sitekey={TURNSTILE_KEY}
              retry="auto"
              refreshExpired="auto"
              onError={() => {
                setTurnstileStatus("error");

                setError("Security check failed. Please try again.");
              }}
              onExpire={() => {
                setTurnstileStatus("expired");

                setError("Security check expired. Please verify again.");
              }}
              onLoad={() => {
                setTurnstileStatus("required");

                setError(null);
              }}
              onVerify={(token) => {
                console.log("token", token);

                setTurnstileStatus("success");
                setError(null);
              }}
            />

            {error && (
              <div
                className="flex items-center gap-2 text-red-500 text-sm mb-2"
                aria-live="polite"
              >
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
