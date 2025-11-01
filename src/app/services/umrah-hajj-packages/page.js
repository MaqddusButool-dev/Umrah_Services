"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaKaaba,
  FaMosque,
  FaCar,
  FaHotel,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaWhatsapp,
  FaPassport,
  FaPlane,
  FaUtensils,
  FaUserTie,
  FaUmbrella,
  FaUsers,
  FaMoon,
} from "react-icons/fa";

const packages = [
  {
    id: 1,
    name: "Economy Umrah Package",
    type: "Umrah",
    duration: "7 Days / 6 Nights",
    price: "Starting from SAR 3,500",
    icon: FaKaaba,
    iconColor: "from-emerald-500 to-emerald-600",
    description: "Affordable Umrah package with all essential services for a blessed journey.",
    included: [
      "Umrah visa processing",
      "3-star hotel near Haram (500m)",
      "Airport transfers",
      "Basic Ziyarat tour",
      "24/7 support",
      "Umrah kit",
    ],
    accommodation: "3-Star Hotel: 500m from Haram",
    transport: "Shared transportation",
    popular: false,
  },
  {
    id: 2,
    name: "Standard Umrah Package",
    type: "Umrah",
    duration: "10 Days / 9 Nights",
    price: "Starting from SAR 6,000",
    icon: FaStar,
    iconColor: "from-[#ad8f60] to-[#d4a574]",
    description: "Complete Umrah experience with comfortable accommodation and guided tours.",
    included: [
      "Umrah visa processing",
      "4-star hotel near Haram (300m)",
      "Private airport transfers",
      "Makkah & Madinah Ziyarat",
      "Professional guide",
      "SIM card included",
      "Quality Umrah kit",
      "Daily breakfast",
    ],
    accommodation: "4-Star Hotel: 300m from Haram",
    transport: "Private car",
    popular: true,
  },
  {
    id: 3,
    name: "Deluxe Umrah Package",
    type: "Umrah",
    duration: "14 Days / 13 Nights",
    price: "Starting from SAR 12,000",
    icon: FaStar,
    iconColor: "from-amber-400 to-amber-600",
    description: "Luxury Umrah package with VIP services and 5-star accommodation.",
    included: [
      "Express visa processing",
      "5-star hotel with Haram view",
      "VIP airport reception",
      "Complete Ziyarat tours",
      "Personal guide",
      "All meals included",
      "Luxury Umrah kit",
      "Laundry service",
      "Taif day trip",
    ],
    accommodation: "5-Star Hotel: Haram view",
    transport: "Private luxury car",
    popular: false,
  },
  {
    id: 4,
    name: "Hajj Package",
    type: "Hajj",
    duration: "20-25 Days",
    price: "Contact for Quote",
    icon: FaMosque,
    iconColor: "from-teal-500 to-teal-600",
    description: "Comprehensive Hajj package with complete guidance and excellent services.",
    included: [
      "Hajj visa processing",
      "Makkah hotel (near Haram)",
      "Mina quality tents",
      "Arafat accommodation",
      "Muzdalifah arrangements",
      "All transportation",
      "Expert Hajj guide",
      "All meals",
      "Medical support",
      "Ritual guidance",
    ],
    accommodation: "Quality accommodation throughout",
    transport: "Dedicated buses",
    popular: true,
  },
  {
    id: 5,
    name: "Family Umrah Package",
    type: "Umrah",
    duration: "12 Days / 11 Nights",
    price: "Custom Quote",
    icon: FaUsers,
    iconColor: "from-rose-500 to-rose-600",
    description: "Special family package with spacious accommodation and child-friendly services.",
    included: [
      "Family visa processing",
      "Suite accommodation",
      "Family airport transfers",
      "Kid-friendly meals",
      "Flexible Ziyarat schedule",
      "Stroller rental",
      "Family guide",
      "Emergency pediatric support",
    ],
    accommodation: "Family suites near Haram",
    transport: "Private family van",
    popular: false,
  },
  {
    id: 6,
    name: "Ramadan Special Package",
    type: "Umrah",
    duration: "15 Days",
    price: "Contact for Ramadan Rates",
    icon: FaMoon,
    iconColor: "from-indigo-500 to-indigo-600",
    description: "Experience the blessed month of Ramadan in the Holy Cities.",
    included: [
      "Ramadan visa",
      "Iftar & Suhoor arrangements",
      "Hotel near Haram",
      "Taraweeh prayer arrangements",
      "Laylatul Qadr special program",
      "Ramadan Umrah kit",
      "Dates & water supply",
      "27th night special access",
    ],
    accommodation: "Near Haram for easy access",
    transport: "Dedicated transport",
    popular: false,
  },
];

const features = [
  {
    icon: FaPassport,
    title: "Visa Processing",
    description: "We handle all visa requirements and documentation for hassle-free approval.",
  },
  {
    icon: FaHotel,
    title: "Quality Hotels",
    description: "Verified hotels close to Haram for convenient access to prayers.",
  },
  {
    icon: FaCar,
    title: "Transportation",
    description: "Comfortable vehicles with professional drivers for all transfers.",
  },
  {
    icon: FaUserTie,
    title: "Expert Guides",
    description: "Knowledgeable guides to assist you throughout your journey.",
  },
];

export default function UmrahHajjPackagesPage() {
  return (
    <section className="bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F5132] to-[#198754] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="mx-auto w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <FaKaaba className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Umrah & Hajj Packages
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Complete pilgrimage packages with visa, accommodation, transportation, and expert guidance for a spiritually fulfilling journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#packages"
                className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Packages
              </a>
              <a
                href="https://wa.me/03179369176"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20b357] transition-all duration-300 flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Book Package
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-12">
            What's Included in Our Packages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#0F5132]/10 text-center"
              >
                <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-lg text-[#0F5132] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#5f4b32] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packages */}
        <div id="packages" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0F5132] mb-4">
              Available Packages
            </h2>
            <p className="text-[#5f4b32] max-w-2xl mx-auto">
              Choose the package that best suits your needs and budget for a blessed journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  pkg.popular ? "border-[#ad8f60]" : "border-[#0F5132]/10"
                } hover:border-[#ad8f60] h-full flex flex-col relative`}>
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 bg-[#ad8f60] text-white px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                      <FaStar /> POPULAR
                    </div>
                  )}
                  
                  {/* Package Header */}
                  <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] p-8 text-white text-center">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${pkg.iconColor} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                      <pkg.icon className="text-3xl text-white" />
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                      {pkg.type}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex justify-center items-center gap-2 text-sm mb-2">
                      <FaClock />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-[#ad8f60] bg-white px-4 py-2 rounded-lg font-bold text-lg mt-3">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[#5f4b32] mb-4 leading-relaxed text-sm">
                      {pkg.description}
                    </p>

                    {/* Included Items */}
                    <div className="mb-4">
                      <h4 className="font-bold text-[#0F5132] mb-3 text-sm">Package Includes:</h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {pkg.included.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#0F5132]">
                            <FaCheckCircle className="text-[#198754] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accommodation & Transport */}
                    <div className="space-y-2 mb-6 text-xs">
                      <div className="flex items-start gap-2 text-[#5f4b32]">
                        <FaHotel className="text-[#ad8f60] mt-0.5" />
                        <span>{pkg.accommodation}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[#5f4b32]">
                        <FaCar className="text-[#ad8f60] mt-0.5" />
                        <span>{pkg.transport}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <a
                        href="https://wa.me/03179369176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full ${
                          pkg.popular
                            ? "bg-gradient-to-r from-[#ad8f60] to-[#d4a574]"
                            : "bg-gradient-to-r from-[#0F5132] to-[#198754]"
                        } text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all duration-300 shadow-md`}
                      >
                        Book This Package
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Packages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-[#0F5132]/10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0F5132] text-center mb-12">
            Why Choose Our Packages?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">All-Inclusive</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                Everything you need in one package - visa, hotel, transport, and guidance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Expert Support</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                Experienced guides and 24/7 support throughout your journey
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkedAlt className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Quality Service</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                Verified hotels, professional drivers, and carefully planned itineraries
              </p>
            </div>
          </div>
        </motion.div>

        {/* Customization Option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-[#F7F9F5] to-white rounded-3xl p-12 border-2 border-[#ad8f60] mb-16 text-center"
        >
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <FaUmbrella className="text-4xl text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-[#5f4b32] mb-6 max-w-2xl mx-auto">
            We can create a personalized package tailored to your specific requirements, group size, and budget.
          </p>
          <a
            href="https://wa.me/03179369176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ad8f60] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#927040] transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Request Custom Package
          </a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center bg-gradient-to-br from-[#0F5132] to-[#198754] rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Pilgrimage?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your Umrah or Hajj package today and embark on the spiritual journey of a lifetime
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/03179369176"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20b357] transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
