/* Reusable, accessibility-first UI primitives. */
import { useEffect, useState } from 'react'
import { motion, Reveal } from '../motion.jsx'
import { ArrowUp } from './icons.jsx'

/* ---- Button ----------------------------------------------------------- */
export function Button({ as = 'a', variant = 'primary', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag className={`ec-btn ec-btn--${variant} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

/* ---- Kicker (eyebrow label) ------------------------------------------- */
export function Kicker({ children }) {
  return <span className="ec-kicker">{children}</span>
}

/* ---- Section header --------------------------------------------------- */
export function SectionHead({ kicker, title, lead, id, center = false }) {
  return (
    <Reveal className={`ec-shead${center ? ' ec-shead--center' : ''}`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 id={id}>{title}</h2>
      {lead && <p className="ec-lead">{lead}</p>}
    </Reveal>
  )
}

/* ---- Back to top ------------------------------------------------------ */
export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toTop() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    const skip = document.querySelector('.skip-link')
    if (skip) skip.focus()
  }

  return (
    <motion.button
      type="button"
      className="ec-totop"
      onClick={toTop}
      hidden={!show}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <span className="screen-reader-text">Back to top</span>
      <ArrowUp aria-hidden="true" />
    </motion.button>
  )
}
