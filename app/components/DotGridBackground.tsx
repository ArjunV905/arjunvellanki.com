"use client";

import { useEffect, useRef } from "react";

//-- Dot settings --//
const GRID_SPACING = 35;
const DOT_BASE_RADIUS = 1.5;
const DOT_ACTIVE_RADIUS = 2.5;
const ACTIVATION_RADIUS = 180;
const BASE_OPACITY = 0.08;
const ACTIVE_OPACITY = 0.70;
const MAX_DISPLACEMENT = 4;
const DOT_COLOR = "#4ec1b3";

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}
const DOT_RGB = hexToRgb(DOT_COLOR);

//-- Parallax settings --//
const SCROLL_PARALLAX = 0.1;
  // How fast dots ease toward their mouse target (0.02 = floaty, 0.08 = snappy)
const LERP_SPEED = 0.08;
  // Spring bounce when scroll stops (stiffness: pull strength, damping: how fast bounce settles)
const SPRING_STIFFNESS = 0.05;
const SPRING_DAMPING = 0.65;

interface Dot {
  gridX: number;
  gridY: number;
  dx: number;
  dy: number;
  opacity: number;
  radius: number;
}

export default function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const scrollRef = useRef(0);
  const springRef = useRef({ current: 0, velocity: 0 });
  const dotsRef = useRef<Dot[]>([]);
  const gridRef = useRef({ cols: 0, rows: 0, offsetX: 0, offsetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    scrollRef.current = window.scrollY;

    function buildGrid() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cols = Math.ceil(w / GRID_SPACING) + 1;
      const rows = Math.ceil(h / GRID_SPACING) + 3;
      const offsetX = (w - (cols - 1) * GRID_SPACING) / 2;
      const offsetY = (h - (rows - 1) * GRID_SPACING) / 2;

      gridRef.current = { cols, rows, offsetX, offsetY };

      const dots: Dot[] = [];
      for (let row = -1; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const gx = offsetX + col * GRID_SPACING;
          const gy = offsetY + row * GRID_SPACING;
          dots.push({ gridX: gx, gridY: gy, dx: 0, dy: 0, opacity: BASE_OPACITY, radius: DOT_BASE_RADIUS });
        }
      }
      dotsRef.current = dots;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function onMouseLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    function onScroll() {
      scrollRef.current = window.scrollY;
    }

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { x: mx, y: my } = mouseRef.current;
      const dots = dotsRef.current;
      const spring = springRef.current;

      const scrollTarget = -(scrollRef.current * SCROLL_PARALLAX);
      spring.velocity += (scrollTarget - spring.current) * SPRING_STIFFNESS;
      spring.velocity *= SPRING_DAMPING;
      spring.current += spring.velocity;

      const wrappedOffset = ((spring.current % GRID_SPACING) + GRID_SPACING) % GRID_SPACING;

      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const baseX = dot.gridX;
        const baseY = dot.gridY + wrappedOffset;

        const toMouseX = baseX - mx;
        const toMouseY = baseY - my;
        const dist = Math.sqrt(toMouseX * toMouseX + toMouseY * toMouseY);

        let targetDx = 0;
        let targetDy = 0;
        let targetOpacity = BASE_OPACITY;
        let targetRadius = DOT_BASE_RADIUS;

        if (dist < ACTIVATION_RADIUS) {
          const t = 1 - dist / ACTIVATION_RADIUS;
          const ease = t * t;
          targetOpacity = BASE_OPACITY + (ACTIVE_OPACITY - BASE_OPACITY) * ease;
          targetRadius = DOT_BASE_RADIUS + (DOT_ACTIVE_RADIUS - DOT_BASE_RADIUS) * ease;

          if (dist > 0) {
            const displacement = MAX_DISPLACEMENT * ease;
            targetDx = (toMouseX / dist) * displacement;
            targetDy = (toMouseY / dist) * displacement;
          }
        }

        dot.dx += (targetDx - dot.dx) * LERP_SPEED;
        dot.dy += (targetDy - dot.dy) * LERP_SPEED;
        dot.opacity += (targetOpacity - dot.opacity) * LERP_SPEED;
        dot.radius += (targetRadius - dot.radius) * LERP_SPEED;

        ctx!.beginPath();
        ctx!.arc(baseX + dot.dx, baseY + dot.dy, dot.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${DOT_RGB}, ${dot.opacity})`;
        ctx!.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
