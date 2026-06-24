/* The body of the homepage, section by section. Each section reveals on
   scroll via <Reveal> / <RevealGroup> (opacity-first, reduced-motion safe). */
import { Reveal, RevealGroup, Counter, motion } from '../motion.jsx'
import {
  Button, Kicker, SectionHead, Checklist, Frame, VideoPlayer,
} from './ui.jsx'
import {
  platforms, disabilities, risks, ifSued, benefits, lawsuitTable,
  processSteps, pillars, news, media, video,
} from '../data.js'

/* ---- 1. Intro video --------------------------------------------------- */
export function VideoIntro() {
  return (
    <section className="eb-section" aria-labelledby="vt">
      <div className="eb-container">
        <SectionHead kicker="Watch" id="vt" title="How EcomBack makes the web accessible" />
        <Reveal>
          <VideoPlayer
            sources={video.home}
            transcript={
              <>
                <p>[BRIGHT MUSIC] EcomBack specializes in making websites accessible to everyone. If a website isn't coded correctly, it can make it difficult or impossible for those of us with disabilities to use the site.</p>
                <p>Making the web accessible is not only the right thing to do, but also the law — a law a handful of plaintiff firms are exploiting to target small businesses with cut-and-paste lawsuits daily. Last year, there were over 4,000 class-action website accessibility lawsuits filed.</p>
                <p>So-called "miracle fixes" — overlays — often don't live up to their claims and won't protect you from being sued; roughly 600 businesses were sued even with a widget installed, because overlays cannot solve keyboard-navigation barriers.</p>
                <p>That's why we created a simple program, built with lawyers and DOJ guidance, that does the hard work for you. We manually audit, fix, certify, train, and monitor your website — and independent users with disabilities certify it on recorded calls.</p>
              </>
            }
          />
        </Reveal>
      </div>
    </section>
  )
}

/* ---- 2. Platforms ----------------------------------------------------- */
export function Platforms() {
  return (
    <section className="eb-section eb-section--alt" aria-labelledby="p">
      <div className="eb-container">
        <SectionHead
          kicker="Every platform"
          id="p"
          title="Accessibility for major platforms"
          lead="Our team has the expert skills to manage and fix websites built on Shopify, WordPress, Squarespace, Wix, WooCommerce, Magento, Webflow, and BigCommerce."
        />
        <RevealGroup className="eb-platforms">
          {platforms.map((pl) => (
            <motion.img
              key={pl.alt}
              src={pl.src}
              alt={pl.alt}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            />
          ))}
        </RevealGroup>
        <Reveal className="eb-hero__actions" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <Button as="a" variant="secondary" href="ada-compliance.html">View Our Compliance Program</Button>
          <Button as="a" variant="primary" href="contact.html">Get A Free Audit</Button>
        </Reveal>
      </div>
    </section>
  )
}

/* ---- 3. What is the ADA ----------------------------------------------- */
export function AdaExplainer() {
  return (
    <section className="eb-section" aria-labelledby="a">
      <div className="eb-container eb-split">
        <Reveal className="eb-split__copy">
          <Kicker>The law</Kicker>
          <h2 id="a" className="eb-h2-accent">What is the ADA, and how does it apply to websites?</h2>
          <p>The ADA is the Americans with Disabilities Act of 1990, a civil rights law that prohibits discrimination against people with disabilities in all areas of public life, including employment, transportation, and education.</p>
          <p>The ADA does not specifically mention websites; however, courts have applied it to them. Per the DOJ's interpretation, all websites open to the public must be accessible. No platform — Shopify, WordPress, Magento, Wix, Square and others — is fully accessible without manual effort by the website owner.</p>
        </Reveal>
        <div className="eb-split__media">
          <Frame
            src={media.enjoy}
            alt="A laptop and smartphone showing a brand webpage with options including a Screen Reader: Shop choice."
            width="560" height="430"
          />
        </div>
      </div>
    </section>
  )
}

/* ---- 4. Business must be accessible ----------------------------------- */
export function BusinessMustBe() {
  return (
    <section className="eb-section eb-section--alt" aria-labelledby="m">
      <div className="eb-container eb-split eb-split--reverse">
        <Reveal className="eb-split__copy">
          <h2 id="m" className="eb-h2-accent">Business websites must be accessible to people with disabilities</h2>
          <p>Digital accessibility is the process of making websites, mobile apps, and other online tools usable by everyone, ensuring all users can access the same information regardless of impairment.</p>
          <p>Our compliance experts use the WCAG guidelines to help businesses audit and fix their websites so they align with the Americans with Disabilities Act (ADA).</p>
        </Reveal>
        <div className="eb-split__media">
          <Frame plain src={media.ada}
            alt="Various accessibility icons with the words ADA and WCAG shown on a web page."
            width="520" height="400" />
        </div>
      </div>
    </section>
  )
}

/* ---- 5. Disability types ---------------------------------------------- */
export function DisabilityTypes() {
  return (
    <section className="eb-section" aria-labelledby="d">
      <div className="eb-container">
        <SectionHead
          kicker="Universal design"
          id="d"
          title="Different types of disabilities to consider when building a website"
          lead="About one in five Americans lives with a disability that affects daily life. A website must work for everyone, regardless of impairment, with assistive technologies such as screen readers."
        />
        <RevealGroup
          as="ul"
          className="eb-check"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}
        >
          {disabilities.map((d) => (
            <motion.li
              key={d}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            >
              {d}
            </motion.li>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

/* ---- 6. Risks (navy) -------------------------------------------------- */
export function Risks() {
  return (
    <section className="eb-section" aria-labelledby="r">
      <div className="eb-container eb-split">
        <div className="eb-split__media">
          <Frame plain src={media.risk}
            alt="A man points at charts on a large website while a woman uses a laptop nearby."
            width="520" height="400" />
        </div>
        <Reveal className="eb-split__copy">
          <Kicker>The stakes</Kicker>
          <h2 id="r" className="eb-h2-accent">Risks of not having an accessible website</h2>
          <p className="eb-lead">Non-compliance with the ADA, as interpreted through WCAG, can lead to several costly risks:</p>
          <Checklist items={risks} />
        </Reveal>
      </div>
    </section>
  )
}

/* ---- 7. Learn how (CTA band) ------------------------------------------ */
export function LearnProcess() {
  return (
    <section className="eb-section" aria-labelledby="lh">
      <div className="eb-container eb-ctaband">
        <Reveal>
          <Kicker>Our process</Kicker>
          <h2 id="lh" className="eb-h2-accent">Learn how we make your website accessible</h2>
          <p className="eb-lead">See the full, code-level process we use to audit, fix, certify, and monitor your website for ADA and WCAG compliance.</p>
          <p><Button as="a" variant="primary" href="ada-compliance.html">See Our Full Process</Button></p>
        </Reveal>
        <Frame src={media.adaBanner} alt="A laptop screen displaying a page titled ADA Compliance." width="420" height="300" />
      </div>
    </section>
  )
}

/* ---- 8. DIY check ----------------------------------------------------- */
export function DiyCheck() {
  return (
    <section className="eb-section eb-section--alt" aria-labelledby="ck">
      <div className="eb-container eb-split">
        <Reveal className="eb-split__copy">
          <Kicker>DIY check</Kicker>
          <h2 id="ck" className="eb-h2-accent">How can I check my website for ADA accessibility errors?</h2>
          <p>There are free tools such as the <a href="https://wave.webaim.org/">WAVE Accessibility Evaluation Tool</a> by WebAIM and Google Chrome's Lighthouse.</p>
          <p><strong>Automated tests cover only 30%–40% of accessibility barriers.</strong> Other errors — tab navigation, pop-ups, captioning — require an in-depth audit and manual review. EcomBack provides a free audit to businesses.</p>
        </Reveal>
        <Reveal className="eb-split__media">
          <VideoPlayer
            sources={video.wave}
            transcript={<p>A walkthrough of how to run the free WAVE and Lighthouse tools against your website, and why their automated results only reveal a portion of the accessibility barriers a manual audit would find.</p>}
          />
        </Reveal>
      </div>
    </section>
  )
}

/* ---- 9. Benefits ------------------------------------------------------ */
export function Benefits() {
  return (
    <section className="eb-section" aria-labelledby="b">
      <div className="eb-container">
        <SectionHead kicker="Why it pays off" id="b" title="Benefits of accessible websites and digital content" />
        <RevealGroup className="eb-grid eb-grid--3">
          {benefits.map((bn) => (
            <motion.div
              key={bn.title}
              className="eb-card eb-feature"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            >
              <span className="eb-card__icon" aria-hidden="true"><img src={bn.icon} alt="" /></span>
              <h3>{bn.title}</h3>
              <p>{bn.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

/* ---- 10. Lawsuit stats + table ---------------------------------------- */
export function LawsuitStats() {
  return (
    <section className="eb-section eb-section--alt" aria-labelledby="st">
      <div className="eb-container">
        <SectionHead
          kicker="2025 data"
          id="st"
          title="3,948 ADA website accessibility lawsuits filed in 2025 (up 23.84% from 2024)"
          lead="Filings stayed concentrated in a handful of states, with a rising role for private demand letters."
        />
        <div className="eb-split">
          <Reveal className="eb-table-wrap">
            <table className="eb-table">
              <caption>State-wise ADA website lawsuits, January–December 2025</caption>
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">Lawsuits</th>
                  <th scope="col">Share</th>
                </tr>
              </thead>
              <tbody>
                {lawsuitTable.map((row) => (
                  <tr key={row.state}>
                    <th scope="row">{row.state}</th>
                    <td className="num">{row.count.toLocaleString('en-US')}</td>
                    <td className="num">{row.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <div className="eb-split__media">
            <Frame src={media.infographic}
              alt="Bar graph of ADA lawsuits filed each year: 132 in 2016 rising to 3,948 in 2025."
              width="520" height="380" style={{ background: '#fff' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---- 11. Lawsuits rise (animated stats) ------------------------------- */
export function LawsuitRise() {
  return (
    <section className="eb-section" aria-labelledby="ri">
      <div className="eb-container eb-ctaband">
        <Reveal>
          <h2 id="ri" className="eb-h2-accent">ADA website lawsuits continue to rise in 2025</h2>
          <div className="eb-statband" style={{ margin: '1.5rem 0' }}>
            <div className="eb-statband__item">
              <span className="eb-stat"><Counter value={3948} /></span>
              <p>ADA lawsuits filed in 2025</p>
            </div>
            <div className="eb-statband__item">
              <span className="eb-stat"><Counter value={23.84} prefix="+" suffix="%" decimals={2} /></span>
              <p>increase versus 2024</p>
            </div>
          </div>
          <p>A handful of law firms continue to dominate filings, suing hundreds of websites monthly with standardized, copy-and-paste claims — the core of their "cost of litigation settlement" business model.</p>
          <p><Button as="a" variant="primary" href="#">View 2025 Annual Lawsuit Report</Button></p>
        </Reveal>
        <Frame src={media.reportBanner}
          alt="2025 Annual ADA Website Accessibility Lawsuit Report cover with charts on a laptop screen."
          width="420" height="300" />
      </div>
    </section>
  )
}

/* ---- 12. If you get sued (navy) --------------------------------------- */
export function IfSued() {
  return (
    <section className="eb-section eb-section--alt" aria-labelledby="su">
      <div className="eb-container eb-split">
        <Reveal className="eb-split__copy">
          <Kicker>The aftermath</Kicker>
          <h2 id="su" className="eb-h2-accent">If you get sued</h2>
          <Checklist items={ifSued} />
        </Reveal>
        <div className="eb-split__media">
          <Frame src={media.sued}
            alt="The universal accessibility symbol shown on a close-up of a computer keyboard."
            width="520" height="400" />
        </div>
      </div>
    </section>
  )
}

/* ---- 13. The wrong way: overlays -------------------------------------- */
export function WrongWay() {
  return (
    <section className="eb-section" aria-labelledby="wr">
      <div className="eb-container">
        <SectionHead
          kicker="Avoid this"
          id="wr"
          title="The wrong way: widgets and overlays"
          lead="Overlays create a skin that gives the impression of compliance while leaving keyboard and screen-reader barriers in place. Disability rights groups, people with disabilities, and experts do not recommend them."
        />
        <div className="eb-callout">
          <Reveal className="eb-callout__card">
            <img className="eb-callout__logo" src={media.nyt} alt="The New York Times" />
            <blockquote>Websites that use AudioEye, accessiBe and UserWay are facing legal action. Last year, more than 400 companies with an accessibility widget or overlay on their website were sued.</blockquote>
            <p><a href="https://www.nytimes.com/2022/07/13/technology/ai-web-accessibility.html">Read "For Blind Internet Users, the Fix Can Be Worse Than the Flaws" (opens in a new tab)</a></p>
            <img className="thumb" src={media.nytThumb} alt="A blind person standing in a room, from the New York Times story." width="480" height="270" loading="lazy" />
          </Reveal>
          <Reveal className="eb-callout__card">
            <p className="eb-kicker">FTC enforcement</p>
            <blockquote>FTC fines accessiBe $1 million over false claims that its tool could make websites fully compliant.</blockquote>
            <p>The Federal Trade Commission ordered the company to pay a $1 million fine for deceiving customers about its AI-powered accessibility product.</p>
            <p><Button as="a" variant="ghost" href="#">Read more (opens in a new tab)</Button></p>
            <img className="thumb" src={media.ftcThumb} alt="Article: FTC orders marketer to pay $1M for deceptive AI accessibility claims." width="480" height="270" loading="lazy" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---- 14. The right way: process steps --------------------------------- */
export function RightWay() {
  return (
    <section className="eb-section eb-section--alt" aria-labelledby="rw">
      <div className="eb-container">
        <SectionHead
          kicker="Do this instead"
          id="rw"
          title="The right way: our compliance program"
          lead="A dedicated in-house team fixes your website to WCAG 2.1 and 2.2 for a flat, one-time fee — then trains your team to keep it compliant."
        />
        <RevealGroup className="eb-steps">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="eb-step"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <span className="eb-step__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

/* ---- 15. Why choose EcomBack ------------------------------------------ */
export function WhyChoose() {
  return (
    <section className="eb-section" aria-labelledby="wy">
      <div className="eb-container eb-split">
        <Reveal className="eb-split__copy">
          <Kicker>Why EcomBack</Kicker>
          <h2 id="wy" className="eb-h2-accent">Why choose EcomBack for your ADA website compliance?</h2>
          <RevealGroup className="eb-pillars" style={{ marginTop: '1.5rem' }}>
            {pillars.map((pl) => (
              <motion.div
                key={pl.title}
                className="eb-pillar"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6z" />
                </svg>
                <div>
                  <h3>{pl.title}</h3>
                  <p>{pl.body}</p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </Reveal>
        <div className="eb-split__media">
          <Frame plain src={media.heart}
            alt="Disability icons arranged in a heart shape with the IAAP logo."
            width="520" height="430" />
        </div>
      </div>
    </section>
  )
}

/* ---- 16. In the news -------------------------------------------------- */
export function News() {
  return (
    <section className="eb-section eb-section--alt" aria-labelledby="nw">
      <div className="eb-container">
        <SectionHead
          kicker="Newsroom"
          id="nw"
          title="In the news"
          lead="The latest digital accessibility news, articles, and interviews featuring EcomBack and founder Nayan Padrai."
        />
        <RevealGroup className="eb-news">
          {news.map((n) => (
            <motion.article
              key={n.title}
              className="eb-news__card"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            >
              <div className="eb-news__body">
                <span className="eb-news__date">{n.source} · {n.date}</span>
                <h3><a href="#">{n.title}</a></h3>
              </div>
            </motion.article>
          ))}
        </RevealGroup>
        <Reveal className="eb-center" style={{ marginTop: '2rem' }}>
          <Button as="a" variant="ghost" href="#">Visit Newsroom</Button>
        </Reveal>
      </div>
    </section>
  )
}

/* ---- 17. Documentary (navy) ------------------------------------------- */
export function Documentary() {
  return (
    <section className="eb-section eb-section--navy" aria-labelledby="dc">
      <div className="eb-container eb-doc">
        <Reveal>
          <Kicker>Coming soon</Kicker>
          <h2 id="dc" className="eb-h2-accent">Blind Sighted — a documentary on web accessibility</h2>
          <p className="eb-lead">When an unexpected lawsuit hit our founder, it revealed a shocking truth: many e-commerce websites, including his own, weren't fully accessible.</p>
          <p>Our research team studied the impact of murky laws, conflicting court rulings, the cost of litigation, and confidentiality agreements on the real cause of accessibility. Have a story to share? Contact us.</p>
          <p><Button as="a" variant="primary" href="contact.html">Share Your Story</Button></p>
        </Reveal>
        <Frame src={media.blind} alt="Blind Sighted documentary — coming soon." width="520" height="340" />
      </div>
    </section>
  )
}

/* ---- 18. Final CTA ---------------------------------------------------- */
export function FinalCta() {
  return (
    <section className="eb-section" aria-labelledby="fc2">
      <div className="eb-container eb-ctaband">
        <Reveal>
          <h2 id="fc2" className="eb-h2-accent">Ready to make your website accessible?</h2>
          <p className="eb-lead">Get a free audit with manual and automated testing, and a walkthrough of our affordable program that makes your current website accessible without altering its look or feel.</p>
          <div className="eb-hero__actions">
            <Button as="a" variant="primary" href="contact.html">Get a Free Audit</Button>
            <Button as="a" variant="ghost" href="ada-compliance.html">See Our Full Process</Button>
          </div>
        </Reveal>
        <Frame plain src={media.ratingBanner}
          alt="Accessibility Rating AA — audited and confirmed for usability by disabled testers — shown on a computer screen."
          width="420" height="300" />
      </div>
    </section>
  )
}
