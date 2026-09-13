import React, { useState } from 'react';
import { Crown, Sparkles, Check, MessageSquare, Shield, Users, Wine, Flame, ArrowRight } from 'lucide-react';
import { VIP_PACKAGES } from '../data/eventsData';

export default function VipPage() {
  const [selectedTable, setSelectedTable] = useState('Table #1 - Stage Front');
  const [submittedInquiry, setSubmittedInquiry] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: '6',
    date: 'Upcoming Saturday',
    budget: '₹25,000+'
  });

  const tableSpots = [
    { id: 'Table #1 - Stage Front', name: 'Table #1 (Stage Front VIP)', status: 'Available', type: 'Prime', pax: '8-10 Pax' },
    { id: 'Table #2 - DJ Console Left', name: 'Table #2 (DJ Console Left)', status: 'Reserved', type: 'Exclusive', pax: '6-8 Pax' },
    { id: 'Table #3 - Elevated Mezzanine', name: 'Table #3 (Elevated Mezzanine)', status: 'Available', type: 'Lounge', pax: '6-8 Pax' },
    { id: 'Cabana #4 - Poolside Lagoon', name: 'Cabana #4 (Lagoon Poolside)', status: 'Available', type: 'Cabana', pax: '8-12 Pax' },
  ];

  const handleWhatsAppBooking = (pkg) => {
    const text = encodeURIComponent(
      `Hello XYRO Concierge! I want to book a VIP Table for an upcoming event.\n\nPackage: ${pkg.name} (${pkg.price})\nGroup Size: ${form.guests} Guests\nPreferred Location: ${selectedTable}`
    );
    window.open(`https://wa.me/919900000000?text=${text}`, '_blank');
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmittedInquiry(true);
  };

  return (
    <div className="pt-28 pb-24 space-y-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyber-purple/20 rounded-full blur-[170px] pointer-events-none"></div>

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-pink/15 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest mb-4">
          <Crown className="w-3.5 h-3.5" />
          <span>The High Roller Standard</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne text-white tracking-tight">
          VIP TABLES & <span className="text-gradient-cyan">BOTTLE SERVICE</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Step beyond general admission. Command the party with prime stage-view tables, dedicated mixologists, sparkler bottle service, and private security.
        </p>
      </section>

      {/* VIP Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {VIP_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-panel rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'border-cyber-pink shadow-[0_0_40px_rgba(255,42,133,0.25)] bg-cyber-card/90 md:scale-105 z-10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyber-pink to-cyber-purple text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Most Requested Tier
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
                    <span className="text-xs text-slate-400 ml-1">/ Night</span>
                  )}
                </div>

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

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => handleWhatsAppBooking(pkg)}
                  className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl ${
                    pkg.popular
                      ? 'btn-glow-pink text-white'
                      : 'btn-glow-cyan text-black'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve Table On WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Interactive Floorplan & Table Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-cyber-cyan mb-1">
                Visual Venue Layout
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-syne text-white">
                SELECT YOUR TABLE LOCATION
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Choose your ideal table vantage point before confirming your booking.
              </p>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan"></span> Available</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span> Reserved</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tableSpots.map((spot) => (
              <div
                key={spot.id}
                onClick={() => spot.status === 'Available' && setSelectedTable(spot.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedTable === spot.id
                    ? 'border-cyber-cyan bg-cyber-cyan/15 shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                    : spot.status === 'Reserved'
                    ? 'border-white/5 bg-white/[0.02] opacity-50 cursor-not-allowed'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">{spot.type}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    spot.status === 'Available' ? 'bg-cyber-lime/20 text-cyber-lime' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {spot.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-syne">{spot.name}</h4>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>{spot.pax}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected table summary */}
          <div className="mt-8 p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs">
              <span className="text-slate-400">Selected Location: </span>
              <strong className="text-cyber-cyan font-bold">{selectedTable}</strong>
            </div>
            <button
              onClick={() => handleWhatsAppBooking({ name: selectedTable, price: "Table Reservation" })}
              className="btn-glow-cyan text-black px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Confirm & Lock In Location</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Perks Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
            <Wine className="w-8 h-8 text-cyber-pink mx-auto" />
            <h4 className="text-base font-bold font-syne text-white">Sparkler Bottle Shows</h4>
            <p className="text-xs text-slate-400">High-energy celebration walkouts with club sparklers and fanfare for your group.</p>
          </div>
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
            <Shield className="w-8 h-8 text-cyber-cyan mx-auto" />
            <h4 className="text-base font-bold font-syne text-white">VIP Fast Entry & Security</h4>
            <p className="text-xs text-slate-400">Skip all general admission lines with your dedicated concierge escort.</p>
          </div>
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
            <Flame className="w-8 h-8 text-cyber-lime mx-auto" />
            <h4 className="text-base font-bold font-syne text-white">Backstage & Deck Access</h4>
            <p className="text-xs text-slate-400">Hang out close to resident DJs, headliners, and artists in the private deck.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
