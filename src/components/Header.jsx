/* Announcement bar + sticky header with accessible primary navigation,
   keyboard-operable dropdown submenus, and a mobile menu toggle. */
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { nav, announcements } from '../data.js'
import { Button } from './ui.jsx'
import { Hat } from './hats.jsx'
import { Chevron, Search, Cart, Menu, Tag } from './icons.jsx'

/* ---- Rotating announcement bar (WCAG 2.2.2: auto-rotation stops on
   hover/focus and when a dot is used; disabled entirely under reduced
   motion). ------------------------------------------------------------- */
function AnnouncementBar() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || paused) return
    const id = setInterval(() => setI((n) => (n + 1) % announcements.length), 4500)
    return () => clearInterval(id)
  }, [reduce, paused])

  return (
    <div
      className="ec-promo"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="ec-container">
        <p className="ec-promo__msg" aria-live="polite">
          <Tag aria-hidden="true" />
          <span>{announcements[i]}</span>
        </p>
        <div className="ec-promo__dots" role="tablist" aria-label="Announcements">
          {announcements.map((msg, n) => (
            <button
              key={msg}
              type="button"
              className="ec-promo__dot"
              aria-current={n === i}
              aria-label={`Show announcement ${n + 1} of ${announcements.length}`}
              onClick={() => { setPaused(true); setI(n) }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') { setOpenSub(null); setNavOpen(false) } }
    function onPointer(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenSub(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onPointer)
    document.addEventListener('focusin', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onPointer)
      document.removeEventListener('focusin', onPointer)
    }
  }, [])

  return (
    <>
      <AnnouncementBar />

      <header className="ec-header">
        <div className="ec-container">
          <a className="ec-logo" href="#top" rel="home">
            <span className="ec-logo__mark"><Hat shape="fitted" /></span>
            <span className="ec-logo__name">Empire<span>Cove</span></span>
          </a>

          <div className="ec-nav-wrap" ref={navRef}>
            <nav id="ec-primary-nav" aria-label="Primary" className={navOpen ? 'is-open' : ''}>
              <ul className="ec-menu">
                {nav.map((item) =>
                  item.submenu ? (
                    <li key={item.label} className="ec-has-submenu">
                      <a href={item.href}>{item.label}</a>
                      <button
                        type="button"
                        className="ec-submenu-toggle"
                        aria-expanded={openSub === item.label}
                        aria-haspopup="true"
                        onClick={() => setOpenSub((c) => (c === item.label ? null : item.label))}
                      >
                        <span className="screen-reader-text">Toggle {item.label} submenu</span>
                        <Chevron className="ec-caret" />
                      </button>
                      <ul className="ec-submenu" data-open={openSub === item.label ? 'true' : undefined}>
                        {item.submenu.map((sub) => (
                          <li key={sub.label}><a href={sub.href}>{sub.label}</a></li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.label}><a href={item.href}>{item.label}</a></li>
                  )
                )}
              </ul>
            </nav>

            <div className="ec-actions">
              <button type="button" className="ec-iconbtn">
                <span className="screen-reader-text">Search</span>
                <Search aria-hidden="true" />
              </button>
              <button type="button" className="ec-iconbtn">
                <span className="screen-reader-text">Cart, 0 items</span>
                <Cart aria-hidden="true" />
                <span className="ec-cart-count" aria-hidden="true">0</span>
              </button>
              <Button as="a" variant="primary" className="ec-header-cta" href="#popular">Shop now</Button>
              <button
                type="button"
                className="ec-menu-toggle"
                aria-expanded={navOpen}
                aria-controls="ec-primary-nav"
                onClick={() => setNavOpen((o) => !o)}
              >
                <Menu size={20} aria-hidden="true" /> Menu
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
