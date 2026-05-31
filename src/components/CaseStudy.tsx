"use client";

import { useEffect, useRef, useState } from "react";
import { caseSteps } from "@/data/portfolio";

export default function CaseStudy() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const onScroll = () => {
      const rect = scene.getBoundingClientRect();
      const h = scene.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / h));
      const step = Math.min(Math.floor(progress * caseSteps.length), caseSteps.length - 1);
      setActive(step);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="case" id="case">
      <div className="case__scene" ref={sceneRef}>
        <div className="case__sticky">
          <div className="wrap">
            <div className="case__inner">
              <div className="case__steps">
                {caseSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`case__step${active === i ? " active" : ""}`}
                    style={active !== i ? { position: "absolute", top: 0 } : undefined}
                  >
                    <span className="eyebrow">{step.eyebrow}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
                <div className="case__progress">
                  {caseSteps.map((_, i) => (
                    <i
                      key={i}
                      className={i < active ? "done" : i === active ? "active" : ""}
                    />
                  ))}
                </div>
              </div>

              <div className="case__visual">
                {caseSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`case__viz-layer${active === i ? " active" : ""}`}
                  >
                    {step.viz}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
