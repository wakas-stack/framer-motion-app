/* Hand-drawn hat illustrations.

   Each hat is a single decorative SVG that inherits colour from CSS
   (currentColor + a lighter accent via the `--hat-accent` custom property),
   so one shape reads correctly on any warm tone block. They are purely
   decorative — every place that renders one supplies real alt/label text on
   the surrounding element and marks the SVG aria-hidden. */

const base = {
  viewBox: '0 0 200 150',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
  role: 'presentation',
}

function Snapback(p) {
  return (
    <svg {...base} {...p}>
      <path d="M28 104c-6-2-9-8-6-12 24-38 92-42 120-14 6 6 10 14 12 24 1 4-2 7-6 7H40c-5 0-9-2-12-5z" fill="currentColor" />
      <path d="M150 102c26 2 40 8 40 15 0 5-8 8-20 8h-40c8-9 15-16 20-23z" fill="var(--hat-accent)" />
      <rect x="34" y="103" width="118" height="9" rx="4" fill="var(--hat-accent)" opacity=".9" />
      <circle cx="93" cy="46" r="4" fill="var(--hat-accent)" />
    </svg>
  )
}

function Trucker(p) {
  return (
    <svg {...base} {...p}>
      <path d="M30 104c-6-2-9-8-6-12C48 54 116 50 144 78c6 6 10 14 12 22 1 4-2 8-6 8H42c-4 0-9-1-12-4z" fill="currentColor" />
      <g fill="var(--hat-accent)" opacity=".55">
        <rect x="60" y="66" width="6" height="6" rx="1" /><rect x="74" y="60" width="6" height="6" rx="1" /><rect x="88" y="58" width="6" height="6" rx="1" />
        <rect x="60" y="80" width="6" height="6" rx="1" /><rect x="74" y="76" width="6" height="6" rx="1" /><rect x="88" y="74" width="6" height="6" rx="1" />
      </g>
      <path d="M150 100c26 2 40 8 40 15 0 5-8 8-20 8h-42c9-9 17-16 22-23z" fill="var(--hat-accent)" />
    </svg>
  )
}

function FivePanel(p) {
  return (
    <svg {...base} {...p}>
      <path d="M40 100c-4-30 18-56 52-56s52 24 50 54c0 4-3 6-7 6H47c-4 0-6-2-7-4z" fill="currentColor" />
      <path d="M92 46v58M64 52l4 52M120 52l-4 52" stroke="var(--hat-accent)" strokeWidth="2.5" opacity=".5" fill="none" />
      <path d="M40 100c40 10 62 10 102 0 6 5 10 12 10 16 0 3-3 5-7 5H40c-4 0-6-2-6-5 0-5 3-12 6-16z" fill="var(--hat-accent)" />
    </svg>
  )
}

function Fitted(p) {
  return (
    <svg {...base} {...p}>
      <path d="M42 102c-6-34 16-60 51-60s57 26 51 60c-1 5-4 7-8 7H50c-4 0-7-2-8-7z" fill="currentColor" />
      <path d="M93 44c0 22-2 44-6 65M120 50c-2 20-4 40-4 58" stroke="var(--hat-accent)" strokeWidth="2" opacity=".4" fill="none" />
      <path d="M46 106c32 8 62 8 96 0l4 6c1 4-2 7-6 7H48c-4 0-7-3-6-7z" fill="var(--hat-accent)" />
    </svg>
  )
}

function Runner(p) {
  return (
    <svg {...base} {...p}>
      <path d="M30 100c-6-2-8-8-5-12 26-34 88-38 116-12 6 6 9 13 11 20 1 4-2 8-6 8H42c-4 0-9-1-12-4z" fill="currentColor" />
      <path d="M40 84c30-18 74-18 104 4" stroke="var(--hat-accent)" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
      <path d="M146 98c28 2 44 8 44 15 0 5-9 8-22 8h-44c10-9 18-16 22-23z" fill="var(--hat-accent)" />
    </svg>
  )
}

function Straw(p) {
  return (
    <svg {...base} {...p}>
      <ellipse cx="100" cy="112" rx="86" ry="20" fill="var(--hat-accent)" />
      <path d="M52 108c2-40 22-64 48-64s46 24 48 64z" fill="currentColor" />
      <rect x="52" y="96" width="96" height="12" rx="6" fill="var(--hat-accent)" opacity=".85" />
      <path d="M100 44v52" stroke="var(--hat-accent)" strokeWidth="2" opacity=".3" />
    </svg>
  )
}

function Rope(p) {
  return (
    <svg {...base} {...p}>
      <path d="M32 102c-6-2-9-8-6-12 24-36 90-40 118-14 6 6 10 14 12 22 1 4-2 8-6 8H44c-4 0-9-1-12-4z" fill="currentColor" />
      <path d="M40 92c6-3 12 3 18 0s12 3 18 0 12 3 18 0 12 3 18 0 12 3 18 0" stroke="var(--hat-accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M150 100c26 2 40 8 40 15 0 5-8 8-20 8h-42c9-9 17-16 22-23z" fill="var(--hat-accent)" />
    </svg>
  )
}

function Beanie(p) {
  return (
    <svg {...base} {...p}>
      <path d="M46 104c-6-40 18-66 54-66s60 26 54 66z" fill="currentColor" />
      <rect x="42" y="100" width="116" height="18" rx="9" fill="var(--hat-accent)" />
      <circle cx="100" cy="36" r="9" fill="var(--hat-accent)" />
      <path d="M74 44c0 22-2 42-4 58M100 40v62M126 44c0 20 2 40 4 58" stroke="var(--hat-accent)" strokeWidth="2" opacity=".3" fill="none" />
    </svg>
  )
}

const SHAPES = {
  snapback: Snapback,
  trucker: Trucker,
  fivepanel: FivePanel,
  fitted: Fitted,
  runner: Runner,
  straw: Straw,
  rope: Rope,
  beanie: Beanie,
}

export function Hat({ shape = 'snapback', className }) {
  const Shape = SHAPES[shape] || Snapback
  return <Shape className={className} />
}
