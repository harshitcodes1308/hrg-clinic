"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Who is a good candidate for a hair transplant?",
    answer: "Men and women with stable pattern hair loss and a healthy donor area are usually good candidates. Your doctor at HRG will check your hair loss grade, donor density and scalp health before recommending a transplant.",
  },
  {
    question: "Is the procedure painful?",
    answer: "The procedure is done under local anaesthesia, so most patients feel only mild discomfort during the numbing injections. Many patients relax, watch videos or rest during the session.",
  },
  {
    question: "How long does the procedure take?",
    answer: "Most sessions take between 6 and 8 hours depending on the number of grafts. You go home the same day.",
  },
  {
    question: "Are the results natural and permanent?",
    answer: "Transplanted hair is taken from the donor area, which is resistant to balding, so it usually continues to grow for life. A well-designed hairline and correct graft angle make the result look natural.",
  },
  {
    question: "Is a hair transplant suitable for advanced baldness (Grade 6/7)?",
    answer: "It can be, depending on your donor area. The doctor will assess how many grafts are available and plan coverage that looks natural and balanced.",
  },
  {
    question: "What is the recovery time after a hair transplant?",
    answer: "Most patients return to routine work within 3–5 days. Small scabs fall off in around 10–14 days and new hair growth typically begins after 3–4 months, with the full result visible in 9–12 months.",
  },
  {
    question: "What is the hair transplant cost in Delhi?",
    answer: "The cost depends on the extent of hair loss, the number of grafts required and the technique recommended. Book a consultation at HRG to get your exact estimate.",
  },
  {
    question: "What should I check before choosing a hair clinic in Delhi?",
    answer: "Look for an experienced medical team, real before-and-after results, a hygienic procedure setup, clear pricing and proper aftercare support. You are welcome to visit HRG and see the clinic before you decide.",
  },
];

export function Faq() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {questions.map((item, index) => {
        const open = active === index;
        const Icon = open ? Minus : Plus;
        return (
          <div className={`faq-item ${open ? "open" : ""}`} key={item.question}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={`faq-panel-${index}`} onClick={() => setActive(open ? null : index)}>
                <span>Q{index + 1}. {item.question}</span>
                <Icon aria-hidden="true" />
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
