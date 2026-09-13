import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Disc, Volume2, VolumeX, Sparkles, Music } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { RESIDENT_CREW } from '../data/eventsData';

const TRACKS = [
  {
    title: "Ibiza Sunset Horizon (Original Mix)",
    artist: "DJ S1rcar x Xyro",
    genre: "Melodic House & Techno",
    duration: "4:32",
    bpm: "124 BPM"
  },
  {
    title: "Bangalore Wave: Midnight Underground",
    artist: "Txrun Reddy & Guest",
    genre: "Peak Time Techno",
    duration: "5:18",
    bpm: "128 BPM"
  },
  {
    title: "Poolside Foam Anthem 2.0",
    artist: "Shaurya & Xyro Collective",
    genre: "Afro House / Club Edit",
    duration: "3:45",
    bpm: "126 BPM"
  }
];

export default function AudioPlayer({ isGlobalAudioPlaying, toggleGlobalAudio }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(25);

  const activeTrack = TRACKS[currentTrackIndex];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    toggleGlobalAudio();
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    setProgress(0);
  };

  return (
    <section id="sound" className="py-24 relative overflow-hidden bg-cyber-dark/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-black uppercase tracking-widest mb-3">
            <Music className="w-3.5 h-3.5" />
            <span>Curated Soundscape</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight">
            THE SOUND OF <span className="text-gradient-full">XYRO</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Meet the architects of the wave. Stream exclusive live sets and explore our resident DJ lineup defining Bangalore's sound.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive Player Console */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden shadow-2xl">
            
            {/* Ambient turntable spin graphic */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-tr from-cyber-cyan to-cyber-pink p-1 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                  <div className="w-full h-full bg-cyber-darker rounded-full flex items-center justify-center">
                    <Disc className={`w-7 h-7 text-cyber-cyan ${isPlaying ? 'text-cyber-pink' : ''}`} />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-cyber-pink tracking-widest">
                    Now Playing • {activeTrack.bpm}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-syne truncate max-w-[220px] sm:max-w-xs">
                    {activeTrack.title}
                  </h4>
                  <div className="text-xs text-slate-400">
                    {activeTrack.artist}
                  </div>
                </div>
              </div>

              {/* Animated Equalizer Bars */}
              <div className="flex items-end gap-1 h-8">
                {[40, 75, 100, 60, 90, 30, 80, 50].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 bg-gradient-to-t from-cyber-cyan to-cyber-pink rounded-full transition-all duration-300 ${
                      isPlaying ? 'opacity-100' : 'opacity-20'
                    }`}
                    style={{
                      height: isPlaying ? `${(h * ((i % 3) + 1)) % 100}%` : '4px',
                      transition: 'height 0.2s ease'
                    }}
                  ></span>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1 mb-6">
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-pink transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>01:14</span>
                <span>{activeTrack.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-all"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={togglePlay}
                className="btn-glow-cyan p-4 rounded-full text-black hover:scale-105 transition-all shadow-lg shadow-cyber-cyan/30"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                className="p-3 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-all"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Spotify & Soundcloud CTA banner */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Official Xyro Bangalore Playlist</span>
              <a
                href="https://www.instagram.com/xyro.blr/"
                target="_blank"
                rel="noreferrer"
                className="text-cyber-cyan font-bold hover:underline"
              >
                View on Instagram &rarr;
              </a>
            </div>

          </div>

          {/* Resident Artists & Collaborators Spotlight */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Resident DJs & Experience Curators
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESIDENT_CREW.map((crew, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3 hover:border-cyber-pink/40 transition-all group"
                >
                  <img
                    src={crew.image}
                    alt={crew.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10 group-hover:scale-105 transition-transform"
                  />
                  <div className="overflow-hidden">
                    <h5 className="text-sm font-bold text-white font-syne group-hover:text-cyber-pink transition-colors">
                      {crew.name}
                    </h5>
                    <div className="text-[11px] text-cyber-cyan font-medium truncate">
                      {crew.role}
                    </div>
                    <a
                      href={`https://instagram.com/${crew.handle.replace('@', '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 mt-0.5"
                    >
                      <InstagramIcon className="w-2.5 h-2.5 text-cyber-pink" />
                      <span>{crew.handle}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed">
              <strong className="text-white">Are you a Bangalore DJ or Producer?</strong> We are constantly opening guest slots for up-and-coming talent. Submit your SoundCloud / Mixcloud demo via our partner portal below.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
