'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How quickly can you mobilise an air ambulance?',
    a: 'For critical missions, our target is wheels-up within 90 minutes of confirmed dispatch. For pre-planned transfers, we typically complete all logistics — including medical clearance, flight planning and crew briefing — within 4–6 hours. Our 24/7 command centre is always staffed by both medical and aviation coordinators.',
  },
  {
    q: 'What medical staff accompany patients during transport?',
    a: 'Every mission is staffed based on the patient\'s clinical need. Critical care transports include a minimum of a flight nurse or paramedic plus a doctor qualified in intensive care or emergency medicine. Stable escort missions may be handled by a qualified nurse or paramedic alone. All crew hold current advanced life support certifications.',
  },
  {
    q: 'Do you work with travel insurance companies?',
    a: 'Yes. We have pre-established relationships with over 150 insurance providers globally, including AXA, Allianz, Cigna, Munich Re and Generali. We handle all documentation, cost estimates and authorisation paperwork directly with insurers, minimising the administrative burden on families during a stressful time.',
  },
  {
    q: 'Can you repatriate a patient who is on a ventilator or critically ill?',
    a: 'Absolutely. Our fixed-wing air ambulances are equipped with full ICU capabilities — ventilators, defibrillators, infusion pumps, blood gas analysers and haemofiltration units. Our crew is experienced in managing the most complex critical care patients at altitude.',
  },
  {
    q: 'What is the difference between a commercial medical escort and a full air ambulance?',
    a: 'A commercial medical escort places a qualified medical professional alongside a stable patient on a scheduled commercial flight. This is significantly more cost-effective when the patient does not require continuous ICU-level care. A full air ambulance provides a dedicated aircraft with full medical fit-out — essential for critical, unstable or complex patients.',
  },
  {
    q: 'How do you handle customs, visas and border crossings for international repatriations?',
    a: 'Our dedicated ground logistics team manages all immigration documentation, Ministry of Health permits, overflight clearances and customs declarations. We have direct contacts within aviation authorities in over 100 countries and routinely handle complex multi-country repatriations.',
  },
  {
    q: 'Are your operations accredited?',
    a: 'Yes. MedAir Global holds CAMTS (Commission on Accreditation of Medical Transport Systems) and EURAMI (European Aero-Medical Institute) accreditations — the two most recognised quality standards in medical aviation. We are also NAAMTA certified and members of IATA and the Air Ambulance Association.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We operate globally, with primary hubs in North America, Europe, the Middle East, West Africa, Southeast Asia and Australia. No location is truly off-limits — our international desk has coordinated missions from Antarctica research stations, remote Pacific islands and conflict-affected regions.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[#FDF8F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
            FAQs
          </span>
          <h2 className="font-serif text-4xl md:text-[2.75rem] font-bold text-[#1C1C1E] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9953A]" />
            <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9953A]" />
          </div>
          <p className="text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            Can&apos;t find your answer? Call our team — they&apos;re available around the clock.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                open === i
                  ? 'border-[#C0392B]/40 shadow-md bg-white'
                  : 'border-stone-200 bg-white hover:border-stone-300'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`font-serif font-semibold text-base leading-snug transition-colors ${open === i ? 'text-[#C0392B]' : 'text-[#1C1C1E]'}`}>
                  {faq.q}
                </span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                  open === i ? 'bg-[#C0392B] text-white rotate-45' : 'bg-stone-100 text-[#4A4A4A]'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-[#4A4A4A] text-sm leading-relaxed px-6 pb-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-[#1C1C1E] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-serif font-bold text-white text-lg">Still have questions?</p>
            <p className="text-white/60 text-sm mt-1">Our coordination team is standing by 24 hours a day, every day of the year.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+17042997318"
              className="flex items-center gap-2 bg-[#C0392B] hover:bg-[#96281B] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Us Now
            </a>
            <a
              href="mailto:medairtransportservice@outlook.com"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}