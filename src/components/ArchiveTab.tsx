import React, { useState } from 'react';
import { FeaturedPost } from './FeaturedPost';
import { BookOpen, ArrowLeft, Search } from 'lucide-react';

export const ArchiveTab: React.FC = () => {
  const [showFullArticle, setShowFullArticle] = useState<boolean>(false);

  if (showFullArticle) {
    return (
      <div className="space-y-4">
        {/* Back to Archive Card bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4">
          <button
            onClick={() => {
              setShowFullArticle(false);
              window.scrollTo({ top: 380, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded font-serif text-sm font-semibold transition-colors cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-amber-900" />
            <span>Back to Archive Card</span>
          </button>
        </div>
        <FeaturedPost />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header bar */}
      <div className="border-b border-stone-200/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-1">
            ARCHIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Previous articles
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-stone-600 mt-1">
            Archival records, manuscripts, and living sound realisations.
          </p>
        </div>

        {/* Counter */}
        <div className="text-right">
          <span className="font-serif text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-500">
            Showing 1 Previous Article
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border border-stone-200/90 rounded-lg p-3 sm:p-4 shadow-2xs">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            value="Walter Macfarren"
            className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded text-xs sm:text-sm font-sans text-stone-800 focus:outline-none cursor-default"
          />
        </div>
      </div>

      {/* Composer Card for Walter Macfarren */}
      <div className="max-w-md">
        <article className="bg-white rounded-lg border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col group">
          {/* Portrait Container - cleanly proportioned, left justified, no text overlays */}
          <div className="p-5 bg-stone-100/70 border-b border-stone-200/80 flex justify-start items-center">
            <div className="w-40 sm:w-44 aspect-3/4 overflow-hidden rounded border border-stone-300 bg-white shadow-xs">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/photo_200faca6.jpg`}
                alt="Walter Macfarren (1826–1905)"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>

          {/* Content body */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              {/* Name title with dates */}
              <h3
                onClick={() => {
                  setShowFullArticle(true);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors cursor-pointer"
              >
                Walter Macfarren (1826–1905)
              </h3>

              <p className="font-serif italic text-sm sm:text-base text-amber-950 leading-relaxed mt-2.5">
                &ldquo;A symphony missing for over a hundred years, finally turns up&rdquo;
              </p>

              {/* Notable Work highlight */}
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs">
                <span className="text-[11px] font-serif uppercase tracking-wider text-stone-400 block mb-0.5">
                  Notable Work
                </span>
                <div className="font-serif font-semibold text-stone-800 text-sm">
                  Symphony in Bb (1879)
                </div>
              </div>
            </div>

            {/* Actions footer (no audio player) */}
            <div className="mt-5 pt-3 border-t border-stone-200/80 flex items-center justify-between">
              <button
                onClick={() => {
                  setShowFullArticle(true);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-semibold text-stone-800 hover:text-amber-900 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-900" />
                <span>Full Archival Page</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
