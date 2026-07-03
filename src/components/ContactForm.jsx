/* Newsletter / final CTA. Accessible labels, required-field indicator,
   inline success message announced politely, and a contact aside. */
import { useId, useState } from 'react'
import { Reveal } from '../motion.jsx'
import { Kicker, Button } from './ui.jsx'
import { ArrowRight, Phone, Mail, Pin } from './icons.jsx'
import { contact } from '../data.js'

export default function Newsletter() {
  const [sent, setSent] = useState(false)
  const nameId = useId()
  const emailId = useId()
  const emailHintId = useId()

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="ec-section ec-section--dark ec-on-dark" aria-labelledby="cta-title">
      <div className="ec-container">
        <div className="ec-cta">
          <div>
            <Kicker>Can we help?</Kicker>
            <h2 id="cta-title">Get 25% off your first order</h2>
            <p className="ec-lead">
              Join the list for early access to new drops, size guides, and a welcome code —
              use <strong style={{ color: '#fff' }}>SUMMER25</strong> for 25% off your first custom order.
            </p>

            {sent ? (
              <p className="ec-form__success" role="status">
                You're in — check your inbox for your welcome code. Thanks for joining EmpireCove!
              </p>
            ) : (
              <form className="ec-form" onSubmit={onSubmit} noValidate>
                <div className="ec-field">
                  <label htmlFor={nameId}>First name</label>
                  <input id={nameId} name="name" type="text" autoComplete="given-name" placeholder="Alex" />
                </div>
                <div className="ec-field">
                  <label htmlFor={emailId}>Email address <span className="req" aria-hidden="true">*</span></label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-describedby={emailHintId}
                    placeholder="you@example.com"
                  />
                  <span id={emailHintId} className="hint">We'll only send the good stuff. Unsubscribe anytime.</span>
                </div>
                <div>
                  <Button as="button" variant="light" type="submit">
                    Claim my 25% off <ArrowRight size={20} aria-hidden="true" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          <Reveal as="div" className="ec-cta__aside">
            <h3 style={{ color: '#fff' }}>Prefer to talk?</h3>
            <p className="ec-cta__contact">
              <Phone aria-hidden="true" /> <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <p className="ec-cta__contact">
              <Mail aria-hidden="true" /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="ec-cta__contact">
              <Pin aria-hidden="true" /> <span>{contact.address}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
