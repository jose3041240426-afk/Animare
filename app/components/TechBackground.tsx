"use client";

import { useEffect, useRef } from "react";

interface TechBackgroundProps {
  className?: string;
}

export default function TechBackground({ className = "" }: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lines: DataLine[] = [];
    let animationFrameId: number;
    let cw = 0;
    let ch = 0;

    class DataLine {
      x: number;
      y: number;
      z: number;
      length: number;
      speed: number;
      baseSpeed: number;
      angle: number;
      color: string;
      width: number;
      opacity: number;

      constructor() {
        this.z = Math.random() * 1 + 0.5;
        this.x = 0;
        this.y = 0;
        this.length = 0;
        this.baseSpeed = 0;
        this.speed = 0;
        this.width = 0;
        this.opacity = 0;
        this.angle = 0;
        this.color = "";
        this.reset();
        // Scatter initial positions across the canvas
        this.x = Math.random() * cw;
        this.y = Math.random() * ch;
      }

      reset() {
        // Spawn from a random edge
        const edge = Math.floor(Math.random() * 4);
        switch (edge) {
          case 0: this.x = -this.length - 50; this.y = Math.random() * ch; break; // left
          case 1: this.x = cw + this.length + 50; this.y = Math.random() * ch; break; // right
          case 2: this.x = Math.random() * cw; this.y = -this.length - 50; break; // top
          case 3: this.x = Math.random() * cw; this.y = ch + this.length + 50; break; // bottom
        }

        this.length = (Math.random() * 90 + 40) * this.z;
        this.baseSpeed = (Math.random() * 5 + 3) * this.z;
        this.speed = this.baseSpeed;
        this.width = (Math.random() * 1.5 + 0.5) * this.z;
        this.opacity = 0.15 + (this.z - 0.5) * 0.5;

        // Balanced directions: equal chance of going left/right/up/down and diagonals
        const allDirections = [
          0, Math.PI, // horizontal
          Math.PI / 2, -Math.PI / 2, // vertical
          Math.PI / 4, -Math.PI / 4, // diagonal right
          (3 * Math.PI) / 4, -(3 * Math.PI) / 4, // diagonal left
        ];
        this.angle = allDirections[Math.floor(Math.random() * allDirections.length)];

        this.color = Math.random() > 0.5 ? "255, 30, 30" : "30, 120, 255";
      }

      update() {
        const dx = this.x - mouseRef.current.x;
        const dy = this.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          this.speed = this.baseSpeed * (1 + (200 - dist) / 50);
        } else {
          this.speed += (this.baseSpeed - this.speed) * 0.1;
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Reset when fully off-screen
        const margin = this.length + 100;
        if (
          this.x > cw + margin ||
          this.x < -margin ||
          this.y > ch + margin ||
          this.y < -margin
        ) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;

        const endX = this.x - Math.cos(this.angle) * this.length;
        const endY = this.y - Math.sin(this.angle) * this.length;

        // Soft glow layer
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${this.color}, ${this.opacity * 0.25})`;
        ctx.lineWidth = this.width * 5;
        ctx.lineCap = "round";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Main line with gradient
        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Head dot only on closer lines
        if (this.z > 1.1) {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.width * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const init = () => {
      lines = [];
      const count = Math.min(Math.floor((cw * ch) / 15000), 60);
      for (let i = 0; i < count; i++) {
        lines.push(new DataLine());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Full clear — no ghosting
      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, cw, ch);

      for (let i = 0; i < lines.length; i++) {
        lines[i].update();
        lines[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      cw = parent ? parent.clientWidth : window.innerWidth;
      ch = parent ? parent.clientHeight : window.innerHeight;

      // Simple 1:1 mapping — no DPI scaling issues
      canvas.width = cw;
      canvas.height = ch;

      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} inset-0 -z-10 pointer-events-none`}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
