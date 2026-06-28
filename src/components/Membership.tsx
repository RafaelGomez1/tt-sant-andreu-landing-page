import { Check, ArrowRight, Baby, GraduationCap, Users, Swords } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionHeading, Reveal } from './SectionHeading';

const TYPE_META = {
  'kids-beginner':     { icon: Baby,           accent: 'bg-orange-400',  accentText: 'text-orange-600', check: 'bg-orange-100 text-orange-700' },
  'kids-intermediate': { icon: GraduationCap,  accent: 'bg-emerald-500', accentText: 'text-emerald-600', check: 'bg-emerald-100 text-emerald-700' },
  casual:              { icon: Users,           accent: 'bg-slate-400',   accentText: 'text-slate-500', check: 'bg-slate-100 text-slate-700' },
  team:                { icon: Swords,          accent: 'bg-blue-500',    accentText: 'text-blue-600', check: 'bg-blue-100 text-blue-700' },
} as const;

export function Membership() {
  const { t } = useLanguage();
  const m = t.membership;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const allPlans = m.categories.flatMap((cat) =>
    cat.plans.map((plan) => ({ ...plan, type: cat.type, categoryLabel: cat.label }))
  );

  return (
    <section id="membership" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:pt-14 lg:pb-14">
        <SectionHeading eyebrow={m.eyebrow} title={m.title} subtitle={m.subtitle} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allPlans.map((plan, i) => {
            const meta = TYPE_META[plan.type as keyof typeof TYPE_META];
            const Icon = meta.icon;
            return (
              <Reveal key={plan.name} delay={i * 70}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Coloured top bar */}
                  <div className={`h-1.5 w-full ${meta.accent}`} />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Icon + category label */}
                    <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${meta.accentText}`}>
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {plan.categoryLabel}
                    </div>

                    {/* Plan name + tagline */}
                    <h3 className="mt-3 font-display text-base font-bold text-navy-900">{plan.name}</h3>
                    <p className="mt-0.5 text-sm text-slate-500">{plan.tagline}</p>

                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-display text-2xl font-bold text-navy-900">{plan.price}</span>
                      {plan.period && <span className="text-sm text-slate-400">{plan.period}</span>}
                    </div>

                    {/* Features */}
                    <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5 text-left">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${meta.check}`}>
                            <Check className="h-2.5 w-2.5" aria-hidden="true" />
                          </span>
                          <span className="text-slate-600">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={() => scrollTo('contact')}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-800 transition-all hover:border-navy-300 hover:bg-navy-50 hover:-translate-y-0.5"
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
