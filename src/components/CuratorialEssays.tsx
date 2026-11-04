import React, { useState } from 'react';
import { BookOpen, User, Calendar, Clock, Volume2, ArrowRight } from 'lucide-react';
import { CURATORIAL_ARTICLES } from '../data/essaysData';
import { COMPOSERS_DATA } from '../data/composersData';
import { Composer, MusicalTheme } from '../types/composer';

interface CuratorialEssaysProps {
  onSelectComposer: (composer: Composer) => void;
  onPlayTheme: (theme: MusicalTheme) => void;
}

export const CuratorialEssays: React.FC<CuratorialEssaysProps> = ({
  onSelectComposer,
  onPlayTheme,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(CURATORIAL_ARTICLES[0].id);

  const currentArticle = CURATORIAL_ARTICLES.find((a) => a.id === selectedArticleId) || CURATORIAL_ARTICLES[0];
  const featuredComposer = currentArticle.featuredComposerId
    ? COMPOSERS_DATA.find((c) => c.id === currentArticle.featuredComposerId)
    : null;

  return (
    <section id="essays" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 mb-8">
        <div>
          <div className="text-xs font-serif uppercase tracking-widest text-amber-900 mb-1">
            Curatorial Research & Critical Essays
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            The Historical Reading Room
          </h2>
          <p className="font-body text-stone-600 text-sm mt-1 max-w-2xl">
            Musicological treatises and historical inquiries by Martin Walsh examining why the 
            1850–1950 generation was erased, and the detective work of digital reconstruction.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Article Index Rail */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-serif uppercase tracking-wider text-stone-400 block px-1 mb-1">
            Treatise Archive
          </span>

          <div className="space-y-2">
            {CURATORIAL_ARTICLES.map((article) => {
              const isSelected = article.id === selectedArticleId;
              return (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticleId(article.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-900 shadow-sm ring-1 ring-amber-800/30'
                      : 'bg-[#FBF9F5] border-stone-200/90 text-stone-700 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 font-sans mb-1">
                    <span className="font-serif italic text-amber-900">{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base leading-snug">
                    {article.title}
                  </h4>
                  <p className="font-body text-xs text-stone-600 line-clamp-2 mt-1">
                    {article.abstract}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Long-Form Reading Canvas (Pattern D & Reference Rules) */}
        <article className="lg:col-span-8 bg-white border border-stone-200/90 rounded-lg p-6 sm:p-10 shadow-xs">
          {/* Article Header */}
          <div className="border-b border-stone-200 pb-6 mb-8">
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-amber-900 mb-2">
              <span>{currentArticle.category}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>{currentArticle.date}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>{currentArticle.readTime}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
              {currentArticle.title}
            </h1>

            <p className="font-body text-base text-stone-600 italic leading-relaxed">
              {currentArticle.subtitle}
            </p>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-stone-400" />
                <span>Written by <strong className="text-stone-800 font-medium">{currentArticle.author}</strong></span>
              </div>
              <span>Archival Research Series</span>
            </div>
          </div>

          {/* Pull Quote with Hairline Dividers (NO thick left borders!) */}
          {currentArticle.pullQuote && (
            <div className="my-8 py-5 border-y border-stone-300/80 text-center px-4 sm:px-8 bg-[#FBF9F5] rounded">
              <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-snug">
                &ldquo;{currentArticle.pullQuote.text}&rdquo;
              </p>
              <span className="block text-xs font-sans text-stone-500 mt-2 font-medium">
                — {currentArticle.pullQuote.attribution}
              </span>
            </div>
          )}

          {/* Article Prose with Drop-Cap and 65-75ch Measure */}
          <div className="max-w-prose space-y-5 text-stone-800 font-body text-base sm:text-[17px] leading-[1.8]">
            {currentArticle.content.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Featured Composer Callout if linked */}
          {featuredComposer && (
            <div className="mt-10 pt-6 border-t border-stone-200 bg-[#F7F4EE] rounded p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {featuredComposer.portraitUrl && (
                  <img
                    src={featuredComposer.portraitUrl}
                    alt={featuredComposer.name}
                    className="w-14 h-14 rounded-full object-cover border border-stone-300 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <span className="text-[10px] uppercase font-serif tracking-widest text-amber-900 block">
                    Featured in this Treatise
                  </span>
                  <div className="font-serif font-bold text-stone-900 text-lg">
                    {featuredComposer.fullName} ({featuredComposer.birthYear}–{featuredComposer.deathYear})
                  </div>
                  <div className="text-xs text-stone-600 font-body">
                    {featuredComposer.shortBio}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onSelectComposer(featuredComposer)}
                  className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded text-xs font-medium transition-colors cursor-pointer"
                >
                  View Page
                </button>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};
