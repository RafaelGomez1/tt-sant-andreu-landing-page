import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

const NAV_IDS = ['history', 'academy', 'competition', 'schedule', 'membership', 'contact'] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = NAV_IDS.map((id) => ({ id, label: t.nav[id] }));

  const handleNav = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="group flex items-center gap-2.5"
          aria-label="Club home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800 shadow-md shadow-navy-900/30 transition-transform group-hover:scale-105">
            <img src="/images/tt-white-logo.png" alt="TT Sant Andreu logo" className="h-9 w-9 object-contain" />
          </span>
          <span
            className={`font-display text-lg font-bold tracking-tight transition-colors ${
              scrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            TT Sant<span className="text-accent-500"> Andreu</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:bg-navy-50 hover:text-navy-900'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <button
            type="button"
            onClick={() => handleNav('membership')}
            className="hidden rounded-full bg-navy-800 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-navy-900/20 transition-all hover:-translate-y-0.5 hover:bg-navy-900 sm:inline-flex"
          >
            {t.nav.join}
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              scrolled ? 'text-navy-800 hover:bg-navy-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-5 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.id);
                  }}
                  className="block w-full rounded-lg px-3 py-2.5 text-left text-base font-medium text-slate-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => handleNav('membership')}
                className="block w-full rounded-full bg-navy-800 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {t.nav.join}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
