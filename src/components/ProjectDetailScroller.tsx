"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { Project } from "@/data/portfolio";
import ProjectImage from "@/components/ProjectImage";
import { getProjectSteps } from "@/lib/projects";

type ProjectDetailScrollerProps = {
  project: Project;
};

const SCROLL_SENSITIVITY = 0.0018;
const LERP = 0.1;

function smoothstep(value: number): number {
  return value * value * (3 - 2 * value);
}

function stepBlend(index: number, progress: number): number {
  const dist = Math.abs(index - progress);
  if (dist >= 1) return 0;
  return smoothstep(1 - dist);
}

function stepStyle(index: number, progress: number, axis: "y" | "x" = "y"): CSSProperties {
  const blend = stepBlend(index, progress);
  const offset = (index - progress) * (axis === "y" ? 28 : 18);

  return {
    opacity: blend,
    transform:
      axis === "y"
        ? `translateY(${offset}px) scale(${0.97 + blend * 0.03})`
        : `translateX(${offset}px) scale(${0.98 + blend * 0.02})`,
    pointerEvents: blend > 0.4 ? "auto" : "none",
    zIndex: Math.round(blend * 100),
  };
}

function getYouTubeId(src: string): string | null {
  const match = src.match(/img\.youtube\.com\/vi\/([^/]+)\//);
  return match ? match[1] : null;
}

export default function ProjectDetailScroller({ project }: ProjectDetailScrollerProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const targetProgressRef = useRef(0);
  const displayProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [displayProgress, setDisplayProgress] = useState(0);

  const steps = useMemo(() => getProjectSteps(project), [project]);
  const maxProgress = Math.max(steps.length - 1, 0);
  const active = Math.round(displayProgress);

  const setTarget = useCallback(
    (next: number) => {
      targetProgressRef.current = Math.max(0, Math.min(next, maxProgress));
    },
    [maxProgress]
  );

  const goTo = useCallback(
    (index: number) => {
      setTarget(index);
    },
    [setTarget]
  );

  useEffect(() => {
    const tick = () => {
      const target = targetProgressRef.current;
      const current = displayProgressRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.0008) {
        const next = current + diff * LERP;
        displayProgressRef.current = next;
        setDisplayProgress(next);
      } else if (current !== target) {
        displayProgressRef.current = target;
        setDisplayProgress(target);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      setTarget(targetProgressRef.current + event.deltaY * SCROLL_SENSITIVITY);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        goTo(Math.min(active + 1, maxProgress));
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goTo(Math.max(active - 1, 0));
      }
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      stage.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, goTo, maxProgress, setTarget]);

  useEffect(() => {
    targetProgressRef.current = 0;
    displayProgressRef.current = 0;
    setDisplayProgress(0);
  }, [project.slug]);

  return (
    <div className="pd-stage" ref={stageRef}>
      <header className="pd-header">
        <p className="pd-header__tag">{project.tag}</p>
        <h1 className="pd-header__title">{project.title}</h1>
        <p className="pd-header__meta">
          {project.company} · {project.period}
          {project.repoUrl && (
            <>
              {" · "}
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="pd-header__link">
                GitHub
              </a>
            </>
          )}
          {project.demoUrl && (
            <>
              {" · "}
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="pd-header__link">
                시연 영상
              </a>
            </>
          )}
        </p>
      </header>

      <div className="pd-layout">
        <div className="pd-story">
          <div className="pd-flow" aria-label="앱 플로우 단계">
            {steps.map((step, index) => {
              const blend = stepBlend(index, displayProgress);
              return (
                <button
                  type="button"
                  key={`flow-${step.eyebrow}-${index}`}
                  className={`pd-flow__item${index === active ? " active" : ""}${index < active ? " done" : ""}`}
                  style={{ opacity: 0.45 + blend * 0.55 }}
                  onClick={() => goTo(index)}
                >
                  <span className="pd-flow__dot" />
                  <span className="pd-flow__label">{step.eyebrow}</span>
                </button>
              );
            })}
          </div>

          <div className="pd-story__copy">
            {steps.map((step, index) => (
              <article
                key={`${step.eyebrow}-${index}`}
                className="pd-story__step"
                style={stepStyle(index, displayProgress, "y")}
                aria-hidden={stepBlend(index, displayProgress) < 0.1}
              >
                <p className="pd-eyebrow">{step.eyebrow}</p>
                <h2>{step.title}</h2>
                <p className="pd-lead">{step.desc}</p>
                {step.did && (
                  <div className="pd-did">
                    <span className="pd-did__label">What I did</span>
                    <p>{step.did}</p>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="pd-nav">
            <button
              type="button"
              className="pd-nav__arrow"
              onClick={() => goTo(active - 1)}
              disabled={displayProgress <= 0.01}
              aria-label="이전 단계"
            >
              ‹
            </button>

            <div className="pd-nav__track" aria-hidden="true">
              <span
                className="pd-nav__fill"
                style={{ width: maxProgress > 0 ? `${(displayProgress / maxProgress) * 100}%` : "100%" }}
              />
            </div>

            <span className="pd-nav__count">
              {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              className="pd-nav__arrow"
              onClick={() => goTo(active + 1)}
              disabled={displayProgress >= maxProgress - 0.01}
              aria-label="다음 단계"
            >
              ›
            </button>
          </div>
        </div>

        {/* 폰 목업 제거 → 와이드 비주얼 패널 */}
        <div className="pd-visual">
          {steps.map((step, index) => {
            const blend = stepBlend(index, displayProgress);
            const ytId = step.image ? getYouTubeId(step.image.src) : null;

            return (
              <div
                key={`visual-${step.eyebrow}-${index}`}
                className="pd-visual__layer"
                style={stepStyle(index, displayProgress, "x")}
                aria-hidden={blend < 0.1}
              >
                {ytId ? (
                  <div className="pd-visual__iframe-wrap">
                    <iframe
                      className="pd-visual__iframe"
                      src={`https://www.youtube.com/embed/${ytId}`}
                      title={step.image!.alt}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : step.image ? (
                  <ProjectImage
                    src={step.image.src}
                    alt={step.image.alt}
                    priority={index === 0}
                    sizes="(max-width: 900px) 100vw, 560px"
                    className="pd-visual__image"
                  />
                ) : (
                  <div className="pd-visual__fallback">
                    <span>{project.placeholder}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* 캡션 */}
          <div className="pd-visual__caption">
            {steps.map((step, index) =>
              step.image?.caption ? (
                <p
                  key={`caption-${step.eyebrow}-${index}`}
                  style={stepStyle(index, displayProgress, "y")}
                >
                  {step.image.caption}
                </p>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
