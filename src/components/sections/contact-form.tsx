"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

import { AmbientOrb } from "@/components/decorative/ambient-orb"
import { LineGrid } from "@/components/decorative/line-grid"
import { Button } from "@/components/ui/button"
import {
  CONTACT_EMAIL_MAX_LENGTH,
  CONTACT_MESSAGE_MAX_LENGTH,
  CONTACT_MESSAGE_MIN_LENGTH,
  CONTACT_NAME_MAX_LENGTH,
  CONTACT_NAME_MIN_LENGTH,
  type ContactFormValues,
  contactFormSchema,
} from "@/lib/contact-schema"
import { buildContactGmailComposeUrl } from "@/lib/contact-gmail"
import { CONTACT_REASONS } from "@/lib/contact-reasons"

type SubmissionState =
  | { type: "idle" }
  | { type: "success"; message: string; detail: string }
  | { type: "error"; message: string; detail?: string }

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  reason: "",
  message: "",
}

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ type: "idle" })
  const statusRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: true,
  })

  useEffect(() => {
    if (submissionState.type !== "idle") {
      statusRef.current?.focus()
    }
  }, [submissionState])

  const clearStatus = () => {
    setSubmissionState((currentState) =>
      currentState.type === "idle" ? currentState : { type: "idle" },
    )
  }

  const onSubmit = handleSubmit((values) => {
    clearStatus()

    try {
      const gmailComposeUrl = buildContactGmailComposeUrl(values)
      const gmailWindow = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer")

      if (!gmailWindow) {
        setSubmissionState({
          type: "error",
          message: "We could not open your Gmail draft.",
          detail: "Please allow pop-ups and try again, or email the founder directly.",
        })
        return
      }

      setSubmissionState({
        type: "success",
        message: "Your Gmail draft should open in a new tab.",
        detail: "Review the prefilled draft in Gmail, then send it directly to the founder.",
      })
    } catch {
      setSubmissionState({
        type: "error",
        message: "We could not open your Gmail draft.",
        detail: "Please email the founder directly at founder@gaateh.com.",
      })
    }
  })

  return (
    <div className="surface-panel relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <LineGrid className="text-[oklch(0.39_0.04_42)] opacity-25" />
      <AmbientOrb tone="earth" className="-left-8 bottom-0 size-24 opacity-75" />

      <form
        className="relative space-y-5"
        aria-describedby="contact-form-note"
        noValidate
        onSubmit={onSubmit}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              autoComplete="name"
              maxLength={CONTACT_NAME_MAX_LENGTH}
              minLength={CONTACT_NAME_MIN_LENGTH}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className="field-control"
              {...register("name", { onChange: clearStatus })}
            />
            <FieldError id="contact-name-error" message={errors.name?.message} />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              maxLength={CONTACT_EMAIL_MAX_LENGTH}
              placeholder="you@example.com"
              spellCheck={false}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className="field-control"
              {...register("email", { onChange: clearStatus })}
            />
            <FieldError id="contact-email-error" message={errors.email?.message} />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-medium text-foreground">
            Reason for reaching out
          </label>
          <select
            id="reason"
            aria-invalid={Boolean(errors.reason)}
            aria-describedby={errors.reason ? "contact-reason-error" : undefined}
            className="field-control"
            {...register("reason", { onChange: clearStatus })}
          >
            <option value="">Select a reason</option>
            {CONTACT_REASONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="contact-reason-error" message={errors.reason?.message} />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            minLength={CONTACT_MESSAGE_MIN_LENGTH}
            maxLength={CONTACT_MESSAGE_MAX_LENGTH}
            placeholder="Share context about your interest, role, or conversation."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="field-control min-h-40 resize-none"
            {...register("message", { onChange: clearStatus })}
          />
          <FieldError id="contact-message-error" message={errors.message?.message} />
        </div>

        {submissionState.type !== "idle" ? (
          <div
            ref={statusRef}
            tabIndex={-1}
            aria-live="polite"
            className={`rounded-[1.25rem] border px-4 py-3 outline-none ${submissionState.type === "success"
                ? "border-emerald-500/18 bg-emerald-500/5 text-foreground"
                : "border-destructive/20 bg-destructive/5 text-foreground"
              }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full ${submissionState.type === "success"
                    ? "bg-emerald-500/10 text-emerald-600"
                    : "bg-destructive/10 text-destructive"
                  }`}
              >
                {submissionState.type === "success" ? (
                  <CheckCircle2 className="size-4.5" />
                ) : (
                  <AlertCircle className="size-4.5" />
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">{submissionState.message}</p>
                {submissionState.detail ? (
                  <p className="text-sm leading-6 text-muted-foreground">
                    {submissionState.detail}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p id="contact-form-note" className="max-w-xl text-sm leading-6 text-muted-foreground">
            Submitting opens Gmail with a prefilled draft addressed to the founder.
          </p>
          <Button type="submit" size="lg" className="btn-shimmer h-12 min-w-[11.75rem] px-6">
            <Send className="size-4" />
            Open Gmail draft
          </Button>
        </div>
      </form>
    </div>
  )
}

function FieldError({
  id,
  message,
}: {
  id: string
  message?: string
}) {
  if (!message) {
    return null
  }

  return (
    <p id={id} className="text-sm leading-6 text-destructive">
      {message}
    </p>
  )
}
