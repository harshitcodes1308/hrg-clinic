import { z } from "zod";

export const treatmentOptions = [
  "Hair Transplant Consultation",
  "Hair Regrowth Assessment",
  "PRP Treatment",
  "Not Sure / Need Guidance",
] as const;

export const timeOptions = ["Morning", "Afternoon", "Evening"] as const;

const indianPhone = /^(?:(?:\+|00)91[ -]?)?[6-9]\d{9}$/;

export const bookingSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(indianPhone, "Enter a valid Indian mobile number, with or without +91."),
  treatment: z.enum(treatmentOptions, { message: "Choose a treatment interest." }),
  date: z
    .string()
    .min(1, "Choose a preferred date.")
    .refine((value) => value >= getTodayInIndia(), "Choose today or a future date."),
  time: z.enum(timeOptions, { message: "Choose a preferred time." }),
  message: z.string().trim().max(500, "Keep the message under 500 characters."),
});

export type BookingData = z.infer<typeof bookingSchema>;

export function getTodayInIndia() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function formatBookingMessage(data: BookingData) {
  const readableDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(`${data.date}T12:00:00+05:30`));

  return [
    "Hello HRG Hair Regrowth Clinic,",
    "",
    "I would like to request a consultation.",
    "",
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Treatment Interest: ${data.treatment}`,
    `Preferred Date: ${readableDate}`,
    `Preferred Time: ${data.time}`,
    `Additional Message: ${data.message || "Not provided"}`,
    "",
    "Please let me know the available appointment slots.",
    "",
    "Thank you.",
  ].join("\n");
}

export function buildWhatsAppUrl(number: string, data: BookingData) {
  if (!/^\d{8,15}$/.test(number)) return null;
  const params = new URLSearchParams({ text: formatBookingMessage(data) });
  return `https://wa.me/${number}?${params.toString()}`;
}
