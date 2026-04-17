import { z } from "zod"

import { CONTACT_REASONS, type ContactReason } from "@/lib/contact-reasons"

const CONTACT_REASON_SET = new Set<string>(CONTACT_REASONS)

export const CONTACT_NAME_MIN_LENGTH = 2
export const CONTACT_NAME_MAX_LENGTH = 80
export const CONTACT_EMAIL_MAX_LENGTH = 320
export const CONTACT_MESSAGE_MIN_LENGTH = 10
export const CONTACT_MESSAGE_MAX_LENGTH = 2500

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(CONTACT_NAME_MIN_LENGTH, "Enter your full name.")
    .max(CONTACT_NAME_MAX_LENGTH, `Name must be ${CONTACT_NAME_MAX_LENGTH} characters or fewer.`),
  email: z
    .string()
    .trim()
    .max(CONTACT_EMAIL_MAX_LENGTH, `Email must be ${CONTACT_EMAIL_MAX_LENGTH} characters or fewer.`)
    .email("Enter a valid email address."),
  reason: z
    .string()
    .trim()
    .min(1, "Select a reason for reaching out.")
    .refine((value) => CONTACT_REASON_SET.has(value), {
      message: "Select a valid reason for reaching out.",
    }),
  message: z
    .string()
    .trim()
    .min(
      CONTACT_MESSAGE_MIN_LENGTH,
      `Message should be at least ${CONTACT_MESSAGE_MIN_LENGTH} characters.`,
    )
    .max(
      CONTACT_MESSAGE_MAX_LENGTH,
      `Message must be ${CONTACT_MESSAGE_MAX_LENGTH} characters or fewer.`,
    ),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export type NormalizedContactFormValues = {
  name: string
  email: string
  reason: ContactReason
  message: string
}

export function normalizeContactFormValues(
  values: ContactFormValues,
): NormalizedContactFormValues {
  return {
    name: normalizeSingleLine(values.name),
    email: normalizeSingleLine(values.email).toLowerCase(),
    reason: normalizeSingleLine(values.reason) as ContactReason,
    message: normalizeMultiline(values.message),
  }
}

function normalizeSingleLine(value: string) {
  return value.replace(/\s+/g, " ").trim()
}

function normalizeMultiline(value: string) {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\u0000/g, "")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}
