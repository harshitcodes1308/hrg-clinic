"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Which treatment is right for me?",
    answer: "That depends on the cause and pattern of hair loss, scalp health, goals, and other individual factors. A qualified clinical assessment should come before any treatment recommendation.",
  },
  {
    question: "What happens during an initial consultation?",
    answer: "The illustrative HRG process begins with a conversation about your concerns, followed by an assessment and a discussion of appropriate next steps. The final consultation format is subject to clinic confirmation.",
  },
  {
    question: "Are results guaranteed?",
    answer: "No treatment outcome should be guaranteed. Suitability, response, recovery, and expected outcomes vary by person and should be discussed with the treating clinician.",
  },
  {
    question: "How should I prepare for a consultation?",
    answer: "Bring your questions and any relevant treatment information you are comfortable sharing. The demo inquiry form intentionally does not collect medical history or scalp photographs.",
  },
  {
    question: "What can affect the cost of treatment?",
    answer: "The area involved, donor hair availability, the proposed approach, and whether care may need more than one stage can all affect an estimate. A price should follow an individual assessment, not precede it.",
  },
  {
    question: "How long does recovery take?",
    answer: "Recovery depends on the treatment and the person. The treating clinician should explain expected downtime, aftercare, warning signs, and follow-up before you decide to proceed.",
  },
  {
    question: "When might I notice a change?",
    answer: "Timelines vary by treatment and individual response. Ask the clinical team for a realistic range, what progress can look like, and when they would review it with you.",
  },
  {
    question: "Can women request an assessment too?",
    answer: "Yes. Hair loss can present differently for each person, so the appropriate first step is an individual assessment rather than assuming one diagnosis or treatment route.",
  },
];

export function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {questions.map((item, index) => {
        const open = active === index;
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setActive(open ? null : index)}
              >
                <span>{item.question}</span>
                <Plus className={open ? "rotate" : ""} aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-panel-${index}`} className="faq-answer" hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
