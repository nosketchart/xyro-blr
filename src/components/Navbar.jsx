import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Volume2, VolumeX, ArrowRight, Zap } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Navbar({ isAudioPlaying, toggleAudio, onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Guestlist RSVP', path: '/guestlist', highlight: true },
    { name: 'VIP Tables', path: '/vip' },
    { name: 'Sound & DJs', path: '/sound' },
    { name: 'The Vibe', path: '/gallery' },
    { name: 'Host / Collab', path: '/partner' },
    { name: 'FAQ & Rules', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-darker/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-cyber-darker/50 backdrop-blur-md py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-syne group-hover:text-cyber-cyan transition-colors">
                XYRO
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>
            <div className="flex items-center">
              <span className="text-[10px] uppercase font-black tracking-widest text-cyber-pink px-2 py-0.5 rounded bg-cyber-pink/10 border border-cyber-pink/30 ml-1">
                BLR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold uppercase tracking-wider transition-all relative py-1 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyber-cyan font-black'
                      : link.highlight
                      ? 'text-cyber-pink hover:text-white'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.highlight && !isActive && <Zap className="w-3 h-3 text-cyber-pink animate-pulse" />}
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-cyber-cyan shadow-[0_0_8px_#00f0ff] rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Ambient Audio Beat Generator */}
            <button
              onClick={toggleAudio}
              title={isAudioPlaying ? "Mute ambient electronic beat" : "Play ambient electronic beat"}
              className={`px-3 py-2 rounded-full border text-xs font-bold transition-all flex items-center gap-2 ${
                isAudioPlaying
                  ? 'border-cyber-cyan bg-cyber-cyan/15 text-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                  <span className="text-[11px] font-mono">124 BPM Live</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Sound Vibe</span>
                </>
              )}
            </button>

            {/* Instagram Profile Link */}
            <a
              href="https://www.instagram.com/xyro.blr/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-cyber-pink hover:border-cyber-pink/50 hover:bg-cyber-pink/10 transition-all"
              title="Official Instagram @xyro.blr"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <Link
              to="/guestlist"
              className="btn-glow-pink text-white text-xs font-black px-5 py-2.5 rounded-full flex items-center gap-1.5 tracking-wide uppercase"
            >
              <span>Instant Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu triggers */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border ${
                isAudioPlaying
                  ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10'
                  : 'border-white/10 text-slate-400'
              }`}
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-cyber-darker/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 font-extrabold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.highlight && (
                  <span className="text-[10px] bg-cyber-pink text-white px-2 py-0.5 rounded-full font-black uppercase">
                    Free RSVP
                  </span>
                )}
              </NavLink>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/guestlist"
              className="btn-glow-pink w-full text-white font-extrabold py-3.5 rounded-xl text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Get Free Guestlist Pass</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://www.instagram.com/xyro.blr/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-slate-200 hover:text-cyber-pink"
            >
              <InstagramIcon className="w-4 h-4 text-cyber-pink" />
              <span>Follow @xyro.blr on Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
