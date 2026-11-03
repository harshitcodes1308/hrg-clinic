"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  bookingSchema,
  buildWhatsAppUrl,
  getTodayInIndia,
  timeOptions,
  treatmentOptions,
  type BookingData,
} from "@/lib/booking";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

const emptyValues: BookingData = {
  fullName: "",
  phone: "",
  treatment: undefined as unknown as BookingData["treatment"],
  date: "",
  time: undefined as unknown as BookingData["time"],
  message: "",
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
    const number = process.env.NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER ?? "";
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
            <div className="dialog-heading">
              <div>
                <p className="eyebrow">Consultation request</p>
                <h2 id="booking-title">Begin with a conversation.</h2>
                <p>Share your preferences. You’ll review the prepared message in WhatsApp before sending it.</p>
              </div>
              <button ref={closeRef} className="close-button" type="button" onClick={onClose} aria-label="Close consultation form">
                <X aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit(submit)} noValidate>
              <div className="form-grid">
                <Field label="Full name" error={errors.fullName?.message} span>
                  <input autoComplete="name" {...register("fullName")} aria-invalid={!!errors.fullName} />
                </Field>
                <Field label="Phone number" hint="Indian mobile number, with or without +91" error={errors.phone?.message}>
                  <input type="tel" inputMode="tel" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
                </Field>
                <Field label="Treatment interest" error={errors.treatment?.message}>
                  <select defaultValue="" {...register("treatment")} aria-invalid={!!errors.treatment}>
                    <option value="" disabled>Select an option</option>
                    {treatmentOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </Field>
                <Field label="Preferred date" error={errors.date?.message}>
                  <input type="date" min={getTodayInIndia()} {...register("date")} aria-invalid={!!errors.date} />
                </Field>
                <Field label="Preferred time" error={errors.time?.message}>
                  <select defaultValue="" {...register("time")} aria-invalid={!!errors.time}>
                    <option value="" disabled>Select a time</option>
                    {timeOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </Field>
                <Field label="Additional message" hint="Optional, up to 500 characters" error={errors.message?.message} span>
                  <textarea rows={3} {...register("message")} aria-invalid={!!errors.message} />
                </Field>
              </div>

              <p className="consent-copy">Your entries are used only to prepare this WhatsApp inquiry. This is a request, not a confirmed appointment.</p>
              {configurationError && (
                <div className="configuration-error" role="alert">
                  Demo setup needed: add <code>NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER</code> to <code>.env.local</code>, then restart the site. Your form entries remain here.
                </div>
              )}
              <div className="form-actions">
                <button className="text-button" type="button" onClick={onClose}>Cancel</button>
                <button className="button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Preparing message…" : "Continue to WhatsApp"}
                </button>
              </div>
            </form>
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
      {error ? <small className="field-error">{error}</small> : hint ? <small>{hint}</small> : null}
    </label>
  );
}
