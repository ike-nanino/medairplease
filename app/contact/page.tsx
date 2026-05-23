import Image from 'next/image'
import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'


export const metadata: Metadata = {
  title: 'Contact Us | MedAir Global',
  description: 'Reach our 24/7 emergency dispatch, regional offices and partnership teams. Phone numbers and email addresses for MedAir Global worldwide.',
}

// const offices = [
//   {
//     region: 'Americas HQ',
//     flag: '🇺🇸',
//     city: 'New York, USA',
//     phone: '+1 (800) 555-0199',
//     email: 'americas@medairglobal.com',
//     hours: '24 / 7',
//   },
//   {
//     region: 'Europe HQ',
//     flag: '🇬🇧',
//     city: 'London, UK',
//     phone: '+44 207 123 4567',
//     email: 'europe@medairglobal.com',
//     hours: '24 / 7',
//   },
//   {
//     region: 'Middle East & Africa',
//     flag: '🇦🇪',
//     city: 'Dubai, UAE',
//     phone: '+971 4 555 0234',
//     email: 'mea@medairglobal.com',
//     hours: '24 / 7',
//   },
//   {
//     region: 'Asia Pacific',
//     flag: '🇸🇬',
//     city: 'Singapore',
//     phone: '+65 6123 4567',
//     email: 'apac@medairglobal.com',
//     hours: '24 / 7',
//   },
// ]

// const channels = [
//   {
//     icon: '☎️',
//     label: 'Emergency Dispatch',
//     value: '+1 (800) 555-0199',
//     sub: 'Toll-free · 24/7 · Immediate mobilisation',
//     href: 'tel:+18005550199',
//     cta: 'Call Now',
//     highlight: true,
//   },
//   {
//     icon: '✉️',
//     label: 'General Enquiries',
//     value: 'info@medairglobal.com',
//     sub: 'Non-urgent questions, partnerships',
//     href: 'mailto:info@medairglobal.com',
//     cta: 'Send Email',
//     highlight: false,
//   },
//   {
//     icon: '🚑',
//     label: 'Dispatch Operations',
//     value: 'dispatch@medairglobal.com',
//     sub: 'Mission coordination & logistics',
//     href: 'mailto:dispatch@medairglobal.com',
//     cta: 'Email Dispatch',
//     highlight: false,
//   },
//   {
//     icon: '🤝',
//     label: 'Insurance & Partnerships',
//     value: 'partners@medairglobal.com',
//     sub: 'Insurer accounts, airline partnerships',
//     href: 'mailto:partners@medairglobal.com',
//     cta: 'Email Partners',
//     highlight: false,
//   },
// ]

const values = [
  { icon: '❤️', title: 'Compassion', body: 'Every patient is treated as family — with full dignity and unwavering human care throughout every transfer.' },
  { icon: '⚡', title: 'Urgency', body: 'We are engineered for speed. Our workflows are designed to compress response times without compromising safety.' },
  { icon: '🔒', title: 'Integrity', body: 'Transparent pricing, honest clinical communication, and zero compromise on patient safety — always.' },
  { icon: '🌐', title: 'Global Reach', body: 'Operational in 150+ countries with local knowledge, multi-language teams and 24/7 dispatch coordination.' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <Image
          src="/images/idk.jpg"
          alt="Medical dispatch coordination centre with large screens showing global flight tracking, operators wearing headsets at workstations"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1E]/90 via-[#96281B]/60 to-[#1C1C1E]/80" />

        {/* Decorative animated ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-amber-300 bg-amber-300/10 border border-amber-300/30 px-4 py-1.5 rounded-sm mb-6">
            Contact Us
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-5 max-w-2xl">
            We&apos;re Always<br />
            <span className="text-[#E67E22]">On Call.</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed mb-8">
            Whether it is an active emergency, a planned repatriation or a partnership enquiry — our teams across four continents are ready to respond right now.
          </p>

          {/* Pulse indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <span className="text-white/70 text-sm font-medium">All global dispatch centres are currently operational</span>
          </div>
        </div>
      </section>

      <FAQ />

      {/* ── Primary Contact Channels ── */}
      <section className="py-20 bg-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">How to Reach Us</h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]" />
              <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9953A]" />
            </div>
            <p className="text-[#6B6B6B] max-w-md mx-auto text-sm leading-relaxed">
              For life-threatening emergencies, always call. For planned transport and partnership enquiries, email our specialist teams.
            </p>
          </div>
        </div>
      </section>


      {/* ── Mission ── */}
      <section className="py-20 bg-[#1C1C1E] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C0392B]/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/25 px-4 py-1.5 rounded-sm mb-5">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                To Remove Every Barrier Between a Patient and the Care They Need.
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]" />
                <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                We exist because geography, bureaucracy and time should never be the reason a patient does not survive. Every system, every hire and every investment we make is in service of one goal: getting the right care to the right patient, faster than anyone else.
              </p>
              <p className="text-white/70 leading-relaxed">
                When you call us, you are not reaching a call centre — you are reaching a medically qualified coordinator who will begin mobilising resources from the moment you dial.
              </p>
            </div>

            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/people.png"
                alt="Air ambulance medical crew in flight suits gathered around a mission briefing table studying maps and patient charts before a flight"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1C1E]">What You Can Always Expect From Us</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]" />
              <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9953A]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#C0392B]/30 transition-all duration-200 hover:-translate-y-1">
                <span className="text-3xl block mb-4">{v.icon}</span>
                <h3 className="font-serif font-bold text-[#1C1C1E] text-base mb-2">{v.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom emergency strip ── */}
      <section className="bg-[#C0392B] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="font-serif text-2xl md:text-3xl font-bold mb-3">Facing a medical emergency right now?</p>
          <p className="text-white/80 mb-7 text-base">Do not wait. Call our emergency line — we answer in seconds, not minutes.</p>
          <a
            href="tel:+17042997318"
            className="inline-flex items-center gap-3 bg-white text-[#C0392B] font-bold text-lg px-10 py-4 rounded-xl hover:bg-amber-50 transition-colors shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +1 (704) 299-7318
          </a>
        </div>
      </section>
    </>
  )
}