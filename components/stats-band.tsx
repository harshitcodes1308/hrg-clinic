"use client";

import { Building2, ClipboardList, Smile, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

const icons = { smile: Smile, building: Building2, clipboard: ClipboardList, star: Star };

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = reduce ? 1 : Math.min(1, (now - start) / 1600);
        setProgress(1 - Math.pow(1 - t, 3));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="stats-band" aria-label="HRG in numbers">
      <div className="container stats-grid" ref={ref}>
        {stats.map((stat) => {
          const Icon = icons[stat.icon];
          const decimals = "decimals" in stat ? stat.decimals : 0;
          const current = (stat.value * progress).toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
          return (
            <div className="stat" key={stat.label}>
              <Icon aria-hidden="true" />
              <strong aria-label={`${stat.value.toLocaleString("en-IN")}${stat.suffix}`}>{current}{stat.suffix}</strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
