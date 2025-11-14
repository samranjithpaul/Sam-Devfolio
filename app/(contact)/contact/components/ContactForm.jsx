"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmitHandler = async () => {
    if (!formRef.current) {
      console.error("Form ref is null");
      toast.error("Form error — please reload the page.");
      return;
    }

    try {
      // Debug environment variables (optional)
      console.log("SERVICE:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log("TEMPLATE:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you for your message!");
      reset();
    } catch (err) {
      console.error("EMAILJS RAW ERROR >>>", err);
      if (err?.text) console.error("EmailJS Error Text:", err.text);
      if (err?.status) console.error("EmailJS Status:", err.status);

      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmitHandler)}
      className="space-y-6"
    >
      <div className="space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground block">
            Your Name
          </label>
          <Input
            {...register("from_name", { required: "Name is required" })}
            name="from_name"
            type="text"
            placeholder="e.g. Sam"
            className="rounded-lg border-primary/20 w-full"
          />
          {errors.from_name && (
            <span className="text-xs text-red-500">
              {errors.from_name.message}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground block">
            Email
          </label>
          <Input
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            name="reply_to"
            type="email"
            placeholder="sam@example.com"
            className="rounded-lg border-primary/20 w-full"
          />
          {errors.reply_to && (
            <span className="text-xs text-red-500">
              {errors.reply_to.message}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground block">
            Message
          </label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            name="message"
            placeholder="Write your message here..."
            className="rounded-lg border-primary/20 min-h-[150px] w-full resize-y"
          />
          {errors.message && (
            <span className="text-xs text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl py-6 text-base font-semibold mt-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
