import { Link } from "@tanstack/react-router";

export function RegionNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl text-[color:var(--ink)]">Region not found</h1>
      <Link to="/" className="mt-6 inline-block text-[color:var(--gold-deep)] underline">
        Back to Map
      </Link>
    </main>
  );
}