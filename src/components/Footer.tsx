import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1917] text-stone-300 border-t border-stone-800 pb-24 pt-12 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
          {/* Col 1: Project Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-stone-100 font-serif text-lg font-bold">
              <span>𝄞</span>
              <span>Forgotten Composers (1850–1950)</span>
            </div>
            <p className="font-body text-stone-400 text-xs leading-relaxed max-w-md">
              An archival musicological initiative dedicated to researching, engraving, and realizing 
              neglected British and late-Romantic orchestral works that disappeared from public performance 
              after the mid-twentieth century. Curated in the spirit of Martin Walsh’s research archives.
            </p>
            <div className="text-[11px] text-stone-500 font-mono">
              Research focus: Harvey Löhr · Percy Sherwood · Alice Mary Smith · Ernest Bryson · John Lodge Ellerton
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <span className="text-[11px] font-serif uppercase tracking-widest text-amber-400 block mb-2">
              Archive Navigation
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => onNavigate('archive')} className="hover:text-stone-100 transition-colors cursor-pointer">
                  Composers & Works Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('realisations')} className="hover:text-stone-100 transition-colors cursor-pointer">
                  Synthesised Audio Realisations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('matcher')} className="hover:text-stone-100 transition-colors cursor-pointer">
                  Classical Taste Matcher
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('essays')} className="hover:text-stone-100 transition-colors cursor-pointer">
                  Curatorial Research Essays
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('manuscripts')} className="hover:text-stone-100 transition-colors cursor-pointer">
                  Autograph Score Viewer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contributing Archives */}
          <div className="space-y-2">
            <span className="text-[11px] font-serif uppercase tracking-widest text-amber-400 block mb-2">
              Primary Repositories
            </span>
            <p className="text-stone-400 text-[11px] leading-relaxed font-body">
              Manuscripts sourced from the British Library Music Collections, Royal Academy of Music Archives, Royal College of Music Library, and the Sächsische Landesbibliothek (SLUB) Dresden.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            &copy; 1850–1950 Forgotten Composers Project. Research & digital realisations curated by Martin Walsh.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Preserving 100 Years of British & Romantic Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
