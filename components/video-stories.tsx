"use client";

import { ArrowRight, Play } from "lucide-react";
import { useRef, useState } from "react";
import { clinic } from "@/lib/site";

const videos = [
  { src: "/videos/hrg-patient-02.mp4", poster: "/videos/hrg-patient-02.jpg", title: "Baldness to Full Hair", caption: "Hair transplant result" },
  { src: "/videos/hrg-patient-03.mp4", poster: "/videos/hrg-patient-03.jpg", title: "Patient Experience", caption: "In their own words" },
  { src: "/videos/hrg-patient-04.mp4", poster: "/videos/hrg-patient-04.jpg", title: "The Full Journey", caption: "Procedure day to result" },
];

export function VideoStories() {
  return (
    <section id="videos" className="section" aria-labelledby="videos-title">
      <div className="container center">
        <h2 id="videos-title" className="section-title">See Real Transformations From Our Patients</h2>
        <p className="section-sub small">Hair Transplant & Hair Regrowth Specialists</p>
        <div className="video-grid">
          {videos.map((video) => <VideoCard key={video.src} {...video} />)}
        </div>
        <a className="btn" href={clinic.instagram} target="_blank" rel="noopener noreferrer">View More <ArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

function VideoCard({ src, poster, title, caption }: (typeof videos)[number]) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    document.querySelectorAll<HTMLVideoElement>(".video-card video").forEach((v) => v !== ref.current && v.pause());
    ref.current?.play();
  };

  return (
    <article className="video-card">
      <div className="video-frame">
        <video
          ref={ref}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button className="video-play" type="button" onClick={play} aria-label={`Play ${title}`}>
            <span><Play aria-hidden="true" /></span>
          </button>
        )}
      </div>
      <div className="video-meta">
        <span className="video-dot"><Play aria-hidden="true" /></span>
        <div>
          <h3>{title}</h3>
          <p>{caption}</p>
        </div>
      </div>
    </article>
  );
}
