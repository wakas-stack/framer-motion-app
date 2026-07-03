/* Inline SVG icons (Lucide-style). All decorative by default (aria-hidden);
   the accessible name comes from the surrounding button/link label. */

const I = ({ children, size = 22, stroke = 2, ...p }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true" focusable="false" {...p}
  >
    {children}
  </svg>
)

export const Search = (p) => <I {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></I>
export const Cart = (p) => <I {...p}><circle cx="9" cy="21" r="1.4" /><circle cx="19" cy="21" r="1.4" /><path d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21.5 7H6" /></I>
export const Menu = (p) => <I {...p}><path d="M3 6h18M3 12h18M3 18h18" /></I>
export const Chevron = (p) => <I size={16} {...p}><path d="m6 9 6 6 6-6" /></I>
export const ArrowRight = (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6" /></I>
export const ArrowUpRight = (p) => <I {...p}><path d="M7 17 17 7M8 7h9v9" /></I>
export const ArrowUp = (p) => <I {...p}><path d="M12 19V5M6 11l6-6 6 6" /></I>
export const Check = (p) => <I {...p}><path d="M20 6 9 17l-5-5" /></I>
export const Star = ({ filled, ...p }) => (
  <I fill={filled ? 'currentColor' : 'none'} {...p}><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.4 6.1 21l1.2-6.5L2.5 9.9l6.6-.9z" /></I>
)
export const Truck = (p) => <I {...p}><path d="M2 4h11v11H2zM13 8h4l3 3v4h-7" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></I>
export const Return = (p) => <I {...p}><path d="M3 7v6h6" /><path d="M3.5 13a9 9 0 1 0 2.3-9.3L3 7" /></I>
export const Sparkle = (p) => <I {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6" /><path d="M6.3 6.3l3 3M14.7 14.7l3 3M17.7 6.3l-3 3M9.3 14.7l-3 3" /></I>
export const Clock = (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I>
export const Shield = (p) => <I {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></I>
export const Phone = (p) => <I size={18} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></I>
export const Mail = (p) => <I size={18} {...p}><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6 9 7 9-7" /></I>
export const Pin = (p) => <I size={18} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="2.8" /></I>
export const Tag = (p) => <I size={16} {...p}><path d="M20 12.5 12.5 20 3 10.5V3h7.5z" /><circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" /></I>

export const ICONS = { shipping: Truck, returns: Return, preview: Sparkle, clock: Clock, star: Star, quality: Shield }
