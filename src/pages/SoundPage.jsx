import React, { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { RESIDENT_CREW } from '../data/eventsData';
import { Music, Radio, Disc, Mic2, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function SoundPage({ isAudioPlaying, toggleAudio }) {
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoForm, setDemoForm] = useState({
    djName: '',
    realName: '',
    phone: '',
    genres: '',
    demoLink: ''
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 space-y-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-cyan/15 border border-cyber-cyan/30 text-cyber-cyan text-xs font-black uppercase tracking-widest mb-4">
          <Music className="w-3.5 h-3.5" />
          <span>Acoustic Identity</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne text-white tracking-tight">
          SOUND & <span className="text-gradient-cyan">RESIDENT DJS</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          The heartbeat of Bangalore's nightlife. From melodic Afro House sunset rhythms to underground peak-time techno raves.
        </p>
      </section>

      {/* Audio Experience Console */}
      <AudioPlayer
        isGlobalAudioPlaying={isAudioPlaying}
        toggleGlobalAudio={toggleAudio}
      />

      {/* Resident Crew Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="text-xs font-black uppercase tracking-widest text-cyber-pink mb-1">
            The Movement Architects
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-syne text-white">
            MEET THE RESIDENT COLLECTIVE
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            The DJs, sound designers, and creative directors driving every Xyro production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESIDENT_CREW.map((crew, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyber-cyan/40 transition-all group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-cyber-dark">
                <img
                  src={crew.image}
                  alt={crew.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-cyber-card/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyber-cyan border border-white/10">
                    {crew.genre}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold font-syne text-white group-hover:text-cyber-cyan transition-colors">
                    {crew.name}
                  </h3>
                  <div className="text-xs font-medium text-cyber-pink mt-0.5">
                    {crew.role}
                  </div>
                </div>

                <a
                  href={`https://instagram.com/${crew.handle.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white pt-2 border-t border-white/10 w-full"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-cyber-pink" />
                  <span>{crew.handle}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DJ Demo Submission Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-cyan/15 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              <Mic2 className="w-3.5 h-3.5 text-cyber-lime" />
              <span>Artist Casting</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-syne text-white">
              WANT TO PLAY AT XYRO?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              We provide opening & headlining slots for producers, DJs, and live acoustic acts in Bangalore. Drop your Soundcloud or Mixcloud link below.
            </p>
          </div>

          {!demoSubmitted ? (
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Artist / DJ Alias *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DJ Shadow BLR"
                    value={demoForm.djName}
                    onChange={(e) => setDemoForm({ ...demoForm, djName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoForm.phone}
                    onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Music Genres (Tech House, Afro, etc.) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Melodic Techno / Afro House"
                    value={demoForm.genres}
                    onChange={(e) => setDemoForm({ ...demoForm, genres: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">SoundCloud / Mixcloud / Drive Link *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://soundcloud.com/your-set"
                    value={demoForm.demoLink}
                    onChange={(e) => setDemoForm({ ...demoForm, demoLink: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-glow-cyan text-black font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Mix For Review</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-cyber-lime mx-auto" />
              <h4 className="text-xl font-bold font-syne text-white">Demo Mix Received!</h4>
              <p className="text-xs text-slate-300">
                Our music director (@s1rcar) and curation team will listen to your set. If selected for an upcoming party slot, we'll reach out on WhatsApp.
              </p>
              <button
                onClick={() => setDemoSubmitted(false)}
                className="text-xs font-bold text-cyber-cyan underline pt-2"
              >
                Submit another link &rarr;
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
