import Image from "next/image";
import { MessageCircle } from "lucide-react";

type PairedImage = {
  src: string;
  alt: string;
  caption: "Before" | "Procedure day";
  position: string;
};

type PatientCase = {
  label: string;
  title: string;
  description: string;
  comparison: string;
  poster?: {
    src: string;
    alt: string;
    position: string;
  };
  pair?: readonly [PairedImage, PairedImage];
};

const cases: PatientCase[] = [
  {
    poster: {
      src: "/images/hrg-case-study-01.png",
      alt: "Clinic-supplied hair transplant comparison showing an immediate post-procedure view and a later appearance",
      position: "center 62%",
    },
    label: "Clinic-provided case 01",
    title: "Hair transplant result",
    description: "Before and later-appearance imagery supplied by HRG. Treatment plan, interval, and clinical notes are pending clinic confirmation.",
    comparison: "Before / later appearance",
  },
  {
    poster: {
      src: "/images/hrg-case-study-02.png",
      alt: "Clinic-supplied hair transplant comparison showing a patient before and immediately after the procedure",
      position: "center 64%",
    },
    label: "Clinic-provided case 02",
    title: "Procedure-day comparison",
    description: "Before and immediate post-procedure imagery supplied by HRG. Procedure notes and follow-up details are pending clinic confirmation.",
    comparison: "Before / procedure day",
  },
  {
    pair: [
      {
        src: "/images/hrg-case-03-before.png",
        alt: "Clinic-supplied front view before a female hairline transplant procedure",
        caption: "Before",
        position: "center 34%",
      },
      {
        src: "/images/hrg-case-03-procedure-day.png",
        alt: "Clinic-supplied front view immediately after a female hairline transplant procedure",
        caption: "Procedure day",
        position: "center 32%",
      },
    ],
    label: "Clinic-provided case 03",
    title: "Female hairline procedure",
    description: "Before and immediate post-procedure photographs supplied by HRG. Healing progress and later outcome imagery have not been provided.",
    comparison: "Before / procedure day",
  },
  {
    pair: [
      {
        src: "/images/hrg-case-04-before.png",
        alt: "Clinic-supplied front view before a male hair transplant procedure",
        caption: "Before",
        position: "center 31%",
      },
      {
        src: "/images/hrg-case-04-procedure-day.png",
        alt: "Clinic-supplied top view immediately after a male hair transplant procedure",
        caption: "Procedure day",
        position: "center 26%",
      },
    ],
    label: "Clinic-provided case 04",
    title: "Transplant coverage view",
    description: "Before and immediate post-procedure photographs supplied by HRG. Graft details, recovery notes, and later outcome imagery are pending.",
    comparison: "Before / procedure day",
  },
];

export function CaseStudies({ onBook }: { onBook: () => void }) {
  return (
    <section className="case-studies section-pad" aria-labelledby="results-title">
      <div className="case-heading">
        <div>
          <p className="section-index">Patient cases</p>
          <h2 id="results-title">Real work deserves<br /><em>real context.</em></h2>
        </div>
        <div className="case-intro">
          <p>Four clinic-supplied cases, shown at the stage documented in each image. No patient story, rating, timeline, or outcome has been invented.</p>
          <p className="case-disclaimer">Results vary by individual. Patient consent, dates, treatment details, and final clinical approval should be confirmed before public launch.</p>
          <button className="button case-heading-action" type="button" onClick={onBook}>
            <MessageCircle aria-hidden="true" /> Book a private consultation
          </button>
        </div>
      </div>

      <div className="case-list">
        {cases.map((item) => (
          <article className="case-card" key={item.label}>
            <div className={`case-card-media ${item.pair ? "case-card-paired" : ""}`}>
              <span className="case-media-label">{item.label}</span>
              {item.poster && (
                <Image
                  className="case-photo"
                  src={item.poster.src}
                  alt={item.poster.alt}
                  fill
                  style={{ objectPosition: item.poster.position }}
                  sizes="(max-width: 760px) 100vw, 46vw"
                />
              )}
              {item.pair && (
                <div className="case-pair">
                  {item.pair.map((image) => (
                    <figure key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectPosition: image.position }}
                        sizes="(max-width: 760px) 50vw, 23vw"
                      />
                      <figcaption>{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
            <div className="case-card-copy">
              <p className="case-kicker">Clinic-supplied documentation</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <dl>
                <div>
                  <dt>Stage shown</dt>
                  <dd>{item.comparison}</dd>
                </div>
                <div>
                  <dt>Clinical details</dt>
                  <dd>Pending clinic confirmation</dd>
                </div>
              </dl>
              <button className="button case-book" type="button" onClick={onBook}>
                <MessageCircle aria-hidden="true" /> Ask about treatment options
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="results-booking">
        <div>
          <p className="section-index">Your next step</p>
          <h3>Not sure which treatment fits your concern?</h3>
        </div>
        <div>
          <p>Share your age, location, and treatment interest. Review the prepared message before it opens in WhatsApp.</p>
          <button className="button button-lead" type="button" onClick={onBook}>
            <MessageCircle aria-hidden="true" /> Book on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
