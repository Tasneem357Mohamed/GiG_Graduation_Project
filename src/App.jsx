import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer/Footer";

import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import Services from "./pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;