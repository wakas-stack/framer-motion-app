/* Contact / free-audit form with accessible labels, required-field
   indicators and a "book a meeting" aside. Submits with inline success
   feedback (no real backend). */
import { useState } from 'react'
import { Reveal } from '../motion.jsx'
import { Button, Kicker, Checklist } from './ui.jsx'
import { media } from '../data.js'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="eb-section eb-section--alt" aria-labelledby="ct">
      <div className="eb-container eb-split">
        <Reveal className="eb-split__copy">
          <Kicker>Contact us</Kicker>
          <h2 id="ct" className="eb-h2-accent">Request your free audit</h2>
          <p className="eb-lead">Fill out the form and one of our accessibility compliance experts will reach out to you.</p>

          {submitted && (
            <p className="eb-form__success" role="status">
              Thank you — your request has been received. We'll be in touch shortly.
            </p>
          )}

          <form className="eb-form" onSubmit={onSubmit} noValidate aria-labelledby="ct">
            <p>Fields marked with <span className="req" aria-hidden="true">*</span> are required.</p>
            <div className="eb-grid eb-grid--2">
              <div className="eb-field">
                <label htmlFor="hf1">First name <span className="req" aria-hidden="true">*</span></label>
                <input id="hf1" type="text" autoComplete="given-name" required aria-required="true" />
              </div>
              <div className="eb-field">
                <label htmlFor="hf2">Last name</label>
                <input id="hf2" type="text" autoComplete="family-name" />
              </div>
            </div>
            <div className="eb-field">
              <label htmlFor="hf3">Email <span className="req" aria-hidden="true">*</span></label>
              <input id="hf3" type="email" autoComplete="email" required aria-required="true" />
            </div>
            <div className="eb-field">
              <label htmlFor="hf4">Phone <span className="req" aria-hidden="true">*</span></label>
              <input id="hf4" type="tel" autoComplete="tel" required aria-required="true" />
            </div>
            <div className="eb-field">
              <label htmlFor="hf5">Company / Organization <span className="req" aria-hidden="true">*</span></label>
              <input id="hf5" type="text" autoComplete="organization" required aria-required="true" />
            </div>
            <div className="eb-field">
              <label htmlFor="hf6">Website</label>
              <input id="hf6" type="url" autoComplete="url" aria-describedby="hf6h" />
              <span id="hf6h" className="hint">The website you'd like us to audit.</span>
            </div>
            <Button as="button" type="submit" variant="primary">Send Request</Button>
          </form>
        </Reveal>

        <Reveal as="aside" className="eb-split__copy" aria-labelledby="mt">
          <h2 id="mt" className="eb-h2-accent">Book a meeting</h2>
          <p>Cut the wait and book a 45-minute meeting with one of our accessibility compliance experts.</p>
          <p>
            <a href="https://calendly.com/ecomback">
              <img
                style={{ borderRadius: '14px', boxShadow: 'var(--eb-shadow)' }}
                src={media.calendly}
                alt="EcomBack Calendly — book a 45-minute meeting (opens in a new tab)."
                width="480" height="308" loading="lazy"
              />
            </a>
          </p>
          <Checklist
            items={[
              <a key="e" href="mailto:sales@ecomback.com">sales@ecomback.com</a>,
              <a key="p" href="tel:+18188398888">1-818-839-8888</a>,
            ]}
          />
          <div className="eb-trust" style={{ justifyContent: 'flex-start', marginTop: '1.5rem' }}>
            <img src="https://www.ecomback.com/wp-content/uploads/2025/01/W3C-1.svg" alt="W3C Member and Advisory Committee" style={{ height: '56px' }} />
            <img src="https://www.ecomback.com/wp-content/uploads/2025/01/iaap.svg" alt="IAAP Organizational Member" style={{ height: '56px' }} />
            <img src="https://www.ecomback.com/wp-content/uploads/2025/01/court_approved-1.svg" alt="Court Approved Accessibility Provider" style={{ height: '56px' }} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
