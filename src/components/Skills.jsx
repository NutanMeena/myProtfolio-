import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="prompt">skills --list --format=table</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skills-group card" key={group.group}>
              <p className="skills-group-title">{group.group}</p>
              <div className="skills-items">
                {group.items.map((item) => (
                  <span className="tag skills-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
