import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id:          "fixed-wing",
    title:       "Air Ambulance — Fixed Wing",
    subtitle:    "Long-range critical care transport",
    description: "ICU-equipped jets staffed with specialist physicians and nurses. Ideal for transcontinental and international patient transport with uninterrupted intensive care.",
    image:       "/images/service-fixed-wing.jpg",
    badge:       "Most Popular",
    badgeColor:  "bg-[#9f0000]",
  },
  {
    id:          "helicopter",
    title:       "Air Ambulance — Helicopter",
    subtitle:    "Rapid local & regional response",
    description: "Fast, precise helicopter transport for time-critical emergencies. Access to remote locations and direct hospital rooftop landings unavailable to fixed-wing aircraft.",
    image:       "/images/service-helicopter.jpg",
    badge:       "Fastest Response",
    badgeColor:  "bg-[#c74507]",
  },
  {
    id:          "escort",
    title:       "Commercial Medical Escort",
    subtitle:    "Supervised travel on scheduled flights",
    description: "Dedicated medical professionals accompany patients on commercial airlines, providing continuous monitoring and care while minimizing transport costs.",
    image:       "/images/service-escort.jpg",
    badge:       null,
    badgeColor:  "",
  },
  {
    id:          "stretcher",
    title:       "Stretcher on Commercial Flight",
    subtitle:    "Recumbent transport at scale",
    description: "Multiple economy-class seats are configured into a flat stretcher bay with medical equipment, allowing recumbent patient transport on commercial aircraft worldwide.",
    image:       "/images/service-stretcher.jpg",
    badge:       "Cost-Effective",
    badgeColor:  "bg-amber-600",
  },
  {
    id:          "ground",
    title:       "Ground Ambulance",
    subtitle:    "Advanced life support on the road",
    description: "ALS and BLS-equipped ground ambulances with experienced crews for hospital-to-airport transfers, facility-to-facility transport, and local emergency response.",
    image:       "/images/service-ground.jpg",
    badge:       null,
    badgeColor:  "",
  },
  {
    id:          "nationwide",
    title:       "Nationwide Transport",
    subtitle:    "Seamless domestic coordination",
    description: "End-to-end logistics across the entire country — coordinating ground, air, and receiving facility handoffs for smooth domestic patient repatriation.",
    image:       "/images/service-nationwide.jpg",
    badge:       null,
    badgeColor:  "",
  },
  {
    id:          "international",
    title:       "International Air Ambulance",
    subtitle:    "Global repatriation specialists",
    description: "Expert navigation of international regulations, customs, immigration, and medical protocols. We manage every detail of complex overseas patient repatriation.",
    image:       "/images/service-international.png",
    badge:       "Global Reach",
    badgeColor:  "bg-[#9f0000]",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#c40000] mb-3">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Comprehensive Medical{" "}
            <span className="italic text-[#c40000]">Transport</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From helicopter retrieval to international repatriation, every service is delivered with ICU-level clinical standards and 24/7 medical coordination.
          </p>
        </div>
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badge */}
                {service.badge && (
                  <div
                    className={`absolute top-4 left-4 ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-[#c40000] uppercase tracking-wider mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-[#9f0000] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-warm-gradient text-white px-8 py-4 rounded-full font-bold shadow-warm-lg hover:shadow-warm-xl hover:scale-105 transition-all duration-200"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}