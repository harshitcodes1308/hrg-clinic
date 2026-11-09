"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { CaseStudies } from "@/components/case-studies";
import { Faq } from "@/components/faq";
import { Header } from "@/components/header";
import { InlineBooking } from "@/components/inline-booking";

const treatments = [
  {
    title: "Hair transplant consultation",
    copy: "Discuss suitability, expectations, and questions before any recommendation.",
  },
  {
    title: "Hair regrowth assessment",
    copy: "Look more closely at the pattern and context of hair loss.",
  },
  {
    title: "PRP treatment",
    copy: "A provisional option that must follow an individual assessment.",
  },
  {
    title: "Hairline restoration",
    copy: "Consider hairline concerns, proportions, and appropriate possibilities.",
  },
];

const steps = [
  ["01", "Tell us what is changing", "Tell the team what you have noticed, what concerns you, and the outcome you hope to understand."],
  ["02", "Understand the pattern", "Your hair pattern, scalp, donor area, goals, and relevant context shape the conversation."],
  ["03", "Build the right plan", "Potential routes are explained with realistic expectations and the reasoning behind each one."],
  ["04", "Prepare with clarity", "If you choose to proceed, you should understand preparation, recovery, aftercare, and who to contact."],
  ["05", "Stay supported", "Progress is individual. Follow-up creates space to review recovery, questions, and the next appropriate step."],
] as const;

const costFactors = [
  ["01", "Area and pattern", "The extent and pattern of hair loss influence what may be appropriate."],
  ["02", "Donor availability", "The donor area and individual hair characteristics need careful assessment."],
  ["03", "Treatment route", "Different non-surgical and procedural routes involve different plans."],
  ["04", "Care and follow-up", "Preparation, aftercare, and any staged sessions should be part of the estimate."],
] as const;

const consultationChecks = [
  ["Pattern", "What the visible pattern may suggest and what still needs clinical review."],
  ["Scalp and donor area", "The condition of the scalp and the hair available for a potential procedure."],
  ["Goals", "The change you want, what may be realistic, and where expectations need alignment."],
  ["Next steps", "Options, trade-offs, recovery, and the questions to answer before deciding."],
] as const;

export function ClinicHomepage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <>
      <div id="top" className="page-shell">
        <Header onBook={openBooking} />
        <main>
          <section className="hero" aria-labelledby="hero-title">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: "easeOut" }}
            >
              <h1 id="hero-title">Confidence,<br /><em>restored naturally.</em></h1>
              <p>Personalised hair restoration, guided by thoughtful care and a commitment to natural-looking outcomes.</p>
              <div className="hero-actions">
                <button className="button button-lead" type="button" onClick={openBooking}><MessageCircle aria-hidden="true" /> Book on WhatsApp</button>
                <a className="arrow-link" href="#approach">Explore our approach <ArrowDownRight aria-hidden="true" /></a>
              </div>
              <div className="hero-assurance" aria-label="Consultation request details">
                <span>Private inquiry</span>
                <span>Review before sending</span>
                <span>Clinic replies in WhatsApp</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-image-wrap"
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.56, ease: "easeOut" }}
            >
              <Image
                src="/images/hrg-hero.png"
                alt="A clinician thoughtfully assessing a client's hairline during a consultation"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <p className="image-note">Consultation-led care</p>
            </motion.div>
          </section>

          <CaseStudies onBook={openBooking} />

          <section id="about" className="brand-statement section-pad" aria-labelledby="about-title">
            <div className="brand-copy">
              <p className="section-index">Our point of view</p>
              <h2 id="about-title">Hair restoration should feel <em>considered,</em> never rushed.</h2>
              <p>Questions come first. Expectations stay honest. The person remains at the centre of every decision.</p>
            </div>
            <div className="brand-visuals">
              <div className="brand-interior">
                <Image src="/images/hrg-clinic-interior.png" alt="A quiet consultation room prepared for an individual assessment" fill sizes="(max-width: 760px) 100vw, 54vw" />
              </div>
              <div className="brand-patient">
                <Image src="/images/hrg-woman-assessment.png" alt="A woman receiving a careful, non-invasive hair assessment" fill sizes="(max-width: 760px) 48vw, 24vw" />
              </div>
              <p>A space designed for unhurried conversations.</p>
            </div>
          </section>

          <section className="cost-guide section-pad" aria-labelledby="cost-title">
            <div className="cost-heading">
              <p className="section-index">Understanding treatment cost</p>
              <h2 id="cost-title">A useful estimate starts with <em>your assessment.</em></h2>
              <p>There is no honest one-price answer without understanding the person and the plan. These are the main factors a consultation should clarify.</p>
            </div>
            <ol className="cost-grid">
              {costFactors.map(([number, title, copy]) => (
                <li key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
            <div className="cost-action">
              <p>Ask for a recommendation and estimate that explains what is included.</p>
              <button className="button button-lead" type="button" onClick={openBooking}><MessageCircle aria-hidden="true" /> Request an assessment</button>
            </div>
          </section>

          <section id="treatments" className="treatments section-pad" aria-labelledby="treatments-title">
            <div className="section-heading">
              <h2 id="treatments-title">Possible paths,<br /><em>properly considered.</em></h2>
              <div>
                <p>These categories are provisional for the client demo. HRG’s clinical team must confirm the final treatment list and medically reviewed copy before launch.</p>
                <span className="draft-marker">Demo content · confirmation required</span>
              </div>
            </div>

            <div className="treatment-editorial">
              <div className="treatment-image">
                <div className="treatment-image-frame">
                  <Image
                    src="/images/hrg-assessment.png"
                    alt="A respectful close assessment of a client's hair and scalp"
                    fill
                    sizes="(max-width: 800px) 100vw, 45vw"
                  />
                </div>
              </div>
              <div className="treatment-list">
                {treatments.map((treatment, index) => (
                  <article key={treatment.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{treatment.title}</h3>
                      <p>{treatment.copy}</p>
                    </div>
                    <button className="treatment-discuss" type="button" onClick={openBooking} aria-label={`Discuss ${treatment.title}`}>Discuss <ArrowRight aria-hidden="true" /></button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="assessment-story" aria-labelledby="assessment-title">
            <div className="assessment-photo">
              <Image src="/images/hrg-scalp-assessment.png" alt="A clinician documenting a non-invasive scalp assessment" fill sizes="(max-width: 760px) 100vw, 56vw" />
            </div>
            <div className="assessment-copy section-pad">
              <p className="section-index">Assessment before recommendation</p>
              <h2 id="assessment-title">Every good plan<br /><em>starts with detail.</em></h2>
              <p>Your hair pattern, scalp health, goals, and questions all matter. The assessment turns those details into a conversation about options that may genuinely suit you.</p>
              <a className="arrow-link" href="#approach">See how a consultation works <ArrowRight aria-hidden="true" /></a>
            </div>
          </section>

          <section className="consultation-standard section-pad" aria-labelledby="consultation-standard-title">
            <div className="consultation-standard-heading">
              <p className="section-index">What the consultation should clarify</p>
              <h2 id="consultation-standard-title">Know what is being considered, <em>and why.</em></h2>
              <p>A strong consultation makes the reasoning visible. It should leave you better informed, even if the right next step is to wait or explore another route.</p>
            </div>
            <div className="consultation-checks">
              {consultationChecks.map(([title, copy], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="approach" className="approach section-pad" aria-labelledby="approach-title">
            <div className="approach-intro">
              <h2 id="approach-title">From first concern<br /><em>to a clear next step.</em></h2>
              <p>Each stage keeps the reasoning, options, and next step easy to understand.</p>
            </div>
            <ol className="steps">
              {steps.map(([number, title, copy]) => (
                <li key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="philosophy" aria-labelledby="philosophy-title">
            <div className="philosophy-image">
              <Image
                src="/images/hrg-consultation.png"
                alt="A clinician and client discussing a treatment plan together"
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </div>
            <div className="philosophy-copy">
              <p className="section-index">Clinic philosophy</p>
              <h2 id="philosophy-title">Care is as much about <em>clarity</em> as treatment.</h2>
              <p>Clear conversations should cover what may be suitable, what may not, and what a person can reasonably expect.</p>
              <button className="arrow-link light-link" type="button" onClick={openBooking}>Start a conversation <ArrowRight aria-hidden="true" /></button>
            </div>
          </section>

          <section className="faq section-pad" aria-labelledby="faq-title">
            <div className="faq-heading">
              <h2 id="faq-title">Good decisions begin with <em>good questions.</em></h2>
              <p>General information only. A clinician should answer questions about individual suitability, risks, recovery, and outcomes.</p>
            </div>
            <Faq />
          </section>

          <InlineBooking />

        </main>

        <footer id="contact" className="footer">
          <div className="footer-conversation">
            <div>
              <p className="section-index">A simple first step</p>
              <h2 id="cta-title">Begin with<br />a <em>conversation.</em></h2>
            </div>
            <div className="footer-action">
              <p>Share four details, review the prepared inquiry, then choose whether to send it in WhatsApp.</p>
              <button className="button button-light" type="button" onClick={openBooking}><MessageCircle aria-hidden="true" /> Book on WhatsApp</button>
            </div>
          </div>
          <div className="footer-next" aria-label="What happens next">
            <span>01 · Share your preferences</span>
            <span>02 · Review the WhatsApp message</span>
            <span>03 · HRG replies with availability</span>
          </div>
          <div className="footer-links">
            <div className="footer-identity">
              <a className="footer-logo" href="#top" aria-label="HRG Hair Regrowth Clinic, back to top">
                <Image src="/images/hrg-logo-transparent.png" alt="" width={1448} height={1086} />
              </a>
              <p>Personalised hair restoration, guided by thoughtful care.</p>
            </div>
            <div><h3>Explore</h3><a href="#results-title">Patient cases</a><a href="#treatments">Treatments</a><a href="#approach">Our approach</a><a href="#faq-title">FAQs</a></div>
            <div><h3>Contact</h3><button type="button" onClick={openBooking}>WhatsApp consultation</button><span>Phone pending</span><span>Location pending</span></div>
            <div><h3>Information</h3><a href="#faq-title">FAQs</a><a href="#contact">Privacy notice pending</a><a href="#contact">Terms pending</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} HRG Hair Regrowth Clinic</span><span>Phase 1 client demonstration</span></div>
        </footer>
      </div>

      <button className="whatsapp-dock" type="button" onClick={openBooking}>
        <MessageCircle aria-hidden="true" />
        <span>Book on WhatsApp</span>
      </button>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
