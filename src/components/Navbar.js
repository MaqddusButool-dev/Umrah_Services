"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../public/assets/images/Logo.png";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [mobileTaxiOpen, setMobileTaxiOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const whatsappNumber = "923179369176";

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
      if (!e.target.closest('.language-dropdown')) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const taxiOptions = [
    { name: "CAMERY 4 SEATER", path: "/taxi/camery-4-seater" },
    { name: "STARIA 7 SEATER", path: "/taxi/staria-7-seater" },
    { name: "GMC 7 SEATER", path: "/taxi/gmc-7-seater" },
    { name: "HIACE 10 SEATER", path: "/taxi/hiace-10-seater" },
    { name: "COASTER 17 SEATER", path: "/taxi/coaster-17-seater" },
    { name: "SONATA 4 SEATER", path: "/taxi/sonata-4-seater" },
    { name: "HYUNDAI H1 7 SEATER", path: "/taxi/hyundai-h1-7-seater" },
    { name: "CHEVROLET 7 SEATER", path: "/taxi/chevrolet-7-seater" },
  ];

  const serviceOptions = [
    { name: "ZIARAT SERVICES", path: "/services/ziarat-services" },
    { name: "AIRPORT TRANSFER", path: "/services/airport-transfer" },
    { name: "HOTEL RESERVATION", path: "/services/hotel-reservation" },
    { name: "PRIVATE TAXI", path: "/services/private-taxi" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full bg-green-900/70 font-sans relative z-50">
      {/* ---------- Top Bar ---------- */}
      <div className="bg-[#0F5132] text-white relative z-999">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 py-2 text-sm flex-wrap">
          <div className="flex items-center gap-4">
            <span className="bg-[#ad8f60] text-[#0F5132] font-semibold px-4 py-1 rounded-tr-lg rounded-bl-lg">
              Follow Us On
            </span>

            <div className="flex items-center gap-3 text-white text-lg">
              <a
                id="facebook-icon"
                href="https://www.facebook.com/@rihlatalfakhama"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#ad8f60] transition-colors"
              >
                <FaFacebookF />
              </a>

              <a
                id="twitter-icon"
                href="https://twitter.com/@rihlatalfakhama"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#ad8f60] transition-colors"
              >
                <FaTwitter />
              </a>

              <a
                id="instagram-icon"
                href="https://www.instagram.com/@rihlatalfakhama"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#ad8f60] transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                id="youtube-icon"
                href="https://www.youtube.com/@rihlatalfakhama"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#ad8f60] transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="hidden md:flex items-center gap-2">
              <div className="bg-[#ad8f60] text-[#0F5132] p-2 rounded-full">
                <FaEnvelope />
              </div>
              <span>rihlatalfakhama@gmail.com</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className="bg-[#ad8f60] text-[#0F5132] p-2 rounded-full">
                <FaPhone />
              </div>
              <span>+966 56 849 1331</span>
            </div>

            {/* Language dropdown */}
            <div className="relative z-9999 language-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguageOpen(!languageOpen);
                }}
                className="flex items-center gap-2 hover:text-[#ad8f60] transition-colors"
              >
                Language
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {languageOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-xl w-32 py-1 animate-fadeIn">
                  <ul>
                    <li 
                      onClick={() => setLanguageOpen(false)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors text-sm"
                    >
                      English
                    </li>
                    <li 
                      onClick={() => setLanguageOpen(false)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors text-sm"
                    >
                      Urdu
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <nav className="bg-white shadow-md shadow-[#0F5132]/20 relative z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="w-40 h-auto" priority />
          </Link>

          {/* ---------- Desktop Menu ---------- */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="transition hover:text-[#198754]"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Book Taxi Dropdown */}
            <li className="relative dropdown-container">
              <div className="flex items-center gap-1">
                <Link
                  href="/taxi"
                  className="text-[#0F5132] hover:text-[#ad8f60] font-medium transition-colors"
                >
                  Book Taxi Online
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdown("taxi");
                  }}
                  className="text-[#0F5132] hover:text-[#ad8f60] p-1"
                >
                  <FaChevronDown
                    className={`text-xs transition-transform ${
                      openDropdown === "taxi" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {openDropdown === "taxi" && (
                <ul className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl border border-[#0F5132]/10 min-w-[240px] py-2 z-50 animate-fadeIn">
                  {taxiOptions.map((taxi) => (
                    <li key={taxi.path}>
                      <Link
                        href={taxi.path}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-[#0F5132] hover:bg-[#F7F9F5] hover:text-[#ad8f60] transition-all duration-200 text-sm"
                      >
                        {taxi.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li className="relative dropdown-container">
              <div className="flex items-center gap-1">
                <Link 
                  href="/services" 
                  className="text-[#0F5132] hover:text-[#ad8f60] font-medium transition-colors"
                >
                  Services
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdown("services");
                  }}
                  className="text-[#0F5132] hover:text-[#ad8f60] p-1"
                >
                  <FaChevronDown
                    className={`text-xs transition-transform ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openDropdown === "services" && (
                <ul className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl border border-[#0F5132]/10 min-w-[220px] py-2 z-50 animate-fadeIn">
                  {serviceOptions.map((service) => (
                    <li key={service.path}>
                      <Link
                        href={service.path}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-[#0F5132] hover:bg-[#F7F9F5] hover:text-[#ad8f60] transition-all duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/cart"
                className="relative"
              >
                <button className="bg-gradient-to-r from-[#0F5132] to-[#198754] hover:from-[#ad8f60] hover:to-[#d4a574] text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  <FaShoppingCart className="text-base" />
                  <span>My Bookings</span>
                  {cartItems.length > 0 && (
                    <span className="bg-white text-[#0F5132] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ml-1 animate-pulse">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </Link>
            </li>

            <li>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-[#20b357] transition text-sm"
              >
                <FaWhatsapp />
                Book on WhatsApp
              </a>
            </li>
          </ul>

          {/* -------- Mobile Menu Button -------- */}
          <button
            className="lg:hidden text-2xl text-[#0F5132]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* -------- Mobile Menu -------- */}
        <div
          className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white/95 backdrop-blur-md shadow-2xl border-r-4 border-[#0F5132] z-50 transform transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#D1FAE5] bg-[#F7F9F5]">
            <Image src={logo} alt="logo" className="w-24 h-auto" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#0F5132] text-2xl"
            >
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-4 px-6 py-6 text-[#0F5132] font-semibold">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm transition hover:bg-[#D1FAE5]/70"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Book Taxi */}
            <li>
              <button
                onClick={() => setMobileTaxiOpen(!mobileTaxiOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#D1FAE5]/70"
              >
                Book Taxi Online
                <FaChevronDown
                  className={`transition-transform ${
                    mobileTaxiOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileTaxiOpen && (
                <ul className="pl-4 mt-1 space-y-1 text-sm font-normal">
                  {taxiOptions.map((taxi) => (
                    <li key={taxi.path}>
                      <Link
                        href={taxi.path}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-2 rounded-md hover:bg-[#D1FAE5]/50"
                      >
                        {taxi.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Services */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#D1FAE5]/70"
              >
                Services
                <FaChevronDown
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <ul className="pl-4 mt-1 space-y-1 text-sm font-normal">
                  {serviceOptions.map((service) => (
                    <li key={service.path}>
                      <Link
                        href={service.path}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-2 rounded-md hover:bg-[#D1FAE5]/50"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* My Bookings */}
          <div className="px-6 mb-4">
            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#0F5132] to-[#198754] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-[#ad8f60] hover:to-[#d4a574] transition-all duration-300 relative"
            >
              <FaShoppingCart className="text-xl" />
              <span className="font-semibold">My Bookings</span>
              {cartItems.length > 0 && (
                <span className="bg-white text-[#0F5132] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Language Dropdown */}
          <div className="px-6">
            <button
              onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)}
              className="w-full flex justify-between items-center bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-lg font-semibold hover:bg-[#D1FAE5]/50 transition"
            >
              Language
              <FaChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileLanguageOpen && (
              <div className="mt-2 bg-white rounded-lg shadow-md text-[#0F5132] border border-[#D1FAE5] overflow-hidden">
                <p className="px-4 py-2 hover:bg-[#D1FAE5]/50 cursor-pointer">
                  English
                </p>
                <p className="px-4 py-2 hover:bg-[#D1FAE5]/50 cursor-pointer">
                  Urdu
                </p>
              </div>
            )}
          </div>

          {/* WhatsApp */}
          <div className="px-6 py-6">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-3 rounded-full shadow hover:bg-[#20b357] transition w-full"
            >
              <FaWhatsapp className="text-lg" />
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
}

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaEnvelope,
//   FaPhone,
//   FaBars,
//   FaTimes,
//   FaWhatsapp,
//   FaShoppingCart,
//   FaChevronDown,
// } from "react-icons/fa";

// import logo from "@/assets/images/Logo.png";

// export default function Navbar() {
//   const [languageOpen, setLanguageOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
//   const [mobileTaxiOpen, setMobileTaxiOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   const whatsappNumber = "923179369176";

//   // Taxi menu with their own pages
// const taxiOptions = [
//   { name: "CAMERY 4 SEATER", path: "/taxi/camery-4-seater" },
//   { name: "STARIA 7 SEATER", path: "/taxi/staria-7-seater" },
//   { name: "GMC 7 SEATER", path: "/taxi/gmc-7-seater" },
//   { name: "HIACE 10 SEATER", path: "/taxi/hiace-10-seater" },
//   { name: "COASTER 17 SEATER", path: "/taxi/coaster-17-seater" },
//   { name: "SONATA 4 SEATER", path: "/taxi/sonata-4-seater" },
//   { name: "HYUNDAI H1 7 SEATER", path: "/taxi/hyundai-h1-7-seater" },
//   { name: "CHEVROLET 7 SEATER", path: "/taxi/chevrolet-7-seater" },
// ];

//   // Services menu with their own pages
// const serviceOptions = [
//   { name: "ZIARAT SERVICES", path: "/services/ziarat-services" },
//   { name: "AIRPORT TRANSFER", path: "/services/airport-transfer" },
//   { name: "HOTEL RESERVATION", path: "/services/hotel-reservation" },
//   { name: "PRIVATE TAXI", path: "/services/private-taxi" },
// ];

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const handleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <header className="w-full font-sans relative z-50">
//       {/* Top Bar */}
//       <div className="bg-[#0F5132] text-white relative z-[999]">
//         <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 py-2 text-sm flex-wrap">
//           <div className="flex items-center gap-4">
//             <span className="bg-[#ad8f60] text-[#0F5132] font-semibold px-4 py-1 rounded-tr-lg rounded-bl-lg">
//               Follow Us On
//             </span>
//             <div className="flex items-center gap-3 text-white text-lg">
//               <FaFacebookF className="cursor-pointer hover:text-[#ad8f60]" />
//               <FaTwitter className="cursor-pointer hover:text-[#ad8f60]" />
//               <FaInstagram className="cursor-pointer hover:text-[#ad8f60]" />
//               <FaYoutube className="cursor-pointer hover:text-[#ad8f60]" />
//             </div>
//           </div>

//           <div className="flex items-center gap-6 flex-wrap justify-center">
//             <div className="hidden md:flex items-center gap-2">
//               <div className="bg-[#ad8f60] text-[#0F5132] p-2 rounded-full">
//                 <FaEnvelope />
//               </div>
//               <span>umrahcarservice@gmail.com</span>
//             </div>

//             <div className="hidden md:flex items-center gap-2">
//               <div className="bg-[#ad8f60] text-[#0F5132] p-2 rounded-full">
//                 <FaPhone />
//               </div>
//               <span>+1 (777) 8888888888</span>
//             </div>

//             {/* Language dropdown */}
//             <div className="relative z-[9999]">
//               <button
//                 onClick={() => setLanguageOpen(!languageOpen)}
//                 className="flex items-center gap-2 hover:text-[#ad8f60]"
//               >
//                 Language
//                 <FaChevronDown
//                   className={`w-3 h-3 transition-transform ${
//                     languageOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {languageOpen && (
//                 <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-28">
//                   <ul>
//                     <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
//                       English
//                     </li>
//                     <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
//                       Urdu
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white shadow-md shadow-[#0F5132]/20 relative z-40">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 lg:px-8">
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={logo} alt="logo" width={160} style={{ height: "50px" }} priority />
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
//             {navLinks.map((link, index) => (
//               <li key={`${link.path}-${index}`}>
//                 <Link
//                   href={link.path}
//                   className="transition hover:text-[#198754]"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}

//             {/* Taxi Dropdown */}
//             <li className="relative">
//               <button
//                 onClick={() => handleDropdown("taxi")}
//                 className="flex items-center gap-1 text-[#0F5132] hover:text-[#ad8f60] font-semibold"
//               >
//                 Book Taxi Online
//                 <FaChevronDown
//                   className={`text-xs transition-transform ${
//                     openDropdown === "taxi" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openDropdown === "taxi" && (
//                 <ul className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg border border-[#0F5132]/10 min-w-[220px] py-2">
//                   {taxiOptions.map((taxi, index) => (
//                     <li key={`${taxi.path}-${index}`}>
//                       <Link
//                         href={taxi.path}
//                         className="block px-4 py-2 text-[#0F5132] hover:bg-[#F7F9F5] hover:text-[#ad8f60] transition"
//                       >
//                         {taxi.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             {/* Services Dropdown */}
//             <li className="relative">
//               <button
//                 onClick={() => handleDropdown("services")}
//                 className="flex items-center gap-1 text-[#0F5132] hover:text-[#ad8f60] font-semibold"
//               >
//                 Services
//                 <FaChevronDown
//                   className={`text-xs transition-transform ${
//                     openDropdown === "services" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openDropdown === "services" && (
//                 <ul className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg border border-[#0F5132]/10 min-w-[220px] py-2">
//                   {serviceOptions.map((service, index) => (
//                     <li key={`${service.path}-${index}`}>
//                       <Link
//                         href={service.path}
//                         className="block px-4 py-2 text-[#0F5132] hover:bg-[#F7F9F5] hover:text-[#ad8f60] transition"
//                       >
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link href="/cart" className="text-[#0F5132] hover:text-[#ad8f60]">
//                 <FaShoppingCart className="text-xl" />
//               </Link>
//             </li>

//             <li>
//               <a
//                 href={`https://wa.me/${whatsappNumber}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-[#20b357] transition text-sm"
//               >
//                 <FaWhatsapp />
//                 Book on WhatsApp
//               </a>
//             </li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-2xl text-[#0F5132]"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {/* ...keep mobile menu same, but map taxiOptions and serviceOptions to their path similarly */}
//       </nav>
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaEnvelope,
//   FaPhone,
//   FaBars,
//   FaTimes,
//   FaWhatsapp,
//   FaShoppingCart,
//   FaChevronDown,
// } from "react-icons/fa";

// import logo from "@/assets/images/Logo.png";

// export default function Navbar() {
//   const [languageOpen, setLanguageOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
//   const [mobileTaxiOpen, setMobileTaxiOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   const whatsappNumber = "923179369176";

//   const taxiOptions = [
//   { name: "CAMERY 4 SEATER", path: "/" },
//   { name: "STARIA 7 SEATER", path: "/" },
//   { name: "GMC 7 SEATER", path: "/" },
//   { name: "HIACE 10 SEATER", path: "/" },
//   { name: "COASTER 17 SEATER", path: "/" },
//   { name: "SONATA 4 SEATER", path: "/" },
//   { name: "HYUNDAI H1 7 SEATER", path: "/" },
//   { name: "CHEVROLET 7 SEATER", path: "/" },
// ];

//  const serviceOptions = [
//   { name: "ZIARAT SERVICES", path: "/" },
//   { name: "AIRPORT TRANSFER", path: "/" },
//   { name: "HOTEL RESERVATION", path: "/" },
//   { name: "PRIVATE TAXI", path: "/" },
// ];

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const handleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <header className="w-full bg-green-900/70 font-sans relative z-50">
//       {/* ---------- Top Bar ---------- */}
//       <div className="bg-[#0F5132] text-white relative z-[999]">
//         <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 py-2 text-sm flex-wrap">
//           <div className="flex items-center gap-4">
//             <span className="bg-[#ad8f60] text-[#0F5132] font-semibold px-4 py-1 rounded-tr-lg rounded-bl-lg">
//               Follow Us On
//             </span>
//             <div className="flex items-center gap-3 text-white text-lg">
//               <FaFacebookF className="cursor-pointer hover:text-[#ad8f60]" />
//               <FaTwitter className="cursor-pointer hover:text-[#ad8f60]" />
//               <FaInstagram className="cursor-pointer hover:text-[#ad8f60]" />
//               <FaYoutube className="cursor-pointer hover:text-[#ad8f60]" />
//             </div>
//           </div>

//           <div className="flex items-center gap-6 flex-wrap justify-center">
//             <div className="hidden md:flex items-center gap-2">
//               <div className="bg-[#ad8f60] text-[#0F5132] p-2 rounded-full">
//                 <FaEnvelope />
//               </div>
//               <span>umrahcarservice@gmail.com</span>
//             </div>

//             <div className="hidden md:flex items-center gap-2">
//               <div className="bg-[#ad8f60] text-[#0F5132] p-2 rounded-full">
//                 <FaPhone />
//               </div>
//               <span>+1 (777) 8888888888</span>
//             </div>

//             {/* Language dropdown */}
//             <div className="relative z-[9999]">
//               <button
//                 onClick={() => setLanguageOpen(!languageOpen)}
//                 className="flex items-center gap-2 hover:text-[#ad8f60]"
//               >
//                 Language
//                 <FaChevronDown
//                   className={`w-3 h-3 transition-transform ${
//                     languageOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {languageOpen && (
//                 <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-28">
//                   <ul>
//                     <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
//                       English
//                     </li>
//                     <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
//                       Urdu
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Main Navbar ---------- */}
//       <nav className="bg-white shadow-md shadow-[#0F5132]/20 relative z-40">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 lg:px-8">
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={logo} alt="logo" className="w-40 h-auto" priority />
//           </Link>

//           {/* ---------- Desktop Menu ---------- */}
//           <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
//             {navLinks.map((link) => (
//               <li key={link.path}>
//                 <Link
//                   href={link.path}
//                   className="transition hover:text-[#198754]"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}

//             {/* Book Taxi Dropdown */}
//             <li className="relative">
//               <button
//                 onClick={() => handleDropdown("taxi")}
//                 className="flex items-center gap-1 text-[#0F5132] hover:text-[#ad8f60]"
//               >
//                 Book Taxi Online
//                 <FaChevronDown
//                   className={`text-xs transition-transform ${
//                     openDropdown === "taxi" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openDropdown === "taxi" && (
//                 <ul className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg border border-[#0F5132]/10 min-w-[220px]">
//                   {taxiOptions.map((taxi) => (
//                     <li key={taxi.path}>
//                       <Link
//                         href={taxi.path}
//                         className="block px-4 py-2 text-[#0F5132] hover:bg-[#F7F9F5] hover:text-[#ad8f60]"
//                       >
//                         {taxi.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             {/* Services Dropdown */}
//             <li className="relative">
//               <button
//                 onClick={() => handleDropdown("services")}
//                 className="flex items-center gap-1 text-[#0F5132] hover:text-[#ad8f60]"
//               >
//                 Services
//                 <FaChevronDown
//                   className={`text-xs transition-transform ${
//                     openDropdown === "services" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openDropdown === "services" && (
//                 <ul className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg border border-[#0F5132]/10 min-w-[220px]">
//                   {serviceOptions.map((service) => (
//                     <li key={service.path}>
//                       <Link
//                         href={service.path}
//                         className="block px-4 py-2 text-[#0F5132] hover:bg-[#F7F9F5] hover:text-[#ad8f60]"
//                       >
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link href="/cart" className="text-[#0F5132] hover:text-[#ad8f60]">
//                 <FaShoppingCart className="text-xl" />
//               </Link>
//             </li>

//             <li>
//               <a
//                 href={`https://wa.me/${whatsappNumber}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-[#20b357] transition text-sm"
//               >
//                 <FaWhatsapp />
//                 Book on WhatsApp
//               </a>
//             </li>
//           </ul>

//           {/* -------- Mobile Menu Button -------- */}
//           <button
//             className="lg:hidden text-2xl text-[#0F5132]"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* -------- Mobile Menu -------- */}
//         <div
//           className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white/95 backdrop-blur-md shadow-2xl border-r-4 border-[#0F5132] z-50 transform transition-transform duration-500 ease-in-out ${
//             menuOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex justify-between items-center px-6 py-4 border-b border-[#D1FAE5] bg-[#F7F9F5]">
//             <Image src={logo} alt="logo" className="w-24" priority />
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="text-[#0F5132] text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>

//           <ul className="flex flex-col gap-4 px-6 py-6 text-[#0F5132] font-semibold">
//             {navLinks.map((link) => (
//               <li key={link.path}>
//                 <Link
//                   href={link.path}
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-3 py-2 rounded-md text-sm transition hover:bg-[#D1FAE5]/70"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}

//             {/* Mobile Dropdowns */}
//             <li>
//               <button
//                 onClick={() => setMobileTaxiOpen(!mobileTaxiOpen)}
//                 className="w-full flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#D1FAE5]/70"
//               >
//                 Book Taxi Online
//                 <FaChevronDown
//                   className={`transition-transform ${
//                     mobileTaxiOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {mobileTaxiOpen && (
//                 <ul className="pl-4 mt-1 space-y-1 text-sm font-normal">
//                   {taxiOptions.map((taxi) => (
//                     <li key={taxi.path}>
//                       <Link
//                         href={taxi.path}
//                         onClick={() => setMenuOpen(false)}
//                         className="block px-3 py-2 rounded-md hover:bg-[#D1FAE5]/50"
//                       >
//                         {taxi.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>

//             <li>
//               <button
//                 onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                 className="w-full flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#D1FAE5]/70"
//               >
//                 Services
//                 <FaChevronDown
//                   className={`transition-transform ${
//                     mobileServicesOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {mobileServicesOpen && (
//                 <ul className="pl-4 mt-1 space-y-1 text-sm font-normal">
//                   {serviceOptions.map((service) => (
//                     <li key={service.path}>
//                       <Link
//                         href={service.path}
//                         onClick={() => setMenuOpen(false)}
//                         className="block px-3 py-2 rounded-md hover:bg-[#D1FAE5]/50"
//                       >
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           </ul>

//           {/* Cart & Language & WhatsApp */}
//           <div className="px-6 mb-4">
//             <Link
//               href="/cart"
//               onClick={() => setMenuOpen(false)}
//               className="flex items-center justify-center gap-2 bg-[#0F5132] text-white px-4 py-3 rounded-full shadow hover:bg-[#ad8f60] transition"
//             >
//               <FaShoppingCart className="text-lg" />
//               View Cart
//             </Link>
//           </div>

//           <div className="px-6">
//             <button
//               onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)}
//               className="w-full flex justify-between items-center bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-lg font-semibold hover:bg-[#D1FAE5]/50 transition"
//             >
//               Language
//               <FaChevronDown
//                 className={`w-4 h-4 transition-transform ${
//                   mobileLanguageOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             {mobileLanguageOpen && (
//               <div className="mt-2 bg-white rounded-lg shadow-md text-[#0F5132] border border-[#D1FAE5] overflow-hidden">
//                 <p className="px-4 py-2 hover:bg-[#D1FAE5]/50 cursor-pointer">
//                   English
//                 </p>
//                 <p className="px-4 py-2 hover:bg-[#D1FAE5]/50 cursor-pointer">
//                   Urdu
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="px-6 py-6">
//             <a
//               href={`https://wa.me/${whatsappNumber}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-3 rounded-full shadow hover:bg-[#20b357] transition w-full"
//             >
//               <FaWhatsapp className="text-lg" />
//               Book on WhatsApp
//             </a>
//           </div>
//         </div>

//         {menuOpen && (
//           <div
//             className="fixed inset-0 bg-black/40 z-40"
//             onClick={() => setMenuOpen(false)}
//           ></div>
//         )}
//       </nav>
//     </header>
//   );
// }
