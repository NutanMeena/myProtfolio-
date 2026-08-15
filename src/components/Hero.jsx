import { useEffect, useState } from "react";
import { profile } from "../data/resume";
import avatar from "../assets/avatar.png";

const BOOT_LINES = [
  { text: "connecting to nutanmeena.dev ...", delay: 250 },
  { text: "provisioning infrastructure with terraform apply", delay: 350 },
  { text: "container status: 3/3 running", delay: 300 },
  { text: "rollout deployment/portfolio ... done", delay: 300 },
];

export default function Hero() {
  const [lines, setLines] = useState([]);
  const [showIdentity, setShowIdentity] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLines([]);
      setShowIdentity(false);
      for (const line of BOOT_LINES) {
        await sleep(line.delay);
        if (cancelled) return;
        setLines((prev) => [...prev, line.text]);
      }
      await sleep(300);
      if (cancelled) return;
      setShowIdentity(true);
    }
    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="terminal-window" role="img" aria-label={`Terminal boot sequence resolving to ${profile.name}, ${profile.role}`}>
          <div className="terminal-bar">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <span className="terminal-title">bash — deploy.sh</span>
          </div>
          <div className="terminal-body">
            {lines.map((line, i) => (
              <div className="boot-line" key={i}>
                <span className="ok">[ok]</span> {line}
              </div>
            ))}

            {showIdentity && (
              <div className="identity-block">
                <div className="boot-line">
                  <span className="ok">[ok]</span> whoami
                </div>
                <div className="identity-row">
                  <img
                    className="identity-avatar"
                    src={avatar}
                    alt={profile.name}
                    width={112}
                    height={112}
                  />
                  <div>
                    <h1 className="identity-name">{profile.name}</h1>
                    <p className="identity-role">{profile.role}</p>
                  </div>
                </div>
                <p className="identity-tagline">{profile.tagline}</p>

                <div className="hero-actions">
                  <a className="btn btn-primary" href="#projects">
                    ./view-projects
                  </a>
                  <a className="btn" href="/resume.pdf" download="Nutan_Meena_Resume.pdf">./download-resume</a>
                  <a className="btn" href="#contact">
                    ./contact --connect
                  </a>
                </div>
              </div>
            )}

            <span className="cursor" aria-hidden="true">
              _
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
