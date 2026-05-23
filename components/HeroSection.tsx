"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";



export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/night-helicopter.jpg"
          alt="Air ambulance flying over city at dusk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="max-w-2xl">
          {/* Pre-headline */}
          {/* <div className="inline-flex items-center gap-2 bg-[#9f0000]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Dispatch Available Now — 24 / 7 / 365
          </div> */}

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up">
            When Every{" "}
            <span className="italic text-[#ff7a0f]">Second</span>
            <br />
            Counts
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            AirMed Global delivers rapid, compassionate medical transport across 180+ countries. From ICU-equipped air ambulances to ground coordination — we bring clinical excellence to wherever you need us.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <a
              href="tel:+18005550911"
              className="inline-flex items-center justify-center gap-2 bg-[#9f0000] hover:bg-[#c40000] text-white px-8 py-4 rounded-full font-bold text-base shadow-warm-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              <Phone size={18} />
              Call Emergency Line
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
      {/* Bottom info strip */}
      {/* <div className="absolute -bottom-10 left-0 right-0 z-10 bg-gradient-to-r from-[#9f0000] to-[#c74507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-sm text-center">
            {[
              ["15,000+", "Missions Completed"],
              ["180+",    "Countries Served"],
              ["98.7%",   "On-Time Dispatch"],
              ["21 years","Of Excellence"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display font-bold text-xl sm:text-2xl">{stat}</div>
                <div className="text-white/70 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}