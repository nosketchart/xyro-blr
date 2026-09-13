import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Zap, Crown, Music } from 'lucide-react';

export default function MobileBottomBar() {
  const tabs = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Passes', path: '/guestlist', icon: Zap, highlight: true },
    { name: 'VIP', path: '/vip', icon: Crown },
    { name: 'Sound', path: '/sound', icon: Music },
  ];

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-cyber-darker/95 backdrop-blur-2xl border-t border-white/10 px-3 py-2 safe-area-bottom shadow-2xl">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all relative ${
                  isActive
                    ? 'text-cyber-cyan font-bold scale-105'
                    : tab.highlight
                    ? 'text-cyber-pink hover:text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <Icon className={`w-5 h-5 ${tab.highlight && !isActive ? 'text-cyber-pink animate-pulse' : ''}`} />
                    {tab.highlight && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyber-pink animate-ping"></span>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold mt-0.5 tracking-tight">
                    {tab.name}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 w-4 h-0.5 bg-cyber-cyan rounded-full shadow-[0_0_8px_#00f0ff]"></span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
