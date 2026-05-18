
import { useEffect, useRef, useCallback } from 'react';

const COLORS = ['#FFD700', '#FF6B9D', '#74B9FF', '#55EFC4', '#A29BFE', '#FDCB6E', '#FF7675'];
const SHAPES = ['✦', '✶', '⋆', '✸', '★', '✺'];

const MouseSparkle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createSparkle = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;

    const el = document.createElement('span');
    const size = Math.random() * 10 + 8;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const angle = Math.random() * 360;
    const distance = Math.random() * 50 + 25;
    const tx = Math.cos((angle * Math.PI) / 180) * distance;
    const ty = Math.sin((angle * Math.PI) / 180) * distance;

    el.textContent = shape;
    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: ${size}px;
      color: ${color};
      pointer-events: none;
      z-index: 9999;
      user-select: none;
      line-height: 1;
      transform: translate(-50%, -50%);
    `;

    containerRef.current.appendChild(el);

    el.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
        { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0.2) rotate(${Math.random() > 0.5 ? 180 : -180}deg)`, opacity: 0 },
      ],
      { duration: 600 + Math.random() * 200, easing: 'ease-out', fill: 'forwards' }
    ).onfinish = () => el.remove();
  }, []);

  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 40) return;
      lastTime = now;

      createSparkle(e.clientX, e.clientY);
      if (Math.random() > 0.4) {
        setTimeout(() => {
          createSparkle(
            e.clientX + (Math.random() - 0.5) * 16,
            e.clientY + (Math.random() - 0.5) * 16
          );
        }, 60);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [createSparkle]);

  return <div ref={containerRef} className="pointer-events-none" />;
};

export default MouseSparkle;
