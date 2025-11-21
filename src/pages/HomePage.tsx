import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ImageGallery } from '../components/ImageGallery';
import { Products } from '../components/Products';
import { MissionVision } from '../components/MissionVision';
import { CoreValues } from '../components/CoreValues';
import { VideoShowcase } from '../components/VideoShowcase';
import { Partners } from '../components/Partners';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ImageGallery />
      <Products />
      <MissionVision />
      <CoreValues />
      <VideoShowcase />
      <Partners />
      <Contact />
    </>
  );
}
