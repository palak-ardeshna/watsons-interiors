// Generates a deterministic, editorial-looking SVG cover as a data URI.
// Replace these with real photos before launch — keep the same dimensions
// (1200x800, ratio 3:2) so layout and Core Web Vitals (CLS) stay stable.

export function coverDataUri(hue: number, label: string): string {
  const h = ((hue % 360) + 360) % 360;
  const c1 = `hsl(${h} 32% 78%)`;
  const c2 = `hsl(${(h + 24) % 360} 26% 62%)`;
  const c3 = `hsl(${(h + 8) % 360} 40% 88%)`;
  const safe = label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="${safe}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <circle cx="930" cy="180" r="150" fill="${c3}" opacity="0.5"/>
  <rect x="120" y="470" width="380" height="230" rx="18" fill="#ffffff" opacity="0.30"/>
  <rect x="120" y="470" width="380" height="40" rx="10" fill="#ffffff" opacity="0.35"/>
  <rect x="540" y="520" width="260" height="180" rx="16" fill="#2b2b2b" opacity="0.10"/>
  <text x="60" y="120" font-family="Georgia, serif" font-size="46" fill="#2b2b2b" opacity="0.55">Watsons Interiors</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const WORDS_PER_MIN = 220;
export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MIN));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
