/* Site footer with contact, services, learn and company navigation. */
import { Button } from './ui.jsx'

export default function Footer() {
  return (
    <footer className="eb-footer">
      <div className="eb-container">
        <div className="eb-footer__top">
          <div>
            <h2>Contact Us</h2>
            <ul>
              <li><a href="mailto:sales@ecomback.com">sales@ecomback.com</a></li>
              <li><a href="tel:+18188398888">1-818-839-8888</a></li>
              <li><a href="https://calendly.com/ecomback">Book a Meeting</a></li>
            </ul>
          </div>
          <nav aria-labelledby="fs">
            <h2 id="fs">Services</h2>
            <ul>
              <li><a href="services.html">ADA Compliance</a></li>
              <li><a href="services.html">Web Accessibility Audit &amp; Support</a></li>
              <li><a href="services.html">Audio Description Services</a></li>
              <li><a href="services.html">Blind User Testing</a></li>
              <li><a href="services.html">PDF Remediation</a></li>
              <li><a href="services.html">Shopify Development</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="fl">
            <h2 id="fl">Learn</h2>
            <ul>
              <li><a href="#">2025 Annual ADA Lawsuit Report</a></li>
              <li><a href="#">Website Lawsuit Reports</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">How to Guides</a></li>
              <li><a href="#">Accessibility Checklist</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="fco">
            <h2 id="fco">About Company</h2>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="#">Accessibility Statement</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              <Button as="a" variant="ghost" href="#">Report an Accessibility Issue</Button>
            </p>
          </nav>
        </div>
        <div className="eb-footer__bottom">
          <p>&copy; 2026 EcomBack &trade;. All Rights Reserved.</p>
          <p><a href="#">Audited &amp; certified for accessibility by disabled testers</a></p>
        </div>
      </div>
    </footer>
  )
}
