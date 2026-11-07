export interface MatthayWork {
  id: string;
  title: string;
  date: string;
  genre: string;
  hasDedicatedPage?: boolean;
}

export const TOBIAS_MATTHAY_ORCHESTRAL_WORKS: MatthayWork[] = [
  { id: 'in-may', title: 'In May — Symphonic Overture / Tone Poem', date: '1883', genre: 'Tone Poem / Overture', hasDedicatedPage: true },
  { id: 'in-summer', title: 'In Summer — Symphonic Overture', date: '1880', genre: 'Concert Overture' },
  { id: 'romance-c', title: 'Romance in C for string orchestra', date: '1880', genre: 'Strings' },
  { id: 'concert-overture-c', title: 'Concert Overture in C major', date: '1882', genre: 'Concert Overture' },
  { id: 'heroic-overture', title: 'Heroic Overture for orchestra', date: '1884', genre: 'Concert Overture' },
  { id: 'symphony-1', title: 'Symphony No. 1 in A minor', date: '1887', genre: 'Symphony' },
  { id: 'elves-scherzo', title: 'Elves — Scherzo for orchestra, Op. 17', date: '1890', genre: 'Scherzo' },
  { id: 'concert-piece-a-minor', title: 'Concert Piece in A minor for piano and orchestra, Op. 23', date: '1895', genre: 'Concertante / Piano & Orchestra' },
  { id: 'suite-strings', title: 'Suite for string orchestra', date: '1898', genre: 'Strings' },
  { id: 'monodic-poem', title: 'Monodic Poem for orchestra', date: '1904', genre: 'Tone Poem' },
  { id: 'symphony-2', title: 'Symphony No. 2 in B minor', date: '1909', genre: 'Symphony' },
  { id: 'prelude-allegro', title: 'Prelude and Allegro for piano and orchestra', date: '1915', genre: 'Concertante' },
  { id: 'bravura-study', title: 'Bravura Concert Study for piano and orchestra', date: '1920', genre: 'Concertante' },
];
