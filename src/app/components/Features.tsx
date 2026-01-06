import { Home, TreePine, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Authenticité Préservée',
    description: 'Une bâtisse traditionnelle restaurée avec soin, alliant charme d\'antan et confort moderne.'
  },
  {
    icon: TreePine,
    title: 'Nature Environnante',
    description: 'Un cadre verdoyant exceptionnel avec jardin arboré, parfait pour se ressourcer et se reconnecter à la nature.'
  },
  {
    icon: Users,
    title: 'Espaces Généreux',
    description: 'Des pièces spacieuses et lumineuses, idéales pour accueillir famille et amis dans un confort absolu.'
  },
  {
    icon: Sparkles,
    title: 'Tranquillité Absolue',
    description: 'Loin de l\'agitation urbaine, profitez d\'un havre de paix où le calme et la sérénité règnent.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Les Atouts de la Maison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait du Clos du Loïs un lieu unique et exceptionnel
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
