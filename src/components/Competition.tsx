import { Trophy, UserCheck, Rocket } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionHeading, Reveal } from './SectionHeading';

const POINT_ICONS = [Trophy, UserCheck, Rocket] as const;

export function Competition() {
  const { t } = useLanguage();
  const c = t.competition;

  return (
    <section id="competition" className="bg-white">
      <div className="container-narrow section-pad">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{c.intro}</p>
            <ul className="mt-8 space-y-4">
              {c.points.map((point, i) => {
                const Icon = POINT_ICONS[i] ?? Medal;
                return (
                  <li key={point} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-1 text-base text-slate-700">{point}</p>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-slate-100 bg-navy-50/60 p-7 sm:p-8">
              <Trophy className="h-9 w-9 text-accent-500" aria-hidden="true" />
              <p className="mt-4 text-base leading-relaxed text-slate-600">{c.future}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
