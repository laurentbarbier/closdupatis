import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import houseImage from '../../assets/b72d0580f24e1b1ae3a81edc53413df639aa17da.png';
import houseDistantImage from '../../assets/be773f37d336ea8f413110db55c8a19ed93fdd6e.png';
import lawnViewImage from '../../assets/32a6dcac1ec4f8d708d560623d1a848f516fa7c4.png';
import bedroomViewImage from '../../assets/4f697b73462cc3b8206a1c5b887f78bba913e7fb.png';

// Import des photos des pièces
import bureau1 from '../../assets/bureau_1.jpeg';
import chambre1_1 from '../../assets/chambre_1_1.jpeg';
import chambre1_2 from '../../assets/chambre_1_2.jpeg';
import chambre2_1 from '../../assets/chambre_2_1.jpeg';
import chambre2_2 from '../../assets/chambre_2_2.jpeg';
import chambreDouche1 from '../../assets/chambre_douche_1.jpeg';
import chambreDouche3 from '../../assets/chambre_douche_3.jpeg';
import salle1 from '../../assets/salle_1.jpeg';
import salle2 from '../../assets/salle_2.jpeg';
import salle4 from '../../assets/salle_4.jpeg';
import salle5 from '../../assets/salle_5.jpeg';
import salleBain1 from '../../assets/salle_de_bain_1.jpeg';
import salleBain2 from '../../assets/salle_de_bain_2.jpeg';
import salleBain3 from '../../assets/salle_de_bain_3.jpeg';
import cuisine1 from '../../assets/cusine_1.jpeg';
import cuisine2 from '../../assets/cuisine_2.jpeg';
import salon1 from '../../assets/salon_1.jpeg';
import salon3 from '../../assets/salon_3.jpeg';

type Category = 'exterieur' | 'salon' | 'cuisine' | 'bureau' | 'chambre1' | 'chambre2' | 'chambre-douche' | 'salle-bain' | 'all';

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  isLocal: boolean;
}

const allImages: GalleryImage[] = [
  // Extérieur
  {
    src: houseImage,
    alt: 'Le Patis - Façade principale',
    category: 'exterieur',
    isLocal: true
  },
  {
    src: houseDistantImage,
    alt: 'Le Patis - Vue du jardin',
    category: 'exterieur',
    isLocal: true
  },
  {
    src: lawnViewImage,
    alt: 'Le Patis - Vue sur la pelouse',
    category: 'exterieur',
    isLocal: true
  },
  {
    src: bedroomViewImage,
    alt: 'Le Patis - Vue depuis une chambre',
    category: 'exterieur',
    isLocal: true
  },
  // Bureau
  {
    src: bureau1,
    alt: 'Bureau - Espace de travail',
    category: 'bureau',
    isLocal: true
  },
  // Salon & Salle
  {
    src: salon1,
    alt: 'Salon - Espace détente',
    category: 'salon',
    isLocal: true
  },
  {
    src: salon3,
    alt: 'Salon - Ambiance cosy',
    category: 'salon',
    isLocal: true
  },
  {
    src: salle1,
    alt: 'Salle - Espace repas',
    category: 'salon',
    isLocal: true
  },
  {
    src: salle2,
    alt: 'Salle - Vue détail',
    category: 'salon',
    isLocal: true
  },
  {
    src: salle4,
    alt: 'Salle - Détail décoration',
    category: 'salon',
    isLocal: true
  },
  {
    src: salle5,
    alt: 'Salle - Vue générale',
    category: 'salon',
    isLocal: true
  },
  // Cuisine
  {
    src: cuisine1,
    alt: 'Cuisine - Vue générale',
    category: 'cuisine',
    isLocal: true
  },
  {
    src: cuisine2,
    alt: 'Cuisine - Détail équipements',
    category: 'cuisine',
    isLocal: true
  },
  // Chambre 1
  {
    src: chambre1_1,
    alt: 'Chambre 1 - Lit principal',
    category: 'chambre1',
    isLocal: true
  },
  {
    src: chambre1_2,
    alt: 'Chambre 1 - Vue générale',
    category: 'chambre1',
    isLocal: true
  },
  // Chambre 2
  {
    src: chambre2_1,
    alt: 'Chambre 2 - Espace chambre',
    category: 'chambre2',
    isLocal: true
  },
  {
    src: chambre2_2,
    alt: 'Chambre 2 - Détail lit',
    category: 'chambre2',
    isLocal: true
  },
  // Chambre avec Douche
  {
    src: chambreDouche1,
    alt: 'Chambre avec Douche - Vue 1',
    category: 'chambre-douche',
    isLocal: true
  },
  {
    src: chambreDouche3,
    alt: 'Chambre avec Douche - Vue 2',
    category: 'chambre-douche',
    isLocal: true
  },
  // Salle de Bain
  {
    src: salleBain1,
    alt: 'Salle de Bain - Douche',
    category: 'salle-bain',
    isLocal: true
  },
  {
    src: salleBain2,
    alt: 'Salle de Bain - Lavabo',
    category: 'salle-bain',
    isLocal: true
  },
  {
    src: salleBain3,
    alt: 'Salle de Bain - Douche',
    category: 'salle-bain',
    isLocal: true
  }
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Toutes les photos' },
  { value: 'exterieur', label: '🏞️ Extérieur' },
  { value: 'salon', label: '🍽️ Salon & Salle' },
  { value: 'cuisine', label: '🍳 Cuisine' },
  { value: 'bureau', label: '🖥️ Bureau' },
  { value: 'chambre1', label: '🛏️ Chambre 1' },
  { value: 'chambre2', label: '🛏️ Chambre 2' },
  { value: 'chambre-douche', label: '🚿 Chambre Douche' },
  { value: 'salle-bain', label: '🛁 Salle de Bain' }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  return (
    <>
      <section id="gallery" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Galerie Photos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez l'authenticité et le charme du Patis à travers ces images
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setSelectedImage(null);
                }}
                className={`px-4 py-2 rounded-full transition-all font-medium text-sm ${
                  activeCategory === cat.value
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Compteur de photos */}
          <div className="text-center mb-8 text-sm text-gray-500">
            {filteredImages.length} photo{filteredImages.length > 1 ? 's' : ''} dans cette catégorie
          </div>

          {/* Grille de photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(allImages.indexOf(image))}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Overlay avec catégorie */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune photo dans cette catégorie</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Bouton fermeture */}
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer la galerie"
          >
            ×
          </button>

          {/* Navigation */}
          <div className="absolute top-4 left-4 text-white text-sm">
            {selectedImage + 1} / {allImages.length}
          </div>

          {/* Image */}
          <div className="max-w-5xl w-full">
            <img
              src={allImages[selectedImage].src}
              alt={allImages[selectedImage].alt}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Description */}
          <div className="mt-4 text-white text-center text-sm">
            <p>{allImages[selectedImage].alt}</p>
          </div>

          {/* Boutons navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length);
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-colors"
            >
              ← Précédent
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % allImages.length);
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-colors"
            >
              Suivant →
            </button>
          </div>
        </div>
      )}
    </>
  );
}