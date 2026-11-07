import React, { useState, useRef } from 'react';
import { TOBIAS_MATTHAY_ORCHESTRAL_WORKS } from '../data/matthayData';
import { Volume2, ArrowUp, ZoomIn, X, ArrowLeft } from 'lucide-react';

interface TobiasMatthayPostProps {
  onBack?: () => void;
}

export const TobiasMatthayPost: React.FC<TobiasMatthayPostProps> = ({ onBack }) => {
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article id="tobias-matthay-post" className="w-full bg-[#FAF8F5] text-stone-900 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-200 selection:text-stone-900">
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
            onClick={() => scrollToSection('matthay-in-may-workpage')}
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
            Tobias Matthay (1858–1945)
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-amber-950 max-w-2xl mx-auto leading-relaxed mt-3">
            &ldquo;Master of touch whose symphonic voice fell silent&rdquo;
          </p>
        </header>

        {/* Section 1: Biography */}
        <section id="matthay-bio">
          {/* Tobias Matthay Photo on Left & First Paragraph to Right */}
          <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <figure className="w-40 sm:w-44 md:w-48 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
              <div
                className="overflow-hidden rounded border border-stone-300 bg-stone-100 aspect-3/4 cursor-pointer group relative"
                onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/tobias_matthay_portrait.jpg`)}
                title="Click to enlarge Tobias Matthay portrait"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/tobias_matthay_portrait.jpg`}
                  alt="Tobias Matthay (1858–1945)"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-stone-900/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                    <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                  </span>
                </div>
              </div>
              <figcaption className="mt-2.5 font-serif font-bold text-stone-900 text-sm sm:text-base tracking-wide">
                Tobias Matthay
              </figcaption>
            </figure>

            <div className="flex-1 font-serif text-stone-800 text-lg sm:text-xl leading-relaxed pt-1 space-y-4 text-left">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                Born in Clapham, London, to naturalised German parents, Tobias Matthay is celebrated throughout the world as the towering patriarch of modern British pianism. A prodigy who entered the Royal Academy of Music in 1871, he was schooled in piano by Walter Macfarren and William Dorrell, while studying harmony and composition under Sir William Sterndale Bennett, Sir Arthur Sullivan, and Ebenezer Prout. Appointed a professor at the Academy at the remarkably youthful age of twenty-two, his pedagogical methods revolutionised keyboard technique.
              </p>
            </div>
          </div>

          {/* Narrative & The Forgotten Orchestral Composer */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
            <p>
              Through his celebrated teaching studio and the foundation of the Tobias Matthay Pianoforte School in 1905, he nurtured a constellation of legendary artists including Dame Myra Hess, Sir Clifford Curzon, Dame Moura Lympany, Harriet Cohen, Irene Scharrer, and York Bowen. Yet this colossal pedagogical fame obscured a profound personal sorrow: Matthay considered himself first and foremost a composer, and during the 1880s and 1890s he poured his creative energies into an astonishing sequence of richly scored orchestral overtures, symphonies, and concertos.
            </p>

            <p>
              Among these early orchestral works, his symphonic overture <em>In May</em> (1883) stands as his most radiant achievement. Awarded second prize in a Philharmonic Society competition, the work had to wait nearly two decades for its public unveiling, when Dan Godfrey, Jr. championed it at the Bournemouth Winter Gardens in November 1902 with the Bournemouth Symphony Orchestra, revealing a lyrical masterwork imbued with freshness, pastoral charm, and sophisticated orchestration.
            </p>
          </div>
        </section>

        {/* Section 2: Complete List of Orchestral Works */}
        <section id="matthay-works-table" className="mt-14 pt-8 border-t border-stone-300">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-1">
              CATALOGUE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              List of Orchestral Works
            </h2>
            <p className="font-serif text-stone-600 text-sm mt-1">
              Select highlighted works to read dedicated analysis and listen to audio realisations.
            </p>
          </div>

          <div className="bg-white border-2 border-stone-300 rounded-lg overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F2EB] border-b-2 border-stone-300 font-mono text-xs text-stone-700 uppercase tracking-wider">
                    <th className="py-3 px-4 sm:px-6">Orchestral Work</th>
                    <th className="py-3 px-4 sm:px-6 text-right">Date of Composition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-sm font-sans">
                  {TOBIAS_MATTHAY_ORCHESTRAL_WORKS.map((work) => (
                    <tr key={work.id} className="hover:bg-amber-50/60 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6">
                        {work.hasDedicatedPage ? (
                          <button
                            type="button"
                            onClick={() => scrollToSection('matthay-in-may-workpage')}
                            className="text-left font-serif text-lg sm:text-xl text-[#B8860B] hover:text-[#D4AF37] font-bold transition-all cursor-pointer"
                            title="Click to view In May work page"
                          >
                            {work.title}
                          </button>
                        ) : (
                          <span className="font-serif text-base sm:text-lg text-stone-900 font-semibold">
                            {work.title}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs sm:text-sm text-stone-700 text-right whitespace-nowrap">
                        {work.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Work Page — In May (Tone Poem / Symphonic Overture) */}
        <section id="matthay-in-may-workpage" className="mt-14 pt-8 border-t-2 border-stone-300/70 scroll-mt-20">
          <div className="text-center mb-8 pb-6 border-b border-stone-200">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-amber-900 uppercase block mb-1">
              WORK PAGE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Tobias Matthay &mdash; In May (Tone Poem / Symphonic Overture, 1883)
            </h2>

            {/* Audio player directly below title */}
            <div className="max-w-xl mx-auto mt-3">
              <audio
                ref={audioRef}
                controls
                preload="metadata"
                className="w-full h-11 accent-amber-900 rounded focus:outline-none shadow-2xs"
                src="https://github.com/martinrobertwalsh/MP3FreddieWalsh/raw/refs/heads/main/Matthay/In%20May.mp3"
              >
                <source src="https://github.com/martinrobertwalsh/MP3FreddieWalsh/raw/refs/heads/main/Matthay/In%20May.mp3" type="audio/mpeg" />
                <source src="https://raw.githubusercontent.com/martinrobertwalsh/MP3FreddieWalsh/main/Matthay/In%20May.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Narrative Flow & Musical Analysis */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Composed in 1882–1883, <em>In May</em> reflects Matthay’s youthful ardour and his profound absorption of the romantic idioms of Sterndale Bennett, Schumann, and early Brahms. Conceived during his earliest years on the faculty of the Royal Academy of Music, the overture is a celebration of vernal re-awakening, expressing the delicate colours and blossoming energies of early summer through a thoroughly English pastoral sensibility.
            </p>

            <div className="border-l-4 border-amber-800 pl-4 sm:pl-5 py-1 space-y-3 font-bold text-stone-900 leading-relaxed">
              <p className="text-left">
                The work opens with rustling woodwinds and dancing string figurations that paint the dappled sunlight of a morning in May. A buoyant, dancing first theme gives way to a spacious, deeply felt cantabile melody in the strings, marked by the fluid counterpoint and rich inner voices characteristic of Matthay’s writing.
              </p>
              <p className="text-left">
                In the development section, Matthay demonstrates his complete mastery of orchestral dialogue, weaving wind solos against shimmering string accompaniments before building to an exuberant, ringing climax. The coda captures a blissful sense of pastoral serenity, fading away like a warm breeze through spring leaves.
              </p>
            </div>

            <p>
              When Dan Godfrey finally brought the overture before the public at the Bournemouth Winter Gardens in November 1902, the performance drew enthusiastic praise from regional and national critics:
            </p>

            {/* Contemporary Review Card 1: The Musical Times */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;Mr. Tobias Matthay’s overture &lsquo;In May&rsquo; was received with hearty appreciation at the Winter Gardens under Mr. Dan Godfrey. It is a work of great charm and melodious distinction, orchestrated with a refined touch that reflects the composer’s high artistic ideals... The audience showed their warm approval of a piece that deserves frequent repetition.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Musical Times (1902)
              </footer>
            </blockquote>

            {/* Contemporary Review Card 2: Bournemouth Guardian */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;A delightful novelty at the Symphony Concert was Mr. Matthay&apos;s overture &lsquo;In May.&rsquo; Conceived in a poetic vein, its themes are graceful and spontaneous, and the orchestral colouring is throughout artistic and picturesque. Mr. Godfrey and his band interpreted the piece with immense spirit.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — Bournemouth Guardian (November 1902)
              </footer>
            </blockquote>

            <p>
              Despite the overture&apos;s clear beauty and success, Matthay’s surging reputation as a teacher and author soon consumed his time, leaving works like <em>In May</em>, the <em>Concert Piece in A minor</em>, and his symphonies unjustly neglected on library shelves—until now digitally restored for the living archive.
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
              className="bg-white border-2 border-[#765B37] rounded-lg max-w-2xl w-full p-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-200">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Tobias Matthay (1858–1945)
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
                  alt="Tobias Matthay enlargement"
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
