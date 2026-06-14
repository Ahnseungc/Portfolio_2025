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
            <dt>회사</dt>
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
          실제 서비스 화면을 아래에 첨부할 수 있습니다.{" "}
          <code>public/projects/{project.slug}/</code> 경로에 이미지를 넣으면 자동으로 표시됩니다.
        </p>
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
      </section>
    </article>
  );
}
