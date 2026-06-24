/* =========================================================================
   Motion helpers — WCAG 2.2 / 2.3.3 compliant.

   All motion is gated three ways:
   1. <MotionConfig reducedMotion="user"> in App.jsx makes Framer Motion drop
      transform/layout animation when the OS "reduce motion" flag is set,
      keeping only opacity (a safe, non-vestibular change).
   2. useReducedMotion() lets individual effects (count-up, parallax) opt out
      entirely and render their final state immediately.
   3. index.css neutralises any CSS transitions/animations for the same flag.

   Durations stay within the 150–300ms micro-interaction band (slightly
   longer for large scroll reveals) and easings are gentle.
   ========================================================================= */
import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useInView,
  animate,
} from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] // gentle ease-out

/* Fade + small rise. With reducedMotion="user" the `y` is ignored and only
   opacity animates, so there is no vestibular-triggering movement. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

/* A scroll-triggered reveal. Renders semantic markup via `as` and animates
   once when ~20% in view. Honours reduced motion automatically through
   MotionConfig; we still set viewport `once` so nothing re-triggers. */
export function Reveal({
  as = 'div',
  variants = fadeUp,
  className,
  children,
  amount = 0.2,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/* Stagger container — children using `fadeUp` will reveal in sequence. */
export function RevealGroup({
  as = 'div',
  className,
  children,
  amount = 0.15,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/* Accessible count-up. Numbers animate from 0 to `value` once on view.
   With reduced motion the final value is shown instantly (no animation),
   and the live region is polite so screen readers hear the final figure. */
export function Counter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString('en-US')

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export { motion, useReducedMotion }
