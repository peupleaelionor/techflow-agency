import { useEffect, useRef, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    // Cacher le curseur par défaut
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Animer le curseur avec un léger délai (trail effect)
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      setMouseDown(true);
    };

    const handleMouseUp = () => {
      setMouseDown(false);
    };

    // Détecter les éléments interactifs
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches(
        'a, button, input, textarea, [role="button"], .interactive'
      );
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Curseur principal - cercle extérieur */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 mix-blend-screen transition-all duration-75 ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${mouseDown ? 'scale-75' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        {/* Cercle extérieur */}
        <div
          className={`absolute w-8 h-8 border-2 border-[#CCFF00] rounded-full transition-all duration-300 ${
            isHovering ? 'border-4 shadow-lg shadow-[#CCFF00]' : ''
          }`}
          style={{
            left: '-16px',
            top: '-16px',
          }}
        />
      </div>

      {/* Point intérieur - dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-50 w-2 h-2 bg-[#CCFF00] rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
          boxShadow: '0 0 8px rgba(204, 255, 0, 0.8)',
        }}
      />

      {/* Glow effect au survol */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-49 rounded-full opacity-20"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '60px',
            height: '60px',
            backgroundColor: '#CCFF00',
            transform: `translate(-50%, -50%)`,
            filter: 'blur(20px)',
          }}
        />
      )}
    </>
  );
}
