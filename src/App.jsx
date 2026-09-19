import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TashaCostumesSection from './components/TashaCostumesSection';
import TashaDrapesSection from './components/TashaDrapesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import RentalFaq from './components/RentalFaq';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import FloatingContactBar from './components/FloatingContactBar';

export default function App() {
  const [activeBrand, setActiveBrand] = useState('all'); // 'all' | 'drapes' | 'costumes'
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenEnquiry = (product = null) => {
    setSelectedProduct(product);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedProduct(null);
  };

  const handleSelectBrand = (brand) => {
    setActiveBrand(brand);
    setTimeout(() => {
      const targetId = brand === 'costumes' ? 'costumes' : brand === 'drapes' ? 'drapes' : 'home';
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-noir-950 text-stone-200">
      {/* Top Navigation with Brand Switcher */}
      <Navbar 
        activeBrand={activeBrand} 
        setActiveBrand={handleSelectBrand} 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Hero Banner with Dual Brand Gateway */}
      <Hero 
        onSelectBrand={handleSelectBrand} 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* If 'all' or 'costumes', render Tasha Costumes Section */}
        {(activeBrand === 'all' || activeBrand === 'costumes') && (
          <TashaCostumesSection onOpenEnquiry={handleOpenEnquiry} />
        )}

        {/* If 'all' or 'drapes', render Tasha Drapes Section */}
        {(activeBrand === 'all' || activeBrand === 'drapes') && (
          <TashaDrapesSection onOpenEnquiry={handleOpenEnquiry} />
        )}

        {/* About Tasha by Sujitha */}
        <AboutSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Client & Community Reviews */}
        <Testimonials />

        {/* FAQs for Rentals & Sarees */}
        <RentalFaq />
      </main>

      {/* Footer with both logos, Instagram links, and Sydney contact details */}
      <Footer 
        onSelectBrand={handleSelectBrand} 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Interactive Booking & Purchase Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={handleCloseEnquiry} 
        selectedItem={selectedProduct} 
      />

      {/* Floating Instant Contact Bar */}
      <FloatingContactBar onOpenEnquiry={handleOpenEnquiry} />
    </div>
  );
}
