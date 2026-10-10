/** Prefixes a `public/` path with Vite's base, so it resolves on GitHub Pages too. */
export function assetPath(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
}
