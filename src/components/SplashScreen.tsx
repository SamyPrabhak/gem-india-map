import { useEffect, useState } from "react";

interface Props {
  onComplete?: () => void;
  minDuration?: number;
}

export function SplashScreen({ onComplete, minDuration = 2400 }: Props) {
  const [phase, setPhase] = useState<"enter" | "settle" | "exit" | "done">("enter");

  useEffect(() => {
    const settleTimer = setTimeout(() => setPhase("settle"), 500);
    const exitTimer = setTimeout(() => setPhase("exit"), minDuration - 600);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, minDuration);

    return () => {
      clearTimeout(settleTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [minDuration, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[2000] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ease-out ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 40%, #f3ecd9 0%, #fbf7ee 55%, #fbf7ee 100%)",
      }}
    >
      <div
        className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
          phase === "enter"
            ? "translate-y-5 scale-95 opacity-0"
            : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        {/* Diamond container */}
        <div className="relative h-28 w-28 sm:h-36 sm:w-36">
          {/* Soft glow behind diamond */}
          <div className="diamond-glow absolute inset-0 rounded-full bg-[#c9a24b]/20 blur-2xl" />

          {/* Sweeping shimmer bar */}
          <div className="shimmer-bar pointer-events-none absolute inset-0 z-10 rounded-full" />

          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-full w-full drop-shadow-[0_14px_34px_rgba(201,162,75,0.35)]"
          >
            {/* Subtle fill for depth */}
            <path
              d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
              fill="url(#diaFill)"
              opacity="0.35"
            />

            {/* Outer diamond outline */}
            <path
              d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
              stroke="#7a4a3a"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />

            {/* Crown band bottom line */}
            <path
              d="M12 52 L108 52"
              stroke="#7a4a3a"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            {/* Crown vertical facet lines */}
            <path d="M40 37.5 L32 52" stroke="#7a4a3a" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M60 34 L60 52" stroke="#7a4a3a" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M80 37.5 L88 52" stroke="#7a4a3a" strokeWidth="1.2" strokeLinecap="round" />

            {/* Pavilion facet lines converging to bottom point */}
            <path d="M32 52 L60 112" stroke="#7a4a3a" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M60 52 L60 112" stroke="#7a4a3a" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M88 52 L60 112" stroke="#7a4a3a" strokeWidth="1.2" strokeLinecap="round" />

            <defs>
              <linearGradient id="diaFill" x1="60" y1="34" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F9E8B8" />
                <stop offset="100%" stopColor="#C9A24B" />
              </linearGradient>
            </defs>
          </svg>

          {/* Star sparkles around diamond */}
          <span className="star-sparkle star-1">✦</span>
          <span className="star-sparkle star-2">✦</span>
          <span className="star-sparkle star-3">✦</span>
          <span className="star-sparkle star-4">✦</span>
          <span className="star-sparkle star-5">✦</span>
          <span className="star-sparkle star-6">✦</span>
        </div>

        {/* Title */}
        <h2 className="mt-6 font-serif text-2xl tracking-wide text-[color:var(--ink)] sm:text-3xl">
          Jewels of <em className="text-[color:var(--gold-deep)]">India</em>
        </h2>
        <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.35em] text-[color:var(--gold-deep)] sm:text-xs">
          An Interactive Jewelry Map
        </p>
      </div>

      <style>{`
        .diamond-glow {
          animation: glowPulse 2.4s ease-in-out infinite;
        }
        .shimmer-bar {
          background: linear-gradient(
            110deg,
            transparent 35%,
            rgba(255, 255, 255, 0.85) 50%,
            transparent 65%
          );
          animation: shimmerSweep 2s linear infinite;
          mix-blend-mode: overlay;
        }
        .star-sparkle {
          position: absolute;
          color: #c9a24b;
          font-size: 14px;
          line-height: 1;
          opacity: 0;
          text-shadow: 0 0 8px rgba(201, 162, 75, 0.9);
          animation: starTwinkle 2.2s ease-in-out infinite;
        }
        .star-1 { top: 5%; left: 55%; animation-delay: 0s; }
        .star-2 { top: 22%; right: 0%; animation-delay: 0.3s; }
        .star-3 { bottom: 28%; right: 6%; animation-delay: 0.65s; }
        .star-4 { bottom: 12%; left: 12%; animation-delay: 1s; }
        .star-5 { top: 28%; left: 0%; animation-delay: 1.35s; }
        .star-6 { top: 48%; right: -8%; animation-delay: 1.7s; }

        @keyframes glowPulse {
          0%, 100% { transform: scale(0.92); opacity: 0.55; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(100%) skewX(-20deg); }
        }
        @keyframes starTwinkle {
          0% { opacity: 0; transform: scale(0.3) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.2) rotate(45deg); }
          55% { opacity: 0.5; transform: scale(0.7) rotate(90deg); }
          80%, 100% { opacity: 0; transform: scale(0.3) rotate(135deg); }
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;
