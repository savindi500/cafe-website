import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LK.png";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Coffee & Co. Logo"
              className="w-20 h-20 object-contain"
            />

            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Aroma Haven
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-amber-700"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-amber-700"
                  : "text-white hover:text-amber-200"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-amber-700"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-amber-700"
                  : "text-white hover:text-amber-200"
              }`}
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 font-medium"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
