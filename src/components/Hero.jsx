/* Hero — warm, editorial, lively. Staggered entrance, opacity-first so it
   stays safe under reduced motion (handled globally by MotionConfig).
   The "media" is a hand-built shelf of hats rather than a stock slideshow. */
import { motion } from '../motion.jsx'
import { Button, Kicker } from './ui.jsx'
import { Hat } from './hats.jsx'
import { ArrowRight, Star, Truck } from './icons.jsx'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const shelf = [
  { shape: 'snapback', label: 'Snapback' },
  { shape: 'trucker', label: 'Trucker' },
  { shape: 'straw', label: 'Straw' },
  { shape: 'beanie', label: 'Beanie' },
]

export default function Hero() {
  return (
    <section className="ec-hero" aria-labelledby="hero-title">
      <div className="ec-container">
        <div className="ec-hero__grid">
          <motion.div className="ec-hero__copy" variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Kicker>Premium Branded Hats</Kicker>
            </motion.div>
            <motion.h1 id="hero-title" variants={item}>
              Your trusted American source for <span className="ec-underline">premium hats</span>.
            </motion.h1>
            <motion.p className="ec-hero__lead" variants={item}>
              Find your perfect fit from our collection of hats and straw hats —
              made to be worn, loved, and lived in.
            </motion.p>
            <motion.div className="ec-hero__actions" variants={item}>
              <Button as="a" variant="primary" href="#popular">
                Shop the collection <ArrowRight size={20} aria-hidden="true" />
              </Button>
              <Button as="a" variant="ghost" href="#categories">Explore catalog</Button>
            </motion.div>
            <motion.dl className="ec-hero__stats" variants={item}>
              <div className="ec-hero__stat">
                <dt className="screen-reader-text">Customers</dt>
                <dd style={{ margin: 0 }}><strong>20K+</strong><span>Happy customers</span></dd>
              </div>
              <div className="ec-hero__stat">
                <dt className="screen-reader-text">Hats shipped</dt>
                <dd style={{ margin: 0 }}><strong>1M+</strong><span>Hats shipped</span></dd>
              </div>
              <div className="ec-hero__stat">
                <dt className="screen-reader-text">Rating</dt>
                <dd style={{ margin: 0 }}>
                  <strong style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    5.0 <Star size={20} filled aria-hidden="true" style={{ color: 'var(--ec-gold-ink)' }} />
                  </strong>
                  <span>5-star rated</span>
                </dd>
              </div>
            </motion.dl>
          </motion.div>

          <motion.div
            className="ec-hero__media"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <span className="ec-hero__badge ec-hero__badge--tl">
              <Truck size={16} aria-hidden="true" /> Free shipping over $250
            </span>
            <div className="ec-hero__card">
              <div className="ec-hero__shelf" role="list" aria-label="Featured hat styles">
                {shelf.map((s) => (
                  <div className="ec-hero__tile" role="listitem" key={s.label}>
                    <Hat shape={s.shape} />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="ec-hero__badge ec-hero__badge--br">New arrivals weekly</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
