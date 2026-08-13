import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mountain, Waves, Bike, Compass, Landmark, Droplets, TreePine } from 'lucide-react';

const activities = [
  {
    title: 'Randonnées Balisées',
    description: 'Sentiers très nombreux à proximité, notamment autour de Saint-Léonard-des-Bois, avec des panoramas exceptionnels sur les Alpes Mancelles et la vallée de la Sarthe',
    // Photo reelle de Saint-Leonard-des-Bois, Wikimedia Commons, CC BY-SA 3.0, Gilles Guillamot
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Saint-L%C3%A9onard-des-Bois_%2C_un_village_en_fond_de_vall%C3%A9e_dans_les_Alpes_Mancelles%2C_dans_un_cadre_tr%C3%A8s_escarp%C3%A9_qui_en_effet%2C_peut_rappeler_les_Alpes._-_panoramio.jpg/1280px-Saint-L%C3%A9onard-des-Bois_%2C_un_village_en_fond_de_vall%C3%A9e_dans_les_Alpes_Mancelles%2C_dans_un_cadre_tr%C3%A8s_escarp%C3%A9_qui_en_effet%2C_peut_rappeler_les_Alpes._-_panoramio.jpg',
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
    distance: 'À proximité'
  },
  {
    title: 'Domaine du Gasseau',
    description: 'Parc d\'aventure avec accrobranches, tyroliennes, parcours dans les arbres et nombreuses animations pour toute la famille',
    image: 'https://images.unsplash.com/photo-1544735716-0af8374397b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVldG9wJTIwYWR2ZW50dXJlJTIwemlwJTIwbGluZXxlbnwxfHx8fDE3Njc0NjAzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: TreePine,
    distance: 'Sur place'
  },
  {
    title: 'Villages et Patrimoine Local',
    description: 'Flânez à Saint-Céneri-le-Gérei, classé parmi les Plus Beaux Villages de France, et découvrez le bourg de Saint-Léonard-des-Bois, au cœur des Alpes Mancelles',
    // Photo reelle de Saint-Ceneri-le-Gerei, Wikimedia Commons, CC BY-SA 3.0, Gilles Guillamot
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Le_beau_village_de_Saint-C%C3%A9n%C3%A9ri-le-G%C3%A9rei_-_panoramio.jpg/1280px-Le_beau_village_de_Saint-C%C3%A9n%C3%A9ri-le-G%C3%A9rei_-_panoramio.jpg',
    icon: Landmark,
    distance: 'À proximité'
  },
  {
    title: 'VTT & Cyclotourisme',
    description: 'Parcours VTT et station trail à travers les Alpes Mancelles et la campagne sarthoise, idéal pour les amateurs de deux-roues',
    image: 'https://images.unsplash.com/photo-1763537351494-b849a2d6b51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzY3Mzg3Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Bike,
    distance: 'Sur place'
  },
  {
    title: 'Étang de Sillé-le-Guillaume',
    description: 'Base de loisirs avec plage aménagée au bord de l\'étang de Sillé, parfaite pour se baigner et passer une journée en famille',
    // Photo reelle de l'etang de Sille-le-Guillaume, Wikimedia Commons, CC0, Havang(nl)
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sill%C3%A9-le-Guillaume_%28Sarthe%29_%C3%A9tang_de_Sill%C3%A9_%2801%29.jpg/1280px-Sill%C3%A9-le-Guillaume_%28Sarthe%29_%C3%A9tang_de_Sill%C3%A9_%2801%29.jpg',
    icon: Droplets,
    distance: '25 km • 30 min'
  },
  {
    title: 'Centre Équestre',
    description: 'Centre équestre à proximité pour des balades à cheval et découvrir la région à un rythme plus lent',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJpZGluZyUyMGNvdW50cnl8ZW58MXx8fHwxNzY3NDYwMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Compass,
    distance: 'À proximité'
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