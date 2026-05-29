'use client';

import { useEffect, useRef } from 'react';

export default function LeafCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 30; // Thoda sa density badhaya premium feel ke liye
    let lastTime = performance.now(); // Delta time track karne ke liye

    // Premium Tea Brand Ke Organic Green Shades
    const leafColors = ['#8fad88', '#9caf88', '#739072', '#a0b99c'];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class LeafParticle {
      constructor() {
        this.reset();
        // Shuruat me screen par random height par pattiyaan bikhri hon taaki starting khali na lage
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 8 + 6;
        
        // Speed ko pixel-per-millisecond ke hissab se set kiya (Delta Time ke liye)
        this.speedY = Math.random() * 0.04 + 0.02; // Base downward speed
        this.speedX = Math.random() * 0.02 - 0.01; 
        
        this.angle = Math.random() * Math.PI * 2;
        this.spinSpeed = Math.random() * 0.001 - 0.0005; // Light slow rotation
        this.opacity = Math.random() * 0.25 + 0.15; // Subtle background opacity
        
        // Randomly pick an organic green shade
        this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
        
        // Har leaf ka apna sway frequency (hawa me jhoomne ka rhythm)
        this.swaySpeed = Math.random() * 0.002 + 0.001;
        this.swayOffset = Math.random() * 100;
      }

      update(deltaTime) {
        // Delta time se multiply kiya taaki 60Hz aur 144Hz screens dono par same speed ho
        this.y += this.speedY * deltaTime;
        
        // Wave-like smooth swaying effect
        const sway = Math.sin((this.y * this.swaySpeed) + this.swayOffset) * 0.3;
        this.x += (this.speedX * deltaTime) + sway;
        
        this.angle += this.spinSpeed * deltaTime;

        // Reset positions if leaves go out of bounds
        if (
          this.y > canvas.height + 20 ||
          this.x < -20 ||
          this.x > canvas.width + 20
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        // An Organic Tea Leaf Drawing Shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        // Left side curve
        ctx.quadraticCurveTo(this.size * 0.7, -this.size * 0.3, 0, this.size);
        // Right side curve (thoda asymmetry real organic feel ke liye)
        ctx.quadraticCurveTo(-this.size * 0.6, -this.size * 0.4, 0, -this.size);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new LeafParticle());
    }

    let animationFrameId;

    function animateParticles(currentTime) {
      // Calculate deltaTime (time difference between frames)
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update(deltaTime);
        p.draw();
      });
      
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    // Start animation loop pass current time
    animationFrameId = requestAnimationFrame((time) => {
      lastTime = time;
      animateParticles(time);
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId); // Component unmount par loop cancel karna safe hai
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}