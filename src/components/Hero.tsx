import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-900 text-white">
      {/* Background image + overlays */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-tt-sant-andreu.avif')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/70 via-navy-900/65 to-navy-900/75" aria-hidden="true" />


      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="max-w-3xl">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            {t.hero.badge}
          </span>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="animate-fade-up mt-5 max-w-xl text-lg leading-relaxed text-navy-100 [animation-delay:120ms] sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <button type="button" onClick={() => scrollTo('membership')} className="btn-primary group">
              {t.hero.joinCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollTo('contact')} className="btn-secondary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.hero.contactCta}
            </button>
          </div>


        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="h-12 w-full sm:h-16" preserveAspectRatio="none">
          <path d="M0 80 L0 32 Q360 0 720 32 T1440 32 L1440 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
