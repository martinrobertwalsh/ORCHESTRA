import React, { useState } from 'react';
import { ArthurHerveyPost } from './ArthurHerveyPost';
import { ArrowLeft } from 'lucide-react';

interface ToFollowArticle {
  id: 'arthur-hervey';
  name: string;
  dates: string;
  image: string;
  quote: string;
  notableWork: string;
  tags: string[];
}

const TO_FOLLOW_ARTICLES: ToFollowArticle[] = [
  {
    id: 'arthur-hervey',
    name: 'Arthur Hervey',
    dates: '1855–1922',
    image: '/assets/aistudio/arthur_hervey_portrait.jpg',
    quote: '“Writer, critic, promoter and composer”',
    notableWork: 'Summer — Tone Poem (1907)',
    tags: ['Arthur Hervey', 'Summer', 'Tone Poem', 'Orchestra', 'Cardiff Festival']
  }
];

export const ToFollowTab: React.FC = () => {
  const [showFullArticle, setShowFullArticle] = useState<boolean>(false);

  if (showFullArticle) {
    return (
      <div className="space-y-4">
        {/* Back to To Follow Cards bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4">
          <button
            onClick={() => {
              setShowFullArticle(false);
              window.scrollTo({ top: 380, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded font-serif text-sm font-semibold transition-colors cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-amber-900" />
            <span>Back to To Follow</span>
          </button>
        </div>

        <ArthurHerveyPost />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header bar matching Archive tab format */}
      <div className="border-b border-stone-200/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-1">
            TO FOLLOW
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Articles to follow
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-stone-600 mt-1">
            Archival records, manuscripts, and living sound realisations in preparation.
          </p>
        </div>

        {/* Counter */}
        <div className="text-right">
          <span className="font-serif text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-500">
            Showing {TO_FOLLOW_ARTICLES.length} Article to Follow
          </span>
        </div>
      </div>

      {/* Composer Cards Grid matching Archive format */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TO_FOLLOW_ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => {
              setShowFullArticle(true);
              window.scrollTo({ top: 380, behavior: 'smooth' });
            }}
            className="bg-white rounded-lg border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col cursor-pointer group"
          >
            {/* Portrait Container - cleanly proportioned photo on left with TO FOLLOW stamp to right of photo */}
            <div className="p-5 bg-stone-100/70 border-b border-stone-200/80 flex items-center justify-between gap-4">
              {/* Photo */}
              <div className="w-36 sm:w-40 aspect-3/4 overflow-hidden rounded border border-stone-300 bg-white shadow-xs shrink-0">
                <img
                  src={article.image}
                  alt={`${article.name} (${article.dates})`}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* TO FOLLOW stamp to the right of photo */}
              <div className="flex-1 flex items-center justify-center p-2">
                <div className="transform -rotate-7 select-none">
                  <div className="border border-stone-700/80 p-[2px] rounded-xs bg-stone-50/70 shadow-2xs">
                    <div className="border border-stone-700/80 px-3 py-1.5 text-stone-800 font-serif font-bold text-xs sm:text-sm tracking-widest uppercase text-center">
                      TO FOLLOW
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Name title with dates */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                  {article.name} ({article.dates})
                </h3>

                <p className="font-serif italic text-sm sm:text-base text-amber-950 leading-relaxed mt-2.5">
                  {article.quote}
                </p>

                {/* Notable Work highlight */}
                <div className="mt-4 pt-3 border-t border-stone-100 text-xs">
                  <span className="text-[11px] font-serif uppercase tracking-wider text-stone-400 block mb-0.5">
                    Notable Work
                  </span>
                  <div className="font-serif font-semibold text-stone-800 text-sm">
                    {article.notableWork}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
