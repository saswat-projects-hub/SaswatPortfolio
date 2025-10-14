import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ProductManagementSection from './components/ProductManagementSection';
import DataAnalyticsSection from './components/DataAnalyticsSection';
import MechanicalSection from './components/MechanicalSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'product':
        return <ProductManagementSection />;
      case 'data':
        return <DataAnalyticsSection />;
      case 'mechanical':
        return <MechanicalSection />;
      case 'education':
        return <EducationSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderActiveSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;