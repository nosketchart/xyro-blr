import React from 'react';
import FaqSection from '../components/FaqSection';
import { HelpCircle, ShieldAlert, FileText, Phone, Mail, MessageSquare, MapPin, AlertTriangle } from 'lucide-react';

export default function ContactPage() {
  const policies = [
    {
      title: "Mandatory Government ID (21+)",
      desc: "All guests must carry a valid physical or digital government-issued photo ID (Aadhaar, Passport, or Driving License). Soft copies in Digilocker are accepted.",
      icon: ShieldAlert
    },
    {
      title: "Dress Code Standards",
      desc: "Nightclub & Sunset Sessions: Smart casuals, shirts, sneakers, glam outfits. Strictly no flip-flops or sleeveless vests for male stags. Pool Parties: Resortwear and swimwear permitted.",
      icon: FileText
    },
    {
      title: "Strict Door Cutoff Timings",
      desc: "Free guestlist passes are valid only until the stated cutoff time on your ticket (typically 9:30 PM for clubs, 6:30 PM for sunset sessions). Late arrivals must pay standard club cover.",
      icon: AlertTriangle
    },
    {
      title: "Zero Tolerance Safety Policy",
      desc: "We maintain a safe, welcoming, and harassment-free environment. Any misconduct or unruly behavior results in immediate security ejection and permanent blacklist.",
      icon: HelpCircle
    }
  ];

  return (
    <div className="pt-28 pb-24 space-y-24">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-cyan/15 border border-cyber-cyan/30 text-cyber-cyan text-xs font-black uppercase tracking-widest mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Need Assistance?</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne text-white tracking-tight">
          RULES, POLICIES & <span className="text-gradient-cyan">FAQS</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Everything you need to know about entry requirements, door scanners, dress codes, and concierge assistance.
        </p>
      </section>

      {/* Entry Policy Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black font-syne text-white">
            BANGALORE NIGHTLIFE COMPLIANCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyber-pink/15 text-cyber-pink shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-syne text-white">{p.title}</h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Direct Contact & Lost and Found Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="space-y-2">
              <MessageSquare className="w-6 h-6 text-cyber-cyan mx-auto" />
              <h4 className="text-base font-bold font-syne text-white">WhatsApp Concierge</h4>
              <p className="text-xs text-slate-400">For table booking changes or immediate guestlist inquiries.</p>
              <a
                href="https://wa.me/919900000000"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-cyber-cyan hover:underline inline-block pt-1"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            <div className="space-y-2">
              <Mail className="w-6 h-6 text-cyber-pink mx-auto" />
              <h4 className="text-base font-bold font-syne text-white">Lost & Found</h4>
              <p className="text-xs text-slate-400">Left an item at one of our weekend club or pool venues?</p>
              <a
                href="mailto:contact@xyroevents.in"
                className="text-xs font-bold text-cyber-pink hover:underline inline-block pt-1"
              >
                contact@xyroevents.in &rarr;
              </a>
            </div>

            <div className="space-y-2">
              <MapPin className="w-6 h-6 text-cyber-lime mx-auto" />
              <h4 className="text-base font-bold font-syne text-white">Official Instagram</h4>
              <p className="text-xs text-slate-400">Follow for flash announcements, artist line-ups, and stories.</p>
              <a
                href="https://www.instagram.com/xyro.blr/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-cyber-lime hover:underline inline-block pt-1"
              >
                @xyro.blr &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
