"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  opacity?: number; // 0.0 - 1.0
};

// Lightweight, CPU-friendly animated grain using seeded PRNG into ImageData.
// Disabled for prefers-reduced-motion. Falls back to a static subtle pattern.
export default function NoiseCanvas({ className, opacity = 0.07 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;

    const resize = () => {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      const dpr = Math.min(Math.max(devicePixelRatio || 1, 1), 2);
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Static fallback when reduced motion is on
    if (prefersReduced) {
      drawFrame(ctx, canvas.width, canvas.height, 1);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }

    const render = () => {
      if (!running) return;
      drawFrame(ctx, canvas.width, canvas.height);
      raf = window.requestAnimationFrame(render);
    };
    raf = window.requestAnimationFrame(render);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={
        className ??
        "pointer-events-none fixed inset-0 z-[-1] mix-blend-overlay [image-rendering:pixelated]"
      }
      style={{ opacity }}
    />
  );
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  framesPerUpdate = 2
) {
  // Downsampled buffer for performance
  const scale = 0.5;
  const bw = Math.max(1, Math.floor(w * scale));
  const bh = Math.max(1, Math.floor(h * scale));
  const imageData = ctx.createImageData(bw, bh);
  const data = imageData.data;

  // Temporal blending to keep grain calm
  const t = (performance.now() / (1000 / framesPerUpdate)) | 0;
  const seed = (t * 9301 + 49297) % 233280;
  let x = seed;
  const rand = () => {
    x = (1103515245 * x + 12345) & 0x7fffffff;
    return (x >>> 16) / 0x7fff;
  };

  for (let i = 0; i < bw * bh; i++) {
    const v = 200 + Math.floor(rand() * 40); // light gray noise
    const o = i * 4;
    data[o] = v;
    data[o + 1] = v;
    data[o + 2] = v;
    data[o + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
  ctx.drawImage(
    ctx.canvas,
    0,
    0,
    bw,
    bh,
    0,
    0,
    ctx.canvas.width,
    ctx.canvas.height
  );
}


