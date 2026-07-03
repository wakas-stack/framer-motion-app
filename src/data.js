/* Content for the EmpireCove retail homepage.
   Headings and copy are adapted from empirecove.com and reframed for a
   direct-to-consumer, lifestyle shopping experience. No remote assets:
   all imagery is hand-drawn SVG (see components/hats.jsx) so the site is
   self-contained, fast, and fully controllable for contrast/alt text. */

/* Rotating announcement bar messages. */
export const announcements = [
  'Free shipping on all orders over $250',
  'SUMMER25 — get 25% off your first order',
  'Free returns within 15 days',
]

export const nav = [
  {
    label: 'Hats',
    href: '#categories',
    submenu: [
      { label: 'Elite', href: '#categories' },
      { label: 'Performance', href: '#categories' },
      { label: '5 Panel', href: '#categories' },
      { label: 'Essential Snapback', href: '#categories' },
      { label: 'Trucker', href: '#categories' },
      { label: 'Fitted', href: '#categories' },
    ],
  },
  {
    label: 'Straw Hats',
    href: '#categories',
    submenu: [
      { label: 'Straw Hats', href: '#categories' },
      { label: 'Rope Hats', href: '#categories' },
      { label: 'Beanies', href: '#categories' },
    ],
  },
  { label: 'New In', href: '#popular' },
  { label: 'Gallery', href: '#lifestyle' },
  { label: 'About', href: '#difference' },
  { label: 'Contact', href: '#contact' },
]

/* Nine shop-by-category tiles. `shape` maps to an SVG in hats.jsx,
   `tone` selects a warm colour block for a lively, editorial grid. */
export const categories = [
  { name: 'Elite', tagline: 'Structured & refined', shape: 'fitted', tone: 'terra' },
  { name: 'Performance', tagline: 'Built to move', shape: 'runner', tone: 'forest' },
  { name: '5 Panel', tagline: 'Street-ready', shape: 'fivepanel', tone: 'gold' },
  { name: 'Essential Snapback', tagline: 'The everyday classic', shape: 'snapback', tone: 'ink' },
  { name: 'Trucker', tagline: 'Breezy mesh back', shape: 'trucker', tone: 'clay' },
  { name: 'Fitted', tagline: 'Your exact size', shape: 'fitted', tone: 'plum' },
  { name: 'Straw Hats', tagline: 'Sun-season staple', shape: 'straw', tone: 'gold' },
  { name: 'Rope Hats', tagline: 'Coastal character', shape: 'rope', tone: 'forest' },
  { name: 'Beanies', tagline: 'Cold-weather cosy', shape: 'beanie', tone: 'terra' },
]

/* Popular Picks — retail product cards. */
export const products = [
  { name: 'Coastline Trucker', price: 32, shape: 'trucker', tone: 'clay', colors: ['#B23A1E', '#2F4A3A', '#2A2016'], badge: 'Bestseller' },
  { name: 'Summit 5-Panel', price: 36, shape: 'fivepanel', tone: 'forest', colors: ['#2F4A3A', '#C9A227', '#EDE3D0'], badge: null },
  { name: 'Heritage Fitted', price: 42, shape: 'fitted', tone: 'ink', colors: ['#2A2016', '#6E5A3E', '#B23A1E'], badge: 'New' },
  { name: 'Harbor Snapback', price: 34, shape: 'snapback', tone: 'gold', colors: ['#C9A227', '#2A2016', '#EDE3D0'], badge: null },
  { name: 'Daybreak Straw', price: 48, shape: 'straw', tone: 'terra', colors: ['#D9B26A', '#EDE3D0', '#8F6A3A'], badge: 'Limited' },
  { name: 'Ridge Beanie', price: 28, shape: 'beanie', tone: 'plum', colors: ['#5B3A4B', '#2F4A3A', '#2A2016'], badge: null },
]

/* Headline stats (animated count-up). */
export const stats = [
  { value: 20000, suffix: 'K+', display: 20, label: 'Happy customers', kind: 'k' },
  { value: 1, suffix: 'M+', label: 'Hats shipped', kind: 'm' },
  { value: 50, suffix: '+', label: 'Signature styles', kind: 'plain' },
  { value: 5, suffix: '★', label: 'Average rating', kind: 'plain' },
]

/* "The EmpireCove Difference" — retail-framed promises. */
export const promises = [
  { icon: 'shipping', title: 'Worldwide shipping', body: 'Free on every order over $250, tracked to your door wherever you are.' },
  { icon: 'returns', title: 'Free 15-day returns', body: 'Changed your mind? Send it back within 15 days — no hidden costs, no fuss.' },
  { icon: 'preview', title: 'Free personalization previews', body: 'Add your own touch and see a free mock-up before you commit to a single stitch.' },
  { icon: 'clock', title: 'On-time, every time', body: 'Quick turnaround and honest timelines, so your order arrives exactly when promised.' },
  { icon: 'star', title: '5-star rated', body: 'Thousands of reviews from people who found their perfect fit and came back for more.' },
  { icon: 'quality', title: 'Quality you can feel', body: 'Durable materials and clean stitching on every panel, brim, and band.' },
]

/* "Find Your Fit" — three simple steps. */
export const findFit = [
  { title: 'Pick your silhouette', body: 'Snapback, trucker, fitted, straw or beanie — start with the shape that fits your day.' },
  { title: 'Choose your colours', body: 'Swap between our warm, wearable palettes until it feels unmistakably yours.' },
  { title: 'Make it personal', body: 'Add a logo or leave it clean, then preview a free mock-up before checkout.' },
]

export const testimonials = [
  {
    quote: 'The fit is perfect and it arrived on time with zero hidden costs. Exactly what was promised.',
    name: 'Maya R.',
    role: 'Verified buyer · Trucker',
    tone: 'terra',
  },
  {
    quote: 'Ordered from overseas and the worldwide shipping was quick. The free mock-up sold me before I bought.',
    name: 'Devon K.',
    role: 'Verified buyer · Custom 5-Panel',
    tone: 'forest',
  },
  {
    quote: 'Five stars. The straw hat is my summer go-to now, and returns were genuinely free and easy.',
    name: 'Priya S.',
    role: 'Verified buyer · Straw Hat',
    tone: 'gold',
  },
]

export const footerLinks = [
  {
    heading: 'Shop',
    links: ['Elite', 'Performance', 'Snapback', 'Trucker', 'Fitted', 'Straw Hats', 'Beanies'],
  },
  {
    heading: 'Help',
    links: ['Shipping & Delivery', 'Returns & Exchanges', 'Order Tracking', 'Size Guide', 'FAQ'],
  },
  {
    heading: 'Company',
    links: ['About', 'Gallery', 'Contact', 'Privacy', 'Terms'],
  },
]

export const contact = {
  phone: '+1 (800) 555-0142',
  phoneHref: 'tel:+18005550142',
  email: 'hello@empirecove.com',
  address: '1200 Harbor Way, Los Angeles, CA',
}
