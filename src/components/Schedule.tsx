import { Clock, Users, Baby, GraduationCap, Swords } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { ScheduleRow } from '../i18n/translations';
import { SectionHeading, Reveal } from './SectionHeading';

const TONE_STYLES: Record<ScheduleRow['tone'], { badge: string; dot: string; icon: typeof Users }> = {
  members: { badge: 'bg-navy-50 text-navy-700 border-navy-100', dot: 'bg-navy-500', icon: Users },
  'kids-beginner': { badge: 'bg-accent-50 text-accent-700 border-accent-100', dot: 'bg-accent-500', icon: Baby },
  'kids-intermediate': { badge: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500', icon: GraduationCap },
  adults: { badge: 'bg-navy-900 text-white border-navy-900', dot: 'bg-accent-400', icon: Swords },
};

const LEGEND_KEYS: { tone: ScheduleRow['tone']; labelKey: keyof ReturnType<typeof useLanguage>['t']['schedule']['legend'] }[] = [
  { tone: 'members', labelKey: 'members' },
  { tone: 'kids-beginner', labelKey: 'kidsBeginner' },
  { tone: 'kids-intermediate', labelKey: 'kidsIntermediate' },
  { tone: 'adults', labelKey: 'adults' },
];

export function Schedule() {
  const { t } = useLanguage();
  const s = t.schedule;

  return (
    <section id="schedule" className="bg-navy-50/50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:pt-24 lg:pb-14">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        {/* Legend */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            {LEGEND_KEYS.map((item) => {
              const style = TONE_STYLES[item.tone];
              const Icon = style.icon;
              return (
                <span key={item.tone} className="inline-flex items-center gap-2 text-sm sm:text-base text-slate-600">
                  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-lg ${style.badge} border`}>
                    <Icon className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {s.legend[item.labelKey]}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Schedule grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5 xl:gap-6">
          {s.days.map((day, i) => (
            <Reveal key={day.day} delay={i * 80} className="w-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm text-center">
                <div className="border-b border-slate-100 bg-navy-900 px-4 py-3 lg:py-4 text-center">
                  <h3 className="font-display text-base lg:text-lg font-bold text-white">{day.day}</h3>
                </div>
                <ul className="flex-1 space-y-px">
                  {day.rows.map((row) => {
                    const style = TONE_STYLES[row.tone];
                    const Icon = style.icon;
                    return (
                      <li key={row.time} className="border-b border-slate-50 px-4 py-3 lg:py-4 last:border-b-0">
                        <div className="flex items-center justify-center gap-2 text-sm lg:text-base font-semibold text-navy-800">
                          <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                          {row.time}
                        </div>
                        <div className={`mt-2 inline-flex items-center gap-1.5 rounded-lg border px-2 py-1 lg:px-3 lg:py-1.5 text-sm lg:text-base font-medium ${style.badge}`}>
                          <Icon className="h-3 w-3" aria-hidden="true" />
                          {row.label}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
