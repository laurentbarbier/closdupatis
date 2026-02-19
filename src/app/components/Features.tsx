import { Home, TreePine, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Ancienne Fermette Rénovée',
    description: 'Une bâtisse traditionnelle entièrement rénovée alliant charme authentique et confort moderne, restaurée avec soin.'
  },
  {
    icon: TreePine,
    title: 'Parc Arboré d\'un Hectare',
    description: 'Un environnement verdoyant exceptionnel, terrasse couverte de 30 m² et salon de jardin pour profiter de la nature.'
  },
  {
    icon: Sparkles,
    title: 'Calme Assuré',
    description: 'Situé au bout d\'une impasse, loin de l\'agitation urbaine, un havre de paix et de sérénité garanti.'
  },
  {
    icon: Users,
    title: 'Idéal pour Familles & Groupes',
    description: 'Capacité 6 à 8 personnes avec espaces généreux et confortables, parfait pour réunir famille et amis.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Les Atouts du Patis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait du Patis un lieu unique et exceptionnel aux Alpes Mancelles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
