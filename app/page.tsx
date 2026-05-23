import BoardMembers from "@/components/BoardMembers";
import HeroSection from "@/components/HeroSection";
import Mission from "@/components/Mission";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import Image from "next/image";
// import WhyChooseUs from "@/components/WhyChooseUs";
// import MissionValues from "@/components/MissionValues";
// import BoardSection from "@/components/BoardSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import AffiliationsSection from "@/components/AffiliationsSection";
// import CTABanner from "@/components/CTABanner";
// import GalleryStrip from "@/components/GalleryStrip";


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

export default function HomePage() {
  return (
    <>

      <HeroSection />
      <StatsSection />
      <ServicesSection />
       {/* ── Airline Affiliations ── */}
            <section className="py-20 bg-[#49147a]">
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
      <Mission />
      <Values />
      <BoardMembers />
      <Testimonials />


    </>
  );
}