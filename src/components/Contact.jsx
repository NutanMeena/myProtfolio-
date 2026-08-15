import { useState } from "react";
import { profile } from "../data/resume";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  MailIcon,
  WhatsAppIcon,
} from "./Icons";

const CHANNELS = [
  {
    label: "GitHub",
    handle: `github.com/${profile.githubHandle}`,
    href: profile.github,
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    handle: `in/${profile.linkedinHandle}`,
    href: profile.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    handle: `@${profile.instagramHandle}`,
    href: profile.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "Gmail",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "WhatsApp",
    handle: profile.phone,
    href: `https://wa.me/${profile.whatsapp}`,
    Icon: WhatsAppIcon,
  },
];

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section-last">
      <div className="container">
        <div className="section-head">
          <span className="prompt">ping contact --connect</span>
          <h2 className="section-title">Let's build something</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-channels">
            {CHANNELS.map(({ label, handle, href, Icon }) => (
              <a
                className="contact-channel card"
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="contact-channel-icon" />
                <div>
                  <p className="contact-channel-label">{label}</p>
                  <p className="contact-channel-handle mono-dim">{handle}</p>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form card" onSubmit={onSubmit}>
            <label className="form-field">
              <span className="mono-dim">name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
              />
            </label>
            <label className="form-field">
              <span className="mono-dim">email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
              />
            </label>
            <label className="form-field">
              <span className="mono-dim">message</span>
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="What are you building?"
              />
            </label>

            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "sending..." : "./send-message"}
            </button>

            {status === "sent" && (
              <p className="form-status form-status-ok">
                [ok] message delivered — I'll reply by email soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-err">
                [error] delivery failed — email me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
