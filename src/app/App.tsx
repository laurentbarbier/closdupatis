import { Hero } from './components/Hero';
import { ReviewHighlight } from './components/ReviewHighlight';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { Activities } from './components/Activities';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ReviewHighlight />
      <Features />
      <Gallery />
      <Amenities />
      <Activities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}