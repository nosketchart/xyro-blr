import React, { useState } from 'react';
import PartnerSection from '../components/PartnerSection';
import { Handshake, Building, Users, Sparkles, Trophy, Check, ArrowRight } from 'lucide-react';

export default function PartnerPage() {
  const stats = [
    { value: "10,000+", label: "Urban Partygoers Engaged", sub: "Bangalore Youth Demographic" },
    { value: "15+", label: "Successful Club & Pool Takeovers", sub: "100% Sold Out" },
    { value: "50,000+", label: "Monthly Social Impressions", sub: "Reels & Collabs" },
    { value: "Top Tier", label: "Production & Security Standard", sub: "Zero-Incident Nightlife" },
  ];

  return (
    <div className="pt-28 pb-24 space-y-24">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-pink/15 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest mb-4">
          <Handshake className="w-3.5 h-3.5" />
          <span>Strategic Collaborations</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne text-white tracking-tight">
          PARTNER & <span className="text-gradient-full">HOST WITH US</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Scale your venue's revenue, activate your beverage brand, or earn commissions as an official college campus ambassador.
        </p>
      </section>

      {/* Stats Counter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl border border-white/10 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black font-syne text-white">{s.value}</div>
              <div className="text-xs font-bold text-cyber-cyan uppercase tracking-wider">{s.label}</div>
              <div className="text-[11px] text-slate-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Partner Section Form */}
      <PartnerSection />

      {/* Campus Ambassador Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyber-cyan/30 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30">
              Student Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-syne text-white">
              JOIN THE XYRO CAMPUS AMBASSADOR CREW
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Are you a social leader in your college? Get free VIP backstage passes, guestlist allocations for your friends, cash commissions on ticket sales, and event management experience.
            </p>
          </div>

          <a
            href="https://wa.me/919900000000?text=Hello%20XYRO!%20I%20want%20to%20apply%20as%20a%20Campus%20Ambassador%20for%20my%20college."
            target="_blank"
            rel="noreferrer"
            className="btn-glow-cyan text-black text-xs font-black px-8 py-4 rounded-2xl uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-xl"
          >
            <span>Apply Via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
