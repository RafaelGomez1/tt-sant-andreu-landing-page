import { Users, Baby, GraduationCap, Swords } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { ScheduleRow } from '../i18n/translations';
import { SectionHeading, Reveal } from './SectionHeading';

type Tone = ScheduleRow['tone'];

const TONE_STYLES: Record<Tone, {
  bg: string;
  text: string;
  timeText: string;
  dot: string;
  icon: typeof Users;
}> = {
  adults: {
    bg: 'bg-blue-50 hover:bg-blue-100/70',
    text: 'text-blue-600',
    timeText: 'text-blue-950',
    dot: 'bg-blue-500',
    icon: Swords,
  },
  'kids-intermediate': {
    bg: 'bg-emerald-50 hover:bg-emerald-100/70',
    text: 'text-emerald-600',
    timeText: 'text-emerald-950',
    dot: 'bg-emerald-500',
    icon: GraduationCap,
  },
  'kids-beginner': {
    bg: 'bg-orange-50 hover:bg-orange-100/70',
    text: 'text-orange-600',
    timeText: 'text-orange-950',
    dot: 'bg-orange-400',
    icon: Baby,
  },
  members: {
    bg: 'bg-slate-100/80 hover:bg-slate-150 hover:bg-slate-200/60',
    text: 'text-slate-500',
    timeText: 'text-slate-800',
    dot: 'bg-slate-400',
    icon: Users,
  },
};

const LEGEND_KEYS: { tone: Tone; labelKey: keyof ReturnType<typeof useLanguage>['t']['schedule']['legend'] }[] = [
  { tone: 'adults', labelKey: 'adults' },
  { tone: 'kids-intermediate', labelKey: 'kidsIntermediate' },
  { tone: 'kids-beginner', labelKey: 'kidsBeginner' },
  { tone: 'members', labelKey: 'members' },
];

export function Schedule() {
  const { t } = useLanguage();
  const s = t.schedule;

  return (
    <section id="schedule" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:pt-14 lg:pb-16">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        {/* Legend */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 tracking-wide uppercase">
            {LEGEND_KEYS.map((item) => {
              const style = TONE_STYLES[item.tone];
              return (
                <span key={item.tone} className="inline-flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                  {s.legend[item.labelKey]}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* === DESKTOP: Weekly columns === */}
        <Reveal delay={120}>
          <div className="mt-10 hidden lg:grid lg:grid-cols-5 lg:gap-5">
            {s.days.map((day) => (
              <div key={day.day}>
                {/* Day header */}
                <div className="mb-3 pb-2">
                  <h3 className="font-display text-xs font-bold text-navy-900 uppercase tracking-[0.15em] text-center">
                    {day.day}
                  </h3>
                </div>

                {/* Slots */}
                <div className="space-y-2">
                  {day.rows.map((row) => {
                    const style = TONE_STYLES[row.tone];
                    const Icon = style.icon;

                    if (row.split) {
                      const splitStyle = TONE_STYLES[row.split.tone];
                      const SplitIcon = splitStyle.icon;

                      return (
                          <div
                              key={`${day.day}-${row.time}`}
                              className="relative isolate min-h-[4.25rem] overflow-hidden rounded-lg text-center transition-all duration-200 hover:-translate-y-px hover:shadow-md"
                          >
                            {/* Left / right full-color backgrounds */}
                            <div className="pointer-events-none absolute inset-0 grid grid-cols-2">
                              <div className={style.bg} />
                              <div className={splitStyle.bg} />
                            </div>

                            {/* Shared time */}
                            <div className="relative px-3 pt-2.5 text-lg font-extrabold tabular-nums leading-tight tracking-tight text-slate-900">
                              {row.time}
                            </div>

                            {/* One centered icon for each half */}
                            <div className="relative mt-1 grid grid-cols-2 px-2 pb-2">
                              <div
                                  className={`flex items-center justify-center ${style.text}`}
                                  aria-label={row.label}
                                  title={row.label}
                              >
                                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                              </div>

                              <div
                                  className={`flex items-center justify-center ${splitStyle.text}`}
                                  aria-label={row.split.label}
                                  title={row.split.label}
                              >
                                <SplitIcon className="h-3.5 w-3.5" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                      );
                    }

                    return (
                      <div
                        key={`${day.day}-${row.time}`}
                        className={`rounded-lg px-3 py-2.5 min-h-[4.25rem] text-center transition-all duration-200 hover:shadow-md hover:-translate-y-px ${style.bg}`}
                      >
                        <div className={`text-lg font-extrabold tabular-nums tracking-tight leading-tight ${style.timeText}`}>
                          {row.time}
                        </div>
                        <div className={`mt-1 inline-flex items-center gap-1.5 text-xs font-medium ${style.text}`}>
                          <Icon className="h-3 w-3" aria-hidden="true" />
                          {row.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* === MOBILE: Vertical agenda === */}
        <div className="mt-8 space-y-6 lg:hidden">
          {s.days.map((day, dayIdx) => (
            <Reveal key={day.day} delay={dayIdx * 40}>
              {/* Day header */}
              <div className="flex items-center gap-3 mb-2.5">
                <h3 className="font-display text-sm font-bold text-navy-900 uppercase tracking-[0.12em]">
                  {day.day}
                </h3>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              {/* Slots */}
              <div className="space-y-2">
                {day.rows.map((row) => {
                  const style = TONE_STYLES[row.tone];
                  const Icon = style.icon;

                  if (row.split) {
                    const splitStyle = TONE_STYLES[row.split.tone];
                    const SplitIcon = splitStyle.icon;

                    return (
                        <div
                            key={`m-${day.day}-${row.time}`}
                            className="relative isolate min-h-[4.75rem] overflow-hidden rounded-lg text-center transition-all duration-200"
                        >
                          {/* Full-card split background */}
                          <div className="pointer-events-none absolute inset-0 grid grid-cols-2">
                            <div className={style.bg} />
                            <div className={splitStyle.bg} />
                          </div>

                          {/* Shared time */}
                          <div className="relative pt-3 px-4 text-xl font-extrabold tabular-nums tracking-tight text-slate-900">
                            {row.time}
                          </div>

                          {/* Labels aligned with each colored half */}
                          <div className="relative mt-1.5 grid grid-cols-2 gap-2 px-3 pb-2.5">
                            <div className={`inline-flex items-center justify-center gap-1.5 text-sm font-medium ${style.text}`}>
                              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              <span>{row.label}</span>
                            </div>

                            <div className={`inline-flex items-center justify-center gap-1.5 text-sm font-medium ${splitStyle.text}`}>
                              <SplitIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              <span>{row.split.label}</span>
                            </div>
                          </div>
                        </div>
                    );
                  }

                  return (
                    <div
                      key={`m-${day.day}-${row.time}`}
                      className={`rounded-lg px-4 py-3 min-h-[4.75rem] text-center transition-all duration-200 ${style.bg}`}
                    >
                      <div className={`text-xl font-extrabold tabular-nums tracking-tight ${style.timeText}`}>
                        {row.time}
                      </div>
                      <div className={`mt-1 inline-flex items-center gap-1.5 text-sm font-medium ${style.text}`}>
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {row.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
