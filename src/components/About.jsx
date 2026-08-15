import { profile, education } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="prompt">cat about.md</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <p className="about-summary">{profile.summary}</p>

          <div className="about-side card">
            <div className="about-side-row">
              <span className="mono-dim">education</span>
              <span>{education.degree}</span>
            </div>
            <div className="about-side-row">
              <span className="mono-dim">institution</span>
              <span>{education.school}</span>
            </div>
            <div className="about-side-row">
              <span className="mono-dim">expected</span>
              <span>{education.year}</span>
            </div>
            <div className="about-side-row">
              <span className="mono-dim">based in</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
