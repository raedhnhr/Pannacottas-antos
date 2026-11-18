// Agent-readiness: Accept: text/markdown en "/" devuelve llms.txt (la web es de una sola página).
export const config = { matcher: '/' };

export default function middleware(request) {
  if (!(request.headers.get('accept') || '').includes('text/markdown')) return;
  return fetch(new URL('/llms.txt', request.url));
}
