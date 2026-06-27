import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionHeading, Reveal } from './SectionHeading';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const { t, lang } = useLanguage();
  const c = t.contact;

  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = '·';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = '·';
    if (!form.message.trim()) next.message = '·';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message ?? `HTTP ${res.status}`);

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const update = (field: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const infoItems = [
    { icon: Phone, label: c.info.phoneLabel, value: c.info.phone, href: `tel:${c.info.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: c.info.emailLabel, value: c.info.email, href: `mailto:${c.info.email}` },
    { icon: MapPin, label: c.info.addressLabel, value: c.info.address, href: '#map' },
  ];

  return (
    <section id="contact" className="bg-navy-50/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:pt-14 lg:pb-24">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          {/* Contact info */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {infoItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-navy-800 text-white transition-colors group-hover:bg-navy-900">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</dt>
                    <dd className="text-sm font-medium text-navy-900">{item.value}</dd>
                  </div>
                </a>
              ))}

              {/* Map placeholder */}
              <div id="map" className="relative mt-1 flex-1 overflow-hidden rounded-2xl border border-slate-100 bg-navy-900 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={c.mapAlt}
                  className="h-44 w-full object-cover opacity-60 lg:h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-navy-800 shadow-md backdrop-blur">
                    <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
                    {c.info.address}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    {c.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder={c.form.namePlaceholder}
                    aria-invalid={!!errors.name}
                    aria-required="true"
                    className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-500/40 ${
                      errors.name ? 'border-red-300 focus:ring-red-200' : 'border-slate-200'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    {c.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder={c.form.emailPlaceholder}
                    aria-invalid={!!errors.email}
                    aria-required="true"
                    className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-500/40 ${
                      errors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-200'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    {c.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder={c.form.messagePlaceholder}
                    aria-invalid={!!errors.message}
                    aria-required="true"
                    className={`w-full resize-y rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-500/40 ${
                      errors.message ? 'border-red-300 focus:ring-red-200' : 'border-slate-200'
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    {c.form.submitting}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {c.form.submit}
                  </>
                )}
              </button>

              {status === 'success' && (
                <div
                  role="status"
                  className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {c.form.success}
                </div>
              )}
              {status === 'error' && (
                <div
                  role="status"
                  className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {c.form.error}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
