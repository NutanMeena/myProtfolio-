import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="prompt">ls -la ./projects</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card card" key={p.name}>
              <div className="project-card-head">
                <span className="mono-dim">drwxr-xr-x  {p.name}/</span>
                <span className="tag">{p.kind}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="project-points">
                {p.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
