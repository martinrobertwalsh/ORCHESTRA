import React, { useState } from 'react';
import { PERCY_PITT_ORCHESTRAL_WORKS, PercyPittWork } from '../data/percyPittData';
import { Music, X, Calendar, BookOpen, ExternalLink, Mail, ArrowUp, Volume2, ZoomIn } from 'lucide-react';

export const PercyPittPost: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<PercyPittWork | null>(null);
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article id="percy-pitt-post" className="w-full bg-[#FAF8F5] text-stone-900 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-200 selection:text-stone-900">
      <div className="max-w-4xl mx-auto">
        {/* Header Bar: Featured Post label on left, Jump to Audio right-justified on same level */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-stone-600 uppercase">
            FEATURED POST
          </span>

          <button
            type="button"
            onClick={() => scrollToSection('pitt-coronation-march')}
            className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold tracking-widest text-stone-600 hover:text-amber-900 uppercase transition-colors cursor-pointer group"
            title="Jump to audio"
          >
            <span>JUMP TO AUDIO</span>
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-900 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Post Title */}
        <header className="text-center mb-8 pb-6 border-b border-stone-200">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-3">
            Percy Pitt (1869-1932)
          </h1>

          {/* Subtitle / Quote */}
          <p className="font-serif italic text-xl sm:text-2xl text-amber-950 max-w-2xl mx-auto leading-relaxed mt-3">
            &ldquo;A life on the podium, a composer in the shadows&rdquo;
          </p>
        </header>

        {/* Percy Pitt Photo on Left & First Paragraph to Right */}
        <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <figure className="w-40 sm:w-44 md:w-48 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
            <div className="overflow-hidden rounded border border-stone-300 bg-stone-100 aspect-3/4">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/percy_pitt_sharp.jpg`}
                alt="Percy Pitt (1869–1932) - English composer, conductor, Director of Music at Covent Garden and the BBC"
                className="w-full h-full object-cover object-top filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="mt-2.5 font-serif font-bold text-stone-900 text-sm sm:text-base tracking-wide">
              Percy Pitt
            </figcaption>
          </figure>

          <div className="flex-1 font-serif text-stone-800 text-lg sm:text-xl leading-relaxed pt-1 space-y-4 text-left">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Percy Pitt, born in London in 1869, trained in Leipzig with Reinecke and Jadassohn and continued his studies with Rheinberger in Munich. Returning to London in 1893, he became closely associated with Queen’s Hall, working as pianist, organist and accompanist.
            </p>
            <p>
              His conducting career began in earnest when he was appointed in late 1902 as Music Advisor at the Royal Opera House, Covent Garden (where André Messager was Musical Director), also acting as musical coach and assistant stage conductor.
            </p>
          </div>
        </div>

        {/* Biographical Narrative Continued */}
        <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
          <p>
            He was assistant to Hans Richter in 1903, preparing the chorus and orchestra for a complete &lsquo;Ring&rsquo; cycle (given twice) under Richter&apos;s baton.
          </p>

          <p>
            Pitt became Director of Music at Covent Garden in 1907 after Messager&apos;s departure. In 1908, he was again Richter&apos;s assistant in a highly regarded production of Wagner&apos;s Ring of the Nibelung sung in English.
          </p>

          <p>
            As a conductor one critic described his technique thus:
          </p>

          {/* Critic conducting technique review */}
          <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs">
            <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
              &ldquo;His conducting methods were a trifle peculiar. He had a habit of burying his head in the score and waving his arms over his head like a gesticulating stag-beetle... This habit rather detracted from the personal magnetism which great conductors exercise, owing to the orphaned orchestra seeing nothing less abstract than a baton.&rdquo;
            </p>
            <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
              — Contemporary Press Notice on Pitt&apos;s Conducting
            </footer>
          </blockquote>

          <p>
            From May 1923 he was Musical Director of the British Broadcasting Company becoming full-time Director of Music in November 1924, remaining there through its 1927 transition from the commercial to public sector, as the British Broadcasting Corporation, and until he was succeeded by Adrian Boult in 1930. Pitt died in London in 1932.
          </p>

          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
            Behind this public career Pitt amassed a substantial body of compositions. Much of his orchestral music was heard at the Proms and was repeated in following seasons. He was a close, life-long friend of both Henry Wood and Edward Elgar. The latter he corresponded with on a regular basis, both friends sharing the ups and downs of life as a composer in Edwardian England.
          </p>

          <p>
            A letter dated from 1902 indicates the mutual fun their friendship was providing. Pitt horribly distorts the tune which was making Elgar famous throughout the land, and accompanies the final note with a whole array of percussion.
          </p>

          {/* Letter 1: Percy Pitt to Edward Elgar - Narrower old paper sheet with shadow */}
          <div className="my-8 max-w-xl mx-auto bg-gradient-to-b from-[#FAF6EB] via-[#F5EEDC] to-[#EFE7D2] border border-[#DCD3BD] rounded-xs shadow-[0_12px_28px_rgba(45,36,22,0.18),0_3px_8px_rgba(45,36,22,0.10)] p-6 sm:p-9 relative">
            <div className="flex justify-between items-center border-b border-[#E1D7BF] pb-2.5 mb-5">
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest font-semibold">
                1902 Epistolary Archive
              </span>
              <span className="font-serif italic text-xs text-amber-950/70">
                London
              </span>
            </div>
            <div className="font-serif text-stone-900 text-base sm:text-lg leading-relaxed space-y-3.5 pt-1">
              <p className="font-bold text-amber-950 text-lg">My dear Elgarmusdock</p>
              <p className="italic text-stone-700">Greetings</p>
              <p className="mt-3 text-stone-900 leading-relaxed">
                I shall have great pleasure in joining yr. friend &amp; you, O Great Pundit, at Abendbrod [supper] on Tuesday at seven of the clock although I may, later, be obliged to go down to the theatre.
              </p>

              {/* Autograph Musical Joke Excerpt - Old Paper Look, Smaller & Non-Clickable */}
              <div className="my-5 max-w-[280px] sm:max-w-[320px] mx-auto select-none cursor-default">
                <div className="p-1.5 bg-[#F5ECDB] border border-[#D5CABB] rounded-xs shadow-2xs">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/aistudio/elgar_joke_old_paper.jpg`}
                    alt="Autograph musical joke quotation from Percy Pitt to Edward Elgar"
                    className="w-full h-auto rounded-xs filter contrast-105 mix-blend-multiply pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="italic text-stone-800">
                Don&apos;t order a brass band
              </p>
              <div className="pt-4 text-left">
                <p className="text-stone-700 font-serif italic text-sm">Yours always</p>
                <p className="font-bold text-stone-900 font-serif text-xl tracking-wide">Percy P.</p>
              </div>
            </div>
          </div>

          <p>
            And here is Elgar affirming their friendship with his own witty remark:
          </p>

          {/* Letter 2: Edward Elgar to Percy Pitt - Narrower old paper sheet with shadow */}
          <div className="my-8 max-w-xl mx-auto bg-gradient-to-b from-[#FAF6EB] via-[#F5EEDC] to-[#EFE7D2] border border-[#DCD3BD] rounded-xs shadow-[0_12px_28px_rgba(45,36,22,0.18),0_3px_8px_rgba(45,36,22,0.10)] p-6 sm:p-9 relative">
            <div className="flex justify-between items-center border-b border-[#E1D7BF] pb-2.5 mb-5">
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest font-semibold">
                Edward Elgar Autograph Letter
              </span>
              <span className="font-serif italic text-xs text-amber-950/70">
                New Year
              </span>
            </div>
            <div className="font-serif text-stone-900 text-base sm:text-lg leading-relaxed space-y-3.5 pt-1">
              <p className="font-bold text-amber-950 text-lg">Dear old Pitt.</p>
              <p className="mt-3 text-stone-900 leading-relaxed">
                I choose this sheet because there&apos;s a woful blot on the back &amp; I cannot use it except to a familiar spirit.
              </p>
              <p className="text-stone-900 leading-relaxed">
                Best wishes for the New Year &amp; we thank you very much for yours.
              </p>
              <div className="pt-4 text-left">
                <p className="text-stone-700 font-serif italic text-sm">Yr affecte</p>
                <p className="font-bold text-stone-900 font-serif text-xl tracking-wide">Edward Elgar</p>
              </div>
            </div>

            {/* Authentic Ink Splatter ("Woful Blot") on Lower Right */}
            <div
              className="absolute -bottom-4 -right-4 sm:-bottom-2 sm:-right-2 pointer-events-none select-none"
              title="Elgar's 'woful blot'"
              aria-hidden="true"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/elgar_blot_clean.png`}
                alt="Elgar's woful blot"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain mix-blend-multiply opacity-90 pointer-events-none transform -rotate-6"
              />
            </div>
          </div>
        </div>

        {/* Orchestral Work List Section */}
        <section className="mt-14 pt-8 border-t-2 border-stone-300/70">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Orchestral work list
            </h2>
            <div className="text-right">
              <span className="font-serif text-xs sm:text-sm uppercase tracking-wider font-semibold text-stone-700">
                WORKS IN <span className="text-[#B8860B] font-bold">GOLD</span> ARE LINKS TO THEIR WORK PAGES
              </span>
            </div>
          </div>

          {/* Works Table */}
          <div className="bg-white border-2 border-stone-300 rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2A2621] text-stone-200 font-serif text-sm tracking-wider uppercase border-b border-stone-300">
                    <th className="py-3 px-4 sm:px-6 font-semibold">Work</th>
                    <th className="py-3 px-4 sm:px-6 font-semibold">Date</th>
                    <th className="py-3 px-4 sm:px-6 font-semibold text-right">E / L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-sm font-sans">
                  {PERCY_PITT_ORCHESTRAL_WORKS.map((work) => {
                    return (
                      <tr
                        key={work.id}
                        className="hover:bg-amber-50/60 transition-colors"
                      >
                        {/* Work Title */}
                        <td className="py-3.5 px-4 sm:px-6">
                          {work.hasDedicatedPage ? (
                            <button
                              onClick={() => scrollToSection('pitt-coronation-march')}
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

                        {/* Date */}
                        <td className="py-3.5 px-4 sm:px-6 font-mono text-xs sm:text-sm text-stone-700 whitespace-nowrap">
                          {work.date}
                        </td>

                        {/* Status (E / L) */}
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
                    );
                  })}
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

        {/* Section 3: Work Page — Coronation March */}
        <section id="pitt-coronation-march" className="mt-14 pt-8 border-t-2 border-stone-300/70 scroll-mt-20">
          <div className="text-center mb-8 pb-6 border-b border-stone-200">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-amber-900 uppercase block mb-1">
              WORK PAGE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Percy Pitt &mdash; Coronation March
            </h2>

            {/* Audio player directly below title */}
            <div className="max-w-xl mx-auto mt-3">
              <audio
                controls
                preload="metadata"
                className="w-full h-11 accent-amber-900 rounded focus:outline-none shadow-2xs"
                src="https://raw.githubusercontent.com/martinrobertwalsh/MP3FreddieWalsh/main/Pitt/Coronation%20March.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Full Score Cover Image on Left & Opening Paragraph on Right */}
          <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <figure className="w-40 sm:w-48 md:w-52 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
              <div
                className="overflow-hidden rounded border border-stone-300 bg-stone-100 aspect-3/4 cursor-pointer group relative"
                onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/cover_a9587caf.jpg`)}
                title="Click to enlarge Full Score title page"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/cover_a9587caf.jpg`}
                  alt="Percy Pitt - Coronation March Op. 21 Full Score Novello title page"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-stone-900/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                    <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                  </span>
                </div>
              </div>
              <figcaption className="mt-2 text-xs font-serif text-stone-600 italic">
                Full Score title page (Novello &amp; Co.)
              </figcaption>
            </figure>

            <div className="flex-1 font-serif text-stone-800 text-lg sm:text-xl leading-relaxed pt-1 space-y-4 text-left">
              <p className="text-left first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                Despite being given the title &ldquo;Coronation March&rdquo; this work was written specifically for Queen Victoria’s Diamond Jubilee in 1897 and it achieved a measure of success. It was first performed in 1896 at a Prom concert at the Queens Hall under Henry Wood.
              </p>
              <p className="text-left">
                It&apos;s not in the classic, clearly defined ABA shape of marches such as Elgar&apos;s Pomp and Circumstance where a brisk lively first section is followed by a contrasting slower part with a sustained legato melody and then a da capo of the opening. Pitt chooses to begin softly and gradually build the music through a series of gradual crescendos.
              </p>
            </div>
          </div>

          {/* Narrative & Reviews continued below - Flush to left side of page */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
            <p className="text-left">
              At the end he takes the slow legato theme and scores it passionately for unison strings. This departure from the norm left the reviewers, and no doubt the audience, somewhat perplexed.
            </p>

            <p className="text-left">
              The premiere took place on the night of 23rd September. The concert clearly began with a rousing outpouring of patriotic fervour:
            </p>

            {/* Review 1: The Times - Opening atmosphere */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;Never since it was opened has Queen&apos;s Hall been so thronged as it was last night on the occasion of the special programme given at the Promenade Concerts in celebration of the longest reign in the history of England. Not only was every seat occupied, but even standing room was at a discount, and hundreds had to be turned away who could not obtain admission. The scene in the interior of the hall was certainly imposing and by its very simplicity worthy of the occasion. The hearty manner in which the huge audience joined in singing the last verse of the National Anthem produced a remarkable effect, and it was followed by such an outbreak of enthusiasm from every part of the hall that the performance had to be repeated, when it was given, if possible, with more vigour than before.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Times (24th September 1896)
              </footer>
            </blockquote>

            <p>
              Pitt&apos;s Coronation March however, received a less rapturous reception in the eyes of the reviewer:
            </p>

            {/* Review 2: The Times - Pitt's Coronation March */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;The rest of the first part consisted of Sir Alexander Mackenzie&apos;s &quot;Britannia&quot; overture and a new &quot;Coronation March&quot; specially composed for the occasion by Mr. Percy Pitt. Music written for celebrations of this description is very rarely of permanent value, and it is to be hoped that Mr. Pitt may have an opportunity before long of producing a work in which his talent may find better means of displaying itself. His march is laid out on elaborate lines, and scored with some pretension, but throughout the whole work the influence of Wagner is so strong that it is difficult to detect either in the themes or their treatment any individuality, or even a gleam of the national spirit which the subject might have been expected to have inspired.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Times
              </footer>
            </blockquote>

            {/* Other reviews */}
            <div className="pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                Other reviews:
              </h3>
              <blockquote className="my-4 p-5 sm:p-6 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs">
                <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                  &ldquo;It had a rather solemn and religious character : almost too solemn, and insufficiently festive.&rdquo;
                </p>
              </blockquote>
            </div>

            <p>
              However, over time it became a favourite and was performed again the next year and then in 1900 and 1919, all at Queens Hall prom concerts.
            </p>

            {/* Queen's Hall Orchestra Archival Photograph - Half Size */}
            <figure className="my-8 max-w-md mx-auto bg-white border border-stone-200/90 rounded-lg p-2.5 sm:p-3 shadow-xs">
              <div
                className="overflow-hidden rounded border border-stone-300 bg-stone-950 relative group cursor-pointer"
                onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/hall_slight_plus_89dff31e.png`)}
                title="Click to enlarge photograph"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/hall_slight_plus_89dff31e.png`}
                  alt="Henry Wood and the Queen's Hall Orchestra on stage at Queen's Hall"
                  className="w-full h-auto object-cover filter contrast-105 group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-stone-900/80 hover:bg-stone-900 text-white p-1.5 rounded text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span className="font-sans text-[11px]">Enlarge</span>
                </div>
              </div>
              <figcaption className="mt-2.5 text-center font-serif text-xs sm:text-sm text-stone-600 italic">
                Henry Wood&apos;s long-running Proms orchestra was the Queen&apos;s Hall Orchestra, which he founded in 1895.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Bottom Back-to-Top Button */}
        <div className="mt-14 pt-8 border-t border-stone-300 text-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 350, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-lg font-serif text-sm font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-amber-900" />
            <span>Return to top of Percy Pitt post</span>
          </button>
        </div>

        {/* Modal for linked work */}
        {selectedWork && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedWork(null)}
          >
            <div
              className="bg-white border-2 border-[#765B37] rounded-lg max-w-lg w-full p-6 shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  {selectedWork.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedWork(null)}
                  className="p-1 rounded hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="font-serif text-base text-stone-800 space-y-3 leading-relaxed">
                <p>
                  Composed in <strong>{selectedWork.date}</strong>, this is one of Percy Pitt&apos;s most ambitious orchestral creations. Written during his peak years at Covent Garden, it exemplifies his brilliant orchestration influenced by his Leipzig and Munich training under Reinecke and Rheinberger.
                </p>
                <p className="text-sm text-stone-600 italic">
                  Full score engraving and digital restoration are currently underway for inclusion in the synthesised orchestral archive.
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200 text-right">
                <button
                  type="button"
                  onClick={() => setSelectedWork(null)}
                  className="px-4 py-1.5 bg-[#FFF8E1] hover:bg-[#FDE8B5] text-stone-900 border border-[#765B37] rounded font-serif text-xs uppercase font-semibold tracking-wider cursor-pointer shadow-2xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Image Modal for Autograph Letter Excerpt */}
        {activeImageModal && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveImageModal(null)}
          >
            <div
              className="bg-white p-3 rounded-lg max-w-3xl max-h-[90vh] overflow-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImageModal}
                alt="Enlarged autograph document excerpt"
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
              <div className="mt-3 text-right">
                <button
                  onClick={() => setActiveImageModal(null)}
                  className="px-4 py-1.5 bg-stone-900 text-white text-xs font-serif rounded uppercase font-semibold hover:bg-stone-800 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
