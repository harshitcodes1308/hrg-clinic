// Illustrative top-down scalp diagrams (forehead at the top) of the 7 common stages of male pattern hair loss.
const stages = [
  { n: 1, temple: 3, center: 0, crown: 0 },
  { n: 2, temple: 12, center: 3, crown: 0 },
  { n: 3, temple: 22, center: 8, crown: 0 },
  { n: 4, temple: 26, center: 16, crown: 8 },
  { n: 5, temple: 32, center: 26, crown: 14 },
  { n: 6, temple: 46, center: 50, crown: 22 },
  { n: 7, temple: 58, center: 66, crown: 30 },
];

const BASE = 14;

function Scalp({ n, temple, center, crown }: (typeof stages)[number]) {
  const t = BASE + temple;
  const c = BASE + center;
  const front = `M0 0H100V${BASE}Q82 ${BASE} 72 ${t}Q62 ${c} 50 ${c}Q38 ${c} 28 ${t}Q18 ${BASE} 0 ${BASE}Z`;
  return (
    <svg viewBox="0 0 100 120" aria-hidden="true">
      <defs>
        <mask id={`bald-${n}`}>
          <rect width="100" height="120" fill="#fff" />
          <path d={front} fill="#000" />
          {crown > 0 && <circle cx="50" cy="78" r={crown} fill="#000" />}
        </mask>
      </defs>
      <ellipse cx="50" cy="62" rx="40" ry="52" className="scalp-skin" />
      <ellipse cx="50" cy="62" rx="40" ry="52" className="scalp-hair" mask={`url(#bald-${n})`} />
    </svg>
  );
}

export function BaldnessChart({ onBook }: { onBook: () => void }) {
  return (
    <section className="section" aria-labelledby="baldness-title">
      <div className="container center">
        <h2 id="baldness-title" className="section-title">To know your level of baldness you can refer to the following chart</h2>
        <ol className="baldness-chart">
          {stages.map((stage) => (
            <li key={stage.n}>
              <Scalp {...stage} />
              <span>Grade {stage.n}</span>
            </li>
          ))}
        </ol>
        <button className="btn" type="button" onClick={onBook}>Hair &amp; Scalp Analysis Today! <span aria-hidden="true">→</span></button>
      </div>
    </section>
  );
}
