import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/ContactUs";
import StrategicPlanningServices from "./components/layout/Single_Service";
import Auth from "./pages/Auth";

import { useAuth } from "./context/AuthContext";

// Main landing page — all sections stacked vertically
function LandingPage() {
  const { token } = useAuth();

  return (
    <>
      <HomePage />
      {token && <Services />}
      <AboutPage />
      {token && <ContactUs />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* Main single-page with all sections */}
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/strategic-planning"
            element={
              <ProtectedRoute>
                <StrategicPlanningServices />
              </ProtectedRoute>
            }
          /> 
          {/* Individual standalone pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/services" 
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            } 
          />

          {/* Sub-pages that need their own route */}
          <Route 
            path="/service/:id" 
            element={
              <ProtectedRoute>
                <StrategicPlanningServices />
              </ProtectedRoute>
            } 
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;