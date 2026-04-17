import { type ContactFormValues, normalizeContactFormValues } from "@/lib/contact-schema"
import { siteConfig } from "@/lib/site"

export function buildContactGmailComposeUrl(values: ContactFormValues) {
  const normalized = normalizeContactFormValues(values)
  const subject = `Tribal Match Inquiry \u2014 ${normalized.reason}`
  const body = [
    `Name: ${normalized.name}`,
    `Email: ${normalized.email}`,
    `Reason: ${normalized.reason}`,
    "",
    "Message:",
    normalized.message,
  ].join("\n")

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.founderEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
