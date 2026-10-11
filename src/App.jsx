import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import ProductCategoriesPreview from './components/ProductCategoriesPreview';
import FabricSpecGuide from './components/FabricSpecGuide';
import WhyChooseUs from './components/WhyChooseUs';
import GlobalExportNetwork from './components/GlobalExportNetwork';
import CustomizationShowcase from './components/CustomizationShowcase';
import HomeCTA from './components/HomeCTA';
import AboutSection from './components/AboutSection';
import ProductsCatalogue from './components/ProductsCatalogue';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProcessPage from './components/ProcessPage';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState('');
  const [initialCatalogueCategory, setInitialCatalogueCategory] = useState('all');

  const openQuoteModal = (categoryName = '') => {
    setPreselectedCategory(typeof categoryName === 'string' ? categoryName : '');
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedCategory('');
  };

  const handleSelectCategoryFromHome = (categoryId) => {
    setInitialCatalogueCategory(categoryId);
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Persistent Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openQuoteModal={() => openQuoteModal('')} 
      />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <div className="fade-in">
            <Hero 
              openQuoteModal={() => openQuoteModal('')} 
              navigateToProducts={() => {
                setActivePage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
            <TrustIntro />
            <ProductCategoriesPreview 
              onSelectCategory={handleSelectCategoryFromHome} 
              openQuoteModal={openQuoteModal} 
            />
            {/* Fabric Sourcing & Technical Specification Hub */}
            <FabricSpecGuide openQuoteModal={openQuoteModal} />
            <WhyChooseUs openQuoteModal={() => openQuoteModal('')} />
            <GlobalExportNetwork openQuoteModal={() => openQuoteModal('')} />
            <CustomizationShowcase openQuoteModal={() => openQuoteModal('')} />
            <HomeCTA openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'about' && (
          <div className="fade-in">
            <AboutSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'products' && (
          <div className="fade-in">
            <ProductsCatalogue 
              initialCategoryId={initialCatalogueCategory}
              openQuoteModal={openQuoteModal} 
            />
          </div>
        )}

        {activePage === 'capabilities' && (
          <div className="fade-in">
            <CapabilitiesSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'process' && (
          <div className="fade-in">
            <ProcessPage openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'compliance' && (
          <div className="fade-in">
            <ComplianceSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="fade-in">
            <ContactSection openQuoteModal={() => openQuoteModal('')} />
          </div>
        )}
      </main>

      {/* Persistent Footer */}
      <Footer 
        setActivePage={setActivePage} 
        openQuoteModal={() => openQuoteModal('')} 
      />

      {/* Floating WhatsApp Desk (Bottom-Right) */}
      <WhatsAppButton />

      {/* Global Request a Quote Engine Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={closeQuoteModal} 
        preselectedCategory={preselectedCategory} 
      />

    </div>
  );
}
