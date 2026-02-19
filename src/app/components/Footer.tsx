import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="mb-2">Le Patis</h3>
        <p className="text-gray-400 mb-4">
          Gîte 6 à 8 personnes au cœur des Alpes Mancelles
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <span>Créé avec</span>
          <Heart size={16} className="text-red-500 fill-current" />
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}