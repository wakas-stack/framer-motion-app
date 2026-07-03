/* Site footer with brand, shop, help and company navigation. */
import { Hat } from './hats.jsx'
import { footerLinks, contact } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="ec-footer">
      <div className="ec-container">
        <div className="ec-footer__top">
          <div className="ec-footer__brand">
            <a className="ec-logo" href="#top" rel="home">
              <span className="ec-logo__mark"><Hat shape="fitted" /></span>
              <span className="ec-logo__name">Empire<span style={{ color: 'var(--ec-gold)' }}>Cove</span></span>
            </a>
            <p>Premium branded hats and straw hats, made in America and shipped worldwide — your perfect fit, every time.</p>
          </div>

          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2>{col.heading}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#top">{l}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="ec-footer__bottom">
          <p style={{ margin: 0 }}>© {year} EmpireCove. All rights reserved.</p>
          <p style={{ margin: 0 }}>
            <a href={contact.phoneHref}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
