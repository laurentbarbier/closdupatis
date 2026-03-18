import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

const AIRBNB_URL = 'https://www.airbnb.fr/rooms/1625316181577908591';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const RECAPTCHA_SITE_KEY = (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string) || '';
  const FORMSPREE_ID = (import.meta.env.VITE_FORMSPREE_ID as string) || '';

  // Dynamically load reCAPTCHA script when a site key is provided
  const loadRecaptchaScript = (siteKey: string) => {
    return new Promise<void>((resolve, reject) => {
      if (!siteKey) return resolve();
      const existing = document.querySelector(`script[src*="recaptcha"]`);
      if (existing) return resolve();
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    if (RECAPTCHA_SITE_KEY) loadRecaptchaScript(RECAPTCHA_SITE_KEY).catch(() => {});
  }, [RECAPTCHA_SITE_KEY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let payload: Record<string, any> = { ...formData };

      // Get reCAPTCHA token if site key is configured
      if (RECAPTCHA_SITE_KEY && (window as any).grecaptcha) {
        try {
          const token: string = await new Promise((resolve, reject) => {
            (window as any).grecaptcha.ready(() => {
              (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
                .then((tk: string) => resolve(tk))
                .catch(reject);
            });
          });
          if (token) payload['g-recaptcha-response'] = token;
        } catch (err) {
          console.error('reCAPTCHA error:', err);
          // Continue anyway, let Formspree handle it
        }
      }

      console.log('Sending form with payload:', payload);

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const responseText = await res.text();
      console.log('Formspree response status:', res.status);
      console.log('Formspree response:', responseText);

      if (!res.ok) {
        throw new Error(`Formspree error (${res.status}): ${responseText}`);
      }
      alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error:', err);
      alert('Une erreur est survenue lors de l\'envoi, veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nous Contacter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Intéressé par le Patis ? N'hésitez pas à nous contacter pour plus d'informations ou une réservation
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="rounded-2xl border border-[#FFD3DC] bg-[#FFF5F7] p-8">
            <h3 className="mb-3 text-gray-900">Réserver en ligne</h3>
            <p className="text-gray-600">
              L'annonce est maintenant disponible sur Airbnb si vous souhaitez réserver directement en ligne.
            </p>
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF385C] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#E31C5F]"
            >
              Voir l'annonce Airbnb
              <ExternalLink size={18} />
            </a>
          </div>

          <div>
            <h3 className="mb-6">Envoyer un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}