import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Very small in-memory rate limit per cold start (best-effort only —
// swap for a real store like Upstash Redis if you need it across
// invocations).
const seen = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip) {
  const now = Date.now();
  const entry = seen.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  seen.set(ip, entry);
  return entry.count > MAX_PER_WINDOW;
}

app.post("/api/contact", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: "Too many requests. Try again in a minute." });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "name, email and message are required." });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ ok: false, error: "That email address doesn't look valid." });
  }
  if (message.length > 4000) {
    return res.status(400).json({ ok: false, error: "Message is too long." });
  }

  // TODO: wire this up to a real email/notification service, e.g.
  // Resend, SendGrid, or Nodemailer with SMTP credentials in env vars.
  // For now, submissions are logged so you can confirm delivery in
  // Vercel's function logs.
  console.log("[contact] new message", { name, email, messageLength: message.length });

  return res.status(200).json({ ok: true });
});

app.use((req, res) => {
  res.status(404).json({ ok: false, error: "Not found" });
});

export default app;
