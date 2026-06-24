/* Content for the EcomBack homepage — text, media and structured data
   carried over verbatim from the original site so nothing is lost. */

const CDN = 'https://www.ecomback.com/wp-content/uploads'

export const nav = [
  { label: 'Who We Are', href: 'about.html' },
  { label: 'ADA Compliance', href: 'ada-compliance.html' },
  {
    label: 'Services',
    href: 'services.html',
    submenu: [
      { label: 'ADA Title II Compliance', href: 'services.html' },
      { label: 'Web Accessibility Audit & Support', href: 'services.html' },
      { label: 'Audio Description Services', href: 'services.html' },
      { label: 'Blind User Testing', href: 'services.html' },
      { label: 'ACR and VPAT Services', href: 'services.html' },
      { label: 'PDF Remediation', href: 'services.html' },
      { label: 'Shopify Development', href: 'services.html' },
      { label: 'Speed Optimization', href: 'services.html' },
    ],
  },
  {
    label: 'Learn',
    href: '#',
    submenu: [
      { label: '2025 Annual ADA Lawsuit Report', href: '#' },
      { label: 'Website Lawsuit Reports', href: '#' },
      { label: 'Blogs', href: '#' },
      { label: 'How to Guides', href: '#' },
      { label: 'Accessibility Checklist', href: '#' },
      { label: 'Screen Reader Shortcut Keys', href: '#' },
    ],
  },
  { label: 'Contact', href: 'contact.html' },
]

export const accreditations = [
  { src: `${CDN}/2025/03/Iaap-1.svg`, alt: 'IAAP — Organizational Member' },
  { src: `${CDN}/2025/01/W3C_circle-1.svg`, alt: 'W3C Member and Advisory Committee' },
  { src: `${CDN}/2025/01/court_circlelogo-1.svg`, alt: 'Court Approved Accessibility Provider' },
]

export const platforms = [
  { src: `${CDN}/2025/02/shopify.svg`, alt: 'Shopify' },
  { src: `${CDN}/2025/02/wordpress.svg`, alt: 'WordPress' },
  { src: `${CDN}/2025/02/squarespace.svg`, alt: 'Squarespace' },
  { src: `${CDN}/2025/02/Wix-Com.svg`, alt: 'Wix' },
  { src: `${CDN}/2025/02/woocommerce.svg`, alt: 'WooCommerce' },
  { src: `${CDN}/2025/02/magento-logo.svg`, alt: 'Magento' },
  { src: `${CDN}/2025/02/webflow.svg`, alt: 'Webflow' },
  { src: `${CDN}/2025/02/bigcommerce.svg`, alt: 'BigCommerce' },
]

export const disabilities = [
  'Deafness', 'Blindness', 'Photosensitivity', 'Hearing loss', 'Low vision',
  'Learning disabilities', 'Cognitive limitations', 'Speech disabilities', 'Dexterity',
]

export const risks = [
  'Damage to brand reputation',
  'Loss of potential clients',
  'Rebuilding your website with accessibility guidelines',
  'Heavy attorney fees and legal fines',
  'Defending a lawsuit in federal or state courts',
]

export const ifSued = [
  'You will have to fix your website anyway',
  "Pay your attorney's fees",
  "Defend your case — if you lose, you owe their attorney's fees plus fines",
  'Or settle if advisable — five to six figures',
  'Follow the ongoing process for compliance',
  'Periodic audits as per judgment or settlement',
  'Avoid copy-cat lawsuits',
]

export const benefits = [
  {
    icon: `${CDN}/2025/02/user_experience.svg`,
    title: 'Inclusive user experience is good for business',
    body: 'Accessible websites, apps, and content give every visitor a great experience, and those who need it can use assistive technology.',
  },
  {
    icon: `${CDN}/2025/02/better_search.svg`,
    title: 'Better search results and conversion',
    body: 'Fixing structural issues in your theme and code helps Google crawl and index your pages for the best experience.',
  },
  {
    icon: `${CDN}/2025/02/tax_credit.svg`,
    title: 'Up to $5,000 ADA tax credit',
    body: 'The government gives small to mid-size businesses up to $5,000 back via the ADA tax credit and deduction in a taxable year.',
  },
  {
    icon: `${CDN}/2025/02/business_practice.svg`,
    title: "It's the law and best business practice",
    body: 'Owners, developers, and designers must follow accessibility steps across themes, documents, PDFs, videos, and apps.',
  },
  {
    icon: `${CDN}/2025/02/ada_lawsuits.svg`,
    title: 'Avoid lawsuits',
    body: 'The best way to reduce the risk of ADA accessibility lawsuits is to make your website WCAG-compliant at Level AA.',
  },
]

export const lawsuitTable = [
  { state: 'New York', count: 1108, share: '28.06%' },
  { state: 'Florida', count: 950, share: '24.06%' },
  { state: 'California', count: 787, share: '19.93%' },
  { state: 'Illinois', count: 576, share: '14.59%' },
  { state: 'Minnesota', count: 160, share: '4.05%' },
  { state: 'Pennsylvania', count: 101, share: '2.56%' },
  { state: 'Missouri', count: 85, share: '2.15%' },
  { state: 'All other states', count: 181, share: '4.58%' },
]

export const processSteps = [
  { title: 'We Audit', body: 'A manual, code-level review of every page and flow against WCAG 2.1 / 2.2 AA.' },
  { title: 'We Fix', body: 'Our developers remediate issues directly in your theme and code — no overlays.' },
  { title: 'We Certify', body: 'Independent users with disabilities verify your site on recorded calls.' },
  { title: 'We Monitor', body: 'Ongoing checks catch regressions as your site changes over time.' },
  { title: 'We Train', body: 'We train your team to keep new content and updates accessible.' },
]

export const pillars = [
  { title: 'A dedicated team', body: 'Auditors, developers, content experts, usability testers, and people with disabilities working together.' },
  { title: 'Real WCAG compliance', body: 'We help you achieve compliance, increase brand awareness, and reduce the risk of ADA lawsuits.' },
  { title: 'Save time and money', body: 'We have the skills and experience to save you weeks of coding and costly training.' },
  { title: 'Training included', body: 'We train your team to maintain accessibility and audit your site as you make updates.' },
]

export const news = [
  { source: 'WFTV9', date: 'March 6, 2026', title: 'Inside the Interview: ADA Website Lawsuits Are Surging in Florida' },
  { source: 'KIRO 7', date: 'March 3, 2026', title: 'EcomBack CEO Speaks Out on ADA Website Litigation Targeting Washington Businesses' },
  { source: 'Interview', date: 'September 22, 2025', title: 'Must-Watch Interview on Website Accessibility and ADA Lawsuits' },
]

export const media = {
  hero: `${CDN}/2025/03/image-min-1-1.png`,
  enjoy: `${CDN}/2025/01/enjoy-min.png`,
  ada: `${CDN}/2025/02/ada.svg`,
  risk: `${CDN}/2025/02/risk_of_not_having.svg`,
  adaBanner: `${CDN}/2025/01/adacompliancebanner_03.png`,
  infographic: `${CDN}/2026/01/infographic.svg`,
  reportBanner: `${CDN}/2026/01/Banner.png`,
  sued: `${CDN}/2025/01/accessb-min.png`,
  heart: `${CDN}/2025/01/dill-1.png`,
  blind: `${CDN}/2025/01/blind_img.png`,
  ratingBanner: `${CDN}/2025/01/accss-imageforbanner.png`,
  calendly: `${CDN}/2025/01/ecomback-calendry-1-1024x656.png`,
  logo: `${CDN}/2025/01/EcomBack-Logo.svg`,
  nyt: `${CDN}/2025/02/new_york_times_logo.svg`,
  nytThumb: `${CDN}/2025/01/blind-min.png`,
  ftcThumb: `${CDN}/2025/02/Screenshot-2025-01-21-at-4.04.43-PM.png`,
}

export const video = {
  home: {
    plain: 'https://res.cloudinary.com/buddhablessu-com/video/upload/w_1036,q_auto,f_auto/v1743101871/ecomback_videos/new-videos/Ecomback_Homepage_Video_without_audio_compressed.mp4',
    ad: 'https://res.cloudinary.com/buddhablessu-com/video/upload/w_1036,q_auto,f_auto/v1743101872/ecomback_videos/new-videos/ecomback_home_with_audio_description_compressed.mp4',
  },
  wave: {
    plain: `${CDN}/2025/03/How-to-check-website-Accessibility-using-Wave-Lighthouse-EcomBack.com-1.mp4`,
    ad: `${CDN}/2025/03/How-to-check-website-Accessibility-using-Wave-Lighthouse-EcomBack.com-mixed_ad.mp4`,
  },
}
