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
          background: "var(--ivory)",
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
          <div className="diamond-glow absolute inset-0 rounded-full bg-[color:var(--gold)]/20 blur-2xl" />

          {/* Sweeping shimmer bar */}
          <div className="shimmer-bar pointer-events-none absolute inset-0 z-10 rounded-full" />

          <svg
            viewBox="0 0 200 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-full w-full drop-shadow-[0_14px_34px_rgba(201,162,75,0.35)]"
          >
            {/* Subtle fill for depth */}
            <path
              d="M45 26 L156 24 L191 62 L101 149 L9 64 Z"
              fill="url(#diaFill)"
              opacity="0.3"
            />

            {/* Outer diamond outline */}
            <path
              d="M45 26 L156 24 L191 62 L101 149 L9 64 Z"
              stroke="#C8A050"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />

            {/* Girdle line */}
            <path
              d="M9 64 L191 62"
              stroke="#C8A050"
              strokeWidth="2.6"
              strokeLinecap="round"
            />

            {/* Crown facets: three triangles with bases on the top edge */}
            <path d="M45 26 L68 62" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M85 27 L68 62" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M85 27 L100 62" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M115 26 L100 62" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M115 26 L132 62" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M156 24 L132 62" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />

            {/* Pavilion facets converging to the bottom point */}
            <path d="M42 63 L100 148" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M72 63 L100 148" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M128 63 L100 148" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M158 63 L100 148" stroke="#C8A050" strokeWidth="2.4" strokeLinecap="round" />

            <defs>
              <linearGradient id="diaFill" x1="100" y1="24" x2="100" y2="149" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F5EDD8" />
                <stop offset="100%" stopColor="#C8A050" />
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
        <h2 className="mt-6 font-display text-4xl leading-tight text-[color:var(--ink)] sm:text-5xl md:text-6xl">
          The Jewels of <span className="text-[color:var(--gold)]">India</span>
        </h2>
        <p className="label-gold mt-3">
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
          color: #c8a050;
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
