/* Homepage sections for EmpireCove. Each is a self-contained landmark with a
   proper heading; scroll reveals use the shared, reduced-motion-safe helpers. */
import { motion, Reveal, RevealGroup, Counter, fadeUp } from '../motion.jsx'
import { SectionHead, Button } from './ui.jsx'
import { Hat } from './hats.jsx'
import { ICONS, Star, ArrowUpRight, ArrowRight } from './icons.jsx'
import { categories, findFit, products, promises, testimonials } from '../data.js'

/* ---- Shop by Category ------------------------------------------------- */
export function Categories() {
  return (
    <section id="categories" className="ec-section" aria-labelledby="cat-title">
      <div className="ec-container">
        <SectionHead
          kicker="Shop by category"
          id="cat-title"
          title="Find the shape that fits your day"
          lead="Nine signature silhouettes, from structured Elite caps to breezy straw hats — every one built to be worn every day."
        />
        <RevealGroup className="ec-cats">
          {categories.map((c) => (
            <motion.a key={c.name} variants={fadeUp} className={`ec-cat tone-${c.tone}`} href={c.href || '#popular'}>
              <span className="ec-cat__art" aria-hidden="true"><Hat shape={c.shape} /></span>
              <span className="ec-cat__name">{c.name}</span>
              <span className="ec-cat__tag">{c.tagline}</span>
              <span className="ec-cat__go" aria-hidden="true"><ArrowUpRight size={18} /></span>
              <span className="screen-reader-text">Shop {c.name}</span>
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

/* ---- Find Your Fit ---------------------------------------------------- */
export function FindFit() {
  return (
    <section id="find-fit" className="ec-section ec-section--alt" aria-labelledby="fit-title">
      <div className="ec-container">
        <SectionHead
          center
          kicker="Find your fit"
          id="fit-title"
          title="Three easy steps to your perfect hat"
          lead="No guesswork, no upfront costs — just a simple path from browsing to a hat that feels like yours."
        />
        <RevealGroup className="ec-steps">
          {findFit.map((s, n) => (
            <motion.div key={s.title} variants={fadeUp} className="ec-step">
              <span className="ec-step__num" aria-hidden="true">{n + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

/* ---- Popular Picks (products) ---------------------------------------- */
function Product({ p }) {
  return (
    <motion.article variants={fadeUp} className={`ec-product tone-${p.tone}`}>
      <div className="ec-product__art">
        {p.badge && <span className="ec-product__badge">{p.badge}</span>}
        <Hat shape={p.shape} />
        <span className="screen-reader-text">{p.name} hat</span>
      </div>
      <div className="ec-product__body">
        <div className="ec-product__row">
          <h3>{p.name}</h3>
          <span className="ec-product__price">${p.price}</span>
        </div>
        <ul className="ec-swatches" aria-label={`${p.name} available colours`}>
          {p.colors.map((c) => (
            <li key={c} className="ec-swatch" style={{ background: c }}>
              <span className="screen-reader-text">Colour option</span>
            </li>
          ))}
        </ul>
        <button type="button" className="ec-product__add">
          Add to cart <ArrowRight size={18} aria-hidden="true" />
          <span className="screen-reader-text"> — {p.name}, ${p.price}</span>
        </button>
      </div>
    </motion.article>
  )
}

export function Popular() {
  return (
    <section id="popular" className="ec-section" aria-labelledby="pop-title">
      <div className="ec-container">
        <SectionHead
          kicker="Popular picks"
          id="pop-title"
          title="What everyone's wearing right now"
          lead="Our most-loved styles, ready to ship. Free returns within 15 days if the fit isn't quite right."
        />
        <RevealGroup className="ec-products">
          {products.map((p) => <Product key={p.name} p={p} />)}
        </RevealGroup>
      </div>
    </section>
  )
}

/* ---- Lifestyle split (Headwear that speaks your brand) --------------- */
export function Lifestyle() {
  const points = [
    'All categories of plain hats, ready to personalize',
    'Custom logo service with free mock-ups',
    'Flexible quantities — order one or a hundred',
    'Quick turnaround, delivered on time',
  ]
  return (
    <section id="lifestyle" className="ec-section ec-section--alt" aria-labelledby="life-title">
      <div className="ec-container">
        <div className="ec-split">
          <div className="ec-split__copy">
            <SectionHead
              kicker="Make it yours"
              id="life-title"
              title="Headwear that speaks your brand"
            />
            <p className="ec-lead">
              Wholesale headwear without the hassle. Add your own logo, pick your colours,
              and we'll show you a free preview before a single stitch is sewn.
            </p>
            <ul className="ec-split__list">
              {points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <Button as="a" variant="primary" href="#contact">
                Start your custom order <ArrowRight size={20} aria-hidden="true" />
              </Button>
            </div>
          </div>
          <Reveal className="ec-split__media">
            <Hat shape="fivepanel" />
            <span className="screen-reader-text">A custom five-panel hat ready for your logo.</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---- Marquee (decorative; pauses on hover/focus, off under reduced motion) */
export function Marquee() {
  const words = ['No hidden costs', 'Worldwide shipping', 'On time', 'Free mock-ups', '5-star rated', 'Low minimums']
  const loop = [...words, ...words]
  return (
    <div className="ec-marquee" aria-hidden="true">
      <div className="ec-marquee__track">
        {loop.map((w, i) => <span className="ec-marquee__item" key={i}>{w}</span>)}
      </div>
    </div>
  )
}

/* ---- Stats band ------------------------------------------------------ */
export function Stats() {
  return (
    <section className="ec-section ec-section--dark ec-on-dark" aria-labelledby="stats-title">
      <div className="ec-container">
        <h2 id="stats-title" className="screen-reader-text">EmpireCove by the numbers</h2>
        <Reveal className="ec-stats">
          <div>
            <span className="ec-stat__num"><Counter value={20} suffix="K+" /></span>
            <span className="ec-stat__label">Happy customers</span>
          </div>
          <div>
            <span className="ec-stat__num"><Counter value={1} suffix="M+" /></span>
            <span className="ec-stat__label">Hats shipped</span>
          </div>
          <div>
            <span className="ec-stat__num"><Counter value={50} suffix="+" /></span>
            <span className="ec-stat__label">Signature styles</span>
          </div>
          <div>
            <span className="ec-stat__num" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
              <Counter value={5} decimals={1} />
              <Star size={30} filled aria-hidden="true" style={{ color: 'var(--ec-gold)' }} />
            </span>
            <span className="ec-stat__label">Average rating</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---- The EmpireCove Difference (promises) ---------------------------- */
export function Difference() {
  return (
    <section id="difference" className="ec-section" aria-labelledby="diff-title">
      <div className="ec-container">
        <SectionHead
          center
          kicker="The EmpireCove difference"
          id="diff-title"
          title="Why 20,000+ customers keep coming back"
          lead="The good stuff you'd expect, plus the little things that make shopping for hats genuinely easy."
        />
        <RevealGroup className="ec-promises">
          {promises.map((pr) => {
            const Icon = ICONS[pr.icon] || ICONS.quality
            return (
              <motion.article key={pr.title} variants={fadeUp} className="ec-promise">
                <span className="ec-promise__icon"><Icon aria-hidden="true" /></span>
                <h3>{pr.title}</h3>
                <p>{pr.body}</p>
              </motion.article>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}

/* ---- Testimonials ---------------------------------------------------- */
export function Testimonials() {
  return (
    <section id="reviews" className="ec-section ec-section--alt" aria-labelledby="rev-title">
      <div className="ec-container">
        <SectionHead
          kicker="What customers are saying"
          id="rev-title"
          title="Loved by people who wear them daily"
        />
        <RevealGroup className="ec-quotes">
          {testimonials.map((t) => (
            <motion.figure key={t.name} variants={fadeUp} className={`ec-quote tone-${t.tone}`}>
              <div className="ec-quote__stars" aria-label="Rated 5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={18} filled aria-hidden="true" />)}
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption className="ec-quote__by">
                <span className="ec-quote__avatar" aria-hidden="true">{t.name.charAt(0)}</span>
                <span>
                  <span className="ec-quote__name" style={{ display: 'block' }}>{t.name}</span>
                  <span className="ec-quote__role">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
