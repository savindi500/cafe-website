import Latte from "../assets/lk.png";
import Pastry from "../assets/lk.png";
import ArtCoffee from "../assets/lk.png";
import Interior from "../assets/lk.png";

export default function Gallery() {
  const images = [
    {
      img: Latte,
      title: "Signature Latte",
      price: "RS 890.00",
      desc: "Rich espresso with velvety steamed milk.",
    },
    {
      img: Pastry,
      title: "Fresh Pastries",
      price: "RS 1160.00",
      desc: "Handcrafted daily with premium ingredients.",
    },
    {
      img: ArtCoffee,
      title: "Artisan Coffee",
      price: "RS 1700.00",
      desc: "Expertly brewed specialty coffee.",
    },
    {
      img: Interior,
      title: "Cozy Interior",
      price: "Enjoy Here",
      desc: "Relax and sip in our warm café space.",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Menu Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best flavors crafted with passion
          </p>
        </div>

        {/* 2 on mobile | 4 on large */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-square cursor-pointer transform transition-transform hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <div className="p-3 sm:p-4">
                  <h3 className="text-white text-sm sm:text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-amber-300 text-xs sm:text-sm font-medium">
                    {item.price}
                  </p>
                  <p className="text-gray-200 text-[10px] sm:text-xs mt-1">
                    {item.desc}
                  </p>

                  {/* Simple Button */}
                  <button
                    className="mt-3 bg-amber-600 hover:bg-amber-700 text-white w-full py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
