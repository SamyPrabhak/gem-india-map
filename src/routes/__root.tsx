import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="relative flex flex-col items-center">
        {/* Diamond with shimmer, matching the splash animation */}
        <div className="relative h-24 w-24 sm:h-28 sm:w-28">
          <div className="diamond-glow absolute inset-0 rounded-full bg-[color:var(--gold)]/20 blur-2xl" />
          <div className="shimmer-bar pointer-events-none absolute inset-0 z-10 rounded-full" />
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-full w-full drop-shadow-[0_14px_34px_rgba(201,162,75,0.35)]"
          >
            <path
              d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
              fill="url(#diaFill404)"
              opacity="0.35"
            />
            <path
              d="M28 40 Q60 34 92 40 L108 52 L60 112 L12 52 Z"
              stroke="var(--gold)"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M12 52 L108 52" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M40 37.5 L32 52" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M60 34 L60 52" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M80 37.5 L88 52" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M32 52 L60 112" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M60 52 L60 112" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M88 52 L60 112" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
            <defs>
              <linearGradient id="diaFill404" x1="60" y1="34" x2="60" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F5EDD8" />
                <stop offset="100%" stopColor="#C8A050" />
              </linearGradient>
            </defs>
          </svg>
          <span className="star-sparkle star-1">✦</span>
          <span className="star-sparkle star-2">✦</span>
          <span className="star-sparkle star-3">✦</span>
          <span className="star-sparkle star-4">✦</span>
        </div>

        <p className="label-gold mt-8">404</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-[color:var(--ink)] sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md font-serif text-sm text-[color:var(--text-muted)] sm:text-base">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center border border-[color:var(--gold-border)] bg-transparent px-6 py-2.5 text-sm font-medium text-[color:var(--gold-deep)] transition-colors hover:bg-[color:var(--gold)]/10"
        >
          Back to Map
        </Link>
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
          color: var(--gold);
          font-size: 13px;
          line-height: 1;
          opacity: 0;
          text-shadow: 0 0 8px rgba(200, 160, 80, 0.9);
          animation: starTwinkle 2.2s ease-in-out infinite;
          pointer-events: none;
        }
        .star-1 { top: 5%; left: 55%; animation-delay: 0s; }
        .star-2 { top: 22%; right: 0%; animation-delay: 0.3s; }
        .star-3 { bottom: 28%; right: 6%; animation-delay: 0.65s; }
        .star-4 { bottom: 12%; left: 12%; animation-delay: 1s; }

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

export const Route = createRootRoute({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Jewels of India | Interactive Map of Regional Indian Jewelry Traditions" },
      { name: "description", content: "Explore India's jewelry heritage region by region. The Jewels of India is an interactive map covering all 36 states and union territories, from Kundan in Rajasthan to Temple jewelry in Tamil Nadu." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "The Jewels of India | Interactive Map of Regional Indian Jewelry Traditions" },
      { property: "og:description", content: "Explore India's jewelry heritage region by region. The Jewels of India is an interactive map covering all 36 states and union territories, from Kundan in Rajasthan to Temple jewelry in Tamil Nadu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "The Jewels of India | Interactive Map of Regional Indian Jewelry Traditions" },
      { name: "twitter:description", content: "Explore India's jewelry heritage region by region. The Jewels of India is an interactive map covering all 36 states and union territories, from Kundan in Rajasthan to Temple jewelry in Tamil Nadu." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/157971f2-d78f-4f87-aa5a-6a89888d477c/id-preview-8d27c2ce--54a315f1-9075-475a-9a73-855d065b0458.lovable.app-1779586546653.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/157971f2-d78f-4f87-aa5a-6a89888d477c/id-preview-8d27c2ce--54a315f1-9075-475a-9a73-855d065b0458.lovable.app-1779586546653.png" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },

      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Philosopher:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function Header() {
  return (
    <header className="bg-[color:var(--ivory)]/90 px-4 py-4 backdrop-blur-sm sm:px-5">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between">
        <Link
          to="/"
          className="shrink-0 whitespace-nowrap font-display text-xl font-semibold text-[color:var(--ink)] sm:text-2xl md:text-3xl"
        >
          The Jewels of <span className="text-[color:var(--gold)]">India</span>
        </Link>
        <nav className="flex items-baseline gap-2 sm:gap-3">
          <div className="flex flex-col items-end">
            <Link
              to="/directory"
              activeProps={{ className: "!text-[color:var(--gold)] hover:!text-[color:var(--gold-deep)]" }}
              inactiveProps={{ className: "!text-[color:var(--gold-deep)] hover:!text-[color:var(--ink)]" }}
              className="label-gold !text-sm font-medium transition !leading-none"
            >
              Directory
            </Link>
            <div className="relative -mt-1 self-end">
              <span className="new-badge">New</span>
              <span className="badge-sparkle sparkle-1">✦</span>
              <span className="badge-sparkle sparkle-2">✦</span>
              <span className="badge-sparkle sparkle-3">✦</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <footer className="border-t border-[color:var(--gold-border)] px-4 py-6 text-center text-xs text-[color:var(--text-muted)]">
          <p>© 2026 Samyuktha Subbian Prabhakaran. All rights reserved.</p>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
