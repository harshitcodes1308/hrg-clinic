"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsAppLink } from "@/lib/site";

const STORAGE_KEY = "hrg-whatsapp-popup-closed";

/** Opens 5 seconds after the page loads, once per browser session. */
export function WhatsAppPopup({ suppressed }: { suppressed: boolean }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (dismissed) return;
    const timer = window.setTimeout(() => setOpen(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  const visible = open && !suppressed;

  useEffect(() => {
    if (!visible) return;
    requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="modal-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => event.currentTarget === event.target && close()}
        >
          <motion.div
            className="wa-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-popup-title"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <button ref={closeRef} className="wa-popup-close" type="button" onClick={close} aria-label="Close and continue browsing">
              <X aria-hidden="true" />
            </button>
            <div className="wa-popup-top">
              <Image src="/images/hrg-logo-transparent.png" alt="HRG Hair Regrowth Clinic" width={1448} height={1086} />
            </div>
            <div className="wa-popup-body">
              <p className="wa-popup-kicker">Book Your Consultation Today</p>
              <h2 id="wa-popup-title">Book an Appointment on WhatsApp</h2>
              <p>Get a free hair assessment from the HRG team. Send us a message and we&apos;ll reply with available slots.</p>
              <a className="btn btn-wa" href={whatsAppLink()} target="_blank" rel="noopener noreferrer" onClick={close}>
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <p className="wa-popup-note">Limited Slots Available This Month!</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
