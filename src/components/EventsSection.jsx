import React, { useState } from 'react';
import EventCard from './EventCard';
import { Sparkles, Filter, Zap } from 'lucide-react';

export default function EventsSection({ events, onBookEvent }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sunset Sessions', 'Pool Parties', 'Club Nights', 'Afterhours'];

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(e => e.category === activeCategory);

  return (
    <section id="events" className="py-24 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[130px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-cyber-cyan mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Bangalore Season Lineup</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight">
              UPCOMING <span className="text-gradient-pink">EXPERIENCES</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From open-air sunset vibes to secret underground warehouse raves and massive pool carnivals. Reserve your spot before doors close.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-cyber-cyan text-black shadow-lg shadow-cyber-cyan/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBook={onBookEvent}
            />
          ))}
        </div>

        {/* Bottom Fast Track Notice */}
        <div className="mt-12 glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-cyber-pink/20 flex items-center justify-center text-cyber-pink shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need immediate guestlist entry for tonight?</div>
              <div className="text-xs text-slate-400">All registered passes are automatically synced to our door scanner system.</div>
            </div>
          </div>
          <a
            href="https://www.instagram.com/xyro.blr/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-extrabold uppercase tracking-wider text-cyber-cyan hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Or DM on Instagram @xyro.blr</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
