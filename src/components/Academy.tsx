import { Baby, Users, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionHeading, Reveal } from './SectionHeading';

export function Academy() {
  const { t } = useLanguage();
  const a = t.academy;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="academy" className="relative bg-navy-50/50">
      <div className="container-narrow section-pad">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Kids card */}
          <Reveal>
            <article className="card group flex h-full flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
                  <Baby className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">{a.kids.title}</h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {a.kids.levels.map((lvl) => (
                  <li
                    key={lvl.name}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 transition-colors hover:border-accent-200"
                  >
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white">
                      {lvl.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-navy-900">{lvl.name}</p>
                      <p className="mt-0.5 text-sm text-slate-600">{lvl.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollTo('schedule')}
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy-700 transition-colors hover:text-accent-600"
              >
                {t.nav.schedule}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </article>
          </Reveal>

          {/* Adults card */}
          <Reveal delay={120}>
            <article className="card group relative flex h-full flex-col overflow-hidden bg-navy-900 text-white">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent-300">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{a.adults.title}</h3>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-navy-100">{a.adults.desc}</p>

              <div className="mt-6 flex items-start gap-2 rounded-2xl bg-white/5 p-4 text-sm text-navy-100">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-300" aria-hidden="true" />
                <span>{a.adults.note}</span>
              </div>

              <button
                type="button"
                onClick={() => scrollTo('competition')}
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-navy-50"
              >
                {t.nav.competition}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
