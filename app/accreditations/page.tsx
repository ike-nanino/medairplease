import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accreditations, Certifications & Affiliations | MedAir Global',
  description: 'MedAir Global holds CAMTS, EURAMI and NAAMTA accreditations and maintains affiliations with major international airlines and aviation bodies.',
}

const accreditations = [
  {
    logo: '/images/camts.png',
    alt: 'CAMTS logo — Commission on Accreditation of Medical Transport Systems official seal',
    name: 'CAMTS',
    full: 'Commission on Accreditation of Medical Transport Systems',
    description: 'The gold standard for medical transport quality worldwide. CAMTS accreditation confirms that our air and ground operations meet the most rigorous clinical, safety and operational standards in the industry.',
    since: '2002',
    badge: 'International',
  },
  {
    logo: '/images/eurami.png',
    alt: 'EURAMI logo — European Aero-Medical Institute certification badge',
    name: 'EURAMI',
    full: 'European Aero-Medical Institute',
    description: 'European accreditation verifying excellence in aeromedical transport. EURAMI certification covers aircraft medical configuration, crew training standards and quality management systems.',
    since: '2006',
    badge: 'European',
  },
  {
    logo: '/images/naamata.png',
    alt: 'NAAMTA logo — National Air and Surface Transport Accreditation seal',
    name: 'NAAMTA',
    full: 'National Air and Surface Transport Accreditation',
    description: 'Accreditation covering both air and surface (ground) medical transport operations. NAAMTA confirms integrated quality systems across our multi-modal transport network.',
    since: '2010',
    badge: 'USA',
  },
  {
    logo: '/images/iata.png',
    alt: 'IATA logo — International Air Transport Association official member emblem',
    name: 'IATA Member',
    full: 'International Air Transport Association',
    description: 'Active membership in IATA confirms our operations, documentation and air transport standards align with the global aviation industry framework governing safe international air travel.',
    since: '2004',
    badge: 'Global Aviation',
  },
]

const certifications = [
  {
    icon: '🩺',
    name: 'ACLS — Advanced Cardiovascular Life Support',
    issuer: 'American Heart Association',
    scope: 'All clinical transport crew',
    description: 'Every clinical staff member holds current ACLS certification, ensuring advanced resuscitation competencies at altitude.',
  },
  {
    icon: '🏥',
    name: 'PHTLS — Pre-Hospital Trauma Life Support',
    issuer: 'National Association of Emergency Medical Technicians',
    scope: 'All paramedics and flight nurses',
    description: 'Trauma life support training critical for scene-response and ground ambulance operations.',
  },
  {
    icon: '✈️',
    name: 'Aviation Medical Transport Certificate',
    issuer: 'FAA / EASA aligned',
    scope: 'Flight crew and medical personnel',
    description: 'Specialist aeromedical training covering hypoxia, cabin pressure physiology and in-flight emergency medicine.',
  },
  {
    icon: '🌡️',
    name: 'CCEMTP — Critical Care Emergency Medical Transport',
    issuer: 'International Association of Flight & Critical Care Paramedics',
    scope: 'Senior paramedics',
    description: 'The highest level of paramedic training for critical care environments including air ambulance operations.',
  },
  {
    icon: '🔬',
    name: 'ISO 9001:2015 Quality Management',
    issuer: 'Bureau Veritas',
    scope: 'All operations globally',
    description: 'Our quality management systems across all 47 offices are certified under ISO 9001:2015 standards.',
  },
  {
    icon: '🛡️',
    name: 'OHSAS 18001 — Occupational Health & Safety',
    issuer: 'British Standards Institution',
    scope: 'All ground and hangar operations',
    description: 'Comprehensive occupational health and safety management certified across our full ground operations network.',
  },
]

const affiliations = [
  {
    logo: '/images/emirates.png',
    alt: 'Emirates airline logo — red and white Arabic calligraphy wordmark',
    name: 'Emirates',
    type: 'Preferred Stretcher Partner',
    detail: 'Commercial stretcher configurations on select long-haul routes with coordinated medical boarding protocols.',
  },
  {
    logo: '/images/lf.png',
    alt: 'Lufthansa airline logo — blue crane bird emblem on yellow circle',
    name: 'Lufthansa',
    type: 'Medical Escort Partner',
    detail: 'Joint protocols for medical escort placement and priority boarding across the Lufthansa Group network.',
  },
  {
    logo: '/images/bt.png',
    alt: 'British Airways logo — stylised Union Jack speed-bird emblem',
    name: 'British Airways',
    type: 'Commercial Medical Partner',
    detail: 'Certified medical escort operations with pre-cleared arrangements at Heathrow and Gatwick.',
  },
  {
    logo: '/images/qt.png',
    alt: 'Qatar Airways logo — white and maroon wordmark with crown symbol',
    name: 'Qatar Airways',
    type: 'Stretcher & Escort Partner',
    detail: 'Extended network coverage via Doha hub enabling one-stop repatriation from Asia, Africa and Oceania.',
  },

  {
    logo: '/images/et.png',
    alt: 'Ethiopian Airlines logo — green yellow red rising sun emblem with wordmark',
    name: 'Ethiopian Airlines',
    type: 'Africa Hub Partner',
    detail: 'Strategic partnership enabling rapid medical repatriation routing across sub-Saharan and East Africa.',
  },
  {
    logo: '/images/delta.png',
    alt: 'Delta Air Lines logo — red triangular widget with Delta wordmark',
    name: 'Delta Air Lines',
    type: 'Americas Medical Partner',
    detail: 'Pre-arranged medical escort and stretcher services across the Delta domestic and transatlantic network.',
  },
  {
    logo: '/images/france.png',
    alt: 'Air France logo — blue swallow bird emblem with blue wordmark',
    name: 'Air France',
    type: 'Europe Network Partner',
    detail: 'Collaborative protocols for medical passenger handling at CDG and European destination airports.',
  },
]

const associations = [
  { name: 'Air Ambulance Association (AAAA)',      flag: '🌐' },
  { name: 'International Air Ambulance Association (IAAA)', flag: '🌐' },
  { name: 'European Air Ambulance (EAA)',           flag: '🇪🇺' },
  { name: 'International SOS Foundation',          flag: '🌐' },
  { name: 'Association of Air Medical Services (AAMS)', flag: '🇺🇸' },
  { name: 'World Medical Association (WMA)',        flag: '🌐' },
  { name: 'International Council of Air Shows',    flag: '🌐' },
  { name: 'Africa Air Ambulance Association',      flag: '🌍' },
]

export default function AccreditationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[46vh] flex items-center overflow-hidden">
        <Image
          src="/images/11.jpg"
          alt="MedAir Global air ambulance aircraft on tarmac at sunrise, ground crew performing pre-flight safety checks, ambulance vehicle alongside"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E]/90 via-[#96281B]/55 to-[#1C1C1E]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-amber-300 bg-amber-300/10 border border-amber-300/30 px-4 py-1.5 rounded-sm mb-6">
            Quality & Standards
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-5 max-w-2xl">
            Accreditations,<br />
            <span className="text-[#E67E22]">Certifications</span><br />
            & Affiliations
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Our commitment to excellence is verified by the world&apos;s most respected medical transport and aviation authorities — not just claimed by us.
          </p>
        </div>
      </section>

      {/* ── Accreditations ── */}
      <section className="py-20 bg-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
              Accreditations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Globally Recognised Accreditations</h2>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]" />
              <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9953A]" />
            </div>
            <p className="text-[#6B6B6B] max-w-lg mx-auto text-sm leading-relaxed">
              These accreditations are independently audited and renewed on rigorous cycles. They are not honorary — they require demonstrated operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {accreditations.map((a) => (
              <div key={a.name} className="bg-white border border-stone-200 rounded-2xl p-7 flex gap-6 hover:shadow-xl hover:border-[#C0392B]/25 transition-all duration-300 hover:-translate-y-0.5 group">
                {/* Logo placeholder */}
                <div className="w-20 h-20 shrink-0 bg-stone-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={a.logo}
                    alt={a.alt}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-serif font-bold text-[#1C1C1E] text-lg group-hover:text-[#C0392B] transition-colors">{a.name}</h3>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest bg-[#C0392B]/10 text-[#C0392B] border border-[#C0392B]/20 px-2.5 py-1 rounded-full">
                      {a.badge}
                    </span>
                  </div>
                  <p className="text-[#C0392B] text-xs font-semibold mb-2">{a.full}</p>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-3">{a.description}</p>
                  <p className="text-[#6B6B6B] text-xs">
                    <span className="font-semibold text-[#1C1C1E]">Accredited since:</span> {a.since}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
              Certifications
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Clinical & Operational Certifications</h2>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]" />
              <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9953A]" />
            </div>
            <p className="text-[#6B6B6B] max-w-lg mx-auto text-sm leading-relaxed">
              Individual certifications held across our clinical crew and operational teams — verified and renewed to the highest current standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((c) => (
              <div key={c.name} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#C0392B]/25 transition-all duration-200 hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-[#C0392B]/8 flex items-center justify-center text-xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-serif font-bold text-[#1C1C1E] text-sm leading-snug group-hover:text-[#C0392B] transition-colors">{c.name}</p>
                    <p className="text-[#C0392B] text-[11px] font-semibold">{c.issuer}</p>
                  </div>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-3">{c.description}</p>
                <p className="text-[#6B6B6B] text-xs">
                  <span className="font-semibold text-[#1C1C1E]">Scope:</span> {c.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airline Affiliations ── */}
      <section className="py-20 bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/25 px-4 py-1.5 rounded-sm mb-4">
              Airline Affiliations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Trusted by the World&apos;s Leading Airlines</h2>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]" />
              <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9953A]" />
            </div>
            <p className="text-white/60 max-w-lg mx-auto text-sm leading-relaxed">
              Our formal partnerships with major carriers allow us to arrange stretcher configurations, priority boarding and coordinated medical escort placement worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {affiliations.map((a) => (
              <div key={a.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 group">
                {/* Logo */}
                <div className="w-full h-14 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden px-4">
                  <Image
                    src={a.logo}
                    alt={a.alt}
                    width={120}
                    height={40}
                    className="object-contain max-h-10"
                  />
                </div>
                <p className="font-serif font-bold text-white text-sm mb-1 group-hover:text-[#E67E22] transition-colors">{a.name}</p>
                <p className="text-[#C0392B] text-[10px] font-bold uppercase tracking-widest mb-2">{a.type}</p>
                <p className="text-white/55 text-xs leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Associations ── */}
      <section className="py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
              Memberships
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-3">Industry Association Memberships</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]" />
              <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9953A]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {associations.map((a) => (
              <div key={a.name} className="bg-white border border-stone-200 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-[#C0392B]/30 hover:shadow-md transition-all duration-200">
                <span className="text-xl shrink-0">{a.flag}</span>
                <p className="text-[#1C1C1E] text-sm font-medium leading-snug">{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  )
}