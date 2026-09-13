import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import { EVENTS_DATA } from '../data/eventsData';
import { Search, Filter, Sparkles, MapPin, Calendar, Flame, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventsPage({ onBookEvent }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sunset Sessions', 'Pool Parties', 'Club Nights', 'Afterhours'];

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.genres.some(g => g.toLowerCase().includes(searchTerm.toLowerCase())) ||
      event.lineup.some(l => l.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const venues = [
    {
      name: "Skyline Deck, UB City",
      area: "Central Bangalore",
      vibe: "Ibiza Sunset & Deep House",
      badge: "Rooftop"
    },
    {
      name: "The Palms Resort & Lagoon",
      area: "Electronic City",
      vibe: "Aquatic Raves & Pool Carnivals",
      badge: "Resort Pool"
    },
    {
      name: "Secret Industrial Warehouse",
      area: "Whitefield / Koramangala",
      vibe: "Peak Time Techno & Underground",
      badge: "Afterhours"
    },
    {
      name: "Xyro Partner Club",
      area: "100ft Road, Indiranagar",
      vibe: "High Energy Weekend Madness",
      badge: "Nightclub"
    }
  ];

  return (
    <div className="pt-28 pb-24 space-y-20">
      
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyber-pink/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Bangalore Event Calendar 2026</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne text-white tracking-tight">
            UPCOMING <span className="text-gradient-cyan">EXPERIENCES</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Secure your passes and free guestlist entries before slots fill up. Every event features state-of-the-art acoustics and curated electronic talent.
          </p>

          {/* Search & Filter Controls */}
          <div className="max-w-3xl mx-auto mt-10 space-y-4">
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by event, artist (e.g. S1rcar), genre (Techno, Afro House), or venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-cyber-card/80 backdrop-blur-xl border border-white/15 rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyber-cyan shadow-xl"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-cyber-cyan text-black shadow-lg shadow-cyber-cyan/30'
                      : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onBook={onBookEvent}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel rounded-3xl p-12 text-center max-w-md mx-auto space-y-3">
            <Sparkles className="w-8 h-8 text-cyber-pink mx-auto" />
            <h3 className="text-xl font-bold font-syne text-white">No Events Found</h3>
            <p className="text-xs text-slate-400">
              No events matched your search "{searchTerm}". Try another search term or reset category filter.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="text-xs font-bold text-cyber-cyan underline pt-2"
            >
              Reset all filters
            </button>
          </div>
        )}
      </section>

      {/* Bangalore Venues Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs font-black uppercase tracking-widest text-cyber-cyan mb-1">
            Curated Spaces
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-syne text-white">
            OUR SIGNATURE VENUES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((v, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-cyber-pink">
                {v.badge}
              </span>
              <h4 className="text-lg font-bold font-syne text-white mt-3">{v.name}</h4>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                <MapPin className="w-3.5 h-3.5 text-cyber-lime" />
                <span>{v.area}</span>
              </div>
              <p className="text-xs text-slate-300 mt-3 border-t border-white/5 pt-3">
                {v.vibe}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fast Track Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 border border-cyber-pink/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyber-pink">Fast Pass Portal</div>
            <h3 className="text-2xl font-black font-syne text-white mt-1">
              Looking for Complimentary Guestlist Entry?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Visit our dedicated Guestlist Portal to claim official digital QR entry passes for ladies and couples.
            </p>
          </div>
          <Link
            to="/guestlist"
            className="btn-glow-pink text-white text-xs font-extrabold px-6 py-3.5 rounded-xl uppercase tracking-wider flex items-center gap-2 shrink-0"
          >
            <Zap className="w-4 h-4" />
            <span>Open Guestlist Portal</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
