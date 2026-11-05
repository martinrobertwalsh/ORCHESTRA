export interface HerveyWork {
  id: string;
  title: string;
  date: string;
  hasDedicatedPage?: boolean;
}

export const ARTHUR_HERVEY_ORCHESTRAL_WORKS: HerveyWork[] = [
  { id: 'vorspiel', title: 'Vorspiel: für grosses Orchester', date: '1887' },
  { id: 'love-and-fate', title: 'Love and Fate — dramatic overture', date: '1890' },
  { id: 'in-dreamland', title: 'In Dreamland — tone poem for orchestra', date: 'Undated' },
  { id: 'the-gates-of-night', title: 'The Gates of Night — for voice and orchestra', date: '1901' },
  { id: 'two-tone-pictures', title: 'Two tone pictures:  1. On the Heights 2. On the March', date: '1902' },
  { id: 'youth', title: 'Youth — concert overture', date: '1902' },
  { id: 'in-the-east', title: 'In the East — symphonic poem', date: '1904' },
  { id: 'summer', title: 'Summer — tone poem', date: '1907', hasDedicatedPage: true },
  { id: 'ilona', title: 'Ilona — prelude', date: '1907' },
  { id: 'life-moods', title: 'Life Moods — symphonic variations', date: '1910' },
  { id: 'the-roll-call', title: 'The Roll Call — tone poem', date: 'Undated' },
  { id: 'in-the-twilight', title: 'In the Twilight — tone poem', date: 'Undated' },
  { id: 'romance', title: 'Romance — for violin and orchestra', date: 'Undated' },
  { id: 'serenade', title: 'Serenade — for violin and orchestra', date: 'Undated' },
];
