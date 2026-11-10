export type CasePhoto = { src: string; alt: string; caption: "Before" | "After"; position: string };

export type PatientCase = {
  id: string;
  title: string;
  alt: string;
  poster?: string;
  pair?: readonly [CasePhoto, CasePhoto];
};

export const cases: PatientCase[] = [
  {
    id: "case-01",
    title: "Hair Transplant – Natural Look",
    poster: "/images/hrg-case-study-01.png",
    alt: "HRG patient before and after a hair transplant",
  },
  {
    id: "case-02",
    title: "Hair Transplant – Procedure Day",
    poster: "/images/hrg-case-study-02.png",
    alt: "HRG patient before and right after a hair transplant",
  },
  {
    id: "case-03",
    title: "Female Hairline Transplant",
    alt: "HRG female patient before and after a hairline transplant",
    pair: [
      { src: "/images/hrg-case-03-before.png", alt: "Female patient front view before hairline transplant", caption: "Before", position: "center 34%" },
      { src: "/images/hrg-case-03-procedure-day.png", alt: "Female patient front view after hairline transplant", caption: "After", position: "center 32%" },
    ],
  },
  {
    id: "case-04",
    title: "Crown & Frontal Coverage",
    alt: "HRG male patient before and after a hair transplant",
    pair: [
      { src: "/images/hrg-case-04-before.png", alt: "Male patient front view before hair transplant", caption: "Before", position: "center 31%" },
      { src: "/images/hrg-case-04-procedure-day.png", alt: "Male patient top view after hair transplant", caption: "After", position: "center 26%" },
    ],
  },
];
