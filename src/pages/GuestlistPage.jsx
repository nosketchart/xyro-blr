import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/eventsData';
import { Zap, CheckCircle, ShieldCheck, Ticket, User, Phone, Mail, Sparkles, Download, Share2, ArrowRight, AlertCircle, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import QRCode from 'qrcode';

export default function GuestlistPage() {
  const [selectedEventId, setSelectedEventId] = useState(EVENTS_DATA[0].id);
  const [selectedPassId, setSelectedPassId] = useState(EVENTS_DATA[0].passes[0].id);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guestCount: '2',
    instagramHandle: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPass, setGeneratedPass] = useState(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

  const currentEvent = EVENTS_DATA.find(e => e.id === selectedEventId) || EVENTS_DATA[0];
  const currentPass = currentEvent.passes.find(p => p.id === selectedPassId) || currentEvent.passes[0];

  const handleEventChange = (eventId) => {
    setSelectedEventId(eventId);
    const ev = EVENTS_DATA.find(e => e.id === eventId);
    if (ev && ev.passes.length > 0) {
      setSelectedPassId(ev.passes[0].id);
    }
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsGenerating(true);

    const ticketId = `XYRO-${Math.floor(100000 + Math.random() * 900000)}-BLR`;

    const qrPayload = JSON.stringify({
      id: ticketId,
      event: currentEvent.title,
      pass: currentPass.name,
      holder: formData.name,
      phone: formData.phone,
      guests: formData.guestCount,
      date: currentEvent.date,
      venue: currentEvent.venue,
      status: 'VERIFIED_ACTIVE'
    });

    try {
      const url = await QRCode.toDataURL(qrPayload, {
        width: 250,
        margin: 1,
        color: {
          dark: '#00f0ff',
          light: '#050508'
        }
      });
      setQrCodeDataUrl(url);
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPass({
        ticketId,
        event: currentEvent,
        pass: currentPass,
        holder: formData.name,
        phone: formData.phone,
        email: formData.email,
        guests: formData.guestCount,
        handle: formData.instagramHandle || '@partygoer',
        issuedTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  const handleShareWhatsApp = () => {
    if (!generatedPass) return;
    const text = encodeURIComponent(
      `🔥 Here is my official XYRO Verified QR Entry Pass!\n\n🎟️ Event: ${generatedPass.event.title}\n🎫 Tier: ${generatedPass.pass.name}\n👤 Holder: ${generatedPass.holder} (${generatedPass.guests} Pax)\n🔖 Pass ID: ${generatedPass.ticketId}\n📅 Date: ${generatedPass.event.date}\n📍 Venue: ${generatedPass.event.venue}\n\nShow this at the gate for fast-track entry with @xyro.blr!`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyber-pink/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-pink/15 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Fast-Track Door System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-syne text-white tracking-tight">
            EXPRESS <span className="text-gradient-full">GUESTLIST PASS</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            No waiting for manual Instagram DM replies. Pick your party, register your details, and receive an instant verified digital QR pass on your phone.
          </p>
        </div>

        {!generatedPass ? (
          /* Form Section */
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
            <form onSubmit={handleGenerate} className="space-y-8">
              
              {/* Step 1: Select Event */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyber-cyan text-black flex items-center justify-center text-[11px] font-bold">1</span>
                  <span>Choose Party / Experience</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EVENTS_DATA.map((ev) => (
                    <div
                      key={ev.id}
                      onClick={() => handleEventChange(ev.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        selectedEventId === ev.id
                          ? 'border-cyber-cyan bg-cyber-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-white font-syne">{ev.title}</div>
                        <div className="text-xs text-slate-400 mt-1">{ev.date} • {ev.venue.split(',')[0]}</div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[11px]">
                        <span className="text-cyber-pink font-semibold">{ev.priceText}</span>
                        <span className="text-slate-500">{ev.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Pass Tier */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyber-pink text-white flex items-center justify-center text-[11px] font-bold">2</span>
                  <span>Select Pass Type</span>
                </label>
                <div className="space-y-2.5">
                  {currentEvent.passes.map((pass) => (
                    <div
                      key={pass.id}
                      onClick={() => setSelectedPassId(pass.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        selectedPassId === pass.id
                          ? 'border-cyber-pink bg-cyber-pink/10 shadow-[0_0_15px_rgba(255,42,133,0.2)]'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white font-syne">{pass.name}</span>
                          {pass.price === 0 && (
                            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-cyber-lime/20 text-cyber-lime border border-cyber-lime/30">
                              Free RSVP
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{pass.perk}</p>
                      </div>
                      <div className="text-base font-black text-white shrink-0">
                        {pass.price === 0 ? '₹0' : `₹${pass.price}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Attendee Details */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyber-lime text-black flex items-center justify-center text-[11px] font-bold">3</span>
                  <span>Attendee Information (For Door QR Verification)</span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name (as per Govt ID)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Instagram Handle (e.g. @yourhandle)"
                      value={formData.instagramHandle}
                      onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full btn-glow-pink text-white font-extrabold py-4 rounded-2xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-2xl"
              >
                {isGenerating ? (
                  <span>Generating Secure QR Pass...</span>
                ) : (
                  <>
                    <span>Generate Instant Digital QR Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyber-lime" />
                  <span>Instant Verification System</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyber-cyan" />
                  <span>Strict Door Cutoff Applies</span>
                </span>
              </div>

            </form>
          </div>
        ) : (
          /* Generated Verified Pass View */
          <div className="space-y-8 text-center">
            
            <div className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-cyber-lime/20 border border-cyber-lime/40 flex items-center justify-center text-cyber-lime mb-3 animate-bounce">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-black font-syne text-white">
                PASS CONFIRMED & ACTIVE!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Your entry credential has been registered in the Xyro Door Scanner system.
              </p>
            </div>

            {/* Futuristic Holographic Ticket Pass Card */}
            <div className="glass-panel border-2 border-cyber-cyan/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.2)] text-left max-w-2xl mx-auto">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple"></div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                
                {/* QR Code */}
                <div className="bg-black p-3 rounded-2xl border border-cyber-cyan/40 shrink-0 shadow-lg">
                  {qrCodeDataUrl && (
                    <img src={qrCodeDataUrl} alt="Entry Pass QR" className="w-44 h-44 rounded-xl" />
                  )}
                  <div className="text-[11px] font-mono text-center text-cyber-cyan mt-2 font-bold">
                    {generatedPass.ticketId}
                  </div>
                </div>

                {/* Ticket Metadata */}
                <div className="space-y-3 flex-1 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full bg-cyber-pink text-white">
                      {generatedPass.pass.name}
                    </span>
                    <span className="text-[11px] font-bold text-cyber-lime flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Scanner Ready</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-syne text-white leading-tight">
                    {generatedPass.event.title}
                  </h3>

                  <div className="text-sm font-bold text-slate-200">
                    Holder: <span className="text-cyber-cyan">{generatedPass.holder}</span> ({generatedPass.guests} Pax)
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-3 border-t border-white/10">
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-semibold">Date</span>
                      <span className="font-bold text-white">{generatedPass.event.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-semibold">Door Cutoff</span>
                      <span className="font-bold text-white">{generatedPass.event.time.split('-')[0]}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500 block text-[9px] uppercase font-semibold">Venue</span>
                      <span className="text-slate-200">{generatedPass.event.venue}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Share & Download CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <button
                onClick={handleShareWhatsApp}
                className="flex-1 py-3.5 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Share2 className="w-4 h-4" />
                <span>Share On WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  alert(`Pass ${generatedPass.ticketId} saved to wallet. Present this screen to security upon entry.`);
                }}
                className="flex-1 py-3.5 rounded-2xl btn-glow-cyan text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save Pass</span>
              </button>
            </div>

            <button
              onClick={() => setGeneratedPass(null)}
              className="text-xs text-slate-400 hover:text-white underline pt-4 block mx-auto"
            >
              Generate another pass for someone else &rarr;
            </button>

          </div>
        )}

        {/* Important Door Rules Notice */}
        <div className="mt-16 glass-panel rounded-2xl p-6 border border-white/10 space-y-3 text-xs text-slate-300">
          <div className="flex items-center gap-2 text-cyber-pink font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>Bangalore Nightlife Door Entry Guidelines</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Physical or digital government photo ID (Aadhaar / Passport / DL) is mandatory for 21+ verification.</li>
            <li>Free Guestlist passes are strictly valid until the door cutoff time indicated on your ticket.</li>
            <li>Clubs & sunset decks reserve right of admission based on venue dress code and capacity.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
