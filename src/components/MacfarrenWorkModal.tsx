import React, { useState } from 'react';
import { MacfarrenWork } from '../data/macfarrenData';
import { orchestralPlayer } from '../audio/orchestralEngine';
import { X, Play, Square, Music, Calendar, MapPin, FileText, AlertCircle, CheckCircle2, Volume2 } from 'lucide-react';

interface MacfarrenWorkModalProps {
  work: MacfarrenWork | null;
  onClose: () => void;
}

export const MacfarrenWorkModal: React.FC<MacfarrenWorkModalProps> = ({ work, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  if (!work) return null;

  const handleTogglePlay = () => {
    if (!work.theme) return;
    if (isPlaying) {
      orchestralPlayer.pause();
      setIsPlaying(false);
    } else {
      orchestralPlayer.playTheme(work.theme, true);
      setIsPlaying(true);
    }
  };

  const handleClose = () => {
    if (isPlaying) {
      orchestralPlayer.pause();
      setIsPlaying(false);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FCFAF6] border-2 border-stone-300 rounded-lg shadow-2xl overflow-hidden text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#24211D] text-stone-200 px-6 py-4 flex items-center justify-between border-b border-amber-900/40">
          <div className="flex items-center gap-2.5">
            <Music className="w-5 h-5 text-amber-400" />
            <div>
              <span className="font-mono text-[10px] tracking-widest text-amber-300 uppercase block">
                Archival Work Page · Walter Macfarren
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                {work.title}
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close work page"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white border border-stone-200 rounded">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-800" />
                <span>Composition / Date</span>
              </div>
              <div className="font-serif font-bold text-stone-900 text-sm">
                {work.date}
              </div>
            </div>

            <div className="p-3 bg-white border border-stone-200 rounded">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1">
                <FileText className="w-3.5 h-3.5 text-amber-800" />
                <span>Genre</span>
              </div>
              <div className="font-serif font-bold text-stone-900 text-sm">
                {work.genre}
              </div>
            </div>

            <div className="p-3 bg-white border border-stone-200 rounded">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1">
                {work.isLost ? (
                  <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                )}
                <span>Archival Status</span>
              </div>
              <div
                className={`font-serif font-bold text-sm ${
                  work.isLost ? 'text-red-700' : 'text-emerald-800'
                }`}
              >
                {work.isLost ? 'Lost Manuscript (L)' : 'Extant / Rediscovered'}
              </div>
            </div>
          </div>

          {/* Premiere Venue */}
          {work.premiereVenue && (
            <div className="flex items-start gap-2.5 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded text-xs text-stone-800">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-950">Premiere & Historical Context: </span>
                <span>{work.premiereVenue}</span>
              </div>
            </div>
          )}

          {/* Historical Description */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-700">
              Curator’s Notes & Archival Account
            </h4>
            <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic bg-white p-4 border border-stone-200 rounded">
              &ldquo;{work.historicalNotes}&rdquo;
            </p>
          </div>

          {/* Instrumentation */}
          {work.instrumentation && (
            <div className="p-3.5 bg-stone-100/80 border border-stone-200 rounded text-xs">
              <span className="font-semibold text-stone-900 font-serif">Orchestration: </span>
              <span className="text-stone-700">{work.instrumentation}</span>
            </div>
          )}

          {/* Audio Realisation if available (e.g. Symphony in Bb) */}
          {work.theme && (
            <div className="p-4 bg-stone-900 text-stone-100 rounded-lg border border-amber-900/40 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className={`w-5 h-5 ${isPlaying ? 'text-amber-400 animate-pulse' : 'text-amber-300'}`} />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 block">
                      Synthesized Audio Realisation
                    </span>
                    <span className="font-serif text-sm font-semibold text-white">
                      {work.theme.title}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleTogglePlay}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Stop</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Listen to Realisation</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-stone-300 text-xs italic font-serif">
                {work.theme.description}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span>Forgotten Composers Archive · Curated by Martin Walsh</span>
          <button
            onClick={handleClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded font-medium cursor-pointer transition-colors"
          >
            Back to Post
          </button>
        </div>
      </div>
    </div>
  );
};
