import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';
import houseImage from '../../assets/b72d0580f24e1b1ae3a81edc53413df639aa17da.png';

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={houseImage}
          alt="Le Patis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-6 inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
          <p className="text-sm md:text-base font-semibold">🌿 Grand ouverture : 1ier mai 2026</p>
        </div>
        <h1 className="mb-6">Le Patis</h1>
        <p className="mb-4 max-w-2xl mx-auto text-xl md:text-2xl font-semibold opacity-95">
          Gîte 6 à 8 personnes au cœur des Alpes Mancelles
        </p>
        <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl opacity-95">
          En pleine campagne, situé au bout d'une impasse... Calme assuré !
        </p>
        <button
          onClick={scrollToFeatures}
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Découvrir
          <ChevronDown size={20} />
        </button>
      </div>
      
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
}