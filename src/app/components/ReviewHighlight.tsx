import { Star, Users } from 'lucide-react';

const featuredReviews = [
  {
    text: 'Super séjour, accueil charmant, convivial et attentionné !',
    author: 'Éloïse',
    meta: 'Mardi 26 mai 2026',
  },
  {
    text: 'Un petit coin de paradis pour ceux qui aiment la nature et le calme !! Nous remercions chaleureusement Claude et Marie-Renée pour leur accueil, leur gentillesse et leurs petites attentions pendant notre séjour dans leur magnifique logement.',
    author: 'Angéline',
    meta: 'Dimanche 17 mai 2026',
  },
  {
    text: 'Claude et Marie Renée sont tous simplement adorables : un accueil chaleureux, une maison propre soignée bien équipée et des loisirs en plus (jeux, hamac...). Le cadre est merveilleux car on n\'a pas de voisins à moins de 300 m, et de très beaux villages à côté à moins de 10 minutes. Un petit coin de paradis, tout était parfait. À ne pas manquer !',
    author: 'Marie-Hélène',
    meta: 'Il y a 3 jours · Séjour de quelques nuits',
  },
  {
    text: 'Maison très propre, au calme, dans un grand jardin arboré. Nous avons particulièrement apprécié le repos dans le hamac, les parties de ping-pong et les repas en plein air. Bien situé pour rejoindre rapidement les départs de randonnée en voiture. Hôtes très agréables.',
    author: 'Geraldine',
    meta: 'Il y a 1 semaine · Séjour de plus d\'une semaine',
  },
  {
    text: 'Maison de caractère, paisible, très confortable. Nos charmants hôtes ont pensé à tout pour faire de notre séjour un moment de détente total et profiter des belles randonnées alentour. Merci à Claude et Marie Renée pour leur accueil.',
    author: 'Jérôme',
    meta: 'Il y a 3 semaines · Séjour de quelques nuits',
  },
];

const aspectRatings = [
  'Évaluation globale',
  'Propreté',
  'Précision',
  'Arrivée',
  'Communication',
  'Emplacement',
  'Qualité-prix',
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
          <p className="mt-3 text-2xl font-semibold text-gray-900">Note moyenne 5,0/5</p>
          <p className="mt-1 text-sm text-gray-600">
            Tous les voyageurs nous notent 5,0 sur l&apos;ensemble des critères Airbnb.
          </p>
          <p className="mt-2 text-xs text-gray-500">Les 5 derniers avis</p>

          <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
            <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
              {aspectRatings.map((aspect) => (
                <div key={aspect} className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{aspect}</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">5,0</p>
                </div>
              ))}
            </div>
          </div>

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
