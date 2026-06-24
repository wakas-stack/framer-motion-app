/* Reusable, accessibility-first UI primitives. */
import { useEffect, useId, useRef, useState } from 'react'
import { motion, Reveal } from '../motion.jsx'

/* ---- Button ----------------------------------------------------------- */
export function Button({ as = 'a', variant = 'primary', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag className={`eb-btn eb-btn--${variant} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

/* ---- Kicker (eyebrow label) ------------------------------------------- */
export function Kicker({ children }) {
  return <span className="eb-kicker">{children}</span>
}

/* ---- Section header (left-aligned editorial by default) --------------- */
export function SectionHead({ kicker, title, lead, id, center = false }) {
  return (
    <Reveal className={`eb-section__head${center ? ' eb-shead--center' : ''}`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 id={id} className="eb-h2-accent">{title}</h2>
      {lead && <p className="eb-lead">{lead}</p>}
    </Reveal>
  )
}

/* ---- Checklist -------------------------------------------------------- */
export function Checklist({ items, columns = false, style }) {
  return (
    <ul
      className="eb-check"
      style={columns ? { gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', ...style } : style}
    >
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : item.key}>{item}</li>
      ))}
    </ul>
  )
}

/* ---- Accordion (e.g. video transcripts) ------------------------------- */
export function Accordion({ label, children }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const btnId = useId()
  return (
    <div className="eb-accordion">
      <h3 style={{ margin: 0 }}>
        <button
          type="button"
          id={btnId}
          className="eb-accordion__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          {label}
          <span aria-hidden="true">{open ? '–' : '+'}</span>
        </button>
      </h3>
      <div
        className="eb-accordion__panel"
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        hidden={!open}
      >
        {children}
      </div>
    </div>
  )
}

/* ---- Video player with audio-description toggle + transcript ---------- */
export function VideoPlayer({ sources, transcript, transcriptLabel = 'View video transcript' }) {
  const videoRef = useRef(null)
  const [adOn, setAdOn] = useState(false)
  const videoId = useId()
  const transcriptId = useId()

  function toggleAd() {
    const v = videoRef.current
    if (!v) return
    const wasPlaying = !v.paused
    const t = v.currentTime
    setAdOn((on) => !on)
    // load() happens after src swaps via React; restore position next tick.
    requestAnimationFrame(() => {
      v.load()
      v.currentTime = t || 0
      if (wasPlaying) v.play().catch(() => {})
    })
  }

  const currentSrc = adOn ? sources.ad : sources.plain

  return (
    <div>
      <div className="eb-video">
        <div className="eb-video__bar">
          <a href={`#${transcriptId}`}>Skip to transcript</a>
          <button
            type="button"
            className="eb-ad-toggle"
            aria-pressed={adOn}
            aria-controls={videoId}
            onClick={toggleAd}
          >
            <span className="dot" aria-hidden="true" />
            <span className="eb-ad-label">Audio description: {adOn ? 'on' : 'off'}</span>
          </button>
        </div>
        <video id={videoId} ref={videoRef} controls preload="metadata">
          <source src={currentSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {transcript && (
        <div id={transcriptId} style={{ marginTop: '1.25rem' }}>
          <Accordion label={transcriptLabel}>{transcript}</Accordion>
        </div>
      )}
    </div>
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
      className="eb-totop"
      onClick={toTop}
      hidden={!show}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <span className="screen-reader-text">Back to top</span>
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 8l-6 6 1.4 1.4L12 10.8l4.6 4.6L18 14z" />
      </svg>
    </motion.button>
  )
}

/* ---- Media frame ------------------------------------------------------ */
export function Frame({ src, alt, width, height, plain = false, style }) {
  return (
    <Reveal
      className="eb-frame"
      style={plain ? { boxShadow: 'none', background: 'transparent', ...style } : style}
    >
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    </Reveal>
  )
}
