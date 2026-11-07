export interface GodfreyWork {
  id: string;
  title: string;
  date: string;
  genre: string;
  hasDedicatedPage?: boolean;
  isLost?: boolean;
}

export const PERCY_GODFREY_ORCHESTRAL_WORKS: GodfreyWork[] = [
  { id: 'coronation-march', title: 'Coronation March', date: '1902', genre: 'Ceremonial March', hasDedicatedPage: true, isLost: false },
  { id: 'symphony-1-g-minor', title: 'Symphony No. 1 in G minor', date: '1903', genre: 'Symphony', isLost: true },
  { id: 'symphony-2', title: 'Symphony No. 2', date: '1927', genre: 'Symphony', isLost: true },
  { id: 'symphony-3-a', title: 'Symphony No. 3 in A', date: '1930', genre: 'Symphony', isLost: true },
  { id: 'symphony-4-e', title: 'Symphony No. 4 in E', date: '1928', genre: 'Symphony', isLost: false },
  { id: 'torland-overture', title: 'Torland, overture', date: '1936', genre: 'Overture', isLost: true },
  { id: 'scenes-of-old-england', title: 'Scenes of Old England, suite', date: '1936', genre: 'Suite', isLost: true },
  { id: 'woodlanders-suite', title: 'Scenes from The Woodlanders, ballet suite after Thomas Hardy', date: '1944', genre: 'Ballet Suite', isLost: false },
  { id: 'symphonic-ballad', title: 'Symphonic Ballad', date: 'Date unverified', genre: 'Symphonic Poem', isLost: true },
];
