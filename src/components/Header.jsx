/* Sticky header with accessible primary navigation, keyboard-operable
   dropdown submenus and a mobile menu toggle. */
import { useEffect, useRef, useState } from 'react'
import { nav, media } from '../data.js'
import { Button } from './ui.jsx'

function Caret() {
  return (
    <svg className="eb-caret" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M7 10l5 5 5-5z" />
    </svg>
  )
}

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const navRef = useRef(null)

  // Close dropdowns on Escape (returns nothing focused-trapped) and on
  // clicks / focus leaving the nav.
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpenSub(null) }
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
      <div className="eb-topbar">
        <div className="eb-container">
          <ul aria-label="Contact">
            <li><a href="tel:+18188398888">1-818-839-8888</a></li>
            <li><a href="mailto:sales@ecomback.com">sales@ecomback.com</a></li>
          </ul>
          <ul aria-label="Quick links">
            <li><a href="#">Lawsuit Reports</a></li>
          </ul>
        </div>
      </div>

      <header className="eb-header">
        <div className="eb-container">
          <a className="eb-logo" href="index.html" rel="home">
            <img src={media.logo} alt="EcomBack — home" width="190" height="48" />
          </a>

          <div className="eb-nav-wrap" ref={navRef}>
            <button
              type="button"
              className="eb-menu-toggle"
              aria-expanded={navOpen}
              aria-controls="eb-primary-nav"
              onClick={() => setNavOpen((o) => !o)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              </svg>{' '}
              Menu
            </button>

            <nav id="eb-primary-nav" aria-label="Primary" className={navOpen ? 'is-open' : ''}>
              <ul className="eb-menu">
                {nav.map((item) =>
                  item.submenu ? (
                    <li key={item.label} className="eb-has-submenu">
                      <a href={item.href}>{item.label}</a>
                      <button
                        type="button"
                        className="eb-submenu-toggle"
                        aria-expanded={openSub === item.label}
                        aria-haspopup="true"
                        onClick={() =>
                          setOpenSub((cur) => (cur === item.label ? null : item.label))
                        }
                      >
                        <span className="screen-reader-text">Toggle {item.label} submenu</span>
                        <Caret />
                      </button>
                      <ul
                        className="eb-submenu"
                        data-open={openSub === item.label ? 'true' : undefined}
                      >
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <a href={sub.href}>{sub.label}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <Button as="a" variant="primary" className="eb-header-cta" href="contact.html">
              Get a Free Audit
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
