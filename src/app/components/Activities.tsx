import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mountain, Waves, Bike, Fish, Landmark, Palette, TreePine } from 'lucide-react';

const activities = [
  {
    title: 'Randonnées',
    description: 'Découvrez les sentiers des Alpes Mancelles, dont le célèbre GR36, et profitez de panoramas exceptionnels sur la vallée de la Sarthe',
    image: 'https://images.unsplash.com/photo-1718436170968-f3fb1e6d107b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG5hdHVyZXxlbnwxfHx8fDE3Njc0MjQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Mountain,
    distance: 'Sur place'
  },
  {
    title: 'Canoë-Kayak',
    description: 'Descendez la Sarthe en canoë et admirez les falaises calcaires et la nature préservée. Base nautique à proximité',
    image: 'https://images.unsplash.com/photo-1590692144697-8e1393ccc73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5vZSUyMGtheWFrJTIwc2FydGhlJTIwZnJhbmNlfGVufDF8fHx8MTc2NzQ2MDM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Waves,
    distance: '2 km • 5 min'
  },
  {
    title: 'Escalade',
    description: 'Sites d\'escalade réputés au cœur des Alpes Mancelles : rochers de Saint-Léonard, pour tous niveaux',
    image: 'https://images.unsplash.com/photo-1526164899963-7e52f9cc9e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2NzQ1MzA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Mountain,
    distance: '3 km • 5 min'
  },
  {
    title: 'Acrobranche',
    description: 'Parc d\'aventure en forêt au Gasseau à Saint-Léonard-des-Bois : tyroliennes, parcours dans les arbres, sensations garanties',
    image: 'https://images.unsplash.com/photo-1544735716-0af8374397b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVldG9wJTIwYWR2ZW50dXJlJTIwemlwJTIwbGluZXxlbnwxfHx8fDE3Njc0NjAzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: TreePine,
    distance: '3 km • 5 min'
  },
  {
    title: 'Pêche',
    description: 'Profitez de la pêche en rivière dans la Sarthe, réputée pour ses truites et brochets. Carte de pêche disponible localement',
    image: 'https://images.unsplash.com/photo-1761768611882-80e3ab837604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwcml2ZXIlMjBjb3VudHJ5c2lkZXxlbnwxfHx8fDE3Njc0NTk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Fish,
    distance: '2 km • 5 min'
  },
  {
    title: 'Cyclotourisme',
    description: 'Circuits vélo et VTT à travers la campagne sarthoise, les Alpes Mancelles et leurs charmants villages',
    image: 'https://images.unsplash.com/photo-1763537351494-b849a2d6b51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzY3Mzg3Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Bike,
    distance: 'Sur place'
  },
  {
    title: 'Villages & Patrimoine',
    description: 'Visitez Fresnay-sur-Sarthe (Petite Cité de Caractère), son château médiéval, et les marchés authentiques',
    image: 'https://images.unsplash.com/photo-1615719578159-21cf7e867a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtZWRpZXZhbCUyMHZpbGxhZ2V8ZW58MXx8fHwxNzY3NDYwMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Landmark,
    distance: '8 km • 12 min'
  },
  {
    title: 'Peinture à Saint-Céneri',
    description: 'Découvrez Saint-Céneri-le-Gérei, l\'un des Plus Beaux Villages de France, source d\'inspiration pour de nombreux peintres',
    image: 'https://images.unsplash.com/photo-1599505289136-c53ac179cdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMHZpbGxhZ2UlMjBhcnRpc3QlMjBmcmFuY2V8ZW58MXx8fHwxNzY3NDYwMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Palette,
    distance: '15 km • 20 min'
  }
];

export function Activities() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Activités à Proximité</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nichée au cœur des Alpes Mancelles, la région offre une multitude d'activités pour tous les goûts
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