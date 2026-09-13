import React, { useState } from 'react';
import { Crown, Sparkles, Check, MessageSquare, PhoneCall, ArrowRight, Shield } from 'lucide-react';
import { VIP_PACKAGES } from '../data/eventsData';

export default function VipSection() {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleBookTable = (pkg) => {
    const text = encodeURIComponent(
      `Hello XYRO Concierge! I want to inquire/reserve the "${pkg.name}" table package (${pkg.price}) for an upcoming Bangalore event.`
    );
    // WhatsApp direct link to organizers
    window.open(`https://wa.me/919900000000?text=${text}`, '_blank');
  };

  return (
    <section id="vip" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyber-purple/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest mb-3">
            <Crown className="w-3.5 h-3.5" />
            <span>High Roller Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight">
            VIP TABLES & <span className="text-gradient-cyan">BOTTLE SERVICE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Elevate your night. Experience Bangalore’s hottest parties with stage-side cabanas, dedicated mixologists, premium sparkler celebrations, and private security.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {VIP_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-panel rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'border-cyber-pink shadow-[0_0_30px_rgba(255,42,133,0.2)] bg-cyber-card/90 scale-105 z-10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyber-pink to-cyber-purple text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Most Requested By Bangalore VIPs
                </div>
              )}

              <div>
                <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  {pkg.idealFor}
                </div>
                <h3 className="text-2xl font-black font-syne text-white mt-1">
                  {pkg.name}
                </h3>
                
                <div className="mt-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-white font-syne">
                    {pkg.price}
                  </span>
                  {pkg.price !== "Custom Quote" && (
                    <span className="text-xs text-slate-400 ml-1">/ Table</span>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-300">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-cyber-cyan/15 text-cyber-cyan flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => handleBookTable(pkg)}
                  className={`w-full py-3.5 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? 'btn-glow-pink text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve Table via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Concierge Hotline */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-3">
          <Shield className="w-4 h-4 text-cyber-cyan" />
          <span>For bespoke birthday surprises or full corporate club buyouts, contact our lead host via VIP Concierge.</span>
        </div>

      </div>
    </section>
  );
}
