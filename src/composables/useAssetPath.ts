export function useAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL

  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  // In dev, BASE_URL is '/', so we just need a leading slash
  // In prod, BASE_URL is '/persona-portfolio/', which already has trailing slash
  return base === '/' ? `/${cleanPath}` : `${base}${cleanPath}`
}
