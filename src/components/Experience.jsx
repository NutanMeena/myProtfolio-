import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="prompt">journalctl -u internship --since "may 2026"</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="exp-list">
          {experience.map((job) => (
            <div className="exp-item card" key={job.company}>
              <div className="exp-item-head">
                <div>
                  <h3 className="exp-role">{job.role}</h3>
                  <p className="exp-company">{job.company}</p>
                </div>
                <div className="exp-meta">
                  <span className="tag">{job.period}</span>
                  <span className="mono-dim">{job.meta}</span>
                </div>
              </div>
              <ul className="exp-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
