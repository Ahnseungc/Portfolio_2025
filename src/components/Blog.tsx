"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { VelogPost } from "@/lib/velog";
import { excerpt, formatVelogDate, VELOG_USERNAME } from "@/lib/velog";

type BlogProps = {
  posts: VelogPost[];
};

export default function Blog({ posts }: BlogProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="blog section-pad" id="writing" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">03 — WRITING</span>
          <h2 className="section-title" data-reveal="">
            블로그
          </h2>
          <p className="lead" data-reveal="fade">
            자세한 문제 해결 과정은 Velog에서 확인할 수 있습니다.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map((post) => (
              <a
                key={post.id}
                className="blog-card"
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal=""
              >
                <div className="blog-card__media">
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                      className="blog-card__thumb"
                    />
                  ) : (
                    <div className="blog-card__placeholder">
                      <span>velog</span>
                    </div>
                  )}
                </div>
                <div className="blog-card__body">
                  <time className="blog-card__date" dateTime={post.releasedAt}>
                    {formatVelogDate(post.releasedAt)}
                  </time>
                  <h3>{post.title}</h3>
                  {post.shortDescription && (
                    <p>{excerpt(post.shortDescription)}</p>
                  )}
                  {post.tags.length > 0 && (
                    <div className="blog-card__tags">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="blog-card__link">
                    자세히 보기 <span className="arrow">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="blog-empty" data-reveal="">
            글 목록을 불러오지 못했습니다.{" "}
            <a href={`https://velog.io/@${VELOG_USERNAME}/posts`} target="_blank" rel="noopener noreferrer">
              Velog에서 보기
            </a>
          </p>
        )}

        <div className="blog-more" data-reveal="">
          <a
            href={`https://velog.io/@${VELOG_USERNAME}/posts`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            블로그로 이동 <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
