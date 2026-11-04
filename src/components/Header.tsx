import React from 'react';
import { Volume2 } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onQuickPlay: () => void;
  isPlaying: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onQuickPlay,
  isPlaying,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        {/* Zone 1: Wordmark in Display Serif */}
        <div 
          onClick={() => onNavigate('archive')}
          className="cursor-pointer group flex items-center gap-3 whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded border border-stone-400/40 bg-stone-100 flex items-center justify-center text-amber-900 font-serif font-semibold text-lg shadow-2xs group-hover:border-amber-800 transition-colors">
            𝄞
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-950 transition-colors leading-none">
              Forgotten Composers
            </span>
            <span className="text-[11px] font-serif italic text-amber-900 tracking-wide mt-0.5">
              British Orchestral Music 1850–1950
            </span>
          </div>
        </div>

        {/* Zone 2: 4–5 Clean Nav Links with hover underlines */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('archive')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'archive'
                ? 'text-amber-950 font-semibold border-b-2 border-amber-900'
                : 'hover:text-stone-950'
            }`}
          >
            Composers & Catalog
          </button>
          <button
            onClick={() => onNavigate('realisations')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'realisations'
                ? 'text-amber-950 font-semibold border-b-2 border-amber-900'
                : 'hover:text-stone-950'
            }`}
          >
            Audio Realisations
          </button>
          <button
            onClick={() => onNavigate('matcher')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'matcher'
                ? 'text-amber-950 font-semibold border-b-2 border-amber-900'
                : 'hover:text-stone-950'
            }`}
          >
            Taste Matcher
          </button>
          <button
            onClick={() => onNavigate('essays')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'essays'
                ? 'text-amber-950 font-semibold border-b-2 border-amber-900'
                : 'hover:text-stone-950'
            }`}
          >
            Curatorial Essays
          </button>
          <button
            onClick={() => onNavigate('manuscripts')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'manuscripts'
                ? 'text-amber-950 font-semibold border-b-2 border-amber-900'
                : 'hover:text-stone-950'
            }`}
          >
            Score Archive
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onQuickPlay}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-all whitespace-nowrap shrink-0 shadow-xs cursor-pointer ${
              isPlaying
                ? 'bg-amber-900 text-amber-50 hover:bg-amber-950 ring-2 ring-amber-700/30'
                : 'bg-stone-900 text-stone-100 hover:bg-stone-800'
            }`}
            title="Listen to Harvey Löhr's Symphony No. 3 in D minor"
          >
            <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-amber-300' : ''}`} />
            <span>{isPlaying ? 'Now Playing' : 'Listen to Löhr Symphony 3'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
