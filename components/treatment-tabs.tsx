"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Hair Transplant for Men",
    body: [
      "Male pattern baldness is the most common reason patients visit HRG. Every plan starts with a careful look at your hair loss pattern, donor area and goals, so the hairline and density we design suit your face and age.",
      "Who is an ideal candidate? Men aged around 25 and above are generally better candidates, as hair loss tends to stabilise by this stage. Men with moderate to advanced baldness and a healthy donor area are usually well suited for a transplant.",
    ],
  },
  {
    label: "Female Hair Transplant",
    body: [
      "Hair loss in women often looks different – a widening parting, thinning on top or a high hairline. HRG assesses the cause first and recommends a transplant only when it is the right option for you.",
      "Female hairline transplants are planned to keep a soft, natural-looking hairline that frames the face.",
    ],
  },
  {
    label: "FUE Hair Transplant",
    body: [
      "In Follicular Unit Extraction (FUE), individual follicles are taken from the donor area and implanted where hair is thinning. There is no linear scar and most patients return to routine work within a few days.",
      "Your doctor will explain the number of grafts you may need and what recovery looks like before you decide.",
    ],
  },
  {
    label: "Hairline Design",
    body: [
      "A natural result depends on the hairline. HRG plans the shape, height and direction of every hairline to match your facial proportions, so the result looks like your own hair – not a transplant.",
    ],
  },
  {
    label: "PRP Therapy",
    body: [
      "Platelet-Rich Plasma (PRP) therapy uses concentrated platelets from your own blood to support weaker follicles. It can be recommended on its own for early hair thinning or alongside a transplant.",
    ],
  },
  {
    label: "Hair Regrowth Treatment",
    body: [
      "Not every hair-loss concern needs surgery. HRG offers scalp analysis and non-surgical regrowth plans for early thinning, hair fall and scalp conditions, tailored after an individual assessment.",
    ],
  },
];

export function TreatmentTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="treatments" className="section" aria-labelledby="treatments-title">
      <div className="container">
        <h2 id="treatments-title" className="section-title center">Hair Transplant in Delhi</h2>
        <div className="tab-list" role="tablist" aria-label="Treatments">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              id={`tab-${i}`}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls={`tab-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                const next = (active + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
                setActive(next);
                document.getElementById(`tab-${next}`)?.focus();
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {tabs.map((tab, i) => (
          <div key={tab.label} id={`tab-panel-${i}`} role="tabpanel" aria-labelledby={`tab-${i}`} hidden={i !== active} className="tab-panel">
            {tab.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
}
