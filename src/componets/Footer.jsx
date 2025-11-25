import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

import FooterLogo from "../assets/lk.png";
import FooterBeans from "../assets/footer3.png";

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
      <style>
        {`
          @media (min-width: 768px) {
            #footer {
              background-size: cover;
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
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#dfc27c" }}
            >
              Aroma Haven
            </h3>
            <p
              style={{ color: "#dfc27c" }}
              className="leading-relaxed opacity-80"
            >
              Your neighborhood coffee sanctuary, serving exceptional brews and
              creating memorable moments since 2018.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#dfc27c" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3" style={{ color: "#dfc27c" }}>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <MapPin className="w-5 h-5" style={{ color: "#dfc27c" }} />
                123 Coffee Street, Downtown, City
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <Phone className="w-5 h-5" style={{ color: "#dfc27c" }} />
                (94) 123-4567
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="w-5 h-5" style={{ color: "#dfc27c" }} />
                hello@aromahaven.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#dfc27c" }}
            >
              Opening Hours
            </h4>
            <div style={{ color: "#dfc27c" }} className="space-y-2 opacity-80">
              <p>Mon - Fri: 7:00 AM - 8:00 PM</p>
              <p>Saturday: 8:00 AM - 9:00 PM</p>
              <p>Sunday: 8:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-8 text-center md:flex md:justify-between md:items-center"
          style={{ borderColor: "#8a4f34" }}
        >
          <p className="text-sm mb-4 md:mb-0" style={{ color: "#dfc27c" }}>
            © 2024 Aroma Haven. All rights reserved.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              style={{ color: "#f8f7f6ff" }}
              className="hover:opacity-75"
            >
              <Facebook />
            </a>
            <a
              href="#"
              style={{ color: "#f4f3f0ff" }}
              className="hover:opacity-75"
            >
              <Instagram />
            </a>
            <a
              href="#"
              style={{ color: "#f9f7f4ff" }}
              className="hover:opacity-75"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
