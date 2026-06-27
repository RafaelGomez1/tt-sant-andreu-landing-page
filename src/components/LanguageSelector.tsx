import { useLanguage } from '../i18n/LanguageContext';
import { LANGS } from '../i18n/translations';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="group inline-flex items-center gap-1.5 rounded-full border border-navy-200/70 bg-white/80 px-3 py-1.5 text-sm font-medium text-navy-800 transition-colors hover:border-navy-400 hover:bg-white"
      >
        <Globe className="h-4 w-4 text-navy-600" aria-hidden="true" />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.flag}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-navy-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-slate-100 bg-white p-1 shadow-xl shadow-navy-900/10"
        >
          {LANGS.map((l) => {
            const isActive = l.code === lang;
            return (
              <li key={l.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-navy-50 font-semibold text-navy-900'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider text-navy-500">{l.flag}</span>
                    {l.label}
                  </span>
                  {isActive && <Check className="h-4 w-4 text-navy-700" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
