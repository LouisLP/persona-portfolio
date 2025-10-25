export function useAssetPath(path: string): string {
  // In development, Vite serves public assets directly from root
  // In production, we need the base URL for GitHub Pages
  const baseUrl = import.meta.env.DEV ? '' : import.meta.env.BASE_URL
  return `${baseUrl}${path}`
}
