// Local dev server so `npm run server` gives you a real Node/Express
// process to test against, mirroring the /api/contact serverless
// function that actually ships to Vercel.
import express from "express";
import cors from "cors";
import contactApp from "../api/contact.js";

const app = express();
app.use(cors());
app.get("/health", (req, res) => res.json({ ok: true }));
app.use(contactApp);

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`[server] Express API listening on http://localhost:${PORT}`);
});
