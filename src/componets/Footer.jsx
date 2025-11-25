import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

import FooterLogo from "../assets/lk.png";
import FooterBeans from "../assets/footer.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundImage: `url(${FooterBeans})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "100% auto",
      }}
      className="bg-[#512615] text-white pt-16 pb-36 sm:pb-44 md:pb-52 lg:pb-64"
    >
      {/* Responsive Breakpoint Override */}
      <style>
        {`
          @media (min-width: 768px) {
            #footer {
              background-size: cover; /* 📌 tablet & desktop */
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <img
              src={FooterLogo}
              alt="Logo"
              className="w-20 mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Aroma Haven
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your neighborhood coffee sanctuary, serving exceptional brews and
              creating memorable moments since 2018.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex justify-center md:justify-start items-center gap-2">
                <MapPin className="text-amber-400 w-5 h-5" />
                123 Coffee Street, Downtown, City
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <Phone className="text-amber-400 w-5 h-5" />
                (94) 123-4567
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="text-amber-400 w-5 h-5" />
                hello@aromahaven.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-gray-400">
              <p>Mon - Fri: 7:00 AM - 8:00 PM</p>
              <p>Saturday: 8:00 AM - 9:00 PM</p>
              <p>Sunday: 8:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Aroma Haven. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white-400 hover:text-amber-400">
              <Facebook />
            </a>
            <a href="#" className="text-white-400 hover:text-amber-400">
              <Instagram />
            </a>
            <a href="#" className="text-white-400 hover:text-amber-400">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
