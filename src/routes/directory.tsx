import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      {
        title: "Indian Jewelry Directory | The Jewels of India",
      },
      {
        name: "description",
        content:
          "Discover independent Indian jewelry brands, small businesses, and designers from the Indian diaspora on The Jewels of India directory.",
      },
      {
        property: "og:title",
        content: "Indian Jewelry Directory | The Jewels of India",
      },
      {
        property: "og:description",
        content:
          "Discover independent Indian jewelry brands, small businesses, and designers from the Indian diaspora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DirectoryPage,
});

function DirectoryPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% -10%, #f3ecd9 0%, #fbf7ee 60%, #fbf7ee 100%)",
        color: "var(--ink)",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-5 sm:py-12 md:py-16">
        <header className="text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold-deep)] sm:text-xs sm:tracking-[0.4em]">
            Directory
          </p>
          <h1 className="mt-3 font-serif text-2xl leading-tight sm:text-4xl md:text-5xl">
            Indian Jewelry Directory
          </h1>
          <h2 className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[color:var(--ink)]/70 sm:mt-5 sm:text-base md:text-lg">
            Discover independent Indian jewelry brands, small businesses, and designers from the Indian diaspora
          </h2>
        </header>

        <section className="flex flex-grow flex-col items-center justify-center py-16 text-center">
          {/* Diamond shine animation */}
          <div className="relative h-28 w-28 sm:h-36 sm:w-36">
            <div className="diamond-glow absolute inset-0 rounded-full bg-[#c9a24b]/20 blur-2xl" />
            <div className="shimmer-bar pointer-events-none absolute inset-0 z-10 rounded-full" />

            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-full w-full drop-shadow-[0_14px_34px_rgba(201,162,75,0.35)]"
            >
              <path
                d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
                fill="url(#diaFillDir)"
                opacity="0.35"
              />
              <path
                d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
                stroke="#B08A33"
                strokeWidth="1.6"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M12 52 L108 52"
                stroke="#B08A33"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path d="M40 37.5 L32 52" stroke="#B08A33" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M60 34 L60 52" stroke="#B08A33" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M80 37.5 L88 52" stroke="#B08A33" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M32 52 L60 112" stroke="#B08A33" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M60 52 L60 112" stroke="#B08A33" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M88 52 L60 112" stroke="#B08A33" strokeWidth="1.2" strokeLinecap="round" />
              <defs>
                <linearGradient id="diaFillDir" x1="60" y1="34" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F9E8B8" />
                  <stop offset="100%" stopColor="#C9A24B" />
                </linearGradient>
              </defs>
            </svg>

            <span className="star-sparkle star-1">✦</span>
            <span className="star-sparkle star-2">✦</span>
            <span className="star-sparkle star-3">✦</span>
            <span className="star-sparkle star-4">✦</span>
            <span className="star-sparkle star-5">✦</span>
            <span className="star-sparkle star-6">✦</span>
          </div>

          <p className="mt-8 font-serif text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl md:text-5xl">
            Coming Soon
          </p>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-[color:var(--ink)]/70 sm:text-base">
            A curated collection of independent Indian jewelry brands, small businesses, and designers from the diaspora is on its way.
          </p>
        </section>
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
    </main>
  );
}

export default DirectoryPage;
