export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono-dim">
          {"// "}N = 01001110, M = 01001101
        </span>
        <span className="mono-dim">© {year} Nutan Meena — built with React + Express, shipped on Vercel</span>
      </div>
    </footer>
  );
}
