/* EcomBack — accessible homepage.
   <MotionConfig reducedMotion="user"> ensures every Framer Motion animation
   drops transform/layout movement (keeping opacity only) whenever the user
   has "reduce motion" enabled at the OS level — WCAG 2.3.3 / 2.2 compliant. */
import { MotionConfig } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import {
  VideoIntro, Platforms, AdaExplainer, BusinessMustBe, DisabilityTypes,
  Risks, LearnProcess, DiyCheck, Benefits, LawsuitStats, LawsuitRise,
  IfSued, WrongWay, RightWay, WhyChoose, News, Documentary, FinalCta,
} from './components/Sections.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import { BackToTop } from './components/ui.jsx'
import './App.css'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#eb-main">Skip to content</a>
      <a className="skip-link" href="#eb-primary-nav">Skip to navigation</a>

      <Header />

      <main id="eb-main" tabIndex={-1}>
        <Hero />
        <VideoIntro />
        <Platforms />
        <AdaExplainer />
        <BusinessMustBe />
        <DisabilityTypes />
        <Risks />
        <LearnProcess />
        <DiyCheck />
        <Benefits />
        <LawsuitStats />
        <LawsuitRise />
        <IfSued />
        <WrongWay />
        <RightWay />
        <WhyChoose />
        <News />
        <Documentary />
        <FinalCta />
        <ContactForm />
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
