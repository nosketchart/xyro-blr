import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Ticket, User, Phone, Mail, Sparkles, Download, Share2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import QRCode from 'qrcode';

export default function BookingModal({ event, isOpen, onClose }) {
  const [selectedPass, setSelectedPass] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guestCount: '1',
    instagramHandle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketResult, setTicketResult] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (event && event.passes && event.passes.length > 0) {
      setSelectedPass(event.passes[0]);
      setTicketResult(null);
    }
  }, [event]);

  if (!isOpen || !event) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate dynamic ticket ID
    const ticketId = `XYRO-${Math.floor(100000 + Math.random() * 900000)}-BLR`;

    // Generate QR Code data
    const qrData = JSON.stringify({
      id: ticketId,
      event: event.title,
      date: event.date,
      pass: selectedPass.name,
      holder: formData.name,
      phone: formData.phone,
      verified: true
    });

    try {
      const qrUrl = await QRCode.toDataURL(qrData, {
        width: 220,
        margin: 1,
        color: {
          dark: '#00f0ff',
          light: '#050508'
        }
      });
      setQrCodeUrl(qrUrl);
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setTicketResult({
        ticketId,
        pass: selectedPass,
        holder: formData.name,
        phone: formData.phone,
        email: formData.email,
        guests: formData.guestCount,
        issuedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      // Confetti burst on successful generation
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleShareWhatsApp = () => {
    if (!ticketResult) return;
    const text = encodeURIComponent(
      `🔥 Here is my official XYRO Pass for ${event.title}!\n\nPass: ${ticketResult.pass.name}\nHolder: ${ticketResult.holder}\nPass ID: ${ticketResult.ticketId}\nDate: ${event.date}\nVenue: ${event.venue}\n\nSee you at the party with @xyro.blr!`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-cyber-darker border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyber-pink/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyber-cyan/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!ticketResult ? (
          /* Pass Registration Form */
          <div>
            <div className="mb-6">
              <div className="text-xs font-bold text-cyber-cyan uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Express Guestlist & Pass Reservation</span>
              </div>
              <h3 className="text-2xl font-black font-syne text-white">
                {event.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {event.date} • {event.venue}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Select Pass Tier */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Entry Tier
                </label>
                <div className="space-y-2">
                  {event.passes.map((pass) => (
                    <div
                      key={pass.id}
                      onClick={() => setSelectedPass(pass)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        selectedPass?.id === pass.id
                          ? 'border-cyber-cyan bg-cyber-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{pass.name}</span>
                          {pass.price === 0 && (
                            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-cyber-lime/20 text-cyber-lime border border-cyber-lime/40">
                              Free
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{pass.perk}</p>
                      </div>
                      <div className="text-sm font-extrabold text-white text-right">
                        {pass.price === 0 ? '₹0' : `₹${pass.price}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Contact Details */}
              <div className="space-y-3">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300">
                  2. Attendee Details (For Door Scanner)
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name (as per Govt ID)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Instagram Handle (e.g. @yourname)"
                      value={formData.instagramHandle}
                      onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-glow-pink text-white font-extrabold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? (
                  <span>Generating Digital Entry QR Pass...</span>
                ) : (
                  <>
                    <span>Generate Instant QR Entry Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyber-lime" />
                <span>Instant Confirmation • Official XYRO Verified QR</span>
              </div>

            </form>
          </div>
        ) : (
          /* Digital QR Pass Result Display */
          <div className="space-y-6 text-center">
            
            {/* Success Header */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-cyber-lime/20 border border-cyber-lime/40 flex items-center justify-center text-cyber-lime mb-2 animate-bounce">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black font-syne text-white">
                PASS CONFIRMED!
              </h3>
              <p className="text-xs text-slate-300">
                Your digital entry barcode has been generated for {event.title}
              </p>
            </div>

            {/* Ticket Card Element */}
            <div className="glass-panel border border-cyber-cyan/40 rounded-3xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.15)] text-left">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple"></div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                
                {/* QR Code Container */}
                <div className="bg-black p-2.5 rounded-2xl border border-cyber-cyan/30 shrink-0">
                  {qrCodeUrl ? (
                    <img src={qrCodeUrl} alt="Entry Pass QR" className="w-36 h-36 rounded-lg" />
                  ) : (
                    <div className="w-36 h-36 bg-black flex items-center justify-center text-xs text-cyber-cyan">
                      QR Generated
                    </div>
                  )}
                  <div className="text-[10px] font-mono text-center text-cyber-cyan mt-1 font-bold">
                    {ticketResult.ticketId}
                  </div>
                </div>

                {/* Ticket Details */}
                <div className="space-y-2 flex-1 w-full">
                  <div className="text-[10px] uppercase font-bold text-cyber-pink tracking-widest">
                    {ticketResult.pass.name}
                  </div>
                  <div className="text-lg font-extrabold text-white font-syne leading-tight">
                    {ticketResult.holder}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-2 border-t border-white/10">
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-semibold">Date</span>
                      <span className="font-bold text-white">{event.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-semibold">Door Cutoff</span>
                      <span className="font-bold text-white">{event.time.split('-')[0]}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500 block text-[9px] uppercase font-semibold">Venue</span>
                      <span className="text-slate-200">{event.venue}</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-cyber-lime flex items-center gap-1 font-semibold pt-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Active in Door Scanner Database</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Actions for User */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleShareWhatsApp}
                className="flex-1 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Pass on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  alert(`Pass ${ticketResult.ticketId} saved to your device. Please show this at the entrance!`);
                }}
                className="flex-1 py-3 rounded-xl btn-glow-cyan text-black text-xs font-extrabold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save Pass to Wallet</span>
              </button>
            </div>

            <button
              onClick={() => {
                setTicketResult(null);
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              Done & Close
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
