import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#090A0F]">
      <Navbar />
      <Hero />
      <About />
      <Books />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
