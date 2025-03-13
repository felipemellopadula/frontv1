import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import PlatformPage from '../pages/PlatformPage';
import ResourcesPage from '../pages/ResourcesPage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage'; // Corrige o nome do arquivo
import Profile from '../pages/Profile';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/platform" element={<PlatformPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;