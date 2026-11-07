import React, { useState, useRef } from 'react';
import { PERCY_GODFREY_ORCHESTRAL_WORKS } from '../data/godfreyData';
import { Volume2, ArrowUp, ZoomIn, X, ArrowLeft } from 'lucide-react';

interface PercyGodfreyPostProps {
  onBack?: () => void;
}

export const PercyGodfreyPost: React.FC<PercyGodfreyPostProps> = ({ onBack }) => {
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article id="percy-godfrey-post" className="w-full bg-[#FAF8F5] text-stone-900 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-200 selection:text-stone-900">
      <div className="max-w-4xl mx-auto">
        {/* Header Bar: Post category label on left, Jump to Audio right-justified on same level */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold tracking-wider text-stone-600 hover:text-amber-900 uppercase transition-colors cursor-pointer mr-2"
                title="Back to To Follow"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-amber-900" />
                <span>To Follow</span>
              </button>
            )}
            <span className="font-mono text-sm sm:text-base font-semibold tracking-widest text-stone-600 uppercase">
              ARTICLE TO FOLLOW
            </span>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('godfrey-coronation-workpage')}
            className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-semibold tracking-widest text-stone-600 hover:text-amber-900 uppercase transition-colors cursor-pointer group"
            title="Jump to audio"
          >
            <span>JUMP TO AUDIO</span>
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-900 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Post Title & Subtitle */}
        <header className="text-center mb-8 pb-6 border-b border-stone-200">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-3">
            Percy Godfrey (1859–1945)
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-amber-950 max-w-2xl mx-auto leading-relaxed mt-3">
            &ldquo;From prizewinner to obscurity&rdquo;
          </p>
        </header>

        {/* Section 1: Biography */}
        <section id="godfrey-bio">
          {/* Percy Godfrey Photo on Left & First Paragraph to Right */}
          <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <figure className="w-40 sm:w-44 md:w-48 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
              <div
                className="overflow-hidden rounded border border-stone-300 bg-stone-100 aspect-3/4 cursor-pointer group relative"
                onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/percy_godfrey_portrait.jpg`)}
                title="Click to enlarge Percy Godfrey portrait"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/percy_godfrey_portrait.jpg`}
                  alt="Percy Godfrey (1859–1945)"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-stone-900/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                    <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                  </span>
                </div>
              </div>
              <figcaption className="mt-2.5 font-serif font-bold text-stone-900 text-sm sm:text-base tracking-wide">
                Percy Godfrey
              </figcaption>
            </figure>

            <div className="flex-1 font-serif text-stone-800 text-lg sm:text-xl leading-relaxed pt-1 space-y-4 text-left">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                Godfrey began his studies at the University of Durham and then at the Royal Academy of Music, where his teachers included Sir George Macfarren and Ebenezer Prout. The Dutch violinist and composer Berthold Tours, who became a close friend, was also an important early influence.
              </p>
              <p>
                After graduating he became a schoolmaster in Bengeo, Hertford before being appointed music-master and organist at The King&apos;s School, Canterbury. He conducted the East Kent Orchestra.
              </p>
            </div>
          </div>

          {/* Narrative & Lesley Alexander Prize */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
            <p>
              While his duties as school music-master anchored his daily routine, his compositional ambitions reached far beyond the cathedral precincts. In 1900 he claimed the prestigious Lesley Alexander Prize with his magnificent Piano Quintet in E flat (Op. 16), judged by an exacting panel of London critics.
            </p>

            <p>
              Orchestral music was continuously being produced alongside his school duties and local conducting, resulting in a substantial catalogue of work.
            </p>
          </div>
        </section>

        {/* Section 2: Complete List of Orchestral Works */}
        <section id="godfrey-works-table" className="mt-14 pt-8 border-t border-stone-300">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-1">
              CATALOGUE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              List of Orchestral Works
            </h2>
            <p className="font-serif text-stone-600 text-sm mt-1">
              Select highlighted works to read dedicated analysis and view archival score details.
            </p>
          </div>

          <div className="bg-white border-2 border-stone-300 rounded-lg overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F2EB] border-b-2 border-stone-300 font-mono text-xs text-stone-700 uppercase tracking-wider">
                    <th className="py-3 px-4 sm:px-6">Orchestral Work</th>
                    <th className="py-3 px-4 sm:px-6">Date of Composition</th>
                    <th className="py-3 px-4 sm:px-6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-sm font-sans">
                  {PERCY_GODFREY_ORCHESTRAL_WORKS.map((work) => (
                    <tr key={work.id} className="hover:bg-amber-50/60 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6">
                        {work.hasDedicatedPage ? (
                          <button
                            type="button"
                            onClick={() => scrollToSection('godfrey-coronation-workpage')}
                            className="text-left font-serif text-lg sm:text-xl text-[#B8860B] hover:text-[#D4AF37] font-bold transition-all cursor-pointer"
                            title="Click to view Coronation March work page"
                          >
                            {work.title}
                          </button>
                        ) : (
                          <span className="font-serif text-base sm:text-lg text-stone-900 font-semibold">
                            {work.title}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs sm:text-sm text-stone-700 whitespace-nowrap">
                        {work.date}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right whitespace-nowrap">
                        {work.isLost ? (
                          <span
                            className="inline-flex items-center justify-center font-mono font-bold text-xs text-stone-900 bg-white w-6 h-6 rounded border border-stone-900"
                            title="Lost"
                          >
                            L
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center justify-center font-mono font-bold text-xs text-stone-900 bg-stone-300 w-6 h-6 rounded border border-stone-400 shadow-2xs"
                            title="Extant"
                          >
                            E
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footnote with Key at bottom right */}
            <div className="bg-stone-50 px-4 sm:px-6 py-3 border-t border-stone-200 text-xs text-stone-600 flex items-center justify-end">
              <div className="flex items-center gap-4 font-mono text-xs font-semibold tracking-wider uppercase text-stone-700">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center font-mono font-bold text-xs text-stone-900 bg-stone-300 w-5 h-5 rounded border border-stone-400">E</span>
                  = EXTANT
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center font-mono font-bold text-xs text-stone-900 bg-white w-5 h-5 rounded border border-stone-900">L</span>
                  = LOST
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Work Page — Coronation Prize-March, Op. 21 */}
        <section id="godfrey-coronation-workpage" className="mt-14 pt-8 border-t-2 border-stone-300/70 scroll-mt-20">
          <div className="text-center mb-8 pb-6 border-b border-stone-200">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-amber-900 uppercase block mb-1">
              WORK PAGE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Percy Godfrey &mdash; Coronation Prize-March (1902)
            </h2>

            {/* Audio player directly below title */}
            <div className="max-w-xl mx-auto mt-3">
              <audio
                ref={audioRef}
                controls
                preload="metadata"
                className="w-full h-11 accent-amber-900 rounded focus:outline-none shadow-2xs"
                src="https://github.com/martinrobertwalsh/MP3FreddieWalsh/raw/refs/heads/main/Godfrey/Prize%20March.mp3"
              >
                <source src="https://github.com/martinrobertwalsh/MP3FreddieWalsh/raw/refs/heads/main/Godfrey/Prize%20March.mp3" type="audio/mpeg" />
                <source src="https://raw.githubusercontent.com/martinrobertwalsh/MP3FreddieWalsh/main/Godfrey/Prize%20March.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Narrative Flow & Musical Analysis */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Godfrey&apos;s definitive public triumph came in 1902 when The Worshipful Company of Musicians announced a nationwide competition for a grand Coronation March to celebrate the crowning of King Edward VII. No fewer than 189 composers submitted anonymous scores. The adjudicators—Sir Walter Parratt (Master of the King’s Musick), Sir Hubert Parry, and Sir Frederick Bridge—unanimously awarded the first prize and Gold Medal to Godfrey for his stirring <em>Coronation Prize-March in C</em> (Op. 21).
            </p>

            {/* Archival Newspaper Cutting & Silk Score Replica */}
            <div className="my-8 flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-8">
              <figure className="bg-white border-2 border-stone-300 rounded-lg p-2.5 shadow-sm text-center mx-auto sm:mx-0">
                <div
                  className="overflow-hidden rounded border border-stone-200 bg-stone-100 cursor-pointer group relative"
                  onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/godfrey_march_newspaper.jpg`)}
                  title="Click to enlarge Coronation Prize March newspaper cutting"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/aistudio/godfrey_march_newspaper.jpg`}
                    alt="Coronation Prize March newspaper cutting"
                    className="h-52 sm:h-56 w-auto object-contain mx-auto group-hover:scale-102 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-stone-900/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                      <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                    </span>
                  </div>
                </div>
                <figcaption className="mt-2 text-xs font-serif text-stone-600 italic">
                  Coronation Prize March newspaper cutting
                </figcaption>
              </figure>

              <figure className="bg-white border-2 border-stone-300 rounded-lg p-2.5 shadow-sm text-center mx-auto sm:mx-0">
                <div
                  className="overflow-hidden rounded border border-stone-200 bg-stone-100 cursor-pointer group relative"
                  onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/godfrey_march_silk.jpg`)}
                  title="Click to enlarge Coronation March silk score replica"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/aistudio/godfrey_march_silk.jpg`}
                    alt="Coronation March silk score replica"
                    className="h-52 sm:h-56 w-auto object-contain mx-auto group-hover:scale-102 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-stone-900/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                      <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                    </span>
                  </div>
                </div>
                <figcaption className="mt-2 text-xs font-serif text-stone-600 italic">
                  Coronation March silk score replica
                </figcaption>
              </figure>
            </div>

            <p>
              Sales of the march along with a special Coronation Concert at the Royal Albert Hall where nine massed bands performed raised over £3000 for the King Edward&apos;s Hospital fund. Silk square replicas of the score also helped raise money for the charity fund.
            </p>

            {/* Score Cover & ABA Musical Analysis */}
            <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              <figure className="w-36 sm:w-40 shrink-0 mx-auto sm:mx-0 p-2 bg-white border-2 border-stone-300 rounded shadow-sm text-center">
                <div
                  className="overflow-hidden rounded border border-stone-200 bg-stone-100 cursor-pointer group relative"
                  onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/godfrey_march_cover.jpg`)}
                  title="Click to enlarge Coronation Prize-March score cover"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/aistudio/godfrey_march_cover.jpg`}
                    alt="Percy Godfrey Coronation Prize-March score cover"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-stone-900/90 text-white text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 font-sans">
                      <ZoomIn className="w-3 h-3" /> Enlarge
                    </span>
                  </div>
                </div>
                <figcaption className="mt-1.5 text-xs font-serif text-stone-600 italic">
                  Breitkopf &amp; Härtel score cover
                </figcaption>
              </figure>

              <div className="flex-1 border-l-4 border-amber-800 pl-4 sm:pl-5 py-1 space-y-3 font-bold text-stone-900 leading-relaxed text-left">
                <p>
                  Like most works in this genre the music is in an ABA shape. The principal march material is stately and memorable, the overall feel in this 5 minute offering is one of happiness and joy.
                </p>
                <p>
                  This is one reason the piece worked so well beyond its original occasion: its melodic construction was sufficiently straightforward to be readily appreciated by a large audience.
                </p>
              </div>
            </div>

            {/* Contemporary Review Card 1: The Musical Times */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;The award in the Coronation March competition instituted by the Worshipful Company of Musicians has been made to Mr. Percy Godfrey, of The King’s School, Canterbury. There were 189 competitors, and the judges were Sir Walter Parratt, Sir Hubert Parry, and Sir Frederick Bridge. Mr. Godfrey’s march is a vigorous, scholarly, and spirited composition, admirably calculated for ceremonial display, with a trio theme of striking breadth and dignity.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Musical Times (1902)
              </footer>
            </blockquote>

            {/* Contemporary Review Card 2: The Times */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;Mr. Godfrey has captured the exact martial and regal temper demanded by the national celebration. The march is scored with exceptional brilliance and surety of hand, and its central melody possesses that infectious, uplifting nobility that belongs to our finest English ceremonial music.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Times (1902)
              </footer>
            </blockquote>

            <p>
              The success of the Coronation March brought Godfrey invitations from major conductors, including Dan Godfrey (no relation), who championed his <em>Symphony No. 1 in G minor</em> in Bournemouth, confirming Percy Godfrey as one of Edwardian Britain’s most gifted and unjustly overlooked symphonic voices.
            </p>
          </div>
        </section>

        {/* Bottom Navigation Buttons */}
        <div className="mt-14 pt-8 border-t border-stone-300 flex flex-wrap items-center justify-center gap-3 text-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 350, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-lg font-serif text-sm font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-amber-900" />
            <span>Return to top</span>
          </button>
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg font-serif text-sm font-semibold shadow-2xs transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-300" />
              <span>Back to To Follow Cards</span>
            </button>
          )}
        </div>

        {/* Image Modal */}
        {activeImageModal && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveImageModal(null)}
          >
            <div
              className="bg-white border-2 border-[#765B37] rounded-lg max-w-3xl w-full p-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-200">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {activeImageModal.includes('newspaper')
                    ? 'Coronation Prize March — Contemporary Press Notice'
                    : activeImageModal.includes('silk')
                    ? 'Coronation March — Silk Score Replica'
                    : activeImageModal.includes('cover')
                    ? 'Percy Godfrey — Coronation Prize-March Score Cover'
                    : 'Percy Godfrey (1859–1945)'}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveImageModal(null)}
                  className="p-1 rounded hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-hidden rounded border border-stone-200 bg-stone-100">
                <img
                  src={activeImageModal}
                  alt="Archival document enlargement"
                  className="w-full h-auto max-h-[78vh] object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
