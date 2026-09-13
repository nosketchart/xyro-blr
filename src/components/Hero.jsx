import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Clock, MapPin, ArrowRight, ShieldCheck, Flame, Users } from 'lucide-react';

export default function Hero({ onExploreEvents, onBookFeatured }) {
  // Live countdown to next event
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyber-pink/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-cyber-cyan/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:border-cyber-cyan/40 transition-all cursor-default max-w-[95%]">
          <span className="flex h-2 w-2 rounded-full bg-cyber-pink animate-ping shrink-0"></span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-300 truncate">
            Official Portal <span className="text-cyber-cyan font-bold">@xyro.blr</span>
          </span>
          <Flame className="w-3.5 h-3.5 text-cyber-orange shrink-0" />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne tracking-tight leading-[1.08] max-w-5xl mx-auto mb-4 sm:mb-6">
          BANGALORE'S <br className="hidden sm:inline" />
          <span className="text-gradient-full">NEXT WAVE.</span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-2xl text-slate-300 max-w-2xl mx-auto font-medium mb-8 sm:mb-10 tracking-wide">
          Events <span className="text-cyber-pink font-bold">•</span> Music{' '}
          <span className="text-cyber-cyan font-bold">•</span> Madness
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 max-w-md mx-auto w-full">
          <Link
            to="/guestlist"
            className="w-full sm:w-auto btn-glow-pink text-white font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-full text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl"
          >
            <span>Book Free Guestlist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/vip"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyber-cyan/50 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <span>VIP Table Service</span>
          </Link>
        </div>


        {/* Next Event Spotlight Card & Countdown */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden text-left">
          
          <div className="absolute top-0 right-0 px-4 sm:px-6 py-1 bg-gradient-to-l from-cyber-pink to-cyber-purple text-white text-[10px] sm:text-xs font-black tracking-widest uppercase rounded-bl-xl sm:rounded-bl-2xl">
            Next Experience
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-2 sm:pt-0">
            
            {/* Event Info */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyber-cyan uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Sunset Is Calling</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white font-syne">
                IBIZA SUNSET SESSIONS 🌴
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Golden hour melodic grooves, tropical cocktails, and Bangalore's skyline view. Free guestlist passes closing soon.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-cyber-pink" />
                  <span>Saturday, Oct 3</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/5">
                  <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>4:00 PM Onwards</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-cyber-lime" />
                  <span>Skyline Deck, UB City</span>
                </div>
              </div>
            </div>

            {/* Live Countdown & Instant Action */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
              <div className="text-[11px] sm:text-xs uppercase font-bold text-slate-400 mb-2 tracking-widest text-center lg:text-right w-full">
                Doors Open In:
              </div>
              
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center mb-4 sm:mb-5 w-full">
                <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-xl">
                  <div className="text-lg sm:text-2xl font-black text-white font-syne">{timeLeft.days}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">Days</div>
                </div>
                <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-xl">
                  <div className="text-lg sm:text-2xl font-black text-white font-syne">{timeLeft.hours}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">Hours</div>
                </div>
                <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-xl">
                  <div className="text-lg sm:text-2xl font-black text-white font-syne">{timeLeft.minutes}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">Mins</div>
                </div>
                <div className="bg-black/40 border border-white/10 p-2 sm:p-2.5 rounded-xl">
                  <div className="text-lg sm:text-2xl font-black text-cyber-cyan font-syne">{timeLeft.seconds}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">Secs</div>
                </div>
              </div>

              <button
                onClick={onBookFeatured}
                className="w-full btn-glow-cyan text-black font-extrabold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <span>Claim Free Guestlist Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Quick Trust Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-12 sm:mt-16 max-w-4xl mx-auto text-center">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-xl sm:text-3xl font-black text-white font-syne">15+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Sold Out Nights</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-xl sm:text-3xl font-black text-cyber-cyan font-syne">10,000+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Party Goers</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-xl sm:text-3xl font-black text-cyber-pink font-syne">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Verified QR Passes</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-xl sm:text-3xl font-black text-cyber-lime font-syne">Top Tier</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">BLR Venues</div>
          </div>
        </div>


      </div>
    </section>
  );
}
