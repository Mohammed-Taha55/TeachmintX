import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Accordion from "./components/Acccordion";
import Footer from "./components/Footer";
import Login from "./components/Login";

export default function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";
 return (
    <>
      {!hideNavbar && <Navbar />}

      <main className="pt-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <Accordion />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}