import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    src: '/tt-sant-andreu-views.jpeg',
    alt: 'TT Sant Andreu club views',
  },
  {
    src: '/lira-kids-tournament.jpg',
    alt: 'Kids tournament',
  },
  {
    src: '/score-picture.jpg',
    alt: 'match score',
  },
  {
    src: '/tt-sant-andreu-views.jpeg',
    alt: 'TT Sant Andreu club views',
  },
  {
    src: '/tt-sant-andreu-views.jpeg',
    alt: 'TT Sant Andreu club views',
  },
];

const INTERVAL_MS = 5000;

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev' = 'next') => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + SLIDES.length) % SLIDES.length);
        setAnimating(false);
      }, 350);
    },
    [animating],
  );

  const next = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const thumbPrev = (current - 1 + SLIDES.length) % SLIDES.length;
  const thumbNext = (current + 1) % SLIDES.length;

  return (
    <section
      aria-label="Photo gallery"
      className="bg-slate-950 py-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Main stage */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
          <div
            className={`transition-opacity duration-350 ease-in-out ${animating ? 'opacity-0' : 'opacity-100'}`}
            style={{ transition: 'opacity 350ms ease-in-out' }}
          >
            <img
              src={SLIDES[current].src}
              alt={SLIDES[current].alt}
              className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[500px]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-105 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-105 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Counter */}
          <span className="absolute bottom-4 right-5 text-xs font-semibold tracking-widest text-white/70">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`View photo ${i + 1}`}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                i === current
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 opacity-100'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-14 w-full object-cover sm:h-18 lg:h-20"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Dot progress */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
