export interface PercyPittWork {
  id: string;
  title: string;
  date: string;
  isLost: boolean;
  hasDedicatedPage?: boolean;
}

export const PERCY_PITT_ORCHESTRAL_WORKS: PercyPittWork[] = [
  { id: 'coronation-march', title: 'Coronation March', date: '1896', isLost: false, hasDedicatedPage: true },
  { id: 'suite-in-d', title: 'Suite in D major: Prelude and Bourrée', date: '1891', isLost: true },
  { id: 'modern-suite', title: 'Modern Suite (Suite de ballet)', date: '1896', isLost: true },
  { id: 'fetes-galantes', title: 'Fêtes galantes', date: '1896', isLost: true },
  { id: 'clarinet-concertino', title: 'Concertino in C minor for clarinet and orchestra', date: '1897', isLost: true },
  { id: 'taming-shrew', title: 'The Taming of the Shrew – overture', date: '1898', isLost: true },
  { id: 'hercules-march', title: 'Hercules March', date: '1898', isLost: true },
  { id: 'air-de-ballet', title: 'Air de ballet for strings', date: '1899', isLost: true },
  { id: 'violin-ballade', title: 'Ballade for violin and orchestra', date: '1900', isLost: false },
  { id: 'dance-rhythms', title: 'Dance Rhythms', date: '1901', isLost: true },
  { id: 'oriental-rhapsody', title: 'Oriental Rhapsody', date: '1902', isLost: false },
  { id: 'paolo-francesca', title: 'Paolo and Francesca – incidental music and symphonic impressions', date: '1902', isLost: false },
  { id: 'three-old-english-dances', title: 'Three Old English Dances, from Richard II', date: '1904', isLost: true },
  { id: 'sinfonietta-g-minor', title: 'Symphony (Sinfonietta) in G minor', date: '1906', isLost: true },
  { id: 'english-rhapsody', title: 'English Rhapsody', date: '1910', isLost: true },
  { id: 'sakura-suites', title: 'Sakura suites Nos.1 and 2', date: '1915', isLost: true },
  { id: 'ballet-egyptien', title: 'Ballet égyptien', date: '1915', isLost: true },
  { id: 'la-serenade', title: 'La Sérénade – serenade for string orchestra', date: 'Undated', isLost: true },
];
