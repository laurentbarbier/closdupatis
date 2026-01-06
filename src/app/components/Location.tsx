import { MapPin, Navigation, Phone } from 'lucide-react';

export function Location() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Localisation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Le Clos du Pâtis est idéalement situé à Saint-Léonard-des-Bois, au cœur des Alpes Mancelles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2641.82!2d-0.0894036!3d48.3720659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDIyJzE5LjQiTiAwwrAwNScyMS45Ilc!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte du Clos du Pâtis"
            ></iframe>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    La Ribotière<br />
                    72130 Saint-Léonard-des-Bois<br />
                    Sarthe, France
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Accès</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Le Mans : 45 min (45 km)</li>
                    <li>• Alençon : 25 min (22 km)</li>
                    <li>• Fresnay-sur-Sarthe : 10 min (8 km)</li>
                    <li>• Paris : 2h30 (220 km)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-600 rounded-xl p-6 shadow-md text-white">
              <h3 className="text-xl mb-3">Informations Pratiques</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>Parking gratuit sur place</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>Boulangerie : 3 km</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>Supérette : 5 min (Saint-Léonard-des-Bois)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>Supermarché : 8 km (Fresnay-sur-Sarthe)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>Gare la plus proche : Le Mans (45 km)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span>Aéroport : Nantes (150 km)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}