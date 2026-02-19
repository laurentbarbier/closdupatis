import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mountain, Waves, Bike, Fish, Landmark, Palmtree, TreePine } from 'lucide-react';

const activities = [
  {
    title: 'Randonnées Balisées',
    description: 'Sentiers très nombreux à proximité avec des panoramas exceptionnels sur les Alpes Mancelles et la vallée de la Sarthe',
    image: 'https://images.unsplash.com/photo-1718436170968-f3fb1e6d107b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG5hdHVyZXxlbnwxfHx8fDE3Njc0MjQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Mountain,
    distance: 'Sur place'
  },
  {
    title: 'Canoë-Kayak',
    description: 'Descendez la Sarthe en canoë et admirez les falaises calcaires. Base nautique proche du gîte',
    image: 'https://images.unsplash.com/photo-1590692144697-8e1393ccc73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5vZSUyMGtheWFrJTIwc2FydGhlJTIwZnJhbmNlfGVufDF8fHx8MTc2NzQ2MDM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Waves,
    distance: 'Sur place'
  },
  {
    title: 'Escalade',
    description: 'Rochers et sites d\'escalade aux Alpes Mancelles : Saint-Léonard-des-Bois, pour tous les niveaux',
    image: 'https://images.unsplash.com/photo-1526164899963-7e52f9cc9e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2NzQ1MzA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Mountain,
    distance: '4 km • 10 min'
  },
  {
    title: 'Domaine du Gasseau',
    description: 'Parc d\'aventure avec accrobranches, tyroliennes, parcours dans les arbres et nombreuses animations pour toute la famille',
    image: 'https://images.unsplash.com/photo-1544735716-0af8374397b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVldG9wJTIwYWR2ZW50dXJlJTIwemlwJTIwbGluZXxlbnwxfHx8fDE3Njc0NjAzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: TreePine,
    distance: 'Sur place'
  },
  {
    title: 'Pêche à la Truite',
    description: 'Profitez de la pêche à la truite dans la Sarthe. La rivière est réputée pour ses truites de qualité',
    image: 'https://images.unsplash.com/photo-1761768611882-80e3ab837604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwcml2ZXIlMjBjb3VudHJ5c2lkZXxlbnwxfHx8fDE3Njc0NTk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Fish,
    distance: 'Sur place'
  },
  {
    title: 'VTT & Cyclotourisme',
    description: 'Parcours VTT et station trail à travers les Alpes Mancelles et la campagne sarthoise, idéal pour les amateurs de deux-roues',
    image: 'https://images.unsplash.com/photo-1763537351494-b849a2d6b51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzY3Mzg3Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Bike,
    distance: 'Sur place'
  },
  {
    title: 'Lac avec Plage',
    description: 'Lac de Sillé-le-Guillaume avec plage aménagée, parfait pour se baigner et passer une journée en famille',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3Njc0NjAzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Palmtree,
    distance: '25 km • 30 min'
  },
  {
    title: 'Centre Équestre',
    description: 'Centre équestre à proximité pour des balades à cheval et découvrir la région à un rythme plus lent',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJpZGluZyUyMGNvdW50cnl8ZW58MXx8fHwxNzY3NDYwMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Landmark,
    distance: 'Sur place'
  }
];

export function Activities() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Activités à Proximité</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Au cœur des Alpes Mancelles, une multitude d'activités vous attendent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm">{activity.distance}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="text-xl">{activity.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}