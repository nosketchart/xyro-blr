import React, { useState } from 'react';
import { Handshake, CheckCircle2, Building, Sparkles, Send, GraduationCap, Mic2 } from 'lucide-react';

export default function PartnerSection() {
  const [partnerType, setPartnerType] = useState('venue');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    email: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // In production connects to backend / airtable / email
    }, 500);
  };

  const partnerTabs = [
    { id: 'venue', label: 'Venue / Club Takeover', icon: Building, desc: 'Partner with Xyro to curate high-spending nightlife crowds at your property.' },
    { id: 'sponsor', label: 'Brand & Sponsor', icon: Sparkles, desc: 'Position your beverage or lifestyle brand directly in front of 1,000+ targeted urban youth.' },
    { id: 'promoter', label: 'Campus Ambassador', icon: GraduationCap, desc: 'Get free VIP passes, organizer perks, and commissions by representing Xyro at your college.' },
    { id: 'artist', label: 'DJ & Performer', icon: Mic2, desc: 'Submit your live sets, tech-house mixes, and play at upcoming Xyro stages.' },
  ];

  return (
    <section id="partner" className="py-24 relative bg-cyber-darker/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest mb-3">
            <Handshake className="w-3.5 h-3.5" />
            <span>Collab With The Movement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight">
            PARTNER & <span className="text-gradient-full">HOST WITH US</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Whether you own a luxury rooftop venue in Bangalore, represent a youth brand, or want to become a campus promoter, let's build something unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Tab options */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Partnership Category
            </div>

            {partnerTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = partnerType === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => {
                    setPartnerType(tab.id);
                    setSubmitted(false);
                  }}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                    isActive
                      ? 'border-cyber-cyan bg-cyber-cyan/10 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-cyber-cyan text-black' : 'bg-white/10 text-slate-300'} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-syne">{tab.label}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{tab.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Lead submission form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-syne text-white">
                    Submit Partnership Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Our team will review and reply within 24 hours via WhatsApp / Email.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Venue / Brand / College *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mirage / Red Bull / PES Univ"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Proposed Idea / Venue Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your venue capacity, sponsorship scope, or promotional network..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-glow-cyan text-black font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 tracking-wide"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Collaboration Proposal</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyber-lime/20 border border-cyber-lime/40 text-cyber-lime flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-syne text-white">Proposal Received!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out, {formData.name}. The Xyro event directors will connect with you shortly on WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-cyber-cyan font-bold hover:underline pt-2"
                >
                  Submit another inquiry &rarr;
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
