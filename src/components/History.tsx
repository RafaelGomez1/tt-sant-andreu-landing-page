import { Flag, Trophy, GraduationCap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionHeading, Reveal } from './SectionHeading';

export function History() {
  const { t } = useLanguage();
  const h = t.history;

  const milestones = [
    { icon: Flag, value: h.milestone1, label: h.milestone1Label },
    { icon: Trophy, value: h.milestone2, label: h.milestone2Label },
    { icon: GraduationCap, value: h.milestone3, label: h.milestone3Label },
  ];

  return (
    <section id="history" className="bg-white">
      <div className="container-narrow section-pad grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading eyebrow={h.eyebrow} title={h.title} align="left" />
          <Reveal delay={120}>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{h.body}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {milestones.map((m, i) => (
              <Reveal key={m.label} delay={200 + i * 100}>
                <div className="rounded-2xl border border-slate-100 bg-navy-50/40 p-4 text-center transition-colors hover:bg-navy-50 sm:p-5">
                  <m.icon className="mx-auto h-5 w-5 text-accent-500" aria-hidden="true" />
                  <div className="mt-2 font-display text-xl font-bold text-navy-900 sm:text-2xl">{m.value}</div>
                  <div className="mt-1 text-[0.7rem] leading-snug text-slate-500 sm:text-xs">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
              <img
                src="https://images.pexels.com/photos/6298418/pexels-photo-6298418.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Table tennis match in progress"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
