"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

type FormType = "Sign-in" | "Sign-up";

const authFormSchema = (formType: FormType) => {
  z.object({
    email: z.string().email(),
    fullName:
      formType === "Sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1>{type === "Sign-in" ? "Sign-in" : "Sign-up"}</h1>
          {type === "Sign-up" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Full Name"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Full Name"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="form-submit-button"
          >
            {type === "Sign-in" ? "Sign-in" : "Sign-up"}

            {isLoading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                className="ml-2 animate-spin "
              />
            )}
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="body-2 flex justify-center">
            <p className="text-light-100">
              {type === "Sign-in"
                ? "Don't Have An Account?"
                : "Already have an account"}
            </p>
            <Link
              href={type === "Sign-in" ? "/sign-up" : "/sign-in"}
              className="ml-1 font-medium text-brand"
            >
              {type === "Sign-in" ? "Sign-up" : "Sign-in"}
            </Link>
          </div>
        </form>
      </Form>
      {/* OTP VERIFICATION */}
    </>
  );
};

export default AuthForm;
