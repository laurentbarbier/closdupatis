import { Bed, Bath, Square, Car, Wifi, Utensils, ShowerHead, Trees, Laptop, Tv, Flame } from 'lucide-react';

const amenities = [
  { icon: Bed, label: '3 chambres spacieuses' },
  { icon: Bed, label: '6 couchages dans 3 lits doubles' },
  { icon: Bath, label: '1 salle de bain' },
  { icon: ShowerHead, label: '1 chambre avec douche privée' },
  { icon: Square, label: '130 m² habitables' },
  { icon: Trees, label: '1 hectare de terrain' },
  { icon: Laptop, label: 'Espace télétravail dédié' },
  { icon: Tv, label: 'Espace Télévision'},
  { icon: Car, label: 'Garage et parking' },
  { icon: Wifi, label: 'WiFi haut débit' },
  { icon: Utensils, label: 'Cuisine équipée' },
  { icon: Flame, label: 'Authentique poêle' }
];

export function Amenities() {
  return (
    <section className="py-20 px-4 bg-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Équipements & Commodités</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tout le confort moderne dans un cadre traditionnel authentique
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