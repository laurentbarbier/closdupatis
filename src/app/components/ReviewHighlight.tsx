import { Star } from 'lucide-react';

const REVIEW_TEXT = 'Tres bien passer le weekend chez eux et bien propre et hote tres gentil merci a bientôt';

export function ReviewHighlight() {
  return (
    <section className="bg-amber-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Premier avis Airbnb</p>
          <div className="mt-4 flex items-center justify-center gap-1 text-amber-500" aria-label="Avis 5 étoiles">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} fill="currentColor" />
            ))}
          </div>
          <blockquote className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-gray-800 md:text-xl">
            "{REVIEW_TEXT}"
          </blockquote>
        </div>
      </div>
    </section>
  );
}