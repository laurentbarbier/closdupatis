import { Star, Users } from 'lucide-react';

const featuredReviews = [
  {
    text: 'Super séjour, accueil charmant, convivial et attentionné !',
    author: 'Éloïse',
    meta: 'il y a 1 jour · Quelques nuits',
  },
  {
    text: 'Un petit coin de paradis pour ceux qui aiment la nature et le calme !! Nous remercions chaleureusement Claude et Marie-Renée pour leur accueil, leur gentillesse et leurs petites attentions pendant notre séjour dans leur magnifique logement.',
    author: 'Angéline',
    meta: null,
  },
];

export function ReviewHighlight() {
  return (
    <section className="bg-amber-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-sm md:p-10">
          <div className="flex items-center justify-center gap-2">
            <Users size={18} className="text-amber-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Idéal en famille · Avis Airbnb récents
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-1 text-amber-500" aria-label="Avis 5 étoiles">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">Les 2 derniers avis</p>
          <div className="mt-6 grid gap-6 text-left md:grid-cols-2">
            {featuredReviews.map((review) => (
              <blockquote
                key={review.text}
                className="rounded-2xl border border-amber-100 bg-amber-50/40 p-5 text-base font-medium leading-relaxed text-gray-800 md:text-lg"
              >
                <p>"{review.text}"</p>
                <footer className="mt-4 flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-amber-800">— {review.author}</span>
                  {review.meta && (
                    <span className="text-xs text-gray-400">{review.meta}</span>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
