import { ArrowRight } from "lucide-react";
import HeroVideo from "../assets/video.mp4";

export default function Hero() {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 backdrop-blur-[1px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 xs:px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
          Aroma Haven
        </h2>
        <p className="text-lg xs:text-xl sm:text-2xl text-amber-100 mb-6 sm:mb-8 font-light">
          Inspired by the rich aroma of Ceylon’s finest beans
        </p>

        <button
          onClick={scrollToGallery}
          className="group inline-flex items-center space-x-1 xs:space-x-2 bg-amber-900 hover:bg-amber-700 text-white px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-full text-base xs:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl"
        >
          <span>Explore Menu</span>
          <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
