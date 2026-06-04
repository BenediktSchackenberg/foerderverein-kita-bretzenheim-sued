/**
 * Erzeugt einen Link relativ zu import.meta.env.BASE_URL.
 * url('/anmeldung') → '/<base>/anmeldung'  oder  '/anmeldung'  je nach Deployment.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
