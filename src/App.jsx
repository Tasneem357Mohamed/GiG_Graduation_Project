import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer/Footer";

import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/ContactUs";
import StrategicPlanningServices from "./components/layout/Single_Service";

// Main landing page — all sections stacked vertically
function LandingPage() {
  return (
    <>
      <HomePage />
      <Services />
      <AboutPage />
      <ContactUs />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Main single-page with all sections */}
        <Route path="/" element={<LandingPage />} />
        <Route
        path="/strategic-planning"
        element={<StrategicPlanningServices />}
      /> 
        {/* Individual standalone pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Sub-pages that need their own route */}
        <Route path="/service/:id" element={<StrategicPlanningServices />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;