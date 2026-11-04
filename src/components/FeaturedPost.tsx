import React, { useState, useRef } from 'react';
import { MACFARREN_ORCHESTRAL_WORKS } from '../data/macfarrenData';
import { ZoomIn, Calendar, X, ArrowUp, Volume2 } from 'lucide-react';

export const FeaturedPost: React.FC = () => {
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const [showDatesPopup, setShowDatesPopup] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const movementJumps = [
    { label: '1st mov', time: 0 },
    { label: '2nd mov', time: 570.1 },
    { label: '3rd mov', time: 1015.0 },
    { label: '4th mov', time: 1226.6 },
  ];

  const handleJumpToMovement = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  return (
    <article id="featured-post" className="w-full bg-[#FAF8F5] text-stone-900 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-200 selection:text-stone-900">
      <div className="max-w-4xl mx-auto">
        {/* Header Bar: Featured Post label on left, Jump to Audio right-justified on same level */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-stone-600 uppercase">
            FEATURED POST
          </span>

          <button
            type="button"
            onClick={() => scrollToSection('macfarren-score-samples')}
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
            Walter Macfarren (1826-1905)
          </h1>

          {/* Subtitle / Quote */}
          <p className="font-serif italic text-xl sm:text-2xl text-amber-950 max-w-2xl mx-auto leading-relaxed mt-3">
            &ldquo;A symphony missing for over a hundred years, finally turns up&rdquo;
          </p>
        </header>

        {/* Section 1: Biography */}
        <section id="macfarren-bio">
          {/* Walter Macfarren Photo on Left & First Paragraph to Right */}
          <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <figure className="w-40 sm:w-44 md:w-48 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
              <div className="overflow-hidden rounded border border-stone-300 bg-stone-100 aspect-3/4">
                <img
                  src="/assets/aistudio/photo_200faca6.jpg"
                  alt="Walter Macfarren (1826–1905) - English composer, pianist, and professor at the Royal Academy of Music"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <figcaption className="mt-2.5 font-serif font-bold text-stone-900 text-sm sm:text-base tracking-wide">
                Walter Macfarren
              </figcaption>
            </figure>

            <div className="flex-1 font-serif text-stone-800 text-lg sm:text-xl leading-relaxed pt-1 space-y-4">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                Born in London in 1826, Walter showed a gift for music early on; he was a choir-boy at Westminster Abbey, and sang at the coronation of Queen Victoria. When his voice broke, he had thoughts of becoming an artist, and took some lessons in painting, and then served as salesman in a piano shop in Brighton.
              </p>
              <p>
                At the persuasion of his brother, George, he entered the Royal Academy of Music in October 1842, studying the piano under W. H. Holmes and composition under his brother and Cipriani Potter. As a composer, Walter was obviously very much in his brother&apos;s shadow but despite this he made a substantial reputation of his own.
              </p>
            </div>
          </div>

          {/* Biographical Narrative Continued */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6">
            <p>
              Sir George Alexander Macfarren (20 years his senior), held the more prominent public positions: Principal of the Royal Academy of Music and Professor of Music at Cambridge. That along with his large output of orchestral music including nine symphonies, made George a dominant force in contemporary musical life.
            </p>

            <p>
              Walter’s distinction lay particularly in piano teaching, performing and editing. He taught at the Academy from 1846 to 1903, and his pupils included Tobias Matthay and Henry Wood. Rather than simply being an overlooked younger brother, Walter was a respected musician and a fairly prolific composer. Sadly the majority of his orchestral music is lost to us; fortunately his{' '}
              <button
                type="button"
                onClick={() => scrollToSection('macfarren-score-samples')}
                className="text-[#B8860B] hover:text-[#D4AF37] font-bold transition-all cursor-pointer underline decoration-[#B8860B]/50 hover:decoration-[#B8860B]"
                title="Jump down to Symphony in B flat work page"
              >
                Symphony in Bb
              </button>{' '}
              has been rediscovered.
            </p>
          </div>
        </section>

        {/* SECTION 2: Peruse the work list */}
        <section id="macfarren-works-list" className="mt-14 pt-8 border-t-2 border-stone-300/70 scroll-mt-20">
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
                  {MACFARREN_ORCHESTRAL_WORKS.map((work) => {
                    return (
                      <tr
                        key={work.id}
                        className="hover:bg-amber-50/60 transition-colors"
                      >
                        {/* Work Title - Gold for works with a link */}
                        <td className="py-3.5 px-4 sm:px-6">
                          {work.id === 'symphony-in-bb' ? (
                            <button
                              onClick={() => scrollToSection('macfarren-score-samples')}
                              className="text-left font-serif text-lg sm:text-xl text-[#B8860B] hover:text-[#D4AF37] font-bold transition-all cursor-pointer"
                              title="Click to view Symphony in B flat work page"
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
                              className="inline-flex items-center justify-center font-mono font-bold text-xs text-stone-900 bg-white w-6 h-6 rounded border border-stone-900"
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
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-stone-700">
                E = EXTANT &nbsp;&nbsp;&nbsp; L = LOST
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Work Page */}
        <section id="macfarren-score-samples" className="mt-14 pt-8 border-t-2 border-stone-300/70 scroll-mt-20">
          <div className="text-center mb-8 pb-6 border-b border-stone-200">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-amber-900 uppercase block mb-1">
              WORK PAGE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Walter Macfarren &mdash; Symphony in Bb (1879)
            </h2>

            <div className="max-w-xl mx-auto mt-3">
              <audio
                ref={audioRef}
                controls
                preload="metadata"
                className="w-full h-11 accent-amber-900 rounded focus:outline-none shadow-2xs"
                src="/assets/audio/macfarren_symphony_in_bb.mp3"
              >
                Your browser does not support the audio element.
              </audio>

              {/* Movement Buttons directly under player */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3.5">
                {movementJumps.map((jump, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleJumpToMovement(jump.time)}
                    className="px-4 py-1.5 bg-[#FFF8E1] hover:bg-[#FDE8B5] text-stone-900 hover:text-stone-950 border border-[#765B37] rounded shadow-2xs font-serif text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer active:scale-95"
                  >
                    {jump.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Autograph Score Image on Left & Opening Paragraphs on Right */}
          <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <figure className="w-56 sm:w-64 md:w-72 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
              <div className="overflow-hidden rounded border border-stone-300 bg-stone-900 aspect-[240/110]">
                <img
                  src="/assets/aistudio/symphony_cover_straight.jpg"
                  alt="Symphony in B. Flat — Walter Macfarren 1879 score cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>

            <div className="flex-1 font-serif text-stone-800 text-lg sm:text-xl leading-relaxed pt-1">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                This was presumed to be lost but I was fortunate enough to discover, through much searching online, an autograph score residing in the archives of the library of North-Western University, Illinois, 4000 miles away! The very helpful library staff kindly made a copy of the score.
              </p>
            </div>
          </div>

          {/* Narrative Flow */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6">
            <p>
              Completed in August 1879 the work is conservative in style for its time. Compared to Stanford&apos;s and Parry&apos;s 1st Symphonies from the same time it&apos;s a lightweight offering but it has some innovative touches such as the string pizzicato which dominate the slow introduction to the Allegro in the first movement.
            </p>

            <p>
              The premi&egrave;re of the symphony was in Brighton. Walter in his autobiography recounts an enthusiastic reception.
            </p>

            {/* Contemporary Review Card 1 */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                On the 5th of February, 1880, my overture, &ldquo;Hero and Leander,&rdquo; was given at the Philharmonic as before mentioned, and my Symphony in B flat was produced at Kuhe&apos;s Brighton Festival on the 24th of the same month, and hence it has been nicknamed &ldquo;The Brighton Symphony.&rdquo;
              </p>
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                Many of the orchestral professors engaged at the Academy were likewise in Mr. Kuhe&apos;s Band, and others, as well as the leading students, volunteered to go down to Brighton, and thus increase the orchestra in support of their conductor, and the occasion was marked by great enthusiasm.
              </p>
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                My dinner-party at the &ldquo;Old Ship&rdquo; (where I was located) was augmented by the arrival of my dear brother G. A. Macfarren, accompanied by his then secretary, the late Windyer Clark, both of whom had travelled down expressly to hear the Symphony, and returned the same night.
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — Walter Macfarren, Memories: An Autobiography (1905)
              </footer>
            </blockquote>

            <p>
              A reviewer from The Sussex Daily News likewise:
            </p>

            {/* Contemporary Review Card 2 */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &lsquo;One of the prominent features in the concert was the performance by the orchestra of Walter Macfarren&rsquo;s Symphony in B flat, composed expressly for the festival, and conducted by the composer. The talented professor of the Royal Academy has on previous occasions shown his great ability in orchestral writing, several of his latest works having been produced for the first time at Mr Kuhe&rsquo;s Festival.
              </p>
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                The symphony performed yesterday evening enhanced the popularity of the composer, and its hearty reception by the audience must be chronicled as one of the greatest successes of the present festival. Opening with a pleasing introduction, the composition is worked out in the orthodox style. Each movement was warmly applauded; the slow movement was pleasing and effective, replete with melodious beauties, which were finely interpreted by the orchestra. The short but brightly-written scherzo led to a brilliant finale, which again revealed the powers of the composer over the difficulties of orchestration in a work of such magnitude.
              </p>
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                Although the symphony took nearly half an hour in its interpretation, the audience did not appear to tire, and, at its conclusion, the composer was rewarded by prolonged and hearty applause of a most enthusiastic character, compelling him to return and acknowledge the well-deserved plaudits to the performance of his work.&rsquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Sussex Daily News (February 1880)
              </footer>
            </blockquote>

            {/* Inscribed Performance Dates & Revival Text At Bottom */}
            <p>
              The symphony received a number of performances in some surprising places. These are noted, with dates, on the inside cover of the score.
            </p>

            {/* Autograph Score Performance Dates Row with Image on Left & Button on Right */}
            <div className="my-6 flex flex-col sm:flex-row items-center justify-start gap-5">
              <figure className="w-full sm:w-auto max-w-sm p-2.5 bg-white border-2 border-stone-300 rounded shadow-xs text-center shrink-0">
                <div
                  className="overflow-hidden rounded border border-stone-300 bg-stone-100 cursor-pointer group relative"
                  onClick={() => setActiveImageModal('/assets/aistudio/symphony_dates.jpg')}
                  title="Click to enlarge autograph score dates"
                >
                  <img
                    src="/assets/aistudio/symphony_dates.jpg"
                    alt="Inside cover of autograph score recording performance dates in Walter Macfarren's hand"
                    className="w-full max-w-[320px] h-auto object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-stone-900/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                      <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                    </span>
                  </div>
                </div>
              </figure>

              <div className="flex flex-col items-start gap-2">
                <button
                  type="button"
                  onClick={() => setShowDatesPopup(true)}
                  className="px-4 py-2 bg-[#FFF8E1] hover:bg-[#FDE8B5] text-stone-900 border border-[#765B37] rounded font-serif text-sm font-semibold tracking-wide transition-all shadow-2xs hover:shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#765B37]" />
                  <span>see dates</span>
                </button>
              </div>
            </div>

            <p>
              For a relatively &lsquo;minor&rsquo; composer this record of performance was impressive to say the least. However, it was not typical; many composers would achieve maybe one and if lucky a single repeat elsewhere. The work was even revived after a ten year gap just two years before Macfarren died.
            </p>
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
            <span>Return to top of Walter Macfarren post</span>
          </button>
        </div>

        {/* Image Modal for Enlarged Leaf / Theme */}
        {activeImageModal && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveImageModal(null)}
          >
            <div
              className="bg-white p-3 rounded-lg max-w-4xl max-h-[90vh] overflow-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImageModal}
                alt="Enlarged document leaf"
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

        {/* Performance Dates Popup Dialog */}
        {showDatesPopup && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setShowDatesPopup(false)}
          >
            <div
              className="bg-white border-2 border-[#765B37] rounded-lg max-w-md w-full p-6 shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Performance dates
                </h3>
                <button
                  type="button"
                  onClick={() => setShowDatesPopup(false)}
                  className="p-1 rounded hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="font-serif text-base sm:text-lg text-stone-800 space-y-1.5 leading-relaxed">
                <div>Brighton - February 1880</div>
                <div>Bristol - May 1880</div>
                <div>Covent Garden - August 1880</div>
                <div>St James Hall - March 1882</div>
                <div>Buxton - August &amp; September 1885</div>
                <div>Westminster Orchestral Society - March 1890</div>
                <div>Brixton Choral Society - May 1890</div>
                <div>Edinburgh Orchestral Society - April 1892</div>
                <div>Brixton - June 1902</div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200 text-right">
                <button
                  type="button"
                  onClick={() => setShowDatesPopup(false)}
                  className="px-4 py-1.5 bg-[#FFF8E1] hover:bg-[#FDE8B5] text-stone-900 border border-[#765B37] rounded font-serif text-xs uppercase font-semibold tracking-wider cursor-pointer shadow-2xs"
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
