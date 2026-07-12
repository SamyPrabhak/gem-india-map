import { useEffect, useState } from "react";

interface Props {
  onComplete?: () => void;
  minDuration?: number;
}

export function SplashScreen({ onComplete, minDuration = 2200 }: Props) {
  const [phase, setPhase] = useState<"enter" | "settle" | "exit" | "done">("enter");

  useEffect(() => {
    const settleTimer = setTimeout(() => setPhase("settle"), 400);
    const exitTimer = setTimeout(() => setPhase("exit"), minDuration - 500);
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
      className={`fixed inset-0 z-[2000] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ease-out ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 40%, #f3ecd9 0%, #fbf7ee 55%, #fbf7ee 100%)",
      }}
    >
      <div
        className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
          phase === "enter" ? "translate-y-4 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        {/* Diamond */}
        <div className="relative h-28 w-28 sm:h-36 sm:w-36">
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full drop-shadow-[0_12px_30px_rgba(201,162,75,0.35)]"
          >
            {/* Top facets */}
            <path d="M60 8L24 38H96L60 8Z" fill="url(#goldLight)" />
            <path d="M24 38L8 52H40L24 38Z" fill="url(#goldMid)" />
            <path d="M40 52L60 112L80 52H40Z" fill="url(#goldDeep)" />
            <path d="M80 52L112 52L96 38H80V52Z" fill="url(#goldMid)" />
            <path d="M24 38H40V52H8L24 38Z" fill="url(#goldPale)" />
            <path d="M96 38H80V52H112L96 38Z" fill="url(#goldPale)" />
            <path d="M40 38H80L60 8L40 38Z" fill="url(#goldHighlight)" />

            {/* Sparkle glints inside facets */}
            <path d="M36 46L60 18L84 46L60 112L36 46Z" fill="url(#glint)" opacity="0.45" />

            <defs>
              <linearGradient id="goldLight" x1="60" y1="8" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F9E8B8" />
                <stop offset="100%" stopColor="#C9A24B" />
              </linearGradient>
              <linearGradient id="goldMid" x1="60" y1="8" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C9A24B" />
                <stop offset="100%" stopColor="#9C7A2C" />
              </linearGradient>
              <linearGradient id="goldDeep" x1="60" y1="8" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9C7A2C" />
                <stop offset="100%" stopColor="#6E5320" />
              </linearGradient>
              <linearGradient id="goldPale" x1="60" y1="8" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F3ECD9" />
                <stop offset="100%" stopColor="#DDC58A" />
              </linearGradient>
              <linearGradient id="goldHighlight" x1="60" y1="8" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF8E1" />
                <stop offset="100%" stopColor="#C9A24B" />
              </linearGradient>
              <radialGradient id="glint" cx="60" cy="40" r="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          {/* Orbiting sparkle bursts */}
          <span className="sparkle sparkle-1" />
          <span className="sparkle sparkle-2" />
          <span className="sparkle sparkle-3" />
          <span className="sparkle sparkle-4" />
          <span className="sparkle sparkle-5" />
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
        .sparkle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, #fff 0%, #f9e8b8 40%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          animation: sparkleBurst 2.2s ease-in-out infinite;
        }
        .sparkle-1 { top: 10%; left: 50%; animation-delay: 0s; }
        .sparkle-2 { top: 30%; right: 5%; animation-delay: 0.35s; }
        .sparkle-3 { bottom: 25%; right: 12%; animation-delay: 0.7s; }
        .sparkle-4 { bottom: 15%; left: 15%; animation-delay: 1.05s; }
        .sparkle-5 { top: 35%; left: 5%; animation-delay: 1.4s; }

        @keyframes sparkleBurst {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          20% { opacity: 1; transform: scale(1.4) rotate(45deg); }
          45% { opacity: 0.6; transform: scale(0.6) rotate(90deg); }
          70% { opacity: 0; transform: scale(0) rotate(135deg); }
          100% { opacity: 0; transform: scale(0) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;
