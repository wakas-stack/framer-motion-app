/* EmpireCove — accessible lifestyle hat store homepage.
   <MotionConfig reducedMotion="user"> makes every Framer Motion animation
   drop transform/layout movement (keeping opacity only) whenever the user
   has "reduce motion" enabled at the OS level — WCAG 2.3.3 / 2.2 compliant. */
import { MotionConfig } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import {
  Categories, FindFit, Popular, Lifestyle, Marquee, Stats, Difference, Testimonials,
} from './components/Sections.jsx'
import Newsletter from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import { BackToTop } from './components/ui.jsx'
import './App.css'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#ec-main">Skip to content</a>
      <a className="skip-link" href="#ec-primary-nav">Skip to navigation</a>

      <span id="top" />
      <Header />

      <main id="ec-main" tabIndex={-1}>
        <Hero />
        <Categories />
        <FindFit />
        <Popular />
        <Lifestyle />
        <Marquee />
        <Stats />
        <Difference />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
