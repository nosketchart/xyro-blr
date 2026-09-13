import React, { useState } from 'react';
import { Camera, ExternalLink, Sparkles, Heart, Play, X } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { GALLERY_ITEMS } from '../data/eventsData';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyber-pink mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>The Xyro Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight">
              RECAP & <span className="text-gradient-cyan">THE VIBE</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Memories from Bangalore's hottest pool parties, sunset skyline sessions, and late-night underground venues.
            </p>
          </div>

          <a
            href="https://www.instagram.com/xyro.blr/"
            target="_blank"
            rel="noreferrer"
            className="btn-glow-pink text-white text-xs font-extrabold px-6 py-3 rounded-2xl flex items-center gap-2 self-start md:self-end"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @xyro.blr on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 group cursor-pointer relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-105"
                loading="lazy"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/15 text-white">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Details */}
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

        {/* Instagram Feed Spotlight Box */}
        <div className="mt-16 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-0.5 shrink-0">
              <div className="w-full h-full bg-cyber-darker rounded-[14px] flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-cyber-cyan">
                Live Instagram Sync
              </div>
              <h4 className="text-xl font-black text-white font-syne">
                @xyro.blr
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Bangalore's next wave Events • Music • Madness
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-lg font-extrabold text-white font-syne">1,000+</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-extrabold text-white font-syne">100%</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400">Real Vibe</div>
            </div>
            <a
              href="https://www.instagram.com/xyro.blr/"
              target="_blank"
              rel="noreferrer"
              className="btn-glow-cyan text-black text-xs font-black px-6 py-3 rounded-xl tracking-wide flex items-center gap-2 shrink-0"
            >
              <span>Follow & DM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Image Modal Lightbox */}
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
    </section>
  );
}
