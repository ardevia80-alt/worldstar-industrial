import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { InquiryPopup } from './components/InquiryPopup';
import { Toaster } from './components/SimpleToast';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CataloguePage } from './pages/CataloguePage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { NewsPage } from './pages/NewsPage';
import { CareersPage } from './pages/CareersPage';
import { DiamanteGroupPage } from './pages/DiamanteGroupPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/diamante-group" element={<DiamanteGroupPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <InquiryPopup />
        <Toaster />
      </div>
    </Router>
  );
}