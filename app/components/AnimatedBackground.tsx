'use client';

import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  phoneColor?: string;
  phoneCount?: number;
}

class Phone {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  alphaSpeed: number;
  rotation: number;
  rotationSpeed: number;

  constructor(
    canvas: HTMLCanvasElement, 
    color: string
  ) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 15;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.color = color;
    this.alpha = Math.random() * 0.1 + 0.08;
    this.alphaSpeed = Math.random() * 0.004 - 0.002;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = Math.random() * 0.002 - 0.001;
  }

  update(canvas: HTMLCanvasElement) {
    if (this.x + this.size / 2 > canvas.width || this.x - this.size / 2 < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.size * 1.8 / 2 > canvas.height || this.y - this.size * 1.8 / 2 < 0) {
      this.speedY = -this.speedY;
    }

    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
    
    this.alpha += this.alphaSpeed;
    if (this.alpha <= 0.08 || this.alpha >= 0.18) {
      this.alphaSpeed = -this.alphaSpeed;
      this.alpha = Math.max(0.08, Math.min(this.alpha, 0.18));
    }
  }

  drawPhone(ctx: CanvasRenderingContext2D) {
    const width = this.size;
    const height = width * 1.8;
    const borderRadius = width * 0.15;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = this.alpha;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 8;

    ctx.beginPath();
    ctx.moveTo(-width / 2 + borderRadius, -height / 2);
    ctx.lineTo(width / 2 - borderRadius, -height / 2);
    ctx.arcTo(width / 2, -height / 2, width / 2, -height / 2 + borderRadius, borderRadius);
    ctx.lineTo(width / 2, height / 2 - borderRadius);
    ctx.arcTo(width / 2, height / 2, width / 2 - borderRadius, height / 2, borderRadius);
    ctx.lineTo(-width / 2 + borderRadius, height / 2);
    ctx.arcTo(-width / 2, height / 2, -width / 2, height / 2 - borderRadius, borderRadius);
    ctx.lineTo(-width / 2, -height / 2 + borderRadius);
    ctx.arcTo(-width / 2, -height / 2, -width / 2 + borderRadius, -height / 2, borderRadius);
    ctx.closePath();
    ctx.stroke();
    
    ctx.restore();
  }
}

export default function AnimatedBackground({
  phoneColor = 'rgba(165, 180, 252, 0.5)',
  phoneCount = 25
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phonesRef = useRef<Phone[]>([]);
  const animationFrameRef = useRef<number>(0);
  const gradientTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      phonesRef.current = Array(phoneCount)
        .fill(null)
        .map(() => new Phone(canvas, phoneColor));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      gradientTimeRef.current = timestamp * 0.0001;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      const hue1 = (Math.sin(gradientTimeRef.current * 0.3) + 1) * 10 + 230;
      const hue2 = (Math.cos(gradientTimeRef.current * 0.5) + 1) * 20 + 250;
      
      gradient.addColorStop(0, `hsla(${hue1}, 70%, 5%, 1)`);
      gradient.addColorStop(0.5, `hsla(${hue2}, 60%, 8%, 1)`);
      gradient.addColorStop(1, `hsla(${hue1 + 20}, 80%, 3%, 1)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalAlpha = 0.02;
      for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      }
      
      phonesRef.current.forEach(phone => {
        phone.update(canvas);
        phone.drawPhone(ctx);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [phoneColor, phoneCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
} 