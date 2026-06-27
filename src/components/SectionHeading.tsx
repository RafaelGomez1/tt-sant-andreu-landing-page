import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  const { ref, isVisible } = useReveal();
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-accent-300' : 'text-accent-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-navy-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
