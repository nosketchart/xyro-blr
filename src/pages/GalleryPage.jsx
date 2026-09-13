import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/eventsData';
import { Camera, ExternalLink, X, Sparkles, Play, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';


export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filterOptions = ['All', 'Pool Party', 'Sunset Session', 'Club Night', 'Afterhours', 'VIP Vibes'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.tag === activeFilter);

  return (
    <div className="pt-28 pb-24 space-y-20 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-cyber-pink/15 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-pink/15 border border-cyber-pink/30 text-cyber-pink text-xs font-black uppercase tracking-widest mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>Visual Archive</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne text-white tracking-tight">
          THE VIBE & <span className="text-gradient-pink">AFTERMOVIES</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Relive the energy of Bangalore's most electric dancefloors, sunset horizons, and wildest pool parties.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === f
                  ? 'bg-cyber-pink text-white shadow-lg shadow-cyber-pink/30'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Media Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 group cursor-pointer relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/15 text-white">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-bold text-white font-syne group-hover:text-cyber-cyan transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {item.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-3 text-[11px] text-cyber-pink font-semibold">
                  <span>View Full Photo</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Spotlight Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-0.5 shrink-0 shadow-2xl">
              <div className="w-full h-full bg-cyber-darker rounded-[22px] flex items-center justify-center">
                <InstagramIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase font-black tracking-widest text-cyber-cyan">
                Live Instagram Profile
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-syne text-white mt-1">
                @xyro.blr
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Bangalore's next wave Events • Music • Madness
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-6 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div>
                <div className="text-base font-extrabold text-white font-syne">1,000+</div>
                <div className="text-[10px] uppercase text-slate-400">Followers</div>
              </div>
              <div className="h-6 w-px bg-white/10"></div>
              <div>
                <div className="text-base font-extrabold text-cyber-pink font-syne">Weekly</div>
                <div className="text-[10px] uppercase text-slate-400">Reels & Drops</div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/xyro.blr/"
              target="_blank"
              rel="noreferrer"
              className="btn-glow-pink text-white text-xs font-black px-6 py-4 rounded-2xl uppercase tracking-wider flex items-center gap-2"
            >
              <span>Follow On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-cyber-darker border border-white/20 rounded-3xl overflow-hidden p-3"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white font-syne">{selectedImage.title}</h3>
                <p className="text-xs text-slate-400">{selectedImage.subtitle}</p>
              </div>
              <a
                href="https://www.instagram.com/xyro.blr/"
                target="_blank"
                rel="noreferrer"
                className="btn-glow-pink text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>See on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
