"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/Logo_white.png";

export default function Footer() {
  return (
    <footer className="bg-[#0F5132] text-white pt-12 pb-6 mt-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative z-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src= {logo}
              alt="logo"
              width={100}
              height={100}
              className="w-50 h-25"
            />
            
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Providing safe, comfortable, and affordable transport services
            for Umrah pilgrims and travelers. Available anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#20C997] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Taxi Details", path: "/taxi-details" },
              { name: "Pricing", path: "/pricing" },
              { name: "Booking", path: "/booking" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="hover:text-[#20C997] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#20C997] mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#20C997] mt-1" />
              <span>123 Al Haram St, Makkah, Saudi Arabia</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="text-[#20C997] mt-1" />
              <span>+92 318 3329 576</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-[#20C997] mt-1" />
              <span>rihlatalfakhama@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social & WhatsApp */}
        <div>
          <h3 className="text-lg font-semibold text-[#20C997] mb-4">Connect With Us</h3>
          <div className="flex gap-4 text-xl mb-4">
            <a href="https://www.facebook.com/@rihlatalfakhama" className="hover:text-[#20C997] transition-colors" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/@rihlatalfakhama" className="hover:text-[#20C997] transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/@rihlatalfakhama" className="hover:text-[#20C997] transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@rihlatalfakhama" className="hover:text-[#20C997] transition-colors" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>

          <a
            href="https://wa.me/16469804748?text=Hello!%20I%20would%20like%20to%20book%20a%20taxi."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-[#20b357] transition text-sm w-fit"
          >
            <FaPhone className="text-lg" />
            Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} UMRAH TAXI. All Rights Reserved.
      </div>
    </footer>
  );
}
