"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cases } from "@/lib/cases";

export function ResultSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((step: number) => setIndex((value) => (value + step + cases.length) % cases.length), []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => go(1), 4000);
    return () => window.clearInterval(timer);
  }, [go, paused]);

  return (
    <div
      className="result-slider"
      aria-roledescription="carousel"
      aria-label="Patient before and after results"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="result-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {cases.map((item, i) => (
          <div className="result-slide" key={item.id} aria-hidden={i !== index} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${cases.length}`}>
            {item.poster ? (
              <Image src={item.poster} alt={item.alt} fill sizes="(max-width: 900px) 92vw, 480px" priority={i === 0} />
            ) : (
              <div className="result-pair">
                {item.pair!.map((photo) => (
                  <figure key={photo.src}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 46vw, 240px" style={{ objectPosition: photo.position }} />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="slider-arrow prev" type="button" onClick={() => go(-1)} aria-label="Previous result"><ChevronLeft aria-hidden="true" /></button>
      <button className="slider-arrow next" type="button" onClick={() => go(1)} aria-label="Next result"><ChevronRight aria-hidden="true" /></button>
      <div className="slider-dots">
        {cases.map((item, i) => (
          <button key={item.id} type="button" className={i === index ? "active" : ""} onClick={() => setIndex(i)} aria-label={`Show result ${i + 1}`} aria-current={i === index} />
        ))}
      </div>
    </div>
  );
}
