export interface ONeillWork {
  id: string;
  title: string;
  date: string;
  genre: string;
  hasDedicatedPage?: boolean;
}

export const NORMAN_ONEILL_ORCHESTRAL_WORKS: ONeillWork[] = [
  { id: 'in-autumn', title: 'In Autumn — Tone Poem (Overture), Op. 8', date: '1901', genre: 'Tone Poem / Concert Overture', hasDedicatedPage: true },
  { id: 'intro-scherzo', title: 'Introduction and Scherzo for orchestra', date: '1898', genre: 'Orchestral' },
  { id: 'death-on-hills', title: 'Death on the Hills — Ballad for contralto and orchestra, Op. 12', date: '1901', genre: 'Vocal Orchestral' },
  { id: 'miniatures', title: 'Miniatures for small orchestra, Op. 14', date: '1904', genre: 'Suite' },
  { id: 'in-springtime', title: 'In Springtime — Concert Overture, Op. 21', date: '1906', genre: 'Concert Overture' },
  { id: 'variations-irish-air', title: 'Variations for orchestra on an Irish Air, Op. 29', date: '1907', genre: 'Variations' },
  { id: 'a-fantasy', title: 'A Fantasy for orchestra, Op. 33', date: '1909', genre: 'Orchestral' },
  { id: 'blue-bird-suite', title: 'The Blue Bird — Suite for orchestra', date: '1910', genre: 'Incidental Music Suite' },
  { id: 'scotch-rhapsody', title: 'Scotch Rhapsody, Op. 27', date: '1911', genre: 'Rhapsody' },
  { id: 'humoresque', title: 'Humoresque for orchestra, Op. 47', date: '1913', genre: 'Orchestral' },
  { id: 'irish-rhapsody', title: 'Irish Rhapsody, Op. 48', date: '1914', genre: 'Rhapsody' },
  { id: 'hornpipe', title: 'Hornpipe for orchestra', date: '1916', genre: 'Dance' },
  { id: 'mary-rose-suite', title: 'Mary Rose — Suite for orchestra', date: '1920', genre: 'Theatrical Suite' },
  { id: 'festal-prelude', title: 'Festal Prelude for orchestra', date: '1927', genre: 'Prelude' },
  { id: 'two-shakespeare-sketches', title: 'Two Shakespearean Sketches', date: '1928', genre: 'Orchestral' },
];
