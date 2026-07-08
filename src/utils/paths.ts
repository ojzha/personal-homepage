const base = import.meta.env.BASE_URL || "/";

export function withBase(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, "");
  return `${normalizedBase}${normalizedPath}`;
}

export function isActivePath(currentPath: string, href: string) {
  const target = withBase(href);
  const normalizedCurrent = currentPath.endsWith("/") ? currentPath : `${currentPath}/`;
  const normalizedTarget = target.endsWith("/") ? target : `${target}/`;
  return normalizedCurrent === normalizedTarget;
}
