// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const config = defineConfig();

export default async function viteConfig(
  environment: Parameters<typeof config>[0],
) {
  // Some build environments expose unresolved secret placeholders as literal
  // JavaScript expressions. Build plugins then reject those strings as invalid
  // define values. Remove only unresolved placeholders, never real credentials.
  for (const [key, value] of Object.entries(process.env)) {
    if (
      value?.includes(`globalThis.process.env.${key}`) &&
      value.includes("undefined")
    ) {
      delete process.env[key];
    }
  }

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
