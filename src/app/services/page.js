"use client";

import { motion } from "framer-motion";
import { 
  FaCar, 
  FaHotel, 
  FaMapMarkedAlt, 
  FaKaaba, 
  FaHandsHelping,
  FaShieldAlt,
  FaClock,
  FaStar 
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "luxury-transportation",
    title: "Luxury Transportation",
    description:
      "Our MAIN SERVICE - Modern fleet including GMCs, Lexus, Hyundai H1, and Coaster Buses for all your travel needs.",
    page: "/services/luxury-transportation",
    icon: FaCar,
    featured: true,
    badge: "PRIMARY SERVICE",
  },
  {
    id: "ziyarat-guided-tours",
    title: "Ziyarat & Guided Tours",
    description:
      "Organized trips to sacred sites in Makkah, Madinah, and Taif with experienced guides.",
    page: "/services/ziyarat-guided-tours",
    icon: FaMapMarkedAlt,
    featured: false,
  },
  {
    id: "hotel-reservations",
    title: "Hotel Reservations",
    description:
      "Luxury and budget-friendly hotels near Haram Makkah and Masjid-e-Nabawi.",
    page: "/services/hotel-reservations",
    icon: FaHotel,
    featured: false,
  },
  {
    id: "pilgrimage-assistance",
    title: "Pilgrimage Assistance",
    description:
      "Complete support for Hajj and Umrah including bookings, transfers, and guided tours.",
    page: "/services/pilgrimage-assistance",
    icon: FaHandsHelping,
    featured: false,
  },
  {
    id: "umrah-hajj-packages",
    title: "Umrah & Hajj Packages",
    description:
      "Complete arrangements from visa processing to accommodation and transportation.",
    page: "/services/umrah-hajj-packages",
    icon: FaKaaba,
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#ad8f60]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-[#0F5132]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F5132] mb-4">
            Our Core Services
          </h1>
          <p className="text-lg text-[#5f4b32] max-w-3xl mx-auto leading-relaxed">
            Professional transportation and pilgrimage services for a comfortable and spiritually fulfilling journey.
          </p>
        </motion.div>

        {/* Featured Service - Transportation (HERO) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-[#0F5132] to-[#198754] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 bg-[#ad8f60] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 z-10">
              <FaStar /> PRIMARY SERVICE
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-4 rounded-2xl">
                    <FaCar className="text-4xl" />
                  </div>
                  <h2 className="text-4xl font-bold">Luxury Transportation</h2>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed">
                  Our main focus and specialty! We provide quality transportation services with a modern fleet including GMCs, Lexus, Hyundai H1, and Coaster Buses. Perfect for airport transfers, Ziyarat tours, and intercity travel.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                    <FaShieldAlt className="text-3xl mb-2" />
                    <p className="text-sm font-semibold">Safe & Secure</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
                    <FaClock className="text-3xl mb-2" />
                    <p className="text-sm font-semibold">24/7 Available</p>
                  </div>
                </div>

                <Link
                  href="/services/luxury-transportation"
                  className="inline-block bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Fleet →
                </Link>
              </div>

              {/* Right Image */}
              <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/gmc.png"
                  alt="Luxury Transportation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.filter(svc => !svc.featured).map((svc, index) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={svc.page}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0F5132]/10 hover:border-[#ad8f60] hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] p-4 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <Icon className="text-3xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#0F5132] mb-2 group-hover:text-[#ad8f60] transition-colors">
                          {svc.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-[#5f4b32] leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    <div className="flex items-center text-[#ad8f60] font-semibold group-hover:gap-3 gap-2 transition-all">
                      Learn More 
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-[#0F5132]/10"
        >
          <h2 className="text-3xl font-bold text-[#0F5132] text-center mb-8">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-2">Safety First</h3>
              <p className="text-[#5f4b32]">Professional drivers and well-maintained vehicles</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-2">Excellent Quality</h3>
              <p className="text-[#5f4b32]">Luxury vehicles with modern amenities</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-2">24/7 Support</h3>
              <p className="text-[#5f4b32]">Round-the-clock customer assistance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
