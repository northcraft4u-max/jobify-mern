import { useEffect, useRef, useState } from 'react';

const MacCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const interactive = e.target.closest('a, button, input, select');
      setIsHovering(Boolean(interactive));
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;

      if (cursorRef.current) {
        const offset = isHovering ? 22 : 11;
        cursorRef.current.style.transform = `translate3d(${currentX - offset}px, ${currentY - offset}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      className={`mac-cursor ${isHovering ? 'is-hovering' : ''}`}
      aria-hidden='true'
    />
  );
};

export default MacCursor;