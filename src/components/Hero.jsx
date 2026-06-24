/* Hero — light, editorial. Staggered entrance, opacity-first so it stays
   safe under reduced motion (handled globally by MotionConfig). */
import { motion } from '../motion.jsx'
import { Button, Kicker } from './ui.jsx'
import { accreditations, media } from '../data.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="eb-hero" aria-labelledby="hero-title">
      <div className="eb-container">
        <div className="eb-hero__grid">
          <motion.div
            className="eb-hero__copy"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Kicker>ADA &amp; WCAG Website Compliance</Kicker>
            </motion.div>
            <motion.h1 id="hero-title" variants={item}>
              Expert website accessibility for <span className="eb-accent">ADA compliance</span>.
            </motion.h1>
            <motion.p className="eb-hero__lead" variants={item}>
              <strong>We manually audit, fix, and certify accessibility at the code
              level</strong> — preventing and defending against website lawsuits with
              our ADA and WCAG compliance program.
            </motion.p>
            <motion.div className="eb-hero__actions" variants={item}>
              <Button as="a" variant="primary" href="contact.html">Get a Free Audit</Button>
              <Button as="a" variant="ghost" href="ada-compliance.html">View Our Program</Button>
            </motion.div>
            <motion.div className="eb-hero__trust" variants={item}>
              <span className="eb-hero__trust-label">Accredited &amp; recognised by</span>
              <ul className="eb-hero__badges" aria-label="Accreditations">
                {accreditations.map((b) => (
                  <li key={b.alt}><img src={b.src} alt={b.alt} /></li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="eb-hero__media"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="eb-frame">
              <img
                src={media.hero}
                alt="A blind shopper uses a mobile device with a screen reader to get product information and an add-to-cart button."
                width="560"
                height="460"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
