import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { History } from './components/History';
import { Academy } from './components/Academy';
import { Competition } from './components/Competition';
import { Schedule } from './components/Schedule';
import { Membership } from './components/Membership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <History />
        <Academy />
        <Competition />
        <Schedule />
        <Membership />
        <Contact />
        <Carousel />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
