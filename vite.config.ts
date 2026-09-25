// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.

// Some build environments expose unresolved secret placeholders as literal
// JavaScript expressions. Remove them before defineConfig can capture them.
for (const [key, value] of Object.entries(process.env)) {
  if (
    value?.includes("globalThis.process.env.") &&
    value.includes("??")
  ) {
    delete process.env[key];
  }
}

// This import must happen after sanitization. Static imports execute before the
// module body and let downstream plugins capture malformed placeholder values.
const { defineConfig } = await import("@lovable.dev/vite-tanstack-config");

const serviceEnvKeys = [
  "SUPABASE_ANON_KEY",
  "SUPABASE_PROJECT_ID",
  "SUPABASE_URL",
] as const;

const safeServiceDefines = Object.fromEntries(
  serviceEnvKeys.flatMap((key) => {
    const value = process.env[key];
    const replacement = value === undefined ? "undefined" : JSON.stringify(value);
    return [
      [`process.env.${key}`, replacement],
      [`import.meta.env.${key}`, replacement],
    ];
  }),
);

const config = defineConfig({
  // The preview proxy can close in-flight requests during rebuilds. Its SSR
  // reporter promotes those normal ECONNRESET events into blank-screen errors.
  ssrErrorLogger: false,
  vite: {
    define: safeServiceDefines,
    environments: {
      client: { define: safeServiceDefines },
      server: { define: safeServiceDefines },
    },
  },
});

export default async function viteConfig(
  environment: Parameters<typeof config>[0],
) {
  const resolved = await config(environment);
  const isPlaceholder = (v: unknown) =>
    typeof v === "string" && /globalThis\.process\.env\.\w+\s*\?\?/.test(v);
  const strip = (define?: Record<string, unknown>) => {
    if (!define) return;
    for (const k of Object.keys(define)) {
      if (isPlaceholder(define[k])) delete define[k];
    }
  };
  strip(resolved.define as Record<string, unknown> | undefined);
  resolved.plugins = [
    ...(resolved.plugins ?? []),
    {
      name: "strip-unresolved-env-placeholders",
      enforce: "post",
      configResolved(c: { define?: Record<string, unknown> }) {
        strip(c.define);
      },
      configEnvironment(_name: string, env: { define?: Record<string, unknown> }) {
        strip(env.define);
      },
    },
  ];
  return resolved;
}
