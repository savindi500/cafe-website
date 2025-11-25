import { useState } from 'react'
import Gallery from "./componets/Gallery";
import Footer from "./componets/Footer";
import About from "./componets/About";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";

function App() {
  

  return (
    
      <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
      </div>
  );
}

export default App
