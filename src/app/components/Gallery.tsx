import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import houseImage from '../../assets/b72d0580f24e1b1ae3a81edc53413df639aa17da.png';
import houseDistantImage from '../../assets/be773f37d336ea8f413110db55c8a19ed93fdd6e.png';
import lawnViewImage from '../../assets/32a6dcac1ec4f8d708d560623d1a848f516fa7c4.png';
import bedroomViewImage from '../../assets/4f697b73462cc3b8206a1c5b887f78bba913e7fb.png';

const images = [
  {
    src: houseImage,
    alt: 'Le Patis - Façade principale',
    isLocal: true
  },
  {
    src: houseDistantImage,
    alt: 'Le Patis - Vue du jardin',
    isLocal: true
  },
  {
    src: lawnViewImage,
    alt: 'Le Patis - Vue sur la pelouse',
    isLocal: true
  },
  {
    src: bedroomViewImage,
    alt: 'Le Patis - Vue depuis une chambre',
    isLocal: true
  },
  {
    src: 'https://images.unsplash.com/photo-1759109220887-6768eda42293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwd29vZCUyMHN0b3ZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3NDU5Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Poêle à bois bleu',
    isLocal: false
  },
  {
    src: 'https://images.unsplash.com/photo-1759691555010-7f3f8674d2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbGl2aW5nJTIwcm9vbSUyMHRlbGV2aXNpb258ZW58MXx8fHwxNzY3NDU5Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Coin salon cosy avec télévision',
    isLocal: false
  },
  {
    src: 'https://images.unsplash.com/photo-1759156232717-2c0b8fac94db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBjb3VudHJ5JTIwa2l0Y2hlbnxlbnwxfHx8fDE3Njc0NTkzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Cuisine rustique équipée',
    isLocal: false
  },
  {
    src: 'https://images.unsplash.com/photo-1606796913629-e870d68d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGJlZHJvb20lMjBjb3p5fGVufDF8fHx8MTc2NzQ1OTM5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Chambre confortable',
    isLocal: false
  },
  {
    src: 'https://images.unsplash.com/photo-1600493504091-8fb1555d2e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaG91c2UlMjBiZWRyb29tfGVufDF8fHx8MTc2NzQ1OTM5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Chambre spacieuse et chaleureuse',
    isLocal: false
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Galerie Photos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez l'authenticité et le charme du Patis à travers ces images
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                {image.isLocal ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-5xl w-full">
            {images[selectedImage].isLocal ? (
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <ImageWithFallback
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}