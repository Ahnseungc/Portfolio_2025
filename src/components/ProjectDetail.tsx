import type { Project } from "@/data/portfolio";
import ProjectImage from "@/components/ProjectImage";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="project-detail">
      <header className="project-detail__header">
        <span className="eyebrow">{project.tag}</span>
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__desc">{project.desc}</p>

        <dl className="project-detail__meta">
          <div>
            <dt>분류</dt>
            <dd>{project.company}</dd>
          </div>
          <div>
            <dt>기간</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>역할</dt>
            <dd>{project.role}</dd>
          </div>
          {project.repoUrl && (
            <div>
              <dt>저장소</dt>
              <dd>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  {project.repoUrl.replace("https://github.com/", "github.com/")}
                </a>
              </dd>
            </div>
          )}
          {project.demoUrl && (
            <div>
              <dt>데모</dt>
              <dd>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  {project.demoUrl.replace("https://", "")}
                </a>
              </dd>
            </div>
          )}
        </dl>

        <div className="project-detail__chips">
          {project.chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </header>

      <section className="project-detail__section">
        <h2>개요</h2>
        <p>{project.overview}</p>
      </section>

      <section className="project-detail__section">
        <h2>핵심 성과</h2>
        <ul className="project-detail__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.sections.map((section) => (
        <section className="project-detail__section" key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}

      <section className="project-detail__section">
        <h2>화면</h2>
        <p className="project-detail__gallery-note">
          {project.images.length > 0
            ? "아래는 README·공개 자료에 있는 화면입니다."
            : "공개된 스크린샷이 없어 개요만 적어 두었습니다."}
        </p>
        {project.images.length > 0 && (
        <div className="project-detail__gallery">
          {project.images.map((image, index) => (
            <ProjectImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              priority={index === 0}
            />
          ))}
        </div>
        )}
      </section>
    </article>
  );
}
