import React from 'react';
import { Play, Pause, Volume2, Music, Clock, Disc, Sparkles } from 'lucide-react';
import { MusicalTheme, Composer } from '../types/composer';
import {
  HARVEY_LOHR_SYMPHONY_3_THEME,
  ALICE_MARY_SMITH_SYMPHONY_THEME,
  PERCY_SHERWOOD_CONCERTO_THEME,
  ERNEST_BRYSON_STRANGER_THEME,
  WALFORD_DAVIES_BIG_BEN_THEME,
  COMPOSERS_DATA,
} from '../data/composersData';

interface AudioRealisationsShowcaseProps {
  currentTheme: MusicalTheme;
  isPlaying: boolean;
  onPlayTheme: (theme: MusicalTheme) => void;
  onSelectComposer: (composer: Composer) => void;
}

export const AudioRealisationsShowcase: React.FC<AudioRealisationsShowcaseProps> = ({
  currentTheme,
  isPlaying,
  onPlayTheme,
  onSelectComposer,
}) => {
  const realisations = [
    {
      theme: HARVEY_LOHR_SYMPHONY_3_THEME,
      composerId: 'harvey-lohr',
      year: 1888,
      form: 'Symphony (First Movement Allegro)',
      highlight: 'Stormy minor-key counterpoint in the German-Romantic vein of Brahms, with heroic brass declarations.',
    },
    {
      theme: ALICE_MARY_SMITH_SYMPHONY_THEME,
      composerId: 'alice-mary-smith',
      year: 1863,
      form: 'Symphony (First Movement Second Subject)',
      highlight: 'The historic first public symphony by a British woman: flowing woodwind cantilena over rhythmic string pulses.',
    },
    {
      theme: PERCY_SHERWOOD_CONCERTO_THEME,
      composerId: 'percy-sherwood',
      year: 1887,
      form: 'Piano Concerto (Andante sostenuto)',
      highlight: 'Dresden-trained Mendelssohn Prize winner: noble Brahmsian slow movement with interwoven French horn and strings.',
    },
    {
      theme: ERNEST_BRYSON_STRANGER_THEME,
      composerId: 'ernest-bryson',
      year: 1927,
      form: 'Symphony (Lento misterioso)',
      highlight: 'Visionary Highland mysticism: haunting solo oboe floating over shadowy muted string pedals.',
    },
    {
      theme: WALFORD_DAVIES_BIG_BEN_THEME,
      composerId: 'walford-davies',
      year: 1937,
      form: 'Symphonic Phantasy',
      highlight: 'Broadcast for George VI’s coronation: the Big Ben chimes transformed into an exuberant festive march.',
    },
  ];

  return (
    <section id="realisations" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 mb-8">
        <div>
          <div className="text-xs font-serif uppercase tracking-widest text-amber-900 mb-1">
            Synthesised Audio Archive · Acoustic Restorations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            The Living Realisations Gallery
          </h2>
          <p className="font-body text-stone-600 text-sm mt-1 max-w-2xl">
            Because unperformed 19th-century manuscripts rarely receive orchestral rehearsals today, 
            these synthesised realisations bring unplayed scores into audible reality.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {realisations.map((item) => {
          const isThisPlaying = isPlaying && currentTheme.title === item.theme.title;
          const composer = COMPOSERS_DATA.find((c) => c.id === item.composerId);

          return (
            <div
              key={item.theme.title}
              className={`rounded-lg border transition-all p-6 flex flex-col justify-between ${
                isThisPlaying
                  ? 'bg-amber-950/90 text-amber-50 border-amber-800 shadow-lg ring-1 ring-amber-700/50'
                  : 'bg-white text-stone-900 border-stone-200 shadow-2xs hover:border-stone-300'
              }`}
            >
              <div>
                {/* Header metadata */}
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isThisPlaying ? 'text-amber-300' : 'text-amber-900 font-serif'}>
                    {item.year} · {item.form}
                  </span>
                  <span className={`font-mono text-[11px] ${isThisPlaying ? 'text-amber-200' : 'text-stone-400'}`}>
                    {item.theme.durationSeconds}s sample
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold leading-snug mb-2">
                  {item.theme.title}
                </h3>

                <p className={`font-body text-xs leading-relaxed mb-4 ${isThisPlaying ? 'text-stone-200' : 'text-stone-600'}`}>
                  {item.highlight}
                </p>

                {/* Instrument Staves tags */}
                <div className="space-y-1 pt-3 border-t border-stone-100/30 mb-5">
                  <span className={`text-[10px] font-serif uppercase tracking-wider block ${isThisPlaying ? 'text-amber-300/80' : 'text-stone-400'}`}>
                    Active Staves & Scoring:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.theme.tracks.map((track) => (
                      <span
                        key={track.name}
                        className={`text-[10px] px-2 py-0.5 rounded font-sans ${
                          isThisPlaying
                            ? 'bg-stone-900/60 text-stone-200 border border-stone-700'
                            : 'bg-stone-100 text-stone-700 border border-stone-200'
                        }`}
                      >
                        {track.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-stone-100/30 flex items-center justify-between gap-3">
                <button
                  onClick={() => onPlayTheme(item.theme)}
                  className={`flex-1 py-2 px-3 rounded text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs ${
                    isThisPlaying
                      ? 'bg-amber-400 text-stone-950 hover:bg-amber-300'
                      : 'bg-stone-900 text-stone-50 hover:bg-stone-800'
                  }`}
                >
                  {isThisPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause Realisation</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Score Realisation</span>
                    </>
                  )}
                </button>

                {composer && (
                  <button
                    onClick={() => onSelectComposer(composer)}
                    className={`text-xs font-serif underline underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer shrink-0 ${
                      isThisPlaying ? 'text-amber-200' : 'text-stone-600'
                    }`}
                  >
                    Page
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
