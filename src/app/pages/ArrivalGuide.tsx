import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Footer } from '../components/Footer';
import { AlertCircle, Wifi, ChefHat, Droplet, Trees, MapPin, Activity, AlertTriangle } from 'lucide-react';

export function ArrivalGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Bienvenue au Patis</h1>
          <p className="text-emerald-100">Guide d'arrivée et d'installation</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Info Alert */}
        <Alert className="mb-8 border-emerald-200 bg-emerald-50">
          <AlertCircle className="h-4 w-4 text-emerald-600" />
          <AlertDescription className="text-emerald-900">
            Nous sommes ravis de vous accueillir ! Cette page contient toutes les informations essentielles pour un séjour confortable.
          </AlertDescription>
        </Alert>

        {/* Accordion with all sections */}
        <Accordion type="single" collapsible className="w-full">
          {/* WiFi Access */}
          <AccordionItem value="wifi" className="border-slate-200">
            <AccordionTrigger className="text-lg font-semibold hover:bg-slate-50 rounded-lg px-4">
              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-blue-600" />
                <span>Accès WiFi</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-slate-600 mb-2">Réseau WiFi :</p>
                  <p className="font-mono text-lg font-bold text-blue-900 mb-4">Clos_du_Patis</p>
                  
                  <p className="text-sm text-slate-600 mb-2">Mot de passe :</p>
                  <p className="font-mono text-lg font-bold text-blue-900">ClosDuPatis2024!</p>
                </div>
                <p className="text-sm text-slate-600">
                  Le routeur WiFi est situé dans le couloir principal. Si vous rencontrez des problèmes de connexion, essayez de redémarrer le routeur en appuyant sur le bouton de reset pendant 10 secondes.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Kitchen Instructions */}
          <AccordionItem value="kitchen" className="border-slate-200">
            <AccordionTrigger className="text-lg font-semibold hover:bg-slate-50 rounded-lg px-4">
              <div className="flex items-center gap-3">
                <ChefHat className="h-5 w-5 text-orange-600" />
                <span>Consignes Cuisine</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Équipements</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Lave-vaisselle : chargez par le bas, utilisez les pastilles situées sous l'évier</li>
                    <li>Lave-linge : situé dans le placard sous l'escalier (dosage : 1/3 du flacon de lessive)</li>
                    <li>Four : préchauffage 15-20 minutes, température maximale 200°C recommandée</li>
                    <li>Cuisinière gaz : allumez en tournant le bouton et en appuyant vers l'intérieur</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Après utilisation</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Nettoyez la vaisselle ou remplissez le lave-vaisselle</li>
                    <li>Vérifiez que le four et les plaques sont éteints avant de partir</li>
                    <li>Fermez les fenêtres de la cuisine en cas de pluie</li>
                  </ul>
                </div>

                <Alert className="border-orange-200 bg-orange-50 mt-4">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-900">
                    En cas d'odeur de gaz, ouvrez immédiatement les fenêtres et contactez-nous.
                  </AlertDescription>
                </Alert>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Bedding & Linens */}
          <AccordionItem value="bedding" className="border-slate-200">
            <AccordionTrigger className="text-lg font-semibold hover:bg-slate-50 rounded-lg px-4">
              <div className="flex items-center gap-3">
                <Droplet className="h-5 w-5 text-purple-600" />
                <span>Draps et Linge</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Au Patis</h4>
                  <p className="text-slate-700 mb-3">
                    Les draps, serviettes et housses de couette sont fournis et changés régulièrement. Vous les trouverez :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li><strong>Draps et housses :</strong> armoire du palier du 1er étage (à droite de l'escalier)</li>
                    <li><strong>Serviettes de toilette :</strong> placard de la salle de bain (étagère du bas)</li>
                    <li><strong>Gants de toilette :</strong> panier sous le lavabo</li>
                    <li><strong>Chiffons de nettoyage :</strong> tiroir sous l'évier de la cuisine</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Laver votre linge</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    Si vous souhaitez laver votre linge personnel :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                    <li>Lave-linge dans le placard sous l'escalier</li>
                    <li>Lessive fournie (ou utiliser la vôtre)</li>
                    <li>Sèche-linge disponible dans la buanderie</li>
                    <li>Température recommandée : 30-40°C pour délicats</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Garden & Child Safety */}
          <AccordionItem value="garden" className="border-slate-200">
            <AccordionTrigger className="text-lg font-semibold hover:bg-slate-50 rounded-lg px-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span>Jardin & Sécurité Enfants</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-4">
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-900 font-semibold">
                    Le jardin n'est pas entièrement clôturé. Une vigilance constante est requise avec les enfants.
                  </AlertDescription>
                </Alert>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Zones à surveiller</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li><strong>Bassin :</strong> bassin d'eau peu profond, ne pas laisser les enfants seuls à proximité</li>
                    <li><strong>Allée principale :</strong> accès à la route - barrière présente mais à vérifier</li>
                    <li><strong>Zone boisée :</strong> arbres avec branches basses - attention aux chutes</li>
                    <li><strong>Outils :</strong> tous rangés dans l'abri de jardin fermé à clé</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Profiter du jardin</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Transats et chaises disponibles - rangez-les le soir</li>
                    <li>Aire de jeux pour enfants (balançoire, toboggan) - vérifiez régulièrement</li>
                    <li>Table de pique-nique: parfait pour les repas en plein air</li>
                    <li>Eclairage extérieur : interrupteur à côté de la porte arrière</li>
                  </ul>
                </div>

                <Alert className="border-green-200 bg-green-50">
                  <AlertCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-900">
                    Merci de ranger les équipements de jeux le soir et de fermer les portes du jardin.
                  </AlertDescription>
                </Alert>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Nearby Activities & Services */}
          <AccordionItem value="activities" className="border-slate-200">
            <AccordionTrigger className="text-lg font-semibold hover:bg-slate-50 rounded-lg px-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-green-600" />
                <span>Activités & Adresses Utiles</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-6">
                {/* Restaurants */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Restaurants à Proximité</h4>
                  <div className="grid gap-3">
                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Les Fougères</CardTitle>
                        <CardDescription>Cuisine française traditionnelle</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Route de la Vallée, 74210 Praz-sur-Arly</p>
                        <p className="mt-1">📞 +33 (0)4 50 21 34 54</p>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">La Petite Maison</CardTitle>
                        <CardDescription>Spécialités savoyardes</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Centre du village, 74210 Praz-sur-Arly</p>
                        <p className="mt-1">📞 +33 (0)4 50 21 31 45</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Shopping */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Commerces Essentiels</h4>
                  <div className="grid gap-3">
                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Carrefour Praz-sur-Arly</CardTitle>
                        <CardDescription>Supermarché</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Place du Marché, 74210 Praz-sur-Arly</p>
                        <p className="mt-1">Horaires : 8h30 - 19h30 (dimanche 9h - 13h)</p>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Boulangerie Gérard</CardTitle>
                        <CardDescription>Pain et pâtisseries</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Rue Principale, 74210 Praz-sur-Arly</p>
                        <p className="mt-1">📞 Ouverte 6h30 - 19h (fermée mercredi)</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Activités de Proximité</h4>
                  <div className="grid gap-3">
                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">🏔️ Randonnées</CardTitle>
                        <CardDescription>Alpes Mancelles</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Nombreux sentiers balisés (30 min à 2h de marche)</p>
                        <p className="mt-1">Officeducisme.com : cartes et infos randos</p>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">👨‍👩‍👧‍👦 Parc de Loisirs</CardTitle>
                        <CardDescription>Pour les enfants</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Parc Aventure des Alpes (5 km)</p>
                        <p className="mt-1">📞 +33 (0)4 50 21 45 67 - Web: parcaventure.fr</p>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">🏊 Piscine</CardTitle>
                        <CardDescription>Saison estivale</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Piscine municipale de Praz-sur-Arly (2 km)</p>
                        <p className="mt-1">Ouverture juin à août</p>
                      </CardContent>
                    </Card>

                    <Card className="border-slate-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">🎿 Sports d'Hiver</CardTitle>
                        <CardDescription>Saison hivernale</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600">
                        <p>Station de ski Megève (15 km)</p>
                        <p className="mt-1">📞 +33 (0)4 50 21 27 28</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Services d'Urgence</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <p><strong>Médecin :</strong> Dr. Dubois - +33 (0)4 50 21 23 45 (village)</p>
                    <p><strong>Pharmacie :</strong> Pharmacie Centrale - +33 (0)4 50 21 12 34</p>
                    <p><strong>Ambulance/Urgences :</strong> 15 (SAMU) ou 112</p>
                    <p><strong>Police :</strong> +33 (0)4 50 78 02 00 (Praz-sur-Arly)</p>
                    <p><strong>Pompiers :</strong> 18</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* General Information */}
          <AccordionItem value="general" className="border-slate-200">
            <AccordionTrigger className="text-lg font-semibold hover:bg-slate-50 rounded-lg px-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-slate-600" />
                <span>Informations Pratiques</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Accès & Clés</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Clé cachée dans la boîte à code : 4B2R (à la porte principale)</li>
                    <li>Clé de secours chez le voisin (Monsieur Martin) en cas d'oubli</li>
                    <li>Parking devant la maison (3 places)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Chauffage & Climatisation</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Thermostat principal au rez-de-chaussée (cible : 21°C recommandé)</li>
                    <li>Radiateurs individuels dans les chambres (à gauche de la porte)</li>
                    <li>Pompe à chaleur pour la climatisation (été)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Eau Chaude</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Ballon d'eau chaude dans le placard sous l'escalier</li>
                    <li>Temps de chauffe : 15-20 minutes après mise en marche</li>
                    <li>Température recommandée : 60°C (curseur sur le ballon)</li>
                  </ul>
                </div>

                <Alert className="border-slate-300 bg-slate-50">
                  <AlertCircle className="h-4 w-4 text-slate-600" />
                  <AlertDescription className="text-slate-700">
                    Disjoncteur principal près de la porte d'entrée en cas de problème électrique.
                  </AlertDescription>
                </Alert>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Contact & Checkout */}
          <AccordionItem value="contact" className="border-slate-200">
            <AccordionTrigger className="text-lg font-semibold hover:bg-slate-50 rounded-lg px-4">
              <div className="flex items-center gap-3">
                <Trees className="h-5 w-5 text-emerald-600" />
                <span>Avant de Partir</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Checklist de Départ</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>☐ Éteindre le chauffage/climatisation</li>
                    <li>☐ Fermer tous les radiateurs sauf le rez-de-chaussée</li>
                    <li>☐ Vider la vaisselle ou remplir le lave-vaisselle</li>
                    <li>☐ Fermer les fenêtres et les portes</li>
                    <li>☐ Éteindre l'éclairage intérieur et extérieur</li>
                    <li>☐ Ranger les transats et chaises du jardin</li>
                    <li>☐ Vérifier que le four et les plaques sont éteints</li>
                    <li>☐ Laisser la clé à la place prévue ou au voisin</li>
                    <li>☐ Prendre des photos du compteur de gaz et électricité</li>
                  </ul>
                </div>

                <Alert className="border-emerald-200 bg-emerald-50">
                  <AlertCircle className="h-4 w-4 text-emerald-600" />
                  <AlertDescription className="text-emerald-900">
                    <strong>Merci !</strong> Nous vous remercions de votre visite. Nous apprécions votre respect de la maison et attendons votre retour avec plaisir !
                  </AlertDescription>
                </Alert>

                <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Nous Contacter</h4>
                  <p className="text-slate-700 text-sm">
                    <strong>Laurent & Elisabeth</strong><br/>
                    📞 +33 (0)6 12 34 56 78<br/>
                    📧 info@closdupatis.com
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
