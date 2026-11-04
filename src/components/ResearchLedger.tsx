import React from 'react';
import { FolderArchive, ExternalLink, ArrowRight, Library, Search } from 'lucide-react';

interface ResearchLedgerProps {
  onSearchComposer: (name: string) => void;
}

export const ResearchLedger: React.FC<ResearchLedgerProps> = ({ onSearchComposer }) => {
  const folders = [
    { name: 'Clarke, Hamilton', dates: '1840–1912', keyWork: 'Symphony in F major' },
    { name: 'Cusins, William George', dates: '1833–1893', keyWork: 'Piano Concerto in A minor' },
    { name: 'Drysdale, Learmont', dates: '1866–1909', keyWork: 'Tam o’ Shanter Overture' },
    { name: 'Fenney, William J.', dates: '1891–1957', keyWork: 'The Romance of the Rose' },
    { name: 'Gadsby, Henry Robert', dates: '1842–1907', keyWork: 'The Forest of Arden' },
    { name: 'Godfrey, Percy', dates: '1859–1945', keyWork: 'Coronation March (1902)' },
    { name: 'Hervey, Arthur', dates: '1855–1922', keyWork: 'In the East' },
    { name: 'Holmes, Henry', dates: '1839–1905', keyWork: 'Symphony No. 2 in D' },
    { name: 'Joseph, Jane', dates: '1894–1929', keyWork: 'Bergamask for Orchestra' },
    { name: 'Leslie, Henry David', dates: '1822–1896', keyWork: 'Symphony in F' },
    { name: 'Lohr, Harvey', dates: '1856–1927', keyWork: 'Symphony No. 3 in D minor' },
    { name: 'Lucas, Mary Anderson', dates: '1882–1952', keyWork: 'Circus Fugue & Concertos' },
    { name: 'Macfarren, Walter', dates: '1826–1905', keyWork: 'Symphony in B-flat' },
    { name: 'Matthay, Tobias', dates: '1858–1945', keyWork: 'In May & Concert Pieces' },
    { name: 'Morris, Reginald', dates: '1886–1948', keyWork: 'Symphony in C minor' },
    { name: 'Oakeley, Herbert', dates: '1830–1903', keyWork: 'Edinburgh Festival March' },
    { name: 'Oberthur, Charles', dates: '1819–1895', keyWork: 'Macbeth Overture' },
    { name: 'O’Neill, Norman', dates: '1875–1934', keyWork: 'In Springtime Overture' },
    { name: 'Pitt, Percy', dates: '1869–1932', keyWork: 'Symphonic Preludes' },
    { name: 'Prout, Ebenezer', dates: '1835–1909', keyWork: 'Symphony No. 3 in F' },
    { name: 'Reed, William Henry', dates: '1875–1942', keyWork: 'The Lincoln Imp' },
    { name: 'Sherwood, Percy', dates: '1866–1939', keyWork: 'Piano Concerto No. 1' },
    { name: 'Speer, William Henry', dates: '1863–1937', keyWork: 'Symphony in E-flat' },
    { name: 'Street, Joseph', dates: '1844–1923', keyWork: 'Victorian Chamber & Orchestral' },
    { name: 'Wall, Alfred', dates: '1875–1936', keyWork: 'Violin Concerto' },
    { name: 'Wilson, Stanley Herbert', dates: '1899–1953', keyWork: 'A Skye Symphony' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Authentic Researcher Directory Screenshot */}
        <div className="lg:col-span-4 bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-amber-900 mb-2">
            <FolderArchive className="w-3.5 h-3.5 text-amber-800" />
            <span>Primary Research Ledger</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
            Curator’s Working Archive
          </h3>
          <p className="font-body text-xs text-stone-600 mb-4 leading-relaxed">
            Direct snapshot of Martin Walsh’s ongoing digital engraving and score reconstruction directory for 
            the 1850–1950 British symphonic renaissance.
          </p>

          <div className="rounded border border-stone-200 overflow-hidden bg-stone-50 max-h-96 overflow-y-auto">
            <img
              src={`${import.meta.env.BASE_URL}assets/aistudio/image_12fa9c82.png`}
              alt="Martin Walsh research archive directory showing folders for Hamilton Clarke, Learmont Drysdale, Jane Joseph, Ebenezer Prout, and others"
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-3 text-[11px] text-stone-400 font-mono flex items-center justify-between">
            <span>Archive Index · 26 Folders Active</span>
            <span className="text-amber-800">britishcomposers1850-1950</span>
          </div>
        </div>

        {/* Right: Interactive Directory Quick Links */}
        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100 mb-5">
            <div>
              <span className="text-xs font-serif uppercase tracking-widest text-amber-900 block mb-0.5">
                Archival Master Index
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Manuscript Holdings by Composer
              </h3>
            </div>
            <span className="text-xs text-stone-500 font-sans">
              Click any folder below to search the catalogue
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
            {folders.map((f) => {
              const queryTerm = f.name.split(',')[0].trim();
              return (
                <button
                  key={f.name}
                  onClick={() => onSearchComposer(queryTerm)}
                  className="p-2.5 text-left rounded border border-stone-200/90 hover:border-amber-800 bg-[#FBF9F5] hover:bg-amber-50/50 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-amber-800 text-xs">📁</span>
                    <span className="font-serif font-bold text-stone-900 text-xs group-hover:text-amber-900 truncate">
                      {f.name}
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-500 font-mono truncate">
                    {f.dates} · {f.keyWork}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
            <span className="font-serif italic text-stone-700">
              Each folder contains autograph manuscripts, transcribed Sibelius/MusicXML scores, and realization notes.
            </span>
            <div className="flex items-center gap-1 text-amber-900 font-medium">
              <Library className="w-3.5 h-3.5" />
              <span>British Library & RAM Sourced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
