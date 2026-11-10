import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cases } from "@/lib/cases";

export function CaseStudies({ onBook }: { onBook: () => void }) {
  return (
    <section id="results" className="section section-tint" aria-labelledby="results-title">
      <div className="container center">
        <h2 id="results-title" className="section-title">Real Patients. Real Transformations. Real Confidence.</h2>
        <p className="section-sub">Thousands of men and women have trusted HRG Hair Regrowth Clinic to restore their hair – and their confidence.</p>
        <div className="case-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.id}>
              <div className="case-media">
                {item.poster ? (
                  <Image src={item.poster} alt={item.alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 290px" />
                ) : (
                  <div className="result-pair">
                    {item.pair!.map((photo) => (
                      <figure key={photo.src}>
                        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 46vw, 145px" style={{ objectPosition: photo.position }} />
                        <figcaption>{photo.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
        <p className="results-note">Results may vary from person to person.</p>
        <button className="btn" type="button" onClick={onBook}>Talk With Hair Transplant Doctor <ArrowRight aria-hidden="true" /></button>
      </div>
    </section>
  );
}
