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

          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-full w-full drop-shadow-[0_14px_34px_rgba(201,162,75,0.35)]"
          >
            {/* Crown (top) facets */}
            <path d="M60 6L22 38H98L60 6Z" fill="url(#crownCenter)" />
            <path d="M22 38L6 52H42L22 38Z" fill="url(#crownLeft)" />
            <path d="M98 38H78V52H114L98 38Z" fill="url(#crownRight)" />
            <path d="M22 38H42V52H6L22 38Z" fill="url(#crownSide)" />
            <path d="M98 38H78V52H114L98 38Z" fill="url(#crownSide)" />
            <path d="M42 38H78L60 6L42 38Z" fill="url(#tableHighlight)" />

            {/* Pavilion (bottom) facets */}
            <path d="M6 52L60 116L42 52H6Z" fill="url(#pavLeft)" />
            <path d="M114 52L60 116L78 52H114Z" fill="url(#pavRight)" />
            <path d="M42 52L60 116L78 52H42Z" fill="url(#pavCenter)" />

            {/* Shimmer overlay */}
            <path
              d="M60 6L6 52L60 116L114 52L60 6Z"
              fill="url(#shimmer)"
              className="diamond-shimmer"
              opacity="0.6"
            />

            <defs>
              <linearGradient id="crownCenter" x1="60" y1="6" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF8E1" />
                <stop offset="100%" stopColor="#C9A24B" />
              </linearGradient>
              <linearGradient id="crownLeft" x1="14" y1="38" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#DDC58A" />
                <stop offset="100%" stopColor="#C9A24B" />
              </linearGradient>
              <linearGradient id="crownRight" x1="106" y1="38" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#DDC58A" />
                <stop offset="100%" stopColor="#C9A24B" />
              </linearGradient>
              <linearGradient id="crownSide" x1="60" y1="38" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F3ECD9" />
                <stop offset="100%" stopColor="#DDC58A" />
              </linearGradient>
              <linearGradient id="tableHighlight" x1="60" y1="6" x2="60" y2="38" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F9E8B8" />
              </linearGradient>
              <linearGradient id="pavLeft" x1="6" y1="52" x2="60" y2="116" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C9A24B" />
                <stop offset="100%" stopColor="#6E5320" />
              </linearGradient>
              <linearGradient id="pavRight" x1="114" y1="52" x2="60" y2="116" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C9A24B" />
                <stop offset="100%" stopColor="#6E5320" />
              </linearGradient>
              <linearGradient id="pavCenter" x1="60" y1="52" x2="60" y2="116" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9C7A2C" />
                <stop offset="100%" stopColor="#5A4018" />
              </linearGradient>
              <linearGradient id="shimmer" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
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
        .diamond-shimmer {
          animation: shimmerSweep 2.2s linear infinite;
        }
        .star-sparkle {
          position: absolute;
          color: #c9a24b;
          font-size: 14px;
          line-height: 1;
          opacity: 0;
          text-shadow: 0 0 6px rgba(201, 162, 75, 0.8);
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
          0% { transform: translateX(-120px) skewX(-25deg); }
          100% { transform: translateX(120px) skewX(-25deg); }
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
