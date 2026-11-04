import React, { useState, useRef } from 'react';
import { ArrowLeft, ZoomIn, Calendar, X } from 'lucide-react';

interface SymphonyWorkPageProps {
  onBack: () => void;
}

export const SymphonyWorkPage: React.FC<SymphonyWorkPageProps> = ({ onBack }) => {
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const [showDatesPopup, setShowDatesPopup] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    <article id="symphony-work-page" className="w-full bg-[#FAF8F5] text-stone-900 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-200 selection:text-stone-900">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar / Breadcrumb */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-serif text-sm sm:text-base font-semibold text-stone-800 hover:text-amber-900 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Walter Macfarren</span>
          </button>

          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-stone-600 uppercase">
            WORK PAGE
          </span>
        </div>

        {/* Post Title & Audio Player */}
        <header className="text-center mb-8 pb-6 border-b border-stone-200">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
            Walter Macfarren - Symphony in Bb (1879)
          </h1>

          <div className="max-w-xl mx-auto mt-3">
            <audio
              ref={audioRef}
              controls
              preload="metadata"
              className="w-full h-11 accent-amber-900 rounded focus:outline-none shadow-2xs"
              src={`${import.meta.env.BASE_URL}assets/audio/macfarren_symphony_in_bb.mp3`}
            >
              Your browser does not support the audio element.
            </audio>

            {/* Movement Buttons directly under player */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3.5">
              {movementJumps.map((jump, idx) => (
                <button
                  key={idx}
                  onClick={() => handleJumpToMovement(jump.time)}
                  className="px-4 py-1.5 bg-white hover:bg-stone-100 text-stone-800 hover:text-stone-950 border border-stone-300 hover:border-stone-400 rounded shadow-2xs font-serif text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer active:scale-95"
                >
                  {jump.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Autograph Score Image on Left & Opening Paragraphs on Right */}
        <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <figure className="w-56 sm:w-64 md:w-72 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
            <div className="overflow-hidden rounded border border-stone-300 bg-stone-900 aspect-[240/110]">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/symphony_cover_straight.jpg`}
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
            Completed in August 1879 the work is conservative in style for its time. Despite this it received a number of performances in some surprising places. These are noted, with dates, on the inside cover of the score.
          </p>

          {/* Autograph Score Performance Dates Row with Image on Left & Button on Right */}
          <div className="my-6 flex flex-col sm:flex-row items-center justify-start gap-5">
            <figure className="w-full sm:w-auto max-w-sm p-2.5 bg-white border-2 border-stone-300 rounded shadow-xs text-center shrink-0">
              <div
                className="overflow-hidden rounded border border-stone-300 bg-stone-100 cursor-pointer group relative"
                onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/symphony_dates.jpg`)}
                title="Click to enlarge autograph score dates"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/symphony_dates.jpg`}
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
            For a relatively &lsquo;minor&rsquo; composer this record of performance was impressive to say the least but certainly not typical. It was even revived after a ten year gap just two years before Macfarren died.
          </p>

          <p>
            The premi&egrave;re of the symphony was in Brighton. Walter in his autobiography recounts an enthusiastic reception.
          </p>

          {/* Contemporary Review Card */}
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
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 pt-8 border-t border-stone-300 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded font-serif text-sm font-semibold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Walter Macfarren Main Article</span>
          </button>
        </div>

        {/* Image Modal */}
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
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Performance dates
                </h2>
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
