"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  ClipboardCheck,
  HeartPulse,
  LineChart,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import { useState } from "react";
import { BaldnessChart } from "@/components/baldness-chart";
import { BookingModal } from "@/components/booking-modal";
import { CaseStudies } from "@/components/case-studies";
import { Faq } from "@/components/faq";
import { Header } from "@/components/header";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { InlineBooking } from "@/components/inline-booking";
import { ResultSlider } from "@/components/result-slider";
import { StatsBand } from "@/components/stats-band";
import { TreatmentTabs } from "@/components/treatment-tabs";
import { VideoStories } from "@/components/video-stories";
import { WhatsAppPopup } from "@/components/whatsapp-popup";
import { clinic, whatsAppLink } from "@/lib/site";

const whyChoose = [
  { icon: Stethoscope, title: "Clinic expertise", copy: "Our team has helped 5000+ happy patients regain their hair and confidence." },
  { icon: ShieldCheck, title: "Comfortable Procedures", copy: "Advanced FUE technique under local anaesthesia for a comfortable experience." },
  { icon: Sparkles, title: "Natural Results", copy: "Custom-designed hairlines that look natural and age-appropriate." },
  { icon: Award, title: "HRG technique", copy: "Careful graft handling and placement for healthy growth and long-lasting results." },
];

const services = [
  { title: "Hair Transplant in Male", copy: "Restore your natural hairline with advanced techniques." },
  { title: "Hair Transplant in Female", copy: "Customised solutions for female pattern hair loss." },
  { title: "Hairline Reconstruction", copy: "Youthful, natural hairlines designed for your face." },
  { title: "FUE Hair Transplant", copy: "Individual follicle extraction with quick recovery." },
  { title: "PRP Therapy", copy: "Strengthen weak follicles and reduce hair fall." },
  { title: "Hair Regrowth Treatment", copy: "Non-surgical plans for early thinning and hair fall." },
];

const menPoints = [
  "5000+ happy patients transformed",
  "10+ years of expertise in hair restoration",
  "Advanced FUE hair transplant technique",
  "Custom hairline design for every face",
  "Hygienic, fully equipped procedure room",
  "Dedicated aftercare & follow-up support",
];

const journey = [
  { icon: Users, title: "Consultation", copy: "Personalised hair assessment & planning" },
  { icon: ClipboardCheck, title: "Pre-procedure Prep", copy: "Safe, comfortable preparation for good results" },
  { icon: HeartPulse, title: "HRG Procedure", copy: "Precise graft extraction and implantation" },
  { icon: CalendarCheck, title: "Post-Op Care", copy: "Guided recovery with expert support" },
  { icon: LineChart, title: "Progress Tracking", copy: "Regular follow-ups for natural growth" },
];

export function ClinicHomepage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <>
      <div id="top" className="page-shell">
        <Header onBook={openBooking} />
        <main>
          {/* Hero */}
          <section className="hero" aria-labelledby="hero-title">
            <div className="container hero-grid">
              <div className="hero-copy">
                <h1 id="hero-title">Choose HRG for <span>Hair Transplant</span> in Delhi</h1>
                <p>
                  At HRG Hair Regrowth Clinic in Delhi, treatment plans are tailored to each person&apos;s hair condition, donor hair
                  availability, and individual needs. The clinic focuses on hairline planning, appropriate surgical practices, hygiene,
                  and transparent pricing. The medical team explains the procedure, expected outcomes and recovery process. Results may
                  vary from person to person.
                </p>
                <button className="btn" type="button" onClick={openBooking}>Schedule Your Private Consultation <ArrowRight aria-hidden="true" /></button>
                <ul className="hero-badges" aria-label="Clinic highlights">
                  <li><strong>10+</strong><span>Years</span><small>Experience</small></li>
                  <li><strong>5000+</strong><span>Happy</span><small>Patients</small></li>
                  <li><strong>5<Star aria-hidden="true" /></strong><span>Rated</span><small>Clinic</small></li>
                </ul>
              </div>
              <div className="hero-results">
                <h2>Real Results From HRG Clinic</h2>
                <ResultSlider />
                <h3>Natural Results - Real Patient Case</h3>
                <a className="btn" href={whatsAppLink("Hello HRG, I would like to send my photos for a hair analysis.")} target="_blank" rel="noopener noreferrer">
                  Send Your Photos for Hair Analysis! <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <VideoStories />

          <CaseStudies onBook={openBooking} />

          {/* Cost */}
          <section className="section" aria-labelledby="cost-title">
            <div className="container center narrow">
              <h2 id="cost-title" className="section-title">Hair Transplant Cost in Delhi at HRG Clinic</h2>
              <p className="section-sub">
                Hair transplant cost in Delhi depends on hair loss, the number of grafts required, and the recommended treatment approach.
                Consult HRG Hair Regrowth Clinic to understand your options and estimated treatment cost.
              </p>
              <button className="btn" type="button" onClick={openBooking}>Know Your Hair Transplant Cost <ArrowRight aria-hidden="true" /></button>
            </div>
          </section>

          <InlineBooking id="assessment" />

          <StatsBand />

          {/* Highly rated */}
          <section className="section" aria-labelledby="rated-title">
            <div className="container center">
              <h2 id="rated-title" className="section-title">Highly Rated Hair Transplant Clinic in Delhi</h2>
              <p className="section-sub small">5000+ Happy Patients · 4.9★ Rated Clinic</p>
              <div className="social-grid">
                <a className="social-card" href={clinic.instagram} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon"><InstagramIcon /></span>
                  <strong>Instagram</strong>
                  <p>Watch patient results, procedure days and real stories from HRG.</p>
                  <span className="social-link">Follow @hrg_hair_regrowth_clinic <ArrowRight aria-hidden="true" /></span>
                </a>
                <a className="social-card" href={clinic.facebook} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon"><FacebookIcon /></span>
                  <strong>Facebook</strong>
                  <p>See reviews, before &amp; after photos and clinic updates.</p>
                  <span className="social-link">Visit our page <ArrowRight aria-hidden="true" /></span>
                </a>
                <a className="social-card" href={whatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon"><WhatsAppIcon /></span>
                  <strong>WhatsApp</strong>
                  <p>Talk directly to our team and book your consultation in minutes.</p>
                  <span className="social-link">Chat now <ArrowRight aria-hidden="true" /></span>
                </a>
              </div>
              <button className="btn" type="button" onClick={openBooking}>Book Your Hair Consultation <ArrowRight aria-hidden="true" /></button>
              <p className="slots-note">Limited Slots Available!</p>
            </div>
          </section>

          <TreatmentTabs />

          <BaldnessChart onBook={openBooking} />

          {/* Why choose */}
          <section className="section" aria-labelledby="why-title">
            <div className="container center">
              <h2 id="why-title" className="section-title">Why Choose Us?</h2>
              <div className="feature-grid">
                {whyChoose.map(({ icon: Icon, title, copy }) => (
                  <article className="feature-card" key={title}>
                    <Icon aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
              <button className="btn" type="button" onClick={openBooking}>Book Your Hair Consultation Today! <ArrowRight aria-hidden="true" /></button>
            </div>
          </section>

          {/* Services */}
          <section className="section" aria-labelledby="services-title">
            <div className="container center">
              <h2 id="services-title" className="section-title">Hair Transplant Services Tailored for You</h2>
              <p className="section-sub">
                From male &amp; female hair restoration to hairline design, PRP and regrowth treatments – HRG offers comfortable,
                natural-looking solutions for every need.
              </p>
              <div className="service-grid">
                {services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </article>
                ))}
              </div>
              <button className="btn" type="button" onClick={openBooking}>Don&apos;t Wait, Start Your Hair Growth Journey Now! <ArrowRight aria-hidden="true" /></button>
            </div>
          </section>

          {/* Men */}
          <section className="section" aria-labelledby="men-title">
            <div className="container split">
              <div>
                <h2 id="men-title" className="section-title left">Hair Transplant for Men – Regain Confidence, Restore Hairline</h2>
                <p>
                  With over <strong>5000 happy patients</strong>, HRG Hair Regrowth Clinic brings real expertise and results-driven care
                  to every hair transplant. Our team uses the <strong>advanced FUE technique</strong> with careful hairline planning to
                  deliver precise, natural results and healthy graft growth.
                </p>
                <h3 className="list-title">Why Choose HRG Hair Regrowth Clinic?</h3>
                <ul className="check-list">
                  {menPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <p className="list-title">Ready to Regrow Your Hair?</p>
                <button className="btn" type="button" onClick={openBooking}>Book Your Consultation</button>
              </div>
              <figure className="split-media">
                <div className="split-image">
                  <Image src="/images/hrg-case-study-01.png" alt="HRG male patient before and after hair transplant" fill sizes="(max-width: 900px) 92vw, 460px" />
                </div>
                <figcaption>Real HRG patient – natural look after hair transplant.</figcaption>
              </figure>
            </div>
          </section>

          {/* Journey */}
          <section className="section section-tint" aria-labelledby="journey-title">
            <div className="container center">
              <h2 id="journey-title" className="section-title">Your Hair Restoration Journey in 5 Easy Steps</h2>
              <ol className="journey-grid">
                {journey.map(({ icon: Icon, title, copy }) => (
                  <li className="feature-card" key={title}>
                    <Icon aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </li>
                ))}
              </ol>
              <button className="btn" type="button" onClick={openBooking}>Get Your Hair Back - Start Today <ArrowRight aria-hidden="true" /></button>
              <p className="slots-note">Limited Slots for This Month!</p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="section section-tint section-flush" aria-labelledby="faq-title">
            <div className="container center narrow">
              <h2 id="faq-title" className="section-title">FAQs</h2>
              <Faq />
            </div>
          </section>

          <InlineBooking id="assessment-2" title="Get a Hair Assessment" />

          {/* About */}
          <section className="section" aria-labelledby="about-title">
            <div className="container split about">
              <figure className="split-media">
                <div className="split-image">
                  <Image src="/images/hrg-case-study-02.png" alt="HRG patient before and after hair transplant procedure" fill sizes="(max-width: 900px) 92vw, 460px" />
                </div>
                <button className="btn" type="button" onClick={openBooking}>Know Your Exact Hair Transplant Cost <ArrowRight aria-hidden="true" /></button>
              </figure>
              <div className="about-copy">
                <h2 id="about-title" className="section-title left">Hair Transplant Clinic in Delhi – HRG</h2>
                <p>
                  At HRG Hair Regrowth Clinic, we are dedicated to treating hair loss with <strong>hair transplant treatment in Delhi</strong>.
                  We specialise in FUE hair transplant, hairline design, PRP and hair regrowth therapies, supported by an in-house team of
                  trained doctors and technicians.
                </p>
                <p>
                  Located at {clinic.address}, our clinic is equipped with modern instruments and a hygienic procedure setup to deliver
                  natural, long-lasting results. Whether you are searching for a <strong>hair transplant doctor</strong> or a trusted
                  <strong> hair regrowth clinic in Delhi</strong>, HRG is your trusted choice.
                </p>
                <p>
                  Our dedicated support team assists every patient throughout the journey, making sure they feel comfortable and cared for
                  before, during and after the procedure. We uphold strict medical ethics, maintain confidentiality, and never publish any
                  patient&apos;s image or video without consent.
                </p>
              </div>
            </div>
          </section>

          <section className="map-wrap" aria-label="HRG clinic location">
            <iframe title="Map showing HRG Hair Regrowth Clinic, Rohini Sector 8, Delhi" src={clinic.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-contact">
              <a href={clinic.phoneHref}><Phone aria-hidden="true" /> {clinic.phoneDisplay}</a>
              <span><MapPin aria-hidden="true" /> {clinic.address}</span>
            </div>
            <div className="footer-social">
              <a href={clinic.facebook} target="_blank" rel="noopener noreferrer" aria-label="HRG on Facebook"><FacebookIcon /></a>
              <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" aria-label="HRG on Instagram"><InstagramIcon /></a>
              <a href={whatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="HRG on WhatsApp"><WhatsAppIcon /></a>
            </div>
            <p>© {new Date().getFullYear()} HRG Hair Regrowth Clinic. All Rights Reserved</p>
          </div>
        </footer>
      </div>

      {/* Floating actions */}
      <a className="float-btn float-wa" href={whatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with HRG on WhatsApp">
        <WhatsAppIcon />
      </a>
      <a className="float-btn float-call" href={clinic.phoneHref} aria-label={`Call HRG on ${clinic.phoneDisplay}`}>
        <Phone aria-hidden="true" />
      </a>
      <button className="mobile-book-bar" type="button" onClick={openBooking}>
        <UserRound aria-hidden="true" /> Book Your Consultation
      </button>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <WhatsAppPopup suppressed={bookingOpen} />
    </>
  );
}
