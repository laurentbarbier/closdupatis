import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';
import houseImage from 'figma:asset/b72d0580f24e1b1ae3a81edc53413df639aa17da.png';

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={houseImage}
          alt="Clos du Pâtis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="mb-6">Clos du Pâtis</h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl opacity-95">
          Une maison de charme nichée au cœur de la campagne, où le temps s'arrête pour savourer les plaisirs simples de la vie
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