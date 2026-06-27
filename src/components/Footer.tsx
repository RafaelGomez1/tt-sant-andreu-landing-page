import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const NAV_IDS = ['history', 'academy', 'competition', 'schedule', 'membership', 'contact'] as const;
const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800">
                <img src="/tt-white-logo.png" alt="TT Sant Andreu logo" className="h-7 w-7 object-contain" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                TT Sant<span className="text-accent-500"> Andreu</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">{t.footer.tagline}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">{t.footer.followUs}</p>
              <ul className="mt-3 flex gap-2">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800/70 text-navy-200 transition-all hover:-translate-y-0.5 hover:bg-navy-700 hover:text-white"
                    >
                      <s.icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label={t.footer.quickLinks}>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">{t.footer.quickLinks}</p>
            <ul className="mt-3 space-y-2">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleNav(id)}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">{t.footer.contactTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-navy-300">
              <li>{t.contact.info.phone}</li>
              <li>
                <a href={`mailto:${t.contact.info.email}`} className="transition-colors hover:text-white">
                  {t.contact.info.email}
                </a>
              </li>
              <li>{t.contact.info.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 text-center text-xs text-navy-400 sm:flex-row sm:text-left">
          <p>© {year} {t.footer.copyright}</p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
