"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  bookingSchema,
  buildWhatsAppUrl,
  clinicWhatsAppNumber,
  treatmentOptions,
  type BookingData,
} from "@/lib/booking";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

const emptyValues: BookingData = {
  fullName: "",
  age: "",
  location: "",
  treatment: undefined as unknown as BookingData["treatment"],
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const [configurationError, setConfigurationError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: emptyValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (!open) return;
    const prior = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const dialog = closeRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      prior?.focus();
    };
  }, [open, onClose]);

  const submit = (data: BookingData) => {
    const number = process.env.NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER || clinicWhatsAppNumber;
    const url = buildWhatsAppUrl(number, data);
    if (!url) {
      setConfigurationError(true);
      return;
    }
    setConfigurationError(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.16 : 0.24 }}
          onMouseDown={(event) => event.currentTarget === event.target && onClose()}
        >
          <motion.div
            className="booking-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: "easeOut" }}
          >
            <button ref={closeRef} className="close-button" type="button" onClick={onClose} aria-label="Close consultation form">
              <X aria-hidden="true" />
            </button>
            <div className="dialog-intro">
              <p>WhatsApp consultation</p>
              <h2 id="booking-title">Tell us what you’re looking for.</h2>
              <p>Four details prepare your inquiry. Nothing is sent until you review it in WhatsApp.</p>
              <ul>
                <li><Check aria-hidden="true" /> No medical history requested</li>
                <li><Check aria-hidden="true" /> Review before sending</li>
              </ul>
            </div>

            <div className="dialog-form">
              <form onSubmit={handleSubmit(submit)} noValidate>
              <div className="form-grid">
                <Field label="Full name" error={errors.fullName?.message}>
                  <input autoComplete="name" {...register("fullName")} aria-invalid={!!errors.fullName} />
                </Field>
                <Field label="Age" hint="In years" error={errors.age?.message}>
                  <input type="number" inputMode="numeric" min="1" max="120" {...register("age")} aria-invalid={!!errors.age} />
                </Field>
                <Field label="Location" hint="City or area" error={errors.location?.message} span>
                  <input autoComplete="address-level2" {...register("location")} aria-invalid={!!errors.location} />
                </Field>
                <Field label="Treatment interest" error={errors.treatment?.message} span>
                  <select defaultValue="" {...register("treatment")} aria-invalid={!!errors.treatment}>
                    <option value="" disabled>Select an option</option>
                    {treatmentOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </Field>
              </div>

              <p className="consent-copy">These details are used only to prepare your WhatsApp inquiry. They are not stored by this website.</p>
              {configurationError && (
                <div className="configuration-error" role="alert">
                  Demo setup needed: add <code>NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER</code> to <code>.env.local</code>, then restart the site. Your form entries remain here.
                </div>
              )}
              <div className="form-actions">
                <button className="text-button" type="button" onClick={onClose}>Cancel</button>
                <button className="btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Preparing message…" : "Continue to WhatsApp"}
                </button>
              </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
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
