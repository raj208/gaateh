export const CONTACT_REASONS = [
  "Investor inquiry",
  "Collaboration",
  "Hiring / joining the team",
  "Product interest",
  "Media / partnership",
  "Other",
] as const

export type ContactReason = (typeof CONTACT_REASONS)[number]
