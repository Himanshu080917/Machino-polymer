import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SearchModal } from './components/SearchModal';
import { SampleRequestModal } from './components/SampleRequestModal';
import { ContactModal } from './components/ContactModal';

// Lazy-load page components
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const CompanyOverview = lazy(() => import('./pages/CompanyOverview'));

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedSampleGrade, setSelectedSampleGrade] = useState<string | undefined>(undefined);

  const handleOpenSampleModal = (gradeName?: string) => {
    setSelectedSampleGrade(gradeName);
    setIsSampleModalOpen(true);
  };

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F8FAF9] text-[#0F172A] flex flex-col selection:bg-[#FF5500] selection:text-white">
        
        {/* Global Navbar */}
        <Navbar
          onOpenContact={handleOpenContact}
        />

        {/* Page Content Flow */}
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="w-full min-h-[50vh] flex items-center justify-center">
                <div className="w-8 h-8 border-3 border-[#FF5500] border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenSampleModal={handleOpenSampleModal}
                    onOpenContact={handleOpenContact}
                  />
                }
              />
              <Route
                path="/about"
                element={<AboutUs onOpenContact={handleOpenContact} />}
              />
              <Route
                path="/about/company-overview"
                element={<CompanyOverview onOpenContact={handleOpenContact} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Cmd+K Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectGrade={() => {}}
          onRequestSample={handleOpenSampleModal}
        />

        {/* Sample Request & RFQ Modal */}
        <SampleRequestModal
          isOpen={isSampleModalOpen}
          onClose={() => setIsSampleModalOpen(false)}
          preselectedGrade={selectedSampleGrade}
        />

        {/* Interactive Start a Conversation / Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
