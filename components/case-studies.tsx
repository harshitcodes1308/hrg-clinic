import Image from "next/image";

const cases = [
  {
    src: "/images/hrg-case-study-01.png",
    alt: "Clinic-supplied hair transplant result showing an immediate post-procedure view and a later appearance",
    label: "Clinic-provided case 01",
    note: "Transplant result supplied by HRG",
  },
  {
    src: "/images/hrg-case-study-02.png",
    alt: "Clinic-supplied hair transplant case showing a patient before and immediately after the procedure",
    label: "Clinic-provided case 02",
    note: "Procedure-day comparison supplied by HRG",
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

      <div className="case-grid">
        {cases.map((item, index) => (
          <figure className={`case-figure case-figure-${index + 1}`} key={item.src}>
            <div className="case-image">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 94vw, 42vw" />
            </div>
            <figcaption>
              <span>{item.label}</span>
              <small>{item.note}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
