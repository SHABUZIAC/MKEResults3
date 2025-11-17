import { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProcessSection } from './components/ProcessSection';
import { BenefitsSection } from './components/BenefitsSection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onCTAClick={() => setIsContactFormOpen(true)} />
      <ProblemSection />
      <ProcessSection />
      <BenefitsSection />
      <Testimonials />
      <Pricing onCTAClick={() => setIsContactFormOpen(true)} />
      <FAQ />
      <FinalCTA onCTAClick={() => setIsContactFormOpen(true)} />
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
      <Footer />
    </div>
  );
}

export default App;
