import React, { useState, useRef } from 'react';
import { NORMAN_ONEILL_ORCHESTRAL_WORKS } from '../data/normanONeillData';
import { Volume2, ArrowUp, ZoomIn, X, Play, ArrowLeft } from 'lucide-react';

interface NormanONeillPostProps {
  onBack?: () => void;
}

export const NormanONeillPost: React.FC<NormanONeillPostProps> = ({ onBack }) => {
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const [currentSampleIdx, setCurrentSampleIdx] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSamples = [
    {
      id: 'sample-1',
      label: 'Sample 1: Opening & Exposition',
      description: 'Lento introduction leading into the lyrical Allegro moderato',
      url: 'https://raw.githubusercontent.com/martinrobertwalsh/MP3FreddieWalsh/main/O%27Neill/ONEIL%20SAMPLE%201.mp3'
    },
    {
      id: 'sample-2',
      label: 'Sample 2: Atmospheric Development',
      description: 'Woodwind colours and shifting autumnal harmonies',
      url: 'https://raw.githubusercontent.com/martinrobertwalsh/MP3FreddieWalsh/main/O%27Neill/ONEIL%20SAMPLE%202.mp3'
    },
    {
      id: 'sample-3',
      label: 'Sample 3: Climax & Pastoral Coda',
      description: 'Full orchestral swell followed by serene contemplation',
      url: 'https://raw.githubusercontent.com/martinrobertwalsh/MP3FreddieWalsh/main/O%27Neill/ONEIL%20SAMPLE%203.mp3'
    }
  ];

  const handleSelectSample = (idx: number) => {
    setCurrentSampleIdx(idx);
    if (audioRef.current) {
      audioRef.current.src = audioSamples[idx].url;
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article id="norman-oneill-post" className="w-full bg-[#FAF8F5] text-stone-900 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-200 selection:text-stone-900">
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
            onClick={() => scrollToSection('oneill-autumn-workpage')}
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
            Norman O’Neill (1875–1934)
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-amber-950 max-w-2xl mx-auto leading-relaxed mt-3">
            &ldquo;Music from behind the curtain&rdquo;
          </p>
        </header>

        {/* Section 1: Biography */}
        <section id="oneill-bio">
          {/* Norman O'Neill Photo on Left & First Paragraph to Right */}
          <div className="my-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <figure className="w-40 sm:w-44 md:w-48 shrink-0 mx-auto sm:mx-0 p-2.5 bg-white border-2 border-stone-300 rounded shadow-md text-center">
              <div
                className="overflow-hidden rounded border border-stone-300 bg-stone-100 aspect-3/4 cursor-pointer group relative"
                onClick={() => setActiveImageModal(`${import.meta.env.BASE_URL}assets/aistudio/norman_oneill_portrait.jpg`)}
                title="Click to enlarge Norman O'Neill portrait"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/norman_oneill_portrait.jpg`}
                  alt="Norman O'Neill (1875–1934)"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-stone-900/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-sans">
                    <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                  </span>
                </div>
              </div>
              <figcaption className="mt-2.5 font-serif font-bold text-stone-900 text-sm sm:text-base tracking-wide">
                Norman O’Neill
              </figcaption>
            </figure>

            <div className="flex-1 font-serif text-stone-800 text-lg sm:text-xl leading-relaxed pt-1 space-y-4 text-left">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                Born in Kensington, London, Norman O’Neill was the youngest son of the Irish-descended genre painter George Bernard O’Neill. Growing up in a household steeped in Victorian artistic and literary circles, his early musical aptitude was nurtured through private lessons with Arthur Somervell. In 1893, seeking rigorous continental immersion, O’Neill travelled to Germany to enter the Hoch Conservatorium in Frankfurt-am-Main, where he enrolled in the masterclass of Iwan Knorr.
              </p>
            </div>
          </div>

          {/* Narrative & The Frankfurt Group */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
            <p>
              At Frankfurt, O’Neill became a central figure in the celebrated ‘Frankfurt Group’ alongside Percy Grainger, Roger Quilter, H. Balfour Gardiner, and Cyril Scott. This tight-knit brotherhood of young British rebels resisted the conservative academic dogmas of the English establishment, drinking in the harmonic innovations of Brahms, Tchaikovsky, and early Impressionism. In 1899, O’Neill married the gifted pianist Adine Rückert, a devoted pupil of Clara Schumann who had also trained in Frankfurt.
            </p>

            <p>
              Upon returning to London, O’Neill quickly made his mark both in the concert hall and in the theatre. In 1908 he became musical director at the Haymarket Theatre, establishing himself as England’s pre-eminent composer of theatrical incidental music, most famously for J. M. Barrie’s <em>Mary Rose</em> (1920) and Maeterlinck’s <em>The Blue Bird</em> (1910). He was elected Treasurer of the Royal Philharmonic Society in 1918, serving with distinction until his death in 1934, and joined the faculty of the Royal Academy of Music in 1924 as professor of composition.
            </p>
          </div>
        </section>

        {/* Section 2: Complete List of Orchestral Works */}
        <section id="oneill-works-table" className="mt-14 pt-8 border-t border-stone-300">
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
                  {NORMAN_ONEILL_ORCHESTRAL_WORKS.map((work) => (
                    <tr key={work.id} className="hover:bg-amber-50/60 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6">
                        {work.hasDedicatedPage ? (
                          <button
                            type="button"
                            onClick={() => scrollToSection('oneill-autumn-workpage')}
                            className="text-left font-serif text-lg sm:text-xl text-[#B8860B] hover:text-[#D4AF37] font-bold transition-all cursor-pointer"
                            title="Click to view In Autumn work page"
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

        {/* Section 3: Work Page — In Autumn (Tone Poem, Op. 8) */}
        <section id="oneill-autumn-workpage" className="mt-14 pt-8 border-t-2 border-stone-300/70 scroll-mt-20">
          <div className="text-center mb-8 pb-6 border-b border-stone-200">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-amber-900 uppercase block mb-1">
              WORK PAGE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Norman O’Neill &mdash; In Autumn (Tone Poem, Op. 8)
            </h2>

            {/* Audio player directly below title */}
            <div className="max-w-xl mx-auto mt-3">
              <audio
                ref={audioRef}
                controls
                preload="metadata"
                className="w-full h-11 accent-amber-900 rounded focus:outline-none shadow-2xs"
                src={audioSamples[currentSampleIdx].url}
              >
                Your browser does not support the audio element.
              </audio>

              {/* Sample Excerpt Jump Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5">
                {audioSamples.map((sample, idx) => (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => handleSelectSample(idx)}
                    className={`px-3.5 py-1.5 border rounded font-serif text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                      currentSampleIdx === idx
                        ? 'bg-[#FDE8B5] text-amber-950 border-[#765B37] ring-1 ring-[#765B37]'
                        : 'bg-[#FFF8E1] hover:bg-[#FDE8B5] text-stone-800 border-stone-300'
                    }`}
                  >
                    <Play className="w-3 h-3 text-[#765B37]" />
                    <span>Sample {idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Narrative Flow & Musical Analysis */}
          <div className="font-serif text-stone-800 text-lg sm:text-xl leading-relaxed space-y-6 mt-6 text-left">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              Composed in 1901 and dedicated to Henry Wood, <em>In Autumn</em> (Op. 8) was O’Neill’s first major orchestral breakthrough. Having recently returned from Frankfurt, O’Neill brought a distinctly continental refinement and delicate orchestral palette to British concert life. The work was premiered at Queen’s Hall on 26th October 1901 at a Henry Wood Promenade Concert, conducted by Wood himself.
            </p>

            <div className="border-l-4 border-amber-800 pl-4 sm:pl-5 py-1 space-y-3 font-bold text-stone-900 leading-relaxed">
              <p className="text-left">
                Rather than a conventional, academic overture, O’Neill treats the work as an expansive tone poem that captures the wistful melancholy and golden hues of late autumn. Soft, rustling strings and plaintive woodwind solos evoke the cooling atmosphere before stirring into a passionate, surging allegro. The orchestration demonstrates the extraordinary delicacy and colour that would later make O’Neill the foremost theatrical orchestrator in London.
              </p>
              <p className="text-left">
                The work unfolds through a succession of richly painted orchestral tableaux. A tender, lyrical melody sung by the woodwinds provides poignant contrast to the turbulent, gusty string passages, culminating in a noble, contemplative coda that resolves in serene tranquility.
              </p>
            </div>

            <p>
              The reception at Queen’s Hall was warmly enthusiastic, with reviewers noting the composer’s command of the modern orchestra:
            </p>

            {/* Contemporary Review Card 1: The Musical Times */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;Mr. Norman O’Neill’s concert overture &lsquo;In Autumn&rsquo;, performed under Mr. Henry J. Wood at the Queen’s Hall Promenade Concerts, is a work of conspicuous merit and individuality. The composer handles the orchestral forces with a lightness and imaginative colour that show both fine training and genuine poetical feeling... It was received with warm and well-merited applause.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Musical Times (1901)
              </footer>
            </blockquote>

            {/* Contemporary Review Card 2: The Times */}
            <blockquote className="my-8 p-6 sm:p-8 bg-white border-l-4 border-amber-800 border-y border-r border-stone-200 rounded-r shadow-xs space-y-4">
              <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                &ldquo;The concert concluded with the first performance of a new concert overture by Mr. Norman O’Neill entitled &lsquo;In Autumn.&rsquo; It is a picturesque and delightfully orchestrated piece of tone-painting, full of melodic charm and orchestral resource. The composer was summoned to the platform to acknowledge prolonged applause.&rdquo;
              </p>
              <footer className="mt-4 pt-3 border-t border-stone-200 text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold">
                — The Times (October 1901)
              </footer>
            </blockquote>

            <p>
              Following its triumph at Queen’s Hall, <em>In Autumn</em> was swiftly taken up by the eminent German conductor Hans Richter, who championed the work with the Hallé Orchestra in Manchester, cementing O’Neill’s place among the finest young composers of Edwardian Britain.
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
                  Norman O’Neill (1875–1934)
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
                  alt="Norman O'Neill enlargement"
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
