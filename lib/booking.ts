import { z } from "zod";

export const clinicWhatsAppNumber = "919660755406";

export const treatmentOptions = [
  "Hair transplant consultation",
  "Hair regrowth assessment",
  "PRP treatment",
  "Hairline restoration",
  "Not sure / need guidance",
] as const;

export const bookingSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  age: z
    .string()
    .trim()
    .regex(/^\d{1,3}$/, "Enter your age in years.")
    .refine((value) => Number(value) >= 1 && Number(value) <= 120, "Enter an age between 1 and 120."),
  location: z.string().trim().min(2, "Enter your city or area.").max(80, "Keep the location under 80 characters."),
  treatment: z.enum(treatmentOptions, { message: "Choose a treatment interest." }),
});

export type BookingData = z.infer<typeof bookingSchema>;

export function formatBookingMessage(data: BookingData) {
  return [
    "Hello HRG Hair Regrowth Clinic,",
    "",
    "I would like to request a consultation.",
    "",
    `Name: ${data.fullName}`,
    `Age: ${data.age}`,
    `Location: ${data.location}`,
    `Treatment Interest: ${data.treatment}`,
    "",
    "Please let me know the next steps for a consultation.",
    "",
    "Thank you.",
  ].join("\n");
}

export function buildWhatsAppUrl(number: string, data: BookingData) {
  if (!/^\d{8,15}$/.test(number)) return null;
  const params = new URLSearchParams({ text: formatBookingMessage(data) });
  return `https://wa.me/${number}?${params.toString()}`;
}
