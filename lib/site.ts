import { clinicWhatsAppNumber } from "@/lib/booking";

export const clinic = {
  name: "HRG Hair Regrowth Clinic",
  short: "HRG",
  city: "Delhi",
  address: "Madhuban Chowk, Rohini Sector 8, Delhi",
  phoneDisplay: "+91 96607 55406",
  phoneHref: `tel:+${clinicWhatsAppNumber}`,
  facebook: "https://www.facebook.com/share/1ECs3eTbKe/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/hrg_hair_regrowth_clinic",
  mapEmbed:
    "https://maps.google.com/maps?q=Madhuban%20Chowk%2C%20Rohini%20Sector%208%2C%20Delhi&t=m&z=14&output=embed&iwloc=near",
};

/** Headline numbers — update these with the clinic's confirmed figures. */
export const stats = [
  { value: 5000, suffix: "+", label: "Happy Patients", icon: "smile" },
  { value: 10, suffix: "+", label: "Years of Expertise", icon: "building" },
  { value: 500000, suffix: "+", label: "Grafts Transplanted", icon: "clipboard" },
  { value: 4.9, suffix: "", label: "Google Rating", icon: "star", decimals: 1 },
] as const;

export function whatsAppLink(message = "Hello HRG Hair Regrowth Clinic, I would like to book an appointment for a hair consultation.") {
  const number = process.env.NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER || clinicWhatsAppNumber;
  return `https://wa.me/${number}?${new URLSearchParams({ text: message }).toString()}`;
}
