export interface AudioNote {
  time: number; // in seconds from start of bar
  pitch: string; // e.g. "C4", "Eb4", "G4"
  duration: number; // in seconds
  velocity?: number; // 0 to 1
}

export interface InstrumentTrack {
  name: 'Violin I' | 'Violin II' | 'Viola' | 'Cello & Bass' | 'Flute & Oboe' | 'French Horn' | 'Trumpet' | 'Timpani';
  color: string;
  notes: AudioNote[];
}

export interface MusicalTheme {
  title: string;
  tempoBpm: number;
  timeSignature: string;
  keySignature: string;
  durationSeconds: number;
  description: string;
  tracks: InstrumentTrack[];
}

export interface WorkMovement {
  id: string;
  number: string;
  tempoHeading: string;
  key: string;
  durationEst: string;
  notes: string;
  hasAudioRealisation?: boolean;
  audioTheme?: MusicalTheme;
}

export interface ComposerWork {
  id: string;
  title: string;
  opus?: string;
  yearComposed: number;
  premiereInfo?: string;
  genre: 'Symphony' | 'Concerto' | 'Symphonic Poem' | 'Overture' | 'Chamber Music' | 'Choral & Vocal';
  instrumentation: string;
  durationApprox: string;
  archiveLocation: string;
  catalogStatus: 'Fully Typeset' | 'Archival Manuscript Only' | 'Lost / Partially Recovered' | 'First Modern Realisation';
  summary: string;
  movements?: WorkMovement[];
  notableExcerpt?: string;
}

export interface Composer {
  id: string;
  name: string;
  fullName: string;
  birthYear: number;
  deathYear: number;
  nationality: string;
  era: 'Mid-Victorian (1850-1879)' | 'Victorian Golden Age (1880-1899)' | 'Edwardian (1900-1914)' | 'Interwar & Beyond (1915-1950)';
  portraitUrl: string;
  portraitCaption: string;
  shortBio: string;
  detailedBiography: string;
  whyForgotten: string;
  musicalStyle: string;
  influences: string[];
  keyArchives: string[];
  obscurityRank: 'Unsung Master' | 'Archival Enigma' | 'Neglected Pioneer' | 'Rediscovered Gem';
  famousContemporaries: string[];
  works: ComposerWork[];
  quote?: {
    text: string;
    source: string;
    year?: number;
  };
}

export interface CuratorialArticle {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: 'Historical Context' | 'Editorial Realisation' | 'Composer Spotlight' | 'Archival Sleuthing';
  abstract: string;
  content: string[];
  featuredComposerId?: string;
  pullQuote?: {
    text: string;
    attribution: string;
  };
}

export interface TasteComparison {
  id: string;
  famousWork: string;
  famousComposer: string;
  famousCharacteristics: string;
  recommendedComposerId: string;
  recommendedWorkId: string;
  matchReason: string;
}
