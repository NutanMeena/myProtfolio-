import { useEffect, useRef } from "react";

// Ambient background: columns of 0/1 fall like packets streaming through
// a network. Occasional columns "resolve" into a brighter accent glyph -
// a nod to bits being provisioned into infrastructure.
export default function BinaryRain() {
  const canvasRef = useRef(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, columns, drops, speeds, dpr;
    let rafId;

    const fontSize = 15;

    function setup() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
      speeds = new Array(columns).fill(0).map(() => 0.35 + Math.random() * 0.6);
    }

    setup();

    let last = performance.now();

    function frame(now) {
      const dt = now - last;
      last = now;

      ctx.fillStyle = "rgba(11, 15, 20, 0.18)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < columns; i++) {
        const bit = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isHead = Math.random() > 0.985;
        ctx.fillStyle = isHead
          ? "rgba(79, 209, 197, 0.85)"
          : "rgba(139, 155, 171, 0.28)";
        ctx.fillText(bit, x, y);

        drops[i] += speeds[i] * (dt / 16.7);
        if (y > height && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
        }
      }

      if (!reduceMotion.current) {
        rafId = requestAnimationFrame(frame);
      }
    }

    if (reduceMotion.current) {
      // Paint a single static-ish frame and stop.
      ctx.fillStyle = "rgba(11, 15, 20, 1)";
      ctx.fillRect(0, 0, width, height);
    } else {
      rafId = requestAnimationFrame(frame);
    }

    function onResize() {
      setup();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="binary-rain" aria-hidden="true" />;
}
