"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  bookingSchema,
  buildWhatsAppUrl,
  clinicWhatsAppNumber,
  treatmentOptions,
  type BookingData,
} from "@/lib/booking";

const emptyValues: BookingData = {
  fullName: "",
  age: "",
  location: "",
  treatment: undefined as unknown as BookingData["treatment"],
};

export function InlineBooking() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: emptyValues,
    mode: "onBlur",
  });

  const submit = (data: BookingData) => {
    const number = process.env.NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER || clinicWhatsAppNumber;
    const url = buildWhatsAppUrl(number, data);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="assessment-form" className="inline-booking section-pad" aria-labelledby="inline-booking-title">
      <div className="inline-booking-intro">
        <p className="section-index">Private WhatsApp assessment</p>
        <h2 id="inline-booking-title">Start with four<br /><em>simple details.</em></h2>
        <p>Tell HRG what you are looking for. The site prepares a message for you to review before anything is sent.</p>
        <ul>
          <li><Check aria-hidden="true" /> No medical history or photographs requested</li>
          <li><Check aria-hidden="true" /> Your entries stay in this browser</li>
          <li><Check aria-hidden="true" /> You choose whether to send the message</li>
        </ul>
      </div>

      <form className="inline-booking-form" onSubmit={handleSubmit(submit)} noValidate>
        <div className="form-grid">
          <InlineField label="Full name" error={errors.fullName?.message}>
            <input autoComplete="name" {...register("fullName")} aria-invalid={!!errors.fullName} />
          </InlineField>
          <InlineField label="Age" hint="In years" error={errors.age?.message}>
            <input type="number" inputMode="numeric" min="1" max="120" {...register("age")} aria-invalid={!!errors.age} />
          </InlineField>
          <InlineField label="Location" hint="City or area" error={errors.location?.message} span>
            <input autoComplete="address-level2" {...register("location")} aria-invalid={!!errors.location} />
          </InlineField>
          <InlineField label="Treatment interest" error={errors.treatment?.message} span>
            <select defaultValue="" {...register("treatment")} aria-invalid={!!errors.treatment}>
              <option value="" disabled>Select an option</option>
              {treatmentOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </InlineField>
        </div>
        <p className="consent-copy">These details only prepare your inquiry and are not stored by this website.</p>
        <button className="button button-lead inline-submit" type="submit" disabled={isSubmitting}>
          <MessageCircle aria-hidden="true" />
          {isSubmitting ? "Preparing message…" : "Continue to WhatsApp"}
        </button>
      </form>
    </section>
  );
}

function InlineField({
  label,
  hint,
  error,
  span = false,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  span?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`field ${span ? "field-span" : ""}`}>
      <span>{label}</span>
      {children}
      <small className={error ? "field-error" : undefined} aria-live="polite">
        {error ?? hint ?? "\u00A0"}
      </small>
    </label>
  );
}
