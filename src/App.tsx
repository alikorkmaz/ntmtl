import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Qualities } from "./pages/Qualities";
import { Sectors } from "./pages/Sectors";
import { Contact } from "./pages/Contact";

// Sektör bileşenlerini içe aktar
import { AerospaceDefense } from "./pages/sectors/AerospaceDefense";
import { OilGas } from "./pages/sectors/OilGas";
import { Energy } from "./pages/sectors/Energy";
import { Automotive } from "./pages/sectors/Automotive";
import { Medical } from "./pages/sectors/Medical";
import { Food } from "./pages/sectors/Food";
import { MarineConstruction } from "./pages/sectors/MarineConstruction";

import { AppNavbar } from "./components/AppNavbar";
import { AppFooter } from "./components/AppFooter";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      <main className="container mx-auto px-4">
        <AppNavbar />
        <div className="flex flex-col items-center justify-center">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/qualities" element={<Qualities />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/sectors/aerospace-defense" element={<AerospaceDefense />} />
              <Route path="/sectors/oil-gas" element={<OilGas />} />
              <Route path="/sectors/energy" element={<Energy />} />
              <Route path="/sectors/automotive" element={<Automotive />} />
              <Route path="/sectors/medical" element={<Medical />} />
              <Route path="/sectors/food" element={<Food />} />
              <Route path="/sectors/marine-construction" element={<MarineConstruction />} />
            </Routes>
          </Router>
        </div>
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
