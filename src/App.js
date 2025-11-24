import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componenti esistenti
import NavBar from "./Components/NavBar";
import Foto from "./Components/Foto";
import Post from "./Components/Post";
import LogoInferiore from "./Components/LogoInferiore";
import Footer from "./Components/Footer";

// Nuova pagina Contatti
import Contatti from "./Components/Contatti";

function App() {
  return (
    <Router>
      {/* Navbar con Link a Home e Contatti */}
      <NavBar />
      
      {/* Rotte principali */}
      <Routes>
        {/* Pagina Home */}
        <Route
          path="/"
          element={
            <>
              <Foto />
              <Post />
              <LogoInferiore />
            </>
          }
        />

        {/* Pagina Contatti */}
        <Route path="/contatti" element={<Contatti />} />
      </Routes>

      {/* Footer sempre visibile */}
      <Footer />
    </Router>
  );
}

export default App;
