import Image from "next/image";

const cases = [
  {
    src: "/images/hrg-case-study-01.png",
    alt: "Clinic-supplied hair transplant result showing an immediate post-procedure view and a later appearance",
    label: "Clinic-provided case 01",
    title: "Hair transplant result",
    description: "Before and later-appearance imagery supplied by HRG. Treatment plan, interval, and clinical notes are pending clinic confirmation.",
    comparison: "Before / later appearance",
  },
  {
    src: "/images/hrg-case-study-02.png",
    alt: "Clinic-supplied hair transplant case showing a patient before and immediately after the procedure",
    label: "Clinic-provided case 02",
    title: "Procedure-day comparison",
    description: "Before and immediate post-procedure imagery supplied by HRG. Procedure notes and follow-up details are pending clinic confirmation.",
    comparison: "Before / procedure day",
  },
] as const;

export function CaseStudies() {
  return (
    <section className="case-studies section-pad" aria-labelledby="results-title">
      <div className="case-heading">
        <div>
          <p className="section-index">Patient cases</p>
          <h2 id="results-title">Real work deserves<br /><em>real context.</em></h2>
        </div>
        <div className="case-intro">
          <p>These images were supplied by the clinic. They are presented without invented patient stories, ratings, or timelines.</p>
          <p className="case-disclaimer">Results vary by individual. Patient consent, dates, treatment details, and final clinical approval should be confirmed before public launch.</p>
        </div>
      </div>

      <div className="case-list">
        {cases.map((item, index) => (
          <article className={`case-card case-card-${index + 1}`} key={item.src}>
            <div className="case-card-media">
              <Image
                className={`case-photo case-photo-${index + 1}`}
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1000px) 100vw, 58vw"
              />
              <span>{item.label}</span>
            </div>
            <div className="case-card-copy">
              <p className="case-kicker">Clinic-supplied result</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <dl>
                <div>
                  <dt>Visual</dt>
                  <dd>{item.comparison}</dd>
                </div>
                <div>
                  <dt>Clinical details</dt>
                  <dd>Pending clinic confirmation</dd>
                </div>
              </dl>
              <a className="arrow-link" href="#contact">Discuss your consultation</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
