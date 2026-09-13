import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import { EVENTS_DATA, RESIDENT_CREW, GALLERY_ITEMS } from '../data/eventsData';
import { ArrowRight, Sparkles, Flame, Crown, Music, Camera, Zap, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function HomePage({ onBookEvent }) {
  const featuredEvent = EVENTS_DATA[0];
  const upcomingPreview = EVENTS_DATA.slice(0, 3);

  const vibeCategories = [
    {
      title: "Sunset Sessions 🌴",
      desc: "Golden hour rooftop vibes, melodic techno, and skyline views.",
      tag: "UB City & Indiranagar",
      link: "/events",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Lagoon Pool Parties 🌊",
      desc: "Waterproof acoustics, floaties, foam cannons, and relentless bass.",
      tag: "Electronic City Resorts",
      link: "/events",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Underground Raves ⚡",
      desc: "Industrial lasers, Void sound, and 6-hour pure techno voyages.",
      tag: "Secret Warehouse",
      link: "/events",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "VIP Stage Cabanas 👑",
      desc: "Bottle sparklers, backstage entry, and private concierge service.",
      tag: "Luxury Lounges",
      link: "/vip",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <Hero
        onExploreEvents={() => {}}
        onBookFeatured={() => onBookEvent(featuredEvent)}
      />

      {/* 2. Quick Portals Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/guestlist"
            className="glass-panel p-6 rounded-3xl border border-cyber-pink/30 hover:border-cyber-pink hover:bg-cyber-pink/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-3 rounded-2xl bg-cyber-pink/20 text-cyber-pink group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-cyber-pink text-white">
                  Fast Pass
                </span>
              </div>
              <h3 className="text-xl font-bold font-syne text-white group-hover:text-cyber-pink transition-colors">
                Instant Guestlist
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Skip Instagram DMs. Claim verified QR barcode passes in 30 seconds.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-cyber-pink">
              <span>Generate Pass</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/events"
            className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-cyan/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-3 rounded-2xl bg-cyber-cyan/20 text-cyber-cyan group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                  Lineups
                </span>
              </div>
              <h3 className="text-xl font-bold font-syne text-white group-hover:text-cyber-cyan transition-colors">
                Upcoming Parties
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Ibiza sunset decks, pool carnivals, and weekend club nights.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-cyber-cyan">
              <span>View All Events</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/vip"
            className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Crown className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                  Concierge
                </span>
              </div>
              <h3 className="text-xl font-bold font-syne text-white group-hover:text-purple-400 transition-colors">
                VIP Table Service
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Private cabanas, bottle service, sparklers, and zero waiting.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-purple-400">
              <span>Book Table</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/sound"
            className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyber-lime/40 hover:bg-cyber-lime/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-3 rounded-2xl bg-cyber-lime/20 text-cyber-lime group-hover:scale-110 transition-transform">
                  <Music className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                  Artists
                </span>
              </div>
              <h3 className="text-xl font-bold font-syne text-white group-hover:text-cyber-lime transition-colors">
                Sound & Resident DJs
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Stream live sets from S1rcar, Txrun Reddy, and the Xyro crew.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-cyber-lime">
              <span>Enter Sound Room</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Vibe Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyber-cyan mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bangalore Nightlife Elevated</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight">
              CURATED <span className="text-gradient-full">EXPERIENCES</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Every weekend is engineered with world-class production, curated tracklists, and Bangalore’s most vibrant crowd.
            </p>
          </div>

          <Link
            to="/events"
            className="btn-glow-cyan text-black text-xs font-extrabold px-6 py-3 rounded-2xl flex items-center gap-2 self-start md:self-end shrink-0"
          >
            <span>Explore All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vibeCategories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 group flex flex-col h-80 relative"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white">
                  {cat.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h3 className="text-xl font-black font-syne text-white group-hover:text-cyber-cyan transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {cat.desc}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[11px] text-cyber-pink font-bold">
                  <span>Explore Lineup</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Upcoming Events Preview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-cyber-pink mb-1">
              On Sale Now
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-syne text-white">
              FEATURED PARTIES
            </h2>
          </div>
          <Link
            to="/events"
            className="text-xs font-bold text-cyber-cyan hover:underline flex items-center gap-1"
          >
            <span>See All ({EVENTS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingPreview.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBook={onBookEvent}
            />
          ))}
        </div>
      </section>

      {/* 5. Live Instagram Community Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-pink/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest">
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow The Movement</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight">
                JOIN 1,000+ PARTY GOERS AT <span className="text-gradient-pink">@xyro.blr</span>
              </h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Catch unreleased aftermovies, secret RSVP drops, DJ booth perspectives, and behind-the-scenes madness directly on our official Instagram page.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <a
                href="https://www.instagram.com/xyro.blr/"
                target="_blank"
                rel="noreferrer"
                className="btn-glow-pink text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Visit @xyro.blr on Instagram</span>
              </a>

              <Link
                to="/gallery"
                className="py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Camera className="w-4 h-4 text-cyber-cyan" />
                <span>View Full Photo & Reel Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
