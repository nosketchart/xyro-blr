import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';


// Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import GuestlistPage from './pages/GuestlistPage';
import VipPage from './pages/VipPage';
import SoundPage from './pages/SoundPage';
import GalleryPage from './pages/GalleryPage';
import PartnerPage from './pages/PartnerPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioContextRef = useRef(null);
  const synthTimerRef = useRef(null);

  // Web Audio ambient electronic party beats synthesizer
  const startAmbientBeats = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;
      let step = 0;
      const intervalMs = (60 / 124 / 4) * 1000;

      synthTimerRef.current = setInterval(() => {
        const time = ctx.currentTime;

        // Kick drum on beats 1, 5, 9, 13
        if (step % 4 === 0) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(140, time);
          osc.frequency.exponentialRampToValueAtTime(38, time + 0.12);

          gain.gain.setValueAtTime(0.35, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(time);
          osc.stop(time + 0.25);
        }

        // Crisp Hi-Hat on offbeats (2, 6, 10, 14)
        if (step % 4 === 2) {
          const bufferSize = ctx.sampleRate * 0.05;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
          }

          const noise = ctx.createBufferSource();
          noise.buffer = buffer;

          const filter = ctx.createBiquadFilter();
          filter.type = 'highpass';
          filter.frequency.value = 7500;

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.08, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

          noise.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);
          noise.start(time);
        }

        step = (step + 1) % 16;
      }, intervalMs);

      setIsAudioPlaying(true);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  const stopAmbientBeats = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === 'running') {
      audioContextRef.current.suspend();
    }
    setIsAudioPlaying(false);
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      stopAmbientBeats();
    } else {
      startAmbientBeats();
    }
  };

  useEffect(() => {
    return () => {
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
    };
  }, []);

  const handleBookEvent = (event) => {
    setSelectedEvent(event);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-cyber-darker text-slate-100 flex flex-col selection:bg-cyber-pink selection:text-white pb-16 xl:pb-0">
        {/* Navigation */}
        <Navbar
          isAudioPlaying={isAudioPlaying}
          toggleAudio={toggleAudio}
        />

        {/* Multi-Page Route Outlet */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onBookEvent={handleBookEvent} />} />
            <Route path="/events" element={<EventsPage onBookEvent={handleBookEvent} />} />
            <Route path="/guestlist" element={<GuestlistPage />} />
            <Route path="/vip" element={<VipPage />} />
            <Route path="/sound" element={<SoundPage isAudioPlaying={isAudioPlaying} toggleAudio={toggleAudio} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Tab Bar */}
        <MobileBottomBar />

        {/* Global Instant QR Ticket Pass Modal */}
        <BookingModal
          event={selectedEvent}
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
