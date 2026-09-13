import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Sparkles, Heart, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="border-t border-white/10 bg-cyber-darker relative overflow-hidden pt-16 pb-12">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl font-extrabold font-syne tracking-tight text-white">
                XYRO
              </span>
              <span className="text-[10px] uppercase font-black tracking-widest text-cyber-pink px-2 py-0.5 rounded bg-cyber-pink/10 border border-cyber-pink/30">
                BLR
              </span>
            </Link>
            <p className="text-sm font-semibold text-gradient-full">
              Bangalore's next wave: Events • Music • Madness
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Pioneering high-octane electronic parties, rooftop sunset sessions, lagoon pool raves, and VIP nightlife across Bengaluru.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/xyro.blr/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-pink/50 hover:bg-cyber-pink/10 text-slate-300 hover:text-cyber-pink transition-all flex items-center gap-2 text-xs font-bold"
              >
                <InstagramIcon className="w-4 h-4 text-cyber-pink" />
                <span>@xyro.blr</span>
              </a>
            </div>
          </div>

          {/* Quick Directory Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-cyber-cyan transition-colors">Home Experience</Link></li>
              <li><Link to="/events" className="hover:text-cyber-cyan transition-colors">Upcoming Events</Link></li>
              <li><Link to="/guestlist" className="hover:text-cyber-pink transition-colors font-bold text-slate-300">Free Guestlist RSVP</Link></li>
              <li><Link to="/vip" className="hover:text-cyber-cyan transition-colors">VIP Tables & Cabanas</Link></li>
              <li><Link to="/sound" className="hover:text-cyber-cyan transition-colors">Sound & Resident DJs</Link></li>
            </ul>
          </div>

          {/* Community & Collab Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Collaborate
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/gallery" className="hover:text-cyber-cyan transition-colors">The Vibe Gallery</Link></li>
              <li><Link to="/partner" className="hover:text-cyber-cyan transition-colors">Host With Us</Link></li>
              <li><Link to="/partner" className="hover:text-cyber-cyan transition-colors">Brand Sponsorship</Link></li>
              <li><Link to="/partner" className="hover:text-cyber-cyan transition-colors">Campus Ambassadors</Link></li>
              <li><Link to="/contact" className="hover:text-cyber-cyan transition-colors">Door Policies & FAQs</Link></li>
            </ul>
          </div>

          {/* Secret Drops Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyber-pink" />
              <span>Secret Warehouse & Flash Pass Drops</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get secret party venue coordinates, flash free guestlist links, and early bird drops before they appear on Instagram.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                />
                <button
                  type="submit"
                  className="btn-glow-cyan text-black px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1"
                >
                  <span>Join</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime text-xs font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>You're on the secret VIP drop list!</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 XYRO BANGALORE (@xyro.blr). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>21+ Entry Only</span>
            <span>•</span>
            <span>Bengaluru Nightlife Compliant</span>
            <span>•</span>
            <a href="https://www.instagram.com/xyro.blr/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-0.5">
              <span>Instagram @xyro.blr</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
