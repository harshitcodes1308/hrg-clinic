"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { WhatsAppIcon } from "@/components/icons";
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

export function InlineBooking({ id, title = "Get Free Hair Assessment" }: { id: string; title?: string }) {
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
    <section id={id} className="section form-section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="form-card">
          <p className="form-kicker">Book Your Consultation Today</p>
          <h2 id={`${id}-title`}>{title}</h2>
          <p className="form-lede">Start your journey towards a new you.</p>
          <p className="form-script">New You, Through You</p>
          <form onSubmit={handleSubmit(submit)} noValidate>
            <div className="form-grid">
              <Field label="Name" error={errors.fullName?.message}>
                <input autoComplete="name" {...register("fullName")} aria-invalid={!!errors.fullName} />
              </Field>
              <Field label="Age" error={errors.age?.message}>
                <input type="number" inputMode="numeric" min="1" max="120" {...register("age")} aria-invalid={!!errors.age} />
              </Field>
              <Field label="Location" error={errors.location?.message}>
                <input autoComplete="address-level2" placeholder="City or area" {...register("location")} aria-invalid={!!errors.location} />
              </Field>
              <Field label="Treatment Interest" error={errors.treatment?.message}>
                <select defaultValue="" {...register("treatment")} aria-invalid={!!errors.treatment}>
                  <option value="" disabled>Select an option</option>
                  {treatmentOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </Field>
            </div>
            <button className="btn btn-block" type="submit" disabled={isSubmitting}>
              <WhatsAppIcon /> {isSubmitting ? "Preparing message…" : "Get Assessment on WhatsApp"}
            </button>
            <p className="form-consent">By submitting, you agree to be contacted via call/WhatsApp by HRG Hair Regrowth Clinic.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
      {error && <small className="field-error" aria-live="polite">{error}</small>}
    </label>
  );
}
