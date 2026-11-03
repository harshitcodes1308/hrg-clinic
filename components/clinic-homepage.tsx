"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { CaseStudies } from "@/components/case-studies";
import { Faq } from "@/components/faq";
import { Header } from "@/components/header";

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
  ["01", "Consultation", "We begin with your concerns, priorities, and questions."],
  ["02", "Assessment", "The clinical picture is considered before options are discussed."],
  ["03", "Personalised treatment planning", "Any proposed direction is shaped around the individual."],
  ["04", "Follow-up care", "Next steps and ongoing support are explained clearly."],
] as const;

export function ClinicHomepage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const openBooking = () => setBookingOpen(true);

  return (
    <>
      <div id="top" className="page-shell">
        <Header onBook={openBooking} />
        <main>
          <section className="hero" aria-labelledby="hero-title">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.16 : 0.48, ease: "easeOut" }}
            >
              <h1 id="hero-title">Confidence,<br /><em>restored naturally.</em></h1>
              <p>Personalised hair restoration, guided by thoughtful care and a commitment to natural-looking outcomes.</p>
              <div className="hero-actions">
                <button className="button" type="button" onClick={openBooking}>Book consultation</button>
                <a className="arrow-link" href="#approach">Explore our approach <ArrowDownRight aria-hidden="true" /></a>
              </div>
              <small>Draft brand content pending clinical and client approval.</small>
            </motion.div>

            <motion.div
              className="hero-image-wrap"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0.16 : 0.56, ease: "easeOut" }}
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
                <Image
                  src="/images/hrg-assessment.png"
                  alt="A respectful close assessment of a client's hair and scalp"
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                />
              </div>
              <div className="treatment-list">
                {treatments.map((treatment, index) => (
                  <article key={treatment.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{treatment.title}</h3>
                      <p>{treatment.copy}</p>
                    </div>
                    <a href="#contact" aria-label={`Discuss ${treatment.title}`}>Discuss <ArrowRight aria-hidden="true" /></a>
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
              <p className="section-index">Look first. Plan second.</p>
              <h2 id="assessment-title">The detail shapes<br /><em>the direction.</em></h2>
              <p>A closer assessment helps turn a broad concern into a more useful clinical conversation.</p>
              <a className="arrow-link" href="#approach">See the consultation process <ArrowRight aria-hidden="true" /></a>
            </div>
          </section>

          <section id="approach" className="approach section-pad" aria-labelledby="approach-title">
            <div className="approach-intro">
              <h2 id="approach-title">A clear beginning.<br /><em>A thoughtful plan.</em></h2>
              <p>An illustrative four-step process, subject to confirmation by HRG.</p>
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
              <a className="arrow-link light-link" href="#contact">Start a conversation <ArrowRight aria-hidden="true" /></a>
            </div>
          </section>

          <CaseStudies />

          <section className="faq section-pad" aria-labelledby="faq-title">
            <div className="faq-heading">
              <h2 id="faq-title">Good decisions begin with <em>good questions.</em></h2>
              <p>General information only. A clinician should answer questions about individual suitability, risks, recovery, and outcomes.</p>
            </div>
            <Faq />
          </section>

        </main>

        <footer id="contact" className="footer">
          <div className="footer-conversation">
            <div>
              <p className="section-index">A simple first step</p>
              <h2 id="cta-title">Begin with<br />a <em>conversation.</em></h2>
            </div>
            <div className="footer-action">
              <p>Send a consultation request in WhatsApp. You review the message before anything is sent.</p>
              <button className="button button-light" type="button" onClick={openBooking}>Schedule a consultation</button>
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
            <div><h3>Explore</h3><a href="#about">About</a><a href="#treatments">Treatments</a><a href="#approach">Our approach</a><a href="#results-title">Patient cases</a></div>
            <div><h3>Contact</h3><button type="button" onClick={openBooking}>WhatsApp consultation</button><span>Phone pending</span><span>Location pending</span></div>
            <div><h3>Information</h3><a href="#faq-title">FAQs</a><a href="#contact">Privacy notice pending</a><a href="#contact">Terms pending</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} HRG Hair Regrowth Clinic</span><span>Phase 1 client demonstration</span></div>
        </footer>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
