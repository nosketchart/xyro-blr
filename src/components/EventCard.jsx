import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Sparkles, Music, Users, ArrowRight } from 'lucide-react';

export default function EventCard({ event, onBook }) {
  return (
    <div className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group h-full">
      
      {/* Card Header & Poster Image */}
      <div className="relative h-60 w-full overflow-hidden bg-cyber-dark">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-cyber-card/30 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/15 text-white">
            {event.category}
          </span>
          {event.tag && (
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-cyber-pink text-white shadow-lg shadow-cyber-pink/30">
              {event.tag}
            </span>
          )}
        </div>

        {/* Status indicator */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-md text-cyber-cyan border border-cyber-cyan/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping"></span>
            {event.status}
          </span>
        </div>

        {/* Genre Tags Over Image Bottom */}
        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
          {event.genres.map((genre) => (
            <span
              key={genre}
              className="text-[10px] font-semibold text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <h3 className="text-xl font-bold font-syne text-white group-hover:text-cyber-cyan transition-colors line-clamp-1">
            {event.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {event.subtitle}
          </p>

          {/* Event Specs */}
          <div className="mt-4 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyber-pink shrink-0" />
              <span className="font-semibold text-slate-200">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyber-cyan shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyber-lime shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          </div>

          {/* Lineup Highlights */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
              <Music className="w-3 h-3 text-cyber-purple" />
              <span>Artists & Curators</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {event.lineup.map((artist, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer / Action */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Entry / Passes</div>
            <div className="text-sm font-extrabold text-white">
              {event.priceText}
            </div>
          </div>

          <button
            onClick={() => onBook(event)}
            className="btn-glow-cyan text-black font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 tracking-wide shrink-0"
          >
            <span>Claim Passes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
