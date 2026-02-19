import { Bed, Bath, Square, Car, Wifi, Utensils, ShowerHead, Trees, Laptop, Tv, Sofa, Umbrella } from 'lucide-react';

const amenities = [
  { icon: Bed, label: '3 chambres spacieuses' },
  { icon: Bed, label: '2 lits 140×190 cm' },
  { icon: Bed, label: '1 lit 160×190 cm' },
  { icon: Bed, label: '1 lit 1 personne' },
  { icon: Bath, label: '1 salle de bain 9 m²' },
  { icon: ShowerHead, label: 'Douche privée en chambre' },
  { icon: Trees, label: '1 hectare de terrain' },
  { icon: Car, label: '2 garages (2 m - 2,20 m)' },
  { icon: Sofa, label: 'Séjour 30 m² + Clic-Clac' },
  { icon: Tv, label: 'Salon avec canapé et TV' },
  { icon: Utensils, label: 'Cuisine équipée 9 m²' },
  { icon: Wifi, label: 'WiFi haut débit' },
  { icon: Laptop, label: 'Bureau avec WiFi dédié' },
  { icon: Umbrella, label: 'Terrasse couverte 30 m²' },
];

export function Amenities() {
  return (
    <section className="py-20 px-4 bg-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Équipements & Confort</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tout le confort pour un séjour en famille dans un cadre authentique
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-emerald-100 text-emerald-700">
                <amenity.icon size={24} />
              </div>
              <p className="text-gray-700">{amenity.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}