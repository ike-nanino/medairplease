import Image from 'next/image'
import Link from 'next/link'

const services = [
  'Air Ambulance Plane',
  'Air Ambulance Helicopter',
  'Commercial Medical Escort',
  'Stretcher on Commercial Flight',
  'Ground Ambulance',
  'International Repatriation',
]

const quickLinks = [
  { label: 'About Us',        href: '/#about' },
  { label: 'Our Mission',     href: '/#mission' },
  { label: 'Board Members',   href: '/#board' },
  { label: 'Accreditations',  href: '/accreditations' },
  { label: 'Contact Us',      href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
         {/* <Link href="/" className="flex items-center shrink-0 group">
                       <Image
                         src="/images/logo.png"
                         alt="Med Air Transport Logo"
                         width={90}
                         height={30}
                         priority
                         className="h-auto w-[60px] md:w-[90px] object-contain transition-transform duration-300 group-hover:scale-105"
                       />
                     </Link> */}
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            World-class medical transport services across six continents. Available around the clock — because emergencies don&apos;t wait.
          </p>
          <div className="space-y-2">
            <a href="tel:+17042997318" className="flex items-center gap-2 text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +1 (704) 299-7318
            </a>
            <a href="mailto:medairtransportservice@outlook.com" className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              medairtransportservice@outlook.com
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif font-bold text-base text-white mb-5 pb-2 border-b border-white/10">Our Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link href="/#services" className="text-white/60 text-sm hover:text-[#E67E22] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#C0392B] group-hover:w-2 transition-all duration-200 shrink-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-base text-white mb-5 pb-2 border-b border-white/10">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/60 text-sm hover:text-[#E67E22] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#C0392B] group-hover:w-2 transition-all duration-200 shrink-0" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications blurb */}
        <div>
          <h4 className="font-serif font-bold text-base text-white mb-5 pb-2 border-b border-white/10">Accredited & Certified</h4>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            MedAir Global holds CAMTS, EURAMI and NAAMTA accreditations, with affiliations across major international airlines and aviation bodies.
          </p>
          <Link
            href="/accreditations"
            className="inline-flex items-center gap-1.5 text-[#C0392B] text-sm font-semibold hover:text-red-400 transition-colors"
          >
            View All Accreditations
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/40 text-xs mb-3 uppercase tracking-widest font-semibold">Available Worldwide</p>
            <div className="flex flex-wrap gap-2">
              {['🌎 Americas', '🌍 Europe', '🌏 Asia-Pac', '🌍 Africa', '🕌 Middle East'].map((r) => (
                <span key={r} className="text-[10px] bg-white/5 border border-white/10 text-white/60 px-2 py-1 rounded">{r}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} MedAir Global. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}